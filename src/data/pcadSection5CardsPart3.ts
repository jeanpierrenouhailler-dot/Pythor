import { Flashcard } from '../types';

export const pcadSection5CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.4: MULTI-PLOT GRIDS, HEATMAPS & INTERACTIVE DASHBOARDS (Cont.) [Cards 71-80]
  // =========================================================================
  {
    id: 'pcad-sec5-071',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Visualizations',
    topic: '3D Interactive Surface and Scatter Plots in Plotly',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When analyzing complex 3-variable optimization surfaces (e.g. Learning Rate vs Batch Size vs Loss), why is an interactive 3D plot in Plotly (`go.Surface` or `px.scatter_3d`) more actionable than a static 3D Matplotlib plot?',
    codeSnippet: `import plotly.graph_objects as go

fig = go.Figure(data=[go.Surface(z=loss_matrix, x=lr_grid, y=batch_grid)])
fig.update_layout(title='Loss Landscape Optimization Surface')
fig.show()`,
    options: [
      'Plotly provides fluid WebGL hardware-accelerated 3D rotation, pitch, yaw, and zoom in the browser, eliminating the static perspective occlusion where foreground peaks permanently hide background valleys',
      'Plotly runs on the GPU of the server only',
      'Matplotlib 3D plots cannot render colors',
      'Static 3D plots are illegal in financial auditing'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Interactive WebGL 3D allows users to rotate and inspect landscapes from any angle, avoiding perspective occlusion',
    explanationTitle: 'Overcoming 3D Occlusion with Interactive WebGL',
    explanationText:
      'Static 2D projections of 3D objects suffer from severe perspective distortion and occlusion: a single foreground ridge blocks everything behind it. Interactive rotation via Plotly WebGL allows analysts to inspect saddle points, local minima, and response surfaces from any vantage point.',
    deepDive:
      'Despite interactive capabilities, 2D contour maps (`go.Contour`) or faceted heatmaps are often easier to read quantitatively than 3D surfaces.',
    tags: ['Surface', 'scatter_3d', 'Plotly', 'Optimization', 'WebGL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-072',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Visualizations',
    topic: 'Choropleth Geographic Maps in Plotly',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How does `plotly.express.choropleth` map regional metrics (e.g. state-by-state GDP growth) onto geographic boundaries?',
    codeSnippet: `import plotly.express as px

fig = px.choropleth(
    df, 
    locations='state_code', 
    locationmode='USA-states', 
    scope='usa',
    color='gdp_growth', 
    color_continuous_scale='Viridis',
    hover_name='state_name'
)`,
    options: [
      'It binds DataFrame rows to standardized geographic polygon boundary definitions (via ISO codes, FIPS codes, or GeoJSON) and shades each territory according to the continuous color metric',
      'It draws random circles at GPS coordinates',
      'It plots satellite imagery scraped from Google Earth',
      'Choropleths can only plot point coordinates, never polygon regions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'px.choropleth shades geographical boundary polygons (states/countries) based on quantitative data metrics',
    explanationTitle: 'Geospatial Visualization with px.choropleth',
    explanationText:
      'A choropleth shades geographical polygons based on statistical variables. Plotly has built-in boundary geometries for `locationmode="USA-states"` and ISO-3 country codes, or accepts custom GeoJSON files for counties, postal codes, and city districts.',
    deepDive:
      'Geographic caveat: Choropleths over-emphasize large geographic areas (e.g. Montana or Alaska) regardless of population size. For population-weighted analysis, consider cartograms or bubble maps (`px.scatter_geo`).',
    tags: ['choropleth', 'Geospatial', 'Plotly', 'Maps', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-073',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Dashboard Architecture',
    topic: 'Embedding Plotly Charts into Web Applications and HTML',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you serialize an interactive Plotly figure so it can be embedded directly into a web dashboard or automated email report without requiring an active Python server?',
    codeSnippet: `# Option A: Standalone HTML document
fig.write_html('dashboard.html', include_plotlyjs='cdn')

# Option B: Raw HTML div snippet for web frameworks (Flask/Django/React):
html_div = fig.to_html(full_html=False, include_plotlyjs='cdn')`,
    options: [
      '`fig.write_html("dashboard.html")` exports a standalone HTML document; `fig.to_html(full_html=False)` generates an embeddable `<div>` snippet containing the chart specification and D3 data payload',
      'Export the chart as a `.txt` file',
      'Take a screenshot of the browser window using Selenium',
      'Plotly charts can only be rendered live inside a Jupyter notebook kernel'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'write_html() and to_html() export self-contained interactive JavaScript/HTML artifacts without requiring Python runtimes',
    explanationTitle: 'Plotly Serialization and Web Embedding',
    explanationText:
      'Plotly figures are declarative JSON dictionaries under the hood. Calling `fig.to_html(full_html=False)` serializes this dictionary into an HTML `<div>` paired with `Plotly.newPlot()`. When loaded in any browser, the Plotly.js library parses the data payload and builds the interactive SVG/WebGL chart.',
    deepDive:
      'Setting `include_plotlyjs="cdn"` keeps output file sizes tiny (~50 KB) by loading the core 3MB Plotly.js engine from cloud CDNs rather than inlining it.',
    tags: ['write_html', 'to_html', 'Dashboard Embedding', 'Plotly.js', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-074',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Visualizations',
    topic: 'Animations Across Time with Plotly (animation_frame)',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you add an interactive play/pause timeline slider to animate year-over-year demographic changes in Plotly Express?',
    codeSnippet: `fig = px.scatter(
    df, x='gdp', y='life_exp', 
    size='pop', color='continent', 
    hover_name='country',
    animation_frame='year', 
    animation_group='country',
    range_x=[100, 100000], range_y=[25, 90]
)`,
    options: [
      'Pass the time column to `animation_frame="year"` and the entity identifier to `animation_group="country"`, which automatically binds interactive Play/Pause controls and a scrubber slider',
      'Write a for-loop calling `plt.pause(0.1)`',
      'Render 100 PNG files and stitch them using ffmpeg',
      'Plotly does not support animation natively'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'animation_frame embeds client-side frame scrubbing and playback controls into the interactive chart',
    explanationTitle: 'Dynamic Temporal Animation with animation_frame',
    explanationText:
      'Specifying `animation_frame="year"` tells Plotly to split the dataset by year into separate keyframes, providing automated play, pause, and scrubber UI controls. `animation_group="country"` preserves entity continuity so markers morph smoothly across transitions.',
    deepDive:
      'Crucial: Always set fixed coordinate bounds (`range_x` and `range_y`) during animations; otherwise, the axes will jump erratically as points move frame to frame.',
    tags: ['animation_frame', 'animation_group', 'Plotly', 'Temporal Animation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-075',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Multi-Panel Heatmaps',
    topic: 'Faceted Heatmaps across Multiple Groups with FacetGrid',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'How do you create a series of small multiple heatmaps comparing correlation matrices across 4 different customer demographic cohorts?',
    codeSnippet: `def draw_corr_heatmap(data, color, **kws):
    corr = data[['tenure', 'spend', 'age', 'visits']].corr()
    sns.heatmap(corr, annot=True, cmap='vlag', vmin=-1, vmax=1, cbar=False)

g = sns.FacetGrid(df, col='cohort', col_wrap=2, height=3.5)
g.map_dataframe(draw_corr_heatmap)`,
    options: [
      'Define a custom helper function that computes the correlation matrix and calls `sns.heatmap()`, then map it across cohorts using `g.map_dataframe()`',
      'Heatmaps cannot be used with FacetGrid',
      'Call `sns.heatmap(df, col="cohort")` directly',
      'Merge all cohorts into a single average correlation number'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Custom drawing functions mapped via FacetGrid.map_dataframe allow small-multiple faceted heatmaps',
    explanationTitle: 'Faceted Matrix Visualizations with map_dataframe',
    explanationText:
      'Because `sns.heatmap()` is an axes-level function that expects a 2D pivoted matrix (rather than long-form tidy data), it cannot facet automatically. Wrapping correlation computation and heatmap plotting inside a custom helper function and passing it to `FacetGrid.map_dataframe()` resolves this limitation cleanly.',
    deepDive:
      'Setting `cbar=False` in the individual heatmaps and adding a single master colorbar on the figure avoids duplicate colorbars cluttering the grid.',
    tags: ['FacetGrid', 'map_dataframe', 'Heatmap', 'Small Multiples', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-076',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Visualizations',
    topic: 'Sunburst and Treemap Hierarchical Charts in Plotly',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When visualizing nested budget allocations (Department $\\rightarrow$ Team $\\rightarrow$ Project) where users need to click to drill down into subcategories, what chart types does Plotly provide?',
    codeSnippet: `import plotly.express as px

# Treemap: Nested rectangular tiles
fig_tree = px.treemap(df, path=['department', 'team', 'project'], values='budget')

# Sunburst: Concentric multi-level rings
fig_sun = px.sunburst(df, path=['department', 'team', 'project'], values='budget')`,
    options: [
      '`px.treemap` (nested rectangular space-filling tiles) and `px.sunburst` (concentric radial rings), both supporting instant click-to-zoom interactive hierarchical drill-down',
      'Stacked 2D line charts',
      'Radar / Spider charts',
      'Hierarchies can only be represented via text bullet lists'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Treemaps and Sunburst charts provide interactive drill-down navigation through nested categorical hierarchies',
    explanationTitle: 'Hierarchical Exploration: Treemap and Sunburst',
    explanationText:
      'Nested categorical data (e.g. organizational hierarchies, expense categories, taxonomic trees) are difficult to navigate in flat tables. Treemaps and Sunbursts map the `path=[...]` argument into nested geometric partitions where clicking an outer ring or box zooms into that branch.',
    deepDive:
      'Treemaps optimize rectangular screen space efficiently, while Sunburst charts provide clear radial symmetry showing how sub-slices relate to the whole.',
    tags: ['treemap', 'sunburst', 'Hierarchical Data', 'Drill-Down', 'Plotly', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-077',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Customization',
    topic: 'Custom Hover Templates in Plotly with hovertemplate',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you format a clean, professional hover tooltip in Plotly that displays `"Revenue: $1,250,000"` and `"Conversion: 4.2%"` while hiding the secondary trace box?',
    codeSnippet: `fig.update_traces(
    hovertemplate=(
        '<b>%{customdata[0]}</b><br>' +
        'Revenue: $%{y:,.0f}<br>' +
        'Conversion: %{x:.1%}<br>' +
        '<extra></extra>' # Hides trace name secondary box!
    )
)`,
    options: [
      'Define a string template with `%{x}` and `%{y}` format specifiers (e.g. `%{y:,.0f}`), using `<extra></extra>` to suppress the default secondary trace box',
      'Plotly tooltips cannot be customized; they strictly show raw variable names',
      'Set `hover_format="currency_and_percent"`',
      'Convert all coordinates into strings before plotting'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'hovertemplate with d3 format specifiers and <extra></extra> crafts clean, branded interactive tooltips',
    explanationTitle: 'Plotly hovertemplate Architecture',
    explanationText:
      '`hovertemplate` uses D3 format strings: `$,.0f` formats numbers with commas and no decimals; `.1%` formats decimals as percentages. The `<extra></extra>` tag strips away the default side-box that displays the internal trace name, producing a clean, executive-ready tooltip.',
    deepDive:
      'Pass supplementary columns that are not on the x or y axes via `customdata=df[["name", "id"]]` and access them via `%{customdata[0]}`.',
    tags: ['hovertemplate', 'Plotly', 'Tooltips', 'customdata', 'Formatting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-078',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Heatmaps',
    topic: 'Annotating Heatmap Cells with Custom Value Text Formatting',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'In `sns.heatmap()`, how do you format cell annotations as integer percentages (e.g. `"42%"`) instead of scientific floats like `4.23e-01`?',
    codeSnippet: `sns.heatmap(
    pct_matrix, 
    annot=True, 
    fmt='.0%', 
    cmap='Blues'
)`,
    options: [
      'Pass `annot=True` and specify string format code `fmt=".0%"`',
      'Pass `fmt="integer_percent"`',
      'Format the DataFrame strings in advance and leave `fmt` empty',
      'Seaborn only supports scientific notation in annotations'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'annot=True paired with fmt=".0%" formats decimal values into clean whole percentage strings',
    explanationTitle: 'Heatmap Annotation String Formatting with fmt',
    explanationText:
      'The `fmt` argument controls Python string formatting for numbers displayed inside heatmap cells. Standard options: `fmt=".0%"` (e.g. 85%), `fmt=".2f"` (two-decimal floats), `fmt="d"` (integers). Formatting removes decimal clutter and improves visual scanning.',
    deepDive:
      'If you have custom text strings (e.g. `"Low"`, `"Med"`), pass the text DataFrame to `annot=text_df` with `fmt=""`.',
    tags: ['heatmap', 'annot', 'fmt', 'String Formatting', 'Seaborn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-079',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Interactive Visualizations',
    topic: 'Exporting High-Resolution Static Images from Plotly with Kaleido',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How do you programmatically export a static vector PDF or high-resolution PNG from an interactive Plotly figure inside an automated Python reporting pipeline?',
    codeSnippet: `import plotly.express as px

fig = px.bar(df, x='category', y='sales')
# Export high-res static image for PDF executive reports:
fig.write_image('chart.pdf', engine='kaleido', width=1200, height=800, scale=2)`,
    options: [
      'Use `fig.write_image("chart.pdf", engine="kaleido")` (or `"chart.png"`), specifying width, height, and scale factor',
      'Call `plt.savefig()` after showing the Plotly chart',
      'Plotly charts cannot be exported to static images',
      'Take a manual screenshot with keyboard shortcuts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fig.write_image("...", engine="kaleido") exports static raster (PNG) or vector (PDF/SVG) images headless',
    explanationTitle: 'Headless Static Image Export with Kaleido',
    explanationText:
      '`kaleido` is a lightweight headless Chromium wrapper designed for Plotly. It takes the JSON plot structure and renders it directly to PNG, JPEG, WebP, SVG, or PDF formats without needing an external browser or display server.',
    deepDive:
      'The `scale=2` parameter doubles raster rendering resolution, transforming a standard $1200 \\times 800$ figure into a sharp $2400 \\times 1600$ print-ready asset.',
    tags: ['write_image', 'kaleido', 'Plotly', 'PDF Export', 'Image Export', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-080',
    section: 'Section 5',
    chapter: '5.4',
    track: 'pcad',
    cardType: 'Multi-Panel Dashboards',
    topic: 'Subplot Mosaic vs GridSpec for Intuitive Layout Design',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'How does Matplotlib’s `plt.subplot_mosaic()` simplify building non-uniform dashboard layouts compared to traditional index slicing?',
    codeSnippet: `mosaic_layout = """
    AAAAB
    CCCCB
"""
fig, ax_dict = plt.subplot_mosaic(mosaic_layout, figsize=(12, 6))

ax_dict['A'].plot(time_series)
ax_dict['B'].barh(categories, values)
ax_dict['C'].scatter(x, y)`,
    options: [
      'It allows visual ASCII string-based layout declarations where repeated characters define multi-row/multi-column spans, returning a labeled dictionary of `Axes` for intuitive assignment',
      'It automatically selects the optimal color scheme for each plot',
      'It restricts dashboards to square shapes only',
      'It converts Matplotlib charts into mosaic tile art'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'subplot_mosaic parses ASCII string templates into an intuitive dictionary of named Axes',
    explanationTitle: 'Visual Layout Composition with subplot_mosaic',
    explanationText:
      'Introduced in Matplotlib 3.3, `subplot_mosaic()` replaces confusing `GridSpec` coordinate slices with intuitive visual string layouts. The layout text visually mirrors the dashboard layout, and subplots are retrieved via meaningful dictionary keys (`ax_dict["A"]`).',
    deepDive:
      'Use periods `.` inside the mosaic string to define empty negative whitespace gaps between subplots: `mosaic = [["left", ".", "right"]]`.',
    tags: ['subplot_mosaic', 'Dashboard Layout', 'Axes Layout', 'Matplotlib', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 5.5: DATA STORYTELLING, COGNITIVE LOAD & ETHICAL VISUALIZATION [Cards 81-100]
  // =========================================================================
  {
    id: 'pcad-sec5-081',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Data-Ink Ratio',
    topic: 'Edward Tufte’s Data-Ink Ratio and Chart Junk Elimination',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What is Edward Tufte’s "Data-Ink Ratio" principle, and how does an analyst apply it to clean an overloaded business chart?',
    codeSnippet: `# Data-Ink Ratio = (Data-Ink) / (Total Ink Used to Print the Graphic)
# Goal: Maximize the share of ink devoted to displaying actual data!`,
    options: [
      'Maximize the data-ink ratio by removing non-data ink (heavy gridlines, redundant 3D bevels, decorative borders, dark backgrounds) and eliminating redundant data-ink',
      'Maximize total ink by adding decorative clip-art and vibrant gradients to every white space',
      'The data-ink ratio measures the cost of printer toner in corporate accounting',
      'Data-ink ratio requires printing every chart on paper before presenting'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Data-ink ratio maximizes information-bearing pixels while eliminating decorative "chart junk"',
    explanationTitle: 'Tufte’s Data-Ink Ratio',
    explanationText:
      'Tufte defines Data-Ink as the non-erasable core of a graphic: if you erased it, the chart would lose information. Maximizing the ratio means stripping away "chart junk": 3D bar effects, heavy black border boxes, harsh gridlines, and gratuitous gradient backgrounds.',
    deepDive:
      'A high data-ink ratio does not mean a chart is barren; it means every pixel serves an analytical purpose.',
    tags: ['Data-Ink Ratio', 'Tufte', 'Chart Junk', 'Visual Design', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-082',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Preattentive Processing',
    topic: 'Preattentive Visual Attributes for Instant Cognitive Capture',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What are "preattentive visual attributes", and why are they fundamental to effective data storytelling in executive dashboards?',
    codeSnippet: `# Color hue, size, spatial position, and orientation are processed 
# in the human visual cortex in under 250 milliseconds, BEFORE conscious thought!`,
    options: [
      'Visual features (such as color hue, contrast, size, and spatial orientation) that the human brain processes automatically and in parallel in $< 250\\text{ms}$ before conscious cognitive processing begins',
      'Statistical calculations computed by Python before loading the dataset',
      'Psychological tests administered to dashboard users',
      'Font sizes smaller than 8 points that go unnoticed'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Preattentive attributes (hue, size, position) guide viewer attention instantly (<250ms) to focal insights',
    explanationTitle: 'Preattentive Visual Perception',
    explanationText:
      'Before a stakeholder consciously reads a single number, their visual cortex has already grouped colors, noticed outliers in size, and spotted spatial separations. By intentionally using ONE preattentive attribute (e.g. a single coral red bar among nine gray bars), you guide the viewer’s eye directly to the takeaway.',
    deepDive:
      'Rule of thumb: Never combine more than two preattentive attributes on the same marker (e.g. varying both color AND shape AND size simultaneously causes cognitive chaos).',
    tags: ['Preattentive Attributes', 'Cognitive Load', 'Visual Perception', 'Data Storytelling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-083',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Ethical Charting',
    topic: 'Truncated Y-Axes in Bar Charts vs Line Charts',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why is truncating the y-axis (starting at $y=90$ instead of $y=0$) considered ethically misleading in a bar chart, but acceptable in a line chart?',
    codeSnippet: `# Misleading Bar Chart:
# Group A = 95, Group B = 98. 
# Starting axis at 90 makes Group B look 2.6x taller than Group A!
# ax.set_ylim(90, 100) -> VISUAL LIE FOR BARS!`,
    options: [
      'In bar charts, the numerical value is encoded by the physical length/area of the bar from the baseline: truncating the axis distorts bar ratios, making a 3% difference look like a 300% surge; line charts encode values via point positions and slopes to show change, not absolute quantity',
      'Line charts are not subject to ethical scrutiny in analytics',
      'Truncating bar charts is illegal under federal accounting guidelines',
      'Line charts automatically reset to zero in Matplotlib'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Bar charts encode value via length (requiring y=0 baseline); line charts encode position and trajectory',
    explanationTitle: 'Ethical Axis Baselines: Bar vs Line Charts',
    explanationText:
      'Human perception judges bar charts by length and surface area. If a bar chart starts at 90, a value of 98 has a bar 8 units tall, while a value of 92 has a bar 2 units tall: the eye perceives a 4x ($400\\%$) difference when the real difference is $\\approx 6\\%$. In line charts, the focus is on rate of change and trend slopes, so zooming in on the active range is acceptable if clearly labeled.',
    deepDive:
      'If you must show fine differences between large numbers using bars, consider using a dot plot or lollipop chart instead of truncating bar baselines.',
    tags: ['Ethical Visualization', 'Truncated Axis', 'Bar Chart Baseline', 'Data Integrity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-084',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Cognitive Ergonomics',
    topic: 'The Lie Factor (Tufte) and Area Encoding Proportionality',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'A graphic designer scales both the width AND height of a circle or dollar bill icon by 2x to represent a 100% doubling in revenue. What is the "Lie Factor" of this visual representation?',
    codeSnippet: `# Data effect = (200 - 100) / 100 = 100% (2x)
# Graphical visual area effect = 2 * 2 = 4x (300% increase!)
# Lie Factor = (Size of graphic effect) / (Size of data effect) = 4 / 2 = 2.0!`,
    options: [
      'Lie Factor = 2.0: scaling both 1D dimensions quadruples the perceived 2D surface area ($2^2 = 4$), visually exaggerating the true data effect by $200\\%$',
      'Lie Factor = 1.0: the graphic is completely truthful',
      'Lie Factor = 0.5: the graphic understates the true value',
      'Lie Factor can only be computed on pie charts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Lie Factor = (Graphic Effect %) / (Data Effect %); area scaling squares 1D changes, violating proportionality',
    explanationTitle: 'Tufte’s Lie Factor and 2D Area Distortion',
    explanationText:
      'Tufte defined: $\\text{Lie Factor} = \\frac{\\text{size of effect shown in graphic}}{\\text{size of effect in data}}$. A Lie Factor equal to 1.0 represents visual honesty. When 1D quantities are mapped onto 2D areas (or 3D volumes) without square-root scaling, the visual impact expands quadratically, distorting audience perception.',
    deepDive:
      'When using bubble scatter plots where marker size represents a variable, always map data to circle AREA, not circle radius: `area = np.pi * (radius ** 2) \\propto data`.',
    tags: ['Lie Factor', 'Tufte', 'Area Distortion', 'Ethical Visualization', 'Bubble Chart', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-085',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Chart Critique',
    topic: 'The Flaws of Pie Charts and When to Use Them',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'Why do data visualization scientists almost universally advise against pie charts (especially with more than 3 slices), and what chart is recommended instead?',
    codeSnippet: `# Pie chart flaws: 
# Human visual cortex cannot accurately compare 2D angles or circular slice areas!
# Alternative: Sorted horizontal bar chart with common baseline!`,
    options: [
      'Humans judge linear distance along a common baseline with far greater accuracy than 2D circular angles or arc lengths; a sorted horizontal bar chart enables precise, instant category comparison',
      'Pie charts cannot be drawn using Python',
      'Pie charts can only display negative numbers',
      'Pie charts require 3D rendering engines to calculate angles'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Human perception judges aligned linear lengths far more accurately than angles or wedge areas; use sorted bars',
    explanationTitle: 'Angle Perception Limitations and Pie Charts',
    explanationText:
      'Cleveland and McGill (1984) established the perceptual hierarchy: position along a common scale is decoded most accurately, followed by length, angle, and area. In a pie chart, comparing slices of 21%, 23%, and 25% is nearly impossible. In a sorted bar chart, subtle differences are obvious.',
    deepDive:
      'If you must show part-to-whole composition for just 2 slices (e.g. 70% Yes vs 30% No), a donut chart or a 100% stacked bar with clear direct labeling is acceptable.',
    tags: ['Pie Chart', 'Perceptual Hierarchy', 'Cleveland McGill', 'Bar Chart Alternative', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-086',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Executive Storytelling',
    topic: 'Action Titles vs Descriptive Titles for Executive Decision-Making',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How should chart titles be written when preparing an analytical slide deck for executive leadership?',
    codeSnippet: `# Descriptive Title (Passive, low value):
# ax.set_title('Q3 Revenue Across European Regions')

# Action / Takeaway Title (Active, decision-focused):
ax.set_title('European Revenue Dropped 14% in Q3 Driven by Currency Devaluation in the UK', 
             fontweight='bold', fontsize=12, loc='left')`,
    options: [
      'Write "Action Titles" (declarative headlines stating the core analytical finding or takeaway), using the subtitle for methodology and units, rather than generic descriptive labels',
      'Write titles in all uppercase letters without punctuation',
      'Omit titles completely to encourage audience discussion',
      'Titles must only state the mathematical formula of the regression'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Action titles declare the analytical insight upfront, enabling executives to grasp the conclusion in 3 seconds',
    explanationTitle: 'Action Titles for Executive Reporting',
    explanationText:
      'Executives scan dashboards and decks quickly. A title like "Marketing ROI vs Spend" forces the executive to decode the chart to understand why it matters. An action title like "Digital Ads Delivered 3.2x ROI While Print Broke Even" communicates the takeaway immediately, with the chart acting as supporting proof.',
    deepDive:
      'Position action titles at `loc="left"` (top-left aligned), matching Western eye-tracking patterns (F-pattern reading).',
    tags: ['Action Titles', 'Executive Communication', 'Data Storytelling', 'Typography', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-087',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Accessibility',
    topic: 'Designing for Color-Vision Deficiency (Colorblind Safety)',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'Approximately 8% of men and 0.5% of women have Color-Vision Deficiency (primarily red-green blindness / deuteranopia). What design rules guarantee chart accessibility?',
    codeSnippet: `# Red-Green comparison (Inaccessible to 8% of men!):
# colors = ['red', 'green']

# Colorblind-Safe Alternatives:
# Option 1: Blue vs Orange (Okabe-Ito palette)
# Option 2: Red vs Cyan
# Option 3: Double-encode using both color AND line style / marker shape!`,
    options: [
      'Avoid isolated red vs green contrasts (use Blue vs Orange or Colorblind-safe palettes like Okabe-Ito), and "double-encode" information using both color AND line styles, marker shapes, or direct text labels',
      'Only use grayscale charts in corporate settings',
      'Increase brightness to 100% on all monitors',
      'Colorblind safety is only relevant in web design, not Python charting'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use blue-orange or Okabe-Ito palettes and double-encode categories using both color and marker glyphs',
    explanationTitle: 'Colorblind Accessibility and Double-Encoding',
    explanationText:
      'To a person with deuteranopia or protanopia, standard saturated red and green look like indistinguishable muddy brown-yellows. Using blue and orange provides high perceptual contrast across all forms of color blindness. Double-encoding (e.g. solid line + circle vs dashed line + square) ensures charts remain interpretable even in black-and-white printouts.',
    deepDive:
      'Matplotlib includes the `"tableau-colorblind10"` style, and Seaborn provides `sns.color_palette("colorblind")`.',
    tags: ['Colorblind', 'Accessibility', 'Double-Encoding', 'Okabe-Ito', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-088',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Cognitive Load',
    topic: 'Cognitive Load Theory: Intrinsic vs Extraneous vs Germane Load',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'In visual analytics design, what constitutes "Extraneous Cognitive Load", and what is the analyst’s objective regarding it?',
    codeSnippet: `# Intrinsic Load: The necessary difficulty of the data concept itself.
# Extraneous Load: Mental effort wasted deciphering bad design (tiny fonts, rotated labels, confusing legends).
# Germane Load: Mental processing dedicated to extracting business insights!`,
    options: [
      'Extraneous cognitive load is mental effort wasted by the viewer struggling to decode poor design choices (e.g. tilted text, tiny legends, rainbow colors, cluttered grids); the analyst’s goal is to minimize extraneous load to zero',
      'Extraneous load is the time it takes Python to process the dataset',
      'Extraneous load is the battery consumption of the presenter’s laptop',
      'The analyst should maximize extraneous load to demonstrate technical complexity'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Eliminating extraneous cognitive load frees viewer working memory to focus on business decisions',
    explanationTitle: 'Cognitive Load Theory in Visualization',
    explanationText:
      'Human working memory can hold only 4-7 chunks of information at once. Every second a stakeholder spends figuring out what an acronym means, matching colors to an external legend, or craning their neck to read 90-degree rotated labels consumes cognitive bandwidth that should have been spent evaluating the strategic insight.',
    deepDive:
      'Removing extraneous clutter shifts viewer focus to "Germane Load"—the productive cognitive processing that produces strategic "aha!" moments.',
    tags: ['Cognitive Load', 'Extraneous Load', 'UX Design', 'Dashboard Design', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-089',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Sorting Categorical Visualizations for Immediate Comprehension',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'Why should horizontal and vertical bar charts comparing categories (e.g. Sales by Product) almost always be sorted by value rather than left in arbitrary or alphabetical order?',
    codeSnippet: `# Unsorted (Cognitive effort required to identify ranks):
# df.plot(kind='bar', x='product', y='sales')

# Sorted (Immediate ranking clarity):
df.sort_values('sales', ascending=True).plot(kind='barh', x='product', y='sales')`,
    options: [
      'Sorting by value transforms the chart into an immediate visual ranking, enabling viewers to identify top and bottom performers, evaluate distributions, and compare magnitudes without scanning back and forth',
      'Sorting by value is required by the Matplotlib compiler',
      'Alphabetical order is preferred because it mirrors dictionary lookups',
      'Sorting by value converts bar charts into Pareto diagrams automatically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sorting categories by magnitude provides immediate ranking perception, slashing eye scanning time',
    explanationTitle: 'The Power of Value-Ordered Categorical Data',
    explanationText:
      'When bars are displayed in arbitrary order, the viewer must inspect every individual bar to determine the top performer, second performer, and lowest performer. Sorting categories by value allows the viewer to absorb the hierarchy in a single glance.',
    deepDive:
      'The only exception to value sorting is when the categories possess an inherent ordinal meaning (e.g. Age groups [18-24, 25-34, 35-44...] or Months [Jan, Feb, Mar...]), which must preserve chronological/ordinal sequence.',
    tags: ['Sorting', 'Bar Chart', 'Cognitive Ergonomics', 'Visual Hierarchy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-090',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Dashboard Architecture',
    topic: 'The 5-Second Rule and Visual Hierarchy in Executive Dashboards',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'What is the "5-Second Rule" in executive dashboard design, and how does layout architecture enforce it?',
    codeSnippet: `# Golden Triangle / F-Pattern:
# Top Left: Primary KPI Hero Stat & Executive Action Summary
# Top Right: Secondary Summary Scorecards
# Center/Bottom: Supporting diagnostic breakdowns and time-series trends`,
    options: [
      'A stakeholder should be able to look at the dashboard and understand the primary status, core KPI health, and critical alert within 5 seconds; enforced by placing high-level summary cards at the top-left (F-pattern reading)',
      'Dashboards must refresh data from the database every 5 seconds',
      'Users must click on at least 5 buttons within 5 seconds or the session expires',
      'Charts must be rendered using fewer than 5 lines of Python code'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '5-Second Rule: Core KPI health and direction must be comprehensible within 5 seconds of viewing',
    explanationTitle: 'The 5-Second Rule and Visual Layout Hierarchies',
    explanationText:
      'If an executive cannot ascertain whether operations are healthy or in crisis within 5 seconds, the dashboard has failed. Successful architectures place headline summary metric cards (e.g. Revenue: $4.2M, +8% YoY) at the top-left, relegating granular tables and exploratory tools to the lower folds.',
    deepDive:
      'Avoid "dashboard vanity": packing 30 charts onto a single screen induces decision paralysis. A dashboard should answer specific business questions, not dump raw database tables.',
    tags: ['5-Second Rule', 'Executive Dashboard', 'Visual Hierarchy', 'KPI Scorecard', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-091',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Visual Storytelling',
    topic: 'Highlighting and Muting (The Accent Color Technique)',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How do you direct an audience’s visual focus to a single crucial data point (e.g. our company) among 20 competitor bars in a bar chart?',
    codeSnippet: `colors = ['#2b5c8f' if company == 'Our Company' else '#d3d3d3' for company in df['company']]
ax.bar(df['company'], df['market_share'], color=colors)`,
    options: [
      'Color our company’s bar with a single saturated accent color (e.g. corporate navy or bold coral), while setting all 19 competitor bars to an identical muted neutral gray (`#d3d3d3`)',
      'Make our company’s bar 3 times wider than all other bars',
      'Assign a different bright rainbow color to every single competitor',
      'Blink our company’s bar using JavaScript animation'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The accent color technique uses a single saturated hue against neutral gray to create immediate preattentive focus',
    explanationTitle: 'The Accent Color Technique',
    explanationText:
      'Rainbow palettes force viewers to search through a visual kaleidoscope. By setting all baseline or competitor bars to a uniform light gray (`#d3d3d3`) and coloring only the target of interest in a prominent accent hue, the focal entity commands preattentive attention instantly.',
    deepDive:
      'This technique aligns with storytelling principles: establish context (the gray cohort) and highlight the protagonist (the colored accent).',
    tags: ['Accent Color', 'Visual Focus', 'Preattentive Attributes', 'Data Storytelling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-092',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Chart Selection',
    topic: 'Slopegraphs for Two-Period Before-and-After Comparisons',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When comparing metrics across 12 product categories between two time periods (e.g. 2024 vs 2026), why is a "Slopegraph" often superior to a clustered paired bar chart?',
    codeSnippet: `# Two vertical axes (2024 and 2026) connected by line segments:
for _, row in df.iterrows():
    ax.plot([2024, 2026], [row['score_2024'], row['score_2026']], 
            color='navy' if row['score_2026'] > row['score_2024'] else 'crimson',
            marker='o')`,
    options: [
      'Slopegraphs display rate and direction of change through line slopes, show absolute values at both endpoints, and highlight rank shifts and outlier trajectories far more clearly than 24 clustered bars',
      'Slopegraphs are only used for mountain elevation data',
      'Slopegraphs automatically calculate p-values',
      'Paired bar charts cannot show two time periods'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Slopegraphs clearly convey rate of change, rank inversions, and trajectory differences between two periods',
    explanationTitle: 'Slopegraphs for Before-and-After Comparisons',
    explanationText:
      'Clustered bar charts force viewers to compare heights across alternating pairs of bars, making it difficult to evaluate which category grew the fastest. A slopegraph connects point A to point B: upward slopes indicate growth, downward slopes indicate decline, and steepness conveys velocity.',
    deepDive:
      'Directly label the left and right endpoints with category names and numbers, completely bypassing external legends.',
    tags: ['Slopegraph', 'Before-After', 'Rate of Change', 'Data Storytelling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-093',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Chart Selection',
    topic: 'Bullet Graphs as Modern Replacements for Radial Gauges',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why did Stephen Few design the "Bullet Graph" to replace traditional circular "speedometer/odometer" dashboard gauges?',
    codeSnippet: `# Bullet Graph components:
# 1. Qualitative threshold bands (e.g. Poor, Satisfactory, Good in grayscale)
# 2. Performance measure bar (actual current value)
# 3. Target comparative marker line (benchmark goal)`,
    options: [
      'Radial speedometer gauges waste massive screen space, display only a single number without historical context or qualitative performance bands, and are hard to read; bullet graphs pack qualitative ranges, actuals, and targets into a compact linear strip',
      'Speedometer gauges cannot be programmed in Python',
      'Bullet graphs can only be printed in black and white',
      'Radial gauges cannot display numbers above 100'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Bullet graphs pack actual progress, target markers, and qualitative performance thresholds into a compact linear strip',
    explanationTitle: 'Stephen Few’s Bullet Graph vs Radial Gauges',
    explanationText:
      'Speedometer gauges are a prime example of decorative dashboard junk: they take up a $400 \\times 400$ pixel square to show a single needle. A horizontal bullet graph displays actual performance, target threshold lines, and qualitative background performance zones (poor, satisfactory, good) in a sleek $400 \\times 40$ strip.',
    deepDive:
      'Bullet graphs can be stacked horizontally or vertically, allowing 10 executive KPIs to be compared in the space of a single circular gauge.',
    tags: ['Bullet Graph', 'Stephen Few', 'Dashboard Gauges', 'KPI Scorecard', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-094',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Ethical Charting',
    topic: 'Visualizing Dual Correlation Without Implying Causation',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'An analyst charts two unrelated metrics on a dual y-axis (e.g. US cheese consumption vs Deaths by tangled bedsheets), and the two lines overlap in a visual correlation ($r = 0.95$). What ethical responsibility does the analyst bear?',
    codeSnippet: `# Spurious correlation: r = 0.95 between unrelated series
# Manipulating dual-axis y1 and y2 limits can force ANY two series to visually match!`,
    options: [
      'Acknowledge that dual y-axes allow arbitrary visual alignment of slopes through axis scaling, creating false illusions of causality (spurious correlation); clearly state independence and avoid manipulative scale matching',
      'Declare to executives that cheese consumption causes bedsheet accidents',
      'Remove both axes and present the chart without labels',
      'File a patent for the discovery'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Dual-axis scaling can visually manufacture artificial correlations between unrelated trends (spurious correlations)',
    explanationTitle: 'Spurious Visual Correlations on Dual Axes',
    explanationText:
      'By manipulating independent minimum and maximum limits on $y_1$ and $y_2$, an analyst can force virtually any two upward-trending time series to cross and match visually. Ethical analysts avoid manipulative scale tailoring and caution audiences against conflating visual alignment with statistical causation.',
    deepDive:
      'Tyler Vigen’s famous "Spurious Correlations" project documented hundreds of hilarious, mathematically real, yet causally absurd correlations produced by this exact visual artifact.',
    tags: ['Spurious Correlation', 'Dual Axis', 'Ethical Visualization', 'Causation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-095',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Chart Selection',
    topic: 'Waterfall Charts for Explaining Net Period-over-Period Variance',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When explaining to a CFO how Q1 Net Income ($+\\$10M$) transitioned to Q2 Net Income ($+\\$14M$) through positive revenues, negative marketing spend, positive price increases, and negative tax hits, what chart format is standard?',
    codeSnippet: `# Floating bar segments showing intermediate positive increments and negative decrements, 
# anchored by solid base pillars at start and end:
# Net Income Q1 -> (+Revenue) -> (-Opex) -> (+Price) -> (-Tax) -> Net Income Q2`,
    options: [
      'A Waterfall (Bridge) Chart: it visualizes how an initial value is affected by a series of intermediate positive additions and negative subtractions to arrive at the final total',
      'A Scatter plot matrix',
      'A 3D Pie chart with exploding slices',
      'A Fourier transform spectral graph'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Waterfall (bridge) charts break down net period variance into constituent positive and negative components',
    explanationTitle: 'Variance Attribution with Waterfall Charts',
    explanationText:
      'Corporate financial analysis relies heavily on variance walk-downs. A standard bar chart shows only the start ($10M) and end ($14M) points. A waterfall chart shows floating green (positive) and red (negative) bricks that explain the journey, making margin leaks immediately visible.',
    deepDive:
      'Plotly Express supports waterfall charts natively via `plotly.graph_objects.Waterfall(measure=["relative", "relative", ..., "total"])`.',
    tags: ['Waterfall Chart', 'Financial Analytics', 'Variance Walk', 'Plotly', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-096',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Data Storytelling',
    topic: 'Narrative Arc in Analytical Presentations (Context, Conflict, Resolution)',
    category: 'Data Communication and Visualization',
    difficulty: 'beginner',
    question: 'How does an analyst structure a compelling data presentation using the classical narrative arc (Context $\\rightarrow$ Conflict $\\rightarrow$ Resolution)?',
    codeSnippet: `# 1. Context: Establish baseline reality and historical steady-state.
# 2. Conflict: Reveal the emerging anomaly, crisis, or missed revenue opportunity in data.
# 3. Resolution: Deliver data-backed strategic recommendations and projected impacts.`,
    options: [
      'Start with baseline context (current operational benchmarks), introduce the analytical conflict (data showing customer churn acceleration or pipeline bottleneck), and propose the resolution (actionable, data-backed operational intervention)',
      'Dump 50 charts in raw database order and let executives draw their own conclusions',
      'Start with the Python code, explain the machine learning math, and skip the business problem',
      'Show only positive metrics and hide all negative trends'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Structure presentations: Context (baseline) -> Conflict (data discovery/tension) -> Resolution (action plan)',
    explanationTitle: 'The Analytical Narrative Arc',
    explanationText:
      'Data without narrative is forgotten; narrative grounded in data drives action. Leading with context grounds the audience. Introducing the conflict creates emotional engagement and urgency. Ending with a concrete data-backed recommendation gives leadership the exact decision levers needed to resolve the crisis.',
    deepDive:
      'Cole Nussbaumer Knaflic’s "Storytelling with Data" stresses: never make your audience work to find the point—be the guide who brings the insight to light.',
    tags: ['Data Storytelling', 'Narrative Arc', 'Executive Presentation', 'Business Analytics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-097',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Ethical Charting',
    topic: 'Standardizing Population Rates vs Raw Totals in Geospatial Maps',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'Why is plotting raw case counts (e.g. Total COVID-19 cases or Total app downloads) on a geographic state map fundamentally misleading, and what statistical correction is required?',
    codeSnippet: `# Misleading: Raw Counts (Simply reflects population density! California & Texas always look worst)
# Ethical: Per-Capita Normalization:
df['cases_per_100k'] = (df['total_cases'] / df['population']) * 100_000`,
    options: [
      'Raw counts merely reflect underlying population density (heavily populated states like California and Texas will always show high totals regardless of severity); analysts must normalize by population (e.g. cases per 100,000 residents) for valid geographic comparison',
      'Raw counts take longer to calculate',
      'Geospatial maps can only accept floating point numbers between 0 and 1',
      'State boundaries change based on per-capita metrics'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Raw geographic counts mirror population density maps; normalize by population (per 100k) for true spatial incidence',
    explanationTitle: 'Per-Capita Normalization in Spatial Analysis',
    explanationText:
      'Any map displaying raw event counts without per-capita normalization is effectively a map of where people live (xkcd #1136: "Heatmap of people who buy our product is just a population density map"). Normalizing by population (`per 100,000 people`) reveals the true per-capita rate of occurrence.',
    deepDive:
      'Similarly, when comparing store locations, normalize sales by floor square footage (`sales per sq ft`) rather than raw store revenue.',
    tags: ['Per-Capita', 'Geospatial', 'Ethical Visualization', 'Normalization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-098',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Chart Customization',
    topic: 'Sparklines for Inline Micro-Trends in Tables and Dashboards',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'What is a "Sparkline" (invented by Edward Tufte), and how is it used in high-density data tables?',
    codeSnippet: `# High-Density Table Row:
# Metric: Revenue | Current: $1.2M | 12-Month Sparkline: [__/\_/\--] | YoY: +14%`,
    options: [
      'A word-sized, intense, simple graphic (usually a miniature line or bar trend) embedded directly inline within text or data tables, displaying historical trend and variation without axes or coordinates',
      'An animated firework effect triggered when a goal is reached',
      'A line chart plotted on logarithmic paper',
      'A chart type exclusive to Apache Spark big data clusters'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sparklines are compact, axis-free inline trendlines embedded alongside numbers in dense financial tables',
    explanationTitle: 'Tufte’s Sparklines for High-Density Information',
    explanationText:
      'Tables are superb for looking up exact individual numbers but fail to convey trend context. Standard charts convey trends but take up massive screen space. Sparklines embed miniature trendlines directly into table cells alongside current figures, giving readers current status and historical trajectory simultaneously.',
    deepDive:
      'To build a sparkline in Matplotlib: remove all spines, ticks, and labels, and keep aspect ratio wide and short (`figsize=(2, 0.4)`).',
    tags: ['Sparklines', 'Tufte', 'Information Density', 'Tables', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-099',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Data Communication',
    topic: 'Communicating Model Confidence to Non-Technical Audiences',
    category: 'Data Communication and Visualization',
    difficulty: 'intermediate',
    question: 'When presenting a machine learning churn prediction model to executive stakeholders, which framing best communicates risk without drowning the audience in technical jargon?',
    codeSnippet: `# Technical Jargon (Fails to resonate):
# "The model achieved an ROC-AUC of 0.84 with log-loss of 0.28."

# Actionable Business Framing (Resonates immediately):
# "By proactively contacting the top 10% highest-risk accounts identified by the model, 
#  we can prevent an estimated $2.4M in annual subscription cancellations."`,
    options: [
      'Translate statistical scores into expected business impact and dollar outcomes (e.g. expected churn prevented, operational cost savings, False Alarm trade-offs) with explicit uncertainty ranges',
      'Show the raw Python confusion matrix matrix without explanation',
      'Present mathematical proofs of gradient descent convergence',
      'Guarantee 100% certainty to instill executive confidence'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Translate technical model metrics (AUC/F1) into monetary outcomes and actionable operational trade-offs',
    explanationTitle: 'Translating Statistical Metrics into Business Value',
    explanationText:
      'Business executives rarely care about hyperparameters, cross-entropy, or ROC-AUC scores. They care about revenue, risk, customer retention, and costs. Translating predictive scores into monetary outcomes (e.g. "We catch 80% of fraud while bothering less than 1% of good customers") drives decisions.',
    deepDive:
      'Always present risk honestly: never promise perfection. Show best-case, expected, and worst-case scenarios based on prediction confidence intervals.',
    tags: ['Executive Communication', 'Business Value', 'Model Translation', 'Data Storytelling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec5-100',
    section: 'Section 5',
    chapter: '5.5',
    track: 'pcad',
    cardType: 'Ethics & Governance',
    topic: 'Algorithmic Fairness and Disparate Impact Visualization',
    category: 'Data Communication and Visualization',
    difficulty: 'advanced',
    question: 'How should an analyst visualize potential demographic bias and model fairness across protected subgroups (e.g. loan approval rates across racial groups)?',
    codeSnippet: `# Disparate Impact Ratio = (Selection Rate of Unprivileged Group) / (Selection Rate of Privileged Group)
# Plot selection rates side-by-side with the legal 80% (0.80) Four-Fifths Rule reference line:
ax.bar(groups, approval_rates)
ax.axhline(y=privileged_rate * 0.80, color='red', linestyle='--', label='Four-Fifths Rule Threshold')`,
    options: [
      'Plot subgroup selection rates and False Positive / False Negative error rates side-by-side, benchmarked against the legal Four-Fifths (80%) Rule threshold line (`ax.axhline(0.80)`), to expose disparate impact transparently',
      'Average all groups together into a single bar so differences remain hidden',
      'Delete the demographic column from reports to avoid legal scrutiny',
      'Fairness cannot be quantified or visualized using data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Benchmarking subgroup selection and error rates against the Four-Fifths threshold exposes algorithmic disparate impact',
    explanationTitle: 'Visualizing Algorithmic Fairness and Disparate Impact',
    explanationText:
      'Algorithmic bias occurs when models exhibit disparate error rates across protected demographics (e.g. False Positive rate for one subgroup is double another). Visualizing group selection rates alongside the EEOC Four-Fifths rule benchmark ($80\\%$) provides legal compliance and governance transparency.',
    deepDive:
      'Fairness metrics in machine learning: Demographic Parity (equal selection rates), Equalized Odds (equal True Positive and False Positive rates), and Predictive Parity (equal precision).',
    tags: ['Algorithmic Fairness', 'Disparate Impact', 'Four-Fifths Rule', 'Model Governance', 'Ethics', 'PCAD-31-02']
  }
];
