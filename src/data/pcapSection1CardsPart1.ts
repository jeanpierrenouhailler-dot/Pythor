import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 1: CONTROL AND EVALUATIONS (Part 1: Cards 1 to 35)
 * - Chapter 1.1: Import Mechanics & Namespaces (Cards 1-20)
 * - Chapter 1.2: Module Internals, sys.path & Bytecode (Cards 21-35)
 */
export const section1CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.1: IMPORT MECHANICS & NAMESPACES (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcap-s1-fc-001',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Basic import statement and namespace binding',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What namespace identifier does `import math` bind into the current local scope?',
    codeSnippet: `import math
print("math" in locals())
print(math.pi > 3)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Module Namespace Binding',
    explanationText:
      '`import math` creates a single variable named `math` in the current namespace referencing the loaded module object. Module attributes are accessed via dot notation `math.<attribute>`.',
    complexityInfo: 'Core namespace isolation mechanics',
  },
  {
    id: 'pcap-s1-fc-002',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'from module import name binding',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'When using `from math import sqrt, pi`, is the module name `math` itself bound in the local scope?',
    codeSnippet: `from math import sqrt, pi
print(sqrt(25))
print("math" in locals())`,
    stdoutExpected: `5.0
False`,
    explanationTitle: 'Selective Attribute Binding',
    explanationText:
      '`from <module> import <name>` imports and binds only the specified identifiers (`sqrt`, `pi`) directly into the local scope. The module identifier `math` is NOT created in the namespace.',
    complexityInfo: 'Frequent PCAP trap regarding name availability',
  },
  {
    id: 'pcap-s1-fc-003',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Module aliasing using as keyword',
    category: 'T4: Modifiers',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What happens to the original module name `math` when using `import math as m`?',
    codeSnippet: `import math as m
print(m.floor(4.9))
try:
    print(math.floor(4.9))
except NameError as e:
    print(type(e).__name__)`,
    stdoutExpected: `4
NameError`,
    explanationTitle: 'Module Aliasing Suppresses Original Name',
    explanationText:
      'The `as` clause binds the module solely to the alias `m`. The original name `math` is not introduced into the local namespace, causing a `NameError` if referenced directly.',
    complexityInfo: 'Core PCAP exam question pattern',
  },
  {
    id: 'pcap-s1-fc-004',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Entity aliasing with from module import entity as alias',
    category: 'T4: Modifiers',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Can individual functions or constants be aliased when imported with `from ... import`?',
    codeSnippet: `from math import factorial as fact
print(fact(4))
try:
    print(factorial(4))
except NameError:
    print("factorial is not defined")`,
    stdoutExpected: `24
factorial is not defined`,
    explanationTitle: 'Selective Entity Aliasing',
    explanationText:
      'Using `from math import factorial as fact` binds the function under the identifier `fact`. The original symbol `factorial` is not imported into the caller scope.',
    complexityInfo: 'Namespace naming rules',
  },
  {
    id: 'pcap-s1-fc-005',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Wildcard import from module import *',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What names are imported by `from module import *` by default?',
    codeSnippet: `# If module has: a = 1, _b = 2, c = 3
# from module import *
# print(a, c) works
# print(_b) raises NameError
print("Wildcard imports all public names (excluding leading underscore)")`,
    stdoutExpected: 'Wildcard imports all public names (excluding leading underscore)',
    explanationTitle: 'Wildcard Import Mechanics',
    explanationText:
      '`from module import *` copies all names in the module into the current namespace, EXCEPT those starting with an underscore (`_`). If `__all__` is defined in the module, only names in `__all__` are imported.',
    complexityInfo: 'Namespace pollution & underscore privacy',
  },
  {
    id: 'pcap-s1-fc-006',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Local definition shadowing imported name',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is printed when a locally defined function has the same name as an imported function?',
    codeSnippet: `from math import sin

def sin(x):
    return "custom sin"

print(sin(0))`,
    stdoutExpected: 'custom sin',
    explanationTitle: 'Variable Shadowing in Same Scope',
    explanationText:
      'Python namespaces are standard dictionaries. The local `def sin` statement rebinds the identifier `sin` to the custom function, overwriting the previously imported math function in the same namespace.',
    complexityInfo: 'Order of execution and binding',
  },
  {
    id: 'pcap-s1-fc-007',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Import statement placed after local variable assignment',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What happens if `from math import pi` executes after `pi = 3.14`?',
    codeSnippet: `pi = 3.14
from math import pi
print(pi > 3.1415)`,
    stdoutExpected: 'True',
    explanationTitle: 'Import Overwrites Previous Binding',
    explanationText:
      'The subsequent import statement binds `pi` to the standard library `math.pi` float constant (~3.14159265...), replacing the prior local value `3.14`.',
    complexityInfo: 'Sequential statement execution',
  },
  {
    id: 'pcap-s1-fc-008',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Single execution of module top-level code (Module caching)',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How many times does Python execute a module top-level code during multiple import statements in the same session?',
    codeSnippet: `# First time a module is imported:
# Python parses, compiles to bytecode, and executes top-level statements.
# Subsequent imports in the same session:
# Python retrieves module from sys.modules cache without re-executing.
print("Executed exactly ONCE")`,
    stdoutExpected: 'Executed exactly ONCE',
    explanationTitle: 'Module Initialization Cache',
    explanationText:
      'Python executes a module initialization code only on the first import. Subsequent `import` statements merely add the reference to the local namespace without re-running top-level code.',
    complexityInfo: 'High-frequency PCAP test concept',
  },
  {
    id: 'pcap-s1-fc-009',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Importing non-existent module exception type',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What exact exception is raised when Python fails to find a module specified in an import statement?',
    codeSnippet: `try:
    import non_existent_super_module
except ModuleNotFoundError as e:
    print(type(e).__name__)
    print(isinstance(e, ImportError))`,
    stdoutExpected: `ModuleNotFoundError
True`,
    explanationTitle: 'ModuleNotFoundError Hierarchy',
    explanationText:
      '`ModuleNotFoundError` is raised when an imported module cannot be located. It is a subclass of `ImportError`, so catching either `ModuleNotFoundError` or `ImportError` handles it.',
    complexityInfo: 'Exception inheritance hierarchy',
  },
  {
    id: 'pcap-s1-fc-010',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Importing non-existent attribute from valid module',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What exception is raised by `from math import quantum_warp`?',
    codeSnippet: `try:
    from math import quantum_warp
except ImportError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'ImportError',
    explanationTitle: 'ImportError on Missing Attribute',
    explanationText:
      'Because `math` exists but `quantum_warp` is not inside it, Python raises `ImportError` (specifically `ImportError: cannot import name ... from math`), NOT `AttributeError`.',
    complexityInfo: 'Distinction between ImportError and AttributeError',
  },
  {
    id: 'pcap-s1-fc-011',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Multiple module imports on a single line',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Is comma-separated importing of multiple modules on one line valid in Python?',
    codeSnippet: `import sys, math, os
print(all(m in locals() for m in ["sys", "math", "os"]))`,
    stdoutExpected: 'True',
    explanationTitle: 'Comma-Separated Import Syntax',
    explanationText:
      'Python allows `import module1, module2, module3`. While PEP 8 recommends separate lines for readability, it is completely valid syntax tested on the PCAP exam.',
    complexityInfo: 'Python syntax standards',
  },
  {
    id: 'pcap-s1-fc-012',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Multiple aliasing in a single line',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Can multiple modules each have their own alias on a single comma-separated import line?',
    codeSnippet: `import math as m, sys as s
print(m.ceil(2.1) + (1 if hasattr(s, "version") else 0))`,
    stdoutExpected: '4',
    explanationTitle: 'Multi-Alias Syntax Validity',
    explanationText:
      'Python permits `import module1 as a1, module2 as a2`. Each module receives its respective alias, and neither original module identifier is bound.',
    complexityInfo: 'Valid syntax constructs',
  },
  {
    id: 'pcap-s1-fc-013',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Conditional module importing',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Does Python allow import statements inside an `if` block?',
    codeSnippet: `flag = True
if flag:
    import math
else:
    import random

print("math" in locals(), "random" in locals())`,
    stdoutExpected: 'True False',
    explanationTitle: 'Dynamic Import in Branching Logic',
    explanationText:
      'In Python, `import` is an executable statement, not a preprocessor directive. It executes dynamically at runtime only when the interpreter evaluates that code path.',
    complexityInfo: 'Python dynamic execution model',
  },
  {
    id: 'pcap-s1-fc-014',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Function-scoped import statement',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the scope of a module name imported inside a function body?',
    codeSnippet: `def compute():
    import math
    return math.sqrt(9)

print(compute())
print("math" in globals())`,
    stdoutExpected: `3.0
False`,
    explanationTitle: 'Function Local Module Scope',
    explanationText:
      'An `import` statement inside a function binds the module identifier only to that function\'s local namespace. It is not accessible in module-level global scope.',
    complexityInfo: 'Scope and lifetime of imported symbols',
  },
  {
    id: 'pcap-s1-fc-015',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'dir() function with imported module parameter',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What does `dir(module)` return for an imported module?',
    codeSnippet: `import math
contents = dir(math)
print(type(contents).__name__)
print("sin" in contents and "pi" in contents)`,
    stdoutExpected: `list
True`,
    explanationTitle: 'dir() Introspection of Modules',
    explanationText:
      '`dir(module)` returns an alphabetically sorted `list` of strings representing all valid attribute and method names defined in the specified module.',
    complexityInfo: 'Module inspection tool',
  },
  {
    id: 'pcap-s1-fc-016',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'dir() function called with zero arguments',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What does `dir()` return when called without any arguments?',
    codeSnippet: `x = 42
names = dir()
print(type(names).__name__)
print("x" in names)`,
    stdoutExpected: `list
True`,
    explanationTitle: 'Current Scope Introspection with dir()',
    explanationText:
      'When called with no arguments, `dir()` returns a sorted list of names currently defined in the local symbol table / scope.',
    complexityInfo: 'Built-in introspection tool',
  },
  {
    id: 'pcap-s1-fc-017',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Parentheses for multi-line imports',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How can multiple imported names be cleanly split across multiple lines without backslashes?',
    codeSnippet: `from math import (
    sin,
    cos,
    tan,
)
print(sin(0) == 0.0)`,
    stdoutExpected: 'True',
    explanationTitle: 'Enclosing Multi-line Imports in Parentheses',
    explanationText:
      'Parentheses allow grouping multiple imported names over multiple lines cleanly according to PEP 8, avoiding trailing backslash line-continuations.',
    complexityInfo: 'PEP 8 import formatting',
  },
  {
    id: 'pcap-s1-fc-018',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Invalid relative import in top-level script',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What happens when you run a standalone script containing `from . import helper` directly?',
    codeSnippet: `# In a standalone script not executed as part of a package:
# from . import helper
# Raises: ImportError: attempted relative import with no known parent package
print("ImportError: no known parent package")`,
    stdoutExpected: 'ImportError: no known parent package',
    explanationTitle: 'Relative Import Restriction in Main Script',
    explanationText:
      'Relative imports rely on `__name__` to determine package structure. When a script is run as `__main__`, it has no package context, making relative dot imports fail with `ImportError`.',
    complexityInfo: 'Advanced packaging trap on PCAP',
  },
  {
    id: 'pcap-s1-fc-019',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Re-importing with importlib.reload',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Which standard library module contains the `reload()` function in Python 3?',
    codeSnippet: `import importlib
print(hasattr(importlib, "reload"))`,
    stdoutExpected: 'True',
    explanationTitle: 'importlib.reload Function',
    explanationText:
      'In Python 3, `reload()` is in the `importlib` standard module (`importlib.reload(module)`). It forces re-parsing and re-execution of the module file.',
    complexityInfo: 'Standard library evolution in Python 3',
  },
  {
    id: 'pcap-s1-fc-020',
    cardType: 'PCAP 1.1 • Import Mechanics',
    topic: 'Circular imports causing AttributeError',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Why do circular imports often produce an `AttributeError` or `ImportError`?',
    codeSnippet: `# module_a imports module_b
# module_b immediately accesses module_a.func()
# At that moment, module_a has not finished executing its definitions!
print("Partially initialized module attribute access fails")`,
    stdoutExpected: 'Partially initialized module attribute access fails',
    explanationTitle: 'Circular Dependency Race Condition',
    explanationText:
      'When module A imports B before defining its own attributes, and B imports A to use those attributes immediately, B encounters an incomplete, partially-initialized module A object.',
    complexityInfo: 'Runtime module lifecycle',
  },

  // =========================================================================
  // CHAPTER 1.2: MODULE INTERNALS, SYS.PATH & BYTECODE (Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcap-s1-fc-021',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: '__name__ attribute in directly executed script',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the string value of `__name__` when a Python file is run directly from the command line?',
    codeSnippet: `# Running: python app.py
# Inside app.py:
print("__name__ == '__main__'")`,
    stdoutExpected: "__name__ == '__main__'",
    explanationTitle: '__name__ Equals "__main__"',
    explanationText:
      'When a script is the top-level entry point invoked directly, the Python runtime automatically sets its special `__name__` attribute to `"__main__"`.',
    complexityInfo: 'Foundational PCAP certification topic',
  },
  {
    id: 'pcap-s1-fc-022',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: '__name__ attribute when file is imported',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the value of `__name__` inside `calc.py` when another script executes `import calc`?',
    codeSnippet: `# Inside calc.py when imported:
# __name__ is set to the module name 'calc'
print("Module's own filename without .py suffix")`,
    stdoutExpected: "Module's own filename without .py suffix",
    explanationTitle: '__name__ Equals Module Identifier',
    explanationText:
      'When imported as a module, `__name__` is set to the module name (the filename without `.py`, or full dotted package path like `pkg.calc`).',
    complexityInfo: 'Distinguishing entry point vs module execution',
  },
  {
    id: 'pcap-s1-fc-023',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'The if __name__ == "__main__": guard idiom',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the primary purpose of the `if __name__ == "__main__":` idiom in Python scripts?',
    codeSnippet: `def add(a, b): return a + b

if __name__ == "__main__":
    # Test suite or CLI runner only runs when directly invoked
    print(add(2, 3))`,
    stdoutExpected: '5',
    explanationTitle: 'Dual-Use Script & Module Guard',
    explanationText:
      'This guard allows a file to execute test or driver code when executed directly, while allowing other files to import its functions without triggering those side effects.',
    complexityInfo: 'Idiomatic Python pattern',
  },
  {
    id: 'pcap-s1-fc-024',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: '__file__ attribute of a module',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What information does the `__file__` attribute of a module provide?',
    codeSnippet: `import os
print(isinstance(os.__file__, str))
print(os.__file__.endswith(".py"))`,
    stdoutExpected: `True
True`,
    explanationTitle: '__file__ Stores File Path',
    explanationText:
      '`__file__` is a string attribute containing the file path from which the module was loaded. Built-in C modules (like `sys`) do not have a `__file__` attribute.',
    complexityInfo: 'Introspection of module source location',
  },
  {
    id: 'pcap-s1-fc-025',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: '__doc__ attribute of a module',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What does a module\'s `__doc__` attribute contain when a docstring is present at the top of the file?',
    codeSnippet: `import math
print(type(math.__doc__).__name__)
print(len(math.__doc__) > 0)`,
    stdoutExpected: `str
True`,
    explanationTitle: '__doc__ Docstring Storage',
    explanationText:
      '`__doc__` contains the first unassigned string literal appearing at the top of the module file. If no docstring is written, `__doc__` evaluates to `None`.',
    complexityInfo: 'Python documentation convention',
  },
  {
    id: 'pcap-s1-fc-026',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'sys.path data structure and type',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the data type of `sys.path` in Python?',
    codeSnippet: `import sys
print(type(sys.path).__name__)`,
    stdoutExpected: 'list',
    explanationTitle: 'sys.path is a Python List',
    explanationText:
      '`sys.path` is a standard mutable Python `list` of directory string paths that Python searches sequentially when attempting to import a module.',
    complexityInfo: 'Core interpreter configuration structure',
  },
  {
    id: 'pcap-s1-fc-027',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'sys.path[0] default search directory',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What directory is placed at `sys.path[0]` when executing a script `python /projects/app.py`?',
    codeSnippet: `# Invoked as: python /projects/app.py
# sys.path[0] will be '/projects'
print("Directory containing the executed script")`,
    stdoutExpected: 'Directory containing the executed script',
    explanationTitle: 'Script Directory Precedence',
    explanationText:
      '`sys.path[0]` is initialized to the directory containing the script used to invoke the interpreter. If running interactively, it is an empty string `""` representing current working directory.',
    complexityInfo: 'Search order precedence in PCAP',
  },
  {
    id: 'pcap-s1-fc-028',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'Runtime modification of sys.path',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Can a running script modify `sys.path` using standard list methods like `insert()` or `append()`?',
    codeSnippet: `import sys
original_len = len(sys.path)
sys.path.append("/custom/modules")
print(len(sys.path) == original_len + 1)
sys.path.pop()`,
    stdoutExpected: 'True',
    explanationTitle: 'Dynamic Path Injection via sys.path',
    explanationText:
      'Because `sys.path` is a regular list, scripts can dynamically alter search paths using `sys.path.append(path)` or `sys.path.insert(0, path)` to prioritize custom directories.',
    complexityInfo: 'Dynamic module resolution',
  },
  {
    id: 'pcap-s1-fc-029',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'sys.path search sequence order',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the full four-step order Python follows when searching directories in `sys.path`?',
    codeSnippet: `# 1. Current script's home directory (sys.path[0])
# 2. Directories listed in PYTHONPATH environment variable
# 3. Standard library directories
# 4. Third-party site-packages directories
print("Script dir -> PYTHONPATH -> Standard Lib -> site-packages")`,
    stdoutExpected: 'Script dir -> PYTHONPATH -> Standard Lib -> site-packages',
    explanationTitle: 'The Four-Step Search Sequence',
    explanationText:
      'Python searches the script directory first, then any directories set in `PYTHONPATH`, then the standard library installation paths, and finally third-party site-packages.',
    complexityInfo: 'PCAP syllabus exact objective',
  },
  {
    id: 'pcap-s1-fc-030',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'sys.modules dictionary cache',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What data structure is `sys.modules` and what role does it play during imports?',
    codeSnippet: `import sys, math
print(type(sys.modules).__name__)
print("math" in sys.modules)`,
    stdoutExpected: `dict
True`,
    explanationTitle: 'sys.modules Cache Mapping',
    explanationText:
      '`sys.modules` is a Python dictionary that maps module names to already loaded module objects. When an import statement executes, Python checks `sys.modules` first to avoid reloading.',
    complexityInfo: 'Internal runtime caching mechanism',
  },
  {
    id: 'pcap-s1-fc-031',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'PYTHONPATH environment variable function',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How does the operating system environment variable `PYTHONPATH` affect Python?',
    codeSnippet: `# In shell: export PYTHONPATH=/opt/shared/lib
# In Python:
# The directories from PYTHONPATH are automatically inserted into sys.path
print("Augments sys.path before standard library paths")`,
    stdoutExpected: 'Augments sys.path before standard library paths',
    explanationTitle: 'PYTHONPATH Environment Variable',
    explanationText:
      '`PYTHONPATH` has a format similar to shell `PATH`. Its listed directories are parsed at interpreter startup and inserted into `sys.path` right after the script directory.',
    complexityInfo: 'OS-level interpreter configuration',
  },
  {
    id: 'pcap-s1-fc-032',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'Python bytecode .pyc file purpose',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Does Python bytecode (.pyc) make execution speed faster, or load time faster?',
    codeSnippet: `# Bytecode (.pyc) caches compiled bytecode
# It avoids re-parsing source code on subsequent loads.
# Execution speed (runtime loops/math) is IDENTICAL.
print("Faster load time only (not faster runtime execution)")`,
    stdoutExpected: 'Faster load time only (not faster runtime execution)',
    explanationTitle: 'Bytecode Speeds Up Loading, Not Execution',
    explanationText:
      'A common PCAP trap: `.pyc` files contain pre-compiled bytecode which speeds up the *loading/importing* phase of a program. Once loaded into the virtual machine, execution speed is identical.',
    complexityInfo: 'Classic certification trap question',
  },
  {
    id: 'pcap-s1-fc-033',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: '__pycache__ directory in Python 3',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Where does Python 3 store generated `.pyc` compiled bytecode files?',
    codeSnippet: `# Python 3 creates a subdirectory named __pycache__
# where .py files reside.
print("__pycache__ subdirectory")`,
    stdoutExpected: '__pycache__ subdirectory',
    explanationTitle: '__pycache__ Directory Standard',
    explanationText:
      'In Python 3 (PEP 3147), compiled bytecode files are stored in a subdirectory named `__pycache__` alongside the `.py` source files, preventing root directory clutter.',
    complexityInfo: 'Python 3 packaging standard',
  },
  {
    id: 'pcap-s1-fc-034',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: '.pyc file naming convention',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the naming format of a compiled bytecode file inside `__pycache__`?',
    codeSnippet: `# Format: <name>.<interpreter-tag>.pyc
# Example for helper.py in CPython 3.10:
# helper.cpython-310.pyc
print("name.cpython-version.pyc")`,
    stdoutExpected: 'name.cpython-version.pyc',
    explanationTitle: 'PEP 3147 Bytecode Naming Format',
    explanationText:
      'Bytecode files include the Python implementation and version tag (e.g. `cpython-310`), allowing multiple Python versions to share the same `__pycache__` without collision.',
    complexityInfo: 'PEP 3147 specification',
  },
  {
    id: 'pcap-s1-fc-035',
    cardType: 'PCAP 1.2 • Module Internals',
    topic: 'When does Python recompile a .py file to .pyc?',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How does Python know when a `.pyc` bytecode file is outdated and needs to be recompiled?',
    codeSnippet: `# Python checks the modification timestamp and file size
# (or SIP hash) of the source .py file against the .pyc header.
print("Source file timestamp or hash is newer than the .pyc file")`,
    stdoutExpected: 'Source file timestamp or hash is newer than the .pyc file',
    explanationTitle: 'Automatic Bytecode Invalidation',
    explanationText:
      'When importing, Python compares the source file last modified timestamp and size stored inside the `.pyc` header. If the `.py` file has been modified, Python automatically recompiles it.',
    complexityInfo: 'Compilation freshness checking',
  },
];
