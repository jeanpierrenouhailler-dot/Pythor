import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 2: DATA AGGREGATES AND EXCEPTIONS (Part 2: Cards 36 to 70)
 * - Chapter 2.2: String Methods: Strip, Replace, Split, Join (Cards 36-40)
 * - Chapter 2.3: String Comparison, Slicing & Sequence Aggregates (Cards 41-60)
 * - Chapter 2.4: Exception Handling Flow: try-except-else-finally (Cards 61-70)
 */
export const section2CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.2 (Continued): STRIP, REPLACE, SPLIT, JOIN (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcap-s2-fc-036',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'lstrip(), rstrip(), and strip() characters argument set',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does `strip("xyz")` treat its string argument — as a prefix/suffix or as a set of characters?',
    codeSnippet: `s = "yxzPythonzyx"
print(s.strip("xyz"))
print("www.python.org".strip("w.org"))`,
    stdoutExpected: `Python
python`,
    explanationTitle: 'strip() Strips All Characters in the Given Set',
    explanationText:
      '`strip(chars)` removes all leading and trailing characters that appear in the `chars` string, regardless of their order. It does NOT treat `chars` as an exact prefix or suffix.',
    complexityInfo: 'High-frequency exam trap on strip mechanics',
  },
  {
    id: 'pcap-s2-fc-037',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'replace() method and optional count parameter',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does `"banana".replace("a", "o", 2)` output?',
    codeSnippet: `s = "banana"
print(s.replace("a", "o", 2))
print(s.replace("a", "o"))`,
    stdoutExpected: `bonona
bonono`,
    explanationTitle: 'replace() Limits Replacements with count Parameter',
    explanationText:
      '`replace(old, new, count)` replaces at most `count` occurrences from left to right. If `count` is omitted, all occurrences are replaced. Note that original string `s` is unmodified (strings are immutable).',
    complexityInfo: 'String replacement limit parameter',
  },
  {
    id: 'pcap-s2-fc-038',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'split() with default arguments vs explicit delimiter',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does `s.split()` differ from `s.split(" ")` when `s = "a   b  c"`?',
    codeSnippet: `s = "a   b  c"
print(s.split())
print(s.split(" "))`,
    stdoutExpected: `['a', 'b', 'c']
['a', '', '', 'b', '', 'c']`,
    explanationTitle: 'Default split() Collapses Consecutive Whitespaces',
    explanationText:
      'With no arguments, `split()` treats runs of consecutive whitespaces (spaces, tabs, newlines) as a single separator and discards leading/trailing whitespace. Passing explicit `" "` splits on every single space character, creating empty strings `\'\'`.',
    complexityInfo: 'Critical PCAP whitespace distinction',
  },
  {
    id: 'pcap-s2-fc-039',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'split() maxsplit parameter',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is returned by `"alpha:beta:gamma:delta".split(":", 2)`?',
    codeSnippet: `s = "alpha:beta:gamma:delta"
res = s.split(":", 2)
print(res)
print(len(res))`,
    stdoutExpected: `['alpha', 'beta', 'gamma:delta']
3`,
    explanationTitle: 'maxsplit Governs Maximum Splits',
    explanationText:
      'The `maxsplit` parameter limits the number of splits performed. Splitting twice yields a list of `2 + 1 = 3` elements, with the remainder of the string preserved in the final element.',
    complexityInfo: 'Partitioning with maxsplit',
  },
  {
    id: 'pcap-s2-fc-040',
    cardType: 'PCAP 2.2 • String Methods',
    topic: 'join() method caller and element type constraints',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What exception is raised if `",".join([1, 2, 3])` is called on a list of integers?',
    codeSnippet: `try:
    ",".join([1, 2, 3])
except TypeError as e:
    print(type(e).__name__)
print(",".join(["a", "b", "c"]))`,
    stdoutExpected: `TypeError
a,b,c`,
    explanationTitle: 'join() Requires All Elements to be Strings',
    explanationText:
      '`separator.join(iterable)` requires every element in the iterable to be of type `str`. If any item is not a string (e.g., `int`), it raises `TypeError: sequence item 0: expected str instance, int found`.',
    complexityInfo: 'Separator method on string instances',
  },

  // =========================================================================
  // CHAPTER 2.3: COMPARISON, SLICING & SEQUENCE AGGREGATES (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcap-s2-fc-041',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Lexicographical string comparisons and code points',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why does `"10" < "2"` and `"Z" < "a"` evaluate to `True` in Python?',
    codeSnippet: `print("10" < "2")
print("Z" < "a")
print(ord("1"), ord("2"))
print(ord("Z"), ord("a"))`,
    stdoutExpected: `True
True
49 50
90 97`,
    explanationTitle: 'Strings Compare Lexicographically Character-by-Character',
    explanationText:
      'Python compares strings character-by-character based on their ASCII/Unicode values. Because `ord("1")` (49) < `ord("2")` (50), `"10" < "2"` is `True`. All uppercase letters (65-90) precede lowercase letters (97-122).',
    complexityInfo: 'Lexicographical ordering rules',
  },
  {
    id: 'pcap-s2-fc-042',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Lexicographical string comparison length tie-breaker',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How are strings of different lengths compared when one is a prefix of the other?',
    codeSnippet: `print("abc" < "abcd")
print("abc" == "abc ")
print("alpha" > "alp")`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'Shorter Prefix is Strictly Less Than Longer String',
    explanationText:
      'When two strings share identical characters until the end of the shorter string, the shorter string is considered strictly less than the longer one.',
    complexityInfo: 'Prefix comparison semantics',
  },
  {
    id: 'pcap-s2-fc-043',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Comparing strings with non-string types using <, >, ==',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Does `"10" == 10` raise an exception, and what about `"10" < 10` in Python 3?',
    codeSnippet: `print("10" == 10)
print("10" != 10)
try:
    print("10" < 10)
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `False
True
TypeError`,
    explanationTitle: 'Equality Allowed Across Types, Relational Operators Raise TypeError',
    explanationText:
      'In Python 3, equality operators (`==`, `!=`) between different types never raise an error and return `False`/`True`. Relational operators (`<`, `<=`, `>`, `>=`) between incompatible types like `str` and `int` raise `TypeError`.',
    complexityInfo: 'Python 3 strict type comparison rules',
  },
  {
    id: 'pcap-s2-fc-044',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Basic slice [start:stop] exclusivity',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'In `s[start:stop]`, is `stop` inclusive or exclusive?',
    codeSnippet: `s = "Python"
print(s[0:2])
print(s[1:4])`,
    stdoutExpected: `Py
yth`,
    explanationTitle: 'Stop Index is Strictly Exclusive',
    explanationText:
      '`s[start:stop]` includes characters from `start` up to but NOT including `stop`. The number of characters returned is `stop - start` when indices are non-negative.',
    complexityInfo: 'Slice boundary definitions',
  },
  {
    id: 'pcap-s2-fc-045',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Slice omissions: default start and stop',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What do `s[:3]`, `s[3:]`, and `s[:]` default to for `s = "ABCDEF"`?',
    codeSnippet: `s = "ABCDEF"
print(s[:3])
print(s[3:])
print(s[:])`,
    stdoutExpected: `ABC
DEF
ABCDEF`,
    explanationTitle: 'Default Start is 0, Default Stop is Length',
    explanationText:
      'When omitted with a positive step, `start` defaults to `0` and `stop` defaults to `len(s)`. `s[:]` produces a full shallow copy of the string.',
    complexityInfo: 'Slice omission defaults',
  },
  {
    id: 'pcap-s2-fc-046',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Out-of-bound slice indices vs indexing',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Does slicing beyond the string length raise `IndexError`?',
    codeSnippet: `s = "cat"
print(repr(s[1:100]))
print(repr(s[10:20]))`,
    stdoutExpected: `'at'
''`,
    explanationTitle: 'Slices Never Raise IndexError',
    explanationText:
      'Unlike single index access `s[100]`, slice operations silently truncate out-of-range bounds to `len(s)` or `0`. If `start >= len(s)`, an empty string `\'\'` is returned without error.',
    complexityInfo: 'Crucial PCAP indexing vs slicing contrast',
  },
  {
    id: 'pcap-s2-fc-047',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Negative start and stop in slicing',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the output of `"abcdef"[-4:-1]`?',
    codeSnippet: `s = "abcdef"
print(s[-4:-1])`,
    stdoutExpected: 'cde',
    explanationTitle: 'Negative Indices Count from Right',
    explanationText:
      '`s[-4]` corresponds to index `6 - 4 = 2` (`\'c\'`). `s[-1]` corresponds to index `6 - 1 = 5` (`\'f\'`). Characters at indices 2, 3, 4 are included: `"cde"`.',
    complexityInfo: 'Negative index offset calculation',
  },
  {
    id: 'pcap-s2-fc-048',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Extended slicing with step parameter [start:stop:step]',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does `"0123456789"[::2]` and `"0123456789"[1::2]` output?',
    codeSnippet: `digits = "0123456789"
print(digits[::2])
print(digits[1::2])`,
    stdoutExpected: `02468
13579`,
    explanationTitle: 'Step Controls Index Stride',
    explanationText:
      'The third slice parameter `step` determines the stride. A step of `2` selects every second character starting from index 0 or index 1.',
    complexityInfo: 'Stride step mechanics',
  },
  {
    id: 'pcap-s2-fc-049',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Negative step and string reversal [::-1]',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What are the default start and stop when step is negative, such as `s[::-1]`?',
    codeSnippet: `s = "PYTHON"
print(s[::-1])
print(s[4:1:-1])`,
    stdoutExpected: `NOHTYP
OTH`,
    explanationTitle: 'Negative Step Inverts Defaults and Direction',
    explanationText:
      'When `step < 0`, the default start is the last character (`-1`), and default stop is the beginning. Slicing moves backward. `s[4:1:-1]` starts at index 4 (\'O\') down to index 2 (\'T\'), excluding index 1.',
    complexityInfo: 'Reverse slicing mechanics and defaults',
  },
  {
    id: 'pcap-s2-fc-050',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Empty slice conditions with positive step',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is returned by `"Python"[4:2]` with a default step of +1?',
    codeSnippet: `s = "Python"
res = s[4:2]
print(repr(res))
print(len(res))`,
    stdoutExpected: `''
0`,
    explanationTitle: 'Start >= Stop with Positive Step Returns Empty Sequence',
    explanationText:
      'When `step > 0`, if `start >= stop`, Python cannot take forward steps from 4 to 2, returning an empty string `\'\'` without error.',
    complexityInfo: 'Empty slice boundary check',
  },
  {
    id: 'pcap-s2-fc-051',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Slice step of zero ValueError',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What exception is raised when passing `0` as the slice step `s[::0]`?',
    codeSnippet: `s = "Python"
try:
    print(s[::0])
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'ValueError',
    explanationTitle: 'Slice Step Cannot Be Zero',
    explanationText:
      'A slice step of 0 raises `ValueError: slice step cannot be zero`.',
    complexityInfo: 'Zero-step exception verification',
  },
  {
    id: 'pcap-s2-fc-052',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'sorted() function on strings return type',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What data type is returned by `sorted("banana")`?',
    codeSnippet: `res = sorted("banana")
print(res)
print(type(res).__name__)
print("".join(res))`,
    stdoutExpected: `['a', 'a', 'a', 'b', 'n', 'n']
list
aaabnn`,
    explanationTitle: 'sorted() Always Returns a List',
    explanationText:
      'The built-in function `sorted()` takes any iterable and **always returns a list**. To obtain a sorted string, you must use `"".join(sorted(s))`.',
    complexityInfo: 'Return type trap: sorted() produces list, not str',
  },
  {
    id: 'pcap-s2-fc-053',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Does str have a .sort() method?',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What exception is raised if you call `"cba".sort()`?',
    codeSnippet: `s = "cba"
try:
    s.sort()
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'Strings Lack In-Place sort() Method',
    explanationText:
      'Because strings are immutable, they do not possess an in-place `.sort()` method. Calling `.sort()` on a string raises `AttributeError: \'str\' object has no attribute \'sort\'`.',
    complexityInfo: 'In-place vs built-in sort availability',
  },
  {
    id: 'pcap-s2-fc-054',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'splitlines() method and line boundaries',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does `"Line1\\nLine2\\r\\nLine3".splitlines()` return, and does it include line break characters by default?',
    codeSnippet: `text = "Line1\\nLine2\\r\\nLine3"
lines = text.splitlines()
print(lines)
print(text.splitlines(keepends=True))`,
    stdoutExpected: `['Line1', 'Line2', 'Line3']
['Line1\\n', 'Line2\\r\\n', 'Line3']`,
    explanationTitle: 'splitlines() Recognizes Universal Newlines',
    explanationText:
      '`splitlines()` splits at line boundaries (`\\n`, `\\r`, `\\r\\n`). By default, line break characters are stripped unless `keepends=True` is passed.',
    complexityInfo: 'Universal newline splitting',
  },
  {
    id: 'pcap-s2-fc-055',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'String formatting with % operator',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does `"Item: %s, Cost: $%.2f" % ("Book", 14.5)` output?',
    codeSnippet: `fmt = "Item: %s, Cost: $%.2f" % ("Book", 14.5)
print(fmt)`,
    stdoutExpected: 'Item: Book, Cost: $14.50',
    explanationTitle: 'C-style % Formatting Operator',
    explanationText:
      'The `%` operator supports printf-style formatting. `%s` converts to string, `%d` to integer, and `%.2f` formats floating-point numbers to 2 decimal places.',
    complexityInfo: 'Legacy % string interpolation',
  },
  {
    id: 'pcap-s2-fc-056',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'str.format() method with positional and named arguments',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does `"{1} scored {0} points".format(95, "Alice")` output?',
    codeSnippet: `res = "{1} scored {0} points".format(95, "Alice")
print(res)`,
    stdoutExpected: 'Alice scored 95 points',
    explanationTitle: 'format() Positional Indexing',
    explanationText:
      'Inside `.format()`, `{0}` references the first argument (`95`) and `{1}` references the second argument (`"Alice"`). The output swaps them as indicated.',
    complexityInfo: 'Positional format specifier mapping',
  },
  {
    id: 'pcap-s2-fc-057',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'F-strings (formatted string literals)',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do f-strings evaluate expressions inside `{}` at runtime?',
    codeSnippet: `x = 10
y = 20
print(f"{x} + {y} = {x + y}")`,
    stdoutExpected: '10 + 20 = 30',
    explanationTitle: 'F-strings Evaluate Expressions Directly',
    explanationText:
      'Prefixed with `f` or `F`, expressions enclosed in curly braces `{}` are evaluated at runtime and converted to string representations in-place.',
    complexityInfo: 'Formatted string literals',
  },
  {
    id: 'pcap-s2-fc-058',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Single-element tuple syntax and aggregate immutability',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the type of `(42)` versus `(42,)`?',
    codeSnippet: `a = (42)
b = (42,)
print(type(a).__name__)
print(type(b).__name__)`,
    stdoutExpected: `int
tuple`,
    explanationTitle: 'Trailing Comma Creates a Single-Element Tuple',
    explanationText:
      'Parentheses alone do not create a tuple; they denote mathematical grouping. A trailing comma `(42,)` is required to define a single-element tuple.',
    complexityInfo: 'Syntax trap in aggregate literals',
  },
  {
    id: 'pcap-s2-fc-059',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Sequence unpacking and ValueError on count mismatch',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What exception is raised when unpacking a sequence of length 3 into 2 variables?',
    codeSnippet: `data = [1, 2, 3]
try:
    a, b = data
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'ValueError',
    explanationTitle: 'Unpacking Count Mismatch Raises ValueError',
    explanationText:
      'When the number of target variables on the left does not match the number of elements on the right, Python raises `ValueError: too many values to unpack (expected 2)` (or `not enough values to unpack`).',
    complexityInfo: 'Unpacking constraint verification',
  },
  {
    id: 'pcap-s2-fc-060',
    cardType: 'PCAP 2.3 • Slicing & Comparison',
    topic: 'Converting between strings and aggregate lists/tuples',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does `list("cat")` and `"".join(["c", "a", "t"])` yield?',
    codeSnippet: `chars = list("cat")
print(chars)
print("".join(chars))`,
    stdoutExpected: `['c', 'a', 't']
cat`,
    explanationTitle: 'Bi-Directional Conversion Between Strings and Lists',
    explanationText:
      '`list(str)` decomposes a string into individual single-character elements. `"".join(list)` reconstructs the original string aggregate.',
    complexityInfo: 'Aggregate container transformation',
  },

  // =========================================================================
  // CHAPTER 2.4: EXCEPTION HANDLING CONTROL FLOW (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcap-s2-fc-061',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Fundamental try-except block execution',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Does execution inside the `try` block continue after an exception is raised?',
    codeSnippet: `try:
    print("Step 1")
    val = 1 / 0
    print("Step 2")
except ZeroDivisionError:
    print("Caught")
print("Done")`,
    stdoutExpected: `Step 1
Caught
Done`,
    explanationTitle: 'Execution Halts Immediately Upon Exception',
    explanationText:
      'When an exception occurs in a `try` block, remaining statements in `try` (`"Step 2"`) are immediately skipped. Control jumps directly to the matching `except` block.',
    complexityInfo: 'Basic exception interception flow',
  },
  {
    id: 'pcap-s2-fc-062',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Bare except: clause and placement rules',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Can a bare `except:` clause precede a specific `except ValueError:` clause?',
    codeSnippet: `# A bare except must always be the LAST except clause!
code = """
try:
    pass
except:
    pass
except ValueError:
    pass
"""
# SyntaxError: default 'except:' must be last
print("SyntaxError")`,
    stdoutExpected: 'SyntaxError',
    explanationTitle: 'Default except: Must Always Be the Final Clause',
    explanationText:
      'A bare `except:` catches any exception derived from `BaseException`. Python requires that a default (bare) `except:` must be the very last `except` block in the construct; otherwise, it raises `SyntaxError`.',
    complexityInfo: 'Syntax placement rule on exception blocks',
  },
  {
    id: 'pcap-s2-fc-063',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Order of except clauses: specific before general',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'If `except ArithmeticError:` is placed before `except ZeroDivisionError:`, which block executes on division by zero?',
    codeSnippet: `try:
    x = 1 / 0
except ArithmeticError:
    print("ArithmeticError caught")
except ZeroDivisionError:
    print("ZeroDivisionError caught")`,
    stdoutExpected: 'ArithmeticError caught',
    explanationTitle: 'First Matching Clause Wins: Specific Before General',
    explanationText:
      'Because `ZeroDivisionError` is a subclass of `ArithmeticError`, the first matching `except` clause intercepts it. General base exception classes must come AFTER derived specific ones.',
    complexityInfo: 'Subclass inheritance routing in except blocks',
  },
  {
    id: 'pcap-s2-fc-064',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Unhandled exceptions and upward propagation',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What happens when an exception raised in a `try` block matches NONE of the specified `except` handlers?',
    codeSnippet: `def outer():
    try:
        try:
            int("abc")
        except ZeroDivisionError:
            print("Zero")
    except ValueError:
        print("Outer caught ValueError")

outer()`,
    stdoutExpected: 'Outer caught ValueError',
    explanationTitle: 'Exceptions Propagate Up the Call Stack',
    explanationText:
      'If an inner `try-except` does not handle the raised exception (`ValueError`), it immediately propagates up the call stack to the enclosing scope or outer `try-except`.',
    complexityInfo: 'Call stack exception propagation',
  },
  {
    id: 'pcap-s2-fc-065',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Catching multiple exceptions in a single except clause via tuple',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do you catch both `IndexError` and `KeyError` in a single `except` statement?',
    codeSnippet: `try:
    d = {"a": 1}
    print(d["b"])
except (IndexError, KeyError) as e:
    print(f"Caught {type(e).__name__}")`,
    stdoutExpected: 'Caught KeyError',
    explanationTitle: 'Multiple Exceptions Must Be Enclosed in a Tuple',
    explanationText:
      'To catch multiple exceptions in one clause, you must enclose them in parentheses as a tuple: `except (IndexError, KeyError):`. Omitting parentheses causes the second name to be treated as an `as` alias in older syntax or causes a SyntaxError.',
    complexityInfo: 'Tuple syntax requirement for multi-exception catch',
  },
  {
    id: 'pcap-s2-fc-066',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Exception instance binding with as keyword',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What attribute provides the tuple of arguments passed to the exception object?',
    codeSnippet: `try:
    raise ValueError("Invalid configuration", 404)
except ValueError as err:
    print(err.args)
    print(type(err.args).__name__)`,
    stdoutExpected: `('Invalid configuration', 404)
tuple`,
    explanationTitle: 'err.args Stores Exception Arguments in a Tuple',
    explanationText:
      'The `as err` identifier binds the active exception instance. Every built-in exception inherits an `.args` attribute which contains a tuple of all arguments passed upon instantiation.',
    complexityInfo: 'Exception object introspection',
  },
  {
    id: 'pcap-s2-fc-067',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'try-except else clause behavior',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'When does the `else` clause of a `try-except-else` block execute?',
    codeSnippet: `try:
    res = 10 / 2
except ZeroDivisionError:
    print("Error")
else:
    print("Success:", int(res))`,
    stdoutExpected: 'Success: 5',
    explanationTitle: 'else Executes When No Exception Occurred in try',
    explanationText:
      'The `else` clause executes if and only if the `try` block completes successfully without raising any exceptions.',
    complexityInfo: 'else clause execution condition',
  },
  {
    id: 'pcap-s2-fc-068',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'try-finally clause unconditional guarantee',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Does the `finally` block execute if the `try` block returns early or raises an unhandled error?',
    codeSnippet: `def test():
    try:
        return "TRY_RETURN"
    finally:
        print("FINALLY_RUNS")

val = test()
print(val)`,
    stdoutExpected: `FINALLY_RUNS
TRY_RETURN`,
    explanationTitle: 'finally Executes Unconditionally',
    explanationText:
      'The `finally` block ALWAYS executes before leaving the `try` construct, even if `return`, `break`, `continue`, or an unhandled exception is encountered.',
    complexityInfo: 'Guaranteed cleanup semantics',
  },
  {
    id: 'pcap-s2-fc-069',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'Full try-except-else-finally execution order',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the exact execution order when no exception occurs in a full try-except-else-finally statement?',
    codeSnippet: `try:
    print("1: try")
except ValueError:
    print("2: except")
else:
    print("3: else")
finally:
    print("4: finally")`,
    stdoutExpected: `1: try
3: else
4: finally`,
    explanationTitle: 'Full Statement Execution Path',
    explanationText:
      'When no exception occurs: `try` -> `else` -> `finally`. When an exception is caught: `try` -> `except` -> `finally`. The `else` clause is bypassed on exceptions.',
    complexityInfo: 'Standard four-part control flow sequence',
  },
  {
    id: 'pcap-s2-fc-070',
    cardType: 'PCAP 2.4 • Exception Flow',
    topic: 'finally overrides try return value',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is returned if both `try` and `finally` contain a `return` statement?',
    codeSnippet: `def func():
    try:
        return 1
    finally:
        return 2

print(func())`,
    stdoutExpected: '2',
    explanationTitle: 'finally Return Overwrites try Return',
    explanationText:
      'If the `finally` clause executes a `return` statement, that return value supersedes and discards any previous `return` statement executed in `try` or `except`.',
    complexityInfo: 'Advanced control flow override in finally',
  },
];
