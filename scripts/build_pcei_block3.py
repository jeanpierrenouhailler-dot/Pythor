#!/usr/bin/env python3
"""
Generator for PCEI Block 3: Data Handling, Analysis, and Visualization (100 Cards)
Covers Chapters 3.1 - 3.5 for PCEI-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcei-3-{id_num:03d}",
        "section": "Section 3",
        "chapter": chap,
        "category": cat,
        "difficulty": diff,
        "question": q,
        "codeSnippet": snippet,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp,
        "officialRef": ref,
        "tags": tags
    })

# ==========================================
# CHAPTER 3.1: Data Loading & Ingestion with Python (Cards 1-20)
# ==========================================
add_c(1, "3.1", "Data Ingestion", "Beginner",
      "Which pandas function is standard for loading comma-separated tabular data from disk into a DataFrame?",
      "import pandas as pd\n# Load dataset from file:\ndf = pd.read_csv('housing_data.csv')",
      ["pd.read_csv()", "pd.load_table()", "pd.open_csv()", "pd.import_data()"],
      0,
      "pd.read_csv() is the standard and most widely used pandas function for reading delimiter-separated text files (like CSVs) into tabular pandas DataFrames.",
      "PCEI-30-01 Block 3.1 - CSV Ingestion",
      ["pandas", "read_csv", "data-loading"])

add_c(2, "3.1", "NumPy Arrays", "Beginner",
      "Why are NumPy `ndarray` objects preferred over standard native Python lists for numerical AI computations?",
      "# NumPy vectorized array creation:\nimport numpy as np\narr = np.array([1.0, 2.5, 3.8], dtype=np.float32)",
      ["NumPy arrays store elements in contiguous memory blocks with homogeneous types, enabling optimized C-level vectorization and SIMD execution",
       "NumPy arrays automatically compress files into ZIP archives",
       "Python lists can only hold string characters, never floating-point numbers",
       "NumPy arrays run exclusively on external GPU cloud clusters"],
      0,
      "NumPy ndarrays store homogeneous data in contiguous memory blocks. This eliminates Python interpreter object overhead and allows optimized, vectorized C/Fortran routines (BLAS/LAPACK) to execute blazingly fast.",
      "PCEI-30-01 Block 3.1 - NumPy Arrays",
      ["numpy", "ndarray", "vectorization"])

add_c(3, "3.1", "DataFrame Inspection", "Beginner",
      "Which pandas DataFrame method displays the count of non-null entries, column names, and memory usage summary?",
      "import pandas as pd\ndf = pd.DataFrame({'age': [25, 30], 'salary': [50000, 60000]})\ndf.info()",
      ["df.info()", "df.describe()", "df.head()", "df.summary()"],
      0,
      "df.info() prints a concise summary of a DataFrame, including the index dtype, column dtypes, non-null value counts per column, and current memory usage.",
      "PCEI-30-01 Block 3.1 - DataFrame Inspection",
      ["pandas", "info", "eda"])

add_c(4, "3.1", "DataFrame Inspection", "Beginner",
      "What does `df.shape` return for a DataFrame with 1,000 rows and 12 columns?",
      "import pandas as pd\n# Inspect dimensionality:\nshape_tuple = df.shape",
      ["(1000, 12)", "(12, 1000)", "1000", "12000"],
      0,
      "The .shape attribute of a pandas DataFrame returns a tuple representing the dimensionality in (rows, columns) format: (1000, 12).",
      "PCEI-30-01 Block 3.1 - DataFrame Shape",
      ["pandas", "shape", "dimensionality"])

add_c(5, "3.1", "JSON Ingestion", "Intermediate",
      "How do you load structured hierarchical JSON data from an API response into a Python dictionary or pandas DataFrame?",
      "import json\nimport pandas as pd\nraw_json = '{\"users\": [{\"id\": 1, \"score\": 95}, {\"id\": 2, \"score\": 88}]}'\ndata = json.loads(raw_json)\ndf = pd.json_normalize(data['users'])",
      ["Using json.loads() to parse the JSON string, and pd.json_normalize() to flatten nested records into a DataFrame",
       "Using pd.read_sql_query()",
       "Using os.system('unzip json.zip')",
       "Using numpy.fromstring(raw_json)"],
      0,
      "json.loads() decodes raw JSON strings into nested Python dictionaries. pandas provides pd.json_normalize() to flatten semi-structured nested JSON lists into tabular 2D DataFrames.",
      "PCEI-30-01 Block 3.1 - JSON Ingestion",
      ["json", "json_normalize", "api-data"])

add_c(6, "3.1", "DataFrame Slicing", "Beginner",
      "What is the difference between `.loc[]` and `.iloc[]` in pandas indexers?",
      "# Slicing in pandas:\nrow_label = df.loc['patient_101']   # Label-based\nrow_pos   = df.iloc[0]               # Integer position-based",
      [".loc[] accesses rows/columns by label/name, whereas .iloc[] accesses rows/columns by integer index position",
       ".loc[] only selects columns, while .iloc[] only selects rows",
       ".loc[] runs on local disk, while .iloc[] runs on the internet",
       ".loc[] modifies data permanently, while .iloc[] is read-only"],
      0,
      "df.loc[] is strictly label-based (using row index names and column header strings). df.iloc[] is integer position-based (using zero-indexed integer offsets 0, 1, 2...).",
      "PCEI-30-01 Block 3.1 - loc vs iloc",
      ["pandas", "loc", "iloc", "indexing"])

add_c(7, "3.1", "NumPy Reshaping", "Intermediate",
      "What will be the shape of `arr.reshape(-1, 1)` if `arr` originally has a 1D shape of `(500,)`?",
      "import numpy as np\narr = np.arange(500)\nreshaped = arr.reshape(-1, 1)",
      ["(500, 1)", "(1, 500)", "(500,)", "(250, 2)"],
      0,
      "Using -1 in reshape() instructs NumPy to infer that dimension automatically based on length. For 500 elements, reshape(-1, 1) converts a 1D array into a 2D column vector of shape (500, 1).",
      "PCEI-30-01 Block 3.1 - NumPy Reshape",
      ["numpy", "reshape", "array-dimensions"])

add_c(8, "3.1", "Data Types in AI", "Intermediate",
      "Why is converting 64-bit floats (`float64`) to 32-bit (`float32`) or 16-bit (`float16`) common in deep learning data pipelines?",
      "# Precision casting:\nimport numpy as np\nX = np.array([[1.5, 2.3]], dtype=np.float32)",
      ["It cuts memory consumption in half, increases cache efficiency, and accelerates GPU matrix multiplication without noticeable loss in model accuracy",
       "Deep neural networks throw an error if passed float64 numbers",
       "Float32 numbers are legally required for commercial cloud APIs",
       "It completely prevents models from experiencing underfitting"],
      0,
      "Modern neural networks are noise-tolerant: standardizing on float32 (single precision) or bfloat16/float16 halves memory usage, doubles memory throughput, and leverages specialized tensor hardware on GPUs.",
      "PCEI-30-01 Block 3.1 - Precision & Data Types",
      ["precision", "float32", "memory-optimization"])

add_c(9, "3.1", "SQL Ingestion", "Intermediate",
      "Which pandas method allows executing a SQL SELECT query directly against a database connection to populate a DataFrame?",
      "import pandas as pd\n# Fetch data directly from relational DB:\ndf = pd.read_sql_query('SELECT user_id, amount FROM transactions WHERE status = 1', conn)",
      ["pd.read_sql_query()", "pd.query_db()", "pd.sql_table()", "pd.fetch_sql()"],
      0,
      "pd.read_sql_query() executes a SQL query against an active SQLAlchemy or DB-API engine/connection and returns the result table directly as a pandas DataFrame.",
      "PCEI-30-01 Block 3.1 - SQL Ingestion",
      ["pandas", "read_sql_query", "databases"])

add_c(10, "3.1", "Categorical Data Types", "Intermediate",
      "What benefit does converting a string column with few unique values into pandas `category` dtype provide?",
      "# Memory optimization:\ndf['state'] = df['state'].astype('category')",
      ["It drastically reduces memory footprint and accelerates grouping and sorting operations",
       "It automatically translates text strings into Spanish",
       "It encrypts the column values using AES-256",
       "It splits the column into 5 separate CSV files"],
      0,
      "Converting repetitive object strings to the categorical dtype replaces memory-heavy strings with lightweight integer code pointers mapped to unique categories, saving up to 80-90% memory.",
      "PCEI-30-01 Block 3.1 - Categorical Dtype",
      ["pandas", "category", "memory-optimization"])

add_c(11, "3.1", "DataFrame Filtering", "Beginner",
      "In pandas, how do you perform Boolean indexing to select rows where `age > 30` and `salary >= 50000`?",
      "import pandas as pd\n# Boolean filtering syntax in pandas:\nfiltered_df = df[(df['age'] > 30) & (df['salary'] >= 50000)]",
      ["df[(df['age'] > 30) & (df['salary'] >= 50000)]",
       "df[df['age'] > 30 and df['salary'] >= 50000]",
       "df.filter(age > 30, salary >= 50000)",
       "df.where('age > 30 && salary >= 50000')"],
      0,
      "pandas uses bitwise operators (& for AND, | for OR, ~ for NOT) with parentheses enclosing each condition for vectorized element-wise Boolean filtering: df[(df['age'] > 30) & (df['salary'] >= 50000)].",
      "PCEI-30-01 Block 3.1 - Boolean Indexing",
      ["pandas", "filtering", "boolean-indexing"])

add_c(12, "3.1", "Array Slicing", "Beginner",
      "In a 2D NumPy array `X` of shape `(100, 5)`, what does the slice `X[:, 0]` extract?",
      "import numpy as np\nX = np.zeros((100, 5))\ncol_zero = X[:, 0]",
      ["All rows for the first column (column index 0) as a 1D array of length 100",
       "All columns for the first row as a 1D array of length 5",
       "Only the single scalar element at row 0, column 0",
       "The last column of the matrix"],
      0,
      "The colon `:` in the first dimension selects all rows; `, 0` in the second dimension selects column index 0, returning a 1D array containing the entire first feature column.",
      "PCEI-30-01 Block 3.1 - NumPy Slicing",
      ["numpy", "slicing", "2d-arrays"])

add_c(13, "3.1", "Chunked Ingestion", "Intermediate",
      "Why would an engineer use `chunksize` in `pd.read_csv('huge_file.csv', chunksize=10000)`?",
      "# Processing larger-than-RAM datasets:\nfor chunk in pd.read_csv('huge_file.csv', chunksize=10000):\n    process_batch(chunk)",
      ["To iterate over massive datasets in manageable batches without loading the entire multi-gigabyte file into RAM at once",
       "To divide a CSV file into separate physical floppy disks",
       "To run the Python code 10 times faster on GPUs",
       "To automatically correct grammatical typos in text columns"],
      0,
      "Setting chunksize returns an iterable TextFileReader object, yielding DataFrames of size N rows. This enables processing massive datasets that exceed physical computer memory.",
      "PCEI-30-01 Block 3.1 - Chunked Ingestion",
      ["pandas", "chunksize", "memory-management"])

add_c(14, "3.1", "NumPy Matrix Multiplication", "Intermediate",
      "Which Python operator or NumPy function performs true linear algebra matrix multiplication between two matrices A and B?",
      "# Matrix multiplication:\nimport numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = A @ B  # Or np.matmul(A, B)",
      ["A @ B (or np.matmul(A, B))", "A * B", "A ** B", "A % B"],
      0,
      "In modern Python/NumPy, the `@` operator (or np.matmul()) performs matrix dot products. The `*` operator performs element-wise Hadamard multiplication.",
      "PCEI-30-01 Block 3.1 - Matrix Multiplication",
      ["numpy", "matrix-multiplication", "matmul"])

add_c(15, "3.1", "Handling Headers", "Beginner",
      "If a CSV file does not contain a header row, what parameter must be passed to `pd.read_csv()` to prevent the first data row from becoming column names?",
      "import pandas as pd\n# Reading raw data without column headers:\ndf = pd.read_csv('data.csv', header=None)",
      ["header=None", "no_header=True", "skip_header=True", "names=[]"],
      0,
      "Passing `header=None` prevents pandas from treating the first line of numbers as header strings, automatically assigning default zero-indexed column integers (0, 1, 2...).",
      "PCEI-30-01 Block 3.1 - CSV Headers",
      ["pandas", "header", "csv-parsing"])

add_c(16, "3.1", "NumPy Broadcasting", "Intermediate",
      "What is 'Broadcasting' in NumPy arithmetic operations?",
      "# Broadcasting scalar addition to 1D array:\nimport numpy as np\narr = np.array([10, 20, 30])\nresult = arr + 5  # Output: [15, 25, 35]",
      ["The mechanism that allows NumPy to perform arithmetic operations on arrays of differing shapes by virtually stretching the smaller array without memory copies",
       "Transmitting dataset packets over local Wi-Fi radio frequencies",
       "Broadcasting video tutorials to team members",
       "Streaming model logs to Discord chat channels"],
      0,
      "Broadcasting describes how NumPy treats arrays with differing shapes during arithmetic operations: subject to constraints, smaller arrays are 'broadcast' across larger arrays so they have compatible shapes.",
      "PCEI-30-01 Block 3.1 - NumPy Broadcasting",
      ["numpy", "broadcasting", "vectorization"])

add_c(17, "3.1", "Exporting Data", "Beginner",
      "When exporting a DataFrame to a CSV using `df.to_csv('output.csv', index=False)`, why is `index=False` typically specified?",
      "import pandas as pd\n# Export clean data:\ndf.to_csv('clean_data.csv', index=False)",
      ["To prevent pandas from writing an unnamed integer index column (0, 1, 2...) as the first column in the CSV file",
       "To disable CSV file compression",
       "To encrypt the file using SHA-256",
       "To ensure all numeric values are formatted as integers"],
      0,
      "By default, to_csv() writes the DataFrame index as the first column. Specifying `index=False` prevents polluting the exported CSV with an unnecessary 'Unnamed: 0' index column.",
      "PCEI-30-01 Block 3.1 - Exporting Data",
      ["pandas", "to_csv", "index"])

add_c(18, "3.1", "Series vs DataFrame", "Beginner",
      "In pandas, what is the architectural relationship between a Series and a DataFrame?",
      "# Series vs DataFrame:\n# A DataFrame is a 2D table composed of multiple 1D Series columns\nseries_col = df['salary']  # 1D pandas Series",
      ["A Series is a single 1D labeled array column; a DataFrame is a 2D tabular data structure composed of multiple aligned Series",
       "A Series is 3D, while a DataFrame is 2D",
       "A Series is stored on disk, while a DataFrame is stored in CPU registers",
       "There is no difference; they are exact technical synonyms"],
      0,
      "A pandas Series is a 1-dimensional labeled array capable of holding any data type. A DataFrame is a 2-dimensional labeled data structure where each column is essentially a Series sharing a common index.",
      "PCEI-30-01 Block 3.1 - Series vs DataFrame",
      ["pandas", "series", "dataframe"])

add_c(19, "3.1", "NumPy Random Seed", "Beginner",
      "Why is `np.random.seed(42)` called before generating synthetic data or initializing weights?",
      "import numpy as np\n# Ensure deterministic reproducible random sequences:\nnp.random.seed(42)\nrand_vals = np.random.rand(3)",
      ["To ensure deterministic pseudo-random number generation so that experiments and results are fully reproducible",
       "To speed up random number generation by 10x",
       "To guarantee that all generated numbers are positive integers",
       "To connect to an online quantum random number generator"],
      0,
      "Setting a random seed initializes the pseudo-random generator with a fixed starting point, ensuring that anyone running the script gets the exact same sequence of 'random' numbers for experimental reproducibility.",
      "PCEI-30-01 Block 3.1 - Reproducibility",
      ["numpy", "random-seed", "reproducibility"])

add_c(20, "3.1", "Data Parsing Dates", "Intermediate",
      "Which parameter in `pd.read_csv()` instructs pandas to automatically parse date strings into datetime objects during loading?",
      "import pandas as pd\n# Automatically parse date columns:\ndf = pd.read_csv('sales.csv', parse_dates=['transaction_date'])",
      ["parse_dates=['column_name']", "convert_datetime=True", "auto_dates=True", "datetime_cols=['column_name']"],
      0,
      "The `parse_dates` parameter in pd.read_csv() takes a list of column names, instructing pandas to parse matching text strings into proper datetime64 objects during ingestion.",
      "PCEI-30-01 Block 3.1 - Parsing Dates",
      ["pandas", "parse_dates", "timestamps"])

# ==========================================
# CHAPTER 3.2: Data Cleaning & Preprocessing (Cards 21-40)
# ==========================================
add_c(21, "3.2", "Missing Values Detection", "Beginner",
      "Which pandas method returns a Boolean DataFrame indicating which cells contain missing values (`NaN` / `None`)?",
      "import pandas as pd\n# Check for missing values:\nmissing_mask = df.isna()\n# Or df.isnull().sum()",
      ["df.isna() (or df.isnull())", "df.is_missing()", "df.check_empty()", "df.has_nan()"],
      0,
      "df.isna() (and its alias df.isnull()) returns a DataFrame of Booleans where True represents missing (NaN/None) values. Calling df.isna().sum() shows the count of missing values per column.",
      "PCEI-30-01 Block 3.2 - Missing Value Detection",
      ["pandas", "isna", "isnull", "data-cleaning"])

add_c(22, "3.2", "Dropping Missing Values", "Beginner",
      "What does `df.dropna(axis=0)` do to a pandas DataFrame?",
      "import pandas as pd\n# Remove rows with any missing values:\nclean_df = df.dropna(axis=0)",
      ["Drops all rows that contain at least one missing (NaN) value",
       "Drops all columns that contain at least one missing (NaN) value",
       "Replaces all NaN values with zeros",
       "Deletes the entire DataFrame from memory"],
      0,
      "axis=0 (default) in dropna() drops any row containing one or more NaN values. Using axis=1 drops entire columns containing missing values.",
      "PCEI-30-01 Block 3.2 - dropna",
      ["pandas", "dropna", "rows"])

add_c(23, "3.2", "Imputation Strategies", "Intermediate",
      "What is 'Imputation' in data preprocessing, and why is it often preferred over simply dropping rows with `dropna()`?",
      "# Mean imputation example:\nmean_val = df['age'].mean()\ndf['age'] = df['age'].fillna(mean_val)",
      ["Replacing missing values with calculated estimates (mean, median, mode) to preserve valuable sample size and avoid data loss",
       "Deleting entire columns that have more than 5 missing cells",
       "Converting missing values into encrypted strings",
       "Training a deep neural network to fabricate customer names"],
      0,
      "Dropping rows discards valuable data, especially if rows contain useful non-missing features elsewhere. Imputation replaces missing entries with statistical estimates (like mean or median), preserving sample size for model training.",
      "PCEI-30-01 Block 3.2 - Imputation",
      ["imputation", "fillna", "missing-data"])

add_c(24, "3.2", "Mean vs Median Imputation", "Intermediate",
      "When imputing missing values in a numerical column with extreme outliers (e.g., Household Wealth), why is Median preferred over Mean?",
      "# Median vs Mean in skewed data:\n# Wealth: [50k, 60k, 55k, 52k, 100M] -> Mean is heavily skewed by billionaire outlier!\nmedian_wealth = df['wealth'].median()",
      ["The median is robust against extreme outliers and skewness, whereas the mean is distorted by extreme values",
       "The median is always a positive integer, while the mean is a negative float",
       "The median requires 100 times less CPU memory to calculate",
       "The mean is mathematically undefined for continuous numbers"],
      0,
      "The arithmetic mean is pulled towards extreme outliers. In skewed distributions (like income or wealth), the median represents the true typical value much more reliably.",
      "PCEI-30-01 Block 3.2 - Median Imputation",
      ["median", "mean", "outliers", "robustness"])

add_c(25, "3.2", "Categorical Imputation", "Beginner",
      "Which statistical measure is standard for imputing missing values in a categorical column (e.g., 'Payment_Method')?",
      "# Categorical imputation using Mode (most frequent value):\nmode_payment = df['payment_method'].mode()[0]\ndf['payment_method'] = df['payment_method'].fillna(mode_payment)",
      ["Mode (the most frequently occurring category)", "Mean (the arithmetic average)", "Standard deviation", "Euclidean distance"],
      0,
      "You cannot compute the mean or median of non-numeric categories (like 'Credit Card', 'PayPal'). The Mode (the most frequent category) is the standard statistical imputation choice for categorical data.",
      "PCEI-30-01 Block 3.2 - Mode Imputation",
      ["mode", "categorical", "imputation"])

add_c(26, "3.2", "Duplicate Detection", "Beginner",
      "Which pandas method identifies duplicate rows across a DataFrame?",
      "import pandas as pd\n# Find duplicate rows:\ndupes = df.duplicated()\nprint('Count of duplicate rows:', dupes.sum())",
      ["df.duplicated()", "df.find_copies()", "df.is_repeated()", "df.check_twins()"],
      0,
      "df.duplicated() returns a Boolean Series denoting duplicate rows based on all or specified columns. Calling df.drop_duplicates() removes them.",
      "PCEI-30-01 Block 3.2 - Duplicates",
      ["pandas", "duplicated", "data-cleaning"])

add_c(27, "3.2", "Dropping Duplicates", "Beginner",
      "How do you remove duplicate rows from a DataFrame while retaining the first occurrence in pandas?",
      "import pandas as pd\n# Remove duplicate rows:\nclean_df = df.drop_duplicates(keep='first')",
      ["df.drop_duplicates(keep='first')", "df.remove_repeats()", "df.unique_rows()", "df.clean_copies()"],
      0,
      "df.drop_duplicates() drops duplicate rows. The `keep='first'` argument (the default) preserves the first encountered occurrence while dropping all subsequent duplicates.",
      "PCEI-30-01 Block 3.2 - drop_duplicates",
      ["pandas", "drop_duplicates", "deduplication"])

add_c(28, "3.2", "Outliers in AI", "Beginner",
      "What is an 'Outlier' in a machine learning dataset?",
      "# Outlier illustration:\n# Normal values: [20, 22, 21, 23, 20, 19, 999]\n# 999 deviates markedly from all other observations",
      ["A data point that deviates markedly and abnormally from the overall pattern of the rest of the observations in the dataset",
       "A row that contains only negative numbers",
       "A column that has been renamed by the data scientist",
       "A data point that was recorded outside of standard working hours"],
      0,
      "An outlier is an observation that lies an abnormal distance away from other values in a random sample from a population, potentially caused by measurement error, experimental variability, or genuine novelty.",
      "PCEI-30-01 Block 3.2 - Outliers",
      ["outliers", "anomaly", "definitions"])

add_c(29, "3.2", "IQR Outlier Detection", "Intermediate",
      "In the Interquartile Range (IQR) method, how are statistical outlier boundaries commonly defined?",
      "# IQR outlier boundaries:\n# Q1: 25th percentile, Q3: 75th percentile, IQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR",
      ["Lower bound = Q1 - 1.5 * IQR, and Upper bound = Q3 + 1.5 * IQR",
       "Lower bound = Mean - 5 * Std, and Upper bound = Mean + 5 * Std",
       "Lower bound = Minimum value / 2, and Upper bound = Maximum value * 2",
       "Lower bound = 0, and Upper bound = 100"],
      0,
      "Tukey's IQR method defines outliers as points falling below Q1 - 1.5*IQR or above Q3 + 1.5*IQR, where IQR is the middle 50% spread of the data (Q3 - Q1).",
      "PCEI-30-01 Block 3.2 - IQR Method",
      ["iqr", "tukey", "outlier-detection"])

add_c(30, "3.2", "Z-Score Outlier Detection", "Intermediate",
      "In a standard normal distribution, data points with an absolute Z-score greater than what threshold are commonly flagged as statistical outliers?",
      "# Z-score calculation: Z = (X - mean) / std\n# Under standard normal curve, 99.7% of data lies within 3 standard deviations\noutliers = df[abs(df['z_score']) > 3.0]",
      ["3.0 (or -3.0)", "0.5", "10.0", "100.0"],
      0,
      "Under the empirical 68-95-99.7 rule, 99.7% of data in a normal distribution falls within 3 standard deviations of the mean. Values with |Z| > 3.0 are considered extreme statistical outliers.",
      "PCEI-30-01 Block 3.2 - Z-Score",
      ["z-score", "standard-deviations", "outliers"])

add_c(31, "3.2", "String Cleaning", "Beginner",
      "How do you strip leading and trailing whitespace from every text value in a pandas column?",
      "import pandas as pd\n# Clean string column:\ndf['city'] = df['city'].str.strip()",
      ["df['city'] = df['city'].str.strip()", "df['city'] = df['city'].trim()", "df['city'] = strip(df['city'])", "df['city'] = df['city'].clean_spaces()"],
      0,
      "pandas provides string methods under the `.str` accessor. `df['col'].str.strip()` vectorizes Python's str.strip() across all text elements in the Series.",
      "PCEI-30-01 Block 3.2 - String Cleaning",
      ["pandas", "str.strip", "text-cleaning"])

add_c(32, "3.2", "Replacing Values", "Beginner",
      "How do you replace placeholder strings like `'?'` or `'N/A'` with actual `np.nan` values in pandas?",
      "import numpy as np\nimport pandas as pd\n# Replace placeholder markers with actual NaN:\ndf.replace(['?', 'N/A'], np.nan, inplace=True)",
      ["df.replace(['?', 'N/A'], np.nan, inplace=True)", "df.convert_nulls(['?'])", "df.clean_marks('?')", "df.strip_na()"],
      0,
      "df.replace() allows replacing specified values, lists, or regex patterns with target values like np.nan across the entire DataFrame or specific columns.",
      "PCEI-30-01 Block 3.2 - df.replace",
      ["pandas", "replace", "nan"])

add_c(33, "3.2", "Data Type Conversion", "Beginner",
      "Which pandas method is used to explicitly cast a column's data type (e.g., converting integer strings to floats)?",
      "import pandas as pd\n# Type casting:\ndf['price'] = df['price'].astype(float)",
      ["df['price'].astype(float)", "df['price'].to_type('float')", "df['price'].convert(float)", "df['price'].cast('float')"],
      0,
      ".astype() is the standard pandas method for casting a Series from one data type to another (e.g., .astype(float), .astype('int32'), .astype('category')).",
      "PCEI-30-01 Block 3.2 - astype",
      ["pandas", "astype", "type-casting"])

add_c(34, "3.2", "K-NN Imputation", "Intermediate",
      "How does scikit-learn's `KNNImputer` estimate missing feature values?",
      "# KNNImputer in scikit-learn:\nfrom sklearn.impute import KNNImputer\nimputer = KNNImputer(n_neighbors=5)\nX_imputed = imputer.fit_transform(X)",
      ["By averaging the non-missing values of the K nearest neighboring samples based on Euclidean distance",
       "By filling missing values with random numbers between 0 and 1",
       "By using optical character recognition to read the screen",
       "By running K rounds of Monte Carlo tree search"],
      0,
      "KNNImputer replaces missing values in a sample using the mean value from the K nearest neighbors that possess non-missing values for that feature, preserving complex multivariate relationships.",
      "PCEI-30-01 Block 3.2 - KNNImputer",
      ["knnimputer", "multivariate-imputation", "scikit-learn"])

add_c(35, "3.2", "Indicator Variables", "Intermediate",
      "What is the purpose of adding a 'Missingness Indicator' column (`MissingIndicator` in scikit-learn) alongside imputed values?",
      "# Missingness indicator pattern:\n# Feature: income (imputed with median)\n# Indicator: income_was_missing (1 if originally NaN, else 0)",
      ["To explicitly inform the machine learning model that a value was originally missing, as the fact that data was missing may itself be a predictive signal",
       "To reduce the physical storage size of the database by 50%",
       "To prevent hackers from viewing the dataset",
       "To delete rows that were missing at test time"],
      0,
      "Data is often Missing Not at Random (MNAR). Adding a binary Boolean indicator (1 if imputed, 0 if original) allows the model to learn whether the fact that a user withheld information is predictive.",
      "PCEI-30-01 Block 3.2 - Missing Indicator",
      ["missing-indicator", "mnar", "feature-engineering"])

add_c(36, "3.2", "Winsorization", "Intermediate",
      "What is 'Winsorization' (clipping) when handling numerical outliers?",
      "# Winsorization / Clipping in pandas:\nlower_limit = df['income'].quantile(0.01)\nupper_limit = df['income'].quantile(0.99)\ndf['income'] = df['income'].clip(lower_limit, upper_limit)",
      ["Capping extreme values at specified percentiles (e.g., 1st and 99th percentiles) rather than discarding the rows entirely",
       "Deleting all rows with income above $100,000",
       "Converting income into British Pounds Sterling",
       "Rounding all income numbers to the nearest integer"],
      0,
      "Winsorization (implemented via df.clip()) limits extreme values by replacing values beyond specified thresholds (e.g., 99th percentile) with the threshold value, mitigating outlier distortion without losing data rows.",
      "PCEI-30-01 Block 3.2 - Winsorization",
      ["winsorization", "clipping", "outlier-treatment"])

add_c(37, "3.2", "Garbage In Garbage Out", "Beginner",
      "What does the universal computing adage 'Garbage In, Garbage Out' (GIGO) emphasize in artificial intelligence systems?",
      "# GIGO concept:\n# High-capacity ML models trained on noisy, biased, or erroneous data will output erroneous predictions",
      ["Regardless of how sophisticated an AI algorithm is, its predictions will be flawed and unreliable if trained on poor-quality, noisy, or biased data",
       "Computers must be cleaned with disinfectant spray weekly",
       "Old hard drives must be discarded in municipal recycling bins",
       "Software developers should delete their source code after compiling"],
      0,
      "GIGO emphasizes that model quality is strictly bounded by data quality. Flawed, noisy, biased, or incorrectly preprocessed data inevitably leads to unreliable, misleading model outputs.",
      "PCEI-30-01 Block 3.2 - GIGO",
      ["gigo", "data-quality", "principles"])

add_c(38, "3.2", "Class Imbalance Preprocessing", "Intermediate",
      "What technique can be used during preprocessing to balance a dataset where the positive class is heavily outnumbered (e.g., 99% vs 1%)?",
      "# Synthetic Minority Over-sampling Technique (SMOTE):\nfrom imblearn.over_sampling import SMOTE\nsmote = SMOTE(random_state=42)\nX_res, y_res = smote.fit_resample(X_train, y_train)",
      ["Resampling techniques like SMOTE (Synthetic Minority Over-sampling) or random under-sampling of the majority class",
       "Deleting all columns with continuous floating-point numbers",
       "Encrypting the class labels with AES",
       "Dividing the number of rows by the number of columns"],
      0,
      "Class imbalance can be addressed by over-sampling the minority class (e.g., SMOTE synthesizes new examples along feature vectors) or under-sampling the majority class to balance class distributions during training.",
      "PCEI-30-01 Block 3.2 - Resampling",
      ["smote", "class-imbalance", "resampling"])

add_c(39, "3.2", "Data Integrity Verification", "Beginner",
      "Why should data preprocessing pipelines verify data ranges and domain constraints (e.g., `assert (df['age'] >= 0).all()`)?",
      "# Asserting domain validity:\nassert (df['age'] >= 0).all() and (df['age'] <= 125).all(), 'Impossible age values detected!'",
      ["To catch data corruption, sensor malfunction, or impossible values (like negative ages or 300°C human body temperature) before training",
       "To speed up GPU matrix multiplication operations",
       "To encrypt the data against cyber attacks",
       "To reduce the visual brightness of computer monitors"],
      0,
      "Domain constraint validation checks that data conforms to real-world sanity rules (e.g., ages between 0 and 125, percentages between 0 and 100), catching ingestion errors and corrupted records early.",
      "PCEI-30-01 Block 3.2 - Data Validation",
      ["data-validation", "assertions", "domain-constraints"])

add_c(40, "3.2", "Pipeline Leakage Prevention", "Intermediate",
      "Where should `fit()` and `transform()` be applied when preprocessing features to strictly prevent data leakage?",
      "# Proper pipeline execution:\n# Fit on TRAINING data only; transform both train and test!\nscaler.fit(X_train)\nX_train_scaled = scaler.transform(X_train)\nX_test_scaled  = scaler.transform(X_test)",
      ["Fit on the training data ONLY, then use those fitted parameters to transform both the training and test sets",
       "Fit on the test data ONLY, and transform the training set",
       "Fit on the entire combined dataset before splitting",
       "Never call fit() on any dataset"],
      0,
      "To prevent data leakage, preprocessing transformers (scalers, encoders, imputers) must learn parameters (fit) exclusively on the training partition, and then apply (transform) those exact parameters to the test set.",
      "PCEI-30-01 Block 3.2 - Leakage Prevention",
      ["fit-transform", "data-leakage", "pipeline"])

# ==========================================
# CHAPTER 3.3: Feature Preparation & Encoding (Cards 41-60)
# ==========================================
add_c(41, "3.3", "Normalization", "Intermediate",
      "What mathematical transformation does Min-Max Normalization perform on a feature?",
      "# Min-Max Scaling formula:\n# X_norm = (X - X_min) / (X_max - X_min)\n# Scales values into the range [0, 1]\nfrom sklearn.preprocessing import MinMaxScaler",
      ["It rescales feature values into a fixed bounded range between 0 and 1: (X - min) / (max - min)",
       "It shifts the mean to 0 and standard deviation to 1",
       "It calculates the base-10 logarithm of the feature",
       "It rounds all decimal values to the nearest integer"],
      0,
      "Min-Max Normalization shifts and rescales values so that they end up bounded between 0 and 1: (X - X_min) / (X_max - X_min), making it ideal for algorithms expecting bounded inputs (like neural networks).",
      "PCEI-30-01 Block 3.3 - Normalization",
      ["minmax-scaler", "normalization", "feature-scaling"])

add_c(42, "3.3", "Standardization", "Intermediate",
      "What transformation does Standardization (Z-score scaling / `StandardScaler`) perform on a feature?",
      "# Standardization formula:\n# z = (x - mean) / std\n# Results in mean = 0, standard deviation = 1\nfrom sklearn.preprocessing import StandardScaler",
      ["It centers the feature around a mean of 0 with a unit standard deviation of 1: (X - μ) / σ",
       "It bounds all values strictly between 0.0 and 1.0",
       "It converts numerical features into text descriptions",
       "It multiplies all features by the square root of 2"],
      0,
      "Standardization subtracts the mean and divides by standard deviation: z = (x - μ) / σ. The resulting distribution has a mean of 0 and a standard deviation of 1, preserving outlier signals better than min-max scaling.",
      "PCEI-30-01 Block 3.3 - Standardization",
      ["standard-scaler", "z-score", "feature-scaling"])

add_c(43, "3.3", "One-Hot Encoding", "Beginner",
      "What does 'One-Hot Encoding' do to a nominal categorical feature (e.g., `Color` with values `['Red', 'Green', 'Blue']`)?",
      "# One-Hot Encoding example:\nimport pandas as pd\ndf_encoded = pd.get_dummies(df, columns=['Color'])",
      ["It converts the category into separate binary (0/1) indicator columns for each unique category value",
       "It assigns arbitrary integer numbers (1, 2, 3) to each color in alphabetical order",
       "It deletes the column from the dataset",
       "It calculates the RGB wavelength of each color"],
      0,
      "One-hot encoding creates N binary columns (e.g., Color_Red, Color_Green, Color_Blue). Each row has a 1 in its matching category column and 0 in all others, preventing algorithms from assuming false ordinal rankings.",
      "PCEI-30-01 Block 3.3 - One-Hot Encoding",
      ["one-hot-encoding", "get_dummies", "categorical"])

add_c(44, "3.3", "Label Encoding", "Beginner",
      "When is 'Label Encoding' (or Ordinal Encoding) appropriate rather than One-Hot Encoding?",
      "# Ordinal Encoding:\n# Size: 'Small' -> 0, 'Medium' -> 1, 'Large' -> 2 (Natural mathematical ranking exists!)\nfrom sklearn.preprocessing import OrdinalEncoder",
      ["When the categorical feature has a natural intrinsic ranking or order (e.g., 'Low', 'Medium', 'High' -> 0, 1, 2)",
       "When the categorical feature has no order, like car brand names",
       "When the dataset has fewer than 10 total rows",
       "When target labels are continuous floating-point numbers"],
      0,
      "Label/Ordinal encoding assigns integers (0, 1, 2...). It is ideal when categories have a meaningful intrinsic order (e.g., T-shirt sizes: S < M < L). Using it on unordered nominal data (e.g., colors) can mislead linear models.",
      "PCEI-30-01 Block 3.3 - Label Encoding",
      ["label-encoding", "ordinal", "categorical"])

add_c(45, "3.3", "Dummy Variable Trap", "Intermediate",
      "What is the 'Dummy Variable Trap' in linear regression, and how is it resolved?",
      "# Multicollinearity from one-hot encoding:\n# If we have Gender_Male and Gender_Female: Gender_Female = 1 - Gender_Male (Perfect collinearity!)\n# Resolved by dropping first category:\npd.get_dummies(df['gender'], drop_first=True)",
      ["Perfect multicollinearity caused by including all N one-hot columns in linear models; resolved by dropping one column (drop_first=True)",
       "A computer virus hidden inside CSV files",
       "An error where decision trees create infinite loops",
       "A trap where all numeric columns are deleted accidentally"],
      0,
      "If a categorical feature has N categories, including all N binary columns introduces perfect linear dependency (the sum of columns equals 1). In linear models, one column must be omitted (`drop_first=True`) to avoid singular matrices.",
      "PCEI-30-01 Block 3.3 - Dummy Variable Trap",
      ["dummy-variable-trap", "multicollinearity", "drop_first"])

add_c(46, "3.3", "Feature Engineering", "Beginner",
      "What is 'Feature Engineering' in applied machine learning?",
      "# Feature engineering example:\n# Creating a new informative ratio from existing raw columns:\ndf['debt_to_income'] = df['total_debt'] / df['annual_income']",
      ["Using domain knowledge to create new informative features, transformations, or interactions from raw data to boost model performance",
       "Writing automated unit tests for software deployment",
       "Upgrading the physical hardware components of a GPU server",
       "Compressing database backup files into ZIP archives"],
      0,
      "Feature engineering transforms raw data into formats better suited for algorithms: extracting date parts (day of week), combining ratios (debt-to-income), or computing aggregations to expose underlying patterns.",
      "PCEI-30-01 Block 3.3 - Feature Engineering",
      ["feature-engineering", "ratios", "domain-knowledge"])

add_c(47, "3.3", "Log Transformation", "Intermediate",
      "Why is a Log Transformation (`np.log1p(x)`) frequently applied to highly right-skewed features (like Income, Views, or House Prices)?",
      "# Log transformation:\nimport numpy as np\n# Compresses long right tails into more normal, symmetric distributions\ndf['log_income'] = np.log1p(df['income'])",
      ["It compresses extreme positive outliers and transforms skewed, heavy-tailed distributions into a more symmetric bell-shaped distribution",
       "It converts all numbers into positive prime integers",
       "It divides numbers by the speed of light",
       "It speeds up CPU calculations by exactly 50%"],
      0,
      "Right-skewed features have long tails of extreme values. A log transform compresses large values much more than small values, stabilizing variance and transforming skewed distributions closer to normal Gaussian behavior.",
      "PCEI-30-01 Block 3.3 - Log Transformation",
      ["log-transform", "skewness", "normalization"])

add_c(48, "3.3", "Binning / Discretization", "Intermediate",
      "What does 'Binning' (Discretization) do to a continuous numerical feature in pandas?",
      "# Binning continuous age into generational brackets:\nimport pandas as pd\ndf['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 65, 100], labels=['Child', 'Young Adult', 'Adult', 'Senior'])",
      ["Converts a continuous numerical variable into discrete categorical intervals or buckets (e.g., grouping ages into age brackets)",
       "Deletes all values that fall into the lowest 10%",
       "Converts positive numbers into negative numbers",
       "Replaces numbers with random letters of the alphabet"],
      0,
      "Binning (using pd.cut() for fixed intervals or pd.qcut() for equal-frequency quantiles) groups continuous values into discrete bins, which can capture non-linear relationships or simplify noisy data.",
      "PCEI-30-01 Block 3.3 - Binning",
      ["binning", "discretization", "pd.cut"])

add_c(49, "3.3", "Interaction Features", "Intermediate",
      "What is an 'Interaction Feature' in machine learning feature design?",
      "# Interaction feature example:\n# The combined interaction of temperature and humidity: Heat Index\ndf['heat_index'] = df['temperature'] * df['humidity']",
      ["A feature created by multiplying, dividing, or combining two or more existing features to capture multiplicative or synergistic effects",
       "A feature that allows users to interact with a model via touch screen",
       "A feature that generates interactive audio notifications",
       "A column that changes its values dynamically every second"],
      0,
      "An interaction term (e.g., Feature_A * Feature_B) allows models (especially linear models) to capture synergy where the effect of one feature depends directly on the value of another feature.",
      "PCEI-30-01 Block 3.3 - Interaction Features",
      ["interaction-terms", "multiplication", "features"])

add_c(50, "3.3", "Target Encoding", "Advanced",
      "What is 'Target Encoding' (Mean Encoding) for high-cardinality categorical variables (like Postal Codes)?",
      "# Target encoding:\n# Replacing each category level with the mean target value for that category\nzip_means = df.groupby('zip_code')['target'].mean()\ndf['zip_encoded'] = df['zip_code'].map(zip_means)",
      ["Replacing each categorical value with the average target value for that category across the training set",
       "Replacing each category with its alphabetical character length",
       "Encoding categories using binary ASCII byte codes",
       "Encrypting the target column using a random secret key"],
      0,
      "For categories with thousands of unique values (like Zip Code), one-hot encoding creates thousands of sparse columns. Target encoding replaces each category with the average target value of that category, keeping a single column.",
      "PCEI-30-01 Block 3.3 - Target Encoding",
      ["target-encoding", "mean-encoding", "high-cardinality"])

add_c(51, "3.3", "Target Encoding Leakage", "Advanced",
      "Why must Target Encoding be computed strictly within cross-validation folds or with smoothing?",
      "# Risk of naive target encoding:\n# If a rare zip code has only 1 sample with target=1, its encoded value is 1.0 (Direct label leakage!)\n# Target leakage leads to severe overfitting on the training set",
      ["Directly mapping the target to features across the entire dataset causes severe data leakage and overfitting, as the model essentially learns the target directly",
       "Target encoding deletes the test set from disk",
       "Target encoding causes divide-by-zero errors on GPU clusters",
       "Target encoding is banned by scikit-learn license terms"],
      0,
      "Naive target encoding leaks the target variable directly into the features, causing severe overfitting. It must be computed out-of-fold (OOF) or with smoothing regularization (m-estimate) to prevent leakage.",
      "PCEI-30-01 Block 3.3 - Target Leakage",
      ["target-leakage", "cross-validation", "regularization"])

add_c(52, "3.3", "Feature Selection", "Intermediate",
      "What is the primary benefit of applying 'Feature Selection' before training a model?",
      "# Feature selection benefits:\n# 1. Reduces overfitting (less noise)\n# 2. Speeds up training and inference\n# 3. Improves model interpretability",
      ["Removing irrelevant, redundant, or noisy features reduces overfitting, speeds up training/inference, and improves model interpretability",
       "It permanently eliminates the need to evaluate models on test data",
       "It guarantees 100% classification accuracy on all future datasets",
       "It converts non-linear algorithms into linear ones"],
      0,
      "Feature selection selects a subset of relevant features. By stripping away redundant or noisy columns, models train faster, overfit less, and become much easier to explain to non-technical stakeholders.",
      "PCEI-30-01 Block 3.3 - Feature Selection",
      ["feature-selection", "parsimony", "interpretability"])

add_c(53, "3.3", "Filter Methods", "Intermediate",
      "How do 'Filter Methods' (e.g., VarianceThreshold, correlation) perform feature selection?",
      "# Filter method: VarianceThreshold drops features with near-zero variance\nfrom sklearn.feature_selection import VarianceThreshold\nselector = VarianceThreshold(threshold=0.01)\nX_high_var = selector.fit_transform(X)",
      ["They evaluate statistical properties of features independently of any machine learning model (e.g., variance, correlation, Chi-Square)",
       "They train 100 different neural networks and select the fastest one",
       "They filter out rows based on user IP address location",
       "They apply optical color filters to training images"],
      0,
      "Filter methods rank features using intrinsic statistical metrics (like variance, Pearson correlation with target, or ANOVA F-score) before model training begins, making them computationally fast and model-agnostic.",
      "PCEI-30-01 Block 3.3 - Filter Methods",
      ["filter-methods", "variance-threshold", "correlation"])

add_c(54, "3.3", "Wrapper Methods", "Advanced",
      "How do 'Wrapper Methods' (like Recursive Feature Elimination - RFE) perform feature selection?",
      "# RFE wrapper method:\nfrom sklearn.feature_selection import RFE\nfrom sklearn.linear_model import LogisticRegression\nselector = RFE(estimator=LogisticRegression(), n_features_to_select=5)\nX_selected = selector.fit_transform(X, y)",
      ["They use a machine learning model as an evaluation core, iteratively training models on subsets of features to find the best combination",
       "They wrap Python functions in C++ wrappers to speed up execution",
       "They compress the dataset in a wrapper ZIP archive",
       "They wrap all feature names in HTML tags"],
      0,
      "Wrapper methods (e.g., RFE, forward selection) use a predictive model to evaluate feature subsets. They add or prune features based on model performance, which is computationally expensive but captures feature interactions.",
      "PCEI-30-01 Block 3.3 - Wrapper Methods",
      ["wrapper-methods", "rfe", "feature-subsets"])

add_c(55, "3.3", "Embedded Methods", "Intermediate",
      "Which algorithm family naturally provides 'Embedded' feature selection during model training?",
      "# Embedded feature selection:\n# Decision Trees / Random Forests compute feature importances naturally during split creation\nimportances = rf_model.feature_importances_",
      ["Tree-based models (like Decision Trees, Random Forests) and L1 regularized models (Lasso)",
       "K-Nearest Neighbors (KNN)",
       "K-Means Clustering",
       "Principal Component Analysis"],
      0,
      "Embedded methods perform feature selection internally as part of their training algorithm: Decision trees measure feature importances from split purity, and Lasso (L1) regression drives non-informative weights to exact zero.",
      "PCEI-30-01 Block 3.3 - Embedded Methods",
      ["embedded-methods", "feature-importance", "lasso"])

add_c(56, "3.3", "Cyclical Features", "Intermediate",
      "How should cyclical periodic features (like Hour of Day: 0-23, or Month: 1-12) be encoded so that 23:00 and 00:00 are recognized as adjacent?",
      "# Cyclical sine/cosine transformation:\nimport numpy as np\ndf['hour_sin'] = np.sin(2 * np.pi * df['hour'] / 24.0)\ndf['hour_cos'] = np.cos(2 * np.pi * df['hour'] / 24.0)",
      ["By transforming the feature into two cyclical trigonometric components using Sine and Cosine",
       "By treating hour as a random category string",
       "By squaring the hour values",
       "By subtracting 24 from every hour"],
      0,
      "If left as integers 0-23, a model treats 23 and 0 as maximum distance apart (23 units). Transforming hours via sin(2π*h/24) and cos(2π*h/24) maps time onto a 2D circle where 23:00 and 00:00 are naturally continuous.",
      "PCEI-30-01 Block 3.3 - Cyclical Features",
      ["cyclical-features", "sine-cosine", "time-features"])

add_c(57, "3.3", "Datetime Feature Extraction", "Beginner",
      "What useful numerical and categorical features can be extracted from a pandas `datetime` column?",
      "# Feature extraction from datetime:\ndf['year']        = df['date'].dt.year\ndf['month']       = df['date'].dt.month\ndf['dayofweek']   = df['date'].dt.dayofweek  # 0=Monday, 6=Sunday\ndf['is_weekend']  = df['date'].dt.dayofweek.isin([5, 6]).astype(int)",
      ["Year, month, day of month, day of week, hour, and weekend indicator flags",
       "CPU temperature and RAM clock speed",
       "The operating system version",
       "The geographic location of the satellite that computed the time"],
      0,
      "A raw date string holds rich periodic patterns. Using the `.dt` accessor, engineers extract year, month, day, dayofweek, quarter, and is_weekend flags to feed models temporal seasonality.",
      "PCEI-30-01 Block 3.3 - Datetime Extraction",
      ["datetime", "feature-engineering", "temporal"])

add_c(58, "3.3", "Text Vectorization", "Beginner",
      "What does `CountVectorizer` in scikit-learn do to a collection of text documents?",
      "# Bag-of-Words with CountVectorizer:\nfrom sklearn.feature_extraction.text import CountVectorizer\nvectorizer = CountVectorizer()\nX_counts = vectorizer.fit_transform(['AI is great', 'Python AI is powerful'])",
      ["Converts text documents into a matrix of token word counts (Bag-of-Words representation)",
       "Counts the physical bytes of the text file on the hard drive",
       "Translates text from English into Japanese",
       "Detects whether the text contains grammatical punctuation errors"],
      0,
      "CountVectorizer converts a collection of text documents to a sparse matrix of token counts, implementing the classical Bag-of-Words representation where each unique word becomes a column.",
      "PCEI-30-01 Block 3.3 - CountVectorizer",
      ["countvectorizer", "bag-of-words", "text-features"])

add_c(59, "3.3", "TF-IDF Vectorization", "Intermediate",
      "Why is `TfidfVectorizer` often preferred over simple `CountVectorizer` for text feature representation?",
      "# TF-IDF weighting:\n# Downweights words that appear everywhere across all documents (e.g., 'the', 'is')\nfrom sklearn.feature_extraction.text import TfidfVectorizer\ntfidf = TfidfVectorizer()\nX_tfidf = tfidf.fit_transform(corpus)",
      ["It penalizes and downweights common filler words (like 'the', 'is') that appear across all documents, boosting distinctive informative keywords",
       "It runs 10 times faster than CountVectorizer",
       "It automatically generates realistic AI deepfake voices",
       "It converts text documents directly into PNG images"],
      0,
      "TF-IDF (Term Frequency-Inverse Document Frequency) balances word frequency in a document with its rarity across the corpus, dampening common words that carry little discriminative information.",
      "PCEI-30-01 Block 3.3 - TF-IDF",
      ["tfidf", "nlp", "text-vectorization"])

add_c(60, "3.3", "ColumnTransformer", "Intermediate",
      "What is the purpose of `ColumnTransformer` in scikit-learn pipelines?",
      "# ColumnTransformer combines heterogeneous preprocessing:\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\npreprocessor = ColumnTransformer(transformers=[\n    ('num', StandardScaler(), ['age', 'salary']),\n    ('cat', OneHotEncoder(), ['department', 'gender'])\n])",
      ["To apply different preprocessing transformations (e.g., StandardScaler to numeric features, OneHotEncoder to categorical features) simultaneously within a single pipeline",
       "To change the physical column widths in an Excel spreadsheet",
       "To rename database columns to lowercase letters",
       "To delete columns that contain text data"],
      0,
      "Real-world datasets contain mixed types. ColumnTransformer allows specifying different preprocessing transformers for different subsets of columns (numeric vs categorical), integrating cleanly into a single unified pipeline.",
      "PCEI-30-01 Block 3.3 - ColumnTransformer",
      ["columntransformer", "pipelines", "scikit-learn"])

# ==========================================
# CHAPTER 3.4: Exploratory Data Analysis & Descriptive Statistics (Cards 61-80)
# ==========================================
add_c(61, "3.4", "Central Tendency", "Beginner",
      "What are the three primary statistical measures of 'Central Tendency'?",
      "# Measures of central tendency in Python:\nmean_val   = df['score'].mean()\nmedian_val = df['score'].median()\nmode_val   = df['score'].mode()[0]",
      ["Mean, Median, and Mode", "Variance, Standard Deviation, and Range", "Precision, Recall, and F1-Score", "Entropy, Gini, and Information Gain"],
      0,
      "The three classical measures of central tendency are the Mean (arithmetic average), Median (middle value when sorted), and Mode (most frequent value).",
      "PCEI-30-01 Block 3.4 - Central Tendency",
      ["mean", "median", "mode", "statistics"])

add_c(62, "3.4", "Dispersion Metrics", "Beginner",
      "What statistical property do Variance and Standard Deviation measure in a feature distribution?",
      "# Variance and Standard Deviation in NumPy:\nvar_val = np.var(arr)   # Average squared deviation from the mean\nstd_val = np.std(arr)   # Square root of variance (in original units)",
      ["The degree of spread, dispersion, or variability of the data points around their mean",
       "The central point where 50% of values lie",
       "The number of rows in the dataset",
       "The rate at which the CPU processes instructions"],
      0,
      "Variance and Standard Deviation quantify dispersion: how spread out the data points are around the arithmetic mean. Low standard deviation means points cluster tightly; high means points are spread widely.",
      "PCEI-30-01 Block 3.4 - Dispersion",
      ["variance", "standard-deviation", "spread"])

add_c(63, "3.4", "Units of Dispersion", "Intermediate",
      "Why is Standard Deviation (σ) often easier to interpret in business reporting than Variance (σ²)?",
      "# Units comparison:\n# Salary data in dollars ($)\n# Variance: in squared dollars ($^2) -> Hard to interpret!\n# Std Dev:  in actual dollars ($)   -> Easily understood!",
      ["Standard deviation is expressed in the exact same units as the original data, whereas variance is expressed in squared units",
       "Standard deviation is always a whole integer, while variance is always a fraction",
       "Standard deviation can only be positive, while variance is always negative",
       "Variance requires specialized cloud software to calculate"],
      0,
      "Because variance squares the deviations, its units are squared (e.g., dollars² or meters²). Taking the square root gives standard deviation, restoring the original physical unit of measurement (e.g., dollars or meters).",
      "PCEI-30-01 Block 3.4 - Standard Deviation Units",
      ["std-dev", "variance", "units"])

add_c(64, "3.4", "Pearson Correlation", "Beginner",
      "What is the mathematical range of the Pearson Correlation Coefficient (r), and what does r = -1.0 signify?",
      "# Pearson correlation:\n# Range: -1.0 to +1.0\n# +1.0: Perfect positive linear relationship\n#  0.0: No linear relationship\n# -1.0: Perfect negative (inverse) linear relationship\ncorr_matrix = df.corr()",
      ["Ranges from -1.0 to +1.0; -1.0 indicates a perfect negative (inverse) linear relationship",
       "Ranges from 0.0 to 100.0; -1.0 indicates an error",
       "Ranges from -infinity to +infinity; -1.0 indicates weak correlation",
       "Ranges from 0.0 to 1.0; -1.0 is mathematically impossible"],
      0,
      "Pearson's r ranges from -1.0 to +1.0. A value of +1.0 indicates a perfect positive linear relationship; 0 indicates no linear correlation; -1.0 indicates a perfect inverse linear relationship (as X increases, Y decreases).",
      "PCEI-30-01 Block 3.4 - Pearson Correlation",
      ["pearson-correlation", "linear-relationship", "eda"])

add_c(65, "3.4", "Correlation vs Causation", "Beginner",
      "Why is the principle 'Correlation does not imply Causation' critical in AI and data analysis?",
      "# Spurious correlation example:\n# High ice cream sales correlate with high drowning rates\n# Confounding variable: Hot summer weather causes BOTH!",
      ["Just because two variables share a statistical correlation does not mean that one variable causes the other; a confounding third variable may drive both",
       "Correlation algorithms are mathematically flawed and should never be used",
       "Causation can only be proven using neural networks with 100 layers",
       "Correlation is illegal in medical research"],
      0,
      "Correlation simply measures co-movement. Confounding variables (e.g., hot weather driving both ice cream sales and swimming drownings) often create strong spurious correlations where no direct causal link exists.",
      "PCEI-30-01 Block 3.4 - Correlation vs Causation",
      ["correlation", "causation", "confounding-variables"])

add_c(66, "3.4", "Non-Linear Correlation", "Intermediate",
      "If two variables have a perfect non-linear U-shaped relationship (e.g., y = x² where x spans -10 to +10), what will Pearson's r approximately equal?",
      "# Pearson r on symmetric quadratic curve:\nimport numpy as np\nx = np.linspace(-10, 10, 100)\ny = x ** 2\nr = np.corrcoef(x, y)[0, 1]  # r is approximately 0.0!",
      ["Approximately 0.0, because Pearson correlation only measures strictly linear relationships",
       "1.0, because the relationship is deterministic",
       "-1.0, because the curve goes down first",
       "0.5, because half the curve is positive"],
      0,
      "Pearson's r evaluates strictly linear relationships. For symmetric non-linear functions (like y = x² centered at 0), Pearson correlation yields 0.0 despite the variables being completely and deterministically dependent.",
      "PCEI-30-01 Block 3.4 - Non-Linear Correlation",
      ["pearson", "non-linear", "limitations"])

add_c(67, "3.4", "Spearman Rank Correlation", "Intermediate",
      "When is Spearman's Rank Correlation preferred over Pearson's Correlation?",
      "# Spearman rank correlation in pandas:\nspearman_corr = df.corr(method='spearman')",
      ["When evaluating monotonic non-linear relationships or ordinal ranked data, as it is less sensitive to extreme outliers than Pearson",
       "When data is strictly normal and linear",
       "When datasets have fewer than 10 total samples",
       "When calculating correlations on audio speech signals"],
      0,
      "Spearman's rank correlation assesses monotonic relationships based on ranked values rather than raw values, making it robust against non-linear monotonic curves and severe outliers.",
      "PCEI-30-01 Block 3.4 - Spearman Correlation",
      ["spearman", "rank-correlation", "monotonic"])

add_c(68, "3.4", "Skewness", "Intermediate",
      "What does 'Skewness' describe about a feature's probability distribution?",
      "# Skewness in pandas:\nskew_val = df['income'].skew()\n# skew > 0: Right-skewed (long tail to the right)\n# skew < 0: Left-skewed  (long tail to the left)\n# skew == 0: Symmetric (normal bell curve)",
      ["The asymmetry of the probability distribution around its mean (positive/right-skewed vs negative/left-skewed)",
       "The total area under the probability density curve",
       "The maximum height of the distribution peak",
       "The rate at which the dataset was downloaded from the server"],
      0,
      "Skewness measures distribution asymmetry. Positive skewness (right-skewed) means the right tail is longer with mass concentrated on the left (e.g., income). Negative skewness (left-skewed) means a long left tail.",
      "PCEI-30-01 Block 3.4 - Skewness",
      ["skewness", "asymmetry", "distribution"])

add_c(69, "3.4", "Kurtosis", "Intermediate",
      "What does 'Kurtosis' quantify regarding a probability distribution?",
      "# Kurtosis in pandas:\nkurt_val = df['returns'].kurt()\n# High kurtosis (leptokurtic): Heavy tails, prone to extreme outliers (fat tails)",
      ["The 'tailedness' and propensity of the distribution to produce extreme outlier values (fat tails)",
       "The horizontal shift of the distribution mean",
       "The number of missing values in the column",
       "The frequency of string capitalization errors"],
      0,
      "Kurtosis measures the weight of the distribution tails relative to the center. High kurtosis (leptokurtic, 'fat tails') indicates that extreme outlier events happen much more frequently than in a normal Gaussian distribution.",
      "PCEI-30-01 Block 3.4 - Kurtosis",
      ["kurtosis", "fat-tails", "outlier-risk"])

add_c(70, "3.4", "Summary Statistics", "Beginner",
      "Which pandas method outputs a comprehensive statistical summary including count, mean, std, min, 25%, 50%, 75%, and max for numerical columns?",
      "import pandas as pd\n# Generate summary statistics:\nsummary_table = df.describe()",
      ["df.describe()", "df.summary()", "df.stats()", "df.aggregate()"],
      0,
      "df.describe() generates descriptive summary statistics for all numeric columns: count, mean, standard deviation, minimum, 25th percentile (Q1), median (50%), 75th percentile (Q3), and maximum.",
      "PCEI-30-01 Block 3.4 - df.describe",
      ["pandas", "describe", "summary-statistics"])

add_c(71, "3.4", "Normal Distribution Properties", "Beginner",
      "In a perfectly symmetrical Normal (Gaussian) distribution, what is the relationship between the Mean, Median, and Mode?",
      "# Normal distribution property:\n# Mean == Median == Mode (all coincide at the center peak)",
      ["Mean = Median = Mode (all three central values coincide at the center peak)",
       "Mean > Median > Mode",
       "Mode > Median > Mean",
       "Mean is double the Median"],
      0,
      "In a unimodal, perfectly symmetric Normal distribution, the mean, median, and mode are identical and sit directly at the peak center of the bell curve.",
      "PCEI-30-01 Block 3.4 - Normal Distribution",
      ["gaussian", "symmetry", "central-tendency"])

add_c(72, "3.4", "Empirical Rule", "Intermediate",
      "According to the 68-95-99.7 Empirical Rule for normal distributions, what percentage of observations fall within two standard deviations (±2σ) of the mean?",
      "# Empirical rule:\n# ±1 sigma: ~68.2%\n# ±2 sigma: ~95.4%\n# ±3 sigma: ~99.7%",
      ["Approximately 95%", "Approximately 68%", "Approximately 99.7%", "Approximately 50%"],
      0,
      "The empirical (three-sigma) rule states that for a normal distribution, ~68% of data lies within 1 standard deviation, ~95% lies within 2 standard deviations, and ~99.7% lies within 3 standard deviations of the mean.",
      "PCEI-30-01 Block 3.4 - Empirical Rule",
      ["empirical-rule", "three-sigma", "standard-deviation"])

add_c(73, "3.4", "Multicollinearity", "Intermediate",
      "What is 'Multicollinearity' and why is it problematic in multiple linear regression?",
      "# Multicollinearity:\n# Feature A (Height in cm) and Feature B (Height in inches) are 100% correlated!\n# Causes unstable coefficient estimates and high p-values",
      ["When two or more independent features are highly linearly correlated with each other, making coefficient estimates unstable and uninterpretable",
       "When a dataset contains multiple target variables",
       "When numbers are displayed in multiple colors on a screen",
       "When a regression model produces zero error"],
      0,
      "Multicollinearity occurs when predictor features are strongly correlated with one another. This causes high variance in regression coefficient estimates, making it impossible to isolate the individual effect of each feature.",
      "PCEI-30-01 Block 3.4 - Multicollinearity",
      ["multicollinearity", "linear-regression", "vif"])

add_c(74, "3.4", "VIF Metric", "Advanced",
      "What diagnostic metric is standard for detecting multicollinearity among features in regression analysis?",
      "# Variance Inflation Factor (VIF):\n# VIF > 5 or 10 indicates severe multicollinearity\nfrom statsmodels.stats.outliers_influence import variance_inflation_factor",
      ["Variance Inflation Factor (VIF)", "Area Under the Curve (AUC)", "Mean Absolute Percentage Error (MAPE)", "Gini Impurity Index"],
      0,
      "Variance Inflation Factor (VIF) measures how much the variance of an estimated regression coefficient increases due to collinearity with other features. VIF values exceeding 5 or 10 signal severe multicollinearity.",
      "PCEI-30-01 Block 3.4 - VIF",
      ["vif", "variance-inflation-factor", "multicollinearity"])

add_c(75, "3.4", "Anscombe Quartet", "Intermediate",
      "What fundamental lesson does 'Anscombe's Quartet' illustrate to data scientists?",
      "# Anscombe's Quartet:\n# Four distinct datasets with IDENTICAL means, variances, and regression lines,\n# yet completely different shapes and distributions when plotted visually!",
      ["Statistical summaries (mean, variance, correlation) can be identical across radically different datasets, proving that visualizing data graphically is essential",
       "Linear regression is mathematically immune to all outliers",
       "Datasets should never contain more than four columns",
       "Statistical charts should always be rendered in black and white"],
      0,
      "Anscombe's Quartet consists of four datasets with identical basic summary statistics (mean, variance, regression line, r = 0.816) that reveal wildly different distributions and outliers when plotted, proving the necessity of EDA visualization.",
      "PCEI-30-01 Block 3.4 - Anscombe's Quartet",
      ["anscombes-quartet", "visualization-importance", "eda"])

add_c(76, "3.4", "Covariance", "Intermediate",
      "What is the mathematical difference between Covariance and Correlation?",
      "# Covariance depends on units: Cov(X, Y) = E[(X - μ_X)(Y - μ_Y)]\n# Correlation is standardized (unitless): Corr(X, Y) = Cov(X, Y) / (σ_X * σ_Y)",
      ["Covariance measures direction of joint variability in raw data units, while Correlation is standardized by standard deviations to be scale-invariant (-1 to +1)",
       "Covariance only measures negative numbers, while correlation only measures positive numbers",
       "Covariance requires deep learning, while correlation requires basic arithmetic",
       "There is no difference; they are exact technical synonyms"],
      0,
      "Covariance indicates the direction of a linear relationship, but its magnitude depends on the units of measurement. Correlation normalizes covariance by dividing by the product of standard deviations, yielding a scale-free value between -1 and +1.",
      "PCEI-30-01 Block 3.4 - Covariance vs Correlation",
      ["covariance", "correlation", "scale-invariance"])

add_c(77, "3.4", "Quantiles & Percentiles", "Beginner",
      "What does the 75th Percentile (Q3) of a test score distribution represent?",
      "# Quantile in pandas:\nq3_score = df['score'].quantile(0.75)",
      ["The score below which 75% of all observations fall",
       "A score equal to 75 out of 100 points",
       "The average score of the top 25 students",
       "The percentage of students who failed the exam"],
      0,
      "A percentile indicates the value below which a given percentage of observations fall. The 75th percentile (Q3) means that 75% of the data points have values equal to or less than this threshold.",
      "PCEI-30-01 Block 3.4 - Percentiles",
      ["percentiles", "quantiles", "q3"])

add_c(78, "3.4", "Interquartile Range", "Beginner",
      "How is the Interquartile Range (IQR) calculated?",
      "# IQR calculation:\niqr = df['salary'].quantile(0.75) - df['salary'].quantile(0.25)",
      ["IQR = Q3 - Q1 (75th percentile minus 25th percentile)",
       "IQR = Maximum value - Minimum value",
       "IQR = Mean / Standard deviation",
       "IQR = Median * 2"],
      0,
      "The Interquartile Range (IQR) represents the spread of the middle 50% of the dataset, calculated by subtracting the first quartile (25th percentile) from the third quartile (75th percentile): IQR = Q3 - Q1.",
      "PCEI-30-01 Block 3.4 - IQR",
      ["iqr", "spread", "percentiles"])

add_c(79, "3.4", "Simpson Paradox", "Advanced",
      "What is 'Simpson's Paradox' in exploratory data analysis?",
      "# Simpson's Paradox:\n# A trend appears in several groups of data, but disappears or reverses when groups are aggregated together!",
      ["A statistical phenomenon where a trend appears in individual subgroup analyses, but reverses or disappears when the subgroups are aggregated together",
       "An error where a Python loop executes infinitely",
       "A paradox where adding more RAM makes computer programs run slower",
       "A situation where all neural network weights converge to zero"],
      0,
      "Simpson's Paradox occurs when aggregated group data conceals or inverts the true relationship present within individual demographic subgroups, usually caused by an overlooked confounding variable.",
      "PCEI-30-01 Block 3.4 - Simpson's Paradox",
      ["simpsons-paradox", "confounding", "aggregation"])

add_c(80, "3.4", "EDA Purpose", "Beginner",
      "What is the ultimate purpose of Exploratory Data Analysis (EDA) prior to machine learning modeling?",
      "# EDA objectives:\n# Understand data structure, detect anomalies/outliers, test hypotheses, uncover patterns, and guide feature engineering",
      ["To understand data structure, detect anomalies, verify assumptions, uncover patterns, and guide appropriate feature engineering and model selection",
       "To immediately deploy a 100-layer neural network to production",
       "To convert all tabular datasets into compressed PDF manuals",
       "To eliminate the need for computer programming"],
      0,
      "EDA is the foundational phase where practitioners investigate datasets, summarize main characteristics, spot outliers and missingness, evaluate distributions, and formulate hypotheses to guide feature engineering and modeling.",
      "PCEI-30-01 Block 3.4 - EDA Purpose",
      ["eda", "methodology", "data-science"])

# ==========================================
# CHAPTER 3.5: Data Visualization for AI (Cards 81-100)
# ==========================================
add_c(81, "3.5", "Histogram", "Beginner",
      "What is the primary purpose of a 'Histogram' in exploratory data analysis?",
      "# Plotting a histogram in matplotlib:\nimport matplotlib.pyplot as plt\nplt.hist(df['age'], bins=20, edgecolor='black')\nplt.show()",
      ["To visualize the frequency distribution, shape, skewness, and spread of a single continuous numerical variable",
       "To plot the exact geographical coordinates of GPS tracking units",
       "To show relationships between two independent categorical features",
       "To display hierarchical organizational chart structures"],
      0,
      "A histogram bins continuous numerical data into discrete intervals and counts the occurrences in each bin, displaying the shape, modality, center, and skewness of the underlying distribution.",
      "PCEI-30-01 Block 3.5 - Histogram",
      ["histogram", "distribution", "visualization"])

add_c(82, "3.5", "Scatter Plot", "Beginner",
      "Which chart type is standard for visualizing the relationship and correlation between two continuous numerical variables?",
      "# Scatter plot in matplotlib:\nplt.scatter(df['square_feet'], df['price'], alpha=0.5)\nplt.xlabel('Square Feet')\nplt.ylabel('Price')\nplt.show()",
      ["Scatter Plot", "Pie Chart", "Stacked Bar Chart", "Treemap"],
      0,
      "A scatter plot plots individual observation pairs along Cartesian X and Y axes, making it the premier tool for visually assessing linear or non-linear correlation, clustering, and bivariate outliers.",
      "PCEI-30-01 Block 3.5 - Scatter Plot",
      ["scatter-plot", "bivariate", "correlation"])

add_c(83, "3.5", "Box Plot", "Beginner",
      "What five summary statistics are visually represented by the five horizontal lines of a standard 'Box Plot' (Box-and-Whisker plot)?",
      "# Box plot components:\n# Minimum (Q1 - 1.5*IQR), Q1 (25%), Median (50%), Q3 (75%), Maximum (Q3 + 1.5*IQR)\n# Individual points beyond whiskers are plotted as outlier dots!\nimport seaborn as sns\nsns.boxplot(x=df['salary'])",
      ["Minimum (Q1 - 1.5*IQR), First Quartile (Q1), Median, Third Quartile (Q3), and Maximum (Q3 + 1.5*IQR)",
       "Mean, Mode, Variance, Standard deviation, and Kurtosis",
       "Training loss, Validation loss, Accuracy, F1-score, and AUC",
       "Zero, One, Ten, Fifty, and One Hundred"],
      0,
      "A box plot visualizes Tukey's 5-number summary: lower whisker (Q1 - 1.5*IQR), bottom box (Q1), line inside box (Median), top box (Q3), and upper whisker (Q3 + 1.5*IQR), with individual dots marking outliers.",
      "PCEI-30-01 Block 3.5 - Box Plot",
      ["box-plot", "outliers", "five-number-summary"])

add_c(84, "3.5", "Heatmap", "Beginner",
      "How is a Seaborn 'Heatmap' used to evaluate feature relationships across a dataset?",
      "# Correlation heatmap in Seaborn:\nimport seaborn as sns\nimport matplotlib.pyplot as plt\ncorr = df.corr()\nsns.heatmap(corr, annot=True, cmap='coolwarm', vmin=-1, vmax=1)\nplt.show()",
      ["To display a 2D color-coded matrix of pairwise correlation coefficients, allowing instant visual identification of strong correlations and multicollinearity",
       "To measure the thermal temperature of server cooling fans",
       "To show satellite thermal weather imagery",
       "To display color-coded source code syntax highlighting"],
      0,
      "sns.heatmap(df.corr(), annot=True) renders a color-coded matrix of pairwise Pearson correlations, enabling rapid visual triage of multicollinear feature pairs and features strongly correlated with the target.",
      "PCEI-30-01 Block 3.5 - Heatmap",
      ["heatmap", "correlation-matrix", "seaborn"])

add_c(85, "3.5", "Bar Chart vs Histogram", "Beginner",
      "What is the difference between a Bar Chart and a Histogram?",
      "# Bar chart: Discrete categories on X-axis\n# Histogram: Continuous quantitative bins on X-axis",
      ["A Bar Chart displays frequencies of discrete categorical categories; a Histogram displays continuous numerical data grouped into range bins",
       "A Bar Chart is strictly 3D, while a Histogram is 2D",
       "A Histogram can only be rendered in grayscale",
       "There is no difference; they are exact technical synonyms"],
      0,
      "Bar charts plot distinct categorical levels (with spaces between bars representing discrete categories). Histograms plot continuous quantitative variables grouped into adjacent bins without artificial gaps.",
      "PCEI-30-01 Block 3.5 - Bar Chart vs Histogram",
      ["bar-chart", "histogram", "data-types"])

add_c(86, "3.5", "Pairplot", "Intermediate",
      "What does Seaborn's `sns.pairplot(df, hue='class')` generate?",
      "# Pairplot in Seaborn:\nimport seaborn as sns\nsns.pairplot(df, hue='species')\n# Generates a grid of scatter plots for all feature pairs + histograms on diagonal!",
      ["A grid of pairwise scatter plots for all numerical features, with univariate distribution plots along the diagonal, color-coded by class",
       "A pair of audio files comparing speech models",
       "A line plot showing GPU memory versus CPU memory",
       "A single pie chart divided into two halves"],
      0,
      "sns.pairplot() visualizes pairwise bivariate relationships across every numeric feature combination in a multi-panel matrix grid, with univariate histograms/KDEs along the diagonal and class color coding.",
      "PCEI-30-01 Block 3.5 - Pairplot",
      ["pairplot", "seaborn", "multivariate-eda"])

add_c(87, "3.5", "Violin Plot", "Intermediate",
      "What does a 'Violin Plot' combine that makes it richer than a traditional Box Plot?",
      "# Violin plot in Seaborn:\nsns.violinplot(x='category', y='value', data=df)",
      ["A traditional box plot combined with a rotated Kernel Density Estimate (KDE) plot on each side, showing distribution multimodal peaks",
       "An acoustic waveform audio player with a line chart",
       "A bar chart combined with an operating system terminal window",
       "A 3D surface mesh plot with musical notation"],
      0,
      "A violin plot displays the same summary statistics as a box plot (median, interquartile range), but extends it with a mirrored kernel density plot, revealing multimodality (multiple peaks) that box plots hide.",
      "PCEI-30-01 Block 3.5 - Violin Plot",
      ["violin-plot", "kde", "distribution"])

add_c(88, "3.5", "Matplotlib Subplots", "Intermediate",
      "How do you instantiate a figure with a 2x2 grid of subplots in Matplotlib?",
      "import matplotlib.pyplot as plt\n# Create 2 rows and 2 columns of subplots:\nfig, axes = plt.subplots(nrows=2, ncols=2, figsize=(10, 8))",
      ["fig, axes = plt.subplots(2, 2)", "fig = plt.grid(4)", "fig = plt.multi_chart(2, 2)", "fig, axes = plt.create_panels(4)"],
      0,
      "plt.subplots(nrows, ncols) returns a Figure object and a 2D NumPy array of Axes objects (axes[0, 0], axes[0, 1]...) allowing programmatic plotting across a clean multi-panel canvas.",
      "PCEI-30-01 Block 3.5 - Subplots",
      ["matplotlib", "subplots", "layout"])

add_c(89, "3.5", "Line Plot", "Beginner",
      "When is a Line Plot (`plt.plot()`) the most appropriate choice of visualization?",
      "# Line plot for time series:\nplt.plot(df['date'], df['daily_sales'])\nplt.xlabel('Date')\nplt.ylabel('Sales ($)')",
      ["When visualizing how continuous quantitative metrics evolve sequentially over time (Time Series data)",
       "When displaying the percentage breakdown of survey respondents' favorite fruits",
       "When clustering unlabeled customer demographic points in 2D space",
       "When displaying pairwise feature correlation matrices"],
      0,
      "Line plots connect sequential data points with continuous line segments, making them ideal for tracking trends, cycles, and volatility in time series and sequential ordered processes.",
      "PCEI-30-01 Block 3.5 - Line Plot",
      ["line-plot", "time-series", "trends"])

add_c(90, "3.5", "Residual Plot", "Intermediate",
      "In regression diagnostics, what should a healthy, well-specified 'Residual Plot' (residuals vs predicted values) look like?",
      "# Residual plot diagnostics:\nresiduals = y_test - y_pred\nplt.scatter(y_pred, residuals)\nplt.axhline(0, color='red', linestyle='--')\n# Ideal: Random, uniform scatter around zero line with constant variance (homoscedasticity)",
      ["Points should be randomly, uniformly scattered around the horizontal zero line with no obvious patterns or funnel shapes",
       "Points should form a tight curved U-shape line",
       "Points should form an expanding funnel shape",
       "Points should all lie strictly on the positive side of the line"],
      0,
      "In an ideal regression model, residuals exhibit homoscedasticity: errors scatter randomly and uniformly around 0 across all prediction levels. Funnel shapes signal heteroscedasticity; curves signal unmodeled non-linearity.",
      "PCEI-30-01 Block 3.5 - Residual Plot",
      ["residual-plot", "homoscedasticity", "regression-diagnostics"])

add_c(91, "3.5", "Countplot", "Beginner",
      "Which Seaborn function generates a categorical frequency bar chart for class balance inspection?",
      "# Inspecting class distribution in Seaborn:\nimport seaborn as sns\nsns.countplot(x='churn', data=df)",
      ["sns.countplot()", "sns.freq_bars()", "sns.bar_freq()", "sns.count_matrix()"],
      0,
      "sns.countplot() shows the counts of observations in each categorical bin using bars, making it the primary visualization for inspecting class balance (e.g., checking if Churn=1 is heavily outnumbered).",
      "PCEI-30-01 Block 3.5 - Countplot",
      ["countplot", "class-balance", "seaborn"])

add_c(92, "3.5", "Confusion Matrix Display", "Intermediate",
      "How is a Confusion Matrix best communicated visually to both technical and non-technical stakeholders?",
      "# Visualizing confusion matrix in scikit-learn:\nfrom sklearn.metrics import ConfusionMatrixDisplay\nConfusionMatrixDisplay.from_predictions(y_test, y_pred, cmap='Blues')",
      ["As a color-coded heatmap with counts and percentages annotated in each quadrant, clearly labeling True Positives, False Positives, True Negatives, and False Negatives",
       "As an unformatted text list of raw floating-point numbers",
       "As a single 3D pie chart",
       "As an animated line plot that loops continuously"],
      0,
      "Using ConfusionMatrixDisplay with a color gradient (heatmap) and numerical annotations makes misclassification patterns (e.g., high False Positives vs False Negatives) immediately legible.",
      "PCEI-30-01 Block 3.5 - Confusion Matrix Display",
      ["confusion-matrix-display", "heatmap", "communication"])

add_c(93, "3.5", "Learning Curves", "Intermediate",
      "What do 'Learning Curves' (plotting Training Loss and Validation Loss against Epochs) diagnose in model training?",
      "# Learning curve visualization:\n# Epochs on X-axis, Loss on Y-axis\n# Diagnoses underfitting, overfitting, and learning rate issues",
      ["They diagnose whether a model is underfitting, overfitting, or converging properly over training iterations",
       "They measure the physical typing speed of the developer",
       "They track the depreciation of computer hardware over years",
       "They show the number of git commits made to the repository"],
      0,
      "Learning curves plot training and validation loss per epoch. If training loss drops while validation loss begins rising, the model is overfitting; if both losses plateau high, the model is underfitting.",
      "PCEI-30-01 Block 3.5 - Learning Curves",
      ["learning-curves", "loss-curves", "diagnostics"])

add_c(94, "3.5", "Pie Charts Critique", "Beginner",
      "Why do data visualization experts generally discourage using Pie Charts for comparing categorical distributions?",
      "# Visualization best practice:\n# Human perception struggles to compare 2D angles/slices accurately compared to 1D bar lengths",
      ["Human visual perception struggles to accurately judge and compare angles and 2D area slices compared to linear bar lengths",
       "Pie charts consume 10 times more computer memory to render",
       "Pie charts are not supported in Python libraries",
       "Pie charts can only be rendered with three slices"],
      0,
      "Research in human visual perception shows that people judge lengths (bar charts) with much greater precision than angles or slice areas (pie charts), especially when categories have similar percentages.",
      "PCEI-30-01 Block 3.5 - Pie Chart Critique",
      ["pie-charts", "perception", "best-practices"])

add_c(95, "3.5", "Colorblind Accessibility", "Beginner",
      "Why is choosing accessible color palettes (like 'viridis' or 'cividis') considered a best practice in AI chart design?",
      "# Accessible colormap in matplotlib:\nplt.imshow(matrix, cmap='viridis')",
      ["They are perceptually uniform and can be read clearly by individuals with color vision deficiencies (like red-green color blindness) and print legibly in grayscale",
       "They use brighter neon colors that distract the viewer",
       "They consume less electrical power on OLED monitors",
       "They are legally copyrighted by Python Institute"],
      0,
      "Perceptually uniform colormaps like 'viridis' ensure equal visual weight across values, remain completely legible to color-blind individuals (avoiding red-green confusion), and convert cleanly to black-and-white print.",
      "PCEI-30-01 Block 3.5 - Accessible Visualizations",
      ["accessibility", "colorblind", "colormaps"])

add_c(96, "3.5", "Log-Scale Plotting", "Intermediate",
      "When is setting a logarithmic scale on a plot axis (`plt.yscale('log')`) essential?",
      "# Log-scale plotting for exponential phenomena:\nplt.plot(iterations, loss_values)\nplt.yscale('log')",
      ["When data spans multiple orders of magnitude (e.g., from 0.001 to 1,000,000) or displays exponential growth/decay",
       "When all data values are negative numbers",
       "When plotting categorical bar charts",
       "When data is already normally distributed"],
      0,
      "When data covers multiple powers of ten (e.g., wealth, population, or loss over training), linear scales compress smaller values into an unreadable flat line. A logarithmic axis reveals trends across all orders of magnitude.",
      "PCEI-30-01 Block 3.5 - Log Scale",
      ["log-scale", "orders-of-magnitude", "matplotlib"])

add_c(97, "3.5", "Interactive Plots", "Beginner",
      "What capability do interactive plotting libraries like Plotly provide over static Matplotlib charts?",
      "# Plotly interactive visualization:\nimport plotly.express as px\nfig = px.scatter(df, x='age', y='income', hover_data=['name'])",
      ["They allow users to hover over data points to inspect metadata, zoom, pan, and filter categories dynamically in a web browser",
       "They convert Python code into native Android APK packages",
       "They run machine learning algorithms on graphics card processors",
       "They prevent users from copying chart data"],
      0,
      "Interactive tools like Plotly generate HTML/JavaScript visualizations enabling tooltips on hover, dynamic click-to-filter legends, box-zooming, and panning, greatly enhancing exploratory data inspection.",
      "PCEI-30-01 Block 3.5 - Interactive Visualizations",
      ["plotly", "interactive", "tooltips"])

add_c(98, "3.5", "KDE Plot", "Intermediate",
      "What does a Kernel Density Estimation (KDE) plot represent?",
      "# KDE plot in Seaborn:\nsns.kdeplot(data=df['income'], fill=True)",
      ["A smooth, continuous estimate of the probability density function of a random variable, derived by summing Gaussian kernels placed at each data point",
       "A line plot showing kernel crash errors in the Linux operating system",
       "A 3D rendering of a computer processor cooling unit",
       "A diagram showing SQL database table relationships"],
      0,
      "KDE is a non-parametric way to estimate the probability density function of a continuous variable. It smooths out discrete histogram bin artifacts by placing a continuous kernel (typically Gaussian) over each observation.",
      "PCEI-30-01 Block 3.5 - KDE",
      ["kde", "kernel-density", "probability-density"])

add_c(99, "3.5", "Feature Importance Plot", "Intermediate",
      "Why is a horizontal bar chart of Feature Importances standard in model interpretation reports?",
      "# Plotting feature importances:\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfeat_imp = pd.Series(model.feature_importances_, index=feature_names).sort_values()\nfeat_imp.plot(kind='barh')\nplt.title('Feature Importances')",
      ["It ranks and visually communicates which input features contributed most significantly to the model's predictions, providing transparency to stakeholders",
       "It measures the download speed of each column from the cloud",
       "It counts the number of characters in each feature name",
       "It displays the salary of each data scientist on the team"],
      0,
      "Plotting feature importances as a ranked horizontal bar chart provides an intuitive visual summary of which features drive the model's decisions, helping domain experts validate model logic and verify fairness.",
      "PCEI-30-01 Block 3.5 - Feature Importance Plot",
      ["feature-importance", "model-explainability", "bar-chart"])

add_c(100, "3.5", "Misleading Charts", "Beginner",
      "What common deceptive chart practice distorts visual comparisons on bar charts?",
      "# Deceptive visualization practice:\n# Truncating Y-axis (e.g., starting Y at 95 instead of 0) exaggerates tiny 1% differences into massive visual bars!",
      ["Truncating the Y-axis (not starting at zero), which visually exaggerates tiny, insignificant differences into massive gaps",
       "Using black font color for axis titles",
       "Adding gridlines to aid readability",
       "Including a descriptive title and axis labels"],
      0,
      "Starting a bar chart Y-axis above zero truncates the baseline, causing small, inconsequential percentage variations (e.g., 98% vs 99%) to appear as dramatic visual differences, misleading non-technical viewers.",
      "PCEI-30-01 Block 3.5 - Deceptive Visualizations",
      ["deceptive-charts", "y-axis-truncation", "ethics"])

# ==========================================
# WRITE OUTPUT FILES
# ==========================================
assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

def to_ts_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pcei',\n"
        f"    section: {json.dumps(c['section'])},\n"
        f"    chapter: {json.dumps(c['chapter'])},\n"
        f"    category: {json.dumps(c['category'])},\n"
        f"    difficulty: {json.dumps(c['difficulty'])},\n"
        f"    question: {json.dumps(c['question'])},\n"
        f"    codeSnippet: {json.dumps(c['codeSnippet'])},\n"
        f"    options: [\n" + ",\n".join(f"      {json.dumps(opt)}" for opt in c['options']) + "\n    ],\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_ts_file(filepath, var_name, cards_list):
    content = "import { Flashcard } from '../types';\n\n"
    content += f"export const {var_name}: Flashcard[] = [\n"
    content += ",\n".join(to_ts_card(c) for c in cards_list)
    content += "\n];\n"
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Wrote {len(cards_list)} cards to {filepath}")

write_ts_file("src/data/pceiSection3CardsPart1.ts", "pceiSection3CardsPart1", cards[:50])
write_ts_file("src/data/pceiSection3CardsPart2.ts", "pceiSection3CardsPart2", cards[50:])

with open("src/data/pceiSection3Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceiSection3CardsPart1 } from './pceiSection3CardsPart1';
import { pceiSection3CardsPart2 } from './pceiSection3CardsPart2';

export const pceiSection3Flashcards: Flashcard[] = [
  ...pceiSection3CardsPart1,
  ...pceiSection3CardsPart2,
];
""")
print("Wrote pceiSection3Flashcards.ts successfully!")
