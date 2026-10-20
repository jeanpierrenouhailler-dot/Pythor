import { Flashcard } from '../types';

export const pceiSection3CardsPart1: Flashcard[] = [
  {
    id: "pcei-3-001",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Data Ingestion",
    difficulty: "Beginner",
    question: "Which pandas function is standard for loading comma-separated tabular data from disk into a DataFrame?",
    codeSnippet: "import pandas as pd\n# Load dataset from file:\ndf = pd.read_csv('housing_data.csv')",
    options: [
      "pd.read_csv()",
      "pd.load_table()",
      "pd.open_csv()",
      "pd.import_data()"
    ],
    correctAnswer: 0,
    explanation: "pd.read_csv() is the standard and most widely used pandas function for reading delimiter-separated text files (like CSVs) into tabular pandas DataFrames.",
    officialRef: "PCEI-30-01 Block 3.1 - CSV Ingestion",
    tags: ["pandas", "read_csv", "data-loading"]
  },
  {
    id: "pcei-3-002",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "NumPy Arrays",
    difficulty: "Beginner",
    question: "Why are NumPy `ndarray` objects preferred over standard native Python lists for numerical AI computations?",
    codeSnippet: "# NumPy vectorized array creation:\nimport numpy as np\narr = np.array([1.0, 2.5, 3.8], dtype=np.float32)",
    options: [
      "NumPy arrays store elements in contiguous memory blocks with homogeneous types, enabling optimized C-level vectorization and SIMD execution",
      "NumPy arrays automatically compress files into ZIP archives",
      "Python lists can only hold string characters, never floating-point numbers",
      "NumPy arrays run exclusively on external GPU cloud clusters"
    ],
    correctAnswer: 0,
    explanation: "NumPy ndarrays store homogeneous data in contiguous memory blocks. This eliminates Python interpreter object overhead and allows optimized, vectorized C/Fortran routines (BLAS/LAPACK) to execute blazingly fast.",
    officialRef: "PCEI-30-01 Block 3.1 - NumPy Arrays",
    tags: ["numpy", "ndarray", "vectorization"]
  },
  {
    id: "pcei-3-003",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "DataFrame Inspection",
    difficulty: "Beginner",
    question: "Which pandas DataFrame method displays the count of non-null entries, column names, and memory usage summary?",
    codeSnippet: "import pandas as pd\ndf = pd.DataFrame({'age': [25, 30], 'salary': [50000, 60000]})\ndf.info()",
    options: [
      "df.info()",
      "df.describe()",
      "df.head()",
      "df.summary()"
    ],
    correctAnswer: 0,
    explanation: "df.info() prints a concise summary of a DataFrame, including the index dtype, column dtypes, non-null value counts per column, and current memory usage.",
    officialRef: "PCEI-30-01 Block 3.1 - DataFrame Inspection",
    tags: ["pandas", "info", "eda"]
  },
  {
    id: "pcei-3-004",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "DataFrame Inspection",
    difficulty: "Beginner",
    question: "What does `df.shape` return for a DataFrame with 1,000 rows and 12 columns?",
    codeSnippet: "import pandas as pd\n# Inspect dimensionality:\nshape_tuple = df.shape",
    options: [
      "(1000, 12)",
      "(12, 1000)",
      "1000",
      "12000"
    ],
    correctAnswer: 0,
    explanation: "The .shape attribute of a pandas DataFrame returns a tuple representing the dimensionality in (rows, columns) format: (1000, 12).",
    officialRef: "PCEI-30-01 Block 3.1 - DataFrame Shape",
    tags: ["pandas", "shape", "dimensionality"]
  },
  {
    id: "pcei-3-005",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "JSON Ingestion",
    difficulty: "Intermediate",
    question: "How do you load structured hierarchical JSON data from an API response into a Python dictionary or pandas DataFrame?",
    codeSnippet: "import json\nimport pandas as pd\nraw_json = '{\"users\": [{\"id\": 1, \"score\": 95}, {\"id\": 2, \"score\": 88}]}'\ndata = json.loads(raw_json)\ndf = pd.json_normalize(data['users'])",
    options: [
      "Using json.loads() to parse the JSON string, and pd.json_normalize() to flatten nested records into a DataFrame",
      "Using pd.read_sql_query()",
      "Using os.system('unzip json.zip')",
      "Using numpy.fromstring(raw_json)"
    ],
    correctAnswer: 0,
    explanation: "json.loads() decodes raw JSON strings into nested Python dictionaries. pandas provides pd.json_normalize() to flatten semi-structured nested JSON lists into tabular 2D DataFrames.",
    officialRef: "PCEI-30-01 Block 3.1 - JSON Ingestion",
    tags: ["json", "json_normalize", "api-data"]
  },
  {
    id: "pcei-3-006",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "DataFrame Slicing",
    difficulty: "Beginner",
    question: "What is the difference between `.loc[]` and `.iloc[]` in pandas indexers?",
    codeSnippet: "# Slicing in pandas:\nrow_label = df.loc['patient_101']   # Label-based\nrow_pos   = df.iloc[0]               # Integer position-based",
    options: [
      ".loc[] accesses rows/columns by label/name, whereas .iloc[] accesses rows/columns by integer index position",
      ".loc[] only selects columns, while .iloc[] only selects rows",
      ".loc[] runs on local disk, while .iloc[] runs on the internet",
      ".loc[] modifies data permanently, while .iloc[] is read-only"
    ],
    correctAnswer: 0,
    explanation: "df.loc[] is strictly label-based (using row index names and column header strings). df.iloc[] is integer position-based (using zero-indexed integer offsets 0, 1, 2...).",
    officialRef: "PCEI-30-01 Block 3.1 - loc vs iloc",
    tags: ["pandas", "loc", "iloc", "indexing"]
  },
  {
    id: "pcei-3-007",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "NumPy Reshaping",
    difficulty: "Intermediate",
    question: "What will be the shape of `arr.reshape(-1, 1)` if `arr` originally has a 1D shape of `(500,)`?",
    codeSnippet: "import numpy as np\narr = np.arange(500)\nreshaped = arr.reshape(-1, 1)",
    options: [
      "(500, 1)",
      "(1, 500)",
      "(500,)",
      "(250, 2)"
    ],
    correctAnswer: 0,
    explanation: "Using -1 in reshape() instructs NumPy to infer that dimension automatically based on length. For 500 elements, reshape(-1, 1) converts a 1D array into a 2D column vector of shape (500, 1).",
    officialRef: "PCEI-30-01 Block 3.1 - NumPy Reshape",
    tags: ["numpy", "reshape", "array-dimensions"]
  },
  {
    id: "pcei-3-008",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Data Types in AI",
    difficulty: "Intermediate",
    question: "Why is converting 64-bit floats (`float64`) to 32-bit (`float32`) or 16-bit (`float16`) common in deep learning data pipelines?",
    codeSnippet: "# Precision casting:\nimport numpy as np\nX = np.array([[1.5, 2.3]], dtype=np.float32)",
    options: [
      "It cuts memory consumption in half, increases cache efficiency, and accelerates GPU matrix multiplication without noticeable loss in model accuracy",
      "Deep neural networks throw an error if passed float64 numbers",
      "Float32 numbers are legally required for commercial cloud APIs",
      "It completely prevents models from experiencing underfitting"
    ],
    correctAnswer: 0,
    explanation: "Modern neural networks are noise-tolerant: standardizing on float32 (single precision) or bfloat16/float16 halves memory usage, doubles memory throughput, and leverages specialized tensor hardware on GPUs.",
    officialRef: "PCEI-30-01 Block 3.1 - Precision & Data Types",
    tags: ["precision", "float32", "memory-optimization"]
  },
  {
    id: "pcei-3-009",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "SQL Ingestion",
    difficulty: "Intermediate",
    question: "Which pandas method allows executing a SQL SELECT query directly against a database connection to populate a DataFrame?",
    codeSnippet: "import pandas as pd\n# Fetch data directly from relational DB:\ndf = pd.read_sql_query('SELECT user_id, amount FROM transactions WHERE status = 1', conn)",
    options: [
      "pd.read_sql_query()",
      "pd.query_db()",
      "pd.sql_table()",
      "pd.fetch_sql()"
    ],
    correctAnswer: 0,
    explanation: "pd.read_sql_query() executes a SQL query against an active SQLAlchemy or DB-API engine/connection and returns the result table directly as a pandas DataFrame.",
    officialRef: "PCEI-30-01 Block 3.1 - SQL Ingestion",
    tags: ["pandas", "read_sql_query", "databases"]
  },
  {
    id: "pcei-3-010",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Categorical Data Types",
    difficulty: "Intermediate",
    question: "What benefit does converting a string column with few unique values into pandas `category` dtype provide?",
    codeSnippet: "# Memory optimization:\ndf['state'] = df['state'].astype('category')",
    options: [
      "It drastically reduces memory footprint and accelerates grouping and sorting operations",
      "It automatically translates text strings into Spanish",
      "It encrypts the column values using AES-256",
      "It splits the column into 5 separate CSV files"
    ],
    correctAnswer: 0,
    explanation: "Converting repetitive object strings to the categorical dtype replaces memory-heavy strings with lightweight integer code pointers mapped to unique categories, saving up to 80-90% memory.",
    officialRef: "PCEI-30-01 Block 3.1 - Categorical Dtype",
    tags: ["pandas", "category", "memory-optimization"]
  },
  {
    id: "pcei-3-011",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "DataFrame Filtering",
    difficulty: "Beginner",
    question: "In pandas, how do you perform Boolean indexing to select rows where `age > 30` and `salary >= 50000`?",
    codeSnippet: "import pandas as pd\n# Boolean filtering syntax in pandas:\nfiltered_df = df[(df['age'] > 30) & (df['salary'] >= 50000)]",
    options: [
      "df[(df['age'] > 30) & (df['salary'] >= 50000)]",
      "df[df['age'] > 30 and df['salary'] >= 50000]",
      "df.filter(age > 30, salary >= 50000)",
      "df.where('age > 30 && salary >= 50000')"
    ],
    correctAnswer: 0,
    explanation: "pandas uses bitwise operators (& for AND, | for OR, ~ for NOT) with parentheses enclosing each condition for vectorized element-wise Boolean filtering: df[(df['age'] > 30) & (df['salary'] >= 50000)].",
    officialRef: "PCEI-30-01 Block 3.1 - Boolean Indexing",
    tags: ["pandas", "filtering", "boolean-indexing"]
  },
  {
    id: "pcei-3-012",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Array Slicing",
    difficulty: "Beginner",
    question: "In a 2D NumPy array `X` of shape `(100, 5)`, what does the slice `X[:, 0]` extract?",
    codeSnippet: "import numpy as np\nX = np.zeros((100, 5))\ncol_zero = X[:, 0]",
    options: [
      "All rows for the first column (column index 0) as a 1D array of length 100",
      "All columns for the first row as a 1D array of length 5",
      "Only the single scalar element at row 0, column 0",
      "The last column of the matrix"
    ],
    correctAnswer: 0,
    explanation: "The colon `:` in the first dimension selects all rows; `, 0` in the second dimension selects column index 0, returning a 1D array containing the entire first feature column.",
    officialRef: "PCEI-30-01 Block 3.1 - NumPy Slicing",
    tags: ["numpy", "slicing", "2d-arrays"]
  },
  {
    id: "pcei-3-013",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Chunked Ingestion",
    difficulty: "Intermediate",
    question: "Why would an engineer use `chunksize` in `pd.read_csv('huge_file.csv', chunksize=10000)`?",
    codeSnippet: "# Processing larger-than-RAM datasets:\nfor chunk in pd.read_csv('huge_file.csv', chunksize=10000):\n    process_batch(chunk)",
    options: [
      "To iterate over massive datasets in manageable batches without loading the entire multi-gigabyte file into RAM at once",
      "To divide a CSV file into separate physical floppy disks",
      "To run the Python code 10 times faster on GPUs",
      "To automatically correct grammatical typos in text columns"
    ],
    correctAnswer: 0,
    explanation: "Setting chunksize returns an iterable TextFileReader object, yielding DataFrames of size N rows. This enables processing massive datasets that exceed physical computer memory.",
    officialRef: "PCEI-30-01 Block 3.1 - Chunked Ingestion",
    tags: ["pandas", "chunksize", "memory-management"]
  },
  {
    id: "pcei-3-014",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "NumPy Matrix Multiplication",
    difficulty: "Intermediate",
    question: "Which Python operator or NumPy function performs true linear algebra matrix multiplication between two matrices A and B?",
    codeSnippet: "# Matrix multiplication:\nimport numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = A @ B  # Or np.matmul(A, B)",
    options: [
      "A @ B (or np.matmul(A, B))",
      "A * B",
      "A ** B",
      "A % B"
    ],
    correctAnswer: 0,
    explanation: "In modern Python/NumPy, the `@` operator (or np.matmul()) performs matrix dot products. The `*` operator performs element-wise Hadamard multiplication.",
    officialRef: "PCEI-30-01 Block 3.1 - Matrix Multiplication",
    tags: ["numpy", "matrix-multiplication", "matmul"]
  },
  {
    id: "pcei-3-015",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Handling Headers",
    difficulty: "Beginner",
    question: "If a CSV file does not contain a header row, what parameter must be passed to `pd.read_csv()` to prevent the first data row from becoming column names?",
    codeSnippet: "import pandas as pd\n# Reading raw data without column headers:\ndf = pd.read_csv('data.csv', header=None)",
    options: [
      "header=None",
      "no_header=True",
      "skip_header=True",
      "names=[]"
    ],
    correctAnswer: 0,
    explanation: "Passing `header=None` prevents pandas from treating the first line of numbers as header strings, automatically assigning default zero-indexed column integers (0, 1, 2...).",
    officialRef: "PCEI-30-01 Block 3.1 - CSV Headers",
    tags: ["pandas", "header", "csv-parsing"]
  },
  {
    id: "pcei-3-016",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "NumPy Broadcasting",
    difficulty: "Intermediate",
    question: "What is 'Broadcasting' in NumPy arithmetic operations?",
    codeSnippet: "# Broadcasting scalar addition to 1D array:\nimport numpy as np\narr = np.array([10, 20, 30])\nresult = arr + 5  # Output: [15, 25, 35]",
    options: [
      "The mechanism that allows NumPy to perform arithmetic operations on arrays of differing shapes by virtually stretching the smaller array without memory copies",
      "Transmitting dataset packets over local Wi-Fi radio frequencies",
      "Broadcasting video tutorials to team members",
      "Streaming model logs to Discord chat channels"
    ],
    correctAnswer: 0,
    explanation: "Broadcasting describes how NumPy treats arrays with differing shapes during arithmetic operations: subject to constraints, smaller arrays are 'broadcast' across larger arrays so they have compatible shapes.",
    officialRef: "PCEI-30-01 Block 3.1 - NumPy Broadcasting",
    tags: ["numpy", "broadcasting", "vectorization"]
  },
  {
    id: "pcei-3-017",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Exporting Data",
    difficulty: "Beginner",
    question: "When exporting a DataFrame to a CSV using `df.to_csv('output.csv', index=False)`, why is `index=False` typically specified?",
    codeSnippet: "import pandas as pd\n# Export clean data:\ndf.to_csv('clean_data.csv', index=False)",
    options: [
      "To prevent pandas from writing an unnamed integer index column (0, 1, 2...) as the first column in the CSV file",
      "To disable CSV file compression",
      "To encrypt the file using SHA-256",
      "To ensure all numeric values are formatted as integers"
    ],
    correctAnswer: 0,
    explanation: "By default, to_csv() writes the DataFrame index as the first column. Specifying `index=False` prevents polluting the exported CSV with an unnecessary 'Unnamed: 0' index column.",
    officialRef: "PCEI-30-01 Block 3.1 - Exporting Data",
    tags: ["pandas", "to_csv", "index"]
  },
  {
    id: "pcei-3-018",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Series vs DataFrame",
    difficulty: "Beginner",
    question: "In pandas, what is the architectural relationship between a Series and a DataFrame?",
    codeSnippet: "# Series vs DataFrame:\n# A DataFrame is a 2D table composed of multiple 1D Series columns\nseries_col = df['salary']  # 1D pandas Series",
    options: [
      "A Series is a single 1D labeled array column; a DataFrame is a 2D tabular data structure composed of multiple aligned Series",
      "A Series is 3D, while a DataFrame is 2D",
      "A Series is stored on disk, while a DataFrame is stored in CPU registers",
      "There is no difference; they are exact technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "A pandas Series is a 1-dimensional labeled array capable of holding any data type. A DataFrame is a 2-dimensional labeled data structure where each column is essentially a Series sharing a common index.",
    officialRef: "PCEI-30-01 Block 3.1 - Series vs DataFrame",
    tags: ["pandas", "series", "dataframe"]
  },
  {
    id: "pcei-3-019",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "NumPy Random Seed",
    difficulty: "Beginner",
    question: "Why is `np.random.seed(42)` called before generating synthetic data or initializing weights?",
    codeSnippet: "import numpy as np\n# Ensure deterministic reproducible random sequences:\nnp.random.seed(42)\nrand_vals = np.random.rand(3)",
    options: [
      "To ensure deterministic pseudo-random number generation so that experiments and results are fully reproducible",
      "To speed up random number generation by 10x",
      "To guarantee that all generated numbers are positive integers",
      "To connect to an online quantum random number generator"
    ],
    correctAnswer: 0,
    explanation: "Setting a random seed initializes the pseudo-random generator with a fixed starting point, ensuring that anyone running the script gets the exact same sequence of 'random' numbers for experimental reproducibility.",
    officialRef: "PCEI-30-01 Block 3.1 - Reproducibility",
    tags: ["numpy", "random-seed", "reproducibility"]
  },
  {
    id: "pcei-3-020",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.1",
    category: "Data Parsing Dates",
    difficulty: "Intermediate",
    question: "Which parameter in `pd.read_csv()` instructs pandas to automatically parse date strings into datetime objects during loading?",
    codeSnippet: "import pandas as pd\n# Automatically parse date columns:\ndf = pd.read_csv('sales.csv', parse_dates=['transaction_date'])",
    options: [
      "parse_dates=['column_name']",
      "convert_datetime=True",
      "auto_dates=True",
      "datetime_cols=['column_name']"
    ],
    correctAnswer: 0,
    explanation: "The `parse_dates` parameter in pd.read_csv() takes a list of column names, instructing pandas to parse matching text strings into proper datetime64 objects during ingestion.",
    officialRef: "PCEI-30-01 Block 3.1 - Parsing Dates",
    tags: ["pandas", "parse_dates", "timestamps"]
  },
  {
    id: "pcei-3-021",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Missing Values Detection",
    difficulty: "Beginner",
    question: "Which pandas method returns a Boolean DataFrame indicating which cells contain missing values (`NaN` / `None`)?",
    codeSnippet: "import pandas as pd\n# Check for missing values:\nmissing_mask = df.isna()\n# Or df.isnull().sum()",
    options: [
      "df.isna() (or df.isnull())",
      "df.is_missing()",
      "df.check_empty()",
      "df.has_nan()"
    ],
    correctAnswer: 0,
    explanation: "df.isna() (and its alias df.isnull()) returns a DataFrame of Booleans where True represents missing (NaN/None) values. Calling df.isna().sum() shows the count of missing values per column.",
    officialRef: "PCEI-30-01 Block 3.2 - Missing Value Detection",
    tags: ["pandas", "isna", "isnull", "data-cleaning"]
  },
  {
    id: "pcei-3-022",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Dropping Missing Values",
    difficulty: "Beginner",
    question: "What does `df.dropna(axis=0)` do to a pandas DataFrame?",
    codeSnippet: "import pandas as pd\n# Remove rows with any missing values:\nclean_df = df.dropna(axis=0)",
    options: [
      "Drops all rows that contain at least one missing (NaN) value",
      "Drops all columns that contain at least one missing (NaN) value",
      "Replaces all NaN values with zeros",
      "Deletes the entire DataFrame from memory"
    ],
    correctAnswer: 0,
    explanation: "axis=0 (default) in dropna() drops any row containing one or more NaN values. Using axis=1 drops entire columns containing missing values.",
    officialRef: "PCEI-30-01 Block 3.2 - dropna",
    tags: ["pandas", "dropna", "rows"]
  },
  {
    id: "pcei-3-023",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Imputation Strategies",
    difficulty: "Intermediate",
    question: "What is 'Imputation' in data preprocessing, and why is it often preferred over simply dropping rows with `dropna()`?",
    codeSnippet: "# Mean imputation example:\nmean_val = df['age'].mean()\ndf['age'] = df['age'].fillna(mean_val)",
    options: [
      "Replacing missing values with calculated estimates (mean, median, mode) to preserve valuable sample size and avoid data loss",
      "Deleting entire columns that have more than 5 missing cells",
      "Converting missing values into encrypted strings",
      "Training a deep neural network to fabricate customer names"
    ],
    correctAnswer: 0,
    explanation: "Dropping rows discards valuable data, especially if rows contain useful non-missing features elsewhere. Imputation replaces missing entries with statistical estimates (like mean or median), preserving sample size for model training.",
    officialRef: "PCEI-30-01 Block 3.2 - Imputation",
    tags: ["imputation", "fillna", "missing-data"]
  },
  {
    id: "pcei-3-024",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Mean vs Median Imputation",
    difficulty: "Intermediate",
    question: "When imputing missing values in a numerical column with extreme outliers (e.g., Household Wealth), why is Median preferred over Mean?",
    codeSnippet: "# Median vs Mean in skewed data:\n# Wealth: [50k, 60k, 55k, 52k, 100M] -> Mean is heavily skewed by billionaire outlier!\nmedian_wealth = df['wealth'].median()",
    options: [
      "The median is robust against extreme outliers and skewness, whereas the mean is distorted by extreme values",
      "The median is always a positive integer, while the mean is a negative float",
      "The median requires 100 times less CPU memory to calculate",
      "The mean is mathematically undefined for continuous numbers"
    ],
    correctAnswer: 0,
    explanation: "The arithmetic mean is pulled towards extreme outliers. In skewed distributions (like income or wealth), the median represents the true typical value much more reliably.",
    officialRef: "PCEI-30-01 Block 3.2 - Median Imputation",
    tags: ["median", "mean", "outliers", "robustness"]
  },
  {
    id: "pcei-3-025",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Categorical Imputation",
    difficulty: "Beginner",
    question: "Which statistical measure is standard for imputing missing values in a categorical column (e.g., 'Payment_Method')?",
    codeSnippet: "# Categorical imputation using Mode (most frequent value):\nmode_payment = df['payment_method'].mode()[0]\ndf['payment_method'] = df['payment_method'].fillna(mode_payment)",
    options: [
      "Mode (the most frequently occurring category)",
      "Mean (the arithmetic average)",
      "Standard deviation",
      "Euclidean distance"
    ],
    correctAnswer: 0,
    explanation: "You cannot compute the mean or median of non-numeric categories (like 'Credit Card', 'PayPal'). The Mode (the most frequent category) is the standard statistical imputation choice for categorical data.",
    officialRef: "PCEI-30-01 Block 3.2 - Mode Imputation",
    tags: ["mode", "categorical", "imputation"]
  },
  {
    id: "pcei-3-026",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Duplicate Detection",
    difficulty: "Beginner",
    question: "Which pandas method identifies duplicate rows across a DataFrame?",
    codeSnippet: "import pandas as pd\n# Find duplicate rows:\ndupes = df.duplicated()\nprint('Count of duplicate rows:', dupes.sum())",
    options: [
      "df.duplicated()",
      "df.find_copies()",
      "df.is_repeated()",
      "df.check_twins()"
    ],
    correctAnswer: 0,
    explanation: "df.duplicated() returns a Boolean Series denoting duplicate rows based on all or specified columns. Calling df.drop_duplicates() removes them.",
    officialRef: "PCEI-30-01 Block 3.2 - Duplicates",
    tags: ["pandas", "duplicated", "data-cleaning"]
  },
  {
    id: "pcei-3-027",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Dropping Duplicates",
    difficulty: "Beginner",
    question: "How do you remove duplicate rows from a DataFrame while retaining the first occurrence in pandas?",
    codeSnippet: "import pandas as pd\n# Remove duplicate rows:\nclean_df = df.drop_duplicates(keep='first')",
    options: [
      "df.drop_duplicates(keep='first')",
      "df.remove_repeats()",
      "df.unique_rows()",
      "df.clean_copies()"
    ],
    correctAnswer: 0,
    explanation: "df.drop_duplicates() drops duplicate rows. The `keep='first'` argument (the default) preserves the first encountered occurrence while dropping all subsequent duplicates.",
    officialRef: "PCEI-30-01 Block 3.2 - drop_duplicates",
    tags: ["pandas", "drop_duplicates", "deduplication"]
  },
  {
    id: "pcei-3-028",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Outliers in AI",
    difficulty: "Beginner",
    question: "What is an 'Outlier' in a machine learning dataset?",
    codeSnippet: "# Outlier illustration:\n# Normal values: [20, 22, 21, 23, 20, 19, 999]\n# 999 deviates markedly from all other observations",
    options: [
      "A data point that deviates markedly and abnormally from the overall pattern of the rest of the observations in the dataset",
      "A row that contains only negative numbers",
      "A column that has been renamed by the data scientist",
      "A data point that was recorded outside of standard working hours"
    ],
    correctAnswer: 0,
    explanation: "An outlier is an observation that lies an abnormal distance away from other values in a random sample from a population, potentially caused by measurement error, experimental variability, or genuine novelty.",
    officialRef: "PCEI-30-01 Block 3.2 - Outliers",
    tags: ["outliers", "anomaly", "definitions"]
  },
  {
    id: "pcei-3-029",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "IQR Outlier Detection",
    difficulty: "Intermediate",
    question: "In the Interquartile Range (IQR) method, how are statistical outlier boundaries commonly defined?",
    codeSnippet: "# IQR outlier boundaries:\n# Q1: 25th percentile, Q3: 75th percentile, IQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR",
    options: [
      "Lower bound = Q1 - 1.5 * IQR, and Upper bound = Q3 + 1.5 * IQR",
      "Lower bound = Mean - 5 * Std, and Upper bound = Mean + 5 * Std",
      "Lower bound = Minimum value / 2, and Upper bound = Maximum value * 2",
      "Lower bound = 0, and Upper bound = 100"
    ],
    correctAnswer: 0,
    explanation: "Tukey's IQR method defines outliers as points falling below Q1 - 1.5*IQR or above Q3 + 1.5*IQR, where IQR is the middle 50% spread of the data (Q3 - Q1).",
    officialRef: "PCEI-30-01 Block 3.2 - IQR Method",
    tags: ["iqr", "tukey", "outlier-detection"]
  },
  {
    id: "pcei-3-030",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Z-Score Outlier Detection",
    difficulty: "Intermediate",
    question: "In a standard normal distribution, data points with an absolute Z-score greater than what threshold are commonly flagged as statistical outliers?",
    codeSnippet: "# Z-score calculation: Z = (X - mean) / std\n# Under standard normal curve, 99.7% of data lies within 3 standard deviations\noutliers = df[abs(df['z_score']) > 3.0]",
    options: [
      "3.0 (or -3.0)",
      "0.5",
      "10.0",
      "100.0"
    ],
    correctAnswer: 0,
    explanation: "Under the empirical 68-95-99.7 rule, 99.7% of data in a normal distribution falls within 3 standard deviations of the mean. Values with |Z| > 3.0 are considered extreme statistical outliers.",
    officialRef: "PCEI-30-01 Block 3.2 - Z-Score",
    tags: ["z-score", "standard-deviations", "outliers"]
  },
  {
    id: "pcei-3-031",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "String Cleaning",
    difficulty: "Beginner",
    question: "How do you strip leading and trailing whitespace from every text value in a pandas column?",
    codeSnippet: "import pandas as pd\n# Clean string column:\ndf['city'] = df['city'].str.strip()",
    options: [
      "df['city'] = df['city'].str.strip()",
      "df['city'] = df['city'].trim()",
      "df['city'] = strip(df['city'])",
      "df['city'] = df['city'].clean_spaces()"
    ],
    correctAnswer: 0,
    explanation: "pandas provides string methods under the `.str` accessor. `df['col'].str.strip()` vectorizes Python's str.strip() across all text elements in the Series.",
    officialRef: "PCEI-30-01 Block 3.2 - String Cleaning",
    tags: ["pandas", "str.strip", "text-cleaning"]
  },
  {
    id: "pcei-3-032",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Replacing Values",
    difficulty: "Beginner",
    question: "How do you replace placeholder strings like `'?'` or `'N/A'` with actual `np.nan` values in pandas?",
    codeSnippet: "import numpy as np\nimport pandas as pd\n# Replace placeholder markers with actual NaN:\ndf.replace(['?', 'N/A'], np.nan, inplace=True)",
    options: [
      "df.replace(['?', 'N/A'], np.nan, inplace=True)",
      "df.convert_nulls(['?'])",
      "df.clean_marks('?')",
      "df.strip_na()"
    ],
    correctAnswer: 0,
    explanation: "df.replace() allows replacing specified values, lists, or regex patterns with target values like np.nan across the entire DataFrame or specific columns.",
    officialRef: "PCEI-30-01 Block 3.2 - df.replace",
    tags: ["pandas", "replace", "nan"]
  },
  {
    id: "pcei-3-033",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Data Type Conversion",
    difficulty: "Beginner",
    question: "Which pandas method is used to explicitly cast a column's data type (e.g., converting integer strings to floats)?",
    codeSnippet: "import pandas as pd\n# Type casting:\ndf['price'] = df['price'].astype(float)",
    options: [
      "df['price'].astype(float)",
      "df['price'].to_type('float')",
      "df['price'].convert(float)",
      "df['price'].cast('float')"
    ],
    correctAnswer: 0,
    explanation: ".astype() is the standard pandas method for casting a Series from one data type to another (e.g., .astype(float), .astype('int32'), .astype('category')).",
    officialRef: "PCEI-30-01 Block 3.2 - astype",
    tags: ["pandas", "astype", "type-casting"]
  },
  {
    id: "pcei-3-034",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "K-NN Imputation",
    difficulty: "Intermediate",
    question: "How does scikit-learn's `KNNImputer` estimate missing feature values?",
    codeSnippet: "# KNNImputer in scikit-learn:\nfrom sklearn.impute import KNNImputer\nimputer = KNNImputer(n_neighbors=5)\nX_imputed = imputer.fit_transform(X)",
    options: [
      "By averaging the non-missing values of the K nearest neighboring samples based on Euclidean distance",
      "By filling missing values with random numbers between 0 and 1",
      "By using optical character recognition to read the screen",
      "By running K rounds of Monte Carlo tree search"
    ],
    correctAnswer: 0,
    explanation: "KNNImputer replaces missing values in a sample using the mean value from the K nearest neighbors that possess non-missing values for that feature, preserving complex multivariate relationships.",
    officialRef: "PCEI-30-01 Block 3.2 - KNNImputer",
    tags: ["knnimputer", "multivariate-imputation", "scikit-learn"]
  },
  {
    id: "pcei-3-035",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Indicator Variables",
    difficulty: "Intermediate",
    question: "What is the purpose of adding a 'Missingness Indicator' column (`MissingIndicator` in scikit-learn) alongside imputed values?",
    codeSnippet: "# Missingness indicator pattern:\n# Feature: income (imputed with median)\n# Indicator: income_was_missing (1 if originally NaN, else 0)",
    options: [
      "To explicitly inform the machine learning model that a value was originally missing, as the fact that data was missing may itself be a predictive signal",
      "To reduce the physical storage size of the database by 50%",
      "To prevent hackers from viewing the dataset",
      "To delete rows that were missing at test time"
    ],
    correctAnswer: 0,
    explanation: "Data is often Missing Not at Random (MNAR). Adding a binary Boolean indicator (1 if imputed, 0 if original) allows the model to learn whether the fact that a user withheld information is predictive.",
    officialRef: "PCEI-30-01 Block 3.2 - Missing Indicator",
    tags: ["missing-indicator", "mnar", "feature-engineering"]
  },
  {
    id: "pcei-3-036",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Winsorization",
    difficulty: "Intermediate",
    question: "What is 'Winsorization' (clipping) when handling numerical outliers?",
    codeSnippet: "# Winsorization / Clipping in pandas:\nlower_limit = df['income'].quantile(0.01)\nupper_limit = df['income'].quantile(0.99)\ndf['income'] = df['income'].clip(lower_limit, upper_limit)",
    options: [
      "Capping extreme values at specified percentiles (e.g., 1st and 99th percentiles) rather than discarding the rows entirely",
      "Deleting all rows with income above $100,000",
      "Converting income into British Pounds Sterling",
      "Rounding all income numbers to the nearest integer"
    ],
    correctAnswer: 0,
    explanation: "Winsorization (implemented via df.clip()) limits extreme values by replacing values beyond specified thresholds (e.g., 99th percentile) with the threshold value, mitigating outlier distortion without losing data rows.",
    officialRef: "PCEI-30-01 Block 3.2 - Winsorization",
    tags: ["winsorization", "clipping", "outlier-treatment"]
  },
  {
    id: "pcei-3-037",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Garbage In Garbage Out",
    difficulty: "Beginner",
    question: "What does the universal computing adage 'Garbage In, Garbage Out' (GIGO) emphasize in artificial intelligence systems?",
    codeSnippet: "# GIGO concept:\n# High-capacity ML models trained on noisy, biased, or erroneous data will output erroneous predictions",
    options: [
      "Regardless of how sophisticated an AI algorithm is, its predictions will be flawed and unreliable if trained on poor-quality, noisy, or biased data",
      "Computers must be cleaned with disinfectant spray weekly",
      "Old hard drives must be discarded in municipal recycling bins",
      "Software developers should delete their source code after compiling"
    ],
    correctAnswer: 0,
    explanation: "GIGO emphasizes that model quality is strictly bounded by data quality. Flawed, noisy, biased, or incorrectly preprocessed data inevitably leads to unreliable, misleading model outputs.",
    officialRef: "PCEI-30-01 Block 3.2 - GIGO",
    tags: ["gigo", "data-quality", "principles"]
  },
  {
    id: "pcei-3-038",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Class Imbalance Preprocessing",
    difficulty: "Intermediate",
    question: "What technique can be used during preprocessing to balance a dataset where the positive class is heavily outnumbered (e.g., 99% vs 1%)?",
    codeSnippet: "# Synthetic Minority Over-sampling Technique (SMOTE):\nfrom imblearn.over_sampling import SMOTE\nsmote = SMOTE(random_state=42)\nX_res, y_res = smote.fit_resample(X_train, y_train)",
    options: [
      "Resampling techniques like SMOTE (Synthetic Minority Over-sampling) or random under-sampling of the majority class",
      "Deleting all columns with continuous floating-point numbers",
      "Encrypting the class labels with AES",
      "Dividing the number of rows by the number of columns"
    ],
    correctAnswer: 0,
    explanation: "Class imbalance can be addressed by over-sampling the minority class (e.g., SMOTE synthesizes new examples along feature vectors) or under-sampling the majority class to balance class distributions during training.",
    officialRef: "PCEI-30-01 Block 3.2 - Resampling",
    tags: ["smote", "class-imbalance", "resampling"]
  },
  {
    id: "pcei-3-039",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Data Integrity Verification",
    difficulty: "Beginner",
    question: "Why should data preprocessing pipelines verify data ranges and domain constraints (e.g., `assert (df['age'] >= 0).all()`)?",
    codeSnippet: "# Asserting domain validity:\nassert (df['age'] >= 0).all() and (df['age'] <= 125).all(), 'Impossible age values detected!'",
    options: [
      "To catch data corruption, sensor malfunction, or impossible values (like negative ages or 300\u00b0C human body temperature) before training",
      "To speed up GPU matrix multiplication operations",
      "To encrypt the data against cyber attacks",
      "To reduce the visual brightness of computer monitors"
    ],
    correctAnswer: 0,
    explanation: "Domain constraint validation checks that data conforms to real-world sanity rules (e.g., ages between 0 and 125, percentages between 0 and 100), catching ingestion errors and corrupted records early.",
    officialRef: "PCEI-30-01 Block 3.2 - Data Validation",
    tags: ["data-validation", "assertions", "domain-constraints"]
  },
  {
    id: "pcei-3-040",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.2",
    category: "Pipeline Leakage Prevention",
    difficulty: "Intermediate",
    question: "Where should `fit()` and `transform()` be applied when preprocessing features to strictly prevent data leakage?",
    codeSnippet: "# Proper pipeline execution:\n# Fit on TRAINING data only; transform both train and test!\nscaler.fit(X_train)\nX_train_scaled = scaler.transform(X_train)\nX_test_scaled  = scaler.transform(X_test)",
    options: [
      "Fit on the training data ONLY, then use those fitted parameters to transform both the training and test sets",
      "Fit on the test data ONLY, and transform the training set",
      "Fit on the entire combined dataset before splitting",
      "Never call fit() on any dataset"
    ],
    correctAnswer: 0,
    explanation: "To prevent data leakage, preprocessing transformers (scalers, encoders, imputers) must learn parameters (fit) exclusively on the training partition, and then apply (transform) those exact parameters to the test set.",
    officialRef: "PCEI-30-01 Block 3.2 - Leakage Prevention",
    tags: ["fit-transform", "data-leakage", "pipeline"]
  },
  {
    id: "pcei-3-041",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Normalization",
    difficulty: "Intermediate",
    question: "What mathematical transformation does Min-Max Normalization perform on a feature?",
    codeSnippet: "# Min-Max Scaling formula:\n# X_norm = (X - X_min) / (X_max - X_min)\n# Scales values into the range [0, 1]\nfrom sklearn.preprocessing import MinMaxScaler",
    options: [
      "It rescales feature values into a fixed bounded range between 0 and 1: (X - min) / (max - min)",
      "It shifts the mean to 0 and standard deviation to 1",
      "It calculates the base-10 logarithm of the feature",
      "It rounds all decimal values to the nearest integer"
    ],
    correctAnswer: 0,
    explanation: "Min-Max Normalization shifts and rescales values so that they end up bounded between 0 and 1: (X - X_min) / (X_max - X_min), making it ideal for algorithms expecting bounded inputs (like neural networks).",
    officialRef: "PCEI-30-01 Block 3.3 - Normalization",
    tags: ["minmax-scaler", "normalization", "feature-scaling"]
  },
  {
    id: "pcei-3-042",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Standardization",
    difficulty: "Intermediate",
    question: "What transformation does Standardization (Z-score scaling / `StandardScaler`) perform on a feature?",
    codeSnippet: "# Standardization formula:\n# z = (x - mean) / std\n# Results in mean = 0, standard deviation = 1\nfrom sklearn.preprocessing import StandardScaler",
    options: [
      "It centers the feature around a mean of 0 with a unit standard deviation of 1: (X - \u03bc) / \u03c3",
      "It bounds all values strictly between 0.0 and 1.0",
      "It converts numerical features into text descriptions",
      "It multiplies all features by the square root of 2"
    ],
    correctAnswer: 0,
    explanation: "Standardization subtracts the mean and divides by standard deviation: z = (x - \u03bc) / \u03c3. The resulting distribution has a mean of 0 and a standard deviation of 1, preserving outlier signals better than min-max scaling.",
    officialRef: "PCEI-30-01 Block 3.3 - Standardization",
    tags: ["standard-scaler", "z-score", "feature-scaling"]
  },
  {
    id: "pcei-3-043",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "One-Hot Encoding",
    difficulty: "Beginner",
    question: "What does 'One-Hot Encoding' do to a nominal categorical feature (e.g., `Color` with values `['Red', 'Green', 'Blue']`)?",
    codeSnippet: "# One-Hot Encoding example:\nimport pandas as pd\ndf_encoded = pd.get_dummies(df, columns=['Color'])",
    options: [
      "It converts the category into separate binary (0/1) indicator columns for each unique category value",
      "It assigns arbitrary integer numbers (1, 2, 3) to each color in alphabetical order",
      "It deletes the column from the dataset",
      "It calculates the RGB wavelength of each color"
    ],
    correctAnswer: 0,
    explanation: "One-hot encoding creates N binary columns (e.g., Color_Red, Color_Green, Color_Blue). Each row has a 1 in its matching category column and 0 in all others, preventing algorithms from assuming false ordinal rankings.",
    officialRef: "PCEI-30-01 Block 3.3 - One-Hot Encoding",
    tags: ["one-hot-encoding", "get_dummies", "categorical"]
  },
  {
    id: "pcei-3-044",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Label Encoding",
    difficulty: "Beginner",
    question: "When is 'Label Encoding' (or Ordinal Encoding) appropriate rather than One-Hot Encoding?",
    codeSnippet: "# Ordinal Encoding:\n# Size: 'Small' -> 0, 'Medium' -> 1, 'Large' -> 2 (Natural mathematical ranking exists!)\nfrom sklearn.preprocessing import OrdinalEncoder",
    options: [
      "When the categorical feature has a natural intrinsic ranking or order (e.g., 'Low', 'Medium', 'High' -> 0, 1, 2)",
      "When the categorical feature has no order, like car brand names",
      "When the dataset has fewer than 10 total rows",
      "When target labels are continuous floating-point numbers"
    ],
    correctAnswer: 0,
    explanation: "Label/Ordinal encoding assigns integers (0, 1, 2...). It is ideal when categories have a meaningful intrinsic order (e.g., T-shirt sizes: S < M < L). Using it on unordered nominal data (e.g., colors) can mislead linear models.",
    officialRef: "PCEI-30-01 Block 3.3 - Label Encoding",
    tags: ["label-encoding", "ordinal", "categorical"]
  },
  {
    id: "pcei-3-045",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Dummy Variable Trap",
    difficulty: "Intermediate",
    question: "What is the 'Dummy Variable Trap' in linear regression, and how is it resolved?",
    codeSnippet: "# Multicollinearity from one-hot encoding:\n# If we have Gender_Male and Gender_Female: Gender_Female = 1 - Gender_Male (Perfect collinearity!)\n# Resolved by dropping first category:\npd.get_dummies(df['gender'], drop_first=True)",
    options: [
      "Perfect multicollinearity caused by including all N one-hot columns in linear models; resolved by dropping one column (drop_first=True)",
      "A computer virus hidden inside CSV files",
      "An error where decision trees create infinite loops",
      "A trap where all numeric columns are deleted accidentally"
    ],
    correctAnswer: 0,
    explanation: "If a categorical feature has N categories, including all N binary columns introduces perfect linear dependency (the sum of columns equals 1). In linear models, one column must be omitted (`drop_first=True`) to avoid singular matrices.",
    officialRef: "PCEI-30-01 Block 3.3 - Dummy Variable Trap",
    tags: ["dummy-variable-trap", "multicollinearity", "drop_first"]
  },
  {
    id: "pcei-3-046",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Feature Engineering",
    difficulty: "Beginner",
    question: "What is 'Feature Engineering' in applied machine learning?",
    codeSnippet: "# Feature engineering example:\n# Creating a new informative ratio from existing raw columns:\ndf['debt_to_income'] = df['total_debt'] / df['annual_income']",
    options: [
      "Using domain knowledge to create new informative features, transformations, or interactions from raw data to boost model performance",
      "Writing automated unit tests for software deployment",
      "Upgrading the physical hardware components of a GPU server",
      "Compressing database backup files into ZIP archives"
    ],
    correctAnswer: 0,
    explanation: "Feature engineering transforms raw data into formats better suited for algorithms: extracting date parts (day of week), combining ratios (debt-to-income), or computing aggregations to expose underlying patterns.",
    officialRef: "PCEI-30-01 Block 3.3 - Feature Engineering",
    tags: ["feature-engineering", "ratios", "domain-knowledge"]
  },
  {
    id: "pcei-3-047",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Log Transformation",
    difficulty: "Intermediate",
    question: "Why is a Log Transformation (`np.log1p(x)`) frequently applied to highly right-skewed features (like Income, Views, or House Prices)?",
    codeSnippet: "# Log transformation:\nimport numpy as np\n# Compresses long right tails into more normal, symmetric distributions\ndf['log_income'] = np.log1p(df['income'])",
    options: [
      "It compresses extreme positive outliers and transforms skewed, heavy-tailed distributions into a more symmetric bell-shaped distribution",
      "It converts all numbers into positive prime integers",
      "It divides numbers by the speed of light",
      "It speeds up CPU calculations by exactly 50%"
    ],
    correctAnswer: 0,
    explanation: "Right-skewed features have long tails of extreme values. A log transform compresses large values much more than small values, stabilizing variance and transforming skewed distributions closer to normal Gaussian behavior.",
    officialRef: "PCEI-30-01 Block 3.3 - Log Transformation",
    tags: ["log-transform", "skewness", "normalization"]
  },
  {
    id: "pcei-3-048",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Binning / Discretization",
    difficulty: "Intermediate",
    question: "What does 'Binning' (Discretization) do to a continuous numerical feature in pandas?",
    codeSnippet: "# Binning continuous age into generational brackets:\nimport pandas as pd\ndf['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 65, 100], labels=['Child', 'Young Adult', 'Adult', 'Senior'])",
    options: [
      "Converts a continuous numerical variable into discrete categorical intervals or buckets (e.g., grouping ages into age brackets)",
      "Deletes all values that fall into the lowest 10%",
      "Converts positive numbers into negative numbers",
      "Replaces numbers with random letters of the alphabet"
    ],
    correctAnswer: 0,
    explanation: "Binning (using pd.cut() for fixed intervals or pd.qcut() for equal-frequency quantiles) groups continuous values into discrete bins, which can capture non-linear relationships or simplify noisy data.",
    officialRef: "PCEI-30-01 Block 3.3 - Binning",
    tags: ["binning", "discretization", "pd.cut"]
  },
  {
    id: "pcei-3-049",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Interaction Features",
    difficulty: "Intermediate",
    question: "What is an 'Interaction Feature' in machine learning feature design?",
    codeSnippet: "# Interaction feature example:\n# The combined interaction of temperature and humidity: Heat Index\ndf['heat_index'] = df['temperature'] * df['humidity']",
    options: [
      "A feature created by multiplying, dividing, or combining two or more existing features to capture multiplicative or synergistic effects",
      "A feature that allows users to interact with a model via touch screen",
      "A feature that generates interactive audio notifications",
      "A column that changes its values dynamically every second"
    ],
    correctAnswer: 0,
    explanation: "An interaction term (e.g., Feature_A * Feature_B) allows models (especially linear models) to capture synergy where the effect of one feature depends directly on the value of another feature.",
    officialRef: "PCEI-30-01 Block 3.3 - Interaction Features",
    tags: ["interaction-terms", "multiplication", "features"]
  },
  {
    id: "pcei-3-050",
    track: 'pcei',
    section: "Section 3",
    chapter: "3.3",
    category: "Target Encoding",
    difficulty: "Advanced",
    question: "What is 'Target Encoding' (Mean Encoding) for high-cardinality categorical variables (like Postal Codes)?",
    codeSnippet: "# Target encoding:\n# Replacing each category level with the mean target value for that category\nzip_means = df.groupby('zip_code')['target'].mean()\ndf['zip_encoded'] = df['zip_code'].map(zip_means)",
    options: [
      "Replacing each categorical value with the average target value for that category across the training set",
      "Replacing each category with its alphabetical character length",
      "Encoding categories using binary ASCII byte codes",
      "Encrypting the target column using a random secret key"
    ],
    correctAnswer: 0,
    explanation: "For categories with thousands of unique values (like Zip Code), one-hot encoding creates thousands of sparse columns. Target encoding replaces each category with the average target value of that category, keeping a single column.",
    officialRef: "PCEI-30-01 Block 3.3 - Target Encoding",
    tags: ["target-encoding", "mean-encoding", "high-cardinality"]
  }
];
