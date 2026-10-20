import { Flashcard } from '../types';

export const pcadSection4CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.2: DATA PIPELINES, VALIDATION & AGGREGATION INTEGRITY (Cont.) [Cards 36-40]
  // =========================================================================
  {
    id: 'pcad-sec4-036',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Pipeline Architecture',
    topic: 'Pandas assign for Immutable Pipeline Steps',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'Why is `df.assign()` preferred over in-place column assignment `df["new_col"] = ...` when constructing functional, chainable data transformation pipelines?',
    codeSnippet: `df_processed = (
    df_raw
    .query('status == "active"')
    .assign(
        net_revenue=lambda x: x['gross_revenue'] - x['tax'],
        margin_pct=lambda x: (x['gross_revenue'] - x['tax']) / x['cost'] * 100
    )
    .sort_values('net_revenue', ascending=False)
)`,
    options: [
      '`df.assign()` returns a new DataFrame containing the created or modified columns without mutating the original DataFrame in place, enabling continuous method chaining',
      '`df.assign()` runs faster because it bypasses Python memory management',
      '`df["new_col"] = ...` is deprecated and will be removed in pandas 3.0',
      '`df.assign()` can only create columns of integer data type'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.assign() enables fluent method chaining by returning a new DataFrame copy with updated columns',
    explanationTitle: 'Functional Method Chaining with df.assign()',
    explanationText:
      '`df.assign()` allows newly created columns to depend on expressions computed earlier in the chain via callable lambda arguments `lambda x: ...`. Because it does not modify the source object in-place, intermediate states remain unaffected, avoiding elusive state-mutation bugs.',
    deepDive:
      'Passing callables like `lambda x: ...` inside `assign()` is essential when chaining after a filtering step (like `.query()`), because `x` references the freshly filtered subset rather than the original un-filtered DataFrame.',
    tags: ['assign', 'Method Chaining', 'Functional Programming', 'Pipelines', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-037',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Integrity',
    topic: 'Detecting and Isolating Multicollinear Redundant Features in Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'In a feature engineering pipeline, two features `distance_km` and `distance_miles` have a Pearson correlation coefficient $r = 1.0$. What pipeline step should be automated to prevent numerical instability in linear regression models?',
    codeSnippet: `corr_matrix = X.corr().abs()
upper_tri = corr_matrix.where(np.triu(np.ones(corr_matrix.shape), k=1).astype(bool))
to_drop = [col for col in upper_tri.columns if any(upper_tri[col] > 0.98)]
X_pruned = X.drop(columns=to_drop)`,
    options: [
      'Automate collinear feature elimination: detect pairs with correlation $|r| > 0.98$ and drop one redundant feature to prevent multi-collinearity and singular matrix inversion errors',
      'Multiply both features together into an interaction term and retain all three',
      'Average both features together and cast them to integers',
      'Take the natural logarithm of both features; collinearity is automatically resolved'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Dropping redundant collinear features (r > 0.98) prevents singular matrix inversion in linear models',
    explanationTitle: 'Automated Collinearity Pruning in Feature Pipelines',
    explanationText:
      'Perfect or near-perfect collinearity between features creates a singular matrix where $(X^T X)^{-1}$ cannot be computed reliably in Ordinary Least Squares (OLS) regression, causing coefficient variance to explode. Pruning redundant features via an upper triangular correlation mask eliminates numerical instability.',
    deepDive:
      'Tree-based algorithms (Random Forest, XGBoost) are largely invariant to multicollinearity, but linear and logistic regression models are severely distorted by it.',
    tags: ['Multicollinearity', 'Correlation Matrix', 'Feature Selection', 'OLS', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-038',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Transformation',
    topic: 'Handling Infinite Values in Logarithmic Feature Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'An analyst applies a logarithmic transform `np.log(df["income"])` to compress right-skewed data. If some respondents reported an income of 0, what runtime result occurs, and what is the standard fix?',
    codeSnippet: `import numpy as np

# Problem: np.log(0) -> -inf
# Solution:
df['income_log'] = np.log1p(df['income'])`,
    options: [
      '`np.log(0)` evaluates to `-inf`, which breaks machine learning models; `np.log1p(x)` computes $\\ln(1 + x)$, safely mapping 0 to 0.0 without producing infinities',
      '`np.log(0)` automatically imputes the mean of the column',
      'Python raises a `ZeroDivisionError` and terminates the script',
      '`np.log1p` multiplies the entire column by 100 before taking the logarithm'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'np.log1p(x) computes log(1 + x) preventing -inf for zero values; np.expm1(y) inverts it accurately',
    explanationTitle: 'Log1p Transformation for Non-Negative Features',
    explanationText:
      '`np.log1p(x)` calculates $\\ln(1 + x)$ with numerical precision for small $x$, ensuring non-negative values ($x \\ge 0$) produce non-negative outputs without generating `-inf`. To reverse the transformation back to original scale, use `np.expm1(y)` which computes $e^y - 1$.',
    deepDive:
      'If features contain negative values, a log transform cannot be applied directly. Instead, consider the Yeo-Johnson power transformation or a shift parameter $x - \\min(x) + 1$.',
    tags: ['log1p', 'Feature Engineering', 'Data Transformation', 'NumPy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-039',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Cleaning',
    topic: 'Target Encoding with K-Fold Regularization to Prevent Target Leakage',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'Target encoding replaces each categorical level with the mean of the target variable. Why does computing target encoding naively across the entire dataset introduce catastrophic overfitting, and how does out-of-fold target encoding fix this?',
    codeSnippet: `# Naive target encoding (LEAKAGE!):
# df['cat_encoded'] = df.groupby('category')['target'].transform('mean')

# Out-of-fold target encoding (Regularized):
# Calculate category target mean strictly using other folds/splits!`,
    options: [
      'Naive target encoding leaks the target value of individual rows into their own feature column (especially for rare categories), causing models to memorize targets; out-of-fold encoding computes target statistics strictly from out-of-sample partitions',
      'Target encoding can only be applied to continuous targets, never binary classification',
      'Naive target encoding converts all strings into null values',
      'Target encoding increases the dimensionality of the dataset to infinity'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Naive target encoding introduces direct target leakage; K-fold target encoding eliminates self-target leakage',
    explanationTitle: 'Target Encoding Mechanics and Regularization',
    explanationText:
      'If category `"rare_code"` appears only once in the dataset with target $y=1$, naive target encoding assigns feature value $1.0$ to that row. The model immediately learns $X = 1.0 \\implies y = 1$, achieving false 100% training accuracy. K-fold target encoding or empirical Bayes smoothing (m-estimate) regularizes rare categories with the global prior mean.',
    deepDive:
      'Scikit-Learn 1.3+ provides `TargetEncoder(cv=5, smooth="auto")` which natively implements out-of-fold encoding with automated shrinkage smoothing.',
    tags: ['TargetEncoder', 'Data Leakage', 'Feature Engineering', 'Scikit-Learn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-040',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Pipeline Architecture',
    topic: 'Schema Enforcement with Pandera in Python Data Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When building production data pipelines, how does an analytical schema validation framework (like Pandera) differ from standard pandas assertions?',
    codeSnippet: `import pandera as pa
from pandera import Column, Check

schema = pa.DataFrameSchema({
    "price": Column(float, Check.greater_than(0)),
    "category": Column(str, Check.isin(["A", "B", "C"])),
    "timestamp": Column(pa.DateTime, nullable=False)
})

validated_df = schema.validate(raw_df)`,
    options: [
      'Pandera provides declarative, comprehensive schema contracts that validate types, statistical bounds, nullability, and unique constraints simultaneously, returning structured diagnostic error reports',
      'Pandera converts all pandas DataFrames into relational PostgreSQL tables',
      'Pandera speeds up pandas computation by 100x through C GPU execution',
      'Pandera replaces missing values with synthetic AI generated data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'schema.validate(df) validates dtypes, nullability, and custom check rules, raising SchemaErrors on failure',
    explanationTitle: 'Declarative DataFrame Schema Validation',
    explanationText:
      'Manual assertions (`assert df["price"].gt(0).all()`) become unmaintainable as pipelines scale. Schema validation libraries like Pandera allow declarative specification of data contracts. When raw incoming files deviate, Pandera logs the exact offending row indices, column names, and failing constraint values in a clean structured diagnostic.',
    deepDive:
      'Pandera schemas can also be used as function decorators (`@pa.check_types`) to enforce input/output contracts on pipeline transformation functions.',
    tags: ['Pandera', 'Data Quality', 'Schema Enforcement', 'Pipelines', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 4.3: MACHINE LEARNING PREPROCESSING & SCIKIT-LEARN PIPELINES [Cards 41-60]
  // =========================================================================
  {
    id: 'pcad-sec4-041',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Scikit-Learn Mechanics',
    topic: 'Estimator Interface: fit vs transform vs fit_transform vs predict',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'In Scikit-Learn’s unified API architecture, what is the precise operational difference between `.fit()` and `.transform()` on a preprocessor like `StandardScaler`?',
    codeSnippet: `from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
# Step 1: scaler.fit(X_train)
# Step 2: X_train_scaled = scaler.transform(X_train)
# Step 3: X_test_scaled = scaler.transform(X_test)`,
    options: [
      '`.fit()` learns parameters (e.g. mean $\\mu$ and standard deviation $\\sigma$) from data; `.transform()` applies those learned parameters to scale data; `.fit_transform()` does both in a single step',
      '`.fit()` scales the data and `.transform()` reverts it back to original values',
      '`.fit()` is for classification models only; `.transform()` is for regression models only',
      '`.fit()` modifies the data in-place; `.transform()` deletes null values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fit() computes and stores mu and sigma in scaler.mean_ and scaler.scale_; transform() calculates (X - mu)/sigma',
    explanationTitle: 'Scikit-Learn Transformer API Mechanics',
    explanationText:
      'Scikit-Learn strictly decouples learning parameters from applying them. Calling `scaler.fit(X_train)` computes the mean $\\mu$ and variance $\\sigma^2$ across training rows, storing them as internal attributes (`scaler.mean_`, `scaler.scale_`). Calling `scaler.transform(X_test)` applies those exact same $\\mu$ and $\\sigma$ parameters to test data, ensuring no data leakage.',
    deepDive:
      'Learned attributes in Scikit-Learn estimators always terminate with a trailing underscore (e.g. `mean_`, `scale_`, `coef_`, `intercept_`, `classes_`).',
    tags: ['Scikit-Learn', 'StandardScaler', 'fit', 'transform', 'API Design', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-042',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Data Splitting',
    topic: 'Stratified train_test_split for Imbalanced Classification',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'You are building a fraud detection model where only 1% of transactions are fraudulent ($y=1$). Why must you pass `stratify=y` inside `train_test_split()`?',
    codeSnippet: `from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2, 
    random_state=42, 
    stratify=y
)`,
    options: [
      '`stratify=y` guarantees that the 99:1 class ratio is precisely preserved in both the training set and the test set, preventing random partition bias where the test set could end up with zero fraud cases',
      '`stratify=y` generates synthetic fraud samples to balance classes to 50:50',
      '`stratify=y` sorts the dataset by date before splitting',
      '`stratify=y` eliminates the need for cross-validation'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'stratify=y preserves exact class label proportions across training and test splits',
    explanationTitle: 'Stratified Partitioning in Imbalanced Datasets',
    explanationText:
      'Random splitting without stratification risks sampling error: with severe imbalance (e.g. 1%), random luck can place almost all positive cases into training and none into the test set, rendering test evaluation invalid. `stratify=y` forces both splits to reflect the identical class distribution.',
    deepDive:
      'For continuous target variables in regression, standard stratification cannot be used. To stratify continuous outcomes, discretize the target into binned quantiles using `pd.qcut()` and pass the bins to `stratify`.',
    tags: ['train_test_split', 'stratify', 'Class Imbalance', 'Model Selection', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-043',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Preprocessing Pipelines',
    topic: 'ColumnTransformer for Heterogeneous Feature Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'A dataset contains continuous numerical features requiring median imputation and standard scaling, along with string categorical features requiring mode imputation and one-hot encoding. What Scikit-Learn class coordinates these distinct pipelines across specific columns?',
    codeSnippet: `from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder

num_pipe = Pipeline([('imp', SimpleImputer(strategy='median')), ('scale', StandardScaler())])
cat_pipe = Pipeline([('imp', SimpleImputer(strategy='most_frequent')), ('ohe', OneHotEncoder())])

preprocessor = ColumnTransformer([
    ('num', num_pipe, ['age', 'income', 'balance']),
    ('cat', cat_pipe, ['gender', 'country', 'channel'])
])`,
    options: [
      '`ColumnTransformer`: it applies specific transformer pipelines to selected column subsets in parallel and concatenates the resulting feature matrices horizontally',
      '`FeatureUnion`: it applies all transformers to all columns simultaneously',
      '`SelectKBest`: it filters columns based on p-values',
      '`GridSearchCV`: it tunes hyperparameters across all columns'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ColumnTransformer applies dedicated pipelines to designated column subsets and combines results',
    explanationTitle: 'Heterogeneous Column Processing with ColumnTransformer',
    explanationText:
      '`ColumnTransformer` allows different transformations on distinct column types. Each tuple in the list specifies `(name, transformer, column_list)`. Columns not specified can be passed through using `remainder="passthrough"` or dropped using `remainder="drop"` (default).',
    deepDive:
      'In modern Scikit-Learn, you can select columns by type dynamically using `sklearn.compose.make_column_selector(dtype_include=np.number)` instead of hardcoding column name lists.',
    tags: ['ColumnTransformer', 'Pipeline', 'OneHotEncoder', 'StandardScaler', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-044',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Categorical Encoding',
    topic: 'OneHotEncoder handle_unknown Parameter for Production Inference',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'During model training, the categorical feature `city` has values `["Paris", "London", "Tokyo"]`. In production inference, a new customer arrives from `"Berlin"`. How do you configure `OneHotEncoder` so it does not crash with a `ValueError`?',
    codeSnippet: `from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(handle_unknown='ignore', sparse_output=False)`,
    options: [
      'Set `handle_unknown="ignore"`, which encodes unseen categories as all-zeros across all one-hot encoded dummy columns',
      'Set `handle_unknown="error"` which automatically creates a new column for Berlin',
      'Set `drop="first"` which silently ignores all errors',
      'Cast the unknown category to NaN before passing it to the encoder'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'handle_unknown="ignore" encodes unobserved categories as all-zeros without throwing ValueError',
    explanationTitle: 'Handling Unseen Categories in OneHotEncoder',
    explanationText:
      'By default, `OneHotEncoder(handle_unknown="error")` throws an exception if an unseen category appears during inference. In real-world deployments, unseen levels (e.g. typos, new products) are common. Setting `handle_unknown="ignore"` encodes the novel category as all zeros, safely passing through the pipeline.',
    deepDive:
      'In Scikit-Learn 1.3+, `handle_unknown="infrequent_if_exist"` can also be used in conjunction with `min_frequency` to bin rare and unseen categories together into an "infrequent" dummy bucket.',
    tags: ['OneHotEncoder', 'handle_unknown', 'Categorical Encoding', 'Production ML', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-045',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Feature Scaling',
    topic: 'StandardScaler vs MinMaxScaler vs RobustScaler Comparison',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'A financial dataset contains severe, legitimate extreme outliers (e.g. billionaire accounts where income is 10,000x the median). Which scaler should be used to prevent outliers from crushing the scale of regular observations?',
    codeSnippet: `from sklearn.preprocessing import StandardScaler, MinMaxScaler, RobustScaler

# StandardScaler: (X - mean) / std  (Sensitive to outliers!)
# MinMaxScaler: (X - min) / (max - min) (Outliers compress all else into tiny range!)
# RobustScaler: (X - median) / IQR  (Resistant to outliers!)`,
    options: [
      '`RobustScaler`: it centers the data using the median and scales using the Interquartile Range ($IQR = Q_3 - Q_1$), making it immune to extreme outlier leverage',
      '`MinMaxScaler`: it bounds all values strictly between 0 and 1',
      '`StandardScaler`: standard deviation is not affected by outliers',
      '`Binarizer`: it converts all values above 0 to 1'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'RobustScaler uses median and IQR, preventing extreme outliers from distorting feature scale',
    explanationTitle: 'RobustScaler vs StandardScaler vs MinMaxScaler',
    explanationText:
      'Outliers severely distort `StandardScaler` (which uses mean and standard deviation) and `MinMaxScaler` (which uses minimum and maximum, collapsing 99.9% of normal data into a narrow sliver $[0, 0.01]$). `RobustScaler` scales based on the 25th and 75th percentiles, remaining stable regardless of extreme values.',
    deepDive:
      'Mathematical formulas: StandardScaler $z = \\frac{x - \\mu}{\\sigma}$; MinMaxScaler $x_{norm} = \\frac{x - x_{min}}{x_{max} - x_{min}}$; RobustScaler $x_{robust} = \\frac{x - \\text{median}}{Q_3 - Q_1}$.',
    tags: ['RobustScaler', 'StandardScaler', 'MinMaxScaler', 'Outliers', 'Feature Scaling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-046',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Categorical Encoding',
    topic: 'OrdinalEncoder vs OneHotEncoder Application Contexts',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'When should `OrdinalEncoder` be used instead of `OneHotEncoder` for a categorical feature in machine learning?',
    codeSnippet: `from sklearn.preprocessing import OrdinalEncoder

# Feature: education_level
# Categories: ['High School', 'Bachelor', 'Master', 'PhD']
encoder = OrdinalEncoder(categories=[['High School', 'Bachelor', 'Master', 'PhD']])`,
    options: [
      'When the categorical variable possesses a natural, inherent mathematical ranking or order (e.g. education levels, survey ratings [Low, Medium, High]), allowing integer distances to convey semantic order',
      'When the categorical variable is completely nominal with no order (e.g. eye color: Blue, Brown, Green)',
      'Whenever the target variable is continuous',
      'OrdinalEncoder must only be used on string columns with fewer than 2 categories'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'OrdinalEncoder is used for ordered (ordinal) categories; OneHotEncoder for non-ordered (nominal) categories',
    explanationTitle: 'Ordinal vs Nominal Categorical Encoding',
    explanationText:
      'Applying `OrdinalEncoder` to nominal categories (e.g. assigning France=1, Germany=2, Spain=3) inadvertently forces linear models to assume Spain is "three times" France or that the average of France and Spain equals Germany. Nominal variables require `OneHotEncoder`. Inherent ordinal categories should be encoded with explicit order: `categories=[["Low", "Med", "High"]]`.',
    deepDive:
      '`LabelEncoder` in Scikit-Learn is intended strictly for encoding target labels $y$, not feature matrices $X$. Always use `OrdinalEncoder` or `OneHotEncoder` for features.',
    tags: ['OrdinalEncoder', 'OneHotEncoder', 'Categorical Data', 'Nominal vs Ordinal', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-047',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Scikit-Learn Pipelines',
    topic: 'End-to-End Encapsulation with make_pipeline',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'How does constructing a full model workflow via `sklearn.pipeline.make_pipeline` simplify deployment and prevent validation errors?',
    codeSnippet: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = make_pipeline(StandardScaler(), LogisticRegression())
pipe.fit(X_train, y_train)
predictions = pipe.predict(X_test)`,
    options: [
      'The pipeline encapsulates preprocessing and estimator into a single object: calling `pipe.predict(X_test)` automatically scales the test features using training statistics before feeding them into the model',
      'The pipeline compiles Python code into C++ binaries for 10x execution speed',
      'The pipeline automatically selects the best hyperparameters without user input',
      '`make_pipeline` disables cross-validation to save memory'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pipeline encapsulates transformations + estimator; predict() automatically transforms raw inputs before prediction',
    explanationTitle: 'Pipeline Encapsulation Principles',
    explanationText:
      'Without a pipeline, analysts must remember to manually scale new raw inputs in production using the saved scaler before calling `model.predict()`. A `Pipeline` bundles the scaler and model into one deployable artifact, ensuring identical transformations are applied during training, cross-validation, and production inference.',
    deepDive:
      '`make_pipeline` automatically generates step names based on lowercase class names (e.g. `"standardscaler"`, `"logisticregression"`), whereas `Pipeline([("scaler", ...)])` requires explicit naming.',
    tags: ['make_pipeline', 'Pipeline', 'Production ML', 'Encapsulation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-048',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Missing Data Imputation',
    topic: 'KNNImputer vs SimpleImputer Trade-offs',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When should an analyst choose `KNNImputer` over `SimpleImputer(strategy="median")` in a feature preprocessing pipeline?',
    codeSnippet: `from sklearn.impute import KNNImputer

imputer = KNNImputer(n_neighbors=5, weights='distance')
X_imputed = imputer.fit_transform(X)`,
    options: [
      'When missingness can be inferred from relationships with other features (multivariate imputation), leveraging similar records to estimate missing values rather than using a crude univariate summary statistic',
      'When the dataset contains more than 100 million rows and sub-millisecond training speed is required',
      '`KNNImputer` can only be used on string text columns',
      '`SimpleImputer` is deprecated in Scikit-Learn'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'KNNImputer performs multivariate imputation based on Euclidean feature distance between neighbor records',
    explanationTitle: 'Multivariate KNNImputer vs Univariate SimpleImputer',
    explanationText:
      '`SimpleImputer` is univariate: it looks only at column $j$ to compute its mean/median, ignoring correlations with other columns. `KNNImputer` is multivariate: it searches for the $k$ most similar records across all other observed features and calculates a distance-weighted average to impute the missing cell.',
    deepDive:
      'Trade-off: `KNNImputer` has $O(N^2)$ computational complexity due to pairwise distance computations. It is well-suited for smaller, dense datasets, but computationally prohibitive on massive datasets.',
    tags: ['KNNImputer', 'SimpleImputer', 'Imputation', 'Multivariate', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-049',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Data Transformation',
    topic: 'PowerTransformer and the Box-Cox / Yeo-Johnson Transforms',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'What is the primary objective of `PowerTransformer(method="yeo-johnson")`, and why is Yeo-Johnson preferred over Box-Cox in general tabular analytics pipelines?',
    codeSnippet: `from sklearn.preprocessing import PowerTransformer

pt = PowerTransformer(method='yeo-johnson')
X_gaussian = pt.fit_transform(X)`,
    options: [
      'It maps skewed features into approximately normal (Gaussian) distributions via power transformations; Yeo-Johnson natively supports both positive AND negative/zero values, whereas Box-Cox requires strictly positive ($x > 0$) numbers',
      'It scales all feature values to between 0 and 1 using linear interpolation',
      'It computes the power spectrum using Fast Fourier Transform for audio processing',
      'Box-Cox supports negative numbers while Yeo-Johnson does not'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'PowerTransformer normalizes skewness; Yeo-Johnson supports zero and negative values unlike Box-Cox',
    explanationTitle: 'Gaussian Power Transformations: Yeo-Johnson vs Box-Cox',
    explanationText:
      'Linear models, Ridge/Lasso, and LDA perform optimally when features are normally distributed. `PowerTransformer` estimates optimal $\\lambda$ parameters via maximum likelihood to stabilize variance and minimize skewness. Yeo-Johnson extends the Box-Cox formula to handle zero and negative inputs seamlessly.',
    deepDive:
      'After fitting, you can inspect the estimated power parameter for each feature via `pt.lambdas_`. A $\\lambda \\approx 0$ indicates a log transform was optimal.',
    tags: ['PowerTransformer', 'Yeo-Johnson', 'Box-Cox', 'Normality', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-050',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Feature Creation',
    topic: 'PolynomialFeatures and Interaction Terms',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Given two numerical features $A$ and $B$, what new feature columns are generated by `PolynomialFeatures(degree=2, include_bias=False)`?',
    codeSnippet: `from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform([[2, 3]])
# What columns are in X_poly?`,
    options: [
      'Three feature columns: $[A, B, A^2, AB, B^2]$ (specifically $[2, 3, 4, 6, 9]$)',
      'Two feature columns: $[2^2, 3^2] = [4, 9]$',
      'A single column containing the sum $2 + 3 = 5$',
      'Six columns including a column of ones for the bias intercept'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'degree=2 produces original features [A, B], interaction terms [AB], and squared terms [A^2, B^2]',
    explanationTitle: 'Polynomial Feature Expansion and Interactions',
    explanationText:
      '`PolynomialFeatures(degree=2)` creates all polynomial combinations of the features with degree less than or equal to 2: $A$, $B$, $A^2$, $AB$, and $B^2$. Setting `include_bias=False` omits the initial constant column of 1s (which is typically handled natively by model intercept terms).',
    deepDive:
      'To generate only the cross-product interaction terms without the squared terms $A^2$ and $B^2$, set `interaction_only=True`.',
    tags: ['PolynomialFeatures', 'Interactions', 'Feature Engineering', 'Non-linear Modeling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-051',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Feature Selection',
    topic: 'VarianceThreshold for Removing Quasi-Constant Features',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'A customer dataset contains a boolean feature `is_human` where 99.9% of all rows are `True`. How do you automatically drop features with near-zero variance using Scikit-Learn?',
    codeSnippet: `from sklearn.feature_selection import VarianceThreshold

# For Bernoulli random variable, Var = p * (1 - p)
# If p = 0.999, Var = 0.999 * 0.001 = 0.000999
selector = VarianceThreshold(threshold=0.01)
X_selected = selector.fit_transform(X)`,
    options: [
      '`VarianceThreshold(threshold=...)` computes the sample variance of each feature and drops all features whose variance is less than or equal to the specified cutoff',
      '`VarianceThreshold` drops features that have high correlation with the target',
      '`VarianceThreshold` computes p-values using an ANOVA F-test',
      '`VarianceThreshold` converts all categorical variables to continuous numbers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'VarianceThreshold removes features that exhibit variance below the threshold cutoff',
    explanationTitle: 'Filtering Low-Variance Features',
    explanationText:
      'Constant and quasi-constant features carry virtually zero predictive signal while increasing dimensionality and computational overhead. `VarianceThreshold` is an unsupervised filter method: it inspects feature variance independent of the target $y$.',
    deepDive:
      'Be cautious: `VarianceThreshold` is sensitive to feature scale. A feature measured in kilometers will have a much smaller variance than the same measurement in millimeters. Always scale or normalize features before variance filtering.',
    tags: ['VarianceThreshold', 'Feature Selection', 'Unsupervised Preprocessing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-052',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Class Imbalance',
    topic: 'RandomUnderSampler and SMOTE in Imbalanced Learning',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When addressing extreme class imbalance in a classification pipeline, what does Synthetic Minority Over-sampling Technique (SMOTE) do?',
    codeSnippet: `# Class distribution: 95,000 Class 0, 5,000 Class 1
# SMOTE generates new synthetic points along the line segments connecting k-nearest neighbors`,
    options: [
      'It creates synthetic feature vectors for minority class instances by interpolating between randomly chosen k-nearest neighbors in feature space',
      'It duplicates existing minority rows verbatim without modifying feature values',
      'It deletes majority class rows until the two classes are equally sized',
      'It sets the decision threshold of the classifier to 0.1'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'SMOTE generates synthetic minority instances by interpolating between neighboring minority examples',
    explanationTitle: 'SMOTE for Synthetic Minority Oversampling',
    explanationText:
      'Simple random oversampling duplicates minority rows, leading to overfitting. SMOTE (from `imblearn.over_sampling`) takes a minority sample, finds its $k$-nearest minority neighbors, selects one neighbor at random, and generates a synthetic instance at a random point along the vector joining them.',
    deepDive:
      'Critical: SMOTE must ONLY be applied to the training fold during cross-validation, NEVER to the test set or before validation splitting, or it constitutes severe synthetic data leakage.',
    tags: ['SMOTE', 'Class Imbalance', 'Resampling', 'imblearn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-053',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Text Preprocessing',
    topic: 'CountVectorizer vs TfidfVectorizer for Analytical NLP',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When extracting numerical features from a text column (e.g. customer review comments) for a churn model, why is `TfidfVectorizer` generally superior to raw `CountVectorizer`?',
    codeSnippet: `from sklearn.feature_extraction.text import TfidfVectorizer

vectorizer = TfidfVectorizer(max_features=500, stop_words='english')
X_text = vectorizer.fit_transform(df['review_text'])`,
    options: [
      '`TfidfVectorizer` down-weights ubiquitous words that appear across almost all documents (like "product" or "service") while giving higher weights to distinctive, informative terms',
      '`CountVectorizer` can only process words written in uppercase letters',
      '`TfidfVectorizer` computes sentiment polarity scores between -1 and +1',
      '`TfidfVectorizer` does not produce a sparse matrix'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'TF-IDF rewards terms frequent in a specific document but rare across the entire corpus (IDF penalty)',
    explanationTitle: 'TF-IDF vs Raw Bag-of-Words Counts',
    explanationText:
      'Term Frequency-Inverse Document Frequency ($TF\\text{-}IDF = TF \\times \\ln(N / DF)$) scales term frequency by the inverse document frequency. Common terms that appear in every document receive an IDF near zero, preventing them from dominating feature weights.',
    deepDive:
      'To capture common two-word phrases (e.g. "poor quality", "customer support"), set `ngram_range=(1, 2)`.',
    tags: ['TfidfVectorizer', 'NLP', 'Feature Extraction', 'Text Analytics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-054',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Custom Transformers',
    topic: 'Building Custom Transformers with BaseEstimator and TransformerMixin',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'How do you create a custom feature transformation class that seamlessly integrates into a Scikit-Learn `Pipeline` and `GridSearchCV`?',
    codeSnippet: `from sklearn.base import BaseEstimator, TransformerMixin

class OutlierCapper(BaseEstimator, TransformerMixin):
    def __init__(self, upper_quantile=0.99):
        self.upper_quantile = upper_quantile
        
    def fit(self, X, y=None):
        self.cap_value_ = np.quantile(X, self.upper_quantile)
        return self
        
    def transform(self, X):
        return np.clip(X, a_min=None, a_max=self.cap_value_)`,
    options: [
      'Inherit from `BaseEstimator` (provides `get_params`/`set_params` for grid search) and `TransformerMixin` (provides `fit_transform()`), implementing `.fit()` and `.transform()`',
      'Create a standard Python function and pass it directly to `Pipeline()` without a wrapper',
      'Inherit from `threading.Thread` and override `.run()`',
      'Override Python’s `__getattr__` and `__call__` methods'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Inheriting BaseEstimator and TransformerMixin provides get_params, set_params, and fit_transform',
    explanationTitle: 'Custom Scikit-Learn Transformer Architecture',
    explanationText:
      'To be compatible with Scikit-Learn pipelines: (1) Inherit from `BaseEstimator` (which automates hyperparameter introspection for `GridSearchCV` without `*args` or `**kwargs` in `__init__`), (2) Inherit from `TransformerMixin` (which gives `.fit_transform()` for free), (3) Implement `.fit(X, y=None)` returning `self`, and (4) Implement `.transform(X)` returning a transformed array or DataFrame.',
    deepDive:
      'For stateless transformations that require no learned parameters during `.fit()`, use `sklearn.preprocessing.FunctionTransformer(custom_func)` as a lightweight alternative.',
    tags: ['BaseEstimator', 'TransformerMixin', 'Custom Transformers', 'Scikit-Learn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-055',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Missing Indicator',
    topic: 'MissingIndicator for Informative Missingness',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'In many analytical contexts, the fact that a value is missing is itself a predictive signal (e.g. patients who didn’t receive a blood test might be healthier). How does `SimpleImputer(add_indicator=True)` capture this signal?',
    codeSnippet: `from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy='median', add_indicator=True)
X_imputed = imputer.fit_transform(X)`,
    options: [
      'It imputes the median in the original column AND appends a new binary boolean column indicating whether each original cell was missing (`True`) or observed (`False`)',
      'It changes the imputed value to a negative number to flag missingness',
      'It raises an alert in the console whenever a missing value is encountered',
      'It adds a new row at the bottom of the DataFrame for each missing value'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'add_indicator=True appends binary MissingIndicator flags alongside imputed values',
    explanationTitle: 'Preserving Missingness Signal with add_indicator',
    explanationText:
      'Standard imputation substitutes a statistic (mean/median) but erases the fact that data was absent, discarding potential Missing Not At Random (MNAR) signals. Enabling `add_indicator=True` incorporates `MissingIndicator` columns, allowing downstream models to learn from the missingness pattern itself.',
    deepDive:
      'If you only want the boolean indicator matrices without performing imputation, use `from sklearn.impute import MissingIndicator`.',
    tags: ['SimpleImputer', 'MissingIndicator', 'MNAR', 'Imputation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-056',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Data Rescaling',
    topic: 'Normalizer (L2 Unit Vector Scaling) vs StandardScaler',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'How does `sklearn.preprocessing.Normalizer` fundamentally differ in its operation from `StandardScaler`?',
    codeSnippet: `from sklearn.preprocessing import Normalizer, StandardScaler

# StandardScaler: operates column-by-column (across rows)
# Normalizer: operates row-by-row (across columns per sample)`,
    options: [
      '`Normalizer` scales each sample (row) individually so that its norm (e.g. L2 Euclidean length) equals 1; `StandardScaler` operates column-wise across all samples to produce zero mean and unit variance',
      '`Normalizer` converts data to a normal distribution; `StandardScaler` converts data to a uniform distribution',
      '`Normalizer` is for categorical data; `StandardScaler` is for continuous data',
      '`Normalizer` removes negative numbers by squaring them'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Normalizer scales individual rows to unit norm (L1/L2); StandardScaler scales columns across the dataset',
    explanationTitle: 'Sample-Wise Normalizer vs Feature-Wise StandardScaler',
    explanationText:
      '`Normalizer(norm="l2")` rescales each individual row vector $x_i$ such that $\\sum x_{ij}^2 = 1$. It operates across columns on a single sample, commonly used in text classification, document similarity (cosine similarity), and clustering. `StandardScaler` calculates statistics vertically down each feature column across the entire dataset.',
    deepDive:
      'Because `Normalizer` operates on each sample independently without learning dataset-wide parameters, its `.fit()` method does nothing and retains no learned state.',
    tags: ['Normalizer', 'StandardScaler', 'L2 Norm', 'Vector Scaling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-057',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Feature Selection',
    topic: 'Recursive Feature Elimination (RFE) vs SelectKBest',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'In predictive modeling, why is Recursive Feature Elimination (RFE) considered a "wrapper" method, whereas `SelectKBest` is a "filter" method?',
    codeSnippet: `from sklearn.feature_selection import RFE, SelectKBest, f_classif
from sklearn.linear_model import LogisticRegression

# Method A:
selector_k = SelectKBest(score_func=f_classif, k=10)

# Method B:
selector_rfe = RFE(estimator=LogisticRegression(), n_features_to_select=10)`,
    options: [
      'RFE iteratively trains an actual machine learning estimator to prune the least important features based on model weights; SelectKBest evaluates features individually using univariate statistical tests without training a model',
      'SelectKBest trains a neural network while RFE uses simple correlation',
      'RFE is unsupervised while SelectKBest is supervised',
      'Wrapper methods can only be applied to regression problems'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'RFE trains an estimator repeatedly to prune features (wrapper); SelectKBest uses univariate statistics (filter)',
    explanationTitle: 'Filter vs Wrapper Feature Selection',
    explanationText:
      'Filter methods (`SelectKBest`) evaluate feature-target relationships one feature at a time, making them very fast ($O(P)$) but blind to multi-feature collinearity or complex interactions. Wrapper methods (`RFE`) iteratively fit the full model, drop the feature with the smallest coefficient/importance, and retrain until $K$ features remain, capturing joint interactions at higher computational cost.',
    deepDive:
      '`RFECV` combines Recursive Feature Elimination with cross-validation to automatically select the optimal number of features that maximizes CV validation score.',
    tags: ['RFE', 'SelectKBest', 'Feature Selection', 'Filter vs Wrapper', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-058',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Target Transformation',
    topic: 'TransformedTargetRegressor for Skewed Regression Targets',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'When predicting highly right-skewed targets (e.g. house sales prices), you want the linear model to train on $\\log(y)$, but make final predictions in original dollar amounts. What Scikit-Learn class automates this target transformation and its inverse?',
    codeSnippet: `from sklearn.compose import TransformedTargetRegressor
from sklearn.linear_model import Ridge
import numpy as np

model = TransformedTargetRegressor(
    regressor=Ridge(),
    func=np.log1p,
    inverse_func=np.expm1
)
model.fit(X_train, y_train)
y_pred = model.predict(X_test) # Returned in original dollar scale!`,
    options: [
      '`TransformedTargetRegressor`: it applies `func` to transform the target during `.fit()`, fits the underlying regressor, and automatically applies `inverse_func` during `.predict()`',
      '`Pipeline`: standard pipelines transform both features $X$ and targets $y$ simultaneously',
      '`ColumnTransformer`: it handles target transformations via the `target_cols` parameter',
      '`StandardScaler`: passing `y` to standard scaler transforms predictions automatically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'TransformedTargetRegressor transforms target during fit and inverts predictions back to natural scale',
    explanationTitle: 'Automated Target Transformation with TransformedTargetRegressor',
    explanationText:
      'Standard `Pipeline` objects only transform the feature matrix $X$; they cannot transform the target $y$. `TransformedTargetRegressor` wraps any regression estimator: it transforms $y$ before fitting, and automatically maps predicted values back to original units using `inverse_func` when `.predict()` is called.',
    deepDive:
      'Alternatively, pass a transformer instance: `TransformedTargetRegressor(regressor=Ridge(), transformer=PowerTransformer(method="box-cox"))`.',
    tags: ['TransformedTargetRegressor', 'Target Transformation', 'Regression', 'log1p', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-059',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Encoding Nuance',
    topic: 'The Dummy Variable Trap and drop="first" in Linear Models',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Why is setting `drop="first"` (or `drop="if_binary"`) recommended when using `OneHotEncoder` with unregularized Linear or Logistic Regression models?',
    codeSnippet: `from sklearn.preprocessing import OneHotEncoder

# Categories: ['North', 'South', 'East', 'West'] (4 levels)
# Without drop: 4 dummy columns created
# With drop='first': 3 dummy columns created`,
    options: [
      'To prevent the Dummy Variable Trap (perfect multicollinearity): 4 dummy columns plus the intercept term sum to 1.0, creating a singular matrix where $(X^T X)^{-1}$ cannot be inverted',
      'To reduce memory usage by exactly 50%',
      'Because Scikit-Learn cannot train linear regression on more than 3 columns',
      'Because dropping the first column increases the $R^2$ score by definition'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'drop="first" eliminates linear dependency among dummy columns, avoiding singular matrix inversion in OLS',
    explanationTitle: 'The Dummy Variable Trap in Linear Modeling',
    explanationText:
      'If all $K$ dummy columns are included alongside an intercept $\\beta_0$, the sum of the dummy variables equals the intercept column $\\sum D_i = 1$, creating perfect collinearity (rank deficiency). Dropping the first level makes it the baseline reference category, with other coefficients interpreted relative to it.',
    deepDive:
      'In L2 regularized models (Ridge) or tree-based models (Random Forest), dropping the first category is unnecessary and can even harm performance; in those cases, retain all levels.',
    tags: ['OneHotEncoder', 'Dummy Variable Trap', 'Multicollinearity', 'Linear Regression', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-060',
    section: 'Section 4',
    chapter: '4.3',
    track: 'pcad',
    cardType: 'Feature Inspection',
    topic: 'Retrieving Feature Names from ColumnTransformer with get_feature_names_out',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'After applying `ColumnTransformer` (with scaling and one-hot encoding), the output is a raw NumPy array without column headers. How do you extract the transformed column names to reconstruct a labeled pandas DataFrame?',
    codeSnippet: `preprocessor.fit(X_train)
feature_names = preprocessor.get_feature_names_out()

df_transformed = pd.DataFrame(
    preprocessor.transform(X_train), 
    columns=feature_names
)`,
    options: [
      'Call `preprocessor.get_feature_names_out()` which returns an array of prefixed feature names (e.g. `["num__age", "cat__city_Paris", ...]`)',
      'Inspect `preprocessor.columns_`',
      'Column names are permanently lost once passed through Scikit-Learn',
      'Read `X_train.columns` directly because the number of columns never changes after one-hot encoding'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'preprocessor.get_feature_names_out() generates exact transformed column names with pipeline step prefixes',
    explanationTitle: 'Feature Name Inspection with get_feature_names_out()',
    explanationText:
      'In Scikit-Learn 1.0+, all standard transformers and `ColumnTransformer` implement `.get_feature_names_out()`. It tracks column creation across imputers, scalers, and one-hot encoders, outputting formatted strings like `cat__gender_Female`, making post-processing and feature importance plotting seamless.',
    deepDive:
      'In Scikit-Learn 1.2+, you can call `preprocessor.set_output(transform="pandas")` to make all transformers output native pandas DataFrames automatically instead of NumPy arrays!',
    tags: ['get_feature_names_out', 'set_output', 'ColumnTransformer', 'Pandas Integration', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 4.4: SUPERVISED LEARNING: REGRESSION, CLASSIFICATION & METRICS [Cards 61-70]
  // =========================================================================
  {
    id: 'pcad-sec4-061',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Supervised Learning',
    topic: 'Ordinary Least Squares (OLS) Assumptions and Cost Function',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'What mathematical cost function does `LinearRegression` in Scikit-Learn minimize to solve for the optimal coefficient vector $\\beta$?',
    codeSnippet: `from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X, y)
# What objective function is minimized?`,
    options: [
      'Residual Sum of Squares (RSS): $J(\\beta) = \\sum_{i=1}^n (y_i - \\hat{y}_i)^2 = \\|y - X\\beta\\|^2_2$',
      'Sum of Absolute Errors: $\\sum |y_i - \\hat{y}_i|$',
      'Binary Cross-Entropy Loss: $-\\sum [y \\ln(\\hat{y}) + (1-y) \\ln(1-\\hat{y})]$',
      'The Gini Impurity index of the split residuals'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'OLS minimizes the Residual Sum of Squares (RSS) via the normal equation beta = (X^T X)^-1 X^T y',
    explanationTitle: 'Ordinary Least Squares Objective Function',
    explanationText:
      'OLS seeks the hyper-plane that minimizes the sum of squared vertical distances between observed values $y_i$ and predicted values $\\hat{y}_i = X\\beta$. In Scikit-Learn, `LinearRegression` computes the exact closed-form solution via Singular Value Decomposition (SVD) of $X$ (`scipy.linalg.lstsq`).',
    deepDive:
      'Because errors are squared, OLS is sensitive to outliers: an outlier with residual $e_i = 10$ contributes 100 to the loss function, exerting outsized leverage on the estimated slope.',
    tags: ['LinearRegression', 'OLS', 'RSS', 'Cost Function', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-062',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Regularization',
    topic: 'Ridge (L2) vs Lasso (L1) Regularization Mechanisms',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How do Ridge Regression (L2) and Lasso Regression (L1) differ in how they constrain model coefficients when handling high-dimensional, collinear data?',
    codeSnippet: `from sklearn.linear_model import Ridge, Lasso

# Ridge penalty: alpha * sum(beta_j^2)
# Lasso penalty: alpha * sum(|beta_j|)`,
    options: [
      'Ridge shrinks coefficients asymptotically toward zero but never sets them exactly to zero; Lasso drives coefficients to exactly zero, performing automated feature selection',
      'Ridge sets coefficients to exactly zero; Lasso keeps all coefficients positive',
      'Ridge is used for classification; Lasso is used for regression',
      'Lasso uses an L2 norm penalty while Ridge uses an L1 norm penalty'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Ridge (L2) shrinks coefficients smoothly; Lasso (L1) drives uninformative coefficients to zero (sparse model)',
    explanationTitle: 'L1 (Lasso) vs L2 (Ridge) Regularization',
    explanationText:
      'Both penalize model complexity by adding a penalty term to RSS. Ridge ($L_2 = \\alpha \\sum \\beta_j^2$) distributes shrinkage across correlated features, stabilizing variance. Lasso ($L_1 = \\alpha \\sum |\\beta_j|$) has diamond-shaped constraint boundaries that intersect axes at zero, generating sparse models where irrelevant feature coefficients become exactly zero.',
    deepDive:
      '`ElasticNet` combines both penalties: $\\alpha \\rho L_1 + \\frac{\\alpha(1-\\rho)}{2} L_2$, providing feature selection while handling groups of highly correlated features effectively.',
    tags: ['Ridge', 'Lasso', 'Regularization', 'L1 vs L2', 'Feature Selection', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-063',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Classification',
    topic: 'Logistic Regression: Sigmoid Function and Decision Thresholds',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'How does Logistic Regression convert an unbounded linear combination $z = \\beta_0 + \\beta_1 x_1 + ... + \\beta_p x_p$ into a calibrated probability $P(y=1|x) \\in [0, 1]$?',
    codeSnippet: `from sklearn.linear_model import LogisticRegression

# Linear combination: z = X @ coef_ + intercept_
# Probability mapping: p = 1 / (1 + exp(-z))
clf = LogisticRegression()
clf.fit(X, y)
probs = clf.predict_proba(X)`,
    options: [
      'It passes $z$ through the standard logistic (sigmoid) function: $\\sigma(z) = \\frac{1}{1 + e^{-z}}$',
      'It rounds $z$ to the nearest integer 0 or 1',
      'It normalizes $z$ by dividing by the maximum feature value',
      'It takes the absolute value $|z|$ and caps it at 1.0'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sigmoid function sigma(z) = 1 / (1 + exp(-z)) maps real numbers (-inf, +inf) smoothly into (0, 1)',
    explanationTitle: 'The Logistic Sigmoid Function',
    explanationText:
      'The log-odds (logit) is modeled as a linear function: $\\ln\\left(\\frac{p}{1-p}\\right) = X\\beta$. Solving for $p$ yields the sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$. By default, Scikit-Learn classifies instances as positive if $P(y=1) \\ge 0.5$, though this threshold can be tuned based on business risk.',
    deepDive:
      'In Scikit-Learn, `LogisticRegression` applies L2 regularization by default with regularization strength controlled by $C = \\frac{1}{\\alpha}$. Smaller $C$ values enforce stronger regularization.',
    tags: ['LogisticRegression', 'Sigmoid', 'Log-Odds', 'Classification', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-064',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Model Evaluation',
    topic: 'Confusion Matrix: Precision vs Recall Trade-off',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'In a medical diagnostic screening model for a life-threatening illness, missing a sick patient (False Negative) is catastrophic, while an unnecessary follow-up test for a healthy patient (False Positive) is tolerable. Which metric must the analyst prioritize?',
    codeSnippet: `from sklearn.metrics import classification_report, confusion_matrix

# Precision = TP / (TP + FP)
# Recall (Sensitivity) = TP / (TP + FN)`,
    options: [
      'Recall (Sensitivity): it measures the proportion of actual positive cases correctly identified, minimizing False Negatives',
      'Precision: it measures the proportion of predicted positive cases that are truly positive',
      'Specificity: it measures the proportion of true negatives correctly identified',
      'Overall Accuracy: it treats all errors equally regardless of class'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Recall = TP / (TP + FN); high recall minimizes False Negatives in critical screening contexts',
    explanationTitle: 'Precision vs Recall Optimization',
    explanationText:
      'When the cost of a False Negative is high (medical diagnosis, fraud detection, security breaches), maximize Recall. Conversely, when the cost of a False Positive is high (spam filters, automated user banning), maximize Precision. Adjusting the classification decision threshold downwards (e.g. from 0.5 to 0.2) increases Recall at the expense of Precision.',
    deepDive:
      'The F1-Score is the harmonic mean of Precision and Recall: $F_1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}$. The $F_\\beta$ score weights Recall $\\beta$ times as much as Precision.',
    tags: ['Precision', 'Recall', 'Confusion Matrix', 'Model Evaluation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-065',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Model Evaluation',
    topic: 'ROC Curve and ROC-AUC Interpretation',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'What does an Area Under the Receiver Operating Characteristic Curve (ROC-AUC) score of 0.85 indicate about a binary classifier?',
    codeSnippet: `from sklearn.metrics import roc_auc_score

y_probs = model.predict_proba(X_test)[:, 1]
auc = roc_auc_score(y_test, y_probs) # auc = 0.85`,
    options: [
      'There is an 85% probability that the model will score a randomly chosen positive instance higher than a randomly chosen negative instance, independent of any specific decision threshold',
      'The model has an accuracy of exactly 85% at a threshold of 0.5',
      '85% of all positive instances were classified correctly',
      'The model overfits the training set by 15%'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ROC-AUC is the probability that a random positive example ranks higher than a random negative example',
    explanationTitle: 'Receiver Operating Characteristic (ROC-AUC) Meaning',
    explanationText:
      'The ROC curve plots the True Positive Rate (Sensitivity) against the False Positive Rate ($1 - \\text{Specificity}$) across all possible classification thresholds from 0.0 to 1.0. An AUC of 0.5 represents a random coin toss; 1.0 represents a perfect classifier. ROC-AUC is threshold-independent and invariant to monotonic score transformations.',
    deepDive:
      'For severely imbalanced datasets (e.g. 1 positive in 10,000), ROC-AUC can be misleadingly optimistic. In such cases, use the Precision-Recall Curve AUC (PR-AUC / Average Precision).',
    tags: ['ROC-AUC', 'roc_auc_score', 'Model Evaluation', 'Classification', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-066',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Regression Metrics',
    topic: 'RMSE vs MAE vs R-Squared Metrics',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'When evaluating a regression model, why is Root Mean Squared Error (RMSE) often reported in conjunction with Mean Absolute Error (MAE)?',
    codeSnippet: `from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

rmse = np.sqrt(mean_squared_error(y_true, y_pred))
mae = mean_absolute_error(y_true, y_pred)
r2 = r2_score(y_true, y_pred)`,
    options: [
      'Both are in the same units as the target variable ($y$), but RMSE penalizes large outlier errors disproportionately due to squaring, whereas MAE weights all errors linearly',
      'RMSE can only be calculated on positive numbers while MAE works on negative numbers',
      'MAE always equals $R^2$ multiplied by 100',
      'RMSE measures variance while MAE measures the mean of the features'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'RMSE >= MAE; a large divergence between RMSE and MAE indicates the presence of large outlier residuals',
    explanationTitle: 'Regression Metric Dynamics: RMSE vs MAE',
    explanationText:
      'MAE gives the average absolute magnitude of errors: $\\frac{1}{n}\\sum |y_i - \\hat{y}_i|$. RMSE gives the square root of the mean squared error: $\\sqrt{\\frac{1}{n}\\sum (y_i - \\hat{y}_i)^2}$. Because errors are squared before averaging, RMSE is sensitive to large prediction blunders. If $\\text{RMSE} \\gg \\text{MAE}$, the model makes occasional extreme forecasting errors.',
    deepDive:
      '$R^2 = 1 - \\frac{SS_{res}}{SS_{tot}}$ measures the proportion of variance explained by the model relative to a naive baseline that always predicts the mean $\\bar{y}$. $R^2$ can be negative on test sets if predictions are worse than the mean!',
    tags: ['RMSE', 'MAE', 'r2_score', 'Regression Metrics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-067',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Decision Trees',
    topic: 'Decision Tree Splitting Criteria: Gini Impurity vs Entropy',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How does a classification Decision Tree evaluate candidate splits at each node when using the default `criterion="gini"`?',
    codeSnippet: `from sklearn.tree import DecisionTreeClassifier

# Gini Impurity: I_G(p) = 1 - sum(p_k^2)
# Entropy: H(p) = -sum(p_k * log2(p_k))
clf = DecisionTreeClassifier(criterion='gini', max_depth=5)`,
    options: [
      'It selects the feature and threshold that maximizes the reduction in Gini Impurity (information gain), seeking child nodes that are as pure (single-class) as possible',
      'It calculates the Pearson correlation between the feature and the target',
      'It computes the Euclidean distance between cluster centroids',
      'It fits an OLS regression line across the node'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Decision trees evaluate candidate splits to maximize impurity reduction (Gini or Entropy)',
    explanationTitle: 'Decision Tree Split Optimization',
    explanationText:
      'Gini impurity measures the probability that a randomly chosen element would be incorrectly labeled if randomly labeled according to the class distribution. A pure node (100% Class 1) has Gini = 0.0. The algorithm evaluates every possible split across all features and picks the one yielding the greatest drop in weighted parent-child impurity.',
    deepDive:
      'Gini is slightly faster to compute than Entropy because it avoids evaluating logarithmic functions (`log2`), but in practice both criteria produce nearly identical tree structures.',
    tags: ['DecisionTreeClassifier', 'Gini Impurity', 'Entropy', 'Information Gain', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-068',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Model Regularization',
    topic: 'Preventing Decision Tree Overfitting via Hyperparameters',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'An unconstrained `DecisionTreeClassifier()` achieves 100% accuracy on training data but only 62% accuracy on the validation set. Which hyperparameter adjustments prune the tree to mitigate overfitting?',
    codeSnippet: `clf = DecisionTreeClassifier(
    max_depth=4, 
    min_samples_split=20, 
    min_samples_leaf=10, 
    max_features='sqrt'
)`,
    options: [
      'Decrease `max_depth`, increase `min_samples_split`, and increase `min_samples_leaf` to constrain tree complexity and stop splits on noisy sub-samples',
      'Increase `max_depth` to infinity and set `min_samples_split=1`',
      'Switch the criterion to entropy without setting any depth limits',
      'Remove all training data that has duplicate values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Restricting max_depth and increasing min_samples_leaf prunes tree depth and curbs variance',
    explanationTitle: 'Pruning Decision Trees to Prevent Overfitting',
    explanationText:
      'An unconstrained tree grows until every leaf node is pure, effectively memorizing training noise and outliers (high variance). Setting pre-pruning constraints—capping `max_depth`, requiring at least `min_samples_leaf` instances per terminal leaf, or requiring `min_samples_split` to allow a branch—forces the tree to learn generalizable rules.',
    deepDive:
      'Cost-Complexity Pruning (`ccp_alpha`) provides post-pruning: it grows a full tree and then prunes branches that contribute less than `ccp_alpha` to impurity reduction.',
    tags: ['DecisionTree', 'Pruning', 'max_depth', 'Overfitting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-069',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Ensemble Learning',
    topic: 'Random Forest: Bagging and Feature Sub-sampling (max_features)',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Why does a `RandomForestClassifier` achieve lower generalization error than an individual Decision Tree?',
    codeSnippet: `from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=100, max_features='sqrt', random_state=42)`,
    options: [
      'It combines bootstrap aggregating (bagging) of multiple trees with random feature sub-sampling at each split, decorrelating the individual trees and drastically reducing variance without increasing bias',
      'It trains each tree sequentially to correct the residuals of the previous tree',
      'It converts non-linear relationships into linear equations',
      'It trains on 100 different datasets downloaded from the internet'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Random Forests reduce variance by averaging decorrelated trees built on bootstrap samples with random feature subsets',
    explanationTitle: 'Bagging and Decorrelation in Random Forests',
    explanationText:
      'Each tree in a Random Forest is trained on an independent bootstrap sample (sampling with replacement). Furthermore, at every split, only a random subset of features (`max_features="sqrt"`) is considered. This decorrelates the trees: a single dominant feature cannot dominate every tree. Averaging 100 decorrelated high-variance trees slashes variance.',
    deepDive:
      'Out-of-Bag (OOB) score (`oob_score=True`) uses the ~37% of samples omitted from each bootstrap fold to evaluate validation performance without requiring a separate validation set.',
    tags: ['RandomForest', 'Bagging', 'max_features', 'Ensemble', 'Variance Reduction', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-070',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Distance-Based Models',
    topic: 'K-Nearest Neighbors (KNN) Sensitivity to Feature Scaling',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'Why is feature scaling (e.g. `StandardScaler`) mandatory before training a K-Nearest Neighbors (`KNeighborsClassifier`) model?',
    codeSnippet: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

# Feature 1: Income ($20,000 to $200,000)
# Feature 2: Age (18 to 80)
model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))`,
    options: [
      'KNN computes distances between points using Euclidean metrics: without scaling, features with large numerical magnitudes (e.g. income in tens of thousands) completely dominate the distance calculation, rendering smaller features (e.g. age) irrelevant',
      'KNN crashes with a TypeError if features are not scaled between 0 and 1',
      'Scaling converts KNN from an unsupervised model into a supervised model',
      'Scaling speeds up KNN prediction time from $O(N)$ to $O(1)$'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Euclidean distance d = sqrt(sum((x1 - x2)^2)) is dominated by large-scale features without scaling',
    explanationTitle: 'Distance-Metric Sensitivity in KNN',
    explanationText:
      'KNN relies entirely on instance-based geometric proximity: $d(p, q) = \\sqrt{\\sum (p_i - q_i)^2}$. An unscaled difference of $1,000 in income dwarfs a difference of 40 years in age ($1000^2 = 1,000,000$ vs $40^2 = 1,600$). `StandardScaler` places all features on equal ground with zero mean and unit variance.',
    deepDive:
      'Other distance-sensitive algorithms requiring scaling include Support Vector Machines (SVM), K-Means clustering, Principal Component Analysis (PCA), and Neural Networks.',
    tags: ['KNN', 'StandardScaler', 'Distance Metrics', 'Feature Scaling', 'PCAD-31-02']
  }
];
