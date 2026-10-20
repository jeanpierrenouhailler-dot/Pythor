import { Flashcard } from '../types';

export const pcedSection4CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.2 CONTINUED: MATPLOTLIB ADVANCED CUSTOMIZATION [Cards 36-40]
  // =========================================================================
  {
    id: 'pced-sec4-036',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Formatting',
    topic: 'Built-in Styles with plt.style.use()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'How does an analyst apply a cohesive global aesthetic theme across all subsequent Matplotlib figures in a script?',
    codeSnippet: `import matplotlib.pyplot as plt

# Check available styles:
print(plt.style.available)

# Apply a style:
plt.style.use('seaborn-v0_8-whitegrid')`,
    options: [
      'plt.style.use("style_name") sets the global rcParams dictionary for colors, grids, fonts, and backgrounds',
      'plt.load_theme("style_name")',
      'plt.set_css("style_name")',
      'plt.matplotlib_theme = "style_name"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'plt.style.use("style_name") sets the global rcParams dictionary for colors, grids, fonts, and backgrounds',
    explanationTitle: 'Matplotlib Global Styles via plt.style.use()',
    explanationText:
      '`plt.style.use()` configures Matplotlib’s runtime parameter dictionary (`rcParams`). Popular built-in styles include `"seaborn-v0_8-whitegrid"`, `"ggplot"`, `"fivethirtyeight"`, and `"tableau-colorblind10"`.',
    deepDive:
      'To apply a style temporarily without affecting subsequent plots in the session, use a context manager: `with plt.style.context("fivethirtyeight"): plt.plot(...)`.',
    tags: ['Matplotlib', 'style.use', 'rcParams', 'Themes', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-037',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Confidence Bands with ax.fill_between()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'Which Matplotlib method fills the region between an upper and lower boundary curve, commonly used for uncertainty/confidence intervals?',
    codeSnippet: `fig, ax = plt.subplots()
ax.plot(x, mean_forecast, color='blue', label='Forecast')
ax.fill_between(x, lower_bound, upper_bound, color='blue', alpha=0.2, label='95% CI')`,
    options: [
      'ax.fill_between(x, y1, y2, ...)',
      'ax.shade_range(x, y1, y2, ...)',
      'ax.color_interval(x, y1, y2, ...)',
      'ax.draw_ribbon(x, y1, y2, ...)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ax.fill_between(x, y1, y2, ...)',
    explanationTitle: 'Shading Uncertainty Bands with ax.fill_between()',
    explanationText:
      '`ax.fill_between(x, y1, y2)` generates a polygon mesh between curves `y1` and `y2` across domain `x`. It is standard for plotting regression confidence intervals, time-series forecasting bounds, and standard error envelopes.',
    deepDive:
      'Always set `alpha` between 0.15 and 0.3 so the underlying grid lines and central trend line remain fully legible through the shaded confidence ribbon.',
    tags: ['Matplotlib', 'fill_between', 'Confidence Intervals', 'Uncertainty', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-038',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Formatting Percentage Labels in ax.pie()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What does the parameter `autopct="%1.1f%%"` accomplish when calling `ax.pie()`?',
    codeSnippet: `sizes = [45, 30, 25]
labels = ['Direct', 'Referral', 'Organic']

fig, ax = plt.subplots()
ax.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)`,
    options: [
      'It formats and prints the calculated percentage inside each pie slice with one decimal place followed by a percent sign',
      'It sets the transparency of the pie slices to 11%',
      'It rotates each slice by 1.1 degrees',
      'It cuts away 1.1% of the pie as an explode margin'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It formats and prints the calculated percentage inside each pie slice with one decimal place followed by a percent sign',
    explanationTitle: 'String Formatting with autopct in ax.pie()',
    explanationText:
      '`autopct` accepts a Python format string (or callable function) to display the numerical percentage of each wedge automatically calculated from slice weights. `%1.1f%%` outputs floating-point numbers formatted to 1 decimal place followed by literal `%`.',
    deepDive:
      'Setting `startangle=90` is standard convention, rotating the start of the primary slice to the 12 o’clock vertical position rather than Matplotlib’s default 3 o’clock position (0 degrees).',
    tags: ['Matplotlib', 'pie', 'autopct', 'String Formatting', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-039',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Logarithmic Axis Scaling',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When should an analyst use `ax.set_yscale("log")`, and what transformation does it apply to the axis ticks?',
    codeSnippet: `# Skewed wealth or power-law distribution:
fig, ax = plt.subplots()
ax.scatter(company_employees, revenue)
ax.set_xscale('log')
ax.set_yscale('log')`,
    options: [
      'When data spans multiple orders of magnitude or follows exponential/power-law distributions; axis ticks advance by powers of 10 (10^0, 10^1, 10^2, 10^3) rather than linear increments',
      'When all numbers in the dataset are less than 0.001',
      'When the analyst wants to convert currency units to Bitcoin',
      'When the dataset has more than 1,000,000 rows'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When data spans multiple orders of magnitude or follows exponential/power-law distributions; axis ticks advance by powers of 10 (10^0, 10^1, 10^2, 10^3) rather than linear increments',
    explanationTitle: 'Logarithmic Axes for Extreme Dynamic Ranges',
    explanationText:
      'Logarithmic scaling transforms exponential curves into straight lines and prevents huge values from compressing small values into an illegible sliver along the bottom axis. Values advance multiplicatively (e.g. factors of 10) instead of additively.',
    deepDive:
      'Warning: Log scales cannot represent zero or negative values because `log(0)` is undefined. Passing zero or negative values to a log axis will trigger warnings or drop those points.',
    tags: ['Matplotlib', 'Log Scale', 'set_yscale', 'Transformations', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-040',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pced',
    cardType: 'Matplotlib Syntax',
    topic: 'Adding Colorbars with fig.colorbar()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When mapping a third continuous variable to color in a scatter plot or image, how is an explanatory colorbar legend added in Matplotlib?',
    codeSnippet: `fig, ax = plt.subplots()
scatter = ax.scatter(x, y, c=temperature, cmap='viridis')
cbar = fig.colorbar(scatter, ax=ax)
cbar.set_label('Temperature (°C)')`,
    options: [
      'fig.colorbar(mappable, ax=ax) attaches a colorbar legend to the specified Axes using the color mapping from the mappable object',
      'ax.legend(colorbar=True)',
      'plt.show_color_spectrum()',
      'ax.add_colorbar(palette="viridis")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig.colorbar(mappable, ax=ax) attaches a colorbar legend to the specified Axes using the color mapping from the mappable object',
    explanationTitle: 'Associating Colorbars with Mappable Objects',
    explanationText:
      '`fig.colorbar()` requires a "mappable" object (such as the `PathCollection` returned by `ax.scatter(..., c=...)` or the `AxesImage` returned by `ax.imshow()`). Passing `ax=ax` tells Matplotlib which plot area to allocate space from.',
    deepDive:
      'A colorbar without a descriptive label is as uninformative as an unlabelled axis. Always call `cbar.set_label("Metric Name (Units)")` to ensure clarity for stakeholders.',
    tags: ['Matplotlib', 'colorbar', 'viridis', 'Legends', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 4.3: SEABORN STATISTICAL DATA VISUALIZATIONS [Cards 41-60]
  // =========================================================================
  {
    id: 'pced-sec4-041',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Architecture',
    topic: 'Seaborn’s Role & Pandas Integration',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is Seaborn’s primary architectural design goal, and how does it relate to Matplotlib and pandas?',
    codeSnippet: `import seaborn as sns
import matplotlib.pyplot as plt

# Seaborn takes a tidy DataFrame directly:
sns.scatterplot(data=df, x='tenure', y='churn_prob', hue='contract_type')`,
    options: [
      'Seaborn is built on top of Matplotlib and tightly integrated with pandas DataFrames, providing high-level statistical plotting routines and attractive default aesthetics',
      'Seaborn is a low-level replacement for NumPy written in C',
      'Seaborn is an interactive 3D virtual reality game engine for Python',
      'Seaborn compiles Python charts directly to SQL queries'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Seaborn is built on top of Matplotlib and tightly integrated with pandas DataFrames, providing high-level statistical plotting routines and attractive default aesthetics',
    explanationTitle: 'Seaborn’s High-Level Statistical Paradigm',
    explanationText:
      'Seaborn provides high-level APIs that operate directly on "tidy" (long-form) pandas DataFrames. It automatically handles statistical aggregation (means, error bars, KDEs), color mapping, and legend generation using Matplotlib primitives underneath.',
    deepDive:
      'Because every Seaborn plot renders onto Matplotlib `Figure` and `Axes` objects, you can seamlessly combine Seaborn statistical plots with low-level Matplotlib tweaks (`ax.set_title()`, `ax.axhline()`, etc.).',
    tags: ['Seaborn', 'Architecture', 'Pandas Integration', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-042',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Architecture',
    topic: 'Figure-Level vs. Axes-Level Functions',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the critical structural difference between Seaborn’s "figure-level" functions (e.g., `relplot`, `catplot`, `displot`) and "axes-level" functions (e.g., `scatterplot`, `barplot`, `histplot`)?',
    codeSnippet: `# Axes-level: Plots onto an existing or current Matplotlib Axes
fig, ax = plt.subplots()
sns.scatterplot(data=df, x='x', y='y', ax=ax)

# Figure-level: Creates and manages its own FacetGrid figure!
g = sns.relplot(data=df, x='x', y='y', col='region')`,
    options: [
      'Axes-level functions draw onto a single Matplotlib Axes (accepting an ax= parameter); figure-level functions control their own multi-subplot FacetGrid and cannot take an ax= argument',
      'Figure-level functions can only plot text; axes-level functions can only plot numbers',
      'Axes-level functions are deprecated in Seaborn v0.12+',
      'Figure-level functions cannot be exported to image files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Axes-level functions draw onto a single Matplotlib Axes (accepting an ax= parameter); figure-level functions control their own multi-subplot FacetGrid and cannot take an ax= argument',
    explanationTitle: 'Seaborn Figure-Level vs. Axes-Level Architecture',
    explanationText:
      'Axes-level functions draw directly onto an `Axes` object and integrate into custom Matplotlib subplot grids. Figure-level functions manage their own figure through a `FacetGrid` object, enabling multi-panel column and row faceting (`col="category"`, `row="year"`).',
    deepDive:
      'Exam trap: Calling `sns.relplot(..., ax=ax)` raises an unexpected keyword argument `ax` error, because figure-level functions create their own figure and do not accept an external `ax`.',
    tags: ['Seaborn', 'Figure-Level', 'Axes-Level', 'FacetGrid', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-043',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Multidimensional Encodings in sns.scatterplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'In `sns.scatterplot(data=df, x="age", y="income", hue="gender", style="education", size="experience")`, how many data dimensions are simultaneously visualized?',
    codeSnippet: `import seaborn as sns

# Five distinct variables encoded:
# 1. age (X position)
# 2. income (Y position)
# 3. gender (Color hue)
# 4. education (Marker shape/style)
# 5. experience (Marker size/area)`,
    options: [
      '5 distinct variables (2 spatial coordinates + color + marker shape + marker size)',
      '2 variables only, with decorative visual styling',
      '3 variables only, because style and size must represent the same column',
      'None; scatterplot only accepts 1D arrays'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '5 distinct variables (2 spatial coordinates + color + marker shape + marker size)',
    explanationTitle: 'High-Dimensional Encoding with Seaborn Aesthetics',
    explanationText:
      'Seaborn allows mapping up to 5 variables onto a 2D scatter plot using distinct perceptual channels: X position, Y position, color hue (`hue`), symbol style (`style`), and marker magnitude (`size`).',
    deepDive:
      'While technically possible, encoding 5 dimensions in one chart can overwhelm viewers. In practice, encoding 3 variables (X, Y, and hue) is the sweet spot for rapid human interpretation.',
    tags: ['Seaborn', 'scatterplot', 'hue', 'style', 'size', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-044',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'sns.barplot() Default Aggregation and Error Bars',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'By default, what statistical value does the height of each bar represent in `sns.barplot(data=df, x="department", y="salary")`, and what do the vertical black whiskers indicate?',
    codeSnippet: `import seaborn as sns

# df has multiple employee rows per department
sns.barplot(data=df, x='department', y='salary')`,
    options: [
      'Bar height represents the arithmetic mean of salaries; the whisker line represents the 95% confidence interval estimated via bootstrapping',
      'Bar height represents the total sum of salaries; the whisker line represents the standard deviation',
      'Bar height represents the median; the whisker line indicates min and max range',
      'Bar height represents the count of employees; whiskers indicate missing values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Bar height represents the arithmetic mean of salaries; the whisker line represents the 95% confidence interval estimated via bootstrapping',
    explanationTitle: 'Statistical Aggregation in Seaborn Bar Plots',
    explanationText:
      'Unlike Matplotlib’s `ax.bar()` which requires pre-aggregated summary values, `sns.barplot()` automatically aggregates raw record-level data, computing the mean by default. The error bar displays a 95% confidence interval computed by bootstrap resampling.',
    deepDive:
      'You can change the aggregation function using the `estimator` argument (e.g. `estimator=np.median` or `estimator=sum`) and configure error bars via `errorbar="sd"` (standard deviation) or `errorbar=None`.',
    tags: ['Seaborn', 'barplot', 'estimator', 'Confidence Interval', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-045',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'sns.countplot() vs. sns.barplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the specific use case for `sns.countplot()`, and how does its parameter requirement differ from `sns.barplot()`?',
    codeSnippet: `# Method A:
sns.countplot(data=df, x='churn_status')

# Method B:
sns.barplot(data=df, x='churn_status', y='account_balance')`,
    options: [
      'sns.countplot() acts as a categorical frequency tally requiring only ONE axis variable (x or y), plotting the count of rows; sns.barplot() requires both x and y to calculate a summary statistic',
      'sns.countplot() is only used for numerical floats; sns.barplot() is only for strings',
      'sns.countplot() requires a machine learning model object',
      'sns.countplot() only works on boolean True/False series'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sns.countplot() acts as a categorical frequency tally requiring only ONE axis variable (x or y), plotting the count of rows; sns.barplot() requires both x and y to calculate a summary statistic',
    explanationTitle: 'sns.countplot() for Categorical Frequency Tallies',
    explanationText:
      '`sns.countplot()` calculates raw row frequencies for a single discrete variable, analogous to a histogram for categorical data. You specify only `x` (vertical bars) or `y` (horizontal bars). Passing both `x` and `y` raises a ValueError.',
    deepDive:
      '`sns.countplot(data=df, y="department")` creates clean horizontal frequency bars, saving you from having to call `df["department"].value_counts()` manually.',
    tags: ['Seaborn', 'countplot', 'barplot', 'Frequencies', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-046',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Box Plots vs. Violin Plots in Seaborn',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What advantage does `sns.violinplot()` offer over `sns.boxplot()` when examining multimodal distributions?',
    codeSnippet: `# Dataset with bimodal (two-peak) distribution:
fig, (ax1, ax2) = plt.subplots(1, 2)
sns.boxplot(data=df, x='category', y='value', ax=ax1)
sns.violinplot(data=df, x='category', y='value', ax=ax2)`,
    options: [
      'A violin plot combines a box plot with a rotated Kernel Density Estimation (KDE) curve on each side, revealing bimodality or multiple peaks that look identical in a standard box plot',
      'Violin plots run faster because they do not calculate quartiles',
      'Violin plots automatically remove outliers from the underlying DataFrame',
      'Violin plots can only be rendered in black and white'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A violin plot combines a box plot with a rotated Kernel Density Estimation (KDE) curve on each side, revealing bimodality or multiple peaks that look identical in a standard box plot',
    explanationTitle: 'Violin Plots: Combining Quartiles with Distribution Shape',
    explanationText:
      'A standard box plot only shows summary markers (Q1, median, Q3). If a distribution is bimodal (has two distinct peaks), a box plot will hide this, looking identical to a unimodal distribution. A violin plot displays the full continuous density shape.',
    deepDive:
      'Inside the violin, Seaborn by default draws a miniature box plot showing the interquartile range (thick black bar) and median (white dot).',
    tags: ['Seaborn', 'violinplot', 'boxplot', 'KDE', 'Bimodal', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-047',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Distribution Plotting with sns.histplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'How do you overlay a smooth continuous Kernel Density Estimate (KDE) curve onto a histogram using `sns.histplot()`?',
    codeSnippet: `import seaborn as sns

# Overlay smooth distribution curve on histogram bars:
sns.histplot(data=df, x='transaction_amount', kde=True)`,
    options: [
      'Pass the parameter kde=True into sns.histplot()',
      'Call sns.add_kde_overlay() after plotting',
      'Set plot_type="histogram_and_kde"',
      'Pass smooth=True to plt.plot()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass the parameter kde=True into sns.histplot()',
    explanationTitle: 'Combining Histograms with KDE Curves in Seaborn',
    explanationText:
      'In Seaborn v0.11+, `sns.histplot()` is the primary distribution plotting tool. Setting `kde=True` automatically estimates and draws a smooth kernel density curve over the discrete histogram bins.',
    deepDive:
      'You can also control the bin resolution via `bins=30` or `binwidth=5`, and compare groups by setting `hue="category"` with `element="step"` or `multiple="stack"`.',
    tags: ['Seaborn', 'histplot', 'kde', 'Distributions', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-048',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'sns.lineplot() and Repeated Observations',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When `df` contains multiple Y values for each unique X coordinate, how does `sns.lineplot()` handle them by default?',
    codeSnippet: `# Multiple subjects tested at time points 1, 2, 3, 4:
# Subject A at t=1: 10
# Subject B at t=1: 14
# Subject C at t=1: 12
sns.lineplot(data=df, x='time', y='score')`,
    options: [
      'It plots the mean line across observations and shades a 95% bootstrap confidence interval ribbon around the line',
      'It raises a DuplicateAxisError and halts execution',
      'It plots only the first subject and ignores all subsequent records',
      'It converts the line into a scatter plot automatically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It plots the mean line across observations and shades a 95% bootstrap confidence interval ribbon around the line',
    explanationTitle: 'Automatic Aggregation and Error Bands in sns.lineplot()',
    explanationText:
      '`sns.lineplot()` automatically aggregates multiple measurements sharing the same X coordinate. It draws a line through the central tendency (mean) and wraps it in a semi-transparent band representing the 95% confidence interval.',
    deepDive:
      'If you do not want aggregation (e.g. you want to see individual subject trajectories), pass `estimator=None` and supply `units="subject_id"`.',
    tags: ['Seaborn', 'lineplot', 'Aggregation', 'Confidence Interval', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-049',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Correlation Matrix Visualization with sns.heatmap()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In `sns.heatmap(corr_df, annot=True, fmt=".2f", cmap="coolwarm", vmin=-1, vmax=1)`, what is the purpose of setting `vmin=-1` and `vmax=1`?',
    codeSnippet: `corr = df.corr()
fig, ax = plt.subplots(figsize=(8, 6))
sns.heatmap(corr, annot=True, fmt='.2f', cmap='coolwarm', vmin=-1, vmax=1, ax=ax)`,
    options: [
      'It anchors the colormap’s endpoints to the theoretical limits of Pearson correlation (-1 to +1), ensuring that zero aligns perfectly with the neutral center color',
      'It discards all correlation values outside the range -1 to +1',
      'It rounds correlation numbers to whole integers',
      'It forces the heatmap to be a square grid'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It anchors the colormap’s endpoints to the theoretical limits of Pearson correlation (-1 to +1), ensuring that zero aligns perfectly with the neutral center color',
    explanationTitle: 'Anchoring Colormaps in Correlation Heatmaps',
    explanationText:
      'If `vmin` and `vmax` are not set, Seaborn dynamically stretches the color limits to the min and max observed in the sample. If the lowest correlation is +0.2, a diverging palette would falsely paint +0.2 as dark blue/negative. Setting `vmin=-1` and `vmax=1` guarantees accurate color semantics.',
    deepDive:
      '`annot=True` writes the numerical values in each cell, and `fmt=".2f"` formats them as floating-point numbers with 2 decimal places.',
    tags: ['Seaborn', 'heatmap', 'Correlation', 'vmin', 'vmax', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-050',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Exploratory Pairwise Grids with sns.pairplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What does `sns.pairplot(df, hue="species")` generate across an entire numerical dataset?',
    codeSnippet: `import seaborn as sns

iris = sns.load_dataset('iris')
# Pairwise relationships across 4 numeric features:
g = sns.pairplot(iris, hue='species', diag_kind='kde')`,
    options: [
      'A matrix grid of scatter plots for every pairwise combination of numeric features, with univariate distributions (histograms or KDEs) along the diagonal, color-coded by the hue variable',
      'A single 3D rotating cube animation',
      'A bar chart ranking features by missing values',
      'A table comparing mean and median values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A matrix grid of scatter plots for every pairwise combination of numeric features, with univariate distributions (histograms or KDEs) along the diagonal, color-coded by the hue variable',
    explanationTitle: 'Comprehensive EDA with sns.pairplot()',
    explanationText:
      '`sns.pairplot()` creates a pairwise matrix of bivariate scatter plots for all numerical columns in a DataFrame. The diagonal tiles show the univariate distribution for each column (histogram or KDE). Passing `hue` separates clusters by categorical label.',
    deepDive:
      'Be cautious with wide DataFrames: a dataset with 20 numerical columns generates a 20x20 grid (400 individual subplots), which can consume significant memory and time. Pass `vars=["col1", "col2", "col3"]` to subset key variables.',
    tags: ['Seaborn', 'pairplot', 'EDA', 'Multivariate', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-051',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Joint Distribution and Marginals with sns.jointplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What does `sns.jointplot(data=df, x="height", y="weight", kind="reg")` visualize?',
    codeSnippet: `import seaborn as sns

g = sns.jointplot(data=df, x='height', y='weight', kind='reg')`,
    options: [
      'A central bivariate scatter plot with a fitted linear regression line, accompanied by marginal univariate distributions along the top and right outer margins',
      'A 3D surface plot with contour shadows',
      'A side-by-side comparison of two independent bar charts',
      'A pie chart centered inside a donut chart'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A central bivariate scatter plot with a fitted linear regression line, accompanied by marginal univariate distributions along the top and right outer margins',
    explanationTitle: 'Bivariate and Marginal Analysis with sns.jointplot()',
    explanationText:
      '`sns.jointplot()` pairs a central bivariate plot (scatter, hex, kde, or regression) with marginal univariate distribution plots on the outer axes (top for X, right for Y). It is ideal for assessing joint relationship and individual spread simultaneously.',
    deepDive:
      'Supported `kind` arguments include: `"scatter"`, `"kde"`, `"hist"`, `"hex"`, `"reg"`, and `"resid"` (residual plot to evaluate regression fit).',
    tags: ['Seaborn', 'jointplot', 'Marginals', 'Regression', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-052',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Aesthetics',
    topic: 'Configuring Styles with sns.set_style()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What are the five preset background styles available in `sns.set_style()`?',
    codeSnippet: `# Configure visual background theme:
sns.set_style("whitegrid")`,
    options: [
      '"whitegrid", "darkgrid", "white", "dark", and "ticks"',
      '"minimal", "corporate", "excel", "tableau", and "paper"',
      '"flat", "raised", "sunken", "glass", and "neon"',
      '"print", "screen", "mobile", "desktop", and "tablet"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '"whitegrid", "darkgrid", "white", "dark", and "ticks"',
    explanationTitle: 'Seaborn Preset Aesthetic Themes',
    explanationText:
      'Seaborn offers five built-in styles via `sns.set_style(style_name)`: `"darkgrid"` (default), `"whitegrid"` (popular for business presentations), `"white"` (clean, high data-ink), `"dark"`, and `"ticks"` (adds small axis tick marks).',
    deepDive:
      'In modern Seaborn, `sns.set_theme(style="whitegrid", palette="muted")` is the recommended unified entry point to configure styles, context scales, and color palettes simultaneously.',
    tags: ['Seaborn', 'set_style', 'Themes', 'Aesthetics', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-053',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Aesthetics',
    topic: 'Removing Unnecessary Axis Spines with sns.despine()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What visual modification does `sns.despine()` perform on an active Matplotlib / Seaborn figure?',
    codeSnippet: `fig, ax = plt.subplots()
sns.scatterplot(data=df, x='x', y='y', ax=ax)
sns.despine() # Removes default top and right borders`,
    options: [
      'It removes the top and right boundary spines (lines) of the plot, creating a cleaner, modern look aligned with Tufte’s Data-Ink principle',
      'It deletes all tick labels along the X and Y axes',
      'It removes all legend boxes from the canvas',
      'It resets the color palette to monochrome'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It removes the top and right boundary spines (lines) of the plot, creating a cleaner, modern look aligned with Tufte’s Data-Ink principle',
    explanationTitle: 'Maximizing Clean Data-Ink with sns.despine()',
    explanationText:
      'By default, `sns.despine()` erases the top and right border lines (spines) from the plot, which are usually redundant non-data ink. You can also pass parameters like `sns.despine(left=True)` to remove the left spine.',
    deepDive:
      'You can also offset the remaining spines away from the data points using `sns.despine(offset=10, trim=True)` to produce classic Tufte-style floating axes.',
    tags: ['Seaborn', 'despine', 'Data-Ink', 'Spines', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-054',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Categorical Faceting with sns.catplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How does `sns.catplot()` allow changing the underlying chart type while maintaining consistent multi-panel faceting?',
    codeSnippet: `# Figure-level categorical interface:
g = sns.catplot(
    data=df,
    x='day',
    y='total_bill',
    hue='sex',
    col='time',
    kind='box' # What parameter controls the chart type?
)`,
    options: [
      'Via the kind parameter, which accepts values such as "strip", "swarm", "box", "violin", "boxen", "point", "bar", or "count"',
      'Via the chart_type parameter',
      'Via the geom parameter',
      'Via the render_as parameter'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Via the kind parameter, which accepts values such as "strip", "swarm", "box", "violin", "boxen", "point", "bar", or "count"',
    explanationTitle: 'Unified Categorical Faceting with sns.catplot(kind=...)',
    explanationText:
      '`sns.catplot()` is the figure-level function for categorical data. Switching between plot representations is as simple as toggling `kind="box"`, `kind="violin"`, `kind="bar"`, or `kind="strip"` without rewriting the faceting scaffolding.',
    deepDive:
      '`col` and `row` arguments automatically construct small-multiples grids partitioned by categorical variables, eliminating manual loop boilerplate.',
    tags: ['Seaborn', 'catplot', 'kind', 'Faceting', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-055',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Linear Regression & Confidence Bands with sns.lmplot() / sns.regplot()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the primary difference between `sns.regplot()` and `sns.lmplot()` in Seaborn?',
    codeSnippet: `# Option 1:
sns.regplot(data=df, x='ad_spend', y='sales', ax=ax)

# Option 2:
sns.lmplot(data=df, x='ad_spend', y='sales', hue='market', col='region')`,
    options: [
      'sns.regplot() is an axes-level function that accepts an ax= parameter; sns.lmplot() is a figure-level function that supports multi-subplot faceting (col, row, hue)',
      'sns.regplot() calculates linear models; sns.lmplot() strictly calculates logistic models',
      'sns.lmplot() runs on GPU; sns.regplot() runs on CPU',
      'There is no difference; they are alias names for the same function'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sns.regplot() is an axes-level function that accepts an ax= parameter; sns.lmplot() is a figure-level function that supports multi-subplot faceting (col, row, hue)',
    explanationTitle: 'sns.regplot (Axes-Level) vs. sns.lmplot (Figure-Level)',
    explanationText:
      'Both functions fit a simple linear regression model and display a scatter plot with a 95% confidence interval ribbon. `sns.regplot()` operates on a single `Axes`. `sns.lmplot()` combines `regplot()` with `FacetGrid` to allow multi-panel faceting across columns and rows.',
    deepDive:
      'To fit higher-order polynomial relationships (e.g., quadratic curves), pass `order=2` into either function.',
    tags: ['Seaborn', 'regplot', 'lmplot', 'Regression', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-056',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Strip Plots vs. Swarm Plots',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'Why does `sns.swarmplot()` struggle with very large datasets (e.g., > 5,000 points per category), whereas `sns.stripplot()` handles them easily?',
    codeSnippet: `# Approach 1:
sns.stripplot(data=df, x='dept', y='salary', jitter=True)

# Approach 2:
sns.swarmplot(data=df, x='dept', y='salary')`,
    options: [
      'sns.swarmplot() uses an iterative collision-detection algorithm to adjust points so none overlap, which scales poorly with large N; stripplot applies random jitter without collision detection',
      'sns.swarmplot() only accepts integers',
      'sns.stripplot() computes kernel density in parallel on multiple CPU threads',
      'sns.swarmplot() converts categorical strings to hash digests'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'sns.swarmplot() uses an iterative collision-detection algorithm to adjust points so none overlap, which scales poorly with large N; stripplot applies random jitter without collision detection',
    explanationTitle: 'Collision Detection in Swarm Plots vs. Jitter in Strip Plots',
    explanationText:
      '`sns.swarmplot()` positions points along the categorical axis so that no two points overlap, providing a clear view of distribution density. However, this collision-avoidance algorithm is computationally intensive for large N and may warn that points cannot be positioned without overlap.',
    deepDive:
      'For datasets with thousands of points, use `sns.stripplot(..., jitter=0.2, alpha=0.3)` or combine a box plot with a strip plot overlaid.',
    tags: ['Seaborn', 'swarmplot', 'stripplot', 'Jitter', 'Scalability', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-057',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Color',
    topic: 'Custom Color Palettes with sns.color_palette()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Which built-in Seaborn color palette is explicitly optimized for readers with color vision deficiencies?',
    codeSnippet: `import seaborn as sns

# Safe palette for accessible reports:
sns.set_palette("colorblind")`,
    options: [
      '"colorblind"',
      '"deep"',
      '"pastel"',
      '"dark"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '"colorblind"',
    explanationTitle: 'Accessible Palettes in Seaborn: "colorblind"',
    explanationText:
      'Seaborn provides an explicitly curated qualitative palette named `"colorblind"` designed to maximize distinguishable contrast across red-green and blue-yellow color vision deficiencies.',
    deepDive:
      'You can preview any palette using `sns.palplot(sns.color_palette("colorblind"))` or inspect hex codes using `list(sns.color_palette("colorblind"))`.',
    tags: ['Seaborn', 'color_palette', 'Accessibility', 'Colorblind', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-058',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Layout',
    topic: 'Scaling Context for Presentations with sns.set_context()',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Which Seaborn context setting enlarges font sizes, line widths, and marker sizes for projection slides and executive presentations?',
    codeSnippet: `# Context sizes from smallest to largest:
# 'paper' < 'notebook' (default) < 'talk' < 'poster'
sns.set_context("talk")`,
    options: [
      '"talk" (for conference talks/slides) or "poster" (for large physical displays)',
      '"zoom" or "macro"',
      '"presentation" or "cinema"',
      '"bold" or "large"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '"talk" (for conference talks/slides) or "poster" (for large physical displays)',
    explanationTitle: 'Seaborn Scaling Contexts: paper, notebook, talk, poster',
    explanationText:
      '`sns.set_context()` scales typographic elements and line weights without changing the plot’s underlying data. The four presets in ascending size are: `"paper"`, `"notebook"` (default), `"talk"`, and `"poster"`.',
    deepDive:
      'Using `"talk"` ensures slide viewers in the back row can read axis tick numbers and legend labels without squinting.',
    tags: ['Seaborn', 'set_context', 'Presentations', 'Typography', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-059',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Architecture',
    topic: 'Accessing Matplotlib Axes from Seaborn FacetGrid',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When using a figure-level function like `g = sns.relplot(...)`, how can an analyst access the underlying Matplotlib `Figure` and `Axes` objects for custom annotations?',
    codeSnippet: `g = sns.relplot(data=df, x='x', y='y', col='category')
# How to get figure and axes handles?
fig = g.figure
axes = g.axes # 2D array of Axes objects`,
    options: [
      'g.figure returns the Matplotlib Figure, and g.axes returns the array of Matplotlib Axes objects',
      'plt.get_active_axes(g)',
      'g.to_matplotlib()',
      'Seaborn objects cannot interact with Matplotlib'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'g.figure returns the Matplotlib Figure, and g.axes returns the array of Matplotlib Axes objects',
    explanationTitle: 'Accessing Figure and Axes on Seaborn FacetGrid Objects',
    explanationText:
      'Figure-level Seaborn calls return a `FacetGrid` instance `g`. The underlying Matplotlib objects are exposed through `g.figure` (the Figure) and `g.axes` (a 2D NumPy array of `AxesSubplot` instances).',
    deepDive:
      'For convenience, `g.ax` provides a direct reference to the single `Axes` when there is only one subplot, and `g.set_axis_labels("X", "Y")` sets labels across all faceted panels simultaneously.',
    tags: ['Seaborn', 'FacetGrid', 'Matplotlib Bridge', 'OO API', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-060',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pced',
    cardType: 'Seaborn Syntax',
    topic: 'Kernel Density Bandwidth Adjustment',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In `sns.kdeplot(data=df, x="val", bw_adjust=0.5)`, what effect does setting `bw_adjust < 1.0` have on the resulting density curve?',
    codeSnippet: `fig, (ax1, ax2) = plt.subplots(1, 2)
sns.kdeplot(data=df, x='val', bw_adjust=1.0, ax=ax1) # Default
sns.kdeplot(data=df, x='val', bw_adjust=0.3, ax=ax2) # Under-smoothed`,
    options: [
      'It narrows the kernel bandwidth, producing a less smoothed curve that reveals fine, local peaks (risking noise over-sensitivity)',
      'It clips values beyond 0.5 standard deviations from the mean',
      'It doubles the width of the histogram bins',
      'It compresses the vertical probability axis by 50%'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It narrows the kernel bandwidth, producing a less smoothed curve that reveals fine, local peaks (risking noise over-sensitivity)',
    explanationTitle: 'Kernel Density Bandwidth Tuning (bw_adjust)',
    explanationText:
      'The bandwidth controls the smoothing window of the kernel density estimator. A `bw_adjust < 1.0` makes the curve more sensitive to fine structures and local modes (less smooth), while `bw_adjust > 1.0` produces a smoother curve that may mask sub-peaks.',
    deepDive:
      'Choosing bandwidth is analogous to choosing bin count in a histogram: too small produces noisy spikes; too large over-smooths genuine multi-modal patterns into a single broad bell curve.',
    tags: ['Seaborn', 'kdeplot', 'bw_adjust', 'Bandwidth', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 4.4: DASHBOARDS, EXECUTIVE REPORTING & KPI METRICS [Cards 61-70]
  // =========================================================================
  {
    id: 'pced-sec4-061',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Architecture',
    topic: 'Operational vs. Tactical vs. Strategic Dashboards',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the key functional difference between an "Operational Dashboard" and a "Strategic (Executive) Dashboard"?',
    codeSnippet: `# Dashboard Classification:
# Type 1: Server health, inventory levels, today's call queue (Real-time / minute-by-minute)
# Type 2: Quarterly churn rates, annual ARR growth, market expansion (Macro / high-level trends)`,
    options: [
      'Operational dashboards monitor real-time, short-term tactical workflows and system alerts for frontline staff; Strategic dashboards track long-term, high-level organizational KPIs and quarterly trends for C-suite leaders',
      'Operational dashboards use Matplotlib; Strategic dashboards strictly use Excel',
      'Strategic dashboards update every millisecond; Operational dashboards update once a year',
      'Operational dashboards are only for financial data; Strategic dashboards are only for HR'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Operational dashboards monitor real-time, short-term tactical workflows and system alerts for frontline staff; Strategic dashboards track long-term, high-level organizational KPIs and quarterly trends for C-suite leaders',
    explanationTitle: 'Operational vs. Tactical vs. Strategic Dashboards',
    explanationText:
      'Operational dashboards focus on the immediate "now" (hourly/daily updates, active alerts, operational health). Strategic executive dashboards summarize macro performance against organizational milestones, displaying high-level KPIs, quarterly trends, and strategic targets.',
    deepDive:
      'Tactical (Analytical) dashboards sit between the two: they support middle management in diagnosing trends, running historical comparisons, and exploring multidimensional root causes.',
    tags: ['Dashboards', 'Strategic', 'Operational', 'Executive Reporting', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-062',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'KPI Design',
    topic: 'Leading vs. Lagging Indicators',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In KPI design, what is the fundamental distinction between a "leading indicator" and a "lagging indicator"?',
    codeSnippet: `# Metric A: Customer Satisfaction Score (CSAT) for product trials this month.
# Metric B: Total Annual Revenue recorded on audited financial balance sheets.
# Which one predicts future results, and which one confirms past results?`,
    options: [
      'Leading indicators measure inputs or activities that predict future outcomes (e.g., active trial signups); lagging indicators measure historical outcomes after events have occurred (e.g., total quarterly revenue)',
      'Leading indicators are always positive numbers; lagging indicators are always negative',
      'Lagging indicators are computed with NumPy; leading indicators are computed with pandas',
      'Leading indicators require machine learning; lagging indicators require arithmetic mean'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Leading indicators measure inputs or activities that predict future outcomes (e.g., active trial signups); lagging indicators measure historical outcomes after events have occurred (e.g., total quarterly revenue)',
    explanationTitle: 'Leading vs. Lagging KPI Metrics',
    explanationText:
      'Lagging indicators are easy to measure accurately but are backward-looking: by the time revenue or customer churn is reported, the quarter is over. Leading indicators are forward-looking predictive signals that give stakeholders time to take proactive corrective action.',
    deepDive:
      'A balanced executive dashboard pairs lagging outcome metrics with actionable leading drivers (e.g., tracking Weekly Active Users alongside Monthly Churn Rate).',
    tags: ['KPI', 'Leading Indicators', 'Lagging Indicators', 'Business Metrics', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-063',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'KPI Design',
    topic: 'The SMART Criteria for Analytical Metrics',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What do the letters in the SMART framework stand for when defining executive performance metrics?',
    codeSnippet: `# Example Target:
# "Increase organic mobile app trial signups by 15% across North America by end of Q3 2026."
# S - M - A - R - T`,
    options: [
      'Specific, Measurable, Achievable (Attainable), Relevant, and Time-bound',
      'Simple, Meaningful, Actionable, Repeated, and Tested',
      'Standardized, Monitored, Automated, Real-time, and Transparent',
      'Statistical, Mathematical, Analytical, Rigorous, and Tracked'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Specific, Measurable, Achievable (Attainable), Relevant, and Time-bound',
    explanationTitle: 'SMART Metric Definition Framework',
    explanationText:
      'The SMART framework prevents vague metric definitions. Every analytical KPI must be Specific (clear scope), Measurable (quantifiable), Achievable (realistic), Relevant (aligned with strategic priorities), and Time-bound (defined evaluation deadline).',
    deepDive:
      'A metric like "improve user happiness" is un-SMART. In contrast, "increase user CSAT score from 7.2 to 8.5 by Q4" is fully actionable and auditable.',
    tags: ['SMART', 'KPI', 'Metric Design', 'Best Practices', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-064',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Layout',
    topic: 'KPI Scorecard Callouts & Contextual Deltas',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why is presenting an isolated single number (e.g., "$4.2M") on a KPI card considered poor dashboard design without contextual deltas?',
    codeSnippet: `# Bad Scorecard:
# [ Revenue: $4.2M ] -> Is this great? Terrible? On pace?

# Good Scorecard:
# [ Revenue: $4.2M | +12% vs. Target | +8% YoY | Sparkline (last 6 months) ]`,
    options: [
      'A number without context provides no frame of reference; stakeholders need benchmark targets, historical comparisons (YoY/MoM), or trend sparklines to evaluate performance',
      'Dashboard rendering libraries require at least three metrics per card to balance grid geometry',
      'Isolated numbers cannot be formatted as currency symbols',
      'Single numbers without deltas violate database integrity constraints'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A number without context provides no frame of reference; stakeholders need benchmark targets, historical comparisons (YoY/MoM), or trend sparklines to evaluate performance',
    explanationTitle: 'Contextual Benchmarks on KPI Scorecards',
    explanationText:
      'Raw numbers are meaningless in a vacuum. A $4.2M revenue metric is alarming if the budget target was $6.0M, but celebrated if the target was $3.5M. High-impact KPI scorecards always supply comparative context: delta vs. target, prior-period comparison, and miniature trend sparklines.',
    deepDive:
      'Sparklines—word-sized, high-density line graphics coined by Edward Tufte—fit directly inside scorecard tiles to reveal historical trajectory without taking up substantial screen space.',
    tags: ['KPI', 'Scorecard', 'Context', 'Deltas', 'Sparklines', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-065',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Layout',
    topic: 'Visual Scanning Patterns: F-Pattern and Z-Pattern',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'In visual design and eye-tracking research (Nielsen Norman Group), how do viewers naturally scan dashboards and reports, and how should layouts exploit this?',
    codeSnippet: `# Screen Reading Geometry:
# Top-Left (Primary focus) ---------> Top-Right (Secondary)
#      |
#      v
# Middle-Left (Tertiary) -----------> Middle-Right
#      |
# Bottom (Detailed breakdown tables)`,
    options: [
      'Viewers scan in an F-pattern or Z-pattern starting at the top-left; high-priority executive KPIs must be placed at the top-left, followed by supporting charts in the center, and granular tables at the bottom',
      'Viewers scan clockwise starting from the exact center',
      'Viewers read from bottom-right to top-left regardless of language',
      'Eye-tracking shows humans inspect color hues before noticing spatial position'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Viewers scan in an F-pattern or Z-pattern starting at the top-left; high-priority executive KPIs must be placed at the top-left, followed by supporting charts in the center, and granular tables at the bottom',
    explanationTitle: 'F-Pattern and Z-Pattern Dashboard Visual Hierarchy',
    explanationText:
      'In cultures that read left-to-right, visual attention lands first in the top-left quadrant. Top-level summary KPIs and critical alerts should occupy the top banner, primary diagnostic charts the middle section, and dense reference tables the lower section.',
    deepDive:
      'Never hide your primary KPI in the bottom-right corner. The top-left region is prime real estate in executive reporting.',
    tags: ['F-Pattern', 'Z-Pattern', 'Layout', 'Visual Hierarchy', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-066',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Information Architecture',
    topic: 'The Inverted Pyramid Information Architecture',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How does the journalistic "Inverted Pyramid" model apply to effective dashboard and analytical report design?',
    codeSnippet: `# Level 1 (Top): Most critical aggregate metrics / Headline conclusions
# Level 2 (Middle): Dimensional breakdowns, trends, and category comparisons
# Level 3 (Bottom): Granular, record-level transaction tables and raw data exports`,
    options: [
      'Structure the layout starting with the most critical high-level takeaways at the top, expanding into supporting dimensional trends in the middle, and providing granular tables at the bottom',
      'Start with raw transactional logs at the top and finish with an executive summary at the bottom',
      'Require three triangular charts arranged in an upside-down pyramid',
      'Invert the Y-axis so larger numbers appear at the bottom'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Structure the layout starting with the most critical high-level takeaways at the top, expanding into supporting dimensional trends in the middle, and providing granular tables at the bottom',
    explanationTitle: 'The Inverted Pyramid in Dashboard Information Architecture',
    explanationText:
      'Borrowed from journalism, the inverted pyramid ensures busy decision-makers can absorb the core conclusion in 5 seconds. If they have 30 seconds, they can review the supporting categorical breakdowns; if they need to audit details, they can drill into the bottom tables.',
    deepDive:
      'This hierarchy respects stakeholder time: executives rarely scroll to bottom tables, while operational analysts can drill straight into details.',
    tags: ['Inverted Pyramid', 'Information Architecture', 'Reporting', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-067',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Design',
    topic: 'Whitespace and Cognitive Load Reduction',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the role of intentional "whitespace" (negative space) in executive dashboard layouts?',
    codeSnippet: `# Cluttered Dashboard:
# 32 dense widgets crammed margin-to-margin with no breathing room.

# Clean Layout:
# 6 high-yield components separated by generous, structured padding.`,
    options: [
      'Whitespace groups related analytical modules, defines visual hierarchy, and prevents cognitive overload by giving the viewer’s eyes rest zones between data clusters',
      'Whitespace is wasted screen real estate that should always be filled with secondary charts',
      'Whitespace is an artifact caused by missing CSS styles',
      'Whitespace is only used when the database query fails'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Whitespace groups related analytical modules, defines visual hierarchy, and prevents cognitive overload by giving the viewer’s eyes rest zones between data clusters',
    explanationTitle: 'The Functional Value of Whitespace in Dashboards',
    explanationText:
      'Whitespace is an active design element. Cramming dozens of charts into every available pixel creates cognitive paralysis. Generous, consistent padding guides the reader’s eye, separates logical sections, and makes key figures stand out with clarity.',
    deepDive:
      'Gestalt principles (such as the Law of Proximity) state that objects close together are perceived as belonging to a unified group. Whitespace establishes these boundaries without heavy, distracting border lines.',
    tags: ['Whitespace', 'Cognitive Load', 'Gestalt', 'Design Principles', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-068',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Color Theory & Semantics',
    topic: 'Consistent Semantic Color & RAG Statusing',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'When using Red-Amber-Green (RAG) status indicators in an executive report, what critical semantic rule must be enforced?',
    codeSnippet: `# Color Semantic Rule:
# If Red = "Alert / Deficit / Churn" on Slide 1:
# Red MUST NOT be used for "Product Division Red" or "Positive Sales" on Slide 2!
# Furthermore: Avoid pure red-green alone for colorblind readers (use icons/symbols alongside color).`,
    options: [
      'Color meanings must remain strictly consistent across the entire dashboard/report, and status colors must be reinforced with text labels or symbols for colorblind accessibility',
      'Red must always be used for the largest bar in a chart',
      'Green must be used exclusively for hardware temperature alerts',
      'RAG colors are only permitted in financial audits'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Color meanings must remain strictly consistent across the entire dashboard/report, and status colors must be reinforced with text labels or symbols for colorblind accessibility',
    explanationTitle: 'Semantic Color Consistency and RAG Statusing',
    explanationText:
      'Switching color semantics within a report creates severe cognitive confusion. If red signals an underperforming metric in one widget, using red to represent a product category or high sales in an adjacent widget disorients viewers. Always pair color with secondary indicators (e.g. checkmarks, warning icons) for colorblind accessibility.',
    deepDive:
      'Muted tones (e.g., coral red `#e06666` and sage green `#6aa84f`) are far easier on executive eyes than blinding pure `#FF0000` and `#00FF00`.',
    tags: ['RAG Status', 'Semantic Color', 'Consistency', 'Accessibility', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-069',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Interactivity',
    topic: 'Global vs. Local Filters & Cross-Filtering',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is "cross-filtering" in modern interactive dashboards (e.g., Tableau, Power BI, Looker)?',
    codeSnippet: `# User clicks on the "California" bar in a geographic sales chart.
# Result: All adjacent charts (product mix, monthly timeline, customer segments)
# instantly filter down to show data exclusively for California!`,
    options: [
      'Clicking a data element in one chart automatically filters all other charts on the dashboard to the selected dimension without needing a separate dropdown filter menu',
      'Exporting an interactive dashboard to a printed PDF document',
      'Encrypting data queries across two SQL servers',
      'A method of calculating Pearson correlation across categorical columns'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Clicking a data element in one chart automatically filters all other charts on the dashboard to the selected dimension without needing a separate dropdown filter menu',
    explanationTitle: 'Interactive Cross-Filtering in Analytical Dashboards',
    explanationText:
      'Cross-filtering turns charts into interactive filter controls. Selecting a slice or bar immediately filters the remaining dashboard visualizations to that specific subgroup, enabling fluid, intuitive exploratory analysis.',
    deepDive:
      'Ensure cross-filtering has clear reset affordances (such as a visible "Reset All Filters" button) so non-technical users do not get trapped in an unexpected filtered state.',
    tags: ['Cross-Filtering', 'Interactivity', 'Dashboards', 'UX', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-070',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Interactivity',
    topic: 'Drill-Down vs. Drill-Through Navigation',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the operational distinction between "drill-down" and "drill-through" in analytical reporting navigation?',
    codeSnippet: `# Action 1: User clicks on "2025" in a year chart; the chart expands in place to show "Q1, Q2, Q3, Q4".
# Action 2: User right-clicks a customer row and navigates to a dedicated "Customer Account Detail" page.`,
    options: [
      'Drill-down traverses deeper down a predefined hierarchical level within the same visual (e.g., Year -> Quarter -> Month); Drill-through navigates the user to an entirely different, detailed report page focused on the selected entity',
      'Drill-down only works on dates; Drill-through only works on numbers',
      'Drill-through refreshes the SQL database; Drill-down cleans NULL values',
      'There is no distinction; they are identical synonyms'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Drill-down traverses deeper down a predefined hierarchical level within the same visual (e.g., Year -> Quarter -> Month); Drill-through navigates the user to an entirely different, detailed report page focused on the selected entity',
    explanationTitle: 'Drill-Down vs. Drill-Through Analytical Pathways',
    explanationText:
      'Drill-down allows users to explore hierarchical dimensions within the existing visual (e.g., Region -> State -> City). Drill-through carries the user’s active context to an entirely separate detail page (such as an order-level audit screen).',
    deepDive:
      'Both navigation patterns keep executive dashboard views clean while preserving access to granular diagnostic depth on demand.',
    tags: ['Drill-Down', 'Drill-Through', 'Navigation', 'Dashboards', 'PCED-30-02']
  }
];
