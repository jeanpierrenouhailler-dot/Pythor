import { Flashcard } from '../types';

export const pcedSection2CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.1: VARIABLES, DATA TYPES, TYPE INSPECTION & STRINGS (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pced-s2-fc-001',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Dynamic Typing and Variable Assignment',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How does Python handle dynamic typing when assigning variables during data processing?',
    codeSnippet: `# Python dynamically determines type at runtime
raw_reading = "142.8"
print(type(raw_reading).__name__)

# Reassigning variable to a float after parsing
raw_reading = float(raw_reading)
print(type(raw_reading).__name__)
print(f"Parsed value: {raw_reading + 10.0}")`,
    stdoutExpected: 'str\nfloat\nParsed value: 152.8',
    explanationTitle: 'Dynamic Typing in Python',
    explanationText:
      'Python variables are references to objects in memory, not fixed memory slots bound to a static type. A variable can reference a string during initial ingestion and subsequently reference a float or integer after parsing without explicit variable redeclaration.',
    complexityInfo: 'PCED 2.1.1 Dynamic variable assignment & type binding',
  },
  {
    id: 'pced-s2-fc-002',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'type() vs isinstance() for Data Validation',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the crucial difference between type() and isinstance() when validating numerical data?',
    codeSnippet: `class MeasuredMetric(float):
    pass

val = MeasuredMetric(42.5)

print("type() == float:       ", type(val) == float)
print("isinstance(val, float):", isinstance(val, float))
print("isinstance(val, (int, float)):", isinstance(val, (int, float)))`,
    stdoutExpected: 'type() == float:        False\nisinstance(val, float): True\nisinstance(val, (int, float)): True',
    explanationTitle: 'type() vs isinstance() in Data Pipelines',
    explanationText:
      'type() checks the exact class of an object and does not consider inheritance or custom sub-types. isinstance() supports inheritance hierarchies and accepts a tuple of allowable types (e.g. (int, float)), making isinstance() the recommended Pythonic method for schema and type validation.',
    complexityInfo: 'PCED 2.1.1 Type checking and inheritance awareness',
  },
  {
    id: 'pced-s2-fc-003',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Integer vs Float Division and Floor Division',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do standard division (/), floor division (//), and modulo (%) behave when batching or partitioning data?',
    codeSnippet: `total_records = 95
batch_size = 20

batches = total_records // batch_size
remaining = total_records % batch_size
exact_ratio = total_records / batch_size

print(f"Full batches: {batches} ({type(batches).__name__})")
print(f"Leftover:     {remaining}")
print(f"Exact ratio:  {exact_ratio} ({type(exact_ratio).__name__})")`,
    stdoutExpected: 'Full batches: 4 (int)\nLeftover:     15\nExact ratio:  4.75 (float)',
    explanationTitle: 'Division Operators: / vs // vs %',
    explanationText:
      'In Python 3, the single slash (/) always returns a float even if the numbers divide evenly (e.g., 4 / 2 returns 2.0). The double slash (//) performs floor division (rounding down to the nearest integer), and the percent sign (%) computes the remainder (modulus).',
    complexityInfo: 'PCED 2.1.1 Arithmetic operators & numeric types',
  },
  {
    id: 'pced-s2-fc-004',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Explicit Type Casting & ValueError Traps',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does int("45.8") raise a ValueError, and what is the proper two-step conversion?',
    codeSnippet: `price_str = "45.8"

try:
    direct_int = int(price_str)
except ValueError as e:
    print("Direct cast failed: ValueError")

# Two-step cast: string -> float -> int (truncation)
valid_int = int(float(price_str))
print(f"Successful two-step int: {valid_int}")`,
    stdoutExpected: 'Direct cast failed: ValueError\nSuccessful two-step int: 45',
    explanationTitle: 'String-to-Int Conversion Trap',
    explanationText:
      'The int() constructor can only convert a string directly if the string contains a valid base-10 integer literal (e.g., "45"). If the string contains a decimal point like "45.8", int() raises a ValueError. You must first convert with float("45.8") and then pass the resulting float to int(), which truncates the fractional part.',
    complexityInfo: 'PCED 2.1.1 Type casting traps and parsing rules',
  },
  {
    id: 'pced-s2-fc-005',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Boolean Truth Value Testing (Truthy vs Falsy)',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Which common values in data analysis are evaluated as Falsy in conditional checks?',
    codeSnippet: `sample_values = [0, 0.0, "", [], {}, set(), None, False, "0"]

falsy_results = [f"{repr(val)} -> {bool(val)}" for val in sample_values]
for res in falsy_results:
    print(res)`,
    stdoutExpected: "0 -> False\n0.0 -> False\n'' -> False\n[] -> False\n{} -> False\nset() -> False\nNone -> False\nFalse -> False\n'0' -> True",
    explanationTitle: 'Truthy and Falsy Evaluations',
    explanationText:
      'In Python, numerical zeros (0, 0.0), empty sequences/collections ("", [], {}, set()), None, and False evaluate to False in boolean context. Crucially, the non-empty string "0" evaluates to True because any non-empty string is truthy!',
    complexityInfo: 'PCED 2.1.1 Boolean logic & truth value testing',
  },
  {
    id: 'pced-s2-fc-006',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Floating-Point Representation and Rounding Precision',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does 0.1 + 0.2 != 0.3 evaluate to True in Python, and how should analysts compare floats?',
    codeSnippet: `import math

raw_sum = 0.1 + 0.2
print(f"0.1 + 0.2 == 0.3: {raw_sum == 0.3}")
print(f"Actual raw_sum:  {raw_sum:.17f}")

# Accurate comparison using math.isclose()
print(f"math.isclose():  {math.isclose(raw_sum, 0.3)}")`,
    stdoutExpected: '0.1 + 0.2 == 0.3: False\nActual raw_sum:  0.30000000000000004\nmath.isclose():  True',
    explanationTitle: 'IEEE 754 Floating-Point Arithmetic',
    explanationText:
      'Python represents floats using binary IEEE 754 64-bit precision. Fractions like 0.1 and 0.2 cannot be represented exactly in binary base-2, resulting in tiny rounding artifacts (0.30000000000000004). For reliable financial or metric comparisons, analysts use math.isclose() or the decimal module.',
    complexityInfo: 'PCED 2.1.1 Float precision & IEEE 754 equality comparison',
  },
  {
    id: 'pced-s2-fc-007',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'String Slicing Syntax: Start, Stop, and Step',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do slicing parameters [start:stop:step] work on timestamp or ID strings?',
    codeSnippet: `timestamp = "2026-09-21T05:00:00"

year = timestamp[:4]
month = timestamp[5:7]
day = timestamp[8:10]
date_reversed = timestamp[9::-1]

print(f"Year:  {year}")
print(f"Month: {month}")
print(f"Day:   {day}")
print(f"Reversed date string: {date_reversed}")`,
    stdoutExpected: 'Year:  2026\nMonth: 09\nDay:   21\nReversed date string: 12-90-6202',
    explanationTitle: 'String Slicing: start:stop:step',
    explanationText:
      'Slices in Python follow [start:stop:step]. The start index is inclusive, stop is exclusive, and step controls direction and stride. A negative step (e.g., [::-1]) traverses the sequence in reverse. Slicing never raises an IndexError even if indices exceed sequence length.',
    complexityInfo: 'PCED 2.1.1 String extraction & indexing semantics',
  },
  {
    id: 'pced-s2-fc-008',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'String Cleansing: strip(), lstrip(), and rstrip()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do .strip(), .lstrip(), and .rstrip() remove whitespace or specific unwanted delimiter characters?',
    codeSnippet: `raw_header = "  \\t  TOTAL_SALES_USD\\n\\n  "
messy_id = "$$$US-9821###"

clean_header = raw_header.strip()
clean_id = messy_id.strip("$#")

print(f"Clean header: '{clean_header}'")
print(f"Clean ID:     '{clean_id}'")`,
    stdoutExpected: "Clean header: 'TOTAL_SALES_USD'\nClean ID:     'US-9821'",
    explanationTitle: 'String Stripping for Data Cleansing',
    explanationText:
      'strip() without arguments removes leading and trailing whitespace (spaces, tabs, newlines). When passed a string of characters (e.g. .strip("$#")), it strips all permutations of those characters from both ends until reaching an unlisted character.',
    complexityInfo: 'PCED 2.1.1 Text data normalization with strip()',
  },
  {
    id: 'pced-s2-fc-009',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'String Replacement and Case Normalization',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do .lower(), .upper(), .title(), and .replace() sanitize categorical column values?',
    codeSnippet: `categories = ["  NORTH-WEST ", "north_west", "North West", "North-West "]

def standardize(text: str) -> str:
    return text.strip().lower().replace("-", "_").replace(" ", "_")

standardized = [standardize(c) for c in categories]
print("Unique categories:", set(standardized))`,
    stdoutExpected: "Unique categories: {'north_west'}",
    explanationTitle: 'Categorical String Standardization',
    explanationText:
      'Disparate data sources often contain inconsistent capitalization and delimiters. Applying .strip(), .lower(), and chained .replace() transforms messy entries into uniform snake_case or canonical tokens suitable for categorical aggregation.',
    complexityInfo: 'PCED 2.1.1 String manipulation & category harmonization',
  },
  {
    id: 'pced-s2-fc-010',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'String Splitting and Joining: split() and join()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do .split() and .join() tokenize CSV rows and reconstruct formatted records?',
    codeSnippet: `csv_row = "2026-09-21,Server_A,CPU_Peak,94.8"

tokens = csv_row.split(",")
print("Tokens:", tokens)

# Reassemble with pipe delimiter
pipe_delimited = " | ".join(tokens)
print("Pipe record:", pipe_delimited)`,
    stdoutExpected: "Tokens: ['2026-09-21', 'Server_A', 'CPU_Peak', '94.8']\nPipe record: 2026-09-21 | Server_A | CPU_Peak | 94.8",
    explanationTitle: 'Tokenizing and Assembling Strings',
    explanationText:
      'str.split(sep) parses a string into a list of substrings based on the delimiter sep. Conversely, sep.join(iterable) concatenates a sequence of strings using sep as the glue between elements.',
    complexityInfo: 'PCED 2.1.1 Delimited text parsing with split() and join()',
  },
  {
    id: 'pced-s2-fc-011',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'split() with Maxsplit and Default Whitespace Behavior',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What happens when split() is called without arguments vs with maxsplit parameter?',
    codeSnippet: `log_line = "INFO   2026-09-21   User logged in successfully from NY"

# split() without arguments collapses all consecutive whitespaces
words = log_line.split()
print("First 3 words:", words[:3])

# split with maxsplit to isolate level, timestamp, and the rest as message
level, ts, message = log_line.split(None, 2)
print(f"Level: {level}, TS: {ts}, Message: '{message}'")`,
    stdoutExpected: "First 3 words: ['INFO', '2026-09-21', 'User']\nLevel: INFO, TS: 2026-09-21, Message: 'User logged in successfully from NY'",
    explanationTitle: 'split() Whitespace and maxsplit',
    explanationText:
      'Calling str.split() with no arguments (or None) collapses arbitrary consecutive whitespaces (spaces, tabs, newlines) and discards leading/trailing spaces. Supplying maxsplit limits the number of splits, preserving remainder text as a single string.',
    complexityInfo: 'PCED 2.1.1 Advanced log parsing with split(None, maxsplit)',
  },
  {
    id: 'pced-s2-fc-012',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Modern String Formatting: f-strings vs .format()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do formatted string literals (f-strings) format percentages, floating precision, and thousands separators?',
    codeSnippet: `revenue = 1429850.758
conversion_rate = 0.04826

print(f"Revenue:   \${revenue:,.2f}")
print(f"Rate:      {conversion_rate:.1%}")
print(f"Padding:   {42:05d}")`,
    stdoutExpected: 'Revenue:   $1,429,850.76\nRate:      4.8%\nPadding:   00042',
    explanationTitle: 'f-String Format Specifiers',
    explanationText:
      'Python f-strings support formatting expressions directly: :,.2f inserts comma thousands separators and rounds to 2 decimal places; :.1% multiplies by 100 and appends a percent sign; and :05d pads an integer with leading zeros to width 5.',
    complexityInfo: 'PCED 2.1.1 Metric presentation & f-string formatting',
  },
  {
    id: 'pced-s2-fc-013',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'String Inspection Methods: startswith, endswith, find, count',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How are .startswith(), .endswith(), .find(), and .count() utilized in text filtering?',
    codeSnippet: `filenames = ["sales_2026_q1.csv", "inventory_2026.csv", "backup.parquet", "sales_2025_q4.csv"]

sales_csvs = [f for f in filenames if f.startswith("sales") and f.endswith(".csv")]
print("Filtered files:", sales_csvs)

sample = "error: failed code 404, error: timeout"
print("Error occurrences:", sample.count("error"))
print("First error index:", sample.find("error"))
print("Missing token index:", sample.find("fatal"))`,
    stdoutExpected: "Filtered files: ['sales_2026_q1.csv', 'sales_2025_q4.csv']\nError occurrences: 2\nFirst error index: 0\nMissing token index: -1",
    explanationTitle: 'Substring Inspection & Filtering',
    explanationText:
      'startswith() and endswith() test prefixes and suffixes (and both accept a tuple of strings). str.find(sub) returns the lowest index of sub, or -1 if not found (unlike .index() which raises ValueError on failure). str.count(sub) returns non-overlapping matches.',
    complexityInfo: 'PCED 2.1.1 Substring search & prefix verification',
  },
  {
    id: 'pced-s2-fc-014',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Immutable vs Mutable Data Types',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Which fundamental Python data types are immutable, and what happens when an immutable object is modified?',
    codeSnippet: `s = "data"
original_id = id(s)

s += "_analyst"
new_id = id(s)

print("Original text morphed? No, created new object:")
print("id changed:", original_id != new_id)

# Immutables: int, float, str, tuple, bool, frozenset
# Mutables:   list, dict, set`,
    stdoutExpected: 'Original text morphed? No, created new object:\nid changed: True',
    explanationTitle: 'Immutability in Python',
    explanationText:
      'Immutable types (int, float, str, tuple, bool, frozenset) cannot have their internal state altered after creation. Any "modification" (like string concatenation or arithmetic operations) instantiates a completely new object in memory with a distinct memory address (id).',
    complexityInfo: 'PCED 2.1.1 Memory model: mutability vs immutability',
  },
  {
    id: 'pced-s2-fc-015',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Short-Circuit Evaluation with and / or',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is short-circuit evaluation, and how does it prevent ZeroDivisionError or IndexError in data checks?',
    codeSnippet: `records = []

# If records is empty (Falsy), 'and' immediately short-circuits without checking records[0]
has_valid_first_record = len(records) > 0 and records[0] == "VALID"
print("Evaluation safe:", has_valid_first_record)

total_sum = 0
count = 0
# Avoid ZeroDivisionError using short-circuit
avg = (count > 0) and (total_sum / count)
print("Safe division result:", avg)`,
    stdoutExpected: 'Evaluation safe: False\nSafe division result: False',
    explanationTitle: 'Short-Circuit Evaluation in Python',
    explanationText:
      'In an "A and B" expression, Python evaluates B only if A is truthy. If A is falsy, Python short-circuits and returns A immediately without evaluating B. In "A or B", Python returns A immediately if A is truthy without evaluating B.',
    complexityInfo: 'PCED 2.1.1 Guard clauses via boolean short-circuiting',
  },
  {
    id: 'pced-s2-fc-016',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Comparison Operators and Identity (== vs is)',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the critical distinction between the equality operator (==) and the identity operator (is)?',
    codeSnippet: `list_a = [10, 20, 30]
list_b = [10, 20, 30]
list_c = list_a

print("list_a == list_b (value equality):   ", list_a == list_b)
print("list_a is list_b (memory identity):  ", list_a is list_b)
print("list_a is list_c (same object reference):", list_a is list_c)

# Best practice for None checks:
missing_val = None
print("missing_val is None:", missing_val is None)`,
    stdoutExpected: 'list_a == list_b (value equality):    True\nlist_a is list_b (memory identity):   False\nlist_a is list_c (same object reference): True\nmissing_val is None: True',
    explanationTitle: 'Equality (==) vs Identity (is)',
    explanationText:
      '== checks if two objects possess equivalent contents/values (by calling the __eq__ dunder method). "is" checks whether two variables point to the exact same physical memory address (id(a) == id(b)). Always use "is None" (or "is not None") to check for missing/null values.',
    complexityInfo: 'PCED 2.1.1 Object identity vs value equality & None checks',
  },
  {
    id: 'pced-s2-fc-017',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'String Validation Methods: isdigit, isalpha, isalnum',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do str.isdigit(), str.isalpha(), and str.isalnum() validate raw survey inputs?',
    codeSnippet: `inputs = ["94016", "SanFrancisco", "Apt4B", "3.14"]

for s in inputs:
    print(f"'{s}': isdigit={s.isdigit()}, isalpha={s.isalpha()}, isalnum={s.isalnum()}")`,
    stdoutExpected: "'94016': isdigit=True, isalpha=False, isalnum=True\n'SanFrancisco': isdigit=False, isalpha=True, isalnum=True\n'Apt4B': isdigit=False, isalpha=False, isalnum=True\n'3.14': isdigit=False, isalpha=False, isalnum=False",
    explanationTitle: 'String Character Verification Methods',
    explanationText:
      'isdigit() returns True if all characters are digits (0-9). isalpha() returns True if all characters are alphabetic. isalnum() returns True if all characters are alphanumeric. Notice that "3.14" returns False for all three because the dot (.) is punctuation!',
    complexityInfo: 'PCED 2.1.1 Character set validation for tabular inputs',
  },
  {
    id: 'pced-s2-fc-018',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Operator Precedence in Arithmetic and Logic',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the order of evaluation in Python arithmetic and logical expressions?',
    codeSnippet: `# Expression mixing powers, multiplication, division, addition, and logic
result = 10 + 2 * 3 ** 2
print("10 + 2 * 3 ** 2 =", result)

# Logical precedence: not > and > or
cond = True or False and False
print("True or False and False =", cond)

cond_grouped = (True or False) and False
print("(True or False) and False =", cond_grouped)`,
    stdoutExpected: '10 + 2 * 3 ** 2 = 28\nTrue or False and False = True\n(True or False) and False = False',
    explanationTitle: 'Operator Precedence Hierarchy',
    explanationText:
      'In Python arithmetic, exponents (**) take precedence over unary signs, followed by multiplication/division (*, /, //, %), and then addition/subtraction (+, -). In boolean logic, "not" takes precedence over "and", which takes precedence over "or". Always use parentheses to make analytical expressions unambiguous.',
    complexityInfo: 'PCED 2.1.1 PEMDAS and boolean operator hierarchy',
  },
  {
    id: 'pced-s2-fc-019',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Scientific Notation in Floating-Point Numbers',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How does Python parse and print numbers expressed in scientific exponential notation (e/E)?',
    codeSnippet: `p_value = 1.45e-4
population = 3.28e8

print(f"p-value decimal:    {p_value:.6f}")
print(f"Population integer: {int(population):,}")
print(f"Formatted sci-not:  {p_value:.2e}")`,
    stdoutExpected: 'p-value decimal:    0.000145\nPopulation integer: 328,000,000\nFormatted sci-not:  1.45e-04',
    explanationTitle: 'Scientific Notation Representation',
    explanationText:
      'Scientific notation uses e or E to indicate powers of 10. 1.45e-4 equals 1.45 * 10^(-4) (0.000145), and 3.28e8 equals 328,000,000.0. Python automatically parses these literals as standard float objects and supports format specifiers like :.2e.',
    complexityInfo: 'PCED 2.1.1 Scientific notation for p-values & astronomical stats',
  },
  {
    id: 'pced-s2-fc-020',
    track: 'pced',
    cardType: 'PCED 2.1 • Variables & Data Types',
    topic: 'Multiple Assignment and Value Swapping',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How does Python execute multiple variable assignment and atomic value swapping without a temporary variable?',
    codeSnippet: `# Multiple assignment from unpacking
min_threshold, max_threshold = 15.0, 85.0
print(f"Thresholds: {min_threshold} to {max_threshold}")

# Pythonic in-place swap
a = 100
b = 200
a, b = b, a
print(f"After swap: a={a}, b={b}")`,
    stdoutExpected: 'Thresholds: 15.0 to 85.0\nAfter swap: a=200, b=100',
    explanationTitle: 'Multiple Assignment & Tuple Unpacking',
    explanationText:
      'Python evaluates the entire right-hand side of an assignment first, creating a temporary tuple (b, a), and then unpacks its elements into the targets on the left-hand side (a, b). This enables safe, single-line variable swapping without an intermediate temp variable.',
    complexityInfo: 'PCED 2.1.1 Multiple assignment & right-hand tuple evaluation',
  },

  // =========================================================================
  // CHAPTER 2.2: CONTROL FLOW, LOOPS & ITERATION (Cards 21 to 35 of Part 1)
  // =========================================================================
  {
    id: 'pced-s2-fc-021',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Conditional Logic: if, elif, and else Branches',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does Python evaluate if-elif-else cascades when categorizing customer scores?',
    codeSnippet: `def categorize_nps(score: int) -> str:
    if score >= 9:
        return "Promoter"
    elif score >= 7:
        return "Passive"
    elif score >= 0:
        return "Detractor"
    else:
        return "Invalid Score"

scores = [10, 8, 4, -1]
print([categorize_nps(s) for s in scores])`,
    stdoutExpected: "['Promoter', 'Passive', 'Detractor', 'Invalid Score']",
    explanationTitle: 'Conditional Multi-Branch Logic',
    explanationText:
      'Python evaluates conditional branches sequentially from top to bottom. As soon as a branch condition evaluates to True, its corresponding block executes and all subsequent elif/else branches are bypassed entirely.',
    complexityInfo: 'PCED 2.1.2 Conditional execution & tiered classification',
  },
  {
    id: 'pced-s2-fc-022',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Chained Comparison Operators',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do Python chained comparisons (e.g., 0 <= score <= 100) simplify range validation?',
    codeSnippet: `confidence_interval = 0.95

# Chained syntax equivalent to (0.0 <= confidence_interval) and (confidence_interval <= 1.0)
is_valid_ci = 0.0 <= confidence_interval <= 1.0
print("Is 0.95 a valid probability:", is_valid_ci)

# Out-of-bounds example
bad_val = 1.05
print("Is 1.05 valid:", 0.0 <= bad_val <= 1.0)`,
    stdoutExpected: 'Is 0.95 a valid probability: True\nIs 1.05 valid: False',
    explanationTitle: 'Chained Comparisons in Python',
    explanationText:
      'Python allows chaining relational operators: "a < b < c" is evaluated as "(a < b) and (b < c)", with the expression for "b" evaluated only once. This provides clean, mathematical syntax for validating metrics within acceptable bounds.',
    complexityInfo: 'PCED 2.1.2 Chained range checking for metric validation',
  },
  {
    id: 'pced-s2-fc-023',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Conditional Ternary Expression (Inline if-else)',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the syntax for the ternary conditional expression in Python, and how is it used in metric labeling?',
    codeSnippet: `p_value = 0.038
alpha = 0.05

# Syntax: <expr_if_true> if <condition> else <expr_if_false>
hypothesis_result = "Reject H0" if p_value < alpha else "Fail to Reject H0"
print(f"p={p_value} => {hypothesis_result}")

p_value_2 = 0.12
hypothesis_result_2 = "Reject H0" if p_value_2 < alpha else "Fail to Reject H0"
print(f"p={p_value_2} => {hypothesis_result_2}")`,
    stdoutExpected: 'p=0.038 => Reject H0\np=0.12 => Fail to Reject H0',
    explanationTitle: 'Inline Conditional Expressions',
    explanationText:
      'Python ternary expressions use the syntax: x if condition else y. The condition is evaluated first; if true, expression x is returned, otherwise expression y is returned. This is ideal for concise feature engineering and binary labeling.',
    complexityInfo: 'PCED 2.1.2 Ternary operator for binary indicator derivation',
  },
  {
    id: 'pced-s2-fc-024',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Iterating Sequences with for Loops',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does the Python for loop iterate directly over sequences without requiring index counters?',
    codeSnippet: `sales = [120, 450, 310, 890]
running_total = 0

for sale in sales:
    running_total += sale

print(f"Running Total: {running_total}")
print(f"Calculated Mean: {running_total / len(sales)}")`,
    stdoutExpected: 'Running Total: 1770\nCalculated Mean: 442.5',
    explanationTitle: 'Direct Iteration over Sequences',
    explanationText:
      'In Python, the for loop is a "for-each" loop that directly consumes any iterable (lists, tuples, strings, dictionaries) through its iterator protocol, avoiding C-style manual index tracking (i = 0; i < n; i++).',
    complexityInfo: 'PCED 2.1.2 Direct collection traversal & running aggregations',
  },
  {
    id: 'pced-s2-fc-025',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'range() Function: Start, Stop, and Step Arguments',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does range(start, stop, step) generate immutable arithmetic progressions efficiently?',
    codeSnippet: `# Single argument: stop (start=0, step=1)
print("range(4):", list(range(4)))

# Two arguments: start, stop (step=1)
print("range(2, 6):", list(range(2, 6)))

# Three arguments: start, stop, step
print("range(10, 0, -2):", list(range(10, 0, -2)))`,
    stdoutExpected: 'range(4): [0, 1, 2, 3]\nrange(2, 6): [2, 3, 4, 5]\nrange(10, 0, -2): [10, 8, 6, 4, 2]',
    explanationTitle: 'The range() Object in Python',
    explanationText:
      'range() returns a lazy, memory-efficient immutable sequence of integers. It does not pre-allocate elements in memory, calculating values on-the-fly. The stop boundary is always exclusive.',
    complexityInfo: 'PCED 2.1.2 Lazy arithmetic progressions with range()',
  },
  {
    id: 'pced-s2-fc-026',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'enumerate() for Index and Item Tracking',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Why is enumerate() preferred over range(len(seq)) when inspecting rows with position indices?',
    codeSnippet: `metrics = ["Latency", "Throughput", "Error_Rate", "CPU_Usage"]

for rank, name in enumerate(metrics, start=1):
    print(f"Rank {rank}: {name}")`,
    stdoutExpected: 'Rank 1: Latency\nRank 2: Throughput\nRank 3: Error_Rate\nRank 4: CPU_Usage',
    explanationTitle: 'enumerate() for Index Tracking',
    explanationText:
      'enumerate(iterable, start=0) yields (index, item) tuples on each iteration. It avoids the anti-pattern of range(len(iterable)) and indexing into the list, resulting in faster and more readable code.',
    complexityInfo: 'PCED 2.1.2 Pythonic sequence indexing with enumerate()',
  },
  {
    id: 'pced-s2-fc-027',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'zip() for Parallel Sequence Processing',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does zip() combine multiple parallel columns into tabular row records?',
    codeSnippet: `quarters = ["Q1", "Q2", "Q3", "Q4"]
revenue = [12000, 15000, 18500, 22000]
target = [10000, 14000, 19000, 21000]

rows = []
for q, rev, tgt in zip(quarters, revenue, target):
    diff = rev - tgt
    rows.append(f"{q}: Rev=\${rev} (Delta=\${diff:+d})")

for r in rows:
    print(r)`,
    stdoutExpected: 'Q1: Rev=$12000 (Delta=+2000)\nQ2: Rev=$15000 (Delta=+1000)\nQ3: Rev=$18500 (Delta=-500)\nQ4: Rev=$22000 (Delta=+1000)',
    explanationTitle: 'Parallel Iteration with zip()',
    explanationText:
      'zip(*iterables) aggregates elements from each of the iterables into tuples. By default, zip() stops as soon as the shortest input iterable is exhausted, making it ideal for pairing header lists with row values.',
    complexityInfo: 'PCED 2.1.2 Tabular row pairing with zip()',
  },
  {
    id: 'pced-s2-fc-028',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'break Statement in Search and Threshold Detection',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does the break statement terminate a loop upon detecting an anomaly or outlier?',
    codeSnippet: `readings = [21.5, 22.0, 21.8, 99.4, 22.1, 23.0]
threshold = 50.0

detected_anomaly = None
for r in readings:
    if r > threshold:
        detected_anomaly = r
        break  # Immediately exit loop

print(f"First critical anomaly detected: {detected_anomaly}")`,
    stdoutExpected: 'First critical anomaly detected: 99.4',
    explanationTitle: 'The break Statement',
    explanationText:
      'The break statement immediately terminates the innermost enclosing for or while loop, jumping execution to the statement immediately following the loop block.',
    complexityInfo: 'PCED 2.1.2 Early loop termination with break',
  },
  {
    id: 'pced-s2-fc-029',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'continue Statement for Skipping Missing or Invalid Data',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does the continue statement bypass invalid or null records without terminating iteration?',
    codeSnippet: `raw_data = ["12.5", "N/A", "18.2", None, "24.0", "MISSING"]
clean_floats = []

for item in raw_data:
    if item is None or item in ("N/A", "MISSING"):
        continue  # Skip to the next iteration
    clean_floats.append(float(item))

print("Cleaned numbers:", clean_floats)`,
    stdoutExpected: 'Cleaned numbers: [12.5, 18.2, 24.0]',
    explanationTitle: 'The continue Statement',
    explanationText:
      'The continue statement rejects all remaining statements in the current loop iteration and moves the control directly to the next iteration of the loop, making it essential for filtering out corrupt observations.',
    complexityInfo: 'PCED 2.1.2 Data cleaning iteration with continue',
  },
  {
    id: 'pced-s2-fc-030',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Loop else Clause: The No-Break Trigger',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'When does the else clause of a for or while loop execute in Python?',
    codeSnippet: `def check_all_positive(batch: list) -> str:
    for val in batch:
        if val < 0:
            return f"Failed: found negative value {val}"
    else:
        # Executes ONLY if the loop completed naturally without hitting a 'break' or early return
        return "Passed: all metrics positive"

print(check_all_positive([12, 45, 88, 3]))
print(check_all_positive([12, -5, 88, 3]))`,
    stdoutExpected: 'Passed: all metrics positive\nFailed: found negative value -5',
    explanationTitle: 'Loop else Clause Semantics',
    explanationText:
      'In Python, a loop else block executes only when the loop terminates normally (exhausts its sequence in a for loop, or condition becomes False in a while loop). If the loop is terminated prematurely by a break statement, the else block is skipped.',
    complexityInfo: 'PCED 2.1.2 Loop else clause behavior & validation guards',
  },
  {
    id: 'pced-s2-fc-031',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'while Loops with Convergence Conditions',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How is a while loop used to simulate convergence in statistical optimization (e.g. gradient descent)?',
    codeSnippet: `estimate = 100.0
target = 25.0
learning_rate = 0.5
iteration = 0

while abs(estimate - target) > 0.5:
    estimate -= learning_rate * (estimate - target)
    iteration += 1

print(f"Converged at iteration {iteration}: estimate={estimate:.2f}")`,
    stdoutExpected: 'Converged at iteration 8: estimate=25.29',
    explanationTitle: 'while Loops for Numerical Convergence',
    explanationText:
      'A while loop repeats its block as long as its conditional test evaluates to True. In iterative algorithms (such as optimization or simulation), while loops run until a defined convergence tolerance or maximum iteration ceiling is reached.',
    complexityInfo: 'PCED 2.1.2 while loop convergence conditions',
  },
  {
    id: 'pced-s2-fc-032',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Nested Loops and Tabular Matrix Flattening',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do nested loops traverse 2D grid/matrix tables row-by-row?',
    codeSnippet: `matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

flattened = []
for row in matrix:
    for val in row:
        if val > 45:
            flattened.append(val)

print("Values > 45:", flattened)`,
    stdoutExpected: 'Values > 45: [50, 60, 70, 80, 90]',
    explanationTitle: 'Nested Loops for 2D Arrays',
    explanationText:
      'Nested loops execute an inner loop completely for each single iteration of the outer loop. When iterating over a list of lists, the outer loop selects each row, and the inner loop visits each column value within that row.',
    complexityInfo: 'PCED 2.1.2 2D matrix traversal & nested iteration',
  },
  {
    id: 'pced-s2-fc-033',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'The pass Statement as Code Placeholder',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the function of the pass statement in conditional branches and stub functions?',
    codeSnippet: `events = ["CLICK", "HOVER", "PURCHASE", "SCROLL"]
purchase_events = []

for e in events:
    if e == "PURCHASE":
        purchase_events.append(e)
    else:
        pass  # Syntactic placeholder: do nothing for non-purchase events

print("Tracked events:", purchase_events)`,
    stdoutExpected: "Tracked events: ['PURCHASE']",
    explanationTitle: 'The pass Statement as a No-Op',
    explanationText:
      'The pass statement is a null operation (no-op). Since Python relies on indentation to delimit blocks, empty blocks are syntactically invalid. pass satisfies the syntax requirement without executing any action.',
    complexityInfo: 'PCED 2.1.2 Syntactic placeholders with pass',
  },
  {
    id: 'pced-s2-fc-034',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Iterating Over Dictionaries: Keys, Values, and Items',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do for loops iterate over dictionary keys, values, and key-value pairs simultaneously?',
    codeSnippet: `sales_by_dept = {"Electronics": 45000, "Apparel": 28000, "Groceries": 61000}

# Direct iteration visits keys by default
for dept, total in sales_by_dept.items():
    print(f"{dept}: \${total:,}")`,
    stdoutExpected: 'Electronics: $45,000\nApparel: $28,000\nGroceries: $61,000',
    explanationTitle: 'Dictionary Iteration Protocols',
    explanationText:
      'Iterating directly over a dict ("for k in dict") yields its keys. Calling .values() yields values, and calling .items() yields (key, value) 2-tuples that can be unpacked directly in the loop header.',
    complexityInfo: 'PCED 2.1.2 Dictionary traversal using .items() unpacking',
  },
  {
    id: 'pced-s2-fc-035',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Defensive Looping: Modifying Sequences During Iteration',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Why is modifying a list while iterating over it dangerous, and how do analysts avoid skipped elements?',
    codeSnippet: `# Anti-pattern: mutating in-place while iterating causes index shifts
bad_list = [1, 2, 3, 4, 5, 6]
for x in bad_list[:]: # Safe: iterate over a shallow slice copy [:]
    if x % 2 == 0:
        bad_list.remove(x)

print("Safely filtered odds:", bad_list)`,
    stdoutExpected: 'Safely filtered odds: [1, 3, 5]',
    explanationTitle: 'Mutating Sequences During Iteration',
    explanationText:
      'Modifying a list (e.g., .remove() or .pop()) during iteration alters the internal index offsets, causing the loop to skip adjacent elements. To mutate safely, iterate over a shallow copy (seq[:]) or prefer list comprehensions.',
    complexityInfo: 'PCED 2.1.2 In-place sequence mutation traps',
  },
];
