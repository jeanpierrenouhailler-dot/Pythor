import { Flashcard } from '../types';

export const pcadSection1CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.4 CONTINUED: DATA CLEANING & PRE-PROCESSING [Cards 71-80]
  // =========================================================================
  {
    id: 'pcad-sec1-071',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'String Manipulation',
    topic: 'Vectorized String Normalization with .str Accessor',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you strip leading/trailing whitespace and convert a string column to lowercase across an entire pandas Series?',
    codeSnippet: `import pandas as pd

# Normalize messy user-entered city names:
df['city'] = df['city'].str.strip().str.lower()`,
    options: [
      'Use the vectorized .str accessor: df["city"].str.strip().str.lower()',
      'Use a Python for loop: for row in df: row.strip().lower()',
      'Call df["city"].clean_strings()',
      'Apply python built-in string functions: str(df["city"]).lower()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use the vectorized .str accessor: df["city"].str.strip().str.lower()',
    explanationTitle: 'Vectorized String Operations via .str',
    explanationText:
      'The `.str` accessor provides vectorized string methods implemented in C. Chaining `.str.strip().str.lower()` cleans formatting discrepancies (e.g. `" New York "` and `"new york"` both become `"new york"`), enabling accurate group-by and merge operations.',
    deepDive:
      'Unlike a Python list comprehension, `.str` methods automatically preserve and propagate missing values (`NaN`) without raising `AttributeError: "float" object has no attribute "lower"`.',
    tags: ['pandas', 'str', 'Vectorization', 'Data Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-072',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'String Manipulation',
    topic: 'Regular Expression Extraction with .str.extract()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you extract the numerical price and currency symbol from strings like `"$19.99"` into separate DataFrame columns using regular expressions in pandas?',
    codeSnippet: `import pandas as pd

s = pd.Series(['$19.99', '€45.50', '£120.00'])
# Extract currency and float price using named capture groups:
extracted = s.str.extract(r'(?P<currency>[\$€£])(?P<price>[0-9]+\.[0-9]{2})')
print(extracted)`,
    options: [
      'Call s.str.extract(r"(?P<currency>[\\$€£])(?P<price>[0-9]+\\.[0-9]{2})"), where each capture group becomes a new column',
      'Call s.str.split(r"[0-9]")',
      'Call re.findall(s, pattern)',
      'Use s.str.partition("$")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Call s.str.extract(r"(?P<currency>[\\$€£])(?P<price>[0-9]+\\.[0-9]{2})"), where each capture group becomes a new column',
    explanationTitle: 'Regex Parsing with str.extract() and Capture Groups',
    explanationText:
      '`Series.str.extract()` applies a regular expression with capture groups `(...)`. Each group maps to a distinct column in the resulting DataFrame. Using named capture groups `(?P<col_name>...)` automatically names the columns.',
    deepDive:
      'If you want to extract all occurrences across strings containing multiple items, use `Series.str.extractall()`.',
    tags: ['pandas', 'str.extract', 'Regex', 'Capture Groups', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-073',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'String Manipulation',
    topic: 'Regex String Replacement with .str.replace()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you strip currency symbols, commas, and dollar signs from string values like `"$1,250,500.00"` before converting to float?',
    codeSnippet: `import pandas as pd

s = pd.Series(['$1,250.00', '$45,000.50'])
# Strip dollar signs and commas using regex:
clean_float = s.str.replace(r'[\$,]', '', regex=True).astype(float)
print(clean_float.tolist()) # [1250.0, 45000.5]`,
    options: [
      's.str.replace(r"[\\$,]", "", regex=True).astype(float)',
      's.str.remove(["$", ","])',
      'float(s.strip("$,"))',
      's.astype(float, ignore_symbols=True)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 's.str.replace(r"[\\$,]", "", regex=True).astype(float)',
    explanationTitle: 'Sanitizing Financial Strings via str.replace()',
    explanationText:
      'Currency formatting with commas and symbols prevents direct numeric casting. `s.str.replace(r"[\\$,]", "", regex=True)` removes all commas and dollar signs using character class regex matching, allowing immediate conversion via `.astype(float)`.',
    deepDive:
      'Always include `regex=True` explicitly in modern pandas, as the default `regex=False` literal replacement behavior will raise deprecation warnings.',
    tags: ['pandas', 'str.replace', 'Regex', 'Data Cleansing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-074',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'String Manipulation',
    topic: 'Splitting and Expanding with .str.split(expand=True)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Given a `full_name` column containing strings like `"John Doe"`, how do you split it into two distinct columns `first_name` and `last_name`?',
    codeSnippet: `import pandas as pd

# Split full names into two columns:
df[['first_name', 'last_name']] = df['full_name'].str.split(' ', n=1, expand=True)`,
    options: [
      'df["full_name"].str.split(" ", n=1, expand=True) expands split elements into separate DataFrame columns',
      'df["full_name"].split(" ")',
      'df.explode("full_name")',
      'pd.split_column(df["full_name"])'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df["full_name"].str.split(" ", n=1, expand=True) expands split elements into separate DataFrame columns',
    explanationTitle: 'Column Expansion with str.split(expand=True)',
    explanationText:
      'Without `expand=True`, `.str.split()` returns a Series of Python lists. With `expand=True`, it returns a 2D DataFrame where each token occupies its own column. Setting `n=1` limits splits to at most one cut.',
    deepDive:
      'If names contain middle initials (e.g. "John Fitzgerald Kennedy"), setting `n=1` places "John" in `first_name` and "Fitzgerald Kennedy" in `last_name`.',
    tags: ['pandas', 'str.split', 'expand=True', 'String Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-075',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Data Cleaning',
    topic: 'Purging Non-Breaking & Zero-Width Spaces',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Web-scraped tables often contain hidden non-breaking spaces (`\\xa0`) or zero-width spaces (`\\u200b`) that standard `.str.strip()` fails to clear. How do you remove them?',
    codeSnippet: `import pandas as pd

# Clean invisible Unicode whitespace:
df['text'] = df['text'].str.replace(r'[\xa0\u200b]', ' ', regex=True).str.strip()`,
    options: [
      'Replace Unicode non-breaking (\\xa0) and zero-width (\\u200b) characters with standard space or empty strings using regex before calling .str.strip()',
      'Re-install Python with standard ASCII encoding',
      'Convert the text column to float64',
      'Standard .str.strip() already catches all invisible Unicode characters automatically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Replace Unicode non-breaking (\\xa0) and zero-width (\\u200b) characters with standard space or empty strings using regex before calling .str.strip()',
    explanationTitle: 'Sanitizing Hidden Unicode Whitespace',
    explanationText:
      'HTML entities like `&nbsp;` parse into `\\xa0`. If uncleaned, equality comparisons like `"Total" == "Total\\xa0"` fail mysteriously. Explicit regex substitution sanitizes hidden characters into standard ASCII whitespace.',
    deepDive:
      'The Python standard library `unicodedata.normalize("NFKD", s)` also collapses non-breaking spaces and accented glyphs into standard equivalents.',
    tags: ['Unicode', 'Data Cleansing', 'Non-breaking Space', 'Web Scraping', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-076',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Categorical Data',
    topic: 'Memory and Speed Benefits of the category dtype',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why should a column containing repeated categorical strings (e.g. US States in a 10-million-row DataFrame) be converted to `category` dtype?',
    codeSnippet: `import pandas as pd

# Convert string object column to categorical:
df['state'] = df['state'].astype('category')`,
    options: [
      'It replaces repeated text strings with compact integer codes pointing to a unique string lookup table, drastically reducing memory usage and accelerating group-by operations',
      'It encrypts state names to comply with HIPAA',
      'It sorts the DataFrame alphabetically by state name',
      'It prevents users from adding new rows to the DataFrame'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It replaces repeated text strings with compact integer codes pointing to a unique string lookup table, drastically reducing memory usage and accelerating group-by operations',
    explanationTitle: 'Performance and Memory Optimization via category Dtype',
    explanationText:
      'Standard pandas `object` columns store full string pointers for every single row. The `category` dtype stores an integer array of codes (e.g. 1-byte `int8` for up to 255 unique categories) and an index of categories, often shrinking memory by 90% and speeding up joins and aggregations.',
    deepDive:
      'Inspect category codes and categories via `df["state"].cat.codes` and `df["state"].cat.categories`.',
    tags: ['category', 'dtypes', 'Memory Optimization', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-077',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Categorical Data',
    topic: 'Ordered Categoricals with pd.Categorical',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you define an ordered categorical column so that sorting or min/max operations reflect logical hierarchy rather than alphabetical order?',
    codeSnippet: `import pandas as pd

priority_levels = ['Low', 'Medium', 'High', 'Critical']
df['priority'] = pd.Categorical(
    df['priority'], categories=priority_levels, ordered=True
)

# Logical sorting:
df_sorted = df.sort_values('priority') # Low -> Medium -> High -> Critical`,
    options: [
      'Create an ordered categorical using pd.Categorical(df["priority"], categories=..., ordered=True)',
      'Prefix each string with numbers: "1_Low", "2_Medium"',
      'Call df["priority"].sort_categories()',
      'Convert the column to complex128 numbers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Create an ordered categorical using pd.Categorical(df["priority"], categories=..., ordered=True)',
    explanationTitle: 'Creating Ordered Categoricals in pandas',
    explanationText:
      'Alphabetical sorting sorts "Critical" before "High" before "Low", which is semantically backwards for priority. Specifying `ordered=True` with an ordered `categories` list enables proper comparison operators (`<`, `<=`, `>`, `>=`), logical sorting, and accurate min/max calculations.',
    deepDive:
      'Unordered categoricals raise a `TypeError` if you attempt inequality comparisons like `df["category"] > "Tech"`.',
    tags: ['Categorical', 'Ordered', 'sort_values', 'Data Structures', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-078',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Outlier Detection',
    topic: 'Tukey’s Interquartile Range (IQR) Outlier Fences',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'In Tukey’s boxplot method, how are the Lower and Upper outlier fences calculated from the 25th percentile (Q1) and 75th percentile (Q3)?',
    codeSnippet: `import pandas as pd

q1 = df['val'].quantile(0.25)
q3 = df['val'].quantile(0.75)
iqr = q3 - q1

lower_fence = q1 - 1.5 * iqr
upper_fence = q3 + 1.5 * iqr

outliers = df[(df['val'] < lower_fence) | (df['val'] > upper_fence)]`,
    options: [
      'Lower Fence = Q1 - 1.5 * IQR, Upper Fence = Q3 + 1.5 * IQR',
      'Lower Fence = Mean - 1.5 * Std, Upper Fence = Mean + 1.5 * Std',
      'Lower Fence = Min * 1.5, Upper Fence = Max * 1.5',
      'Lower Fence = Q1 / 1.5, Upper Fence = Q3 * 1.5'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Lower Fence = Q1 - 1.5 * IQR, Upper Fence = Q3 + 1.5 * IQR',
    explanationTitle: 'Tukey’s IQR Outlier Rule',
    explanationText:
      'Tukey’s fences define values beyond $1.5 \times IQR$ from the quartiles as mild outliers, and beyond $3.0 \times IQR$ as extreme outliers. Unlike standard deviation ($Z$-scores), IQR fences are non-parametric and resistant to outlier distortion.',
    deepDive:
      'Values flagged by IQR fences should not be deleted blindly; always investigate whether outliers are data errors or genuine high-value events (e.g. rare cyberattacks or high-value orders).',
    tags: ['IQR', 'Outliers', 'Tukey', 'Boxplot', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-079',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Outlier Treatment',
    topic: 'Winsorization and Capping with Series.clip()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you cap extreme outlier values at the 1st and 99th percentiles (Winsorization) without dropping the rows using pandas?',
    codeSnippet: `import pandas as pd

lower_limit = df['amount'].quantile(0.01)
upper_limit = df['amount'].quantile(0.99)

# Winsorize / cap values at percentiles:
df['amount_capped'] = df['amount'].clip(lower=lower_limit, upper=upper_limit)`,
    options: [
      'df["amount"].clip(lower=lower_limit, upper=upper_limit) sets values below lower_limit to lower_limit and values above upper_limit to upper_limit',
      'df["amount"].cap(0.01, 0.99)',
      'df["amount"].trim(lower=lower_limit, upper=upper_limit)',
      'df["amount"].winsorize(limits=[0.01, 0.01])'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df["amount"].clip(lower=lower_limit, upper=upper_limit) sets values below lower_limit to lower_limit and values above upper_limit to upper_limit',
    explanationTitle: 'Winsorization via Series.clip()',
    explanationText:
      'Deleting outlier rows reduces sample size and introduces selection bias. Winsorization (capping) preserves every observation while reigning in extreme values so they do not disproportionately dominate regression weights or variance metrics.',
    deepDive:
      '`Series.clip()` executes in vectorized C/Cython speed and accepts scalar values or matching Series bounds.',
    tags: ['clip', 'Winsorization', 'Outliers', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-080',
    section: 'Section 1',
    chapter: '1.4',
    track: 'pcad',
    cardType: 'Data Validation',
    topic: 'Range Filtering with Series.between()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you cleanly filter rows where customer age is between 18 and 65 (inclusive) using pandas?',
    codeSnippet: `import pandas as pd

# Inclusive range filter:
valid_working_age = df[df['age'].between(18, 65, inclusive='both')]`,
    options: [
      'df[df["age"].between(18, 65, inclusive="both")]',
      'df[df["age"].in_range(18, 65)]',
      'df[18 <= df["age"] <= 65]',
      'df.filter_range("age", 18, 65)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df[df["age"].between(18, 65, inclusive="both")]',
    explanationTitle: 'Range Validation via Series.between()',
    explanationText:
      '`Series.between(left, right)` is cleaner and more readable than `(df["age"] >= 18) & (df["age"] <= 65)`. The `inclusive` parameter controls boundary conditions (`"both"`, `"neither"`, `"left"`, or `"right"`).',
    deepDive:
      'Note: Python’s chained comparison `18 <= df["age"] <= 65` fails in pandas because boolean Series cannot be evaluated in a Python scalar truth-value context.',
    tags: ['between', 'Filtering', 'Validation', 'Boolean Mask', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 1.5: DATA INTEGRATION, MERGING & STANDARDIZATION [Cards 81-100]
  // =========================================================================
  {
    id: 'pcad-sec1-081',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Data Integration',
    topic: 'Vertical Stacking with pd.concat(axis=0)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you vertically stack monthly sales DataFrames (`jan_df`, `feb_df`, `mar_df`) into a unified Q1 DataFrame with contiguous row indices?',
    codeSnippet: `import pandas as pd

# Vertically concatenate monthly DataFrames:
q1_df = pd.concat([jan_df, feb_df, mar_df], axis=0, ignore_index=True)`,
    options: [
      'pd.concat([jan_df, feb_df, mar_df], axis=0, ignore_index=True)',
      'jan_df.append([feb_df, mar_df])',
      'pd.merge([jan_df, feb_df, mar_df], how="stack")',
      'pd.combine_rows(jan_df, feb_df, mar_df)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.concat([jan_df, feb_df, mar_df], axis=0, ignore_index=True)',
    explanationTitle: 'Row-wise Concatenation via pd.concat()',
    explanationText:
      '`pd.concat(..., axis=0)` stacks DataFrames vertically along rows, matching columns by name. Passing `ignore_index=True` discards original monthly index numbers and assigns a clean `0, 1, 2... N-1` index.',
    deepDive:
      'Note: `DataFrame.append()` was deprecated in pandas 1.4 and completely removed in pandas 2.0. Always use `pd.concat()`.',
    tags: ['concat', 'axis=0', 'ignore_index', 'Data Integration', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-082',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Data Integration',
    topic: 'Horizontal Concatenation & Index Alignment (axis=1)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When performing a horizontal concatenation `pd.concat([df1, df2], axis=1)`, how does pandas determine which rows to align side-by-side?',
    codeSnippet: `import pandas as pd

df1 = pd.DataFrame({'A': [1, 2]}, index=['x', 'y'])
df2 = pd.DataFrame({'B': [3, 4]}, index=['y', 'z'])

res = pd.concat([df1, df2], axis=1)
# What is the resulting index? ['x', 'y', 'z']`,
    options: [
      'Pandas aligns rows strictly by their index labels, performing an outer join on the index by default and inserting NaN for non-matching indices',
      'Pandas matches rows by their physical position (row 0 with row 0, row 1 with row 1) regardless of index labels',
      'It raises an error if index labels do not match exactly',
      'It concatenates column names as strings'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pandas aligns rows strictly by their index labels, performing an outer join on the index by default and inserting NaN for non-matching indices',
    explanationTitle: 'Index-Aware Alignment in Horizontal Concat',
    explanationText:
      'Unlike NumPy which stacks purely by coordinate position, pandas is strictly index-aligned. When `axis=1`, pandas matches index labels across both inputs. Pass `join="inner"` to retain only rows with index labels present in both DataFrames.',
    deepDive:
      'To concatenate purely by physical row order while ignoring index labels, reset both indices prior to concat: `df.reset_index(drop=True)`.',
    tags: ['concat', 'axis=1', 'Index Alignment', 'Data Integration', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-083',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Relational Merging',
    topic: 'Inner Joins with pd.merge()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the default join type performed by `pd.merge(df1, df2, on="customer_id")`, and what records appear in the result?',
    codeSnippet: `import pandas as pd

# Default merge behavior:
merged = pd.merge(customers, orders, on='customer_id') # how='inner'`,
    options: [
      'An Inner Join (how="inner"); it returns only rows where the customer_id key exists in both DataFrames',
      'A Left Join; it keeps all records from customers',
      'A Full Outer Join; it keeps all records from both DataFrames',
      'A Cross Join; it creates the Cartesian product'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'An Inner Join (how="inner"); it returns only rows where the customer_id key exists in both DataFrames',
    explanationTitle: 'Inner Join Semantics in pd.merge()',
    explanationText:
      '`pd.merge()` defaults to `how="inner"`. Records with keys that exist in only one DataFrame are omitted from the output. It behaves identically to standard ANSI SQL `INNER JOIN`.',
    deepDive:
      'If keys contain null values (`NaN`), pandas inner join does NOT match `NaN` with `NaN`, following SQL NULL semantics.',
    tags: ['merge', 'how=inner', 'Joins', 'SQL Equivalence', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-084',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Relational Merging',
    topic: 'Left Outer Joins with how="left"',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Why would an analyst use `pd.merge(customers, orders, on="customer_id", how="left")` instead of an inner join?',
    codeSnippet: `import pandas as pd

# Retain all registered customers, even those with 0 orders:
df_cust_orders = pd.merge(customers, orders, on='customer_id', how='left')`,
    options: [
      'To retain every customer record from the left DataFrame regardless of whether they have made a purchase, populating order columns with NaN for non-purchasing customers',
      'To drop all customers who have made more than one purchase',
      'To sort the merged DataFrame alphabetically by customer name',
      'Because left joins execute twice as fast as inner joins'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To retain every customer record from the left DataFrame regardless of whether they have made a purchase, populating order columns with NaN for non-purchasing customers',
    explanationTitle: 'Left Join Semantics and Preservation',
    explanationText:
      'A Left Join preserves 100% of the left table’s rows. If a customer has no matching record in the orders table, the order fields become `NaN`. This is essential for calculating conversion rates, customer acquisition cohorts, and dormant accounts.',
    deepDive:
      'To identify customers who have NEVER placed an order (anti-join), filter: `df_cust_orders[df_cust_orders["order_id"].isna()]`.',
    tags: ['merge', 'how=left', 'Left Join', 'Anti-Join', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-085',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Relational Merging',
    topic: 'Full Outer Joins with how="outer"',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is returned when performing a full outer join: `pd.merge(df1, df2, on="key", how="outer")`?',
    codeSnippet: `import pandas as pd

# Full outer join:
full = pd.merge(system_a, system_b, on='user_id', how='outer')`,
    options: [
      'The union of all keys from both DataFrames; rows that exist in only one DataFrame are included with NaN filling the missing opposite columns',
      'Only the intersection of matching keys',
      'The Cartesian product of every row with every other row',
      'All rows from system_a, completely ignoring system_b'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The union of all keys from both DataFrames; rows that exist in only one DataFrame are included with NaN filling the missing opposite columns',
    explanationTitle: 'Full Outer Join Union Semantics',
    explanationText:
      'Full outer join produces the set union of join keys. It ensures no record is discarded from either source, making it standard for cross-system data reconciliation (e.g. reconciling payment gateway charges against internal accounting ledgers).',
    deepDive:
      'Always inspect the output size: if keys are non-unique, an outer join can generate significant row duplication.',
    tags: ['merge', 'how=outer', 'Outer Join', 'Reconciliation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-086',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Merge Auditing',
    topic: 'Tracking Merge Provenance with indicator=True',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you audit which records matched in both tables versus those found in only one table during a merge in pandas?',
    codeSnippet: `import pandas as pd

# Add merge diagnosis indicator:
merged = pd.merge(df1, df2, on='id', how='outer', indicator=True)
print(merged['_merge'].value_counts())
# both          850
# left_only     120
# right_only     30`,
    options: [
      'Pass indicator=True to pd.merge(), which creates a categorical "_merge" column containing values "both", "left_only", or "right_only"',
      'Pass audit=True to generate a PDF report',
      'Check len(df1) == len(df2)',
      'Compare df1.dtypes with df2.dtypes'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass indicator=True to pd.merge(), which creates a categorical "_merge" column containing values "both", "left_only", or "right_only"',
    explanationTitle: 'Merge Auditing via indicator=True',
    explanationText:
      '`indicator=True` is one of pandas’ most powerful data reconciliation features. The resulting `_merge` column explicitly flags the origin of every row, enabling instant filtering of orphan keys (e.g. `merged[merged["_merge"] == "left_only"]`).',
    deepDive:
      'You can customize the indicator column name by passing a string instead of a boolean: `indicator="provenance"`.',
    tags: ['merge', 'indicator=True', '_merge', 'Auditing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-087',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Relational Merging',
    topic: 'Joining on Differing Column Names (left_on & right_on)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you join `orders_df` with `users_df` when the customer key is named `user_id` in orders but `id` in users?',
    codeSnippet: `import pandas as pd

# Merge on asymmetric key names:
merged = pd.merge(orders_df, users_df, left_on='user_id', right_on='id', how='inner')`,
    options: [
      'Specify left_on="user_id" and right_on="id" in pd.merge()',
      'Specify keys=["user_id", "id"]',
      'Call orders_df.rename() first, as pd.merge() requires identical column names',
      'Use on=("user_id", "id")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Specify left_on="user_id" and right_on="id" in pd.merge()',
    explanationTitle: 'Asymmetric Key Merging with left_on and right_on',
    explanationText:
      '`left_on` and `right_on` allow joining tables that use different naming conventions for the same conceptual key. Note that the output DataFrame will retain BOTH columns (`user_id` and `id`); it is best practice to drop the redundant key column immediately: `.drop(columns=["id"])`.',
    deepDive:
      'You can also pass lists of column names for multi-key composite joins: `left_on=["year", "store_id"], right_on=["fiscal_year", "branch_code"]`.',
    tags: ['merge', 'left_on', 'right_on', 'Joins', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-088',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Relational Merging',
    topic: 'Resolving Overlapping Column Collisions with suffixes',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Both `employees` and `departments` DataFrames contain a column named `created_at`. How do you prevent confusion and assign clear names during `pd.merge()`?',
    codeSnippet: `import pandas as pd

# Disambiguate overlapping column names:
merged = pd.merge(
    employees, departments,
    on='dept_id',
    suffixes=('_emp', '_dept')
)`,
    options: [
      'Pass suffixes=("_emp", "_dept") to pd.merge(), which appends the respective suffix to non-key overlapping column names',
      'Pandas automatically deletes the second created_at column',
      'Pandas raises a DuplicateColumnError',
      'Set rename_duplicates=True'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass suffixes=("_emp", "_dept") to pd.merge(), which appends the respective suffix to non-key overlapping column names',
    explanationTitle: 'Disambiguating Collisions via suffixes',
    explanationText:
      'By default, pandas appends `_x` and `_y` to overlapping columns. Providing explicit, descriptive suffixes like `suffixes=("_emp", "_dept")` yields self-documenting columns `created_at_emp` and `created_at_dept`.',
    deepDive:
      'Passing an empty string in a suffix (e.g. `suffixes=("", "_dept")`) keeps the left table’s original column name unchanged.',
    tags: ['merge', 'suffixes', 'Column Collisions', 'Joins', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-089',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Merge Integrity',
    topic: 'Join Cardinality Validation with validate Parameter',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How can an analyst programmatically assert that a merge is strictly a 1-to-many relationship and fail immediately if an accidental Cartesian explosion occurs?',
    codeSnippet: `import pandas as pd

# Assert customer dimension to orders fact relationship:
merged = pd.merge(
    customers, orders,
    on='customer_id',
    how='inner',
    validate='one_to_many'
)`,
    options: [
      'Use the validate="one_to_many" parameter in pd.merge(), which raises a MergeError if keys are not unique in the left DataFrame',
      'Wrap pd.merge in an if statement checking len(merged)',
      'Set assert_unique=True',
      'Call df.check_cardinality()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use the validate="one_to_many" parameter in pd.merge(), which raises a MergeError if keys are not unique in the left DataFrame',
    explanationTitle: 'Preventing Join Cartesian Explosions with validate',
    explanationText:
      'Accidental many-to-many joins duplicate rows exponentially, corrupting financial reports. The `validate` parameter enforces cardinality checks: `"one_to_one"`, `"one_to_many"`, `"many_to_one"`, or `"many_to_many"`. If the assertion is violated, pandas halts execution with `MergeError`.',
    deepDive:
      'Always use `validate="one_to_many"` or `validate="many_to_one"` when joining dimension tables to fact tables.',
    tags: ['merge', 'validate', 'Cardinality', 'Integrity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-090',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Relational Merging',
    topic: 'Index-Based Joining with DataFrame.join()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the key functional difference between `df1.join(df2)` and `pd.merge(df1, df2)`?',
    codeSnippet: `import pandas as pd

# df1 index: user_id
# df2 index: user_id
result = df1.join(df2, how='left')`,
    options: [
      'df1.join(df2) defaults to joining on DataFrame index labels and defaults to how="left", whereas pd.merge() defaults to joining on common columns and defaults to how="inner"',
      'df1.join() is only supported on Python 2.7',
      'pd.merge() only works on CSV files, whereas join() works on SQL databases',
      'join() converts all numbers to integers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df1.join(df2) defaults to joining on DataFrame index labels and defaults to how="left", whereas pd.merge() defaults to joining on common columns and defaults to how="inner"',
    explanationTitle: 'DataFrame.join() vs. pd.merge() Defaults',
    explanationText:
      '`join()` is a convenient index-centric wrapper around `merge()`. It aligns on indices by default and uses `how="left"`. `pd.merge()` is more general and flexible, joining on columns or indices with `how="inner"` by default.',
    deepDive:
      '`join()` also accepts a list of multiple DataFrames to join simultaneously if they all share identical indices: `df1.join([df2, df3])`.',
    tags: ['join', 'merge', 'Index Joining', 'Defaults', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-091',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Time Series Merging',
    topic: 'Fuzzy Timestamp Alignment with pd.merge_asof()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'In financial market analysis, how do you match each stock trade with the most recent quote published immediately prior to the trade execution timestamp?',
    codeSnippet: `import pandas as pd

# Match trade to closest preceding bid/ask quote:
# Both DataFrames must be sorted by the key!
trades = trades.sort_values('time')
quotes = quotes.sort_values('time')

matched = pd.merge_asof(
    trades, quotes,
    on='time',
    by='ticker',
    direction='backward' # Matches closest prior quote
)`,
    options: [
      'Use pd.merge_asof(trades, quotes, on="time", by="ticker", direction="backward") on sorted DataFrames to match on nearest preceding timestamps',
      'Use standard pd.merge(trades, quotes, on="time")',
      'Round all timestamps to the nearest minute using dt.round()',
      'Use a nested Python loop comparing timestamps'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use pd.merge_asof(trades, quotes, on="time", by="ticker", direction="backward") on sorted DataFrames to match on nearest preceding timestamps',
    explanationTitle: 'As-Of Fuzzy Joining with pd.merge_asof()',
    explanationText:
      'Exact timestamp joins fail in high-frequency data because quotes and trades occur at slightly different milliseconds. `pd.merge_asof()` performs an ordered merge on keys where exact equality is not required, finding the nearest prior (`direction="backward"`), nearest future (`"forward"`), or closest (`"nearest"`) match.',
    deepDive:
      'Crucial prerequisite: both DataFrames MUST be sorted by the key column (`on="time"`), or pandas will raise `ValueError`.',
    tags: ['merge_asof', 'Time Series', 'Financial Data', 'Fuzzy Join', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-092',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Data Integration',
    topic: 'Coalescing DataFrames with combine_first()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'You have a primary customer table with missing phone numbers and a secondary backup directory table. How does `df1.combine_first(df2)` coalesce them?',
    codeSnippet: `import pandas as pd
import numpy as np

df1 = pd.DataFrame({'phone': ['555-0100', np.nan, '555-0102']})
df2 = pd.DataFrame({'phone': ['555-9999', '555-0101', '555-9999']})

# Fill nulls in df1 with values from df2:
res = df1.combine_first(df2)
print(res['phone'].tolist())
# ['555-0100', '555-0101', '555-0102']`,
    options: [
      'It uses values from df1 first, and fills in null (NaN) values with matching row/column values from df2 (similar to SQL COALESCE)',
      'It concatenates the strings together with a plus sign',
      'It deletes rows that do not match across both tables',
      'It computes the average of the two phone numbers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It uses values from df1 first, and fills in null (NaN) values with matching row/column values from df2 (similar to SQL COALESCE)',
    explanationTitle: 'Coalescing Datasets with combine_first()',
    explanationText:
      '`combine_first()` combines two DataFrame objects where missing values in one are filled by values from the other, matching on index and columns. It acts as an index-aligned `COALESCE(df1, df2)`.',
    deepDive:
      'If `df2` contains rows or columns not present in `df1`, they are automatically added to the resulting DataFrame.',
    tags: ['combine_first', 'COALESCE', 'Data Integration', 'pandas', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-093',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Data Standardization',
    topic: 'Currency and Exchange Rate Normalization',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When integrating multi-national sales data containing revenues in USD, EUR, and GBP, why must transactions be converted using historical exchange rates matching each transaction’s exact date rather than a single static year-end rate?',
    codeSnippet: `# Multi-currency transaction log:
# 2026-03-15 | EUR 10,000 | FX Rate on March 15: 1 EUR = 1.08 USD -> $10,800
# 2026-09-20 | EUR 10,000 | FX Rate on Sept 20:  1 EUR = 1.14 USD -> $11,400
# Static conversion using 1.10 creates significant financial accounting distortion!`,
    options: [
      'Currency exchange rates fluctuate daily; applying a single static exchange rate creates severe distortion in financial aggregates and misrepresents margin performance over time',
      'Pandas crashes if numbers are multiplied by static floats',
      'Static rates violate the Central Limit Theorem',
      'Because ISO currency codes cannot be stored in CSV files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Currency exchange rates fluctuate daily; applying a single static exchange rate creates severe distortion in financial aggregates and misrepresents margin performance over time',
    explanationTitle: 'Dynamic Temporal Currency Normalization',
    explanationText:
      'Currency volatility directly impacts reporting accuracy. An enterprise pipeline merges transaction records with daily foreign exchange (FX) rates on `transaction_date` and `currency_code` before converting values into a standardized reporting base currency (e.g. USD).',
    deepDive:
      'Always document the standardized base currency code in the metadata schema to prevent analysts from summing un-normalized mixed currencies.',
    tags: ['Standardization', 'Currency', 'FX Rates', 'Accounting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-094',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Data Standardization',
    topic: 'Standardizing Units of Measurement (Metric vs. Imperial)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'When merging logistics shipping data from US facilities (weights in pounds, lbs) and European hubs (weights in kilograms, kg), what must the preprocessing pipeline execute?',
    codeSnippet: `# Unstandardized:
# US Hub: package_weight = 10.0 (lbs)
# EU Hub: package_weight = 10.0 (kg) -> Actually 2.2x heavier!

# Standardization function:
def standardize_to_kg(row):
    if row['unit'] == 'lbs':
        return row['weight'] * 0.45359237
    return row['weight']`,
    options: [
      'Convert all observations into a single standardized unit of measurement (e.g. kilograms) using exact conversion constants and store the standardized unit in the metadata',
      'Assume 1 lb is equal to 1 kg for simplicity',
      'Delete all European rows',
      'Normalize the numbers using min-max scaling between 0 and 1'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Convert all observations into a single standardized unit of measurement (e.g. kilograms) using exact conversion constants and store the standardized unit in the metadata',
    explanationTitle: 'Physical Unit Harmonization',
    explanationText:
      'Failure to harmonize measurement units causes catastrophic real-world failures (famous example: NASA’s $125M Mars Climate Orbiter crashed because one team calculated in Imperial pound-seconds while another used Metric Newton-seconds). Always harmonize to a unified unit before merging.',
    deepDive:
      'Vectorize unit conversion in pandas: `df.loc[df["unit"] == "lbs", "weight_kg"] = df["weight"] * 0.45359237`.',
    tags: ['Standardization', 'Units', 'Data Harmonization', 'Data Quality', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-095',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Categorical Mapping',
    topic: 'Standardizing Inconsistent Labels with Series.map()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you standardize inconsistent country abbreviations (`["USA", "U.S.", "United States", "US"]`) to a uniform ISO standard `"USA"` using a dictionary mapping in pandas?',
    codeSnippet: `import pandas as pd

country_map = {
    'USA': 'USA',
    'U.S.': 'USA',
    'United States': 'USA',
    'US': 'USA',
    'CAN': 'CAN',
    'Canada': 'CAN'
}

# Standardize via Series.replace() or Series.map():
df['country_clean'] = df['country'].replace(country_map)`,
    options: [
      'df["country"].replace(country_map) maps dictionary keys to clean standardized values while leaving unmapped values intact',
      'df["country"].translate(country_map)',
      'pd.unify_labels(df["country"])',
      'df["country"].astype(country_map)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df["country"].replace(country_map) maps dictionary keys to clean standardized values while leaving unmapped values intact',
    explanationTitle: 'Categorical Standardization via replace() vs. map()',
    explanationText:
      '`Series.replace(dict)` replaces matching keys with designated targets and leaves unmentioned values unchanged. In contrast, `Series.map(dict)` replaces all unmapped values with `NaN` (which is useful if you want to strictly whitelist allowed entries).',
    deepDive:
      'For enterprise master data management, maintaining a centralized JSON lookup taxonomy ensures identical category harmonization across all microservices.',
    tags: ['replace', 'map', 'Categorical Standardization', 'Cleaning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-096',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Fuzzy Matching',
    topic: 'Entity Resolution with Levenshtein Distance',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When merging customer records where company names contain typos (e.g., `"Microsoft Inc."` vs. `"Microsft Corp"`), which algorithmic metric measures the minimum number of character edits required to transform one string into another?',
    codeSnippet: `from difflib import get_close_matches

names = ['Microsoft Inc.', 'Apple Inc.', 'Google LLC']
query = 'Microsft Inc'

match = get_close_matches(query, names, n=1, cutoff=0.8)
print(match) # ['Microsoft Inc.']`,
    options: [
      'Levenshtein Distance (Edit Distance)',
      'Euclidean Distance',
      'Pearson Correlation Coefficient',
      'Manhattan Distance on floats'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Levenshtein Distance (Edit Distance)',
    explanationTitle: 'Fuzzy Entity Resolution via Levenshtein Distance',
    explanationText:
      'Levenshtein distance calculates the minimum number of single-character edits (insertions, deletions, substitutions) required to change one word into another. High-speed C libraries like `rapidfuzz` calculate fuzzy similarity ratios to automate messy entity linkage.',
    deepDive:
      'Token Sort Ratio (e.g. in `rapidfuzz.fuzz.token_sort_ratio`) tokenizes words, sorts them alphabetically, and joins them before comparing, correctly matching `"Inc. Microsoft"` with `"Microsoft Inc."`.',
    tags: ['Fuzzy Matching', 'Levenshtein', 'Entity Resolution', 'difflib', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-097',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Categorical Encoding',
    topic: 'One-Hot Encoding with pd.get_dummies(drop_first=True)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why is passing `drop_first=True` crucial when one-hot encoding categorical features with `pd.get_dummies()` for linear regression models?',
    codeSnippet: `import pandas as pd

# One-hot encode with dummy trap avoidance:
dummies = pd.get_dummies(df['payment_method'], drop_first=True, dtype=int)
# If payment_method has ['Cash', 'Credit', 'PayPal'],
# only ['Credit', 'PayPal'] columns are created!`,
    options: [
      'To prevent the "Dummy Variable Trap" (perfect multicollinearity), where one category is completely predictable from the sum of the other categories',
      'To reduce disk space by deleting 50% of the dataset',
      'Because linear regression cannot accept more than two columns',
      'It forces all categorical values to become negative numbers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To prevent the "Dummy Variable Trap" (perfect multicollinearity), where one category is completely predictable from the sum of the other categories',
    explanationTitle: 'The Dummy Variable Trap and drop_first=True',
    explanationText:
      'If a variable has $K$ categories and all $K$ dummy columns are included alongside an intercept term, the sum of the dummy columns equals 1, creating perfect multicollinearity ($X^T X$ is singular and non-invertible). Dropping the first baseline category ($K-1$ dummies) avoids this mathematical trap.',
    deepDive:
      'For tree-based algorithms (Random Forests, XGBoost), `drop_first=False` is acceptable because trees do not invert matrix equations.',
    tags: ['get_dummies', 'drop_first', 'One-Hot Encoding', 'Multicollinearity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-098',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Categorical Encoding',
    topic: 'Target Encoding vs. One-Hot Encoding for High Cardinality',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'Why is One-Hot Encoding impractical for high-cardinality features like `zip_code` (40,000 distinct values), and what alternative encoding is preferred?',
    codeSnippet: `# High Cardinality Challenge:
# One-hot encoding 40,000 ZIP codes adds 40,000 sparse columns -> memory explosion!
# Alternative: Target Encoding (Mean Response Encoding):
# Replace each ZIP code with the historical mean target value (e.g. mean house price in that ZIP).`,
    options: [
      'One-hot encoding creates an enormous, sparse matrix that causes memory exhaustion and the curse of dimensionality; Target Encoding (mean target value per category) encodes information in a single dense column',
      'One-hot encoding can only handle up to 10 rows',
      'ZIP codes cannot be read by pandas',
      'Target encoding converts all categorical strings into Roman numerals'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'One-hot encoding creates an enormous, sparse matrix that causes memory exhaustion and the curse of dimensionality; Target Encoding (mean target value per category) encodes information in a single dense column',
    explanationTitle: 'High-Cardinality and Target Encoding',
    explanationText:
      'Adding 40,000 dummy columns dramatically inflates model training time and memory footprint. Target Encoding replaces each category with the average target variable value for that group, retaining predictive signal in a single column.',
    deepDive:
      'Warning: Target encoding can cause severe target leakage and overfitting on small categories. Always use out-of-fold target encoding with smoothing (m-estimate).',
    tags: ['Target Encoding', 'High Cardinality', 'One-Hot Encoding', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-099',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Data Architecture',
    topic: 'Building an Analytical Master Table (One Big Table)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'In modern data warehousing and business intelligence, what is the goal of constructing a denormalized "Analytical Master Table" (One Big Table / OBT)?',
    codeSnippet: `# Analytical Master Table Pipeline:
# Joins Customers + Orders + Products + Shipping + Marketing Attribution
# Pre-computed into a wide, flat, denormalized table for BI query performance.`,
    options: [
      'To join and pre-aggregate disparate relational tables into a single wide table, eliminating computationally expensive multi-table joins during interactive BI dashboards and ML feature training',
      'To ensure all database fields are encrypted with RSA keys',
      'To eliminate the need for computer RAM',
      'To convert SQL databases into Microsoft Excel files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To join and pre-aggregate disparate relational tables into a single wide table, eliminating computationally expensive multi-table joins during interactive BI dashboards and ML feature training',
    explanationTitle: 'One Big Table (OBT) Architecture',
    explanationText:
      'While 3rd Normal Form (3NF) is ideal for transactional OLTP databases to prevent write anomalies, OLAP and BI tools suffer when executing 8-way joins repeatedly. OBT pre-computes these joins into a flattened columnar structure, providing sub-second dashboard query performance.',
    deepDive:
      'Modern columnar cloud warehouses (BigQuery, Snowflake, ClickHouse) compress repeating denormalized strings exceptionally well, making disk cost negligible.',
    tags: ['OBT', 'Data Warehousing', 'Denormalization', 'Analytics Architecture', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-100',
    section: 'Section 1',
    chapter: '1.5',
    track: 'pcad',
    cardType: 'Pipeline Architecture',
    topic: 'Method Chaining & Functional Transformation with .pipe()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How does `DataFrame.pipe()` improve readability and testability in multi-stage data preprocessing pipelines?',
    codeSnippet: `import pandas as pd

def clean_missing(df):
    return df.dropna(subset=['id'])

def normalize_names(df):
    df['name'] = df['name'].str.strip().str.title()
    return df

def calculate_kpis(df):
    df['revenue_per_user'] = df['revenue'] / df['active_users']
    return df

# Fluent pipeline chaining with pipe:
cleaned_df = (
    pd.read_csv('raw_feed.csv')
      .pipe(clean_missing)
      .pipe(normalize_names)
      .pipe(calculate_kpis)
)`,
    options: [
      'It enables fluent method chaining of custom modular functions, avoiding nested function calls f(g(h(df))) or temporary intermediate variable clutter',
      'It creates an operating system UNIX pipe that streams bytes to bash',
      'It compiles Python code into C++ machine binaries',
      'It restricts DataFrame operations to read-only mode'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It enables fluent method chaining of custom modular functions, avoiding nested function calls f(g(h(df))) or temporary intermediate variable clutter',
    explanationTitle: 'Fluent Pipelines via DataFrame.pipe()',
    explanationText:
      '`df.pipe(func)` applies a user-defined function that accepts a DataFrame and returns a DataFrame. Chaining `.pipe()` creates clean, self-documenting, and easily unit-tested pipelines where each stage is an isolated transformation step.',
    deepDive:
      'If your function takes extra keyword arguments, pass them directly into pipe: `df.pipe(filter_threshold, threshold=50)`.',
    tags: ['pipe', 'Method Chaining', 'Pipelines', 'Clean Code', 'PCAD-31-02']
  }
];
