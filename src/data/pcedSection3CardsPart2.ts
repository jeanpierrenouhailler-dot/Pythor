import { Flashcard } from '../types';

export const pcedSection3CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.2: DATA CLEANSING (CONTINUED) [Cards 36-40]
  // =========================================================================
  {
    id: 'pced-sec3-036',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you handle leading currency symbols (like "\$") or commas in raw text strings before converting them to floats?',
    codeSnippet: `raw_price = "\$1,249.99"
# Clean string before float()
clean_price = float(raw_price.replace("\$", "").replace(",", ""))
print(clean_price)  # 1249.99`,
    options: [
      "float(raw_price) automatically strips non-numeric symbols",
      "Chain .replace('\$', '').replace(',', '') before passing the string to float()",
      "Convert to integer first with int(raw_price)",
      "Set float.currency_mode = True"
    ],
    correctAnswer: 1,
    explanation:
      "Python's float() function expects digits, an optional decimal point, and an optional sign. Passing symbols like '\$' or commas causes ValueError: could not convert string to float. Chaining .replace() sanitizes the text.",
    deepDive:
      "In financial and sales datasets, numerical fields frequently arrive formatted with currency symbols, thousands separators (commas), and percentage signs ('%'). Sanitizing these with string methods or regex is a fundamental ETL step.",
    difficulty: 'beginner',
    tags: ['String Cleaning', 'replace()', 'Currency Parsing', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-037',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'What is the risk of dropping all rows with missing values (complete case analysis) when data is missing systematically rather than completely at random?',
    codeSnippet: `# 40% of low-income respondents omitted their salary in a survey
# Dropping rows with missing salary:
clean_sample = [r for r in survey if r["salary"] is not None]`,
    options: [
      "It speeds up computation by removing noise",
      "It introduces severe selection bias, skewing metrics like the average salary upward",
      "It causes Python to raise an OverflowError",
      "It turns quantitative variables into qualitative variables"
    ],
    correctAnswer: 1,
    explanation:
      "If values are Not Missing at Random (MNAR) — for instance, individuals with lower incomes refusing to report earnings — dropping rows biases the surviving sample and distorts all resulting conclusions.",
    deepDive:
      "Understanding missing data mechanisms (MCAR - Missing Completely at Random, MAR - Missing at Random, and MNAR - Missing Not at Random) dictates whether deletion is statistically safe or will produce invalid findings.",
    difficulty: 'intermediate',
    tags: ['Missing Data', 'Selection Bias', 'MNAR', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-038',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you check whether all values in a cleaned dataset column satisfy a required condition (e.g. all ages are positive)?',
    codeSnippet: `ages = [22, 35, 19, 42, 28]
all_positive = all(age > 0 for age in ages)
print(all_positive)  # True`,
    options: [
      "ages.check_all(lambda x: x > 0)",
      "Use the built-in all() function with a generator expression: all(age > 0 for age in ages)",
      "any(age > 0 for age in ages)",
      "ages.validate(min=1)"
    ],
    correctAnswer: 1,
    explanation:
      "all() returns True if every element of the iterable evaluates to True (or if the iterable is empty). It short-circuits to False on the very first non-matching element.",
    deepDive:
      "Conversely, any(condition) returns True if at least one element satisfies the condition. Using all() with generator expressions is an elegant, memory-efficient way to validate dataset invariants.",
    difficulty: 'intermediate',
    tags: ['all()', 'Validation', 'Short-Circuit', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-039',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'In a column storing dates as strings, what issue arises if different rows use conflicting formats (e.g. "2024-03-01" vs "03/01/2024" vs "01/03/2024")?',
    codeSnippet: `# Raw dates from multiple branch offices:
raw_dates = ["2024-03-01", "03/01/2024", "01/03/2024"]`,
    options: [
      "Python automatically detects the country of origin and converts them accurately",
      "Date parsing becomes ambiguous (e.g. March 1st vs January 3rd), causing silent data corruption during chronological sorting or grouping",
      "String sorting will still work perfectly regardless of date format",
      "The operating system automatically locks the file to prevent errors"
    ],
    correctAnswer: 1,
    explanation:
      "Conflicting date formats create ambiguity (US MM/DD/YYYY vs International DD/MM/YYYY). Standardizing dates to ISO 8601 (YYYY-MM-DD) ensures lexical sorting matches chronological sorting.",
    deepDive:
      "ISO 8601 ('YYYY-MM-DD') is the universal standard for date storage. When formatted as 'YYYY-MM-DD', standard alphabetical string comparisons ('2024-03-01' < '2024-03-02') correctly match chronological order.",
    difficulty: 'intermediate',
    tags: ['Date Formatting', 'ISO 8601', 'Data Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-040',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you replace multiple inconsistent category names (e.g. "USA", "U.S.A.", "United States") with a single standardized label?',
    codeSnippet: `country_map = {
    "USA": "United States",
    "U.S.A.": "United States",
    "US": "United States"
}
raw_country = "U.S.A."
clean_country = country_map.get(raw_country, raw_country)`,
    options: [
      "Use a mapping dictionary with .get(raw_value, default_value)",
      "country.auto_standardize()",
      "Use the os.path module",
      "Delete all entries that are not already 'United States'"
    ],
    correctAnswer: 0,
    explanation:
      "A mapping dictionary associating variants with canonical labels, accessed via dict.get(key, key), standardizes categories efficiently while keeping unmapped keys unchanged.",
    deepDive:
      "In tabular preprocessing, dictionary lookup is O(1). This pattern easily standardizes categorical variables, surveys, and country codes across large raw datasets.",
    difficulty: 'beginner',
    tags: ['Data Harmonization', 'dict.get()', 'Mapping', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 3.3: DATA TRANSFORMATION, NORMALIZATION & STRING OPS [Cards 41-60]
  // =========================================================================
  {
    id: 'pced-sec3-041',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'Why is case folding or converting strings to lowercase (.lower()) standard practice when aggregating text categories?',
    codeSnippet: `categories = ["Retail", "retail", "RETAIL"]
clean = [c.lower() for c in categories]
print(set(clean))  # {'retail'}`,
    options: [
      "Python strings can only be printed when in lowercase",
      "Case sensitivity in Python treats 'Retail' and 'retail' as distinct categories, artificially fragmenting frequency counts",
      "Lowercase strings consume half as many bytes of RAM",
      "Lowercase strings cannot contain null values"
    ],
    correctAnswer: 1,
    explanation:
      "In Python, 'Retail' == 'retail' evaluates to False because 'R' (ASCII 82) does not equal 'r' (ASCII 114). Converting with .lower() unifies identical categories.",
    deepDive:
      "Without case normalization, a frequency counter will report three separate counts for 'Retail', 'retail', and 'RETAIL', skewing market share and grouping calculations.",
    difficulty: 'beginner',
    tags: ['lower()', 'Case Normalization', 'Categorical Data', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-042',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What is "Min-Max Normalization" (Feature Scaling) and what range does it scale numeric data into?',
    codeSnippet: `# Min-Max formula: (x - min) / (max - min)
values = [10, 20, 30, 40, 50]
min_val, max_val = min(values), max(values)
scaled = [(x - min_val) / (max_val - min_val) for x in values]
# Output: [0.0, 0.25, 0.5, 0.75, 1.0]`,
    options: [
      "It scales values into the range [0.0, 1.0]",
      "It scales values to have a mean of 0 and standard deviation of 1",
      "It scales values into [-100, +100]",
      "It converts all numbers to integers"
    ],
    correctAnswer: 0,
    explanation:
      "Min-Max scaling linearly transforms values so that the minimum value maps to 0.0 and the maximum value maps to 1.0: (x - min) / (max - min).",
    deepDive:
      "Normalizing features prevents features with large absolute scales (e.g. annual salary in tens of thousands) from dominating features with small scales (e.g. years of experience from 1 to 20) in distance-based analytical models.",
    difficulty: 'intermediate',
    tags: ['Min-Max Scaling', 'Normalization', 'Feature Scaling', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-043',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What is "Z-score Standardization" and what are the resulting mean and standard deviation of a standardized dataset?',
    codeSnippet: `# Z-score formula: z = (x - mean) / std`,
    options: [
      "Mean = 1.0, Standard Deviation = 1.0",
      "Mean = 0.0, Standard Deviation = 1.0",
      "Mean = 100.0, Standard Deviation = 15.0",
      "Mean = 0.0, Standard Deviation = 0.0"
    ],
    correctAnswer: 1,
    explanation:
      "Z-score standardization subtracts the mean and divides by standard deviation, centering the distribution at mean = 0.0 with unit variance (std = 1.0).",
    deepDive:
      "A z-score of +2.5 indicates that an observation lies 2.5 standard deviations above the average. Unlike Min-Max scaling, Z-score standardization does not bind values to a fixed [0, 1] interval and handles outliers more effectively.",
    difficulty: 'intermediate',
    tags: ['Z-score', 'Standardization', 'Statistics', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-044',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you format a floating-point metric to display exactly 2 decimal places using Python f-strings?',
    codeSnippet: `growth_rate = 14.85672
formatted = f"{growth_rate:.2f}%"
print(formatted)  # '14.86%'`,
    options: [
      'formatted = f"{growth_rate:2d}%"',
      'formatted = f"{growth_rate:.2f}%"',
      'formatted = f"{growth_rate.round(2)}%"',
      'formatted = f"{growth_rate:decimals=2}%"'
    ],
    correctAnswer: 1,
    explanation:
      "In format specifiers, :.2f indicates floating-point representation rounded to 2 decimal places.",
    deepDive:
      "The format specification mini-language is extremely versatile: :.2f gives 2 decimal places, :, adds comma thousands separators (e.g. f'{1000000:,}' -> '1,000,000'), and :.1% formats decimals as percentages (e.g. f'{0.256:.1%}' -> '25.6%').",
    difficulty: 'beginner',
    tags: ['f-strings', 'Number Formatting', 'Reporting', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-045',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What string method splits a delimited line into individual tokens based on a specific character?',
    codeSnippet: `line = "2024-05-15,Electronics,499.99,Shipped"
tokens = line.split(",")
print(tokens[1])  # 'Electronics'`,
    options: [
      "line.partition_all(',')",
      "line.split(',')",
      "line.tokenize(',')",
      "line.explode(',')"
    ],
    correctAnswer: 1,
    explanation:
      "str.split(sep) returns a list of the words in the string, using sep as the delimiter string.",
    deepDive:
      "Calling .split() without arguments splits by any consecutive whitespace characters and automatically strips leading/trailing whitespace. When sep is specified (e.g. .split(',')), empty fields between consecutive delimiters are preserved as empty strings ('').",
    difficulty: 'beginner',
    tags: ['split()', 'String Parsing', 'Delimiters', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-046',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you combine a list of cleaned string values into a single comma-separated text row?',
    codeSnippet: `fields = ["ID_101", "Widget", "19.99", "In_Stock"]
row_str = ",".join(fields)
print(row_str)  # 'ID_101,Widget,19.99,In_Stock'`,
    options: [
      "row_str = fields.to_csv()",
      "row_str = ','.join(fields)",
      "row_str = fields.join(',')",
      "row_str = concat(',', fields)"
    ],
    correctAnswer: 1,
    explanation:
      "In Python, join is a method of the separator string: separator.join(iterable). All elements in the iterable must be strings.",
    deepDive:
      "A common beginner error is trying fields.join(',') or passing non-string items (like integers or floats) to .join(), which raises TypeError: sequence item 0: expected str instance, int found. Elements must be converted to strings first: ','.join(map(str, fields)).",
    difficulty: 'beginner',
    tags: ['join()', 'CSV Formatting', 'String Concatenation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-047',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What is "One-Hot Encoding" (or creating dummy variables) in data preprocessing?',
    codeSnippet: `# Original column: City -> ["Paris", "Tokyo", "London"]
# Transformed into binary columns:
# City_Paris, City_Tokyo, City_London (values: 0 or 1)`,
    options: [
      "Converting temperatures from Celsius to Fahrenheit",
      "Transforming categorical variables into multiple binary indicator columns (0 or 1)",
      "Encrypting text data with a secret key",
      "Sorting categorical values in alphabetical order"
    ],
    correctAnswer: 1,
    explanation:
      "One-hot encoding converts categorical variables into binary flags (0 or 1) representing category presence, allowing algorithms to process non-numeric data without implying an artificial mathematical order.",
    deepDive:
      "If you simply assign arbitrary integers to nominal categories (e.g. Paris=1, Tokyo=2, London=3), analytical models may incorrectly interpret Tokyo as being 'twice' Paris. One-hot encoding eliminates this false ordinal assumption.",
    difficulty: 'intermediate',
    tags: ['One-Hot Encoding', 'Categorical Transformation', 'Dummies', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-048',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What string method capitalizes the first character of each word while converting all other characters to lowercase, ideal for person or company names?',
    codeSnippet: `raw_name = "john dOE jR."
clean_name = raw_name.title()
print(clean_name)  # 'John Doe Jr.'`,
    options: [
      "raw_name.capitalize()",
      "raw_name.title()",
      "raw_name.to_upper_words()",
      "raw_name.proper()"
    ],
    correctAnswer: 1,
    explanation:
      "str.title() returns a titlecased version of the string where words start with an uppercase character and all remaining characters are lowercase.",
    deepDive:
      "str.capitalize() only capitalizes the very first character of the entire string (leaving subsequent words lowercase). str.title() capitalizes the beginning of every individual word.",
    difficulty: 'beginner',
    tags: ['title()', 'String Normalization', 'Formatting', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-049',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How does the replace() string method behave when replacing substring patterns in a dataset column?',
    codeSnippet: `text = "Region-North, Region-South"
result = text.replace("Region-", "Zone-")
print(result)  # 'Zone-North, Zone-South'`,
    options: [
      "It only replaces the first occurrence",
      "It replaces all occurrences of the target substring by default, returning a new string",
      "It modifies the string in place without returning anything",
      "It deletes the entire string if the pattern is found"
    ],
    correctAnswer: 1,
    explanation:
      "str.replace(old, new, count=-1) replaces all occurrences of 'old' with 'new' across the entire string unless the optional 'count' argument limits the number of replacements.",
    deepDive:
      "Because strings in Python are immutable, text.replace() never modifies the original string in place. You must reassign the result to a variable: text = text.replace('old', 'new').",
    difficulty: 'beginner',
    tags: ['replace()', 'String Immutability', 'Transformation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-050',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What is the primary purpose of binning (or discretization) in data preprocessing?',
    codeSnippet: `def categorize_age(age):
    if age < 18:
        return "Minor"
    elif age < 65:
        return "Working Adult"
    else:
        return "Senior"`,
    options: [
      "Compressing files into .zip archives",
      "Converting continuous numeric variables into discrete categorical intervals or buckets",
      "Deleting invalid or corrupt data points",
      "Calculating logarithmic transforms of coordinates"
    ],
    correctAnswer: 1,
    explanation:
      "Binning groups continuous numeric values into a smaller number of discrete bins or categories (e.g. converting continuous ages into demographic cohorts).",
    deepDive:
      "Binning simplifies complex continuous distributions, makes trends easier to visualize for business stakeholders, and handles non-linear relationships in data.",
    difficulty: 'beginner',
    tags: ['Binning', 'Discretization', 'Feature Engineering', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-051',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What module in the Python standard library provides regular expression support for advanced pattern extraction and text cleaning?',
    codeSnippet: `import re

text = "Invoice #INV-2024-8891 received on 2024-04-12"
match = re.search(r"INV-\\d{4}-\\d{4}", text)
if match:
    print(match.group())  # 'INV-2024-8891'`,
    options: [
      "regex_lib",
      "re",
      "string_pattern",
      "textclean"
    ],
    correctAnswer: 1,
    explanation:
      "The built-in 're' module provides regular expression matching operations, pattern searches, substitutions (re.sub), and splitting (re.split).",
    deepDive:
      "In data extraction, re.sub(r'[^0-9.]', '', dirty_price) easily strips all non-numeric characters except decimals in a single robust operation.",
    difficulty: 'beginner',
    tags: ['re module', 'Regex', 'Pattern Matching', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-052',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you extract domain names from email addresses in a customer list using Python string methods?',
    codeSnippet: `emails = ["alice@company.com", "bob@startup.io"]
domains = [email.split("@")[1] for email in emails]
print(domains)  # ['company.com', 'startup.io']`,
    options: [
      "domains = [email.domain for email in emails]",
      "domains = [email.split('@')[1] for email in emails]",
      "domains = [email.split('@')[0] for email in emails]",
      "domains = [email.extract('domain') for email in emails]"
    ],
    correctAnswer: 1,
    explanation:
      "Splitting an email string by '@' produces a 2-element list [username, domain]. Accessing index [1] retrieves the domain name.",
    deepDive:
      "Index [0] corresponds to the local mailbox part (e.g. 'alice'). This simple transformation allows analysts to aggregate users by enterprise or domain provider.",
    difficulty: 'beginner',
    tags: ['split()', 'Feature Extraction', 'String Methods', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-053',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What is a logarithmic transformation (math.log) primarily used for during numeric data preparation?',
    codeSnippet: `import math

# Highly skewed income distribution
incomes = [15000, 22000, 35000, 5000000]
log_incomes = [math.log(x) for x in incomes]`,
    options: [
      "Converting negative numbers into positive numbers",
      "Compressing the scale of right-skewed data with extreme values, stabilizing variance and making distributions more symmetric",
      "Encrypting numeric values for database storage",
      "Removing duplicate observations from a series"
    ],
    correctAnswer: 1,
    explanation:
      "Logarithmic transformation compresses wide, right-skewed ranges (e.g. wealth, website visits) into more normal, bell-shaped distributions.",
    deepDive:
      "Log transformation can only be applied to strictly positive numbers (x > 0). If data contains zeros, analysts frequently use log1p: math.log1p(x) = ln(1 + x) to avoid math.log(0) MathDomainError.",
    difficulty: 'intermediate',
    tags: ['Log Transform', 'Skewness', 'Data Transformation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-054',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you convert Boolean values (True, False) into integer flags (1, 0) for numerical processing in Python?',
    codeSnippet: `flags = [True, False, True, True]
numeric_flags = [int(b) for b in flags]
print(numeric_flags)  # [1, 0, 1, 1]`,
    options: [
      "int(b) directly casts True to 1 and False to 0",
      "flags.to_numeric()",
      "Boolean values cannot be converted to integers in Python",
      "Convert to string first, then integer"
    ],
    correctAnswer: 0,
    explanation:
      "In Python, bool is a direct subclass of int, so int(True) evaluates to 1 and int(False) evaluates to 0.",
    deepDive:
      "Because booleans are already integers internally, operations like sum([True, False, True]) return 2 directly without explicit casting. This is widely used for counting matches: sum(x > 50 for x in scores).",
    difficulty: 'beginner',
    tags: ['bool casting', 'Binary Flags', 'Type Hierarchy', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-055',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What method checks if a string starts with a specific prefix, such as identifying international phone numbers or ID codes?',
    codeSnippet: `phone = "+1-555-0199"
if phone.startswith("+1"):
    print("North American number")`,
    options: [
      "phone.begins('+1')",
      "phone.startswith('+1')",
      "phone.has_prefix('+1')",
      "phone.first('+1')"
    ],
    correctAnswer: 1,
    explanation:
      "str.startswith(prefix) returns True if the string starts with the specified prefix, otherwise False.",
    deepDive:
      "startswith() also accepts a tuple of prefixes to check multiple conditions simultaneously: phone.startswith(('+1', '+44', '+33')). Similarly, endswith() checks string suffixes (e.g. filename.endswith('.csv')).",
    difficulty: 'beginner',
    tags: ['startswith()', 'String Validation', 'Filtering', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-056',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you pad a sequence of numeric invoice IDs with leading zeros so that all IDs have a uniform length (e.g., "00042")?',
    codeSnippet: `invoice_id = 42
padded_id = str(invoice_id).zfill(5)
print(padded_id)  # '00042'`,
    options: [
      "str(invoice_id).pad_zeros(5)",
      "str(invoice_id).zfill(5)",
      "invoice_id.add_zeros(5)",
      "format(invoice_id, 'zeros=5')"
    ],
    correctAnswer: 1,
    explanation:
      "str.zfill(width) returns a copy of the string left filled with ASCII '0' digits to make a string of length width.",
    deepDive:
      "Uniform identifier widths prevent sorting bugs in file systems and text databases. Alternatively, f-string formatting achieves the same result: f'{invoice_id:05d}'.",
    difficulty: 'intermediate',
    tags: ['zfill()', 'Zero-Padding', 'ID Formatting', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-057',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'When parsing multi-byte text files (like Japanese or Chinese datasets), what error occurs if the file is opened with the default ASCII encoding?',
    codeSnippet: `with open("tokyo_weather.csv", "r", encoding="ascii") as f:
    data = f.read()  # Crash!`,
    options: [
      "SyntaxError",
      "UnicodeDecodeError",
      "ValueError",
      "ZeroDivisionError"
    ],
    correctAnswer: 1,
    explanation:
      "ASCII only supports character codes from 0 to 127. Reading non-ASCII byte sequences under ASCII encoding raises UnicodeDecodeError.",
    deepDive:
      "To prevent UnicodeDecodeError, always specify the correct encoding (almost always encoding='utf-8', or occasionally 'shift_jis' for legacy Japanese data or 'cp1252' for legacy Windows).",
    difficulty: 'intermediate',
    tags: ['UnicodeDecodeError', 'Encodings', 'Data Ingestion', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-058',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you map categorical feedback ratings ("Poor", "Average", "Good", "Excellent") to ordinal integers (1, 2, 3, 4)?',
    codeSnippet: `scale = {"Poor": 1, "Average": 2, "Good": 3, "Excellent": 4}
ratings = ["Good", "Poor", "Excellent", "Average"]
numeric_ratings = [scale[r] for r in ratings]
print(numeric_ratings)  # [3, 1, 4, 2]`,
    options: [
      "ratings.to_numeric()",
      "Use a dictionary mapping each ordinal label to its corresponding integer rank",
      "Convert to set then list",
      "ratings.sort()"
    ],
    correctAnswer: 1,
    explanation:
      "Ordinal encoding maps ordered categories to rank numbers using a lookup dictionary, preserving the intrinsic natural hierarchy.",
    deepDive:
      "Unlike nominal categories (colors, cities) which lack order, ordinal categories (ratings, education levels) possess an explicit ranking where 4 > 3 > 2 > 1 represents greater satisfaction.",
    difficulty: 'beginner',
    tags: ['Ordinal Encoding', 'Categorical Mapping', 'ETL', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-059',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'What string method checks whether all characters in a string are digits, useful for validating zip codes and phone numbers?',
    codeSnippet: `postal_code = "90210"
print(postal_code.isdigit())  # True

dirty_code = "9021A"
print(dirty_code.isdigit())   # False`,
    options: [
      "postal_code.isnumber()",
      "postal_code.isdigit()",
      "postal_code.is_int()",
      "postal_code.check_digits()"
    ],
    correctAnswer: 1,
    explanation:
      "str.isdigit() returns True if all characters in the string are digits and there is at least one character, False otherwise.",
    deepDive:
      "Note that str.isdigit() returns False for negative signs ('-5') and decimal points ('3.14'). It only returns True for pure non-negative integer digit sequences.",
    difficulty: 'beginner',
    tags: ['isdigit()', 'String Validation', 'Data Verification', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-060',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pced',
    question: 'How do you strip specific trailing characters (e.g. newline and carriage return) from a raw file line without removing leading whitespace indentation?',
    codeSnippet: `raw_line = "    def calculate():\\r\\n"
clean_line = raw_line.rstrip("\\r\\n")
print(repr(clean_line))  # '    def calculate():'`,
    options: [
      "clean_line = raw_line.strip()",
      "clean_line = raw_line.rstrip('\\r\\n')",
      "clean_line = raw_line.lstrip()",
      "clean_line = raw_line.remove_end()"
    ],
    correctAnswer: 1,
    explanation:
      "rstrip() strips characters exclusively from the right end of the string, preserving indentation whitespace on the left.",
    deepDive:
      "Using .strip() removes whitespace from both left and right ends. In code or indented data parsing, lstrip() removes leading characters, and rstrip() removes trailing characters.",
    difficulty: 'intermediate',
    tags: ['rstrip()', 'Line Endings', 'Whitespace', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 3.4: NUMPY FUNDAMENTALS & VECTORIZED CALCULATIONS [Cards 61-70]
  // =========================================================================
  {
    id: 'pced-sec3-061',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What is the core data structure provided by the NumPy library for high-performance numerical computing?',
    codeSnippet: `import numpy as np

arr = np.array([10, 20, 30, 40])
print(type(arr))  # <class 'numpy.ndarray'>`,
    options: [
      "numpy.Series",
      "numpy.ndarray (N-dimensional array)",
      "numpy.DataFrame",
      "numpy.MatrixList"
    ],
    correctAnswer: 1,
    explanation:
      "The core data structure in NumPy is the ndarray (N-dimensional array), a fast, memory-efficient container for homogeneous multidimensional data.",
    deepDive:
      "Unlike Python lists which store pointers to arbitrary scattered objects in heap memory, a NumPy ndarray stores elements in contiguous memory blocks, enabling SIMD vectorization and cache locality.",
    difficulty: 'beginner',
    tags: ['NumPy', 'ndarray', 'Data Structures', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-062',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What is the requirement regarding data types for elements inside a NumPy ndarray?',
    codeSnippet: `import numpy as np

arr = np.array([1, 2, "three", 4.0])
print(arr.dtype)  # <U32 (all elements coerced to string!)`,
    options: [
      "Elements can be of any mixed Python types without modification",
      "All elements in a NumPy array must be of the same homogeneous data type",
      "NumPy arrays can only contain integers",
      "NumPy arrays automatically convert strings to numbers"
    ],
    correctAnswer: 1,
    explanation:
      "NumPy arrays are homogeneous: every element in the array must share the exact same data type (dtype). If mixed types are passed, NumPy upcasts all elements to a common type (e.g. string).",
    deepDive:
      "Homogeneity allows NumPy to allocate fixed-size byte slots for each element, drastically speeding up indexing and arithmetic operations because the offset of any element (i, j) can be calculated instantly via stride arithmetic.",
    difficulty: 'intermediate',
    tags: ['Homogeneity', 'dtype', 'NumPy Architecture', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-063',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What ndarray attribute returns a tuple representing the dimensions (rows, columns) of the array?',
    codeSnippet: `import numpy as np

matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)  # (2, 3)`,
    options: [
      "matrix.size",
      "matrix.shape",
      "matrix.ndim",
      "matrix.length"
    ],
    correctAnswer: 1,
    explanation:
      "arr.shape returns a tuple of integers indicating the size of the array along each dimension (e.g., (2, 3) for 2 rows and 3 columns).",
    deepDive:
      "arr.ndim returns the number of axes (dimensions, e.g. 2), arr.size returns the total count of elements (e.g. 6), and arr.itemsize returns the byte size of each element.",
    difficulty: 'beginner',
    tags: ['shape', 'Dimensions', 'NumPy Attributes', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-064',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What is the output of multiplying a standard Python list by 2 versus multiplying a NumPy array by 2?',
    codeSnippet: `import numpy as np

py_list = [1, 2, 3]
np_arr = np.array([1, 2, 3])

print(py_list * 2)
print(np_arr * 2)`,
    options: [
      "[2, 4, 6] and [2, 4, 6]",
      "[1, 2, 3, 1, 2, 3] and [2, 4, 6]",
      "[1, 2, 3, 1, 2, 3] and [1, 2, 3, 1, 2, 3]",
      "TypeError for both"
    ],
    correctAnswer: 1,
    explanation:
      "Multiplying a Python list duplicates the sequence: [1, 2, 3, 1, 2, 3]. Multiplying a NumPy array performs vectorized element-wise multiplication: [2, 4, 6].",
    deepDive:
      "This fundamental difference illustrates vectorization in NumPy. In NumPy, arithmetic operators (+, -, *, /, **) operate element-wise without requiring explicit loops.",
    difficulty: 'beginner',
    tags: ['Vectorization', 'List vs Array', 'Arithmetic', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-065',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'Which NumPy function creates an array of evenly spaced values within a given interval, similar to Python\'s range() but returning an ndarray?',
    codeSnippet: `import numpy as np

arr = np.arange(0, 10, 2)
print(arr)  # [0, 2, 4, 6, 8]`,
    options: [
      "np.range(0, 10, 2)",
      "np.arange(0, 10, 2)",
      "np.interval(0, 10, 2)",
      "np.series(0, 10, 2)"
    ],
    correctAnswer: 1,
    explanation:
      "np.arange([start,] stop[, step,]) returns evenly spaced values within a given interval [start, stop) as a NumPy array.",
    deepDive:
      "Unlike Python's built-in range() which only supports integers, np.arange() supports floating-point steps (e.g. np.arange(0.0, 1.0, 0.1)), though np.linspace() is often preferred for floats due to precision limits.",
    difficulty: 'beginner',
    tags: ['np.arange', 'Array Generation', 'Intervals', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-066',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How does np.linspace(0, 1, 5) differ from np.arange()?',
    codeSnippet: `import numpy as np

arr = np.linspace(0, 1, 5)
print(arr)  # [0.   0.25 0.5  0.75 1.  ]`,
    options: [
      "np.linspace specifies the step size, while np.arange specifies the number of points",
      "np.linspace specifies the total number of evenly spaced points (num=5) and includes the endpoint by default",
      "np.linspace only generates integer values",
      "np.linspace creates a multi-dimensional matrix"
    ],
    correctAnswer: 1,
    explanation:
      "np.linspace(start, stop, num) generates 'num' evenly spaced samples over the specified interval [start, stop], with endpoint=True by default.",
    deepDive:
      "In data science and visualization, linspace is used when you need a specific number of points (e.g. 100 points between -5 and 5 to plot a smooth curve) without manually calculating the step size.",
    difficulty: 'intermediate',
    tags: ['np.linspace', 'Sampling', 'Array Generation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-067',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'Which functions initialize NumPy arrays filled with zeros or ones of a specified shape?',
    codeSnippet: `import numpy as np

zeros_mat = np.zeros((2, 3))
ones_vec = np.ones(4)`,
    options: [
      "np.empty_zero() and np.empty_one()",
      "np.zeros() and np.ones()",
      "np.init(0) and np.init(1)",
      "np.fill(0) and np.fill(1)"
    ],
    correctAnswer: 1,
    explanation:
      "np.zeros(shape) returns a new array of given shape and type filled with zeros. np.ones(shape) returns a new array filled with ones.",
    deepDive:
      "By default, np.zeros() and np.ones() allocate arrays with dtype=float64. You can pass dtype=int to create integer arrays: np.zeros((3, 3), dtype=int).",
    difficulty: 'beginner',
    tags: ['np.zeros', 'np.ones', 'Initialization', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-068',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How do you access the element in row 1, column 2 of a 2D NumPy array?',
    codeSnippet: `import numpy as np

matrix = np.array([
    [10, 20, 30],
    [40, 50, 60]
])
val = matrix[1, 2]
print(val)  # 60`,
    options: [
      "matrix[1][2] only (matrix[1, 2] is a syntax error in Python)",
      "matrix[1, 2] (or matrix[1][2], with matrix[1, 2] being the idiomatic and faster NumPy multidimensional indexing)",
      "matrix.get(1, 2)",
      "matrix(1, 2)"
    ],
    correctAnswer: 1,
    explanation:
      "In NumPy, multi-dimensional indexing uses comma-separated indices inside a single pair of brackets: matrix[row, col].",
    deepDive:
      "While matrix[1][2] works, it creates an intermediate 1D slice of row 1 before indexing element 2. matrix[1, 2] indexes directly into contiguous C-order memory, making it faster and more idiomatic.",
    difficulty: 'beginner',
    tags: ['Indexing', '2D Arrays', 'NumPy', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-069',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How do you extract an entire column (e.g. column index 1) from a 2D NumPy matrix?',
    codeSnippet: `import numpy as np

matrix = np.array([
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
])
col_1 = matrix[:, 1]
print(col_1)  # [20, 50, 80]`,
    options: [
      "col_1 = matrix[1, :]",
      "col_1 = matrix[:, 1]",
      "col_1 = matrix.column(1)",
      "col_1 = matrix[1]"
    ],
    correctAnswer: 1,
    explanation:
      "The colon ':' represents all rows along axis 0. matrix[:, 1] extracts all rows for column index 1.",
    deepDive:
      "Conversely, matrix[1, :] (or simply matrix[1]) extracts row index 1 across all columns. Slicing with [start:stop:step] applies independently to each axis in NumPy.",
    difficulty: 'intermediate',
    tags: ['Slicing', 'Column Extraction', '2D Slicing', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-070',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What is "broadcasting" in NumPy?',
    codeSnippet: `import numpy as np

arr = np.array([10, 20, 30])
result = arr + 5
print(result)  # [15, 25, 35]`,
    options: [
      "Sending array data over a Wi-Fi network to other machines",
      "The mechanism that allows NumPy to perform arithmetic operations on arrays of different shapes without making unneeded copies of data",
      "Printing array values to the terminal screen",
      "Converting floating point numbers to integers"
    ],
    correctAnswer: 1,
    explanation:
      "Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations: the smaller array is 'broadcast' across the larger array so that they have compatible shapes.",
    deepDive:
      "Two dimensions are compatible for broadcasting if they are equal, or if one of them is 1. In arr + 5, the scalar 5 is stretched across the 3-element vector without allocating duplicate memory.",
    difficulty: 'intermediate',
    tags: ['Broadcasting', 'Vectorized Arithmetic', 'NumPy', 'PCED-30-02']
  }
];
