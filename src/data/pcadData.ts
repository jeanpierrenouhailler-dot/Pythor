import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcadSection1Flashcards } from './pcadSection1Flashcards';
import { pcadSection2Flashcards } from './pcadSection2Flashcards';
import { pcadSection3Flashcards } from './pcadSection3Flashcards';
import { pcadSection4Flashcards } from './pcadSection4Flashcards';
import { pcadSection5Flashcards } from './pcadSection5Flashcards';

export const pcadTrackInfo: CertificationTrackInfo = {
  id: 'pcad',
  code: 'PCAD-31-02',
  name: 'Certified Associate Data Analyst with Python',
  shortName: 'PCAD',
  level: 'Associate Data Analyst',
  officialRef: 'OpenEDG Python Institute PCAD-31-02',
  totalSections: 5,
  durationMinutes: 65,
  questionCount: 45,
  passingScore: 70,
  description:
    'Validates professional proficiency in data acquisition, pre-processing, wrangling, complex transformations, SQL/RDBMS integration, Python data architecture, exploratory data analysis, inferential statistics, predictive modeling, machine learning pipelines, and executive data communication and visualization with Python (NumPy, pandas, SciPy, statsmodels, scikit-learn, Matplotlib, Seaborn, and Plotly).',
};

export const pcadSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcad-section-1',
    number: 1,
    title: 'Data Acquisition and Pre-Processing',
    weight: '18.8%',
    description:
      'Mastering ingestion across diverse formats (CSV, Excel, JSON, XML, Parquet, HDF5, SQL, web APIs), robust data cleansing, imputation of missing values (MCAR, MAR, MNAR), outlier detection (Z-scores, IQR fences, Isolation Forests), advanced string regex transformations, date/time parsing, indexing, multi-indexing, merging, joins, reshaping, melting, pivoting, and feature engineering (one-hot encoding, scaling, power transforms).',
    chapters: [
      { id: '1.1', title: 'Data Ingestion, Multi-Format Parsing & Web Ingestion', cardCount: 20 },
      { id: '1.2', title: 'Data Cleaning, Missing Data Imputation & Anomaly Detection', cardCount: 20 },
      { id: '1.3', title: 'Data Wrangling, Type Coercion & Vectorized String Operations', cardCount: 20 },
      { id: '1.4', title: 'Reshaping, Pivoting, Melting, Merging & Concatenation', cardCount: 20 },
      { id: '1.5', title: 'Feature Engineering, Categorical Encoding & Scalers', cardCount: 20 },
    ],
  },
  {
    id: 'pcad-section-2',
    number: 2,
    title: 'Programming and Database Skills',
    weight: '27.1%',
    description:
      'Advanced Python paradigms for data analysts (comprehensions, generators, collections module, higher-order functional tools, closures, custom decorators, OOP dataclasses), relational database management systems (ACID principles, normalization, indexing, execution plans), complex SQL queries (multi-table joins, subqueries, CTEs, window functions like ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG/LEAD), Python database connectivity (sqlite3, SQLAlchemy ORM/Core, psycopg2), connection pooling, and bidirectional pandas-SQL optimization.',
    chapters: [
      { id: '2.1', title: 'Python Advanced Data Structures & Memory Optimization', cardCount: 20 },
      { id: '2.2', title: 'Advanced Functional Tools, Closures, Decorators & Generators', cardCount: 20 },
      { id: '2.3', title: 'Relational Database Architecture, Normalization & Advanced SQL', cardCount: 20 },
      { id: '2.4', title: 'Python Database Connectivity: sqlite3, SQLAlchemy & psycopg2', cardCount: 20 },
      { id: '2.5', title: 'Pandas & SQL Integration, Query Optimization & Transactions', cardCount: 20 },
    ],
  },
  {
    id: 'pcad-section-3',
    number: 3,
    title: 'Statistical Analysis and Inference',
    weight: '22.9%',
    description:
      'Comprehensive statistical analysis with SciPy and statsmodels: exploratory data analysis, measures of central tendency and dispersion, skewness and kurtosis, theoretical discrete/continuous distributions (Binomial, Poisson, Normal, Student’s t, Log-Normal, Exponential, Chi-Square, F), sampling theory, Central Limit Theorem, confidence intervals, bootstrapping, null hypothesis significance testing, parametric/non-parametric tests (t-tests, Welch’s, Mann-Whitney U, Wilcoxon, One-Way ANOVA, Kruskal-Wallis, Chi-Square tests), effect sizes (Cohen’s d, Cramér’s V), multiple testing corrections (FDR, Bonferroni), and regression analysis (OLS, LINE diagnostics, heteroscedasticity, multicollinearity VIF, logistic regression odds ratios, time series decomposition, and stationarity tests).',
    chapters: [
      { id: '3.1', title: 'Descriptive Statistics & Exploratory Data Analysis (EDA)', cardCount: 20 },
      { id: '3.2', title: 'Theoretical Distributions & Probability Concepts', cardCount: 20 },
      { id: '3.3', title: 'Sampling Theory, Estimation & Central Limit Theorem', cardCount: 20 },
      { id: '3.4', title: 'Hypothesis Testing & Parametric/Non-Parametric Tests', cardCount: 20 },
      { id: '3.5', title: 'Categorical Tests, Regression & Applied Analytical Statistics', cardCount: 20 },
    ],
  },
  {
    id: 'pcad-section-4',
    number: 4,
    title: 'Data Analysis and Modeling',
    weight: '20.8%',
    description:
      'Predictive analytics, machine learning workflows, and modeling with Scikit-Learn: multivariate feature relationships, covariance and rank correlations, data pipeline architecture, data leakage prevention, ColumnTransformer, feature scaling, encoding strategies, supervised learning (linear regression, regularized Ridge/Lasso, logistic regression, decision trees, random forests, gradient boosting, KNN), classification and regression evaluation metrics (ROC-AUC, PR-AUC, F1, Log Loss, RMSE, MAE, R²), unsupervised learning (K-Means, DBSCAN, hierarchical clustering, PCA dimensionality reduction), cross-validation strategies, and hyperparameter tuning (GridSearchCV, RandomizedSearchCV).',
    chapters: [
      { id: '4.1', title: 'Exploratory Feature Relationships, Covariance & Correlation', cardCount: 20 },
      { id: '4.2', title: 'Data Pipelines, Validation & Aggregation Integrity', cardCount: 20 },
      { id: '4.3', title: 'Machine Learning Preprocessing & Scikit-Learn Pipelines', cardCount: 20 },
      { id: '4.4', title: 'Supervised Learning: Regression, Classification & Metrics', cardCount: 20 },
      { id: '4.5', title: 'Unsupervised Learning, Hyperparameter Tuning & Cross-Validation', cardCount: 20 },
    ],
  },
  {
    id: 'pcad-section-5',
    number: 5,
    title: 'Data Communication and Visualization',
    weight: '10.4%',
    description:
      'Communicating analytical insights with Matplotlib, Seaborn, and Plotly: Object-Oriented Matplotlib canvas hierarchy (Figure, Axes, subplots, GridSpec, twin axes), custom tick formatting, spines, uncertainty bands, error bars, perceptually uniform colormaps, Seaborn statistical plots (KDE, ECDF, boxen, violin, swarm, regplot, pairplot, clustermap), interactive dashboards and drill-downs with Plotly Express, Edward Tufte’s data-ink ratio, cognitive load theory, preattentive visual processing, ethical chart baselines, colorblind accessibility, and executive storytelling.',
    chapters: [
      { id: '5.1', title: 'Matplotlib Core Architecture: Figures, Axes & Subplots', cardCount: 20 },
      { id: '5.2', title: 'Matplotlib Styling, Annotations, Error Bars & Export', cardCount: 20 },
      { id: '5.3', title: 'Seaborn Statistical Visualizations: Distributions & Categorical Plots', cardCount: 20 },
      { id: '5.4', title: 'Multi-Plot Grids, Heatmaps & Interactive Dashboards (Plotly)', cardCount: 20 },
      { id: '5.5', title: 'Data Storytelling, Cognitive Load & Ethical Visualization', cardCount: 20 },
    ],
  },
];

export const pcadStarterFlashcards: Flashcard[] = [
  // SECTION 1 (100 Complete Cards: Chapters 1.1 to 1.5)
  ...pcadSection1Flashcards,
  // SECTION 2 (100 Complete Cards: Chapters 2.1 to 2.5)
  ...pcadSection2Flashcards,
  // SECTION 3 (100 Complete Cards: Chapters 3.1 to 3.5)
  ...pcadSection3Flashcards,
  // SECTION 4 (100 Complete Cards: Chapters 4.1 to 4.5)
  ...pcadSection4Flashcards,
  // SECTION 5 (100 Complete Cards: Chapters 5.1 to 5.5)
  ...pcadSection5Flashcards,
];

export const pcadFlashcardsData = pcadStarterFlashcards;
export {
  pcadSection1Flashcards,
  pcadSection2Flashcards,
  pcadSection3Flashcards,
  pcadSection4Flashcards,
  pcadSection5Flashcards,
};
