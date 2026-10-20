import { Flashcard } from '../types';

export const pcedSection3CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.1: FILE OPERATIONS & DATA INGESTION (PLAIN TEXT & CSV) [Cards 1-20]
  // =========================================================================
  {
    id: 'pced-sec3-001',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'In Python, what is the default mode when calling open("data.txt") without specifying the mode argument?',
    codeSnippet: `with open("data.txt") as f:
    content = f.read()`,
    options: [
      "'w' (write mode, text)",
      "'r' (read-only mode, text)",
      "'a' (append mode, text)",
      "'rb' (read binary mode)"
    ],
    correctAnswer: 1,
    explanation:
      "When the mode parameter is omitted in open(), Python defaults to 'r' (read-only text mode). If the file does not exist, it raises a FileNotFoundError.",
    deepDive:
      "The full signature is open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None). The default mode 'r' expects the target file to exist and opens it for reading decoded Unicode characters according to the default or specified encoding.",
    difficulty: 'beginner',
    tags: ['File I/O', 'open()', 'Default Modes', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-002',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What is the primary operational difference between file modes "w" and "a" in Python?',
    codeSnippet: `# Operation 1
with open("log.txt", "w") as f1:
    f1.write("First")

# Operation 2
with open("log.txt", "a") as f2:
    f2.write("Second")`,
    options: [
      "'w' truncates the file to zero bytes before writing; 'a' appends new data to the end without deleting existing content",
      "'w' can only write integers; 'a' can write arbitrary strings",
      "'w' creates a binary file; 'a' creates a CSV file",
      "'w' opens the file for reading and writing; 'a' opens the file as read-only"
    ],
    correctAnswer: 0,
    explanation:
      "Mode 'w' (write) immediately truncates (erases) existing contents upon opening. Mode 'a' (append) preserves existing content and places the file pointer at the very end of the file.",
    deepDive:
      "If the target file does not exist, both 'w' and 'a' will create a new empty file. However, if the file exists, 'w' wipes it out instantly before any write() method is even invoked. In data ingestion and logging workflows, 'a' is essential for preserving historical records.",
    difficulty: 'beginner',
    tags: ['File Modes', 'write vs append', 'Truncation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-003',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'Why is using the "with" statement (context manager) considered the gold standard for opening data files in Python?',
    codeSnippet: `with open("dataset.csv", "r", encoding="utf-8") as file:
    data = file.readlines()
# file is now automatically closed here`,
    options: [
      "It makes file reading execute ten times faster by using C-level multithreading",
      "It automatically closes the file stream when exiting the block, even if an unhandled exception occurs",
      "It converts CSV rows into pandas DataFrames automatically",
      "It prevents other operating system processes from reading the file indefinitely"
    ],
    correctAnswer: 1,
    explanation:
      "The 'with' statement guarantees proper cleanup by invoking the context manager's __exit__() method, which closes the file descriptor even if an error is raised inside the block.",
    deepDive:
      "Without 'with', failing to call f.close() can lead to resource leaks, unreleased file locks on Windows, and unwritten data trapped in write buffers. The context manager ensures guaranteed deterministic release of OS resources.",
    difficulty: 'beginner',
    tags: ['Context Manager', 'with open', 'Resource Management', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-004',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What does the file method readlines() return when executed on a text file?',
    codeSnippet: `with open("metrics.txt", "r") as f:
    result = f.readlines()`,
    options: [
      "A single string containing the entire file with all newline characters stripped",
      "A list of strings, where each element corresponds to a line including its trailing newline character (\\n)",
      "An iterator that can only be read once using next()",
      "A dictionary mapping line numbers to string lines"
    ],
    correctAnswer: 1,
    explanation:
      "readlines() reads all remaining lines from the file and returns them as a list of strings. Note that trailing newline characters ('\\n') are preserved in each list item except possibly the last line.",
    deepDive:
      "If you have a large file, readlines() loads the entire file into memory at once. In contrast, iterating directly over the file object (for line in f:) streams one line at a time, keeping memory usage constant (O(1)).",
    difficulty: 'intermediate',
    tags: ['readlines()', 'File I/O', 'Memory Handling', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-005',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What exception is raised in Python when attempting to open a non-existent file in "r" mode?',
    codeSnippet: `try:
    with open("missing_dataset.csv", "r") as f:
        data = f.read()
except FileNotFoundError:
    print("Dataset not found!")`,
    options: [
      "IOError exclusively (FileNotFoundError does not exist in Python 3)",
      "FileNotFoundError (which inherits from OSError)",
      "ValueError",
      "KeyError"
    ],
    correctAnswer: 1,
    explanation:
      "Attempting to open a file that does not exist in read mode ('r') raises FileNotFoundError, a built-in subclass of OSError.",
    deepDive:
      "In Python 3.3+, PEP 3151 unified OS-related exceptions under OSError. FileNotFoundError corresponds to errno.ENOENT ('No such file or directory'). In data pipelines, checking with os.path.exists() or catching FileNotFoundError is standard defensive practice.",
    difficulty: 'beginner',
    tags: ['Exceptions', 'FileNotFoundError', 'Defensive Coding', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-006',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'Which method from the os.path module is specifically designed to safely verify whether a dataset file exists on disk before opening it?',
    codeSnippet: `import os

path = "data/raw_sales.csv"
if os.path.exists(path):
    print("File is ready for processing")
else:
    print("File missing!")`,
    options: [
      "os.path.verify(path)",
      "os.path.exists(path)",
      "os.path.isvalid(path)",
      "os.path.check(path)"
    ],
    correctAnswer: 1,
    explanation:
      "os.path.exists(path) returns True if the specified path refers to an existing path or an open file descriptor, and False otherwise.",
    deepDive:
      "os.path.isfile(path) is an even more specific check that returns True only if the path exists AND is a regular file (not a directory). os.path.isdir(path) checks for directories.",
    difficulty: 'beginner',
    tags: ['os.path', 'exists', 'Path Validation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-007',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'When reading a CSV file using Python\'s built-in csv.reader, what data type represents each row returned by the reader iterator?',
    codeSnippet: `import csv

with open("transactions.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(type(row), row)
        break`,
    options: [
      "A dictionary with column names as keys",
      "A list of strings",
      "A tuple of floats",
      "A pandas Series"
    ],
    correctAnswer: 1,
    explanation:
      "csv.reader returns an iterator where each row is represented as a Python list of strings (list[str]). Numeric values are not automatically cast.",
    deepDive:
      "Because csv.reader returns list[str], an entry like '42' is the string '42', not the integer 42. Analysts must explicitly cast fields using int() or float() before performing arithmetic or statistical calculations.",
    difficulty: 'intermediate',
    tags: ['csv.reader', 'Data Types', 'Parsing', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-008',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What is the primary advantage of using csv.DictReader over the standard csv.reader?',
    codeSnippet: `import csv

with open("customers.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["CustomerID"], row["Revenue"])`,
    options: [
      "DictReader automatically converts all numerical strings to float64 types",
      "DictReader maps each row to a dictionary using the first line header values as keys, avoiding fragile numeric index lookups",
      "DictReader encrypts sensitive customer data during reading",
      "DictReader automatically deletes duplicate rows from the file"
    ],
    correctAnswer: 1,
    explanation:
      "csv.DictReader creates an object that maps information read into a dict whose keys are given by the first line (the headers), making field access robust against column reordering.",
    deepDive:
      "If columns are rearranged in the CSV file (e.g. column 2 becomes column 3), csv.reader code using row[2] breaks or accesses the wrong field. csv.DictReader using row['Revenue'] continues to work seamlessly regardless of column order.",
    difficulty: 'intermediate',
    tags: ['csv.DictReader', 'Headers', 'Dictionary Mapping', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-009',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'In many European countries, CSV files use semicolons (;) rather than commas. How do you configure csv.reader to handle this format?',
    codeSnippet: `import csv

with open("europe_sales.csv", "r") as f:
    reader = csv.reader(f, delimiter=';')
    header = next(reader)`,
    options: [
      "Set sep=';' as a keyword argument to open()",
      "Pass delimiter=';' to the csv.reader() function",
      "Set csv.format = 'european'",
      "Call f.replace(',', ';') before passing to csv.reader"
    ],
    correctAnswer: 1,
    explanation:
      "csv.reader takes an optional delimiter parameter, which specifies the 1-character string used to separate fields. For European CSVs, delimiter=';' is standard.",
    deepDive:
      "The delimiter parameter defaults to ','. Common delimiters in data analytics include comma (,), semicolon (;), tab (\\t for TSV files), and pipe (|). csv.reader(f, delimiter='\\t') reads tab-separated values.",
    difficulty: 'intermediate',
    tags: ['csv.reader', 'delimiter', 'TSV', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-010',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'When writing data to a CSV file on Windows using Python 3, why is newline="" required in open()?',
    codeSnippet: `import csv

data = [["Name", "Score"], ["Alice", "95"], ["Bob", "88"]]

with open("output.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(data)`,
    options: [
      "Without newline='', the writer writes an extra blank line between every row on Windows due to carriage return translation",
      "Without newline='', Python raises a ValueError immediately",
      "newline='' forces the file to be saved in JSON format",
      "newline='' automatically compresses the CSV with gzip"
    ],
    correctAnswer: 0,
    explanation:
      "Python's csv module handles its own RFC 4180 line endings (\\r\\n). If newline='' is omitted from open(), Python's universal newline translation adds an extra \\r, causing blank rows between data rows.",
    deepDive:
      "Official Python documentation explicitly mandates: 'If newline='' is not specified, newlines embedded inside quoted fields will not be interpreted correctly, and on platforms that use \\r\\n linendings on write an extra \\r will be added.' Always write open(..., 'w', newline='').",
    difficulty: 'intermediate',
    tags: ['csv.writer', 'newline Parameter', 'Windows Trap', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-011',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'How do you extract the header row from a csv.reader object so that the subsequent loop processes only data rows?',
    codeSnippet: `import csv

with open("data.csv", "r") as f:
    reader = csv.reader(f)
    headers = next(reader)  # What does this line do?
    for row in reader:
        process(row)`,
    options: [
      "reader.pop(0)",
      "headers = next(reader)",
      "reader.skip_header()",
      "reader.header()"
    ],
    correctAnswer: 1,
    explanation:
      "Since csv.reader is an iterator, calling the built-in next(reader) consumes and returns the first row (the header), advancing the iterator to the first data row.",
    deepDive:
      "Calling next(reader) raises StopIteration if the file is completely empty. To guard against empty files defensively, you can provide a default: headers = next(reader, None). If None, the file had no rows.",
    difficulty: 'beginner',
    tags: ['csv.reader', 'next()', 'Header Extraction', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-012',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'When writing structured dictionary records with csv.DictWriter, which method must be called to output the column names to the first row?',
    codeSnippet: `import csv

records = [{"name": "Alice", "age": 28}, {"name": "Bob", "age": 34}]
fields = ["name", "age"]

with open("people.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()  # Writes header row
    writer.writerows(records)`,
    options: [
      "writer.create_columns()",
      "writer.writeheader()",
      "writer.dump_keys()",
      "writer.headers_to_csv()"
    ],
    correctAnswer: 1,
    explanation:
      "writer.writeheader() writes a row with the field names specified in the fieldnames parameter of the DictWriter constructor.",
    deepDive:
      "The fieldnames argument to csv.DictWriter(f, fieldnames=...) is mandatory. Calling writer.writeheader() uses those fieldnames. If you write rows before calling writeheader(), your CSV will lack column headers.",
    difficulty: 'intermediate',
    tags: ['csv.DictWriter', 'writeheader()', 'Export', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-013',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What happens when a field in your data contains a comma, and you write it out using Python\'s csv.writer?',
    codeSnippet: `import csv

row = ["Smith, John", 45, "London"]
with open("test.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(row)`,
    options: [
      "It raises a CsvFormattingError",
      "It splits 'Smith, John' into two separate columns",
      "It automatically encloses the field in double quotes: \"Smith, John\"",
      "It replaces the comma with a period"
    ],
    correctAnswer: 2,
    explanation:
      "csv.writer automatically quotes fields containing the delimiter (comma) using double quotes (by default quotechar='\"'), conforming to RFC 4180.",
    deepDive:
      "The quoting behavior is controlled by the quoting parameter (e.g. csv.QUOTE_MINIMAL by default, which only quotes fields containing delimiter, quotechar, or newlines; csv.QUOTE_ALL quotes every field; csv.QUOTE_NONNUMERIC quotes all string fields).",
    difficulty: 'intermediate',
    tags: ['csv.writer', 'Quoting', 'RFC 4180', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-014',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What is the encoding parameter in open() used for, and why is encoding="utf-8" strongly recommended for data analysis?',
    codeSnippet: `with open("multilingual_data.csv", "r", encoding="utf-8") as f:
    data = f.read()`,
    options: [
      "It compresses the dataset to save disk space",
      "It specifies the character encoding scheme to decode raw bytes into Unicode text, preventing platform-dependent character corruption",
      "It converts all text to uppercase characters",
      "It encrypts the file with an AES-256 cipher"
    ],
    correctAnswer: 1,
    explanation:
      "Character encoding translates raw binary bytes into human-readable characters. Omitting encoding causes Python to use the OS default (e.g., cp1252 on Windows), which often crashes or corrupts accented and international characters.",
    deepDive:
      "UTF-8 is the universal standard for modern web, cloud, and analytical data. Without encoding='utf-8', opening a file containing characters like 'é', 'ñ', or '€' on Windows frequently triggers UnicodeDecodeError: 'charmap' codec can't decode byte...",
    difficulty: 'beginner',
    tags: ['Encoding', 'UTF-8', 'Unicode', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-015',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What does the write() method return in Python 3 when executed on a text file?',
    codeSnippet: `with open("out.txt", "w") as f:
    result = f.write("Data Analytics")
print(result)`,
    options: [
      "True if successful, False otherwise",
      "The number of characters written as an integer",
      "None",
      "The file pointer offset position"
    ],
    correctAnswer: 1,
    explanation:
      "In Python 3, file.write(string) returns the number of characters written to the file as an integer.",
    deepDive:
      "For binary mode ('wb'), write(bytes) returns the number of bytes written. In text mode, write('Data Analytics') returns 14 because 'Data Analytics' has 14 characters.",
    difficulty: 'intermediate',
    tags: ['file.write()', 'Return Value', 'File I/O', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-016',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What is the risk of calling f.read() on a 10 GB dataset file on a laptop with 8 GB of RAM?',
    codeSnippet: `with open("massive_dataset.csv", "r") as f:
    content = f.read()  # Potential memory crash!`,
    options: [
      "The file will be permanently deleted from the hard drive",
      "Python will raise a MemoryError or the operating system will terminate the process due to out-of-memory (OOM) exhaustion",
      "Python will automatically split the file across available CPU cores",
      "The read operation will convert the file to a generator automatically"
    ],
    correctAnswer: 1,
    explanation:
      "f.read() attempts to load the entire file contents into memory at once as a single Python str object. If the file size exceeds available memory, Python raises MemoryError.",
    deepDive:
      "For large files, analysts must stream data line-by-line (for line in f:) or process chunks using f.read(chunk_size), ensuring that only a small, predictable buffer resides in RAM at any given moment.",
    difficulty: 'beginner',
    tags: ['MemoryError', 'Streaming', 'Big Data Trap', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-017',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'Which method resets the file read pointer back to the very beginning of an open file?',
    codeSnippet: `with open("sample.txt", "r") as f:
    text1 = f.read()
    f.seek(0)  # Reset pointer to start
    text2 = f.read()`,
    options: [
      "f.reset()",
      "f.rewind()",
      "f.seek(0)",
      "f.start()"
    ],
    correctAnswer: 2,
    explanation:
      "f.seek(offset) sets the file's current position to the given byte offset. f.seek(0) resets the pointer back to byte 0 (the start of the file).",
    deepDive:
      "After calling f.read(), the pointer is at the end of the file. Any subsequent f.read() will return an empty string ('') unless you reposition the pointer with f.seek(0) or re-open the file. f.tell() returns the current position.",
    difficulty: 'intermediate',
    tags: ['seek()', 'tell()', 'File Pointer', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-018',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'How do you safely join file directory paths in a cross-platform manner that works on both Windows and Unix/Linux?',
    codeSnippet: `import os

folder = "data_exports"
filename = "report_2024.csv"
full_path = os.path.join(folder, filename)`,
    options: [
      'full_path = folder + "\\\\" + filename',
      'full_path = folder + "/" + filename',
      'full_path = os.path.join(folder, filename)',
      'full_path = os.combine(folder, filename)'
    ],
    correctAnswer: 2,
    explanation:
      "os.path.join() concatenates path components using the operating system's specific directory separator ('\\\\' on Windows, '/' on Linux/macOS).",
    deepDive:
      "Hardcoding slashes like folder + '/' + filename creates platform incompatibility bugs and breaks on Windows UNC network paths. In modern Python, pathlib.Path(folder) / filename provides an object-oriented alternative.",
    difficulty: 'beginner',
    tags: ['os.path.join', 'Cross-Platform', 'Portability', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-019',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'What is the purpose of the f.flush() method during file writing operations?',
    codeSnippet: `with open("realtime_stream.log", "w") as f:
    f.write("Sensor alert triggered!\\n")
    f.flush()  # Forces immediate write to disk`,
    options: [
      "It deletes all contents written so far",
      "It forces the internal write buffer to flush its data out to the operating system file immediately",
      "It closes the file stream and deletes the variable reference",
      "It compresses the file with DEFLATE algorithm"
    ],
    correctAnswer: 1,
    explanation:
      "Operating systems buffer I/O operations in memory for efficiency. f.flush() flushes the internal write buffer, ensuring data is written to disk without waiting for the buffer to fill or the file to close.",
    deepDive:
      "When logging sensor data or live transactions, if a program crashes before the file buffer is written, the buffered data is lost. Calling flush() ensures critical log entries are immediately committed to disk.",
    difficulty: 'intermediate',
    tags: ['flush()', 'Buffering', 'Data Persistence', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-020',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pced',
    question: 'How does iterating directly over a file object compare with calling f.readlines() when parsing a dataset?',
    codeSnippet: `# Approach A
with open("data.csv") as f:
    for line in f:
        process(line)

# Approach B
with open("data.csv") as f:
    for line in f.readlines():
        process(line)`,
    options: [
      "Approach A and Approach B are identical in internal memory consumption",
      "Approach A streams line by line (O(1) memory), whereas Approach B loads all lines into a Python list at once (O(N) memory)",
      "Approach A is only supported on Linux; Approach B is for Windows",
      "Approach B is required when parsing CSV data"
    ],
    correctAnswer: 1,
    explanation:
      "Approach A treats the file object as an iterator, reading one line at a time on demand. Approach B reads all lines into memory as a list before starting the loop.",
    deepDive:
      "For a 5 GB CSV file, Approach A consumes only a few kilobytes of RAM to hold the current line buffer. Approach B consumes several gigabytes of RAM to store all lines simultaneously, frequently crashing entry-level machines.",
    difficulty: 'intermediate',
    tags: ['Iterators', 'readlines()', 'Memory Efficiency', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 3.2: DATA CLEANSING: MISSING VALUES, DUPLICATES & TYPES [Cards 21-35]
  // =========================================================================
  {
    id: 'pced-sec3-021',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'In pure Python data processing, what sentinel value typically represents a missing or absent value in a structured record?',
    codeSnippet: `record = {"user_id": 101, "age": None, "income": 45000.0}`,
    options: [
      "0",
      "-1",
      "None",
      "False"
    ],
    correctAnswer: 2,
    explanation:
      "In standard Python, the singleton None represents the absence of a value or missing data. 0 and False are valid data values, not absence indicators.",
    deepDive:
      "Using 0 to indicate missing values is dangerous because 0 is a legitimate measurement (e.g. 0 degrees temperature or 0 errors). In pandas and NumPy, np.nan (float NaN) is commonly used for missing floating-point numbers.",
    difficulty: 'beginner',
    tags: ['None', 'Missing Values', 'Data Cleansing', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-022',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you check if a variable "val" is missing (None) in Python following PEP 8 best practices?',
    codeSnippet: `if val is None:
    print("Value is missing")`,
    options: [
      "if val == None:",
      "if val is None:",
      "if val.isna():",
      "if val == 'None':"
    ],
    correctAnswer: 1,
    explanation:
      "PEP 8 states: 'Comparisons to singletons like None should always be done with is or is not, never the equality operators.'",
    deepDive:
      "'is' checks object identity (whether both operands point to the exact same object in memory). '==' invokes __eq__(), which can be overridden by custom classes to return True even when the object is not None.",
    difficulty: 'beginner',
    tags: ['PEP 8', 'is None', 'Identity vs Equality', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-023',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'What is the key difference between "listwise deletion" (dropping rows) and "imputation" when cleaning missing data?',
    codeSnippet: `# Raw dataset with missing age:
# [["Alice", 25], ["Bob", None], ["Charlie", 30]]`,
    options: [
      "Listwise deletion replaces missing values with zero; imputation deletes the entire column",
      "Listwise deletion removes any observation with missing values; imputation substitutes missing values with estimated values (e.g., mean, median, mode)",
      "Listwise deletion is only used for strings; imputation is only for integers",
      "Listwise deletion doubles the sample size; imputation halves the sample size"
    ],
    correctAnswer: 1,
    explanation:
      "Listwise deletion completely discards any row with missing fields. Imputation preserves the row by filling missing fields with calculated replacements (such as mean, median, or forward fill).",
    deepDive:
      "Listwise deletion is simple but causes severe sample size reduction and potential statistical bias if data is Not Missing at Random (NMAR). Imputation retains observation count but can artificially deflate variance if not performed carefully.",
    difficulty: 'beginner',
    tags: ['Listwise Deletion', 'Imputation', 'Data Preparation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-024',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'When imputing missing values in a numeric feature with extreme outliers (e.g. household income), which measure of central tendency is preferred: mean or median?',
    codeSnippet: `incomes = [25000, 28000, 31000, 29000, 15000000]  # One billionaire outlier
# Mean = 3,022,600 (heavily distorted)
# Median = 29,000 (robust)`,
    options: [
      "Mean, because it takes into account all values in the dataset mathematically",
      "Median, because it is resistant (robust) to extreme outliers and skewed distributions",
      "Mode, because income values are always integers",
      "Standard deviation, because it measures dispersion"
    ],
    correctAnswer: 1,
    explanation:
      "The median represents the 50th percentile (middle value) and is unaffected by extreme outliers. In skewed distributions (like income or house prices), median imputation avoids distorting typical values.",
    deepDive:
      "The mean is sensitive to every single value in the dataset; a single extreme outlier can pull the mean arbitrarily high or low. For symmetric, normally distributed data without outliers, mean imputation is standard.",
    difficulty: 'intermediate',
    tags: ['Imputation', 'Mean vs Median', 'Outliers', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-025',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you filter out rows where a specific column has empty strings or None using a list comprehension?',
    codeSnippet: `data = [
    {"name": "Alice", "score": "95"},
    {"name": "Bob", "score": ""},
    {"name": "Charlie", "score": None},
    {"name": "David", "score": "88"}
]

clean_data = [row for row in data if row["score"] not in (None, "")]`,
    options: [
      "clean_data = [row for row in data if row['score'] is not None and row['score'] != '']",
      "clean_data = data.drop_null()",
      "clean_data = [row for row in data if row['score'] == True]",
      "clean_data = filter(data, None)"
    ],
    correctAnswer: 0,
    explanation:
      "Checking that row['score'] is not None and row['score'] != '' (or checking row['score'] not in (None, '')) filters out both NoneType and empty string records.",
    deepDive:
      "In raw CSV imports, missing numeric fields are read as empty strings (''), not None! A common bug in data cleaning is checking only if row['score'] is not None, which fails to catch empty strings ('').",
    difficulty: 'intermediate',
    tags: ['Data Cleaning', 'Filtering', 'Empty String Trap', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-026',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How can you eliminate exact duplicate records from a list of tuples while preserving the unique values?',
    codeSnippet: `transactions = [
    (101, "Widget", 19.99),
    (102, "Gadget", 29.99),
    (101, "Widget", 19.99)  # Exact duplicate
]

unique_transactions = list(set(transactions))`,
    options: [
      "Convert the list of tuples to a set, then back to a list: list(set(transactions))",
      "Call transactions.deduplicate()",
      "Use transactions.unique()",
      "Sort the list with transactions.sort(unique=True)"
    ],
    correctAnswer: 0,
    explanation:
      "Sets in Python cannot contain duplicate elements. Since tuples are immutable and hashable, converting a list of tuples to a set removes duplicates in O(N) average time.",
    deepDive:
      "Note that set() does not preserve the original order of elements. If original insertion order must be preserved, use list(dict.fromkeys(transactions)) in Python 3.7+.",
    difficulty: 'intermediate',
    tags: ['Deduplication', 'set()', 'Tuples', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-027',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'Why does attempting to remove duplicates using list(set(records)) fail when "records" is a list of dictionaries?',
    codeSnippet: `records = [
    {"id": 1, "name": "Alice"},
    {"id": 1, "name": "Alice"}
]
# This line fails:
unique = set(records)`,
    options: [
      "Dictionaries cannot be stored in lists",
      "Dictionaries are mutable and therefore unhashable, raising TypeError: unhashable type: 'dict'",
      "set() only accepts numeric integers",
      "Python limits sets to a maximum of 10 elements"
    ],
    correctAnswer: 1,
    explanation:
      "Python sets require their elements to be hashable (implementing __hash__()). Because dictionaries are mutable, their hash is not fixed, raising TypeError: unhashable type: 'dict'.",
    deepDive:
      "To deduplicate dictionaries by a unique key (e.g. 'id'), iterate through records while keeping a seen set of IDs: seen = set(); unique = [d for d in records if d['id'] not in seen and not seen.add(d['id'])].",
    difficulty: 'intermediate',
    tags: ['Unhashable Type', 'dict in set', 'TypeError Trap', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-028',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you safely deduplicate a list of dictionaries based on a specific key ("id") while preserving order?',
    codeSnippet: `records = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 1, "name": "Alice (Duplicate)"}
]

seen_ids = set()
unique_records = []
for r in records:
    if r["id"] not in seen_ids:
        seen_ids.add(r["id"])
        unique_records.append(r)`,
    options: [
      "unique_records = list(set(records))",
      "Track seen IDs in a set, appending to unique_records only when r['id'] has not been seen",
      "unique_records = records.unique('id')",
      "unique_records = records.drop_duplicates()"
    ],
    correctAnswer: 1,
    explanation:
      "Using a set (seen_ids) provides O(1) membership lookup to verify if an ID has already been recorded, while unique_records preserves the original encounter order.",
    deepDive:
      "This O(N) pattern is the canonical Python idiom for deduplicating arbitrary objects by an identifier key without importing external third-party libraries.",
    difficulty: 'intermediate',
    tags: ['Deduplication', 'Set Lookup', 'Key Uniqueness', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-029',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'When reading raw CSV files, why is explicit type casting necessary before performing mathematical calculations on numeric columns?',
    codeSnippet: `val1 = "10"
val2 = "20"
total = val1 + val2  # What is total?`,
    options: [
      "Because Python will automatically convert '10' + '20' to 30",
      "Because adding two string values performs string concatenation, resulting in '1020' instead of 30",
      "Because Python throws a SyntaxError when adding strings",
      "Because strings cannot be written back to a CSV file"
    ],
    correctAnswer: 1,
    explanation:
      "Since CSV readers produce strings, '10' + '20' evaluates to '1020'. Explicitly casting with int(val1) + int(val2) is required to obtain the numerical sum 30.",
    deepDive:
      "This is one of the most common beginner traps in data analytics. Without type conversion, subsequent statistical operations (like calculating an average) will concatenate strings or raise TypeError when dividing by row count.",
    difficulty: 'beginner',
    tags: ['Type Casting', 'Concatenation Trap', 'Data Cleaning', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-030',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you safely convert a string column to a float when some values may contain malformed entries (e.g., "N/A", "error", or missing values)?',
    codeSnippet: `def safe_to_float(val, default=None):
    try:
        return float(val)
    except (ValueError, TypeError):
        return default`,
    options: [
      "Use float(val) directly without error handling",
      "Wrap the float(val) conversion in a try-except block catching ValueError and TypeError",
      "Call val.to_float()",
      "Use int(val, error='ignore')"
    ],
    correctAnswer: 1,
    explanation:
      "Attempting float('N/A') raises ValueError. Wrapping the conversion in a try/except (ValueError, TypeError) block allows replacing invalid inputs with a clean fallback (like None or 0.0).",
    deepDive:
      "In production data pipelines, dirty datasets contain corrupted entries, typos, and unexpected text markers. Writing helper functions like safe_to_float() prevents the entire pipeline from crashing on row 50,000 of a 100,000 row file.",
    difficulty: 'intermediate',
    tags: ['try-except', 'safe_to_float', 'Data Validation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-031',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'What is a "data validation check" and why should it precede exploratory data analysis?',
    codeSnippet: `for row in dataset:
    assert row["age"] >= 0, f"Invalid age found: {row['age']}"
    assert 0 <= row["score"] <= 100, f"Score out of bounds: {row['score']}"`,
    options: [
      "A check that verifies your computer has an active internet connection",
      "A rule-based check verifying that incoming data conforms to expected constraints (types, valid ranges, mandatory fields) before analysis",
      "An automated process that trains a neural network on the dataset",
      "A process that encrypts column headers with SHA-256"
    ],
    correctAnswer: 1,
    explanation:
      "Data validation verifies that data satisfies business rules and logical constraints (e.g., age cannot be negative, test scores must be between 0 and 100) before conclusions are drawn.",
    deepDive:
      "Garbage in, garbage out (GIGO): If a dataset contains negative ages or dates in the future (e.g. year 2099 for a birth date), computing statistical metrics on unvalidated data produces misleading insights.",
    difficulty: 'beginner',
    tags: ['Data Validation', 'Range Checks', 'Data Integrity', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-032',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you detect and clean whitespace anomalies in string fields during data ingestion?',
    codeSnippet: `raw_city = "  San Francisco \\n\\t"
clean_city = raw_city.strip()
print(repr(clean_city))  # Output: 'San Francisco'`,
    options: [
      "clean_city = raw_city.clean()",
      "clean_city = raw_city.strip()",
      "clean_city = raw_city.delete_spaces()",
      "clean_city = raw_city.trim_all()"
    ],
    correctAnswer: 1,
    explanation:
      "The strip() method removes all leading and trailing whitespace characters (including spaces, tabs \\t, and newlines \\n) from a string.",
    deepDive:
      "Uncleaned whitespace causes matching failures: 'San Francisco' != 'San Francisco '. In grouping and categorical aggregations, these would be treated as two completely distinct categories without .strip().",
    difficulty: 'beginner',
    tags: ['strip()', 'Whitespace', 'String Cleaning', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-033',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'What is the purpose of mode imputation, and for which data type is it most frequently applied?',
    codeSnippet: `from collections import Counter

categories = ["Laptop", "Phone", "Laptop", None, "Tablet", "Laptop"]
# Mode = "Laptop" (most frequent item)`,
    options: [
      "Mode imputation replaces missing values with the most frequently occurring value; it is primarily used for categorical (qualitative) data",
      "Mode imputation calculates the arithmetic average of continuous variables",
      "Mode imputation removes all rows that contain missing values",
      "Mode imputation is only used for time-series timestamps"
    ],
    correctAnswer: 0,
    explanation:
      "The mode is the most frequent value. Because you cannot calculate a mathematical mean or median for categorical text (e.g. 'Laptop', 'Phone'), mode imputation is standard for nominal/categorical data.",
    deepDive:
      "Using collections.Counter(non_null_values).most_common(1)[0][0] easily extracts the mode in standard Python. For multimodal distributions (where two categories tie for top frequency), analysts can choose either or flag as ambiguous.",
    difficulty: 'intermediate',
    tags: ['Mode Imputation', 'Categorical Data', 'Counter', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-034',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'What is the difference between float("nan") and None in Python when checking for missing data?',
    codeSnippet: `import math

val1 = None
val2 = float("nan")

print(val1 is None)        # True
print(val2 is None)        # False
print(val2 == val2)        # False!
print(math.isnan(val2))    # True`,
    options: [
      "They are completely interchangeable and test identical with '=='",
      "None is a built-in singleton representing absence; float('nan') is a numeric floating-point value representing 'Not a Number' that does not equal itself",
      "float('nan') can only be used with integers",
      "None raises an error if used in conditional statements"
    ],
    correctAnswer: 1,
    explanation:
      "IEEE 754 specifies that NaN != NaN. Thus, float('nan') == float('nan') is False! To detect NaN, you must use math.isnan() or np.isnan(), whereas None is checked with 'is None'.",
    deepDive:
      "This is a massive trap in data science: if val == float('nan') will NEVER evaluate to True. In pandas and NumPy, missing numeric values default to np.nan (float), whereas pure Python uses None.",
    difficulty: 'intermediate',
    tags: ['NaN Trap', 'math.isnan()', 'IEEE 754', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-035',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pced',
    question: 'How do you replace all None values in a numeric list with the calculated mean of the available non-missing numbers?',
    codeSnippet: `scores = [80, 90, None, 70, None, 100]

valid = [x for x in scores if x is not None]
mean_val = sum(valid) / len(valid)  # 340 / 4 = 85.0
imputed = [x if x is not None else mean_val for x in scores]`,
    options: [
      "imputed = scores.fillna(scores.mean())",
      "Calculate mean from valid numbers, then use a ternary comprehension: [x if x is not None else mean_val for x in scores]",
      "imputed = [x + mean_val for x in scores]",
      "imputed = replace(scores, None, mean)"
    ],
    correctAnswer: 1,
    explanation:
      "First compute mean_val = sum(valid) / len(valid) ignoring None, then use a list comprehension with a conditional ternary expression (x if x is not None else mean_val).",
    deepDive:
      "Attempting sum(scores) directly raises TypeError: unsupported operand type(s) for +: 'int' and 'NoneType'. Filtering valid non-null elements first is essential in base Python.",
    difficulty: 'intermediate',
    tags: ['Mean Imputation', 'Ternary Comprehension', 'Data Cleaning', 'PCED-30-02']
  }
];
