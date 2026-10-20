import { Flashcard } from '../types';

export const pcedSection4CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.4 CONTINUED: DASHBOARDS & EXECUTIVE REPORTING [Cards 71-80]
  // =========================================================================
  {
    id: 'pced-sec4-071',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Reporting Strategy',
    topic: 'Audience Tailoring: Executive vs. Analytical Reporting',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'How should a data analyst adapt report content when presenting to C-level executives versus presenting to peer data analysts?',
    codeSnippet: `# Audience A (C-Suite):
# Wants: Business outcomes, financial implications, high-level risks, and clear recommendations.
# Does NOT want: Code walk-throughs, hyperparameter choices, or raw SQL queries.

# Audience B (Data Peers):
# Wants: Methodology validation, data cleaning steps, p-values, feature importance, and reproducibility.`,
    options: [
      'Executive reports should focus on strategic implications, key metrics, and recommended actions with minimal technical jargon; peer reports should detail methodology, data pipelines, assumptions, and statistical rigor',
      'Executive reports should contain 50+ pages of raw query logs to demonstrate diligence',
      'Peer reports should only use pie charts, while executive reports should only use scatter plots',
      'There should be no difference; one universal slide deck should be presented to all audiences'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Executive reports should focus on strategic implications, key metrics, and recommended actions with minimal technical jargon; peer reports should detail methodology, data pipelines, assumptions, and statistical rigor',
    explanationTitle: 'Tailoring Communication to Stakeholder Context',
    explanationText:
      'Executive decision-makers care about the "so what?"—how the findings affect revenue, costs, churn, or strategic goals. Technical analysts care about data provenance, validation checks, statistical significance, and edge-case handling.',
    deepDive:
      'A great practice is the "Executive Deck + Technical Appendix" model: keep the core deck to 5–8 high-impact slides focused on takeaways, placing detailed data tables, methodology notes, and code in the appendix for reference during Q&A.',
    tags: ['Audience Tailoring', 'Executive Communication', 'Stakeholder Management', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-072',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Architecture',
    topic: 'Real-Time Streaming vs. Batch Snapshot Refreshes',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When is a scheduled batch snapshot (e.g., daily or weekly refresh) preferred over a real-time streaming dashboard?',
    codeSnippet: `# Scenario A: Network security intrusion detection -> Real-time streaming (seconds)
# Scenario B: Monthly financial reconciliation & executive P&L -> Batch snapshot (daily/monthly)`,
    options: [
      'When metrics rely on audited end-of-period closing, when real-time updates would cause distracting minute-by-minute fluctuations without operational value, and to reduce expensive database compute overhead',
      'When the database contains more than 100 rows',
      'When charts use Matplotlib rather than Seaborn',
      'Only when the company lacks internet connectivity'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When metrics rely on audited end-of-period closing, when real-time updates would cause distracting minute-by-minute fluctuations without operational value, and to reduce expensive database compute overhead',
    explanationTitle: 'Batch vs. Real-Time Dashboard Trade-Offs',
    explanationText:
      'Real-time streaming is essential for operational triage (fraud alerts, server uptime), but counterproductive for strategic reporting. Constantly shifting numbers create confusion in executive discussions, and real-time streaming pipelines add significant infrastructure cost and complexity.',
    deepDive:
      'Scheduled snapshots also establish an authoritative "frozen" state for consistent reporting across different departments reviewing the same period.',
    tags: ['Streaming', 'Batch', 'Dashboard Architecture', 'Data Pipeline', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-073',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Data Governance',
    topic: 'Certified Datasets & Single Source of Truth',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What organizational problem do "certified dashboards" and "single source of truth" (SSOT) data models resolve?',
    codeSnippet: `# Common Dysfunctional Meeting:
# Marketing reports: "We acquired 12,000 new customers this quarter."
# Finance reports: "We only billed 9,400 new customers this quarter."
# 45 minutes wasted arguing whose Excel sheet is correct!`,
    options: [
      'They eliminate contradictory reports caused by different departments using conflicting definitions or ad-hoc data extracts, ensuring company-wide consensus on core metrics',
      'They prevent users from copying charts to PowerPoint',
      'They encrypt dashboard passwords using AES-256',
      'They automatically convert all SQL queries into Python code'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'They eliminate contradictory reports caused by different departments using conflicting definitions or ad-hoc data extracts, ensuring company-wide consensus on core metrics',
    explanationTitle: 'Single Source of Truth (SSOT) and Certified Reports',
    explanationText:
      'When teams build siloed reports from unvetted CSV dumps, definitions drift (e.g., how "active user" or "churn" is calculated). An enterprise SSOT ensures certified dashboards pull from governed, standardized data models, eliminating wasted debate over whose numbers are right.',
    deepDive:
      'Certified dashboards include data lineage metadata: timestamp of last refresh, data owner contact, and explicit metric definition documentation.',
    tags: ['Data Governance', 'SSOT', 'Data Quality', 'Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-074',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Design',
    topic: 'Mobile Responsive Dashboard Design',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the primary layout adaptation required when designing analytical dashboards for mobile executive consumption?',
    codeSnippet: `# Desktop Layout:
# 4-Column Grid [ KPI 1 | KPI 2 | KPI 3 | KPI 4 ]
# Wide Scatter Plot [ 800px ] | Deep Table [ 400px ]

# Mobile Viewport (< 600px):
# Single-column vertical reflow; large touch targets (min 44x44px); collapsed tables.`,
    options: [
      'Reflow multi-column grid layouts into a clean single-column vertical stack, prioritize top-level KPI scorecards, and replace wide multi-column tables with summary cards or touch drill-downs',
      'Shrink the entire desktop dashboard uniformly so all 12 widgets fit on the phone screen simultaneously',
      'Disable all colors and render mobile dashboards in pure monochrome text',
      'Require mobile users to rotate their phones 90 degrees to view anything'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Reflow multi-column grid layouts into a clean single-column vertical stack, prioritize top-level KPI scorecards, and replace wide multi-column tables with summary cards or touch drill-downs',
    explanationTitle: 'Mobile-Responsive Dashboard Best Practices',
    explanationText:
      'Executive stakeholders frequently review dashboards on phones between meetings. A desktop 4-column layout unscaled is illegible on mobile. Proper responsive design reflows widgets into a vertical single-column card stack with touch-friendly tap targets (minimum 44x44 points).',
    deepDive:
      'Avoid wide 15-column data tables on mobile displays; replace them with summary cards that expand on tap.',
    tags: ['Mobile Design', 'Responsive', 'UX', 'Dashboards', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-075',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Reporting Strategy',
    topic: 'Automated Scheduled Reporting & Push Digests',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why are automated push email digests (e.g., weekly Monday 8 AM executive summaries) often more effective than relying solely on pull dashboards?',
    codeSnippet: `# Pull Model: "Here is a dashboard link; remember to log in every Monday morning." (Often forgotten)
# Push Model: Automated email/Slack digest delivered directly to their inbox with key metrics,
# top changes, and a direct deep link for further exploration.`,
    options: [
      'They deliver critical insights directly into the stakeholder’s existing daily workflow, overcoming dashboard abandonment and ensuring regular review of key metrics',
      'They prevent database servers from running SQL queries',
      'Email attachments consume zero server storage bandwidth',
      'Executive email clients render 3D charts with higher resolution than web browsers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'They deliver critical insights directly into the stakeholder’s existing daily workflow, overcoming dashboard abandonment and ensuring regular review of key metrics',
    explanationTitle: 'Push vs. Pull Reporting in Business Intelligence',
    explanationText:
      'The biggest enemy of BI adoption is dashboard neglect: executives simply forget to log in. Automated push digests deliver the top 3–5 numbers and weekly deltas directly to email or Slack, with deep links for those who want to investigate further.',
    deepDive:
      'Combine email snapshots with alert thresholds so leaders are notified immediately when a metric deviates beyond expected control limits.',
    tags: ['Push Reporting', 'Automation', 'Adoption', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-076',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Governance',
    topic: 'Mitigating Metric Creep & Dashboard Bloat',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is "dashboard bloat" (or metric creep), and how should an analytics team proactively prevent it?',
    codeSnippet: `# Year 1: Clean 5-widget dashboard.
# Year 2: Every manager asks to add "just one more chart" -> 35 widgets!
# Result: Slow loading, visual chaos, zero executive adoption.
# Solution: Sunset policies, usage audit telemetry, and strict widget caps.`,
    options: [
      'The gradual accumulation of redundant or obsolete widgets over time as ad-hoc requests are added; mitigated by instituting regular usage audits and dashboard sunset policies',
      'A software bug where numerical digits expand in font size over time',
      'A database failure caused by calculating rolling averages',
      'A security breach where unauthorized users clone dashboard layouts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The gradual accumulation of redundant or obsolete widgets over time as ad-hoc requests are added; mitigated by instituting regular usage audits and dashboard sunset policies',
    explanationTitle: 'Preventing Metric Creep and Dashboard Bloat',
    explanationText:
      'Without governance, dashboards continuously accumulate new charts while old ones are never removed. This leads to slow load times and overwhelming visual noise. Teams should track access logs and deprecate unused widgets every quarter.',
    deepDive:
      'Enforcing a "one-in, one-out" rule helps maintain dashboard discipline and forces stakeholders to prioritize which metrics truly drive decisions.',
    tags: ['Dashboard Bloat', 'Metric Creep', 'Governance', 'Optimization', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-077',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Interactivity',
    topic: 'Conditional Alerting & Anomaly Triggers',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How do conditional alert thresholds enhance dashboard utility for operational teams?',
    codeSnippet: `# Automated Alert Logic:
# IF daily_refund_rate > 3.5% OR api_error_rate > 1.0%:
#     TRIGGER webhook alert to Slack channel #ops-alerts
#     FLAG metric in red with high-priority visual banner`,
    options: [
      'They transform dashboards from passive displays into proactive monitoring systems that automatically notify stakeholders when metrics breach predetermined operational thresholds',
      'They automatically correct erroneous values in the production SQL database',
      'They double the refresh frequency of Matplotlib animations',
      'They eliminate the need for backup servers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'They transform dashboards from passive displays into proactive monitoring systems that automatically notify stakeholders when metrics breach predetermined operational thresholds',
    explanationTitle: 'Proactive Alerting and Anomaly Triggers',
    explanationText:
      'Rather than requiring employees to stare at a dashboard all day waiting for a problem, automated threshold alerts push immediate notifications when critical metrics fall outside acceptable bounds (e.g. error spikes or sudden conversion drops).',
    deepDive:
      'Statistical process control (SPC) uses dynamic fences (e.g., 3 standard deviations from the rolling mean) to prevent false-alarm alert fatigue from ordinary daily fluctuations.',
    tags: ['Alerts', 'Anomalies', 'Automation', 'Operations', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-078',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Information Architecture',
    topic: 'Bottom Line Up Front (BLUF) Reporting Protocol',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the "Bottom Line Up Front" (BLUF) communication protocol, and why is it essential in executive memos and reports?',
    codeSnippet: `# Traditional Academic Style:
# Introduction -> Background -> Literature Review -> Methodology -> Findings -> Conclusion (Bottom line at the very end)

# Executive BLUF Style:
# 1. Headline Conclusion & Recommended Action (The Bottom Line First!)
# 2. Key supporting data points and financial rationale
# 3. Methodological context and next steps`,
    options: [
      'A communication practice where the primary conclusion, recommendation, or bottom-line finding is stated in the opening sentence, followed by supporting rationale',
      'Placing the company’s accounting balance sheet at the top of every chart',
      'Sorting data tables starting from the bottom row',
      'Drawing an underline beneath the lowest data point in a line plot'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A communication practice where the primary conclusion, recommendation, or bottom-line finding is stated in the opening sentence, followed by supporting rationale',
    explanationTitle: 'The BLUF (Bottom Line Up Front) Communication Principle',
    explanationText:
      'Executives do not read analytical reports like mystery novels; they should not have to wait until page 10 to discover the solution. BLUF puts the key takeaway and recommended decision front and center immediately, saving valuable leadership time.',
    deepDive:
      'Originally developed by military communications, BLUF prevents meetings from running out of time before the core takeaway is delivered.',
    tags: ['BLUF', 'Executive Reporting', 'Communication', 'Structure', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-079',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Accessibility',
    topic: 'WCAG 2.1 AA Contrast Standards for Dashboards',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'What is the minimum WCAG 2.1 AA contrast ratio required for standard body text in accessible digital dashboards and reports?',
    codeSnippet: `# WCAG 2.1 AA Standard:
# Normal text (< 18pt regular): Minimum contrast ratio of 4.5:1 against background.
# Large text (>= 18pt or >= 14pt bold): Minimum contrast ratio of 3.0:1 against background.
# Non-text UI components / graphical objects: Minimum 3.0:1 against background.`,
    options: [
      'At least 4.5:1 for normal body text against its background',
      'At least 1.5:1 for all elements',
      'Exactly 10:1 for every color',
      'Contrast ratio requirements only apply to printed paper documents'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'At least 4.5:1 for normal body text against its background',
    explanationTitle: 'WCAG 2.1 AA Text Contrast Requirements',
    explanationText:
      'Web Content Accessibility Guidelines (WCAG) 2.1 AA mandates a minimum contrast ratio of 4.5:1 for regular body text (< 18pt). Light gray text on white backgrounds or dark gray on black fails this standard and is difficult for many users to read.',
    deepDive:
      'For large text (18pt+ or 14pt+ bold) and UI components (borders, icons), the minimum ratio is 3.0:1. Always verify dashboard color pairings with automated contrast checkers.',
    tags: ['WCAG', 'Accessibility', 'Contrast Ratio', 'Typography', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-080',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pced',
    cardType: 'Dashboard Architecture',
    topic: 'Data Aggregation & Query Performance in Dashboards',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'Why do high-performance production dashboards query pre-aggregated summary tables or data marts rather than querying raw transaction logs directly?',
    codeSnippet: `# Approach 1 (Slow, 15-second load):
# SELECT COUNT(DISTINCT user_id), SUM(price) FROM raw_events_table (150 Million rows)

# Approach 2 (Sub-second load):
# SELECT active_users, total_revenue FROM daily_summary_rollup (365 rows)`,
    options: [
      'Pre-aggregated summary tables shrink data volumes by orders of magnitude, delivering sub-second dashboard rendering and preventing expensive locks on production transactional tables',
      'Raw logs cannot be rendered in bar charts',
      'Pre-aggregated tables bypass GDPR compliance requirements',
      'SQL does not allow aggregate functions on raw tables'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pre-aggregated summary tables shrink data volumes by orders of magnitude, delivering sub-second dashboard rendering and preventing expensive locks on production transactional tables',
    explanationTitle: 'Optimizing Dashboard Load Times via Rollup Aggregations',
    explanationText:
      'A dashboard that takes 15 seconds to load will quickly be abandoned by users. By running scheduled ETL pipelines to pre-calculate daily or hourly metric rollups, dashboard queries scan thousands of rows instead of hundreds of millions, ensuring instant responsiveness.',
    deepDive:
      'Keep raw transactional tables accessible only when a user explicitly initiates a granular drill-through query on a specific customer or event.',
    tags: ['Performance', 'Aggregations', 'Data Mart', 'ETL', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 4.5: NARRATIVE DATA STORYTELLING & PRESENTATION [Cards 81-100]
  // =========================================================================
  {
    id: 'pced-sec4-081',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Storytelling Framework',
    topic: 'The Data Storytelling Triad',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'According to data storytelling frameworks (Brent Dykes), what three intersecting elements transform raw analytics into business action?',
    codeSnippet: `# The Storytelling Intersection:
# [ Data ] + [ Visuals ] -> Enlightens (reveals insights)
# [ Visuals ] + [ Narrative ] -> Engages (captures attention)
# [ Narrative ] + [ Data ] -> Explains (builds credibility)
# [ Data ] + [ Visuals ] + [ Narrative ] = ACTION!`,
    options: [
      'Data, Visuals, and Narrative',
      'Python, SQL, and Excel',
      'Statistics, Machine Learning, and Cloud Computing',
      'Hypothesis, Experimentation, and P-value'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Data, Visuals, and Narrative',
    explanationTitle: 'The Triad of Data Storytelling',
    explanationText:
      'Data provides the empirical truth, visuals illuminate patterns that raw numbers hide, and narrative gives context, emotional resonance, and meaning. Combining all three drives stakeholders to understand the insight and take concrete action.',
    deepDive:
      'Data alone produces dry tables; visuals alone create decorative charts; narrative alone is mere opinion. The synergy of all three is what influences executive decisions.',
    tags: ['Storytelling', 'Frameworks', 'Narrative', 'Visuals', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-082',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Storytelling Technique',
    topic: 'The "So What?" Test and Actionable Takeaways',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the "So What?" test in data analysis, and how does it separate descriptive trivia from actionable intelligence?',
    codeSnippet: `# Descriptive Observation:
# "Mobile checkout conversion dropped from 3.2% to 2.1% in August."
# Stakeholder: "So what?"

# Actionable Insight Passing the Test:
# "...costing $180K in lost sales, caused by an iOS 18 button glitch that engineering can patch today."`,
    options: [
      'A critical interrogation asking what business consequence the finding causes and what specific action leadership should take as a direct result',
      'A statistical test comparing two sample variances',
      'A software unit test checking for NULL values in Python',
      'A method of calculating the slope of a trend line'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A critical interrogation asking what business consequence the finding causes and what specific action leadership should take as a direct result',
    explanationTitle: 'Passing the "So What?" Test in Analytics',
    explanationText:
      'Analysts often present descriptive facts without explaining why they matter. The "So What?" test forces the analyst to connect the data observation to business impact (revenue, risk, cost, customer retention) and recommend a clear path forward.',
    deepDive:
      'Before showing any chart to leadership, ask yourself three times: "So what? Why should they care? What decision does this inform?"',
    tags: ['So What Test', 'Actionable Insights', 'Storytelling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-083',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Storytelling Structure',
    topic: 'Adapting Narrative Arc (Freytag’s Pyramid) for Data',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How is classic dramatic structure (Freytag’s Narrative Arc) adapted to structure a compelling data presentation?',
    codeSnippet: `# Data Narrative Arc:
# 1. Context / Hook (Baseline performance & strategic goal)
# 2. Rising Action / Conflict (Emerging challenge or unexpected anomaly discovered)
# 3. Climax / Core Insight (The root cause uncovered by deep analytical modeling)
# 4. Falling Action / Implications (Quantifying risk and evaluating options)
# 5. Resolution (Concrete recommended action & roadmap)`,
    options: [
      'Setting context and baseline, introducing the analytical challenge or anomaly, revealing the root-cause insight, evaluating trade-offs, and concluding with a clear call-to-action',
      'Presenting code snippets in chronological order of writing',
      'Arranging charts by file size from smallest to largest',
      'Alternating between positive and negative numbers on every slide'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Setting context and baseline, introducing the analytical challenge or anomaly, revealing the root-cause insight, evaluating trade-offs, and concluding with a clear call-to-action',
    explanationTitle: 'Structuring Analytical Decks with a Narrative Arc',
    explanationText:
      'Human brains are wired for stories, not raw numbers. By structuring a data presentation with a clear beginning (context), middle (conflict/root cause discovery), and end (resolution and next steps), complex findings become memorable and persuasive.',
    deepDive:
      'Without a narrative arc, data presentations feel like disconnected metric dumps where stakeholders struggle to see how slides connect.',
    tags: ['Narrative Arc', 'Freytag', 'Storytelling', 'Structure', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-084',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Cognitive Science',
    topic: 'Managing Cognitive Load in Visualizations',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In John Sweller’s Cognitive Load Theory, what is "extraneous cognitive load", and how do data analysts minimize it in reports?',
    codeSnippet: `# Extraneous Load:
# Clashing neon colors, dense borders, 3D effects, tiny unreadable fonts,
# rotated vertical labels, and unexplained technical acronyms.
# Result: Audience’s working memory is exhausted just deciphering the graphic!`,
    options: [
      'Mental effort wasted deciphering poor design, cluttered formatting, or confusing chart mechanics; minimized by eliminating chartjunk, using clear typography, and simplifying layouts',
      'The memory required by Python to load a CSV into RAM',
      'The time it takes to run a machine learning regression model',
      'The physical effort of clicking a mouse during a presentation'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Mental effort wasted deciphering poor design, cluttered formatting, or confusing chart mechanics; minimized by eliminating chartjunk, using clear typography, and simplifying layouts',
    explanationTitle: 'Minimizing Extraneous Cognitive Load',
    explanationText:
      'Working memory has limited bandwidth. Extraneous cognitive load is mental friction generated by poor visual design. Minimizing it ensures stakeholder brainpower is spent evaluating business implications rather than deciphering confusing chart elements.',
    deepDive:
      'Intrinsic load is the inherent difficulty of the analytical concept itself; germane load is the productive mental effort that builds understanding and leads to decisions.',
    tags: ['Cognitive Load', 'Sweller', 'Design', 'Perception', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-085',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Visual Storytelling',
    topic: 'The "Gray + One Accent Color" Highlighting Technique',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why is the "Gray + One Accent Color" palette technique considered one of the most effective tools in visual data storytelling?',
    codeSnippet: `# 10 Product Categories:
# 9 categories colored in muted neutral gray (#b0b0b0).
# 1 key category ('Subscription Cloud') highlighted in vibrant corporate blue (#0066cc).
# Immediate, effortless visual focus!`,
    options: [
      'It de-emphasizes contextual background data in muted gray while directing viewer attention instantly to the single critical insight using a high-contrast accent color',
      'Printers only support one color toner cartridge at a time',
      'It reduces Matplotlib memory consumption by 90%',
      'It is a legal requirement under financial reporting regulations'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It de-emphasizes contextual background data in muted gray while directing viewer attention instantly to the single critical insight using a high-contrast accent color',
    explanationTitle: 'Visual Focus with "Gray + Accent" Storytelling',
    explanationText:
      'When every bar has a different vibrant color, the viewer’s brain has to process 10 competing signals. By muting 9 bars in neutral gray and highlighting only the focal bar in a vivid accent color, the visual story is communicated within a fraction of a second.',
    deepDive:
      'This technique leverages preattentive visual processing, ensuring the audience sees the focal point before you even finish speaking.',
    tags: ['Accent Color', 'Preattentive', 'Visual Focus', 'Storytelling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-086',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Design Technique',
    topic: 'Actionable Takeaway Titles vs. Topic Titles',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Which chart title best exemplifies effective analytical storytelling?',
    codeSnippet: `# Option A: "Figure 3: Revenue by Region 2024-2026"
# Option B: "European Sales Dropped 18% in Q3 Due to Supply Chain Bottlenecks"`,
    options: [
      '"European Sales Dropped 18% in Q3 Due to Supply Chain Bottlenecks" (States the key finding and primary driver directly)',
      '"Figure 3: Revenue by Region 2024-2026" (Generic topic label)',
      '"Data Analysis Graph 1"',
      '"Bar Chart of Numerical Values"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '"European Sales Dropped 18% in Q3 Due to Supply Chain Bottlenecks" (States the key finding and primary driver directly)',
    explanationTitle: 'Writing Actionable, Conclusion-Driven Chart Titles',
    explanationText:
      'A generic topic title tells the reader what the data is, but forces them to do the analytical work to find the conclusion. An action title states the core finding and its business cause directly in the header, guiding interpretation.',
    deepDive:
      'Use a two-tier title pattern: a bold, conclusion-driven headline at the top, followed by a lighter subtitle indicating methodology and parameters (e.g., "Monthly gross revenue in €M, source: ERP system").',
    tags: ['Chart Titles', 'Storytelling', 'Executive Summary', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-087',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Visual Storytelling',
    topic: 'Annotating Turning Points and Structural Breaks',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When presenting a time-series chart with a sudden inflection or structural drop, why is an on-chart text annotation far superior to explaining it verbally?',
    codeSnippet: `# Time series shows sudden 40% traffic drop on May 14.
# Good Chart:
# An arrow with text box directly at May 14:
# "May 14: Server migration caused 6-hour checkout outage"`,
    options: [
      'Direct on-chart annotations tie the explanation directly to the visual anomaly, ensuring the chart remains self-contained and clear even when shared or read asynchronously without the presenter',
      'On-chart text speeds up rendering by skipping font lookups',
      'Matplotlib requires annotations on any line that changes slope by more than 20 degrees',
      'Text boxes remove the need to show dates along the X-axis'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Direct on-chart annotations tie the explanation directly to the visual anomaly, ensuring the chart remains self-contained and clear even when shared or read asynchronously without the presenter',
    explanationTitle: 'Self-Contained Charts via On-Canvas Annotations',
    explanationText:
      'Executive slide decks are frequently forwarded and read without the presenter in the room. If an obvious anomaly has no on-canvas annotation, readers will question the data’s validity or invent incorrect explanations.',
    deepDive:
      'Use vertical reference lines (`ax.axvline()`) coupled with `ax.annotate()` to clearly anchor the event to its exact date on the time axis.',
    tags: ['Annotations', 'Inflections', 'Self-Contained', 'Storytelling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-088',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Statistical Communication',
    topic: 'Communicating Statistical Uncertainty to Non-Technical Audiences',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How should an analyst communicate statistical uncertainty (e.g., margins of error, confidence intervals) to business leaders without causing confusion?',
    codeSnippet: `# Bad: "The beta coefficient is 0.42 with p = 0.041 and 95% CI [-0.02, 0.86]."
# Good: "We project a revenue lift between $400K and $850K, with $620K being the most probable outcome. We recommend planning headcount around the conservative $400K baseline."`,
    options: [
      'Translate technical confidence intervals into practical business outcome ranges (worst-case, expected, best-case scenarios) and explain what decision the margin of error implies',
      'Never mention uncertainty because business leaders only accept 100% deterministic certainty',
      'Display raw p-values rounded to 10 decimal places',
      'Replace all confidence intervals with an exclamation point'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Translate technical confidence intervals into practical business outcome ranges (worst-case, expected, best-case scenarios) and explain what decision the margin of error implies',
    explanationTitle: 'Translating Statistical Uncertainty into Business Scenarios',
    explanationText:
      'Business leaders rarely think in terms of standard errors or p-values. Translating statistical uncertainty into concrete ranges (e.g., expected lift of $620K with a likely range of $400K–$850K) makes risk actionable for financial modeling and contingency planning.',
    deepDive:
      'Always clarify whether the lower bound of an interval still justifies the investment cost, turning a statistical parameter into a clear risk assessment.',
    tags: ['Uncertainty', 'Confidence Intervals', 'Risk Communication', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-089',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Statistical Integrity',
    topic: 'Correlation vs. Causation Framing in Business',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'An observational analysis shows that users who open marketing emails have a 3x higher retention rate. Why is it dangerous to conclude: "Sending more emails causes higher customer retention"?',
    codeSnippet: `# Observational Correlation != Causation:
# Confounding variable: Highly engaged, loyal customers naturally open emails AND stay subscribed!
# Bombarding unengaged customers with more emails might actually accelerate unsubscribes!`,
    options: [
      'Observational correlation does not prove causation; highly engaged customers may open emails because they already love the product (reverse causality or confounding), requiring A/B experimentation to prove true causal impact',
      'Email metrics can only be evaluated using linear regression, not retention rates',
      'Python Institute requires correlation coefficients to be greater than 0.999 before making business claims',
      'Retention rate is an ordinal metric that cannot be multiplied'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Observational correlation does not prove causation; highly engaged customers may open emails because they already love the product (reverse causality or confounding), requiring A/B experimentation to prove true causal impact',
    explanationTitle: 'Avoiding the Correlation-Causation Trap in Reporting',
    explanationText:
      'Conflating correlation with causation leads to expensive business mistakes. Confounders and selection bias frequently produce strong correlations without any causal mechanism. Analysts should frame observational findings as associations and propose controlled A/B experiments to test causality.',
    deepDive:
      'Carefully choose your verbs: use "associated with", "correlated with", or "tracks with" for observational data, reserving "drives", "causes", and "increases" for controlled experimental outcomes.',
    tags: ['Causation', 'Correlation', 'Confounders', 'A/B Testing', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-090',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Statistical Framing',
    topic: 'Rates vs. Absolute Counts (Denominator Selection)',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why is reporting raw defect counts (e.g., "Factory A produced 500 defective parts, Factory B produced 100") misleading without providing the denominator (production volume)?',
    codeSnippet: `# Misleading Raw Count:
# Factory A: 500 defects | Factory B: 100 defects -> Factory A looks 5x worse!

# Normalized Rate (True picture):
# Factory A: 500 / 1,000,000 produced = 0.05% defect rate (World-class!)
# Factory B: 100 / 10,000 produced = 1.00% defect rate (20x higher defect rate!)`,
    options: [
      'Absolute counts ignore exposure or volume differences; normalizing counts into rates, percentages, or per-capita metrics ensures fair, accurate comparisons across entities of different sizes',
      'Raw counts cannot be plotted in Matplotlib without raising an OverflowError',
      'Percentages are always legally required in manufacturing reports',
      'Factory B’s numbers are automatically normalized by the database engine'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Absolute counts ignore exposure or volume differences; normalizing counts into rates, percentages, or per-capita metrics ensures fair, accurate comparisons across entities of different sizes',
    explanationTitle: 'The Necessity of Denominators and Rate Normalization',
    explanationText:
      'Comparing raw numbers without accounting for scale or volume is a classic statistical trap. Larger populations, higher sales volumes, or longer time windows naturally yield higher raw counts. Always normalize by an appropriate denominator (e.g., per 1,000 users, per transaction).',
    deepDive:
      'Pairing rate metrics with absolute scale (e.g., "0.05% defect rate on 1M units") gives stakeholders both efficiency context and total volume perspective.',
    tags: ['Normalization', 'Rates', 'Denominators', 'Statistical Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-091',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Presentation Technique',
    topic: 'Progressive Disclosure in Slide Presentations',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'In live slide presentations, what is "progressive disclosure", and why does it improve audience comprehension of complex charts?',
    codeSnippet: `# Step 1: Click 1 -> Show empty axes with X and Y baseline clearly explained.
# Step 2: Click 2 -> Reveal the historical trend line (establish normal pattern).
# Step 3: Click 3 -> Reveal the post-launch drop and annotate the root cause.`,
    options: [
      'Revealing visual elements step-by-step across successive clicks or slides, allowing the audience to absorb the baseline context before introducing the focal complication',
      'Encrypting data so only authorized managers have the password to unhide slides',
      'Slowly increasing the brightness of the projector over 10 minutes',
      'Presenting slides in reverse chronological order'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Revealing visual elements step-by-step across successive clicks or slides, allowing the audience to absorb the baseline context before introducing the focal complication',
    explanationTitle: 'Guiding Attention with Progressive Disclosure',
    explanationText:
      'When an intricate chart with 4 lines, 10 annotations, and a complex legend appears all at once, audience members stop listening to the speaker and spend 30 seconds scanning the slide. Revealing elements progressively keeps audience focus synchronized with the spoken narrative.',
    deepDive:
      'Progressive disclosure is especially valuable for multi-step causal breakdowns, walkthroughs of regression models, or complex customer journey maps.',
    tags: ['Progressive Disclosure', 'Presentations', 'Attention', 'Cognition', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-092',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Stakeholder Management',
    topic: 'Presenting to Skeptical Stakeholders',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'When presenting data findings that challenge an executive’s cherished hypothesis or previous strategy, what approach minimizes defensiveness?',
    codeSnippet: `# Defensive Approach: "Your strategy from last quarter failed completely; here are the bad numbers."
# Constructive Approach: "Building on last quarter’s baseline, we ran an empirical analysis to uncover why conversion plateaued, identifying a market-wide shift that opens an immediate $1.2M pivot opportunity."`,
    options: [
      'Acknowledge prior context, frame findings around external market shifts rather than personal blame, highlight concrete forward-looking opportunities, and be completely transparent about data limitations',
      'Conceal the negative data entirely and only show positive vanity metrics',
      'Speak faster so stakeholders do not have time to ask questions',
      'Insist that mathematical models are infallible and cannot be debated'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Acknowledge prior context, frame findings around external market shifts rather than personal blame, highlight concrete forward-looking opportunities, and be completely transparent about data limitations',
    explanationTitle: 'Navigating Skeptical and Defensive Audiences',
    explanationText:
      'When data reveals bad news, confrontational framing makes stakeholders defensive. Presenting findings as an objective learning opportunity coupled with a forward-looking action plan turns potential conflict into constructive decision-making.',
    deepDive:
      'Pre-briefing key skeptical stakeholders one-on-one before the formal meeting is an essential organizational tactic so they are never caught off guard in public.',
    tags: ['Stakeholder Management', 'Influence', 'Communication', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-093',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Data Ethics',
    topic: 'Cherry-Picking & Survivorship Bias in Reporting',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How does "survivorship bias" distort business storytelling when analyzing successful products or high-performing accounts?',
    codeSnippet: `# Classic Armor on Bombers Analogy (Abraham Wald):
# Examining returning aircraft showed bullet holes in wings and tail.
# Flawed conclusion: "Add armor to wings and tail!"
# Wald's Insight: Aircraft shot in the engine didn't return! Armor the engine!`,
    options: [
      'Focusing exclusively on entities that survived or succeeded while ignoring failed entities leads to false causal conclusions and overly optimistic projections',
      'A bias that only occurs when analyzing hospital patient survival data',
      'The tendency of machine learning algorithms to crash after long runs',
      'A statistical error caused by taking logs of negative numbers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Focusing exclusively on entities that survived or succeeded while ignoring failed entities leads to false causal conclusions and overly optimistic projections',
    explanationTitle: 'Mitigating Survivorship Bias in Analytical Storytelling',
    explanationText:
      'In business analytics, studying only current active power-users or successful product launches ignores the customers who churned or the products that failed early. Honest data storytelling accounts for the full cohort, including silent dropouts.',
    deepDive:
      'Always ask: "Who is missing from this sample? What happened to the accounts that did not make it into this dataset?"',
    tags: ['Survivorship Bias', 'Data Ethics', 'Sampling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-094',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Presentation Technique',
    topic: 'Managing Q&A with an Appendix of Anticipated Objections',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the purpose of preparing an "Appendix of Anticipated Objections" when delivering high-stakes executive data presentations?',
    codeSnippet: `# Main Deck: 6 clean slides focused on core decisions and high-level trends.
# Hidden Appendix (Slides 7-18):
# - Deep SQL query logic & data lineage
# - Subgroup breakdowns by geography and age
# - Robustness tests and sensitivity analysis
# - Edge-case outlier treatment validation`,
    options: [
      'It keeps the main presentation streamlined and focused on decision-making, while allowing the analyst to address complex technical or methodological challenges instantly during Q&A',
      'It provides extra slides to read if the meeting finishes early',
      'It satisfies corporate legal requirements for PDF archiving',
      'It stores raw data rows in case someone wants to calculate stats by hand'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It keeps the main presentation streamlined and focused on decision-making, while allowing the analyst to address complex technical or methodological challenges instantly during Q&A',
    explanationTitle: 'The Role of the Backup Technical Appendix',
    explanationText:
      'Cramming deep methodology checks into the main presentation derails executive flow. Placing sensitivity checks, data pipeline definitions, and subgroup analyses in an appendix lets you answer challenges with: "We anticipated that; here is the supporting analysis on slide 14."',
    deepDive:
      'Having ready backup slides for anticipated objections demonstrates deep preparation and builds credibility with technical leaders in the room.',
    tags: ['Q&A', 'Appendix', 'Credibility', 'Presentations', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-095',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Storytelling Structure',
    topic: 'Problem-Agitation-Solution (PAS) Analytical Narrative',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How does the Problem-Agitation-Solution (PAS) framework structure persuasive data reporting?',
    codeSnippet: `# Step 1 (Problem): Customer churn increased by 1.8% in Q2.
# Step 2 (Agitation): If left unaddressed, this will compound to an annual ARR loss of $2.4M and jeopardize Series B funding.
# Step 3 (Solution): Deploying automated onboarding emails in week 1 reduces early drop-off by 45%, requiring 2 weeks of engineering time.`,
    options: [
      'Identify the core issue, quantify the financial and operational consequences of inaction, and present a validated, high-ROI solution',
      'Complain about poor data quality, demand higher server budgets, and wait for management to respond',
      'Identify problems and assign blame to specific departments before suggesting fixes',
      'Run three separate regression algorithms and report the highest R-squared value'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Identify the core issue, quantify the financial and operational consequences of inaction, and present a validated, high-ROI solution',
    explanationTitle: 'The Problem-Agitation-Solution (PAS) Framework',
    explanationText:
      'Stating a problem alone rarely creates urgency. By "agitating" the problem—quantifying the cost of inaction, compound risks, and missed opportunities—the analyst creates motivation to act. The presentation then resolves this tension with a clear, realistic solution.',
    deepDive:
      'Framing problems with quantified opportunity costs helps leadership prioritize your recommendation over competing budget requests.',
    tags: ['PAS Framework', 'Persuasion', 'Business Case', 'Storytelling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-096',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Typography & Layout',
    topic: 'Slide Typography Hierarchy & Legibility Rules',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the standard typographic guideline for slide presentations delivered on projectors or large boardroom displays?',
    codeSnippet: `# Recommended Slide Font Sizes:
# - Slide Takeaway Title: 28pt - 36pt Bold
# - Subheaders & Metric Highlights: 20pt - 24pt
# - Body Text & Data Callouts: 14pt - 18pt
# - Chart Axis Labels / Tick Marks: Minimum 12pt - 14pt (Never < 10pt!)`,
    options: [
      'Maintain strong visual hierarchy with titles at 28–36pt, body text at 14–18pt, and chart labels no smaller than 12pt so content remains legible from the back of the room',
      'Use 8pt text throughout to maximize the amount of information on each slide',
      'Use a different decorative script font for every data series',
      'Set all text in uppercase bold italics for emphasis'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Maintain strong visual hierarchy with titles at 28–36pt, body text at 14–18pt, and chart labels no smaller than 12pt so content remains legible from the back of the room',
    explanationTitle: 'Typographic Sizing for Slide Presentations',
    explanationText:
      'A chart that looks readable on a 15-inch laptop screen often becomes an illegible blur when projected in a large conference room. Sizing titles to 28pt+ and keeping axis numbers at 12pt+ ensures everyone in the room can follow along.',
    deepDive:
      'A handy test is the "arm’s-length squint test": view your slide on a laptop from 6 feet away. If you cannot instantly read the headline and core trend, simplify the layout.',
    tags: ['Typography', 'Slide Design', 'Legibility', 'Best Practices', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-097',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Storytelling Technique',
    topic: 'Pairing Quantitative Metrics with Qualitative Quotes',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'Why is pairing quantitative charts with verbatim customer quotes ("voice of customer") so persuasive in executive reporting?',
    codeSnippet: `# Quantitative Graphic:
# Bar chart showing 38% of mobile onboarding drop-offs happen on the "Verify Phone" screen.

# Qualitative Pair:
# "I spent 10 minutes waiting for the SMS code and never received it, so I gave up." - App Store Review (1 Star)`,
    options: [
      'Numbers provide statistical proof and scale, while qualitative human quotes provide empathy, narrative punch, and intuitive understanding of the underlying human reality',
      'Quotes replace the need for conducting statistical significance tests',
      'Quotes prevent auditors from examining data pipelines',
      'It allows analysts to fill empty white space when charts are small'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Numbers provide statistical proof and scale, while qualitative human quotes provide empathy, narrative punch, and intuitive understanding of the underlying human reality',
    explanationTitle: 'Combining Quantitative Scale with Qualitative Empathy',
    explanationText:
      'Numbers alone can feel cold and abstract to non-technical leaders. Pairing a metric (38% churn) with an authentic customer quote makes the problem visceral and memorable, building strong consensus for the recommended fix.',
    deepDive:
      'This practice connects the analytical "head" (statistical validity) with the operational "heart" (customer experience).',
    tags: ['Qualitative', 'Voice of Customer', 'Empathy', 'Storytelling', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-098',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Decision Analysis',
    topic: 'What-If Scenario Modeling in Presentations',
    category: 'Communicating Insights and Reporting',
    difficulty: 'intermediate',
    question: 'How does presenting "What-If" scenario models (Conservative, Base, Aggressive) empower executive decision-making?',
    codeSnippet: `# Projected ROI of Cloud Migration:
# Scenario 1 (Conservative): +5% speed lift -> $220K annual savings
# Scenario 2 (Base Case):    +15% speed lift -> $650K annual savings
# Scenario 3 (Aggressive):   +30% speed lift -> $1.4M annual savings`,
    options: [
      'It equips leadership with a structured decision framework that evaluates sensitivity to risk, sets realistic expectations, and identifies the minimum threshold required to break even',
      'It allows the analyst to avoid taking responsibility if the project fails',
      'It runs three times faster than presenting a single number',
      'It proves that future market events are completely predictable'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It equips leadership with a structured decision framework that evaluates sensitivity to risk, sets realistic expectations, and identifies the minimum threshold required to break even',
    explanationTitle: 'Scenario Modeling for Informed Decision-Making',
    explanationText:
      'Single-point forecasts create a false illusion of precision. Providing conservative, expected, and optimistic scenarios shows stakeholders that you have stress-tested your assumptions and helps them evaluate risk against their appetite.',
    deepDive:
      'Highlight the key assumptions underlying each scenario (e.g., customer acquisition cost, conversion rate) so leadership can debate the inputs rather than just the outputs.',
    tags: ['Scenario Modeling', 'Sensitivity Analysis', 'Decision Support', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-099',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Presentation Rules',
    topic: 'The 10/20/30 Rule of Presentations',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is Guy Kawasaki’s famous "10/20/30 Rule" for slide decks, and how does it prevent presentation failure?',
    codeSnippet: `# The 10/20/30 Rule:
# - 10 Slides: Optimal number of concepts an audience can retain.
# - 20 Minutes: Maximum time spent presenting, leaving 40 minutes for discussion.
# - 30 Point Font: Minimum font size, preventing bullet-point novels and forcing concise editing.`,
    options: [
      'A presentation should have no more than 10 slides, last no longer than 20 minutes, and contain no font smaller than 30 points',
      'A deck must have 10 charts, 20 tables, and 30 SQL queries',
      'Every chart must use 10% red, 20% blue, and 30% green ink',
      'Presentations must be delivered on the 10th, 20th, and 30th of each month'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A presentation should have no more than 10 slides, last no longer than 20 minutes, and contain no font smaller than 30 points',
    explanationTitle: 'Guy Kawasaki’s 10/20/30 Presentation Rule',
    explanationText:
      'The 10/20/30 rule forces disciplined editing: 10 slides ensures you focus on high-yield takeaways; 20 minutes leaves ample room for stakeholder discussion; and 30pt font prevents walls of text that cause audiences to disengage.',
    deepDive:
      'As Kawasaki notes: "The reason people use small fonts is because they don’t know their material well enough to summarize it concisely."',
    tags: ['10/20/30 Rule', 'Kawasaki', 'Slide Design', 'Brevity', 'PCED-30-02']
  },
  {
    id: 'pced-sec4-0100',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pced',
    cardType: 'Accountability & Action',
    topic: 'Post-Presentation Action Registers & Decision Logs',
    category: 'Communicating Insights and Reporting',
    difficulty: 'beginner',
    question: 'What is the final critical step an analyst should execute immediately following a data presentation to ensure insights translate into real operational action?',
    codeSnippet: `# Action Register / Decision Log:
# - Action Item: Deploy SMS verification failover to email.
# - Owner: Engineering Team Lead (Sarah T.)
# - Success Metric: Reduce checkout drop-off below 15%.
# - Target Date: October 15, 2026.
# - Follow-Up Cadence: Weekly Slack metric tracker.`,
    options: [
      'Document and circulate an Action Register capturing agreed-upon decisions, specific project owners, implementation target dates, and measurable success KPIs',
      'Delete the slide deck from the shared drive to protect intellectual property',
      'Archive the SQL database immediately',
      'Celebrate and never mention the project again'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Document and circulate an Action Register capturing agreed-upon decisions, specific project owners, implementation target dates, and measurable success KPIs',
    explanationTitle: 'Driving Real Action with Post-Presentation Decision Logs',
    explanationText:
      'The best presentation accomplishes nothing if everyone nods in agreement and then returns to their daily habits. Circulating an Action Register with specific owners, deadlines, and success metrics converts analytical consensus into tangible business execution.',
    deepDive:
      'Pairing the decision log with a lightweight tracking dashboard closes the loop, showing stakeholders the real-world impact of their data-driven decisions.',
    tags: ['Action Register', 'Accountability', 'Follow-Through', 'Business Impact', 'PCED-30-02']
  }
];
