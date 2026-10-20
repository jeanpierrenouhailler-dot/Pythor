import { Flashcard } from '../types';

export const pcadSection4CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.1: MULTI-SOURCE DATA AGGREGATION, INTEGRATION & API INGESTION [Cards 1-20]
  // =========================================================================
  {
    id: 'pcad-sec4-001',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'API Integration',
    topic: 'HTTP GET Request Status Code Handling',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'When consuming a REST API for analytical ingestion with the Python `requests` library, what is the best practice for validating the HTTP response status before processing payload data?',
    codeSnippet: `import requests

response = requests.get('https://api.analytics-provider.org/v1/metrics', timeout=10)
# How should the analyst verify success before invoking response.json()?`,
    options: [
      'Call `response.raise_for_status()`, which raises an `HTTPError` if the HTTP status code is 4xx (client error) or 5xx (server error)',
      'Check `if response.status_code == "OK"` using string comparison',
      'Wrap `response.json()` in an empty `except:` block and return an empty DataFrame on any exception',
      'Inspect `response.headers["Success"]` which is guaranteed to be boolean True in all REST APIs'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'response.raise_for_status() raises an HTTPError for 4xx/5xx responses; response.status_code == 200 confirms success',
    explanationTitle: 'Defensive HTTP Response Handling with requests',
    explanationText:
      '`response.raise_for_status()` ensures that transient network failures, authentication errors (401/403), resource missing errors (404), or upstream gateway timeouts (502/504) halt execution or trigger structured retry logic rather than silently corrupting downstream data ingestion pipelines.',
    deepDive:
      'Always set an explicit `timeout` parameter in `requests.get(..., timeout=(connect_timeout, read_timeout))` to prevent worker threads from hanging indefinitely when remote services degrade.',
    tags: ['REST API', 'requests', 'HTTP Status Codes', 'Data Ingestion', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-002',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'API Pagination',
    topic: 'Cursor & Offset Pagination Strategies',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When extracting 100,000 records from a paginated REST API endpoint using query parameters, why is cursor-based pagination preferred over offset-based (`offset=...&limit=...`) pagination for high-volume analytics?',
    codeSnippet: `# Offset Pagination:
# GET /events?limit=1000&offset=50000

# Cursor-based Pagination:
# GET /events?limit=1000&cursor=eyJpZCI6IDUwMDAwfQ==`,
    options: [
      'Cursor pagination prevents missing or duplicate records when records are inserted or deleted during multi-page ingestion, and maintains O(1) database index seek time',
      'Offset pagination can only return up to 256 records due to HTTP 1.1 header limitations',
      'Cursor pagination eliminates the need for authentication tokens',
      'Offset pagination converts numeric IDs into floating point values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Cursor pagination avoids offset drift and eliminates full-table index scans (OFFSET N requires scanning N rows in RDBMS)',
    explanationTitle: 'Cursor vs Offset Pagination in Data Extraction',
    explanationText:
      'With offset pagination, as offset grows (e.g. `OFFSET 500000`), the database must scan and discard 500,000 rows, causing query latency to spike. Furthermore, if new rows are inserted during extraction, pages shift, causing duplicated or omitted records. Cursor pagination uses a deterministic pointer (e.g. `WHERE id > last_seen_id LIMIT 1000`), yielding constant-time lookup and robust idempotency.',
    deepDive:
      'In Python ETL scripts, accumulate paginated page responses in a Python list of DataFrames or dicts, then execute a single `pd.concat(pages, ignore_index=True)` at the end to avoid O(N^2) memory reallocation.',
    tags: ['Pagination', 'ETL', 'API Ingestion', 'Cursor', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-003',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'JSON Normalization',
    topic: 'Flattening Nested JSON Payloads with pd.json_normalize',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'You receive a nested JSON response from an e-commerce API where orders contain customer info and an array of line items. How do you flatten the nested `items` array into individual tabular rows while keeping order metadata?',
    codeSnippet: `import pandas as pd

payload = [
    {
        "order_id": 101,
        "customer": {"name": "Alice", "city": "Paris"},
        "items": [
            {"sku": "A1", "qty": 2, "price": 15.0},
            {"sku": "B2", "qty": 1, "price": 40.0}
        ]
    }
]

df = pd.json_normalize(payload, record_path='items', meta=['order_id', ['customer', 'name']])`,
    options: [
      '`df` produces 2 rows, each containing sku, qty, price, plus order_id and customer.name columns',
      '`df` raises a KeyError because JSON arrays cannot be flattened in pandas',
      '`df` stores the items array as a raw string inside a single row',
      '`df` discards order_id and only extracts the line items'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.json_normalize unrolls the nested items list into separate rows while copying meta attributes across all children',
    explanationTitle: 'Hierarchical JSON Unnesting with pd.json_normalize',
    explanationText:
      '`pd.json_normalize()` accepts `record_path` (the nested list to expand into individual records) and `meta` (parent-level scalars or nested paths like `["customer", "name"]` to replicate on each resulting row). This transforms semi-structured document trees into normalized first-normal-form (1NF) dataframes.',
    deepDive:
      'The separator parameter defaults to `sep="."`. You can customize column names by passing `record_prefix="item_"` to avoid namespace collisions between parent and child keys.',
    tags: ['JSON', 'json_normalize', 'Data Wrangling', 'Nesting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-004',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Integration',
    topic: 'Handling Schema Drift Across Heterogeneous Sources',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'An enterprise extracts daily transaction files from three regional legacy systems: Region A outputs CSV, Region B outputs JSON, and Region C outputs Parquet. Column names and types vary slightly (e.g. `txn_dt` vs `transaction_date`, string vs integer IDs). What is the standard design pattern to integrate them?',
    codeSnippet: `# Multi-source integration workflow:
# 1. Ingestion of raw regional payloads
# 2. Application of regional schema adapters (mapping dicts)
# 3. Type harmonization & standard casting
# 4. Vertical union via pd.concat()`,
    options: [
      'Define an explicit Canonical Data Model (schema specification) with a standardized column dictionary and explicit type casting per source before executing `pd.concat`',
      'Concatenate the raw dataframes directly with `ignore_index=True` and let pandas automatically rename mismatched columns',
      'Force all systems to switch to CSV with no headers and rely on positional column indexing',
      'Convert all values across all sources into Python `object` strings to prevent any schema conflicts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Implement an adapter pattern mapping source schemas to a Canonical Data Model before union',
    explanationTitle: 'Canonical Data Modeling and Schema Harmonization',
    explanationText:
      'In production analytics pipelines, heterogeneous sources require an adapter layer: renaming columns via `df.rename(columns=regional_col_map)`, coercing timestamps with `pd.to_datetime()`, casting keys to uniform string/integer representations, and validating required fields before calling `pd.concat([df_a, df_b, df_c], ignore_index=True)`.',
    deepDive:
      'Directly concatenating mismatched columns results in sparse dataframes with duplicate semantic columns (e.g. both `txn_dt` and `transaction_date` existing side by side with 50% NaNs).',
    tags: ['Schema Drift', 'Data Integration', 'Canonical Model', 'ETL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-005',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Fuzzy Matching',
    topic: 'Entity Resolution and String Similarity Matching',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'When integrating customer tables from two distinct corporate databases without a shared foreign key, customer names have typographical variations (e.g. "Acme Corp, Inc." vs "Acme Corporation"). What algorithmic approach enables entity resolution in Python?',
    codeSnippet: `from difflib import SequenceMatcher
# or using Levenshtein distance:
def similarity(a, b):
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()

print(similarity("Acme Corp, Inc.", "Acme Corporation"))`,
    options: [
      'Approximate string matching (e.g. Levenshtein edit distance, Jaro-Winkler, or token sort ratio) with a calibrated confidence threshold (e.g. > 0.85) and human-in-the-loop review for borderline scores',
      'Exact SQL `WHERE c1.name = c2.name` join after stripping spaces',
      'Hashing both strings with MD5 and joining on matching hash digests',
      'Sorting both strings alphabetically character by character and checking equality'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Edit distance / token sort ratio computes similarity between 0.0 and 1.0 to resolve entity variations',
    explanationTitle: 'Record Linkage and Entity Resolution',
    explanationText:
      'Entity resolution (or record linkage) reconciles duplicate real-world entities across disparate sources. Libraries like `thefuzz` (formerly `fuzzywuzzy`) or Python’s built-in `difflib` compute string distance metrics. Token Sort Ratio is especially effective because it tokenizes words, sorts them alphabetically, and joins them back together before comparing, making it invariant to word order.',
    deepDive:
      'To prevent O(N * M) Cartesian product comparisons on millions of records, use "blocking" (e.g., grouping by postal code, country, or first 3 letters) to restrict fuzzy comparisons within relevant candidate subsets.',
    tags: ['Entity Resolution', 'Fuzzy Matching', 'Record Linkage', 'difflib', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-006',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Merging',
    topic: 'pandas merge Indicator Flag for Reconciliation',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'During data reconciliation between an ERP ledger DataFrame `df_erp` and a bank statement DataFrame `df_bank`, how can you identify which transactions exist in both systems, which exist only in ERP, and which exist only in the bank statement?',
    codeSnippet: `reconciliation = pd.merge(
    df_erp, 
    df_bank, 
    on='transaction_id', 
    how='outer', 
    indicator=True
)`,
    options: [
      'The resulting `_merge` categorical column contains "both", "left_only", and "right_only" labels',
      'The resulting dataframe adds boolean flags `is_erp` and `is_bank`',
      'pandas raises an error because `indicator` must be a function',
      '`indicator=True` replaces all mismatched rows with NaN strings'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'reconciliation["_merge"].value_counts() gives exact counts for both, left_only, and right_only records',
    explanationTitle: 'Audit Reconciliation using merge indicator=True',
    explanationText:
      'Passing `indicator=True` to `pd.merge()` adds a categorical column named `_merge` with three possible values: `both`, `left_only`, and `right_only`. You can also pass a custom string (e.g. `indicator="reconciliation_status"`) to customize the audit column name.',
    deepDive:
      'To extract unmatched records requiring investigation: `unmatched = reconciliation[reconciliation["_merge"] != "both"]`. This is a standard compliance audit procedure in financial and healthcare analytics.',
    tags: ['pandas', 'merge', 'indicator', 'Audit Reconciliation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-007',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Temporal Alignment',
    topic: 'As-Of Temporal Merging with pd.merge_asof',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'You need to match high-frequency trade executions with the most recent prevailing market bid/ask quote recorded prior to or at the trade timestamp. Why is `pd.merge_asof()` required instead of a standard `pd.merge()`?',
    codeSnippet: `import pandas as pd

# trades: timestamp, trade_id, price
# quotes: timestamp, bid, ask

matched = pd.merge_asof(
    trades.sort_values('timestamp'),
    quotes.sort_values('timestamp'),
    on='timestamp',
    direction='backward'
)`,
    options: [
      '`pd.merge_asof()` performs key matching on nearest or prior timestamps without requiring exact millisecond equality between trades and quotes',
      '`pd.merge_asof()` calculates exponential moving averages automatically',
      '`pd.merge_asof()` converts timestamps into integer Unix epochs and runs an inner join',
      '`pd.merge_asof()` requires both dataframes to have identical row counts'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'merge_asof joins on nearest key match (direction="backward" matches quote timestamp <= trade timestamp)',
    explanationTitle: 'As-Of Joins for Time-Series Alignment',
    explanationText:
      '`pd.merge_asof()` is designed for time-series alignment where events do not occur at identical timestamps. Key requirements: both DataFrames must be sorted by the merge key. `direction="backward"` picks the last quote where quote timestamp <= trade timestamp; `direction="forward"` picks the subsequent quote; `direction="nearest"` picks the closest timestamp.',
    deepDive:
      'You can also group by asset identifier using `by="ticker"`: `pd.merge_asof(trades, quotes, on="timestamp", by="ticker", direction="backward")` to ensure quotes match the corresponding stock symbol.',
    tags: ['merge_asof', 'Time Series', 'Temporal Alignment', 'Financial Analytics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-008',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Web Scraping & HTML Tables',
    topic: 'Extracting Tabular Data from Web Pages with pd.read_html',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'How does `pd.read_html()` extract data from web pages or HTML markup strings, and what data structure does it return?',
    codeSnippet: `import pandas as pd

tables = pd.read_html('https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)')
# What is the type of variable tables?`,
    options: [
      'It returns a Python list of pandas DataFrame objects, each corresponding to an HTML `<table>` element found in the document',
      'It returns a single combined DataFrame containing all table contents concatenated together',
      'It returns a BeautifulSoup parsing tree object',
      'It returns a dictionary mapping URL strings to raw text strings'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_html() parses all <table> tags and returns a list of DataFrames: type(tables) is list',
    explanationTitle: 'Web Table Extraction with pd.read_html',
    explanationText:
      '`pd.read_html()` searches for all `<table>` elements within the HTML string or URL. Because a single web page can host dozens of tables, it returns a Python list of DataFrames: `tables[0]`, `tables[1]`, etc. You can filter tables directly by specifying `match="Country"` or `match="GDP"`.',
    deepDive:
      '`pd.read_html()` relies on parser libraries under the hood: `lxml`, `html5lib`, or `BeautifulSoup4`. If none of these packages are installed in the Python virtual environment, `ImportError` is raised.',
    tags: ['Web Ingestion', 'read_html', 'HTML Parsing', 'Data Sourcing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-009',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Multi-File Ingestion',
    topic: 'Glob Pattern Ingestion and Memory-Efficient Union',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'A directory contains 365 daily partitioned Parquet files (`sales_2026-01-01.parquet` through `sales_2026-12-31.parquet`). What is the idiomatic pandas/PyArrow approach to read all files into a consolidated analytical dataset?',
    codeSnippet: `import pandas as pd
import glob

# Method A:
# df = pd.read_parquet('data/sales_*.parquet')

# Method B:
# files = glob.glob('data/sales_*.parquet')
# df = pd.concat((pd.read_parquet(f) for f in files), ignore_index=True)`,
    options: [
      'Both Method A and Method B are valid; modern PyArrow engines natively support directory and glob paths directly in `pd.read_parquet()`, while generator-based `pd.concat()` works uniformly across file formats',
      'Method A fails because Parquet cannot process wildcards under any circumstances',
      'Method B causes a memory leak because generator expressions cannot be consumed by `pd.concat`',
      'Files must be uncompressed with gzip before pandas can read them'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_parquet natively accepts glob wildcards or directory paths when backed by pyarrow/fastparquet',
    explanationTitle: 'Batch Partitioned Ingestion with Parquet and Glob',
    explanationText:
      '`pd.read_parquet()` backed by PyArrow can ingest an entire directory of partitioned Parquet files or accept wildcard patterns like `pd.read_parquet("data/sales_*.parquet")`. For CSV files where direct globbing is not supported natively in `read_csv`, passing a generator expression `(pd.read_csv(f) for f in files)` to `pd.concat` avoids loading an unnecessary intermediate list of DataFrames in memory.',
    deepDive:
      'When reading partitioned directories generated by Spark/Hive (e.g. `data/year=2026/month=03/`), PyArrow automatically parses the directory path names as partition columns and includes them as categorical series in the resulting DataFrame.',
    tags: ['Parquet', 'glob', 'Multi-File Ingestion', 'PyArrow', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-010',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Reconciliation',
    topic: 'Total Key Check and Row Count Invariant Validation',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'When joining a master dimension table `dim_customers` (unique on `customer_id`) with a transaction fact table `fact_orders` on `customer_id` using an `inner` join, under what condition does the row count of the joined output strictly equal the row count of `fact_orders`?',
    codeSnippet: `joined = pd.merge(fact_orders, dim_customers, on='customer_id', how='inner')
# When is len(joined) == len(fact_orders)?`,
    options: [
      'When every `customer_id` in `fact_orders` exists in `dim_customers` (referential integrity holds) and `dim_customers` has no duplicate `customer_id` keys',
      'Only when `fact_orders` and `dim_customers` have identical total row counts',
      'Whenever an inner join is performed, row counts always match the left table',
      'Only if all order amounts are greater than zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Row count matches fact table if and only if referential integrity holds (0 orphan FKs) and dim PK is strictly unique',
    explanationTitle: 'Referential Integrity and Join Invariants',
    explanationText:
      'In a 1-to-many relationship: if any `customer_id` in `fact_orders` is missing from `dim_customers`, an inner join silently drops those orphan order rows (`len(joined) < len(fact_orders)`). If `dim_customers` contains duplicate keys, the join produces a Cartesian product multiplying order rows (`len(joined) > len(fact_orders)`).',
    deepDive:
      'To defensively enforce this invariant in code, use `validate="many_to_one"` in `pd.merge()`, which immediately raises `MergeError` if the right table contains duplicate merge keys.',
    tags: ['Data Integrity', 'Referential Integrity', 'merge', 'Validation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-011',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'API Authentication',
    topic: 'Bearer Token and API Key Headers',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'How should an analytical ingestion script pass an OAuth2 Bearer token securely when invoking a protected REST API endpoint with `requests`?',
    codeSnippet: `import requests
import os

token = os.environ.get('ANALYTICS_API_TOKEN')
# How to structure the Authorization header?`,
    options: [
      'Pass `headers={"Authorization": f"Bearer {token}"}` in `requests.get()`',
      'Include `params={"token": token}` directly in the URL query string',
      'Set `cookies={"auth_token": token}`',
      'Append `#token=` at the end of the URL endpoint string'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'headers={"Authorization": f"Bearer {token}"} passes credentials via the standard HTTP Authorization header',
    explanationTitle: 'Standard HTTP Authorization Headers',
    explanationText:
      'Passing credentials in the HTTP `Authorization` header (`Bearer <token>`) follows RFC 6750 standards. Passing tokens in URL query strings (`?token=...`) is a major security vulnerability because URLs are logged in plain text in proxy access logs, web server logs, and browser history.',
    deepDive:
      'Never hardcode API secrets in script files. Always retrieve credentials at runtime using `os.getenv("SECRET_NAME")` or secure credential managers.',
    tags: ['Security', 'REST API', 'Bearer Token', 'HTTP Headers', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-012',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Rate Limiting',
    topic: 'Exponential Backoff and Retry Logic for API Throttling',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When an external data provider responds with HTTP status code 429 ("Too Many Requests"), what resilient design pattern should the data analyst implement in Python?',
    codeSnippet: `import time
import requests

def fetch_with_backoff(url, max_retries=5):
    delay = 1
    for attempt in range(max_retries):
        resp = requests.get(url)
        if resp.status_code == 429:
            # How should delay be handled?
            ...`,
    options: [
      'Inspect the `Retry-After` header if present; otherwise apply exponential backoff (e.g. `time.sleep(delay * (2 ** attempt))`) with randomized jitter before retrying',
      'Immediately resend the request in a tight `while True:` loop until it succeeds',
      'Switch the HTTP verb from GET to POST to bypass the rate limit',
      'Ignore the 429 response and parse the empty body as valid data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sleep for Retry-After seconds or use exponential backoff delay * (2 ** attempt) + random jitter',
    explanationTitle: 'Exponential Backoff and Jitter Pattern',
    explanationText:
      'HTTP 429 indicates rate limiting. Rapidly re-requesting exacerbates server load and risks IP bans. Exponential backoff progressively increases wait times (1s, 2s, 4s, 8s...). Adding "jitter" (random small variation) prevents the "thundering herd" problem where multiple client processes retry simultaneously in sync.',
    deepDive:
      'In production, use `urllib3.util.Retry` mounted onto a `requests.Session`: `session.mount("https://", HTTPAdapter(max_retries=Retry(total=5, backoff_factor=1, status_forcelist=[429, 500, 502, 503, 504])))`.',
    tags: ['Rate Limiting', 'HTTP 429', 'Exponential Backoff', 'Resilience', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-013',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Extraction',
    topic: 'Extracting Compressed Archives with zipfile and tarfile',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How can an analyst inspect and stream CSV data directly out of a downloaded `.zip` archive without extracting the entire archive onto the local physical disk?',
    codeSnippet: `import zipfile
import pandas as pd

with zipfile.ZipFile('monthly_telemetry.zip', 'r') as z:
    with z.open('sensors_2026_10.csv') as f:
        df = pd.read_csv(f)`,
    options: [
      '`pd.read_csv()` directly accepts file-like binary stream objects returned by `zipfile.ZipFile.open()`, allowing memory-streamed parsing without disk extraction',
      '`zipfile` requires manual shell execution via `os.system("unzip ...")` before pandas can read anything',
      'The file must be converted to base64 before pandas can interpret it',
      '`pd.read_csv` only reads files that have a `.csv` extension on the physical filesystem'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_csv accepts file-like objects (z.open()) allowing direct memory-efficient streaming from ZIP archives',
    explanationTitle: 'In-Memory Stream Parsing from Compressed Archives',
    explanationText:
      'Python’s `zipfile.ZipFile.open(filename)` returns an in-memory binary stream. Because `pd.read_csv()` accepts any Python file-like object supporting `.read()`, the file is decompressed on the fly into RAM, saving disk I/O and leaving no temporary junk files on the file system.',
    deepDive:
      'pandas also natively unpacks zip files directly if passed a path: `df = pd.read_csv("monthly_telemetry.zip", compression="zip")` if the archive contains a single CSV file.',
    tags: ['zipfile', 'Compression', 'Streaming', 'read_csv', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-014',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Reshaping',
    topic: 'Cross-Source Dimensional Alignment with reindex',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'You are reconciling monthly revenue across four branch stores. Store D only opened in July and has no records for January through June. How do you align Store D to the standard 12-month calendar index with zeros filled in for inactive months?',
    codeSnippet: `full_year_index = pd.date_range('2026-01-01', '2026-12-01', freq='MS')
# store_d has index from 2026-07-01 to 2026-12-01

store_d_aligned = store_d.reindex(full_year_index, fill_value=0.0)`,
    options: [
      '`reindex()` conforms Store D to the 12-month index, inserting 0.0 for missing months (Jan-Jun) while preserving existing July-Dec figures',
      '`reindex()` deletes Store D data and resets all values to 0.0',
      '`reindex()` throws an IndexError because new indices cannot exceed existing index length',
      '`reindex()` automatically interpolates values between zero and the first month'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'store_d.reindex(full_year_index, fill_value=0.0) pads missing periods with 0.0 to match the master calendar',
    explanationTitle: 'Time-Series Alignment via DataFrame reindex',
    explanationText:
      '`df.reindex(new_index, fill_value=...)` conforms a Series or DataFrame to a new target index. Any index positions not present in the original object are populated with `fill_value`. This guarantees that time-series from multiple entities share identical timestamps for comparative vector mathematics.',
    deepDive:
      'For continuous physical measurements (e.g. temperature readings), `method="ffill"` (forward fill) or `method="bfill"` can be passed instead of `fill_value` to propagate the last known observation.',
    tags: ['reindex', 'Time Series', 'Alignment', 'fill_value', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-015',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'XML Processing',
    topic: 'Parsing Nested XML Business Documents with xml.etree.ElementTree',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How do you extract invoice numbers and total amounts from an XML file containing a hierarchy of `<invoices><invoice id="..."><total>...</total></invoice></invoices>` using Python’s standard library?',
    codeSnippet: `import xml.etree.ElementTree as ET
import pandas as pd

tree = ET.parse('invoices.xml')
root = tree.getroot()

data = [
    {
        'invoice_id': inv.get('id'),
        'total': float(inv.find('total').text)
    }
    for inv in root.findall('invoice')
]
df = pd.DataFrame(data)`,
    options: [
      '`root.findall("invoice")` iterates through direct invoice elements; `inv.get("id")` retrieves attributes; `inv.find("total").text` extracts text content',
      '`root.findall()` converts all XML elements directly into a SQL table',
      '`inv.get("id")` reads XML child tags while `inv.find()` reads XML attributes',
      'Python standard library cannot parse XML without installing external C++ binaries'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ElementTree parses elements with find/findall, extracting attributes with .get() and inner text with .text',
    explanationTitle: 'XML Ingestion with ElementTree and pandas',
    explanationText:
      'XML stores information in two distinct locations: XML attributes inside tags (accessed via `elem.get("attr_name")`) and character data between opening/closing tags (accessed via `elem.text`). Iterating with `findall()` and compiling dictionaries into a list yields a clean pandas DataFrame.',
    deepDive:
      'In pandas 1.3+, `pd.read_xml("invoices.xml", xpath=".//invoice")` can parse simple XML files directly into a DataFrame in a single line using XPath expressions.',
    tags: ['XML', 'ElementTree', 'Data Ingestion', 'read_xml', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-016',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Consolidation',
    topic: 'Combining Append-Only Transaction Logs with Snapshot State',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'You have a base snapshot table `accounts_snapshot` (as of midnight) and an append-only transaction stream `delta_events` throughout the day. How do you compute the current account balances at 5:00 PM?',
    codeSnippet: `# accounts_snapshot: account_id, opening_balance
# delta_events: timestamp, account_id, change_amount

delta_totals = delta_events.groupby('account_id')['change_amount'].sum().reset_index()
current = pd.merge(accounts_snapshot, delta_totals, on='account_id', how='left')
current['change_amount'] = current['change_amount'].fillna(0.0)
current['closing_balance'] = current['opening_balance'] + current['change_amount']`,
    options: [
      'Aggregate deltas by primary key using `.groupby().sum()`, left-join onto the base snapshot, impute missing deltas with 0.0, and sum opening balance with net change',
      'Concatenate both tables vertically with `pd.concat` and calculate the median balance',
      'Inner join snapshot with deltas and discard accounts with no transactions',
      'Run an outer join and multiply opening balance by change amount'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Net delta aggregated per key + left joined to snapshot + fillna(0) correctly computes current state',
    explanationTitle: 'Lambda/Delta Architecture State Materialization',
    explanationText:
      'Computing state from snapshots and deltas requires: (1) reducing the high-frequency event stream to net delta per key via `groupby("account_id")["change_amount"].sum()`, (2) left-joining with base snapshot to keep all active accounts, (3) filling un-transacted accounts with zero net delta (`fillna(0)`), and (4) adding opening balance + net delta.',
    deepDive:
      'Failing to fill missing deltas with `0.0` causes `opening_balance + NaN` to evaluate to `NaN` in pandas, unintentionally wiping out accounts that had zero transactions.',
    tags: ['Data Consolidation', 'State Materialization', 'groupby', 'merge', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-017',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Cleaning',
    topic: 'Resolving Mismatched Categorical Encodings Across Sources',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'Two integrated survey datasets record gender responses differently: Source 1 uses `["M", "F", "Other"]` while Source 2 uses `[1, 2, 3]`. How should the data analyst harmonize this column prior to merging?',
    codeSnippet: `mapping_source_2 = {1: 'Male', 2: 'Female', 3: 'Other'}
mapping_source_1 = {'M': 'Male', 'F': 'Female', 'Other': 'Other'}

df1['gender'] = df1['gender'].map(mapping_source_1)
df2['gender'] = df2['gender'].map(mapping_source_2)`,
    options: [
      'Apply standardized dictionary mappings via `.map()` or `.replace()` on each source to convert disparate codes into a unified taxonomy before union',
      'Cast both columns to float to see if they align numerically',
      'Merge the tables without transformation and create two separate gender columns',
      'Drop all gender data from both datasets to avoid discrepancies'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.map(dict) transforms disparate categorical codes into a uniform semantic vocabulary',
    explanationTitle: 'Categorical Harmonization and Semantic Mapping',
    explanationText:
      'Harmonization requires establishing a single standard taxonomy (e.g. ISO codes or explicit category labels) and applying Python dictionaries with `.map()` or `.replace()`. Unmapped values in `.map()` become `NaN`, which helpfully flags unexpected input codes during data quality validation.',
    deepDive:
      'If you want unmapped values to remain unchanged rather than become `NaN`, use `df["col"].replace(mapping_dict)` instead of `.map()`.',
    tags: ['Data Harmonization', 'Categorical Data', 'map', 'replace', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-018',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Multi-Index Flattening',
    topic: 'Collapsing Hierarchical Groupby Columns After Aggregation',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When performing multiple aggregations across multiple columns, pandas creates a MultiIndex on the columns (e.g. `("price", "mean")`, `("qty", "sum")`). How do you flatten this into clean, single-level column names like `"price_mean"` and `"qty_sum"`?',
    codeSnippet: `agg_df = df.groupby('region').agg({'price': ['mean', 'max'], 'qty': ['sum']})

# Desired columns: ['price_mean', 'price_max', 'qty_sum']
agg_df.columns = ['_'.join(col).strip() for col in agg_df.columns.values]
agg_df = agg_df.reset_index()`,
    options: [
      'Join tuple elements with string comprehension `["_".join(col) for col in agg_df.columns]` and call `.reset_index()`',
      'Call `agg_df.unstack(level=0)` to convert columns to rows',
      'Set `agg_df.columns = agg_df.columns.droplevel(-1)` which keeps both duplicate names intact',
      'Cast the DataFrame to a NumPy array and recreate it from scratch'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'agg_df.columns = ["_".join(col) for col in agg_df.columns] converts MultiIndex tuples into clean flat snake_case strings',
    explanationTitle: 'Flattening Hierarchical Column MultiIndex',
    explanationText:
      'MultiIndex columns complicate downstream SQL loading, CSV exports, and machine learning pipelines. Joining tuple pairs with `_` creates readable column names. In modern pandas, named aggregations `df.groupby("region").agg(price_mean=("price", "mean"), qty_sum=("qty", "sum"))` can also generate flat column names directly without post-processing.',
    deepDive:
      'Named aggregations (`agg(new_col=(src_col, func))`) are preferred in clean production code because they avoid creating MultiIndex column objects altogether.',
    tags: ['MultiIndex', 'groupby', 'agg', 'Flattening', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-019',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Data Extraction',
    topic: 'Querying GraphQL APIs with Python requests',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Unlike REST APIs where query parameters are passed in URLs, how must analytical extraction queries be formatted when requesting specific fields from a GraphQL API endpoint?',
    codeSnippet: `import requests

url = "https://analytics-api.org/graphql"
query = """
query GetSales($region: String!) {
    sales(region: $region) {
        id
        amount
        timestamp
    }
}
"""
variables = {"region": "EMEA"}

# How to transmit this request?`,
    options: [
      'Send an HTTP POST request with a JSON body containing `{"query": query, "variables": variables}`',
      'Send an HTTP GET request with the query string pasted directly into the URL path',
      'Send an HTTP PUT request with query formatted as raw CSV text',
      'Save the query to a `.graphql` file and execute it via `sys.stdin`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'GraphQL requests use HTTP POST with json={"query": query_str, "variables": var_dict}',
    explanationTitle: 'GraphQL Analytical Ingestion Mechanics',
    explanationText:
      'GraphQL queries are transmitted via HTTP POST payloads formatted as JSON objects containing `"query"` (the query string) and optional `"variables"` (a dictionary of bound parameters). The server returns a nested JSON document under the `"data"` key: `response.json()["data"]["sales"]`.',
    deepDive:
      'GraphQL prevents over-fetching by allowing the analyst to declare exactly the fields required for the analytical model, substantially reducing payload bandwidth compared to monolithic REST endpoints.',
    tags: ['GraphQL', 'API Ingestion', 'requests', 'POST', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-020',
    section: 'Section 4',
    chapter: '4.1',
    track: 'pcad',
    cardType: 'Streaming Extraction',
    topic: 'Streaming Massive JSON Line Files (JSONL / NDJSON)',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'You must analyze a 25 GB log file where each line is an independent valid JSON string (newline-delimited JSON or JSONL). Your machine has only 8 GB of RAM. How do you process this dataset in Python without exhausting memory?',
    codeSnippet: `import pandas as pd

# Method 1:
# df = pd.read_json('logs.jsonl', lines=True)

# Method 2:
# reader = pd.read_json('logs.jsonl', lines=True, chunksize=50000)`,
    options: [
      'Use `pd.read_json(..., lines=True, chunksize=50000)` which yields an iterator over small manageable DataFrame chunks',
      '`lines=True` automatically compresses the 25 GB file into 500 MB in RAM',
      'You must split the file using an external command line tool before Python can open it',
      'Convert the JSONL file to an Excel `.xlsx` workbook using Python openpyxl'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_json with lines=True and chunksize=N returns a JsonReader iterator for streaming batch processing',
    explanationTitle: 'Chunked JSONL Streaming for Out-of-Core Processing',
    explanationText:
      'Newline-delimited JSON (JSONL) allows records to be read line-by-line. Specifying `chunksize=N` returns a `JsonReader` generator. The analyst processes each batch (filtering, aggregating) and maintains a running summary, maintaining a minimal memory footprint regardless of total file size.',
    deepDive:
      'When processing chunk by chunk: `total_errors = sum(chunk["is_error"].sum() for chunk in pd.read_json("logs.jsonl", lines=True, chunksize=50000))` executes with constant O(chunksize) memory.',
    tags: ['JSONL', 'NDJSON', 'Chunking', 'Out-of-Core', 'Memory Optimization', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 4.2: DATA PIPELINES, VALIDATION & AGGREGATION INTEGRITY [Cards 21-40]
  // =========================================================================
  {
    id: 'pcad-sec4-021',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Validation',
    topic: 'Asserting Join Cardinality with pandas validate Parameter',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When joining a transaction table `orders` with a customer reference table `customers` on `cust_id`, you expect each customer ID in the reference table to be strictly unique (1-to-many relationship). How can you enforce this validation natively during the merge?',
    codeSnippet: `merged = pd.merge(
    orders, 
    customers, 
    on='cust_id', 
    how='inner', 
    validate='many_to_one'
)`,
    options: [
      'If `customers` contains duplicate `cust_id` values, pandas immediately raises a `MergeError`, preventing silent Cartesian explosion',
      'pandas automatically drops duplicate customers before joining',
      '`validate="many_to_one"` sorts both tables by `cust_id` before merging',
      'If duplicate keys exist, pandas sets all customer columns to NaN'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pandas.errors.MergeError is raised if the join keys violate the specified cardinality check',
    explanationTitle: 'Defensive Cardinality Checks with merge(validate=...)',
    explanationText:
      'The `validate` argument in `pd.merge()` accepts `"one_to_one"`, `"one_to_many"`, `"many_to_one"`, or `"many_to_many"`. If the actual data violates the specified relationship (e.g. duplicate keys on the "one" side), a `MergeError` halts execution immediately. This prevents runaway row multiplication bugs.',
    deepDive:
      'Unchecked Cartesian explosions in joins are one of the most common causes of silent pipeline corruption, inflating revenue calculations and exhausting server RAM.',
    tags: ['MergeError', 'Validation', 'Join Cardinality', 'Data Pipelines', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-022',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Integrity',
    topic: 'Detecting and Preventing Data Leakage Across Train/Test Splits',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'In a predictive analytics pipeline, which of the following operations constitutes a fatal Data Leakage bug that invalidates model performance estimates?',
    codeSnippet: `# Scenario A:
imputer = SimpleImputer(strategy='mean')
X_train_imp = imputer.fit_transform(X_train)
X_test_imp = imputer.transform(X_test)

# Scenario B:
imputer = SimpleImputer(strategy='mean')
X_all_imputed = imputer.fit_transform(X) # Before train_test_split!`,
    options: [
      'Scenario B: Computing mean imputation parameters across the full dataset prior to splitting leaks target distribution information from the test set into training features',
      'Scenario A: Fitting the imputer strictly on the training set and applying it to the test set',
      'Scaling features with StandardScaler inside a cross-validation fold',
      'Using stratified sampling to preserve class proportions in train and test sets'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Imputing or scaling before splitting leaks test set statistics into the training pipeline',
    explanationTitle: 'Data Leakage Principles in Analytical Pipelines',
    explanationText:
      'Data leakage occurs when information from outside the training dataset is used to create or tune the model. In Scenario B, the global mean incorporates test set values. When the model is evaluated, the test set is no longer a true out-of-sample holdout, producing overly optimistic evaluation metrics that collapse in production.',
    deepDive:
      'Golden Rule: Any transformer (scaler, encoder, imputer, feature selector) must be fit ONLY on training data (`fit` or `fit_transform`), and subsequently applied to test/production data using `transform` alone.',
    tags: ['Data Leakage', 'Pipelines', 'SimpleImputer', 'train_test_split', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-023',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Pipeline Validation',
    topic: 'Schema Validation Concepts: Value Ranges and Null Constraints',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Before passing transformed data to a business dashboard or machine learning model, an analyst adds defensive schema validation assertions. What Python construct verifies that `age` is between 0 and 120 and contains zero null values?',
    codeSnippet: `assert df['age'].notna().all(), "Data Quality Alert: Null values detected in age!"
assert df['age'].between(0, 120).all(), "Data Quality Alert: Age values outside physiological bounds [0, 120]!"`,
    options: [
      'The assertions run synchronously; if any row violates the conditions, an `AssertionError` is raised immediately with the diagnostic message',
      'The assertions silently remove the offending rows from `df`',
      '`assert` replaces violating values with the column mean',
      '`assert` statements are ignored unless Python is run with the `-O` optimization flag'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'AssertionError is raised if any row fails notna() or between(0, 120)',
    explanationTitle: 'Contract-Based Pipeline Validation',
    explanationText:
      'Using assertion statements or schema validation frameworks (like Pandera or Great Expectations) establishes data contracts. If upstream source feeds introduce corrupted negative ages or unexpected null values, the pipeline halts immediately with an explicit error trace rather than producing distorted statistical outputs.',
    deepDive:
      'Note: Running Python with the `-O` (optimize) flag disables standard `assert` statements. For mission-critical production pipelines, prefer explicit `if not cond: raise ValueError("...")` checks.',
    tags: ['Validation', 'assert', 'Data Quality', 'Schema Constraints', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-024',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Aggregation Integrity',
    topic: 'Groupby transform vs apply vs agg Differences',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'You want to compute each employee’s salary as a percentage of their department’s total salary. Which pandas groupby method computes the group sum and returns a Series with the exact same length and index as the original DataFrame?',
    codeSnippet: `df = pd.DataFrame({
    'dept': ['Sales', 'Sales', 'IT', 'IT', 'IT'],
    'salary': [50000, 70000, 80000, 90000, 110000]
})

# Desired: calculate df['dept_total'] and df['pct_of_dept']
df['dept_total'] = df.groupby('dept')['salary'].transform('sum')
df['pct_of_dept'] = df['salary'] / df['dept_total'] * 100`,
    options: [
      '`.transform("sum")` broadcasts the department sum back to the original DataFrame index, matching row-for-row length',
      '`.agg("sum")` returns a Series matching the original DataFrame length',
      '`.apply("sum")` automatically aligns rows without index grouping',
      '`.sum()` must be called with `axis=1` across columns'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'transform() returns a like-indexed object with group aggregations broadcast across original rows',
    explanationTitle: 'Groupby transform vs agg Mechanics',
    explanationText:
      '`.agg()` aggregates each group into a single summary row (reducing $N$ rows to $G$ groups). In contrast, `.transform()` calculates the group aggregate but broadcasts the result back across every individual member of that group, preserving the original DataFrame length ($N$ rows). This allows direct column-to-column arithmetic without manual merging.',
    deepDive:
      '`.transform()` is highly optimized in C/Cython for standard string reducers like `"mean"`, `"sum"`, `"min"`, `"max"`, and `"std"`.',
    tags: ['groupby', 'transform', 'agg', 'Broadcasting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-025',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Pipeline Architecture',
    topic: 'Method Chaining with pandas pipe Method',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'What is the primary architectural benefit of using `df.pipe(func)` in a data preparation pipeline compared to deeply nested function calls `func_c(func_b(func_a(df)))`?',
    codeSnippet: `cleaned_df = (
    raw_df
    .pipe(drop_invalid_records)
    .pipe(standardize_dates, date_col='event_time')
    .pipe(calculate_kpis)
    .pipe(filter_active_customers)
)`,
    options: [
      'It enables clean top-to-bottom method chaining, improving code readability, modularity, unit testability, and debugging without intermediate variable clutter',
      'It executes all functions concurrently in parallel across all CPU cores',
      'It converts pandas DataFrames into Spark DataFrames automatically',
      'It prevents any exceptions from being raised inside pipeline functions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.pipe() enables linear top-down method chaining of custom functions',
    explanationTitle: 'Declarative Pipeline Composition with pipe()',
    explanationText:
      '`df.pipe(func, *args, **kwargs)` takes the DataFrame as its first argument and passes it to `func(df, *args, **kwargs)`. Instead of nested function pyramids `h(g(f(df)))` which read inside-out, `.pipe()` flows logically in the order of data execution.',
    deepDive:
      'If the custom function expects the DataFrame as a secondary parameter rather than the first, pass a tuple: `df.pipe((func, "arg_name"), extra_arg=val)`.',
    tags: ['pipe', 'Method Chaining', 'Pipeline Architecture', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-026',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Deduplication',
    topic: 'Deterministic Deduplication Strategies (first, last, False)',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'An e-commerce order table contains duplicate updates for the same `order_id` captured over time, sorted ascending by `update_timestamp`. How do you retain only the most up-to-date status for each order?',
    codeSnippet: `df_sorted = df.sort_values('update_timestamp')
latest_orders = df_sorted.drop_duplicates(subset=['order_id'], keep='last')`,
    options: [
      '`keep="last"` preserves the final occurrence (latest timestamp) and discards all preceding historical duplicates',
      '`keep="first"` automatically detects the highest timestamp',
      '`keep=False` keeps the last occurrence while converting earlier ones to NaN',
      'You must use `.groupby().first()` because `drop_duplicates` cannot accept a `subset` parameter'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'drop_duplicates(subset=["order_id"], keep="last") keeps the latest row when sorted ascending',
    explanationTitle: 'Deterministic Deduplication with drop_duplicates',
    explanationText:
      '`drop_duplicates(subset=..., keep=...)` offers three options for `keep`: `"first"` (retains first row, drops subsequent), `"last"` (retains last row, drops preceding), and `False` (drops ALL duplicate occurrences, keeping only rows that appeared exactly once).',
    deepDive:
      'Passing `keep=False` is useful in auditing to isolate all conflicting records: `conflicts = df[df.duplicated(subset=["order_id"], keep=False)]`.',
    tags: ['drop_duplicates', 'Deduplication', 'Data Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-027',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Aggregation Integrity',
    topic: 'Simpson’s Paradox in Aggregated Data Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'In an A/B test pipeline, Treatment B has a higher conversion rate than Treatment A in Group 1 (Desktop) AND in Group 2 (Mobile). However, when both groups are aggregated together into a single company-wide total, Treatment A appears to win. What analytical phenomenon is occurring?',
    codeSnippet: `# Desktop:
# A: 100/1000 = 10.0%  |  B: 24/200 = 12.0%  (B wins!)
# Mobile:
# A: 18/200 = 9.0%     |  B: 100/1000 = 10.0% (B wins!)
#
# Combined Total:
# A: 118 / 1200 = 9.83%
# B: 124 / 1200 = 10.33% -> But if sample allocations are skewed, aggregate reverses!`,
    options: [
      'Simpson’s Paradox: an apparent trend across multiple groups reverses or disappears when aggregated, caused by an unbalanced confounding lurking variable',
      'The Gambler’s Fallacy: previous conversions increase the odds of subsequent conversions',
      'Berkson’s Fallacy: selection bias caused by negative correlation in observational hospital data',
      'Hawthorne Effect: participants altering behavior solely because they are observed'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Simpson’s Paradox: sub-group trends reverse when pooled due to unequal subgroup distribution weights',
    explanationTitle: 'Simpson’s Paradox in Pipeline Aggregations',
    explanationText:
      'Simpson’s Paradox occurs when an unmeasured confounding variable (e.g. platform type, demographic slice, or time of day) is distributed unequally between test variants. Analysts must inspect stratified sub-group performance rather than relying blindly on high-level pooled averages.',
    deepDive:
      'To prevent Simpson’s Paradox in analytical experimentation, enforce balanced randomized assignment across all major covariates or employ stratified propensity score weighting.',
    tags: ['Simpson’s Paradox', 'Confounding', 'A/B Testing', 'Aggregation Integrity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-028',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Feature Engineering Pipeline',
    topic: 'Rolling Window Aggregations with Closed Intervals',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When engineering features for a stock prediction model, you calculate a 7-day rolling average of closing prices. Why must the rolling window calculation exclude the current day’s closing price if predicting today’s closing direction?',
    codeSnippet: `# Vulnerable to look-ahead bias:
# df['ma_7'] = df['close'].rolling(7).mean()

# Correctly lagged to prevent target leakage:
df['ma_7_lagged'] = df['close'].shift(1).rolling(7).mean()`,
    options: [
      'Including today’s closing price introduces look-ahead bias (data leakage), because the current day’s outcome would be used to predict itself at inference time',
      'Rolling averages require an odd number of window elements and cannot calculate 7 values',
      'Shift(1) is required by pandas because rolling() returns all NaNs otherwise',
      'Lagging data reduces the degree of freedom in the machine learning model to zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'shift(1) prevents look-ahead bias by ensuring rolling statistics only incorporate strictly historical data',
    explanationTitle: 'Look-Ahead Bias in Time-Series Feature Engineering',
    explanationText:
      'Look-ahead bias occurs when future information is inadvertently included in past training records. If predicting whether today’s market will close up or down, any feature computed using today’s closing price leaks the ground truth target into feature vectors, producing 99% training accuracy that fails completely in real-world deployment.',
    deepDive:
      'Alternatively, use `closed="left"` in date-offset rolling windows: `df.rolling("7D", closed="left").mean()` to exclude the current boundary point.',
    tags: ['Look-Ahead Bias', 'Rolling Window', 'shift', 'Time Series', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-029',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Missing Data Pipeline',
    topic: 'Imputation Strategies: Group-Specific Median Imputation',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'A real estate dataset contains missing `price` values. Rather than imputing with the global median across the entire nation, you want to impute each missing price using the median price of that specific property’s `neighborhood`. How is this implemented in pandas?',
    codeSnippet: `df['price_imputed'] = df.groupby('neighborhood')['price'].transform(
    lambda grp: grp.fillna(grp.median())
)`,
    options: [
      '`transform()` applies `fillna(grp.median())` per neighborhood and returns a series aligned with the original index',
      '`df["price"].fillna(df["neighborhood"].median())` accomplishes this directly',
      'Groupby cannot perform imputation; you must write a manual for-loop over unique neighborhoods',
      '`df.groupby("neighborhood")["price"].mean()` replaces nulls in place'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'groupby("neighborhood")["price"].transform(lambda g: g.fillna(g.median())) executes localized imputation',
    explanationTitle: 'Localized Conditional Group Imputation',
    explanationText:
      'Global imputation ignores localized variance (e.g. luxury vs suburban zip codes). Using `groupby().transform()` computes localized medians within each group and fills nulls while keeping the DataFrame shape unchanged.',
    deepDive:
      'If an entire neighborhood has 100% missing prices, the group median will be `NaN`. Always chain a fallback: `.fillna(df["price"].median())` to catch unhandled boundary groups.',
    tags: ['Imputation', 'groupby', 'transform', 'fillna', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-030',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Pipelines',
    topic: 'Idempotency in Data Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'In data engineering and automated analytical pipelines, what does it mean for a transformation script or SQL pipeline step to be "idempotent"?',
    codeSnippet: `# Non-idempotent:
# db.execute("INSERT INTO daily_summary SELECT ... FROM raw_events")

# Idempotent:
# db.execute("DELETE FROM daily_summary WHERE report_date = '2026-10-12'")
# db.execute("INSERT INTO daily_summary SELECT ... WHERE event_date = '2026-10-12'")`,
    options: [
      'Executing the pipeline multiple times with the same input data produces the exact same end state as executing it once, without creating duplicate rows or cumulative side effects',
      'The pipeline runs in less than 1 millisecond',
      'The pipeline converts all values into immutable tuples',
      'The pipeline can only be executed by an administrator account'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Idempotence: f(f(x)) = f(x); re-running a job produces identical results without duplicating data',
    explanationTitle: 'Pipeline Idempotency Principle',
    explanationText:
      'Pipelines frequently fail midway due to network glitches or server restarts. An idempotent pipeline can be safely re-run without manual cleanup. Non-idempotent scripts (e.g. blind `INSERT INTO`) append duplicate records every time the job restarts.',
    deepDive:
      'Common patterns for achieving idempotency: UPSERT (`INSERT ... ON CONFLICT DO UPDATE`), staging table swapping (`ALTER TABLE RENAME`), and partition overwriting.',
    tags: ['Idempotency', 'Data Engineering', 'Pipelines', 'Best Practices', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-031',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Quality',
    topic: 'Pandas nullable Data Types (Int64, boolean, string)',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Prior to pandas nullable data types, an integer column containing a single `NaN` was automatically cast to `float64` (e.g. customer ID `1001` became `1001.0`). How do modern pandas nullable types solve this issue?',
    codeSnippet: `import pandas as pd
import numpy as np

s_legacy = pd.Series([1, 2, np.nan], dtype='int64') # Casts to float64!
s_modern = pd.Series([1, 2, np.nan], dtype='Int64') # Capitalized 'Int64'`,
    options: [
      'Capitalized nullable types (e.g. `Int64`, `boolean`, `string`) use `pd.NA` to represent nulls while preserving native integer and boolean bitwise operations without loss of precision',
      'Modern types replace NaN with -1 automatically',
      'Legacy pandas raises a TypeError whenever NaN appears in an integer list',
      'Modern pandas converts all null integers into empty strings `""`'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'dtype="Int64" preserves integer representation with pd.NA without coercing to float64',
    explanationTitle: 'Pandas Nullable Types and pd.NA',
    explanationText:
      'Standard NumPy integer arrays do not support a missing value sentinel, forcing legacy pandas to coerce integer series to `float64`. The modern nullable types (`Int64`, `Float64`, `boolean`, `string`) use an internal bitmask array to track missingness via `pd.NA`, eliminating rounding errors on 64-bit integer IDs.',
    deepDive:
      'Remember: `pd.NA` follows three-valued logic (Kleene logic). For example, `pd.NA | True` evaluates to `True`, whereas `np.nan > 5` evaluates to `False`.',
    tags: ['Nullable Types', 'Int64', 'pd.NA', 'Type Coercion', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-032',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Pipeline Testing',
    topic: 'Unit Testing Data Transformations with pandas.testing',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How should a data analyst unit-test that a custom pipeline cleaning function produces the exact expected DataFrame in an automated CI/CD suite?',
    codeSnippet: `import pandas as pd
from pandas.testing import assert_frame_equal

def test_clean_pipeline():
    raw = pd.DataFrame({'val': [' 10 ', '20', None]})
    expected = pd.DataFrame({'val': [10.0, 20.0, np.nan]})
    
    result = clean_pipeline(raw)
    assert_frame_equal(result, expected, check_exact=False, rtol=1e-5)`,
    options: [
      'Use `pandas.testing.assert_frame_equal()` which validates shapes, column names, dtypes, values, and handles floating-point tolerances and NaN equality correctly',
      'Use the standard Python `assert result == expected` which evaluates to True',
      'Convert both DataFrames to strings and compare with `assert str(result) == str(expected)`',
      'Compare `result.values == expected.values` directly'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'assert_frame_equal validates shapes, dtypes, index, columns, and floating-point tolerance with proper NaN handling',
    explanationTitle: 'DataFrame Unit Testing with assert_frame_equal',
    explanationText:
      '`assert df1 == df2` fails with `ValueError: The truth value of a DataFrame is ambiguous`. `assert_frame_equal()` inspects DataFrame metadata, row order, column types, and uses relative tolerance (`rtol`) to prevent rounding errors between floating point computations. Furthermore, it treats `NaN == NaN` as matching.',
    deepDive:
      'Companion functions in `pandas.testing` include `assert_series_equal()` and `assert_index_equal()`.',
    tags: ['Unit Testing', 'assert_frame_equal', 'CI/CD', 'Quality Assurance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-033',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Aggregation Integrity',
    topic: 'Zero Division and Infinity Handling in KPI Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'When computing financial ratios (e.g. `revenue / cost`), if `cost` contains zero, what does pandas produce, and how should it be sanitized for downstream models?',
    codeSnippet: `import pandas as pd
import numpy as np

df = pd.DataFrame({'rev': [100, 200], 'cost': [50, 0]})
df['margin_ratio'] = df['rev'] / df['cost']
# Result: [2.0, inf]

# How to sanitize infinite values?
df['margin_ratio'] = df['margin_ratio'].replace([np.inf, -np.inf], np.nan)`,
    options: [
      'Division by zero yields `np.inf` (positive infinity); it should be sanitized using `.replace([np.inf, -np.inf], np.nan)` or `np.where()`',
      'pandas raises a `ZeroDivisionError` and crashes the script immediately',
      'Division by zero evaluates to 0.0 automatically in pandas',
      'pandas converts infinite values to negative integers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Floating division by zero yields inf in IEEE 754; replace([np.inf, -np.inf], np.nan) prevents model crash',
    explanationTitle: 'Handling IEEE 754 Infinities in Analytical Pipelines',
    explanationText:
      'Unlike pure Python which raises `ZeroDivisionError: division by zero`, NumPy and pandas follow IEEE 754 floating point arithmetic: `100.0 / 0.0 -> inf` and `0.0 / 0.0 -> NaN`. Machine learning algorithms (Scikit-Learn estimators) crash when passed `inf`, making `.replace([np.inf, -np.inf], np.nan)` an essential sanitation step.',
    deepDive:
      'To configure pandas to treat `inf` as missing across all methods globally: `pd.set_option("mode.use_inf_as_na", True)` (legacy) or use explicit replacement pipelines.',
    tags: ['ZeroDivisionError', 'inf', 'Data Cleaning', 'IEEE 754', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-034',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Pipelines',
    topic: 'Memory Profiling and Column Downcasting in Ingestion Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'An extracted dataset consumes 4 GB of memory because integer columns defaulted to `int64` and float columns to `float64`. How do you safely downcast numeric columns to their smallest representation in pandas?',
    codeSnippet: `for col in df.select_dtypes(include='integer').columns:
    df[col] = pd.to_numeric(df[col], downcast='integer')

for col in df.select_dtypes(include='floating').columns:
    df[col] = pd.to_numeric(df[col], downcast='float')`,
    options: [
      '`pd.to_numeric(..., downcast="integer")` automatically selects `int8`, `int16`, `int32`, or `int64` based on actual min/max values, significantly slashing RAM footprint',
      '`downcast="integer"` truncates all numbers to single-digit values',
      'Downcasting permanently damages data precision and should never be used in analytics',
      'pandas raises an error if an integer column is downcast while containing values over 100'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.to_numeric(col, downcast="integer") inspects min/max and selects the most compact subtype (e.g. int8)',
    explanationTitle: 'Automated Numeric Downcasting with pd.to_numeric',
    explanationText:
      'Default 64-bit types consume 8 bytes per cell. If a column contains status codes between 1 and 5, downcasting to `int8` (1 byte) saves 87.5% of memory for that column. `pd.to_numeric(..., downcast="integer")` automatically inspects the column range and selects the smallest safe integer width.',
    deepDive:
      'Pair this with converting low-cardinality string columns into `category` dtypes: `df[col] = df[col].astype("category")` to achieve reductions of 70-90% in total DataFrame RAM usage.',
    tags: ['Downcasting', 'Memory Optimization', 'to_numeric', 'int8', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-035',
    section: 'Section 4',
    chapter: '4.2',
    track: 'pcad',
    cardType: 'Data Pipeline Validation',
    topic: 'Validating Monotonicity in Time-Series Pipelines',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'Before applying time-series windowing functions or temporal merges, how do you verify that the DateTime index is strictly chronologically ordered and contains no backwards timestamps?',
    codeSnippet: `is_chronological = df.index.is_monotonic_increasing
if not is_chronological:
    df = df.sort_index()`,
    options: [
      '`df.index.is_monotonic_increasing` returns True if each timestamp is greater than or equal to the previous timestamp',
      '`df.index.is_chronological()` is the only valid method',
      'pandas requires a for-loop comparing `index[i] > index[i-1]`',
      'Time series indices are always sorted automatically upon creation'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.index.is_monotonic_increasing returns True if indices are sorted ascending',
    explanationTitle: 'Monotonicity Validation for Time-Series',
    explanationText:
      'Algorithms like `pd.merge_asof()` and `.rolling()` with time offsets require monotonically increasing indices. If out-of-order logs arrive from distributed servers, `is_monotonic_increasing` flags the disorder, allowing an explicit `.sort_index()` call before downstream modeling.',
    deepDive:
      'To check for strict increase with zero duplicate timestamps: `df.index.is_monotonic_increasing and df.index.is_unique`.',
    tags: ['is_monotonic_increasing', 'Time Series', 'Index Sorting', 'Validation', 'PCAD-31-02']
  }
];
