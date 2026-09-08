import { Flashcard } from '../types';

export const section3CardsPart3: Flashcard[] = [
  // ==========================================
  // CHAPTER 3.4 (cont.): Closures & Decorators (Cards 71-80)
  // ==========================================
  {
    id: 'pcap-s3-fc-071',
    cardType: 'PCAP 3.4 • Decorators as Closures',
    topic: 'How Python decorators wrap functions using closures',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How is a basic function decorator implemented using a closure in Python?',
    codeSnippet: `def announce(func):
    def wrapper():
        print("Before call")
        func()
        print("After call")
    return wrapper

def say_hi():
    print("Hi!")

decorated = announce(say_hi)
decorated()`,
    stdoutExpected: `Before call
Hi!
After call`,
    explanationTitle: 'Decorators Are Functions Returning Closures',
    explanationText:
      'A decorator is a higher-order function that takes a function as an argument and returns a new wrapper function (a closure) that captures the original function in its lexical scope and adds behavior.',
    complexityInfo: 'Decorator closure mechanics',
  },
  {
    id: 'pcap-s3-fc-072',
    cardType: 'PCAP 3.4 • Decorator @ Syntax Sugar',
    topic: 'Equivalence between @decorator and f = decorator(f)',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the exact syntactic equivalence of `@my_decorator` placed above a function definition?',
    codeSnippet: `def tag(func):
    def wrapper():
        return f"<{func()}>"
    return wrapper

@tag
def get_text():
    return "Hello"

# Exactly equivalent to:
# def get_text(): return "Hello"
# get_text = tag(get_text)

print(get_text())`,
    stdoutExpected: '<Hello>',
    explanationTitle: '@decorator Is Pure Syntactic Sugar',
    explanationText:
      'The `@decorator` syntax is exact syntactic sugar for `func = decorator(func)` executed immediately after the decorated function is compiled at definition time.',
    complexityInfo: 'Decorator syntactic equivalence',
  },
  {
    id: 'pcap-s3-fc-073',
    cardType: 'PCAP 3.4 • Universal Arguments in Decorator Wrappers',
    topic: 'Forwarding arbitrary arguments using *args and **kwargs in wrappers',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does a decorator wrapper accept and forward arbitrary parameters to the wrapped function?',
    codeSnippet: `def trace(func):
    def wrapper(*args, **kwargs):
        print("Called with:", args)
        return func(*args, **kwargs)
    return wrapper

@trace
def add(x, y):
    return x + y

print("Result:", add(10, 20))`,
    stdoutExpected: `Called with: (10, 20)
Result: 30`,
    explanationTitle: 'Universal Argument Forwarding via *args and **kwargs',
    explanationText:
      'By declaring the wrapper as `def wrapper(*args, **kwargs):` and invoking `func(*args, **kwargs)`, the closure transparently accepts and forwards any positional and keyword arguments to the original function.',
    complexityInfo: 'Transparent parameter forwarding',
  },
  {
    id: 'pcap-s3-fc-074',
    cardType: 'PCAP 3.4 • Returning Values from Decorators',
    topic: 'Ensuring decorator wrappers return the wrapped function result',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What happens if a decorator wrapper forgets to return the result of `func(*args, **kwargs)`?',
    codeSnippet: `def bad_decorator(func):
    def wrapper(*args, **kwargs):
        func(*args, **kwargs) # Forgot 'return'!
    return wrapper

@bad_decorator
def multiply(a, b):
    return a * b

res = multiply(4, 5)
print("res is None:", res is None)`,
    stdoutExpected: 'res is None: True',
    explanationTitle: 'Wrappers Must Explicitly Return the Result of func',
    explanationText:
      'If the wrapper function does not return `func(*args, **kwargs)`, calling the decorated function returns `None`. To preserve return values, the wrapper must capture and return the inner call result.',
    complexityInfo: 'Return value propagation',
  },
  {
    id: 'pcap-s3-fc-075',
    cardType: 'PCAP 3.4 • Decorators with Arguments',
    topic: 'Three-level closure structure for parameterized decorators',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How many nested function levels are required to implement a decorator that accepts its own arguments?',
    codeSnippet: `def repeat(num_times):
    def decorator_repeat(func):
        def wrapper(*args, **kwargs):
            res = None
            for _ in range(num_times):
                res = func(*args, **kwargs)
            return res
        return wrapper
    return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f"Hi {name}")

greet("Python")`,
    stdoutExpected: `Hi Python
Hi Python
Hi Python`,
    explanationTitle: 'Parameterized Decorators Require Three Nested Levels',
    explanationText:
      'A decorator with arguments is a decorator factory. Level 1 accepts decorator arguments, Level 2 accepts the target function, and Level 3 (`wrapper`) receives call-time arguments and executes the logic.',
    complexityInfo: 'Three-level closure hierarchy',
  },
  {
    id: 'pcap-s3-fc-076',
    cardType: 'PCAP 3.4 • Multiple Stacked Decorators',
    topic: 'Evaluation order of multiple stacked decorators',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'In what order are stacked decorators evaluated and executed?',
    codeSnippet: `def dec1(func):
    def wrapper():
        return "1(" + func() + ")1"
    return wrapper

def dec2(func):
    def wrapper():
        return "2(" + func() + ")2"
    return wrapper

@dec1
@dec2
def say():
    return "X"

# Equivalent to: dec1(dec2(say))
print(say())`,
    stdoutExpected: '1(2(X)2)1',
    explanationTitle: 'Bottom-Up Application Order for Stacked Decorators',
    explanationText:
      'When decorators are stacked, they are applied bottom-up (innermost to outermost): `@dec1` above `@dec2` corresponds to `dec1(dec2(say))`. Therefore, `@dec2` wraps `say` first, and `@dec1` wraps the result.',
    complexityInfo: 'Decorator composition order',
  },
  {
    id: 'pcap-s3-fc-077',
    cardType: 'PCAP 3.4 • Preserving Function Metadata with functools.wraps',
    topic: 'Copying __name__ and __doc__ using @functools.wraps',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What happens to `func.__name__` when decorated without `wraps`, and how is it fixed?',
    codeSnippet: `from functools import wraps

def logged(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        """Wrapper docstring"""
        return func(*args, **kwargs)
    return wrapper

@logged
def calculate(x):
    """Calculates square"""
    return x * x

print("Name:", calculate.__name__)
print("Doc:", calculate.__doc__)`,
    stdoutExpected: `Name: calculate
Doc: Calculates square`,
    explanationTitle: 'functools.wraps Preserves Original Function Introspection',
    explanationText:
      'Without `@wraps(func)`, the decorated function identity changes: `calculate.__name__` would be `"wrapper"`. Using `@wraps(func)` copies `__name__`, `__doc__`, and `__module__` back from the original function.',
    complexityInfo: 'Introspection preservation',
  },
  {
    id: 'pcap-s3-fc-078',
    cardType: 'PCAP 3.4 • Closures on Mutable Collections',
    topic: 'Mutating enclosed collections without the nonlocal statement',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Why does mutating an enclosed list (`lst.append(x)`) not require the `nonlocal` keyword?',
    codeSnippet: `def make_history():
    history = [] # Enclosed mutable list
    def record(item):
        history.append(item) # Mutates object in-place; no rebinding!
        return list(history)
    return record

logger = make_history()
print(logger("A"))
print(logger("B"))`,
    stdoutExpected: `['A']
['A', 'B']`,
    explanationTitle: 'In-Place Mutation Does Not Rebind the Variable Name',
    explanationText:
      '`nonlocal` is only required when reassigning or rebinding the name itself (`history = ...`). Calling methods like `append()`, `extend()`, or mutating index `history[0] = ...` does not rebind the variable, so `nonlocal` is unnecessary.',
    complexityInfo: 'Rebinding vs in-place mutation',
  },
  {
    id: 'pcap-s3-fc-079',
    cardType: 'PCAP 3.4 • Closures and Garbage Collection',
    topic: 'Enclosing scope objects survive as long as the closure is referenced',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does Python garbage collection handle outer variables referenced by active closures?',
    codeSnippet: `def build_closure():
    large_data = [1, 2, 3, 4, 5]
    def reader():
        return len(large_data)
    return reader

fn = build_closure()
# Even though build_closure() finished, large_data is kept alive in fn.__closure__
print(fn())`,
    stdoutExpected: '5',
    explanationTitle: 'Cell Objects Maintain Reference Counts on Enclosed Data',
    explanationText:
      'Python cell objects hold strong references to enclosed variables. As long as the closure function object is reachable in memory, its cell objects and all captured data are protected from garbage collection.',
    complexityInfo: 'Memory lifecycle and reference counting',
  },
  {
    id: 'pcap-s3-fc-080',
    cardType: 'PCAP 3.4 • Closures vs Callable Classes (__call__)',
    topic: 'Stateful behavior via closure vs class with __call__ dunder',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do closures compare conceptually to class instances implementing the `__call__` dunder method?',
    codeSnippet: `class MultiplierClass:
    def __init__(self, factor):
        self.factor = factor
    def __call__(self, n):
        return n * self.factor

def multiplier_closure(factor):
    return lambda n: n * factor

obj = MultiplierClass(3)
clo = multiplier_closure(3)

print(obj(10) == clo(10) == 30)`,
    stdoutExpected: 'True',
    explanationTitle: 'Closures and Callable Objects Are Dual Representations of State',
    explanationText:
      'A closure is a function that carries hidden state in cell objects. A class with `__call__` carries state explicitly in instance attributes (`self.factor`). Both allow instances to be invoked like functions with remembered state.',
    complexityInfo: 'Object-oriented vs functional duality',
  },

  // ==========================================
  // CHAPTER 3.5: File Streams, Context Managers & Standard I/O Modes (Cards 81-100)
  // ==========================================
  {
    id: 'pcap-s3-fc-081',
    cardType: 'PCAP 3.5 • open() Built-in and Default Mode',
    topic: 'Default open() parameters for mode and encoding',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is the default mode argument when `open(filename)` is called without specifying mode?',
    codeSnippet: `import io

# Default mode is 'r' (read) combined with 't' (text) -> 'rt'
stream = io.StringIO("sample text")
print("Mode 'r' is read-only")
print("Default string output type is str")`,
    stdoutExpected: `Mode 'r' is read-only
Default string output type is str`,
    explanationTitle: "Default Mode Is 'rt' (Read Text)",
    explanationText:
      "When omitted, `open(filename)` defaults to mode `'rt'` (or `'r'`), meaning read-only text mode. Attempting to write to a file opened in default `'r'` mode raises `io.UnsupportedOperation: not writable`.",
    complexityInfo: 'Stream default access modes',
  },
  {
    id: 'pcap-s3-fc-082',
    cardType: 'PCAP 3.5 • File Modes: r, w, a, and x',
    topic: 'Behaviors of primary open() mode flags',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What are the behaviors of file modes "r", "w", "a", and "x"?',
    codeSnippet: `# 'r': Open for reading; raises FileNotFoundError if missing.
# 'w': Open for writing; truncates/overwrites existing file or creates new.
# 'a': Open for appending; writes at EOF; creates file if missing.
# 'x': Exclusive creation; creates new file, raises FileExistsError if exists.

modes = ['r', 'w', 'a', 'x']
print("Four primary open modes:", len(modes))`,
    stdoutExpected: 'Four primary open modes: 4',
    explanationTitle: 'Four Basic File Access Modes',
    explanationText:
      "`'r'` reads existing file (fails if missing). `'w'` truncates/overwrites. `'a'` appends without truncating. `'x'` creates exclusively and raises `FileExistsError` if the file already exists.",
    complexityInfo: 'Core file access flags',
  },
  {
    id: 'pcap-s3-fc-083',
    cardType: 'PCAP 3.5 • Text Mode (t) vs Binary Mode (b)',
    topic: 'Strings vs raw bytes return types in text and binary modes',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What data types are read and written in text mode (`t`) versus binary mode (`b`)?',
    codeSnippet: `import io

text_s = io.StringIO("hello")
bin_s = io.BytesIO(b"hello")

print("Text read type:", type(text_s.read()).__name__)
print("Binary read type:", type(bin_s.read()).__name__)`,
    stdoutExpected: `Text read type: str
Binary read type: bytes`,
    explanationTitle: 'Text Mode Produces str; Binary Mode Produces bytes',
    explanationText:
      'In text mode (`t`), reads return `str` objects with automatic newline translation (`\\r\\n` to `\\n`). In binary mode (`b`), reads return raw `bytes` without character decoding or newline conversion.',
    complexityInfo: 'Stream data representation',
  },
  {
    id: 'pcap-s3-fc-084',
    cardType: 'PCAP 3.5 • Read and Write Update Mode (+)',
    topic: 'Simultaneous reading and writing with r+, w+, and a+',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does the `+` character add to a file mode, and how does `r+` differ from `w+`?',
    codeSnippet: `import io

# 'r+': Read and write; file MUST exist; does NOT truncate.
# 'w+': Read and write; TRUNCATES existing file to 0 bytes!
# 'a+': Read and write; appends writes at EOF.

stream_rplus = io.StringIO("initial")
stream_rplus.write("UP")
print("r+ preserves remainder:", stream_rplus.getvalue())`,
    stdoutExpected: 'r+ preserves remainder: UPitial',
    explanationTitle: "The '+' Modifier Enables Both Reading and Writing",
    explanationText:
      "`'+'` allows both reading and writing. Critical PCAP exam trap: `'r+'` opens an existing file without truncating it, while `'w+'` immediately wipes/truncates the file to 0 bytes upon opening.",
    complexityInfo: 'Read-write stream update semantics',
  },
  {
    id: 'pcap-s3-fc-085',
    cardType: 'PCAP 3.5 • read() and EOF Detection',
    topic: 'read([size]) behavior and empty string return at EOF',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does `file.read()` return when the end of the file (EOF) has been reached?',
    codeSnippet: `import io

stream = io.StringIO("ABC")
print("Chunk 1:", stream.read(2))
print("Chunk 2:", stream.read(2))
eof_chunk = stream.read(2)
print("EOF chunk:", repr(eof_chunk))
print("Is empty string:", eof_chunk == "")`,
    stdoutExpected: `Chunk 1: AB
Chunk 2: C
EOF chunk: ''
Is empty string: True`,
    explanationTitle: 'EOF Is Signaled by an Empty String or Empty Bytes',
    explanationText:
      '`file.read(size)` reads up to `size` characters/bytes. When the end of file (EOF) is reached, subsequent calls to `read()` return an empty string `""` (or `b""` in binary mode) without raising an exception.',
    complexityInfo: 'End-of-stream protocol',
  },
  {
    id: 'pcap-s3-fc-086',
    cardType: 'PCAP 3.5 • readline() Method',
    topic: 'Reading single lines including trailing newline character',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'Does `file.readline()` retain the newline character `\\n` at the end of the returned string?',
    codeSnippet: `import io

stream = io.StringIO("First\\nSecond\\n")
line1 = stream.readline()
line2 = stream.readline()
line3 = stream.readline() # EOF

print("line1:", repr(line1))
print("line2:", repr(line2))
print("line3 (EOF):", repr(line3))`,
    stdoutExpected: `line1: 'First\\n'
line2: 'Second\\n'
line3 (EOF): ''`,
    explanationTitle: 'readline() Retains \\n; Returns Empty String at EOF',
    explanationText:
      '`file.readline()` reads characters up to and including the next `\\n` character. Only the final line of a file without a newline omits it. An empty string `""` exclusively indicates that EOF has been reached.',
    complexityInfo: 'Line-oriented reading mechanics',
  },
  {
    id: 'pcap-s3-fc-087',
    cardType: 'PCAP 3.5 • readlines() Method',
    topic: 'Reading all remaining lines into a Python list of strings',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does `file.readlines()` return?',
    codeSnippet: `import io

stream = io.StringIO("Line 1\\nLine 2\\nLine 3")
lines = stream.readlines()

print("Type:", type(lines).__name__)
print("Length:", len(lines))
print("Lines:", lines)`,
    stdoutExpected: `Type: list
Length: 3
Lines: ['Line 1\\n', 'Line 2\\n', 'Line 3']`,
    explanationTitle: 'readlines() Reads All Remaining Lines into a List',
    explanationText:
      '`file.readlines()` consumes all remaining content from the current stream position to EOF and returns it as a list of strings, with each string retaining its trailing newline `\\n`.',
    complexityInfo: 'Bulk line ingestion',
  },
  {
    id: 'pcap-s3-fc-088',
    cardType: 'PCAP 3.5 • File Object Iteration Protocol',
    topic: 'Memory-efficient line-by-line iteration over file objects',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is the most memory-efficient way to process a large file line by line in Python?',
    codeSnippet: `import io

stream = io.StringIO("Apple\\nBanana\\nCherry\\n")

res = []
# Directly iterating over the file stream!
for line in stream:
    res.append(line.strip())

print(res)`,
    stdoutExpected: "['Apple', 'Banana', 'Cherry']",
    explanationTitle: 'File Objects Implement the Iterator Protocol',
    explanationText:
      'Iterating directly over a file (`for line in file:`) reads lines lazily one at a time using internal buffering. Unlike `file.readlines()`, it never loads the entire file into memory, keeping memory usage constant.',
    complexityInfo: 'Buffered stream iteration',
  },
  {
    id: 'pcap-s3-fc-089',
    cardType: 'PCAP 3.5 • write() Return Value and Type Checking',
    topic: 'Characters written count and TypeError on mismatched data',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is returned by `file.write(s)` and what happens if you pass non-string data in text mode?',
    codeSnippet: `import io

stream = io.StringIO()
chars_written = stream.write("Python")
print("Chars written:", chars_written)

# Attempting stream.write(123) -> TypeError: string argument expected, got 'int'
try:
    stream.write(123)
except TypeError as err:
    print("Caught:", type(err).__name__)`,
    stdoutExpected: `Chars written: 6
Caught: TypeError`,
    explanationTitle: 'write() Returns Characters Written; Requires String in Text Mode',
    explanationText:
      'In text mode, `file.write(str)` returns the integer count of characters written. Passing any non-string type (like integer `123`) raises `TypeError`. You must explicitly call `str(123)` first.',
    complexityInfo: 'Stream writing type constraint',
  },
  {
    id: 'pcap-s3-fc-090',
    cardType: 'PCAP 3.5 • writelines() Method',
    topic: 'Writing sequence of strings without automatic newline insertion',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'Does `file.writelines(list_of_strings)` automatically add newlines between elements?',
    codeSnippet: `import io

stream = io.StringIO()
stream.writelines(["A", "B", "C"])
print("Value:", repr(stream.getvalue()))

stream2 = io.StringIO()
stream2.writelines(["A\\n", "B\\n", "C\\n"])
print("Value with \\\\n:", repr(stream2.getvalue()))`,
    stdoutExpected: `Value: 'ABC'
Value with \\n: 'A\\nB\\nC\\n'`,
    explanationTitle: 'writelines() Does NOT Append Newlines',
    explanationText:
      '`file.writelines(iterable)` writes a sequence of strings sequentially to the file without adding any separator or newline. If newlines are needed, each string must explicitly include its own `\\n`.',
    complexityInfo: 'Bulk line emission trap',
  },
  {
    id: 'pcap-s3-fc-091',
    cardType: 'PCAP 3.5 • seek() Method and whence Constants',
    topic: 'Repositioning file stream cursor with seek(offset, whence)',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What do the three standard values for `whence` represent in `file.seek(offset, whence)`?',
    codeSnippet: `import io

# whence = 0 (SEEK_SET): relative to file beginning (default)
# whence = 1 (SEEK_CUR): relative to current stream position
# whence = 2 (SEEK_END): relative to file end

stream = io.BytesIO(b"0123456789")
stream.seek(5, 0) # Move to 5th byte from beginning
print(stream.read(2))
stream.seek(-3, 2) # Move to 3 bytes before end
print(stream.read(2))`,
    stdoutExpected: `b'56'
b'78'`,
    explanationTitle: 'seek(offset, whence) Stream Repositioning',
    explanationText:
      '`file.seek(offset, whence)` sets file position: `0` (start of stream, default), `1` (current position), `2` (end of stream). In binary mode, negative offsets from `whence=2` are supported.',
    complexityInfo: 'Stream positioning protocol',
  },
  {
    id: 'pcap-s3-fc-092',
    cardType: 'PCAP 3.5 • Text Mode seek() Restrictions',
    topic: 'Restrictions on seek() in Python 3 text streams',
    category: 'T2: Gotchas',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What restrictions exist when calling `seek()` on a file opened in text mode?',
    codeSnippet: `import io

stream = io.StringIO("Sample text")
stream.seek(0) # Valid: seek to beginning (offset 0)
# stream.seek(5, 1) -> io.UnsupportedOperation: can't do nonzero cur-relative seeks in text mode
print("Position 0 seek valid:", stream.tell())`,
    stdoutExpected: 'Position 0 seek valid: 0',
    explanationTitle: 'Text Mode Prohibits Arbitrary Nonzero whence=1 or whence=2 Seeks',
    explanationText:
      'In text streams, the only legal `seek()` operations are `seek(0, 0)` (start), `seek(0, 2)` (end), or seeking to an exact integer position returned previously by `tell()`. Nonzero seeks relative to current/end raise `io.UnsupportedOperation`.',
    complexityInfo: 'Text stream encoding seek constraints',
  },
  {
    id: 'pcap-s3-fc-093',
    cardType: 'PCAP 3.5 • tell() Method',
    topic: 'Querying current byte/character position in stream',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does `file.tell()` return?',
    codeSnippet: `import io

stream = io.StringIO("Python Certification")
print("Initial:", stream.tell())
stream.read(6)
print("After read(6):", stream.tell())`,
    stdoutExpected: `Initial: 0
After read(6): 6`,
    explanationTitle: 'tell() Returns the Current File Stream Cursor Position',
    explanationText:
      '`file.tell()` returns an integer representing the current position of the file stream cursor from the beginning of the file. In binary files, this directly matches the byte offset.',
    complexityInfo: 'Stream cursor position inspection',
  },
  {
    id: 'pcap-s3-fc-094',
    cardType: 'PCAP 3.5 • close() Method and Closed File Error',
    topic: 'Flushing buffers, releasing OS handles, and ValueError on closed files',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What exception is raised if an I/O operation is attempted on an already closed file?',
    codeSnippet: `import io

stream = io.StringIO("data")
stream.close()
print("stream.closed:", stream.closed)

try:
    stream.read()
except ValueError as err:
    print("Caught:", type(err).__name__)`,
    stdoutExpected: `stream.closed: True
Caught: ValueError`,
    explanationTitle: 'ValueError on Operations Against Closed Streams',
    explanationText:
      '`file.close()` flushes buffers and frees OS file descriptors, setting `file.closed` to `True`. Attempting to read, write, or seek on a closed file raises `ValueError: I/O operation on closed file`.',
    complexityInfo: 'Resource closure and lifecycle state',
  },
  {
    id: 'pcap-s3-fc-095',
    cardType: 'PCAP 3.5 • with Statement Context Managers',
    topic: 'Guaranteed automatic resource cleanup with with open()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'Why is the `with` statement preferred over manual `file.close()` calls?',
    codeSnippet: `import io

# Simulating file context manager
class MockFile(io.StringIO):
    def __exit__(self, exc_type, exc_val, exc_tb):
        super().__exit__(exc_type, exc_val, exc_tb)
        print("Automatically closed!")

with MockFile("content") as f:
    val = f.read()

print("Closed status:", f.closed)`,
    stdoutExpected: `Automatically closed!
Closed status: True`,
    explanationTitle: 'Context Managers Guarantee Closure Across Exceptions',
    explanationText:
      'The `with` statement utilizes the context management protocol (`__enter__` and `__exit__`). It guarantees that `file.close()` is invoked when the block exits, even if an exception occurs or a `return` executes.',
    complexityInfo: 'Context management protocol',
  },
  {
    id: 'pcap-s3-fc-096',
    cardType: 'PCAP 3.5 • flush() Method',
    topic: 'Forcing internal write buffers to disk without closing file',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does `file.flush()` do and how does it differ from `file.close()`?',
    codeSnippet: `import io

stream = io.StringIO()
stream.write("Buffered data")
stream.flush() # Flushes write buffer to underlying storage
print("Still open:", not stream.closed)
stream.close() # Closes stream and releases resources`,
    stdoutExpected: 'Still open: True',
    explanationTitle: 'flush() Writes Buffers Without Closing the File',
    explanationText:
      '`file.flush()` forces any bytes sitting in Python internal I/O write buffer to be transferred immediately to the OS/disk without closing the file or setting `file.closed = True`.',
    complexityInfo: 'Stream buffer flushing',
  },
  {
    id: 'pcap-s3-fc-097',
    cardType: 'PCAP 3.5 • Standard Streams (sys.stdin, sys.stdout, sys.stderr)',
    topic: 'Pre-opened system stream handles in the sys module',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What are the three standard I/O streams pre-opened by Python in the `sys` module?',
    codeSnippet: `import sys

print("stdin exists:", hasattr(sys, 'stdin'))
print("stdout exists:", hasattr(sys, 'stdout'))
print("stderr exists:", hasattr(sys, 'stderr'))

# sys.stdout.write does NOT add newline automatically
chars = sys.stdout.write("Direct\\n")`,
    stdoutExpected: `stdin exists: True
stdout exists: True
stderr exists: True
Direct`,
    explanationTitle: 'sys.stdin, sys.stdout, and sys.stderr',
    explanationText:
      'Python provides three standard file-like streams in `sys`: `sys.stdin` (standard input, read-only), `sys.stdout` (standard output, write-only), and `sys.stderr` (standard error for diagnostics/tracebacks, unbuffered/line-buffered).',
    complexityInfo: 'Standard OS stream handles',
  },
  {
    id: 'pcap-s3-fc-098',
    cardType: 'PCAP 3.5 • bytearray Mutable Sequence',
    topic: 'Creating and modifying mutable byte sequences',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is a `bytearray` in Python and how does it differ from `bytes`?',
    codeSnippet: `ba = bytearray(b"abc")
print("Initial:", ba)
ba[0] = ord('z') # Mutable: in-place index assignment!
print("Modified:", ba)
print("Type:", type(ba).__name__)`,
    stdoutExpected: `Initial: bytearray(b'abc')
Modified: bytearray(b'zbc')
Type: bytearray`,
    explanationTitle: 'bytearray Is a Mutable Sequence of Bytes',
    explanationText:
      '`bytes` objects are immutable sequences of byte values (like strings). `bytearray` objects are mutable sequences of bytes (like lists of byte values), supporting in-place modifications (`ba[0] = 65`).',
    complexityInfo: 'Binary sequence mutability',
  },
  {
    id: 'pcap-s3-fc-099',
    cardType: 'PCAP 3.5 • bytearray Valid Value Range (0 to 255)',
    topic: 'ValueError on byte values outside 0-255 bounds',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What integer range must every element of a `bytearray` or `bytes` fall within?',
    codeSnippet: `ba = bytearray(3) # Creates 3 null bytes: bytearray(b'\\x00\\x00\\x00')
ba[0] = 0
ba[1] = 255
print("Valid assignments:", ba[:2])

try:
    ba[2] = 256 # Exceeds 1-byte unsigned limit!
except ValueError as err:
    print("Caught:", type(err).__name__)`,
    stdoutExpected: `Valid assignments: bytearray(b'\\x00\\xff')
Caught: ValueError`,
    explanationTitle: 'Byte Values Must Be Integers in 0 <= x <= 255',
    explanationText:
      'Each element in a `bytes` or `bytearray` represents an 8-bit unsigned byte value. Setting or inserting an integer outside `0` to `255` (e.g. `256` or `-1`) immediately raises a `ValueError: byte must be in range(0, 256)`.',
    complexityInfo: 'Byte range validation',
  },
  {
    id: 'pcap-s3-fc-100',
    cardType: 'PCAP 3.5 • readinto() Binary Buffer Ingestion',
    topic: 'Reading binary stream data directly into pre-allocated bytearray buffer',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does `file.readinto(bytearray_buffer)` do in binary streams?',
    codeSnippet: `import io

stream = io.BytesIO(b"HELLO WORLD")
buffer = bytearray(5) # Pre-allocated 5-byte buffer

bytes_read = stream.readinto(buffer)
print("Bytes read:", bytes_read)
print("Buffer content:", buffer)`,
    stdoutExpected: `Bytes read: 5
Buffer content: bytearray(b'HELLO')`,
    explanationTitle: 'readinto() Reads Directly into Pre-Allocated Mutable Buffers',
    explanationText:
      '`stream.readinto(b)` reads raw bytes directly into a pre-allocated writable buffer (such as a `bytearray`) up to the buffer length, returning the number of bytes read without creating new object allocations.',
    complexityInfo: 'Zero-copy binary stream buffering',
  },
];
