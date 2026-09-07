import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 3: STRINGS (Part 3: Cards 81 to 100)
 * - Chapter 3.5: Searching, Formatting, and Splitting (Cards 81-100)
 */
export const section3CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.5: SEARCHING, FORMATTING, AND SPLITTING (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcap-s3-fc-081',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'find() vs index() when substring is missing',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is the critical behavioral difference between find() and index() when the substring is not found?',
    codeSnippet: `s = "python"
print(s.find("java"))
try:
    s.index("java")
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `-1
ValueError`,
    explanationTitle: 'find() Returns -1 vs index() Raises ValueError',
    explanationText:
      'find() returns -1 when the target substring is missing, allowing safe conditional checks without try/except. index() raises a ValueError if the substring is absent.',
    complexityInfo: 'Crucial PCAP exam distinction',
  },
  {
    id: 'pcap-s3-fc-082',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'rfind() and rindex() rightmost search',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What do rfind() and rindex() search for?',
    codeSnippet: `s = "abracadabra"
print(s.find("a"))
print(s.rfind("a"))`,
    stdoutExpected: `0
10`,
    explanationTitle: 'Right-to-Left Search',
    explanationText:
      'find() returns the index of the first (leftmost) occurrence, while rfind() returns the index of the highest (rightmost) occurrence. Both return 0-based indices from the left.',
    complexityInfo: 'Returns index from start (0-based)',
  },
  {
    id: 'pcap-s3-fc-083',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'find(sub, start, end) search window',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do the optional start and end parameters restrict the search in find()?',
    codeSnippet: `s = "banana"
print(s.find("a", 2))
print(s.find("a", 2, 4))`,
    stdoutExpected: `3
3`,
    explanationTitle: 'Restricted Search Window',
    explanationText:
      's.find(sub, start, end) searches only within the slice s[start:end]. In "banana", s.find("a", 2) skips index 1 and finds "a" at index 3. Note that the returned index is always relative to the whole string.',
    complexityInfo: 'Windowed search, global index returned',
  },
  {
    id: 'pcap-s3-fc-084',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'split() with no arguments (whitespace collapsing)',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How does split() with no arguments differ from split(" ") with a literal space?',
    codeSnippet: `s = "  one   two  three  "
print(s.split())
print(s.split(" "))`,
    stdoutExpected: `['one', 'two', 'three']
['', '', 'one', '', '', 'two', '', 'three', '', '']`,
    explanationTitle: 'Whitespace Collapsing in split()',
    explanationText:
      'split() with no argument splits by consecutive whitespace runs and discards leading/trailing empty strings. split(" ") splits strictly by individual space characters, producing multiple empty strings.',
    complexityInfo: 'Important PCAP question pattern',
  },
  {
    id: 'pcap-s3-fc-085',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'split(sep, maxsplit) parameter',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is the maximum number of elements in the resulting list when maxsplit=N?',
    codeSnippet: `s = "a,b,c,d,e"
res = s.split(",", 2)
print(res)
print(len(res))`,
    stdoutExpected: `['a', 'b', 'c,d,e']
3`,
    explanationTitle: 'maxsplit Result Size',
    explanationText:
      'maxsplit specifies the maximum number of splits to perform. A maxsplit of N produces at most N + 1 elements, with the remainder kept intact in the final element.',
    complexityInfo: 'At most maxsplit + 1 elements',
  },
  {
    id: 'pcap-s3-fc-086',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'rsplit(sep, maxsplit) right split',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How does rsplit() differ from split() when maxsplit is provided?',
    codeSnippet: `path = "/var/log/nginx/access.log"
print(path.rsplit("/", 1))`,
    stdoutExpected: `['/var/log/nginx', 'access.log']`,
    explanationTitle: 'rsplit Splits from the Right',
    explanationText:
      'rsplit() splits starting from the right end of the string. With maxsplit=1, it splits only at the rightmost delimiter, separating directory path from filename.',
    complexityInfo: 'Right-to-left split limiting',
  },
  {
    id: 'pcap-s3-fc-087',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'splitlines(keepends) method',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does splitlines() do and how does keepends=True affect the output?',
    codeSnippet: `text = "Line 1\\nLine 2\\r\\nLine 3"
print(text.splitlines())
print(text.splitlines(True))`,
    stdoutExpected: `['Line 1', 'Line 2', 'Line 3']
['Line 1\\n', 'Line 2\\r\\n', 'Line 3']`,
    explanationTitle: 'splitlines Universal Line Breaks',
    explanationText:
      'splitlines() splits at universal line breaks (\\n, \\r, \\r\\n). By default (keepends=False), the line break characters are stripped; with keepends=True, they are retained.',
    complexityInfo: 'Universal newline boundary parser',
  },
  {
    id: 'pcap-s3-fc-088',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'join() separator syntax and iterable argument',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is the syntax for join() and what calls it?',
    codeSnippet: `words = ["Python", "is", "awesome"]
print(" ".join(words))
print("-*-".join(["A", "B", "C"]))`,
    stdoutExpected: `Python is awesome
A-*-B-*-C`,
    explanationTitle: 'join() is a Method of the Delimiter',
    explanationText:
      'join() is called on the separator string: separator.join(iterable). The separator is inserted between each pair of adjacent elements in the iterable.',
    complexityInfo: 'O(total_length) efficient concatenation',
  },
  {
    id: 'pcap-s3-fc-089',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'join() with non-string elements error',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What exception is raised if an element inside join()\'s iterable is not a string?',
    codeSnippet: `items = ["id", 101, "active"]
try:
    ",".join(items)
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `TypeError`,
    explanationTitle: 'join() Type Strictness',
    explanationText:
      'join() requires EVERY element in the iterable to be a string. If any item is an int, float, or other type, TypeError is raised: sequence item 1: expected str instance, int found.',
    complexityInfo: 'Elements must be explicitly mapped to str',
  },
  {
    id: 'pcap-s3-fc-090',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'join() with empty iterable',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does separator.join([]) return when given an empty list?',
    codeSnippet: `print(repr(",".join([])))
print(repr(",".join(["solo"])))`,
    stdoutExpected: `''
'solo'`,
    explanationTitle: 'join() Empty and Single Element',
    explanationText:
      'Joining an empty sequence returns an empty string "". Joining a single-element sequence returns just that element without any separators.',
    complexityInfo: 'No separator on len <= 1',
  },
  {
    id: 'pcap-s3-fc-091',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'center(width, fillchar) centering string',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How does center() pad strings and what is the default fill character?',
    codeSnippet: `s = "PCAP"
print(s.center(10))
print(s.center(10, "*"))`,
    stdoutExpected: `   PCAP   
***PCAP***`,
    explanationTitle: 'center() Padding',
    explanationText:
      'center(width, fillchar=" ") centers the string within a field of specified width. If the width is <= len(s), the original string is returned unchanged.',
    complexityInfo: 'Symmetric padding allocation',
  },
  {
    id: 'pcap-s3-fc-092',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'ljust(width) and rjust(width) alignment',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What do ljust() and rjust() do?',
    codeSnippet: `print("Left".ljust(10, "-"))
print("Right".rjust(10, "-"))`,
    stdoutExpected: `Left------
-----Right`,
    explanationTitle: 'Left and Right Justification',
    explanationText:
      'ljust() pads the string on the right (keeping text on the left), while rjust() pads the string on the left (pushing text to the right).',
    complexityInfo: 'Width padding O(width)',
  },
  {
    id: 'pcap-s3-fc-093',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'fillchar must be a single character',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What exception is raised if fillchar in center(), ljust(), or rjust() has length != 1?',
    codeSnippet: `try:
    "test".center(10, "--")
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `TypeError`,
    explanationTitle: 'fillchar Length Guard',
    explanationText:
      'fillchar must be exactly one character. Passing an empty string or multi-character string raises TypeError: The fill character must be exactly one character long.',
    complexityInfo: 'Parameter length validation',
  },
  {
    id: 'pcap-s3-fc-094',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'partition(sep) 3-tuple return',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does partition(sep) return and what does it contain when sep is missing?',
    codeSnippet: `s = "user@example.com"
print(s.partition("@"))
print("no_sep".partition("@"))`,
    stdoutExpected: `('user', '@', 'example.com')
('no_sep', '', '')`,
    explanationTitle: 'partition() 3-Tuple Structure',
    explanationText:
      'partition(sep) splits at the first occurrence of sep and always returns a 3-tuple: (before, sep, after). If sep is not found, it returns (string, "", "").',
    complexityInfo: 'Always returns 3-tuple',
  },
  {
    id: 'pcap-s3-fc-095',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'rpartition(sep) rightmost partition',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How does rpartition() differ from partition()?',
    codeSnippet: `s = "a/b/c"
print(s.partition("/"))
print(s.rpartition("/"))`,
    stdoutExpected: `('a', '/', 'b/c')
('a/b', '/', 'c')`,
    explanationTitle: 'rpartition Splits at Last Match',
    explanationText:
      'rpartition(sep) splits at the LAST occurrence of sep. If sep is not found, it returns ("", "", string).',
    complexityInfo: '3-tuple at rightmost match',
  },
  {
    id: 'pcap-s3-fc-096',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'count(sub) non-overlapping occurrences',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'Does count(sub) count overlapping occurrences of sub?',
    codeSnippet: `s = "aaaa"
print(s.count("aa"))`,
    stdoutExpected: `2`,
    explanationTitle: 'Non-Overlapping count() Rule',
    explanationText:
      'count(sub) counts non-overlapping matches from left to right. In "aaaa", "aa" matches at indices 0-1 and 2-3, yielding 2 (not 3).',
    complexityInfo: 'Non-overlapping match guarantee',
  },
  {
    id: 'pcap-s3-fc-097',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'count(sub) with empty string sub=""',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does s.count("") return for a string of length N?',
    codeSnippet: `s = "abc"
print(len(s))
print(s.count(""))`,
    stdoutExpected: `3
4`,
    explanationTitle: 'Empty String Count is len + 1',
    explanationText:
      'The empty string occurs between every pair of characters, plus before the first and after the last. For any string of length N, s.count("") returns N + 1.',
    complexityInfo: 'len(s) + 1 character positions',
  },
  {
    id: 'pcap-s3-fc-098',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'split(sep) with empty separator error',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What exception is raised if sep is "" in split("")?',
    codeSnippet: `try:
    "hello".split("")
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `ValueError`,
    explanationTitle: 'Empty Separator ValueError',
    explanationText:
      'split("") raises ValueError: empty separator. To split a string into individual characters, use list(s) or [c for c in s].',
    complexityInfo: 'sep cannot be empty string',
  },
  {
    id: 'pcap-s3-fc-099',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'format() and f-string string interpolation',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do positional and keyword placeholders work in str.format()?',
    codeSnippet: `print("{0} is {1}".format("Python", "fun"))
print("{name} score: {score:.1f}".format(name="Sam", score=95.55))`,
    stdoutExpected: `Python is fun
Sam score: 95.6`,
    explanationTitle: 'format() Specifiers',
    explanationText:
      'str.format() uses curly braces {} for field placeholders with optional positional indexes ({0}, {1}), keyword names ({name}), and formatting specifiers ({score:.1f}).',
    complexityInfo: 'Format string mini-language',
  },
  {
    id: 'pcap-s3-fc-100',
    cardType: 'PCAP 3.5 • Searching & Splitting',
    topic: 'join() with dictionary keys',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does ",".join(dict) join when given a dictionary?',
    codeSnippet: `d = {"alpha": 1, "beta": 2, "gamma": 3}
print(",".join(d))`,
    stdoutExpected: `alpha,beta,gamma`,
    explanationTitle: 'join() Iterates Over Dictionary Keys',
    explanationText:
      'Iterating over a dictionary yields its keys in insertion order. Since the keys are strings, ",".join(d) concatenates the keys separated by commas.',
    complexityInfo: 'Dict key iteration in insertion order',
  },
];
