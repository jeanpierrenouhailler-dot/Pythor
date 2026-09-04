import {
  CertificationTrack,
  SkillModule,
  CodingChallenge,
  PcepExamQuestion,
  Flashcard,
} from '../types';

export const availableCertificationTracks: CertificationTrack[] = [
  {
    id: 'pcap-31-03',
    code: 'PCAP-31-0x',
    fullCode: 'PCAP-31-03',
    title: 'PCAP-31-0x',
    subtitle: 'Certified Associate Python Programmer',
    badgeLevel: 'Associate Level',
    status: 'Active',
    sectionsCount: 5,
    chaptersRange: '1.1 → 5.5',
    examQuestionsCount: 40,
    examDurationMinutes: 65,
    passingScorePercent: 70,
    description:
      'Master advanced Python modules, structured exceptions, strings, full Object-Oriented Programming (OOP), comprehensions, lambdas, closures, generators, and file I/O operations.',
  },
  {
    id: 'pcep-30-02',
    code: 'PCEP-30-02',
    fullCode: 'PCEP-30-02',
    title: 'PCEP-30-02',
    subtitle: 'Certified Entry-Level Python Programmer',
    badgeLevel: 'Entry Level',
    status: 'Mastered',
    sectionsCount: 4,
    chaptersRange: '1.1 → 4.4',
    examQuestionsCount: 30,
    examDurationMinutes: 45,
    passingScorePercent: 70,
    description:
      'Computer programming basics, Python semantics and execution model, literals, operators, control flow, loops, data collections (lists, tuples, dicts), and functions.',
  },
];

// ==========================================
// PCAP-31-03 SKILL MODULES (Sections 1.1 -> 5.5)
// ==========================================
export const pcapModulesData: SkillModule[] = [
  {
    id: 'pcap-section-1',
    moduleNumber: 'Section 1',
    pcepBlockCode: 'PCAP-31-03 Section 1',
    title: 'Modules and Packages (12%)',
    examWeightPercent: 12,
    status: 'mastered',
    completionText: '5 / 5 Chapters Completed (100%)',
    syllabusDescription:
      'Importing modules and packages, namespace resolution, math module, random module, platform module, user packages, __init__.py, __name__, and sys.path mechanics.',
    quizStatus: 'Mastered • 100%',
    nodes: [
      {
        id: 'pcap-node-1-1',
        pcepCode: 'PCAP-31-03 1.1',
        title: 'Import and Use Modules and Packages',
        shortDesc: 'import variants, namespace qualification, dir(), sys.path',
        fullDesc:
          'Deep dive into module import mechanisms: `import math`, `from math import sin, pi`, `import math as m`, and `from math import *`. Understanding name collisions, qualification of nested modules, inspecting module namespaces via dir(), and sys.path resolution paths.',
        status: 'mastered',
        stars: 3,
        duration: '14 min',
        xp: 130,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Package',
        challengeId: 'challenge-pcap-1-1',
        examWeight: 'PCAP 1.1 • 3% of exam',
        syllabusItems: [
          'Import variants: import X, from X import Y, import X as Z, from X import *',
          'Advanced namespace qualification for nested packages',
          'Inspecting module contents via built-in dir()',
          'sys.path list modification and module search hierarchy',
        ],
        exercises: [
          { title: 'Namespace Collision Resolution', time: '4 min', completed: true },
          { title: 'Dynamic sys.path Appending', time: '5 min', completed: true },
          { title: 'dir() Attribute Filter', time: '5 min', isFinalChallenge: true, completed: true },
        ],
        codeSnippet: `import sys
import math as m
from math import pi, ceil

print("dir symbols:", [s for s in dir(m) if not s.startswith("_")][:5])
print("sys.path entries:", len(sys.path))`,
      },
      {
        id: 'pcap-node-1-2',
        pcepCode: 'PCAP-31-03 1.2',
        title: 'Perform Evaluations Using the math Module',
        shortDesc: 'Trigonometry, logarithms, ceil, floor, trunc, factorial, hypot',
        fullDesc:
          'Mastering the math standard library: ceil(x), floor(x), trunc(x), factorial(x), hypot(x, y), sqrt(x), pow(x, y), sin(x), cos(x), tan(x), degrees(x), radians(x), as well as mathematical constants math.pi and math.e.',
        status: 'mastered',
        stars: 3,
        duration: '12 min',
        xp: 120,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Calculator',
        challengeId: 'challenge-pcap-1-1',
        examWeight: 'PCAP 1.2 • 2% of exam',
        syllabusItems: [
          'math.ceil() vs math.floor() vs math.trunc() rounding logic',
          'math.factorial() and overflow constraints',
          'math.hypot(x, y) and Euclidean distance',
          'Trigonometric functions and radian conversions',
        ],
        exercises: [
          { title: 'Trig & Radian Computations', time: '4 min', completed: true },
          { title: 'Truncation vs Floor on Negatives', time: '4 min', completed: true },
          { title: 'Euclidean Vector Norms', time: '4 min', completed: true },
        ],
        codeSnippet: `import math

print(math.floor(-3.2))  # -4
print(math.trunc(-3.2))  # -3
print(math.hypot(3, 4))   # 5.0
print(math.factorial(5)) # 120`,
      },
      {
        id: 'pcap-node-1-3',
        pcepCode: 'PCAP-31-03 1.3',
        title: 'Generate Random Values with the random Module',
        shortDesc: 'random(), seed(), choice(), sample(), randint(), randrange()',
        fullDesc:
          'Pseudorandom number generation using the random module. Distinguish between random() [0.0, 1.0), seed(n) for deterministic reproducibility, choice(seq) vs sample(seq, k), randint(a, b) inclusive vs randrange(start, stop, step).',
        status: 'mastered',
        stars: 3,
        duration: '12 min',
        xp: 120,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Shuffle',
        challengeId: 'challenge-pcap-1-1',
        examWeight: 'PCAP 1.3 • 2% of exam',
        syllabusItems: [
          'Deterministic behavior with random.seed(x)',
          'random.randint(a, b) includes both bounds a and b',
          'random.randrange(a, b, step) excludes stop bound b',
          'random.choice() vs random.sample() without replacement',
        ],
        exercises: [
          { title: 'Deterministic Seed Testing', time: '4 min', completed: true },
          { title: 'Non-repeating Sampling with sample()', time: '4 min', completed: true },
          { title: 'Ranged Random Sequences', time: '4 min', completed: true },
        ],
        codeSnippet: `import random

random.seed(42)
vals = [random.randint(1, 10) for _ in range(3)]
pick = random.choice(["alpha", "beta", "gamma"])
print("Deterministic:", vals, pick)`,
      },
      {
        id: 'pcap-node-1-4',
        pcepCode: 'PCAP-31-03 1.4',
        title: 'Discover Host Platform Properties via platform',
        shortDesc: 'platform(), machine(), processor(), system(), version(), python_version()',
        fullDesc:
          'Inspect the host operating system, underlying hardware architecture, and Python runtime implementation: platform.platform(), platform.machine(), platform.processor(), platform.system(), platform.version(), platform.python_implementation(), and platform.python_version_tuple().',
        status: 'mastered',
        stars: 3,
        duration: '10 min',
        xp: 110,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Cpu',
        challengeId: 'challenge-pcap-1-1',
        examWeight: 'PCAP 1.4 • 2% of exam',
        syllabusItems: [
          'platform.platform(aliased, terse) parameters',
          'platform.machine() and processor() identification',
          'platform.python_implementation() returns CPython / PyPy / Jython',
          'platform.python_version_tuple() returns (major, minor, patch)',
        ],
        exercises: [
          { title: 'Host OS Identification Script', time: '3 min', completed: true },
          { title: 'Python Version Tuple Parsing', time: '3 min', completed: true },
          { title: 'Runtime Implementation Check', time: '4 min', completed: true },
        ],
        codeSnippet: `import platform

print("OS:", platform.system())
print("Machine:", platform.machine())
print("Engine:", platform.python_implementation())
print("Version:", platform.python_version_tuple())`,
      },
      {
        id: 'pcap-node-1-5',
        pcepCode: 'PCAP-31-03 1.5',
        title: 'Create and Use User-Defined Modules & Packages',
        shortDesc: '__pycache__, .pyc, __name__, public/private, __init__.py',
        fullDesc:
          'Constructing real multi-file Python applications: module bytecode caching in __pycache__ directory, module execution entry point using if __name__ == "__main__":, package directory markers via __init__.py, public vs private attributes using single underscore prefix, and nested subpackage resolution.',
        status: 'mastered',
        stars: 3,
        duration: '16 min',
        xp: 150,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'FolderArchive',
        challengeId: 'challenge-pcap-1-1',
        examWeight: 'PCAP 1.5 • 3% of exam',
        syllabusItems: [
          'Creation and structure of __pycache__ with compiled .pyc files',
          'The __name__ variable: "__main__" vs module name string',
          'Public vs private variables (_private convention)',
          'Role of __init__.py in package initialization',
        ],
        exercises: [
          { title: 'Constructing Custom Package Hierarchy', time: '5 min', completed: true },
          { title: '__name__ Execution Context Guard', time: '5 min', completed: true },
          { title: 'Package Module Dynamic Export', time: '6 min', isFinalChallenge: true, completed: true },
        ],
        codeSnippet: `# module_a.py
_private_counter = 0
public_const = 42

if __name__ == "__main__":
    print("Executed directly as script")
else:
    print("Imported as module:", __name__)`,
      },
    ],
  },

  {
    id: 'pcap-section-2',
    moduleNumber: 'Section 2',
    pcepBlockCode: 'PCAP-31-03 Section 2',
    title: 'Exceptions (14%)',
    examWeightPercent: 14,
    status: 'active',
    completionText: '4 / 4 Chapters (75% Ready)',
    syllabusDescription:
      'Detailed exception tree hierarchy, concrete vs abstract exceptions, raising exceptions, assertion statements, user-defined custom exceptions with args attribute, and complete try/except/else/finally control flow.',
    quizStatus: 'Active • 85%',
    nodes: [
      {
        id: 'pcap-node-2-1',
        pcepCode: 'PCAP-31-03 2.1',
        title: 'Python-Defined Exceptions & Hierarchy',
        shortDesc: 'try/except, branch ordering, except as, exception tree',
        fullDesc:
          'Deep understanding of Python’s built-in exception inheritance tree rooted at BaseException -> Exception -> ArithmeticError -> ZeroDivisionError / OverflowError. Rule of exception ordering: catch concrete subclasses before abstract superclasses. Capturing exception instance with `except ConcreteError as err:`.',
        status: 'mastered',
        stars: 3,
        duration: '15 min',
        xp: 140,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'AlertTriangle',
        challengeId: 'challenge-pcap-2-2',
        examWeight: 'PCAP 2.1 • 4% of exam',
        syllabusItems: [
          'BaseException vs Exception hierarchy',
          'ArithmeticError covers ZeroDivisionError, OverflowError, FloatingPointError',
          'LookupError covers IndexError and KeyError',
          'Branch ordering: more specific exceptions MUST precede more general ones',
        ],
        exercises: [
          { title: 'Exception Tree Branch Ordering', time: '5 min', completed: true },
          { title: 'LookupError vs IndexError Handling', time: '5 min', completed: true },
          { title: 'Multi-Exception Tuple Syntax', time: '5 min', completed: true },
        ],
        codeSnippet: `try:
    val = [1, 2][5]
except IndexError as e:
    print("Caught concrete:", type(e).__name__)
except LookupError as e:
    print("Caught abstract:", type(e).__name__)`,
      },
      {
        id: 'pcap-node-2-2',
        pcepCode: 'PCAP-31-03 2.2',
        title: 'Extend Exception Hierarchy with Self-Defined Exceptions',
        shortDesc: 'Subclassing Exception, constructor override, custom attributes',
        fullDesc:
          'Creating custom domain exception classes by subclassing Exception (or specific sub-exceptions). Overriding __init__, passing arguments to super().__init__(*args), and implementing custom diagnostic properties for robust enterprise-grade applications.',
        status: 'active',
        stars: 2,
        duration: '16 min',
        xp: 160,
        progressText: '80% In Progress',
        progressPercent: 80,
        iconName: 'ShieldAlert',
        challengeId: 'challenge-pcap-2-2',
        examWeight: 'PCAP 2.2 • 4% of exam',
        syllabusItems: [
          'Subclassing built-in Exception class',
          'Passing custom diagnostic messages through super().__init__()',
          'Custom instance attributes on user-defined exceptions',
          'Creating domain exception families (BaseAppError -> NetworkError)',
        ],
        exercises: [
          { title: 'Define Custom Validation Exception', time: '5 min', completed: true },
          { title: 'Custom Exception Hierarchy Tree', time: '5 min', completed: true },
          { title: 'Diagnostics Collector in Custom Exception', time: '6 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `class AppValidationError(Exception):
    def __init__(self, field: str, message: str):
        super().__init__(f"Invalid field '{field}': {message}")
        self.field = field

raise AppValidationError("age", "Must be positive integer")`,
      },
      {
        id: 'pcap-node-2-3',
        pcepCode: 'PCAP-31-03 2.3',
        title: 'Use raise and assert Statements, and args Property',
        shortDesc: 'raise, re-raising bare raise, assert expr, args tuple',
        fullDesc:
          'Mastering programmatic exception dispatch: explicit raise with arguments, bare raise to re-raise current active exception within except block, assert condition, "message" raising AssertionError, and accessing the exception.args tuple attribute.',
        status: 'active',
        stars: 2,
        duration: '14 min',
        xp: 140,
        progressText: '75% In Progress',
        progressPercent: 75,
        iconName: 'Flame',
        challengeId: 'challenge-pcap-2-2',
        examWeight: 'PCAP 2.3 • 3% of exam',
        syllabusItems: [
          'raise statement syntax and instantiating exception objects',
          'Re-raising active exceptions via bare raise',
          'assert statement: evaluation and AssertionError triggering',
          'Inspecting err.args tuple containing constructor parameters',
        ],
        exercises: [
          { title: 'Re-raising with Diagnostics Logging', time: '4 min', completed: true },
          { title: 'Invariant Enforcement with assert', time: '5 min', completed: true },
          { title: 'Inspecting args on Caught Exceptions', time: '5 min', completed: false },
        ],
        codeSnippet: `try:
    assert 10 > 20, "Condition failed"
except AssertionError as err:
    print("Caught assert:", err.args)
    # bare raise can propagate if needed`,
      },
      {
        id: 'pcap-node-2-4',
        pcepCode: 'PCAP-31-03 2.4',
        title: 'Complete Control Flow with else and finally',
        shortDesc: 'else execution condition, guaranteed finally cleanup',
        fullDesc:
          'Structured try-except-else-finally blocks: code in else executes ONLY if no exception occurred in try block. Code in finally ALWAYS executes regardless of exceptions, returns, or breaks. Understanding how finally interacts with return statements.',
        status: 'ready',
        stars: 1,
        duration: '14 min',
        xp: 130,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'CheckCircle',
        challengeId: 'challenge-pcap-2-2',
        examWeight: 'PCAP 2.4 • 3% of exam',
        syllabusItems: [
          'else block executes when try completes cleanly without exception',
          'finally block guarantees execution for resource cleanup',
          'Return values inside finally block overriding try return values',
          'Unhandled exceptions propagate after finally completes',
        ],
        exercises: [
          { title: 'Database Connection Resource Teardown', time: '4 min', completed: false },
          { title: 'Return Interception inside finally', time: '5 min', completed: false },
          { title: 'Full 4-Branch Flow Simulator', time: '5 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `def demo(n):
    try:
        res = 100 / n
    except ZeroDivisionError:
        return "zero"
    else:
        return f"result: {res}"
    finally:
        print("Cleaned up resource")`,
      },
    ],
  },

  {
    id: 'pcap-section-3',
    moduleNumber: 'Section 3',
    pcepBlockCode: 'PCAP-31-03 Section 3',
    title: 'Strings (18%)',
    examWeightPercent: 18,
    status: 'active',
    completionText: '5 / 5 Chapters (70% Ready)',
    syllabusDescription:
      'Character encodings (ASCII, UNICODE, UTF-8, ord, chr), indexing and slicing immutability, built-in string validation methods, transformation methods, searching, formatting, and splitting.',
    quizStatus: 'Active • 80%',
    nodes: [
      {
        id: 'pcap-node-3-1',
        pcepCode: 'PCAP-31-03 3.1',
        title: 'Character Representation & Encodings',
        shortDesc: 'ASCII, UNICODE, UTF-8, code points, ord(), chr()',
        fullDesc:
          'Machine representation of text: ASCII 7-bit standard (0-127), UNICODE code points, UTF-8 variable-width encoding. Converting between characters and integers using built-in ord(c) and chr(n), and handling escape sequences (\\n, \\t, \\\\, \\\', \\").',
        status: 'mastered',
        stars: 3,
        duration: '12 min',
        xp: 120,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Binary',
        challengeId: 'challenge-pcap-3-5',
        examWeight: 'PCAP 3.1 • 3% of exam',
        syllabusItems: [
          'ASCII standards and 128 character mappings',
          'UNICODE code point representation (U+0000 to U+10FFFF)',
          'ord(char) returns integer code point',
          'chr(integer) returns character from code point',
        ],
        exercises: [
          { title: 'ASCII Caesar Cipher Transformation', time: '4 min', completed: true },
          { title: 'Code Point Range Inspection', time: '4 min', completed: true },
          { title: 'Escape Sequences and Raw Strings', time: '4 min', completed: true },
        ],
        codeSnippet: `print(ord('A'))  # 65
print(ord('a'))  # 97
print(chr(65))   # 'A'
print(chr(ord('z') - 25))  # 'a'`,
      },
      {
        id: 'pcap-node-3-2',
        pcepCode: 'PCAP-31-03 3.2',
        title: 'String Operations & Immutability',
        shortDesc: 'Indexing, slicing [start:stop:step], reversal, min/max, in',
        fullDesc:
          'Strings as immutable sequences: indexing string[i], extended slicing string[start:stop:step], string reversal string[::-1], immutability preventing direct item assignment, min() and max() based on ASCII/Unicode code points, in / not in containment, and lexicographical comparison.',
        status: 'mastered',
        stars: 3,
        duration: '14 min',
        xp: 130,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Scissors',
        challengeId: 'challenge-pcap-3-5',
        examWeight: 'PCAP 3.2 • 4% of exam',
        syllabusItems: [
          'String immutability: TypeError on string[0] = "x"',
          'Extended slicing: string[::2], string[::-1]',
          'min() and max() character evaluation by code point',
          'Lexicographical comparison: "apple" < "banana", "10" < "2"',
        ],
        exercises: [
          { title: 'Palindrome Verification using Slicing', time: '4 min', completed: true },
          { title: 'Lexicographical Sorter', time: '5 min', completed: true },
          { title: 'Slice Step Stepping Matrix', time: '5 min', completed: true },
        ],
        codeSnippet: `s = "PCAP-Certified"
print(s[::2])       # "PA-etfe"
print(s[::-1])      # "deifitreC-PACP"
print("10" < "2")   # True (lexicographical comparison)`,
      },
      {
        id: 'pcap-node-3-3',
        pcepCode: 'PCAP-31-03 3.3',
        title: 'Built-in String Validation Methods',
        shortDesc: 'isalnum, isalpha, isdigit, islower, isspace, isupper, startswith',
        fullDesc:
          'Boolean inspection methods on strings: isalnum() (letters & numbers), isalpha() (letters only), isdigit() (decimal digits only), islower(), isupper(), isspace() (whitespace characters like space, tab, newline), startswith(prefix), and endswith(suffix).',
        status: 'active',
        stars: 2,
        duration: '12 min',
        xp: 120,
        progressText: '80% In Progress',
        progressPercent: 80,
        iconName: 'CheckSquare',
        challengeId: 'challenge-pcap-3-5',
        examWeight: 'PCAP 3.3 • 3% of exam',
        syllabusItems: [
          'isalnum(), isalpha(), isdigit() behavior with empty strings (False)',
          'isspace() detecting spaces, tabs, and newlines',
          'islower() vs isupper() requiring at least one cased character',
          'startswith() and endswith() with string and tuple prefixes',
        ],
        exercises: [
          { title: 'Password Strength Form Validator', time: '4 min', completed: true },
          { title: 'Whitespace Sanitizer Validator', time: '4 min', completed: true },
          { title: 'File Extension Matcher with endswith()', time: '4 min', completed: false },
        ],
        codeSnippet: `s = "Python3"
print(s.isalnum())  # True
print(s.isalpha())  # False (has '3')
print(s.startswith(("Py", "Java"))) # True`,
      },
      {
        id: 'pcap-node-3-4',
        pcepCode: 'PCAP-31-03 3.4',
        title: 'String Transformation Methods',
        shortDesc: 'capitalize, title, lower, upper, swapcase, strip, lstrip, rstrip, replace',
        fullDesc:
          'Case shifting and stripping transformations: capitalize() (first char upper, rest lower), title() (every word capitalized), lower(), upper(), swapcase(), strip() removing leading/trailing whitespace or designated chars, lstrip(), rstrip(), and replace(old, new[, count]).',
        status: 'active',
        stars: 2,
        duration: '14 min',
        xp: 130,
        progressText: '70% In Progress',
        progressPercent: 70,
        iconName: 'Type',
        challengeId: 'challenge-pcap-3-5',
        examWeight: 'PCAP 3.4 • 4% of exam',
        syllabusItems: [
          'capitalize() lowers all characters except the very first one',
          'title() word boundary capitalization rules',
          'strip(chars) strips set of characters, not literal substring',
          'replace(old, new, max_replace) count limiter',
        ],
        exercises: [
          { title: 'Header Case Normalization', time: '4 min', completed: true },
          { title: 'Punctuation Strip Engine', time: '5 min', completed: false },
          { title: 'Selective Substring Replacer', time: '5 min', completed: false },
        ],
        codeSnippet: `raw = "  --PCAP-31-03--  "
print(raw.strip())          # "--PCAP-31-03--"
print(raw.strip().strip("-")) # "PCAP-31-03"
print("hello WORLD".capitalize()) # "Hello world"`,
      },
      {
        id: 'pcap-node-3-5',
        pcepCode: 'PCAP-31-03 3.5',
        title: 'Searching, Formatting, and Splitting',
        shortDesc: 'find, rfind, index, rindex, split, join, center, ljust, rjust',
        fullDesc:
          'Locating and segmenting text: find(sub) and rfind(sub) returning -1 when missing, index(sub) and rindex(sub) raising ValueError when missing, split(sep, maxsplit) splitting into lists, join(iterable) concatenating sequences with separator, and formatting with center(width), ljust(width), rjust(width).',
        status: 'ready',
        stars: 1,
        duration: '16 min',
        xp: 150,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'Search',
        challengeId: 'challenge-pcap-3-5',
        examWeight: 'PCAP 3.5 • 4% of exam',
        syllabusItems: [
          'Difference between find() (-1) and index() (raises ValueError)',
          'split() with no argument splits on contiguous whitespace',
          'join() syntax: separator.join(iterable_of_strings)',
          'Text alignment with center(), ljust(), rjust() and fillchar',
        ],
        exercises: [
          { title: 'CSV Tokenizer with split and strip', time: '5 min', completed: false },
          { title: 'Substr Indexer with Safe Exception Guard', time: '5 min', completed: false },
          { title: 'Text Justifier & Column Aligner', time: '6 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `data = "python,pcap,exam,associate"
tokens = data.split(",")
formatted = " | ".join(t.upper() for t in tokens)
print("find:", data.find("pcap")) # 7
print("find missing:", data.find("ruby")) # -1`,
      },
    ],
  },

  {
    id: 'pcap-section-4',
    moduleNumber: 'Section 4',
    pcepBlockCode: 'PCAP-31-03 Section 4',
    title: 'Object-Oriented Programming (OOP) (34%)',
    examWeightPercent: 34,
    status: 'active',
    completionText: '5 / 5 Chapters (60% Ready)',
    syllabusDescription:
      'Heaviest PCAP domain (34% of the exam): classes, objects, properties, encapsulation, instance vs class variables, name mangling, methods, __init__, dunder methods, single & multiple inheritance, method overriding, super(), and MRO.',
    quizStatus: 'Active • 75%',
    nodes: [
      {
        id: 'pcap-node-4-1',
        pcepCode: 'PCAP-31-03 4.1',
        title: 'Understand the Object-Oriented Approach',
        shortDesc: 'Classes vs objects, procedural vs OOP, attributes & methods, encapsulation',
        fullDesc:
          'Foundations of OOP: contrast procedural paradigm with object-oriented programming. Definitions of class (blueprint) and object (instance), properties (state) and methods (behavior). Encapsulation principle bundling data and operations while protecting state integrity.',
        status: 'mastered',
        stars: 3,
        duration: '14 min',
        xp: 140,
        progressText: '100% Completed',
        progressPercent: 100,
        iconName: 'Box',
        challengeId: 'challenge-pcap-4-4',
        examWeight: 'PCAP 4.1 • 6% of exam',
        syllabusItems: [
          'Procedural programming vs Object-Oriented programming trade-offs',
          'Classes as types and instances as objects',
          'Encapsulation and data hiding concepts',
          'Inheritance and polymorphism definitions in Python',
        ],
        exercises: [
          { title: 'Procedural to OOP Refactoring', time: '5 min', completed: true },
          { title: 'Designing Clean Entity Boundaries', time: '4 min', completed: true },
          { title: 'State & Behavior Encapsulation Check', time: '5 min', completed: true },
        ],
        codeSnippet: `class Device:
    pass

dev1 = Device()
dev2 = Device()
print(isinstance(dev1, Device))  # True
print(dev1 is dev2)              # False`,
      },
      {
        id: 'pcap-node-4-2',
        pcepCode: 'PCAP-31-03 4.2',
        title: 'Instance Variables vs Class Variables',
        shortDesc: 'self, __dict__, hasattr(), class namespace, variable shadowing',
        fullDesc:
          'Differentiating between instance variables (stored in instance.__dict__) and class variables (stored in ClassName.__dict__ and shared across all instances). Variable shadowing: assigning to self.var creates an instance attribute that masks the class attribute of the same name. Using hasattr() to inspect attributes.',
        status: 'active',
        stars: 2,
        duration: '18 min',
        xp: 180,
        progressText: '75% In Progress',
        progressPercent: 75,
        iconName: 'Layers',
        challengeId: 'challenge-pcap-4-4',
        examWeight: 'PCAP 4.2 • 7% of exam',
        syllabusItems: [
          'Class variable definition inside class body outside methods',
          'Instance variable assignment via self.attribute',
          'Attribute resolution order: instance.__dict__ then class.__dict__',
          'Using hasattr(obj, name) and inspecting obj.__dict__',
        ],
        exercises: [
          { title: 'Tracking Instance Counts with Class Variable', time: '6 min', completed: true },
          { title: 'Attribute Shadowing Trap Demystification', time: '6 min', completed: true },
          { title: 'Deep __dict__ Namespace Inspection', time: '6 min', completed: false },
        ],
        codeSnippet: `class Counter:
    total_count = 0  # Class variable

    def __init__(self):
        Counter.total_count += 1
        self.id = Counter.total_count  # Instance variable

c1 = Counter()
c2 = Counter()
print(c1.total_count, c2.total_count)  # 2, 2
print(c1.__dict__)  # {'id': 1}`,
      },
      {
        id: 'pcap-node-4-3',
        pcepCode: 'PCAP-31-03 4.3',
        title: 'Name Mangling & Private Attributes',
        shortDesc: 'Public vs private, _convention, __mangling -> _Class__attr',
        fullDesc:
          'Information hiding and name mangling: public attributes, single underscore _protected naming convention for internal use, and double underscore __private attributes triggering name mangling: Python internally renames __attr to _ClassName__attr to prevent accidental overrides in subclasses.',
        status: 'active',
        stars: 2,
        duration: '16 min',
        xp: 170,
        progressText: '70% In Progress',
        progressPercent: 70,
        iconName: 'Lock',
        challengeId: 'challenge-pcap-4-4',
        examWeight: 'PCAP 4.3 • 7% of exam',
        syllabusItems: [
          'Single underscore convention (_internal) vs double underscore (__private)',
          'Name mangling algorithm: _ClassName__attributeName',
          'AttributeError when accessing instance.__private directly',
          'Accessing mangled attributes explicitly via instance._ClassName__private',
        ],
        exercises: [
          { title: 'Encapsulating Sensitive Balances', time: '5 min', completed: true },
          { title: 'Mangled Attribute Inspector', time: '5 min', completed: false },
          { title: 'Subclass Attribute Collision Prevention', time: '6 min', completed: false },
        ],
        codeSnippet: `class BankAccount:
    def __init__(self, balance: float):
        self.__balance = balance  # Mangled to _BankAccount__balance

acc = BankAccount(1000)
# acc.__balance -> raises AttributeError
print(acc._BankAccount__balance)  # 1000`,
      },
      {
        id: 'pcap-node-4-4',
        pcepCode: 'PCAP-31-03 4.4',
        title: 'Methods, Constructor __init__, and Special Dunder Methods',
        shortDesc: '__init__, self parameter, __str__, __repr__, __eq__, operator overloading',
        fullDesc:
          'Method definition syntax inside classes: requiring `self` as explicit first parameter. The constructor __init__ for initialization. Special dunder methods: __str__ for human-readable representation, __repr__ for unambiguous representation, and comparison methods __eq__, __lt__ enabling Pythonic operator overloading.',
        status: 'ready',
        stars: 1,
        duration: '18 min',
        xp: 180,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'Cpu',
        challengeId: 'challenge-pcap-4-4',
        examWeight: 'PCAP 4.4 • 7% of exam',
        syllabusItems: [
          'Explicit `self` reference passing in Python methods',
          'Constructor initialization logic with __init__',
          'String representation: __str__() called by print() and str()',
          'Comparison overloading: __eq__ and __lt__ implementation',
        ],
        exercises: [
          { title: 'Custom 2D Vector with Overloaded Addition', time: '6 min', completed: false },
          { title: 'Formatted String Representation with __str__', time: '6 min', completed: false },
          { title: 'Custom Comparator Class with __eq__', time: '6 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)

print(Vector2D(1, 2) + Vector2D(3, 4))  # Vector(4, 6)`,
      },
      {
        id: 'pcap-node-4-5',
        pcepCode: 'PCAP-31-03 4.5',
        title: 'Inheritance, Polymorphism & Method Resolution Order (MRO)',
        shortDesc: 'Single & multiple inheritance, method overriding, super(), MRO, isinstance',
        fullDesc:
          'Advanced OOP hierarchy: subclassing `class Child(Parent):`, method overriding, calling base methods via super(), multiple inheritance `class C(A, B):`, diamond problem, inspecting Method Resolution Order via Class.__mro__ or Class.mro(), and type introspection via isinstance() and issubclass().',
        status: 'ready',
        stars: 1,
        duration: '20 min',
        xp: 200,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'GitMerge',
        challengeId: 'challenge-pcap-4-4',
        examWeight: 'PCAP 4.5 • 7% of exam',
        syllabusItems: [
          'Single inheritance and super().__init__() invocation',
          'Method overriding and polymorphic method dispatch',
          'Multiple inheritance syntax and superclass order',
          'C3 Linearization and the __mro__ attribute order',
          'isinstance(obj, Class) and issubclass(Sub, Super)',
        ],
        exercises: [
          { title: 'Polymorphic Shape Hierarchy Engine', time: '6 min', completed: false },
          { title: 'MRO Diamond Resolution Tracer', time: '7 min', completed: false },
          { title: 'Multiple Superclass Initializer Chain', time: '7 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `class A:
    def greet(self): return "A"
class B(A):
    def greet(self): return "B"
class C(A):
    def greet(self): return "C"
class D(B, C):
    pass

print(D().greet())  # "B" (B comes before C in MRO)
print([cls.__name__ for cls in D.__mro__]) # ['D', 'B', 'C', 'A', 'object']`,
      },
    ],
  },

  {
    id: 'pcap-section-5',
    moduleNumber: 'Section 5',
    pcepBlockCode: 'PCAP-31-03 Section 5',
    title: 'Miscellaneous (Comprehensions, Lambdas, Closures, I/O) (22%)',
    examWeightPercent: 22,
    status: 'ready',
    completionText: '5 / 5 Chapters (To Prepare)',
    syllabusDescription:
      'Advanced intermediate Python idioms: list, dict, and set comprehensions, lambda expressions, map and filter, closures and nonlocal scope, generators and iterator protocol (yield), and file I/O operations with bytearray and errno.',
    quizStatus: 'To Prepare • 0%',
    nodes: [
      {
        id: 'pcap-node-5-1',
        pcepCode: 'PCAP-31-03 5.1',
        title: 'List, Dictionary, and Set Comprehensions',
        shortDesc: 'Comprehensions with filtering, conditional expressions, nested loops',
        fullDesc:
          'Constructing concise Pythonic data collections: list comprehensions `[expr for x in seq if cond]`, conditional mapping `[x if cond else y for x in seq]`, dictionary comprehensions `{k: v for x in seq}`, set comprehensions `{x for x in seq}`, and nested 2D matrix comprehensions.',
        status: 'ready',
        stars: 1,
        duration: '14 min',
        xp: 140,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'ListFilter',
        challengeId: 'challenge-pcap-5-3',
        examWeight: 'PCAP 5.1 • 4% of exam',
        syllabusItems: [
          'List comprehension syntax: [expr for item in iterable if condition]',
          'Conditional expression mapping: [a if cond else b for item in iterable]',
          'Dictionary comprehensions: {key: val for item in iterable}',
          'Nested comprehensions for matrix flattening and generation',
        ],
        exercises: [
          { title: 'Filtered Matrix Flattener', time: '4 min', completed: false },
          { title: 'Inverted Dictionary Comprehension', time: '5 min', completed: false },
          { title: 'Prime Sieve with Set Comprehensions', time: '5 min', completed: false },
        ],
        codeSnippet: `nums = [1, 2, 3, 4, 5, 6]
squares = [x**2 for x in nums if x % 2 == 0] # [4, 16, 36]
parity = ["even" if x % 2 == 0 else "odd" for x in nums]
lookup = {x: x**3 for x in nums if x <= 3} # {1: 1, 2: 8, 3: 27}`,
      },
      {
        id: 'pcap-node-5-2',
        pcepCode: 'PCAP-31-03 5.2',
        title: 'Lambda Expressions & Functional Built-ins',
        shortDesc: 'lambda parameters: expression, map(), filter(), sorting keys',
        fullDesc:
          'Anonymous inline functions: lambda syntax `lambda p1, p2: p1 + p2`. Functional built-ins: map(func, iterable) and filter(func, iterable) returning iterators, and using lambdas as sorting keys in sorted(seq, key=lambda x: ...).',
        status: 'ready',
        stars: 1,
        duration: '14 min',
        xp: 140,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'Zap',
        challengeId: 'challenge-pcap-5-3',
        examWeight: 'PCAP 5.2 • 4% of exam',
        syllabusItems: [
          'Lambda definition: single expression, implicit return',
          'map(func, iterable) transformation iterator',
          'filter(func, iterable) filtering iterator',
          'Custom sort orders via sorted(data, key=lambda x: ...)',
        ],
        exercises: [
          { title: 'Complex Tuple Sorting with Lambdas', time: '4 min', completed: false },
          { title: 'map() and filter() Pipeline', time: '5 min', completed: false },
          { title: 'Dynamic Multi-Key Comparator', time: '5 min', completed: false },
        ],
        codeSnippet: `points = [(1, 9), (4, 2), (2, 5)]
points_sorted = sorted(points, key=lambda p: p[1]) # sorted by y: [(4, 2), (2, 5), (1, 9)]
evens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4])) # [2, 4]`,
      },
      {
        id: 'pcap-node-5-3',
        pcepCode: 'PCAP-31-03 5.3',
        title: 'Understand and Utilize Closures',
        shortDesc: 'nonlocal keyword, nested scopes, state retention, factory functions',
        fullDesc:
          'Lexical closures in Python: inner functions retaining access to free variables in the enclosing scope even after the outer function has returned. Using the `nonlocal` keyword to modify variables in the enclosing scope, and building configurable function factories.',
        status: 'ready',
        stars: 1,
        duration: '16 min',
        xp: 160,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'Repeat',
        challengeId: 'challenge-pcap-5-3',
        examWeight: 'PCAP 5.3 • 4% of exam',
        syllabusItems: [
          'Lexical scoping rules: LEGB (Local, Enclosing, Global, Built-in)',
          'Requirements for a closure: nested function referencing enclosing variable',
          'The nonlocal keyword enabling variable rebinding in enclosing scope',
          'Function factories and accumulator closures',
        ],
        exercises: [
          { title: 'Accumulator Closure with nonlocal', time: '5 min', completed: false },
          { title: 'Configurable Multiplier Factory', time: '5 min', completed: false },
          { title: 'Rate Limiter State Guard Closure', time: '6 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `def make_counter(start=0):
    count = start
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = make_counter(10)
print(c(), c()) # 11, 12`,
      },
      {
        id: 'pcap-node-5-4',
        pcepCode: 'PCAP-31-03 5.4',
        title: 'Generators and the Iterator Protocol',
        shortDesc: 'yield, generator functions, generator expressions, __iter__, __next__',
        fullDesc:
          'Lazy evaluation with generators: functions containing `yield` statements that pause execution and preserve state between invocations. Generator expressions `(x**2 for x in seq)`. The iterator protocol: __iter__() returning an iterator and __next__() returning the next item or raising StopIteration.',
        status: 'ready',
        stars: 1,
        duration: '18 min',
        xp: 180,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'GitBranch',
        challengeId: 'challenge-pcap-5-3',
        examWeight: 'PCAP 5.4 • 5% of exam',
        syllabusItems: [
          'yield keyword semantics vs return keyword',
          'The iterator protocol: __iter__() and __next__()',
          'StopIteration exception signaling sequence termination',
          'Memory efficiency of generators vs full list allocation',
        ],
        exercises: [
          { title: 'Infinite Fibonacci Generator', time: '6 min', completed: false },
          { title: 'Custom Iterator Class with __next__', time: '6 min', completed: false },
          { title: 'Chunked Stream Generator', time: '6 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

print(list(fibonacci(20))) # [0, 1, 1, 2, 3, 5, 8, 13]`,
      },
      {
        id: 'pcap-node-5-5',
        pcepCode: 'PCAP-31-03 5.5',
        title: 'Perform File Input/Output (I/O) Operations',
        shortDesc: 'open(), modes (r, w, a, b, +), read/write/readline, bytearray, errno',
        fullDesc:
          'File streams in Python: open(filename, mode) with modes "r", "w", "a", binary mode "b", update mode "+". Stream operations: read(size), readline(), readlines(), write(string), and close(). The `with` context manager. Using `bytearray` as mutable I/O buffers and inspecting OS errors via the `errno` module (errno.ENOENT, errno.EACCES).',
        status: 'ready',
        stars: 1,
        duration: '20 min',
        xp: 200,
        progressText: 'Ready to Start',
        progressPercent: 0,
        iconName: 'FileText',
        challengeId: 'challenge-pcap-5-5',
        examWeight: 'PCAP 5.5 • 5% of exam',
        syllabusItems: [
          'Stream modes: r (read), w (overwrite), a (append), b (binary), + (read/write)',
          'Difference between read(), readline(), and readlines()',
          'Buffer mutations with bytearray in binary mode',
          'Context manager `with open(...) as f:` ensuring automatic close',
          'Diagnosing IOError and OSError using the errno module constants',
        ],
        exercises: [
          { title: 'Text Stream Line Counter with with open', time: '6 min', completed: false },
          { title: 'Binary Buffer Processing with bytearray', time: '7 min', completed: false },
          { title: 'Resilient File Reader with errno Diagnostics', time: '7 min', isFinalChallenge: true, completed: false },
        ],
        codeSnippet: `import errno

data = bytearray([65, 66, 67, 68]) # b"ABCD"
data[0] = 90 # b"ZBCD"

try:
    with open("sample.txt", "w", encoding="utf-8") as f:
        f.write("PCAP-31-03 Associate\nSection 5.5")
except IOError as err:
    if err.errno == errno.ENOENT:
        print("File does not exist")`,
      },
    ],
  },
];

// ==========================================
// PCAP-31-03 CODING CHALLENGES
// ==========================================
export const pcapChallengesData: Record<string, CodingChallenge> = {
  'challenge-pcap-1-1': {
    id: 'challenge-pcap-1-1',
    track: 'PCAP-31-03 Section 1',
    category: '1.1 Modules, Packages & Namespaces',
    pcepCode: 'PCAP-31-03 1.1',
    pcepObjective: 'Import variants, qualified namespaces, inspecting module contents with dir(), sys.path.',
    challengeNumber: 101,
    title: 'Qualified Namespace Inspector & Safe Exporter',
    difficulty: 'Intermediate',
    xpReward: 160,
    estimatedMinutes: 12,
    mode: 'free',
    pedagogicalObjective:
      'In PCAP-31-03 Section 1, candidates must master module attribute discovery and namespace qualification. Write a function inspect_and_filter(module_dict: dict, prefix: str = "_") that filters out private attributes.',
    guidelines: [
      'Filter out attributes that start with the designated prefix (by default "_").',
      'Return a sorted list of public symbol names.',
      'If the module dictionary contains "__all__", return only the intersection of __all__ and symbols that do not start with prefix.',
    ],
    executionSteps: {
      input: '{"__name__": "m", "_hidden": 1, "sin": 2, "cos": 3}',
      step1: 'Identify and exclude names starting with "_"',
      step2: 'Sort remaining public symbols alphabetically',
      output: '["cos", "sin"]',
    },
    starterCode: `def inspect_and_filter(module_dict: dict, prefix: str = "_") -> list:
    """
    Returns a sorted list of public symbols from a module dictionary,
    excluding any names starting with prefix.
    """
    public_symbols = [key for key in module_dict.keys() if not key.startswith(prefix)]
    if "__all__" in module_dict and isinstance(module_dict["__all__"], (list, tuple)):
        public_symbols = [s for s in public_symbols if s in module_dict["__all__"]]
    return sorted(public_symbols)

if __name__ == "__main__":
    sample = {"__name__": "math_mod", "_secret": 42, "pi": 3.14, "add": lambda a, b: a+b}
    print(inspect_and_filter(sample))
`,
    blankCode: `def inspect_and_filter(module_dict: dict, prefix: str = "_") -> list:
    public_symbols = [key for key in module_dict.keys() if not key.startswith(____)]
    if "__all__" in module_dict and isinstance(module_dict["__all__"], (list, tuple)):
        public_symbols = [s for s in public_symbols if s in module_dict["____"]]
    return sorted(public_symbols)
`,
    solutionCode: `def inspect_and_filter(module_dict: dict, prefix: str = "_") -> list:
    public_symbols = [key for key in module_dict.keys() if not key.startswith(prefix)]
    if "__all__" in module_dict and isinstance(module_dict["__all__"], (list, tuple)):
        public_symbols = [s for s in public_symbols if s in module_dict["__all__"]]
    return sorted(public_symbols)
`,
    testCases: [
      {
        id: 'pcap-t-1-1',
        name: 'Test 1: Standard public attributes filter',
        invocation: 'inspect_and_filter({"__name__": "m", "_internal": 10, "calc": 1, "run": 2})',
        expectedOutput: '["calc", "run"]',
        passed: true,
      },
      {
        id: 'pcap-t-1-2',
        name: 'Test 2: __all__ restriction',
        invocation: 'inspect_and_filter({"__all__": ["calc"], "_internal": 10, "calc": 1, "extra": 2})',
        expectedOutput: '["calc"]',
        passed: true,
      },
      {
        id: 'pcap-t-1-3',
        name: 'Test 3: Empty dictionary',
        invocation: 'inspect_and_filter({})',
        expectedOutput: '[]',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Key string startswith', cost: 0, content: 'Use not key.startswith(prefix) to filter out private keys.', unlocked: true },
      { tier: 2, title: '__all__ condition', cost: 10, content: 'Check if __all__ exists in module_dict and filter against its contents.', unlocked: false },
      { tier: 3, title: 'Sorting result', cost: 20, content: 'Return sorted(public_symbols) for deterministic order.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Module Introspection Engine',
      title: 'Namespace Filtering Logic',
      text: 'Understanding __all__ and leading underscore conventions is fundamental for PCAP modular programming and package design.',
    },
  },

  'challenge-pcap-2-2': {
    id: 'challenge-pcap-2-2',
    track: 'PCAP-31-03 Section 2',
    category: '2.2 Custom Exception Hierarchy',
    pcepCode: 'PCAP-31-03 2.2',
    pcepObjective: 'Subclassing Exception, constructor overriding, args attribute, and custom exception handling.',
    challengeNumber: 102,
    title: 'Enterprise Custom Exception & Diagnostics Tree',
    difficulty: 'Intermediate',
    xpReward: 190,
    estimatedMinutes: 15,
    mode: 'free',
    pedagogicalObjective:
      'Build a custom exception class `ValidationException(Exception)` that stores an error code, message, and target field, validating inputs and raising custom exceptions accordingly.',
    guidelines: [
      'Define ValidationException subclassing Exception.',
      'Initialize with code: int, field: str, message: str.',
      'Pass formatted message to super().__init__(f"[{code}] {field}: {message}").',
      'Create validate_user(user_dict) that checks age >= 18 and non-empty username, returning True on success.',
    ],
    executionSteps: {
      input: '{"username": "", "age": 25}',
      step1: 'Check username non-empty -> empty',
      step2: 'Raise ValidationException(code=400, field="username", message="Required")',
      output: 'ValidationException raised with args',
    },
    starterCode: `class ValidationException(Exception):
    def __init__(self, code: int, field: str, message: str):
        super().__init__(f"[{code}] {field}: {message}")
        self.code = code
        self.field = field

def validate_user(user_dict: dict) -> bool:
    if not user_dict.get("username"):
        raise ValidationException(400, "username", "Username cannot be empty")
    age = user_dict.get("age", 0)
    if not isinstance(age, (int, float)) or age < 18:
        raise ValidationException(403, "age", "Must be at least 18 years old")
    return True

if __name__ == "__main__":
    try:
        validate_user({"username": "alex", "age": 15})
    except ValidationException as err:
        print("Caught:", err.args[0])
`,
    blankCode: `class ValidationException(Exception):
    def __init__(self, code: int, field: str, message: str):
        super().__init__(f"[{code}] {field}: {message}")
        self.code = code
        self.field = field

def validate_user(user_dict: dict) -> bool:
    if not user_dict.get("username"):
        raise ValidationException(400, "username", "Username cannot be empty")
    age = user_dict.get("age", 0)
    if not isinstance(age, (int, float)) or age < 18:
        raise ValidationException(403, "age", "Must be at least 18 years old")
    return True
`,
    solutionCode: `class ValidationException(Exception):
    def __init__(self, code: int, field: str, message: str):
        super().__init__(f"[{code}] {field}: {message}")
        self.code = code
        self.field = field

def validate_user(user_dict: dict) -> bool:
    if not user_dict.get("username"):
        raise ValidationException(400, "username", "Username cannot be empty")
    age = user_dict.get("age", 0)
    if not isinstance(age, (int, float)) or age < 18:
        raise ValidationException(403, "age", "Must be at least 18 years old")
    return True
`,
    testCases: [
      {
        id: 'pcap-t-2-1',
        name: 'Test 1: Valid user profile',
        invocation: 'validate_user({"username": "maria", "age": 22})',
        expectedOutput: 'True',
        passed: true,
      },
      {
        id: 'pcap-t-2-2',
        name: 'Test 2: Empty username raises code 400',
        invocation: 'try:\n    validate_user({"username": "", "age": 20})\nexcept ValidationException as e:\n    print(e.code, e.field)',
        expectedOutput: '400 username',
        passed: true,
      },
      {
        id: 'pcap-t-2-3',
        name: 'Test 3: Underage user raises code 403',
        invocation: 'try:\n    validate_user({"username": "john", "age": 16})\nexcept ValidationException as e:\n    print(e.code, e.field)',
        expectedOutput: '403 age',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Subclassing Exception', cost: 0, content: 'Inherit from Exception: class ValidationException(Exception):', unlocked: true },
      { tier: 2, title: 'Calling super().__init__', cost: 10, content: 'Pass formatted string to super().__init__() so error messages populate .args.', unlocked: false },
      { tier: 3, title: 'Validation conditions', cost: 20, content: 'Raise ValidationException with the required code, field, and description strings.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Exception Subclassing Architecture',
      title: 'Structured Error Propagation',
      text: 'Custom exceptions provide explicit error typing and clean diagnostic attribution in enterprise Python codebases.',
    },
  },

  'challenge-pcap-3-5': {
    id: 'challenge-pcap-3-5',
    track: 'PCAP-31-03 Section 3',
    category: '3.5 Strings & Transformation',
    pcepCode: 'PCAP-31-03 3.5',
    pcepObjective: 'String methods: split, join, strip, replace, find, and case normalization.',
    challengeNumber: 103,
    title: 'Advanced Text Sanitization & Token Normalizer',
    difficulty: 'Intermediate',
    xpReward: 170,
    estimatedMinutes: 14,
    mode: 'free',
    pedagogicalObjective:
      'The PCAP exam tests thorough knowledge of string transformation and querying methods. Write `sanitize_and_tokenize(text, delimiter=",")` that trims, lowers, and strips whitespace from delimited tokens.',
    guidelines: [
      'Split text using the specified delimiter.',
      'Strip each token of leading and trailing whitespace.',
      'Convert each non-empty token to lowercase.',
      'Join the unique tokens in order of appearance using " | " as separator.',
    ],
    executionSteps: {
      input: '" Python ,  PCAP-31-03 , python, EXAM  "',
      step1: 'Split by comma and strip whitespace',
      step2: 'Filter duplicates preserving first appearance: ["python", "pcap-31-03", "exam"]',
      output: '"python | pcap-31-03 | exam"',
    },
    starterCode: `def sanitize_and_tokenize(text: str, delimiter: str = ",") -> str:
    tokens = text.split(delimiter)
    seen = set()
    cleaned = []
    for t in tokens:
        item = t.strip().lower()
        if item and item not in seen:
            seen.add(item)
            cleaned.append(item)
    return " | ".join(cleaned)

if __name__ == "__main__":
    raw = " Python ,  PCAP-31-03 , python, EXAM , oop  "
    print(sanitize_and_tokenize(raw))
`,
    blankCode: `def sanitize_and_tokenize(text: str, delimiter: str = ",") -> str:
    tokens = text.split(delimiter)
    seen = set()
    cleaned = []
    for t in tokens:
        item = t.strip().lower()
        if item and item not in seen:
            seen.add(item)
            cleaned.append(item)
    return " | ".join(cleaned)
`,
    solutionCode: `def sanitize_and_tokenize(text: str, delimiter: str = ",") -> str:
    tokens = text.split(delimiter)
    seen = set()
    cleaned = []
    for t in tokens:
        item = t.strip().lower()
        if item and item not in seen:
            seen.add(item)
            cleaned.append(item)
    return " | ".join(cleaned)
`,
    testCases: [
      {
        id: 'pcap-t-3-1',
        name: 'Test 1: Standard comma delimited string',
        invocation: 'sanitize_and_tokenize(" Apple , banana, APPLE, ORANGE ")',
        expectedOutput: '"apple | banana | orange"',
        passed: true,
      },
      {
        id: 'pcap-t-3-2',
        name: 'Test 2: Custom semicolon delimiter',
        invocation: 'sanitize_and_tokenize("one; Two ; ONE ; three", ";")',
        expectedOutput: '"one | two | three"',
        passed: true,
      },
      {
        id: 'pcap-t-3-3',
        name: 'Test 3: String with consecutive delimiters',
        invocation: 'sanitize_and_tokenize("alpha,,,beta, ,gamma")',
        expectedOutput: '"alpha | beta | gamma"',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Token Splitting & Stripping', cost: 0, content: 'Use text.split(delimiter) and t.strip().lower() for each token.', unlocked: true },
      { tier: 2, title: 'Deduplication Order', cost: 10, content: 'Use a seen set to preserve original insertion order in cleaned list.', unlocked: false },
      { tier: 3, title: 'Final Joining', cost: 20, content: 'Return " | ".join(cleaned) to assemble the final sanitized string.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'String Processing Engine',
      title: 'Method Chaining & String Immutability',
      text: 'Notice that string methods never mutate strings in place, but always return newly allocated string objects.',
    },
  },

  'challenge-pcap-4-4': {
    id: 'challenge-pcap-4-4',
    track: 'PCAP-31-03 Section 4',
    category: '4.4 Object-Oriented Programming (OOP)',
    pcepCode: 'PCAP-31-03 4.4',
    pcepObjective: 'Classes, instance & class variables, private attributes (__mangling), __init__, __str__, and inheritance.',
    challengeNumber: 104,
    title: 'Polymorphic Bank Account & Encapsulated Ledger',
    difficulty: 'Advanced',
    xpReward: 240,
    estimatedMinutes: 20,
    mode: 'free',
    pedagogicalObjective:
      'OOP represents 34% of the PCAP exam. Implement an abstract Account class and a SavingsAccount subclass with encapsulated private balances (__balance), interest calculations, and __str__ representations.',
    guidelines: [
      'Create Account(account_id: str, initial_balance: float = 0.0).',
      'Store balance as private attribute self.__balance.',
      'Provide deposit(amount), withdraw(amount) raising ValueError if insufficient funds, and get_balance().',
      'Create SavingsAccount(account_id, initial_balance, interest_rate: float).',
      'Provide apply_interest() which adds interest_rate * balance to the balance.',
      'Implement __str__ on Account returning f"Account {account_id}: balance={balance:.2f}".',
    ],
    executionSteps: {
      input: 'acc = SavingsAccount("SA-101", 1000.0, 0.05)',
      step1: 'Apply 5% interest -> balance becomes 1050.0',
      step2: 'Withdraw 200 -> balance becomes 850.0',
      output: 'Account SA-101: balance=850.00',
    },
    starterCode: `class Account:
    def __init__(self, account_id: str, initial_balance: float = 0.0):
        self.account_id = account_id
        self.__balance = float(initial_balance)

    def deposit(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
        return self.__balance

    def withdraw(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient balance")
        self.__balance -= amount
        return self.__balance

    def get_balance(self) -> float:
        return self.__balance

    def __str__(self) -> str:
        return f"Account {self.account_id}: balance={self.__balance:.2f}"

class SavingsAccount(Account):
    def __init__(self, account_id: str, initial_balance: float = 0.0, interest_rate: float = 0.05):
        super().__init__(account_id, initial_balance)
        self.interest_rate = interest_rate

    def apply_interest(self) -> float:
        interest = self.get_balance() * self.interest_rate
        return self.deposit(interest)

if __name__ == "__main__":
    sa = SavingsAccount("SA-001", 1000, 0.10)
    sa.apply_interest()
    sa.withdraw(200)
    print(sa)
`,
    blankCode: `class Account:
    def __init__(self, account_id: str, initial_balance: float = 0.0):
        self.account_id = account_id
        self.__balance = float(initial_balance)

    def deposit(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
        return self.__balance

    def withdraw(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient balance")
        self.__balance -= amount
        return self.__balance

    def get_balance(self) -> float:
        return self.__balance

    def __str__(self) -> str:
        return f"Account {self.account_id}: balance={self.__balance:.2f}"

class SavingsAccount(Account):
    def __init__(self, account_id: str, initial_balance: float = 0.0, interest_rate: float = 0.05):
        super().__init__(account_id, initial_balance)
        self.interest_rate = interest_rate

    def apply_interest(self) -> float:
        interest = self.get_balance() * self.interest_rate
        return self.deposit(interest)
`,
    solutionCode: `class Account:
    def __init__(self, account_id: str, initial_balance: float = 0.0):
        self.account_id = account_id
        self.__balance = float(initial_balance)

    def deposit(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.__balance += amount
        return self.__balance

    def withdraw(self, amount: float) -> float:
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.__balance:
            raise ValueError("Insufficient balance")
        self.__balance -= amount
        return self.__balance

    def get_balance(self) -> float:
        return self.__balance

    def __str__(self) -> str:
        return f"Account {self.account_id}: balance={self.__balance:.2f}"

class SavingsAccount(Account):
    def __init__(self, account_id: str, initial_balance: float = 0.0, interest_rate: float = 0.05):
        super().__init__(account_id, initial_balance)
        self.interest_rate = interest_rate

    def apply_interest(self) -> float:
        interest = self.get_balance() * self.interest_rate
        return self.deposit(interest)
`,
    testCases: [
      {
        id: 'pcap-t-4-1',
        name: 'Test 1: Deposit and balance query',
        invocation: 'acc = Account("A-1", 500); acc.deposit(250); print(acc.get_balance())',
        expectedOutput: '750.0',
        passed: true,
      },
      {
        id: 'pcap-t-4-2',
        name: 'Test 2: SavingsAccount interest computation',
        invocation: 'sa = SavingsAccount("SA-1", 1000, 0.05); sa.apply_interest(); print(sa.get_balance())',
        expectedOutput: '1050.0',
        passed: true,
      },
      {
        id: 'pcap-t-4-3',
        name: 'Test 3: Overdraw raises ValueError',
        invocation: 'try:\n    acc = Account("A-2", 100); acc.withdraw(200)\nexcept ValueError as e:\n    print("caught")',
        expectedOutput: 'caught',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Name Mangling with __balance', cost: 0, content: 'Store private balance as self.__balance. It will be mangled to _Account__balance.', unlocked: true },
      { tier: 2, title: 'Subclass Calling super()', cost: 10, content: 'Use super().__init__(account_id, initial_balance) in SavingsAccount.', unlocked: false },
      { tier: 3, title: 'String Representation', cost: 20, content: 'Format balance to 2 decimal places using {self.__balance:.2f} in __str__.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'OOP Architecture Evaluation',
      title: 'Encapsulation & Inheritance Mastery',
      text: 'Encapsulating private attributes ensures state invariants are respected across polymorphic inheritance hierarchies.',
    },
  },

  'challenge-pcap-5-3': {
    id: 'challenge-pcap-5-3',
    track: 'PCAP-31-03 Section 5',
    category: '5.3 Closures, Comprehensions & Lambdas',
    pcepCode: 'PCAP-31-03 5.3',
    pcepObjective: 'Comprehensions, lambda expressions, map/filter, closures, and the nonlocal keyword.',
    challengeNumber: 105,
    title: 'Functional Data Pipeline & Stateful Rate-Limiting Closure',
    difficulty: 'Advanced',
    xpReward: 230,
    estimatedMinutes: 18,
    mode: 'free',
    pedagogicalObjective:
      'Section 5 tests closures, lambda mappings, and comprehensions. Implement a closure factory `create_rate_limiter(max_calls: int)` that uses `nonlocal` to track invocation counts.',
    guidelines: [
      'create_rate_limiter returns a wrapper function around any target function.',
      'Maintain call_count using nonlocal.',
      'If call_count >= max_calls, raise RuntimeError("Rate limit exceeded").',
      'Otherwise increment call_count and return target(*args, **kwargs).',
    ],
    executionSteps: {
      input: 'limiter = create_rate_limiter(max_calls=2)(add)',
      step1: 'limiter(2, 3) -> 5 (call 1)',
      step2: 'limiter(4, 5) -> 9 (call 2)',
      output: 'limiter(1, 1) -> raises RuntimeError',
    },
    starterCode: `def create_rate_limiter(max_calls: int):
    def decorator(func):
        calls = 0
        def wrapper(*args, **kwargs):
            nonlocal calls
            if calls >= max_calls:
                raise RuntimeError("Rate limit exceeded")
            calls += 1
            return func(*args, **kwargs)
        return wrapper
    return decorator

if __name__ == "__main__":
    @create_rate_limiter(2)
    def multiply(a, b):
        return a * b

    print(multiply(3, 4))
    print(multiply(5, 6))
`,
    blankCode: `def create_rate_limiter(max_calls: int):
    def decorator(func):
        calls = 0
        def wrapper(*args, **kwargs):
            nonlocal calls
            if calls >= max_calls:
                raise RuntimeError("Rate limit exceeded")
            calls += 1
            return func(*args, **kwargs)
        return wrapper
    return decorator
`,
    solutionCode: `def create_rate_limiter(max_calls: int):
    def decorator(func):
        calls = 0
        def wrapper(*args, **kwargs):
            nonlocal calls
            if calls >= max_calls:
                raise RuntimeError("Rate limit exceeded")
            calls += 1
            return func(*args, **kwargs)
        return wrapper
    return decorator
`,
    testCases: [
      {
        id: 'pcap-t-5-1',
        name: 'Test 1: Invocations within quota succeed',
        invocation: 'fn = create_rate_limiter(2)(lambda x: x * 2); print(fn(5), fn(10))',
        expectedOutput: '10 20',
        passed: true,
      },
      {
        id: 'pcap-t-5-2',
        name: 'Test 2: Exceeding quota raises RuntimeError',
        invocation: 'try:\n    fn = create_rate_limiter(1)(lambda: "ok")\n    fn(); fn()\nexcept RuntimeError as e:\n    print("blocked")',
        expectedOutput: 'blocked',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Enclosing Scope Variable', cost: 0, content: 'Declare calls = 0 inside decorator function.', unlocked: true },
      { tier: 2, title: 'nonlocal Keyword', cost: 10, content: 'Use nonlocal calls inside wrapper so reassignment modifies the closure variable.', unlocked: false },
      { tier: 3, title: 'Raising RuntimeError', cost: 20, content: 'Check if calls >= max_calls before incrementing.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Functional Scope Analysis',
      title: 'Closure State Preservation',
      text: 'Closures capture and retain lexical environments, allowing powerful state encapsulation without class boilerplate.',
    },
  },

  'challenge-pcap-5-5': {
    id: 'challenge-pcap-5-5',
    track: 'PCAP-31-03 Section 5',
    category: '5.5 File I/O & Byte Streams',
    pcepCode: 'PCAP-31-03 5.5',
    pcepObjective: 'File I/O operations, stream modes, bytearray buffers, and errno error diagnostics.',
    challengeNumber: 106,
    title: 'Binary Stream Buffer & bytearray Checksum Processor',
    difficulty: 'Advanced',
    xpReward: 250,
    estimatedMinutes: 20,
    mode: 'free',
    pedagogicalObjective:
      'Section 5.5 requires fluency with binary bytearray streams and error diagnostics. Write `process_bytearray_stream(data: bytearray, xor_key: int)` that XORs every byte and calculates the 8-bit checksum.',
    guidelines: [
      'Iterate over mutable bytearray in place.',
      'Transform each byte: data[i] = (data[i] ^ xor_key) & 0xFF.',
      'Calculate the 8-bit sum checksum: sum(data) % 256.',
      'Return a tuple of (data, checksum).',
    ],
    executionSteps: {
      input: 'data = bytearray([0x10, 0x20]), xor_key = 0xFF',
      step1: 'XOR each byte with 0xFF -> [0xEF, 0xDF]',
      step2: 'Compute checksum: (239 + 223) % 256 = 206',
      output: '(bytearray(b"\\xef\\xdf"), 206)',
    },
    starterCode: `def process_bytearray_stream(data: bytearray, xor_key: int = 0xAA) -> tuple:
    for i in range(len(data)):
        data[i] = (data[i] ^ xor_key) & 0xFF
    checksum = sum(data) % 256
    return (data, checksum)

if __name__ == "__main__":
    buf = bytearray(b"PCAP")
    transformed, cs = process_bytearray_stream(buf, 0x55)
    print("Transformed:", list(transformed), "Checksum:", cs)
`,
    blankCode: `def process_bytearray_stream(data: bytearray, xor_key: int = 0xAA) -> tuple:
    for i in range(len(data)):
        data[i] = (data[i] ^ xor_key) & 0xFF
    checksum = sum(data) % 256
    return (data, checksum)
`,
    solutionCode: `def process_bytearray_stream(data: bytearray, xor_key: int = 0xAA) -> tuple:
    for i in range(len(data)):
        data[i] = (data[i] ^ xor_key) & 0xFF
    checksum = sum(data) % 256
    return (data, checksum)
`,
    testCases: [
      {
        id: 'pcap-t-5-5-1',
        name: 'Test 1: Bytearray XOR transformation',
        invocation: 'buf, cs = process_bytearray_stream(bytearray([10, 20]), 0xFF); print(list(buf), cs)',
        expectedOutput: '[245, 235] 224',
        passed: true,
      },
      {
        id: 'pcap-t-5-5-2',
        name: 'Test 2: Empty bytearray buffer',
        invocation: 'buf, cs = process_bytearray_stream(bytearray(), 0x12); print(len(buf), cs)',
        expectedOutput: '0 0',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Bytearray Mutability', cost: 0, content: 'Unlike bytes, bytearray is mutable: you can assign data[i] = val.', unlocked: true },
      { tier: 2, title: 'Bitwise XOR Operator', cost: 10, content: 'Use the ^ operator to XOR each byte with xor_key.', unlocked: false },
      { tier: 3, title: 'Checksum Modulo', cost: 20, content: 'Compute sum(data) % 256 for the 8-bit checksum.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Low-Level Binary Stream',
      title: 'Buffer Mutation & Checksum Logic',
      text: 'bytearray provides high-speed, in-memory mutable binary buffers required for low-level I/O in Python.',
    },
  },
};

// ==========================================
// PCAP-31-03 40-QUESTION PRACTICE EXAM SIMULATOR
// 65 Minutes • 70% Passing Threshold (28/40)
// ==========================================
export const pcapMockExamQuestions: PcepExamQuestion[] = [
  // SECTION 1: Modules and Packages (12% -> 5 Qs)
  {
    id: 'pcap-q-1',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 1.1',
    blockNumber: 1,
    blockName: 'Section 1: Modules & Packages',
    question: 'What is the effect of executing `from math import *` in a Python module?',
    codeSnippet: `from math import *
# What names are imported into the local namespace?`,
    options: [
      { id: 'a', text: 'All entities from math, except those whose names begin with an underscore (_)', isCorrect: true },
      { id: 'b', text: 'All entities from math, including private entities starting with an underscore', isCorrect: false },
      { id: 'c', text: 'Only entities explicitly declared in math.__all__, regardless of underscores', isCorrect: false },
      { id: 'd', text: 'A single namespace object named math containing all entities', isCorrect: false },
    ],
    explanation:
      'In Python, `from module import *` imports all public symbols from the module into the current namespace, excluding symbols starting with an underscore (_). If __all__ is defined, it imports only names listed in __all__.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-2',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 1.1',
    blockNumber: 1,
    blockName: 'Section 1: Modules & Packages',
    question: 'Where does Python look for modules when an `import` statement is executed?',
    options: [
      { id: 'a', text: 'Directories specified in sys.path, starting with the directory of the running script', isCorrect: true },
      { id: 'b', text: 'Only in the standard library installation directory', isCorrect: false },
      { id: 'c', text: 'Exclusively in the current working directory, ignoring PYTHONPATH', isCorrect: false },
      { id: 'd', text: 'In the system PATH environment variable alongside executables', isCorrect: false },
    ],
    explanation:
      'Python searches for modules in the directories listed in `sys.path`. The first entry `sys.path[0]` is the directory containing the input script.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-3',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 1.2',
    blockNumber: 1,
    blockName: 'Section 1: Modules & Packages',
    question: 'What is the output of the following math module snippet?',
    codeSnippet: `import math

print(math.floor(-2.8), math.trunc(-2.8))`,
    options: [
      { id: 'a', text: '-3 -2', isCorrect: true },
      { id: 'b', text: '-2 -2', isCorrect: false },
      { id: 'c', text: '-3 -3', isCorrect: false },
      { id: 'd', text: '-2 -3', isCorrect: false },
    ],
    explanation:
      'math.floor(x) returns the largest integer <= x, so floor(-2.8) is -3. math.trunc(x) truncates toward zero, removing the fractional part, so trunc(-2.8) is -2.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-4',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 1.3',
    blockNumber: 1,
    blockName: 'Section 1: Modules & Packages',
    question: 'Which statement about `random.randint(1, 5)` vs `random.randrange(1, 5)` is correct?',
    options: [
      { id: 'a', text: 'randint(1, 5) can return 5, whereas randrange(1, 5) can never return 5', isCorrect: true },
      { id: 'b', text: 'Both can return integers in the inclusive range [1, 5]', isCorrect: false },
      { id: 'c', text: 'randrange(1, 5) includes 5, but randint(1, 5) excludes 5', isCorrect: false },
      { id: 'd', text: 'randint returns floating point values, while randrange returns integers', isCorrect: false },
    ],
    explanation:
      'random.randint(a, b) returns a random integer N such that a <= N <= b (both bounds inclusive). In contrast, random.randrange(start, stop) follows range() semantics, meaning stop is strictly excluded [start, stop).',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-5',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 1.5',
    blockNumber: 1,
    blockName: 'Section 1: Modules & Packages',
    question: 'What is the value of `__name__` when a module is imported from another file?',
    codeSnippet: `# helpers.py
print(__name__)

# main.py
import helpers`,
    options: [
      { id: 'a', text: '"helpers"', isCorrect: true },
      { id: 'b', text: '"__main__"', isCorrect: false },
      { id: 'c', text: 'None', isCorrect: false },
      { id: 'd', text: 'The absolute file path of helpers.py', isCorrect: false },
    ],
    explanation:
      'When a file is imported as a module, Python automatically sets its __name__ attribute to the module name (e.g. "helpers"). Only when run directly as the top-level script is __name__ set to "__main__".',
    format: 'output_prediction',
  },

  // SECTION 2: Exceptions (14% -> 6 Qs)
  {
    id: 'pcap-q-6',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 2.1',
    blockNumber: 2,
    blockName: 'Section 2: Exceptions',
    question: 'Which of the following built-in exceptions is a direct subclass of ArithmeticError?',
    options: [
      { id: 'a', text: 'ZeroDivisionError and OverflowError', isCorrect: true },
      { id: 'b', text: 'ValueError and TypeError', isCorrect: false },
      { id: 'c', text: 'IndexError and KeyError', isCorrect: false },
      { id: 'd', text: 'AssertionError and RuntimeError', isCorrect: false },
    ],
    explanation:
      'The ArithmeticError class is the base class for arithmetic exceptions: OverflowError, ZeroDivisionError, and FloatingPointError. IndexError and KeyError inherit from LookupError.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-7',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 2.1',
    blockNumber: 2,
    blockName: 'Section 2: Exceptions',
    question: 'What is the output of the following exception handling code?',
    codeSnippet: `def compute():
    try:
        return 1 / 0
    except ArithmeticError:
        return "ArithmeticError"
    except ZeroDivisionError:
        return "ZeroDivisionError"

print(compute())`,
    options: [
      { id: 'a', text: 'ArithmeticError', isCorrect: true },
      { id: 'b', text: 'ZeroDivisionError', isCorrect: false },
      { id: 'c', text: 'A SyntaxError due to duplicate exception handling', isCorrect: false },
      { id: 'd', text: 'Program crashes with unhandled ZeroDivisionError', isCorrect: false },
    ],
    explanation:
      'Python evaluates except branches sequentially from top to bottom. Because ZeroDivisionError is a subclass of ArithmeticError, the first branch matches and intercepts the exception before ZeroDivisionError is reached.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-8',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 2.2',
    blockNumber: 2,
    blockName: 'Section 2: Exceptions',
    question: 'What is required when creating a valid user-defined custom exception in Python?',
    options: [
      { id: 'a', text: 'It must inherit directly or indirectly from the Exception class (or BaseException)', isCorrect: true },
      { id: 'b', text: 'It must implement a method named __handle_exception__()', isCorrect: false },
      { id: 'c', text: 'It must override both __enter__ and __exit__', isCorrect: false },
      { id: 'd', text: 'It cannot have an __init__ constructor', isCorrect: false },
    ],
    explanation:
      'Custom exceptions must inherit from Exception (or one of its subclasses). Inheriting from BaseException is technically allowed but discouraged for application exceptions.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-9',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 2.3',
    blockNumber: 2,
    blockName: 'Section 2: Exceptions',
    question: 'What is contained in the `args` attribute of an exception object?',
    codeSnippet: `try:
    raise ValueError("Invalid code", 404)
except ValueError as e:
    print(e.args)`,
    options: [
      { id: 'a', text: "('Invalid code', 404)", isCorrect: true },
      { id: 'b', text: "['Invalid code', 404]", isCorrect: false },
      { id: 'c', text: "{'message': 'Invalid code', 'code': 404}", isCorrect: false },
      { id: 'd', text: "'Invalid code'", isCorrect: false },
    ],
    explanation:
      'The args attribute of an exception instance is a tuple containing all positional arguments passed to the exception constructor during instantiation.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-10',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 2.3',
    blockNumber: 2,
    blockName: 'Section 2: Exceptions',
    question: 'What happens when `assert False, "Debug stop"` is evaluated?',
    options: [
      { id: 'a', text: 'It raises an AssertionError with "Debug stop" as its argument', isCorrect: true },
      { id: 'b', text: 'It prints "Debug stop" to stderr and continues execution', isCorrect: false },
      { id: 'c', text: 'It terminates the program silently without raising an exception', isCorrect: false },
      { id: 'd', text: 'It returns False to the calling function', isCorrect: false },
    ],
    explanation:
      'The assert statement tests a condition; if false, it raises AssertionError(message).',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-11',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 2.4',
    blockNumber: 2,
    blockName: 'Section 2: Exceptions',
    question: 'What does the following snippet print?',
    codeSnippet: `def run():
    try:
        return 1
    finally:
        return 2

print(run())`,
    options: [
      { id: 'a', text: '2', isCorrect: true },
      { id: 'b', text: '1', isCorrect: false },
      { id: 'c', text: 'None', isCorrect: false },
      { id: 'd', text: 'Raises a SyntaxError', isCorrect: false },
    ],
    explanation:
      'The finally block is guaranteed to execute before leaving the try statement. If the finally block executes a return or raise statement, it discards any previous return value from the try block.',
    format: 'output_prediction',
  },

  // SECTION 3: Strings (18% -> 7 Qs)
  {
    id: 'pcap-q-12',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.1',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'What is the output of the following character conversion?',
    codeSnippet: `print(chr(ord('A') + 2))`,
    options: [
      { id: 'a', text: "'C'", isCorrect: true },
      { id: 'b', text: "'B'", isCorrect: false },
      { id: 'c', text: "67", isCorrect: false },
      { id: 'd', text: "'a'", isCorrect: false },
    ],
    explanation:
      "ord('A') returns 65. 65 + 2 is 67. chr(67) returns the character with Unicode code point 67, which is 'C'.",
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-13',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.2',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'What is the output of the string comparison `"100" < "20"`?',
    codeSnippet: `print("100" < "20")`,
    options: [
      { id: 'a', text: 'True', isCorrect: true },
      { id: 'b', text: 'False', isCorrect: false },
      { id: 'c', text: 'Raises a TypeError because strings cannot be compared with <', isCorrect: false },
      { id: 'd', text: 'None', isCorrect: false },
    ],
    explanation:
      'Strings in Python are compared lexicographically (character by character based on their ASCII/Unicode code points). The first character "1" (code point 49) is less than "2" (code point 50), so "100" < "20" evaluates to True.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-14',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.2',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'What is the result of applying slice `s[1:6:2]` to `s = "abcdefgh"`?',
    codeSnippet: `s = "abcdefgh"
print(s[1:6:2])`,
    options: [
      { id: 'a', text: "'bdf'", isCorrect: true },
      { id: 'b', text: "'ace'", isCorrect: false },
      { id: 'c', text: "'bde'", isCorrect: false },
      { id: 'd', text: "'bcdef'", isCorrect: false },
    ],
    explanation:
      'The slice starts at index 1 ("b"), takes elements with step 2 up to index 6 exclusive: index 1 ("b"), index 3 ("d"), index 5 ("f"). The result is "bdf".',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-15',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.3',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'Which of the following will return `True` for `s = "123a"`?',
    codeSnippet: `s = "123a"
print(s.isalnum(), s.isalpha(), s.isdigit())`,
    options: [
      { id: 'a', text: 's.isalnum() returns True, while isalpha() and isdigit() return False', isCorrect: true },
      { id: 'b', text: 's.isalpha() returns True', isCorrect: false },
      { id: 'c', text: 's.isdigit() returns True', isCorrect: false },
      { id: 'd', text: 'All three return True', isCorrect: false },
    ],
    explanation:
      'isalnum() returns True if all characters are alphanumeric (letters or numbers). isalpha() requires letters only (fails due to 123), and isdigit() requires digits only (fails due to a).',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-16',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.4',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'What is the result of `"Python".center(10, "*")`?',
    codeSnippet: `print("Python".center(10, "*"))`,
    options: [
      { id: 'a', text: '"**Python**"', isCorrect: true },
      { id: 'b', text: '"*Python***"', isCorrect: false },
      { id: 'c', text: '"****Python"', isCorrect: false },
      { id: 'd', text: '"Python****"', isCorrect: false },
    ],
    explanation:
      'The center(width, fillchar) method pads the string equally on both sides to reach length 10. With length 6, 4 padding characters are added: 2 on the left and 2 on the right, yielding "**Python**".',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-17',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.5',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'What is the difference between `str.find()` and `str.index()` when the substring is NOT found?',
    options: [
      { id: 'a', text: 'find() returns -1, whereas index() raises ValueError', isCorrect: true },
      { id: 'b', text: 'find() raises IndexError, whereas index() returns None', isCorrect: false },
      { id: 'c', text: 'Both return -1', isCorrect: false },
      { id: 'd', text: 'Both raise ValueError', isCorrect: false },
    ],
    explanation:
      'str.find(sub) returns -1 if the substring sub is not found. In contrast, str.index(sub) raises a ValueError exception when sub is absent.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-18',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 3.5',
    blockNumber: 3,
    blockName: 'Section 3: Strings',
    question: 'What is the output of the following split and join operation?',
    codeSnippet: `tokens = "  alpha   beta  gamma ".split()
print(":".join(tokens))`,
    options: [
      { id: 'a', text: '"alpha:beta:gamma"', isCorrect: true },
      { id: 'b', text: '"::alpha:::beta::gamma:"', isCorrect: false },
      { id: 'c', text: '"  alpha :  beta : gamma "', isCorrect: false },
      { id: 'd', text: 'Raises a ValueError', isCorrect: false },
    ],
    explanation:
      'When split() is called without arguments (or with None), consecutive whitespace characters are treated as a single delimiter, and leading/trailing whitespace is stripped. Tokens are ["alpha", "beta", "gamma"], joined by ":" to form "alpha:beta:gamma".',
    format: 'output_prediction',
  },

  // SECTION 4: Object-Oriented Programming (34% -> 14 Qs)
  {
    id: 'pcap-q-19',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.1',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'In Python, what is the explicit parameter passed to instance methods representing the object instance?',
    options: [
      { id: 'a', text: 'self (by conventional naming)', isCorrect: true },
      { id: 'b', text: 'this (mandatory keyword)', isCorrect: false },
      { id: 'c', text: 'cls (mandatory keyword)', isCorrect: false },
      { id: 'd', text: 'super', isCorrect: false },
    ],
    explanation:
      'By convention in Python, the first parameter of an instance method is named self. When an instance method is invoked (e.g. obj.method()), Python automatically passes the instance as the first argument.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-20',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.2',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What is the output of the following code involving class and instance variables?',
    codeSnippet: `class Sample:
    val = 1

s1 = Sample()
s2 = Sample()
s1.val = 2
Sample.val = 3

print(s1.val, s2.val)`,
    options: [
      { id: 'a', text: '2 3', isCorrect: true },
      { id: 'b', text: '3 3', isCorrect: false },
      { id: 'c', text: '2 1', isCorrect: false },
      { id: 'd', text: '2 2', isCorrect: false },
    ],
    explanation:
      'Assigning s1.val = 2 creates an instance variable on s1 that shadows the class variable. s2 does not have an instance variable val, so s2.val falls back to the class variable Sample.val (which is 3). Result: 2 3.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-21',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.2',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What dictionary attribute stores the namespace attributes of an instance or class?',
    options: [
      { id: 'a', text: '__dict__', isCorrect: true },
      { id: 'b', text: '__namespace__', isCorrect: false },
      { id: 'c', text: '__attributes__', isCorrect: false },
      { id: 'd', text: '__slots__', isCorrect: false },
    ],
    explanation:
      'In Python, an object or class namespace is exposed via its __dict__ attribute, which is a mapping of attribute names to their values.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-22',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.3',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'How does Python perform name mangling for attribute `__private` defined inside class `Device`?',
    codeSnippet: `class Device:
    def __init__(self):
        self.__secret = 42

d = Device()
# How is __secret stored internally?`,
    options: [
      { id: 'a', text: '_Device__secret', isCorrect: true },
      { id: 'b', text: '__Device_secret', isCorrect: false },
      { id: 'c', text: '__secret_Device', isCorrect: false },
      { id: 'd', text: '_Device_secret', isCorrect: false },
    ],
    explanation:
      'Name mangling prepends a single underscore and the class name to any identifier with at least two leading underscores and at most one trailing underscore: _Device__secret.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-23',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.3',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What is the output when attempting to read `d.__secret` directly?',
    codeSnippet: `class Device:
    def __init__(self):
        self.__secret = 42

d = Device()
print(d.__secret)`,
    options: [
      { id: 'a', text: 'Raises an AttributeError', isCorrect: true },
      { id: 'b', text: 'Prints 42', isCorrect: false },
      { id: 'c', text: 'Prints None', isCorrect: false },
      { id: 'd', text: 'Raises a NameError', isCorrect: false },
    ],
    explanation:
      'Because Python mangles __secret to _Device__secret, accessing d.__secret results in an AttributeError: Device object has no attribute __secret.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-24',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.4',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'Which special method is invoked when `print(obj)` or `str(obj)` is called?',
    options: [
      { id: 'a', text: '__str__(self)', isCorrect: true },
      { id: 'b', text: '__print__(self)', isCorrect: false },
      { id: 'c', text: '__format__(self)', isCorrect: false },
      { id: 'd', text: '__display__(self)', isCorrect: false },
    ],
    explanation:
      'The __str__() method is called by the str() built-in function and the print() function to compute the human-readable string representation of an object.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-25',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.4',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What is the output of the following constructor and dunder comparison code?',
    codeSnippet: `class Box:
    def __init__(self, size):
        self.size = size
    def __eq__(self, other):
        return self.size == other.size

b1 = Box(10)
b2 = Box(10)
print(b1 == b2, b1 is b2)`,
    options: [
      { id: 'a', text: 'True False', isCorrect: true },
      { id: 'b', text: 'True True', isCorrect: false },
      { id: 'c', text: 'False False', isCorrect: false },
      { id: 'd', text: 'False True', isCorrect: false },
    ],
    explanation:
      'The == operator invokes __eq__, which compares self.size == other.size (10 == 10 is True). The `is` operator checks identity (memory address), which is False because b1 and b2 are two distinct instances.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-26',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.5',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'How do you invoke the superclass constructor in Python 3?',
    options: [
      { id: 'a', text: 'super().__init__(*args, **kwargs)', isCorrect: true },
      { id: 'b', text: 'super(self).__init__(*args)', isCorrect: false },
      { id: 'c', text: 'this.super().__init__()', isCorrect: false },
      { id: 'd', text: 'parent().__init__()', isCorrect: false },
    ],
    explanation:
      'In Python 3, zero-argument `super()` automatically resolves the current class and instance from the enclosing frame, allowing `super().__init__(...)`.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-27',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.5',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What does `issubclass(bool, int)` evaluate to in Python?',
    codeSnippet: `print(issubclass(bool, int))`,
    options: [
      { id: 'a', text: 'True, because bool inherits from int in Python', isCorrect: true },
      { id: 'b', text: 'False, bool and int are unrelated types', isCorrect: false },
      { id: 'c', text: 'Raises a TypeError', isCorrect: false },
      { id: 'd', text: 'None', isCorrect: false },
    ],
    explanation:
      'In Python, bool is a subclass of int. True and False behave like 1 and 0 in numeric contexts. Therefore, issubclass(bool, int) is True.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-28',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.5',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What is the output of the following diamond inheritance code?',
    codeSnippet: `class Top:
    def msg(self): return "Top"
class Left(Top):
    def msg(self): return "Left"
class Right(Top):
    def msg(self): return "Right"
class Bottom(Left, Right):
    pass

b = Bottom()
print(b.msg())`,
    options: [
      { id: 'a', text: '"Left"', isCorrect: true },
      { id: 'b', text: '"Right"', isCorrect: false },
      { id: 'c', text: '"Top"', isCorrect: false },
      { id: 'd', text: 'Raises a TypeError due to ambiguity', isCorrect: false },
    ],
    explanation:
      'According to C3 Linearization (MRO), Bottom inherits from (Left, Right). Left is checked before Right. Since Left implements msg(), "Left" is executed.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-29',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.5',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'Which property contains the tuple of base classes directly inherited by a class?',
    options: [
      { id: 'a', text: '__bases__', isCorrect: true },
      { id: 'b', text: '__super__', isCorrect: false },
      { id: 'c', text: '__parents__', isCorrect: false },
      { id: 'd', text: '__ancestors__', isCorrect: false },
    ],
    explanation:
      'The __bases__ attribute of a class is a tuple containing the direct base classes from which the class inherits.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-30',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.5',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What is the output of the following `isinstance` inspection?',
    codeSnippet: `class A: pass
class B(A): pass
class C: pass

b = B()
print(isinstance(b, (A, C)))`,
    options: [
      { id: 'a', text: 'True', isCorrect: true },
      { id: 'b', text: 'False', isCorrect: false },
      { id: 'c', text: 'Raises a TypeError', isCorrect: false },
      { id: 'd', text: '(True, False)', isCorrect: false },
    ],
    explanation:
      'isinstance(obj, class_or_tuple) accepts a tuple of types and returns True if obj is an instance of any class in the tuple. Since b is an instance of B which inherits from A, it returns True.',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-31',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.2',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What built-in function tests whether an object has an attribute with a given name?',
    options: [
      { id: 'a', text: 'hasattr(object, name)', isCorrect: true },
      { id: 'b', text: 'contains(object, name)', isCorrect: false },
      { id: 'c', text: 'getattr(object, name, True)', isCorrect: false },
      { id: 'd', text: 'isprop(object, name)', isCorrect: false },
    ],
    explanation:
      'hasattr(object, name) returns True if the string name is the name of one of the object’s attributes, False otherwise.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-32',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 4.4',
    blockNumber: 4,
    blockName: 'Section 4: Object-Oriented Programming (OOP)',
    question: 'What happens if a class does NOT define an `__init__` constructor?',
    options: [
      { id: 'a', text: 'Python automatically invokes the constructor of its superclass (e.g. object.__init__)', isCorrect: true },
      { id: 'b', text: 'Instances cannot be instantiated and raise an InstantiationError', isCorrect: false },
      { id: 'c', text: 'Python raises a SyntaxError at class definition time', isCorrect: false },
      { id: 'd', text: 'The class can only have class variables', isCorrect: false },
    ],
    explanation:
      'If a subclass does not define an __init__ method, Python traverses the MRO and invokes the __init__ of the nearest superclass (ultimately object.__init__).',
    format: 'single_choice',
  },

  // SECTION 5: Miscellaneous (List Comprehensions, Lambdas, Closures, I/O) (22% -> 8 Qs)
  {
    id: 'pcap-q-33',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.1',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'What is the output of the following list comprehension?',
    codeSnippet: `res = [x * 2 for x in range(5) if x % 2 == 1]
print(res)`,
    options: [
      { id: 'a', text: '[2, 6]', isCorrect: true },
      { id: 'b', text: '[0, 4, 8]', isCorrect: false },
      { id: 'c', text: '[1, 3]', isCorrect: false },
      { id: 'd', text: '[2, 4, 6]', isCorrect: false },
    ],
    explanation:
      'range(5) produces [0, 1, 2, 3, 4]. The condition x % 2 == 1 filters for odd numbers: 1 and 3. x * 2 gives 2 and 6. Result is [2, 6].',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-34',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.1',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'What is the output of this conditional expression inside a list comprehension?',
    codeSnippet: `vals = [1, 2, 3]
out = [x if x > 1 else 0 for x in vals]
print(out)`,
    options: [
      { id: 'a', text: '[0, 2, 3]', isCorrect: true },
      { id: 'b', text: '[2, 3]', isCorrect: false },
      { id: 'c', text: '[1, 2, 3]', isCorrect: false },
      { id: 'd', text: 'SyntaxError: invalid syntax', isCorrect: false },
    ],
    explanation:
      'In Python, `x if condition else y` is a ternary expression placed before the `for` clause. For x=1, 1 > 1 is False -> 0. For 2 and 3, condition is True -> 2, 3. The output is [0, 2, 3].',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-35',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.2',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'What is the output of the lambda expression with `map()`?',
    codeSnippet: `numbers = [1, 2, 3]
squared = list(map(lambda x: x**2, numbers))
print(squared)`,
    options: [
      { id: 'a', text: '[1, 4, 9]', isCorrect: true },
      { id: 'b', text: '[1, 2, 3]', isCorrect: false },
      { id: 'c', text: '<map object at 0x...>', isCorrect: false },
      { id: 'd', text: '[2, 4, 6]', isCorrect: false },
    ],
    explanation:
      'The lambda x: x**2 squares each number. map applies the function to each element of numbers, and list() converts the map iterator into [1, 4, 9].',
    format: 'output_prediction',
  },
  {
    id: 'pcap-q-36',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.2',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'How do you sort a list of tuples `[(1, "b"), (2, "a")]` by their second element using a lambda?',
    options: [
      { id: 'a', text: 'sorted(items, key=lambda x: x[1])', isCorrect: true },
      { id: 'b', text: 'sorted(items, lambda x: x[1])', isCorrect: false },
      { id: 'c', text: 'items.sort(by=lambda x: x[1])', isCorrect: false },
      { id: 'd', text: 'sort(items, index=1)', isCorrect: false },
    ],
    explanation:
      'The key parameter of sorted() specifies a one-argument function used to extract a comparison key from each element: `key=lambda x: x[1]`.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-37',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.3',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'What is the purpose of the `nonlocal` keyword in a nested closure?',
    options: [
      { id: 'a', text: 'It allows binding a variable in the nearest enclosing non-global scope', isCorrect: true },
      { id: 'b', text: 'It defines a global variable across all modules', isCorrect: false },
      { id: 'c', text: 'It makes the variable private to the instance', isCorrect: false },
      { id: 'd', text: 'It imports variables from parent packages', isCorrect: false },
    ],
    explanation:
      'The `nonlocal` statement causes the listed identifiers to refer to previously bound variables in the nearest enclosing scope excluding globals.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-38',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.4',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'What makes a Python function a generator function?',
    options: [
      { id: 'a', text: 'The presence of the `yield` statement within the function body', isCorrect: true },
      { id: 'b', text: 'Decorating the function with @generator', isCorrect: false },
      { id: 'c', text: 'Returning an instance of class Generator', isCorrect: false },
      { id: 'd', text: 'Defining __next__() inside the function', isCorrect: false },
    ],
    explanation:
      'Any function containing the `yield` keyword is compiled by Python as a generator function, which returns a generator iterator when called.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-39',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.5',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'Which file open mode opens a file for writing in binary mode, overwriting any existing content?',
    options: [
      { id: 'a', text: '"wb"', isCorrect: true },
      { id: 'b', text: '"rb"', isCorrect: false },
      { id: 'c', text: '"ab+"', isCorrect: false },
      { id: 'd', text: '"w+"', isCorrect: false },
    ],
    explanation:
      '"wb" opens the file for writing in binary mode, truncating (overwriting) the file if it exists or creating a new one.',
    format: 'single_choice',
  },
  {
    id: 'pcap-q-40',
    trackId: 'pcap-31-03',
    pcepCode: 'PCAP-31-03 5.5',
    blockNumber: 5,
    blockName: 'Section 5: Miscellaneous (Lambdas, Closures, I/O)',
    question: 'What is the output when mutating a `bytearray` and converting to string?',
    codeSnippet: `b = bytearray(b"Code")
b[0] = ord("N")
print(b.decode("ascii"))`,
    options: [
      { id: 'a', text: '"Node"', isCorrect: true },
      { id: 'b', text: '"Code"', isCorrect: false },
      { id: 'c', text: 'Raises a TypeError because bytearray is immutable', isCorrect: false },
      { id: 'd', text: '"78ode"', isCorrect: false },
    ],
    explanation:
      'Unlike `bytes`, `bytearray` is a mutable sequence of integers in the range 0 <= x < 256. Assigning b[0] = ord("N") (78) modifies the first byte to "N", so decoding gives "Node".',
    format: 'output_prediction',
  },
];

// ==========================================
// PCAP-31-03 FLASHCARDS
// ==========================================
export const pcapFlashcardsData: Flashcard[] = [
  {
    id: 'pcap-fc-1',
    cardType: 'Syllabus 4.5: MRO',
    topic: 'Method Resolution Order (MRO)',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 6,
    question: 'How does Python resolve method lookup in multiple inheritance hierarchies?',
    codeSnippet: `class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print([c.__name__ for c in D.__mro__])`,
    stdoutExpected: "['D', 'B', 'C', 'A', 'object']",
    explanationTitle: 'C3 Linearization Algorithm',
    explanationText:
      'Python uses C3 Linearization to compute MRO. Subclasses precede superclasses, and left-to-right order of direct parents is maintained without duplicate visits.',
    complexityInfo: 'O(1) cached MRO tuple lookup at runtime',
  },
  {
    id: 'pcap-fc-2',
    cardType: 'Syllabus 4.3: Name Mangling',
    topic: 'Private Attribute Name Mangling',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 4,
    question: 'What internal name does Python assign to self.__balance in class Account?',
    codeSnippet: `class Account:
    def __init__(self):
        self.__balance = 500

a = Account()
print(hasattr(a, "_Account__balance"))`,
    stdoutExpected: 'True',
    explanationTitle: 'Leading Double Underscore Mangling',
    explanationText:
      'Any identifier with at least two leading underscores and at most one trailing underscore is rewritten as _ClassName__identifier.',
    complexityInfo: 'Compile-time symbol transformation',
  },
  {
    id: 'pcap-fc-3',
    cardType: 'Syllabus 5.3: Closures',
    topic: 'The nonlocal Statement',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.6',
    intervalDays: 5,
    question: 'Why is `nonlocal` required when reassigning a variable in an outer closure scope?',
    codeSnippet: `def outer():
    x = 10
    def inner():
        nonlocal x
        x += 5
        return x
    return inner()

print(outer())`,
    stdoutExpected: '15',
    explanationTitle: 'Lexical Rebinding vs Local Creation',
    explanationText:
      'Without nonlocal, x += 5 treats x as a local variable before assignment, raising UnboundLocalError. nonlocal binds x to the enclosing scope.',
    complexityInfo: 'Cell reference in closure frame',
  },
  {
    id: 'pcap-fc-4',
    cardType: 'Syllabus 5.5: File I/O',
    topic: 'bytearray vs bytes',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 3,
    question: 'What is the key difference between bytes and bytearray in Python?',
    codeSnippet: `b1 = bytes([65, 66])
b2 = bytearray([65, 66])
b2[0] = 90
print(b2.decode())`,
    stdoutExpected: 'ZB',
    explanationTitle: 'Mutable Binary Sequences',
    explanationText:
      'bytes objects are immutable sequences of single bytes. bytearray objects are mutable sequences supporting in-place item assignment and buffer operations.',
    complexityInfo: 'Mutable C buffer under the hood',
  },
  {
    id: 'pcap-fc-5',
    cardType: 'Syllabus 1.1: Modules',
    topic: 'Module __all__ Attribute',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.2',
    intervalDays: 4,
    question: 'How does __all__ affect `from module import *`?',
    codeSnippet: `# In math_utils.py:
__all__ = ['add']
def add(a, b): return a + b
def sub(a, b): return a - b

# In main.py:
# from math_utils import * imports only 'add'`,
    stdoutExpected: 'Only symbols in __all__ are imported',
    explanationTitle: 'Explicit Public API Definition',
    explanationText:
      'When __all__ is defined as a list or tuple of strings, wildcard imports (`from m import *`) import exclusively the symbols listed in __all__.',
    complexityInfo: 'Global symbol restriction',
  },
  {
    id: 'pcap-fc-6',
    cardType: 'Syllabus 2.4: Control Flow',
    topic: 'try / except / else / finally',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 5,
    question: 'When does the `else:` branch execute in a try block?',
    codeSnippet: `try:
    val = 10 / 2
except ZeroDivisionError:
    print("error")
else:
    print("success:", val)`,
    stdoutExpected: 'success: 5.0',
    explanationTitle: 'Clean Path Execution',
    explanationText:
      'The else clause executes ONLY if the try block finishes without raising any exceptions, before the finally block runs.',
    complexityInfo: 'Guaranteed branch separation',
  },
];
