import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 3: GUI PROGRAMMING (TKINTER) (Part 2: Cards 41 to 75)
 * - Chapter 3.3: Geometry Managers: pack, grid, and place (Cards 41 to 60)
 * - Chapter 3.4: Event-Driven Programming: Binding & Sequences (Cards 61 to 75)
 */
export const pcppSection3CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.3: GEOMETRY MANAGERS: PACK, GRID, PLACE (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcpp-s3-fc-041',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'Strict rule against mixing pack() and grid() in the same parent',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What happens if you combine pack() and grid() calls on sibling widgets sharing the same parent container?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Sibling widgets sharing the same parent (root):
lbl = tk.Label(root, text="One")
btn = tk.Button(root, text="Two")

# CRITICAL ERROR:
# lbl.pack()
# btn.grid(row=0, column=0)
# Result: Program freezes in infinite geometry negotiation loop!

print("Rule: NEVER mix pack and grid in the same master widget")
root.destroy()`,
    stdoutExpected: 'Rule: NEVER mix pack and grid in the same master widget',
    explanationTitle: 'Prohibition on Mixing pack() and grid()',
    explanationText:
      'Never invoke pack() and grid() inside the same master container or window. Each geometry manager attempts to negotiate window size with the master, triggering an endless recursive geometry negotiation loop that hangs or crashes the application. To combine layouts, embed child Frame containers and use one manager per Frame.',
    complexityInfo: 'Number-one runtime bug and high-yield PCPP exam question',
  },
  {
    id: 'pcpp-s3-fc-042',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'pack(): side option and cavity allocation mechanism',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What are the 4 possible values for pack(side=...), and how does the cavity model allocate space?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
valid_sides = [tk.TOP, tk.BOTTOM, tk.LEFT, tk.RIGHT]

b_top = tk.Button(root, text="Top")
b_top.pack(side=tk.TOP)
b_left = tk.Button(root, text="Left")
b_left.pack(side=tk.LEFT)

print("Default side is TOP:", b_top.pack_info()["side"] == "top")
root.destroy()`,
    stdoutExpected: 'Default side is TOP: True',
    explanationTitle: 'pack() Cavity Allocation Model',
    explanationText:
      'pack() carves off rectangular slices ("parcels") from the remaining available area ("cavity") along the specified edge: side=tk.TOP (default), tk.BOTTOM, tk.LEFT, or tk.RIGHT. Earlier packed widgets consume full width or height slices first, leaving the remaining cavity for subsequent widgets.',
    complexityInfo: 'PCPP 3.3 pack() side fundamentals',
  },
  {
    id: 'pcpp-s3-fc-043',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'pack(): fill option (NONE, X, Y, BOTH)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does the fill parameter in pack() do, and what are its valid values?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
b1 = tk.Button(root, text="Horizontal Expansion")
# fill options: tk.NONE ('none'), tk.X ('x'), tk.Y ('y'), tk.BOTH ('both')
b1.pack(side=tk.TOP, fill=tk.X)

print("Fill applied:", b1.pack_info()["fill"])
root.destroy()`,
    stdoutExpected: 'Fill applied: x',
    explanationTitle: 'pack() Parcel Expansion with fill',
    explanationText:
      'The fill option instructs the widget to stretch and expand to occupy all available space inside its allocated parcel. tk.X expands horizontally, tk.Y expands vertically (usually requiring expand=True to have vertical cavity), tk.BOTH expands in both directions, and tk.NONE (default) keeps the widget at natural size.',
    complexityInfo: 'PCPP 3.3 pack fill options',
  },
  {
    id: 'pcpp-s3-fc-044',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'pack(): expand option for absorbing window resize surplus',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does pack(expand=True) do when the master window is enlarged by the user?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Centered in Growth")
btn.pack(side=tk.TOP, expand=True, fill=tk.BOTH)

print("Expand flag:", btn.pack_info()["expand"])
root.destroy()`,
    stdoutExpected: 'Expand flag: 1',
    explanationTitle: 'pack() expand Parameter',
    explanationText:
      'expand=True (or 1) dictates that any extra/unallocated space in the parent window when resized is assigned to the widget’s parcel. Pairing expand=True with fill=tk.BOTH makes a widget stretch to consume the entire growing window area.',
    complexityInfo: 'Core pattern: expand=True + fill=BOTH for responsive widgets',
  },
  {
    id: 'pcpp-s3-fc-045',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'pack(): external padding (padx, pady) vs internal padding (ipadx, ipady)',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the distinction between padx/pady and ipadx/ipady in Tkinter geometry managers?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Padded")
# padx/pady: external margin around the widget
# ipadx/ipady: internal padding inside the widget border
btn.pack(padx=20, pady=10, ipadx=5, ipady=8)

info = btn.pack_info()
print("External padx:", info["padx"], "Internal ipadx:", info["ipadx"])
root.destroy()`,
    stdoutExpected: 'External padx: 20 Internal ipadx: 5',
    explanationTitle: 'External vs. Internal Padding',
    explanationText:
      'padx and pady create external margins between the widget boundary and neighboring widgets/window borders. ipadx and ipady ("internal padding") enlarge the widget itself by adding space inside the widget boundary between its text/content and border.',
    complexityInfo: 'PCPP 3.3 Padding options',
  },
  {
    id: 'pcpp-s3-fc-046',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'pack(): anchor option positioning within parcel',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does pack(anchor=...) position a widget when its allocated parcel is larger than its size?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
lbl = tk.Label(root, text="Right aligned in parcel")
lbl.pack(side=tk.TOP, fill=tk.X, anchor=tk.E)

print("Anchor in pack_info:", lbl.pack_info()["anchor"])
root.destroy()`,
    stdoutExpected: 'Anchor in pack_info: e',
    explanationTitle: 'pack() anchor Alignment',
    explanationText:
      'When a widget’s parcel is larger than the widget itself (or when fill is not set to BOTH), anchor specifies where the widget rests within that parcel using compass directions (N, NE, E, SE, S, SW, W, NW, or CENTER).',
    complexityInfo: 'PCPP 3.3 Parcel alignment',
  },
  {
    id: 'pcpp-s3-fc-047',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'pack_forget() vs destroy(): removing from display vs deallocating',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you hide a packed widget without deleting it, allowing it to be shown again later?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Toggleable")
btn.pack()

# Remove from layout without destroying the widget object:
btn.pack_forget()
print("Still a valid widget:", btn.winfo_exists() == 1)

# Re-show the widget:
btn.pack()
root.destroy()`,
    stdoutExpected: 'Still a valid widget: True',
    explanationTitle: 'pack_forget() Layout Removal',
    explanationText:
      'widget.pack_forget() unmaps and removes the widget from the display, but the widget Python object and its state remain intact in memory. You can re-display it at any point with a subsequent call to pack(). In contrast, widget.destroy() permanently deallocates the widget.',
    complexityInfo: 'PCPP 3.3 Dynamic layout toggling',
  },
  {
    id: 'pcpp-s3-fc-048',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'grid(): 2D tabular layout using zero-indexed row and column',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How are grid() rows and columns indexed, and do empty intermediate cells consume visual space?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
b1 = tk.Button(root, text="(0, 0)")
b2 = tk.Button(root, text="(10, 10)")

b1.grid(row=0, column=0)
b2.grid(row=10, column=10)

# Empty rows 1-9 and cols 1-9 collapse to zero pixels by default!
print("Row b1:", b1.grid_info()["row"])
print("Row b2:", b2.grid_info()["row"])
root.destroy()`,
    stdoutExpected: "Row b1: 0\nRow b2: 10",
    explanationTitle: 'grid() Coordinate Space',
    explanationText:
      'grid(row=r, column=c) positions widgets in a 2D table where both rows and columns are 0-indexed integers. Critically, empty rows or columns between widgets collapse to zero pixels unless assigned a minsize or weight via rowconfigure / columnconfigure.',
    complexityInfo: 'Exam trap: empty grid cells do not create space by default',
  },
  {
    id: 'pcpp-s3-fc-049',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'grid(): columnspan and rowspan multi-cell spanning',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you make a widget span across multiple adjacent rows or columns in a grid layout?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
header = tk.Label(root, text="Full Width Banner")
# Spans 3 columns horizontally:
header.grid(row=0, column=0, columnspan=3)

info = header.grid_info()
print("Column span:", info["columnspan"])
root.destroy()`,
    stdoutExpected: 'Column span: 3',
    explanationTitle: 'columnspan and rowspan in grid',
    explanationText:
      'columnspan=n instructs the widget to span horizontally across n adjacent columns. rowspan=m instructs it to span vertically across m adjacent rows. The widget starts at (row, column) and stretches across the spanned cells.',
    complexityInfo: 'PCPP 3.3 Multi-cell spanning',
  },
  {
    id: 'pcpp-s3-fc-050',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'grid(): sticky option (compass directions and combinations)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the function of the sticky parameter in grid(), and how do you make a widget fill its entire cell?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# sticky accepts compass constants or combined strings like "nsew"
btn = tk.Button(root, text="Fill Cell")
btn.grid(row=0, column=0, sticky=tk.N + tk.S + tk.E + tk.W)

# Equivalent string: sticky="nsew"
print("Sticky edges:", btn.grid_info()["sticky"])
root.destroy()`,
    stdoutExpected: 'Sticky edges: nesw',
    explanationTitle: 'grid() sticky Alignment and Expansion',
    explanationText:
      'By default, a widget centers inside its grid cell if the cell is larger than the widget. sticky specifies which edges of the cell the widget "sticks" to (N, S, E, W). Combining opposite edges (e.g. sticky=tk.E+tk.W or sticky="ew") stretches the widget horizontally; sticky="nsew" stretches it in all 4 directions to fill the entire cell.',
    complexityInfo: 'PCPP 3.3 sticky vs pack fill analogy',
  },
  {
    id: 'pcpp-s3-fc-051',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'grid_rowconfigure() and grid_columnconfigure(): responsive resizing',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Why does a grid layout not automatically expand when the window is resized, and how do you fix it?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Expandable")
btn.grid(row=0, column=0, sticky="nsew")

# By default, weight is 0 (no resize). Set weight > 0 on the parent container!
root.grid_rowconfigure(0, weight=1)
root.grid_columnconfigure(0, weight=1)

print("Row 0 weight:", root.grid_rowconfigure(0)["weight"])
print("Col 0 weight:", root.grid_columnconfigure(0)["weight"])
root.destroy()`,
    stdoutExpected: "Row 0 weight: 1\nCol 0 weight: 1",
    explanationTitle: 'grid rowconfigure / columnconfigure Weight',
    explanationText:
      'Even with sticky="nsew", a widget will NOT expand when the window grows unless its row and column have a non-zero weight. parent.grid_rowconfigure(row_index, weight=w) and columnconfigure(col_index, weight=w) distribute surplus window resize space proportional to their weights.',
    complexityInfo: 'Number-one reason grid layouts fail to resize responsively',
  },
  {
    id: 'pcpp-s3-fc-052',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'grid_forget() vs grid_remove(): preserving layout configuration',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the crucial difference between grid_forget() and grid_remove() in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Persistent")
btn.grid(row=2, column=3, sticky="ew")

# grid_remove(): hides the widget but REMEMBERS its grid options (row=2, col=3, sticky="ew")
btn.grid_remove()
# Re-displaying requires only calling grid() with NO arguments!
btn.grid()
print("Restored row:", btn.grid_info()["row"])

# grid_forget(): hides widget and FORGETS all grid options
btn.grid_forget()
root.destroy()`,
    stdoutExpected: 'Restored row: 2',
    explanationTitle: 'grid_forget() vs. grid_remove()',
    explanationText:
      'grid_remove() removes the widget from screen display while remembering its row, column, rowspan, columnspan, and sticky settings. Calling widget.grid() with no arguments restores it to its exact previous grid location. In contrast, grid_forget() completely discards all grid configuration options.',
    complexityInfo: 'High-yield exam trap: grid_remove preserves grid options',
  },
  {
    id: 'pcpp-s3-fc-053',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'place(): absolute coordinate positioning with x and y',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does the place() geometry manager position widgets using absolute pixel coordinates?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Pinned")
# Exact pixel offset from parent top-left corner:
btn.place(x=50, y=80, width=100, height=35)

info = btn.place_info()
print("x:", info["x"], "y:", info["y"])
root.destroy()`,
    stdoutExpected: 'x: 50 y: 80',
    explanationTitle: 'place() Absolute Positioning',
    explanationText:
      'place(x=..., y=...) positions widgets at explicit pixel offsets relative to the parent’s top-left corner (0, 0). Explicit width and height in pixels can also be set. While simple, absolute positioning does not respond to window resizing or font scaling across platforms.',
    complexityInfo: 'PCPP 3.3 place() absolute coordinates',
  },
  {
    id: 'pcpp-s3-fc-054',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'place(): relative positioning with relx, rely, relwidth, relheight',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you position and size a widget as a percentage/fraction of the parent window using place()?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# relx=0.5, rely=0.5 places at 50% width and 50% height
# relwidth=0.8, relheight=0.4 gives 80% parent width and 40% height
box = tk.Label(root, text="Dynamic", bg="yellow")
box.place(relx=0.5, rely=0.5, relwidth=0.8, relheight=0.4, anchor=tk.CENTER)

info = box.place_info()
print("relx:", info["relx"], "relwidth:", info["relwidth"])
root.destroy()`,
    stdoutExpected: 'relx: 0.5 relwidth: 0.8',
    explanationTitle: 'place() Relative Coordinates',
    explanationText:
      'place() supports relative coordinates using floats between 0.0 and 1.0: relx and rely define fractional offsets of the parent dimensions (0.5 is the exact center), while relwidth and relheight define fractional dimensions. These automatically scale when the parent window resizes.',
    complexityInfo: 'PCPP 3.3 Relative geometry layout',
  },
  {
    id: 'pcpp-s3-fc-055',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'place(): anchor point positioning (anchor=CENTER vs NW)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Why is anchor=tk.CENTER necessary when centering a widget at relx=0.5, rely=0.5?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# Default anchor is 'nw' (top-left corner of the widget).
# To place the CENTER of the widget at (0.5, 0.5), anchor must be 'center'!
btn = tk.Button(root, text="True Center")
btn.place(relx=0.5, rely=0.5, anchor=tk.CENTER)

print("Anchor point:", btn.place_info()["anchor"])
root.destroy()`,
    stdoutExpected: 'Anchor point: center',
    explanationTitle: 'place() Anchor Point Alignment',
    explanationText:
      'The default anchor for place() is "nw" (northwest / top-left corner). Without anchor=tk.CENTER, placing at relx=0.5, rely=0.5 aligns the top-left corner of the widget with the center of the window, causing the widget to appear skewed towards the bottom-right.',
    complexityInfo: 'PCPP 3.3 True centering pattern in Tkinter',
  },
  {
    id: 'pcpp-s3-fc-056',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'Geometry introspection: winfo_width() vs winfo_reqwidth()',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the distinction between widget.winfo_reqwidth() and widget.winfo_width()?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Query Size")
btn.pack()

# winfo_reqwidth(): size the widget requested based on font/content
# winfo_width(): actual allocated size on screen (returns 1 before mainloop/update!)
req_w = btn.winfo_reqwidth()
root.update_idletasks()
actual_w = btn.winfo_width()

print("Requested width > 0:", req_w > 0)
print("Actual width > 0:", actual_w > 0)
root.destroy()`,
    stdoutExpected: "Requested width > 0: True\nActual width > 0: True",
    explanationTitle: 'winfo_reqwidth vs. winfo_width',
    explanationText:
      'winfo_reqwidth() and winfo_reqheight() return the natural dimensions requested by the widget based on its contents (text, font, padding). winfo_width() and winfo_height() return the actual physical pixel dimensions allocated on screen by the geometry manager. Before the window is displayed or update_idletasks() is called, winfo_width() returns 1.',
    complexityInfo: 'Subtle exam trap: winfo_width() returns 1 if not yet mapped',
  },
  {
    id: 'pcpp-s3-fc-057',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'Geometry introspection: parsing root.winfo_geometry()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does root.winfo_geometry() return, and how do you parse its components?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
root.geometry("400x300+50+60")
root.update_idletasks()

geo_str = root.winfo_geometry()
# Format: "{width}x{height}+{x}+{y}"
print("Geometry string matches format:", "x" in geo_str and "+" in geo_str)
root.destroy()`,
    stdoutExpected: 'Geometry string matches format: True',
    explanationTitle: 'winfo_geometry() Format',
    explanationText:
      'winfo_geometry() returns the current active window dimensions and desktop screen coordinates formatted as a string "widthxheight+x+y" (e.g. "400x300+50+60"). Calling root.update_idletasks() ensures the geometry manager has finalized geometry calculation before querying.',
    complexityInfo: 'PCPP 3.3 Window geometry querying',
  },
  {
    id: 'pcpp-s3-fc-058',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'Querying manager configuration with pack_info(), grid_info(), place_info()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What do pack_info(), grid_info(), and place_info() return, and what error occurs if called on the wrong manager?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Test")
btn.grid(row=1, column=2)

info = btn.grid_info()
print("grid_info type:", type(info).__name__)
print("row:", info["row"], "column:", info["column"])

try:
    # Calling pack_info() on a gridded widget raises TclError:
    btn.pack_info()
except tk.TclError as e:
    print("Caught:", type(e).__name__)
root.destroy()`,
    stdoutExpected: "grid_info type: dict\nrow: 1 column: 2\nCaught: TclError",
    explanationTitle: 'Geometry Information Inspection',
    explanationText:
      'widget.grid_info(), widget.pack_info(), and widget.place_info() return dictionaries containing all active layout options for that specific geometry manager. Invoking an info method for a manager other than the one currently controlling the widget raises a tk.TclError (e.g., "window is not packed").',
    complexityInfo: 'PCPP 3.3 Geometry inspection APIs',
  },
  {
    id: 'pcpp-s3-fc-059',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'Screen dimensions with winfo_screenwidth() and winfo_screenheight()',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you query the full screen resolution of the display monitor in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
sw = root.winfo_screenwidth()
sh = root.winfo_screenheight()
print("Screen dimensions are positive ints:", isinstance(sw, int) and sw > 0)
root.destroy()`,
    stdoutExpected: 'Screen dimensions are positive ints: True',
    explanationTitle: 'Display Screen Resolution Queries',
    explanationText:
      'widget.winfo_screenwidth() and widget.winfo_screenheight() return the integer width and height of the host display screen in pixels. These methods can be called on any widget, but are typically called on root to center windows or configure fullscreen displays.',
    complexityInfo: 'PCPP 3.3 Display metrics',
  },
  {
    id: 'pcpp-s3-fc-060',
    track: 'pcpp',
    cardType: 'PCPP 3.3 • Geometry Managers',
    topic: 'Relative widget offset with winfo_x() and winfo_y()',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What do widget.winfo_x() and widget.winfo_y() return, and relative to what origin?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
frame = tk.Frame(root)
frame.pack()
btn = tk.Button(frame, text="Click")
btn.pack(padx=25, pady=35)
root.update_idletasks()

# winfo_x() and winfo_y() return position relative to master/parent:
print("X offset relative to frame:", btn.winfo_x() == 25)
print("Y offset relative to frame:", btn.winfo_y() == 35)
root.destroy()`,
    stdoutExpected: "X offset relative to frame: True\nY offset relative to frame: True",
    explanationTitle: 'Parent-Relative Widget Coordinates',
    explanationText:
      'widget.winfo_x() and widget.winfo_y() return the pixel coordinate of the widget’s top-left corner relative to the top-left corner of its immediate parent/master container. To get absolute screen coordinates, use winfo_rootx() and winfo_rooty().',
    complexityInfo: 'winfo_x/y (parent) vs winfo_rootx/rooty (screen)',
  },

  // =========================================================================
  // CHAPTER 3.4: EVENT-DRIVEN PROGRAMMING (Cards 61 to 75)
  // =========================================================================
  {
    id: 'pcpp-s3-fc-061',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'The event-driven architecture and asynchronous event queue',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does an event-driven GUI architecture differ from traditional linear/batch programming?',
    codeSnippet: `# Traditional: Code controls execution flow linearly from top to bottom.
# Event-driven: The event loop (mainloop) waits for external stimuli (clicks, keys)
# and dispatches them to registered handler functions asynchronously.
import tkinter as tk

root = tk.Tk()
print("Event-driven model: reactive callbacks rather than active polling")
root.destroy()`,
    stdoutExpected: 'Event-driven model: reactive callbacks rather than active polling',
    explanationTitle: 'Event-Driven Paradigm in Tkinter',
    explanationText:
      'In event-driven programming, the flow of the application is determined by events (user actions like mouse clicks, keyboard presses, sensor inputs, or timer ticks). The application initializes, registers callback handlers, and enters an infinite event loop (mainloop) waiting for events.',
    complexityInfo: 'PCPP 3.4 Foundational event model',
  },
  {
    id: 'pcpp-s3-fc-062',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'widget.bind(sequence, handler) syntax and callback signature',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What argument must every callback function registered with widget.bind() accept?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Action")

# Unlike command=callback (which takes 0 args),
# bind() callbacks MUST accept an Event object:
def on_event(event):
    print("Event received for widget:", event.widget is btn)

btn.bind("<Button-1>", on_event)
btn.event_generate("<Button-1>")
root.destroy()`,
    stdoutExpected: 'Event received for widget: True',
    explanationTitle: 'bind() Callback Signature',
    explanationText:
      'Functions registered via widget.bind(sequence, handler) are passed exactly one argument by Tkinter: an instance of the tkinter.Event class containing event metadata (x, y, keysym, widget, etc.). Declaring a bind callback with zero arguments raises a TypeError when triggered.',
    complexityInfo: 'High-frequency exam trap: command=func takes 0 args, bind() takes 1 arg',
  },
  {
    id: 'pcpp-s3-fc-063',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Mouse click event sequences (<Button-1>, <Button-2>, <Button-3>)',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Which event sequences correspond to left, middle, and right mouse clicks in Tkinter?',
    codeSnippet: `import tkinter as tk

# Standard mouse mappings:
# <Button-1>: Left mouse button
# <Button-2>: Middle mouse button (wheel click)
# <Button-3>: Right mouse button (context menu trigger)
# Note: On macOS with a 1-button trackpad, <Button-2> is sometimes right click.

print("<Button-1> is left click")
print("<Button-2> is middle click")
print("<Button-3> is right click")`,
    stdoutExpected: "<Button-1> is left click\n<Button-2> is middle click\n<Button-3> is right click",
    explanationTitle: 'Mouse Button Event Sequences',
    explanationText:
      'In Tkinter event strings: <Button-1> represents the primary (left) mouse button; <Button-2> represents the middle button (or clicking the scroll wheel); <Button-3> represents the secondary (right) mouse button. Alternatively, shorthand sequences <1>, <2>, and <3> can be used.',
    complexityInfo: 'PCPP 3.4 Mouse event sequences',
  },
  {
    id: 'pcpp-s3-fc-064',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Mouse motion and dragging sequences (<Motion> and <B1-Motion>)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the distinction between <Motion> and <B1-Motion> event sequences?',
    codeSnippet: `import tkinter as tk

# <Motion>: Triggered whenever mouse moves over widget, regardless of buttons
# <B1-Motion>: Triggered ONLY when mouse moves while holding down Button 1 (Drag)
# <B2-Motion>: Drag with middle button
# <B3-Motion>: Drag with right button

print("<Motion>: simple cursor movement")
print("<B1-Motion>: mouse dragging with left button held")`,
    stdoutExpected: "<Motion>: simple cursor movement\n<B1-Motion>: mouse dragging with left button held",
    explanationTitle: 'Motion vs. Dragging Events',
    explanationText:
      '<Motion> fires continuously as the mouse moves across the widget area without any mouse buttons pressed. <B1-Motion> fires when the mouse is moved while holding down the left mouse button (Button 1), which is the standard event for implementing canvas drawing and drag-and-drop operations.',
    complexityInfo: 'PCPP 3.4 Motion and drag events',
  },
  {
    id: 'pcpp-s3-fc-065',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Double-click and triple-click sequences (<Double-Button-1>, <Triple-Button-1>)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you detect double and triple mouse clicks on a Tkinter widget?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
lbl = tk.Label(root, text="Double Click Target")

# Multi-click modifier prefixes:
# <Double-Button-1> or <Double-1>
# <Triple-Button-1> or <Triple-1>
lbl.bind("<Double-Button-1>", lambda e: print("Double clicked"))
print("Double click bound successfully")
root.destroy()`,
    stdoutExpected: 'Double click bound successfully',
    explanationTitle: 'Double and Triple Click Modifiers',
    explanationText:
      'Prefixing the button sequence with Double- (e.g. <Double-Button-1>) or Triple- (e.g. <Triple-Button-1>) matches rapid successive clicks within the operating system’s double-click time threshold.',
    complexityInfo: 'PCPP 3.4 Multi-click binding',
  },
  {
    id: 'pcpp-s3-fc-066',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Button release events (<ButtonRelease-1>)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you detect when the user releases a previously pressed mouse button?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
canvas = tk.Canvas(root)

# Press down: <Button-1>
# Release: <ButtonRelease-1>
canvas.bind("<ButtonRelease-1>", lambda e: print("Released Button 1"))
canvas.event_generate("<ButtonRelease-1>")
root.destroy()`,
    stdoutExpected: 'Released Button 1',
    explanationTitle: 'ButtonRelease Event Sequence',
    explanationText:
      '<ButtonRelease-1>, <ButtonRelease-2>, and <ButtonRelease-3> fire when the user releases the corresponding mouse button. Pairing <Button-1> with <ButtonRelease-1> allows tracking drag operations from initial click coordinates to drop coordinates.',
    complexityInfo: 'PCPP 3.4 Button release detection',
  },
  {
    id: 'pcpp-s3-fc-067',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Mouse wheel scrolling (<MouseWheel> and platform differences)',
    category: 'T3: GUI Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does Tkinter handle mouse wheel scrolling across Windows/macOS versus Linux X11?',
    codeSnippet: `import tkinter as tk

# Windows / macOS: <MouseWheel> sequence, event.delta contains scroll amount (+/- 120)
# Linux X11: <Button-4> (scroll up) and <Button-5> (scroll down)

def on_scroll(event):
    if hasattr(event, 'delta') and event.delta != 0:
        scroll_units = int(-1 * (event.delta / 120))
        return scroll_units
    return 0

print("Cross-platform scroll: <MouseWheel> with event.delta vs <Button-4>/<Button-5>")`,
    stdoutExpected: 'Cross-platform scroll: <MouseWheel> with event.delta vs <Button-4>/<Button-5>',
    explanationTitle: 'Mouse Wheel Cross-Platform Handling',
    explanationText:
      'On Windows and macOS, scroll wheel rotations fire a single <MouseWheel> event with event.delta representing magnitude and direction (multiples of 120). On Linux X11, scrolling triggers discrete button clicks: <Button-4> for scroll up and <Button-5> for scroll down.',
    complexityInfo: 'PCPP 3.4 Cross-platform scrolling trap',
  },
  {
    id: 'pcpp-s3-fc-068',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Keyboard event sequences: <KeyPress> and <KeyRelease>',
    category: 'T3: GUI Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you capture any general key press or key release event in Tkinter?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root)
entry.pack()

# <KeyPress> (shorthand <Key>) fires when key goes down
# <KeyRelease> fires when key springs back up
entry.bind("<Key>", lambda e: print("Key pressed:", e.char))
print("Key event bound successfully")
root.destroy()`,
    stdoutExpected: 'Key event bound successfully',
    explanationTitle: 'General Keyboard Event Binding',
    explanationText:
      '<KeyPress> (or simply <Key>) captures any key down event on a widget that currently holds keyboard focus. <KeyRelease> fires when the key is released. For non-Entry widgets like Canvas or Frame to receive key events, you must call widget.focus_set().',
    complexityInfo: 'PCPP 3.4 Keyboard events and focus requirement',
  },
  {
    id: 'pcpp-s3-fc-069',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Special key identifiers (<Return>, <Escape>, <BackSpace>, <Tab>, <space>)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What are the exact event sequence names for Enter, Escape, Backspace, Tab, and Spacebar?',
    codeSnippet: `import tkinter as tk

# Standard Tkinter special key names (case-sensitive!):
# Enter key:     <Return>
# Escape key:    <Escape>
# Backspace:     <BackSpace>
# Tab key:       <Tab>
# Spacebar:      <space> (all lowercase)
# Delete key:    <Delete>

print("<Return>, <Escape>, <BackSpace>, <Tab>, <space>")`,
    stdoutExpected: '<Return>, <Escape>, <BackSpace>, <Tab>, <space>',
    explanationTitle: 'Special Key Names',
    explanationText:
      'Special non-printable keys have specific, case-sensitive names in Tkinter: <Return> for Enter, <Escape> for Esc, <BackSpace> for backspace (note capital S), <Tab> for Tab, and <space> for spacebar (all lowercase). Writing <Enter> does NOT bind the Enter key; <Enter> is the mouse hover event!',
    complexityInfo: 'Crucial exam trap: <Return> is Enter key; <Enter> is mouse hover!',
  },
  {
    id: 'pcpp-s3-fc-070',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Key modifier combinations (<Control-c>, <Alt-F4>, <Shift-Up>)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you specify keyboard shortcut combinations with Control, Alt, and Shift?',
    codeSnippet: `import tkinter as tk

# Modifiers: Control, Alt, Shift, Meta
# Format: <Modifier-KeyName>
# Examples:
# <Control-c> or <Control-Key-c>
# <Alt-F4>
# <Shift-Up>
# <Control-Shift-s>

print("<Control-s> binds Ctrl+S shortcut")`,
    stdoutExpected: '<Control-s> binds Ctrl+S shortcut',
    explanationTitle: 'Keyboard Shortcut Modifiers',
    explanationText:
      'Modifiers are prepended with a hyphen before the key name, such as <Control-c>, <Alt-F4>, <Shift-Return>, or multi-modifiers like <Control-Shift-s>. On macOS, Command is typically mapped to <Command-Key> or <Mod1-Key>.',
    complexityInfo: 'PCPP 3.4 Shortcut modifier binding',
  },
  {
    id: 'pcpp-s3-fc-071',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Window resize and reposition event: <Configure>',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Which event sequence fires when a widget or window is resized or moved on screen?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()

def on_resize(event):
    # event.width and event.height provide updated dimensions
    pass

root.bind("<Configure>", on_resize)
print("Bound <Configure> for responsive resize detection")
root.destroy()`,
    stdoutExpected: 'Bound <Configure> for responsive resize detection',
    explanationTitle: '<Configure> Window Lifecycle Event',
    explanationText:
      'The <Configure> event sequence fires whenever a widget changes size, changes position, or is remapped by its geometry manager. Binding <Configure> on the root window or a Canvas allows dynamic redrawing or updating dimensions when the user resizes the window.',
    complexityInfo: 'PCPP 3.4 Window reconfiguration detection',
  },
  {
    id: 'pcpp-s3-fc-072',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Mouse enter and leave events: <Enter> and <Leave>',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you detect when the mouse cursor enters or leaves the boundary of a widget (hovering)?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text="Hover Over Me")

# <Enter>: Cursor crosses INTO the widget boundary (Hover start)
# <Leave>: Cursor moves OUT OF the widget boundary (Hover end)
btn.bind("<Enter>", lambda e: btn.config(bg="lightblue"))
btn.bind("<Leave>", lambda e: btn.config(bg="SystemButtonFace"))

print("<Enter> and <Leave> configured for hover styling")
root.destroy()`,
    stdoutExpected: '<Enter> and <Leave> configured for hover styling',
    explanationTitle: '<Enter> and <Leave> Hover Events',
    explanationText:
      '<Enter> fires when the mouse pointer moves inside the visible boundary of a widget. <Leave> fires when the pointer exits the widget boundary. Note again: <Enter> is mouse hovering, whereas the keyboard Enter key is <Return>.',
    complexityInfo: 'High-frequency exam trap: <Enter> is NOT the keyboard Enter key',
  },
  {
    id: 'pcpp-s3-fc-073',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Focus events: <FocusIn> and <FocusOut>',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you detect when an Entry or other widget gains or loses keyboard focus?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root)

# <FocusIn>: Widget receives keyboard focus (e.g. clicked or tabbed into)
# <FocusOut>: Widget loses keyboard focus
entry.bind("<FocusIn>", lambda e: print("Gained focus"))
entry.bind("<FocusOut>", lambda e: print("Lost focus"))

print("<FocusIn> and <FocusOut> bound")
root.destroy()`,
    stdoutExpected: '<FocusIn> and <FocusOut> bound',
    explanationTitle: 'Keyboard Focus Events',
    explanationText:
      '<FocusIn> is generated when a widget becomes the active receiver of keyboard input (via user tab navigation or widget.focus_set()). <FocusOut> occurs when focus shifts away to another widget. These are essential for input validation and placeholder text management.',
    complexityInfo: 'PCPP 3.4 Focus tracking',
  },
  {
    id: 'pcpp-s3-fc-074',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Event object coordinates: event.x and event.y (widget-relative)',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What do event.x and event.y represent when a mouse event is passed to an event handler?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
canvas = tk.Canvas(root, width=200, height=200)

def handle_click(event):
    # event.x, event.y: coordinates in pixels relative to the widget's top-left
    print(f"Clicked inside canvas at ({event.x}, {event.y})")

canvas.bind("<Button-1>", handle_click)
canvas.event_generate("<Button-1>", x=45, y=90)
root.destroy()`,
    stdoutExpected: 'Clicked inside canvas at (45, 90)',
    explanationTitle: 'Widget-Relative Coordinates (event.x, event.y)',
    explanationText:
      'event.x and event.y report the pixel position of the mouse cursor relative to the top-left corner (0, 0) of the specific widget that received the event. For canvas clicks, these directly match the canvas item coordinate system.',
    complexityInfo: 'PCPP 3.4 Event object coordinates',
  },
  {
    id: 'pcpp-s3-fc-075',
    track: 'pcpp',
    cardType: 'PCPP 3.4 • Event-Driven Programming',
    topic: 'Event object screen coordinates: event.x_root and event.y_root',
    category: 'T3: GUI Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What do event.x_root and event.y_root represent, and when are they needed?',
    codeSnippet: `import tkinter as tk

root = tk.Tk()
# event.x_root and event.y_root: pixel position relative to the PHYSICAL SCREEN
# Essential for positioning context popup menus at cursor:
# menu.tk_popup(event.x_root, event.y_root)

print("x_root and y_root give screen-absolute coordinates for popups")
root.destroy()`,
    stdoutExpected: 'x_root and y_root give screen-absolute coordinates for popups',
    explanationTitle: 'Screen-Absolute Coordinates',
    explanationText:
      'event.x_root and event.y_root report the cursor’s position relative to the top-left corner of the entire computer display screen. They are primarily used when posting context menus (popup menus) via menu.post(event.x_root, event.y_root) so the menu appears exactly under the mouse pointer.',
    complexityInfo: 'PCPP 3.4 Context popup menu positioning',
  },
];
