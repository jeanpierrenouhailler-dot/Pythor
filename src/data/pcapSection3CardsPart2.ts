import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 3: STRINGS (Part 2: Cards 41 to 80)
 * - Chapter 3.3: Built-in String Validation Methods (Cards 41-60)
 * - Chapter 3.4: String Transformation Methods (Cards 61-80)
 */
export const section3CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.3: BUILT-IN STRING VALIDATION METHODS (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcap-s3-fc-041',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isalnum() definition and empty string behavior',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does isalnum() return for strings with spaces, symbols, or empty strings?',
    codeSnippet: `print("Python3".isalnum())
print("Python 3".isalnum())
print("".isalnum())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isalnum() Alpha-Numeric Rule',
    explanationText:
      'isalnum() returns True if ALL characters in the string are alphanumeric (letters or numbers) and there is at least one character. Spaces and empty strings return False.',
    complexityInfo: 'O(N) character check',
  },
  {
    id: 'pcap-s3-fc-042',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isalpha() letter validation',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does isalpha() return for numeric digits and accented letters?',
    codeSnippet: `print("Python".isalpha())
print("Py3".isalpha())
print("café".isalpha())`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'isalpha() Unicode Letters',
    explanationText:
      'isalpha() checks if all characters are alphabetic. Unicode letters (including accented letters like "é", greek letters, etc.) return True. Digits cause it to return False.',
    complexityInfo: 'Unicode category lookup',
  },
  {
    id: 'pcap-s3-fc-043',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isdigit() decimal digit verification',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Does isdigit() return True for negative numbers or floating point decimals?',
    codeSnippet: `print("12345".isdigit())
print("-12".isdigit())
print("3.14".isdigit())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isdigit() Signs and Dots',
    explanationText:
      'isdigit() requires EVERY character to be a digit (0-9). The minus sign "-" and decimal point "." are punctuation symbols, not digits, so "-12" and "3.14" return False.',
    complexityInfo: 'Requires len > 0 and only digits',
  },
  {
    id: 'pcap-s3-fc-044',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'islower() with non-alphabetic characters',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does islower() handle strings that contain numbers or punctuation alongside lowercase letters?',
    codeSnippet: `print("python_3.10!".islower())
print("123!".islower())
print("".islower())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'islower() Cased Character Rule',
    explanationText:
      'islower() returns True if there is at least ONE cased character and ALL cased characters are lowercase. Numbers and punctuation are ignored. If there are NO cased characters (e.g. "123!"), it returns False.',
    complexityInfo: 'Cased character existence check',
  },
  {
    id: 'pcap-s3-fc-045',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isupper() with symbols and digits',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does isupper() require to return True?',
    codeSnippet: `print("PCAP-31-03".isupper())
print("PCAPa".isupper())
print("---".isupper())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isupper() Specification',
    explanationText:
      'isupper() requires at least one cased character, and all cased characters must be uppercase. Hyphens and digits are uncased and ignored in "PCAP-31-03", returning True.',
    complexityInfo: 'Requires at least 1 uppercase char',
  },
  {
    id: 'pcap-s3-fc-046',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isspace() whitespace detection',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Which characters are recognized as whitespace by isspace()?',
    codeSnippet: `ws = " \\t\\n\\r\\v\\f"
print(ws.isspace())
print("".isspace())
print(" a ".isspace())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isspace() Character Set',
    explanationText:
      'isspace() returns True if all characters are whitespace (space, \\t, \\n, \\r, \\v, \\f) and len > 0. Any non-whitespace character makes it False.',
    complexityInfo: 'O(N) whitespace category test',
  },
  {
    id: 'pcap-s3-fc-047',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'startswith() with single prefix string',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does startswith() return and is it case-sensitive?',
    codeSnippet: `s = "Certification"
print(s.startswith("Cert"))
print(s.startswith("cert"))
print(s.startswith(""))`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'startswith() Exact Matching',
    explanationText:
      'startswith(prefix) checks if the string begins with prefix. It is strictly case-sensitive ("Cert" != "cert"). Any string starts with "".',
    complexityInfo: 'O(len(prefix)) comparison',
  },
  {
    id: 'pcap-s3-fc-048',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'startswith() with tuple of prefixes',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Can startswith() accept multiple candidate prefixes, and what container type must be used?',
    codeSnippet: `filename = "test.py"
print(filename.startswith(("main", "test", "demo")))
try:
    filename.startswith(["test", "demo"])
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `True
TypeError`,
    explanationTitle: 'startswith() Tuple Requirement',
    explanationText:
      'startswith() can accept a tuple of prefixes to check for multiple candidates. Passing a list raises TypeError: tuple expected, not list.',
    complexityInfo: 'Must be tuple of str',
  },
  {
    id: 'pcap-s3-fc-049',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'endswith() with suffix checking',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you check for multiple possible file extensions with endswith()?',
    codeSnippet: `doc = "archive.tar.gz"
print(doc.endswith((".zip", ".tar.gz", ".rar")))
print(doc.endswith(".tar"))`,
    stdoutExpected: `True
False`,
    explanationTitle: 'endswith() Multiple Suffixes',
    explanationText:
      'Passing a tuple of suffixes to endswith() returns True if the string ends with any of them. Since it ends with ".tar.gz", it evaluates to True.',
    complexityInfo: 'Tuple of suffixes O(k * M)',
  },
  {
    id: 'pcap-s3-fc-050',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'startswith() start and end position parameters',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What do the optional start and end parameters do in startswith(prefix, start, end)?',
    codeSnippet: `s = "abc_python_xyz"
print(s.startswith("python", 4))
print(s.startswith("python", 4, 10))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'startswith() Substring Windows',
    explanationText:
      's.startswith(prefix, start, end) tests whether the slice s[start:end] begins with the prefix without creating an intermediate slice object.',
    complexityInfo: 'In-place window check',
  },
  {
    id: 'pcap-s3-fc-051',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'Validation methods on empty string summary',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What do isalnum(), isalpha(), isdigit(), islower(), isupper(), and isspace() all return on ""?',
    codeSnippet: `empty = ""
checks = [
    empty.isalnum(),
    empty.isalpha(),
    empty.isdigit(),
    empty.islower(),
    empty.isupper(),
    empty.isspace()
]
print(any(checks))`,
    stdoutExpected: `False`,
    explanationTitle: 'Empty String Validation Rule',
    explanationText:
      'All six built-in string validation methods return False on an empty string because they all require at least one qualifying character.',
    complexityInfo: 'Length > 0 precondition',
  },
  {
    id: 'pcap-s3-fc-052',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'istitle() titlecase detection',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What makes a string qualify as istitle()?',
    codeSnippet: `print("Hello World".istitle())
print("Hello world".istitle())
print("10 Little Pigs".istitle())`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'istitle() Word Rule',
    explanationText:
      'istitle() returns True if every word starts with an uppercase letter and the remaining letters are lowercase. Digits ("10") are uncased and allowed.',
    complexityInfo: 'Word boundary case inspection',
  },
  {
    id: 'pcap-s3-fc-053',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isidentifier() for valid variable names',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does isidentifier() check?',
    codeSnippet: `print("my_var_1".isidentifier())
print("1_var".isidentifier())
print("for".isidentifier())`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'isidentifier() Syntax Rule',
    explanationText:
      'isidentifier() returns True if the string is a syntactically valid Python identifier (letters/underscore followed by letters/digits/underscores). Note: keywords like "for" return True!',
    complexityInfo: 'Lexical identifier check',
  },
  {
    id: 'pcap-s3-fc-054',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'keyword.iskeyword() vs isidentifier()',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Why does "def".isidentifier() return True when "def" cannot be a variable name?',
    codeSnippet: `import keyword
s = "def"
print(s.isidentifier())
print(keyword.iskeyword(s))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Identifier vs Keyword Distinction',
    explanationText:
      'isidentifier() tests lexical syntax only (it looks like an identifier). To verify if a name is legally assignable as a variable, check that isidentifier() is True and keyword.iskeyword() is False.',
    complexityInfo: 'Grammar vs Reserved word check',
  },
  {
    id: 'pcap-s3-fc-055',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isnumeric() and isdecimal() vs isdigit()',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the hierarchy between isdecimal(), isdigit(), and isnumeric()?',
    codeSnippet: `s = "²" # Superscript two (U+00B2)
print(s.isdecimal())
print(s.isdigit())
print(s.isnumeric())`,
    stdoutExpected: `False
True
True`,
    explanationTitle: 'Numeric Subsets',
    explanationText:
      'isdecimal() is the strictest (base 10 digits 0-9). isdigit() includes superscripts/subscripts. isnumeric() is the broadest, also including vulgar fractions (½) and Roman numerals.',
    complexityInfo: 'Unicode numeric property layers',
  },
  {
    id: 'pcap-s3-fc-056',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isascii() method',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does isascii() test and what does it return for an empty string?',
    codeSnippet: `print("Hello!".isascii())
print("Héllo!".isascii())
print("".isascii())`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'isascii() Code Point 0-127',
    explanationText:
      'isascii() returns True if all characters in the string have code points in range 0-127. Unlike isalnum(), isascii() returns True on an empty string.',
    complexityInfo: 'All code points <= 127',
  },
  {
    id: 'pcap-s3-fc-057',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'isprintable() non-printable escape detection',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What characters cause isprintable() to return False?',
    codeSnippet: `print("Hello World".isprintable())
print("Hello\\nWorld".isprintable())
print("Hello\\tWorld".isprintable())`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'isprintable() Escape Check',
    explanationText:
      'Control characters like \\n (newline) and \\t (tab) are defined by Unicode as non-printable formatting characters, causing isprintable() to return False.',
    complexityInfo: 'Unicode category other than Control/Separator',
  },
  {
    id: 'pcap-s3-fc-058',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'startswith() with negative start index',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do negative indices behave in s.startswith("on", -2)?',
    codeSnippet: `s = "python"
print(s.startswith("on", -2))
print(s.startswith("th", -4))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Negative Indices in startswith',
    explanationText:
      'Negative start indices count backwards from the end: -2 corresponds to index 4 ("o"). The substring from index 4 begins with "on", returning True.',
    complexityInfo: 'Slice coordinate resolution',
  },
  {
    id: 'pcap-s3-fc-059',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'Validation methods return type',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the return type of all "is..." string methods?',
    codeSnippet: `res = "abc".isalpha()
print(type(res).__name__, res is True)`,
    stdoutExpected: `bool True`,
    explanationTitle: 'Boolean Return Guarantees',
    explanationText:
      'All string predicate methods (startswith, endswith, islower, isalpha, etc.) return explicit bool objects (True or False), never integers or None.',
    complexityInfo: 'Type guarantee bool',
  },
  {
    id: 'pcap-s3-fc-060',
    cardType: 'PCAP 3.3 • Validation',
    topic: 'endswith() with empty string',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does any string return for s.endswith("")?',
    codeSnippet: `print("Python".endswith(""))
print("".endswith(""))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Empty Suffix Invariant',
    explanationText:
      'Every string (including the empty string itself) ends with the empty string "". Thus s.endswith("") is always True.',
    complexityInfo: 'Empty string boundary condition',
  },

  // =========================================================================
  // CHAPTER 3.4: STRING TRANSFORMATION METHODS (Cards 61 to 80)
  // =========================================================================
  {
    id: 'pcap-s3-fc-061',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'capitalize() first character upper, remaining lower',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What does capitalize() do to characters after the first character?',
    codeSnippet: `s = "pCAP-31-03 eXAM"
print(s.capitalize())`,
    stdoutExpected: `Pcap-31-03 exam`,
    explanationTitle: 'capitalize() Forces Lowercase on Rest',
    explanationText:
      'capitalize() capitalizes the very first character and forcibly converts ALL remaining characters to lowercase. "pCAP" becomes "Pcap" and "eXAM" becomes "exam".',
    complexityInfo: 'O(N) new string allocation',
  },
  {
    id: 'pcap-s3-fc-062',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'title() word capitalization rules',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does title() treat apostrophes and numbers inside words?',
    codeSnippet: `print("they're ready".title())
print("chapter 3a".title())`,
    stdoutExpected: `They'Re Ready
Chapter 3A`,
    explanationTitle: 'title() Word Boundary Oddities',
    explanationText:
      'title() considers any non-letter character as a word boundary. The apostrophe in "they\'re" causes "Re" to be capitalized as a new word.',
    complexityInfo: 'Word boundary state machine',
  },
  {
    id: 'pcap-s3-fc-063',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'lower() vs casefold()',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is casefold() and how does it differ from lower()?',
    codeSnippet: `german_s = "ß"
print(german_s.lower())
print(german_s.casefold())`,
    stdoutExpected: `ß
ss`,
    explanationTitle: 'Aggressive Casefolding',
    explanationText:
      'casefold() is an aggressive version of lower() designed for caseless matching across international alphabets. German sharp "ß" folds to "ss".',
    complexityInfo: 'Unicode full case mapping',
  },
  {
    id: 'pcap-s3-fc-064',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'swapcase() inverts character casing',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the output of swapcase() on mixed case strings?',
    codeSnippet: `s = "PyThOn 3.10"
print(s.swapcase())`,
    stdoutExpected: `pYtHoN 3.10`,
    explanationTitle: 'swapcase() Inversion',
    explanationText:
      'swapcase() converts all uppercase characters to lowercase and all lowercase to uppercase. Digits, spaces, and punctuation remain unchanged.',
    complexityInfo: 'O(N) character case toggle',
  },
  {
    id: 'pcap-s3-fc-065',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'strip() removes leading and trailing whitespace',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Does strip() remove spaces inside the string between words?',
    codeSnippet: `s = "  hello   world  \\n"
clean = s.strip()
print(repr(clean))`,
    stdoutExpected: `'hello   world'`,
    explanationTitle: 'strip() Only Affects Ends',
    explanationText:
      'strip() only removes characters from the extreme left and right ends of the string. Internal whitespace between words is completely untouched.',
    complexityInfo: 'Two-pointer trim O(N)',
  },
  {
    id: 'pcap-s3-fc-066',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'strip(chars) character set argument, not substring!',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Does strip("www.com") remove the exact prefix "www." or any matching character?',
    codeSnippet: `s = "www.python.org"
print(s.strip("w.org"))`,
    stdoutExpected: `python`,
    explanationTitle: 'strip Argument is a Character Set',
    explanationText:
      'The argument to strip(chars) is a set of individual characters to remove, NOT a substring or prefix! It strips any combination of "w", ".", "o", "r", "g" from both ends.',
    complexityInfo: 'Set-based endpoint stripping',
  },
  {
    id: 'pcap-s3-fc-067',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'lstrip() and rstrip() directional stripping',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do lstrip() and rstrip() differ?',
    codeSnippet: `s = "  Python  "
print(repr(s.lstrip()))
print(repr(s.rstrip()))`,
    stdoutExpected: `'Python  '
'  Python'`,
    explanationTitle: 'Directional Trimming',
    explanationText:
      'lstrip() only trims characters from the left (beginning), while rstrip() only trims from the right (end).',
    complexityInfo: 'Single-ended trim O(N)',
  },
  {
    id: 'pcap-s3-fc-068',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'replace(old, new) all occurrences by default',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How many occurrences does replace(old, new) substitute if count is omitted?',
    codeSnippet: `s = "banana"
print(s.replace("a", "o"))`,
    stdoutExpected: `bonono`,
    explanationTitle: 'replace() Global Replacement',
    explanationText:
      'Without the optional count parameter, replace(old, new) replaces ALL non-overlapping occurrences of old with new throughout the entire string.',
    complexityInfo: 'O(N) search and allocate',
  },
  {
    id: 'pcap-s3-fc-069',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'replace(old, new, count) count limiter',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the output of "banana".replace("a", "o", 2)?',
    codeSnippet: `s = "banana"
print(s.replace("a", "o", 2))`,
    stdoutExpected: `bonona`,
    explanationTitle: 'replace() Count Limit',
    explanationText:
      'The optional third argument count specifies the maximum number of occurrences to replace from left to right. Only the first 2 "a"s become "o".',
    complexityInfo: 'Stops after count matches',
  },
  {
    id: 'pcap-s3-fc-070',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'replace() when old substring is not found',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What happens if old does not exist in the string during replace()?',
    codeSnippet: `s = "python"
res = s.replace("java", "rust")
print(res)
print(res is s)`,
    stdoutExpected: `python
True`,
    explanationTitle: 'replace() Missing Substring No-Op',
    explanationText:
      'If old is not found, replace() returns a copy of the original string unchanged without raising any exception.',
    complexityInfo: 'No-op return',
  },
  {
    id: 'pcap-s3-fc-071',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'replace() with empty string old=""',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What does "abc".replace("", "-") produce?',
    codeSnippet: `s = "abc"
print(s.replace("", "-"))`,
    stdoutExpected: `-a-b-c-`,
    explanationTitle: 'Empty String Replacement Injection',
    explanationText:
      'Because the empty string matches before every character and after the last character, replace("", "-") inserts "-" at every boundary.',
    complexityInfo: 'Inserts at all len + 1 positions',
  },
  {
    id: 'pcap-s3-fc-072',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'Chaining transformation methods',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'In what order are chained string methods evaluated?',
    codeSnippet: `raw = "  --pYtHoN--  "
res = raw.strip().strip("-").upper()
print(res)`,
    stdoutExpected: `PYTHON`,
    explanationTitle: 'Left-to-Right Method Chaining',
    explanationText:
      'Chained methods evaluate strictly left-to-right: raw.strip() removes outer spaces, .strip("-") removes dashes, and .upper() uppercases the result.',
    complexityInfo: 'Pipeline of O(N) operations',
  },
  {
    id: 'pcap-s3-fc-073',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'upper() and lower() return new objects',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Does s.upper() modify s in place or return a new string?',
    codeSnippet: `s = "hello"
s.upper()
print(s)`,
    stdoutExpected: `hello`,
    explanationTitle: 'Strings are Never Mutated In Place',
    explanationText:
      'All string transformation methods return a brand new string. The original string variable s remains unchanged unless explicitly reassigned (s = s.upper()).',
    complexityInfo: 'Immutability guarantee',
  },
  {
    id: 'pcap-s3-fc-074',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'lstrip(chars) vs removeprefix()',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Why did Python 3.9 introduce removeprefix() instead of relying on lstrip()?',
    codeSnippet: `s = "Arthur: King"
print(s.lstrip("Arthur: "))
print(s.removeprefix("Arthur: "))`,
    stdoutExpected: `ing
King`,
    explanationTitle: 'lstrip Over-Stripping Danger',
    explanationText:
      'lstrip("Arthur: ") strips every character in the set {"A","r","t","h","u",":"," "}. Since "K" is followed by "i", but "r" is in the set, the "K" in "King" might be spared but other letters stripped. removeprefix removes the exact prefix.',
    complexityInfo: 'Set vs literal prefix semantic',
  },
  {
    id: 'pcap-s3-fc-075',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'rstrip() removing newlines from file lines',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you strip trailing newlines and carriage returns cleanly using rstrip()?',
    codeSnippet: `line = "data row 101\\r\\n"
print(repr(line.rstrip("\\r\\n")))`,
    stdoutExpected: `'data row 101'`,
    explanationTitle: 'rstrip for Line Endings',
    explanationText:
      'line.rstrip("\\r\\n") strips any combination of carriage returns and line feeds from the end of the line, ideal for parsing cross-platform text files.',
    complexityInfo: 'O(len(trailing_chars))',
  },
  {
    id: 'pcap-s3-fc-076',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'zfill(width) zero padding numbers',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does zfill() handle leading signs (+ or -)?',
    codeSnippet: `print("42".zfill(5))
print("-42".zfill(5))
print("+42".zfill(5))`,
    stdoutExpected: `00042
-0042
+0042`,
    explanationTitle: 'zfill Sign Awareness',
    explanationText:
      'zfill(width) pads a numeric string with zeros on the left until it reaches the specified width. If the string starts with "+" or "-", the zeros are inserted AFTER the sign.',
    complexityInfo: 'Sign-aware numeric padding',
  },
  {
    id: 'pcap-s3-fc-077',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'expandtabs(tabsize) conversion',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the default tab size of expandtabs()?',
    codeSnippet: `s = "a\\tb"
print(len(s.expandtabs()))
print(len(s.expandtabs(4)))`,
    stdoutExpected: `8
4`,
    explanationTitle: 'expandtabs() Default 8',
    explanationText:
      'expandtabs(tabsize=8) expands tabs into spaces based on tab stop columns. The default tab size is 8 spaces.',
    complexityInfo: 'Column alignment algorithm',
  },
  {
    id: 'pcap-s3-fc-078',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'lower() with already lowercase strings identity',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Does s.lower() return the same object if s is already completely lowercase?',
    codeSnippet: `s = "already_lower"
res = s.lower()
print(res is s)
print(res == s)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'CPython lower() Optimization',
    explanationText:
      'In CPython, if a string contains no uppercase characters that require conversion, lower() optimizes memory by returning the original string object directly.',
    complexityInfo: 'CPython reference reuse optimization',
  },
  {
    id: 'pcap-s3-fc-079',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'replace() count parameter negative value',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does replace() behave when count is a negative integer?',
    codeSnippet: `s = "aaa"
print(s.replace("a", "b", -1))`,
    stdoutExpected: `bbb`,
    explanationTitle: 'Negative Count in replace()',
    explanationText:
      'A negative count in replace(old, new, count) is interpreted as "no limit", which replaces ALL occurrences (same as omitting count).',
    complexityInfo: 'Negative count = unlimited',
  },
  {
    id: 'pcap-s3-fc-080',
    cardType: 'PCAP 3.4 • Transformation',
    topic: 'strip() with whitespace set argument',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What does s.strip() with no arguments strip by default?',
    codeSnippet: `s = "\\t \\n \\r PCAP \\n "
print(s.strip())`,
    stdoutExpected: `PCAP`,
    explanationTitle: 'Default Whitespace Strip Set',
    explanationText:
      'When called with no arguments or None, strip() strips all ASCII whitespace characters (spaces, tabs, newlines, carriage returns, vertical tabs, form feeds).',
    complexityInfo: 'Standard whitespace charset',
  },
];
