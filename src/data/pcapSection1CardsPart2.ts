import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 1: CONTROL AND EVALUATIONS (Part 2: Cards 36 to 70)
 * - Chapter 1.2: Module Internals Completion (Cards 36-40)
 * - Chapter 1.3: Package Architecture, __init__.py & __all__ (Cards 41-60)
 * - Chapter 1.4: Standard Library math Module (Cards 61-70)
 */
export const section1CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.2 COMPLETION: INTERNALS & BUILT-INS (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcap-s1-fc-036',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'Executing module as script with -m switch',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What does the command `python -m math` or `python -m unittest` do?',
    codeSnippet: `# Command line: python -m module_name
# Searches sys.path for the module and runs it as top-level script (__main__)
print("Executes module as the __main__ script")`,
    stdoutExpected: 'Executes module as the __main__ script',
    explanationTitle: 'The -m Module Execution Switch',
    explanationText:
      'The `-m` switch tells the Python interpreter to search `sys.path` for the specified module and execute its content as a top-level script, setting `__name__ = "__main__"`.',
    complexityInfo: 'CLI execution mechanics',
  },
  {
    id: 'pcap-s1-fc-037',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'Preventing bytecode file generation',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How can you prevent Python from writing `.pyc` files to disk during execution?',
    codeSnippet: `import sys
# Can run with: python -B script.py
# Or programmatically:
sys.dont_write_bytecode = True
print(sys.dont_write_bytecode)`,
    stdoutExpected: 'True',
    explanationTitle: 'Disabling Bytecode Compilation',
    explanationText:
      'Passing the `-B` command-line switch or setting `sys.dont_write_bytecode = True` prevents Python from writing `.pyc` files into `__pycache__` directories.',
    complexityInfo: 'Interpreter configuration flag',
  },
  {
    id: 'pcap-s1-fc-038',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'Built-in modules compiled into interpreter',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why does the `sys` module lack a `__file__` attribute?',
    codeSnippet: `import sys
print(hasattr(sys, "__file__"))`,
    stdoutExpected: 'False',
    explanationTitle: 'Built-in C Modules Have No __file__',
    explanationText:
      'Modules compiled directly into the Python binary executable (such as `sys` and `builtins`) are not loaded from a disk `.py` file, so they do not possess a `__file__` attribute.',
    complexityInfo: 'Subtle PCAP introspection nuance',
  },
  {
    id: 'pcap-s1-fc-039',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'sys.builtin_module_names tuple',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What sequence contains the names of all modules compiled directly into the interpreter?',
    codeSnippet: `import sys
print(type(sys.builtin_module_names).__name__)
print("sys" in sys.builtin_module_names)`,
    stdoutExpected: `tuple
True`,
    explanationTitle: 'sys.builtin_module_names Sequence',
    explanationText:
      '`sys.builtin_module_names` is an immutable `tuple` of strings listing the names of all modules compiled directly into the CPython executable.',
    complexityInfo: 'Standard system inspection',
  },
  {
    id: 'pcap-s1-fc-040',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'Module name collision with standard library',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What dangerous error occurs if you name your own script `math.py` and run it?',
    codeSnippet: `# If a local file is named math.py:
# sys.path[0] is the current script directory!
# 'import math' will import the LOCAL file instead of Python's standard math!
print("Local file shadows standard library module")`,
    stdoutExpected: 'Local file shadows standard library module',
    explanationTitle: 'Namespace Shadowing via sys.path[0]',
    explanationText:
      'Because `sys.path[0]` is the directory containing the running script, a local `math.py` or `random.py` will be found first, completely masking the standard library module and breaking imports.',
    complexityInfo: 'Major real-world trap highlighted in PCAP',
  },

  // =========================================================================
  // CHAPTER 1.3: PACKAGE ARCHITECTURE, __INIT__.PY & __ALL__ (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcap-s1-fc-041',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Regular package definition in PCAP syllabus',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What special file must a directory contain to be recognized as a regular Python package in PCAP?',
    codeSnippet: `# Directory tree:
# my_package/
#    __init__.py
#    submodule.py
print("__init__.py file")`,
    stdoutExpected: '__init__.py file',
    explanationTitle: '__init__.py Package Marker',
    explanationText:
      'In Python (and specifically defined on the PCAP-31-03 exam), a directory must contain an `__init__.py` file to be recognized as a regular package.',
    complexityInfo: 'Core PCAP syllabus requirement',
  },
  {
    id: 'pcap-s1-fc-042',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Can __init__.py be completely empty?',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Is a package valid if its `__init__.py` file contains zero bytes (empty file)?',
    codeSnippet: `# An empty __init__.py is 100% valid.
# It serves as a marker for Python to recognize the directory as a package.
print("Yes, __init__.py can be completely empty")`,
    stdoutExpected: 'Yes, __init__.py can be completely empty',
    explanationTitle: 'Empty __init__.py is Completely Valid',
    explanationText:
      'An `__init__.py` file can be completely empty. Its presence alone is sufficient to designate the directory as a package.',
    complexityInfo: 'Basic package mechanics',
  },
  {
    id: 'pcap-s1-fc-043',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Automatic execution of __init__.py upon package import',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'When does the code inside a package\'s `__init__.py` execute?',
    codeSnippet: `# If pkg/__init__.py contains: print("pkg initialized")
# In main script:
# import pkg.service
# Output: "pkg initialized" executes before service is imported
print("Executes automatically on the first import of the package or its submodules")`,
    stdoutExpected: 'Executes automatically on the first import of the package or its submodules',
    explanationTitle: '__init__.py Execution Trigger',
    explanationText:
      'When a package or any of its modules or subpackages is imported for the first time, its `__init__.py` file is immediately executed to initialize the package namespace.',
    complexityInfo: 'Package initialization sequence',
  },
  {
    id: 'pcap-s1-fc-044',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Package dotted hierarchy notation',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How are subpackages and submodules delimited in Python import paths?',
    codeSnippet: `# Directory: outer_pkg/inner_pkg/module.py
# Import statement:
# import outer_pkg.inner_pkg.module
print("Dotted notation using dot '.' delimiter")`,
    stdoutExpected: "Dotted notation using dot '.' delimiter",
    explanationTitle: 'Dotted Module Names',
    explanationText:
      'Python uses dots `.` to separate directory layers: `import package.subpackage.module`. Each dot reflects one nested directory level containing an `__init__.py`.',
    complexityInfo: 'Dotted import path syntax',
  },
  {
    id: 'pcap-s1-fc-045',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Order of __init__.py execution in nested packages',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'In what order do `__init__.py` files run when executing `import pack.subpack.mod`?',
    codeSnippet: `# 1. pack/__init__.py
# 2. pack/subpack/__init__.py
# 3. pack/subpack/mod.py
print("Parent __init__.py runs first, then child __init__.py, then target module")`,
    stdoutExpected: 'Parent __init__.py runs first, then child __init__.py, then target module',
    explanationTitle: 'Hierarchical Execution Order',
    explanationText:
      'Python executes the package hierarchy top-down: first the top-level package `__init__.py`, then the subpackage `__init__.py`, and finally the target module code itself.',
    complexityInfo: 'Nested initialization order',
  },
  {
    id: 'pcap-s1-fc-046',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Automatic submodule availability after import package',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'If `pkg` has a submodule `alpha.py`, does `import pkg` automatically make `pkg.alpha` accessible?',
    codeSnippet: `# Unless pkg/__init__.py explicitly imports alpha:
# import pkg
# pkg.alpha.run() -> Raises AttributeError: module 'pkg' has no attribute 'alpha'
print("No, submodules are not loaded unless imported or loaded in __init__.py")`,
    stdoutExpected: 'No, submodules are not loaded unless imported or loaded in __init__.py',
    explanationTitle: 'Submodules Are Not Auto-Loaded',
    explanationText:
      '`import pkg` only executes `pkg/__init__.py`. It does not search for or load submodules unless `pkg/__init__.py` explicitly imports them or the user runs `import pkg.alpha`.',
    complexityInfo: 'Very common PCAP exam trap',
  },
  {
    id: 'pcap-s1-fc-047',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: '__all__ list variable in __init__.py',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What special variable in `__init__.py` controls which submodules are imported by `from package import *`?',
    codeSnippet: `# In pkg/__init__.py:
__all__ = ["mod_a", "mod_b"]
print(type(__all__).__name__)`,
    stdoutExpected: 'list',
    explanationTitle: '__all__ List Controls Wildcard Imports',
    explanationText:
      '`__all__` is a list of strings defining the public interface of a package or module. When `from package import *` is executed, Python only imports the names listed in `__all__`.',
    complexityInfo: 'Package interface contract',
  },
  {
    id: 'pcap-s1-fc-048',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Wildcard import without __all__ in package',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What happens when `from package import *` is called if `__all__` is NOT defined in `__init__.py`?',
    codeSnippet: `# Without __all__:
# Only names explicitly defined inside __init__.py itself are imported.
# None of the package submodules (e.g. mod1.py, mod2.py) are imported!
print("Only names defined in __init__.py are imported, no submodules")`,
    stdoutExpected: 'Only names defined in __init__.py are imported, no submodules',
    explanationTitle: 'Fallback Behavior of Wildcard Package Import',
    explanationText:
      'If `__all__` is absent in `__init__.py`, `from pkg import *` does NOT import all submodules on the filesystem. It only imports whatever names were defined in `__init__.py`.',
    complexityInfo: 'Subtle package behavior',
  },
  {
    id: 'pcap-s1-fc-049',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: '__all__ inside a regular module',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'If a module defines `__all__ = ["add"]`, what happens to function `multiply` when imported via `from module import *`?',
    codeSnippet: `# In math_tools.py:
# __all__ = ["add"]
# def add(x, y): return x + y
# def multiply(x, y): return x * y

# In main.py:
# from math_tools import *
# add(2, 3) -> 5
# multiply(2, 3) -> NameError: name 'multiply' is not defined
print("multiply is omitted because it is not in __all__")`,
    stdoutExpected: 'multiply is omitted because it is not in __all__',
    explanationTitle: '__all__ Enforces Export Whitelist',
    explanationText:
      '`__all__` acts as a strict whitelist for `from module import *`. Any entity omitted from `__all__` is excluded from wildcard imports, even if it lacks a leading underscore.',
    complexityInfo: 'Export filtering in Python',
  },
  {
    id: 'pcap-s1-fc-050',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Private name convention with leading underscore',
    category: 'T4: Modifiers',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Are names starting with a single underscore (`_helper`) exported by `from module import *`?',
    codeSnippet: `# In module.py:
# public_val = 10
# _private_val = 20

# from module import *
# 'public_val' in locals() -> True
# '_private_val' in locals() -> False
print("Names with leading underscore are excluded by wildcard import")`,
    stdoutExpected: 'Names with leading underscore are excluded by wildcard import',
    explanationTitle: 'Single Underscore Privacy Convention',
    explanationText:
      'By Python convention, identifiers with a leading underscore (e.g. `_helper`) are designated internal/private and are ignored by `from module import *`.',
    complexityInfo: 'Name privacy conventions',
  },
  {
    id: 'pcap-s1-fc-051',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Explicit import of underscored names',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Does Python prevent you from explicitly importing an underscored name like `from module import _secret`?',
    codeSnippet: `# In helper.py: _secret = "xyz"
# In app.py:
# from helper import _secret
# print(_secret) -> "xyz"
print("Explicit import succeeds; underscore is only a convention")`,
    stdoutExpected: 'Explicit import succeeds; underscore is only a convention',
    explanationTitle: 'Underscore Is Non-Enforcing for Explicit Imports',
    explanationText:
      'Python does not have true private variables. An explicit import like `from helper import _secret` or `helper._secret` works without error; leading underscores only block wildcard imports.',
    complexityInfo: 'Python philosophy: "We are all consenting adults"',
  },
  {
    id: 'pcap-s1-fc-052',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Absolute vs relative imports',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What defines an absolute import in Python?',
    codeSnippet: `# Absolute import begins from sys.path root:
# from mypackage.services.payment import process_card
print("Starts resolution from sys.path root")`,
    stdoutExpected: 'Starts resolution from sys.path root',
    explanationTitle: 'Absolute Import Resolution',
    explanationText:
      'An absolute import specifies the full package path starting from an anchor directory listed in `sys.path` (e.g. `from package.subpackage import module`).',
    complexityInfo: 'PEP 328 import syntax',
  },
  {
    id: 'pcap-s1-fc-053',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Explicit relative import with single dot',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What does a single leading dot `.` mean in `from . import config`?',
    codeSnippet: `# Inside a package module (e.g. pkg/service.py):
# from . import config
# Imports 'config' from the SAME current package directory (pkg/)
print("Current package directory")`,
    stdoutExpected: 'Current package directory',
    explanationTitle: 'Single Dot Represents Current Package',
    explanationText:
      'In relative imports, a single dot `.` specifies the current package directory containing the importing module.',
    complexityInfo: 'Relative import dot notation',
  },
  {
    id: 'pcap-s1-fc-054',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Explicit relative import with double dots',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What does double leading dots `..` mean in `from ..utils import helpers`?',
    codeSnippet: `# Inside pkg/subpkg/worker.py:
# from ..utils import helpers
# Traverses up one level to parent package 'pkg', then into 'utils'
print("Parent package directory (one level up)")`,
    stdoutExpected: 'Parent package directory (one level up)',
    explanationTitle: 'Double Dot Represents Parent Package',
    explanationText:
      'Two dots `..` indicate traversing up one level to the parent package directory, analogous to `cd ..` in filesystem navigation.',
    complexityInfo: 'Multi-level package traversal',
  },
  {
    id: 'pcap-s1-fc-055',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Syntax restriction on relative imports',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Is the syntax `import .module` valid in Python?',
    codeSnippet: `# import .sibling_module
# Raises: SyntaxError: invalid syntax
print("Invalid syntax: relative imports MUST use 'from ... import ...'")`,
    stdoutExpected: "Invalid syntax: relative imports MUST use 'from ... import ...'",
    explanationTitle: 'from ... import Requirement for Relative Imports',
    explanationText:
      'Relative imports can only be written using the `from .module import name` or `from . import module` form. Using `import .module` is a syntax error.',
    complexityInfo: 'Syntactic rule on PCAP',
  },
  {
    id: 'pcap-s1-fc-056',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Package __path__ attribute',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What special attribute does a package module have that a single-file module lacks?',
    codeSnippet: `import os
print(hasattr(os, "__path__"))
import math
print(hasattr(math, "__path__"))`,
    stdoutExpected: `True
False`,
    explanationTitle: '__path__ Attribute Distinguishes Packages',
    explanationText:
      'Package modules possess a `__path__` attribute (initialized as a sequence of directory strings), which Python uses to locate submodules. Regular single-file modules do not have `__path__`.',
    complexityInfo: 'Package identification attribute',
  },
  {
    id: 'pcap-s1-fc-057',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Accessing variables defined in __init__.py',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'If `pkg/__init__.py` defines `VERSION = "2.0"`, how is it accessed after `import pkg`?',
    codeSnippet: `# In pkg/__init__.py: VERSION = "2.0"
# In app.py:
# import pkg
# print(pkg.VERSION) -> "2.0"
print("Accessible directly as package attribute: pkg.VERSION")`,
    stdoutExpected: 'Accessible directly as package attribute: pkg.VERSION',
    explanationTitle: '__init__.py Defines Package Attributes',
    explanationText:
      'Variables, functions, and classes defined within a package\'s `__init__.py` file become direct attributes of the imported package object.',
    complexityInfo: 'Package namespace composition',
  },
  {
    id: 'pcap-s1-fc-058',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Namespace packages without __init__.py (PEP 420)',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What feature introduced in Python 3.3 (PEP 420) allows packages across directories without `__init__.py`?',
    codeSnippet: `# Python 3.3+ allows split directories without __init__.py
# known as Namespace Packages.
print("Namespace Packages (PEP 420)")`,
    stdoutExpected: 'Namespace Packages (PEP 420)',
    explanationTitle: 'Namespace Packages (PEP 420)',
    explanationText:
      'Namespace packages allow portion directories of the same package to exist in disparate filesystem locations on `sys.path` without requiring `__init__.py`.',
    complexityInfo: 'Modern Python packaging',
  },
  {
    id: 'pcap-s1-fc-059',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Re-exporting submodules in __init__.py',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How can `__init__.py` expose a submodule function `pkg.connect()` so callers don\'t need `pkg.database.connect()`?',
    codeSnippet: `# In pkg/__init__.py:
# from .database import connect
# In main script:
# import pkg
# pkg.connect()
print("By importing the function into __init__.py namespace")`,
    stdoutExpected: 'By importing the function into __init__.py namespace',
    explanationTitle: 'Facade Pattern via __init__.py',
    explanationText:
      'Importing symbols into `__init__.py` elevates them to the top-level package namespace, creating a clean public API facade for consumers.',
    complexityInfo: 'API design in packages',
  },
  {
    id: 'pcap-s1-fc-060',
    cardType: 'PCAP 1.3 • Package Architecture',
    topic: 'Package directory naming rules',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Can a Python package directory name contain spaces or hyphens (e.g. `my-package`)?',
    codeSnippet: `# In Python:
# import my-package  -> SyntaxError: invalid syntax (hyphen parsed as minus operator)
print("No, package names must be valid Python identifiers (no hyphens or spaces)")`,
    stdoutExpected: 'No, package names must be valid Python identifiers (no hyphens or spaces)',
    explanationTitle: 'Package Identifier Syntax Restrictions',
    explanationText:
      'Because Python import syntax relies on identifier tokens, package directories must follow Python variable naming rules: letters, digits, and underscores, without hyphens or spaces.',
    complexityInfo: 'Python syntax constraints',
  },

  // =========================================================================
  // CHAPTER 1.4: STANDARD LIBRARY MATH MODULE (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcap-s1-fc-061',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.ceil() return value and type',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `math.ceil()` return for `3.2` and `-3.2`, and what is its return type?',
    codeSnippet: `import math
print(math.ceil(3.2))
print(math.ceil(-3.2))
print(type(math.ceil(3.2)).__name__)`,
    stdoutExpected: `4
-3
int`,
    explanationTitle: 'math.ceil() Always Returns int',
    explanationText:
      '`math.ceil(x)` returns the smallest integer greater than or equal to `x` as an `int`. For `-3.2`, the next integer upward towards positive infinity is `-3`.',
    complexityInfo: 'Return type and negative rounding rules',
  },
  {
    id: 'pcap-s1-fc-062',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.floor() return value and type',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `math.floor()` return for `3.8` and `-3.2`?',
    codeSnippet: `import math
print(math.floor(3.8))
print(math.floor(-3.2))
print(type(math.floor(3.8)).__name__)`,
    stdoutExpected: `3
-4
int`,
    explanationTitle: 'math.floor() Downward Integer Rounding',
    explanationText:
      '`math.floor(x)` returns the largest integer less than or equal to `x` as an `int`. For `-3.2`, rounding down towards negative infinity yields `-4`.',
    complexityInfo: 'Negative number floor behavior',
  },
  {
    id: 'pcap-s1-fc-063',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.trunc() truncation toward zero',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How does `math.trunc(-3.8)` differ from `math.floor(-3.8)`?',
    codeSnippet: `import math
print(math.trunc(-3.8))
print(math.floor(-3.8))`,
    stdoutExpected: `-3
-4`,
    explanationTitle: 'math.trunc() Truncates Toward Zero',
    explanationText:
      '`math.trunc(x)` chops off the fractional part, rounding toward zero. Thus `math.trunc(-3.8)` is `-3`, while `math.floor(-3.8)` is `-4`.',
    complexityInfo: 'Subtle difference tested frequently on PCAP',
  },
  {
    id: 'pcap-s1-fc-064',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.factorial() domain and exceptions',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `math.factorial(0)` return, and what exception is raised for negative numbers?',
    codeSnippet: `import math
print(math.factorial(0))
try:
    math.factorial(-1)
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `1
ValueError`,
    explanationTitle: 'math.factorial(0) == 1 and ValueError',
    explanationText:
      '`math.factorial(0)` returns `1`. Passing a negative integer raises `ValueError: factorial() not defined for negative values`. Non-integers raise `TypeError` or `ValueError`.',
    complexityInfo: 'Boundary conditions on factorial',
  },
  {
    id: 'pcap-s1-fc-065',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.sqrt() domain and return type',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the return type of `math.sqrt(16)`, and what happens if passed `-16`?',
    codeSnippet: `import math
res = math.sqrt(16)
print(type(res).__name__, res)
try:
    math.sqrt(-16)
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `float 4.0
ValueError`,
    explanationTitle: 'math.sqrt() Always Returns float',
    explanationText:
      '`math.sqrt()` always returns a `float` (even for perfect squares). It does not support complex numbers; negative arguments raise `ValueError` (use `cmath.sqrt` for complex).',
    complexityInfo: 'Domain error exception type',
  },
  {
    id: 'pcap-s1-fc-066',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.hypot() Euclidean distance',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `math.hypot(3, 4)` calculate and return?',
    codeSnippet: `import math
print(math.hypot(3, 4))
print(type(math.hypot(3, 4)).__name__)`,
    stdoutExpected: `5.0
float`,
    explanationTitle: 'math.hypot() Calculates Euclidean Distance',
    explanationText:
      '`math.hypot(*coordinates)` returns the Euclidean norm `sqrt(x*x + y*y)` as a `float`. For `(3, 4)`, it returns `5.0`.',
    complexityInfo: 'Euclidean distance calculation',
  },
  {
    id: 'pcap-s1-fc-067',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.pi and math.e constants',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What are `math.pi` and `math.e` and what type are they in Python?',
    codeSnippet: `import math
print(type(math.pi).__name__)
print(round(math.pi, 2), round(math.e, 2))`,
    stdoutExpected: `float
3.14 2.72`,
    explanationTitle: 'math.pi and math.e Constants',
    explanationText:
      '`math.pi` (~3.14159265...) and `math.e` (~2.71828182...) are standard IEEE-754 double precision `float` constants defined in the `math` module.',
    complexityInfo: 'Standard mathematical constants',
  },
  {
    id: 'pcap-s1-fc-068',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'Trigonometric functions expect angles in radians',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Do `math.sin()`, `math.cos()`, and `math.tan()` accept angles in degrees or radians?',
    codeSnippet: `import math
# Passing 90 degrees directly:
print(math.sin(90) == 1.0)
# Passing 90 in radians (pi / 2):
print(math.sin(math.pi / 2) == 1.0)`,
    stdoutExpected: `False
True`,
    explanationTitle: 'Trigonometric Functions Use Radians',
    explanationText:
      'All trigonometric functions in Python\'s `math` module (`sin`, `cos`, `tan`, etc.) expect angle arguments in **radians**, not degrees.',
    complexityInfo: 'Classic PCAP angle calculation pitfall',
  },
  {
    id: 'pcap-s1-fc-069',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.radians() and math.degrees() conversions',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How do you convert 180 degrees to radians using the `math` module?',
    codeSnippet: `import math
rad = math.radians(180)
print(rad == math.pi)
deg = math.degrees(math.pi)
print(deg == 180.0)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Angle Conversion Functions',
    explanationText:
      '`math.radians(degrees)` converts angle from degrees to radians. `math.degrees(radians)` converts angle from radians to degrees.',
    complexityInfo: 'Angle unit conversion tools',
  },
  {
    id: 'pcap-s1-fc-070',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'math.pow() vs exponentiation operator **',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the crucial type difference between `math.pow(2, 3)` and `2 ** 3` in Python?',
    codeSnippet: `import math
p1 = math.pow(2, 3)
p2 = 2 ** 3
print(type(p1).__name__, p1)
print(type(p2).__name__, p2)`,
    stdoutExpected: `float 8.0
int 8`,
    explanationTitle: 'math.pow() Always Converts to float',
    explanationText:
      '`math.pow(x, y)` converts its arguments to float and always returns a `float` (`8.0`). The built-in operator `2 ** 3` preserves integer arithmetic and returns an `int` (`8`).',
    complexityInfo: 'Return type distinction tested on PCAP',
  },
];
