import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 2: DATA AGGREGATES AND EXCEPTIONS (Part 3: Cards 71 to 100)
 * - Chapter 2.4: Exception Handling: raise, assert & Control Flow (Cards 71-80)
 * - Chapter 2.5: Built-in Exception Hierarchy, Custom Exceptions & args (Cards 81-100)
 */
export const section2CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.4 (Continued): RAISE, ASSERT & CONTROL FLOW (Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcap-s2-fc-071',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'raise statement with exception class vs instance',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Are `raise ValueError` and `raise ValueError()` equivalent in Python?',
    codeSnippet: `try:
    raise ValueError
except ValueError as e:
    print(type(e).__name__)
    print(e.args)`,
    stdoutExpected: `ValueError
()`,
    explanationTitle: 'raise Automatically Instantiates Exception Classes',
    explanationText:
      'Passing an uninstantiated exception class `raise ValueError` automatically calls its parameterless constructor `ValueError()`, raising an instance with empty `.args`.',
    complexityInfo: 'Exception instantiation mechanics',
  },
  {
    id: 'pcap-s2-fc-072',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Bare raise re-raising current exception',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What does a bare `raise` statement with no arguments do inside an `except` block?',
    codeSnippet: `try:
    try:
        1 / 0
    except ZeroDivisionError:
        print("Logged error")
        raise
except ZeroDivisionError:
    print("Caught re-raised error")`,
    stdoutExpected: `Logged error
Caught re-raised error`,
    explanationTitle: 'Bare raise Re-Raises Active Exception',
    explanationText:
      'Inside an `except` block, `raise` without arguments re-raises the currently active exception object, preserving its original traceback and attributes.',
    complexityInfo: 'Exception re-raising pattern',
  },
  {
    id: 'pcap-s2-fc-073',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Bare raise outside an except block raises RuntimeError',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What exception is raised if a bare `raise` executes when no active exception exists?',
    codeSnippet: `try:
    raise
except RuntimeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'RuntimeError',
    explanationTitle: 'Bare raise Outside Handler Raises RuntimeError',
    explanationText:
      'Executing `raise` with no argument outside of an active exception handler raises `RuntimeError: No active exception to reraise`.',
    complexityInfo: 'Re-raise runtime validation',
  },
  {
    id: 'pcap-s2-fc-074',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'assert statement syntax and condition check',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What exception is raised when an `assert` condition evaluates to `False`?',
    codeSnippet: `x = -5
try:
    assert x > 0, "x must be positive"
except AssertionError as err:
    print(type(err).__name__)
    print(err)`,
    stdoutExpected: `AssertionError
x must be positive`,
    explanationTitle: 'Failed assert Raises AssertionError',
    explanationText:
      '`assert condition, message` tests whether `condition` is truthy. If false, it raises `AssertionError(message)`. If true, execution continues normally.',
    complexityInfo: 'Assertion mechanics and message parameter',
  },
  {
    id: 'pcap-s2-fc-075',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'assert tuple parenthesis syntax trap',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does `assert (False, "Never fail")` NOT raise an AssertionError?',
    codeSnippet: `# A non-empty tuple is always truthy in Python!
tup = (False, "Never fail")
print(bool(tup))
assert (False, "Never fail")
print("Survived!")`,
    stdoutExpected: `True
Survived!`,
    explanationTitle: 'assert (cond, msg) Evaluates a Non-Empty Truthy Tuple',
    explanationText:
      'In Python, `assert (a, b)` treats `(a, b)` as a 2-element tuple. Any non-empty tuple evaluates to `True` in boolean contexts, so the assertion never fails. Never enclose assertion arguments in parentheses!',
    complexityInfo: 'Subtle high-frequency Python exam pitfall',
  },
  {
    id: 'pcap-s2-fc-076',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'assert suppression with -O optimization flag',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What command-line flag disables all `assert` statements and sets `__debug__` to False?',
    codeSnippet: `# Running python with -O or -OO disables assertions
# and sets built-in constant __debug__ to False
print("Flag: -O")`,
    stdoutExpected: 'Flag: -O',
    explanationTitle: '-O Flag Suppresses Assertions',
    explanationText:
      'When Python is invoked with the `-O` (optimize) flag, assertions are ignored and no bytecode is generated for them. The built-in constant `__debug__` is set to `False`.',
    complexityInfo: 'Bytecode optimization flag',
  },
  {
    id: 'pcap-s2-fc-077',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Nested try-except block execution',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is printed by this nested try block?',
    codeSnippet: `try:
    print("A")
    try:
        print("B")
        raise KeyError
    except ValueError:
        print("C")
    finally:
        print("D")
except KeyError:
    print("E")`,
    stdoutExpected: `A
B
D
E`,
    explanationTitle: 'Inner finally Executes Before Outer except',
    explanationText:
      'The inner `try` raises `KeyError`. Because inner `except ValueError` does not match, inner `finally` runs (`"D"`), and then the unhandled `KeyError` propagates to outer `except KeyError` (`"E"`).',
    complexityInfo: 'Nested construct unwinding order',
  },
  {
    id: 'pcap-s2-fc-078',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Exception raised inside an except block',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'If an exception occurs inside an `except` handler, does the accompanying `finally` still execute?',
    codeSnippet: `try:
    try:
        1 / 0
    except ZeroDivisionError:
        print("In except")
        raise ValueError("New error")
    finally:
        print("In finally")
except ValueError:
    print("Caught new error")`,
    stdoutExpected: `In except
In finally
Caught new error`,
    explanationTitle: 'finally Executes Even If Handler Raises',
    explanationText:
      'Even when a new exception is raised within an `except` block, the local `finally` block is guaranteed to execute before the new exception leaves the scope.',
    complexityInfo: 'Robustness of finally guarantee',
  },
  {
    id: 'pcap-s2-fc-079',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Exceptions raised inside finally replace prior exceptions',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Which exception escapes if both `try` and `finally` raise exceptions?',
    codeSnippet: `try:
    try:
        raise ValueError("From try")
    finally:
        raise TypeError("From finally")
except Exception as e:
    print(type(e).__name__)
    print(e)`,
    stdoutExpected: `TypeError
From finally`,
    explanationTitle: 'finally Exceptions Mask Prior Exceptions',
    explanationText:
      'If an exception is raised inside a `finally` block, it masks and replaces any unhandled exception currently in transit. The outer scope receives the `TypeError`.',
    complexityInfo: 'Exception masking during stack unwinding',
  },
  {
    id: 'pcap-s2-fc-080',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Exception chaining with from clause',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What does `raise NewException from None` accomplish in Python 3?',
    codeSnippet: `try:
    try:
        int("invalid")
    except ValueError:
        raise RuntimeError("Clean error") from None
except RuntimeError as err:
    print(err.__cause__)`,
    stdoutExpected: 'None',
    explanationTitle: 'from None Suppresses Exception Context',
    explanationText:
      '`raise ... from None` explicitly suppresses the previous exception context, preventing Python from displaying "During handling of the above exception, another exception occurred...".',
    complexityInfo: 'Explicit exception chaining suppression',
  },

  // =========================================================================
  // CHAPTER 2.5: BUILT-IN EXCEPTION HIERARCHY, CUSTOM EXCEPTIONS & ARGS (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcap-s2-fc-081',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'BaseException as root of all exceptions',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the absolute root base class of all built-in exceptions in Python?',
    codeSnippet: `print(issubclass(Exception, BaseException))
print(issubclass(KeyboardInterrupt, BaseException))
print(issubclass(KeyboardInterrupt, Exception))`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'BaseException is the Common Root',
    explanationText:
      '`BaseException` is the root class of all exceptions. `Exception` is a direct subclass of `BaseException`. System-exiting exceptions like `KeyboardInterrupt` inherit from `BaseException`, NOT `Exception`.',
    complexityInfo: 'Root exception class distinction',
  },
  {
    id: 'pcap-s2-fc-082',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Why custom exceptions inherit from Exception, not BaseException',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why should custom user-defined exceptions inherit from `Exception` rather than `BaseException`?',
    codeSnippet: `# Catching "except Exception:" is intended to catch all normal
# application-level errors while letting SystemExit, KeyboardInterrupt pass.
print("Inherit from Exception so standard handlers catch it safely")`,
    stdoutExpected: 'Inherit from Exception so standard handlers catch it safely',
    explanationTitle: 'Inherit from Exception to Allow Normal Interception',
    explanationText:
      'Standard application exception handlers use `except Exception:`. Inheriting from `BaseException` would bypass these handlers and can interfere with process termination (like Ctrl+C).',
    complexityInfo: 'PCAP architectural best practice',
  },
  {
    id: 'pcap-s2-fc-083',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'System-exiting exceptions: KeyboardInterrupt, SystemExit',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Which of the following does NOT inherit from `Exception`: `ZeroDivisionError`, `KeyError`, `SystemExit`?',
    codeSnippet: `exceptions = [ZeroDivisionError, KeyError, SystemExit]
for ex in exceptions:
    print(f"{ex.__name__}: {issubclass(ex, Exception)}")`,
    stdoutExpected: `ZeroDivisionError: True
KeyError: True
SystemExit: False`,
    explanationTitle: 'SystemExit Subclasses BaseException Directly',
    explanationText:
      '`SystemExit`, `KeyboardInterrupt`, and `GeneratorExit` inherit directly from `BaseException`. Therefore, `except Exception:` will NOT intercept them.',
    complexityInfo: 'Non-Exception system subclass isolation',
  },
  {
    id: 'pcap-s2-fc-084',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'ArithmeticError branch: ZeroDivisionError and OverflowError',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Which built-in base class do `ZeroDivisionError`, `OverflowError`, and `FloatingPointError` inherit from?',
    codeSnippet: `print(issubclass(ZeroDivisionError, ArithmeticError))
print(issubclass(OverflowError, ArithmeticError))
print(issubclass(FloatingPointError, ArithmeticError))`,
    stdoutExpected: `True
True
True`,
    explanationTitle: 'ArithmeticError Unifies Math Errors',
    explanationText:
      '`ArithmeticError` is the built-in base class for math calculation failures: `ZeroDivisionError`, `OverflowError`, and `FloatingPointError`. Catching `ArithmeticError` catches all three.',
    complexityInfo: 'ArithmeticError family hierarchy',
  },
  {
    id: 'pcap-s2-fc-085',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'LookupError branch: IndexError and KeyError',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What common base class is shared by `IndexError` and `KeyError`?',
    codeSnippet: `print(issubclass(IndexError, LookupError))
print(issubclass(KeyError, LookupError))

def fetch(container, key):
    try:
        return container[key]
    except LookupError:
        return "Not found"

print(fetch([1, 2], 5))
print(fetch({"a": 1}, "b"))`,
    stdoutExpected: `True
True
Not found
Not found`,
    explanationTitle: 'LookupError Unifies Sequence and Mapping Failures',
    explanationText:
      '`LookupError` is the base class for exceptions raised when a key or index used on a mapping or sequence is invalid (`IndexError` and `KeyError`).',
    complexityInfo: 'LookupError polymorphism in PCAP',
  },
  {
    id: 'pcap-s2-fc-086',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'TypeError vs ValueError distinction',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'When is `TypeError` raised versus `ValueError`?',
    codeSnippet: `try:
    len(42)  # int has no len()
except TypeError as e:
    print(type(e).__name__)

try:
    int("xyz")  # str is expected type, but invalid value content
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `TypeError
ValueError`,
    explanationTitle: 'TypeError = Incompatible Type, ValueError = Inappropriate Value',
    explanationText:
      '`TypeError` is raised when an operation or function is applied to an object of inappropriate type. `ValueError` occurs when an argument has the right type but an unacceptable value.',
    complexityInfo: 'Fundamental exception classification',
  },
  {
    id: 'pcap-s2-fc-087',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Standard library ValueError examples',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Which of these operations raises `ValueError`: `int("12.5")`, `math.sqrt(-4)`, `"abc".index("z")`?',
    codeSnippet: `import math
errors = []
for op in [
    lambda: int("12.5"),
    lambda: math.sqrt(-4),
    lambda: "abc".index("z")
]:
    try:
        op()
    except ValueError as e:
        errors.append(type(e).__name__)
print(len(errors))`,
    stdoutExpected: '3',
    explanationTitle: 'All Three Raise ValueError',
    explanationText:
      '`int("12.5")` (invalid literal for int), `math.sqrt(-4)` (domain error), and `str.index("z")` (substring not found) all raise `ValueError`.',
    complexityInfo: 'Common ValueError triggers on PCAP',
  },
  {
    id: 'pcap-s2-fc-088',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'KeyError in dictionary operations',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How can you retrieve a dictionary key without triggering a `KeyError`?',
    codeSnippet: `d = {"name": "Alice"}
try:
    print(d["age"])
except KeyError:
    print("Caught KeyError")
print(d.get("age", 30))`,
    stdoutExpected: `Caught KeyError
30`,
    explanationTitle: 'dict[key] vs dict.get(key, default)',
    explanationText:
      'Direct bracket lookup `d[k]` raises `KeyError` when the key is missing. The `.get(key, default)` method returns `None` or a specified default without raising an exception.',
    complexityInfo: 'Safe aggregate dictionary access',
  },
  {
    id: 'pcap-s2-fc-089',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'AttributeError on nonexistent methods and properties',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What exception is raised when calling a method that does not exist on a data type?',
    codeSnippet: `num = 123
try:
    num.append(4)
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'AttributeError on Missing Methods/Attributes',
    explanationText:
      '`AttributeError` is raised when an attribute reference or assignment fails, such as calling `.append()` on an `int`.',
    complexityInfo: 'Attribute lookup failure',
  },
  {
    id: 'pcap-s2-fc-090',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'NameError and UnboundLocalError',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the relationship between `UnboundLocalError` and `NameError`?',
    codeSnippet: `print(issubclass(UnboundLocalError, NameError))

def f():
    try:
        print(val)
        val = 10
    except UnboundLocalError as e:
        print(type(e).__name__)

f()`,
    stdoutExpected: `True
UnboundLocalError`,
    explanationTitle: 'UnboundLocalError Subclasses NameError',
    explanationText:
      '`UnboundLocalError` is a subclass of `NameError`. It is raised when referencing a local variable in a function before it has been bound to a value.',
    complexityInfo: 'Scope variable resolution exception',
  },
  {
    id: 'pcap-s2-fc-091',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'ImportError and ModuleNotFoundError hierarchy',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the superclass of `ModuleNotFoundError`?',
    codeSnippet: `print(issubclass(ModuleNotFoundError, ImportError))
try:
    import non_existent_pcap_module
except ImportError as e:
    print("Caught as ImportError:", type(e).__name__)`,
    stdoutExpected: `True
Caught as ImportError: ModuleNotFoundError`,
    explanationTitle: 'ModuleNotFoundError Inherits from ImportError',
    explanationText:
      '`ModuleNotFoundError` was introduced in Python 3.6 as a subclass of `ImportError`. Any `except ImportError:` block successfully catches `ModuleNotFoundError`.',
    complexityInfo: 'Import subsystem exception inheritance',
  },
  {
    id: 'pcap-s2-fc-092',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'OSError hierarchy: FileNotFoundError and PermissionError',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the common base class for `FileNotFoundError` and `PermissionError`?',
    codeSnippet: `print(issubclass(FileNotFoundError, OSError))
print(issubclass(PermissionError, OSError))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Operating System Exceptions Subclass OSError',
    explanationText:
      'In Python 3.3+, I/O and filesystem errors such as `FileNotFoundError`, `PermissionError`, and `IsADirectoryError` inherit from `OSError` (which itself inherits from `Exception`).',
    complexityInfo: 'System exception taxonomy',
  },
  {
    id: 'pcap-s2-fc-093',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'StopIteration in iterator protocol',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What exception signals the termination of an iterator?',
    codeSnippet: `it = iter([1])
print(next(it))
try:
    next(it)
except StopIteration as e:
    print(type(e).__name__)`,
    stdoutExpected: `1
StopIteration`,
    explanationTitle: 'next() Raises StopIteration Upon Exhaustion',
    explanationText:
      'When an iterator has no further items, calling `next()` raises `StopIteration`. For-loops internally intercept `StopIteration` to smoothly terminate looping.',
    complexityInfo: 'Iterator termination signal',
  },
  {
    id: 'pcap-s2-fc-094',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Creating a custom user-defined exception',
    category: 'T4: OOP / Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the minimum syntax required to define a custom user exception in Python?',
    codeSnippet: `class AppError(Exception):
    pass

try:
    raise AppError("Fatal failure")
except AppError as e:
    print(type(e).__name__, ":", e)`,
    stdoutExpected: 'AppError : Fatal failure',
    explanationTitle: 'Subclassing Exception Creates a Valid Custom Exception',
    explanationText:
      'Defining a class that inherits from `Exception` (or any existing exception subclass) and using `pass` is completely sufficient. It automatically inherits message storage and `.args`.',
    complexityInfo: 'Custom exception declaration',
  },
  {
    id: 'pcap-s2-fc-095',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Custom exception with extra attributes via __init__',
    category: 'T4: OOP / Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do you customize a user exception constructor and call `super().__init__()`?',
    codeSnippet: `class ServerError(Exception):
    def __init__(self, code, message):
        super().__init__(message)
        self.code = code

try:
    raise ServerError(503, "Service Unavailable")
except ServerError as e:
    print(e.code, e.args)`,
    stdoutExpected: "503 ('Service Unavailable',)",
    explanationTitle: 'Extending Custom Exception State with super().__init__()',
    explanationText:
      'A custom exception can define its own `__init__` to store additional metadata (like HTTP status codes), while delegating message storage to `super().__init__(message)`.',
    complexityInfo: 'Exception state specialization',
  },
  {
    id: 'pcap-s2-fc-096',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'The exception .args tuple attribute',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the type and content of `err.args` when an exception is raised with 3 arguments?',
    codeSnippet: `try:
    raise Exception("Err", 101, True)
except Exception as e:
    print(type(e.args).__name__)
    print(len(e.args))
    print(e.args[1])`,
    stdoutExpected: `tuple
3
101`,
    explanationTitle: '.args is Always a Tuple of Arguments',
    explanationText:
      'All positional arguments passed during exception instantiation are captured inside the `.args` tuple attribute of the exception instance.',
    complexityInfo: 'Core exception object property',
  },
  {
    id: 'pcap-s2-fc-097',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Custom exception inheritance and hierarchical catching',
    category: 'T4: OOP / Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'If `DatabaseError` inherits from `AppError`, can `except AppError:` catch `DatabaseError`?',
    codeSnippet: `class AppError(Exception): pass
class DatabaseError(AppError): pass

try:
    raise DatabaseError("Query timed out")
except AppError as e:
    print("Caught:", type(e).__name__)`,
    stdoutExpected: 'Caught: DatabaseError',
    explanationTitle: 'Base Custom Exception Handlers Catch Subclasses',
    explanationText:
      'Because `DatabaseError` is a subclass of `AppError`, any `except AppError:` handler catches both `AppError` and `DatabaseError`.',
    complexityInfo: 'Polymorphic custom error handling',
  },
  {
    id: 'pcap-s2-fc-098',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Raising non-BaseException objects raises TypeError',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What exception occurs if you attempt to `raise 404` or raise a class not inheriting from `BaseException`?',
    codeSnippet: `try:
    raise 404
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'raise Requires BaseException Subclass or Instance',
    explanationText:
      'In Python, `raise` only accepts classes or instances derived from `BaseException`. Attempting to raise an arbitrary object like `404` or `"Error"` raises `TypeError: exceptions must derive from BaseException`.',
    complexityInfo: 'Language grammar constraint on raise',
  },
  {
    id: 'pcap-s2-fc-099',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Custom exception str() representation and __str__',
    category: 'T4: OOP / Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What does `str(err)` return by default on an exception instantiated with a single message string?',
    codeSnippet: `err = ValueError("Connection reset by peer")
print(str(err))
print(repr(err))`,
    stdoutExpected: `Connection reset by peer
ValueError('Connection reset by peer')`,
    explanationTitle: 'str(e) Returns the Formatted Error Message',
    explanationText:
      'The `__str__()` method of `BaseException` returns the message string if one argument was passed, or the string representation of `.args` tuple if multiple arguments were passed.',
    complexityInfo: 'String representation protocol on exceptions',
  },
  {
    id: 'pcap-s2-fc-100',
    cardType: 'PCAP 2.5 • Exception Hierarchy',
    topic: 'Complete exception flow with custom hierarchy and args unpacking',
    category: 'T4: OOP / Exceptions',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Trace the output of this comprehensive custom exception pipeline:',
    codeSnippet: `class MathDomainError(ArithmeticError):
    def __init__(self, val, msg="Out of range"):
        super().__init__(msg, val)
        self.val = val

def compute(x):
    if x < 0:
        raise MathDomainError(x)
    return x ** 0.5

try:
    compute(-9)
except ArithmeticError as e:
    print(type(e).__name__, e.args[0], e.args[1])`,
    stdoutExpected: 'MathDomainError Out of range -9',
    explanationTitle: 'Full Inheritance, args Binding and Subclass Resolution',
    explanationText:
      '`MathDomainError` inherits from `ArithmeticError`. Raising it routes into `except ArithmeticError:`. `super().__init__("Out of range", -9)` populates `e.args` as `(\'Out of range\', -9)`.',
    complexityInfo: 'Comprehensive PCAP exception capstone',
  },
];
