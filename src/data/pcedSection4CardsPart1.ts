import { Flashcard } from '../types';

export const pcedSection4CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.1: CHART TYPES, VISUAL ENCODINGS & GRAPHIC INTEGRITY [Cards 1-20]
  // =========================================================================
  {
    id: 'pced-sec4-001',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Visual Encoding Principle',
    topic: 'Visual Encodings & Perceptual Accuracy',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'According to William Cleveland and Robert McGill’s perceptual hierarchy of graphical encodings, which visual channel is decoded by the human brain with the highest quantitative precision?',
    codeSnippet: `# Cleveland & McGill Perceptual Hierarchy:
# 1. Position along a common scale (Highest accuracy)
# 2. Position along non-aligned scales
# 3. Length / Direction / Angle
# 4. Area
# 5. Volume / Curvature
# 6. Shading / Color saturation / Color hue (Lowest accuracy)`,
    options: [
      'Position along a common aligned scale (e.g., standard scatter plot or bar chart)',
      'Angle and arc length (e.g., slices in a pie chart)',
      'Area of 2D geometric shapes (e.g., bubble chart markers)',
      'Color saturation or lightness intensity'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Position along a common aligned scale (e.g., standard scatter plot or bar chart)',
    explanationTitle: 'Perceptual Accuracy Hierarchy in Data Visualization',
    explanationText:
      'Cleveland and McGill demonstrated empirically that human perception decodes position along a common aligned scale with the greatest accuracy and lowest cognitive error rate. Length is second, followed by angle/slope, area, volume, and finally color saturation/hue.',
    deepDive:
      'This foundational principle explains why bar charts and dot plots (which rely on position along a shared axis) are almost always superior to pie charts (angle/area) or circular packing diagrams for evaluating quantitative comparisons.',
    tags: ['Cleveland-McGill', 'Perception', 'Visual Encodings', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-002',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Bar Charts vs. Histograms',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the fundamental structural difference between a standard bar chart and a histogram?',
    codeSnippet: `# Chart A:
categories = ['Engineering', 'Marketing', 'Sales']
headcount = [45, 28, 62]

# Chart B:
exam_scores = [54, 62, 65, 71, 78, 82, 85, 88, 91, 95]
# Grouped into continuous intervals: [50-60), [60-70), [70-80), etc.`,
    options: [
      'A bar chart plots categorical or discrete variables with gaps between bars; a histogram plots the frequency distribution of a continuous variable partitioned into adjacent bins',
      'A bar chart can only show horizontal bars, while a histogram can only show vertical bars',
      'A histogram requires logarithmic axes, whereas a bar chart strictly uses linear axes',
      'There is no difference; the terms are interchangeable synonyms in data analytics'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A bar chart plots categorical or discrete variables with gaps between bars; a histogram plots the frequency distribution of a continuous variable partitioned into adjacent bins',
    explanationTitle: 'Bar Chart (Discrete) vs. Histogram (Continuous Distribution)',
    explanationText:
      'Bar charts represent categorical variables where bar order can often be rearranged, and spaces between bars emphasize discrete categories. Histograms partition a single continuous numerical variable into ordered numeric bins with no natural spacing between adjacent intervals.',
    deepDive:
      'In a histogram, the area of each bar is proportional to the frequency (or density) of data points falling into that bin. Rearranging the order of bins in a histogram is impossible because continuous numerical intervals have an intrinsic mathematical ordering.',
    tags: ['Bar Chart', 'Histogram', 'Data Types', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-003',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Graphic Integrity',
    topic: 'Zero-Baseline Requirement for Bar Charts',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why is truncating the value axis (starting the baseline above zero) considered a major violation of graphic integrity in bar charts, but often acceptable in line charts?',
    codeSnippet: `# Bar Chart: Height encodes magnitude from baseline
# Truncated Baseline Example:
# Baseline set to 95:
# Value 96 looks like 1 unit tall.
# Value 100 looks like 5 units tall (appears 5x larger, but is only 4.1% greater!)`,
    options: [
      'Because the visual encoding of a bar chart is the length/height of the bar from the baseline, so a non-zero baseline distorts relative proportions; line charts encode position, where slope/relative change is the focus',
      'Because Matplotlib throws a ValueError if a bar chart axis does not start at zero',
      'Because non-zero baselines invert the color palette from warm to cool tones',
      'Because truncating the axis on a bar chart causes missing data rows in the underlying DataFrame'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Because the visual encoding of a bar chart is the length/height of the bar from the baseline, so a non-zero baseline distorts relative proportions; line charts encode position, where slope/relative change is the focus',
    explanationTitle: 'The Zero-Baseline Rule for Bar Charts',
    explanationText:
      'In bar charts, the brain visually interprets the ratio between bar lengths as the ratio between values. Starting at a non-zero baseline magnifies tiny differences into visually dramatic discrepancies. In line charts, the visual cue is position and trajectory, allowing a zoomed baseline when comparing minute variations over time.',
    deepDive:
      'Edward Tufte defines this violation under the "Lie Factor". When a 4% increase is drawn to appear 500% larger due to axis truncation, the visual representation distorts the underlying empirical reality.',
    tags: ['Graphic Integrity', 'Lie Factor', 'Axis Truncation', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-004',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Graphic Integrity',
    topic: 'Edward Tufte’s Lie Factor',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How is Edward Tufte’s "Lie Factor" mathematically defined to measure graphical distortion?',
    codeSnippet: `# A chart shows an increase in market share from 10% to 20% (100% data change).
# The graphic designer scaled both width AND height of a money bag graphic by 2x,
# causing the graphical area to expand by 4x (300% graphic change).
# Lie Factor = Size of effect shown in graphic / Size of effect in data`,
    options: [
      'Lie Factor = (Size of effect shown in graphic) / (Size of effect in data)',
      'Lie Factor = (Total data points) / (Number of chart labels)',
      'Lie Factor = (Ink used for data) / (Total ink used on page)',
      'Lie Factor = (Maximum outlier value) - (Median value)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Lie Factor = (Size of effect shown in graphic) / (Size of effect in data)',
    explanationTitle: 'Calculating Edward Tufte’s Lie Factor',
    explanationText:
      'The Lie Factor is defined as: Lie Factor = (Percentage change in graphic) / (Percentage change in data). A perfectly truthful graphic has a Lie Factor of 1.0. A Lie Factor significantly greater than 1.0 exaggerates the effect, while a factor less than 1.0 downplays it.',
    deepDive:
      'A classic cause of high Lie Factors is scaling 2D or 3D icons (pictograms) uniformly by a 1D metric. Doubling both dimensions quadruples the area (2^2 = 4), leading to an accidental Lie Factor of ~3.0 to 4.0.',
    tags: ['Tufte', 'Lie Factor', 'Graphic Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-005',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Design Principle',
    topic: 'Data-Ink Ratio & Chartjunk',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is Edward Tufte’s "Data-Ink Ratio", and what does maximizing it achieve in analytical reporting?',
    codeSnippet: `# Data-Ink Ratio Formula:
# Data-Ink Ratio = (Data-Ink) / (Total ink used to print the graphic)
# Goal: Maximize Data-Ink Ratio; eradicate "chartjunk" (unnecessary 3D effects,
# dark moire patterns, excessive borders, redundant grid lines).`,
    options: [
      'The proportion of a graphic’s ink devoted to non-redundant data information; maximizing it eliminates visual clutter and cognitive friction',
      'The ratio of text labels to numerical numbers in a table',
      'The amount of color ink compared to grayscale ink in a printer',
      'The proportion of missing values plotted with dotted lines'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The proportion of a graphic’s ink devoted to non-redundant data information; maximizing it eliminates visual clutter and cognitive friction',
    explanationTitle: 'Data-Ink Ratio and Eliminating Chartjunk',
    explanationText:
      'Data-ink is the non-erasable core of a graphic: the ink that represents empirical numbers. Tufte’s rule is: "Above all else, show the data. Maximize the data-ink ratio. Erase non-data ink, erase redundant data-ink."',
    deepDive:
      'Elements like heavy drop shadows, decorative pseudo-3D perspective extrusions, loud textured backgrounds, and bright gridlines are known as "chartjunk" because they consume visual attention without delivering data content.',
    tags: ['Data-Ink', 'Tufte', 'Chartjunk', 'Best Practices', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-006',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Pie Charts vs. Donut Charts vs. Bar Charts',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why do data visualization experts generally advise against using pie charts with more than 5 categories?',
    codeSnippet: `# 8 Categories representing budget allocations:
allocations = {'HR': 12, 'IT': 14, 'Legal': 11, 'Ops': 13, 'R&D': 15, 'Sales': 12, 'Mktg': 11, 'Fin': 12}
# Slices have nearly identical angles (~11% - 15%), making visual comparison nearly impossible.`,
    options: [
      'Humans struggle to accurately judge angles and relative 2D slice areas; a horizontal bar chart sorted by magnitude allows far faster, error-free comparison',
      'Pie charts cannot be exported to vector formats like SVG',
      'Pie charts automatically convert negative values to absolute values without warning',
      'Matplotlib requires pandas to render pie charts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Humans struggle to accurately judge angles and relative 2D slice areas; a horizontal bar chart sorted by magnitude allows far faster, error-free comparison',
    explanationTitle: 'Limitations of Pie Charts for Multi-Category Data',
    explanationText:
      'Human visual processing is poorly equipped to judge slight differences in angles or curved sector areas, especially when slices are separated across circles. A simple bar or lollipop chart sorted in descending order makes differences of even 1% immediately noticeable along a shared scale.',
    deepDive:
      'If a part-to-whole relationship must be shown, keep slices to at most 3-4 distinct categories, start the primary slice at 12 o’clock, and consider a sorted 100% stacked bar chart or donut chart with a central total callout.',
    tags: ['Pie Charts', 'Perception', 'Chart Selection', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-007',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Line Charts vs. Scatter Plots',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'When is a line chart strictly appropriate, and when should unconnected scatter points be used instead?',
    codeSnippet: `# Dataset 1: Continuous temporal progression
time = [1, 2, 3, 4, 5]
temperature = [21.5, 22.0, 23.1, 22.8, 20.9]

# Dataset 2: Independent customer observations
customer_age = [23, 45, 31, 65, 29]
annual_spend = [450, 1200, 890, 2100, 620]`,
    options: [
      'Line charts imply continuity and progression (e.g., chronological time series); scatter plots should be used for independent bivariate observations where connecting lines would imply non-existent sequential continuity',
      'Line charts are only for integers; scatter plots are only for floating-point numbers',
      'Line charts cannot show more than 10 points; scatter plots require at least 1,000 points',
      'Line charts require both axes to share identical units of measurement'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Line charts imply continuity and progression (e.g., chronological time series); scatter plots should be used for independent bivariate observations where connecting lines would imply non-existent sequential continuity',
    explanationTitle: 'Appropriate Use of Connected Lines',
    explanationText:
      'A connecting line represents an implicit interpolation: it implies that moving between point A and point B traverses real intermediate states (such as time). Connecting independent entities (like individual customers or countries) creates misleading visual slopes with no physical meaning.',
    deepDive:
      'Connecting independent points creates spurious visual slopes and intersections that mislead the viewer. Scatter plots display joint distribution, correlation, clusters, and bivariate outliers between two independent continuous variables.',
    tags: ['Line Charts', 'Scatter Plots', 'Time Series', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-008',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Visual Encoding Principle',
    topic: 'Box Plots (Tukey Box-and-Whisker)',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What five summary statistics constitute the core structure of a standard Tukey box plot?',
    codeSnippet: `# In a standard boxplot:
# Box lower boundary: Q1 (25th percentile)
# Line inside box: Q2 (Median, 50th percentile)
# Box upper boundary: Q3 (75th percentile)
# Whiskers extend to: max/min within 1.5 * IQR from Q1/Q3
# Isolated dots beyond whiskers: Statistical outliers`,
    options: [
      'Minimum (within fence), First Quartile (Q1), Median (Q2), Third Quartile (Q3), and Maximum (within fence)',
      'Mean, Mode, Standard Deviation, Variance, and Range',
      'Sample size (N), Standard Error, Skewness, Kurtosis, and P-value',
      'Minimum, Lower Decile, Arithmetic Mean, Upper Decile, and Absolute Peak'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Minimum (within fence), First Quartile (Q1), Median (Q2), Third Quartile (Q3), and Maximum (within fence)',
    explanationTitle: 'The Five-Number Summary of a Box Plot',
    explanationText:
      'A box plot graphically depicts groups of numerical data through their quartiles: Q1, Median (Q2), and Q3 form the box (the Interquartile Range, IQR). Whiskers extend to the most extreme data points within 1.5 * IQR of the quartiles, while points beyond are plotted individually as outliers.',
    deepDive:
      'Box plots are nonparametric: they do not assume an underlying normal distribution. Comparing multiple box plots side by side is one of the most effective techniques to contrast distributions, medians, and spreads across categorical groups.',
    tags: ['Box Plot', 'EDA', 'Quartiles', 'IQR', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-009',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Color Theory',
    topic: 'Color Palettes: Sequential vs. Diverging vs. Qualitative',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When should a data analyst select a "diverging" color palette instead of a "sequential" color palette?',
    codeSnippet: `# Palette Types:
# 1. Qualitative: ['#e41a1c', '#377eb8', '#4daf4a'] -> Unordered categories
# 2. Sequential: ['#eff3ff', '#bdd7e7', '#6baed6', '#2171b5'] -> Ordered magnitudes (0 to 100)
# 3. Diverging: ['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'] -> Critical midpoint`,
    options: [
      'When the data has a meaningful critical central midpoint (e.g., zero, target threshold, or financial break-even) and extends in two opposing directions',
      'When the data consists of categorical names like departments or product types',
      'When the data contains only positive integer values with no baseline',
      'When the chart must be printed strictly on black-and-white thermal printers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When the data has a meaningful critical central midpoint (e.g., zero, target threshold, or financial break-even) and extends in two opposing directions',
    explanationTitle: 'Selecting Sequential, Diverging, and Qualitative Palettes',
    explanationText:
      'Sequential palettes encode ordered numeric data progressing from low to high using lightness/saturation gradations. Diverging palettes emphasize extremes on both sides of a meaningful neutral midpoint (e.g., -50% loss to +50% profit centered at 0% in white/neutral gray).',
    deepDive:
      'Qualitative palettes use distinct color hues of equal lightness and saturation so no category inadvertently appears more important or intense than another.',
    tags: ['Color Theory', 'Palettes', 'Diverging', 'Sequential', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-010',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Color Theory & Accessibility',
    topic: 'Colorblind Accessibility & Perceptually Uniform Colormaps',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'Why are traditional "rainbow" or "jet" colormaps widely condemned in scientific and analytical reporting, and what are preferred modern alternatives?',
    codeSnippet: `# Avoid:
# plt.set_cmap('jet') # Has artificial luminance spikes in yellow and cyan!

# Recommended perceptually uniform colormaps:
# 'viridis', 'plasma', 'inferno', 'magma', 'cividis'`,
    options: [
      'Jet/rainbow colormaps have non-monotonic luminance profiles that introduce false perceptual boundaries, and they are completely illegible to people with red-green colorblindness; "viridis" and "cividis" ensure uniform perceptual gradients',
      'Rainbow colormaps require more GPU memory to render in web browsers',
      'Rainbow colormaps cause rounding errors when Matplotlib maps floats to pixels',
      'Python Institute mandates RGB hex codes with odd checksums'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Jet/rainbow colormaps have non-monotonic luminance profiles that introduce false perceptual boundaries, and they are completely illegible to people with red-green colorblindness; "viridis" and "cividis" ensure uniform perceptual gradients',
    explanationTitle: 'Perceptually Uniform Colormaps (Viridis & Cividis)',
    explanationText:
      'The human eye perceives luminance (brightness) as magnitude. The jet colormap has sharp spikes in perceived brightness at cyan and yellow, creating visible bands where no sudden change exists in the data. Perceptually uniform colormaps like "viridis" change linearly in luminance, making them scientifically accurate and colorblind-safe.',
    deepDive:
      'Roughly 8% of males and 0.5% of females have deuteranomaly or protanomaly (red-green color vision deficiency). Colormaps like "cividis" and "viridis" were mathematically optimized to look identical in order and luminance to color-deficient viewers.',
    tags: ['Colorblindness', 'Viridis', 'Colormaps', 'Accessibility', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-011',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Heatmaps for Matrix & Tabular Density',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'In what scenario is a heatmap the ideal visualization tool for exploratory data analysis?',
    codeSnippet: `# Correlation matrix or 2D cross-tabulation:
corr_matrix = df.corr() # 10x10 correlation grid
# A heatmap encodes pairwise correlation values from -1.0 to +1.0 using a diverging color palette.`,
    options: [
      'Displaying two-dimensional cross-tabulated metrics, correlation matrices, or temporal patterns (e.g., hour of day vs. day of week) across two discrete dimensions',
      'Plotting a single continuous variable changing over a hundred years',
      'Displaying hierarchical organizational trees with parent-child nodes',
      'Visualizing geographical 3D topographic terrain without coordinates'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Displaying two-dimensional cross-tabulated metrics, correlation matrices, or temporal patterns (e.g., hour of day vs. day of week) across two discrete dimensions',
    explanationTitle: 'Optimal Use Cases for Heatmaps',
    explanationText:
      'Heatmaps excel at showing relationships between two categorical/binned dimensions where color represents a third numerical metric. Classic use cases include correlation matrices, website user click density, and temporal activity grids (such as server load by hour vs. weekday).',
    deepDive:
      'When presenting heatmaps to executives, always annotate cells with actual numerical values (e.g., `annot=True` in Seaborn) if the matrix is compact, as raw color tiles alone only convey broad ordinal patterns rather than precise figures.',
    tags: ['Heatmap', 'Correlation Matrix', 'EDA', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-012',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Design Principle',
    topic: 'Direct Labeling vs. Remote Legends',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why do visual design guidelines strongly favor "direct labeling" over remote legends in multi-line charts?',
    codeSnippet: `# Approach 1: Remote Legend (User must look back and forth between line colors and box)
plt.plot(x, y1, label='Product A')
plt.plot(x, y2, label='Product B')
plt.legend(loc='upper left')

# Approach 2: Direct Labeling (Label sits at the right endpoint of each line)
plt.text(x[-1], y1[-1], ' Product A', va='center')
plt.text(x[-1], y2[-1], ' Product B', va='center')`,
    options: [
      'Direct labeling eliminates the "split-attention effect," allowing the reader’s eye to process the series identity instantly without constantly scanning back and forth to an external legend',
      'Remote legends consume more than 50% of the graphic’s vector memory',
      'Matplotlib crashes if a legend contains more than three distinct line labels',
      'Direct labeling automatically translates text strings into the user’s local language'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Direct labeling eliminates the "split-attention effect," allowing the reader’s eye to process the series identity instantly without constantly scanning back and forth to an external legend',
    explanationTitle: 'Direct Labeling and the Split-Attention Effect',
    explanationText:
      'In multi-line charts, an external legend forces cognitive back-and-forth scanning between colors and label keys (the split-attention effect). Placing labels directly next to or on the data series minimizes cognitive load, prevents color-matching confusion, and assists colorblind readers.',
    deepDive:
      'Direct labeling is especially critical when plotting five or more lines, as differentiating subtle shades of blue, teal, or green across an external legend becomes frustrating and prone to human error.',
    tags: ['Direct Labeling', 'Cognitive Load', 'Legends', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-013',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Dual-Axis Charts & Their Pitfalls',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'Why are dual-axis charts (two differing Y-axes sharing one X-axis) considered risky and often discouraged in analytical communication?',
    codeSnippet: `# Dual-axis plot:
# Left Y-axis: Revenue in Millions ($0 to $50M)
# Right Y-axis: Customer Churn Rate (0% to 15%)
# Depending on how the designer scales the two axes, the lines can be made
# to intersect anywhere, falsely implying correlation or causation!`,
    options: [
      'Arbitrary independent scaling of the two Y-axes can artificially create or hide visual correlations and optical intersections that have no real empirical relationship',
      'Dual-axis plots cannot be rendered in Python without third-party C extensions',
      'Dual-axis plots strictly require both variables to have identical mathematical standard deviations',
      'Web browsers cannot display two distinct Y-axes simultaneously'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Arbitrary independent scaling of the two Y-axes can artificially create or hide visual correlations and optical intersections that have no real empirical relationship',
    explanationTitle: 'Risks of Dual-Axis Charts',
    explanationText:
      'Because both Y-axes can be scaled independently, the analyst can manipulate visual slopes and crossover points at will, leading viewers to perceive false relationships or assume identical magnitudes. Better alternatives include two stacked subplots sharing an X-axis, or indexing both metrics to a base percentage (100 = start).',
    deepDive:
      'Two vertically stacked subplots with an aligned shared X-axis (`plt.subplots(2, 1, sharex=True)`) provide clear, unambiguous comparison of two metrics over time without the visual deception of competing Y-axis scales.',
    tags: ['Dual-Axis', 'Chart Pitfalls', 'Graphic Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-014',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Visual Encoding Principle',
    topic: 'Anscombe’s Quartet & The Value of Visualization',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What fundamental truth about data analysis was proven by Francis Anscombe’s famous quartet of datasets (1973)?',
    codeSnippet: `# Anscombe's 4 Datasets:
# All four datasets have virtually identical summary statistics:
# - Mean of x: 9.0
# - Mean of y: 7.5
# - Variance of x: 11.0
# - Correlation r: 0.816
# - Linear regression line: y = 3.0 + 0.5x
# BUT: When plotted, one is linear, one is parabolic, one has an outlier, and one is vertical!`,
    options: [
      'Summary statistics alone can conceal radically different distributions and patterns; data must always be visualized before drawing analytical conclusions',
      'Linear regression only works when datasets contain exactly eleven observations',
      'Pearson correlation is invalid if variance exceeds standard deviation',
      'NumPy arrays should never be calculated on datasets with identical means'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Summary statistics alone can conceal radically different distributions and patterns; data must always be visualized before drawing analytical conclusions',
    explanationTitle: 'Anscombe’s Quartet and Why Visualization is Essential',
    explanationText:
      'Anscombe constructed four datasets that have nearly identical simple descriptive statistics (means, variances, correlations, and regression lines), yet display wildly divergent graphical structures when plotted. It serves as the definitive demonstration that summary metrics alone are never sufficient without visual verification.',
    deepDive:
      'A modern extension is the "Datasaurus Dozen" (Matejka & Fitzmaurice, 2017), which creates twelve completely distinct shapes (including a dinosaur and star) that all share the exact same mean, standard deviation, and Pearson r to two decimal places.',
    tags: ['Anscombe Quartet', 'EDA', 'Visualization Value', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-015',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Small Multiples (Trellis / Facet Displays)',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is a "small multiples" display (also known as a trellis or faceted chart), and what analytical advantage does it provide?',
    codeSnippet: `# Instead of cramming 12 regional sales lines onto one chaotic chart:
# A small multiples grid renders 12 identical miniature charts (one per region),
# sharing identical X and Y axis scales for effortless scanning across categories.`,
    options: [
      'A series of miniature charts using the same scale and axes structure, allowing effortless visual comparison across multiple categorical slices without visual crowding',
      'A chart that shrinks by 50% on mobile displays',
      'A technique for plotting fractions and small decimals below 0.01',
      'A method of rendering multiple datasets into a single pie chart slice'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A series of miniature charts using the same scale and axes structure, allowing effortless visual comparison across multiple categorical slices without visual crowding',
    explanationTitle: 'The Power of Small Multiples (Faceting)',
    explanationText:
      'Coined by Edward Tufte, "small multiples" repeat the same graphic structure across different slices of data. Because the design, scale, and axes remain constant, the reader’s cognitive effort is focused entirely on changes in the data rather than deciphering a chaotic spaghetti chart.',
    deepDive:
      'In Seaborn, small multiples are created effortlessly using `FacetGrid` or figure-level functions like `sns.relplot(..., col="region", col_wrap=4)`.',
    tags: ['Small Multiples', 'Faceting', 'Tufte', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-016',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Visual Encoding Principle',
    topic: 'Preattentive Visual Attributes',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In visual cognition, what are "preattentive visual attributes", and why are they critical in data storytelling?',
    codeSnippet: `# Examples of Preattentive Attributes:
# - Color hue (a single bright orange bar among 9 gray bars)
# - Size (one thick line among thin lines)
# - Orientation / Angle
# - Position
# Processed by the human visual cortex in < 250 milliseconds before conscious focus!`,
    options: [
      'Visual features processed subconsciously by the human visual cortex in under 250 milliseconds, enabling analysts to direct audience attention instantly to key insights',
      'Statistical calculations performed before loading data into memory',
      'Metadata tags added to chart PNG files for search engine indexing',
      'Labels that appear only when a user hovers a mouse over an interactive dashboard'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Visual features processed subconsciously by the human visual cortex in under 250 milliseconds, enabling analysts to direct audience attention instantly to key insights',
    explanationTitle: 'Preattentive Attributes and Instant Visual Hierarchy',
    explanationText:
      'Preattentive processing occurs automatically in the sensory memory without conscious effort. By purposefully using preattentive attributes (such as highlighting a single critical bar in an accent color while leaving other bars in muted gray), the analyst guides the viewer’s eye directly to the focal takeaway.',
    deepDive:
      'Overusing preattentive attributes ruins their effectiveness. If everything is highlighted in bold, contrasting colors, nothing stands out. Use preattentive cues sparingly and deliberately.',
    tags: ['Preattentive Attributes', 'Cognition', 'Storytelling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-017',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Treemaps vs. Bar Charts for Hierarchical Data',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When is a Treemap particularly well-suited for communicating data insights?',
    codeSnippet: `# Hierarchical structure:
# Company -> Divisions (4) -> Departments (16) -> Teams (64)
# Each rectangle’s area represents annual operational budget.`,
    options: [
      'When displaying hierarchical part-to-whole data with nested rectangular areas, showing both macro categories and sub-components simultaneously',
      'When tracking the continuous daily fluctuations of a stock price over time',
      'When calculating the bivariate correlation coefficient between two numeric columns',
      'When identifying outliers using standard deviation fences'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When displaying hierarchical part-to-whole data with nested rectangular areas, showing both macro categories and sub-components simultaneously',
    explanationTitle: 'Treemaps for Hierarchical Proportions',
    explanationText:
      'Treemaps display nested rectangular tiles where the area of each rectangle represents a quantitative magnitude and color can encode a secondary metric. They make efficient use of space to visualize high-cardinality hierarchical structures that would overwhelm standard bar charts.',
    deepDive:
      'Treemaps are less effective when precise quantitative comparison between non-adjacent sub-rectangles is needed, because comparing 2D rectangular areas is less perceptually accurate than comparing lengths along a common axis.',
    tags: ['Treemap', 'Hierarchy', 'Chart Selection', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-018',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Graphic Integrity',
    topic: '3D Charting Pitfalls',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why do analytical guidelines virtually universally forbid pseudo-3D bar and pie charts in professional reporting?',
    codeSnippet: `# Excel or PowerPoint "3D Cylinder" or "3D Tilted Pie Chart":
# Front slices appear deceptively larger than identical slices in the back
# due to perspective projection and viewing angle distortion!`,
    options: [
      'Perspective foreshortening distorts proportions, making foreground elements appear artificially larger than background elements of equal value',
      'Python compilers cannot render 3D graphics in memory',
      '3D graphics invert positive and negative numbers on the Z-axis',
      '3D charts cannot be saved as image files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Perspective foreshortening distorts proportions, making foreground elements appear artificially larger than background elements of equal value',
    explanationTitle: 'The Deception of Pseudo-3D Charts',
    explanationText:
      'Pseudo-3D effects introduce artificial perspective distortion: elements in the front plane appear physically larger than equal or greater elements in the back plane. Furthermore, the added 3D "walls" create occlusions and ambiguity about where the bar actually ends on the axis.',
    deepDive:
      'Pseudo-3D charts add zero additional data dimensions while significantly reducing readability and perceptual accuracy. Unless rendering true 3D spatial data (e.g., molecular geometry or CAD models), stick strictly to 2D projections.',
    tags: ['3D Charts', 'Chartjunk', 'Graphic Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-019',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Chart Selection',
    topic: 'Stacked Bar Charts vs. Grouped (Clustered) Bar Charts',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the primary perceptual trade-off between a grouped (clustered) bar chart and a stacked bar chart?',
    codeSnippet: `# Grouped: Sub-bars sit side-by-side on a common baseline.
# Stacked: Sub-bars stack on top of each other.
# Segment 1 (bottom) starts at baseline 0.
# Segment 2 (top) starts at the top of Segment 1 (floating baseline).`,
    options: [
      'Grouped bars allow easy comparison of individual sub-segments across groups because they share a common baseline, whereas stacked bars make comparing non-bottom segments difficult due to shifting baselines but excel at showing group totals',
      'Stacked bars can only display percentages; grouped bars can only display raw counts',
      'Grouped bars require negative numbers; stacked bars cannot handle negative values',
      'Stacked bars always consume twice the pixel width of grouped bars'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Grouped bars allow easy comparison of individual sub-segments across groups because they share a common baseline, whereas stacked bars make comparing non-bottom segments difficult due to shifting baselines but excel at showing group totals',
    explanationTitle: 'Grouped vs. Stacked Bar Chart Trade-Offs',
    explanationText:
      'In a stacked bar chart, only the bottom segment shares a common baseline at zero. All higher segments have variable, floating starting heights, making accurate comparison between groups very difficult. However, stacked charts make total sum comparisons effortless.',
    deepDive:
      'When the goal is comparing individual sub-category values across groups, use grouped bars. When the goal is showing the overall total while indicating broad composition, stacked bars (or a 100% normalized stacked bar) are preferable.',
    tags: ['Stacked Bar', 'Grouped Bar', 'Baseline', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-020',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pced',
    cardType: 'Design Principle',
    topic: 'Sorting Categorical Data in Charts',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why should categorical bar charts almost always be sorted by value (descending or ascending) rather than left in arbitrary or default alphabetical order?',
    codeSnippet: `# Default alphabetical order:
# [Finance: 42, HR: 12, IT: 89, Legal: 15, Marketing: 64, Operations: 78, Sales: 91]

# Sorted descending order:
# [Sales: 91, IT: 89, Operations: 78, Marketing: 64, Finance: 42, Legal: 15, HR: 12]`,
    options: [
      'Sorting by value creates an immediate visual ranking, enabling viewers to instantly identify leaders, laggards, and distribution patterns without scanning randomly',
      'Matplotlib throws an error if categorical labels are not sorted numerically',
      'Alphabetical order causes color palettes to desaturate',
      'Sorting by value is an ISO requirement for relational databases'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sorting by value creates an immediate visual ranking, enabling viewers to instantly identify leaders, laggards, and distribution patterns without scanning randomly',
    explanationTitle: 'The Importance of Intentional Sorting in Charts',
    explanationText:
      'Unless categorical variables possess an intrinsic natural order (such as days of the week, months, age brackets, or survey Likert scales), sorting bars in descending order allows readers to immediately assess rank, spread, and relative standing without hunting across the chart.',
    deepDive:
      'Alphabetical sorting is only useful when a chart serves as a lookup index for a very large list of categories (e.g., looking up a specific country among 195 nations in an interactive directory). In analytical presentations, always sort by value.',
    tags: ['Sorting', 'Bar Charts', 'Best Practice', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 4.2: MATPLOTLIB FUNDAMENTALS & OBJECT-ORIENTED API [Cards 21-40]
  // =========================================================================
  {
    id: 'pced-sec4-021',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Architecture',
    topic: 'Figure vs. Axes Hierarchy',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'In Matplotlib’s object hierarchy, what is the precise distinction between a "Figure" and an "Axes"?',
    codeSnippet: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()`,
    options: [
      'The Figure is the overall top-level canvas/window holding everything; an Axes is an individual plot/subplot within the Figure containing data, axes, ticks, and labels',
      'Figure refers to 3D plots; Axes refers exclusively to 2D plots',
      'Figure is a pandas object; Axes is a NumPy array',
      'There is no difference; Figure and Axes are alias names for the same class'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Figure is the overall top-level canvas/window holding everything; an Axes is an individual plot/subplot within the Figure containing data, axes, ticks, and labels',
    explanationTitle: 'Matplotlib Anatomy: Figure vs. Axes',
    explanationText:
      'The Figure (`fig`) is the entire top-level bounding canvas that contains all elements (subfigures, text, legends, and canvases). An Axes (`ax`) represents an individual coordinate area with an X-axis, Y-axis, title, and data plots. A single Figure can contain multiple Axes objects (subplots).',
    deepDive:
      'Be careful not to confuse the plural English word "axes" with Matplotlib’s class `Axes`. An `Axes` object contains two (or three in 3D) `Axis` objects that regulate tick lines and data limits.',
    tags: ['Matplotlib', 'Figure', 'Axes', 'Architecture', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-022',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib API',
    topic: 'Pyplot State-Machine vs. Object-Oriented Interface',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'Why is Matplotlib’s Object-Oriented (OO) interface (`fig, ax = plt.subplots()`) strongly preferred over the Pyplot state-machine interface (`plt.plot()`) for robust data analysis code?',
    codeSnippet: `# State-Machine (MATLAB-style, implicit active axis):
plt.figure()
plt.plot([1, 2], [3, 4])
plt.title("Implicit")

# Object-Oriented (Explicit references):
fig, ax = plt.subplots()
ax.plot([1, 2], [3, 4])
ax.set_title("Explicit")`,
    options: [
      'The OO interface explicitly references specific Axes objects, preventing state confusion and bugs when customizing multi-subplot layouts or reusable plotting functions',
      'The state-machine interface runs 10x slower because it compiles Python to C at runtime',
      'The OO interface is the only way to export plots to PNG or JPEG',
      'The state-machine interface does not support floating-point data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The OO interface explicitly references specific Axes objects, preventing state confusion and bugs when customizing multi-subplot layouts or reusable plotting functions',
    explanationTitle: 'Object-Oriented vs. Pyplot State-Machine Interface',
    explanationText:
      'Pyplot’s state-machine interface tracks the "current" active figure and axis implicitly. This leads to accidental overwriting and confusing side effects when managing multiple subplots or inside helper functions. The OO interface gives explicit, clean handles (`ax1`, `ax2`) to each plot.',
    deepDive:
      'In professional Python workflows and production reporting scripts, standard practice is to instantiate via `fig, ax = plt.subplots(...)` and then perform all subsequent plot calls directly on `ax`.',
    tags: ['Matplotlib', 'Object-Oriented', 'Pyplot', 'Best Practice', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-023',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Creating Multi-Subplot Grids with plt.subplots()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When calling `fig, axes = plt.subplots(2, 3)`, what is the data type and shape of the returned `axes` object?',
    codeSnippet: `import matplotlib.pyplot as plt

fig, axes = plt.subplots(nrows=2, ncols=3)
print(type(axes))
print(axes.shape)`,
    options: [
      'A 2D NumPy ndarray of shape (2, 3) containing individual AxesSubplot instances',
      'A Python list of 6 dictionaries',
      'A single Axes object with 6 internal coordinate layers',
      'A pandas DataFrame with 2 rows and 3 columns'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A 2D NumPy ndarray of shape (2, 3) containing individual AxesSubplot instances',
    explanationTitle: 'Structure of axes from plt.subplots(nrows, ncols)',
    explanationText:
      'When both `nrows` and `ncols` are greater than 1, `plt.subplots()` returns a 2D NumPy array of Axes objects with shape `(nrows, ncols)`. Individual subplots are accessed via 2D indexing like `axes[0, 1]` or flattened via `axes.flatten()`.',
    deepDive:
      'Note that if `nrows=1` and `ncols=1`, it returns a single `Axes` object. If either dimension is 1 (e.g. 1x3 or 3x1), it returns a 1D NumPy array of length 3.',
    tags: ['Matplotlib', 'subplots', 'NumPy ndarray', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-024',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Method Name Translation (Pyplot vs. Axes)',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'In the Matplotlib Object-Oriented API, which methods on an `ax` object correspond to Pyplot’s `plt.title()`, `plt.xlabel()`, and `plt.xlim()`?',
    codeSnippet: `# Pyplot style:
plt.title("Revenue Trend")
plt.xlabel("Quarter")
plt.xlim(1, 4)

# OO style:
ax.set_title("Revenue Trend")
ax.set_xlabel("Quarter")
ax.set_xlim(1, 4)`,
    options: [
      'ax.set_title(), ax.set_xlabel(), and ax.set_xlim()',
      'ax.title(), ax.xlabel(), and ax.xlim()',
      'ax.add_title(), ax.add_xlabel(), and ax.add_xlim()',
      'ax.config(title=...), ax.config(xlabel=...), and ax.config(xlim=...)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.set_title(), ax.set_xlabel(), and ax.set_xlim()',
    explanationTitle: 'Object-Oriented ax.set_* Naming Convention',
    explanationText:
      'In Matplotlib’s OO API, configuration methods on the `Axes` instance typically take the prefix `set_` (e.g., `ax.set_title()`, `ax.set_xlabel()`, `ax.set_ylabel()`, `ax.set_xlim()`, `ax.set_ylim()`). Alternatively, all can be configured in one call using `ax.set(title=..., xlabel=..., xlim=...)`.',
    deepDive:
      'This distinction is a frequent topic on certification exams: `plt.title()` is a module-level function, whereas `ax.set_title()` is the method on an individual `Axes` object.',
    tags: ['Matplotlib', 'API Methods', 'ax.set', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-025',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Code Execution',
    topic: 'Customizing Line Plots (Styles, Colors, Markers)',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What does the format string `"r--o"` represent in the call `ax.plot(x, y, "r--o")`?',
    codeSnippet: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [10, 20, 15], 'r--o')`,
    options: [
      'Red color, dashed line style, and circle markers at each data point',
      'Radial coordinate system, double thickness, and orange background',
      'Reversed axis order with origin centered at zero',
      'Right-aligned orientation with circular smoothing'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Red color, dashed line style, and circle markers at each data point',
    explanationTitle: 'Matplotlib Format String Syntax (color, linestyle, marker)',
    explanationText:
      'Matplotlib supports concise MATLAB-style format strings combining `[color][marker][line]`. Here, `r` sets color to red, `--` sets linestyle to dashed, and `o` places circular markers at each coordinate.',
    deepDive:
      'While concise, explicit keyword arguments are preferred in production: `ax.plot(x, y, color="red", linestyle="--", marker="o", linewidth=2, markersize=6)`.',
    tags: ['Matplotlib', 'plot', 'Formatting', 'Syntax', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-026',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Code Execution',
    topic: 'Configuring Legends and Labels',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What happens if you execute `ax.legend()` without having specified `label` parameters in preceding plotting calls?',
    codeSnippet: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [4, 5, 6]) # No label provided!
ax.legend()`,
    options: [
      'Matplotlib displays a warning ("No artists with labels found to put in legend") and creates an empty legend box or nothing',
      'Matplotlib names the series "Series 1" automatically',
      'A fatal AttributeError is thrown, terminating Python execution',
      'Matplotlib pulls column names from the nearest active pandas DataFrame'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Matplotlib displays a warning ("No artists with labels found to put in legend") and creates an empty legend box or nothing',
    explanationTitle: 'Requirements for ax.legend()',
    explanationText:
      '`ax.legend()` inspects the artists in the Axes for non-empty `label` strings. If no labels were defined during plot calls, Matplotlib issues a `UserWarning: No artists with labels found to put in legend` and leaves the legend empty.',
    deepDive:
      'Always supply explicit label parameters during plotting: `ax.plot(x, y, label="Revenue")` followed by `ax.legend(loc="best", frameon=True)`.',
    tags: ['Matplotlib', 'legend', 'Labels', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-027',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Bar Charts: ax.bar() vs. ax.barh()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'When is `ax.barh()` (horizontal bar chart) strongly preferred over `ax.bar()` (vertical bar chart)?',
    codeSnippet: `# Vertical:
ax.bar(categories, values)

# Horizontal:
ax.barh(categories, values)`,
    options: [
      'When category names/labels are long text strings, because horizontal orientation prevents awkward diagonal tilting or overlapping labels along the X-axis',
      'When all numerical values are negative',
      'When the number of categories is strictly odd',
      'When plotting time-series date stamps'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When category names/labels are long text strings, because horizontal orientation prevents awkward diagonal tilting or overlapping labels along the X-axis',
    explanationTitle: 'Using Horizontal Bars for Long Category Labels',
    explanationText:
      'Vertical bar charts force long category labels to be rotated (e.g. 45 or 90 degrees), which significantly impairs reading speed. Horizontal bar charts (`ax.barh`) provide ample natural horizontal space for clean, left-to-right reading of labels.',
    deepDive:
      'Remember that in `ax.barh(y, width)`, the first parameter represents the vertical Y categories and the second represents the horizontal width (value), which is inverted relative to `ax.bar(x, height)`.',
    tags: ['Matplotlib', 'barh', 'Bar Chart', 'Typography', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-028',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Histogram Binning with ax.hist()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In `ax.hist(data, bins=20, density=True)`, what effect does `density=True` have on the Y-axis interpretation?',
    codeSnippet: `import matplotlib.pyplot as plt
import numpy as np

data = np.random.normal(0, 1, 1000)
fig, ax = plt.subplots()
counts, bin_edges, patches = ax.hist(data, bins=20, density=True)`,
    options: [
      'The histogram is normalized so that the total area under the histogram integrates to 1.0, representing a probability density rather than raw counts',
      'The histogram groups points into 3D density spheres',
      'Values below the median are discarded',
      'The bin widths are forced to exponentially increasing powers of two'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The histogram is normalized so that the total area under the histogram integrates to 1.0, representing a probability density rather than raw counts',
    explanationTitle: 'Understanding density=True in Histograms',
    explanationText:
      'With `density=True`, the height of each bar is normalized such that the sum of each bar’s area (bin width * bar height) equals 1.0. This makes it directly comparable to a continuous probability density function (PDF).',
    deepDive:
      'Be aware that individual bar heights can exceed 1.0 when bin widths are narrow (e.g., width < 1.0), because it is the total area under the curve that integrates to 1.0, not the sum of bar heights.',
    tags: ['Matplotlib', 'hist', 'Density', 'Probability', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-029',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Formatting',
    topic: 'Adding Annotations with ax.annotate()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the purpose of `xy` versus `xytext` in the call `ax.annotate("Peak", xy=(3, 100), xytext=(4, 120), arrowprops=dict(facecolor="black"))`?',
    codeSnippet: `fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [20, 50, 100, 70])
ax.annotate(
    "All-Time Peak",
    xy=(3, 100),         # Target coordinate being pointed to
    xytext=(3.5, 110),    # Location of the text label
    arrowprops=dict(arrowstyle="->", color="black")
)`,
    options: [
      'xy specifies the exact data point to point to; xytext specifies the coordinates where the text label is rendered',
      'xy is the top-left corner of the canvas; xytext is the bottom-right corner',
      'xy specifies coordinates in pixels; xytext specifies coordinates in inches',
      'xy is for 2D charts; xytext is strictly for 3D charts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'xy specifies the exact data point to point to; xytext specifies the coordinates where the text label is rendered',
    explanationTitle: 'Syntax and Roles of xy and xytext in ax.annotate',
    explanationText:
      '`ax.annotate()` is Matplotlib’s primary tool for narrative data callouts. `xy` defines the anchor point to be annotated (the tip of the arrow), while `xytext` defines the placement of the text box.',
    deepDive:
      'You can also control coordinate spaces using `textcoords="offset points"`, which allows placing the text box a fixed number of typographic points away from the data point regardless of axis zoom levels.',
    tags: ['Matplotlib', 'annotate', 'Storytelling', 'Callouts', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-030',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Formatting',
    topic: 'Tick Customization & Date Formatting',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How can an analyst rotate overlapping X-axis tick labels by 45 degrees in Matplotlib’s Object-Oriented API?',
    codeSnippet: `# Approach:
fig, ax = plt.subplots()
ax.bar(months, sales)
# Rotate labels for readability:`,
    options: [
      'ax.tick_params(axis="x", rotation=45) or plt.setp(ax.get_xticklabels(), rotation=45, ha="right")',
      'ax.set_rotation("x", 45)',
      'ax.rotate_axis("x", angle=45)',
      'ax.xaxis.flip(45)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.tick_params(axis="x", rotation=45) or plt.setp(ax.get_xticklabels(), rotation=45, ha="right")',
    explanationTitle: 'Rotating Tick Labels via tick_params or setp',
    explanationText:
      '`ax.tick_params(axis="x", rotation=45)` is the standard, concise method to rotate tick labels. Alternatively, `plt.setp(ax.get_xticklabels(), rotation=45, ha="right")` allows fine-tuning horizontal alignment so text lines up cleanly with the tick marks.',
    deepDive:
      'Setting `ha="right"` (horizontal alignment) when rotating tick labels 45 degrees is essential so that the top-right corner of each label text box aligns precisely underneath its corresponding tick mark.',
    tags: ['Matplotlib', 'Ticks', 'tick_params', 'Typography', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-031',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Layout',
    topic: 'Preventing Label Clipping with tight_layout()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What common visual defect does calling `plt.tight_layout()` or `fig.tight_layout()` resolve?',
    codeSnippet: `fig, axes = plt.subplots(2, 2)
# ... plotting operations ...
# Without tight_layout(), subplot titles and axis labels often overlap
# or get clipped off by the outer figure border!
fig.tight_layout()`,
    options: [
      'It automatically adjusts subplot padding and margins so that titles, axis labels, and tick marks do not overlap or get clipped',
      'It compresses the image file size by 50% using WebP lossless compression',
      'It reduces the font size of all text to fit inside 80 columns',
      'It removes all gridlines and background colors'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It automatically adjusts subplot padding and margins so that titles, axis labels, and tick marks do not overlap or get clipped',
    explanationTitle: 'Solving Overlapping Subplots with tight_layout()',
    explanationText:
      '`tight_layout()` inspects the bounding boxes of all artists (labels, titles, ticks) across all subplots and automatically recalculates margin padding so nothing overlaps or spills outside the figure canvas.',
    deepDive:
      'A modern alternative in Matplotlib 3.5+ is passing `layout="constrained"` directly into figure creation: `plt.subplots(2, 2, layout="constrained")`, which continuously prevents overlaps even if the figure is resized.',
    tags: ['Matplotlib', 'tight_layout', 'Subplots', 'Layout', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-032',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Export',
    topic: 'Saving Figures with fig.savefig()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'When calling `fig.savefig("chart.png", dpi=300, bbox_inches="tight")`, what is the function of `bbox_inches="tight"`?',
    codeSnippet: `fig, ax = plt.subplots()
ax.plot([1, 2, 3], [4, 5, 6])
ax.set_title("Executive Summary")
fig.savefig("output.png", dpi=300, bbox_inches="tight")`,
    options: [
      'It automatically crops excessive whitespace and ensures peripheral elements (like legends outside the plot or rotated labels) are not clipped in the saved file',
      'It compresses the image into a ZIP archive',
      'It limits the graphic to exactly 640x480 pixels',
      'It converts vector SVG paths into binary raster bytes'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It automatically crops excessive whitespace and ensures peripheral elements (like legends outside the plot or rotated labels) are not clipped in the saved file',
    explanationTitle: 'The Critical Utility of bbox_inches="tight"',
    explanationText:
      'By default, `savefig()` saves the predetermined figure dimensions, which often truncates legends placed outside the axes or long rotated tick labels. Setting `bbox_inches="tight"` calculates the exact bounding box enclosing all rendered elements.',
    deepDive:
      '`dpi=300` ensures print-quality resolution (Dots Per Inch). Standard web/screen graphics use 72 to 150 DPI, whereas high-resolution print deliverables or PDF executive decks require 300 DPI.',
    tags: ['Matplotlib', 'savefig', 'DPI', 'Export', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-033',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Adding Threshold & Reference Lines',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Which Matplotlib methods draw infinite horizontal and vertical reference lines across an entire Axes?',
    codeSnippet: `# Method 1: Horizontal benchmark at y = 100
ax.axhline(y=100, color='r', linestyle='--', label='Target')

# Method 2: Vertical event marker at x = 2024
ax.axvline(x=2024, color='gray', linestyle=':', label='Policy Change')`,
    options: [
      'ax.axhline() and ax.axvline()',
      'ax.draw_hline() and ax.draw_vline()',
      'ax.plot_horizontal() and ax.plot_vertical()',
      'ax.add_line_x() and ax.add_line_y()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.axhline() and ax.axvline()',
    explanationTitle: 'Drawing Full-Span Reference Lines with axhline/axvline',
    explanationText:
      '`ax.axhline(y, ...)` and `ax.axvline(x, ...)` create lines that span the entire width or height of the plot regardless of axis limits. In contrast, `ax.hlines()` and `ax.vlines()` require explicit start and end coordinates.',
    deepDive:
      'These methods are invaluable for benchmark targets, KPI thresholds, baseline zeroes, and average reference lines. Complementary methods include `ax.axhspan()` and `ax.axvspan()` to shade target bands or recession periods.',
    tags: ['Matplotlib', 'axhline', 'axvline', 'Benchmarks', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-034',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Controlling Grids with ax.grid()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'In accordance with Tufte’s Data-Ink guidelines, how should gridlines be styled in Matplotlib to assist readout without competing with data?',
    codeSnippet: `# High-quality grid styling:
ax.grid(True, linestyle='--', alpha=0.5, color='#d3d3d3', linewidth=0.7)
ax.set_axisbelow(True) # Ensures grid lines sit behind data bars/points!`,
    options: [
      'Subtle, light gray, thin dashed lines placed visually behind data elements using ax.set_axisbelow(True)',
      'Solid dark black lines placed in front of data bars',
      'Bright neon yellow lines matching the background color',
      'Grids should never be used under any analytical circumstances'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Subtle, light gray, thin dashed lines placed visually behind data elements using ax.set_axisbelow(True)',
    explanationTitle: 'Best Practices for Chart Gridlines',
    explanationText:
      'Gridlines should be quiet guideposts, not prominent cage bars. Setting light color, transparency (`alpha=0.5`), and calling `ax.set_axisbelow(True)` ensures that data bars, lines, and scatter points sit cleanly on top of gridlines without visual interference.',
    deepDive:
      'By default in some versions of Matplotlib, gridlines might render over bars. Calling `ax.set_axisbelow(True)` or `ax.set_axisbelow("line")` is a key trick for professional visual polish.',
    tags: ['Matplotlib', 'grid', 'AxisBelow', 'Data-Ink', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-035',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Code Execution',
    topic: 'Scatter Plot Alpha Blending for Overplotting',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When plotting a scatter plot with 50,000 overlapping points, what parameter prevents the graphic from becoming an undifferentiated solid blob?',
    codeSnippet: `import matplotlib.pyplot as plt
import numpy as np

x = np.random.normal(0, 1, 50000)
y = x + np.random.normal(0, 0.5, 50000)

fig, ax = plt.subplots()
# Use alpha blending:
ax.scatter(x, y, alpha=0.1, s=5)`,
    options: [
      'alpha (transparency) combined with small marker size s, revealing point density through color saturation accumulation',
      'linewidth set to 100',
      'marker="none"',
      'color="black" with no other parameters'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'alpha (transparency) combined with small marker size s, revealing point density through color saturation accumulation',
    explanationTitle: 'Mitigating Overplotting with Alpha Transparency',
    explanationText:
      'Overplotting occurs when thousands of data points overlap, completely obscuring local density. Lowering `alpha` (e.g. `alpha=0.05` to `0.2`) makes individual markers semi-transparent so that regions of high concentration naturally emerge as darker, saturated clusters.',
    deepDive:
      'For massive datasets with hundreds of thousands of points, alternatives like 2D histograms (`ax.hist2d()`) or hexagonal binning (`ax.hexbin()`) are even more performant and visually informative.',
    tags: ['Matplotlib', 'scatter', 'alpha', 'Overplotting', 'PCED-30-02']
  }
];
