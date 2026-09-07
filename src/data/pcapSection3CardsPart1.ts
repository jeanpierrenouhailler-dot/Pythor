import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 3: STRINGS (Part 1: Cards 1 to 40)
 * - Chapter 3.1: Character Representation & Encodings (Cards 1-20)
 * - Chapter 3.2: String Operations & Immutability (Cards 21-40)
 */
export const section3CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.1: CHARACTER REPRESENTATION & ENCODINGS (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcap-s3-fc-001',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'ASCII standard range and size',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the exact range of integer code points defined by the standard 7-bit ASCII table?',
    codeSnippet: `# Standard ASCII defines characters 0 to 127
ascii_chars = [chr(i) for i in range(128)]
print(len(ascii_chars))
print(ord(ascii_chars[0]), ord(ascii_chars[-1]))`,
    stdoutExpected: `128
0 127`,
    explanationTitle: 'ASCII 7-bit Standard',
    explanationText:
      'ASCII uses 7 bits to represent exactly 128 characters, spanning code points 0 to 127. Values 128 to 255 belong to Extended ASCII (code pages) and not original standard ASCII.',
    complexityInfo: 'O(1) code point range',
  },
  {
    id: 'pcap-s3-fc-002',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'ord() function return type and behavior',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does ord(c) return, and what error is raised if c is not a single character?',
    codeSnippet: `print(ord('A'))
try:
    ord("AB")
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `65
TypeError`,
    explanationTitle: 'ord() Single Character Requirement',
    explanationText:
      'ord(c) returns the integer code point for a 1-character string. Passing a string of length != 1 raises TypeError: ord() expected a character, but string of length 2 found.',
    complexityInfo: 'O(1) lookup',
  },
  {
    id: 'pcap-s3-fc-003',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'chr() function inverse of ord()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does chr(i) do, and what exception is raised if i is out of range or not an integer?',
    codeSnippet: `print(chr(97))
try:
    chr(1_114_112) # Beyond 0x10FFFF
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `a
ValueError`,
    explanationTitle: 'chr() Valid Range',
    explanationText:
      'chr(i) returns the string representing a character whose Unicode code point is the integer i. The valid range is 0 to 1,114,111 (0x10FFFF). Out of range integers raise ValueError.',
    complexityInfo: 'O(1) character lookup',
  },
  {
    id: 'pcap-s3-fc-004',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Case difference in ASCII: ord("a") - ord("A")',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the numeric difference between lowercase and uppercase ASCII letters?',
    codeSnippet: `diff = ord('a') - ord('A')
print(diff)
print(chr(ord('M') + diff))`,
    stdoutExpected: `32
m`,
    explanationTitle: 'ASCII 32 Bit Offset',
    explanationText:
      'In ASCII, uppercase "A" is 65 and lowercase "a" is 97. The difference is exactly 32 (bit 5: 0x20). Adding 32 converts an uppercase ASCII letter to lowercase.',
    complexityInfo: 'Arithmetic offset O(1)',
  },
  {
    id: 'pcap-s3-fc-005',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Unicode max code point',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the maximum allowable Unicode code point in Python 3?',
    codeSnippet: `max_cp = 0x10FFFF
print(max_cp)
print(len(chr(max_cp)))`,
    stdoutExpected: `1114111
1`,
    explanationTitle: 'Unicode Range Limit',
    explanationText:
      'The Unicode standard defines code points from 0 to 0x10FFFF (1,114,111 in decimal). Any integer above 0x10FFFF passed to chr() triggers a ValueError.',
    complexityInfo: '1,114,112 possible code points',
  },
  {
    id: 'pcap-s3-fc-006',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Escape sequence \\n vs \\r vs \\t',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What are the ASCII integer values of \\t and \\n?',
    codeSnippet: `print(ord('\\t'))
print(ord('\\n'))
print(ord('\\r'))`,
    stdoutExpected: `9
10
13`,
    explanationTitle: 'Control Character Code Points',
    explanationText:
      'Horizontal Tab (\\t) is 9, Line Feed / Newline (\\n) is 10, and Carriage Return (\\r) is 13 in the ASCII table.',
    complexityInfo: 'Standard ASCII control codes',
  },
  {
    id: 'pcap-s3-fc-007',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Raw string literal prefix r"" and escapes',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do raw string literals r"..." treat backslashes?',
    codeSnippet: `s1 = "\\n"
s2 = r"\\n"
print(len(s1), len(s2))
print(s2[0], s2[1])`,
    stdoutExpected: `1 2
\\ n`,
    explanationTitle: 'Raw Strings and Backslashes',
    explanationText:
      'In a raw string literal (prefixed with r or R), backslashes are treated as literal characters and not escape character introducers. Hence r"\\n" has length 2.',
    complexityInfo: 'Lexer-level string processing',
  },
  {
    id: 'pcap-s3-fc-008',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'UTF-8 variable-length encoding principles',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How many bytes does UTF-8 use to encode ASCII characters (0-127) versus accented characters?',
    codeSnippet: `ascii_byte = 'A'.encode('utf-8')
accent_byte = 'é'.encode('utf-8')
print(len(ascii_byte), len(accent_byte))`,
    stdoutExpected: `1 2`,
    explanationTitle: 'UTF-8 Variable Width',
    explanationText:
      'UTF-8 is backward-compatible with ASCII: code points 0-127 use exactly 1 byte. Characters like "é" (U+00E9) require 2 bytes, while CJK and emoji require 3 or 4 bytes.',
    complexityInfo: 'UTF-8 uses 1 to 4 bytes per character',
  },
  {
    id: 'pcap-s3-fc-009',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'ord() with digits: converting char to int without int()',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How does subtracting ord("0") convert a numeric digit character into its integer value?',
    codeSnippet: `ch = '7'
val = ord(ch) - ord('0')
print(val, type(val).__name__)`,
    stdoutExpected: `7 int`,
    explanationTitle: 'Digit Offset Arithmetic',
    explanationText:
      'In ASCII, digits "0" through "9" occupy contiguous code points from 48 to 57. Subtracting ord("0") (48) from ord("7") (55) yields the integer 7.',
    complexityInfo: 'O(1) arithmetic conversion',
  },
  {
    id: 'pcap-s3-fc-010',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Unicode hexadecimal escape \\u and \\U',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the syntax for 16-bit and 32-bit Unicode escapes in string literals?',
    codeSnippet: `s = "\\u0041\\u0042"
print(s)
print(ord(s[0]))`,
    stdoutExpected: `AB
65`,
    explanationTitle: 'Unicode Escape Syntax',
    explanationText:
      '\\u takes exactly 4 hexadecimal digits (16-bit), while \\U takes exactly 8 hex digits (32-bit). \\u0041 represents "A" (hex 0x41 = 65).',
    complexityInfo: 'Hexadecimal code point representation',
  },
  {
    id: 'pcap-s3-fc-011',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'ord() comparison between digits and uppercase letters',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Which has a lower code point: digits, uppercase letters, or lowercase letters?',
    codeSnippet: `print(ord('9') < ord('A'))
print(ord('Z') < ord('a'))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'ASCII Ordering Hierarchy',
    explanationText:
      'In ASCII: digits (48..57) come first, followed by uppercase letters (65..90), and finally lowercase letters (97..122). Thus "9" < "A" and "Z" < "a".',
    complexityInfo: 'Fundamental ASCII sort order',
  },
  {
    id: 'pcap-s3-fc-012',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Space character code point',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the ASCII code point of the space character " "?',
    codeSnippet: `sp = " "
print(ord(sp))
print(chr(32) == sp)`,
    stdoutExpected: `32
True`,
    explanationTitle: 'Space Code Point 32',
    explanationText:
      'The standard space character is ASCII 32 (0x20). It is the lowest printable character in the standard ASCII set (0 to 31 are non-printable control characters).',
    complexityInfo: 'ASCII 32 is first printable glyph',
  },
  {
    id: 'pcap-s3-fc-013',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'String encode() and bytes decode()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the return type of "hello".encode("utf-8") and b"hello".decode("utf-8")?',
    codeSnippet: `b = "PCAP".encode("utf-8")
s = b.decode("utf-8")
print(type(b).__name__, type(s).__name__)`,
    stdoutExpected: `bytes str`,
    explanationTitle: 'encode() and decode() Dualism',
    explanationText:
      'str.encode(encoding) converts a Unicode string into a bytes object. bytes.decode(encoding) converts a bytes sequence back into a Unicode str.',
    complexityInfo: 'str <-> bytes transformation',
  },
  {
    id: 'pcap-s3-fc-014',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Triple quoted strings and preserved newlines',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do triple-quoted strings treat embedded physical newlines?',
    codeSnippet: `s = """A
B"""
print(len(s))
print([ord(c) for c in s])`,
    stdoutExpected: `3
[65, 10, 66]`,
    explanationTitle: 'Triple Quote Multiline Behavior',
    explanationText:
      'Triple quotes (""" or \'\'\') preserve literal newlines as \\n characters (ASCII 10). The string """A\\nB""" has length 3: "A", "\\n", and "B".',
    complexityInfo: 'Multi-line string parsing',
  },
  {
    id: 'pcap-s3-fc-015',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'chr() with negative numbers error',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What happens when chr() is called with a negative integer?',
    codeSnippet: `try:
    chr(-1)
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `ValueError`,
    explanationTitle: 'Negative Code Point Prohibition',
    explanationText:
      'chr() only accepts non-negative integers up to 0x10FFFF. Calling chr(-1) raises ValueError: chr() arg not in range(0x110000).',
    complexityInfo: 'Range constraint [0, 0x10FFFF]',
  },
  {
    id: 'pcap-s3-fc-016',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Double backslash escape \\\\',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the length and output of a string containing "\\\\\\\\"?',
    codeSnippet: `s = "\\\\\\\\"
print(len(s))
print(s)`,
    stdoutExpected: `2
\\\\`,
    explanationTitle: 'Backslash Escaping',
    explanationText:
      'Each "\\" escapes the following character. In "\\\\\\\\", the first pair produces one literal backslash, and the second pair produces another, resulting in length 2.',
    complexityInfo: 'O(1) escape sequence parsing',
  },
  {
    id: 'pcap-s3-fc-017',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'ord() on empty string error',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What error does ord("") raise when given an empty string?',
    codeSnippet: `try:
    ord("")
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: `TypeError`,
    explanationTitle: 'ord() Empty String Guard',
    explanationText:
      'ord() requires a string of length exactly 1. Calling it with "" raises TypeError (not ValueError or IndexError).',
    complexityInfo: 'Length validation prior to lookup',
  },
  {
    id: 'pcap-s3-fc-018',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'chr(ord(c)) identity property',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Is chr(ord(c)) == c guaranteed to be True for any single-character string c in Python 3?',
    codeSnippet: `test_chars = ['A', 'z', '3', '$', '€', '🐍']
all_match = all(chr(ord(c)) == c for c in test_chars)
print(all_match)`,
    stdoutExpected: `True`,
    explanationTitle: 'Reversibility of ord() and chr()',
    explanationText:
      'In Python 3, all strings are native Unicode. ord() and chr() are exact mathematical inverses across the entire valid Unicode range.',
    complexityInfo: 'Bijections across Unicode space',
  },
  {
    id: 'pcap-s3-fc-019',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'Hex literal conversion to chr',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is chr(0x41) and chr(0x61)?',
    codeSnippet: `print(chr(0x41), chr(0x61))
print(0x41 == 65, 0x61 == 97)`,
    stdoutExpected: `A a
True True`,
    explanationTitle: 'Hexadecimal ASCII Values',
    explanationText:
      '0x41 is hex for 65 ("A"), and 0x61 is hex for 97 ("a"). Python integers can be written in hex notation 0x... anywhere.',
    complexityInfo: 'Hexadecimal integer literals',
  },
  {
    id: 'pcap-s3-fc-020',
    cardType: 'PCAP 3.1 • Encoding',
    topic: 'ASCII Caesar cipher shift mechanism',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do you shift an uppercase character by 3 positions with wrap-around using ord and chr?',
    codeSnippet: `ch = 'Z'
shift = 3
shifted = chr((ord(ch) - ord('A') + shift) % 26 + ord('A'))
print(shifted)`,
    stdoutExpected: `C`,
    explanationTitle: 'Caesar Cipher Wrap-Around',
    explanationText:
      '(ord("Z") - ord("A") + 3) % 26 = (25 + 3) % 26 = 2. Adding ord("A") (65) gives 67, which chr(67) evaluates to "C".',
    complexityInfo: 'Modulo 26 wrap-around',
  },

  // =========================================================================
  // CHAPTER 3.2: STRING OPERATIONS & IMMUTABILITY (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcap-s3-fc-021',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'String immutability and item assignment',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What happens when you attempt to modify a character in place via s[0] = "X"?',
    codeSnippet: `s = "python"
try:
    s[0] = "P"
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `TypeError`,
    explanationTitle: 'String Immutability',
    explanationText:
      'Python strings are strictly immutable sequences. Item assignment triggers TypeError: \'str\' object does not support item assignment.',
    complexityInfo: 'Immutability prevents in-place mutation',
  },
  {
    id: 'pcap-s3-fc-022',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Negative indexing wrap-around',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What do s[-1] and s[-len(s)] evaluate to?',
    codeSnippet: `s = "PYTHON"
print(s[-1])
print(s[-len(s)])`,
    stdoutExpected: `N
P`,
    explanationTitle: 'Negative Index Bounds',
    explanationText:
      'Negative index -k accesses s[len(s) - k]. Thus s[-1] is the last character ("N"), and s[-len(s)] is the first character ("P").',
    complexityInfo: 'O(1) index addressing',
  },
  {
    id: 'pcap-s3-fc-023',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'String reversal via slice [::-1]',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the output of reversing a string with s[::-1]?',
    codeSnippet: `s = "PCAP"
rev = s[::-1]
print(rev)
print(rev[::-1] == s)`,
    stdoutExpected: `PACP
True`,
    explanationTitle: 'Step -1 Extended Slicing',
    explanationText:
      's[::-1] traverses the entire string from right to left with step -1, returning the reversed string without modifying the original.',
    complexityInfo: 'O(N) copy creation',
  },
  {
    id: 'pcap-s3-fc-024',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Slice out of range bounds behavior',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Why does s[100] raise an IndexError, but s[100:200] does not?',
    codeSnippet: `s = "abc"
print(repr(s[100:200]))
try:
    print(s[100])
except IndexError as e:
    print(type(e).__name__)`,
    stdoutExpected: `''
IndexError`,
    explanationTitle: 'Slices Never Raise IndexError',
    explanationText:
      'Direct index lookups s[i] must fall within [-len, len-1], else IndexError is raised. Slices clamp out-of-bound indices silently, returning "" if completely out of range.',
    complexityInfo: 'Slice bounds clamping policy',
  },
  {
    id: 'pcap-s3-fc-025',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Slice with step: s[::2]',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the result of s[::2] on "0123456789"?',
    codeSnippet: `s = "0123456789"
print(s[::2])
print(s[1::2])`,
    stdoutExpected: `02468
13579`,
    explanationTitle: 'Step Slicing Even and Odd',
    explanationText:
      's[::2] takes elements at indices 0, 2, 4, 6, 8. s[1::2] starts at index 1 and takes elements at indices 1, 3, 5, 7, 9.',
    complexityInfo: 'O(N/2) string construction',
  },
  {
    id: 'pcap-s3-fc-026',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Lexicographical comparison: "10" < "2"',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Why does "10" < "2" evaluate to True in Python?',
    codeSnippet: `print("10" < "2")
print(ord("1"), ord("2"))`,
    stdoutExpected: `True
49 50`,
    explanationTitle: 'Lexicographical Character Ordering',
    explanationText:
      'String comparisons compare character by character using code points. Since "1" (49) is less than "2" (50), "10" is strictly less than "2" lexicographically.',
    complexityInfo: 'O(min(len1, len2)) comparison',
  },
  {
    id: 'pcap-s3-fc-027',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'min() and max() on strings',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What do min("The Dark Knight") and max("The Dark Knight") return?',
    codeSnippet: `s = "The Dark Knight"
print(repr(min(s)))
print(repr(max(s)))`,
    stdoutExpected: `' '
't'`,
    explanationTitle: 'min() and max() Code Point Selection',
    explanationText:
      'min() and max() evaluate characters by their Unicode code point. The space character " " (code point 32) is the minimum. Lowercase "t" (code point 116) is greater than uppercase "T" (84) and is the maximum.',
    complexityInfo: 'O(N) scan across characters',
  },
  {
    id: 'pcap-s3-fc-028',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'min() and max() on empty string error',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What error does min("") or max("") raise without a default argument?',
    codeSnippet: `try:
    min("")
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `ValueError`,
    explanationTitle: 'min() Empty Sequence ValueError',
    explanationText:
      'Calling min() or max() on an empty sequence raises ValueError: min() arg is an empty sequence. To prevent this, provide default=val.',
    complexityInfo: 'Empty collection guard',
  },
  {
    id: 'pcap-s3-fc-029',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'String multiplication operator *',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the output of "Ha" * 3 and "Ha" * -2?',
    codeSnippet: `print("Ha" * 3)
print(repr("Ha" * -2))
print(repr("Ha" * 0))`,
    stdoutExpected: `HaHaHa
''
''`,
    explanationTitle: 'String Multiplication Rules',
    explanationText:
      'Multiplying a string by an integer n repeats the string n times. If n <= 0, string multiplication returns the empty string "".',
    complexityInfo: 'O(len * max(0, n)) allocation',
  },
  {
    id: 'pcap-s3-fc-030',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'in and not in containment operators',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does "" in "any string" evaluate to?',
    codeSnippet: `print("" in "python")
print("th" in "python")
print("pt" in "python")`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'Empty String Substring Rule',
    explanationText:
      'The empty string "" is considered a valid substring of EVERY string, so "" in s is always True. "pt" is False because substrings must be contiguous.',
    complexityInfo: 'O(N * M) substring check',
  },
  {
    id: 'pcap-s3-fc-031',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Slice with start > stop and positive step',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does s[5:2] return when step is positive (default 1)?',
    codeSnippet: `s = "ABCDEFGH"
res = s[5:2]
print(repr(res))
print(len(res))`,
    stdoutExpected: `''
0`,
    explanationTitle: 'Invalid Direction Slice',
    explanationText:
      'When step is positive, start must be less than stop to generate characters. If start >= stop with step > 0, an empty string "" is returned.',
    complexityInfo: 'Bounds checking before loop',
  },
  {
    id: 'pcap-s3-fc-032',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Negative step slicing: s[5:2:-1]',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does s[5:2:-1] return for "ABCDEFGH"?',
    codeSnippet: `s = "ABCDEFGH"
# indices: 0:A, 1:B, 2:C, 3:D, 4:E, 5:F
print(s[5:2:-1])`,
    stdoutExpected: `FED`,
    explanationTitle: 'Negative Step Slicing',
    explanationText:
      'With step -1, slicing starts at index 5 ("F") and decrements down to, but NOT including, index 2 ("C"). Characters collected are indices 5 ("F"), 4 ("E"), 3 ("D").',
    complexityInfo: 'Direction matches negative step',
  },
  {
    id: 'pcap-s3-fc-033',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'del statement on string index or slice',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Can you use del to delete a slice or index of a string?',
    codeSnippet: `s = "Python"
try:
    del s[0]
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: `TypeError`,
    explanationTitle: 'del Prohibited on Strings',
    explanationText:
      'Strings do not support item deletion because they are immutable. Attempting del s[0] or del s[1:3] raises TypeError: \'str\' object doesn\'t support item deletion.',
    complexityInfo: 'Immutable data integrity',
  },
  {
    id: 'pcap-s3-fc-034',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'String concatenation with non-string using +',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What happens when using the + operator between a string and an integer?',
    codeSnippet: `try:
    res = "Score: " + 100
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `TypeError`,
    explanationTitle: 'Strict String Concatenation',
    explanationText:
      'Python does not automatically coerce integers to strings during concatenation (+). You must explicitly call str(100) or use an f-string.',
    complexityInfo: 'Strongly-typed typing rules',
  },
  {
    id: 'pcap-s3-fc-035',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Automatic string literal concatenation',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the result of placing two string literals adjacent without a comma or plus?',
    codeSnippet: `s = "Hello" " " "World"
print(s)
print(len(s))`,
    stdoutExpected: `Hello World
11`,
    explanationTitle: 'Compile-Time Literal Merging',
    explanationText:
      'Two or more string literals placed next to each other in source code are automatically concatenated by the Python compiler at compile time.',
    complexityInfo: 'Zero runtime overhead',
  },
  {
    id: 'pcap-s3-fc-036',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Lexicographical prefix comparison: "apple" vs "apples"',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'When one string is a prefix of another, which one is considered smaller?',
    codeSnippet: `print("apple" < "apples")
print("" < "a")`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Prefix Comparison Rule',
    explanationText:
      'If all characters match up to the end of the shorter string, the shorter string is strictly smaller than the longer string.',
    complexityInfo: 'Length acts as tie-breaker',
  },
  {
    id: 'pcap-s3-fc-037',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Case sensitivity in string comparisons',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Why does "Zebra" < "apple" evaluate to True?',
    codeSnippet: `print("Zebra" < "apple")
print(ord("Z"), ord("a"))`,
    stdoutExpected: `True
90 97`,
    explanationTitle: 'Uppercase Precedes Lowercase',
    explanationText:
      'All ASCII uppercase letters (A-Z = 65-90) have smaller code points than lowercase letters (a-z = 97-122). Therefore, any uppercase letter is smaller than any lowercase letter.',
    complexityInfo: 'ASCII code point direct comparison',
  },
  {
    id: 'pcap-s3-fc-038',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Slice step equal to 0 error',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What exception is raised if slice step is 0?',
    codeSnippet: `s = "python"
try:
    print(s[::0])
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `ValueError`,
    explanationTitle: 'Slice Step Zero ValueError',
    explanationText:
      'A slice step of 0 is mathematically undefined and raises ValueError: slice step cannot be zero.',
    complexityInfo: 'Step != 0 invariant',
  },
  {
    id: 'pcap-s3-fc-039',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Iterating through characters of a string',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What are the elements yielded when iterating directly over a string?',
    codeSnippet: `chars = [c for c in "Py!"]
print(chars)
print([type(c).__name__ for c in chars])`,
    stdoutExpected: `['P', 'y', '!']
['str', 'str', 'str']`,
    explanationTitle: 'Strings as Character Iterables',
    explanationText:
      'Iterating over a string yields 1-character str objects. Python has no distinct "char" data type—individual characters are strings of length 1.',
    complexityInfo: 'O(N) iteration yielding 1-len str',
  },
  {
    id: 'pcap-s3-fc-040',
    cardType: 'PCAP 3.2 • Slicing & Immutability',
    topic: 'Full copy slice s[:] identity vs equality',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Does s[:] create a new distinct object in memory for immutable strings?',
    codeSnippet: `s1 = "immutable_string"
s2 = s1[:]
print(s1 == s2)
print(s1 is s2)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'String Slicing Optimization',
    explanationText:
      'Because strings are immutable, Python optimizes s[:] by returning the exact same string object in memory (s1 is s2 is True), unlike lists where list[:] creates a new copy.',
    complexityInfo: 'Zero-copy immutable optimization',
  },
];
