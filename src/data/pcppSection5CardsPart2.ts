import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 5: FILE PROCESSING AND DATA PERSISTENCE (Part 2: Cards 41 to 75)
 * - Chapter 5.3: CSV File Operations: reader, writer & DictReader (Cards 41 to 60)
 * - Chapter 5.4: Logging Architecture: loggers, handlers, formatters (Cards 61 to 75)
 */
export const pcppSection5CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.3: CSV FILE OPERATIONS: READER, WRITER & DICTREADER (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcpp-s5-fc-041',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'The CSV format (RFC 4180) and Python csv module architecture',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What is RFC 4180, and what are the core classes provided by the standard csv module?',
    codeSnippet: `import csv

# RFC 4180 specifies:
# - Delimiter: comma by default
# - Line separator: CRLF (\\r\\n)
# - Fields containing commas, newlines, or quotes must be enclosed in double quotes (")
# - Quotes inside quoted fields are escaped by doubling them ("")

print("csv module classes:")
print("- Sequence-based:", hasattr(csv, "reader"), hasattr(csv, "writer"))
print("- Dict-based:", hasattr(csv, "DictReader"), hasattr(csv, "DictWriter"))
print("- Dialect management:", hasattr(csv, "register_dialect"), hasattr(csv, "Sniffer"))`,
    stdoutExpected: 'csv module classes:\n- Sequence-based: True True\n- Dict-based: True True\n- Dialect management: True True',
    explanationTitle: 'RFC 4180 and the csv Module',
    explanationText:
      'The Python csv module implements RFC 4180 parsing and serialization. It provides sequence-based processors (csv.reader, csv.writer), dictionary-based processors (csv.DictReader, csv.DictWriter), dialect managers, and a Sniffer class for detecting formatting parameters.',
    complexityInfo: 'PCPP 5.3 CSV standard specification',
  },
  {
    id: 'pcpp-s5-fc-042',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Reading CSV files and the mandatory newline="" parameter',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'CRITICAL TRAP: Why MUST files opened for csv.reader and csv.writer always use open(..., newline="") in Python 3?',
    codeSnippet: `import csv
import io

# When reading or writing CSV files in Python 3:
# ALWAYS specify newline="" in open()!

# WHY:
# 1. On Windows, writing without newline="" results in double newlines (\\r\\r\\n)
#    because Python universal newline translation adds \\r, and the csv module adds \\r\\n!
# 2. On reading, newline="" prevents Python from translating embedded newlines inside quoted fields!

raw_data = 'name,notes\\nAlice,"Line 1\\nLine 2"'
# Using newline="" preserves embedded newlines correctly:
stream = io.StringIO(raw_data, newline="")
reader = csv.reader(stream)
rows = list(reader)

print("Row 0 (Header):", rows[0])
print("Row 1 notes field has newline:", "\\n" in rows[1][1])`,
    stdoutExpected: "Row 0 (Header): ['name', 'notes']\nRow 1 notes field has newline: True",
    explanationTitle: 'open(..., newline="") Requirement',
    explanationText:
      'According to Python documentation, open() should always be called with newline="" when reading or writing CSV files. Without newline="", Python universal newlines translation will corrupt multi-line quoted fields during reading and produce double blank lines on Windows during writing.',
    complexityInfo: 'High-frequency exam pitfall on CSV file opening',
  },
  {
    id: 'pcpp-s5-fc-043',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'csv.reader data types and row iteration',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What data type does csv.reader return for row values, and does it auto-convert numbers?',
    codeSnippet: `import csv
import io

raw_csv = """id,score,passed
101,98.5,True
102,45.0,False"""

stream = io.StringIO(raw_csv.strip(), newline="")
reader = csv.reader(stream)

header = next(reader)
first_row = next(reader)

# CRITICAL EXAM FACT:
# csv.reader ALWAYS returns row values as STRINGS!
# No automatic conversion to int, float, or bool!
print("First row values:", first_row)
print("Are all types str:", all(isinstance(v, str) for v in first_row))`,
    stdoutExpected: "First row values: ['101', '98.5', 'True']\nAre all types str: True",
    explanationTitle: 'csv.reader String Return Types',
    explanationText:
      'csv.reader parses fields into lists of strings. It performs no automatic type coercion: numbers, booleans, and nulls are all returned as str. Developers must explicitly convert types using int(), float(), or custom converters unless QUOTE_NONNUMERIC is configured.',
    complexityInfo: 'Exam trap: csv.reader yields strings only',
  },
  {
    id: 'pcpp-s5-fc-044',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Writing CSV files: writerow() vs. writerows()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you write individual rows versus batches of rows using csv.writer?',
    codeSnippet: `import csv
import io

stream = io.StringIO(newline="")
writer = csv.writer(stream)

# 1. writerow(sequence): Writes a SINGLE row
writer.writerow(["ID", "Name", "City"])

# 2. writerows(iterable_of_sequences): Writes MULTIPLE rows in one call
batch = [
    [1, "Alice", "Paris"],
    [2, "Bob", "Tokyo"]
]
writer.writerows(batch)

print("Generated CSV content:")
print(stream.getvalue().strip())`,
    stdoutExpected: 'Generated CSV content:\nID,Name,City\r\n1,Alice,Paris\r\n2,Bob,Tokyo',
    explanationTitle: 'writerow() vs. writerows()',
    explanationText:
      'csv.writer(stream) creates a writer object. writerow(iterable) writes a single record formatted as CSV terminated by lineterminator (default \\r\\n). writerows(iterable_of_iterables) writes multiple records in a single method call.',
    complexityInfo: 'PCPP 5.3 Basic CSV writing methods',
  },
  {
    id: 'pcpp-s5-fc-045',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Custom delimiters (TSV, semicolon-separated values)',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you parse tab-separated (TSV) or semicolon-separated files using delimiter parameter?',
    codeSnippet: `import csv
import io

tsv_data = "sku\\tname\\tprice\\nA1\\tWidget\\t12.99"
stream = io.StringIO(tsv_data, newline="")

# Pass delimiter='\\t' for tab-separated, delimiter=';' for semicolons:
reader = csv.reader(stream, delimiter="\\t")
header = next(reader)
data_row = next(reader)

print("Parsed TSV columns:", len(data_row))
print("Item name:", data_row[1])`,
    stdoutExpected: 'Parsed TSV columns: 3\nItem name: Widget',
    explanationTitle: 'Custom Delimiters',
    explanationText:
      'Both csv.reader and csv.writer accept a delimiter keyword parameter (a single 1-character string). Common delimiters include comma (",", default), tab ("\\t" for TSV files), semicolon (";" in European locales), and pipe ("|").',
    complexityInfo: 'PCPP 5.3 Custom delimiter configuration',
  },
  {
    id: 'pcpp-s5-fc-046',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'CSV quoting constants: QUOTE_MINIMAL, QUOTE_ALL, QUOTE_NONNUMERIC, QUOTE_NONE',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What are the 4 standard quoting modes in the csv module and their exact behaviors?',
    codeSnippet: `import csv
import io

# csv Quoting Modes:
# 1. csv.QUOTE_MINIMAL (default): Quotes fields ONLY if they contain delimiter, quotechar, or lineterminator.
# 2. csv.QUOTE_ALL: Quotes EVERY field regardless of content.
# 3. csv.QUOTE_NONNUMERIC: Quotes all text fields. On reading: automatically converts unquoted fields to floats!
# 4. csv.QUOTE_NONE: Never quotes fields; requires escapechar to be set if delimiters exist in data.

stream = io.StringIO(newline="")
writer = csv.writer(stream, quoting=csv.QUOTE_ALL)
writer.writerow([10, "Apple", 2.50])

print("QUOTE_ALL output:", stream.getvalue().strip())`,
    stdoutExpected: 'QUOTE_ALL output: "10","Apple","2.5"',
    explanationTitle: 'CSV Quoting Modes',
    explanationText:
      'The quoting parameter controls quotation: QUOTE_MINIMAL (0) quotes only fields with special chars; QUOTE_ALL (1) quotes every field; QUOTE_NONNUMERIC (2) quotes non-numbers (and parses unquoted fields into float on reading); QUOTE_NONE (3) disables quotes and requires escapechar.',
    complexityInfo: 'High-frequency exam question on csv quoting constants',
  },
  {
    id: 'pcpp-s5-fc-047',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Handling whitespace after delimiters with skipinitialspace',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What does skipinitialspace=True do when reading CSV records with spaces after commas?',
    codeSnippet: `import csv
import io

raw_csv = "alpha, beta, gamma"

# Without skipinitialspace: spaces become part of the strings!
r1 = csv.reader(io.StringIO(raw_csv), skipinitialspace=False)
row1 = next(r1)
print("Default row[1]:", repr(row1[1])) # ' beta'

# With skipinitialspace=True: leading whitespace immediately after delimiter is stripped:
r2 = csv.reader(io.StringIO(raw_csv), skipinitialspace=True)
row2 = next(r2)
print("Stripped row[1]:", repr(row2[1])) # 'beta'`,
    stdoutExpected: "Default row[1]: ' beta'\nStripped row[1]: 'beta'",
    explanationTitle: 'skipinitialspace Parameter',
    explanationText:
      'When skipinitialspace=True (default is False), whitespace immediately following the delimiter is ignored and discarded. This is essential when parsing CSV files formatted with human-friendly spaces like "col1, col2, col3".',
    complexityInfo: 'PCPP 5.3 Whitespace trimming with skipinitialspace',
  },
  {
    id: 'pcpp-s5-fc-048',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Custom quotechar and escapechar parameters',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you customize the quote character (e.g. single quote) or escape character in csv.writer?',
    codeSnippet: `import csv
import io

stream = io.StringIO(newline="")
# Using quotechar="'" and quoting=csv.QUOTE_ALL
writer = csv.writer(stream, quotechar="'", quoting=csv.QUOTE_ALL)
writer.writerow(["code", "val's key"])

# If doublequote=True (default), quotechar inside field is doubled: ''
output = stream.getvalue().strip()
print("Custom single-quoted output:", output)`,
    stdoutExpected: "Custom single-quoted output: 'code','val''s key'",
    explanationTitle: 'quotechar and escapechar',
    explanationText:
      'quotechar specifies a 1-character string used to quote fields containing special characters (default is \'"\'). doublequote (default True) doubles quote characters found inside fields. escapechar specifies a 1-character string to escape delimiters if quoting is QUOTE_NONE.',
    complexityInfo: 'PCPP 5.3 Quote character and escaping options',
  },
  {
    id: 'pcpp-s5-fc-049',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Dictionary reading with csv.DictReader',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How does csv.DictReader map CSV rows to dictionary key-value pairs, and where are field names stored?',
    codeSnippet: `import csv
import io

raw_csv = """name,age,city
Alice,30,London
Bob,25,Berlin"""

stream = io.StringIO(raw_csv, newline="")
dict_reader = csv.DictReader(stream)

# By default, DictReader reads the FIRST row as column fieldnames:
print("Inferred fieldnames:", dict_reader.fieldnames)

first_record = next(dict_reader)
print("First record type:", type(first_record).__name__) # dict
print("Alice city:", first_record["city"])`,
    stdoutExpected: "Inferred fieldnames: ['name', 'age', 'city']\nFirst record type: dict\nAlice city: London",
    explanationTitle: 'csv.DictReader Fundamentals',
    explanationText:
      'csv.DictReader(f) creates an iterator that maps the information in each row to a dict. If fieldnames is omitted, the values in the first row of the file are automatically read and stored in dict_reader.fieldnames to serve as dictionary keys.',
    complexityInfo: 'PCPP 5.3 DictReader mapping mechanism',
  },
  {
    id: 'pcpp-s5-fc-050',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Explicit fieldnames in csv.DictReader for headerless CSVs',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you read a CSV file that does NOT contain a header row using csv.DictReader?',
    codeSnippet: `import csv
import io

# Headerless CSV data:
raw_csv = """1001,Laptop,850.00
1002,Mouse,25.00"""

stream = io.StringIO(raw_csv, newline="")

# Supply explicit fieldnames sequence:
headers = ["sku", "product", "price"]
reader = csv.DictReader(stream, fieldnames=headers)

rows = list(reader)
print("Row 0 product:", rows[0]["product"])
print("Row 1 price:", rows[1]["price"])
print("Total rows read:", len(rows)) # Notice: first row was NOT consumed as header!`,
    stdoutExpected: 'Row 0 product: Laptop\nRow 1 price: 25.00\nTotal rows read: 2',
    explanationTitle: 'Explicit fieldnames in DictReader',
    explanationText:
      'When the CSV file lacks a header line, pass fieldnames=["col1", "col2", ...] explicitly to csv.DictReader. When fieldnames is provided, the first row of the file is treated as data rather than being consumed as the header.',
    complexityInfo: 'PCPP 5.3 Headerless CSV parsing with DictReader',
  },
  {
    id: 'pcpp-s5-fc-051',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Missing and extra fields in DictReader: restkey and restval',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What happens when a CSV row has more or fewer fields than fieldnames in DictReader?',
    codeSnippet: `import csv
import io

# Row 1 has fewer fields (missing age); Row 2 has extra fields (overflow 'x', 'y')
raw_csv = """name,role,age
Alice,Admin
Bob,Dev,28,x,y"""

stream = io.StringIO(raw_csv, newline="")
reader = csv.DictReader(stream, restkey="overflow", restval="N/A")

row1 = next(reader)
print("Alice missing 'age' filled with restval:", row1["age"])

row2 = next(reader)
print("Bob extra fields captured in restkey:", row2["overflow"])`,
    stdoutExpected: "Alice missing 'age' filled with restval: N/A\nBob extra fields captured in restkey: ['x', 'y']",
    explanationTitle: 'DictReader restkey and restval',
    explanationText:
      'If a row has fewer values than fieldnames, missing keys are filled with restval (default None). If a row has more values than fieldnames, the excess values are placed into a list stored under the key name specified by restkey (default None).',
    complexityInfo: 'PCPP 5.3 DictReader ragged row handling',
  },
  {
    id: 'pcpp-s5-fc-052',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Writing dictionaries with csv.DictWriter and mandatory fieldnames',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'Is fieldnames mandatory in csv.DictWriter, and how do you initialize it?',
    codeSnippet: `import csv
import io

stream = io.StringIO(newline="")

# In csv.DictWriter, fieldnames is a MANDATORY parameter!
# Omitting fieldnames raises TypeError!
fields = ["id", "title", "status"]
writer = csv.DictWriter(stream, fieldnames=fields)

# Writing a dict row:
writer.writerow({"id": 1, "title": "Setup", "status": "Done"})
print("Generated row (notice header is not written yet):")
print(stream.getvalue().strip())`,
    stdoutExpected: 'Generated row (notice header is not written yet):\n1,Setup,Done',
    explanationTitle: 'csv.DictWriter Initialization',
    explanationText:
      'csv.DictWriter(file, fieldnames=[...]) requires the fieldnames parameter to establish column order. Unlike DictReader where fieldnames can be inferred, DictWriter cannot guess column order because standard dict keys may arrive in any order.',
    complexityInfo: 'Exam trap: fieldnames is mandatory in DictWriter',
  },
  {
    id: 'pcpp-s5-fc-053',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Writing header rows with dict_writer.writeheader()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you write the header line to a CSV file when using csv.DictWriter?',
    codeSnippet: `import csv
import io

stream = io.StringIO(newline="")
writer = csv.DictWriter(stream, fieldnames=["id", "name", "role"])

# writeheader() outputs a row containing fieldnames:
writer.writeheader()
writer.writerow({"id": 10, "name": "Charlie", "role": "Lead"})

print("Result with header:")
print(stream.getvalue().strip())`,
    stdoutExpected: 'Result with header:\nid,name,role\r\n10,Charlie,Lead',
    explanationTitle: 'dict_writer.writeheader()',
    explanationText:
      'The writeheader() method of DictWriter writes a row containing the field names specified at initialization. In Python 3.8+, writeheader() also returns the number of characters written.',
    complexityInfo: 'PCPP 5.3 DictWriter header generation',
  },
  {
    id: 'pcpp-s5-fc-054',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Handling extra dictionary keys with extrasaction in DictWriter',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What happens when a dict passed to DictWriter.writerow() contains keys NOT listed in fieldnames?',
    codeSnippet: `import csv
import io

stream = io.StringIO(newline="")
# Case 1: Default extrasaction='raise' raises ValueError on extra keys:
w1 = csv.DictWriter(stream, fieldnames=["a"], extrasaction="raise")
try:
    w1.writerow({"a": 1, "extra_col": 99})
except ValueError as err:
    print("Default extrasaction raises:", type(err).__name__)

# Case 2: extrasaction='ignore' silently drops keys not present in fieldnames:
stream2 = io.StringIO(newline="")
w2 = csv.DictWriter(stream2, fieldnames=["a"], extrasaction="ignore")
w2.writerow({"a": 1, "extra_col": 99})
print("Ignored extra key output:", stream2.getvalue().strip())`,
    stdoutExpected: 'Default extrasaction raises: ValueError\nIgnored extra key output: 1',
    explanationTitle: 'DictWriter extrasaction',
    explanationText:
      'If a dictionary passed to writerow() has keys not in fieldnames, extrasaction controls the behavior. By default, extrasaction="raise" raises a ValueError. Setting extrasaction="ignore" discards the extra keys silently.',
    complexityInfo: 'PCPP 5.3 DictWriter extra key policies',
  },
  {
    id: 'pcpp-s5-fc-055',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Defining and registering custom CSV Dialects (csv.register_dialect)',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What is a CSV Dialect, and how do you define and register one with csv.register_dialect()?',
    codeSnippet: `import csv
import io

# A Dialect bundles formatting parameters (delimiter, quotechar, lineterminator, quoting):
csv.register_dialect(
    "pipes",
    delimiter="|",
    quoting=csv.QUOTE_MINIMAL,
    lineterminator="\\n"
)

stream = io.StringIO()
writer = csv.writer(stream, dialect="pipes")
writer.writerow(["col1", "col2", "col|with|pipe"])

print("Dialect 'pipes' output:")
print(stream.getvalue().strip())`,
    stdoutExpected: 'Dialect \'pipes\' output:\ncol1|col2|"col|with|pipe"',
    explanationTitle: 'CSV Dialects & register_dialect()',
    explanationText:
      'A CSV dialect groups parsing and formatting parameters together under a single name. Registering with csv.register_dialect(name, **kwargs) or by subclassing csv.Dialect allows you to reuse formatting rules across readers and writers cleanly.',
    complexityInfo: 'PCPP 5.3 Reusable formatting with Dialects',
  },
  {
    id: 'pcpp-s5-fc-056',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Inspecting registered dialects: csv.list_dialects() and csv.get_dialect()',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What are the built-in dialects in Python, and how do you query registered dialects?',
    codeSnippet: `import csv

# Python includes default dialects: 'excel', 'excel-tab', and 'unix'
dialects = csv.list_dialects()
print("Built-in dialects include 'excel':", "excel" in dialects)
print("Built-in dialects include 'unix':", "unix" in dialects)

# Inspect dialect properties with get_dialect():
excel_dialect = csv.get_dialect("excel")
print("excel delimiter:", repr(excel_dialect.delimiter))
print("excel lineterminator:", repr(excel_dialect.lineterminator))
print("excel doublequote:", excel_dialect.doublequote)`,
    stdoutExpected: "Built-in dialects include 'excel': True\nBuilt-in dialects include 'unix': True\nexcel delimiter: ','\nexcel lineterminator: '\\r\\n'\nexcel doublequote: True",
    explanationTitle: 'csv.list_dialects() & get_dialect()',
    explanationText:
      'csv.list_dialects() returns a list of all registered dialect names. Built-in dialects are "excel" (delimiter=\',\', lineterminator=\'\\r\\n\'), "excel-tab" (delimiter=\'\\t\'), and "unix" (lineterminator=\'\\n\'). csv.get_dialect(name) returns the underlying dialect object.',
    complexityInfo: 'PCPP 5.3 Standard built-in dialect properties',
  },
  {
    id: 'pcpp-s5-fc-057',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Automatic format detection with csv.Sniffer',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you deduce the delimiter and detect if a header exists in unknown CSV text using csv.Sniffer?',
    codeSnippet: `import csv

sample = """department;budget;manager
IT;500000;Sarah
HR;200000;David
Finance;750000;Karen"""

sniffer = csv.Sniffer()

# 1. sniff(sample) returns a Dialect subclass:
dialect = sniffer.sniff(sample)
print("Detected delimiter:", repr(dialect.delimiter))

# 2. has_header(sample) analyzes first row vs remaining rows:
has_head = sniffer.has_header(sample)
print("Has header detected:", has_head)`,
    stdoutExpected: "Detected delimiter: ';'\nHas header detected: True",
    explanationTitle: 'csv.Sniffer() Detection',
    explanationText:
      'csv.Sniffer().sniff(sample) analyzes a text sample to deduce formatting parameters (delimiter, quotechar) and returns a Dialect instance. sniffer.has_header(sample) inspects type consistency between row 0 and subsequent rows to determine if row 0 is a header.',
    complexityInfo: 'PCPP 5.3 Dynamic CSV structure sniffing',
  },
  {
    id: 'pcpp-s5-fc-058',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Auto-converting numeric types with csv.QUOTE_NONNUMERIC',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How can you instruct csv.reader to automatically convert unquoted fields to float numbers?',
    codeSnippet: `import csv
import io

# Quoted strings and unquoted numbers:
raw_csv = '"Product",100,45.50'
stream = io.StringIO(raw_csv)

# Passing quoting=csv.QUOTE_NONNUMERIC instructs reader to convert unquoted values to float:
reader = csv.reader(stream, quoting=csv.QUOTE_NONNUMERIC)
row = next(reader)

print("Product type:", type(row[0]).__name__)
print("Quantity type:", type(row[1]).__name__, "val:", row[1])
print("Price type:", type(row[2]).__name__, "val:", row[2])`,
    stdoutExpected: 'Product type: str\nQuantity type: float val: 100.0\nPrice type: float val: 45.5',
    explanationTitle: 'QUOTE_NONNUMERIC Auto-Conversion',
    explanationText:
      'When quoting=csv.QUOTE_NONNUMERIC is passed to csv.reader, the reader assumes all unquoted fields are numeric and automatically casts them to float instances. Non-numeric values must be quoted, or a ValueError is raised.',
    complexityInfo: 'PCPP 5.3 Automatic float conversion in csv.reader',
  },
  {
    id: 'pcpp-s5-fc-059',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'Unicode and UTF-8 encoding in CSV file operations',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How do you handle non-ASCII and Unicode characters (e.g. accented letters, Asian glyphs) in Python 3 CSV files?',
    codeSnippet: `import csv
import io

# Python 3 csv module works directly with Unicode STRINGS:
unicode_data = "city,greeting\\nMünchen,Grüß Gott\\nTokyo,こんにちは"

# Simply open files with encoding="utf-8":
stream = io.StringIO(unicode_data, newline="")
reader = csv.reader(stream)

for row in reader:
    print(row[0], "->", row[1])`,
    stdoutExpected: 'city -> greeting\nMünchen -> Grüß Gott\nTokyo -> こんにちは',
    explanationTitle: 'Unicode Support in Python 3 CSV',
    explanationText:
      'Unlike Python 2 where the csv module only handled 8-bit ASCII bytes, Python 3 csv module natively accepts and returns standard Python unicode str objects. Passing encoding="utf-8" to open() guarantees proper encoding and decoding of any international characters.',
    complexityInfo: 'PCPP 5.3 International character handling',
  },
  {
    id: 'pcpp-s5-fc-060',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'csv.Error exception handling',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What exception is raised by the csv module when formatting or dialect constraints are violated?',
    codeSnippet: `import csv
import io

# csv.Error is the standard exception for all parsing and formatting errors
print("csv.Error inherits from Exception:", issubclass(csv.Error, Exception))

# Example violation: QUOTE_NONE with unescaped delimiter
stream = io.StringIO()
writer = csv.writer(stream, quoting=csv.QUOTE_NONE) # Missing escapechar!
try:
    writer.writerow(["one,with,comma", "second"])
except csv.Error as err:
    print("Caught:", type(err).__name__)`,
    stdoutExpected: 'csv.Error inherits from Exception: True\nCaught: Error',
    explanationTitle: 'csv.Error Exception',
    explanationText:
      'csv.Error is raised by any of the reader, writer, or dialect functions when an internal CSV formatting rule is broken (e.g. attempting to output a delimiter with QUOTE_NONE when no escapechar is configured).',
    complexityInfo: 'PCPP 5.3 CSV exception handling',
  },

  // =========================================================================
  // CHAPTER 5.4: LOGGING ARCHITECTURE: LOGGERS, HANDLERS, FORMATTERS (Cards 61 to 75)
  // =========================================================================
  {
    id: 'pcpp-s5-fc-061',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Why logging is preferred over print() statements in production',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'Why should production applications use the logging module instead of print() statements?',
    codeSnippet: `# print() vs logging module:
# 1. Levels: logging categorizes messages by severity (DEBUG, INFO, WARNING, ERROR, CRITICAL).
# 2. Destinations: logging can simultaneously route to console, files, syslog, email, or network sockets.
# 3. Metadata: automatically attaches timestamps, module names, function names, line numbers, and threads.
# 4. Global Control: log verbosity can be adjusted at runtime without altering application source code.
# 5. Propagation & Hierarchy: modular control across packages and libraries.

import logging
print("Logging provides categorized, routed, and configurable application telemetry")`,
    stdoutExpected: 'Logging provides categorized, routed, and configurable application telemetry',
    explanationTitle: 'Logging vs. print()',
    explanationText:
      'The Python logging module provides thread-safe, structured application telemetry. Unlike print() which writes exclusively to sys.stdout without levels or metadata, logging enables dynamic filtering, multiple output destinations, formatted timestamps, and exception traceback capturing.',
    complexityInfo: 'PCPP 5.4 Enterprise telemetry principles',
  },
  {
    id: 'pcpp-s5-fc-062',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Core components: Loggers, Handlers, Filters, Formatters, and LogRecords',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What are the 5 foundational components of the Python logging architecture and their responsibilities?',
    codeSnippet: `# 1. Logger: The entry-point API used by application code (logger.info()).
# 2. Handler: Sends LogRecords to destinations (StreamHandler -> console, FileHandler -> disk).
# 3. Filter: Provides fine-grained determination for which records to pass through.
# 4. Formatter: Specifies the layout and string structure of the final output (timestamps, levels).
# 5. LogRecord: An object automatically created by the Logger containing all event metadata.

import logging
print("Architecture: Logger -> (Filter) -> Handler -> (Filter) -> Formatter -> Output")`,
    stdoutExpected: 'Architecture: Logger -> (Filter) -> Handler -> (Filter) -> Formatter -> Output',
    explanationTitle: 'Logging Architecture Components',
    explanationText:
      'Loggers expose the recording interface; when a logging call is made, a LogRecord is instantiated. Handlers dispatch LogRecords to destinations (files, consoles, sockets). Formatters convert LogRecords into formatted text. Filters provide custom pass/drop rules.',
    complexityInfo: 'PCPP 5.4 5-part logging architecture model',
  },
  {
    id: 'pcpp-s5-fc-063',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Standard logging levels and their exact numeric values',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'CRITICAL MEMORIZATION: What are the 5 standard logging levels and their exact numeric thresholds?',
    codeSnippet: `import logging

# CRITICAL EXAM CONSTANTS:
levels = [
    ("CRITICAL", logging.CRITICAL),
    ("ERROR", logging.ERROR),
    ("WARNING", logging.WARNING),
    ("INFO", logging.INFO),
    ("DEBUG", logging.DEBUG),
    ("NOTSET", logging.NOTSET),
]

for name, val in levels:
    print(f"{name:<10} = {val}")`,
    stdoutExpected: 'CRITICAL   = 50\nERROR      = 40\nWARNING    = 30\nINFO       = 20\nDEBUG      = 10\nNOTSET     = 0',
    explanationTitle: 'Standard Logging Levels & Numeric Values',
    explanationText:
      'Standard logging levels: CRITICAL (50), ERROR (40), WARNING (30), INFO (20), DEBUG (10), and NOTSET (0). A logger or handler processes a message only if its level is greater than or equal to the configured threshold (e.g. if level is WARNING/30, INFO/20 is ignored).',
    complexityInfo: 'High-frequency exam memorization: 10, 20, 30, 40, 50',
  },
  {
    id: 'pcpp-s5-fc-064',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'The default threshold level and default root logger destination',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What is the default threshold level of the root logger, and where are default messages output?',
    codeSnippet: `import logging
import sys

root = logging.getLogger()

# Default level of root logger is WARNING (numeric 30):
print("Default root level:", root.level) # 30 == WARNING

# Output destination:
# By default, messages are written to sys.stderr (standard error stream)!
# NOT sys.stdout!
print("Default stream is sys.stderr:", True)`,
    stdoutExpected: 'Default root level: 30\nDefault stream is sys.stderr: True',
    explanationTitle: 'Default Root Logger Level & Stream',
    explanationText:
      'By default, unconfigured root loggers filter at the WARNING (30) level (DEBUG and INFO messages are ignored). Furthermore, the default stream is sys.stderr, NOT sys.stdout.',
    complexityInfo: 'Exam trap: default level is WARNING (30); default stream is sys.stderr',
  },
  {
    id: 'pcpp-s5-fc-065',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Quick configuration with logging.basicConfig()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you configure global log level, destination file, and format in one step using basicConfig()?',
    codeSnippet: `import logging
import io

# basicConfig accepts:
# - level: Minimum threshold (e.g. logging.DEBUG)
# - filename / stream: Output destination
# - filemode: 'a' (append, default) or 'w' (overwrite)
# - format: Log string layout template
# - datefmt: Timestamp format string

stream = io.StringIO()
logging.basicConfig(
    stream=stream,
    level=logging.INFO,
    format="%(levelname)s:%(message)s",
    force=True # In Python 3.8+, forces reconfiguration
)

logging.info("System booted successfully")
logging.debug("This is hidden because INFO > DEBUG")

print("Output captured in stream:")
print(stream.getvalue().strip())`,
    stdoutExpected: 'Output captured in stream:\nINFO:System booted successfully',
    explanationTitle: 'logging.basicConfig()',
    explanationText:
      'logging.basicConfig(**kwargs) does the basic configuration for the logging system by creating a StreamHandler with a default Formatter and adding it to the root logger. Common kwargs include level, filename, filemode, format, and datefmt.',
    complexityInfo: 'PCPP 5.4 Basic logging initialization',
  },
  {
    id: 'pcpp-s5-fc-066',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'The basicConfig() one-time execution rule and force=True',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'CRITICAL TRAP: What happens if basicConfig() is called a second time without force=True?',
    codeSnippet: `import logging

# RULE: basicConfig() only executes if the root logger has NO HANDLERS configured!
# If root already has handlers attached, subsequent calls to basicConfig() do NOTHING!

logging.basicConfig(level=logging.WARNING)
# Subsequent call:
logging.basicConfig(level=logging.DEBUG) # SILENTLY IGNORED!

# Root logger level remains WARNING!
print("Root level after second basicConfig:", logging.getLogger().level == logging.WARNING)

# Python 3.8+ introduced force=True to reset existing handlers:
logging.basicConfig(level=logging.DEBUG, force=True)
print("Root level after force=True:", logging.getLogger().level == logging.DEBUG)`,
    stdoutExpected: 'Root level after second basicConfig: True\nRoot level after force=True: True',
    explanationTitle: 'basicConfig() One-Time Execution Rule',
    explanationText:
      'basicConfig() does nothing if the root logger already has handlers configured. Calling it repeatedly in different modules has no effect. In Python 3.8+, passing force=True removes and closes any existing handlers attached to the root logger before configuring.',
    complexityInfo: 'Critical exam trap: basicConfig ignores repeated calls without force=True',
  },
  {
    id: 'pcpp-s5-fc-067',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Obtaining named loggers with logging.getLogger(__name__)',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'Why is logging.getLogger(__name__) the universal best practice for module loggers?',
    codeSnippet: `import logging

# Best Practice:
# logger = logging.getLogger(__name__)

# 1. Namespaces: In a package "myapp.database.pool", __name__ mirrors the module tree!
# 2. Singleton: Multiple calls with the same name return the EXACT SAME instance!

log1 = logging.getLogger("app.db")
log2 = logging.getLogger("app.db")
print("Same logger instance:", log1 is log2)

# Empty name or no argument returns the ROOT logger:
root1 = logging.getLogger()
root2 = logging.getLogger("")
print("Root logger singleton:", root1 is root2)`,
    stdoutExpected: 'Same logger instance: True\nRoot logger singleton: True',
    explanationTitle: 'getLogger(__name__) and Singleton Pattern',
    explanationText:
      'logging.getLogger(name) returns a logger instance with the specified name. Loggers are singletons organized in a dictionary cache; repeated calls with the same name return the identical object. Passing __name__ naturally organizes loggers to match the module hierarchy.',
    complexityInfo: 'PCPP 5.4 Named logger instantiation pattern',
  },
  {
    id: 'pcpp-s5-fc-068',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Logger hierarchy inheritance (dot notation)',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do parent-child relationships work in dot-separated logger names like "app.service.auth"?',
    codeSnippet: `import logging

# Hierarchy is established via dots:
# Root
#  └── app
#       └── app.service
#            └── app.service.auth

parent = logging.getLogger("app")
child = logging.getLogger("app.service.auth")

# By default, a child logger's effective level inherits from its nearest ancestor:
parent.setLevel(logging.ERROR)
print("Child effective level inherited from parent:", child.getEffectiveLevel() == logging.ERROR)

parent.setLevel(logging.INFO)
print("Child effective level updated:", child.getEffectiveLevel() == logging.INFO)`,
    stdoutExpected: 'Child effective level inherited from parent: True\nChild effective level updated: True',
    explanationTitle: 'Logger Hierarchy & getEffectiveLevel()',
    explanationText:
      'Logger names use dot notation (e.g. "a.b.c"). Child loggers inherit their threshold level from their parent if their own level is NOTSET (0). getEffectiveLevel() traverses up the ancestor chain until finding an ancestor with a non-zero level.',
    complexityInfo: 'PCPP 5.4 Hierarchical level inheritance',
  },
  {
    id: 'pcpp-s5-fc-069',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Logger propagation and preventing duplicate log messages (propagate=False)',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What is logger.propagate, and why do log messages sometimes appear duplicated twice in the console?',
    codeSnippet: `import logging

# Propagation:
# By default, logger.propagate is True.
# When a message is logged to a child logger, the record is passed to:
# 1. The child logger's own handlers.
# 2. Handlers of ALL ancestor loggers (parent, grandparent, root)!

child = logging.getLogger("my_module")
print("Default propagate:", child.propagate) # True

# If child has its own StreamHandler AND root has a StreamHandler,
# the message is printed TWICE!

# To prevent passing records to parent handlers:
child.propagate = False
print("Propagation disabled:", child.propagate is False)`,
    stdoutExpected: 'Default propagate: True\nPropagation disabled: True',
    explanationTitle: 'Logger Propagation & Duplicate Logs',
    explanationText:
      'When logger.propagate is True (default), after processing the record through its own handlers, the logger passes the record to its parent handlers. If both the child and an ancestor have attached handlers, messages are output multiple times. Setting logger.propagate = False stops upstream transmission.',
    complexityInfo: 'Exam trap: logger.propagate defaults to True; causes duplicate logs',
  },
  {
    id: 'pcpp-s5-fc-070',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'StreamHandler configuration for console streams',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you create a StreamHandler targeting sys.stdout instead of the default sys.stderr?',
    codeSnippet: `import logging
import sys

# logging.StreamHandler(stream=None)
# If stream is omitted or None, it defaults to sys.stderr!
default_sh = logging.StreamHandler()
print("Default handler stream is sys.stderr:", default_sh.stream is sys.stderr)

# Explicitly routing to sys.stdout:
stdout_sh = logging.StreamHandler(sys.stdout)
stdout_sh.setLevel(logging.INFO)
print("Configured stream is sys.stdout:", stdout_sh.stream is sys.stdout)`,
    stdoutExpected: 'Default handler stream is sys.stderr: True\nConfigured stream is sys.stdout: True',
    explanationTitle: 'StreamHandler Configuration',
    explanationText:
      'logging.StreamHandler(stream) sends log output to streams like sys.stdout, sys.stderr, or any file-like object supporting write() and flush(). If stream is not specified, sys.stderr is used by default.',
    complexityInfo: 'PCPP 5.4 StreamHandler stream target specification',
  },
  {
    id: 'pcpp-s5-fc-071',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'FileHandler configuration: modes and encoding',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you configure a FileHandler to append vs overwrite, and what is its default mode?',
    codeSnippet: `import logging

# logging.FileHandler(filename, mode='a', encoding=None, delay=False)
# 1. mode='a': Appends to existing log file (DEFAULT)
# 2. mode='w': Overwrites / truncates log file upon application startup
# 3. encoding='utf-8': Prevents platform-dependent text encoding errors
# 4. delay=True: Defers opening the file until the first record is actually logged!

print("Default mode for FileHandler is 'a' (append)")`,
    stdoutExpected: "Default mode for FileHandler is 'a' (append)",
    explanationTitle: 'FileHandler Parameters',
    explanationText:
      'logging.FileHandler(filename, mode="a", encoding="utf-8", delay=False) logs messages to a file on disk. The default mode is "a" (append). Setting delay=True defers file creation until the first log record is emitted.',
    complexityInfo: 'PCPP 5.4 FileHandler default mode and delay parameter',
  },
  {
    id: 'pcpp-s5-fc-072',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Attaching multiple handlers to a single logger',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How can a single logger send DEBUG messages to a file while only showing WARNING messages in the console?',
    codeSnippet: `import logging
import io

logger = logging.getLogger("multi_target")
logger.setLevel(logging.DEBUG) # Lowest common denominator threshold

# Handler 1: Console (High threshold: WARNING)
console_stream = io.StringIO()
console_h = logging.StreamHandler(console_stream)
console_h.setLevel(logging.WARNING)

# Handler 2: Audit File (Low threshold: DEBUG)
file_stream = io.StringIO()
file_h = logging.StreamHandler(file_stream)
file_h.setLevel(logging.DEBUG)

logger.addHandler(console_h)
logger.addHandler(file_h)

logger.debug("Minor diagnostic info")
logger.warning("Elevated warning alert")

print("Console captured:", console_stream.getvalue().strip())
print("Audit log captured lines:", len(file_stream.getvalue().strip().splitlines()))`,
    stdoutExpected: 'Console captured: Elevated warning alert\nAudit log captured lines: 2',
    explanationTitle: 'Dual-Handler Multi-Level Routing',
    explanationText:
      'Loggers can have multiple handlers attached via addHandler(). The logger level must be set low enough (e.g. DEBUG) so records pass through to handlers. Each handler then applies its own independent setLevel() filter before formatting and emitting.',
    complexityInfo: 'PCPP 5.4 Enterprise multi-handler logging topology',
  },
  {
    id: 'pcpp-s5-fc-073',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Custom log formatting with logging.Formatter',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you create and attach a custom Formatter to a handler?',
    codeSnippet: `import logging
import io

# logging.Formatter(fmt=None, datefmt=None, style='%')
# style can be '%' (default), '{' (str.format), or '$' (string.Template)

formatter = logging.Formatter(
    fmt="[%(asctime)s] %(levelname)s [%(name)s]: %(message)s",
    datefmt="%H:%M:%S"
)

stream = io.StringIO()
handler = logging.StreamHandler(stream)
handler.setFormatter(formatter)

logger = logging.getLogger("test")
logger.setLevel(logging.INFO)
logger.addHandler(handler)
logger.propagate = False

logger.info("Service initialized")
output = stream.getvalue().strip()
print("Contains bracketed level:", "INFO [test]: Service initialized" in output)`,
    stdoutExpected: 'Contains bracketed level: True',
    explanationTitle: 'logging.Formatter Creation',
    explanationText:
      'Formatters convert LogRecords into formatted strings. Pass fmt and datefmt to logging.Formatter(), then bind to a handler using handler.setFormatter(formatter). Note: Formatters are attached to HANDLERS, not to loggers directly.',
    complexityInfo: 'Exam trap: formatters attach to Handlers, not Loggers',
  },
  {
    id: 'pcpp-s5-fc-074',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Key LogRecord string replacement attributes',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What are the standard LogRecord formatting placeholders (e.g. asctime, name, levelname, lineno)?',
    codeSnippet: `# Standard LogRecord Attributes:
# %(asctime)s      -> Human-readable time when the LogRecord was created
# %(levelname)s    -> Text logging level ('DEBUG', 'INFO', etc.)
# %(levelno)s      -> Numeric logging level (10, 20, etc.)
# %(name)s         -> Logger name used to log the call
# %(message)s      -> The logged message string
# %(pathname)s     -> Full pathname of the source file
# %(filename)s     -> Filename portion of pathname
# %(module)s       -> Module name (filename without .py)
# %(funcName)s     -> Function name containing the logging call
# %(lineno)d       -> Source line number where the call was made
# %(process)d      -> Process ID (PID)
# %(threadName)s   -> Thread name

import logging
print("Format placeholders access LogRecord metadata dictionary")`,
    stdoutExpected: 'Format placeholders access LogRecord metadata dictionary',
    explanationTitle: 'LogRecord Attributes',
    explanationText:
      'When formatting, the formatter interpolates attributes from the LogRecord dictionary. Common placeholders include %(name)s, %(levelname)s, %(asctime)s, %(filename)s, %(lineno)d, and %(message)s.',
    complexityInfo: 'PCPP 5.4 LogRecord format placeholder syntax',
  },
  {
    id: 'pcpp-s5-fc-075',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Formatting timestamps with datefmt and time.strftime() syntax',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you format %(asctime)s using datefmt, and what is the default format?',
    codeSnippet: `import logging

# Default asctime format:
# '2026-09-21 14:32:01,894' (ISO-8601 with comma-separated milliseconds!)

# Custom datefmt uses time.strftime() directives:
# %Y = Year (4-digit), %m = Month (01-12), %d = Day (01-31)
# %H = Hour (00-23), %M = Minute (00-59), %S = Second (00-59)

fmt = logging.Formatter(
    fmt="%(asctime)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
print("datefmt directives follow standard strftime formatting")`,
    stdoutExpected: 'datefmt directives follow standard strftime formatting',
    explanationTitle: 'Timestamp Formatting (datefmt)',
    explanationText:
      'By default, %(asctime)s produces "YYYY-MM-DD HH:MM:SS,mmm" (comma separates milliseconds). Providing a custom datefmt parameter formats the timestamp using standard time.strftime() format specifiers.',
    complexityInfo: 'PCPP 5.4 Date formatting conventions',
  },
];
