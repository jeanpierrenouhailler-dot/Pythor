import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 4: FUNCTIONS AND EXCEPTIONS (Part 3: Cards 71 to 100)
 * - Chapter 4.4 Completion: Exception Hierarchy, as Keyword, raise & Nested Handling (Cards 71-80)
 * - Chapter 4.5: Standard Built-in Exceptions & Built-in Utilities / Type Casting (Cards 81-100)
 */
export const pcepSection4CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.4 COMPLETION: EXCEPTIONS & HIERARCHY (Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcep-s4-fc-071',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'Python Exception Class Inheritance Hierarchy',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is the relationship between BaseException, Exception, and ArithmeticError?',
    codeSnippet: `print(issubclass(ZeroDivisionError, ArithmeticError))
print(issubclass(ArithmeticError, Exception))
print(issubclass(Exception, BaseException))`,
    stdoutExpected: `True
True
True`,
    explanationTitle: 'Exception Inheritance Tree',
    explanationText:
      'All standard exceptions form an inheritance tree rooted at `BaseException`. General programming exceptions inherit from `Exception`. `ArithmeticError` inherits from `Exception`, and `ZeroDivisionError` inherits directly from `ArithmeticError`.',
    complexityInfo: 'Official PCEP syllabus: exception hierarchy',
  },
  {
    id: 'pcep-s4-fc-072',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'Catching a Superclass Catches All Subclasses',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Does except ArithmeticError: catch a ZeroDivisionError?',
    codeSnippet: `try:
    x = 10 / 0
except ArithmeticError:
    print("Caught by ArithmeticError superclass")`,
    stdoutExpected: 'Caught by ArithmeticError superclass',
    explanationTitle: 'Polymorphic Exception Matching',
    explanationText:
      'In Python, an `except BaseClass:` clause matches any exception that is an instance of `BaseClass` OR any of its derived subclasses. Because `ZeroDivisionError` is a subclass of `ArithmeticError`, it is successfully caught.',
    complexityInfo: 'Core exception inheritance rule on PCEP',
  },
  {
    id: 'pcep-s4-fc-073',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'Order of except Blocks: Subclass Before Superclass',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Why must ZeroDivisionError precede ArithmeticError in multiple except blocks?',
    codeSnippet: `try:
    ans = 5 / 0
except ArithmeticError:
    print("ArithmeticError caught")
except ZeroDivisionError:
    print("ZeroDivisionError caught")`,
    stdoutExpected: 'ArithmeticError caught',
    explanationTitle: 'Sequential Evaluation: More Specific First',
    explanationText:
      'Python evaluates `except` clauses sequentially from top to bottom. If the broader superclass (`ArithmeticError`) is placed first, it catches `ZeroDivisionError` immediately, rendering the subsequent specialized block completely unreachable.',
    complexityInfo: 'Top 3 most frequent PCEP exception exam questions',
  },
  {
    id: 'pcep-s4-fc-074',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'The as Keyword to Inspect Exception Objects',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you bind the raised exception instance to a variable name for inspection?',
    codeSnippet: `try:
    int("not_a_number")
except ValueError as e:
    print("Type:", type(e).__name__)`,
    stdoutExpected: 'Type: ValueError',
    explanationTitle: 'Exception Instance Binding with as',
    explanationText:
      'The syntax `except ExceptionType as variable_name:` binds the actual exception object instance to the identifier. This allows inspection of its error message, type, and arguments.',
    complexityInfo: 'Standard exception inspection syntax on PCEP',
  },
  {
    id: 'pcep-s4-fc-075',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'String Representation of Exception Instances str(e)',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is returned by str(e) on an exception instance?',
    codeSnippet: `try:
    1 / 0
except ZeroDivisionError as err:
    print(str(err))`,
    stdoutExpected: 'division by zero',
    explanationTitle: 'Exception Diagnostic Message',
    explanationText:
      'Converting an exception object to a string (`str(err)`) yields its diagnostic error message explaining why the exception occurred (e.g. `"division by zero"`).',
    complexityInfo: 'Exception message string conversion',
  },
  {
    id: 'pcep-s4-fc-076',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'The raise Statement to Trigger Exceptions',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What keyword deliberately forces an exception to occur in Python?',
    codeSnippet: `try:
    raise ValueError("custom error")
except ValueError as e:
    print("Caught:", str(e))`,
    stdoutExpected: 'Caught: custom error',
    explanationTitle: 'Explicit Exception Raising',
    explanationText:
      'The `raise` statement forces a specified exception to be thrown immediately. It takes either an exception class or an instantiated exception object (`raise ValueError(...)`).',
    complexityInfo: 'Official PCEP syllabus: the raise keyword',
  },
  {
    id: 'pcep-s4-fc-077',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'Re-raising the Current Exception with Bare raise',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What does a bare raise statement (with no arguments) do inside an except block?',
    codeSnippet: `try:
    try:
        1 / 0
    except ZeroDivisionError:
        print("Logged in inner")
        raise
except ZeroDivisionError:
    print("Handled in outer")`,
    stdoutExpected: `Logged in inner
Handled in outer`,
    explanationTitle: 'Re-raising the Active Exception',
    explanationText:
      'A bare `raise` statement inside an `except` block re-raises the currently active exception without modifying it, allowing an outer handler further up the call stack to also process it.',
    complexityInfo: 'Re-raising semantics tested on PCEP and PCAP',
  },
  {
    id: 'pcep-s4-fc-078',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'Nested try-except Blocks',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do nested try-except blocks resolve when an inner except catches the error?',
    codeSnippet: `try:
    print("Outer try")
    try:
        x = int("err")
    except ValueError:
        print("Inner caught ValueError")
    print("Outer after inner")
except ValueError:
    print("Outer caught ValueError")`,
    stdoutExpected: `Outer try
Inner caught ValueError
Outer after inner`,
    explanationTitle: 'Inner Handler Suppresses Upward Propagation',
    explanationText:
      'Because the inner `except ValueError:` successfully caught and handled the error, the exception does NOT propagate to the outer block. The outer `try` continues normally with `"Outer after inner"`.',
    complexityInfo: 'Nested exception handling execution flow',
  },
  {
    id: 'pcep-s4-fc-079',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'try-except Inside Loops (Continuous Processing)',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Does an exception handled inside a loop terminate subsequent iterations?',
    codeSnippet: `items = ["10", "abc", "30"]
valid_sum = 0

for item in items:
    try:
        valid_sum += int(item)
    except ValueError:
        pass

print("Sum:", valid_sum)`,
    stdoutExpected: 'Sum: 40',
    explanationTitle: 'Loop Resilience with try-except',
    explanationText:
      'Placing `try-except` inside a loop catches errors per iteration. When `"abc"` fails, the `ValueError` is caught and ignored with `pass`, allowing the loop to continue to `"30"`, giving `10 + 30 = 40`.',
    complexityInfo: 'Practical exception handling pattern on collections',
  },
  {
    id: 'pcep-s4-fc-080',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & Hierarchy',
    topic: 'Partial State Modifications Before an Exception Occurs',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Are state modifications executed before an exception automatically rolled back?',
    codeSnippet: `log = []

try:
    log.append("Started")
    log.append("Processed")
    10 / 0
    log.append("Finished")
except ZeroDivisionError:
    log.append("Failed")

print(log)`,
    stdoutExpected: "['Started', 'Processed', 'Failed']",
    explanationTitle: 'No Automatic Rollback in Python',
    explanationText:
      'Python does not roll back operations executed prior to an exception. `"Started"` and `"Processed"` remain in `log`. Only `"Finished"` is skipped because control immediately jumped to the `except` clause.',
    complexityInfo: 'State side-effect tracking under exceptions on PCEP',
  },

  // =========================================================================
  // CHAPTER 4.5: BUILT-IN EXCEPTIONS & UTILITIES / TYPE CASTING (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcep-s4-fc-081',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'ZeroDivisionError Trigger Conditions',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Which operations trigger a ZeroDivisionError?',
    codeSnippet: `try:
    x = 10 % 0
except ZeroDivisionError:
    print("Caught on modulo by zero")`,
    stdoutExpected: 'Caught on modulo by zero',
    explanationTitle: 'Division, Floor Division and Modulo by Zero',
    explanationText:
      '`ZeroDivisionError` is raised when the second operand of division (`/`), integer floor division (`//`), or modulo (`%`) is zero (either integer `0` or float `0.0`).',
    complexityInfo: 'Official PCEP syllabus: standard exception triggers',
  },
  {
    id: 'pcep-s4-fc-082',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'ValueError: Correct Type, Inappropriate Value',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Why does int("hello") raise a ValueError rather than a TypeError?',
    codeSnippet: `try:
    val = int("hello")
except ValueError as e:
    print("Caught ValueError")`,
    stdoutExpected: 'Caught ValueError',
    explanationTitle: 'ValueError Definition',
    explanationText:
      '`int()` accepts strings (correct type), but `"hello"` does not contain a valid sequence of decimal digits (inappropriate value). Therefore, Python raises a `ValueError: invalid literal for int()`.',
    complexityInfo: 'Distinguishing ValueError from TypeError on PCEP',
  },
  {
    id: 'pcep-s4-fc-083',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'TypeError: Inappropriate Type in Operation',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception is raised when calling len(100) on an integer?',
    codeSnippet: `try:
    length = len(100)
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'TypeError Definition',
    explanationText:
      '`TypeError` is raised when an operation or function is applied to an object of inappropriate type. `len()` requires a sequence or collection; passing an integer raises `TypeError: object of type \'int\' has no len()`.',
    complexityInfo: 'Common TypeError triggers on PCEP',
  },
  {
    id: 'pcep-s4-fc-084',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'IndexError: Sequence Index Out of Range',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception is raised when accessing an index beyond sequence boundaries?',
    codeSnippet: `lst = [10, 20]
try:
    val = lst[5]
except IndexError:
    print("Caught IndexError")`,
    stdoutExpected: 'Caught IndexError',
    explanationTitle: 'IndexError on Sequence Subscripting',
    explanationText:
      '`IndexError` is raised when subscript indexing a sequence (list, tuple, string) with an index that is outside its range of valid positive or negative indices.',
    complexityInfo: 'Sequence subscript error handling on PCEP',
  },
  {
    id: 'pcep-s4-fc-085',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'KeyError: Non-Existent Dictionary Key',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception is raised when looking up an absent key using subscript brackets?',
    codeSnippet: `d = {"x": 1}
try:
    print(d["y"])
except KeyError:
    print("Caught KeyError")`,
    stdoutExpected: 'Caught KeyError',
    explanationTitle: 'KeyError on Dictionary Lookups',
    explanationText:
      'Attempting to retrieve a value from a mapping/dictionary using subscript notation `d[key]` when `key` does not exist raises a `KeyError`. To avoid this, use `d.get(key)`.',
    complexityInfo: 'Dictionary key exception handling on PCEP',
  },
  {
    id: 'pcep-s4-fc-086',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'NameError: Undefined Identifier Lookup',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception occurs when referencing a variable that has never been assigned?',
    codeSnippet: `try:
    print(undefined_variable)
except NameError:
    print("Caught NameError")`,
    stdoutExpected: 'Caught NameError',
    explanationTitle: 'NameError on Missing Identifiers',
    explanationText:
      '`NameError` is raised when an identifier is evaluated that does not exist in any local, enclosing, global, or built-in namespace.',
    complexityInfo: 'Namespace lookup failure on PCEP',
  },
  {
    id: 'pcep-s4-fc-087',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'SyntaxError vs Runtime Exceptions',
    category: 'Built-in Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Can a SyntaxError in a source file be caught by a runtime try-except in that same file?',
    codeSnippet: `# try:
#     eval("2 + ")
# except SyntaxError:
#     print("Caught parse error in eval")
print("SyntaxError prevents execution")`,
    stdoutExpected: 'SyntaxError prevents execution',
    explanationTitle: 'Parse Time vs Execution Time',
    explanationText:
      'A `SyntaxError` in source code occurs during compilation/parsing BEFORE the Python program starts running. Therefore, a surrounding `try-except` in the same script cannot catch it because the script fails to parse entirely.',
    complexityInfo: 'Crucial compile-time vs runtime distinction on PCEP',
  },
  {
    id: 'pcep-s4-fc-088',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'AttributeError: Missing Object Attribute or Method',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception is raised when calling an invalid method name on a type?',
    codeSnippet: `s = "hello"
try:
    s.push("world")
except AttributeError:
    print("Caught AttributeError")`,
    stdoutExpected: 'Caught AttributeError',
    explanationTitle: 'AttributeError on Invalid Attributes',
    explanationText:
      '`AttributeError` is raised when an attribute reference or method call fails because the object has no attribute by that name. Strings do not have a `.push()` method.',
    complexityInfo: 'Object attribute access errors on PCEP',
  },
  {
    id: 'pcep-s4-fc-089',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'ImportError and ModuleNotFoundError',
    category: 'Built-in Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception occurs when attempting to import a module that does not exist?',
    codeSnippet: `try:
    import non_existent_library_12345
except ModuleNotFoundError:
    print("Caught ModuleNotFoundError")`,
    stdoutExpected: 'Caught ModuleNotFoundError',
    explanationTitle: 'ModuleNotFoundError Subclasses ImportError',
    explanationText:
      '`ModuleNotFoundError` (a subclass of `ImportError`) is raised by `import` when a module cannot be located in the Python search path (`sys.path`).',
    complexityInfo: 'Module loading exceptions on PCEP',
  },
  {
    id: 'pcep-s4-fc-090',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'KeyboardInterrupt Subclasses BaseException',
    category: 'Built-in Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Why doesn’t except Exception: catch a KeyboardInterrupt (Ctrl+C)?',
    codeSnippet: `print(issubclass(KeyboardInterrupt, Exception))
print(issubclass(KeyboardInterrupt, BaseException))`,
    stdoutExpected: `False
True`,
    explanationTitle: 'BaseException Direct Subclasses',
    explanationText:
      '`KeyboardInterrupt`, `SystemExit`, and `GeneratorExit` inherit directly from `BaseException`, NOT from `Exception`. This design prevents standard `except Exception:` catch-alls from accidentally trapping user termination requests.',
    complexityInfo: 'Advanced exception architecture tested on PCEP',
  },
  {
    id: 'pcep-s4-fc-091',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'The input() Built-in Function Return Type',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What data type is ALWAYS returned by the input() function in Python 3?',
    codeSnippet: `# Simulated: user entered 50
simulated_input = "50"
print(type(simulated_input).__name__)`,
    stdoutExpected: 'str',
    explanationTitle: 'input() Always Returns str',
    explanationText:
      'In Python 3, `input([prompt])` reads a line from the console and ALWAYS returns it as a string (`str`), even if the user typed numbers. Doing math requires explicit conversion using `int()` or `float()`.',
    complexityInfo: 'Top 3 most tested built-in function facts on PCEP',
  },
  {
    id: 'pcep-s4-fc-092',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'int() Casting: Truncation vs Conversion',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How does int() handle floating-point numbers versus numeric strings?',
    codeSnippet: `print(int(3.9))
print(int(-3.9))
print(int("42"))`,
    stdoutExpected: `3
-3
42`,
    explanationTitle: 'int() Truncates Toward Zero',
    explanationText:
      'When casting a float to an int, `int()` truncates the fractional part toward zero (`int(3.9)` is `3`, and `int(-3.9)` is `-3`). It does NOT round to the nearest whole number.',
    complexityInfo: 'Type conversion behavior on PCEP',
  },
  {
    id: 'pcep-s4-fc-093',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'ValueError on int("3.14") Floating String',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What happens when calling int("3.14") on a string containing a decimal point?',
    codeSnippet: `try:
    val = int("3.14")
except ValueError as e:
    print("Caught ValueError")`,
    stdoutExpected: 'Caught ValueError',
    explanationTitle: 'int() Rejects Floating Point Strings',
    explanationText:
      '`int()` on a string expects only integer digits. If the string contains a decimal point, it raises a `ValueError`. To convert `"3.14"` to an int, you must first convert it to a float: `int(float("3.14"))`.',
    complexityInfo: 'Famous PCEP exam trap on string conversions',
  },
  {
    id: 'pcep-s4-fc-094',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'int(string, base) Radix Conversion',
    category: 'Built-in Functions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you parse a binary string "1010" or hex string "1F" into an integer?',
    codeSnippet: `print(int("1010", 2))
print(int("1F", 16))
print(int("77", 8))`,
    stdoutExpected: `10
31
63`,
    explanationTitle: 'Base Parameter in int() Constructor',
    explanationText:
      '`int(str, base)` parses a string representation of a number in the specified radix (base 2 for binary, base 8 for octal, base 16 for hexadecimal) into a base-10 integer.',
    complexityInfo: 'Radix parsing built-ins on PCEP',
  },
  {
    id: 'pcep-s4-fc-095',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'float() Casting and Scientific Notation',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is returned by float("1e3") and float("inf")?',
    codeSnippet: `print(float("1e3"))
print(float("inf") > 999999)`,
    stdoutExpected: `1000.0
True`,
    explanationTitle: 'float() Scientific Parsing',
    explanationText:
      '`float()` parses decimal strings, integers, scientific notation (`1e3 = 1000.0`), and special values like `"inf"` (positive infinity).',
    complexityInfo: 'Float string parsing features',
  },
  {
    id: 'pcep-s4-fc-096',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'bool() Truthiness Evaluation',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Which values evaluate to False under bool()?',
    codeSnippet: `falsy = [0, 0.0, "", [], (), {}, None, False]
print(all(bool(x) == False for x in falsy))`,
    stdoutExpected: 'True',
    explanationTitle: 'Python Falsy Values',
    explanationText:
      'In Python, exactly these standard values are considered falsy: numerical zeros (`0`, `0.0`), empty sequences (`""`, `[]`, `()`), empty mappings (`{}`), `None`, and `False`. All other objects are truthy.',
    complexityInfo: 'Official PCEP syllabus: boolean truth value testing',
  },
  {
    id: 'pcep-s4-fc-097',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'abs() and round() Built-in Functions',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How does round() behave on halfway values like round(2.5) vs round(3.5)?',
    codeSnippet: `print(abs(-15))
print(round(2.5))
print(round(3.5))`,
    stdoutExpected: `15
2
4`,
    explanationTitle: "Banker's Rounding (Round to Even)",
    explanationText:
      'Python 3 uses banker’s rounding: halfway cases (`.5`) round to the nearest EVEN integer. `round(2.5)` rounds down to `2`, while `round(3.5)` rounds up to `4`. `abs(n)` returns the absolute value.',
    complexityInfo: 'High-frequency exam question on round() semantics',
  },
  {
    id: 'pcep-s4-fc-098',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'ord() and chr() Code Point Conversions',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What do ord() and chr() compute?',
    codeSnippet: `print(ord('A'))
print(chr(66))
print(ord('a') - ord('A'))`,
    stdoutExpected: `65
B
32`,
    explanationTitle: 'ASCII and Unicode Character Conversions',
    explanationText:
      '`ord(char)` takes a single character string and returns its integer Unicode/ASCII code point (`ord("A") = 65`). `chr(code)` takes an integer and returns the corresponding character string (`chr(66) = "B"`).',
    complexityInfo: 'Character encoding functions on PCEP',
  },
  {
    id: 'pcep-s4-fc-099',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'bin(), hex(), and oct() Representation Built-ins',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What prefixes do bin(), hex(), and oct() attach to their string output?',
    codeSnippet: `n = 10
print(bin(n))
print(oct(n))
print(hex(n))`,
    stdoutExpected: `0b1010
0o12
0xa`,
    explanationTitle: 'String Base Prefixes: 0b, 0o, 0x',
    explanationText:
      '`bin(n)` returns a binary string prefixed with `0b`. `oct(n)` returns an octal string prefixed with `0o`. `hex(n)` returns a hexadecimal string prefixed with `0x`. All three return `str` types.',
    complexityInfo: 'Integer representation built-ins on PCEP',
  },
  {
    id: 'pcep-s4-fc-100',
    track: 'pcep',
    cardType: 'PCEP 4.5 • Built-in Exceptions & Utilities',
    topic: 'str() Conversion and Representation',
    category: 'Built-in Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What does str() return for numbers and collections?',
    codeSnippet: `print(str(123) + "4")
print(str([1, 2]))`,
    stdoutExpected: `1234
[1, 2]`,
    explanationTitle: 'Canonical String Representation with str()',
    explanationText:
      '`str(obj)` returns the readable string representation of any object. `str(123)` returns `"123"`, allowing string concatenation `"123" + "4" = "1234"`.',
    complexityInfo: 'Essential type casting utility on PCEP',
  },
];
