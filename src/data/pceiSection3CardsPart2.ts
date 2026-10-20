import { Flashcard } from '../types';

export const pceiSection3CardsPart2: Flashcard[] = [
  {
    id: "pcei-3-051",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Target Encoding Leakage",
    difficulty: "Advanced",
    question: "Why must Target Encoding be computed strictly within cross-validation folds or with smoothing?",
    codeSnippet: "# Risk of naive target encoding:\n# If a rare zip code has only 1 sample with target=1, its encoded value is 1.0 (Direct label leakage!)\n# Target leakage leads to severe overfitting on the training set",
    options: [
      "Directly mapping the target to features across the entire dataset causes severe data leakage and overfitting, as the model essentially learns the target directly",
      "Target encoding deletes the test set from disk",
      "Target encoding causes divide-by-zero errors on GPU clusters",
      "Target encoding is banned by scikit-learn license terms"
    ],
    correctAnswer: 0,
    explanation: "Naive target encoding leaks the target variable directly into the features, causing severe overfitting. It must be computed out-of-fold (OOF) or with smoothing regularization (m-estimate) to prevent leakage.",
    officialRef: "PCEI-30-01 Block 3.3 - Target Leakage",
    tags: ["target-leakage", "cross-validation", "regularization"]
  },
  {
    id: "pcei-3-052",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Feature Selection",
    difficulty: "Intermediate",
    question: "What is the primary benefit of applying 'Feature Selection' before training a model?",
    codeSnippet: "# Feature selection benefits:\n# 1. Reduces overfitting (less noise)\n# 2. Speeds up training and inference\n# 3. Improves model interpretability",
    options: [
      "Removing irrelevant, redundant, or noisy features reduces overfitting, speeds up training/inference, and improves model interpretability",
      "It permanently eliminates the need to evaluate models on test data",
      "It guarantees 100% classification accuracy on all future datasets",
      "It converts non-linear algorithms into linear ones"
    ],
    correctAnswer: 0,
    explanation: "Feature selection selects a subset of relevant features. By stripping away redundant or noisy columns, models train faster, overfit less, and become much easier to explain to non-technical stakeholders.",
    officialRef: "PCEI-30-01 Block 3.3 - Feature Selection",
    tags: ["feature-selection", "parsimony", "interpretability"]
  },
  {
    id: "pcei-3-053",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Filter Methods",
    difficulty: "Intermediate",
    question: "How do 'Filter Methods' (e.g., VarianceThreshold, correlation) perform feature selection?",
    codeSnippet: "# Filter method: VarianceThreshold drops features with near-zero variance\nfrom sklearn.feature_selection import VarianceThreshold\nselector = VarianceThreshold(threshold=0.01)\nX_high_var = selector.fit_transform(X)",
    options: [
      "They evaluate statistical properties of features independently of any machine learning model (e.g., variance, correlation, Chi-Square)",
      "They train 100 different neural networks and select the fastest one",
      "They filter out rows based on user IP address location",
      "They apply optical color filters to training images"
    ],
    correctAnswer: 0,
    explanation: "Filter methods rank features using intrinsic statistical metrics (like variance, Pearson correlation with target, or ANOVA F-score) before model training begins, making them computationally fast and model-agnostic.",
    officialRef: "PCEI-30-01 Block 3.3 - Filter Methods",
    tags: ["filter-methods", "variance-threshold", "correlation"]
  },
  {
    id: "pcei-3-054",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Wrapper Methods",
    difficulty: "Advanced",
    question: "How do 'Wrapper Methods' (like Recursive Feature Elimination - RFE) perform feature selection?",
    codeSnippet: "# RFE wrapper method:\nfrom sklearn.feature_selection import RFE\nfrom sklearn.linear_model import LogisticRegression\nselector = RFE(estimator=LogisticRegression(), n_features_to_select=5)\nX_selected = selector.fit_transform(X, y)",
    options: [
      "They use a machine learning model as an evaluation core, iteratively training models on subsets of features to find the best combination",
      "They wrap Python functions in C++ wrappers to speed up execution",
      "They compress the dataset in a wrapper ZIP archive",
      "They wrap all feature names in HTML tags"
    ],
    correctAnswer: 0,
    explanation: "Wrapper methods (e.g., RFE, forward selection) use a predictive model to evaluate feature subsets. They add or prune features based on model performance, which is computationally expensive but captures feature interactions.",
    officialRef: "PCEI-30-01 Block 3.3 - Wrapper Methods",
    tags: ["wrapper-methods", "rfe", "feature-subsets"]
  },
  {
    id: "pcei-3-055",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Embedded Methods",
    difficulty: "Intermediate",
    question: "Which algorithm family naturally provides 'Embedded' feature selection during model training?",
    codeSnippet: "# Embedded feature selection:\n# Decision Trees / Random Forests compute feature importances naturally during split creation\nimportances = rf_model.feature_importances_",
    options: [
      "Tree-based models (like Decision Trees, Random Forests) and L1 regularized models (Lasso)",
      "K-Nearest Neighbors (KNN)",
      "K-Means Clustering",
      "Principal Component Analysis"
    ],
    correctAnswer: 0,
    explanation: "Embedded methods perform feature selection internally as part of their training algorithm: Decision trees measure feature importances from split purity, and Lasso (L1) regression drives non-informative weights to exact zero.",
    officialRef: "PCEI-30-01 Block 3.3 - Embedded Methods",
    tags: ["embedded-methods", "feature-importance", "lasso"]
  },
  {
    id: "pcei-3-056",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Cyclical Features",
    difficulty: "Intermediate",
    question: "How should cyclical periodic features (like Hour of Day: 0-23, or Month: 1-12) be encoded so that 23:00 and 00:00 are recognized as adjacent?",
    codeSnippet: "# Cyclical sine/cosine transformation:\nimport numpy as np\ndf['hour_sin'] = np.sin(2 * np.pi * df['hour'] / 24.0)\ndf['hour_cos'] = np.cos(2 * np.pi * df['hour'] / 24.0)",
    options: [
      "By transforming the feature into two cyclical trigonometric components using Sine and Cosine",
      "By treating hour as a random category string",
      "By squaring the hour values",
      "By subtracting 24 from every hour"
    ],
    correctAnswer: 0,
    explanation: "If left as integers 0-23, a model treats 23 and 0 as maximum distance apart (23 units). Transforming hours via sin(2\u03c0*h/24) and cos(2\u03c0*h/24) maps time onto a 2D circle where 23:00 and 00:00 are naturally continuous.",
    officialRef: "PCEI-30-01 Block 3.3 - Cyclical Features",
    tags: ["cyclical-features", "sine-cosine", "time-features"]
  },
  {
    id: "pcei-3-057",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Datetime Feature Extraction",
    difficulty: "Beginner",
    question: "What useful numerical and categorical features can be extracted from a pandas `datetime` column?",
    codeSnippet: "# Feature extraction from datetime:\ndf['year']        = df['date'].dt.year\ndf['month']       = df['date'].dt.month\ndf['dayofweek']   = df['date'].dt.dayofweek  # 0=Monday, 6=Sunday\ndf['is_weekend']  = df['date'].dt.dayofweek.isin([5, 6]).astype(int)",
    options: [
      "Year, month, day of month, day of week, hour, and weekend indicator flags",
      "CPU temperature and RAM clock speed",
      "The operating system version",
      "The geographic location of the satellite that computed the time"
    ],
    correctAnswer: 0,
    explanation: "A raw date string holds rich periodic patterns. Using the `.dt` accessor, engineers extract year, month, day, dayofweek, quarter, and is_weekend flags to feed models temporal seasonality.",
    officialRef: "PCEI-30-01 Block 3.3 - Datetime Extraction",
    tags: ["datetime", "feature-engineering", "temporal"]
  },
  {
    id: "pcei-3-058",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Text Vectorization",
    difficulty: "Beginner",
    question: "What does `CountVectorizer` in scikit-learn do to a collection of text documents?",
    codeSnippet: "# Bag-of-Words with CountVectorizer:\nfrom sklearn.feature_extraction.text import CountVectorizer\nvectorizer = CountVectorizer()\nX_counts = vectorizer.fit_transform(['AI is great', 'Python AI is powerful'])",
    options: [
      "Converts text documents into a matrix of token word counts (Bag-of-Words representation)",
      "Counts the physical bytes of the text file on the hard drive",
      "Translates text from English into Japanese",
      "Detects whether the text contains grammatical punctuation errors"
    ],
    correctAnswer: 0,
    explanation: "CountVectorizer converts a collection of text documents to a sparse matrix of token counts, implementing the classical Bag-of-Words representation where each unique word becomes a column.",
    officialRef: "PCEI-30-01 Block 3.3 - CountVectorizer",
    tags: ["countvectorizer", "bag-of-words", "text-features"]
  },
  {
    id: "pcei-3-059",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "TF-IDF Vectorization",
    difficulty: "Intermediate",
    question: "Why is `TfidfVectorizer` often preferred over simple `CountVectorizer` for text feature representation?",
    codeSnippet: "# TF-IDF weighting:\n# Downweights words that appear everywhere across all documents (e.g., 'the', 'is')\nfrom sklearn.feature_extraction.text import TfidfVectorizer\ntfidf = TfidfVectorizer()\nX_tfidf = tfidf.fit_transform(corpus)",
    options: [
      "It penalizes and downweights common filler words (like 'the', 'is') that appear across all documents, boosting distinctive informative keywords",
      "It runs 10 times faster than CountVectorizer",
      "It automatically generates realistic AI deepfake voices",
      "It converts text documents directly into PNG images"
    ],
    correctAnswer: 0,
    explanation: "TF-IDF (Term Frequency-Inverse Document Frequency) balances word frequency in a document with its rarity across the corpus, dampening common words that carry little discriminative information.",
    officialRef: "PCEI-30-01 Block 3.3 - TF-IDF",
    tags: ["tfidf", "nlp", "text-vectorization"]
  },
  {
    id: "pcei-3-060",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "ColumnTransformer",
    difficulty: "Intermediate",
    question: "What is the purpose of `ColumnTransformer` in scikit-learn pipelines?",
    codeSnippet: "# ColumnTransformer combines heterogeneous preprocessing:\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\npreprocessor = ColumnTransformer(transformers=[\n    ('num', StandardScaler(), ['age', 'salary']),\n    ('cat', OneHotEncoder(), ['department', 'gender'])\n])",
    options: [
      "To apply different preprocessing transformations (e.g., StandardScaler to numeric features, OneHotEncoder to categorical features) simultaneously within a single pipeline",
      "To change the physical column widths in an Excel spreadsheet",
      "To rename database columns to lowercase letters",
      "To delete columns that contain text data"
    ],
    correctAnswer: 0,
    explanation: "Real-world datasets contain mixed types. ColumnTransformer allows specifying different preprocessing transformers for different subsets of columns (numeric vs categorical), integrating cleanly into a single unified pipeline.",
    officialRef: "PCEI-30-01 Block 3.3 - ColumnTransformer",
    tags: ["columntransformer", "pipelines", "scikit-learn"]
  },
  {
    id: "pcei-3-061",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Central Tendency",
    difficulty: "Beginner",
    question: "What are the three primary statistical measures of 'Central Tendency'?",
    codeSnippet: "# Measures of central tendency in Python:\nmean_val   = df['score'].mean()\nmedian_val = df['score'].median()\nmode_val   = df['score'].mode()[0]",
    options: [
      "Mean, Median, and Mode",
      "Variance, Standard Deviation, and Range",
      "Precision, Recall, and F1-Score",
      "Entropy, Gini, and Information Gain"
    ],
    correctAnswer: 0,
    explanation: "The three classical measures of central tendency are the Mean (arithmetic average), Median (middle value when sorted), and Mode (most frequent value).",
    officialRef: "PCEI-30-01 Block 3.4 - Central Tendency",
    tags: ["mean", "median", "mode", "statistics"]
  },
  {
    id: "pcei-3-062",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Dispersion Metrics",
    difficulty: "Beginner",
    question: "What statistical property do Variance and Standard Deviation measure in a feature distribution?",
    codeSnippet: "# Variance and Standard Deviation in NumPy:\nvar_val = np.var(arr)   # Average squared deviation from the mean\nstd_val = np.std(arr)   # Square root of variance (in original units)",
    options: [
      "The degree of spread, dispersion, or variability of the data points around their mean",
      "The central point where 50% of values lie",
      "The number of rows in the dataset",
      "The rate at which the CPU processes instructions"
    ],
    correctAnswer: 0,
    explanation: "Variance and Standard Deviation quantify dispersion: how spread out the data points are around the arithmetic mean. Low standard deviation means points cluster tightly; high means points are spread widely.",
    officialRef: "PCEI-30-01 Block 3.4 - Dispersion",
    tags: ["variance", "standard-deviation", "spread"]
  },
  {
    id: "pcei-3-063",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Units of Dispersion",
    difficulty: "Intermediate",
    question: "Why is Standard Deviation (\u03c3) often easier to interpret in business reporting than Variance (\u03c3\u00b2)?",
    codeSnippet: "# Units comparison:\n# Salary data in dollars ($)\n# Variance: in squared dollars ($^2) -> Hard to interpret!\n# Std Dev:  in actual dollars ($)   -> Easily understood!",
    options: [
      "Standard deviation is expressed in the exact same units as the original data, whereas variance is expressed in squared units",
      "Standard deviation is always a whole integer, while variance is always a fraction",
      "Standard deviation can only be positive, while variance is always negative",
      "Variance requires specialized cloud software to calculate"
    ],
    correctAnswer: 0,
    explanation: "Because variance squares the deviations, its units are squared (e.g., dollars\u00b2 or meters\u00b2). Taking the square root gives standard deviation, restoring the original physical unit of measurement (e.g., dollars or meters).",
    officialRef: "PCEI-30-01 Block 3.4 - Standard Deviation Units",
    tags: ["std-dev", "variance", "units"]
  },
  {
    id: "pcei-3-064",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Pearson Correlation",
    difficulty: "Beginner",
    question: "What is the mathematical range of the Pearson Correlation Coefficient (r), and what does r = -1.0 signify?",
    codeSnippet: "# Pearson correlation:\n# Range: -1.0 to +1.0\n# +1.0: Perfect positive linear relationship\n#  0.0: No linear relationship\n# -1.0: Perfect negative (inverse) linear relationship\ncorr_matrix = df.corr()",
    options: [
      "Ranges from -1.0 to +1.0; -1.0 indicates a perfect negative (inverse) linear relationship",
      "Ranges from 0.0 to 100.0; -1.0 indicates an error",
      "Ranges from -infinity to +infinity; -1.0 indicates weak correlation",
      "Ranges from 0.0 to 1.0; -1.0 is mathematically impossible"
    ],
    correctAnswer: 0,
    explanation: "Pearson's r ranges from -1.0 to +1.0. A value of +1.0 indicates a perfect positive linear relationship; 0 indicates no linear correlation; -1.0 indicates a perfect inverse linear relationship (as X increases, Y decreases).",
    officialRef: "PCEI-30-01 Block 3.4 - Pearson Correlation",
    tags: ["pearson-correlation", "linear-relationship", "eda"]
  },
  {
    id: "pcei-3-065",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Correlation vs Causation",
    difficulty: "Beginner",
    question: "Why is the principle 'Correlation does not imply Causation' critical in AI and data analysis?",
    codeSnippet: "# Spurious correlation example:\n# High ice cream sales correlate with high drowning rates\n# Confounding variable: Hot summer weather causes BOTH!",
    options: [
      "Just because two variables share a statistical correlation does not mean that one variable causes the other; a confounding third variable may drive both",
      "Correlation algorithms are mathematically flawed and should never be used",
      "Causation can only be proven using neural networks with 100 layers",
      "Correlation is illegal in medical research"
    ],
    correctAnswer: 0,
    explanation: "Correlation simply measures co-movement. Confounding variables (e.g., hot weather driving both ice cream sales and swimming drownings) often create strong spurious correlations where no direct causal link exists.",
    officialRef: "PCEI-30-01 Block 3.4 - Correlation vs Causation",
    tags: ["correlation", "causation", "confounding-variables"]
  },
  {
    id: "pcei-3-066",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Non-Linear Correlation",
    difficulty: "Intermediate",
    question: "If two variables have a perfect non-linear U-shaped relationship (e.g., y = x\u00b2 where x spans -10 to +10), what will Pearson's r approximately equal?",
    codeSnippet: "# Pearson r on symmetric quadratic curve:\nimport numpy as np\nx = np.linspace(-10, 10, 100)\ny = x ** 2\nr = np.corrcoef(x, y)[0, 1]  # r is approximately 0.0!",
    options: [
      "Approximately 0.0, because Pearson correlation only measures strictly linear relationships",
      "1.0, because the relationship is deterministic",
      "-1.0, because the curve goes down first",
      "0.5, because half the curve is positive"
    ],
    correctAnswer: 0,
    explanation: "Pearson's r evaluates strictly linear relationships. For symmetric non-linear functions (like y = x\u00b2 centered at 0), Pearson correlation yields 0.0 despite the variables being completely and deterministically dependent.",
    officialRef: "PCEI-30-01 Block 3.4 - Non-Linear Correlation",
    tags: ["pearson", "non-linear", "limitations"]
  },
  {
    id: "pcei-3-067",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Spearman Rank Correlation",
    difficulty: "Intermediate",
    question: "When is Spearman's Rank Correlation preferred over Pearson's Correlation?",
    codeSnippet: "# Spearman rank correlation in pandas:\nspearman_corr = df.corr(method='spearman')",
    options: [
      "When evaluating monotonic non-linear relationships or ordinal ranked data, as it is less sensitive to extreme outliers than Pearson",
      "When data is strictly normal and linear",
      "When datasets have fewer than 10 total samples",
      "When calculating correlations on audio speech signals"
    ],
    correctAnswer: 0,
    explanation: "Spearman's rank correlation assesses monotonic relationships based on ranked values rather than raw values, making it robust against non-linear monotonic curves and severe outliers.",
    officialRef: "PCEI-30-01 Block 3.4 - Spearman Correlation",
    tags: ["spearman", "rank-correlation", "monotonic"]
  },
  {
    id: "pcei-3-068",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Skewness",
    difficulty: "Intermediate",
    question: "What does 'Skewness' describe about a feature's probability distribution?",
    codeSnippet: "# Skewness in pandas:\nskew_val = df['income'].skew()\n# skew > 0: Right-skewed (long tail to the right)\n# skew < 0: Left-skewed  (long tail to the left)\n# skew == 0: Symmetric (normal bell curve)",
    options: [
      "The asymmetry of the probability distribution around its mean (positive/right-skewed vs negative/left-skewed)",
      "The total area under the probability density curve",
      "The maximum height of the distribution peak",
      "The rate at which the dataset was downloaded from the server"
    ],
    correctAnswer: 0,
    explanation: "Skewness measures distribution asymmetry. Positive skewness (right-skewed) means the right tail is longer with mass concentrated on the left (e.g., income). Negative skewness (left-skewed) means a long left tail.",
    officialRef: "PCEI-30-01 Block 3.4 - Skewness",
    tags: ["skewness", "asymmetry", "distribution"]
  },
  {
    id: "pcei-3-069",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Kurtosis",
    difficulty: "Intermediate",
    question: "What does 'Kurtosis' quantify regarding a probability distribution?",
    codeSnippet: "# Kurtosis in pandas:\nkurt_val = df['returns'].kurt()\n# High kurtosis (leptokurtic): Heavy tails, prone to extreme outliers (fat tails)",
    options: [
      "The 'tailedness' and propensity of the distribution to produce extreme outlier values (fat tails)",
      "The horizontal shift of the distribution mean",
      "The number of missing values in the column",
      "The frequency of string capitalization errors"
    ],
    correctAnswer: 0,
    explanation: "Kurtosis measures the weight of the distribution tails relative to the center. High kurtosis (leptokurtic, 'fat tails') indicates that extreme outlier events happen much more frequently than in a normal Gaussian distribution.",
    officialRef: "PCEI-30-01 Block 3.4 - Kurtosis",
    tags: ["kurtosis", "fat-tails", "outlier-risk"]
  },
  {
    id: "pcei-3-070",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Summary Statistics",
    difficulty: "Beginner",
    question: "Which pandas method outputs a comprehensive statistical summary including count, mean, std, min, 25%, 50%, 75%, and max for numerical columns?",
    codeSnippet: "import pandas as pd\n# Generate summary statistics:\nsummary_table = df.describe()",
    options: [
      "df.describe()",
      "df.summary()",
      "df.stats()",
      "df.aggregate()"
    ],
    correctAnswer: 0,
    explanation: "df.describe() generates descriptive summary statistics for all numeric columns: count, mean, standard deviation, minimum, 25th percentile (Q1), median (50%), 75th percentile (Q3), and maximum.",
    officialRef: "PCEI-30-01 Block 3.4 - df.describe",
    tags: ["pandas", "describe", "summary-statistics"]
  },
  {
    id: "pcei-3-071",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Normal Distribution Properties",
    difficulty: "Beginner",
    question: "In a perfectly symmetrical Normal (Gaussian) distribution, what is the relationship between the Mean, Median, and Mode?",
    codeSnippet: "# Normal distribution property:\n# Mean == Median == Mode (all coincide at the center peak)",
    options: [
      "Mean = Median = Mode (all three central values coincide at the center peak)",
      "Mean > Median > Mode",
      "Mode > Median > Mean",
      "Mean is double the Median"
    ],
    correctAnswer: 0,
    explanation: "In a unimodal, perfectly symmetric Normal distribution, the mean, median, and mode are identical and sit directly at the peak center of the bell curve.",
    officialRef: "PCEI-30-01 Block 3.4 - Normal Distribution",
    tags: ["gaussian", "symmetry", "central-tendency"]
  },
  {
    id: "pcei-3-072",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Empirical Rule",
    difficulty: "Intermediate",
    question: "According to the 68-95-99.7 Empirical Rule for normal distributions, what percentage of observations fall within two standard deviations (\u00b12\u03c3) of the mean?",
    codeSnippet: "# Empirical rule:\n# \u00b11 sigma: ~68.2%\n# \u00b12 sigma: ~95.4%\n# \u00b13 sigma: ~99.7%",
    options: [
      "Approximately 95%",
      "Approximately 68%",
      "Approximately 99.7%",
      "Approximately 50%"
    ],
    correctAnswer: 0,
    explanation: "The empirical (three-sigma) rule states that for a normal distribution, ~68% of data lies within 1 standard deviation, ~95% lies within 2 standard deviations, and ~99.7% lies within 3 standard deviations of the mean.",
    officialRef: "PCEI-30-01 Block 3.4 - Empirical Rule",
    tags: ["empirical-rule", "three-sigma", "standard-deviation"]
  },
  {
    id: "pcei-3-073",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Multicollinearity",
    difficulty: "Intermediate",
    question: "What is 'Multicollinearity' and why is it problematic in multiple linear regression?",
    codeSnippet: "# Multicollinearity:\n# Feature A (Height in cm) and Feature B (Height in inches) are 100% correlated!\n# Causes unstable coefficient estimates and high p-values",
    options: [
      "When two or more independent features are highly linearly correlated with each other, making coefficient estimates unstable and uninterpretable",
      "When a dataset contains multiple target variables",
      "When numbers are displayed in multiple colors on a screen",
      "When a regression model produces zero error"
    ],
    correctAnswer: 0,
    explanation: "Multicollinearity occurs when predictor features are strongly correlated with one another. This causes high variance in regression coefficient estimates, making it impossible to isolate the individual effect of each feature.",
    officialRef: "PCEI-30-01 Block 3.4 - Multicollinearity",
    tags: ["multicollinearity", "linear-regression", "vif"]
  },
  {
    id: "pcei-3-074",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "VIF Metric",
    difficulty: "Advanced",
    question: "What diagnostic metric is standard for detecting multicollinearity among features in regression analysis?",
    codeSnippet: "# Variance Inflation Factor (VIF):\n# VIF > 5 or 10 indicates severe multicollinearity\nfrom statsmodels.stats.outliers_influence import variance_inflation_factor",
    options: [
      "Variance Inflation Factor (VIF)",
      "Area Under the Curve (AUC)",
      "Mean Absolute Percentage Error (MAPE)",
      "Gini Impurity Index"
    ],
    correctAnswer: 0,
    explanation: "Variance Inflation Factor (VIF) measures how much the variance of an estimated regression coefficient increases due to collinearity with other features. VIF values exceeding 5 or 10 signal severe multicollinearity.",
    officialRef: "PCEI-30-01 Block 3.4 - VIF",
    tags: ["vif", "variance-inflation-factor", "multicollinearity"]
  },
  {
    id: "pcei-3-075",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Anscombe Quartet",
    difficulty: "Intermediate",
    question: "What fundamental lesson does 'Anscombe's Quartet' illustrate to data scientists?",
    codeSnippet: "# Anscombe's Quartet:\n# Four distinct datasets with IDENTICAL means, variances, and regression lines,\n# yet completely different shapes and distributions when plotted visually!",
    options: [
      "Statistical summaries (mean, variance, correlation) can be identical across radically different datasets, proving that visualizing data graphically is essential",
      "Linear regression is mathematically immune to all outliers",
      "Datasets should never contain more than four columns",
      "Statistical charts should always be rendered in black and white"
    ],
    correctAnswer: 0,
    explanation: "Anscombe's Quartet consists of four datasets with identical basic summary statistics (mean, variance, regression line, r = 0.816) that reveal wildly different distributions and outliers when plotted, proving the necessity of EDA visualization.",
    officialRef: "PCEI-30-01 Block 3.4 - Anscombe's Quartet",
    tags: ["anscombes-quartet", "visualization-importance", "eda"]
  },
  {
    id: "pcei-3-076",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Covariance",
    difficulty: "Intermediate",
    question: "What is the mathematical difference between Covariance and Correlation?",
    codeSnippet: "# Covariance depends on units: Cov(X, Y) = E[(X - \u03bc_X)(Y - \u03bc_Y)]\n# Correlation is standardized (unitless): Corr(X, Y) = Cov(X, Y) / (\u03c3_X * \u03c3_Y)",
    options: [
      "Covariance measures direction of joint variability in raw data units, while Correlation is standardized by standard deviations to be scale-invariant (-1 to +1)",
      "Covariance only measures negative numbers, while correlation only measures positive numbers",
      "Covariance requires deep learning, while correlation requires basic arithmetic",
      "There is no difference; they are exact technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "Covariance indicates the direction of a linear relationship, but its magnitude depends on the units of measurement. Correlation normalizes covariance by dividing by the product of standard deviations, yielding a scale-free value between -1 and +1.",
    officialRef: "PCEI-30-01 Block 3.4 - Covariance vs Correlation",
    tags: ["covariance", "correlation", "scale-invariance"]
  },
  {
    id: "pcei-3-077",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Quantiles & Percentiles",
    difficulty: "Beginner",
    question: "What does the 75th Percentile (Q3) of a test score distribution represent?",
    codeSnippet: "# Quantile in pandas:\nq3_score = df['score'].quantile(0.75)",
    options: [
      "The score below which 75% of all observations fall",
      "A score equal to 75 out of 100 points",
      "The average score of the top 25 students",
      "The percentage of students who failed the exam"
    ],
    correctAnswer: 0,
    explanation: "A percentile indicates the value below which a given percentage of observations fall. The 75th percentile (Q3) means that 75% of the data points have values equal to or less than this threshold.",
    officialRef: "PCEI-30-01 Block 3.4 - Percentiles",
    tags: ["percentiles", "quantiles", "q3"]
  },
  {
    id: "pcei-3-078",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Interquartile Range",
    difficulty: "Beginner",
    question: "How is the Interquartile Range (IQR) calculated?",
    codeSnippet: "# IQR calculation:\niqr = df['salary'].quantile(0.75) - df['salary'].quantile(0.25)",
    options: [
      "IQR = Q3 - Q1 (75th percentile minus 25th percentile)",
      "IQR = Maximum value - Minimum value",
      "IQR = Mean / Standard deviation",
      "IQR = Median * 2"
    ],
    correctAnswer: 0,
    explanation: "The Interquartile Range (IQR) represents the spread of the middle 50% of the dataset, calculated by subtracting the first quartile (25th percentile) from the third quartile (75th percentile): IQR = Q3 - Q1.",
    officialRef: "PCEI-30-01 Block 3.4 - IQR",
    tags: ["iqr", "spread", "percentiles"]
  },
  {
    id: "pcei-3-079",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "Simpson Paradox",
    difficulty: "Advanced",
    question: "What is 'Simpson's Paradox' in exploratory data analysis?",
    codeSnippet: "# Simpson's Paradox:\n# A trend appears in several groups of data, but disappears or reverses when groups are aggregated together!",
    options: [
      "A statistical phenomenon where a trend appears in individual subgroup analyses, but reverses or disappears when the subgroups are aggregated together",
      "An error where a Python loop executes infinitely",
      "A paradox where adding more RAM makes computer programs run slower",
      "A situation where all neural network weights converge to zero"
    ],
    correctAnswer: 0,
    explanation: "Simpson's Paradox occurs when aggregated group data conceals or inverts the true relationship present within individual demographic subgroups, usually caused by an overlooked confounding variable.",
    officialRef: "PCEI-30-01 Block 3.4 - Simpson's Paradox",
    tags: ["simpsons-paradox", "confounding", "aggregation"]
  },
  {
    id: "pcei-3-080",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.4",
    category: "EDA Purpose",
    difficulty: "Beginner",
    question: "What is the ultimate purpose of Exploratory Data Analysis (EDA) prior to machine learning modeling?",
    codeSnippet: "# EDA objectives:\n# Understand data structure, detect anomalies/outliers, test hypotheses, uncover patterns, and guide feature engineering",
    options: [
      "To understand data structure, detect anomalies, verify assumptions, uncover patterns, and guide appropriate feature engineering and model selection",
      "To immediately deploy a 100-layer neural network to production",
      "To convert all tabular datasets into compressed PDF manuals",
      "To eliminate the need for computer programming"
    ],
    correctAnswer: 0,
    explanation: "EDA is the foundational phase where practitioners investigate datasets, summarize main characteristics, spot outliers and missingness, evaluate distributions, and formulate hypotheses to guide feature engineering and modeling.",
    officialRef: "PCEI-30-01 Block 3.4 - EDA Purpose",
    tags: ["eda", "methodology", "data-science"]
  },
  {
    id: "pcei-3-081",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Histogram",
    difficulty: "Beginner",
    question: "What is the primary purpose of a 'Histogram' in exploratory data analysis?",
    codeSnippet: "# Plotting a histogram in matplotlib:\nimport matplotlib.pyplot as plt\nplt.hist(df['age'], bins=20, edgecolor='black')\nplt.show()",
    options: [
      "To visualize the frequency distribution, shape, skewness, and spread of a single continuous numerical variable",
      "To plot the exact geographical coordinates of GPS tracking units",
      "To show relationships between two independent categorical features",
      "To display hierarchical organizational chart structures"
    ],
    correctAnswer: 0,
    explanation: "A histogram bins continuous numerical data into discrete intervals and counts the occurrences in each bin, displaying the shape, modality, center, and skewness of the underlying distribution.",
    officialRef: "PCEI-30-01 Block 3.5 - Histogram",
    tags: ["histogram", "distribution", "visualization"]
  },
  {
    id: "pcei-3-082",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Scatter Plot",
    difficulty: "Beginner",
    question: "Which chart type is standard for visualizing the relationship and correlation between two continuous numerical variables?",
    codeSnippet: "# Scatter plot in matplotlib:\nplt.scatter(df['square_feet'], df['price'], alpha=0.5)\nplt.xlabel('Square Feet')\nplt.ylabel('Price')\nplt.show()",
    options: [
      "Scatter Plot",
      "Pie Chart",
      "Stacked Bar Chart",
      "Treemap"
    ],
    correctAnswer: 0,
    explanation: "A scatter plot plots individual observation pairs along Cartesian X and Y axes, making it the premier tool for visually assessing linear or non-linear correlation, clustering, and bivariate outliers.",
    officialRef: "PCEI-30-01 Block 3.5 - Scatter Plot",
    tags: ["scatter-plot", "bivariate", "correlation"]
  },
  {
    id: "pcei-3-083",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Box Plot",
    difficulty: "Beginner",
    question: "What five summary statistics are visually represented by the five horizontal lines of a standard 'Box Plot' (Box-and-Whisker plot)?",
    codeSnippet: "# Box plot components:\n# Minimum (Q1 - 1.5*IQR), Q1 (25%), Median (50%), Q3 (75%), Maximum (Q3 + 1.5*IQR)\n# Individual points beyond whiskers are plotted as outlier dots!\nimport seaborn as sns\nsns.boxplot(x=df['salary'])",
    options: [
      "Minimum (Q1 - 1.5*IQR), First Quartile (Q1), Median, Third Quartile (Q3), and Maximum (Q3 + 1.5*IQR)",
      "Mean, Mode, Variance, Standard deviation, and Kurtosis",
      "Training loss, Validation loss, Accuracy, F1-score, and AUC",
      "Zero, One, Ten, Fifty, and One Hundred"
    ],
    correctAnswer: 0,
    explanation: "A box plot visualizes Tukey's 5-number summary: lower whisker (Q1 - 1.5*IQR), bottom box (Q1), line inside box (Median), top box (Q3), and upper whisker (Q3 + 1.5*IQR), with individual dots marking outliers.",
    officialRef: "PCEI-30-01 Block 3.5 - Box Plot",
    tags: ["box-plot", "outliers", "five-number-summary"]
  },
  {
    id: "pcei-3-084",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Heatmap",
    difficulty: "Beginner",
    question: "How is a Seaborn 'Heatmap' used to evaluate feature relationships across a dataset?",
    codeSnippet: "# Correlation heatmap in Seaborn:\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ncorr = df.corr()\nsns.heatmap(corr, annot=True, cmap='coolwarm', vmin=-1, vmax=1)\nplt.show()",
    options: [
      "To display a 2D color-coded matrix of pairwise correlation coefficients, allowing instant visual identification of strong correlations and multicollinearity",
      "To measure the thermal temperature of server cooling fans",
      "To show satellite thermal weather imagery",
      "To display color-coded source code syntax highlighting"
    ],
    correctAnswer: 0,
    explanation: "sns.heatmap(df.corr(), annot=True) renders a color-coded matrix of pairwise Pearson correlations, enabling rapid visual triage of multicollinear feature pairs and features strongly correlated with the target.",
    officialRef: "PCEI-30-01 Block 3.5 - Heatmap",
    tags: ["heatmap", "correlation-matrix", "seaborn"]
  },
  {
    id: "pcei-3-085",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Bar Chart vs Histogram",
    difficulty: "Beginner",
    question: "What is the difference between a Bar Chart and a Histogram?",
    codeSnippet: "# Bar chart: Discrete categories on X-axis\n# Histogram: Continuous quantitative bins on X-axis",
    options: [
      "A Bar Chart displays frequencies of discrete categorical categories; a Histogram displays continuous numerical data grouped into range bins",
      "A Bar Chart is strictly 3D, while a Histogram is 2D",
      "A Histogram can only be rendered in grayscale",
      "There is no difference; they are exact technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "Bar charts plot distinct categorical levels (with spaces between bars representing discrete categories). Histograms plot continuous quantitative variables grouped into adjacent bins without artificial gaps.",
    officialRef: "PCEI-30-01 Block 3.5 - Bar Chart vs Histogram",
    tags: ["bar-chart", "histogram", "data-types"]
  },
  {
    id: "pcei-3-086",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Pairplot",
    difficulty: "Intermediate",
    question: "What does Seaborn's `sns.pairplot(df, hue='class')` generate?",
    codeSnippet: "# Pairplot in Seaborn:\nimport seaborn as sns\nsns.pairplot(df, hue='species')\n# Generates a grid of scatter plots for all feature pairs + histograms on diagonal!",
    options: [
      "A grid of pairwise scatter plots for all numerical features, with univariate distribution plots along the diagonal, color-coded by class",
      "A pair of audio files comparing speech models",
      "A line plot showing GPU memory versus CPU memory",
      "A single pie chart divided into two halves"
    ],
    correctAnswer: 0,
    explanation: "sns.pairplot() visualizes pairwise bivariate relationships across every numeric feature combination in a multi-panel matrix grid, with univariate histograms/KDEs along the diagonal and class color coding.",
    officialRef: "PCEI-30-01 Block 3.5 - Pairplot",
    tags: ["pairplot", "seaborn", "multivariate-eda"]
  },
  {
    id: "pcei-3-087",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Violin Plot",
    difficulty: "Intermediate",
    question: "What does a 'Violin Plot' combine that makes it richer than a traditional Box Plot?",
    codeSnippet: "# Violin plot in Seaborn:\nsns.violinplot(x='category', y='value', data=df)",
    options: [
      "A traditional box plot combined with a rotated Kernel Density Estimate (KDE) plot on each side, showing distribution multimodal peaks",
      "An acoustic waveform audio player with a line chart",
      "A bar chart combined with an operating system terminal window",
      "A 3D surface mesh plot with musical notation"
    ],
    correctAnswer: 0,
    explanation: "A violin plot displays the same summary statistics as a box plot (median, interquartile range), but extends it with a mirrored kernel density plot, revealing multimodality (multiple peaks) that box plots hide.",
    officialRef: "PCEI-30-01 Block 3.5 - Violin Plot",
    tags: ["violin-plot", "kde", "distribution"]
  },
  {
    id: "pcei-3-088",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Matplotlib Subplots",
    difficulty: "Intermediate",
    question: "How do you instantiate a figure with a 2x2 grid of subplots in Matplotlib?",
    codeSnippet: "import matplotlib.pyplot as plt\n# Create 2 rows and 2 columns of subplots:\nfig, axes = plt.subplots(nrows=2, ncols=2, figsize=(10, 8))",
    options: [
      "fig, axes = plt.subplots(2, 2)",
      "fig = plt.grid(4)",
      "fig = plt.multi_chart(2, 2)",
      "fig, axes = plt.create_panels(4)"
    ],
    correctAnswer: 0,
    explanation: "plt.subplots(nrows, ncols) returns a Figure object and a 2D NumPy array of Axes objects (axes[0, 0], axes[0, 1]...) allowing programmatic plotting across a clean multi-panel canvas.",
    officialRef: "PCEI-30-01 Block 3.5 - Subplots",
    tags: ["matplotlib", "subplots", "layout"]
  },
  {
    id: "pcei-3-089",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Line Plot",
    difficulty: "Beginner",
    question: "When is a Line Plot (`plt.plot()`) the most appropriate choice of visualization?",
    codeSnippet: "# Line plot for time series:\nplt.plot(df['date'], df['daily_sales'])\nplt.xlabel('Date')\nplt.ylabel('Sales ($)')",
    options: [
      "When visualizing how continuous quantitative metrics evolve sequentially over time (Time Series data)",
      "When displaying the percentage breakdown of survey respondents' favorite fruits",
      "When clustering unlabeled customer demographic points in 2D space",
      "When displaying pairwise feature correlation matrices"
    ],
    correctAnswer: 0,
    explanation: "Line plots connect sequential data points with continuous line segments, making them ideal for tracking trends, cycles, and volatility in time series and sequential ordered processes.",
    officialRef: "PCEI-30-01 Block 3.5 - Line Plot",
    tags: ["line-plot", "time-series", "trends"]
  },
  {
    id: "pcei-3-090",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Residual Plot",
    difficulty: "Intermediate",
    question: "In regression diagnostics, what should a healthy, well-specified 'Residual Plot' (residuals vs predicted values) look like?",
    codeSnippet: "# Residual plot diagnostics:\nresiduals = y_test - y_pred\nplt.scatter(y_pred, residuals)\nplt.axhline(0, color='red', linestyle='--')\n# Ideal: Random, uniform scatter around zero line with constant variance (homoscedasticity)",
    options: [
      "Points should be randomly, uniformly scattered around the horizontal zero line with no obvious patterns or funnel shapes",
      "Points should form a tight curved U-shape line",
      "Points should form an expanding funnel shape",
      "Points should all lie strictly on the positive side of the line"
    ],
    correctAnswer: 0,
    explanation: "In an ideal regression model, residuals exhibit homoscedasticity: errors scatter randomly and uniformly around 0 across all prediction levels. Funnel shapes signal heteroscedasticity; curves signal unmodeled non-linearity.",
    officialRef: "PCEI-30-01 Block 3.5 - Residual Plot",
    tags: ["residual-plot", "homoscedasticity", "regression-diagnostics"]
  },
  {
    id: "pcei-3-091",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Countplot",
    difficulty: "Beginner",
    question: "Which Seaborn function generates a categorical frequency bar chart for class balance inspection?",
    codeSnippet: "# Inspecting class distribution in Seaborn:\nimport seaborn as sns\nsns.countplot(x='churn', data=df)",
    options: [
      "sns.countplot()",
      "sns.freq_bars()",
      "sns.bar_freq()",
      "sns.count_matrix()"
    ],
    correctAnswer: 0,
    explanation: "sns.countplot() shows the counts of observations in each categorical bin using bars, making it the primary visualization for inspecting class balance (e.g., checking if Churn=1 is heavily outnumbered).",
    officialRef: "PCEI-30-01 Block 3.5 - Countplot",
    tags: ["countplot", "class-balance", "seaborn"]
  },
  {
    id: "pcei-3-092",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Confusion Matrix Display",
    difficulty: "Intermediate",
    question: "How is a Confusion Matrix best communicated visually to both technical and non-technical stakeholders?",
    codeSnippet: "# Visualizing confusion matrix in scikit-learn:\nfrom sklearn.metrics import ConfusionMatrixDisplay\nConfusionMatrixDisplay.from_predictions(y_test, y_pred, cmap='Blues')",
    options: [
      "As a color-coded heatmap with counts and percentages annotated in each quadrant, clearly labeling True Positives, False Positives, True Negatives, and False Negatives",
      "As an unformatted text list of raw floating-point numbers",
      "As a single 3D pie chart",
      "As an animated line plot that loops continuously"
    ],
    correctAnswer: 0,
    explanation: "Using ConfusionMatrixDisplay with a color gradient (heatmap) and numerical annotations makes misclassification patterns (e.g., high False Positives vs False Negatives) immediately legible.",
    officialRef: "PCEI-30-01 Block 3.5 - Confusion Matrix Display",
    tags: ["confusion-matrix-display", "heatmap", "communication"]
  },
  {
    id: "pcei-3-093",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Learning Curves",
    difficulty: "Intermediate",
    question: "What do 'Learning Curves' (plotting Training Loss and Validation Loss against Epochs) diagnose in model training?",
    codeSnippet: "# Learning curve visualization:\n# Epochs on X-axis, Loss on Y-axis\n# Diagnoses underfitting, overfitting, and learning rate issues",
    options: [
      "They diagnose whether a model is underfitting, overfitting, or converging properly over training iterations",
      "They measure the physical typing speed of the developer",
      "They track the depreciation of computer hardware over years",
      "They show the number of git commits made to the repository"
    ],
    correctAnswer: 0,
    explanation: "Learning curves plot training and validation loss per epoch. If training loss drops while validation loss begins rising, the model is overfitting; if both losses plateau high, the model is underfitting.",
    officialRef: "PCEI-30-01 Block 3.5 - Learning Curves",
    tags: ["learning-curves", "loss-curves", "diagnostics"]
  },
  {
    id: "pcei-3-094",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Pie Charts Critique",
    difficulty: "Beginner",
    question: "Why do data visualization experts generally discourage using Pie Charts for comparing categorical distributions?",
    codeSnippet: "# Visualization best practice:\n# Human perception struggles to compare 2D angles/slices accurately compared to 1D bar lengths",
    options: [
      "Human visual perception struggles to accurately judge and compare angles and 2D area slices compared to linear bar lengths",
      "Pie charts consume 10 times more computer memory to render",
      "Pie charts are not supported in Python libraries",
      "Pie charts can only be rendered with three slices"
    ],
    correctAnswer: 0,
    explanation: "Research in human visual perception shows that people judge lengths (bar charts) with much greater precision than angles or slice areas (pie charts), especially when categories have similar percentages.",
    officialRef: "PCEI-30-01 Block 3.5 - Pie Chart Critique",
    tags: ["pie-charts", "perception", "best-practices"]
  },
  {
    id: "pcei-3-095",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Colorblind Accessibility",
    difficulty: "Beginner",
    question: "Why is choosing accessible color palettes (like 'viridis' or 'cividis') considered a best practice in AI chart design?",
    codeSnippet: "# Accessible colormap in matplotlib:\nplt.imshow(matrix, cmap='viridis')",
    options: [
      "They are perceptually uniform and can be read clearly by individuals with color vision deficiencies (like red-green color blindness) and print legibly in grayscale",
      "They use brighter neon colors that distract the viewer",
      "They consume less electrical power on OLED monitors",
      "They are legally copyrighted by Python Institute"
    ],
    correctAnswer: 0,
    explanation: "Perceptually uniform colormaps like 'viridis' ensure equal visual weight across values, remain completely legible to color-blind individuals (avoiding red-green confusion), and convert cleanly to black-and-white print.",
    officialRef: "PCEI-30-01 Block 3.5 - Accessible Visualizations",
    tags: ["accessibility", "colorblind", "colormaps"]
  },
  {
    id: "pcei-3-096",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Log-Scale Plotting",
    difficulty: "Intermediate",
    question: "When is setting a logarithmic scale on a plot axis (`plt.yscale('log')`) essential?",
    codeSnippet: "# Log-scale plotting for exponential phenomena:\nplt.plot(iterations, loss_values)\nplt.yscale('log')",
    options: [
      "When data spans multiple orders of magnitude (e.g., from 0.001 to 1,000,000) or displays exponential growth/decay",
      "When all data values are negative numbers",
      "When plotting categorical bar charts",
      "When data is already normally distributed"
    ],
    correctAnswer: 0,
    explanation: "When data covers multiple powers of ten (e.g., wealth, population, or loss over training), linear scales compress smaller values into an unreadable flat line. A logarithmic axis reveals trends across all orders of magnitude.",
    officialRef: "PCEI-30-01 Block 3.5 - Log Scale",
    tags: ["log-scale", "orders-of-magnitude", "matplotlib"]
  },
  {
    id: "pcei-3-097",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Interactive Plots",
    difficulty: "Beginner",
    question: "What capability do interactive plotting libraries like Plotly provide over static Matplotlib charts?",
    codeSnippet: "# Plotly interactive visualization:\nimport plotly.express as px\nfig = px.scatter(df, x='age', y='income', hover_data=['name'])",
    options: [
      "They allow users to hover over data points to inspect metadata, zoom, pan, and filter categories dynamically in a web browser",
      "They convert Python code into native Android APK packages",
      "They run machine learning algorithms on graphics card processors",
      "They prevent users from copying chart data"
    ],
    correctAnswer: 0,
    explanation: "Interactive tools like Plotly generate HTML/JavaScript visualizations enabling tooltips on hover, dynamic click-to-filter legends, box-zooming, and panning, greatly enhancing exploratory data inspection.",
    officialRef: "PCEI-30-01 Block 3.5 - Interactive Visualizations",
    tags: ["plotly", "interactive", "tooltips"]
  },
  {
    id: "pcei-3-098",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "KDE Plot",
    difficulty: "Intermediate",
    question: "What does a Kernel Density Estimation (KDE) plot represent?",
    codeSnippet: "# KDE plot in Seaborn:\nsns.kdeplot(data=df['income'], fill=True)",
    options: [
      "A smooth, continuous estimate of the probability density function of a random variable, derived by summing Gaussian kernels placed at each data point",
      "A line plot showing kernel crash errors in the Linux operating system",
      "A 3D rendering of a computer processor cooling unit",
      "A diagram showing SQL database table relationships"
    ],
    correctAnswer: 0,
    explanation: "KDE is a non-parametric way to estimate the probability density function of a continuous variable. It smooths out discrete histogram bin artifacts by placing a continuous kernel (typically Gaussian) over each observation.",
    officialRef: "PCEI-30-01 Block 3.5 - KDE",
    tags: ["kde", "kernel-density", "probability-density"]
  },
  {
    id: "pcei-3-099",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Feature Importance Plot",
    difficulty: "Intermediate",
    question: "Why is a horizontal bar chart of Feature Importances standard in model interpretation reports?",
    codeSnippet: "# Plotting feature importances:\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfeat_imp = pd.Series(model.feature_importances_, index=feature_names).sort_values()\nfeat_imp.plot(kind='barh')\nplt.title('Feature Importances')",
    options: [
      "It ranks and visually communicates which input features contributed most significantly to the model's predictions, providing transparency to stakeholders",
      "It measures the download speed of each column from the cloud",
      "It counts the number of characters in each feature name",
      "It displays the salary of each data scientist on the team"
    ],
    correctAnswer: 0,
    explanation: "Plotting feature importances as a ranked horizontal bar chart provides an intuitive visual summary of which features drive the model's decisions, helping domain experts validate model logic and verify fairness.",
    officialRef: "PCEI-30-01 Block 3.5 - Feature Importance Plot",
    tags: ["feature-importance", "model-explainability", "bar-chart"]
  },
  {
    id: "pcei-3-100",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.5",
    category: "Misleading Charts",
    difficulty: "Beginner",
    question: "What common deceptive chart practice distorts visual comparisons on bar charts?",
    codeSnippet: "# Deceptive visualization practice:\n# Truncating Y-axis (e.g., starting Y at 95 instead of 0) exaggerates tiny 1% differences into massive visual bars!",
    options: [
      "Truncating the Y-axis (not starting at zero), which visually exaggerates tiny, insignificant differences into massive gaps",
      "Using black font color for axis titles",
      "Adding gridlines to aid readability",
      "Including a descriptive title and axis labels"
    ],
    correctAnswer: 0,
    explanation: "Starting a bar chart Y-axis above zero truncates the baseline, causing small, inconsequential percentage variations (e.g., 98% vs 99%) to appear as dramatic visual differences, misleading non-technical viewers.",
    officialRef: "PCEI-30-01 Block 3.5 - Deceptive Visualizations",
    tags: ["deceptive-charts", "y-axis-truncation", "ethics"]
  }
];
