import { Flashcard } from '../types';

export const pcadSection5CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.1: MATPLOTLIB CORE ARCHITECTURE & OBJECT-ORIENTED CANVAS [Cards 1-20]
  // =========================================================================
  {
    id: 'pcad-sec5-001',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Matplotlib Architecture',
    topic: 'Object-Oriented API vs Stateful pyplot Interface',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'Why is the Object-Oriented (OO) interface (`fig, ax = plt.subplots()`) strongly preferred over the stateful interface (`plt.plot()`) in production Python data analysis and reporting?',
    codeSnippet: `import matplotlib.pyplot as plt

# Stateful pyplot:
# plt.figure()
# plt.plot(x, y)
# plt.title('Sales')

# Object-Oriented API:
fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(x, y)
ax.set_title('Sales')`,
    options: [
      'The OO interface gives explicit reference to Figure and Axes objects, enabling precise control over multiple subplots, axes sharing, custom formatters, and complex layouts without relying on implicit global state',
      'The stateful interface cannot render colors or legends',
      'The OO interface executes on GPU while pyplot runs on CPU',
      'The stateful interface only works inside Jupyter notebooks'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig, ax = plt.subplots() provides explicit Axes handles for robust multi-plot customization and thread safety',
    explanationTitle: 'Object-Oriented Matplotlib Hierarchy',
    explanationText:
      'The stateful `pyplot` interface mimics MATLAB, tracking a single "current figure" and "current axes" implicitly in global memory. This becomes brittle and error-prone when generating multi-panel dashboards or working in multi-threaded web applications. The OO interface explicitly manages `Figure` and `Axes` instances.',
    deepDive:
      'Matplotlib object hierarchy: `Figure` (the entire canvas window) contains one or more `Axes` (the individual plot areas), which in turn contain `Axis` objects (x-axis, y-axis), ticks, labels, and plot `Artists` (lines, bars, text).',
    tags: ['Matplotlib', 'Object-Oriented', 'pyplot', 'Figure', 'Axes', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-002',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Subplot Grids',
    topic: 'Creating Multi-Panel Grids with plt.subplots',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When creating a 2x2 grid of subplots with `fig, axes = plt.subplots(2, 2)`, what is the type and shape of the returned `axes` variable, and how do you access the bottom-right subplot?',
    codeSnippet: `fig, axes = plt.subplots(nrows=2, ncols=2, figsize=(10, 8))
# How to address the bottom-right panel?`,
    options: [
      '`axes` is a 2D NumPy array of `Axes` objects with shape `(2, 2)`; the bottom-right panel is accessed via `axes[1, 1]`',
      '`axes` is a Python dictionary with keys `["top_left", "top_right", "bottom_left", "bottom_right"]`',
      '`axes` is a single combined Axes object that automatically stitches plots together',
      '`axes` is a 1D list of length 4 accessed only via `axes.pop()`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'type(axes) is np.ndarray with shape (2, 2); bottom-right is indexed as axes[1, 1]',
    explanationTitle: 'Subplot Array Indexing Mechanics',
    explanationText:
      '`plt.subplots(nrows, ncols)` returns a NumPy ndarray of `AxesSubplot` objects corresponding to row and column coordinates. If iterating across all panels in a loop, flatten the array first: `for ax in axes.flat: ax.plot(...)`.',
    deepDive:
      'If $N=1$ (single plot), `subplots()` returns a scalar `Axes` object. If $1 \\times K$ or $K \\times 1$, it returns a 1D array. Set `squeeze=False` to force `axes` to always be a 2D array regardless of dimensions.',
    tags: ['subplots', 'Axes', 'Grid Layout', 'NumPy ndarray', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-003',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Subplot Alignment',
    topic: 'Sharing Axes Scales with sharex and sharey',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'You are generating side-by-side subplots comparing revenue across three product divisions over time. Why should you pass `sharey=True` inside `plt.subplots()`?',
    codeSnippet: `fig, axes = plt.subplots(1, 3, figsize=(15, 4), sharey=True)
for i, col in enumerate(['div_a', 'div_b', 'div_c']):
    axes[i].plot(df['date'], df[col])`,
    options: [
      '`sharey=True` synchronizes the y-axis scale and tick limits across all three subplots, ensuring fair visual comparison so smaller divisions are not visually exaggerated to look equal to large divisions',
      '`sharey=True` merges all three lines into a single plot area',
      '`sharey=True` calculates the sum of all divisions on the y-axis',
      '`sharey=True` removes all y-axis labels and numbers entirely'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sharey=True locks y-limits across panels, ensuring honest comparative visualization without visual scaling distortion',
    explanationTitle: 'Visual Integrity via Shared Axis Scaling',
    explanationText:
      'When panels have independent auto-scaled y-axes, a division with $10,000 revenue looks visually identical in amplitude to a division with $10,000,000 revenue. Setting `sharey=True` locks all panels to the same limits and suppresses redundant inner tick labels, enhancing chart integrity.',
    deepDive:
      'Zooming or panning on one axis in an interactive environment with `sharex=True` or `sharey=True` automatically pans all connected axes in unison.',
    tags: ['sharey', 'sharex', 'Visual Integrity', 'subplots', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-004',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Multi-Scale Visualization',
    topic: 'Dual Y-Axis Plots with ax.twinx()',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'You must visualize website traffic (sessions in thousands) and conversion rate (percentage from 0% to 5%) over time on the same chart. How do you create a secondary y-axis sharing the same x-axis?',
    codeSnippet: `fig, ax1 = plt.subplots(figsize=(10, 5))

# Plot sessions on primary axis
ax1.plot(df['date'], df['sessions'], color='navy', label='Sessions')
ax1.set_ylabel('Sessions (Thousands)', color='navy')

# Create twin axis for conversion rate
ax2 = ax1.twinx()
ax2.plot(df['date'], df['cvr'], color='crimson', label='Conversion Rate')
ax2.set_ylabel('Conversion Rate (%)', color='crimson')`,
    options: [
      '`ax1.twinx()` creates a twin `Axes` sharing the x-axis with an independent secondary y-axis on the right',
      '`plt.twiny()` creates a secondary x-axis at the bottom',
      '`ax1.add_scale("percentage")` creates a secondary axis',
      'Matplotlib cannot display two different units on the same figure'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.twinx() generates a secondary y-axis overlaying the same x-axis coordinates',
    explanationTitle: 'Dual-Axis Charts with twinx()',
    explanationText:
      '`ax.twinx()` creates an overlapping `Axes` instance that locks onto the identical x-coordinates but provides an independent y-scale on the right-hand spine. To prevent confusion, color-code each axis label and tick marks to match the corresponding line.',
    deepDive:
      'Note: In data visualization best practices, dual y-axes should be used sparingly because crossing slopes can mislead viewers into inferring false causal correlations. Two stacked subplots with `sharex=True` is often an ethically superior alternative.',
    tags: ['twinx', 'Dual Axis', 'Matplotlib OO', 'Time Series', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-005',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Layout Optimization',
    topic: 'Preventing Overlapping Labels with tight_layout and subplots_adjust',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When creating multi-panel figures with long axis titles and rotated tick labels, titles frequently collide or clip against neighboring subplots. What call automatically adjusts subplot spacing?',
    codeSnippet: `fig, axes = plt.subplots(2, 2)
# ... plotting code ...

# How to eliminate overlapping text elements?
fig.tight_layout()
# or in modern Matplotlib: plt.subplots(..., layout='constrained')`,
    options: [
      '`fig.tight_layout()` (or `layout="constrained"`) automatically computes and adjusts subplot padding so titles, axis labels, and tick marks do not overlap or get clipped',
      '`plt.fix_overlap()` rotates all text by 45 degrees',
      '`ax.autoscale()` adjusts font sizes downward until text fits',
      '`fig.canvas.draw()` deletes any text that collides with an axis'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig.tight_layout() automatically recalculates subplot margins and padding to prevent clipping and text overlap',
    explanationTitle: 'Automated Subplot Spacing with tight_layout',
    explanationText:
      '`tight_layout()` inspects the bounding boxes of all artist text labels and dynamically resizes the subplots within the figure window to accommodate margins. In Matplotlib 3.5+, passing `layout="constrained"` to `plt.subplots(layout="constrained")` provides an even more robust solver.',
    deepDive:
      'For manual fine-tuning of margin ratios: `fig.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1, wspace=0.3, hspace=0.4)`.',
    tags: ['tight_layout', 'layout', 'Padding', 'Subplot Spacing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-006',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Advanced Grid Layouts',
    topic: 'Custom Subplot Geometries with GridSpec',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'You want to design a dashboard where the main time-series plot spans the entire top half of the canvas, while two smaller summary histograms sit side-by-side in the bottom half. How is this constructed using Matplotlib?',
    codeSnippet: `import matplotlib.gridspec as gridspec

fig = plt.figure(figsize=(10, 6))
gs = gridspec.GridSpec(nrows=2, ncols=2, height_ratios=[2, 1])

ax_top = fig.add_subplot(gs[0, :])     # Spans all columns of row 0
ax_bot1 = fig.add_subplot(gs[1, 0])   # Bottom left
ax_bot2 = fig.add_subplot(gs[1, 1])   # Bottom right`,
    options: [
      'Use `matplotlib.gridspec.GridSpec` to define arbitrary row/column slices (e.g. `gs[0, :]`), custom aspect ratios, and unequal span allocations across subplots',
      '`plt.subplots()` can only create uniform grids where every cell is identical in size',
      'You must create three completely separate `.png` files and stitch them using Pillow',
      'GridSpec is only available in 3D plotting modules'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'GridSpec provides flexible multi-cell subplot spanning and custom height_ratios / width_ratios',
    explanationTitle: 'Asymmetric Dashboard Layouts with GridSpec',
    explanationText:
      '`GridSpec` divides the figure canvas into a virtual grid, allowing `add_subplot()` to accept 2D array slice notations like `gs[0, :]` (full row width) or `gs[:, 1]` (full column height). It also accepts `height_ratios=[2, 1]` to make the hero chart twice as tall as the bottom diagnostics.',
    deepDive:
      'In modern Matplotlib, `fig.subplot_mosaic([["top", "top"], ["bot1", "bot2"]])` provides an intuitive ASCII-like string syntax for the same functionality.',
    tags: ['GridSpec', 'subplot_mosaic', 'Dashboard Layout', 'Advanced Matplotlib', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-007',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Axis Formatting',
    topic: 'Custom Tick Formatting with FuncFormatter and PercentFormatter',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Instead of displaying raw float numbers like `0.025` or large integers like `5000000` on an axis, what Matplotlib ticker class formats numbers cleanly as `"$5.0M"` or `"2.5%"`?',
    codeSnippet: `import matplotlib.ticker as ticker

# Formatting large currency:
def millions_fmt(x, pos):
    return f'\${x*1e-6:.1f}M'

ax.yaxis.set_major_formatter(ticker.FuncFormatter(millions_fmt))

# Or for percentages:
ax.xaxis.set_major_formatter(ticker.PercentFormatter(xmax=1.0))`,
    options: [
      '`matplotlib.ticker.FuncFormatter` (which applies a custom Python formatting function) and `ticker.PercentFormatter` cleanly format tick labels dynamically',
      'Convert the data to strings before plotting with `df["val"].astype(str)`',
      '`ax.set_yticklabels()` should be hardcoded with manual strings',
      'Matplotlib does not support custom currency symbols'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ticker.FuncFormatter and ticker.PercentFormatter dynamically format tick values without hardcoding strings',
    explanationTitle: 'Dynamic Tick Formatting with matplotlib.ticker',
    explanationText:
      'Never hardcode tick strings using `set_xticklabels()` because resizing or zooming breaks label alignment. Using `ticker.FuncFormatter` guarantees that labels adapt dynamically to whichever tick positions Matplotlib calculates, producing professional axis annotations.',
    deepDive:
      'Other powerful tickers: `ticker.MultipleLocator(10)` (places ticks at every multiple of 10), `ticker.LogLocator()` (for logarithmic scales), and `ticker.MaxNLocator(5)` (caps ticks at 5).',
    tags: ['ticker', 'FuncFormatter', 'PercentFormatter', 'Axis Formatting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-008',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Scale Transformation',
    topic: 'Logarithmic and Symmetrical Log (Symlog) Axis Scales',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'You are plotting a variable that spans six orders of magnitude ($1$ to $1,000,000$) but also includes legitimate $0$ and negative values. Why does `ax.set_yscale("log")` fail, and what scale should you use instead?',
    codeSnippet: `# ax.set_yscale('log') -> Fails on <= 0!

# Correct solution for data spanning positive, zero, and negative values:
ax.set_yscale('symlog', linthresh=0.01)`,
    options: [
      'Standard `log` scale is mathematically undefined for non-positive numbers ($\\log(x)$ requires $x > 0$); `symlog` (symmetrical log) provides linear scaling near zero within `[-linthresh, linthresh]` and logarithmic scaling elsewhere',
      '`log` scale can only plot integers between 1 and 100',
      'You must add 1,000,000 to all data points before plotting on a standard log scale',
      '`symlog` is an alias for square-root scaling'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'symlog enables logarithmic scaling while safely crossing zero and negative domains via linthresh',
    explanationTitle: 'Symmetrical Log Scaling (symlog) for Mixed-Sign Data',
    explanationText:
      'Standard logarithmic transformation fails whenever data contains zero or negative values ($-\\infty$ error). `symlog` provides a smooth hybrid: it maps a linear range $[-linthresh, +linthresh]$ around zero, and transitions seamlessly to logarithmic scaling for magnitudes $|x| > linthresh$.',
    deepDive:
      'For purely non-negative right-skewed data ($x \\ge 0$), `ax.set_yscale("log")` is appropriate as long as zeros are excluded or handled with a minimal positive offset.',
    tags: ['symlog', 'log scale', 'Axis Scaling', 'Scale Transformation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-009',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Inverting Axes and Secondary Spines',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When creating a ranking chart where Rank #1 is the best and should appear at the top of the y-axis, how do you invert the vertical axis direction in Matplotlib?',
    codeSnippet: `ax.barh(df['team'], df['rank'])
# Default: lowest numerical value is at bottom
ax.invert_yaxis()`,
    options: [
      'Call `ax.invert_yaxis()` (or `ax.set_ylim(top, bottom)`), which flips the axis so the lowest number appears at the top',
      'Multiply all rank numbers by -1',
      'Rotate the entire figure 180 degrees using `fig.rotate(180)`',
      'Inverting axes is not supported in 2D bar charts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.invert_yaxis() flips the vertical coordinate orientation',
    explanationTitle: 'Inverting Axis Orientation',
    explanationText:
      '`ax.invert_yaxis()` and `ax.invert_xaxis()` reverse the visual order of coordinates. This is standard in ranking charts (Rank 1 at top), horizontal bar charts (top categories at top), or oceanographic/geological depth charts (0 at surface, depth increasing downward).',
    deepDive:
      'To check whether an axis is currently inverted: `ax.yaxis_inverted()` returns a boolean.',
    tags: ['invert_yaxis', 'Spines', 'Ranking Chart', 'Matplotlib OO', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-010',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Figure Sizing',
    topic: 'Figure Dimensions, DPI, and Aspect Ratio Mechanics',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What do `figsize=(10, 6)` and `dpi=300` specify when initializing a Matplotlib Figure, and how do they determine the final image pixel resolution?',
    codeSnippet: `fig, ax = plt.subplots(figsize=(10, 6), dpi=300)
# Final pixel resolution: (10 * 300) x (6 * 300) = 3000 x 1800 pixels!`,
    options: [
      '`figsize` defines the physical width and height in inches `(width_in, height_in)`; `dpi` specifies Dots Per Inch (pixels per inch); the resulting raster image is $3000 \\times 1800$ pixels',
      '`figsize` defines dimensions in centimeters; `dpi` is the frame rate in Hertz',
      '`figsize` defines width and height directly in pixels ($10 \\times 6$ pixels)',
      '`dpi` sets the maximum number of data points allowed on the chart'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Resolution (pixels) = (figsize_x * dpi) by (figsize_y * dpi); 10x6 at 300 dpi = 3000x1800 pixels',
    explanationTitle: 'Matplotlib Physical Sizing and DPI Scaling',
    explanationText:
      'Matplotlib specifies figure sizes in inches. Standard screen preview DPI is 100 dpi ($1000 \\times 600$ px). For high-resolution executive print reports, academic publication, or Retina displays, `dpi=300` ensures crisp rasterization without pixelated artifacts.',
    deepDive:
      'When exporting for print, using vector formats like PDF (`.pdf`) or SVG (`.svg`) eliminates DPI scaling concerns because shapes and fonts scale infinitely without raster degradation.',
    tags: ['figsize', 'dpi', 'Image Resolution', 'Figure Sizing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-011',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Time-Series Visualization',
    topic: 'DateTime Axis Formatting with mdates',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you format a DateTime x-axis to display only month abbreviations and 4-digit years (e.g. "Jan 2026") spaced at 3-month intervals?',
    codeSnippet: `import matplotlib.dates as mdates

ax.plot(df['date'], df['revenue'])
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=3))
ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
fig.autofmt_xdate()`,
    options: [
      'Use `mdates.MonthLocator(interval=3)` to position ticks every 3 months, `mdates.DateFormatter("%b %Y")` for strftime formatting, and `fig.autofmt_xdate()` to rotate overlapping date text',
      'Convert all dates to integers representing days since 1970',
      'Call `ax.set_xticklabels(["Jan", "Apr", "Jul", "Oct"])` manually',
      'Matplotlib automatically formats all timestamps as "%b %Y" by default'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'mdates.MonthLocator + DateFormatter + fig.autofmt_xdate() ensures precise, dynamic time-series tick labeling',
    explanationTitle: 'DateTime Formatting with matplotlib.dates (mdates)',
    explanationText:
      'The `matplotlib.dates` module converts Python `datetime` objects into Matplotlib internal floating-point day numbers. `MonthLocator(interval=3)` enforces quarterly tick placement, `DateFormatter` formats text via standard C strftime format codes, and `fig.autofmt_xdate()` rotates labels at 30 degrees to prevent horizontal overlap.',
    deepDive:
      'Other date locators: `mdates.YearLocator()`, `mdates.WeekdayLocator(byweekday=mdates.MO)`, and `mdates.HourLocator()`.',
    tags: ['mdates', 'DateFormatter', 'Time Series', 'autofmt_xdate', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-012',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Spine Customization',
    topic: 'Eliminating Visual Clutter by Removing Spines',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'Following Edward Tufte’s principle of maximizing the data-ink ratio, how do you remove the distracting top and right box borders (spines) from a Matplotlib plot?',
    codeSnippet: `ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Or in Seaborn: sns.despine()`,
    options: [
      'Set visibility to False on top and right spines: `ax.spines["top"].set_visible(False)` and `ax.spines["right"].set_visible(False)` (or `sns.despine()`)',
      'Set `ax.set_frame(False)` which deletes the entire plot area and data',
      'Set `ax.axis("off")` which hides the data lines and bars as well',
      'Spines cannot be removed in Matplotlib without recompiling the C backend'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.spines["top"].set_visible(False) removes chart junk boundaries to highlight core data',
    explanationTitle: 'Spine Removal and Chart Junk Elimination',
    explanationText:
      'A standard Matplotlib `Axes` has 4 spines: `"top"`, `"bottom"`, `"left"`, and `"right"`. Top and right spines rarely carry useful coordinate information and add visual weight (chart junk). Hiding them directs viewer focus to the data points and trendlines.',
    deepDive:
      'To offset remaining spines away from data points: `ax.spines["left"].set_position(("outward", 10))` creates a modern, detached axis look.',
    tags: ['spines', 'Data-Ink Ratio', 'despine', 'Chart Junk', 'Tufte', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-013',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Step Plots vs Line Plots for Discrete State Changes',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When visualizing interest rates, pricing tiers, or inventory stock levels that change discretely at instantaneous points in time, why is `ax.step()` preferred over `ax.plot()`?',
    codeSnippet: `# ax.plot() draws slanted diagonal lines between points (misleading continuous interpolation)
# ax.step() draws piecewise constant horizontal steps:
ax.step(dates, interest_rates, where='post', color='darkblue')`,
    options: [
      '`ax.step()` renders piecewise constant horizontal lines reflecting that the rate stays constant until a discrete change event occurs, whereas `ax.plot()` draws diagonal lines falsely implying continuous gradual transition',
      '`ax.step()` automatically runs linear regression between points',
      '`ax.step()` converts continuous rates into ordinal ranking integers',
      '`ax.step()` is designed exclusively for plotting stairs in architectural blueprints'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'step(where="post") preserves discrete piecewise constant states without false diagonal interpolation',
    explanationTitle: 'Piecewise Constant Visualizations with ax.step',
    explanationText:
      'Connecting discrete jump events with diagonal lines (`ax.plot`) communicates false intermediary values. For example, if a central bank raises interest rates from 2% to 3% on July 1st, a standard line chart implies the rate was 2.5% on June 15th. `ax.step(where="post")` maintains the constant 2% level until the exact date of the jump.',
    deepDive:
      'Parameter `where` controls step placement: `"pre"` steps before the x-point; `"post"` steps after the x-point; `"mid"` steps halfway between points.',
    tags: ['ax.step', 'Step Plot', 'Discrete Time Series', 'Visual Integrity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-014',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Fill Between and Uncertainty Bands with ax.fill_between',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you shade a semi-transparent confidence interval band (between lower bound `y_lower` and upper bound `y_upper`) around a mean regression forecast line?',
    codeSnippet: `ax.plot(x, y_mean, color='teal', label='Predicted Mean')
ax.fill_between(x, y_lower, y_upper, color='teal', alpha=0.2, label='95% CI')`,
    options: [
      'Call `ax.fill_between(x, y_lower, y_upper, alpha=0.2)` to shade the polygonal region between the two boundary curves with 20% opacity',
      'Call `ax.shade(y_lower, y_upper)`',
      'Draw hundreds of vertical lines connecting each lower and upper coordinate',
      '`ax.fill_between()` can only fill between a line and the zero axis'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.fill_between(x, y1, y2, alpha=0.2) renders continuous shaded uncertainty ribbons',
    explanationTitle: 'Uncertainty Bands with fill_between',
    explanationText:
      '`ax.fill_between(x, y1, y2, ...)` creates a `PolyCollection` filling the vertical span between curve $y_1$ and curve $y_2$. Setting `alpha=0.15` to `0.3` creates an unobtrusive confidence envelope that communicates statistical uncertainty without obscuring the central trendline.',
    deepDive:
      'You can also shade conditionally using the `where` parameter: `ax.fill_between(x, y1, y2, where=(y1 > y2), color="green", alpha=0.3)` to highlight regions of positive vs negative spread.',
    tags: ['fill_between', 'Confidence Interval', 'Uncertainty Band', 'alpha', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-015',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Horizontal vs Vertical Bar Charts for Long Categorical Labels',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When visualizing a ranking of 15 departments with long descriptive text labels (e.g. "Regulatory Compliance & Legal Affairs"), why is a horizontal bar chart (`ax.barh`) preferred over a vertical bar chart (`ax.bar`)?',
    codeSnippet: `# Vertical bars force 90-degree rotated labels or truncation:
# ax.bar(depts, scores) -> Hard to read, tilted heads!

# Horizontal bars provide natural left-to-right reading:
ax.barh(depts, scores)
ax.invert_yaxis() # Highest department at the top`,
    options: [
      'Horizontal bar charts provide natural left-to-right reading of full category names on the y-axis, eliminating awkward 90-degree neck-craning, overlapping labels, and severe text truncation',
      '`ax.barh` automatically sorts data in alphabetical order',
      'Vertical bar charts can only display up to 4 categories',
      '`ax.barh` uses less memory than `ax.bar`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Horizontal bar charts (barh) preserve natural horizontal reading orientation for long text labels',
    explanationTitle: 'Horizontal Bar Charts for Categorical Ergonomics',
    explanationText:
      'Human reading flows horizontally. Rotating vertical x-axis tick labels at 90 degrees increases cognitive load and slows comprehension. `ax.barh()` assigns categories to the vertical axis where long labels fit comfortably without tilting or truncation.',
    deepDive:
      'Always sort horizontal bars by value (`df.sort_values("metric")`) so readers can instantly perceive ranks without having to visually compare disparate bar lengths.',
    tags: ['barh', 'Categorical Visualization', 'Cognitive Ergonomics', 'Bar Chart', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-016',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Legend Placement and Out-of-Axes Anchoring (bbox_to_anchor)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'A plot contains 8 data series, and the legend covers up critical data points inside the chart area. How do you anchor the legend cleanly outside the plot canvas on the right side?',
    codeSnippet: `ax.legend(loc='upper left', bbox_to_anchor=(1.02, 1.0), frameon=False)`,
    options: [
      'Pass `bbox_to_anchor=(1.02, 1.0)` with `loc="upper left"`, positioning the top-left corner of the legend box just outside the right spine of the axes',
      'Set `loc="outside"` which is a built-in Matplotlib keyword',
      'Legends can never be rendered outside the axes bounding box',
      'Create a separate figure solely to host the legend text'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'bbox_to_anchor=(1.02, 1.0) with loc="upper left" places legend outside the right border of the Axes',
    explanationTitle: 'External Legend Placement with bbox_to_anchor',
    explanationText:
      '`bbox_to_anchor=(x, y)` specifies coordinates in normalized Axes space (where `(0, 0)` is bottom-left and `(1, 1)` is top-right). Placing it at $x=1.02$ moves the legend 2% beyond the right edge of the plot. Pair with `fig.savefig(..., bbox_inches="tight")` so the external legend is not clipped when saving.',
    deepDive:
      'In Matplotlib 3.7+, `ax.legend(loc="outside upper right")` was introduced as a convenient high-level shorthand.',
    tags: ['legend', 'bbox_to_anchor', 'loc', 'Chart Customization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-017',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Z-Order Mechanics for Layering Plot Elements',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'A scatter plot with dark data markers is obscured by a dense background grid and filled area ribbons. How do you force the scatter points to draw in front of all other plot elements?',
    codeSnippet: `ax.grid(True, zorder=1)
ax.fill_between(x, y1, y2, zorder=2)
ax.scatter(x, y, color='red', zorder=5) # Drawn on top!`,
    options: [
      'Assign an explicit `zorder` integer to each element: higher `zorder` values are painted on top of lower `zorder` values',
      'The element called last in code always paints on top regardless of type',
      'Set `ax.set_order("scatter_first")`',
      'Scatter plots always render in the background by default'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Artists with higher zorder values render in front of artists with lower zorder values',
    explanationTitle: 'Layering and Depth with zorder',
    explanationText:
      'Matplotlib maintains default z-orders: Images/Patches (1), Lines (2), Text (3). If you call `ax.grid(True)` after `ax.bar()`, the grid lines can slice right across your bars. Explicitly setting `ax.grid(zorder=0)` and `ax.bar(..., zorder=3)` ensures grid lines stay strictly behind the data.',
    deepDive:
      'Setting `ax.set_axisbelow(True)` is a convenient shorthand that forces all tick lines and grid lines to render behind all data artists.',
    tags: ['zorder', 'Layering', 'set_axisbelow', 'Visual Hierarchy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-018',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Direct Labeling vs Legends for Reducing Cognitive Load',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why does direct line labeling (placing the series name directly adjacent to the end of each line) outperform a separate color legend box in data storytelling?',
    codeSnippet: `# Direct labeling at the terminal point:
last_x = df['date'].iloc[-1]
for col in ['Product A', 'Product B']:
    line = ax.plot(df['date'], df[col], label=col)[0]
    ax.text(last_x, df[col].iloc[-1], f' {col}', 
            color=line.get_color(), va='center', fontweight='bold')`,
    options: [
      'Direct labeling eliminates the "split-attention effect" (eye saccades back and forth between line and legend box), allowing immediate comprehension of which line represents which entity',
      'Direct labeling takes up less memory in the browser',
      'Direct labeling allows plotting lines without colors',
      'Legends cannot support more than 2 items'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Direct labeling eliminates split-attention eye travel between chart lines and external legend boxes',
    explanationTitle: 'Eliminating the Split-Attention Effect with Direct Labeling',
    explanationText:
      'In multi-line charts, an external legend forces viewers to perform mental gymnastics: look at a line, read the color, find the color in the legend, read the label, and look back at the line. Direct end-of-line labeling connects label and data instantly, slashing cognitive load.',
    deepDive:
      'Make sure to pad horizontal limits slightly: `ax.set_xlim(right=last_x + pd.Timedelta(days=15))` so direct text labels do not get clipped at the right margin.',
    tags: ['Direct Labeling', 'Cognitive Load', 'Split-Attention', 'Data Storytelling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-019',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Interactive Canvas',
    topic: 'Clearing and Reusing Figures (cla vs clf vs close)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When generating 1,000 automated PDF chart reports in a loop, memory consumption steadily climbs to 10 GB and crashes Python. What cleanup call releases the underlying GUI/C figure memory?',
    codeSnippet: `for report_id in range(1000):
    fig, ax = plt.subplots()
    ax.plot(data[report_id])
    fig.savefig(f'report_{report_id}.png')
    plt.close(fig) # Essential memory release!`,
    options: [
      '`plt.close(fig)`: it closes the figure window and completely de-allocates internal GUI artists and canvas memory',
      '`ax.cla()`: it closes the Python process',
      '`fig.clf()`: it saves the file to disk',
      'Python garbage collection automatically destroys all figures without any manual call'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'plt.close(fig) releases canvas memory; omitting it causes severe memory leaks in batch generation loops',
    explanationTitle: 'Matplotlib Memory Management: cla vs clf vs close',
    explanationText:
      '`pyplot` maintains global references to every figure created via `plt.subplots()` to support interactive windows. Because of these global references, Python’s garbage collector CANNOT reclaim figure memory even if the local variable goes out of scope. You must explicitly call `plt.close(fig)` (or `plt.close("all")`) inside batch loops.',
    deepDive:
      'Difference: `ax.cla()` clears current axes (keeps figure); `fig.clf()` clears entire figure (keeps window); `plt.close(fig)` destroys the window and frees memory.',
    tags: ['plt.close', 'cla', 'clf', 'Memory Leak', 'Batch Reporting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-020',
    section: 'Section 5',
    chapter: '5.1',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Broken Axis Visualizations with Two Subplots',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'A dataset has values clustered between 0 and 50, but one extreme valid outlier reaches 10,000. How do you build a "broken axis" chart in Matplotlib to display both regions cleanly without squishing the normal distribution?',
    codeSnippet: `fig, (ax_top, ax_bot) = plt.subplots(2, 1, sharex=True, 
                                     gridspec_kw={'height_ratios': [1, 3]})
# Plot same data on both:
ax_top.scatter(x, y)
ax_bot.scatter(x, y)

# Set separate limits:
ax_top.set_ylim(9500, 10500) # Outlier region
ax_bot.set_ylim(0, 50)       # Normal region

# Hide colliding spines & add diagonal break slash marks:
ax_top.spines['bottom'].set_visible(False)
ax_bot.spines['top'].set_visible(False)`,
    options: [
      'Create two stacked subplots (`ax_top`, `ax_bot`) with `sharex=True`, set different y-limits on each, hide the opposing spines, and draw diagonal cut slash marks',
      'Truncate the outlier to 50 and add an asterisk',
      'Switch the font size of the outlier to 2pt',
      'Matplotlib cannot support broken axes under any circumstances'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Stacked subplots with shared x-axis and independent y-limits create a professional broken axis display',
    explanationTitle: 'Constructing Broken Axis Visualizations',
    explanationText:
      'When an outlier is legitimate (e.g. an extreme financial crash), omitting it is dishonest, but linear scaling squashes the rest of the dataset into an unreadable line. Stacking two subplots with custom height ratios (e.g. 1:3) and independent y-limits presents both normal detail and the extreme outlier with visual honesty.',
    deepDive:
      'Draw diagonal break markers using small line segments in axes coordinates (`transform=ax.transAxes`) to signify the discontinuous axis jump.',
    tags: ['Broken Axis', 'Outliers', 'Visual Integrity', 'Advanced Subplots', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 5.2: MATPLOTLIB STYLING, ANNOTATIONS, ERROR BARS & EXPORT [Cards 21-40]
  // =========================================================================
  {
    id: 'pcad-sec5-021',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Annotation',
    topic: 'Callout Annotations with ax.annotate and arrowprops',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you place an explanatory callout text with an arrow pointing to a specific anomaly data point $(x_0, y_0)$ on a Matplotlib chart?',
    codeSnippet: `ax.annotate(
    text='System Outage\\n(-45% Traffic)',
    xy=(anomaly_x, anomaly_y),
    xytext=(anomaly_x + 10, anomaly_y + 50),
    arrowprops=dict(facecolor='black', arrowstyle='->', lw=1.5),
    fontsize=10,
    fontweight='bold'
)`,
    options: [
      '`ax.annotate(text, xy, xytext, arrowprops=...)`: `xy` specifies the point to annotate; `xytext` specifies the label text position; `arrowprops` defines the arrow style',
      '`ax.text()` with parameter `draw_arrow=True`',
      '`ax.arrow()` with string text passed in the label argument',
      'Callouts can only be drawn using SVG post-processing software'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.annotate(text, xy=(target_x, target_y), xytext=(label_x, label_y), arrowprops={...}) draws callout arrows',
    explanationTitle: 'Precise Callouts with ax.annotate()',
    explanationText:
      '`ax.annotate()` is the standard tool for narrative data storytelling. It decouples the target data coordinates (`xy`) from the text placement (`xytext`), allowing text to sit cleanly in negative space while drawing an arrow directly to the peak or inflection point.',
    deepDive:
      'You can mix coordinate systems: `xycoords="data"` (data values) and `textcoords="offset points"` (places text an exact pixel/point offset away from the target point regardless of axis zoom).',
    tags: ['annotate', 'arrowprops', 'Data Storytelling', 'Callout', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-022',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Reference Overlays',
    topic: 'Threshold Overlays with axhline, axvline, and axvspan',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How do you add a horizontal dashed target benchmark line at $y = 100$ and shade an entire background recession interval between $x_1$ and $x_2$ on a Matplotlib chart?',
    codeSnippet: `ax.axhline(y=100, color='red', linestyle='--', linewidth=1.5, label='Target')
ax.axvspan(recession_start, recession_end, color='gray', alpha=0.2, label='Recession')`,
    options: [
      '`ax.axhline(y=100, ...)` draws an infinite horizontal line across the entire plot width; `ax.axvspan(x1, x2, ...)` shades a vertical rectangular span from top to bottom of the axes',
      '`ax.plot([0, 100], [100, 100])` and `ax.fill()`',
      '`ax.hline()` and `ax.vspan()`',
      'Benchmarks cannot span across the entire axis dynamically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'axhline spans the full horizontal width; axvspan shades the full vertical height between two x-bounds',
    explanationTitle: 'Reference Lines and Shaded Spans',
    explanationText:
      '`axhline()` and `axvline()` draw reference lines spanning 100% of the axis regardless of current or future zoom levels. `axhspan()` and `axvspan()` shade entire bands (e.g. historical recessions, target tolerance zones, or policy regimes) without requiring manual y-min or y-max coordinates.',
    deepDive:
      'To draw a partial line across a specific data segment rather than the infinite axis, use `ax.hlines(y, xmin, xmax)` (note the plural "s").',
    tags: ['axhline', 'axvspan', 'Reference Lines', 'Benchmark Overlays', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-023',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Error Representation',
    topic: 'Error Bars with ax.errorbar (Standard Deviation vs Confidence Intervals)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When visualizing experimental measurements with `ax.errorbar()`, what critical metadata must always be stated in the chart subtitle or caption regarding the error bars?',
    codeSnippet: `ax.errorbar(
    x, y_mean, 
    yerr=y_err, 
    fmt='o', 
    capsize=4, 
    capthick=1.5, 
    color='navy'
)`,
    options: [
      'The chart must explicitly clarify whether the error bars represent Standard Deviation ($SD$, variability of the data), Standard Error of the Mean ($SEM$, precision of the estimate), or a 95% Confidence Interval',
      'The brand of computer used to compute the numbers',
      'The exact seed used in the random number generator',
      'The time of day the chart was exported'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Always specify whether error bars represent SD, SEM, or 95% CI; identical bars mean completely different things',
    explanationTitle: 'Error Bar Semantic Integrity',
    explanationText:
      'Unlabeled error bars are ambiguous. $SD$ describes data spread (does not shrink as $N$ grows); $SEM = SD / \\sqrt{N}$ describes measurement precision (shrinks as $N$ grows); $95\\% CI \\approx 1.96 \\times SEM$ describes statistical inference. An analyst must declare the metric in the title or legend.',
    deepDive:
      'Asymmetric error bars can be plotted by passing a $2 \\times N$ array to `yerr=[lower_errors, upper_errors]`.',
    tags: ['errorbar', 'SEM', 'Standard Deviation', 'Confidence Interval', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-024',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Image Export',
    topic: 'Exporting Production Visualizations with fig.savefig Parameters',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What combination of parameters in `fig.savefig()` ensures that exported chart images have crisp high resolution for print and that external legends or titles are never cropped off at the edges?',
    codeSnippet: `fig.savefig(
    'quarterly_kpis.png',
    dpi=300,
    bbox_inches='tight',
    transparent=False,
    facecolor='white'
)`,
    options: [
      '`dpi=300` ensures print-quality resolution (300 dots per inch); `bbox_inches="tight"` dynamically crops the bounding box to enclose all external titles, labels, and legends',
      '`dpi=72` and `bbox_inches="none"`',
      '`format="bmp"` and `quality=100`',
      '`crop=True` and `auto_size=True`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig.savefig("...", dpi=300, bbox_inches="tight") prevents label clipping and guarantees print-ready sharpness',
    explanationTitle: 'Production Export Best Practices with savefig',
    explanationText:
      'By default, `savefig()` uses the figure canvas bounding box, which frequently cuts off external legends (`bbox_to_anchor`) or tilted x-axis labels. Setting `bbox_inches="tight"` instructs Matplotlib to calculate the union bounding box of all artists, preventing clipped labels.',
    deepDive:
      'Vector export: `fig.savefig("figure.pdf")` or `fig.savefig("figure.svg")` generates resolution-independent vector graphics ideal for publication or executive slides.',
    tags: ['savefig', 'bbox_inches', 'dpi', 'Image Export', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-025',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Color Architecture',
    topic: 'Sequential vs Diverging vs Qualitative Colormaps',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Which colormap category and example should be selected when visualizing net profit and loss (ranging from $-\\$50,000$ to $+\\$50,000$) with a natural neutral midpoint at zero?',
    codeSnippet: `# Sequential: Viridis, Blues (Ordered low to high)
# Qualitative: Set1, Tab10 (Categorical groups)
# Diverging: RdBu, Coolwarm (Two extremes with meaningful midpoint)

im = ax.imshow(profit_matrix, cmap='RdBu_r', vmin=-50000, vmax=50000)`,
    options: [
      'A Diverging colormap (e.g. `RdBu` or `coolwarm`) centered symmetrically at zero (`vmin=-50000`, `vmax=50000`), highlighting extreme negatives in red and extreme positives in blue with neutral white/gray at zero',
      'A Qualitative colormap (e.g. `Set1` or `tab10`)',
      'A Sequential colormap (e.g. `Blues` or `Greens`)',
      'A Rainbow colormap (`jet`)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Diverging colormaps highlight deviations in both directions from a critical neutral baseline (zero)',
    explanationTitle: 'Colormap Taxonomy: Sequential, Diverging, Qualitative',
    explanationText:
      'Use Sequential maps (Viridis, Blues) for continuous data with an absolute zero ($0$ to $+\\infty$). Use Diverging maps (RdBu, PiYG) when data has a meaningful critical center point (zero profit, 0% change, baseline average). Use Qualitative maps (tab10) for nominal categories with no inherent ordering.',
    deepDive:
      'Crucial: In diverging heatmaps, always set `vmin = -abs_max` and `vmax = +abs_max` so that the neutral white midpoint aligns mathematically with zero.',
    tags: ['Colormaps', 'Diverging', 'Sequential', 'Qualitative', 'Color Theory', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-026',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Color Integrity',
    topic: 'Perceptually Uniform Colormaps (Viridis vs Jet)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why has the legacy "Jet" (rainbow) colormap been deprecated in favor of perceptually uniform colormaps like "Viridis" in modern scientific data visualization?',
    codeSnippet: `# Legacy (Misleading!): cmap='jet'
# Modern (Perceptually Uniform & Colorblind Safe): cmap='viridis'`,
    options: [
      'Jet is not perceptually uniform: sharp non-linear luminance transitions (e.g. yellow band) create artificial visual gradients where data is smooth, and it is unreadable for colorblind individuals and when printed in grayscale; Viridis maps data values linearly to perceived luminance',
      'Jet takes 4 times longer to render on the CPU',
      'Viridis supports only 8-bit color displays',
      'Jet is proprietary software owned by MATLAB'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Perceptually uniform colormaps (Viridis/Plasma/Cividis) eliminate false gradient artifacts and preserve grayscale/colorblind legibility',
    explanationTitle: 'Perceptual Uniformity and the Flaws of Jet',
    explanationText:
      'In Jet, yellow has vastly higher perceived brightness than adjacent green and red, causing viewers to see false "edges" or features in the data that do not exist. `viridis`, `plasma`, `inferno`, and `magma` were designed so that step changes in data value correspond to equal step changes in perceived human brightness.',
    deepDive:
      '`cividis` was optimized for individuals with deuteranopia or protanopia (red-green color blindness), maintaining perceptual uniformity across all visual abilities.',
    tags: ['viridis', 'jet', 'Perceptual Uniformity', 'Colorblind Accessibility', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-027',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Colorbars',
    topic: 'Attaching and Formatting Colorbars with fig.colorbar',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When creating a scatter plot where marker colors represent customer lifetime value ($CLV$), how do you attach a standalone colorbar legend to the Figure?',
    codeSnippet: `scatter = ax.scatter(df['age'], df['frequency'], c=df['clv'], cmap='viridis')
cbar = fig.colorbar(scatter, ax=ax, orientation='vertical', shrink=0.8)
cbar.set_label('Customer Lifetime Value ($)', rotation=270, labelpad=15)`,
    options: [
      'Call `fig.colorbar(mappable, ax=ax)`, passing the `ScalarMappable` (the scatter plot object) and specifying the target axes to steal space from',
      '`ax.legend(colorbar=True)`',
      '`plt.show_colorbar()`',
      'Colorbars can only be attached to 2D heatmaps, never scatter plots'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig.colorbar(scatter, ax=ax) attaches a color legend mapped to the continuous variable',
    explanationTitle: 'Attaching Colorbars to Scatter Plots and Heatmaps',
    explanationText:
      '`fig.colorbar()` requires an artist implementing `ScalarMappable` (such as the object returned by `ax.scatter(c=...)`, `ax.imshow()`, or `ax.contourf()`). The `ax` argument tells Matplotlib which plot area to shrink to make room for the colorbar strip.',
    deepDive:
      'When displaying multiple subplots sharing the same color scale, pass `ax=axes.ravel().tolist()` to `fig.colorbar()` to create a single shared colorbar for the entire figure.',
    tags: ['colorbar', 'ScalarMappable', 'scatter', 'Matplotlib OO', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-028',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Styling Themes',
    topic: 'Global Styling Sheets with plt.style.use',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How can an analyst apply a clean, publication-ready design theme across all charts globally in Python without manually re-styling every element?',
    codeSnippet: `import matplotlib.pyplot as plt

# Apply built-in stylesheet:
plt.style.use('seaborn-v0_8-whitegrid')
# Or: plt.style.use(['dark_background'])`,
    options: [
      'Call `plt.style.use("style_name")`, which updates global `matplotlib.rcParams` for fonts, grids, spines, colors, and line widths across all subsequently generated figures',
      'Write a for-loop modifying every Axes object in memory',
      'Reinstall Matplotlib with the style flag enabled in pip',
      'Stylesheets can only be loaded from external CSS files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'plt.style.use() updates rcParams globally for all subsequent figures',
    explanationTitle: 'Matplotlib Global Stylesheets',
    explanationText:
      'Matplotlib includes dozens of pre-built stylesheets: `"tableau-colorblind10"`, `"seaborn-v0_8-whitegrid"`, `"ggplot"`, `"fivethirtyeight"`, and `"dark_background"`. You can inspect available styles via `plt.style.available`.',
    deepDive:
      'To apply a style temporarily to a single chart without mutating global settings, use a context manager: `with plt.style.context("fivethirtyeight"): plt.plot(...)`.',
    tags: ['style.use', 'rcParams', 'Themes', 'Styling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-029',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Direct Data Labeling on Bars in Bar Charts',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you add clean numerical data labels directly on top of or inside the bars of a bar chart in modern Matplotlib (v3.4+)?',
    codeSnippet: `bars = ax.bar(categories, values, color='skyblue')
ax.bar_label(bars, fmt='%.1f%%', padding=3, fontsize=10)`,
    options: [
      'Use `ax.bar_label(bars, fmt=..., padding=...)`, which automatically centers and formats numerical labels on each bar container',
      'Manually calculate bar coordinates and call `ax.text()` in a for-loop',
      'Set `ax.bar(..., show_labels=True)`',
      'Bar labels can only be displayed on hover in web browsers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.bar_label(container, fmt="...", padding=3) automatically places formatted labels on bar charts',
    explanationTitle: 'Automated Bar Labeling with ax.bar_label()',
    explanationText:
      'Prior to Matplotlib 3.4, analysts had to iterate through bar rectangles and compute coordinates manually. `ax.bar_label()` takes the `BarContainer` returned by `ax.bar()` or `ax.barh()` and automatically positions labels with optional formatting (`fmt="%.2f"`, `labels=...`) and padding.',
    deepDive:
      'For stacked bar charts, `ax.bar_label(bars, label_type="center")` centers values directly inside each colored segment.',
    tags: ['bar_label', 'BarContainer', 'Bar Chart', 'Data Labels', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-030',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Custom Line Styles, Markers, and Alpha Transparency',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'In a multi-series line chart with 10 overlapping lines, what visual techniques reduce clutter and highlight a single primary benchmark series?',
    codeSnippet: `# Background benchmark lines:
for other_series in competitors:
    ax.plot(dates, other_series, color='gray', alpha=0.3, linewidth=1)

# Primary hero series:
ax.plot(dates, our_company, color='navy', linewidth=2.5, marker='o', 
        markersize=4, label='Our Company', zorder=5)`,
    options: [
      'The "Gray & Color" visual hierarchy technique: mute secondary lines using light gray color, thin line widths, and low alpha transparency (e.g. `alpha=0.3`), while emphasizing the hero series with bold contrasting color, thicker line width, markers, and higher `zorder`',
      'Assign a distinct neon fluorescent color to every single line',
      'Make all lines dashed with identical thickness',
      'Draw the background lines as squares and the hero line as triangles'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Muting background series in low-opacity gray directs preattentive focus to the saturated hero series',
    explanationTitle: 'Preattentive Visual Hierarchy with Line Styling',
    explanationText:
      'The "spaghetti chart" problem occurs when 10+ colored lines create visual chaos. By setting background competitor lines to neutral gray (`color="lightgray"`, `alpha=0.35`), the viewer’s preattentive visual system instantly locks onto the single highlighted saturated line, conveying the analytical message in milliseconds.',
    deepDive:
      'Line style codes: `"-"` (solid), `"--"` (dashed), `":"` (dotted), `"-."` (dash-dot).',
    tags: ['Visual Hierarchy', 'Preattentive Attributes', 'alpha', 'Spaghetti Chart', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-031',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Typography & Math',
    topic: 'Mathematical Typography with TeX Markup in Labels',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How can an analyst render mathematical symbols, Greek letters, and formulas (e.g. $\\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}}$) in Matplotlib titles and axis labels?',
    codeSnippet: `ax.set_title(r'Empirical Convergence: $\\alpha = 0.05, \\sigma^2 = 1.0$', fontsize=12)
ax.set_ylabel(r'Density $f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$')`,
    options: [
      'Enclose TeX expressions inside dollar signs `$...$` within a raw string `r"..."`',
      'Install LaTeX on the operating system; Matplotlib cannot render math symbols natively',
      'Import the Greek alphabet from Python standard math library',
      'Use HTML `<sub>` and `<sup>` tags'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Raw strings with dollar signs r"$...$" invoke Matplotlib’s built-in mathtext TeX parsing engine',
    explanationTitle: 'Mathematical Notation via Built-in mathtext',
    explanationText:
      'Matplotlib ships with its own lightweight TeX engine (`mathtext`), meaning an external LaTeX distribution is not required. Prefacing strings with `r"..."` (raw string) prevents Python from misinterpreting backslashes (like `\\sigma` or `\\alpha`) as escape characters.',
    deepDive:
      'To use full external system LaTeX for rendering documents: set `plt.rcParams["text.usetex"] = True`.',
    tags: ['mathtext', 'TeX', 'LaTeX', 'Typography', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-032',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Lollipop Charts as Clean Alternatives to Bar Charts',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why do data visualization specialists often recommend "lollipop charts" (thin stem lines with circular end caps) over thick solid bar charts when comparing 30+ items?',
    codeSnippet: `y_pos = np.arange(len(df))
ax.hlines(y=y_pos, xmin=0, xmax=df['score'], color='lightgray', linewidth=1.5)
ax.plot(df['score'], y_pos, 'o', markersize=6, color='steelblue')
ax.set_yticks(y_pos)
ax.set_yticklabels(df['country'])`,
    options: [
      'Lollipop charts dramatically reduce data-ink saturation, eliminating heavy visual "ink moiré" vibrations caused by dozens of thick adjacent solid bars, while focusing viewer attention precisely on the end-point coordinate values',
      'Lollipop charts can only plot positive numbers',
      'Lollipop charts are processed using 3D graphics drivers',
      'Solid bar charts cannot be sorted'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Lollipop charts minimize visual clutter and ink weight, directing focus to exact terminal marker positions',
    explanationTitle: 'Lollipop Charts and Data-Ink Optimization',
    explanationText:
      'When dozens of categories are displayed, solid bars fill the canvas with heavy blocks of ink, overwhelming viewer attention. A lollipop chart combines `hlines()` with a terminal marker dot (`plot("o")`), achieving the same analytical comparison with minimal ink weight.',
    deepDive:
      'Lollipop charts are particularly effective for diverging comparisons where metrics extend in positive and negative directions from zero.',
    tags: ['Lollipop Chart', 'hlines', 'Data-Ink Ratio', 'Visual Design', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-033',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Custom Fonts and Corporate Typography in Matplotlib',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you configure Matplotlib to use a specific corporate sans-serif font family (e.g. "Helvetica" or "Inter") across all text elements in a dashboard?',
    codeSnippet: `import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['Inter', 'Helvetica', 'Arial', 'DejaVu Sans']`,
    options: [
      'Update `plt.rcParams["font.family"]` and supply an ordered fallback list of font names to `plt.rcParams["font.sans-serif"]`',
      'Rename system font files to match Matplotlib defaults',
      'Matplotlib only supports the default Bitstream Vera font',
      'Pass `font="Helvetica"` as an argument to every single plotting call'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'plt.rcParams["font.sans-serif"] sets the typography priority queue across all figure text elements',
    explanationTitle: 'Typography Configuration with rcParams',
    explanationText:
      'Corporate reporting requires brand-compliant typography. Setting `plt.rcParams["font.sans-serif"] = ["CorporateFont", "FallbackFont"]` creates an ordered priority queue. If the preferred font is unavailable on a client machine, Matplotlib gracefully falls back to the next available option.',
    deepDive:
      'To load a custom `.ttf` or `.otf` font file dynamically from a local path: `from matplotlib import font_manager; font_manager.fontManager.addfont("fonts/CustomFont.ttf")`.',
    tags: ['Typography', 'rcParams', 'font.family', 'Corporate Branding', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-034',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Stacked vs Grouped vs 100% Normalized Bar Charts',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When comparing proportion of customer segments (e.g. Low, Medium, High value) across regional sales branches of vastly different sizes, why is a 100% Stacked (Normalized) Bar Chart preferred over raw counts?',
    codeSnippet: `# Branch A: 10,000 customers | Branch B: 200 customers
crosstab_raw = pd.crosstab(df['branch'], df['segment'])
# Normalize across rows to sum to 100%:
crosstab_pct = crosstab_raw.div(crosstab_raw.sum(axis=1), axis=0) * 100
crosstab_pct.plot(kind='bar', stacked=True)`,
    options: [
      'Raw counts reflect total branch size rather than segment distribution; normalizing to 100% isolates the internal proportion breakdown, allowing fair apples-to-apples demographic comparisons across unequal branch populations',
      'Normalized bar charts eliminate the need for an x-axis',
      '100% stacked bar charts run 10x faster in pandas',
      'Raw counts can only be displayed in pie charts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '100% stacked bars normalize row totals to 1.0, enabling comparative percentage analysis across unequal group sizes',
    explanationTitle: '100% Normalized Stacked Bar Charts',
    explanationText:
      'In raw stacked bar charts, huge branches dominate the vertical scale, compressing small branches into thin slivers. Normalizing row totals via `.div(row_sums, axis=0)` equalizes total bar heights to 100%, allowing immediate visual comparison of category proportions across branches.',
    deepDive:
      'Limitation of stacked bars: While the bottom segment (anchored to $y=0$) is easy to compare across bars, middle segments share no common baseline, making precise comparison between them difficult.',
    tags: ['Stacked Bar', 'Normalization', 'Proportions', 'Crosstab', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-035',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Watermarks and Confidentiality Banners in Analytical Exports',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How do you overlay a faint diagonal "CONFIDENTIAL - INTERNAL ONLY" watermark across an analytical dashboard canvas in Matplotlib?',
    codeSnippet: `fig.text(
    0.5, 0.5, 
    'CONFIDENTIAL - INTERNAL ONLY',
    fontsize=32, 
    color='gray', 
    alpha=0.15,
    ha='center', 
    va='center', 
    rotation=30, 
    transform=fig.transFigure,
    zorder=100
)`,
    options: [
      'Call `fig.text(0.5, 0.5, "...", transform=fig.transFigure, alpha=0.15, rotation=30)` using normalized figure coordinates',
      '`ax.watermark("CONFIDENTIAL")`',
      'Insert text in every individual subplot title',
      'Watermarks can only be added using image editing software'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig.text(..., transform=fig.transFigure, alpha=0.15) stamps watermarks across the entire figure canvas',
    explanationTitle: 'Canvas-Wide Annotations and Watermarks',
    explanationText:
      '`fig.transFigure` maps `(0, 0)` to the bottom-left and `(1, 1)` to the top-right of the entire figure canvas (independent of any specific subplot axes). Placing low-opacity text (`alpha=0.15`) at `(0.5, 0.5)` creates an unobtrusive security or draft watermark.',
    deepDive:
      'Similarly, `fig.suptitle("Executive Summary", fontsize=16, y=0.98)` creates a global master title positioned neatly above all subplot panels.',
    tags: ['fig.text', 'transFigure', 'Watermark', 'suptitle', 'PCAD-31-02']
  }
];
