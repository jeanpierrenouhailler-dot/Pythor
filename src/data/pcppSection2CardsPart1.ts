import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 2: CODING CONVENTIONS, BEST PRACTICES & DESIGN PATTERNS (Part 1: Cards 1 to 40)
 * - Chapter 2.1: PEP 8 Style Guide & Code Quality Tools (Cards 1 to 20)
 * - Chapter 2.2: PEP 20 (Zen of Python) & PEP 257 (Docstring Conventions) (Cards 21 to 40)
 */
export const pcppSection2CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.1: PEP 8 STYLE GUIDE & CODE QUALITY (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcpp-s2-fc-001',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Indentation rules: spaces vs tabs & level width',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'According to PEP 8, what is the mandatory indentation style and unit width in Python 3?',
    codeSnippet: `# PEP 8 Indentation Rule
def calculate_metrics(values):
    # What character and how many are prescribed?
    total = sum(values)
    return total / len(values) if values else 0.0`,
    stdoutExpected: '4 spaces per indentation level; tabs forbidden in Python 3',
    explanationTitle: 'PEP 8 Indentation Mandate',
    explanationText:
      'PEP 8 strictly dictates 4 spaces per indentation level. Tabs are forbidden in modern Python 3 codebases, and mixing tabs and spaces raises a TabError during syntax parsing.',
    complexityInfo: 'PCPP Section 2.1 core requirement',
  },
  {
    id: 'pcpp-s2-fc-002',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Maximum line length limits for code and docstrings',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What are the official maximum line length limits prescribed by PEP 8 for code lines and for docstrings/comments?',
    codeSnippet: `# PEP 8 Line Lengths:
# Code lines: Maximum of X characters
# Docstrings and comments: Maximum of Y characters`,
    stdoutExpected: '79 characters for code; 72 characters for docstrings and comments',
    explanationTitle: 'Line Length Constraints in PEP 8',
    explanationText:
      'PEP 8 limits all lines to a maximum of 79 characters. For flowing long blocks of text like docstrings or comments, the recommended limit is 72 characters to allow comfortable viewing in terminal and side-by-side diff tools.',
    complexityInfo: 'Standard PEP 8 examination question',
  },
  {
    id: 'pcpp-s2-fc-003',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Blank lines spacing: top-level definitions vs class methods',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How many blank lines should surround top-level functions/classes versus methods inside a class according to PEP 8?',
    codeSnippet: `# PEP 8 Blank Lines
import sys


def top_level_one():
    pass


def top_level_two():
    pass


class Container:
    def method_one(self):
        pass

    def method_two(self):
        pass`,
    stdoutExpected: '2 blank lines around top-level functions/classes; 1 blank line between method definitions',
    explanationTitle: 'Blank Line Rhythms in PEP 8',
    explanationText:
      'Surround top-level function and class definitions with two blank lines. Method definitions inside a class are separated by a single blank line. Extra blank lines may be used sparingly inside functions to separate logical sections.',
    complexityInfo: 'PEP 8 layout formatting rule',
  },
  {
    id: 'pcpp-s2-fc-004',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Imports grouping order and separation',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the correct grouping order and separation for import statements according to PEP 8?',
    codeSnippet: `# Correct PEP 8 imports order:
import os
import sys

import requests

import my_local_package.helpers`,
    stdoutExpected: 'Standard library -> Related third party -> Local application/library; separated by 1 blank line',
    explanationTitle: 'Standard 3-Group Import Hierarchy',
    explanationText:
      'PEP 8 requires imports to be grouped in the following order: (1) Standard library imports, (2) Related third party imports, (3) Local application or library specific imports. Each group must be separated by a single blank line.',
    complexityInfo: 'Frequently tested on PCPP exams',
  },
  {
    id: 'pcpp-s2-fc-005',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Import syntax: separate lines vs comma-separated',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Does PEP 8 allow "import os, sys" on a single line, and how does that compare to "from subprocess import Popen, PIPE"?',
    codeSnippet: `# Case A:
import os, sys

# Case B:
from subprocess import Popen, PIPE`,
    stdoutExpected: 'Case A is non-compliant (must be separate lines); Case B is fully compliant',
    explanationTitle: 'Imports on Separate Lines',
    explanationText:
      'Direct module imports should usually be on separate lines: "import os" and "import sys". However, importing multiple symbols from the same module is explicitly permitted: "from subprocess import Popen, PIPE".',
    complexityInfo: 'PEP 8 syntax rule',
  },
  {
    id: 'pcpp-s2-fc-006',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Wildcard imports hazard (from module import *)',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does PEP 8 strongly discourage wildcard imports ("from <module> import *")?',
    codeSnippet: `from math import *
from numpy import *

# Which sin() is called?
val = sin(0.5)`,
    stdoutExpected: 'Wildcard imports pollute the global namespace and obscure which names are present',
    explanationTitle: 'Dangers of Wildcard Imports',
    explanationText:
      'Wildcard imports ("from module import *") make it unclear which names are present in the namespace, confusing both human readers and automated static linters, and lead to accidental shadowing of identifiers.',
    complexityInfo: 'Code quality & linter warning rule',
  },
  {
    id: 'pcpp-s2-fc-007',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Naming conventions: classes, functions, variables & constants',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Match the PEP 8 casing conventions for: (1) Classes, (2) Functions/methods, (3) Constants.',
    codeSnippet: `class UserProfile:           # Case 1
    MAX_LOGIN_ATTEMPTS = 5    # Case 3

    def get_user_data(self):  # Case 2
        pass`,
    stdoutExpected: 'Classes: CapWords (PascalCase); Functions: snake_case; Constants: UPPER_CASE_WITH_UNDERSCORES',
    explanationTitle: 'PEP 8 Naming Conventions Summary',
    explanationText:
      'PEP 8 mandates: Class names use CapWords (CamelCase / PascalCase); Exception names also use CapWords with an "Error" suffix; Function and variable names use lowercase with words separated by underscores (snake_case); Constants use ALL_CAPS with underscores.',
    complexityInfo: 'Foundational PEP 8 rule',
  },
  {
    id: 'pcpp-s2-fc-008',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Leading and trailing underscore conventions',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Explain the PEP 8 semantic meanings of: _single_leading, single_trailing_, and __double_leading underscores.',
    codeSnippet: `class Account:
    _internal_cache = {}    # 1. _single_leading
    
    def filter(self, class_): # 2. single_trailing_
        self.__secret_key = 42 # 3. __double_leading`,
    stdoutExpected: '1. Weak internal indicator; 2. Avoid keyword collision; 3. Triggers name mangling',
    explanationTitle: 'Underscore Semantics in PEP 8',
    explanationText:
      '_single_leading indicates weak "internal use" (not imported by "from m import *"). single_trailing_ is used by convention to avoid conflicts with Python keywords (e.g. class_, id_). __double_leading invokes class-private name mangling (_ClassName__var).',
    complexityInfo: 'High-yield PCPP exam question',
  },
  {
    id: 'pcpp-s2-fc-009',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Singleton comparison: "is None" vs "== None"',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does PEP 8 strictly prescribe "if x is None" instead of "if x == None"?',
    codeSnippet: `class Deceptive:
    def __eq__(self, other):
        return True  # Returns True for anything!

d = Deceptive()
print(d == None)  # True!
print(d is None)  # False!`,
    stdoutExpected: '"is" checks identity and cannot be overridden by __eq__ dunder methods',
    explanationTitle: 'Identity vs Equality for Singletons',
    explanationText:
      'None is a singleton object in Python. The "is" operator performs identity comparison (pointer equality) which cannot be bypassed, whereas "==" calls the object\'s __eq__() method, which can return misleading truth values.',
    complexityInfo: 'Classic Python trap and PEP 8 recommendation',
  },
  {
    id: 'pcpp-s2-fc-010',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Boolean truth value testing recommendations',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'According to PEP 8, how should you test whether a sequence (list, string, tuple) is empty?',
    codeSnippet: `# Option A:
if len(my_list) == 0:
    pass

# Option B:
if not my_list:
    pass`,
    stdoutExpected: 'Option B ("if not my_list:") is preferred by PEP 8',
    explanationTitle: 'Implicit Truth Value of Sequences',
    explanationText:
      'PEP 8 states: For sequences (strings, lists, tuples), use the fact that empty sequences are false: "if not seq:" and "if seq:", rather than comparing lengths to zero ("if len(seq) == 0:").',
    complexityInfo: 'Pythonic truth testing idiom',
  },
  {
    id: 'pcpp-s2-fc-011',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Line break placement relative to binary operators',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'According to the revised PEP 8 guideline (Knuth style), should line breaks occur before or after binary operators?',
    codeSnippet: `# Style A (Break after):
income = (gross_wages +
          taxable_interest +
          dividends)

# Style B (Break before - Knuth style):
income = (gross_wages
          + taxable_interest
          + dividends)`,
    stdoutExpected: 'Style B (break BEFORE binary operator) is the current PEP 8 recommendation',
    explanationTitle: 'Binary Operator Line Breaks in PEP 8',
    explanationText:
      'Following Donald Knuth\'s mathematical typesetting convention, PEP 8 recommends breaking before binary operators. This keeps operators aligned down the left column and improves visual readability.',
    complexityInfo: 'PEP 8 evolution detail',
  },
  {
    id: 'pcpp-s2-fc-012',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Whitespace in slice notation expressions',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How should whitespace be applied around colons in slice notation according to PEP 8?',
    codeSnippet: `# Example Slices:
# 1. simple: seq[low:high]
# 2. step:   seq[low:high:stride]
# 3. complex: seq[low + 1 : high + 1]`,
    stdoutExpected: 'Colons act like binary operators: equal spacing on both sides when expressions are complex; no spaces if simple',
    explanationTitle: 'PEP 8 Slice Formatting Rules',
    explanationText:
      'In a slice, the colon acts like a binary operator. If one side has an operator with spaces, both sides of the colon must have equal whitespace: "ham[lower + offset : upper + offset]". In simple slices, no spaces: "ham[1:9]".',
    complexityInfo: 'Detailed PEP 8 spacing rule',
  },
  {
    id: 'pcpp-s2-fc-013',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Bare except clauses and Exception specificity',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does PEP 8 explicitly forbid bare "except:" clauses without specifying an exception class?',
    codeSnippet: `# Dangerous pattern:
try:
    process_task()
except:
    pass  # What does this silently intercept?`,
    stdoutExpected: 'A bare except intercepts SystemExit, KeyboardInterrupt (Ctrl+C), and hides bugs',
    explanationTitle: 'Dangers of Bare Except Clauses',
    explanationText:
      'A bare "except:" catches BaseException, which includes SystemExit and KeyboardInterrupt, making it hard to terminate a program with Ctrl+C and masking unrelated bugs (like typos causing NameError). Always specify "except Exception:" at minimum.',
    complexityInfo: 'Core Python safety guideline',
  },
  {
    id: 'pcpp-s2-fc-014',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Explicit vs implicit return statements in functions',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is PEP 8\'s rule regarding return statements when a function returns a value in some code paths?',
    codeSnippet: `def compute(x):
    if x > 0:
        return math.sqrt(x)
    # If x <= 0, no return statement written!`,
    stdoutExpected: 'All return paths must be explicit: an explicit "return None" must be written at the end',
    explanationTitle: 'Consistent Return Statements',
    explanationText:
      'PEP 8 dictates: Be consistent in return statements. If any return statement returns an expression, all return statements should do so. If any return statement has no expression, any code paths where no return is reached should explicitly end with "return None".',
    complexityInfo: 'PEP 8 programming recommendation',
  },
  {
    id: 'pcpp-s2-fc-015',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Method parameter naming: self and cls conventions',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What are the prescribed names for the first argument to instance methods and class methods in PEP 8?',
    codeSnippet: `class Service:
    def execute(first_arg):     # What should first_arg be?
        pass

    @classmethod
    def factory(second_arg):    # What should second_arg be?
        pass`,
    stdoutExpected: '"self" for instance methods; "cls" for class methods',
    explanationTitle: 'Self and Cls Naming Standards',
    explanationText:
      'Always use "self" for the first argument to instance methods. Always use "cls" for the first argument to class methods. Renaming these causes severe code review violations and breaks automated static analysis tools.',
    complexityInfo: 'Universal Python convention',
  },
  {
    id: 'pcpp-s2-fc-016',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Type annotations and default argument spacing',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How should spaces be placed around the "=" sign when combining default values with type annotations in PEP 8?',
    codeSnippet: `# Case 1: Without type annotation
def func1(x=1): pass

# Case 2: With type annotation
def func2(x: int = 1): pass`,
    stdoutExpected: 'No spaces around "=" without type annotations; use spaces around "=" when combining with type annotations',
    explanationTitle: 'Whitespace in Default Parameters',
    explanationText:
      'When not using type annotations, do NOT use spaces around the "=" in default arguments: "def f(x=1):". However, when combining an argument annotation with a default value, DO use spaces around the "=": "def f(x: int = 1):".',
    complexityInfo: 'Detailed PEP 8 nuance',
  },
  {
    id: 'pcpp-s2-fc-017',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Compound statements on a single line',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What does PEP 8 advise regarding compound statements on a single line like "if foo: bar()"?',
    codeSnippet: `# Single-line compound statements:
if foo: bar()
while True: do_work()`,
    stdoutExpected: 'Compound statements (multiple statements on the same line) are generally discouraged',
    explanationTitle: 'One Statement Per Line',
    explanationText:
      'PEP 8 generally discourages compound statements on a single line. Writing the body of an if, while, or for loop indented on a separate line significantly improves debuggability, line coverage reporting, and readability.',
    complexityInfo: 'PEP 8 readability standard',
  },
  {
    id: 'pcpp-s2-fc-018',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Named function definition vs assigning lambda to identifier',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does PEP 8 discourage assigning a lambda directly to an identifier (e.g. "f = lambda x: 2*x")?',
    codeSnippet: `# Discouraged by PEP 8:
f = lambda x: 2 * x

# Recommended by PEP 8:
def f(x):
    return 2 * x`,
    stdoutExpected: 'A "def" statement provides a meaningful __name__ for tracebacks and string representations',
    explanationTitle: 'Def vs Lambda Assignment',
    explanationText:
      'Always use a "def" statement instead of an assignment statement that binds a lambda expression directly to an identifier. Named functions give useful string representations in stack traces and exception tracebacks (instead of "<lambda>").',
    complexityInfo: 'PEP 8 programming recommendation',
  },
  {
    id: 'pcpp-s2-fc-019',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Tools',
    topic: 'Static code analysis tools: pycodestyle, flake8 & pylint',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the relationship between the historical "pep8" package, "pycodestyle", and "flake8"?',
    codeSnippet: `# Command line linters:
# 1. pycodestyle myfile.py
# 2. flake8 myfile.py`,
    stdoutExpected: 'pycodestyle is the official rename of the pep8 tool; flake8 wraps pycodestyle, pyflakes, and McCabe complexity',
    explanationTitle: 'Python Code Quality Tooling Ecosystem',
    explanationText:
      'The original "pep8" tool was renamed to "pycodestyle" to reduce confusion. "flake8" is a popular wrapper that combines pycodestyle (PEP 8 checks), pyflakes (detects logical and syntax bugs), and McCabe (cyclomatic complexity checks).',
    complexityInfo: 'PCPP developer tooling curriculum',
  },
  {
    id: 'pcpp-s2-fc-020',
    track: 'pcpp',
    cardType: 'PCPP 2.1 • PEP 8 Conventions',
    topic: 'Trailing commas in single-element tuples and multi-line literals',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the syntax for a single-element tuple, and why does PEP 8 recommend trailing commas in multi-line structures?',
    codeSnippet: `single = (1,)  # Trailing comma is mandatory for tuple

items = [
    'first_element',
    'second_element',  # Why put a trailing comma here?
]`,
    stdoutExpected: 'Mandatory for 1-tuples; recommended in multi-line literals for cleaner git diffs and easy reordering',
    explanationTitle: 'Trailing Commas in Python',
    explanationText:
      'A trailing comma distinguishes a 1-tuple (1,) from parenthesized expression (1). In multi-line collections, trailing commas prevent accidental string literal concatenation when adding new items and produce clean single-line git diffs.',
    complexityInfo: 'Syntax & version control hygiene',
  },

  // =========================================================================
  // CHAPTER 2.2: PEP 20 (ZEN OF PYTHON) & PEP 257 (DOCSTRINGS) (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcpp-s2-fc-021',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'How to access PEP 20: the "import this" easter egg',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do you display The Zen of Python (PEP 20) in an interactive Python session, and who authored it?',
    codeSnippet: `import this
# What is printed to stdout?`,
    stdoutExpected: 'Prints 19 aphorisms of The Zen of Python; authored by Tim Peters',
    explanationTitle: 'The Zen of Python by Tim Peters',
    explanationText:
      'Executing "import this" prints the 19 guiding principles known as The Zen of Python (PEP 20), written in 1999 by Python core developer Tim Peters as an easter egg encoded via ROT13 in the standard library file this.py.',
    complexityInfo: 'Fundamental Python philosophy',
  },
  {
    id: 'pcpp-s2-fc-022',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Explicit is better than implicit"',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Give a concrete Python example illustrating "Explicit is better than implicit".',
    codeSnippet: `# Implicit (discouraged):
from module import *

# Explicit (encouraged):
from module import calculate_tax, format_currency`,
    stdoutExpected: 'Explicit naming, parameter passing, and imports over hidden side-effects or magic behavior',
    explanationTitle: 'Explicit Over Implicit in Python',
    explanationText:
      '"Explicit is better than implicit" means code should state its intent clearly. Explicit imports specify exactly what dependencies are needed; explicit arguments in functions avoid reliance on hidden global state.',
    complexityInfo: 'Core PEP 20 principle',
  },
  {
    id: 'pcpp-s2-fc-023',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Flat is better than nested"',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do guard clauses and early returns embody the Zen principle "Flat is better than nested"?',
    codeSnippet: `# Deeply nested:
def handle(user):
    if user:
        if user.is_active:
            if user.has_permission:
                return user.data

# Flat with guard clauses:
def handle(user):
    if not user or not user.is_active or not user.has_permission:
        return None
    return user.data`,
    stdoutExpected: 'Guard clauses eliminate nested indentation levels and reduce cognitive load',
    explanationTitle: 'Flat Code vs Arrow Anti-Pattern',
    explanationText:
      'Excessive indentation ("arrow anti-pattern") makes control flow difficult to track. Using guard clauses with early returns flattens the execution flow and keeps the main logic at the baseline indentation level.',
    complexityInfo: 'High-yield refactoring pattern',
  },
  {
    id: 'pcpp-s2-fc-024',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Errors should never pass silently. Unless explicitly silenced."',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does Python\'s "contextlib.suppress" embody "Unless explicitly silenced"?',
    codeSnippet: `import os
from contextlib import suppress

# Explicitly silencing a specific expected exception:
with suppress(FileNotFoundError):
    os.remove('temp_cache.txt')`,
    stdoutExpected: 'Errors should propagate unless specifically acknowledged and intentionally suppressed',
    explanationTitle: 'Explicit Exception Handling',
    explanationText:
      'Swallowing all errors with bare "except: pass" conceals catastrophic failures. Using "contextlib.suppress(FileNotFoundError)" or targeted except blocks explicitly announces which exact error is being safely ignored.',
    complexityInfo: 'PEP 20 error handling design',
  },
  {
    id: 'pcpp-s2-fc-025',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "There should be one-- and preferably only one --obvious way to do it."',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does this aphorism contrast Python\'s design philosophy with languages like Perl ("TIMTOWTDI")?',
    codeSnippet: `# The Python way to iterate with indexes:
for idx, item in enumerate(items):
    print(idx, item)`,
    stdoutExpected: 'Python favors one canonical, obvious idiom rather than many redundant competing syntaxes',
    explanationTitle: 'The One Obvious Way Principle',
    explanationText:
      'While Perl celebrated "There\'s more than one way to do it", Python focuses on establishing a single idiomatic solution for common tasks (such as using enumerate() for indexed iteration or list comprehensions for element transformations).',
    complexityInfo: 'Foundational language philosophy',
  },
  {
    id: 'pcpp-s2-fc-026',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Namespaces are one honking great idea -- let\'s do more of those!"',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is a namespace in Python, and what built-in data structure implements it under the hood?',
    codeSnippet: `import math

# math is a namespace!
print(type(math.__dict__))`,
    stdoutExpected: 'A namespace is a mapping from names to objects; implemented via Python dictionaries (__dict__)',
    explanationTitle: 'Namespaces in Python',
    explanationText:
      'Namespaces prevent naming collisions by organizing variables, functions, and classes into distinct scopes (built-in, global/module, enclosing, and local: LEGB). In Python, namespaces are almost always concrete dictionary objects accessible via __dict__.',
    complexityInfo: 'Core architecture concept',
  },
  {
    id: 'pcpp-s2-fc-027',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Docstring definition and the __doc__ attribute',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What makes a string literal qualify as a docstring according to PEP 257, and where is it stored?',
    codeSnippet: `def calculate_area(radius):
    """Calculate the area of a circle given its radius."""
    return 3.14159 * radius ** 2

print(calculate_area.__doc__)`,
    stdoutExpected: 'First statement in a module, function, class, or method; stored in the __doc__ attribute',
    explanationTitle: 'PEP 257 Docstring Storage',
    explanationText:
      'A docstring is a string literal that occurs as the very first statement in a module, function, class, or method definition. The Python compiler automatically assigns this literal to the object\'s __doc__ attribute.',
    complexityInfo: 'PCPP-32-101 Section 2.2 specification',
  },
  {
    id: 'pcpp-s2-fc-028',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Triple double-quotes convention in PEP 257',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What quotes convention is prescribed by PEP 257 for all docstrings (including one-liners)?',
    codeSnippet: `# Correct:
"""Return a foobang."""

# Incorrect:
'''Return a foobang.'''
"Return a foobang."`,
    stdoutExpected: 'Always use triple double quotes ("""...""") even for one-line docstrings',
    explanationTitle: 'Triple Double Quotes Mandate',
    explanationText:
      'PEP 257 specifies: For consistency, always use """triple double quotes""" around docstrings. Use r"""raw triple double quotes""" if you use any backslashes in your docstrings (e.g. regex patterns or LaTeX).',
    complexityInfo: 'PEP 257 formatting standard',
  },
  {
    id: 'pcpp-s2-fc-029',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'One-line docstring conventions: imperative mood and punctuation',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Which grammatical mood and punctuation must be used for one-line docstrings according to PEP 257?',
    codeSnippet: `# Option A:
"""Returns the pathname of the file."""

# Option B:
"""Return the pathname of the file."""`,
    stdoutExpected: 'Option B is correct: imperative mood ("Do this", not "Does this") ending with a period',
    explanationTitle: 'Imperative Mood in PEP 257',
    explanationText:
      'The docstring is a phrase ending in a period. It prescribes the function or method\'s effect as a command: "Do this", "Return that", not descriptive ("Returns that") or present participle ("Returning that"). Closing quotes remain on the same line.',
    complexityInfo: 'High-frequency exam distinction',
  },
  {
    id: 'pcpp-s2-fc-030',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Multi-line docstring structure and blank line separator',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Describe the structural layout required for multi-line docstrings by PEP 257.',
    codeSnippet: `def complex_operation(arg1, arg2):
    """Summary line ending with a period.

    Detailed paragraph explaining prerequisites,
    behavior, and side effects.

    Args:
        arg1: Explanation of arg1.
    """
    pass`,
    stdoutExpected: 'Summary line, followed by 1 blank line, followed by detailed body, closing quotes on separate line',
    explanationTitle: 'Multi-line Docstring Layout',
    explanationText:
      'Multi-line docstrings consist of a summary line just like a one-line docstring, followed by a blank line, followed by a more elaborate description. The closing quotes should be on a line by themselves.',
    complexityInfo: 'PEP 257 structural specification',
  },
  {
    id: 'pcpp-s2-fc-031',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Class docstring contents and constructor separation',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'According to PEP 257, what should be documented in a class docstring vs its __init__ method?',
    codeSnippet: `class DatabaseConnector:
    """Manage connection pooling and transactional lifecycles."""

    def __init__(self, host: str, port: int = 5432):
        """Initialize the connector with host endpoint and port."""
        pass`,
    stdoutExpected: 'Class docstring summarizes purpose and public methods; __init__ documents instantiation parameters',
    explanationTitle: 'Class vs Constructor Documentation',
    explanationText:
      'The class docstring should summarize its behavior and list public methods and instance variables. Constructor parameters should either be documented in the __init__ method\'s docstring or in the class docstring (consistent per project style).',
    complexityInfo: 'Class documentation architecture',
  },
  {
    id: 'pcpp-s2-fc-032',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Module docstring position and contents',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Where is a module docstring placed in a file and what does it typically contain?',
    codeSnippet: `"""Utility functions for crypto hash calculations.

This module provides SHA-256 and HMAC wrappers...
"""

import hashlib
import hmac`,
    stdoutExpected: 'At the very top of the file before any import statements; lists exported classes, functions, and exceptions',
    explanationTitle: 'Module Docstrings in PEP 257',
    explanationText:
      'The docstring for a module should be placed at the very top of the file, prior to any imports. It lists the classes, exceptions, and functions that are exported by the module, along with a high-level summary of its purpose.',
    complexityInfo: 'Standard module header structure',
  },
  {
    id: 'pcpp-s2-fc-033',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'inspect.getdoc() vs raw __doc__ attribute',
    category: 'T2: Best Practices',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What advantage does inspect.getdoc(obj) have over directly accessing obj.__doc__?',
    codeSnippet: `import inspect

class Worker:
    """First line.
    
    Indented second line.
    """
    pass

print(repr(Worker.__doc__))
print(repr(inspect.getdoc(Worker)))`,
    stdoutExpected: 'inspect.getdoc cleans up uniform leading indentation using cleandoc and handles inherited docstrings',
    explanationTitle: 'inspect.getdoc() vs __doc__',
    explanationText:
      'While __doc__ contains the raw unstripped string literal with all leading indentation from the source code, inspect.getdoc() strips uniform indentation using inspect.cleandoc() and falls back to inherited docstrings if available.',
    complexityInfo: 'Advanced introspection utility',
  },
  {
    id: 'pcpp-s2-fc-034',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Docstring styles: Sphinx (reST), Google style & NumPy style',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Identify the documentation style used in: (1) ":param x: description", (2) "Args:\\n    x: description".',
    codeSnippet: `# Style 1:
"""
:param x: The integer multiplier.
:returns: Scaled result.
"""

# Style 2:
"""
Args:
    x (int): The integer multiplier.
Returns:
    int: Scaled result.
"""`,
    stdoutExpected: 'Style 1 is Sphinx / reStructuredText (reST); Style 2 is Google style docstring',
    explanationTitle: 'Common Docstring Formats',
    explanationText:
      'Sphinx uses reStructuredText field lists (:param, :type, :returns:). Google style uses indented sections (Args:, Returns:, Raises:). NumPy style uses underlined headers (Parameters\\n----------).',
    complexityInfo: 'Python documentation tooling',
  },
  {
    id: 'pcpp-s2-fc-035',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Simple is better than complex. Complex is better than complicated."',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the semantic distinction between "complex" and "complicated" in software design according to PEP 20?',
    codeSnippet: `# Complex: Has many interconnected parts necessary to solve an inherently hard problem.
# Complicated: Disorganized, convoluted, unnecessarily confusing, and poorly structured.`,
    stdoutExpected: 'Complex reflects inherent problem difficulty; Complicated is unnecessary architectural entanglement',
    explanationTitle: 'Complex vs Complicated',
    explanationText:
      'If a problem is inherently challenging, a complex solution with cleanly decoupled parts is acceptable. However, complicated code (spaghetti logic, poor abstractions, needless indirection) should always be rejected.',
    complexityInfo: 'Architectural evaluation principle',
  },
  {
    id: 'pcpp-s2-fc-036',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Now is better than never. Although never is often better than *right* now."',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What cautionary engineering advice does "Although never is often better than *right* now" convey?',
    codeSnippet: `# Rushing an unvetted feature or premature architectural release into production`,
    stdoutExpected: 'Do not rush premature, unvetted, or poorly designed implementations that incur permanent technical debt',
    explanationTitle: 'Prudence Over Premature Action',
    explanationText:
      'While procrastination prevents progress ("Now is better than never"), rushing a half-baked or poorly designed feature into a public API creates irreversible technical debt that must be supported forever ("Never is often better than *right* now").',
    complexityInfo: 'API design philosophy',
  },
  {
    id: 'pcpp-s2-fc-037',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "If the implementation is hard to explain, it\'s a bad idea."',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does code maintainability connect to the aphorisms on explaining an implementation?',
    codeSnippet: `# "If the implementation is hard to explain, it's a bad idea.
# If the implementation is easy to explain, it may be a good idea."`,
    stdoutExpected: 'Clear conceptual models lead to maintainable code; clever, obscure hacks lead to high defect rates',
    explanationTitle: 'Explainability as Design Metric',
    explanationText:
      'If you cannot explain how your solution works to a peer in simple terms, the design is almost certainly flawed. Conversely, simplicity is a necessary but not sufficient condition ("it *may* be a good idea").',
    complexityInfo: 'Code review standard',
  },
  {
    id: 'pcpp-s2-fc-038',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Docstring stripping: how Python treats indentation in multi-line docstrings',
    category: 'T2: Best Practices',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do docstring processors calculate and strip leading whitespace from the second line onwards?',
    codeSnippet: `def demo():
    """First line.
    Second line indented with 4 spaces.
    Third line indented with 4 spaces.
    """
    pass`,
    stdoutExpected: 'The uniform indentation of all non-empty lines following the first line is stripped',
    explanationTitle: 'PEP 257 Indentation Stripping Algorithm',
    explanationText:
      'The first line\'s indentation is determined by its position after the opening quotes. For lines 2+, the minimum leading whitespace across all non-blank lines is computed as the base indent and stripped by docstring parsers.',
    complexityInfo: 'PEP 257 parser specification',
  },
  {
    id: 'pcpp-s2-fc-039',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • The Zen of Python',
    topic: 'Aphorism: "Special cases aren\'t special enough to break the rules. Although practicality beats purity."',
    category: 'T2: Best Practices',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does Python balance syntactic consistency with practical usability according to these paired aphorisms?',
    codeSnippet: `# Consistency: In Python, everything is an object.
# Practicality: Special syntax shortcuts (like [x for x in data]) exist for developer productivity.`,
    stdoutExpected: 'Language rules must be uniformly applied, but practical developer ergonomics take precedence over dogmatism',
    explanationTitle: 'Consistency vs Pragmatism',
    explanationText:
      'While general patterns and clean design must be protected from ad-hoc exceptions, dogmatic purity that makes code unreadable or inefficient should yield to pragmatic, practical solutions.',
    complexityInfo: 'Core balance of Python design',
  },
  {
    id: 'pcpp-s2-fc-040',
    track: 'pcpp',
    cardType: 'PCPP 2.2 • PEP 257 Docstrings',
    topic: 'Package docstring in __init__.py',
    category: 'T2: Best Practices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Where should the docstring for an entire Python package be defined?',
    codeSnippet: `# Inside my_package/__init__.py:
"""High-performance network load balancing framework."""`,
    stdoutExpected: 'At the top of the package\'s __init__.py file',
    explanationTitle: 'Package-Level Documentation',
    explanationText:
      'PEP 257 specifies that the docstring for a package (i.e. a directory of modules) should be placed as the docstring of the package\'s __init__.py file. It lists exported sub-packages and primary API interfaces.',
    complexityInfo: 'Package architecture standard',
  },
];
