import { Flashcard } from '../types';

export const pcadSection1CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.2 CONTINUED: ETHICAL, LEGAL & ANONYMIZATION [Cards 36-40]
  // =========================================================================
  {
    id: 'pcad-sec1-036',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Privacy',
    topic: 'Explicit Opt-In vs. Passive Opt-Out Consent',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Under modern data privacy regulations such as GDPR, why are pre-checked consent checkboxes ("passive opt-out") legally invalid for collecting non-essential personal analytics?',
    codeSnippet: `# Non-compliant (Pre-ticked box):
# [X] "By clicking Submit, you agree to share your browsing data with 45 marketing partners."

# Compliant GDPR Standard:
# Freely given, specific, informed, and unambiguous affirmative action (Unchecked box).`,
    options: [
      'Consent must be freely given, specific, informed, and demonstrated by an unambiguous affirmative action (explicit opt-in); silence, pre-ticked boxes, or inactivity do not constitute valid consent',
      'Because web browsers automatically block websites containing checkboxes',
      'Pre-checked boxes are only allowed if users pay a monthly fee',
      'Opt-out is universally legal in every country without exception'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Consent must be freely given, specific, informed, and demonstrated by an unambiguous affirmative action (explicit opt-in); silence, pre-ticked boxes, or inactivity do not constitute valid consent',
    explanationTitle: 'Explicit Affirmative Consent Standards',
    explanationText:
      'GDPR Recital 32 states that consent should be given by a clear affirmative act. Pre-ticked boxes assume consent by inertia, which regulatory bodies (such as the CJEU in the Planet49 ruling) have determined fails the standard of genuine, freely given consent.',
    deepDive:
      'Furthermore, consent must be as easy to withdraw as it was to give, requiring clear self-service preference centers for end users.',
    tags: ['Consent', 'GDPR', 'Opt-In', 'Compliance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-037',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Security',
    topic: 'Tokenization vs. Cryptographic Encryption',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What is the architectural difference between "Tokenization" and "Encryption" when protecting sensitive primary account numbers (PANs) or patient IDs?',
    codeSnippet: `# Encryption:
# Plaintext "4111-2222-3333-4444" -> Mathematical algorithm -> Ciphertext "8F3D...A1"
# (Reversible using a mathematical decryption key)

# Tokenization:
# Plaintext "4111-2222-3333-4444" -> Central Token Vault lookup -> Random Token "TKN_9812_ABCD"
# (Mathematically unrelated; impossible to reverse without vault access)`,
    options: [
      'Encryption transforms data into ciphertext using a mathematical algorithm and secret key (reversible with the key); Tokenization substitutes data with a random non-sensitive surrogate value mapped in a secure external vault',
      'Tokenization converts numbers into blockchain cryptocurrency tokens',
      'Encryption only works on text; tokenization only works on floating-point numbers',
      'Encryption is illegal under PCI-DSS standards'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Encryption transforms data into ciphertext using a mathematical algorithm and secret key (reversible with the key); Tokenization substitutes data with a random non-sensitive surrogate value mapped in a secure external vault',
    explanationTitle: 'Tokenization vs. Encryption Mechanisms',
    explanationText:
      'In tokenization, no mathematical relationship exists between the plaintext and the token. An attacker who steals the tokenized database cannot mathematically reverse-engineer the original credit card or SSN because the real values exist only inside an isolated, hardened Token Vault.',
    deepDive:
      'Tokenization significantly shrinks regulatory audit scope (such as PCI-DSS) because analytical databases storing only tokens are excluded from severe compliance burdens.',
    tags: ['Tokenization', 'Encryption', 'PCI-DSS', 'Security', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-038',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Privacy',
    topic: 'Synthetic Data Generation for Safe Pipeline Testing',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Why do data teams use libraries like `Faker` to generate synthetic test datasets instead of copying raw production customer databases into developer staging environments?',
    codeSnippet: `from faker import Faker
import pandas as pd

fake = Faker()
synthetic_data = [
    {'name': fake.name(), 'email': fake.email(), 'city': fake.city()}
    for _ in range(100)
]
df_test = pd.DataFrame(synthetic_data)`,
    options: [
      'To prevent exposing sensitive production customer PII to development and staging environments, completely mitigating breach liability while preserving realistic data formats and schemas',
      'Because synthetic data generation executes 1,000 times faster than querying SQL',
      'Faker automatically proves that software is bug-free',
      'Real customer data cannot be parsed by pandas in staging environments'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To prevent exposing sensitive production customer PII to development and staging environments, completely mitigating breach liability while preserving realistic data formats and schemas',
    explanationTitle: 'Preventing Staging PII Leaks with Synthetic Data',
    explanationText:
      'A vast number of corporate data leaks occur because developers clone production databases to insecure laptop environments or staging servers. Synthetic data mimics realistic statistical properties, schemas, and data formats without containing any genuine individual’s private info.',
    deepDive:
      'For advanced ML testing, generative frameworks like Synthetic Data Vault (SDV) preserve multi-variable covariance and correlation structures while ensuring differential privacy guarantees.',
    tags: ['Synthetic Data', 'Faker', 'Security', 'Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-039',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Regulation',
    topic: 'Right to Data Portability (GDPR Article 20)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Under GDPR Article 20, what format requirements must an organization meet when satisfying a user’s "Right to Data Portability" request?',
    codeSnippet: `# Subject Access Export Request:
# The exported file must be:
# 1. Structured
# 2. Commonly used
# 3. Machine-readable (e.g., CSV, JSON, XML) - NOT proprietary encrypted formats or locked image scans!`,
    options: [
      'Data must be provided in a structured, commonly used, and machine-readable format (such as JSON or CSV), enabling frictionless transfer to another service provider',
      'Data must be printed on certified physical paper and sent via postal mail',
      'Data must be compiled into a closed-source binary executable file',
      'Organizations are legally permitted to provide screenshot image files only'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Data must be provided in a structured, commonly used, and machine-readable format (such as JSON or CSV), enabling frictionless transfer to another service provider',
    explanationTitle: 'GDPR Machine-Readable Portability Standards',
    explanationText:
      'The Right to Data Portability prevents vendor lock-in. Providing data as scanned TIFF/PDF images or encrypted proprietary binary blobs violates this rule; exports must be structured formats like JSON, CSV, or XML that another automated pipeline can ingest without manual transcription.',
    deepDive:
      'The data subject also has the right to have personal data transmitted directly from one controller to another where technically feasible.',
    tags: ['GDPR', 'Data Portability', 'JSON', 'Compliance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-040',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Vendor Management',
    topic: 'Data Processing Agreements (DPA) & Third-Party Risk',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When sending customer data to a third-party cloud analytics SaaS (e.g., Datadog, Snowflake, Segment), what legal instrument defines the vendor’s data security and privacy obligations?',
    codeSnippet: `# Legal Document:
# Outlines:
# - Scope of data processing
# - Technical & organizational security measures (TOMs)
# - Sub-processor notification protocols
# - Breach notification deadlines (e.g., within 72 hours)`,
    options: [
      'A Data Processing Agreement (DPA), legally binding the processor to handle data strictly under the controller’s instructions and maintain required security standards',
      'A standard end-user cookie policy pop-up',
      'A GitHub Pull Request approval license',
      'A software purchase invoice'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A Data Processing Agreement (DPA), legally binding the processor to handle data strictly under the controller’s instructions and maintain required security standards',
    explanationTitle: 'The Necessity of Data Processing Agreements (DPA)',
    explanationText:
      'Under GDPR Article 28, a Data Controller cannot outsource data processing to a Data Processor without a legally binding DPA. The DPA governs sub-processor authorizations, incident response obligations, data return/destruction post-contract, and vulnerability audit rights.',
    deepDive:
      'If a third-party cloud vendor experiences a breach and no valid DPA was in place, the original company faces severe regulatory fines for negligent vendor governance.',
    tags: ['DPA', 'Vendor Risk', 'Compliance', 'Data Processing', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 1.3: DATA INGESTION & FORMATS [Cards 41-60]
  // =========================================================================
  {
    id: 'pcad-sec1-041',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Optimizing Ingestion with read_csv Parameters',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Which combination of `pd.read_csv()` parameters reduces memory overhead by loading only specific columns, specifying compact data types, and setting a designated primary key column as index?',
    codeSnippet: `import pandas as pd

# Memory-optimized CSV loading:
df = pd.read_csv(
    'large_dataset.csv',
    usecols=['order_id', 'customer_id', 'amount', 'status'],
    dtype={'order_id': 'int32', 'customer_id': 'int32', 'status': 'category'},
    index_col='order_id'
)`,
    options: [
      'usecols= selects only required columns, dtype= enforces memory-efficient types, and index_col= assigns the row index on ingestion',
      'select_columns=, types=, and primary_key=',
      'columns=, cast=, and set_index=',
      'fields=, types=, and row_id='
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'usecols= selects only required columns, dtype= enforces memory-efficient types, and index_col= assigns the row index on ingestion',
    explanationTitle: 'Memory-Efficient CSV Ingestion via usecols and dtype',
    explanationText:
      'Loading a 50-column CSV when only 4 columns are needed wastes RAM. `usecols` discards unwanted columns during reading. Providing an explicit `dtype` dictionary prevents pandas from defaulting to memory-heavy `int64` or string `object` dtypes.',
    deepDive:
      'Converting low-cardinality string columns (e.g. `status` with values "active", "pending", "closed") to `category` often slashes memory consumption by 80–90%.',
    tags: ['pandas', 'read_csv', 'usecols', 'dtype', 'Memory', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-042',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Handling Encoding Errors: UnicodeDecodeError',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'When calling `pd.read_csv("file.csv")` raises `UnicodeDecodeError: "utf-8" codec can\'t decode byte 0xe9...`, how should the analyst resolve it?',
    codeSnippet: `# Attempt 1 fails:
# df = pd.read_csv('european_sales.csv') # UnicodeDecodeError!

# Correct Fix:
df = pd.read_csv('european_sales.csv', encoding='latin1') 
# or encoding='cp1252' / 'ISO-8859-1'`,
    options: [
      'Specify the appropriate character encoding using encoding="latin1" (or "ISO-8859-1" / "cp1252") in pd.read_csv()',
      'Delete all accented letters using a shell regex command',
      'Set parse_dates=False',
      'Convert the CSV extension to .txt'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Specify the appropriate character encoding using encoding="latin1" (or "ISO-8859-1" / "cp1252") in pd.read_csv()',
    explanationTitle: 'Resolving Character Encoding Mismatches',
    explanationText:
      'Pandas defaults to UTF-8 decoding. Legacy Windows and Western European files are frequently encoded in ISO-8859-1 (`latin1`) or Windows-1252 (`cp1252`). Passing `encoding="latin1"` instructs the C-parser to decode those specific single-byte bytecodes correctly.',
    deepDive:
      'To detect an unknown file’s encoding programmatically, use the `chardet` library: `chardet.detect(raw_bytes)["encoding"]`.',
    tags: ['Encoding', 'UTF-8', 'latin1', 'UnicodeDecodeError', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-043',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Chunked Processing for Large Files (chunksize)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How can an analyst calculate the total revenue across a 25 GB CSV file on a laptop with only 8 GB of available RAM?',
    codeSnippet: `import pandas as pd

total_revenue = 0.0
# Stream through file in 50,000-row chunks:
for chunk in pd.read_csv('massive_log.csv', usecols=['revenue'], chunksize=50000):
    total_revenue += chunk['revenue'].sum()

print(f"Total Revenue: {total_revenue}")`,
    options: [
      'Pass chunksize=50000 to pd.read_csv(), returning an iterable TextFileReader that processes manageable batches sequentially without exceeding RAM',
      'Call pd.read_csv(memory_limit="8GB")',
      'Increase Python’s recursion limit via sys.setrecursionlimit()',
      'Convert the CSV file to an MP4 video file'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass chunksize=50000 to pd.read_csv(), returning an iterable TextFileReader that processes manageable batches sequentially without exceeding RAM',
    explanationTitle: 'Chunked Processing via TextFileReader',
    explanationText:
      'Setting `chunksize` prevents Pandas from loading the entire file into memory at once. It returns a generator-like `TextFileReader` object yielding successive DataFrame chunks, enabling stream processing and incremental aggregation over arbitrarily large datasets.',
    deepDive:
      'Each chunk is a fully-fledged DataFrame. Filter, aggregate, or write out cleaned chunks to a database or Parquet store inside the loop.',
    tags: ['pandas', 'chunksize', 'Big Data', 'Memory Management', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-044',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Parsing Dates on Ingestion with parse_dates',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the purpose of passing `parse_dates=["transaction_date"]` when calling `pd.read_csv()`?',
    codeSnippet: `import pandas as pd

# Ingestion with automated datetime parsing:
df = pd.read_csv('orders.csv', parse_dates=['transaction_date'])

print(df['transaction_date'].dtype) # datetime64[ns]
# Enables immediate datetime operations:
print(df['transaction_date'].dt.year)`,
    options: [
      'It instructs pandas to parse the specified column into datetime64[ns] objects during ingestion rather than storing them as plain strings (object dtype)',
      'It formats dates as Roman numerals',
      'It deletes rows that do not contain holidays',
      'It sets the system operating system clock to the date in row 1'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It instructs pandas to parse the specified column into datetime64[ns] objects during ingestion rather than storing them as plain strings (object dtype)',
    explanationTitle: 'Automated Datetime Ingestion via parse_dates',
    explanationText:
      'Leaving dates as string objects prevents time-series slicing, resample aggregations, and component extraction (`.dt.month`, `.dt.day_name()`). `parse_dates` runs date parsing during C-parsing, avoiding secondary `pd.to_datetime()` overhead.',
    deepDive:
      'In pandas 2.0+, you can provide `date_format="%Y-%m-%d %H:%M:%S"` to accelerate date parsing dramatically by skipping heuristic date inference.',
    tags: ['pandas', 'parse_dates', 'datetime', 'Ingestion', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-045',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Line-Delimited JSON (JSON Lines) with lines=True',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you read a newline-delimited JSON log file (`.jsonl` / `.ndjson`), where each line is a separate JSON record, into a pandas DataFrame?',
    codeSnippet: `import pandas as pd

# Reading newline-delimited JSON:
df = pd.read_json('server_stream.jsonl', lines=True)`,
    options: [
      'pd.read_json("file.jsonl", lines=True)',
      'pd.read_csv("file.jsonl", format="json")',
      'pd.load_json_stream("file.jsonl")',
      'pd.read_jsonl("file.jsonl")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_json("file.jsonl", lines=True)',
    explanationTitle: 'Ingesting Line-Delimited JSON (JSONL)',
    explanationText:
      'Standard JSON requires a root array wrapper `[...]` with commas separating objects. Large data platforms (e.g. AWS CloudWatch, Kafka) output JSON Lines (`.jsonl`), where each line is an independent JSON object. Setting `lines=True` parses line-by-line streaming records correctly.',
    deepDive:
      'JSON Lines allows appending new records to the end of a file without rewriting or re-parsing the entire file structure.',
    tags: ['pandas', 'read_json', 'JSONL', 'Streaming', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-046',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Data Normalization',
    topic: 'Flattening Nested JSON with pd.json_normalize()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Given an API response with nested dictionaries, how does `pd.json_normalize()` transform the data into a flat, tabular 2D DataFrame?',
    codeSnippet: `import pandas as pd

raw_data = [
    {'id': 101, 'user': {'name': 'Alice', 'geo': {'city': 'Austin', 'state': 'TX'}}},
    {'id': 102, 'user': {'name': 'Bob', 'geo': {'city': 'Seattle', 'state': 'WA'}}}
]

flat_df = pd.json_normalize(raw_data)
print(flat_df.columns.tolist())`,
    options: [
      "['id', 'user.name', 'user.geo.city', 'user.geo.state'] - it flattens nested keys into dotted column paths",
      "['id', 'user'] - nested dictionaries are retained as raw strings",
      "['Alice', 'Bob', 'Austin', 'Seattle']",
      'It raises a NestedJSONError'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: "['id', 'user.name', 'user.geo.city', 'user.geo.state'] - it flattens nested keys into dotted column paths",
    explanationTitle: 'Flattening Hierarchical Structures with json_normalize',
    explanationText:
      '`pd.json_normalize()` unpacks semi-structured nested dictionaries into flat tabular columns using dot notation (e.g. `user.geo.city`). You can also specify `record_path` to unnest lists of child objects and `meta` to preserve parent fields.',
    deepDive:
      'You can change the path delimiter by setting `sep="_"`, producing cleaner column names like `user_geo_city`.',
    tags: ['json_normalize', 'JSON', 'Semi-structured', 'Flattening', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-047',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Reading Excel Workbooks with pd.read_excel()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you read a specific sheet named "Q3_Revenue" while skipping the top 3 corporate title rows using `pd.read_excel()`?',
    codeSnippet: `import pandas as pd

# Load specific worksheet with offset:
df = pd.read_excel('Financials_2026.xlsx', sheet_name='Q3_Revenue', skiprows=3)`,
    options: [
      'pd.read_excel("file.xlsx", sheet_name="Q3_Revenue", skiprows=3)',
      'pd.read_excel("file.xlsx", tab="Q3_Revenue", offset=3)',
      'pd.read_spreadsheet("file.xlsx", sheet=2, skip=3)',
      'pd.read_csv("file.xlsx", sheet_name="Q3_Revenue", header=3)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_excel("file.xlsx", sheet_name="Q3_Revenue", skiprows=3)',
    explanationTitle: 'Targeted Worksheet Ingestion with read_excel',
    explanationText:
      '`pd.read_excel()` utilizes underlying engines like `openpyxl` or `calamine`. `sheet_name` targets a specific sheet by name (or zero-based integer index), and `skiprows=3` ignores preliminary header metadata rows before table headers begin.',
    deepDive:
      'Passing `sheet_name=None` loads ALL sheets in the workbook into a dictionary of DataFrames: `{sheet_name: df}`.',
    tags: ['pandas', 'read_excel', 'sheet_name', 'skiprows', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-048',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Data Ingestion',
    topic: 'Custom Delimiters & Pipe-Separated Files',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you ingest a pipe-delimited text file (`|`) using `pd.read_csv()`?',
    codeSnippet: `import pandas as pd

# File snippet: id|customer_name|balance
df = pd.read_csv('export.txt', sep='|')`,
    options: [
      'Pass sep="|" (or delimiter="|") into pd.read_csv()',
      'Call pd.read_pipe("export.txt")',
      'Set split_char="|"',
      'Pipe-delimited files cannot be read by pandas'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass sep="|" (or delimiter="|") into pd.read_csv()',
    explanationTitle: 'Parsing Custom Delimiters with sep',
    explanationText:
      '`pd.read_csv()` handles any single-character delimiter via `sep=` (e.g. `sep="\\t"` for TSV, `sep=";"` for European semicolons, `sep="|"` for pipe-delimited exports). Regular expression delimiters like `sep=r"\\s+"` handle variable whitespace.',
    deepDive:
      'When using multi-character regex delimiters, pandas automatically switches from the fast C-engine to the Python parsing engine.',
    tags: ['pandas', 'read_csv', 'Delimiters', 'sep', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-049',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Storage Formats',
    topic: 'Parquet Columnar Storage vs. CSV',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why is Apache Parquet considered vastly superior to CSV for analytical storage and query performance?',
    codeSnippet: `# Comparison:
# CSV: Row-oriented, plain text, no embedded schema, slow full scans, large disk footprint.
# Parquet: Columnar binary, embedded schema & metadata, Snappy/ZSTD compression, column pruning & predicate pushdown.`,
    options: [
      'Parquet is a columnar binary format with embedded schemas and native compression; queries only read requested columns from disk (column pruning) rather than scanning entire rows',
      'Parquet files can be viewed inside Microsoft Notepad',
      'CSV files cannot store numbers greater than 1,000',
      'Parquet is exclusively designed for HTML websites'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Parquet is a columnar binary format with embedded schemas and native compression; queries only read requested columns from disk (column pruning) rather than scanning entire rows',
    explanationTitle: 'Advantages of Columnar Parquet Storage',
    explanationText:
      'In row-oriented CSVs, reading 1 column from 100 requires reading the entire disk file. Parquet stores data column-by-column, allowing analytical engines to skip irrelevant columns (column pruning) and skip entire row-groups based on min/max statistics (predicate pushdown), often speeding queries by 10x–50x while using 75% less disk space.',
    deepDive:
      'Parquet preserves exact data types (integers, datetimes, decimals), eliminating the ambiguity of CSV type re-inference.',
    tags: ['Parquet', 'Columnar Storage', 'Compression', 'Big Data', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-050',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Reading and Writing Parquet with pandas',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Which pandas methods serialize a DataFrame to a compressed Parquet file and reload it back into memory?',
    codeSnippet: `import pandas as pd

# Write with snappy compression:
df.to_parquet('analytics_data.parquet', engine='pyarrow', compression='snappy')

# Read back from parquet:
reloaded_df = pd.read_parquet('analytics_data.parquet')`,
    options: [
      'df.to_parquet() and pd.read_parquet()',
      'df.save_parquet() and pd.load_parquet()',
      'df.serialize() and pd.deserialize()',
      'df.dump_arrow() and pd.read_arrow()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.to_parquet() and pd.read_parquet()',
    explanationTitle: 'Parquet I/O in pandas',
    explanationText:
      '`df.to_parquet()` and `pd.read_parquet()` leverage high-performance backends (`pyarrow` or `fastparquet`). They offer fast serialization and preserve types, indices, and timezone metadata without data loss.',
    deepDive:
      'You can pass `columns=["colA", "colB"]` into `pd.read_parquet()` to selectively load only those columns from disk without loading the rest of the file into RAM.',
    tags: ['pandas', 'read_parquet', 'to_parquet', 'PyArrow', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-051',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Storage Formats',
    topic: 'Apache Arrow & Feather In-Memory Interoperability',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'What is the primary advantage of the Feather (Arrow IPC) format for temporary data exchange between Python and R or disk caching?',
    codeSnippet: `import pandas as pd

# Zero-copy, lightning-fast disk caching:
df.to_feather('cache.feather')
df_loaded = pd.read_feather('cache.feather')`,
    options: [
      'It maps the in-memory Apache Arrow columnar representation directly to disk, providing near-zero serialization overhead and instant zero-copy reads',
      'It converts all numbers into encrypted hashes',
      'It supports unlimited nesting of audio files',
      'It is human-readable in plain text editors'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It maps the in-memory Apache Arrow columnar representation directly to disk, providing near-zero serialization overhead and instant zero-copy reads',
    explanationTitle: 'Feather Format and Zero-Copy Serialization',
    explanationText:
      'Feather uses the Arrow IPC format. Because the on-disk bytes are identical to the in-memory memory layout, loading a Feather file does not require deserialization or unpacking: the OS memory-maps the file directly into RAM, achieving gigabytes-per-second throughput.',
    deepDive:
      'While Parquet is optimized for cold, long-term disk storage (high compression), Feather is optimized for short-term caching and inter-process communication.',
    tags: ['Feather', 'Apache Arrow', 'Zero-Copy', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-052',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Data Quality',
    topic: 'Schema Validation & Schema Drift Detection',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'In production data ingestion pipelines, what is "schema drift", and how do data engineers safeguard against it?',
    codeSnippet: `# Day 1 Ingest: ['user_id', 'amount', 'timestamp']
# Day 90 Ingest: ['user_id', 'amount', 'created_at', 'currency'] # Schema drifted!
# Safeguard: Validate incoming columns against an expected contract:
expected_schema = {'user_id', 'amount', 'timestamp'}
if not expected_schema.issubset(df.columns):
    raise ValueError("Incoming batch violates schema contract!")`,
    options: [
      'Unexpected changes in column names, data types, or missing fields in incoming source data over time; guarded by asserting column contracts or using tools like Great Expectations or Pydantic',
      'The gradual physical tilting of magnetic hard drives in server racks',
      'A statistical variance drift in normal distributions',
      'A decrease in network packet transmission speed'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Unexpected changes in column names, data types, or missing fields in incoming source data over time; guarded by asserting column contracts or using tools like Great Expectations or Pydantic',
    explanationTitle: 'Detecting and Handling Schema Drift',
    explanationText:
      'Upstream vendors frequently alter APIs or export schemas without notification. Silent schema drift breaks downstream dashboards and causes machine learning feature mismatches. Robust ingestion pipelines enforce validation gates that alert engineers when schemas diverge.',
    deepDive:
      'Open-source validation frameworks like `pydantic` or `pandera` provide declarative schema validation for DataFrames: `Schema.validate(df)`.',
    tags: ['Schema Drift', 'Data Quality', 'Validation', 'Pipelines', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-053',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Memory Optimization',
    topic: 'Downcasting Numeric Types with pd.to_numeric()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How can an analyst downcast integer columns from 64-bit integers (`int64`, 8 bytes per value) to the smallest possible integer subtype that safely fits the values?',
    codeSnippet: `import pandas as pd

# Downcast to smallest valid integer type (e.g. int8, int16, int32):
df['age'] = pd.to_numeric(df['age'], downcast='integer')
print(df['age'].dtype) # int8 (only 1 byte per value!)`,
    options: [
      'pd.to_numeric(df["age"], downcast="integer") automatically selects the most compact integer dtype (int8, int16, int32) based on min and max values',
      'df["age"].shrink()',
      'df["age"].astype("tiny")',
      'pd.compress_column(df["age"])'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.to_numeric(df["age"], downcast="integer") automatically selects the most compact integer dtype (int8, int16, int32) based on min and max values',
    explanationTitle: 'Numeric Downcasting in pandas',
    explanationText:
      'Pandas defaults all integers to `int64` (values up to $\pm 9 \times 10^{18}$). For an `age` column where values never exceed 120, 8-bit signed integer `int8` (range -128 to 127) uses only 1 byte per row—an immediate 87.5% memory reduction for that column.',
    deepDive:
      'You can also downcast floating-point values from `float64` to `float32` using `downcast="float"`.',
    tags: ['Memory Optimization', 'Downcasting', 'to_numeric', 'dtypes', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-054',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Handling Malformed CSV Rows with on_bad_lines',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When a corrupt CSV contains occasional rows with too many fields (e.g. extra unescaped commas), how do you instruct `pd.read_csv()` to skip bad lines without halting execution?',
    codeSnippet: `import pandas as pd

# Skip malformed lines and log a warning:
df = pd.read_csv('dirty_feed.csv', on_bad_lines='warn')
# Or silently skip:
# df = pd.read_csv('dirty_feed.csv', on_bad_lines='skip')`,
    options: [
      'Set on_bad_lines="skip" or on_bad_lines="warn" in pd.read_csv()',
      'Set ignore_errors=True',
      'Pass fix_commas=True',
      'Wrap pd.read_csv in an infinite while loop'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Set on_bad_lines="skip" or on_bad_lines="warn" in pd.read_csv()',
    explanationTitle: 'Handling Corrupt Records via on_bad_lines',
    explanationText:
      'In older pandas, `error_bad_lines=False` was used; in modern pandas, `on_bad_lines` is the official parameter. Options are `"error"` (raise exception, default), `"warn"` (log warning and skip row), `"skip"` (silently drop row), or a custom callable function.',
    deepDive:
      'Using a custom callable `on_bad_lines=callable_handler` allows you to write malformed rows to a "dead-letter" error quarantine log for engineering inspection.',
    tags: ['pandas', 'read_csv', 'on_bad_lines', 'Data Cleansing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-055',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Extracting HTML Tables with pd.read_html()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What does `pd.read_html("https://en.wikipedia.org/wiki/List_of_countries")` return?',
    codeSnippet: `import pandas as pd

# Scrapes all <table> tags on the web page:
tables = pd.read_html('https://example.com/rankings.html')

print(type(tables))       # <class 'list'>
print(len(tables))        # Number of tables found (e.g. 3)
primary_df = tables[0]    # First DataFrame table`,
    options: [
      'A Python list of pandas DataFrame objects, each corresponding to an HTML <table> tag discovered on the webpage',
      'A single string containing raw HTML tags',
      'A BeautifulSoup DOM tree object',
      'A dictionary containing website cookie sessions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A Python list of pandas DataFrame objects, each corresponding to an HTML <table> tag discovered on the webpage',
    explanationTitle: 'Scraping Tabular Web Data with pd.read_html()',
    explanationText:
      '`pd.read_html()` searches the target URL or HTML string for `<table>` tags, parses rows (`<tr>`), header cells (`<th>`), and data cells (`<td>`), and returns a list of DataFrames. It uses `lxml` or `html5lib` under the hood.',
    deepDive:
      'Pass `match="Revenue"` to filter only tables containing the matching string or regular expression.',
    tags: ['pandas', 'read_html', 'Web Scraping', 'HTML Tables', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-056',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Parsing XML Documents with pd.read_xml()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you target specific child nodes in an XML document when reading it into a DataFrame using `pd.read_xml()`?',
    codeSnippet: `import pandas as pd

xml_doc = """
<catalog>
    <book id="bk101"><title>Python Guide</title><price>39.95</price></book>
    <book id="bk102"><title>Data Analysis</title><price>49.95</price></book>
</catalog>
"""
df = pd.read_xml(xml_doc, xpath='.//book')`,
    options: [
      'Use the xpath parameter to specify an XPath expression (e.g. xpath=".//book") that points to the record elements',
      'Pass css_selector="book"',
      'Pass node_tag="book"',
      'XML documents must be converted to CSV before pandas can parse them'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use the xpath parameter to specify an XPath expression (e.g. xpath=".//book") that points to the record elements',
    explanationTitle: 'XPath Parsing in pd.read_xml()',
    explanationText:
      'Introduced in pandas 1.3, `pd.read_xml()` parses XML trees directly. The `xpath` parameter navigates hierarchical tags, flattening matching nodes and their attributes/children into rows and columns.',
    deepDive:
      'For complex XML namespaces, provide the `namespaces` dictionary parameter to map prefix aliases (e.g. `namespaces={"ns": "http://example.com/schema"}`).',
    tags: ['pandas', 'read_xml', 'XML', 'XPath', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-057',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Ingestion',
    topic: 'Transparent Compressed File Ingestion',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How does pandas handle reading a compressed file like `transactions.csv.gz` or `orders.csv.zip`?',
    codeSnippet: `import pandas as pd

# Directly read gzipped file without manual decompression:
df = pd.read_csv('transactions.csv.gz')`,
    options: [
      'Pandas automatically infers the compression algorithm from the file extension (.gz, .zip, .bz2, .xz) and decompresses the stream on the fly into RAM',
      'Pandas requires the user to unzip the file to disk using the terminal first',
      'The file must be uncompressed using Python’s gzip module before calling read_csv',
      'Pandas will fail with a BadZipFile error unless compression="manual"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pandas automatically infers the compression algorithm from the file extension (.gz, .zip, .bz2, .xz) and decompresses the stream on the fly into RAM',
    explanationTitle: 'Automated On-the-Fly Decompression',
    explanationText:
      'The default `compression="infer"` in `pd.read_csv()` inspects the file suffix. If `.gz`, `.zip`, `.bz2`, or `.zstd` is detected, pandas decompresses the data in memory during parsing, saving significant local disk space.',
    deepDive:
      'Similarly, calling `df.to_csv("output.csv.gz", index=False)` compresses the output file automatically.',
    tags: ['pandas', 'Compression', 'gzip', 'zip', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-058',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Memory Diagnostics',
    topic: 'Accurate Memory Auditing with memory_usage(deep=True)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why must an analyst pass `deep=True` when calling `df.memory_usage(deep=True)` or `df.info(memory_usage="deep")`?',
    codeSnippet: `import pandas as pd

# Shallow memory usage (underestimates string memory):
print(df.memory_usage())

# True deep memory footprint:
print(df.memory_usage(deep=True).sum() / (1024 ** 2), "MB")`,
    options: [
      'Without deep=True, pandas only counts the fixed memory of string object pointers, ignoring the actual string contents stored in Python heap memory and severely underestimating RAM usage',
      'deep=True scans the computer’s SSD storage rather than RAM',
      'deep=True compresses the DataFrame by 50%',
      'It recalculates memory usage using recursive neural networks'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Without deep=True, pandas only counts the fixed memory of string object pointers, ignoring the actual string contents stored in Python heap memory and severely underestimating RAM usage',
    explanationTitle: 'Deep Memory Inspection of Object Columns',
    explanationText:
      'DataFrames with `object` dtype columns contain pointers (8 bytes each) referencing external string objects in memory. A shallow memory audit measures only the pointer array, reporting a tiny fraction of actual consumption. `deep=True` inspects the referenced heap objects for true memory footprint.',
    deepDive:
      'A DataFrame reported as 200 MB by default might actually consume 1.8 GB when inspected with `deep=True`.',
    tags: ['Memory', 'memory_usage', 'deep=True', 'Profiling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-059',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Pandas Serialization',
    topic: 'Preventing Unnamed Index Inflation with index=False',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Why is calling `df.to_csv("data.csv", index=False)` standard practice when exporting cleaned datasets?',
    codeSnippet: `# Bad export (leaves index column):
# df.to_csv('cleaned.csv') 
# Reloading creates an unwanted 'Unnamed: 0' column!

# Clean export:
df.to_csv('cleaned.csv', index=False)`,
    options: [
      'It prevents pandas from writing the integer row numbers as a leading unnamed column, avoiding "Unnamed: 0" column pollution when the file is re-imported',
      'It encrypts the CSV file',
      'It drops all rows containing negative numbers',
      'It forces the CSV to be sorted alphabetically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It prevents pandas from writing the integer row numbers as a leading unnamed column, avoiding "Unnamed: 0" column pollution when the file is re-imported',
    explanationTitle: 'Suppressing the Index Column in CSV Exports',
    explanationText:
      'By default, `to_csv()` exports the DataFrame index. For standard RangeIndex (0, 1, 2...), this writes useless row numbers. When re-imported, pandas creates an extra `Unnamed: 0` column. Setting `index=False` exports only genuine data columns.',
    deepDive:
      'If the index contains meaningful semantic information (e.g., date timestamps), consider `df.reset_index()` before exporting or specify `index_label="date"`.',
    tags: ['pandas', 'to_csv', 'index=False', 'Data Hygiene', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-060',
    section: 'Section 1',
    chapter: '1.3',
    track: 'pcad',
    cardType: 'Storage Formats',
    topic: 'Hierarchical Data Format (HDF5) for Complex Matrices',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'What is the primary analytical use case for the HDF5 format (`.h5`, via `df.to_hdf()`), and how does its internal architecture resemble a filesystem?',
    codeSnippet: `import pandas as pd

# Store multiple tables in a single hierarchical file:
with pd.HDFStore('financial_models.h5') as store:
    store.put('equities/daily', df_equities, format='table')
    store.put('macro/indicators', df_macro, format='table')

# Query subsets directly from disk without loading full matrix:
df_subset = pd.read_hdf('financial_models.h5', 'equities/daily', where='close > 100')`,
    options: [
      'It organizes large, heterogeneous multidimensional numerical datasets into a filesystem-like hierarchy of groups and datasets, supporting on-disk querying (PyTables where=) without loading the entire file',
      'It is a pure text format used exclusively for HTML emails',
      'It replaces SQLite for transactional online banking',
      'It converts pandas DataFrames into PowerPoint slides'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It organizes large, heterogeneous multidimensional numerical datasets into a filesystem-like hierarchy of groups and datasets, supporting on-disk querying (PyTables where=) without loading the entire file',
    explanationTitle: 'Hierarchical Data Format (HDF5) Architecture',
    explanationText:
      'HDF5 is widely used in scientific computing and algorithmic trading. It acts like an internal directory tree (`/group/subgroup/dataset`). In `format="table"` mode, PyTables creates indexed B-trees on disk, allowing selective filtering via `where=` clauses without full-file deserialization.',
    deepDive:
      'Warning: HDF5 is not safe for concurrent multi-process writes. If multiple Python processes attempt to write to the same `.h5` file simultaneously, the file can corrupt.',
    tags: ['HDF5', 'PyTables', 'Scientific Storage', 'Numerical Matrices', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 1.4: DATA CLEANING & PRE-PROCESSING WITH PANDAS [Cards 61-70]
  // =========================================================================
  {
    id: 'pcad-sec1-061',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Missing Data Diagnostics',
    topic: 'Detecting and Summarizing Nulls: isna() and isnull()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the functional difference between `df.isna()` and `df.isnull()` in pandas, and how do you calculate the percentage of missing values per column?',
    codeSnippet: `import pandas as pd

# Calculate percentage of missing values per column:
missing_pct = (df.isna().sum() / len(df)) * 100
print(missing_pct.round(2))`,
    options: [
      'df.isna() and df.isnull() are identical aliases that return a boolean mask of missing values; dividing df.isna().sum() by len(df) calculates the missing rate',
      'df.isna() checks for NaN floats; df.isnull() checks for empty strings ""',
      'df.isna() only works on NumPy arrays; df.isnull() only works on pandas Series',
      'df.isnull() permanently deletes missing rows'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.isna() and df.isnull() are identical aliases that return a boolean mask of missing values; dividing df.isna().sum() by len(df) calculates the missing rate',
    explanationTitle: 'Missing Value Inspection in pandas',
    explanationText:
      '`df.isna()` and `df.isnull()` are exact aliases in pandas. Calling `.sum()` treats `True` as 1 and `False` as 0, yielding the count of missing values per column. Dividing by `len(df)` gives the missing proportion.',
    deepDive:
      'Visualizing missingness patterns with the `missingno` library (`msno.matrix(df)`) reveals whether missingness in one column correlates with missingness in another.',
    tags: ['pandas', 'isna', 'isnull', 'Missing Data', 'Data Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-062',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Missing Data Theory',
    topic: 'Missing Data Mechanisms: MCAR, MAR, and MNAR',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'According to Donald Rubin’s missing data taxonomy, what does "Missing Not at Random" (MNAR) mean, and why is simple mean imputation dangerous for MNAR data?',
    codeSnippet: `# Mechanism Example:
# Wealth survey: Ultra-high-net-worth individuals refuse to disclose their income.
# The probability of the value being missing depends directly on the unobserved value itself!`,
    options: [
      'The missingness depends directly on the unobserved value itself (e.g. wealthy people refuse to report income); simple imputation introduces severe systematic bias because missing cases differ systematically from observed cases',
      'The missingness is completely random like a coin flip (MCAR)',
      'The missingness is caused by a hardware failure in the hard drive',
      'MNAR means the dataset contains zero null values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The missingness depends directly on the unobserved value itself (e.g. wealthy people refuse to report income); simple imputation introduces severe systematic bias because missing cases differ systematically from observed cases',
    explanationTitle: 'Rubin’s Missing Data Taxonomy (MCAR, MAR, MNAR)',
    explanationText:
      'Missing Completely at Random (MCAR) means missingness has no relationship to any observed or unobserved data. Missing at Random (MAR) means missingness depends on other observed features (e.g. men skip depression questions). Missing Not at Random (MNAR) means missingness depends on the missing value itself, causing severe bias if ignored.',
    deepDive:
      'For MNAR data, analysts must model the missingness mechanism explicitly (e.g. Heckman selection model) or collect auxiliary data.',
    tags: ['MCAR', 'MAR', 'MNAR', 'Missingness Mechanisms', 'Rubin', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-063',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Pandas Cleaning',
    topic: 'Selective Dropping with dropna() Parameters',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you drop rows where null values occur specifically in the "email" OR "phone" columns, while preserving rows that have nulls in other columns?',
    codeSnippet: `import pandas as pd

# Drop rows where either 'email' or 'phone' is missing:
clean_df = df.dropna(subset=['email', 'phone'], how='any')`,
    options: [
      'df.dropna(subset=["email", "phone"], how="any")',
      'df.dropna(columns=["email", "phone"])',
      'df.remove_nulls(fields=["email", "phone"])',
      'df.filter(subset=["email", "phone"]).dropna()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.dropna(subset=["email", "phone"], how="any")',
    explanationTitle: 'Targeted Row Deletion with dropna(subset=...)',
    explanationText:
      'Calling plain `df.dropna()` deletes any row with even a single missing value across the entire table, leading to catastrophic data loss. The `subset=` parameter limits evaluation strictly to designated critical columns. `how="any"` drops the row if either is null; `how="all"` drops only if both are null.',
    deepDive:
      'You can also use the `thresh=k` parameter to require that each row has at least $k$ non-null values to be retained.',
    tags: ['pandas', 'dropna', 'subset', 'how', 'Data Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-064',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Imputation Strategies',
    topic: 'Mean vs. Median vs. Mode Imputation with fillna()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'When imputing missing values in a heavily right-skewed salary column with extreme outliers, why is median imputation preferred over mean imputation?',
    codeSnippet: `import pandas as pd

# Median imputation for skewed feature:
median_val = df['salary'].median()
df['salary'] = df['salary'].fillna(median_val)`,
    options: [
      'The median is robust to extreme outliers, whereas the mean is pulled upward by high earners, which would impute an artificially inflated salary for missing records',
      'The mean cannot be computed if missing values exist',
      'Pandas fillna() only accepts integers, and the mean is a float',
      'The median shrinks the standard error to exactly zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The median is robust to extreme outliers, whereas the mean is pulled upward by high earners, which would impute an artificially inflated salary for missing records',
    explanationTitle: 'Median Imputation for Skewed Distributions',
    explanationText:
      'In skewed distributions (income, house prices, web session lengths), outliers drag the mean far into the tail. Imputing the mean would introduce upward bias. The median represents the true 50th percentile, making it the superior measure of central tendency for imputation.',
    deepDive:
      'For categorical variables (e.g. "Department"), the mode (most frequent value) is used: `df["dept"].fillna(df["dept"].mode()[0])`.',
    tags: ['fillna', 'Imputation', 'Mean', 'Median', 'Skewness', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-065',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Time Series Cleaning',
    topic: 'Forward Fill (ffill) and Backward Fill (bfill)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'In time-series analytics (e.g. daily stock price quotes), what does `df.ffill()` accomplish, and why is `bfill()` dangerous for forecasting models?',
    codeSnippet: `import pandas as pd

# Forward fill missing weekend prices with Friday's closing price:
df['price_ffilled'] = df['price'].ffill() 
# Equivalent to df['price'].fillna(method='ffill') in older pandas`,
    options: [
      'ffill propagates the last known valid observation forward until the next valid value; bfill looks into the future, introducing look-ahead data leakage into predictive forecasting models',
      'ffill calculates a moving average; bfill calculates exponential smoothing',
      'bfill only works on dates falling on a Monday',
      'ffill deletes all rows prior to the current timestamp'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ffill propagates the last known valid observation forward until the next valid value; bfill looks into the future, introducing look-ahead data leakage into predictive forecasting models',
    explanationTitle: 'Forward Fill vs. Backward Fill and Data Leakage',
    explanationText:
      '`ffill()` carries the most recent known state forward (realistic for real-time systems where tomorrow is unknown). `bfill()` uses future observations to fill past gaps. In predictive models, `bfill()` leaks future information into historical features, invalidating backtesting.',
    deepDive:
      'You can restrict how far values are propagated using the `limit=k` parameter (e.g. `df.ffill(limit=3)`).',
    tags: ['ffill', 'bfill', 'Time Series', 'Data Leakage', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-066',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Time Series Cleaning',
    topic: 'Linear and Polynomial Interpolation',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How does `df["temperature"].interpolate(method="linear")` fill missing values in continuous sensor streams?',
    codeSnippet: `import pandas as pd
import numpy as np

s = pd.Series([20.0, np.nan, np.nan, 26.0])
# Linear interpolation:
print(s.interpolate(method='linear').tolist())
# Output: [20.0, 22.0, 24.0, 26.0]`,
    options: [
      'It computes intermediate values along a straight linear line connecting the surrounding valid endpoints proportional to distance or index intervals',
      'It fills all gaps with the overall series mean',
      'It runs a random forest regression to predict missing values',
      'It replaces missing values with zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It computes intermediate values along a straight linear line connecting the surrounding valid endpoints proportional to distance or index intervals',
    explanationTitle: 'Continuous Imputation with Series.interpolate()',
    explanationText:
      '`interpolate(method="linear")` assumes a steady rate of change between the point immediately preceding the gap and the point immediately following it. For physical measurements (temperature, altitude, pressure), this produces smooth transitions.',
    deepDive:
      'For unevenly spaced time-series data, set `method="time"` to interpolate proportionally to actual elapsed time between datetime timestamps.',
    tags: ['interpolate', 'Time Series', 'Linear', 'Sensors', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-067',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Feature Engineering',
    topic: 'Missing Indicator Flags (Missingness as a Feature)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why is creating an explicit boolean "missing indicator" column (`df["income_was_missing"] = df["income"].isna().astype(int)`) good practice prior to imputing missing values?',
    codeSnippet: `import pandas as pd

# Preserve missingness signal:
df['income_was_missing'] = df['income'].isna().astype(int)
df['income'] = df['income'].fillna(df['income'].median())`,
    options: [
      'Because the fact that a value was missing may itself carry predictive business signal (informative missingness); the indicator preserves that signal for downstream algorithms after imputation',
      'Because scikit-learn models crash if indicator columns are not created',
      'To prevent the database from deleting the row',
      'It automatically recalculates missing values using gradient descent'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Because the fact that a value was missing may itself carry predictive business signal (informative missingness); the indicator preserves that signal for downstream algorithms after imputation',
    explanationTitle: 'Preserving Signal with Missing Indicators',
    explanationText:
      'Imputing values erases the fact that data was ever missing. If missingness is non-random (e.g., users without credit history skip income questions), the act of omission is a strong predictive feature. Retaining a binary flag allows ML models to learn the pattern of absence.',
    deepDive:
      'Scikit-learn’s `SimpleImputer(add_indicator=True)` automates this step during model preprocessing pipelines.',
    tags: ['Missing Indicator', 'Imputation', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-068',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Duplicate Detection',
    topic: 'Identifying Duplicate Rows with duplicated()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'In `df.duplicated(subset=["customer_id"], keep="first")`, what boolean value is returned for the first occurrence versus subsequent occurrences of a customer ID?',
    codeSnippet: `import pandas as pd

# df has customer_ids: [101, 102, 101, 103]
dups = df.duplicated(subset=['customer_id'], keep='first')
print(dups.tolist()) # [False, False, True, False]`,
    options: [
      'The first occurrence evaluates to False (considered unique), while all subsequent occurrences evaluate to True (flagged as duplicates)',
      'All matching rows evaluate to True',
      'The first occurrence evaluates to True, and subsequent ones evaluate to False',
      'It raises an error unless the DataFrame is sorted'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The first occurrence evaluates to False (considered unique), while all subsequent occurrences evaluate to True (flagged as duplicates)',
    explanationTitle: 'Mechanics of df.duplicated(keep=...)',
    explanationText:
      '`df.duplicated()` returns a boolean Series. With `keep="first"`, the initial instance of a key is kept as unique (`False`), and later duplicates are marked `True`. With `keep="last"`, the final instance is kept. With `keep=False`, ALL duplicate rows are marked `True`.',
    deepDive:
      'To view all duplicate rows together for visual inspection, filter with `df[df.duplicated(subset=["id"], keep=False)].sort_values("id")`.',
    tags: ['pandas', 'duplicated', 'Duplicates', 'Data Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-069',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Duplicate Removal',
    topic: 'Deduplication with drop_duplicates()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you remove duplicate transactions based on `transaction_id`, retaining the most recent timestamp record?',
    codeSnippet: `import pandas as pd

# Sort by timestamp descending, then drop duplicates keeping the first:
df_deduped = (
    df.sort_values('timestamp', ascending=False)
      .drop_duplicates(subset=['transaction_id'], keep='first')
      .reset_index(drop=True)
)`,
    options: [
      'Sort descending by timestamp, then call drop_duplicates(subset=["transaction_id"], keep="first")',
      'Call df.drop_duplicates(subset=["transaction_id"], keep="newest")',
      'Call df.unique(subset=["transaction_id"])',
      'Call df.delete_repeats("transaction_id")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sort descending by timestamp, then call drop_duplicates(subset=["transaction_id"], keep="first")',
    explanationTitle: 'Deterministic Deduplication Workflow',
    explanationText:
      '`drop_duplicates` retains the first row it encounters. By sorting the DataFrame by timestamp descending beforehand, the newest record moves to the top of each duplicate group, ensuring `keep="first"` deterministically preserves the latest update.',
    deepDive:
      'Always reset the index via `.reset_index(drop=True)` after deduplicating to eliminate missing index gaps.',
    tags: ['pandas', 'drop_duplicates', 'Deduplication', 'Data Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-070',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Data Type Coercion',
    topic: 'Robust Type Conversion with pd.to_numeric(errors="coerce")',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'A column contains dirty numeric strings with accidental text entries (e.g. `["$12.50", "45.00", "N/A", "Unknown"]`). How does `pd.to_numeric(errors="coerce")` handle unparseable strings?',
    codeSnippet: `import pandas as pd

s = pd.Series(['10.5', '20.0', 'missing', '40.2'])
# Coerce unparseable strings to NaN:
clean_s = pd.to_numeric(s, errors='coerce')
print(clean_s.tolist()) # [10.5, 20.0, nan, 40.2]`,
    options: [
      'It converts valid numeric strings to floats, and transforms any unparseable non-numeric values into NaN without raising an exception',
      'It replaces unparseable strings with 0.0',
      'It raises a ValueError and terminates execution',
      'It strips the non-numeric characters and converts the remainder'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It converts valid numeric strings to floats, and transforms any unparseable non-numeric values into NaN without raising an exception',
    explanationTitle: 'Safe Numeric Conversion with errors="coerce"',
    explanationText:
      'Standard `.astype(float)` crashes if even a single row contains a non-numeric string. `pd.to_numeric(s, errors="coerce")` gracefully converts valid numbers while coercing corrupt strings into `NaN`. You can then identify or impute those specific corrupted records.',
    deepDive:
      'Similarly, `pd.to_datetime(s, errors="coerce")` handles malformed or out-of-bounds date strings without raising exceptions.',
    tags: ['to_numeric', 'errors=coerce', 'Type Casting', 'Data Cleaning', 'PCAD-31-02']
  }
];
