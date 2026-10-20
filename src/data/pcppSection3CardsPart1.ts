import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 3: GUI PROGRAMMING (TKINTER) (Part 1: Cards 1 to 40)
 * - Chapter 3.1: Tkinter Architecture & Window Lifecycle (Cards 1 to 20)
 * - Chapter 3.2: Core Widgets: Label, Button, Entry, Canvas, Frame, Text, Checkbutton, Radiobutton, Listbox, Scrollbar (Cards 21 to 40)
 */
export const pcppSection3CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.1: TKINTER ARCHITECTURE & WINDOW LIFECYCLE (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcpp-s3-fc-001',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Tkinter Architecture',
    topic: 'Tcl/Tk foundation & standard module import',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the architectural role of Tkinter in Python, and how is it connected to Tcl/Tk?',
    codeSnippet: `import tkinter as tk

# Tkinter acts as a thin object-oriented wrapper
print(type(tk.Tk))
print(tk.TkVersion >= 8.6)`,
    stdoutExpected: "<class 'type'>\nTrue",
    explanationTitle: 'Tkinter / Tcl/Tk Bridge Architecture',
    explanationText:
      'Tkinter (Tk interface) is Python’s standard GUI package. It is an object-oriented Python layer over the C-based Tcl (Tool Command Language) interpreter embedded in Python (_tkinter module). When creating widgets, Python commands are translated into Tcl/Tk commands executed by the embedded Tcl shell.',
    complexityInfo: 'PCPP Section 3.1 foundational concept',
  },
  {
    id: 'pcpp-s3-fc-002',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Creating the main root application window with tk.Tk()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does instantiating tk.Tk() accomplish in a Tkinter application?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# What does root represent, and can multiple Tk() instances coexist safely?
print(isinstance(root, tk.Misc))
root.destroy()`,
    stdoutExpected: 'True',
    explanationTitle: 'Root Window Initialization',
    explanationText:
      'tk.Tk() initializes the Tcl/Tk interpreter subsystem and constructs the top-level root window of the GUI. Standard Tkinter applications must create exactly ONE instance of tk.Tk() as the master root; creating multiple Tk() instances creates separate Tcl interpreters, which leads to memory corruption, event collision, and image loading bugs. Additional windows must use tk.Toplevel() instead.',
    complexityInfo: 'High-yield exam trap: never instantiate multiple tk.Tk() roots',
  },
  {
    id: 'pcpp-s3-fc-003',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Setting the window title with root.title()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you set and query the window title in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
root.title("PCPP Exam Studio")
current_title = root.title()
print(current_title)
root.destroy()`,
    stdoutExpected: 'PCPP Exam Studio',
    explanationTitle: 'Window Title Management',
    explanationText:
      'The title() method of a Tk or Toplevel window is dual-purpose: passing a string argument sets the window title in the OS window manager frame; calling title() with no arguments returns the current title string.',
    complexityInfo: 'PCPP 3.1 Window Manager methods',
  },
  {
    id: 'pcpp-s3-fc-004',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Window geometry specification syntax ("widthxheight+x+y")',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the exact format of the string passed to root.geometry() to set size and screen placement?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Set window to 600px wide, 400px high, 100px from left, 50px from top
root.geometry("600x400+100+50")
# Format: "{width}x{height}+{x_offset}+{y_offset}"
print("Geometry applied successfully")
root.destroy()`,
    stdoutExpected: 'Geometry applied successfully',
    explanationTitle: 'Tkinter Geometry String Syntax',
    explanationText:
      'The geometry() method accepts a geometry string formatted as "widthxheight+x+y", where "width" and "height" are in pixels separated by a lowercase "x", and "+x" and "+y" are horizontal and vertical offsets from the top-left of the screen. Negative offsets (e.g. "-100-50") position relative to the right and bottom edges of the screen.',
    complexityInfo: 'Exam trap: use lowercase "x", not "*" or capital "X"',
  },
  {
    id: 'pcpp-s3-fc-005',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Restricting window dimensions with minsize() and maxsize()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you define minimum and maximum pixel boundaries for window resizing?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
root.minsize(300, 200)
root.maxsize(1200, 800)
min_w, min_h = root.minsize()
print(f"Min size: {min_w}x{min_h}")
root.destroy()`,
    stdoutExpected: 'Min size: 300x200',
    explanationTitle: 'Window Dimension Constraints',
    explanationText:
      'root.minsize(min_width, min_height) and root.maxsize(max_width, max_height) dictate the resizable bounding limits in pixels. Calling either method with no arguments returns a 2-tuple (width, height) representing the current bounds.',
    complexityInfo: 'PCPP 3.1 Window dimensions',
  },
  {
    id: 'pcpp-s3-fc-006',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Toggling user resizeability with root.resizable()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you completely prevent a user from resizing the Tkinter window?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Disable resizing horizontally and vertically
root.resizable(False, False)
# Query current resizable flags:
can_resize = root.resizable()
print(can_resize)
root.destroy()`,
    stdoutExpected: '(False, False)',
    explanationTitle: 'Window Resizeability Control',
    explanationText:
      'root.resizable(width=..., height=...) takes two booleans indicating whether the user is permitted to resize the window along the horizontal and vertical axes. Passing (False, False) disables the window maximize button and dragging edges.',
    complexityInfo: 'PCPP 3.1 Window constraints',
  },
  {
    id: 'pcpp-s3-fc-007',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'The event loop: root.mainloop() execution and blocking behavior',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the role of root.mainloop(), and when does control return to the line after it?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# root.mainloop() begins polling OS events (mouse clicks, keystrokes)
# Code below mainloop() does NOT execute until the main loop exits!
print("About to enter mainloop")
root.after(10, root.destroy)  # Close after 10ms for headless execution
root.mainloop()
print("Exited mainloop")`,
    stdoutExpected: "About to enter mainloop\nExited mainloop",
    explanationTitle: 'Tkinter Event Loop Mechanics',
    explanationText:
      'root.mainloop() starts the Tkinter event loop. It is a blocking call that continuously processes OS window messages, mouse movements, key clicks, and scheduled timers. Execution in the Python script is paused at mainloop() until the root window is destroyed or root.quit() is invoked.',
    complexityInfo: 'Key concept: mainloop is blocking and single-threaded',
  },
  {
    id: 'pcpp-s3-fc-008',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Closing windows: root.destroy() vs root.quit()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the crucial difference between root.quit() and root.destroy()?',
    codeSnippet: `import tkinter as tk

# root.quit(): stops the event loop (mainloop), leaving widgets in memory
# root.destroy(): destroys all widgets and tears down the Tcl interpreter
root = tk.Tk()
btn = tk.Button(root, text="Action")
# Calling destroy() destroys btn and window
root.destroy()
try:
    btn.cget("text")
except tk.TclError as e:
    print("Widget destroyed:", type(e).__name__)`,
    stdoutExpected: 'Widget destroyed: TclError',
    explanationTitle: 'quit() vs. destroy() Distinction',
    explanationText:
      'root.quit() exits the current mainloop() run, but keeps all Tcl interpreters and Tkinter widgets alive in memory. root.destroy() terminates all child widgets, destroys the window display, and deallocates the underlying Tcl interpreter resources. Accessing a destroyed widget raises a TclError.',
    complexityInfo: 'Frequent PCPP exam question on window teardown',
  },
  {
    id: 'pcpp-s3-fc-009',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Intercepting the window close box with protocol("WM_DELETE_WINDOW")',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you intercept the user clicking the operating system close [X] button?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()

def on_closing():
    print("Intercepted close request")
    root.destroy()

root.protocol("WM_DELETE_WINDOW", on_closing)
# Trigger protocol handler programmatically:
root.event_generate("<<Close>>")  # Or direct invocation
on_closing()`,
    stdoutExpected: 'Intercepted close request',
    explanationTitle: 'WM_DELETE_WINDOW Protocol Handler',
    explanationText:
      'root.protocol("WM_DELETE_WINDOW", callback) registers a custom callback to run whenever the user clicks the window manager’s close button [X]. If this protocol is registered, the window will NOT close automatically; the callback must explicitly call root.destroy() if it decides to allow closing.',
    complexityInfo: 'High-yield exam pattern: confirmation dialogs before exit',
  },
  {
    id: 'pcpp-s3-fc-010',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Hiding and restoring windows with withdraw() and deiconify()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you hide a window from screen and taskbar without destroying it, then make it visible again?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
root.withdraw()   # Window is completely hidden (withdrawn)
print("State:", root.state())
root.deiconify()  # Window restored to normal visible state
print("State after restore:", root.state())
root.destroy()`,
    stdoutExpected: "State: withdrawn\nState after restore: normal",
    explanationTitle: 'withdraw() and deiconify() Visibility Cycle',
    explanationText:
      'root.withdraw() removes the window from the screen and taskbar without destroying its state or child widgets. root.deiconify() restores the window to view. This pattern is commonly used for splash screens or multi-step wizard dialogs.',
    complexityInfo: 'PCPP 3.1 Window visibility states',
  },
  {
    id: 'pcpp-s3-fc-011',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Minimizing windows with iconify() and state()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does root.iconify() do, and what states can root.state() return?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Query valid states: 'normal', 'iconic', 'withdrawn', 'zoomed' (Windows)
print("Initial state:", root.state())
root.iconify()   # Minimize to taskbar / dock
print("State after iconify:", root.state())
root.destroy()`,
    stdoutExpected: "Initial state: normal\nState after iconify: iconic",
    explanationTitle: 'Window Iconification and States',
    explanationText:
      'root.iconify() turns the window into an icon / minimizes it to the operating system taskbar. root.state() returns a string reflecting the window’s current condition: "normal" (standard display), "iconic" (minimized), "withdrawn" (hidden via withdraw), or "zoomed" (maximized on Windows).',
    complexityInfo: 'PCPP 3.1 window states',
  },
  {
    id: 'pcpp-s3-fc-012',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Secondary child windows with tk.Toplevel(master)',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How should secondary dialog or child windows be instantiated in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Create child window on top of root:
top = tk.Toplevel(root)
top.title("Secondary Window")
print("Top is Toplevel:", isinstance(top, tk.Toplevel))
print("Master of top is root:", top.master is root)
root.destroy()`,
    stdoutExpected: "Top is Toplevel: True\nMaster of top is root: True",
    explanationTitle: 'Secondary Windows with Toplevel',
    explanationText:
      'tk.Toplevel(master) creates an independent top-level window directly managed by the OS window manager while sharing the existing root Tcl interpreter. Unlike tk.Tk(), multiple Toplevel windows can safely coexist, and destroying the master root automatically destroys all child Toplevel instances.',
    complexityInfo: 'Core rule: exactly one tk.Tk(), any number of tk.Toplevel()',
  },
  {
    id: 'pcpp-s3-fc-013',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Modal windows with grab_set() and grab_release()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you make a Toplevel window modal, preventing interaction with parent windows until closed?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
top = tk.Toplevel(root)

# Make top modal:
top.transient(root)  # Associate top with root
top.grab_set()       # Direct all input events exclusively to top
print("Grab active on top:", top.grab_current() is top)

top.grab_release()   # Release the modal lock
root.destroy()`,
    stdoutExpected: 'Grab active on top: True',
    explanationTitle: 'Modal Behavior via grab_set()',
    explanationText:
      'top.grab_set() redirects all keyboard and mouse events exclusively to the given Toplevel window, disabling user interaction with any other window in the application (modal dialog behavior). When the dialog finishes, top.grab_release() must be called before destruction to restore event handling to the parent.',
    complexityInfo: 'PCPP 3.1 Modal dialog pattern',
  },
  {
    id: 'pcpp-s3-fc-014',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Transient windows with toplevel.transient(master)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the effect of calling toplevel.transient(root)?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
dialog = tk.Toplevel(root)
dialog.transient(root)
# What window manager behavior does transient enforce?
print("Transient master set successfully")
root.destroy()`,
    stdoutExpected: 'Transient master set successfully',
    explanationTitle: 'Transient Window Relationship',
    explanationText:
      'toplevel.transient(master) instructs the window manager that the Toplevel is a transient dialog belonging to master. Consequently, the dialog stays on top of the master window, is minimized/unminimized together with the master, and usually does not appear as a separate taskbar entry.',
    complexityInfo: 'PCPP 3.1 Dialog positioning',
  },
  {
    id: 'pcpp-s3-fc-015',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Scheduling delayed execution with root.after(ms, callback, *args)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you schedule a callback to run after a specified delay without blocking the GUI event loop?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
events = []

def scheduled_task(name):
    events.append(f"Hello, {name}!")

# Schedule callback after 50 milliseconds:
timer_id = root.after(50, scheduled_task, "PCPP Candidate")
print("Timer ID type:", type(timer_id).__name__)
root.destroy()`,
    stdoutExpected: 'Timer ID type: str',
    explanationTitle: 'Timer Scheduling with after()',
    explanationText:
      'root.after(delay_ms, callback, *args) registers a callback to be invoked by the event loop after at least delay_ms milliseconds. It does NOT sleep or block the thread; instead, an alarm event is queued in the Tcl event loop. It returns an identifier string representing the scheduled timer.',
    complexityInfo: 'Never use time.sleep() in Tkinter; always use root.after()',
  },
  {
    id: 'pcpp-s3-fc-016',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Cancelling scheduled timers with root.after_cancel(id)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you abort a timer previously scheduled with root.after() before it executes?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
executed = False

def do_work():
    global executed
    executed = True

job = root.after(1000, do_work)
root.after_cancel(job)  # Abort before execution
print("Job cancelled, executed is:", executed)
root.destroy()`,
    stdoutExpected: 'Job cancelled, executed is: False',
    explanationTitle: 'after_cancel() Timer Invalidation',
    explanationText:
      'root.after_cancel(job_id) takes the string identifier returned by after() and removes the pending alarm from the Tcl event queue. If the callback has not yet run, it is discarded and will never execute.',
    complexityInfo: 'PCPP 3.1 Timer management',
  },
  {
    id: 'pcpp-s3-fc-017',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Flushing pending UI redraws: update() vs update_idletasks()',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the distinction between widget.update() and widget.update_idletasks()?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
lbl = tk.Label(root, text="Initial")
lbl.pack()

# update_idletasks(): runs only pending geometry/display updates
root.update_idletasks()
w = lbl.winfo_width()
print("Geometry calculated:", w > 0)
root.destroy()`,
    stdoutExpected: 'Geometry calculated: True',
    explanationTitle: 'update() vs. update_idletasks()',
    explanationText:
      'update_idletasks() processes only pending "idle" events, such as window resizing, widget geometry calculations, and redraws, without invoking user callbacks or event handlers. update() processes ALL events including external mouse clicks, keystrokes, and timers, which carries re-entrancy risks.',
    complexityInfo: 'PCPP 3.1 Exam trap: use update_idletasks() to calculate widget sizes safely',
  },
  {
    id: 'pcpp-s3-fc-018',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Thread safety constraints in Tkinter applications',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Why is modifying Tkinter widgets directly from background worker threads forbidden, and how is it resolved?',
    codeSnippet: `# Correct multithreaded Tkinter pattern:
# Background thread does computation, places result in a queue.Queue,
# and main thread polls the queue using root.after().
import queue
import tkinter as tk

q = queue.Queue()
root = tk.Tk()

def check_queue():
    while not q.empty():
        item = q.get()
        print("Received on main thread:", item)
    # Re-poll every 100ms:
    # root.after(100, check_queue)

q.put("Data from worker")
check_queue()
root.destroy()`,
    stdoutExpected: 'Received on main thread: Data from worker',
    explanationTitle: 'Tkinter Thread Safety Architecture',
    explanationText:
      'The underlying Tcl/Tk interpreter is not thread-safe. Accessing or modifying Tkinter widgets from any thread other than the main thread where mainloop() runs causes crashes, race conditions, or silent failures. Communication from background threads must be mediated using thread-safe queues (queue.Queue) polled via root.after().',
    complexityInfo: 'Crucial architectural question on the PCPP exam',
  },
  {
    id: 'pcpp-s3-fc-019',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'DPI awareness and the tkinter.ttk themed widget module',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the purpose of the tkinter.ttk module introduced in Python 2.7 / 3.1?',
    codeSnippet: `import tkinter as tk
from tkinter import ttk

root = tk.Tk()
classic_btn = tk.Button(root, text="Classic")
themed_btn = ttk.Button(root, text="Themed")

print("Classic base:", classic_btn.__class__.__module__)
print("Themed base:", themed_btn.__class__.__module__)
root.destroy()`,
    stdoutExpected: "Classic base: tkinter\nThemed base: tkinter.ttk",
    explanationTitle: 'tkinter.ttk Themed Widget Extension',
    explanationText:
      'tkinter.ttk (Tk themed widgets) provides modern, native-looking widgets that separate widget behavior from appearance via themes and styles. It introduces widgets not present in classic Tkinter, such as Notebook (tabs), Treeview, Combobox, and Progressbar.',
    complexityInfo: 'PCPP 3.1 & 3.5 ttk vs classic widgets',
  },
  {
    id: 'pcpp-s3-fc-020',
    track: 'pcpp',
    cardType: 'PCPP 3.1 • Window Lifecycle',
    topic: 'Centering a Tkinter window programmatically on the screen',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you calculate coordinates to center a 400x300 window on any display screen?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
win_w, win_h = 400, 300
screen_w = root.winfo_screenwidth()
screen_h = root.winfo_screenheight()

x = (screen_w - win_w) // 2
y = (screen_h - win_h) // 2
geometry_str = f"{win_w}x{win_h}+{x}+{y}"
root.geometry(geometry_str)
print("Positioned at center offset:", x >= 0 and y >= 0)
root.destroy()`,
    stdoutExpected: 'Positioned at center offset: True',
    explanationTitle: 'Centering Window Algorithm',
    explanationText:
      'Using root.winfo_screenwidth() and root.winfo_screenheight(), you query the physical monitor resolution. Calculating (screen_width - window_width) // 2 gives the horizontal center offset x, and (screen_height - window_height) // 2 gives vertical center offset y, formatted into "WxH+X+Y".',
    complexityInfo: 'Common practical coding task on PCPP Section 3',
  },

  // =========================================================================
  // CHAPTER 3.2: CORE WIDGETS (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcpp-s3-fc-021',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'Widget instantiation pattern & master hierarchy',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the required first argument when instantiating any Tkinter widget?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
frame = tk.Frame(root)
btn = tk.Button(frame, text="Submit")

# Parent/child relationship:
print(btn.master is frame)
print(frame.master is root)
root.destroy()`,
    stdoutExpected: "True\nTrue",
    explanationTitle: 'Widget Hierarchy and Master Argument',
    explanationText:
      'All Tkinter widgets take their parent container ("master") as their first positional argument. If master is omitted, Tkinter defaults to the most recently created root window (or creates a root automatically if none exists, which is bad practice).',
    complexityInfo: 'PCPP 3.2 Widget constructor convention',
  },
  {
    id: 'pcpp-s3-fc-022',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'Widget configuration: cget(), config(), and dictionary syntax',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What are the three equivalent ways to read and modify a widget’s configuration options?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
lbl = tk.Label(root, text="Hello")

# Three ways to modify:
lbl.configure(text="Updated")
lbl.config(text="Updated again")
lbl["text"] = "Final"

# Two ways to inspect:
print(lbl.cget("text"))
print(lbl["text"])
root.destroy()`,
    stdoutExpected: "Final\nFinal",
    explanationTitle: 'Widget Option Access Syntax',
    explanationText:
      'Tkinter widgets behave like dictionaries for their options: options can be set via widget.configure(**kw), widget.config(**kw) (an alias), or widget["option"] = val. Options can be read using widget.cget("option") or widget["option"].',
    complexityInfo: 'PCPP 3.2 Widget configuration idiom',
  },
  {
    id: 'pcpp-s3-fc-023',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Label: displaying text and font specification tuple',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you configure font family, point size, and font weight on a tk.Label?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Font tuple: (family, size, weight/style)
lbl = tk.Label(root, text="Status", font=("Courier", 16, "bold"))
font_prop = lbl.cget("font")
print("Font contains Courier and bold:", "Courier" in font_prop and "bold" in font_prop)
root.destroy()`,
    stdoutExpected: 'Font contains Courier and bold: True',
    explanationTitle: 'Font Tuple Configuration',
    explanationText:
      'In Tkinter, the font option accepts a tuple formatted as (family, size, style), e.g. ("Helvetica", 12, "italic bold"). Alternatively, font can be specified using a tkinter.font.Font object or a X11 font descriptor string.',
    complexityInfo: 'PCPP 3.2 Label styling',
  },
  {
    id: 'pcpp-s3-fc-024',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Label: relief borders and borderwidth',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What are the 6 valid 3D relief styles available in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
valid_reliefs = [tk.FLAT, tk.RAISED, tk.SUNKEN, tk.GROOVE, tk.RIDGE, tk.SOLID]
lbl = tk.Label(root, text="Bordered", relief=tk.SUNKEN, bd=3)
print("Relief is sunken:", lbl.cget("relief") == "sunken")
print("Border width is 3:", lbl.cget("bd") == 3)
root.destroy()`,
    stdoutExpected: "Relief is sunken: True\nBorder width is 3: True",
    explanationTitle: '3D Relief Constants',
    explanationText:
      'Tkinter supports 6 relief styles: tk.FLAT (default for Label), tk.RAISED (default for Button), tk.SUNKEN, tk.GROOVE, tk.RIDGE, and tk.SOLID. The thickness of the 3D relief border is controlled by the bd (or borderwidth) integer option in pixels.',
    complexityInfo: 'PCPP 3.2 Relief constant identification',
  },
  {
    id: 'pcpp-s3-fc-025',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Label: anchor alignment vs justify',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the distinction between the anchor and justify options on a tk.Label?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# anchor: where content sits inside the label's parcel (N, S, E, W, CENTER)
# justify: how multiple lines of text align relative to each other (LEFT, CENTER, RIGHT)
lbl = tk.Label(root, text="Line 1\\nLonger Line 2", anchor=tk.W, justify=tk.LEFT)
print(lbl.cget("anchor"), lbl.cget("justify"))
root.destroy()`,
    stdoutExpected: 'w left',
    explanationTitle: 'anchor vs. justify in Labels',
    explanationText:
      'anchor positions the entire content (text or image) within the allocated space of the widget using compass directions (N, NE, E, SE, S, SW, W, NW, or CENTER). justify determines how lines in a multi-line text block align relative to one another (LEFT, CENTER, or RIGHT).',
    complexityInfo: 'Frequent exam trap confusing anchor with justify',
  },
  {
    id: 'pcpp-s3-fc-026',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Button: command callbacks and passing arguments',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you pass arguments to a Button command callback without invoking it immediately during initialization?',
    codeSnippet: `import tkinter as tk
from functools import partial

root = tk.Tk()
clicked_val = None

def on_click(item_id):
    global clicked_val
    clicked_val = item_id

# WRONG: command=on_click(42)  <- Runs immediately at startup!
# CORRECT: command=lambda: on_click(42) OR command=partial(on_click, 42)
btn = tk.Button(root, text="Click", command=lambda: on_click(42))
btn.invoke()  # Simulates user clicking the button
print("Clicked value:", clicked_val)
root.destroy()`,
    stdoutExpected: 'Clicked value: 42',
    explanationTitle: 'Passing Arguments to Button Callbacks',
    explanationText:
      'The command option expects a callable taking zero arguments. Passing command=func(arg) calls func immediately at startup and assigns its return value (usually None) to command. To defer execution and pass arguments, wrap the call inside a zero-argument lambda: lambda: func(arg) or use functools.partial(func, arg).',
    complexityInfo: 'High-frequency exam trap on every Python GUI exam',
  },
  {
    id: 'pcpp-s3-fc-027',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Button: state property (NORMAL, DISABLED, ACTIVE)',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What states can a Tkinter Button assume, and how do you disable user interaction?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Submit")
print("Default state:", btn.cget("state"))
btn.config(state=tk.DISABLED)
print("Updated state:", btn.cget("state"))
root.destroy()`,
    stdoutExpected: "Default state: normal\nUpdated state: disabled",
    explanationTitle: 'Button States (NORMAL, DISABLED, ACTIVE)',
    explanationText:
      'A Tkinter Button supports three states: tk.NORMAL ("normal", responsive to clicks), tk.DISABLED ("disabled", grayed out, unclickable), and tk.ACTIVE ("active", visual appearance when hovered or pressed). Setting state=tk.DISABLED stops invoke() and mouse clicks.',
    complexityInfo: 'PCPP 3.2 Widget state control',
  },
  {
    id: 'pcpp-s3-fc-028',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Entry: retrieving user input with get()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you extract the string currently typed inside a single-line tk.Entry widget?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root)
entry.insert(0, "Candidate #1092")
text = entry.get()
print("Extracted:", text)
root.destroy()`,
    stdoutExpected: 'Extracted: Candidate #1092',
    explanationTitle: 'Entry Text Retrieval',
    explanationText:
      'entry.get() returns the current text inside the Entry widget as a standard Python str. Even if the user types numeric digits (e.g. "123"), get() always returns a string and must be cast to int or float if needed.',
    complexityInfo: 'PCPP 3.2 Entry get() return type',
  },
  {
    id: 'pcpp-s3-fc-029',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Entry: inserting and deleting text programmatically',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you completely clear an Entry widget and insert new text at the beginning?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root)
entry.insert(0, "Old Content")

# Clear everything:
entry.delete(0, tk.END)
# Insert at index 0:
entry.insert(0, "New Fresh Content")
print(entry.get())
root.destroy()`,
    stdoutExpected: 'New Fresh Content',
    explanationTitle: 'Entry Manipulation Indices',
    explanationText:
      'entry.delete(first, last) deletes characters from index first up to (but excluding) last. To clear the entire field, use entry.delete(0, tk.END). entry.insert(index, string) inserts characters at the specified position (0 for beginning, tk.END for appending).',
    complexityInfo: 'PCPP 3.2 Entry indices: 0 and tk.END',
  },
  {
    id: 'pcpp-s3-fc-030',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Entry: password masking with the show option',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you configure an Entry widget to mask sensitive password input?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
password_entry = tk.Entry(root, show="*")
password_entry.insert(0, "SecretPass123")

# Visually it displays '*', but what does get() return?
print("Retrieved via get():", password_entry.get())
root.destroy()`,
    stdoutExpected: 'Retrieved via get(): SecretPass123',
    explanationTitle: 'Password Masking with show',
    explanationText:
      'Setting show="*" (or any single character like show="•") replaces every typed character on the screen with that mask character. However, password_entry.get() continues to return the raw unmasked text entered by the user.',
    complexityInfo: 'PCPP 3.2 Entry show masking behavior',
  },
  {
    id: 'pcpp-s3-fc-031',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Frame: grouping widgets and container hierarchy',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the primary architectural purpose of a tk.Frame widget in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
top_frame = tk.Frame(root, bg="gray", bd=2, relief=tk.GROOVE)
top_frame.pack()

# Children inside top_frame can use grid() even if top_frame is packed!
b1 = tk.Button(top_frame, text="A")
b2 = tk.Button(top_frame, text="B")
b1.grid(row=0, column=0)
b2.grid(row=0, column=1)

print("Frame holds children:", len(top_frame.winfo_children()))
root.destroy()`,
    stdoutExpected: 'Frame holds children: 2',
    explanationTitle: 'tk.Frame Container Role',
    explanationText:
      'tk.Frame is a rectangular container widget designed to group, isolate, and structure child widgets. Critically, each Frame establishes an isolated geometry management context: you can safely use grid() inside a Frame even if that Frame itself is placed into root using pack().',
    complexityInfo: 'Core architectural solution to avoid mixing pack and grid',
  },
  {
    id: 'pcpp-s3-fc-032',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.LabelFrame: bordered container with a title caption',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How does tk.LabelFrame differ from a standard tk.Frame?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
group = tk.LabelFrame(root, text="User Preferences", padx=10, pady=10)
lbl = tk.Label(group, text="Notifications Enabled")
lbl.pack()

print("Group title:", group.cget("text"))
root.destroy()`,
    stdoutExpected: 'Group title: User Preferences',
    explanationTitle: 'tk.LabelFrame Titled Box',
    explanationText:
      'tk.LabelFrame is a container frame that draws a visible border around its perimeter and displays a text title caption embedded in the border line (similar to HTML <fieldset> and <legend>). The position of the label can be customized using labelanchor (e.g. "nw", "n", "ne").',
    complexityInfo: 'PCPP 3.2 Grouping widgets',
  },
  {
    id: 'pcpp-s3-fc-033',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Checkbutton: binary toggles, onvalue, and offvalue',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you associate a Checkbutton with custom on and off integer or string values?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
var = tk.StringVar(value="OFF")

chk = tk.Checkbutton(
    root,
    text="Subscribe",
    variable=var,
    onvalue="SUBSCRIBED",
    offvalue="UNSUBSCRIBED"
)
chk.select()  # Check the box
print("State after select:", var.get())
chk.deselect()  # Uncheck the box
print("State after deselect:", var.get())
root.destroy()`,
    stdoutExpected: "State after select: SUBSCRIBED\nState after deselect: UNSUBSCRIBED",
    explanationTitle: 'Checkbutton onvalue and offvalue',
    explanationText:
      'A tk.Checkbutton tracks boolean or discrete states using an associated Tkinter variable (via variable=var). By default, onvalue is 1 and offvalue is 0, but they can be customized to any arbitrary strings or integers. Calling select(), deselect(), or toggle() updates both visual checkbox and variable.',
    complexityInfo: 'PCPP 3.2 Checkbutton variable binding',
  },
  {
    id: 'pcpp-s3-fc-034',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Radiobutton: mutually exclusive selection with shared variable',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you make a group of Radiobuttons mutually exclusive so that selecting one deselects the others?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
choice_var = tk.IntVar(value=1)

# All Radiobuttons in a group MUST share the exact same variable:
r1 = tk.Radiobutton(root, text="Option 1", variable=choice_var, value=1)
r2 = tk.Radiobutton(root, text="Option 2", variable=choice_var, value=2)
r3 = tk.Radiobutton(root, text="Option 3", variable=choice_var, value=3)

r2.select()
print("Selected radio value:", choice_var.get())
root.destroy()`,
    stdoutExpected: 'Selected radio value: 2',
    explanationTitle: 'Radiobutton Mutual Exclusion Mechanism',
    explanationText:
      'Radiobuttons are mutually exclusive ONLY when they share the exact same Tkinter variable instance (via variable=...). Each individual Radiobutton assigns its own unique value via the value option. When clicked, the shared variable updates to that button’s value, deselecting all peers.',
    complexityInfo: 'High-frequency exam trap: forgetting to share the variable',
  },
  {
    id: 'pcpp-s3-fc-035',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Canvas: 2D graphics coordinate system and origin',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Where is the coordinate origin (0, 0) located on a tk.Canvas, and which way do X and Y increase?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
canvas = tk.Canvas(root, width=300, height=200, bg="white")
# Origin (0, 0) is at top-left corner
# X increases to the right; Y increases downwards
rect_id = canvas.create_rectangle(10, 10, 100, 50, fill="blue")
print("Canvas item ID type:", type(rect_id).__name__)
root.destroy()`,
    stdoutExpected: 'Canvas item ID type: int',
    explanationTitle: 'Canvas Coordinate System',
    explanationText:
      'On a Tkinter Canvas, coordinate (0, 0) is at the top-left corner. The X-axis increases to the right, and the Y-axis increases downwards (standard computer graphics coordinate system). Methods like create_rectangle() return an integer ID representing the drawn item.',
    complexityInfo: 'PCPP 3.2 Canvas drawing fundamentals',
  },
  {
    id: 'pcpp-s3-fc-036',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Canvas: shape creation methods (rectangle, oval, line, polygon)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What arguments define the geometry of create_oval() on a Tkinter Canvas?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
cv = tk.Canvas(root, width=200, height=200)

# create_oval takes the bounding box: (x0, y0, x1, y1)
# where (x0, y0) is top-left, and (x1, y1) is bottom-right of enclosing rectangle
oval_id = cv.create_oval(20, 20, 120, 120, fill="red", outline="black")
coords = cv.coords(oval_id)
print("Bounding box coordinates:", coords)
root.destroy()`,
    stdoutExpected: 'Bounding box coordinates: [20.0, 20.0, 120.0, 120.0]',
    explanationTitle: 'create_oval Bounding Box Definition',
    explanationText:
      'In Tkinter Canvas, circles and ellipses are drawn with create_oval(x0, y0, x1, y1), where coordinates define the bounding box (enclosing rectangle) of the oval. If width equals height (x1 - x0 == y1 - y0), a perfect circle is drawn.',
    complexityInfo: 'Exam trap: Tkinter ovals do not use (center_x, center_y, radius)',
  },
  {
    id: 'pcpp-s3-fc-037',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Canvas: moving and querying items with move() and coords()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you shift a canvas item by delta offsets and inspect its new coordinates?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
cv = tk.Canvas(root, width=200, height=200)
box = cv.create_rectangle(0, 0, 50, 50)

# Move item by dx=+20, dy=+30:
cv.move(box, 20, 30)
new_coords = cv.coords(box)
print("Updated coords:", new_coords)
root.destroy()`,
    stdoutExpected: 'Updated coords: [20.0, 30.0, 70.0, 80.0]',
    explanationTitle: 'Canvas move() and coords()',
    explanationText:
      'canvas.move(tag_or_id, dx, dy) shifts the item(s) by relative offsets dx and dy. canvas.coords(tag_or_id) queries the current absolute coordinates as a list of floats [x0, y0, x1, y1]. Passing coordinates to coords(tag_or_id, x0, y0, ...) relocates or resizes the item.',
    complexityInfo: 'PCPP 3.2 Canvas animation primitives',
  },
  {
    id: 'pcpp-s3-fc-038',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Canvas: item configuration with itemconfig()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you modify visual properties (fill color, width) of an existing item on a Canvas?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
cv = tk.Canvas(root, width=200, height=200)
line = cv.create_line(0, 0, 100, 100, fill="black", width=1)

# Modify item properties using itemconfig or itemconfigure:
cv.itemconfig(line, fill="green", width=4)
print("New fill color:", cv.itemcget(line, "fill"))
root.destroy()`,
    stdoutExpected: 'New fill color: green',
    explanationTitle: 'Canvas itemconfig and itemcget',
    explanationText:
      'Unlike standard widgets that use config() and cget(), items drawn on a Canvas use canvas.itemconfig(item_id, **options) to update properties and canvas.itemcget(item_id, "option") to read them.',
    complexityInfo: 'PCPP 3.2 Canvas itemconfig vs widget config',
  },
  {
    id: 'pcpp-s3-fc-039',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Text: multi-line text editor and index coordinate system ("line.char")',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How are indices formatted in a tk.Text widget, and what index denotes the very beginning?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
txt = tk.Text(root, width=20, height=5)
txt.insert("1.0", "Line 1\\nLine 2")

# To extract all text, index from "1.0" to "end-1c" (or tk.END):
content = txt.get("1.0", "end-1c")
print("Content:", repr(content))
root.destroy()`,
    stdoutExpected: "Content: 'Line 1\\nLine 2'",
    explanationTitle: 'Text Widget Index Notation',
    explanationText:
      'In tk.Text, coordinates are strings formatted as "line.column", where lines are 1-indexed (starting at 1) and columns are 0-indexed (starting at 0). Therefore, "1.0" represents line 1, character 0 (the beginning). "end" includes an auto-appended newline, so "end-1c" excludes that trailing newline.',
    complexityInfo: 'High-frequency exam trap: line is 1-based, char is 0-based ("1.0")',
  },
  {
    id: 'pcpp-s3-fc-040',
    track: 'pcpp',
    cardType: 'PCPP 3.2 • Core Widgets',
    topic: 'tk.Listbox & tk.Scrollbar: linking two-way scrolling',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What two connections are required to link a Scrollbar and a Listbox together?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
sb = tk.Scrollbar(root)
lb = tk.Listbox(root, yscrollcommand=sb.set)

# Step 1: Listbox informs scrollbar when view changes (yscrollcommand=sb.set)
# Step 2: Scrollbar instructs Listbox when user drags thumb (command=lb.yview)
sb.config(command=lb.yview)

for i in range(50):
    lb.insert(tk.END, f"Item {i}")

print("Current selection count:", len(lb.curselection()))
root.destroy()`,
    stdoutExpected: 'Current selection count: 0',
    explanationTitle: 'Two-Way Scrollbar Binding',
    explanationText:
      'Linking a Scrollbar with a Listbox (or Canvas/Text) requires two-way synchronization: 1) listbox.config(yscrollcommand=scrollbar.set) tells the scrollbar the visible fraction; 2) scrollbar.config(command=listbox.yview) scrolls the listbox contents when the user moves the scrollbar.',
    complexityInfo: 'PCPP 3.2 Scrollbar wiring pattern',
  },
];
