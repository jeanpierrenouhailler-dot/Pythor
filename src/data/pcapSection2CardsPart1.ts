import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 2: DATA AGGREGATES AND EXCEPTIONS (Part 1: Cards 1 to 35)
 * - Chapter 2.1: Characters, Encoding, ASCII/Unicode & Immutability (Cards 1-20)
 * - Chapter 2.2: String Methods Deep-Dive: Predicates & Search (Cards 21-35)
 */
export const section2CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.1: CHARACTERS, ENCODING, ASCII/UNICODE & IMMUTABILITY (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcap-s2-fc-001',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'String immutability and item assignment',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What exception is raised when attempting to modify a character in a Python string by index?',
    codeSnippet: `s = "python"
try:
    s[0] = "P"
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Strings Are Strictly Immutable',
    explanationText:
      'Python strings are immutable sequence types. Once created, individual characters cannot be reassigned. Attempting item assignment raises `TypeError: \'str\' object does not support item assignment`.',
    complexityInfo: 'Core Python sequence characteristic',
  },
  {
    id: 'pcap-s2-fc-002',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'del statement on string index',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What exception occurs if you use `del s[0]` on a string `s = "alpha"`?',
    codeSnippet: `s = "alpha"
try:
    del s[0]
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Item Deletion Unsupported on Strings',
    explanationText:
      'Because strings are immutable, item deletion via `del s[index]` is not permitted and raises `TypeError: \'str\' object doesn\'t support item deletion`. You can only delete the whole variable `del s`.',
    complexityInfo: 'Immutability enforcement',
  },
  {
    id: 'pcap-s2-fc-003',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'ord() function and code points',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What does `ord(\'a\')` return, and what argument type does `ord()` require?',
    codeSnippet: `code_a = ord('a')
code_A = ord('A')
print(code_a, code_A)
print(type(code_a).__name__)`,
    stdoutExpected: `97 65
int`,
    explanationTitle: 'ord() Returns Integer Unicode Code Point',
    explanationText:
      '`ord(c)` takes a single character string and returns its integer Unicode/ASCII code point (`97` for lowercase `\'a\'`, `65` for uppercase `\'A\'`). Passing a string of length != 1 raises `TypeError`.',
    complexityInfo: 'ASCII / Unicode code point lookup',
  },
  {
    id: 'pcap-s2-fc-004',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'ord() exception on multi-character strings',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What exception is raised when passing a string with length > 1 to `ord()`?',
    codeSnippet: `try:
    ord("ab")
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'ord() Requires Exactly One Character',
    explanationText:
      '`ord()` expects a string of length exactly 1. Passing an empty string `""` or multiple characters `"ab"` raises `TypeError: ord() expected a character, but string of length ... found`.',
    complexityInfo: 'Function signature constraint on PCAP',
  },
  {
    id: 'pcap-s2-fc-005',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'chr() function inverse of ord()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What does `chr(97)` and `chr(65)` return, and what does `chr(ord(x))` evaluate to?',
    codeSnippet: `print(chr(97))
print(chr(65))
ch = 'Z'
print(chr(ord(ch)) == ch)`,
    stdoutExpected: `a
A
True`,
    explanationTitle: 'chr() Converts Integer Code Point to Character',
    explanationText:
      '`chr(i)` takes an integer Unicode code point and returns its one-character string representation. `chr(ord(c))` is an identity operation for any valid character.',
    complexityInfo: 'Bi-directional character conversion',
  },
  {
    id: 'pcap-s2-fc-006',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'chr() valid argument range and ValueError',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What exception is raised if `chr()` is passed a negative integer or a number exceeding 0x10FFFF?',
    codeSnippet: `try:
    chr(-1)
except ValueError as e:
    print(type(e).__name__)
try:
    chr(0x110000)
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `ValueError
ValueError`,
    explanationTitle: 'chr() Valid Range 0 <= i <= 0x10FFFF',
    explanationText:
      'The valid range for `chr()` is `0` through `1,114,111` (`0x10FFFF` in hex). Any integer outside this range raises `ValueError`. Non-integer types raise `TypeError`.',
    complexityInfo: 'Unicode range boundaries',
  },
  {
    id: 'pcap-s2-fc-007',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'ASCII standard size and range',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How many code points are defined in standard 7-bit ASCII, and what is its range?',
    codeSnippet: `# Standard ASCII uses 7 bits per character
# 2^7 = 128 code points
# Range: 0 to 127
print(ord(' ') == 32)
print(ord('0') == 48)
print(ord('A') == 65)
print(ord('a') == 97)`,
    stdoutExpected: `True
True
True
True`,
    explanationTitle: 'Standard ASCII 7-bit Encoding (0-127)',
    explanationText:
      'Standard ASCII defines 128 characters (0 to 127). Essential landmark values to memorize for PCAP: Space = 32, \'0\' = 48, \'A\' = 65, \'a\' = 97.',
    complexityInfo: 'PCAP foundational character codes',
  },
  {
    id: 'pcap-s2-fc-008',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'ASCII case conversion math using code points',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the numeric difference between any ASCII lowercase letter and its uppercase counterpart?',
    codeSnippet: `diff = ord('a') - ord('A')
print(diff)
print(chr(ord('M') + diff))`,
    stdoutExpected: `32
m`,
    explanationTitle: 'ASCII Lower/Upper Offset is 32',
    explanationText:
      'In ASCII, lowercase letters are offset from uppercase letters by exactly 32 (`ord(\'a\') - ord(\'A\') == 32`). Adding 32 to an uppercase code point converts it to lowercase.',
    complexityInfo: 'Bitwise / arithmetic character offset',
  },
  {
    id: 'pcap-s2-fc-009',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'Unicode and UTF-8 variable-length encoding',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How many bytes does UTF-8 use to encode a single character?',
    codeSnippet: `# UTF-8 is variable-length:
# 1 byte for standard ASCII (0-127)
# 2 to 4 bytes for other international characters & symbols
print("1 to 4 bytes")`,
    stdoutExpected: '1 to 4 bytes',
    explanationTitle: 'UTF-8 Uses 1 to 4 Bytes',
    explanationText:
      'UTF-8 is a variable-length character encoding standard compatible with ASCII. It uses 1 byte for ASCII characters (0-127) and up to 4 bytes for higher Unicode code points.',
    complexityInfo: 'Encoding architecture',
  },
  {
    id: 'pcap-s2-fc-010',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'String concatenation operator +',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Can you concatenate a string with an integer using the `+` operator?',
    codeSnippet: `try:
    res = "Age: " + 25
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Strict Strong Typing on String Concatenation',
    explanationText:
      'Python does not automatically coerce integers to strings during concatenation. `"Age: " + 25` raises `TypeError: can only concatenate str (not "int") to str`. You must use `str(25)`.',
    complexityInfo: 'Type safety in operators',
  },
  {
    id: 'pcap-s2-fc-011',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'String replication operator *',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the result of `"Py" * 3` and `"Py" * 0` or `"Py" * -2`?',
    codeSnippet: `print("Py" * 3)
print(repr("Py" * 0))
print(repr("Py" * -2))`,
    stdoutExpected: `PyPyPy
''
''`,
    explanationTitle: 'String Replication Semantics',
    explanationText:
      '`str * int` repeats the string `n` times. If the integer multiplier is `<= 0`, Python returns an empty string `\'\'`.',
    complexityInfo: 'Replication edge cases',
  },
  {
    id: 'pcap-s2-fc-012',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'String membership operators in and not in',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Does the `in` operator on strings check for single characters or multi-character substrings?',
    codeSnippet: `s = "certification"
print("cat" in s)
print("fit" in s)
print("" in s)`,
    stdoutExpected: `False
True
True`,
    explanationTitle: 'Substring Membership and Empty String',
    explanationText:
      'The `in` operator on strings checks for contiguous substrings of any length. Note that the empty string `""` is considered a substring of every string and always returns `True`.',
    complexityInfo: 'Substring containment & empty string rule',
  },
  {
    id: 'pcap-s2-fc-013',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'Escape sequences: newline, tab, and backslash',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the length of the string `"\\n\\t\\\\"`?',
    codeSnippet: `s = "\\n\\t\\\\"
print(len(s))`,
    stdoutExpected: '3',
    explanationTitle: 'Escape Characters Count as 1 Character',
    explanationText:
      'Each escape sequence (`\\n` for newline, `\\t` for tab, `\\\\` for literal backslash) represents exactly one single character in the string object. Thus `len("\\n\\t\\\\") == 3`.',
    complexityInfo: 'Escape sequence representation and length',
  },
  {
    id: 'pcap-s2-fc-014',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'Raw string literals with r prefix',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How do raw strings `r"..."` treat backslashes?',
    codeSnippet: `normal = "\\n"
raw = r"\\n"
print(len(normal), len(raw))
print(raw[0], raw[1])`,
    stdoutExpected: `1 2
\\ n`,
    explanationTitle: 'Raw Strings Suppress Escape Processing',
    explanationText:
      'Prefixing a string with `r` or `R` treats backslashes as literal characters instead of escape initiators. `r"\\n"` contains two characters: `\'\\\\\'` and `\'n\'`.',
    complexityInfo: 'Literal string modifiers',
  },
  {
    id: 'pcap-s2-fc-015',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'Triple-quoted multi-line strings',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Do newlines inside triple-quoted strings (`"""..."""` or `\'\'\'...\'\'\'`) become part of the string?',
    codeSnippet: `s = """Line1
Line2"""
print(len(s.splitlines()))
print("\\n" in s)`,
    stdoutExpected: `2
True`,
    explanationTitle: 'Triple-Quoted Strings Preserve Newlines',
    explanationText:
      'Triple quotes allow strings to span multiple lines. The newline characters created by pressing Enter become embedded as `\\n` within the string.',
    complexityInfo: 'Multiline string parsing',
  },
  {
    id: 'pcap-s2-fc-016',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'len(), min(), and max() on strings',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What do `min("Apple")` and `max("Apple")` return, and why?',
    codeSnippet: `s = "Apple"
print(min(s))
print(max(s))`,
    stdoutExpected: `A
p`,
    explanationTitle: 'min() and max() Depend on ASCII Code Points',
    explanationText:
      '`min()` and `max()` compare characters by their Unicode/ASCII code points. In `"Apple"`, uppercase `\'A\'` (65) is lower than lowercase `\'e\'` (101), `\'l\'` (108), or `\'p\'` (112). Highest is `\'p\'` (112).',
    complexityInfo: 'Built-in functions on character sequences',
  },
  {
    id: 'pcap-s2-fc-017',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'min() or max() on an empty string',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What exception is raised by `min("")` or `max("")`?',
    codeSnippet: `try:
    min("")
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'ValueError',
    explanationTitle: 'min/max on Empty Sequence Raises ValueError',
    explanationText:
      'Calling `min()` or `max()` on an empty string (or any empty sequence) raises `ValueError: min() arg is an empty sequence` (unless a default value is supplied).',
    complexityInfo: 'Edge case exceptions on built-ins',
  },
  {
    id: 'pcap-s2-fc-018',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'String indexing and IndexError',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What happens when indexing a string beyond its valid range?',
    codeSnippet: `s = "cat"
try:
    print(s[3])
except IndexError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'IndexError',
    explanationTitle: 'String Index Out of Range Raises IndexError',
    explanationText:
      'Strings use 0-based indexing up to `len(s) - 1`. Accessing an index `>= len(s)` or `< -len(s)` raises `IndexError: string index out of range`. (Note: Slices do NOT raise IndexError).',
    complexityInfo: 'Index vs slice boundary rules',
  },
  {
    id: 'pcap-s2-fc-019',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'Negative indexing in strings',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What character does `s[-1]` and `s[-len(s)]` access in a non-empty string `s`?',
    codeSnippet: `s = "PYTHON"
print(s[-1])
print(s[-len(s)])`,
    stdoutExpected: `N
P`,
    explanationTitle: 'Negative Indexing Resolves from End',
    explanationText:
      '`s[-1]` accesses the last character in the string. `s[-len(s)]` accesses the very first character at index 0.',
    complexityInfo: 'Negative sequence indexing',
  },
  {
    id: 'pcap-s2-fc-020',
    cardType: 'PCAP 2.1 • Strings & Encoding',
    topic: 'Iterating over characters in a string',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What does a standard `for char in "Hi":` loop iterate over?',
    codeSnippet: `chars = []
for c in "Hi":
    chars.append(c)
print(chars)`,
    stdoutExpected: "['H', 'i']",
    explanationTitle: 'Strings Are Iterable Sequences',
    explanationText:
      'A string implements the sequence protocol and is iterable. Each iteration yields a one-character substring in sequential order.',
    complexityInfo: 'Iteration protocol on string objects',
  },

  // =========================================================================
  // CHAPTER 2.2: STRING METHODS DEEP-DIVE: PREDICATES & SEARCH (Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcap-s2-fc-021',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'find() method return value when found vs not found',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `str.find(sub)` return if `sub` is present, and what does it return if NOT found?',
    codeSnippet: `s = "banana"
print(s.find("an"))
print(s.find("z"))`,
    stdoutExpected: `1
-1`,
    explanationTitle: 'find() Returns Lowest Index or -1',
    explanationText:
      '`str.find(sub)` returns the lowest index where the substring is found. If the substring is not found, it safely returns `-1` (does NOT raise an exception).',
    complexityInfo: 'Search method return contract',
  },
  {
    id: 'pcap-s2-fc-022',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'rfind() method for rightmost occurrence',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does `rfind()` differ from `find()` on `"banana"`?',
    codeSnippet: `s = "banana"
print(s.find("an"))
print(s.rfind("an"))`,
    stdoutExpected: `1
3`,
    explanationTitle: 'rfind() Searches from Right',
    explanationText:
      '`rfind(sub)` returns the highest (rightmost) index where `sub` is found. Like `find()`, it returns `-1` if the substring is not present.',
    complexityInfo: 'Right-to-left substring lookup',
  },
  {
    id: 'pcap-s2-fc-023',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'index() vs find() on missing substring',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the critical behavioral difference between `str.find()` and `str.index()` when a substring is missing?',
    codeSnippet: `s = "hello"
print(s.find("z"))
try:
    s.index("z")
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `-1
ValueError`,
    explanationTitle: 'index() Raises ValueError on Missing Substring',
    explanationText:
      'While `find()` returns `-1` when a substring is missing, `index()` raises `ValueError: substring not found`. This distinction is heavily tested on the PCAP exam.',
    complexityInfo: 'High-frequency PCAP exam trap',
  },
  {
    id: 'pcap-s2-fc-024',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'rindex() method exception behavior',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `rindex()` return if found, and what does it raise if not found?',
    codeSnippet: `s = "abracadabra"
print(s.rindex("a"))
try:
    s.rindex("z")
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `10
ValueError`,
    explanationTitle: 'rindex() Rightmost Search with ValueError',
    explanationText:
      '`rindex(sub)` returns the rightmost index of `sub`. If not found, it raises `ValueError` just like `index()`.',
    complexityInfo: 'Rightmost index lookup',
  },
  {
    id: 'pcap-s2-fc-025',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'count() method and non-overlapping matches',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the output of `"aaa".count("aa")`?',
    codeSnippet: `s = "aaa"
print(s.count("aa"))`,
    stdoutExpected: '1',
    explanationTitle: 'count() Does NOT Count Overlapping Occurrences',
    explanationText:
      '`str.count(sub)` counts **non-overlapping** occurrences. After matching the first `"aa"` at indices 0-1, the search advances to index 2, finding only a single `"a"`. Output is `1`, not 2.',
    complexityInfo: 'Non-overlapping match guarantee',
  },
  {
    id: 'pcap-s2-fc-026',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'startswith() and endswith() methods',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What do `startswith()` and `endswith()` return, and can they check multiple prefixes/suffixes via a tuple?',
    codeSnippet: `filename = "script.py"
print(filename.startswith("scr"))
print(filename.endswith(".py"))
print(filename.endswith((".py", ".txt", ".md")))`,
    stdoutExpected: `True
True
True`,
    explanationTitle: 'startswith/endswith with Strings or Tuples',
    explanationText:
      'Both methods return a `bool`. Crucially, they can accept a **tuple** of strings to test against multiple candidate prefixes or suffixes.',
    complexityInfo: 'Prefix/suffix testing with tuple argument',
  },
  {
    id: 'pcap-s2-fc-027',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'isalnum() predicate method',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `str.isalnum()` test, and what does it return for an empty string or spaces?',
    codeSnippet: `print("Python3".isalnum())
print("Python 3".isalnum())
print("".isalnum())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isalnum() Requires Non-Empty Alphanumerics',
    explanationText:
      '`isalnum()` returns `True` only if ALL characters in the string are alphanumeric (letters or numbers) and there is at least one character. Spaces or empty strings return `False`.',
    complexityInfo: 'Character predicate validation',
  },
  {
    id: 'pcap-s2-fc-028',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'isalpha() predicate method',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `"Hello".isalpha()` and `"Hello2".isalpha()` return?',
    codeSnippet: `print("Hello".isalpha())
print("Hello2".isalpha())
print("".isalpha())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isalpha() Tests for Pure Alphabetic Characters',
    explanationText:
      '`isalpha()` returns `True` if all characters are alphabetic letters and the string is non-empty. Any digit, symbol, or space causes it to return `False`.',
    complexityInfo: 'Alphabetic predicate',
  },
  {
    id: 'pcap-s2-fc-029',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'isdigit() vs isdecimal() vs isnumeric()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Do `"123".isdigit()`, `"-123".isdigit()`, and `"12.3".isdigit()` return `True` or `False`?',
    codeSnippet: `print("123".isdigit())
print("-123".isdigit())
print("12.3".isdigit())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isdigit() Excludes Negative Signs and Decimals',
    explanationText:
      '`isdigit()` returns `True` only if EVERY character is a digit (0-9). The minus sign `\'-\'` and the decimal point `\'.\'` are punctuation characters, so both `"-123"` and `"12.3"` evaluate to `False`.',
    complexityInfo: 'Classic PCAP numeric string trap',
  },
  {
    id: 'pcap-s2-fc-030',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'islower() and isupper() with non-cased characters',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `"hello 123!".islower()` return?',
    codeSnippet: `print("hello 123!".islower())
print("123!".islower())`,
    stdoutExpected: `True
False`,
    explanationTitle: 'islower() Requires at Least One Cased Character',
    explanationText:
      '`islower()` requires that all cased characters are lowercase AND that there is at least one cased character. Non-cased characters (digits, spaces, punctuation) are ignored. `"123!"` returns `False`.',
    complexityInfo: 'Cased character requirement',
  },
  {
    id: 'pcap-s2-fc-031',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'isspace() whitespace detection',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Which characters are considered whitespace by `isspace()`?',
    codeSnippet: `ws = " \\t\\n\\r\\v\\f"
print(ws.isspace())
print("".isspace())`,
    stdoutExpected: `True
False`,
    explanationTitle: 'isspace() Covers All Standard Whitespaces',
    explanationText:
      '`isspace()` returns `True` if all characters are whitespaces (spaces, `\\t`, `\\n`, `\\r`, `\\v`, `\\f`) and string is non-empty. An empty string returns `False`.',
    complexityInfo: 'Whitespace classification',
  },
  {
    id: 'pcap-s2-fc-032',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'capitalize() first character transformation',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `"pYtHoN iS FUN".capitalize()` produce?',
    codeSnippet: `s = "pYtHoN iS FUN"
print(s.capitalize())`,
    stdoutExpected: 'Python is fun',
    explanationTitle: 'capitalize() Forces Remaining Characters to Lowercase',
    explanationText:
      '`capitalize()` converts the first character to uppercase AND explicitly forces ALL subsequent characters to lowercase. It does not capitalize every word (that is `title()`).',
    complexityInfo: 'Case transformation behavior',
  },
  {
    id: 'pcap-s2-fc-033',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'title() word capitalization',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `"hello world".title()` return?',
    codeSnippet: `s = "hello world"
print(s.title())`,
    stdoutExpected: 'Hello World',
    explanationTitle: 'title() Capitalizes Every Word',
    explanationText:
      '`title()` returns a title-cased version of the string where words start with an uppercase character and the remaining characters are lowercase.',
    complexityInfo: 'Title-casing mechanics',
  },
  {
    id: 'pcap-s2-fc-034',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'swapcase() character toggle',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the output of `"PyThOn 3.10".swapcase()`?',
    codeSnippet: `s = "PyThOn 3.10"
print(s.swapcase())`,
    stdoutExpected: 'pYtHoN 3.10',
    explanationTitle: 'swapcase() Inverts Letter Case',
    explanationText:
      '`swapcase()` converts all uppercase letters to lowercase and all lowercase letters to uppercase. Digits, spaces, and punctuation remain unchanged.',
    complexityInfo: 'Case flipping method',
  },
  {
    id: 'pcap-s2-fc-035',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'center(), ljust(), and rjust() padding',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `"PCAP".center(8, "*")` return?',
    codeSnippet: `s = "PCAP"
print(s.center(8, "*"))
print(s.ljust(6, "-"))
print(s.rjust(6, "-"))`,
    stdoutExpected: `**PCAP**
PCAP--
--PCAP`,
    explanationTitle: 'String Alignment and Fill Characters',
    explanationText:
      '`center(width, fillchar)` centers the string within a field of length `width`, padded by `fillchar` (default space). `ljust()` and `rjust()` left- and right-align respectively.',
    complexityInfo: 'String formatting and alignment',
  },
];
