import { Flashcard } from '../types';

export const pcadSection5CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.2: MATPLOTLIB STYLING, ANNOTATIONS & EXPORT (Cont.) [Cards 36-40]
  // =========================================================================
  {
    id: 'pcad-sec5-036',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Types',
    topic: 'Hexbin Plots for Massive Overplotted Datasets',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When creating a 2D scatter plot with 2,000,000 observations, individual points merge into an unreadable solid black blob (catastrophic overplotting) and freeze the renderer. What Matplotlib chart type aggregates points into hexagonal 2D density bins?',
    codeSnippet: `# Scatter fails with 2M points!
# Solution:
hb = ax.hexbin(x, y, gridsize=50, cmap='inferno', mincnt=1)
fig.colorbar(hb, ax=ax, label='Point Density Count')`,
    options: [
      '`ax.hexbin(x, y, gridsize=50)`: it tessellates 2D space into regular hexagons and colors each hexagon based on the count of observations falling inside it',
      '`ax.hist()`: it can only plot 1D distributions',
      '`ax.scatter(..., marker="hexagon")`',
      '`ax.pie(x, y)`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'hexbin aggregates massive 2D coordinates into hexagonal density bins, avoiding overplotting and rendering lag',
    explanationTitle: 'Hexagonal Binning for Massive 2D Point Density',
    explanationText:
      '`ax.hexbin()` solves two critical problems with big data scatter plots: (1) Overplotting (where thousands of overlapping points obscure the true density peak), and (2) Vector memory bloat (rendering 2M individual SVG/PNG circle artists). Hexagons are optimal because their centers are equidistant from all 6 neighbors.',
    deepDive:
      'Setting `bins="log"` applies logarithmic color scaling to hexagonal bins, making low-density outliers and high-density cores visible simultaneously.',
    tags: ['hexbin', 'Overplotting', 'Density Plot', 'Big Data Visualization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-037',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Connecting Secondary Axes with ax.inset_axes and Zoom Magnification',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'How do you create an inset zoom box in Matplotlib that magnifies a dense cluster of points inside a larger scatter plot, complete with connecting boundary guide lines?',
    codeSnippet: `# Main plot:
ax.scatter(df['x'], df['y'])

# Inset zoom axes (placed inside main plot at x=0.5, y=0.5, width=0.45, height=0.45):
axins = ax.inset_axes([0.5, 0.5, 0.45, 0.45])
axins.scatter(df['x'], df['y'])
axins.set_xlim(20, 35)
axins.set_ylim(40, 55)

# Draw connecting lines from the zoom box to the magnified region:
ax.indicate_inset_zoom(axins, edgecolor='black')`,
    options: [
      'Call `ax.inset_axes([x, y, w, h])` to position the inset window and `ax.indicate_inset_zoom(axins)` to render connecting zoom lines',
      'Create a second figure window and position it over the monitor',
      '`ax.zoom()` with a bounding box coordinate array',
      'Inset magnification requires external browser JavaScript plugins'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.inset_axes() + ax.indicate_inset_zoom() generates an embedded magnifying glass with guide lines',
    explanationTitle: 'Embedded Inset Visualizations with indicate_inset_zoom',
    explanationText:
      '`inset_axes()` provides coordinate embedding inside an existing `Axes`. Calling `ax.indicate_inset_zoom(axins)` automatically calculates the bounding polygon of the magnified data region in the parent plot and draws connector lines to the corners of the inset window.',
    deepDive:
      'Inset axes coordinates `[x, y, w, h]` are specified in normalized parent axis space from 0.0 to 1.0, making layout placement independent of raw data coordinates.',
    tags: ['inset_axes', 'indicate_inset_zoom', 'Zoom', 'Advanced Matplotlib', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-038',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Dynamic Legend Filtering and Custom Proxy Artists',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When creating complex composite plots (e.g. combinations of lines, shaded bands, and points), how do you construct a clean custom legend using dummy "proxy artists"?',
    codeSnippet: `import matplotlib.lines as mlines
import matplotlib.patches as mpatches

# Build custom legend entries manually:
blue_line = mlines.Line2D([], [], color='blue', label='Historical Trend')
gray_patch = mpatches.Patch(color='gray', alpha=0.3, label='95% Forecast Band')
red_dot = mlines.Line2D([], [], color='red', marker='o', linestyle='None', label='Outlier Event')

ax.legend(handles=[blue_line, gray_patch, red_dot])`,
    options: [
      'Instantiate dummy `Line2D` and `Patch` objects with desired colors/labels and pass them directly to `ax.legend(handles=[...])`',
      'Plot invisible data points off-screen at $(x=-9999, y=-9999)$',
      'Call `ax.legend(manual=True)` and type raw text strings',
      'Matplotlib requires every legend entry to correspond to an existing plotted dataset'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Proxy artists (Line2D, Patch) allow full manual control over legend symbols, colors, and labels',
    explanationTitle: 'Proxy Artists for Custom Legends',
    explanationText:
      'Auto-generated legends often include unwanted artists or miss complex layered elements (like `fill_between` patches). Creating lightweight proxy artists (`matplotlib.patches.Patch`, `matplotlib.lines.Line2D`) lets the analyst craft a clean, tailored legend handle list.',
    deepDive:
      'Proxy artists require empty data coordinate lists `[]`, `[]`, meaning they consume negligible memory and add zero overhead to rendering.',
    tags: ['legend', 'Proxy Artists', 'Line2D', 'mpatches', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-039',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Color Architecture',
    topic: 'Alpha Blending and Overlapping Density Detection',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'Why is setting transparency `alpha=0.2` in a scatter plot an essential analytical practice when analyzing 10,000 points?',
    codeSnippet: `# Opaque points (alpha=1.0) hide density variations:
# ax.scatter(x, y, color='blue', alpha=1.0)

# Semi-transparent points reveal density clusters:
ax.scatter(x, y, color='navy', alpha=0.2, edgecolors='none')`,
    options: [
      'Individual semi-transparent dots accumulate in dense clusters, causing high-density core regions to appear dark and saturated while sparse outlier zones remain faint, revealing the true bivariate distribution',
      '`alpha=0.2` makes the points load 5 times faster in the browser',
      '`alpha` changes the marker shape from circles to diamonds',
      '`alpha` removes 80% of random points from memory'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Alpha transparency accumulates visually, turning overlapping points into an intuitive 2D density heatmap',
    explanationTitle: 'Alpha Transparency for Density Perception',
    explanationText:
      'With opaque markers (`alpha=1.0`), a region containing 10 points looks identical to a region containing 10,000 points. Lowering alpha allows light to pass through: overlapping layers multiply their opacity, visually exposing mode peaks, clusters, and bivariate density gradients.',
    deepDive:
      'Always set `edgecolors="none"` when using low alpha; otherwise, dark perimeter stroke circles will dominate the visualization and obscure fill transparency.',
    tags: ['alpha', 'Transparency', 'Overplotting', 'Scatter Plot', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-040',
    section: 'Section 5',
    chapter: '5.2',
    track: 'pcad',
    cardType: 'Chart Export',
    topic: 'Interactive Backend Switching (Agg vs Qt vs inline)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When running an automated data pipeline script on a headless Linux cloud server (without a graphical display or desktop monitor), why must the script use the `"Agg"` backend?',
    codeSnippet: `import matplotlib
matplotlib.use('Agg') # Set non-interactive headless backend!
import matplotlib.pyplot as plt

# Generate and save chart to S3 or disk...
fig, ax = plt.subplots()
ax.plot([1, 2, 3])
fig.savefig('output.png')`,
    options: [
      'The `"Agg"` (Anti-Grain Geometry) backend renders raster images directly to memory and disk files without requiring an X11/Wayland display server or graphical desktop session, preventing `TclError: no display name` crashes',
      'The Agg backend converts Python code to HTML5 canvas',
      'The Agg backend enables interactive zooming via webcams',
      'Headless servers can only export charts as text tables'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'matplotlib.use("Agg") configures headless raster rendering, preventing X11 display connection exceptions on servers',
    explanationTitle: 'Headless Rendering with the Agg Backend',
    explanationText:
      'GUI backends (like `QtAgg`, `TkAgg`, `MacOSX`) require an active window manager to display windows. On CI/CD runners, Docker containers, and headless cloud instances, calling `plt.subplots()` crashes with display errors unless switched to `matplotlib.use("Agg")` before importing `pyplot`.',
    deepDive:
      '`Agg` stands for Anti-Grain Geometry, a high-fidelity 2D graphics rendering engine. For vector graphics on headless servers, use `"PDF"` or `"SVG"` backends.',
    tags: ['Agg', 'matplotlib.use', 'Headless Server', 'Docker', 'Production ML', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 5.3: SEABORN STATISTICAL VISUALIZATIONS [Cards 41-60]
  // =========================================================================
  {
    id: 'pcad-sec5-041',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Seaborn Architecture',
    topic: 'Figure-Level vs Axes-Level Functions in Seaborn',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'What is the architectural distinction between Seaborn’s axes-level functions (e.g. `sns.histplot`, `sns.scatterplot`) and figure-level functions (e.g. `sns.displot`, `sns.relplot`)?',
    codeSnippet: `# Axes-level:
sns.histplot(data=df, x='age', ax=axes[0, 1])

# Figure-level:
g = sns.displot(data=df, x='age', col='gender', kind='hist')`,
    options: [
      'Axes-level functions draw onto an explicit Matplotlib `Axes` passed via `ax=...`; Figure-level functions manage their own internal `FacetGrid`, controlling figure creation, subplots, and external legends across faceted columns/rows',
      'Figure-level functions can only plot 3D charts',
      'Axes-level functions cannot accept pandas DataFrames',
      'There is no difference; they are aliases of one another'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Axes-level functions draw on provided ax; Figure-level functions create and return FacetGrid objects (relplot, displot, catplot)',
    explanationTitle: 'Seaborn Hierarchy: Axes-Level vs Figure-Level',
    explanationText:
      'Figure-level functions (`relplot`, `displot`, `catplot`) wrap multiple axes inside a `FacetGrid` to enable faceting via `col="..."` and `row="..."`. Because they create their own `Figure`, they do not accept an `ax=` parameter. In contrast, axes-level functions (`scatterplot`, `histplot`, `boxplot`) draw into a specific existing `Axes` slot.',
    deepDive:
      'To customize titles on a figure-level object, call `g.set_axis_labels()` or `g.fig.suptitle()`, whereas on an axes-level object call `ax.set_title()`.',
    tags: ['Seaborn', 'Axes-Level', 'Figure-Level', 'FacetGrid', 'relplot', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-042',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Distribution Visualizations',
    topic: 'KDE Plots and the Bandwidth Parameter (bw_adjust)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'In `sns.kdeplot()`, what does the Kernel Density Estimation (KDE) bandwidth parameter `bw_adjust` control?',
    codeSnippet: `# Under-smoothed (Noisy):
sns.kdeplot(df['val'], bw_adjust=0.2)

# Over-smoothed (Oversimplified):
sns.kdeplot(df['val'], bw_adjust=2.0)`,
    options: [
      '`bw_adjust` scales the bandwidth of the smoothing kernel: values $< 1.0$ under-smooth (revealing fine peaks and potential noise), while values $> 1.0$ over-smooth (hiding multi-modal peaks and local structure)',
      '`bw_adjust` sets the number of histogram bins',
      '`bw_adjust` controls the figure DPI resolution',
      '`bw_adjust` sets the y-axis ceiling limit'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'bw_adjust scales the kernel smoothing bandwidth, balancing variance (spiky) vs bias (over-smoothed)',
    explanationTitle: 'Kernel Density Bandwidth Tuning with bw_adjust',
    explanationText:
      'KDE places a Gaussian bell curve over each data point and sums them. The kernel bandwidth determines the standard deviation of these bells. Setting `bw_adjust` too low creates artificial jagged spikes; setting it too high flattens a true bimodal distribution into a misleading single hump.',
    deepDive:
      'For bounded data (e.g. customer churn probability between 0 and 1), set `cut=0` to prevent the KDE curve from spilling unrealistically into negative numbers.',
    tags: ['kdeplot', 'bw_adjust', 'Kernel Density Estimation', 'Distributions', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-043',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Distribution Visualizations',
    topic: 'Empirical Cumulative Distribution Functions (ECDF) with sns.ecdfplot',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why do quantitative analysts frequently recommend `sns.ecdfplot()` over histograms or KDE plots when evaluating continuous numerical distributions?',
    codeSnippet: `sns.ecdfplot(data=df, x='latency_ms', hue='server_region')
# Read exact percentiles directly off the y-axis:
# e.g., 95th percentile latency = point where y = 0.95!`,
    options: [
      'ECDF plots display 100% of actual data points without arbitrary bin-width choices (histograms) or kernel smoothing bias (KDE), and allow direct readout of exact percentiles and survival statistics off the y-axis',
      'ECDF plots only work on discrete integers',
      'ECDF plots automatically filter out outliers',
      'ECDF plots convert continuous distributions into normal distributions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ECDF plots require zero binning or smoothing parameters, enabling exact quantile reads (e.g. median, p95)',
    explanationTitle: 'Empirical Cumulative Distribution Function (ECDF)',
    explanationText:
      'Histograms depend on bin width; KDEs depend on bandwidth. Two analysts can create opposing narratives from the same data by manipulating bin counts. `sns.ecdfplot()` has zero tuning parameters: the y-axis represents the proportion of observations $\\le x$, enabling immediate reading of medians, quartiles, and percentiles.',
    deepDive:
      'Setting `stat="count"` shows cumulative counts; setting `complementary=True` plots the Empirical Survival Function $P(X > x)$.',
    tags: ['ecdfplot', 'ECDF', 'Percentiles', 'Statistical Integrity', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-044',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Categorical Distributions',
    topic: 'Box Plots vs Violin Plots for Multimodal Data',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'A dataset has a bimodal distribution (two distinct peaks at 20 and 80, with zero values around 50). Why does `sns.boxplot()` fail to convey this, and why does `sns.violinplot()` succeed?',
    codeSnippet: `# Box plot shows median=50, IQR [35, 65] (implies peak at center!):
# sns.boxplot(data=df, y='val')

# Violin plot reveals the true hollow center and twin peaks:
sns.violinplot(data=df, y='val', inner='quartile')`,
    options: [
      'A box plot only displays five summary statistics ($Q_1, \\text{median}, Q_3, \\text{min}, \\text{max}$) and assumes a unimodal mound around the median; a violin plot combines a box plot with a rotated KDE curve, visually exposing the hollow valley and twin peaks',
      'Box plots can only be used on datasets with fewer than 100 rows',
      'Violin plots convert all continuous data into categorical bins',
      'Box plots do not calculate quartiles accurately'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Violin plots reveal multimodal density peaks and valleys that box plots summarize into a misleading central median',
    explanationTitle: 'Violin Plots vs Box Plots on Non-Unimodal Data',
    explanationText:
      'Box plots are summary statistics: they show where the 50th percentile lies, but cannot indicate whether data is clustered at that median or entirely absent from it. `sns.violinplot()` graphs a mirror-image KDE along the axis, immediately revealing bimodal, trimodal, or skewed distributions.',
    deepDive:
      'For small sample sizes ($N < 50$), violin plots can hallucinate smooth densities. In those situations, overlaying raw points via `sns.stripplot()` is recommended.',
    tags: ['boxplot', 'violinplot', 'Bimodal', 'Distributions', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-045',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Categorical Distributions',
    topic: 'Strip Plots with Jitter vs Swarm Plots',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How does `sns.swarmplot()` differ from `sns.stripplot(jitter=True)` when visualizing individual observations across categorical groups?',
    codeSnippet: `# Strip plot with random jitter (points can still overlap):
sns.stripplot(data=df, x='category', y='score', jitter=0.2)

# Swarm plot (points adjusted algorithmically to prevent ANY overlap):
sns.swarmplot(data=df, x='category', y='score', size=4)`,
    options: [
      '`sns.swarmplot()` adjusts point positions along the categorical axis using an algorithmic beeswarm packing simulation so that no points overlap; `sns.stripplot(jitter=True)` adds random uniform noise where points can still collide',
      '`sns.swarmplot()` can only be used with time series data',
      '`sns.stripplot()` automatically removes outliers',
      '`sns.swarmplot()` scales points based on market capitalization'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'swarmplot positions points deterministically to prevent overlap (beeswarm); stripplot adds random jitter',
    explanationTitle: 'Swarm Plots vs Jittered Strip Plots',
    explanationText:
      '`sns.swarmplot()` creates a "beeswarm" display where points repel each other to avoid overlap, giving a clear picture of local density and raw counts simultaneously. However, because collision detection is computationally intensive ($O(N^2)$), swarm plots become slow or fail to converge on datasets with $N > 5,000$.',
    deepDive:
      'When $N$ is large, pair a box plot with a semi-transparent jittered strip plot: `sns.boxplot(..., boxprops={"alpha": 0.4})` overlaid with `sns.stripplot(..., alpha=0.3, jitter=0.2)`.',
    tags: ['swarmplot', 'stripplot', 'jitter', 'Categorical Plots', 'Beeswarm', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-046',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Regression Visualizations',
    topic: 'Linear Regression Modeling with sns.regplot and sns.lmplot',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'What statistical features does `sns.regplot()` automatically compute and render alongside the scatter plot of raw data points?',
    codeSnippet: `sns.regplot(
    data=df, x='marketing_spend', y='revenue', 
    order=1, 
    ci=95, 
    n_boot=1000
)`,
    options: [
      'It fits a linear regression model via Ordinary Least Squares (OLS) and computes a shaded 95% confidence interval for the regression line using bootstrap resampling (`n_boot=1000`)',
      'It trains a deep neural network and outputs ROC curves',
      'It computes the Pearson correlation and deletes outliers',
      'It fits a K-Means clustering algorithm around the points'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'regplot fits an OLS regression line with a bootstrapped 95% confidence interval ribbon',
    explanationTitle: 'Statistical Regression Overlays with sns.regplot',
    explanationText:
      '`sns.regplot()` performs statistical modeling directly on the canvas: it estimates slope and intercept via linear regression and generates a 95% confidence envelope using bootstrap resampling. Setting `order=2` fits a polynomial curve, while `logistic=True` fits a logistic regression curve for binary targets.',
    deepDive:
      '`sns.lmplot()` is the figure-level equivalent of `sns.regplot()`, enabling faceting across multi-panel grids via `col="..."` and `row="..."`.',
    tags: ['regplot', 'lmplot', 'Linear Regression', 'Bootstrapping', 'Confidence Interval', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-047',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Categorical Aggregations',
    topic: 'sns.barplot Error Bars: Confidence Intervals vs Standard Deviation',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'In Seaborn (v0.12+), what does `sns.barplot(data=df, x="group", y="sales", errorbar="ci")` display by default, and how do you switch it to show Standard Deviation instead?',
    codeSnippet: `# Default in Seaborn: 95% bootstrapped confidence interval
# To display sample Standard Deviation:
sns.barplot(data=df, x='group', y='sales', errorbar='sd')`,
    options: [
      'By default, it plots the mean with a 95% bootstrapped confidence interval; setting `errorbar="sd"` changes the whiskers to display the sample Standard Deviation',
      'By default, it plots the median; setting `errorbar="sd"` plots the mean',
      'By default, it plots the maximum; setting `errorbar="sd"` plots the minimum',
      'Seaborn bar plots cannot compute error bars'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'errorbar="ci" displays bootstrapped 95% CI; errorbar="sd" displays sample Standard Deviation',
    explanationTitle: 'Error Bar Specification in Modern Seaborn (v0.12+)',
    explanationText:
      'In Seaborn 0.12+, the old `ci` parameter was superseded by `errorbar`. You can specify `errorbar=("ci", 90)` (90% bootstrap CI), `errorbar="sd"` (standard deviation of observations), `errorbar="se"` (standard error of the mean), or `errorbar=("pi", 95)` (percentile interval).',
    deepDive:
      'To suppress error bars entirely on a bar plot, pass `errorbar=None`.',
    tags: ['barplot', 'errorbar', 'Bootstrap CI', 'Standard Deviation', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-048',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Multivariate Visualization',
    topic: 'Relational Plots with Four Dimensions in sns.scatterplot',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How can an analyst visualize four distinct variables ($X_1, X_2, X_3, X_4$) simultaneously on a single 2D canvas using `sns.scatterplot()`?',
    codeSnippet: `sns.scatterplot(
    data=df, 
    x='gdp_per_capita',    # Dimension 1: Horizontal position
    y='life_expectancy',   # Dimension 2: Vertical position
    hue='continent',       # Dimension 3: Marker color
    size='population',     # Dimension 4: Marker area
    sizes=(20, 500), 
    alpha=0.7
)`,
    options: [
      'Map $X_1$ and $X_2$ to spatial Cartesian coordinates (`x`, `y`), map $X_3$ to color hue (`hue`), and map $X_4$ to marker area (`size`) with scaled bounds (`sizes=(20, 500)`)',
      'Render the plot on a 4D holographic monitor',
      'Convert all four variables into a single text string',
      'Scatter plots are strictly limited to two variables'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Mapping x, y, hue, and size encodes 4 multivariate dimensions into a classic Hans Rosling bubble chart',
    explanationTitle: 'Four-Dimensional Encoding with Scatterplot',
    explanationText:
      'By utilizing position ($x, y$), color ($hue$), and size ($size$), a single bubble chart encodes 4 quantitative or categorical attributes. Adding `style="governance_type"` even adds a 5th dimension (marker glyph: circle, square, triangle), though adding too many encodings risks cognitive overload.',
    deepDive:
      'Always specify `sizes=(min_px, max_px)` so large sizes do not swallow the canvas and small sizes remain legible.',
    tags: ['scatterplot', 'hue', 'size', 'Multivariate', 'Bubble Chart', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-049',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Distribution Visualizations',
    topic: 'sns.histplot Multiple Mode Strategies (stack vs dodge vs layer)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When visualizing distributions of two overlapping groups (e.g. churned vs retained customers) in `sns.histplot(hue="churn")`, why is `multiple="layer"` with alpha transparency preferred over default stacking?',
    codeSnippet: `# multiple='stack' stacks bars on top of each other (distorts group 2 baseline!)
# multiple='dodge' places bars side-by-side
# multiple='layer' overlays transparent bars:
sns.histplot(data=df, x='tenure', hue='churn', multiple='layer', alpha=0.4)`,
    options: [
      '`multiple="layer"` allows both distributions to start from the exact same zero baseline ($y=0$), enabling true comparison of distribution shapes and peaks without the upper group being lifted and distorted by the bottom group',
      '`multiple="layer"` deletes all non-overlapping data',
      '`multiple="stack"` is deprecated in Python',
      '`multiple="layer"` converts the histogram into a line chart'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'multiple="layer" anchors both distributions to y=0 baseline for uncorrupted visual shape comparison',
    explanationTitle: 'Histogram Multi-Group Strategies',
    explanationText:
      'In a stacked histogram (`multiple="stack"`), the second group’s bottom edge mirrors the bumpy top of the first group, making it impossible to evaluate the second group’s shape. `multiple="layer"` with `alpha=0.35` preserves common baselines for both cohorts.',
    deepDive:
      'If sample sizes between groups are severely imbalanced (e.g. 90% retained vs 10% churned), set `stat="density"` or `common_norm=False` so the smaller cohort is not visually squashed into invisibility.',
    tags: ['histplot', 'multiple', 'common_norm', 'Distributions', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-050',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Time-Series Seaborn',
    topic: 'sns.lineplot Aggregation and Automatic Confidence Bands',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When you pass a DataFrame containing multiple measurements per time point (e.g. 50 sensor readings per second) into `sns.lineplot()`, what does Seaborn render by default?',
    codeSnippet: `sns.lineplot(data=df, x='timestamp', y='temperature')
# Multiple rows exist for each timestamp!`,
    options: [
      'It automatically groups by `timestamp`, computes the mean temperature for each second, draws the mean trendline, and calculates a shaded 95% bootstrap confidence interval band',
      'It raises a `ValueError: Duplicate keys found`',
      'It draws 50 jagged overlapping lines across the screen',
      'It randomly selects one row per timestamp and drops all others'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sns.lineplot automatically aggregates duplicate x-values into mean trendlines with shaded 95% CI bands',
    explanationTitle: 'Automated Aggregation in sns.lineplot',
    explanationText:
      'Unlike Matplotlib’s `ax.plot()` (which would draw a chaotic zigzag connecting every single raw row), `sns.lineplot()` recognizes repeated $x$-values, aggregates them into summary estimates (default: mean), and plots uncertainty bands without requiring manual `groupby()` code.',
    deepDive:
      'To display the Standard Deviation of readings instead of the confidence interval of the mean: pass `errorbar="sd"`. To turn off aggregation: pass `estimator=None`.',
    tags: ['lineplot', 'Aggregation', 'Confidence Interval', 'Time Series', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-051',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Categorical Point Estimates',
    topic: 'sns.pointplot for Interaction Effects and Slope Comparisons',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why is `sns.pointplot()` superior to a grouped bar plot when visualizing two-factor interaction effects (e.g. Drug Dosage $\\times$ Gender)?',
    codeSnippet: `sns.pointplot(
    data=df, 
    x='dosage', 
    y='efficacy', 
    hue='gender', 
    markers=['o', 's'], 
    linestyles=['-', '--'], 
    capsize=0.1
)`,
    options: [
      '`sns.pointplot()` connects point estimates with lines, allowing the eye to immediately detect non-parallel slopes (crossing lines), which visually signify statistical interaction effects far more clearly than comparing disconnected bar tops',
      '`sns.pointplot()` trains an ANOVA regression model in the background',
      '`sns.pointplot()` removes the need for error bars',
      '`sns.pointplot()` works only on integer data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Connected point estimates highlight slope changes and crossing lines, making statistical interaction effects intuitive',
    explanationTitle: 'Evaluating Interaction Effects with sns.pointplot',
    explanationText:
      'In experimental analysis, an interaction effect means the impact of factor A depends on factor B. With bar charts, comparing 4 separate clusters of bars is mentally taxing. `sns.pointplot()` connects the group means with lines: parallel lines indicate no interaction, while intersecting lines indicate strong interaction.',
    deepDive:
      '`pointplot` only plots the point estimates and error bars without drawing bars down to zero, saving ink and focusing attention on differences.',
    tags: ['pointplot', 'Interaction Effects', 'ANOVA', 'Categorical Plots', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-052',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Categorical Counts',
    topic: 'sns.countplot vs sns.barplot Distinct Use Cases',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What is the operational difference between `sns.countplot()` and `sns.barplot()` in Seaborn?',
    codeSnippet: `# Chart A:
sns.countplot(data=df, x='subscription_tier')

# Chart B:
sns.barplot(data=df, x='subscription_tier', y='monthly_spend')`,
    options: [
      '`countplot()` counts the frequency of occurrences of each categorical level (requiring only `x` or `y`); `barplot()` computes the mean/aggregate of a separate continuous numerical variable across categories (requiring both `x` and `y`)',
      '`countplot()` is for continuous numbers; `barplot()` is for strings',
      '`countplot()` is deprecated in Seaborn 0.12',
      'There is no difference; they are aliases'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'countplot tallies row occurrences (frequency); barplot aggregates a secondary continuous variable (mean/sum)',
    explanationTitle: 'Frequency vs Aggregation: countplot vs barplot',
    explanationText:
      '`sns.countplot(x="tier")` acts as a categorical histogram: it tallies rows per category (`df["tier"].value_counts()`). `sns.barplot(x="tier", y="spend")` groups by tier and calculates the mean and confidence intervals of the `spend` column.',
    deepDive:
      'In Seaborn 0.12+, `sns.histplot(x="tier")` can also produce categorical count plots natively.',
    tags: ['countplot', 'barplot', 'Frequency Distribution', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-053',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Bivariate Distributions',
    topic: 'Bivariate Density Estimation with sns.kdeplot(x, y)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'What does calling `sns.kdeplot(data=df, x="age", y="income", fill=True, thresh=0.05)` produce?',
    codeSnippet: `sns.kdeplot(
    data=df, x='age', y='income', 
    fill=True, 
    thresh=0.05, 
    cmap='mako', 
    levels=10
)`,
    options: [
      'A continuous 2D contour topographic map of joint probability density, where shaded elevation levels represent regions of high combined age and income concentration',
      'A 3D wireframe mesh plot that requires VR goggles',
      'Two separate 1D lines plotted on top of each other',
      'A scatter plot with random noise added to the axes'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '2D KDE creates a smooth bivariate probability density contour surface with shaded levels',
    explanationTitle: 'Bivariate Contour Density with 2D kdeplot',
    explanationText:
      'Passing both `x` and `y` to `sns.kdeplot()` computes a 2D bivariate kernel density surface. Setting `fill=True` shades the iso-proportional contour intervals, highlighting clusters and high-density cores like elevation contours on a topographic hiking map.',
    deepDive:
      'The `thresh=0.05` parameter specifies that the lowest 5% of lowest density should not be shaded, preventing the background from being colored where data is absent.',
    tags: ['kdeplot', 'Bivariate Density', 'Contours', 'Topographic Map', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-054',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Joint Visualizations',
    topic: 'sns.jointplot for Joint and Marginal Distributions',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How does `sns.jointplot()` combine bivariate relationship analysis with univariate distribution inspection?',
    codeSnippet: `g = sns.jointplot(
    data=df, x='speed', y='stopping_distance', 
    kind='scatter', 
    marginal_kws=dict(bins=25, fill=True)
)`,
    options: [
      'It renders a central bivariate plot (e.g. scatter, hex, or kde) flanked by aligned marginal distribution plots (histograms/KDEs) along the top (for $x$) and right (for $y$) borders',
      'It joins two completely unrelated datasets into a single SQL table',
      'It computes the joint probability matrix and prints it to the console',
      '`sns.jointplot()` is restricted strictly to 3D surface charts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sns.jointplot embeds a central bivariate relationship plot with matched top and right marginal distribution axes',
    explanationTitle: 'Joint and Marginal Analysis with sns.jointplot',
    explanationText:
      '`sns.jointplot()` creates a `JointGrid`: the center displays the bivariate correlation (scatter, reg, hex, or kde), while the top and right margins display univariate distributions of $x$ and $y$ respectively. This reveals whether a bivariate cluster is driven by skewness in one of the individual variables.',
    deepDive:
      'Setting `kind="reg"` plots the OLS regression line and CI in the center, and plots KDE curves in the top and right margins.',
    tags: ['jointplot', 'JointGrid', 'Marginal Distribution', 'Bivariate', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-055',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Seaborn Layouts',
    topic: 'Unified High-Level Interface with sns.catplot',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why is `sns.catplot()` referred to as the figure-level unified interface for categorical data in Seaborn?',
    codeSnippet: `# Boxplot faceted across columns:
sns.catplot(data=df, x='dept', y='salary', col='location', kind='box')

# Switch to violin plot without rewriting layout logic:
sns.catplot(data=df, x='dept', y='salary', col='location', kind='violin')`,
    options: [
      '`catplot()` provides a single unified wrapper over all categorical plots (`kind="strip"`, `"box"`, `"violin"`, `"bar"`, `"count"`, `"point"`), allowing easy switching between chart types while supporting multi-panel column and row faceting',
      '`catplot()` can only be used on datasets about domestic felines (cats)',
      '`catplot()` converts categorical data into numerical float values',
      '`catplot()` is an alias for `sns.heatmap()`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'catplot wraps all categorical axes-level functions into a unified figure-level FacetGrid interface via the kind parameter',
    explanationTitle: 'Unified Categorical Faceting with sns.catplot',
    explanationText:
      '`sns.catplot()` manages figure creation and faceting (`col="..."`, `row="..."`). Changing `kind="box"` to `kind="violin"` or `kind="bar"` changes the underlying plot representation instantly without requiring re-plumbing of Matplotlib axes.',
    deepDive:
      'Similar triumvirate of figure-level functions: `sns.relplot()` (for relational plots: scatter/line), `sns.displot()` (for distributions: hist/kde/ecdf), and `sns.catplot()` (for categorical plots).',
    tags: ['catplot', 'kind', 'FacetGrid', 'Categorical Plots', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-056',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Distribution Comparison',
    topic: 'Boxen Plot (Letter-Value Plot) for Large Datasets',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'Why does `sns.boxenplot()` (letter-value plot) provide deeper statistical insight into tail distributions than a standard `sns.boxplot()` when analyzing large datasets ($N > 100,000$)?',
    codeSnippet: `sns.boxenplot(data=df, x='tier', y='transaction_amount')`,
    options: [
      'Standard box plots lump all data beyond $1.5 \\times IQR$ into undifferentiated outlier dots; boxen plots calculate successive letter-value quantiles (eighths, sixteenths, thirty-seconds), drawing narrower nested boxes to accurately visualize heavy tail shapes in big data',
      'Boxen plots require only two data points to compute',
      'Boxen plots convert continuous amounts into binary booleans',
      'Boxen plots do not compute the median'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Boxen plots visualize extreme tails via successive quantile boxes, preventing outlier point clouds in big data',
    explanationTitle: 'Letter-Value Plots (boxenplot) for Heavy Tails',
    explanationText:
      'In datasets with 500,000 rows, a standard boxplot displays thousands of black outlier dots smeared together into an uninformative column. `sns.boxenplot()` implements Hofmann et al.’s Letter-Value plot: it splits data beyond quartiles into successive powers of two ($1/8, 1/16, 1/32$), conveying the true shape and decay of the tails.',
    deepDive:
      'Use `boxenplot` whenever analyzing financial transactions, server network latencies, or website traffic where extreme tail behavior is critical.',
    tags: ['boxenplot', 'Letter-Value Plot', 'Heavy Tails', 'Big Data', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-057',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Seaborn Aesthetics',
    topic: 'Global Aesthetic Context with sns.set_theme and set_context',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How do you instantly scale all font sizes, line widths, and marker sizes up for a live conference slide presentation using Seaborn?',
    codeSnippet: `import seaborn as sns

# Context scaling: 'paper' -> 'notebook' (default) -> 'talk' -> 'poster'
sns.set_context('talk', font_scale=1.2)`,
    options: [
      'Call `sns.set_context("talk", font_scale=1.2)`, which scales text, ticks, and line elements proportionally for projector visibility',
      'Manually change `fontsize=24` in every single title, label, and tick method',
      'Magnify the browser window to 200%',
      'Seaborn charts cannot be resized for presentations'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sns.set_context("talk") automatically scales typography and line weights for presentation displays',
    explanationTitle: 'Seaborn Context Scaling Levels',
    explanationText:
      'Seaborn provides 4 preset context scales: `"paper"` (compact, for academic PDFs), `"notebook"` (default interactive screen size), `"talk"` (scaled up for slide decks and conference halls), and `"poster"` (maximum scale for printed research posters).',
    deepDive:
      'Pair with `sns.set_style("whitegrid")` or `sns.set_theme()` for a one-line overall aesthetic configuration.',
    tags: ['set_context', 'set_theme', 'Typography', 'Presentation', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-058',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Categorical Point Estimates',
    topic: 'Controlling Category Order with the order Parameter',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'In `sns.barplot()`, how do you guarantee that categories appear in a specific logical sequence (e.g. `["Low", "Medium", "High"]`) rather than random appearance order?',
    codeSnippet: `sns.barplot(
    data=df, 
    x='risk_level', 
    y='default_rate', 
    order=['Low', 'Medium', 'High']
)`,
    options: [
      'Pass the explicit list of category names to the `order` parameter: `order=["Low", "Medium", "High"]`',
      'Alphabetically rename the categories in the database',
      'Seaborn charts always sort categories descending by value',
      'Sort the DataFrame by index before plotting'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The order parameter enforces strict semantic sequencing across categorical axes',
    explanationTitle: 'Enforcing Categorical Sequencing with order',
    explanationText:
      'By default, Seaborn plots categories in the order they first appear in the DataFrame. For ordinal categories (Low, Med, High) or prioritized rankings, passing an explicit list to `order=[...]` guarantees consistent visual layout across repeated reports and dashboards.',
    deepDive:
      'To sort categories by their mean values automatically: `order = df.groupby("cat")["val"].mean().sort_values(ascending=False).index`.',
    tags: ['order', 'barplot', 'Categorical Ordering', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-059',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Distribution Visualizations',
    topic: 'Rug Plots with sns.rugplot for Raw Observation Spikes',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'What is a "rug plot" (`sns.rugplot()`), and why is it commonly overlaid along the x-axis of a continuous KDE density plot?',
    codeSnippet: `sns.kdeplot(data=df, x='duration')
sns.rugplot(data=df, x='duration', color='black', height=0.08)`,
    options: [
      'A rug plot draws small vertical tick marks (tassels) along the axis at the exact location of every observed data point, revealing where the KDE curve is supported by actual dense data versus extrapolating into sparse zones',
      'A rug plot removes background grid lines',
      'A rug plot draws horizontal reference lines at each quartile',
      'A rug plot computes the statistical mode of the distribution'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'rugplot draws tick marks at every raw observation coordinate along the axis fringe',
    explanationTitle: 'Grounding Continuous Estimates with Rug Plots',
    explanationText:
      'Continuous density curves can smooth over data gaps, creating an illusion that data exists smoothly everywhere. `sns.rugplot()` places a tick mark for every single raw observation along the axis spine, allowing viewers to verify raw data density directly.',
    deepDive:
      'Rug plots can also be enabled directly inside histogram and KDE calls: `sns.displot(data=df, x="val", kde=True, rug=True)`.',
    tags: ['rugplot', 'kdeplot', 'Raw Data', 'Distributions', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-060',
    section: 'Section 5',
    chapter: '5.3',
    track: 'pcad',
    cardType: 'Regression Visualizations',
    topic: 'Logistic Regression Curves with sns.regplot(logistic=True)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you plot a smooth S-shaped logistic probability curve over a binary scatter plot of 0s and 1s using Seaborn?',
    codeSnippet: `# Target y is binary: 0 (No Churn) or 1 (Churn)
sns.regplot(
    data=df, x='complaint_count', y='churn', 
    logistic=True, 
    y_jitter=0.03, 
    scatter_kws={'alpha': 0.3}
)`,
    options: [
      'Pass `logistic=True` to `sns.regplot()`, which estimates a Generalized Linear Model (GLM) with a logit link function to plot the bounded sigmoid curve',
      'Pass `kind="sigmoid"` to `sns.scatterplot()`',
      'Transform the target variable using `np.sin()`',
      'Seaborn cannot compute non-linear regression curves'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'regplot(logistic=True) fits a logistic regression model, rendering the bounded sigmoid probability curve',
    explanationTitle: 'Visualizing Binary Probabilities with logistic=True',
    explanationText:
      'A straight OLS regression line on binary $(0, 1)$ data generates absurd probabilities below 0 or above 1. Setting `logistic=True` fits a proper logistic sigmoid curve. Adding `y_jitter=0.03` adds slight vertical jitter to the binary points so overlapping 0s and 1s do not obscure sample density.',
    deepDive:
      '`logistic=True` requires the optional `statsmodels` library to be installed in your Python environment.',
    tags: ['regplot', 'logistic', 'Sigmoid', 'Binary Classification', 'statsmodels', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 5.4: MULTI-PLOT GRIDS, HEATMAPS & INTERACTIVE DASHBOARDS [Cards 61-70]
  // =========================================================================
  {
    id: 'pcad-sec5-061',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Heatmaps',
    topic: 'Correlation Matrix Heatmaps with sns.heatmap',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When visualizing a Pearson correlation matrix with `sns.heatmap()`, what parameters produce a clear, non-redundant, and professionally annotated display?',
    codeSnippet: `corr = df.corr()
mask = np.triu(np.ones_like(corr, dtype=bool)) # Mask upper triangle

sns.heatmap(
    corr, 
    mask=mask, 
    annot=True, 
    fmt='.2f', 
    cmap='coolwarm', 
    vmin=-1, vmax=1, 
    center=0, 
    square=True, 
    linewidths=0.5
)`,
    options: [
      'Applying `mask=mask` hides the redundant symmetric upper triangle; `annot=True, fmt=".2f"` prints correlation values; `vmin=-1, vmax=1, center=0` anchors the diverging colormap symmetrically at zero',
      'Setting `cmap="rainbow"` and leaving the upper triangle visible',
      'Setting `annot=False` and using a sequential colormap from 0 to 1',
      'Correlations can only be visualized using scatter plot matrices'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'mask + annot=True + diverging colormap centered at zero creates an executive correlation matrix',
    explanationTitle: 'Correlation Heatmap Best Practices',
    explanationText:
      'A correlation matrix is symmetric ($r_{ij} = r_{ji}$) with 1.0 along the diagonal. Displaying both triangles creates redundant clutter. Masking the upper triangle with `np.triu()`, anchoring the diverging colormap to `[-1, +1]`, and setting `square=True` yields an uncluttered correlation diagnostic.',
    deepDive:
      'Setting `linewidths=0.5` adds subtle white dividing grid lines between cells, improving readability across adjacent saturated colors.',
    tags: ['heatmap', 'corr', 'triu', 'Correlation Matrix', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-062',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Multi-Plot Grids',
    topic: 'Exploratory Bivariate Screening with sns.pairplot',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What does `sns.pairplot(df, hue="species", corner=True)` generate across a multi-feature dataset?',
    codeSnippet: `sns.pairplot(
    df, 
    hue='species', 
    corner=True, 
    diag_kind='kde', 
    palette='Set2'
)`,
    options: [
      'A pairwise scatter plot matrix examining every numerical variable against every other numerical variable, with univariate KDE distributions along the diagonal, color-coded by class, with the upper triangle hidden (`corner=True`)',
      'A single time-series plot comparing two pairs of variables',
      'A correlation table containing only p-values',
      'A 3D surface plot of the top two features'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pairplot generates a matrix of all bivariate scatter plots with diagonal univariate distributions',
    explanationTitle: 'Automated Pairwise Screening with sns.pairplot',
    explanationText:
      '`sns.pairplot()` produces an $N \\times N$ grid of plots for fast exploratory data analysis (EDA). Setting `corner=True` cuts rendering time in half and eliminates duplicate plots by omitting the redundant upper triangle.',
    deepDive:
      'Caution: If your DataFrame has 50 columns, `pairplot` attempts to render $50^2 = 2500$ subplots, which can freeze Python. Always select a relevant subset of columns: `vars=["col1", "col2", "col3"]`.',
    tags: ['pairplot', 'EDA', 'PairGrid', 'corner', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-063',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Clustered Heatmaps',
    topic: 'Hierarchical Bi-Clustering with sns.clustermap',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How does `sns.clustermap()` differ from a standard `sns.heatmap()` when analyzing customer behavioral features?',
    codeSnippet: `g = sns.clustermap(
    df_features, 
    method='ward', 
    metric='euclidean', 
    standard_scale=1, 
    cmap='viridis'
)`,
    options: [
      '`sns.clustermap()` performs hierarchical agglomerative clustering along both rows and columns, reordering them so similar customers and similar features group together, bordered by dendrogram trees',
      '`sns.clustermap()` can only plot geographical GPS maps',
      '`sns.clustermap()` clusters data using K-Means with $K=3$',
      'There is no difference; they are aliases'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'clustermap reorders rows and columns via hierarchical clustering, attaching dendrogram trees to the heatmap',
    explanationTitle: 'Bi-Clustering with sns.clustermap',
    explanationText:
      'Standard heatmaps preserve arbitrary row and column ordering (e.g. index order). `sns.clustermap()` groups correlated features and similar observation records together, revealing customer archetypes and feature clusters. Dendrogram branches on top and left show the hierarchical tree distance.',
    deepDive:
      'Use `standard_scale=1` (standardize columns to $[0, 1]$) or `z_score=1` ($z$-score across columns) so features with large units do not overpower the distance metric.',
    tags: ['clustermap', 'Hierarchical Clustering', 'Dendrogram', 'Heatmap', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-064',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Small Multiples',
    topic: 'Custom Small Multiples Grids with sns.FacetGrid and map',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you map a custom plotting function or standard Matplotlib call across a grid of small multiples partitioned by two categorical variables?',
    codeSnippet: `g = sns.FacetGrid(df, col='region', row='year', margin_titles=True)
g.map(plt.scatter, 'marketing_spend', 'revenue', alpha=0.6)
g.add_legend()`,
    options: [
      'Initialize `sns.FacetGrid(df, col=..., row=...)` to create the grid canvas, then call `g.map(plot_func, "x_col", "y_col")` to map the drawing function onto every cell',
      'Write nested for-loops manually querying the DataFrame and calling `plt.subplot()`',
      'Call `plt.grid_map()` with a list of DataFrames',
      '`FacetGrid` can only accept built-in Seaborn functions, never Matplotlib calls'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'FacetGrid + g.map() applies any plotting function across structured categorical row/column facets',
    explanationTitle: 'Small Multiples Architecture with FacetGrid',
    explanationText:
      'Edward Tufte pioneered "Small Multiples": presenting identical visual forms across partitioned subsets of data. `FacetGrid` abstracts the mechanics: it subsets the DataFrame by row/column combinations and passes each sub-DataFrame directly into the callable function passed to `.map()`.',
    deepDive:
      'To pass functions requiring keyword arguments (like Seaborn axes-level functions), use `g.map_dataframe(sns.histplot, x="metric")`.',
    tags: ['FacetGrid', 'Small Multiples', 'g.map', 'Tufte', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-065',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Visualizations',
    topic: 'Interactive Charts with Plotly Express (px.scatter)',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'When creating an exploratory chart for business executives who need to hover over points to read detailed transaction IDs, zoom in on clusters, and toggle series on and off, why is Plotly Express preferred over Matplotlib?',
    codeSnippet: `import plotly.express as px

fig = px.scatter(
    df, x='margin', y='revenue', 
    color='region', 
    size='order_count', 
    hover_data=['customer_id', 'order_id'],
    title='Interactive Customer Value Matrix'
)
fig.show()`,
    options: [
      'Plotly generates interactive, client-side HTML5/WebGL visualizations in the browser with built-in hover tooltips, click-to-isolate legends, box-zoom, pan, and lasso selection without requiring backend re-rendering',
      'Plotly runs in pure C and cannot be used in Python',
      'Matplotlib has superior hover tooltips by default',
      'Plotly charts can only be saved as static JPEG files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Plotly delivers dynamic browser interactivity: hover tooltips, zooming, panning, and legend filtering',
    explanationTitle: 'Interactive Data Exploration with Plotly Express',
    explanationText:
      'While Matplotlib produces static raster/vector files ideal for print publications, Plotly outputs interactive D3/WebGL artifacts. Users can hover over points to view multiple metadata columns (`hover_data`), double-click legend entries to isolate categories, and zoom in on dense regions interactively.',
    deepDive:
      'Plotly charts can be exported as self-contained standalone HTML files viewable without Python: `fig.write_html("dashboard.html")`.',
    tags: ['Plotly', 'plotly.express', 'Interactive Dashboard', 'Hover Tooltips', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-066',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Custom Multi-Plot Grids',
    topic: 'PairGrid vs pairplot Flexibility',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'Why would an analyst use `sns.PairGrid` directly instead of high-level `sns.pairplot`?',
    codeSnippet: `g = sns.PairGrid(df, diag_sharey=False)
g.map_upper(sns.scatterplot, alpha=0.5)
g.map_diag(sns.histplot, kde=True)
g.map_lower(sns.kdeplot, cmap='Blues_d')`,
    options: [
      '`PairGrid` allows mapping completely different plot types to the upper triangle (`map_upper`), the diagonal (`map_diag`), and the lower triangle (`map_lower`), enabling rich multi-perspective exploratory matrices',
      '`PairGrid` is 10 times faster than `pairplot`',
      '`pairplot` cannot render scatter plots',
      '`PairGrid` does not support pandas DataFrames'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'PairGrid allows asymmetric mapping: scatter plots in upper, KDE in lower, histograms along diagonal',
    explanationTitle: 'Asymmetric Multi-Plotting with PairGrid',
    explanationText:
      '`sns.pairplot()` applies the same plot type across the entire off-diagonal grid. `sns.PairGrid` gives granular control: for example, you can plot scatter plots in the upper triangle to spot individual outliers, and plot 2D KDE contour maps in the lower triangle to analyze dense cluster shapes.',
    deepDive:
      'You can also customize individual rows and columns in `PairGrid` by accessing `g.axes[i, j]` directly.',
    tags: ['PairGrid', 'pairplot', 'map_upper', 'map_lower', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-067',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Dashboards',
    topic: 'Interactive Dropdowns and Range Sliders in Plotly',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you add an interactive time-series date range slider along the bottom of a financial stock chart in Plotly?',
    codeSnippet: `fig = px.line(df, x='Date', y='Close', title='Apple Stock Price')
fig.update_xaxes(
    rangeslider_visible=True,
    rangeselector=dict(
        buttons=list([
            dict(count=1, label='1m', step='month', stepmode='backward'),
            dict(count=6, label='6m', step='month', stepmode='backward'),
            dict(count=1, label='YTD', step='year', stepmode='todate'),
            dict(step='all')
        ])
    )
)`,
    options: [
      'Call `fig.update_xaxes(rangeslider_visible=True, rangeselector=...)`, which binds a client-side date range slider and preset duration zoom buttons to the x-axis',
      'Write a Python Flask backend to listen for scrollwheel clicks',
      'Create 12 separate charts and embed them in an animated GIF',
      'Plotly requires paid enterprise licenses to add range sliders'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'rangeslider_visible=True embeds client-side interactive timeline scrubbing directly in the HTML chart',
    explanationTitle: 'Interactive Timeline Scrubbing with Plotly Range Sliders',
    explanationText:
      'Plotly’s `rangeslider` gives users an interactive overview-plus-detail timeline: users can drag and resize the thumbnail window along the bottom to zoom into microsecond or multi-year windows instantly without making network calls to a server.',
    deepDive:
      'Preset zoom buttons (`rangeselector`) allow rapid 1-click toggling between common financial reporting periods (1M, 6M, YTD, 1Y, All).',
    tags: ['rangeslider', 'rangeselector', 'Plotly', 'Time Series', 'Dashboards', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-068',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Multi-Panels',
    topic: 'Linked Subplots and Shared Hover Tooltips in Plotly',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you build a multi-panel dashboard in Plotly where hovering the mouse over a timestamp in the top chart simultaneously displays a unified hover tooltip across all stacked panels?',
    codeSnippet: `from plotly.subplots import make_subplots
import plotly.graph_objects as go

fig = make_subplots(rows=2, cols=1, shared_xaxes=True)
fig.add_trace(go.Scatter(x=df['time'], y=df['cpu']), row=1, col=1)
fig.add_trace(go.Scatter(x=df['time'], y=df['memory']), row=2, col=1)

# Enable unified vertical hover crosshair:
fig.update_layout(hovermode='x unified')`,
    options: [
      'Set `fig.update_layout(hovermode="x unified")` (or `"x"`), which creates a synchronized vertical crosshair that displays hover information for all traces at that x-coordinate across all subplots',
      'Write a custom JavaScript websocket to synchronize coordinate frames',
      'Hover tooltips can only ever inspect a single trace at a time',
      'Set `fig.link_hovers(True)`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'hovermode="x unified" locks a vertical cursor line displaying all subplot metrics at that x-slice',
    explanationTitle: 'Synchronized Multi-Trace Hover with hovermode="x unified"',
    explanationText:
      'In systems monitoring and multi-metric time-series dashboards, correlating anomalies across separate subplots (e.g. did CPU spike at the exact second memory plummeted?) is essential. `hovermode="x unified"` projects a single vertical cursor across all shared x-axes, showing values in one consolidated tooltip.',
    deepDive:
      '`make_subplots(shared_xaxes=True)` ensures zooming on one panel automatically pans and zooms all other panels in unison.',
    tags: ['hovermode', 'make_subplots', 'shared_xaxes', 'Plotly', 'Dashboards', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-069',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Heatmaps',
    topic: 'Calendar Heatmaps for Temporal Rhythm Detection',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'Why are Calendar Heatmaps (day of week vs hour of day) effective for detecting operational anomalies (e.g. server crashes, cyber attacks, fraud spikes)?',
    codeSnippet: `pivot = df.pivot_table(
    index=df['timestamp'].dt.day_name(), 
    columns=df['timestamp'].dt.hour, 
    values='incident_id', 
    aggfunc='count', 
    fill_value=0
)
# Reorder index: Monday -> Sunday
sns.heatmap(pivot.reindex(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']), 
            cmap='YlOrRd')`,
    options: [
      'They align data with human weekly and diurnal cycles (24 hours $\\times$ 7 days), making deviations from normal baseline rhythms (e.g. unexpected 3:00 AM Sunday activity spikes) immediately recognizable',
      'They can only be rendered in Microsoft Excel',
      'They automatically decrypt network packets',
      'Calendar heatmaps require circular polar coordinate systems'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pivoting day-of-week against hour-of-day maps incident frequency to natural human diurnal patterns',
    explanationTitle: 'Diurnal Analysis with Calendar Heatmaps',
    explanationText:
      'Human enterprise systems exhibit diurnal (day/night) and weekly (weekday/weekend) rhythms. A simple time-series line with 10,000 hourly points obscures these rhythms in high-frequency noise. Pivoting into a $7 \\times 24$ grid exposes recurring cyclical baselines and pinpoints off-hours anomalies instantly.',
    deepDive:
      'Ensure days are ordered chronologically (Monday $\\rightarrow$ Sunday) rather than alphabetically (Friday, Monday, Saturday...).',
    tags: ['Calendar Heatmap', 'pivot_table', 'Diurnal Cycles', 'Anomaly Detection', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-070',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Heatmaps',
    topic: 'Handling Missing Values and Masking in Heatmaps',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When visualizing a cross-tabulated matrix where certain category pairs have zero data (`NaN`), how do you ensure the missing cells are distinguished from legitimate $0.0$ values in `sns.heatmap()`?',
    codeSnippet: `# Method: Configure background facecolor and mask
fig, ax = plt.subplots()
ax.set_facecolor('lightgray') # Unobserved NaNs appear in neutral gray!
sns.heatmap(df_matrix, cmap='Blues', ax=ax)`,
    options: [
      'Set the Axes background facecolor to a neutral color (e.g. `ax.set_facecolor("lightgray")`); Matplotlib leaves `NaN` cells transparent, revealing the gray background so missing data is not conflated with zero ($0.0$)',
      'Impute all `NaN` values with 0.0 before plotting',
      'Impute all `NaN` values with 999,999',
      '`sns.heatmap()` crashes whenever it encounters a `NaN` value'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Setting ax.set_facecolor("lightgray") renders missing NaN cells distinctly from genuine zero values',
    explanationTitle: 'Visual Integrity: Distinguishing Missing Data from Zero in Heatmaps',
    explanationText:
      'In business reporting, conflating "No Data Collected" (`NaN`) with "Zero Incidents Recorded" ($0.0$) is a serious data integrity error. By setting `ax.set_facecolor("lightgray")`, missing cells appear as neutral gray cutouts rather than being shaded as zero.',
    deepDive:
      'Alternatively, pass a boolean mask: `sns.heatmap(df, mask=df.isna())` to explicitly control missing cell rendering.',
    tags: ['heatmap', 'NaN', 'Visual Integrity', 'set_facecolor', 'Missing Data', 'PCAD-31-02']
  }
];
