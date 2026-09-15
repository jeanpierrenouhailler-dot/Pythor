import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 1: COMPUTER PROGRAMMING & PYTHON FUNDAMENTALS (Part 2: Cards 36 to 70)
 * - Chapter 1.2: Literals & Numeric Types completion (Cards 36-40)
 * - Chapter 1.3: Basic I/O: print(), input(), sep=, end=, and Escape Sequences (Cards 41-60)
 * - Chapter 1.4: Operators, Precedence, and Expressions (Cards 61-70)
 */
export const pcepSection1CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.2 COMPLETION: LITERALS & NUMERIC TYPES (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcep-s1-fc-036',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'int() Base Conversion from Strings',
    category: 'Literals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the output of converting strings in bases 2, 8, and 16 using int(str, base)?',
    codeSnippet: `print(int("1010", 2))
print(int("12", 8))
print(int("A", 16))`,
    stdoutExpected: `10
10
10`,
    explanationTitle: 'Base Conversions with int()',
    explanationText:
      'The built-in `int(string, base)` function parses string representations of numbers in any base from 2 to 36. Binary "1010" is 10, octal "12" is (1×8 + 2) = 10, and hexadecimal "A" is 10.',
    complexityInfo: 'Official PCEP question format for number system conversions',
  },
  {
    id: 'pcep-s1-fc-037',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'int() Truncation of Floating-Point Numbers',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Does int(5.9) and int(-5.9) round or truncate toward zero?',
    codeSnippet: `print(int(5.9))
print(int(-5.9))`,
    stdoutExpected: `5
-5`,
    explanationTitle: 'int() Truncation Semantics',
    explanationText:
      'Passing a float to `int()` discards the fractional portion entirely (truncation towards zero). It does NOT perform mathematical rounding (which is handled by `round()`). Thus, `int(5.9)` is `5` and `int(-5.9)` is `-5`.',
    complexityInfo: 'Crucial contrast with `//` which floors toward negative infinity',
  },
  {
    id: 'pcep-s1-fc-038',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Raw String Literals (r prefix)',
    category: 'Literals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How does prefixing a string literal with r or R affect escape sequences like \\n?',
    codeSnippet: `normal = "a\\nb"
raw = r"a\\nb"
print(len(normal))
print(len(raw))`,
    stdoutExpected: `3
4`,
    explanationTitle: 'Raw String Escape Suppression',
    explanationText:
      'Prefixing a string literal with `r` or `R` creates a "raw string". In raw strings, backslashes are treated as literal backslash characters rather than escape character prefixes. In `r"a\\nb"`, the backslash and `n` are two distinct characters, giving length 4.',
    complexityInfo: 'Often tested in Python string literals sections',
  },
  {
    id: 'pcep-s1-fc-039',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Boolean Truth Value of Numeric Literals',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the boolean evaluation of numeric literals 0, 0.0, -1, and 42?',
    codeSnippet: `print(bool(0), bool(0.0))
print(bool(-1), bool(42))`,
    stdoutExpected: `False False
True True`,
    explanationTitle: 'Truth Value Testing of Numbers',
    explanationText:
      'In Python, any numeric zero (`0`, `0.0`, `0j`) evaluates to `False`. Any non-zero numeric value—whether positive or negative—evaluates to `True`.',
    complexityInfo: 'Note that negative numbers like -1 evaluate to True in Python',
  },
  {
    id: 'pcep-s1-fc-040',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'The id() Function and Memory Identity',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What does the built-in id() function return for an object in Python?',
    codeSnippet: `x = 42
# id(x) returns an integer representing the object's unique memory address
print(isinstance(id(x), int))`,
    stdoutExpected: 'True',
    explanationTitle: 'Object Identity with id()',
    explanationText:
      '`id(object)` returns an integer representing the identity of the object. In CPython, this corresponds directly to the memory address where the object is allocated. The identity is guaranteed to be unique and constant for the object during its lifetime.',
    complexityInfo: 'Forms the basis for the `is` identity comparison operator',
  },

  // =========================================================================
  // CHAPTER 1.3: BASIC I/O: PRINT(), INPUT(), SEP=, END=, ESCAPE SEQUENCES (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcep-s1-fc-041',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Default Delimiter in print() with Multiple Arguments',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What separates multiple positional arguments in a print() call by default?',
    codeSnippet: `print("Alpha", "Beta", "Gamma")`,
    stdoutExpected: 'Alpha Beta Gamma',
    explanationTitle: 'Default sep Character',
    explanationText:
      'When multiple arguments are passed to `print()`, Python automatically inserts a single space character (`" "`) between each argument by default before sending output to standard output.',
    complexityInfo: 'Official PCEP syllabus: default print() behavior',
  },
  {
    id: 'pcep-s1-fc-042',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The sep Keyword Argument in print()',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the output when sep is set to a custom delimiter string?',
    codeSnippet: `print("2026", "09", "15", sep="-")`,
    stdoutExpected: '2026-09-15',
    explanationTitle: 'Custom Separators with sep',
    explanationText:
      'The keyword argument `sep=` replaces the default space delimiter between positional arguments. Here, each string is separated by a hyphen `-`.',
    complexityInfo: 'Standard PCEP question format',
  },
  {
    id: 'pcep-s1-fc-043',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Empty String sep="" in print()',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What happens when sep="" is specified in a print() call?',
    codeSnippet: `print("Py", "th", "on", sep="")`,
    stdoutExpected: 'Python',
    explanationTitle: 'Concatenation Output via sep=""',
    explanationText:
      'Setting `sep=""` instructs Python to place zero characters between positional arguments, causing them to be printed immediately adjacent to one another.',
    complexityInfo: 'Useful for printing values together without explicit string conversion',
  },
  {
    id: 'pcep-s1-fc-044',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The end Keyword Argument in print()',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the default value of the end parameter, and how does end=" " change output?',
    codeSnippet: `print("Hello", end=" ")
print("World")`,
    stdoutExpected: 'Hello World',
    explanationTitle: 'Suppressing Newlines with end',
    explanationText:
      'By default, `print()` finishes by printing a newline character `end="\\n"`. Setting `end=" "` replaces the newline with a space, allowing the next `print()` call to continue on the very same console line.',
    complexityInfo: 'One of the most frequently tested PCEP concepts',
  },
  {
    id: 'pcep-s1-fc-045',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Combining sep and end Parameters',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the exact output of combining both sep and end keyword arguments?',
    codeSnippet: `print("A", "B", sep="*", end="#")
print("C", "D", sep="+")`,
    stdoutExpected: 'A*B#C+D',
    explanationTitle: 'Simultaneous sep and end Formatting',
    explanationText:
      'The first print outputs "A" and "B" joined by "*", terminated by "#" without a newline. The second print starts immediately after "#", printing "C" and "D" separated by "+", and ends with a default newline.',
    complexityInfo: 'Common PCEP exam trap testing exact boundary characters',
  },
  {
    id: 'pcep-s1-fc-046',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Keyword Argument Ordering in Function Invocations',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Can positional arguments appear AFTER keyword arguments like sep in print()?',
    codeSnippet: `# print(sep="-", "A", "B")
# SyntaxError: positional argument follows keyword argument
print("SyntaxError: positional argument follows keyword argument")`,
    stdoutExpected: 'SyntaxError: positional argument follows keyword argument',
    explanationTitle: 'Positional vs Keyword Order Rule',
    explanationText:
      'In Python function calls, all positional arguments must precede any keyword arguments. Placing `sep="- "` before positional arguments produces a `SyntaxError: positional argument follows keyword argument`. However, keyword arguments among themselves can appear in any relative order.',
    complexityInfo: 'Fundamental syntax constraint tested across all levels',
  },
  {
    id: 'pcep-s1-fc-047',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Empty print() Invocations',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is output when print() is called without any arguments?',
    codeSnippet: `print("Top")
print()
print("Bottom")`,
    stdoutExpected: `Top

Bottom`,
    explanationTitle: 'Empty print() Emits Newline',
    explanationText:
      'Calling `print()` with no positional arguments prints the default `end` character, which is a single newline `\\n`. This produces an empty blank line in the console.',
    complexityInfo: 'Simple but tested in visual trace output questions',
  },
  {
    id: 'pcep-s1-fc-048',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The \\n Escape Sequence',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What effect does the escape sequence \\n have when embedded inside a string?',
    codeSnippet: `print("Line1\\nLine2\\nLine3")`,
    stdoutExpected: `Line1
Line2
Line3`,
    explanationTitle: 'Newline Escape Sequence',
    explanationText:
      'The backslash `\\` introduces an escape sequence. `\\n` represents the ASCII Line Feed (LF) character (newline), causing subsequent characters to begin on the next line.',
    complexityInfo: 'PCEP escape sequence syllabus core item',
  },
  {
    id: 'pcep-s1-fc-049',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The \\t Tab Escape Sequence',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What does the \\t escape sequence insert into the output stream?',
    codeSnippet: `print("Item\\tQty\\tPrice")
print("Pen\\t10\\t$2")`,
    stdoutExpected: `Item	Qty	Price
Pen	10	$2`,
    explanationTitle: 'Horizontal Tab Character',
    explanationText:
      '`\\t` represents a horizontal tab character, advancing the cursor to the next tab stop (typically a multiple of 4 or 8 character columns).',
    complexityInfo: 'Standard escape character tested on PCEP',
  },
  {
    id: 'pcep-s1-fc-050',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The \\\\ Literal Backslash Escape Sequence',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How do you print a single literal backslash character in Python?',
    codeSnippet: `print("C:\\\\Windows\\\\System32")`,
    stdoutExpected: 'C:\\Windows\\System32',
    explanationTitle: 'Escaped Backslash Sequence',
    explanationText:
      'Because the backslash `\\` is the escape character, typing a single backslash begins an escape sequence. To print a literal backslash, you must escape it with another backslash: `\\\\`.',
    complexityInfo: 'Critical for file path strings and regular expressions',
  },
  {
    id: 'pcep-s1-fc-051',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Escaping Quotes (\\\' and \\")',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the output of escaping a quotation mark inside matching string delimiters?',
    codeSnippet: `print('It\\'s a sunny day')
print("He said, \\"Go!\\"")`,
    stdoutExpected: `It's a sunny day
He said, "Go!"`,
    explanationTitle: 'Quotation Escaping',
    explanationText:
      'Preceding a quote character with a backslash (`\\\'` inside single quotes or `\\"` inside double quotes) prevents Python from interpreting it as the string delimiter, treating it instead as a literal character.',
    complexityInfo: 'Standard PCEP question test case',
  },
  {
    id: 'pcep-s1-fc-052',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'String Concatenation with + Operator',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the output of concatenating two strings using the + operator?',
    codeSnippet: `s = "Py" + "thon"
print(s)
print(len(s))`,
    stdoutExpected: `Python
6`,
    explanationTitle: 'String Concatenation',
    explanationText:
      'When applied to two strings, the `+` operator performs concatenation, joining them end-to-end to create a new string without inserting any intervening spaces.',
    complexityInfo: 'Contrast: print("Py", "thon") adds a space; "Py" + "thon" does not',
  },
  {
    id: 'pcep-s1-fc-053',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'TypeError on String + Number',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Can you concatenate a string and an integer directly using + without type conversion?',
    codeSnippet: `# s = "Python " + 3
# TypeError: can only concatenate str (not "int") to str
print("TypeError: can only concatenate str (not \\"int\\") to str")`,
    stdoutExpected: 'TypeError: can only concatenate str (not "int") to str',
    explanationTitle: 'Strong Typing Prevents Implicit String Conversion',
    explanationText:
      'Python is a strongly typed language and does not implicitly coerce integers into strings during addition. Attempting `"Score: " + 10` raises a `TypeError`. You must explicitly call `str(10)` or use formatting.',
    complexityInfo: 'Classic trap for developers coming from JavaScript or PHP',
  },
  {
    id: 'pcep-s1-fc-054',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'String Replication with * Operator',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the output of "Ha" * 3 and 3 * "Ha"?',
    codeSnippet: `print("Ha" * 3)
print(2 * "=" * 4)`,
    stdoutExpected: `HaHaHa
========`,
    explanationTitle: 'String Replication Operator (*)',
    explanationText:
      'When one operand is a string and the other is an integer, the `*` operator performs replication, repeating the string sequence N times. The order of operands does not matter (`str * int` is identical to `int * str`).',
    complexityInfo: 'PCEP syllabus specifically details string replication',
  },
  {
    id: 'pcep-s1-fc-055',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'String Replication with Zero or Negative Integers',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the output of multiplying a string by 0 or a negative integer like -2?',
    codeSnippet: `print("Python" * 0)
print("Python" * -3)
print(len("Python" * -1))`,
    stdoutExpected: `

0`,
    explanationTitle: 'Replication with Count <= 0',
    explanationText:
      'Multiplying a string by an integer less than or equal to zero (`<= 0`) produces an empty string `""` with a length of `0`. It does NOT raise an error.',
    complexityInfo: 'Frequent PCEP trick question',
  },
  {
    id: 'pcep-s1-fc-056',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The input() Function Return Type',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the data type returned by the input() function regardless of what the user enters?',
    codeSnippet: `# Even if the user enters digits like: 123
# user_val = input()
user_val = "123"  # simulated input result
print(type(user_val).__name__)`,
    stdoutExpected: 'str',
    explanationTitle: 'input() Always Returns str',
    explanationText:
      'In Python 3, `input()` always reads the user’s console input as a string (`str`), even if purely numeric digits were entered. To use the input in arithmetic computations, it must be explicitly converted using `int()` or `float()`.',
    complexityInfo: 'One of the top 3 most tested questions on PCEP',
  },
  {
    id: 'pcep-s1-fc-057',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'input() with Prompt Argument',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How does input("Enter age: ") display its prompt to the user?',
    codeSnippet: `# input("Prompt: ") prints the prompt string to stdout without a trailing newline,
# then blocks waiting for the user to press Enter.
print("Prompt printed without trailing newline")`,
    stdoutExpected: 'Prompt printed without trailing newline',
    explanationTitle: 'input() Prompt Execution',
    explanationText:
      'The optional prompt string argument passed to `input(prompt)` is written to standard output without a trailing newline. The cursor remains on the same line, waiting for user input until the Enter key is pressed.',
    complexityInfo: 'PCEP syllabus: input() mechanics',
  },
  {
    id: 'pcep-s1-fc-058',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'Type Conversion of input() for Arithmetic',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What happens if you add two input() results without casting them to int?',
    codeSnippet: `num1 = "5"  # simulated input() result
num2 = "3"  # simulated input() result
print(num1 + num2)
print(int(num1) + int(num2))`,
    stdoutExpected: `53
8`,
    explanationTitle: 'Concatenation vs Arithmetic Addition',
    explanationText:
      'Because `input()` returns strings, `num1 + num2` performs string concatenation (`"5"` + `"3"` = `"53"`). To perform mathematical addition, you must convert them with `int()`: `5 + 3 = 8`.',
    complexityInfo: 'Fundamental PCEP code analysis scenario',
  },
  {
    id: 'pcep-s1-fc-059',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'ValueError on Invalid String Conversion to int()',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What exception is raised when passing "12.5" directly to int()?',
    codeSnippet: `# int("12.5") raises:
# ValueError: invalid literal for int() with base 10: '12.5'
print("ValueError: invalid literal for int() with base 10")`,
    stdoutExpected: 'ValueError: invalid literal for int() with base 10',
    explanationTitle: 'int() Rejects Floating String Literals',
    explanationText:
      'The `int()` constructor cannot directly parse a string containing a decimal point. While `int(12.5)` (a float literal) works by truncation, `int("12.5")` (a string) raises `ValueError`. To parse it, you must use `float("12.5")` or `int(float("12.5"))`.',
    complexityInfo: 'Very common PCEP trick question',
  },
  {
    id: 'pcep-s1-fc-060',
    track: 'pcep',
    cardType: 'PCEP 1.3 • Basic I/O & Escapes',
    topic: 'The float() Conversion Function',
    category: 'I/O & Strings',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What does float("42") and float("3.14") return?',
    codeSnippet: `print(float("42"))
print(float("3.14"))`,
    stdoutExpected: `42.0
3.14`,
    explanationTitle: 'float() Type Casting',
    explanationText:
      'The `float()` built-in converts numeric strings and integers into floating-point numbers. Converting integer string `"42"` appends `.0` to create `42.0`.',
    complexityInfo: 'Basic I/O and type conversion',
  },

  // =========================================================================
  // CHAPTER 1.4: OPERATORS, PRECEDENCE, AND EXPRESSIONS (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcep-s1-fc-061',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Addition and Subtraction Operands and Promotion',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the resulting type of adding an int and a float in Python?',
    codeSnippet: `res = 10 + 2.5
print(res)
print(type(res).__name__)`,
    stdoutExpected: `12.5
float`,
    explanationTitle: 'Implicit Numeric Promotion',
    explanationText:
      'When an arithmetic operation involves mixed numeric types (an integer and a float), Python automatically promotes the integer to a float before computing the result, yielding a `float`.',
    complexityInfo: 'Basic arithmetic type coercion rule',
  },
  {
    id: 'pcep-s1-fc-062',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'True Division (/) Always Produces float',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the result and type of 6 / 3 in Python 3?',
    codeSnippet: `val = 6 / 3
print(val)
print(type(val).__name__)`,
    stdoutExpected: `2.0
float`,
    explanationTitle: 'True Division (/): Always Float',
    explanationText:
      'In Python 3, the single forward slash `/` is the true division operator. It ALWAYS produces a floating-point number (`float`), even when the operands divide evenly with zero remainder (e.g. `6 / 3` is `2.0`, not `2`).',
    complexityInfo: 'Number one distinction from Python 2 and C/Java integer division',
  },
  {
    id: 'pcep-s1-fc-063',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Floor Division (//) with Positive Integers',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of 7 // 2 and 6 // 3?',
    codeSnippet: `print(7 // 2)
print(6 // 3)`,
    stdoutExpected: `3
2`,
    explanationTitle: 'Floor Division with Integers',
    explanationText:
      'The `//` operator performs floor division, rounding down to the nearest integer. When both operands are integers, the result is an `int`. `7 // 2` evaluates to `3`.',
    complexityInfo: 'Fundamental operator in PCEP Section 1',
  },
  {
    id: 'pcep-s1-fc-064',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Floor Division (//) with Negative Numbers',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of -7 // 2 and -6 // 4 in Python?',
    codeSnippet: `print(-7 // 2)
print(-6 // 4)`,
    stdoutExpected: `-4
-2`,
    explanationTitle: 'Floor Division Rounds Toward Negative Infinity',
    explanationText:
      'Python floor division always rounds down towards negative infinity (lesser value). `-7 / 2` is `-3.5`, so rounding down towards negative infinity yields `-4`, NOT `-3`! Similarly, `-6 / 4 = -1.5`, rounding down yields `-2`.',
    complexityInfo: 'Major exam trap: Python floors towards -infinity, unlike C/Java which truncate toward 0',
  },
  {
    id: 'pcep-s1-fc-065',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Floor Division (//) with Float Operands',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output and type of 7.0 // 2 in Python?',
    codeSnippet: `res = 7.0 // 2
print(res)
print(type(res).__name__)`,
    stdoutExpected: `3.0
float`,
    explanationTitle: 'Float Floor Division',
    explanationText:
      'If either operand in floor division is a float, the result is computed as a mathematical floor but stored as a `float` (with a fractional part of `.0`). `7.0 // 2` is `3.0`.',
    complexityInfo: 'Type inference rule for // operator',
  },
  {
    id: 'pcep-s1-fc-066',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Modulo Operator (%) with Positive Integers',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of 14 % 4 and 10 % 2 in Python?',
    codeSnippet: `print(14 % 4)
print(10 % 2)`,
    stdoutExpected: `2
0`,
    explanationTitle: 'Modulo Remainder Operator',
    explanationText:
      'The `%` operator calculates the remainder of division. For `14 % 4`: 14 divided by 4 is 3 with remainder 2. For `10 % 2`: 10 is an exact multiple of 2, so remainder is 0.',
    complexityInfo: 'Standard modulo operator usage',
  },
  {
    id: 'pcep-s1-fc-067',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Modulo Operator (%) with Negative Operands',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of -7 % 3 and 7 % -3 in Python?',
    codeSnippet: `print(-7 % 3)
print(7 % -3)`,
    stdoutExpected: `2
-2`,
    explanationTitle: 'Modulo Identity Formula',
    explanationText:
      'Python defines modulo via the exact identity: `r = a - (a // b) * b`. For `-7 % 3`: `-7 // 3 = -3`. Then `-7 - (-3 * 3) = -7 - (-9) = 2`. The sign of the result always matches the sign of the divisor `b`.',
    complexityInfo: 'Legendary PCEP test question testing the modulo formula',
  },
  {
    id: 'pcep-s1-fc-068',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Exponentiation (**) Basics',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of 2 ** 4 and 3 ** 3 in Python?',
    codeSnippet: `print(2 ** 4)
print(3 ** 3)`,
    stdoutExpected: `16
27`,
    explanationTitle: 'Power Operator (**)',
    explanationText:
      'The double asterisk `**` is the exponentiation (power) operator. `2 ** 4` raises 2 to the 4th power (2×2×2×2 = 16), and `3 ** 3 = 27`.',
    complexityInfo: 'Python uses ** instead of ^ (which is bitwise XOR)',
  },
  {
    id: 'pcep-s1-fc-069',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Exponentiation Fractional Powers (Roots)',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the result of 16 ** 0.5 in Python?',
    codeSnippet: `val = 16 ** 0.5
print(val)
print(type(val).__name__)`,
    stdoutExpected: `4.0
float`,
    explanationTitle: 'Square Root via Fractional Exponent',
    explanationText:
      'Raising a number to the power `0.5` computes its square root (16^0.5 = 4.0). Because the exponent is a float, the result is a `float`.',
    complexityInfo: 'Frequently tested alternative to math.sqrt()',
  },
  {
    id: 'pcep-s1-fc-070',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'ZeroDivisionError with Division, Floor Division, and Modulo',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Which of the following raises a ZeroDivisionError: 5 / 0, 5 // 0, or 5 % 0?',
    codeSnippet: `# All three operations raise ZeroDivisionError when divisor is 0:
# 5 / 0
# 5 // 0
# 5 % 0
print("ZeroDivisionError: division by zero")`,
    stdoutExpected: 'ZeroDivisionError: division by zero',
    explanationTitle: 'Zero Division Exception',
    explanationText:
      'Division by zero is undefined in mathematics and Python raises a `ZeroDivisionError` for all three division operators: true division `/`, floor division `//`, and modulo `%`.',
    complexityInfo: 'Universal runtime error on PCEP',
  },
];
