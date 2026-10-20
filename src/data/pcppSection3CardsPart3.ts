import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 3: GUI PROGRAMMING (TKINTER) (Part 3: Cards 76 to 100)
 * - Chapter 3.4: Event Handling: Propagation, Virtual Events, Bind Levels (Cards 76 to 80)
 * - Chapter 3.5: Variables, Menus, Dialogs & Messageboxes (Cards 81 to 100)
 */
export const pcppSection3CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.4 (CONT): EVENT PROPAGATION & VIRTUAL EVENTS (Cards 76 to 80)
  // =========================================================================
  {
    id: 'pcpp-s3-fc-076',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Stopping event propagation by returning "break"',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you prevent Tkinter’s default class-level behavior (such as an Entry typing characters) from executing for an event?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root)
entry.pack()

def filter_digits_only(event):
    # If the typed character is NOT a digit, return "break"
    # to discard the event and prevent it from reaching standard Entry handler
    if not event.char.isdigit():
        return "break"

entry.bind("<Key>", filter_digits_only)
print('Return string "break" halts event propagation')
root.destroy()`,
    stdoutExpected: 'Return string "break" halts event propagation',
    explanationTitle: 'Halting Event Propagation with "break"',
    explanationText:
      'Tkinter processes events across multiple binding levels: widget-level, class-level, and application-level (bind_all). If an event handler returns the exact string "break", Tkinter immediately aborts further propagation of that event to higher-level or default widget class handlers.',
    complexityInfo: 'High-frequency exam trap: returning False does NOT stop propagation; only "break" does',
  },
  {
    id: 'pcpp-s3-fc-077',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Unbinding event handlers with widget.unbind()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you remove an existing event binding from a Tkinter widget?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="One-Time Action")

def one_time(event):
    print("Action executed once")
    # Unbind future occurrences of Button-1:
    btn.unbind("<Button-1>")

btn.bind("<Button-1>", one_time)
btn.event_generate("<Button-1>")
# Second trigger will not execute one_time:
btn.event_generate("<Button-1>")
root.destroy()`,
    stdoutExpected: 'Action executed once',
    explanationTitle: 'widget.unbind() Syntax',
    explanationText:
      'widget.unbind(sequence, funcid=None) removes the binding for the given event sequence. Calling unbind(sequence) deletes all handlers tied to that sequence on the widget, preventing future callback invocations.',
    complexityInfo: 'PCPP 3.4 Dynamic event unbinding',
  },
  {
    id: 'pcpp-s3-fc-078',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Class-level event binding with widget.bind_class()',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you bind an event to ALL instances of a widget class (e.g. all Entry widgets) across the application?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
e1 = tk.Entry(root)
e2 = tk.Entry(root)

# bind_class binds to all widgets of that Tcl class name ("Entry", "Button", "Text")
root.bind_class("Entry", "<FocusIn>", lambda e: print("An Entry gained focus"))

print("Class-level binding registered for all Entry widgets")
root.destroy()`,
    stdoutExpected: 'Class-level binding registered for all Entry widgets',
    explanationTitle: 'Class-Level Binding via bind_class()',
    explanationText:
      'widget.bind_class(class_name, sequence, handler) binds an event sequence to every widget sharing that widget class name (such as "Entry", "Button", "Text", or "Label"). It is ideal for applying universal application-wide styling or behavior across all widgets of that type.',
    complexityInfo: 'PCPP 3.4 Binding hierarchy levels',
  },
  {
    id: 'pcpp-s3-fc-079',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Application-wide event binding with widget.bind_all()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you capture an event (such as pressing F1 for Help) globally anywhere in the application?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# bind_all registers the event across EVERY widget in the application:
root.bind_all("<F1>", lambda e: print("Global Help invoked"))
print("bind_all registered for global hotkey")
root.destroy()`,
    stdoutExpected: 'bind_all registered for global hotkey',
    explanationTitle: 'Global Binding with bind_all()',
    explanationText:
      'widget.bind_all(sequence, handler) attaches the callback to all widgets in the application. It is primarily used for global keyboard shortcuts and application accelerators, such as F1 for Help, Ctrl+Q for Quit, or Escape to cancel operations.',
    complexityInfo: 'PCPP 3.4 Global hotkeys',
  },
  {
    id: 'pcpp-s3-fc-080',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Virtual events syntax and event_generate()',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the syntax for custom virtual events in Tkinter, and how are they programmatically triggered?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
received = False

def on_data_ready(event):
    global received
    received = True

# Virtual events MUST be enclosed in double angle brackets <<Name>>:
root.bind("<<DataProcessed>>", on_data_ready)

# Programmatically generate the event:
root.event_generate("<<DataProcessed>>")
print("Virtual event received:", received)
root.destroy()`,
    stdoutExpected: 'Virtual event received: True',
    explanationTitle: 'Virtual Events and event_generate()',
    explanationText:
      'Virtual events represent user-defined or high-level abstract events and MUST be enclosed in double angle brackets (e.g. "<<Copied>>", "<<DataProcessed>>"). They are triggered programmatically using widget.event_generate("<<Name>>", **data). Built-in virtual events include <<Cut>>, <<Copy>>, <<Paste>>, and <<ListboxSelect>>.',
    complexityInfo: 'Exam trap: virtual events use double angle brackets <<...>>',
  },

  // =========================================================================
  // CHAPTER 3.5: VARIABLES, MENUS, DIALOGS & MESSAGEBOXES (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcpp-s3-fc-081',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Tkinter variable wrapper classes (StringVar, IntVar, DoubleVar, BooleanVar)',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What are the 4 standard Tkinter control variable classes, and why cannot regular Python primitives be used for data binding?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
s = tk.StringVar(value="text")
i = tk.IntVar(value=42)
d = tk.DoubleVar(value=3.14)
b = tk.BooleanVar(value=True)

print(type(s.get()), type(i.get()), type(d.get()), type(b.get()))
root.destroy()`,
    stdoutExpected: "<class 'str'> <class 'int'> <class 'float'> <class 'bool'>",
    explanationTitle: 'Tkinter Variable Wrapper Classes',
    explanationText:
      'Regular Python variables cannot be passed by reference to Tcl/Tk. Tkinter provides 4 wrapper classes: StringVar, IntVar, DoubleVar, and BooleanVar. They maintain two-way synchronization between Python and the underlying Tcl variable store, enabling widgets to reactively update when the variable changes.',
    complexityInfo: 'PCPP 3.5 Control variables foundation',
  },
  {
    id: 'pcpp-s3-fc-082',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Two-way data binding: textvariable and variable options',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you bind a StringVar to an Entry or Label so modifying either updates the other automatically?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
name_var = tk.StringVar(value="Initial")
entry = tk.Entry(root, textvariable=name_var)
lbl = tk.Label(root, textvariable=name_var)

# Updating variable updates both widgets automatically:
name_var.set("Updated Name")
print("Entry contains:", entry.get())
print("Label textvariable:", lbl.cget("textvariable") != "")
root.destroy()`,
    stdoutExpected: "Entry contains: Updated Name\nLabel textvariable: True",
    explanationTitle: 'Two-Way Data Binding with textvariable',
    explanationText:
      'Passing textvariable=var to an Entry, Label, or Button links the widget display to the Tkinter variable. Modifying the variable via var.set() instantly updates the widget, and user typing inside the Entry immediately updates the variable.',
    complexityInfo: 'PCPP 3.5 Reactive widget synchronization',
  },
  {
    id: 'pcpp-s3-fc-083',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Tkinter variable methods: get() and set()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you read from and write to a Tkinter variable instance?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
counter = tk.IntVar(value=10)

# Mutate:
counter.set(counter.get() + 5)
# Read:
val = counter.get()
print("Counter value:", val)
root.destroy()`,
    stdoutExpected: 'Counter value: 15',
    explanationTitle: 'var.get() and var.set()',
    explanationText:
      'Tkinter variables do not use assignment operators (var = val overwrites the Python reference). Instead, values are read using var.get() and updated using var.set(new_value). An IntVar.get() returns an int, DoubleVar.get() returns a float, and BooleanVar.get() returns a bool.',
    complexityInfo: 'PCPP 3.5 Variable mutation rule',
  },
  {
    id: 'pcpp-s3-fc-084',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Variable change observation with var.trace_add()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you attach an observer callback to execute whenever a Tkinter variable is modified?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
var = tk.StringVar()
log = []

def on_write(var_name, index, mode):
    log.append(f"Written: {var.get()}")

# trace_add modes: "write", "read", "unset" (replaces legacy trace("w", ...))
trace_id = var.trace_add("write", on_write)
var.set("Alpha")
var.set("Beta")
print("Trace log:", log)
root.destroy()`,
    stdoutExpected: "Trace log: ['Written: Alpha', 'Written: Beta']",
    explanationTitle: 'var.trace_add() Observer Pattern',
    explanationText:
      'var.trace_add(mode, callback) registers an observer callback that triggers whenever the variable is accessed or modified. The mode parameter accepts "write" (value changed via set() or typing), "read" (value read via get()), or "unset" (variable destroyed). Note: trace_add() replaces the deprecated trace() method.',
    complexityInfo: 'PCPP 3.5 Variable tracing modern API',
  },
  {
    id: 'pcpp-s3-fc-085',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Signature and parameters of a variable trace callback',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What 3 arguments are passed by Tkinter to a variable trace callback function?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
var = tk.StringVar()

def trace_callback(var_name, index, mode):
    # 1. var_name: internal Tcl variable name string (e.g. 'PY_VAR0')
    # 2. index: element index if variable is an array (empty string '' for scalars)
    # 3. mode: operation mode that triggered trace ('write', 'read', 'unset')
    print(f"Mode: {mode}, Index empty: {index == ''}")

var.trace_add("write", trace_callback)
var.set("Hello")
root.destroy()`,
    stdoutExpected: 'Mode: write, Index empty: True',
    explanationTitle: 'Trace Callback Signature (name, index, mode)',
    explanationText:
      'Tkinter passes exactly three string arguments to trace callbacks: 1) the internal Tcl variable name, 2) the index string (empty for scalar variables), and 3) the operation mode ("write", "read", or "unset"). To access the new value inside the callback, call var.get() directly on the Python variable object.',
    complexityInfo: 'Exam trap: trace callbacks require 3 positional parameters',
  },
  {
    id: 'pcpp-s3-fc-086',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Menu bar construction and attaching with root.config(menu=menubar)',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How is a top-level menu bar created and attached to the root window in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Step 1: Create a Menu widget
menubar = tk.Menu(root)

# Step 2: Attach it to root using the menu configuration option:
root.config(menu=menubar)

print("Menu attached to root:", root.cget("menu") != "")
root.destroy()`,
    stdoutExpected: 'Menu attached to root: True',
    explanationTitle: 'Menu Bar Attachment',
    explanationText:
      'A menu bar is created via menubar = tk.Menu(root) and attached to the window using root.config(menu=menubar). It is NEVER placed using pack(), grid(), or place(); the OS window manager specifically places the menu bar along the top window border or macOS top system bar.',
    complexityInfo: 'Exam trap: menu bars are attached via root.config(menu=...), not pack()',
  },
  {
    id: 'pcpp-s3-fc-087',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Cascading submenus with menubar.add_cascade()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you create a dropdown submenu (e.g. "File" or "Edit") on a menu bar?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
menubar = tk.Menu(root)
root.config(menu=menubar)

# Create submenu:
file_menu = tk.Menu(menubar, tearoff=0)
file_menu.add_command(label="New File", command=lambda: print("New"))

# Attach submenu to menubar via add_cascade:
menubar.add_cascade(label="File", menu=file_menu)
print("File cascade menu configured")
root.destroy()`,
    stdoutExpected: 'File cascade menu configured',
    explanationTitle: 'Cascading Submenus via add_cascade()',
    explanationText:
      'Dropdown menus are instances of tk.Menu attached to the main menubar using menubar.add_cascade(label="File", menu=file_menu). Submenus can also be nested inside other submenus by cascading from another child menu.',
    complexityInfo: 'PCPP 3.5 Menu hierarchy',
  },
  {
    id: 'pcpp-s3-fc-088',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Menu items: add_command() and add_separator()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you add clickable action items and dividing lines to a menu?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
edit_menu = tk.Menu(root, tearoff=0)

edit_menu.add_command(label="Cut", command=lambda: None)
edit_menu.add_command(label="Copy", command=lambda: None)
# Add dividing line:
edit_menu.add_separator()
edit_menu.add_command(label="Preferences", command=lambda: None)

print("Menu item count:", edit_menu.index("end") + 1)
root.destroy()`,
    stdoutExpected: 'Menu item count: 4',
    explanationTitle: 'Menu Items and Separators',
    explanationText:
      'menu.add_command(label="Title", command=callable) adds a clickable item that invokes the callback when selected. menu.add_separator() inserts a thin horizontal divider line to visually group related commands.',
    complexityInfo: 'PCPP 3.5 Menu item addition',
  },
  {
    id: 'pcpp-s3-fc-089',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Tear-off menus and the tearoff=0 option',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'Why do Tkinter dropdown menus display a dashed line at the top by default, and how is it disabled?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Default tearoff is 1, creating a dashed line that lets user "tear off" menu into a floating window
menu_with_tearoff = tk.Menu(root)
print("Default tearoff:", menu_with_tearoff.cget("tearoff"))

# Clean modern menu disables tearoff:
clean_menu = tk.Menu(root, tearoff=0)
print("Disabled tearoff:", clean_menu.cget("tearoff"))
root.destroy()`,
    stdoutExpected: "Default tearoff: 1\nDisabled tearoff: 0",
    explanationTitle: 'Tear-Off Menu Option (tearoff=0)',
    explanationText:
      'By default in Tkinter, menus have tearoff=1. This displays a dashed line at index 0 allowing users to click and detach the menu into a separate floating window. In modern GUI design, this is almost always suppressed by setting tearoff=0 on every child tk.Menu.',
    complexityInfo: 'Frequent exam question regarding tearoff=0',
  },
  {
    id: 'pcpp-s3-fc-090',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Check and Radio menu items (add_checkbutton, add_radiobutton)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you create toggleable checkbox and mutually exclusive radio items inside a menu?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
view_menu = tk.Menu(root, tearoff=0)

show_line_nums = tk.BooleanVar(value=True)
theme_var = tk.StringVar(value="dark")

# Add toggle checkbox:
view_menu.add_checkbutton(label="Line Numbers", variable=show_line_nums)

# Add mutually exclusive radio options:
view_menu.add_radiobutton(label="Dark Theme", variable=theme_var, value="dark")
view_menu.add_radiobutton(label="Light Theme", variable=theme_var, value="light")

print("Menu check and radio items added")
root.destroy()`,
    stdoutExpected: 'Menu check and radio items added',
    explanationTitle: 'Checkbutton and Radiobutton Menu Items',
    explanationText:
      'menu.add_checkbutton(label=..., variable=...) creates a menu item with an active checkmark toggled via a BooleanVar or IntVar. menu.add_radiobutton(label=..., variable=..., value=...) creates radio items that share a variable and display a dot next to the active choice.',
    complexityInfo: 'PCPP 3.5 Stateful menu items',
  },
  {
    id: 'pcpp-s3-fc-091',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'Context popup menus with menu.tk_popup() and menu.post()',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you trigger a context (popup) menu at the mouse cursor on right click?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
popup = tk.Menu(root, tearoff=0)
popup.add_command(label="Cut")
popup.add_command(label="Copy")

def show_context_menu(event):
    # event.x_root, event.y_root provide screen coordinates
    # tk_popup displays the menu and handles dismissal
    popup.tk_popup(event.x_root, event.y_root)

root.bind("<Button-3>", show_context_menu)
print("Right-click context menu bound successfully")
root.destroy()`,
    stdoutExpected: 'Right-click context menu bound successfully',
    explanationTitle: 'Context Popup Menus (tk_popup)',
    explanationText:
      'popup.tk_popup(x_root, y_root) posts a menu at the specified absolute screen coordinates and sets a grab so that clicking outside dismisses the menu. It is typically invoked inside a <Button-3> (right-click) event handler using event.x_root and event.y_root.',
    complexityInfo: 'PCPP 3.5 Context menu pattern',
  },
  {
    id: 'pcpp-s3-fc-092',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.messagebox: showinfo, showwarning, and showerror',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What do messagebox.showinfo(), showwarning(), and showerror() return upon dismissal?',
    codeSnippet: `import tkinter as tk
from tkinter import messagebox

# messagebox functions signature:
# showinfo(title, message)
# showwarning(title, message)
# showerror(title, message)
# When the user clicks "OK", each returns the string 'ok'.

print("Information dialogs return string: 'ok'")`,
    stdoutExpected: "Information dialogs return string: 'ok'",
    explanationTitle: 'Standard Notification Messageboxes',
    explanationText:
      'tkinter.messagebox provides standard modal alert dialogs: showinfo(), showwarning(), and showerror(). They each accept (title, message) strings, present the OS-native icon and sound, and return the string "ok" once the user dismisses the dialog.',
    complexityInfo: 'PCPP 3.5 Standard messageboxes',
  },
  {
    id: 'pcpp-s3-fc-093',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.messagebox.askyesno(): return type and values',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does tkinter.messagebox.askyesno(title, message) return when user selects Yes versus No?',
    codeSnippet: `from tkinter import messagebox

# askyesno:
# User clicks "Yes" -> returns True
# User clicks "No"  -> returns False

print("askyesno returns boolean True or False")`,
    stdoutExpected: 'askyesno returns boolean True or False',
    explanationTitle: 'messagebox.askyesno Return Type',
    explanationText:
      'messagebox.askyesno(title, message) displays a modal dialog with Yes and No buttons. Clicking Yes returns the Python boolean True; clicking No or closing the window returns False.',
    complexityInfo: 'PCPP 3.5 Confirmation dialogs',
  },
  {
    id: 'pcpp-s3-fc-094',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.messagebox.askquestion(): return type and values',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'CRITICAL TRAP: How does the return value of askquestion() differ from askyesno()?',
    codeSnippet: `from tkinter import messagebox

# TRAP COMPARISON:
# askyesno() returns bool: True or False
# askquestion() returns str: 'yes' or 'no'

# WRONG: if messagebox.askquestion(...):  <- 'no' evaluates to True in Python!
# CORRECT: if messagebox.askquestion(...) == 'yes':
print("askquestion returns string 'yes' or 'no' (NOT a boolean!)")`,
    stdoutExpected: "askquestion returns string 'yes' or 'no' (NOT a boolean!)",
    explanationTitle: 'askquestion vs. askyesno Return Trap',
    explanationText:
      'This is one of the most famous traps on Python certification exams: askyesno() returns a boolean (True / False), whereas askquestion() returns a string ("yes" / "no"). Writing "if askquestion():" is a bug because non-empty string "no" is truthy in Python!',
    complexityInfo: 'Critical PCPP-32-10x exam trap: askquestion returns str ("yes"/"no")',
  },
  {
    id: 'pcpp-s3-fc-095',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.messagebox: askokcancel and askretrycancel',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What do messagebox.askokcancel() and askretrycancel() return?',
    codeSnippet: `from tkinter import messagebox

# askokcancel(title, message):
# OK -> True, Cancel -> False

# askretrycancel(title, message):
# Retry -> True, Cancel -> False

print("Both askokcancel and askretrycancel return boolean True / False")`,
    stdoutExpected: 'Both askokcancel and askretrycancel return boolean True / False',
    explanationTitle: 'askokcancel and askretrycancel Return Types',
    explanationText:
      'messagebox.askokcancel() displays "OK" and "Cancel" buttons; messagebox.askretrycancel() displays "Retry" and "Cancel" buttons. Both functions return boolean True when the affirmative button is pressed, and boolean False when Cancel is chosen.',
    complexityInfo: 'PCPP 3.5 Modal question dialogs',
  },
  {
    id: 'pcpp-s3-fc-096',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.filedialog.askopenfilename() and filetypes filter',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you configure file extension filters in tkinter.filedialog.askopenfilename()?',
    codeSnippet: `from tkinter import filedialog

# filetypes accepts a sequence of (Description, Pattern) 2-tuples:
types = [
    ("Python Files", "*.py"),
    ("Text Files", "*.txt"),
    ("All Files", "*.*")
]
# filename = filedialog.askopenfilename(filetypes=types, title="Select Script")
# If user cancels, it returns an empty string: ""
print("Filetypes format: list of (description, pattern) tuples")`,
    stdoutExpected: 'Filetypes format: list of (description, pattern) tuples',
    explanationTitle: 'filedialog.askopenfilename() and Filters',
    explanationText:
      'filedialog.askopenfilename() opens a native file-picker modal dialog. The filetypes option takes a list of (label_string, pattern_string) tuples. If the user selects a file, its full filesystem path string is returned; if the user cancels, it returns the empty string "".',
    complexityInfo: 'PCPP 3.5 File dialog filter syntax',
  },
  {
    id: 'pcpp-s3-fc-097',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.filedialog.asksaveasfilename() and defaultextension',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does the defaultextension option in asksaveasfilename() do?',
    codeSnippet: `from tkinter import filedialog

# defaultextension: automatically appended to filename if user omits an extension
# Example: defaultextension=".json"
# User types "data" -> returns ".../data.json"
# User types "data.csv" -> returns ".../data.csv"

print("defaultextension auto-appends suffix when omitted")`,
    stdoutExpected: 'defaultextension auto-appends suffix when omitted',
    explanationTitle: 'asksaveasfilename() Extension Auto-Append',
    explanationText:
      'In filedialog.asksaveasfilename(), defaultextension specifies the file extension (e.g. ".txt", ".json") that is automatically appended to the returned path if the user types a filename without a suffix.',
    complexityInfo: 'PCPP 3.5 Save dialog options',
  },
  {
    id: 'pcpp-s3-fc-098',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.filedialog.askdirectory(): selecting folder paths',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you prompt the user to select an entire directory rather than a file?',
    codeSnippet: `from tkinter import filedialog

# askdirectory opens a directory-selection dialog:
# folder = filedialog.askdirectory(title="Select Output Folder")
# Returns: absolute directory path as string, or "" if cancelled

print("askdirectory() returns selected folder path or empty string")`,
    stdoutExpected: 'askdirectory() returns selected folder path or empty string',
    explanationTitle: 'filedialog.askdirectory()',
    explanationText:
      'filedialog.askdirectory() opens a folder-selection dialog. It returns the selected directory path as a string. If the user clicks Cancel or closes the dialog, it returns the empty string "".',
    complexityInfo: 'PCPP 3.5 Directory picker',
  },
  {
    id: 'pcpp-s3-fc-099',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.colorchooser.askcolor(): return structure',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is the structure of the return value from tkinter.colorchooser.askcolor()?',
    codeSnippet: `from tkinter import colorchooser

# askcolor() returns a 2-tuple: ((r, g, b), "#hexcode")
# Example: ((255.0, 128.0, 0.0), '#ff8000')
# If user cancels: returns (None, None)

print("askcolor returns: ((r, g, b), hex_string) or (None, None)")`,
    stdoutExpected: 'askcolor returns: ((r, g, b), hex_string) or (None, None)',
    explanationTitle: 'colorchooser.askcolor() 2-Tuple Structure',
    explanationText:
      'tkinter.colorchooser.askcolor(color=..., title=...) displays the OS color picker palette. Upon selection, it returns a 2-tuple where index 0 is an RGB float tuple ((r, g, b) with values 0–255) and index 1 is the 7-character hexadecimal color string (e.g. "#00ff00"). If the user cancels, it returns (None, None).',
    complexityInfo: 'PCPP 3.5 Color chooser return tuple format',
  },
  {
    id: 'pcpp-s3-fc-100',
    track: 'pcpp',
    cardType: 'PCPP 3.5 • Variables & Dialogs',
    topic: 'tkinter.simpledialog: askstring, askinteger, askfloat with bounds',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What functions are provided by tkinter.simpledialog, and how can numeric input be bounded?',
    codeSnippet: `from tkinter import simpledialog

# simpledialog functions:
# askstring(title, prompt, initialvalue=...)
# askinteger(title, prompt, minvalue=1, maxvalue=100)
# askfloat(title, prompt, minvalue=0.0, maxvalue=1.0)
# Returns typed value cast to the appropriate type (str, int, float),
# or None if user clicks Cancel.

print("simpledialog: askstring, askinteger, askfloat with minvalue/maxvalue")`,
    stdoutExpected: 'simpledialog: askstring, askinteger, askfloat with minvalue/maxvalue',
    explanationTitle: 'simpledialog Input Prompts',
    explanationText:
      'tkinter.simpledialog provides quick modal input dialogs: askstring(), askinteger(), and askfloat(). Both askinteger and askfloat accept minvalue and maxvalue bounds, automatically re-prompting if the user inputs an out-of-range value. If the user clicks Cancel, all three return None.',
    complexityInfo: 'PCPP 3.5 Modal input prompts',
  },
];
