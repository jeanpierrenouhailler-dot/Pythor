import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 5: MISCELLANEOUS (Part 3: Cards 71 to 100)
 * - Chapter 5.4: File Streams & Text I/O Part 2 (Cards 71-80)
 * - Chapter 5.5: Binary I/O, bytearray, errno & OS Operations (Cards 81-100)
 */
export const section5CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.4 (CONTINUED): FILE STREAMS & TEXT I/O PART 2 (Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcap-s5-fc-071',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'f.readline() Mechanics and Newline Preservation',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does `f.readline()` return and does it retain the trailing newline character `\\n`?',
    codeSnippet: `import io
f = io.StringIO("Line 1\\nLine 2\\n")
line1 = f.readline()
line2 = f.readline()
print(repr(line1), repr(line2))`,
    stdoutExpected: "'Line 1\\n' 'Line 2\\n'",
    explanationTitle: 'readline() Retains Trailing \\n',
    explanationText:
      '`f.readline()` reads characters up to and including the next newline character `\\n`. The newline is preserved at the end of the returned string (except possibly on the last line of a file without a trailing newline).',
    complexityInfo: 'Newline retention in text streams',
  },
  {
    id: 'pcap-s5-fc-072',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'f.readlines() Loading Entire File into Memory',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does `f.readlines()` return and what is its memory implication?',
    codeSnippet: `import io
f = io.StringIO("alpha\\nbeta\\ngamma")
lines = f.readlines()
print(type(lines).__name__)
print(lines)`,
    stdoutExpected: `list
['alpha\\n', 'beta\\n', 'gamma']`,
    explanationTitle: 'readlines() Returns Full List of Lines',
    explanationText:
      '`f.readlines()` reads all remaining lines until EOF and returns them as a Python `list` of strings. Because it loads the entire file into memory at once, it is less suitable for very large files than iterating over `f`.',
    complexityInfo: 'In-memory list generation from streams',
  },
  {
    id: 'pcap-s5-fc-073',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Iterating Directly Over File Object (Stream Iterator)',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'Why is `for line in f:` the most Pythonic and memory-efficient way to read a file line-by-line?',
    codeSnippet: `import io
f = io.StringIO("item1\\nitem2\\n")
# Direct iteration over the file object
clean = [line.strip() for line in f]
print(clean)`,
    stdoutExpected: "['item1', 'item2']",
    explanationTitle: 'File Object as an Iterable Stream',
    explanationText:
      'A file object implements Python\'s iterator protocol. Iterating with `for line in f:` lazily buffers and yields one line at a time on demand without loading the full file into memory, providing O(1) memory overhead.',
    complexityInfo: 'Stream iteration protocol optimization',
  },
  {
    id: 'pcap-s5-fc-074',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Return Value of f.write()',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does `f.write(string)` return in Python 3?',
    codeSnippet: `import io
f = io.StringIO()
chars_written = f.write("PCAP-31-03")
print(chars_written)`,
    stdoutExpected: '10',
    explanationTitle: 'write() Returns Count of Characters Written',
    explanationText:
      'In Python 3, calling `f.write(s)` on a text stream returns the number of characters written as an integer. On binary streams, it returns the number of bytes written.',
    complexityInfo: 'Integer return value of stream write',
  },
  {
    id: 'pcap-s5-fc-075',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'The f.writelines() Gotcha: No Automatic Newlines',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'Does `f.writelines(iterable)` automatically insert newline characters between items?',
    codeSnippet: `import io
f = io.StringIO()
f.writelines(["one", "two", "three"])
f.seek(0)
print(repr(f.read()))`,
    stdoutExpected: "'onetwothree'",
    explanationTitle: 'writelines() Does NOT Add Newlines',
    explanationText:
      'A classic PCAP trap! Despite its plural name, `f.writelines()` does NOT append `\\n` to strings in the sequence. It writes each string exactly as-is. If you want separate lines, you must include `\\n` in each element yourself.',
    complexityInfo: 'Common PCAP misconception on writelines',
  },
  {
    id: 'pcap-s5-fc-076',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Stream Buffer Flushing with f.flush()',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does `f.flush()` do and when is it called automatically?',
    codeSnippet: `# f.write("critical log entry")
# f.flush()  # Forces immediate write to physical disk`,
    stdoutExpected: 'Pushes internal buffer contents to OS/disk storage',
    explanationTitle: 'Flushing the Internal Stream Buffer',
    explanationText:
      'Python buffers I/O operations in memory for performance. `f.flush()` clears the internal write buffer and pushes pending data immediately to the underlying storage without closing the file. `f.close()` calls `flush()` automatically.',
    complexityInfo: 'I/O buffer synchronization semantics',
  },
  {
    id: 'pcap-s5-fc-077',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Reporting Position with f.tell()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does `f.tell()` return in a file stream?',
    codeSnippet: `import io
f = io.StringIO("0123456789")
print(f.tell())
f.read(4)
print(f.tell())`,
    stdoutExpected: `0
4`,
    explanationTitle: 'f.tell() Reports Current Stream Pointer',
    explanationText:
      '`f.tell()` returns an integer giving the file object\'s current position in the stream (offset from the beginning of the file).',
    complexityInfo: 'Stream position introspection',
  },
  {
    id: 'pcap-s5-fc-078',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Stream Repositioning with f.seek() in Text Mode',
    category: 'T4: Syntax & Traps',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What restriction applies to `f.seek(offset, whence)` when used on text mode streams?',
    codeSnippet: `import io
f = io.StringIO("hello world")
# In text mode, whence=0 (beginning) with offset=0 is valid:
f.read(5)
f.seek(0)
print(f.read(5))`,
    stdoutExpected: 'hello',
    explanationTitle: 'Text Mode seek() Restrictions',
    explanationText:
      'In Python text mode streams, only seeks relative to the beginning (`whence=0`) with offsets returned by `tell()` or offset `0` are allowed. Seeking from current position (`whence=1`) or end (`whence=2`) with arbitrary non-zero offsets raises `io.UnsupportedOperation`.',
    complexityInfo: 'Text vs binary seek capability constraint',
  },
  {
    id: 'pcap-s5-fc-079',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Standard Pre-Opened Streams: sys.stdin, stdout, stderr',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What three standard I/O streams are provided by the `sys` module upon interpreter launch?',
    codeSnippet: `import sys
print(type(sys.stdin).__name__)
print(type(sys.stdout).__name__)
print(type(sys.stderr).__name__)`,
    stdoutExpected: `TextIOWrapper
TextIOWrapper
TextIOWrapper`,
    explanationTitle: 'The Trinity of Standard Streams',
    explanationText:
      '`sys.stdin` (standard input), `sys.stdout` (standard output), and `sys.stderr` (standard error for diagnostics/errors) are pre-opened file-like `TextIOWrapper` stream objects initialized at startup.',
    complexityInfo: 'sys module standard stream instances',
  },
  {
    id: 'pcap-s5-fc-080',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Redirecting Output via print(..., file=...)',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you redirect `print()` output to a specific file or stream instead of standard output?',
    codeSnippet: `import io
buffer = io.StringIO()
print("Redirected text", file=buffer)
print(repr(buffer.getvalue()))`,
    stdoutExpected: "'Redirected text\\n'",
    explanationTitle: 'The file Parameter of print()',
    explanationText:
      'The `file` argument of the `print()` function defaults to `sys.stdout`. Passing any object with a `write(str)` method redirects the printed string (including default newline) directly to that stream.',
    complexityInfo: 'print() keyword arguments and stream redirection',
  },

  // =========================================================================
  // CHAPTER 5.5: BINARY I/O, BYTEARRAY, ERRNO & OS OPERATIONS (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcap-s5-fc-081',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Binary Mode Flag \'b\' and Bytes Objects',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What type of object is read from and written to a file opened with binary mode flag `\'b\'`?',
    codeSnippet: `import io
b_stream = io.BytesIO(b"\\x01\\x02\\x03")
data = b_stream.read()
print(type(data).__name__)
print(data[0])`,
    stdoutExpected: `bytes
1`,
    explanationTitle: 'Binary Mode Produces bytes Objects',
    explanationText:
      'In binary mode (`\'rb\'`, `\'wb\'`, etc.), data is not decoded into text. Reads return `bytes` objects, which are immutable sequences of integers in the range 0 to 255.',
    complexityInfo: 'Binary mode types and byte indexing',
  },
  {
    id: 'pcap-s5-fc-082',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'bytes vs bytearray Mutability',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What is the fundamental difference between `bytes` and `bytearray` in Python?',
    codeSnippet: `b = b"ABC"
ba = bytearray(b"ABC")
# b[0] = 68   # Raises TypeError
ba[0] = 68    # Valid mutation!
print(ba.decode())`,
    stdoutExpected: 'DBC',
    explanationTitle: 'bytearray is Mutable; bytes is Immutable',
    explanationText:
      '`bytes` objects are strictly immutable like strings. `bytearray` objects are mutable sequences of byte integers (0–255), allowing in-place assignment, appending, slicing, and extension.',
    complexityInfo: 'Mutability distinction core to PCAP domain 5',
  },
  {
    id: 'pcap-s5-fc-083',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Initializing bytearray with an Integer',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What does passing an integer `n` to `bytearray(n)` construct?',
    codeSnippet: `ba = bytearray(4)
print(len(ba))
print(list(ba))`,
    stdoutExpected: `4
[0, 0, 0, 0]`,
    explanationTitle: 'Zero-Initialized bytearray of Given Size',
    explanationText:
      'Passing an integer `n` to `bytearray(n)` creates a bytearray of size `n` initialized with zero bytes (`0x00`). It does NOT create an array with the single element `n`.',
    complexityInfo: 'Constructor signature trap for integer arguments',
  },
  {
    id: 'pcap-s5-fc-084',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Allowed Range for bytearray Elements',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What range of integers can be assigned to a `bytearray` index, and what error occurs if violated?',
    codeSnippet: `ba = bytearray(2)
ba[0] = 255  # Valid: 0 <= int <= 255
try:
    ba[1] = 256  # Out of range!
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'ValueError',
    explanationTitle: 'Byte Integer Range: 0 to 255 (Inclusive)',
    explanationText:
      'Each byte element must be an integer between 0 and 255 (unsigned 8-bit byte). Assigning an integer < 0 or > 255 raises a `ValueError: byte must be in range(0, 256)`.',
    complexityInfo: '8-bit value range constraint and ValueError',
  },
  {
    id: 'pcap-s5-fc-085',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Appending to a bytearray',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you append a single byte to a `bytearray`?',
    codeSnippet: `ba = bytearray(b"PC")
ba.append(65)  # ASCII value for 'A'
ba.append(80)  # ASCII value for 'P'
print(ba.decode())`,
    stdoutExpected: 'PCAP',
    explanationTitle: 'Appending Integers to bytearray',
    explanationText:
      '`bytearray.append(x)` takes an integer in range 0–255 and adds it to the end of the byte sequence. 65 is \'A\' and 80 is \'P\'.',
    complexityInfo: 'In-place bytearray growth methods',
  },
  {
    id: 'pcap-s5-fc-086',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Reading Binary Data with readinto()',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How does `f.readinto(buffer)` work and what does it return?',
    codeSnippet: `import io
source = io.BytesIO(b"Hello World")
buf = bytearray(5)
bytes_read = source.readinto(buf)
print(bytes_read)
print(buf.decode())`,
    stdoutExpected: `5
Hello`,
    explanationTitle: 'Zero-Allocation I/O with readinto()',
    explanationText:
      '`f.readinto(byte_array)` reads bytes directly into a pre-allocated writable buffer object (like `bytearray`), avoiding new memory allocation. It returns the number of bytes actually read as an integer.',
    complexityInfo: 'Buffer protocol readinto execution',
  },
  {
    id: 'pcap-s5-fc-087',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Binary Seek with whence Parameters',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What do `whence` values 0, 1, and 2 represent in binary `f.seek(offset, whence)`?',
    codeSnippet: `import io
f = io.BytesIO(b"ABCDEFGHIJ")
f.seek(3, 0)   # 0 = SEEK_SET (from beginning)
print(f.read(1).decode(), end=" ")
f.seek(2, 1)   # 1 = SEEK_CUR (from current position)
print(f.read(1).decode(), end=" ")
f.seek(-2, 2)  # 2 = SEEK_END (from end of stream)
print(f.read(1).decode())`,
    stdoutExpected: 'D G I',
    explanationTitle: 'Binary seek whence Modes (0, 1, 2)',
    explanationText:
      '`whence=0` sets offset from start. `whence=1` sets offset relative to current position. `whence=2` sets offset relative to end. Seeking 3 from start lands at \'D\'. Reading advances to index 4, then seeking 2 from current lands at index 6 (\'G\'). Seeking -2 from end lands at index 8 (\'I\').',
    complexityInfo: 'Binary seek relative positioning logic',
  },
  {
    id: 'pcap-s5-fc-088',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'The os.name Attribute',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What does `os.name` return and what are its standard platform string values?',
    codeSnippet: `import os
print(type(os.name).__name__)
# On POSIX (Linux, macOS) -> 'posix'
# On Windows -> 'nt'`,
    stdoutExpected: 'str (\'posix\' on Linux/macOS, \'nt\' on Windows)',
    explanationTitle: 'Platform OS Identification',
    explanationText:
      '`os.name` gives the name of the operating system dependent module imported. Common values are `\'posix\'` (Linux, macOS, Unix) and `\'nt\'` (Windows NT/10/11).',
    complexityInfo: 'Operating system environment identifier',
  },
  {
    id: 'pcap-s5-fc-089',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Working Directory: os.getcwd() and os.chdir()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'Which functions in the `os` module get and set the current working directory?',
    codeSnippet: `import os
cwd = os.getcwd()
print(isinstance(cwd, str))
# os.chdir("subdir") changes active directory`,
    stdoutExpected: 'True',
    explanationTitle: 'Current Working Directory Management',
    explanationText:
      '`os.getcwd()` returns the Current Working Directory as a string. `os.chdir(path)` changes the current working directory to `path`. If `path` does not exist, `FileNotFoundError` is raised.',
    complexityInfo: 'Path navigation functions in the os module',
  },
  {
    id: 'pcap-s5-fc-090',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Creating Directories: os.mkdir() vs os.makedirs()',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What is the distinction between `os.mkdir()` and `os.makedirs()`?',
    codeSnippet: `# os.mkdir("a/b/c")    # Fails if "a" or "b" do not exist!
# os.makedirs("a/b/c") # Creates intermediate parent directories automatically`,
    stdoutExpected: 'mkdir creates 1 directory; makedirs creates entire nested path',
    explanationTitle: 'Single vs Recursive Directory Creation',
    explanationText:
      '`os.mkdir(path)` creates a single directory. If any parent directory in `path` does not exist, it raises `FileNotFoundError`. `os.makedirs(path)` recursively creates all intermediate parent directories needed.',
    complexityInfo: 'Recursive directory creation difference',
  },
  {
    id: 'pcap-s5-fc-091',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Removing Directories: os.rmdir() Non-Empty Error',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'Can `os.rmdir()` delete a directory that contains files or subdirectories?',
    codeSnippet: `# Attempting to remove a non-empty directory:
# os.rmdir("folder_with_files")`,
    stdoutExpected: 'OSError: [Errno 39] Directory not empty',
    explanationTitle: 'os.rmdir() Requires Empty Directory',
    explanationText:
      '`os.rmdir(path)` only deletes empty directories. If the directory contains any files or subdirectories, an `OSError` (specifically `DirectoryNotEmpty` or error code `ENOTEMPTY`) is raised.',
    complexityInfo: 'Safe deletion restriction in os.rmdir',
  },
  {
    id: 'pcap-s5-fc-092',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Listing Directory Contents with os.listdir()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What does `os.listdir(path)` return and what order are entries in?',
    codeSnippet: `import os
entries = os.listdir(".")
print(type(entries).__name__)
print(all(isinstance(e, str) for e in entries))`,
    stdoutExpected: `list
True`,
    explanationTitle: 'os.listdir() Returns List of Names',
    explanationText:
      '`os.listdir(path=".")` returns a Python list containing the names of the entries in the directory given by `path`. Special entries `.` and `..` are excluded. The list is in arbitrary filesystem order.',
    complexityInfo: 'Directory enumeration API',
  },
  {
    id: 'pcap-s5-fc-093',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'The os.system() Function Return Code',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What does `os.system(command)` return when executing an OS subshell command?',
    codeSnippet: `import os
# Executing null command:
ret = os.system("true" if os.name == 'posix' else "rem")
print(type(ret).__name__)
print(ret == 0)`,
    stdoutExpected: `int
True`,
    explanationTitle: 'os.system() Returns Exit Status Code',
    explanationText:
      '`os.system(cmd)` executes the command string in a subshell and returns the exit status code of the process as an `int` (typically `0` for successful execution). It does NOT return command stdout.',
    complexityInfo: 'Subshell command exit code return value',
  },
  {
    id: 'pcap-s5-fc-094',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'The errno Module Constants',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What does the `errno` standard library module contain?',
    codeSnippet: `import errno
print(isinstance(errno.ENOENT, int))
print(isinstance(errno.EACCES, int))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'errno Provides Symbolic Error Codes',
    explanationText:
      'The `errno` module defines symbolic names for system error numbers used by the OS and C library: `ENOENT` (Error No Entry: File not found), `EACCES` (Permission denied), `EEXIST` (File exists).',
    complexityInfo: 'Standard system error codes in errno',
  },
  {
    id: 'pcap-s5-fc-095',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Translating Error Codes with os.strerror()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'Which function converts an integer error code from `errno` into a human-readable description?',
    codeSnippet: `import os, errno
msg = os.strerror(errno.ENOENT)
print(type(msg).__name__)
print("No such file" in msg)`,
    stdoutExpected: `str
True`,
    explanationTitle: 'os.strerror() Human Description',
    explanationText:
      '`os.strerror(code)` returns the system error message corresponding to the specified integer error code (e.g. `errno.ENOENT` produces `"No such file or directory"`).',
    complexityInfo: 'System error string translation function',
  },
  {
    id: 'pcap-s5-fc-096',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Inspecting e.errno in Exception Handlers',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you inspect the specific numeric error code and message from a caught `OSError`?',
    codeSnippet: `import errno
try:
    open("missing_file_xyz.dat", "r")
except OSError as e:
    print(e.errno == errno.ENOENT)
    print(isinstance(e.strerror, str))
    print(e.filename)`,
    stdoutExpected: `True
True
missing_file_xyz.dat`,
    explanationTitle: 'Attributes of OSError Instances',
    explanationText:
      'When an `OSError` (or subclass) is caught, it exposes detailed attributes: `e.errno` (numeric code), `e.strerror` (OS description), and `e.filename` (the path involved).',
    complexityInfo: 'OSError diagnostic attributes',
  },
  {
    id: 'pcap-s5-fc-097',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Unified I/O Exception Hierarchy in Python 3',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How are `IOError`, `FileNotFoundError`, `PermissionError`, and `OSError` related?',
    codeSnippet: `print(IOError is OSError)
print(issubclass(FileNotFoundError, OSError))
print(issubclass(PermissionError, OSError))
print(issubclass(FileExistsError, OSError))`,
    stdoutExpected: `True
True
True
True`,
    explanationTitle: 'The Unified OSError Hierarchy',
    explanationText:
      'In Python 3.3+, `IOError` was made an alias for `OSError`. Specific I/O exceptions like `FileNotFoundError`, `PermissionError`, `FileExistsError`, and `IsADirectoryError` all inherit directly from `OSError`.',
    complexityInfo: 'Official PCAP I/O exception inheritance tree',
  },
  {
    id: 'pcap-s5-fc-098',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Unlinking and Deleting Files with os.unlink() / os.remove()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What is the relationship between `os.remove()` and `os.unlink()`?',
    codeSnippet: `import os
print(os.remove is os.unlink)`,
    stdoutExpected: 'True',
    explanationTitle: 'os.remove is os.unlink',
    explanationText:
      '`os.remove()` and `os.unlink()` are identical aliases for deleting a file path. Both raise `IsADirectoryError` if attempted on a directory, and `FileNotFoundError` if the file does not exist.',
    complexityInfo: 'File deletion alias identification',
  },
  {
    id: 'pcap-s5-fc-099',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Byte String Literal Prefixes and Hex Escape Sequences',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How are byte literals defined with `b` prefix and hexadecimal escapes?',
    codeSnippet: `raw = b"\\x41\\x42\\x43"
print(raw)
print(raw.decode("ascii"))
print(list(raw))`,
    stdoutExpected: `b'ABC'
ABC
[65, 66, 67]`,
    explanationTitle: 'Hex Escapes in Byte Literals',
    explanationText:
      'Byte string literals require a `b` prefix. `\\xHH` escapes represent hexadecimal byte values. `\\x41` is ASCII 65 (\'A\'), `\\x42` is 66 (\'B\'), and `\\x43` is 67 (\'C\').',
    complexityInfo: 'Binary literal notation and decoding',
  },
  {
    id: 'pcap-s5-fc-100',
    cardType: 'PCAP 5.5 • Binary & OS',
    topic: 'Converting between str, bytes, and bytearray',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you convert back and forth between `str`, `bytes`, and `bytearray`?',
    codeSnippet: `text = "PCAP 31-03"
# 1. str to bytes
b = text.encode("utf-8")
# 2. bytes to bytearray
ba = bytearray(b)
# 3. Mutate bytearray
ba[-2:] = b"99"
# 4. bytearray back to str
final_str = ba.decode("utf-8")
print(final_str)`,
    stdoutExpected: 'PCAP 31-99',
    explanationTitle: 'Full Conversion Cycle: str -> bytes -> bytearray -> str',
    explanationText:
      'Use `.encode()` to turn `str` into `bytes`. Pass `bytes` to `bytearray()` to get a mutable buffer. Mutate the buffer, then call `.decode()` to produce a new Python 3 Unicode `str`. This completes the PCAP Section 5 syllabus!',
    complexityInfo: 'Comprehensive encoding, buffer mutation, and decoding workflow',
  },
];
