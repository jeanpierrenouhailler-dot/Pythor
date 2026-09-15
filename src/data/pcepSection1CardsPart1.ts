import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 1: COMPUTER PROGRAMMING & PYTHON FUNDAMENTALS (Part 1: Cards 1 to 35)
 * - Chapter 1.1: Fundamentals of Computer Programming & Execution (Cards 1-20)
 * - Chapter 1.2: Literals, Numeric Types, Booleans & Scientific Notation (Cards 21-35)
 */
export const pcepSection1CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.1: FUNDAMENTALS OF COMPUTER PROGRAMMING & EXECUTION (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcep-s1-fc-001',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Compilation vs Interpretation',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How does an interpreted language like Python execute source code compared to a compiled language like C/C++?',
    codeSnippet: `# Python execution model:
# source code (.py) -> bytecode (.pyc) -> Python Virtual Machine (PVM)
print("Interpreted execution")`,
    stdoutExpected: 'Interpreted execution',
    explanationTitle: 'Interpreter Execution Model',
    explanationText:
      'A compiler translates the entire source code into native machine code beforehand, producing a standalone binary executable. An interpreter translates and executes source code line-by-line (or via intermediate bytecode on a Virtual Machine like CPython PVM) directly at runtime, without pre-generating native machine binaries.',
    complexityInfo: 'Core PCEP Section 1 objective: compilation vs interpretation',
  },
  {
    id: 'pcep-s1-fc-002',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Python Bytecode & the .pyc Cache',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the role of Python bytecode stored in __pycache__ (.pyc files)?',
    codeSnippet: `# When a Python module is imported, Python compiles it to bytecode:
# .pyc files contain platform-independent bytecode instructions.
print("Bytecode speeds up subsequent module load times")`,
    stdoutExpected: 'Bytecode speeds up subsequent module load times',
    explanationTitle: 'CPython Bytecode Compilation',
    explanationText:
      'CPython automatically compiles imported source code into intermediate bytecode (.pyc) stored inside the `__pycache__` directory. Bytecode is not machine code; it is a platform-independent sequence of virtual instructions executed by the Python Virtual Machine (PVM). It avoids re-parsing the source code if the file has not been modified.',
    complexityInfo: 'PCEP exam frequently asks about bytecode role and PVM',
  },
  {
    id: 'pcep-s1-fc-003',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'CPython Reference Implementation',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is CPython, and what programming language is it written in?',
    codeSnippet: `import platform
print(platform.python_implementation())`,
    stdoutExpected: 'CPython',
    explanationTitle: 'Reference Implementation of Python',
    explanationText:
      'CPython is the official, default reference implementation of the Python programming language maintained by the Python Software Foundation (PSF). It is written in C. Alternative implementations include Jython (Java), IronPython (.NET/C#), and PyPy (written in RPython with a JIT compiler).',
    complexityInfo: 'Python implementations are specifically listed in the PCEP syllabus',
  },
  {
    id: 'pcep-s1-fc-004',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'PyPy and JIT Compilation',
    category: 'Foundations',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Which Python implementation features a Just-In-Time (JIT) compiler for faster execution speed?',
    codeSnippet: `# Implementations: CPython, Jython, IronPython, PyPy
implementation = "PyPy"
feature = "JIT compiler"
print(f"{implementation}: {feature}")`,
    stdoutExpected: 'PyPy: JIT compiler',
    explanationTitle: 'PyPy JIT Engine',
    explanationText:
      'PyPy is an alternative Python implementation compliant with Python 3 that features a Just-In-Time (JIT) compiler. The JIT identifies frequently executed code paths ("hot spots") and dynamically translates bytecode directly into native host machine code, often offering significant speedups.',
    complexityInfo: 'Differentiates PyPy from Jython and IronPython in PCEP testing',
  },
  {
    id: 'pcep-s1-fc-005',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Jython Implementation',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What target environment does Jython compile Python code for?',
    codeSnippet: `# Jython compiles Python code directly into Java bytecode (.class)
# running on the Java Virtual Machine (JVM).
target = "Java Virtual Machine (JVM)"
print(target)`,
    stdoutExpected: 'Java Virtual Machine (JVM)',
    explanationTitle: 'Jython Platform Integration',
    explanationText:
      'Jython (formerly JPython) is an implementation of Python written in Java. It compiles Python source code into Java bytecode that runs on the Java Virtual Machine (JVM), allowing direct two-way interoperability with Java classes and libraries.',
    complexityInfo: 'PCEP syllabus: Python implementations (CPython, Jython, IronPython, PyPy)',
  },
  {
    id: 'pcep-s1-fc-006',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'IronPython Implementation',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Which framework and virtual machine is IronPython designed to run on?',
    codeSnippet: `# IronPython is tightly integrated with Microsoft .NET
platform_target = ".NET Common Language Runtime (CLR)"
print(platform_target)`,
    stdoutExpected: '.NET Common Language Runtime (CLR)',
    explanationTitle: 'IronPython and .NET',
    explanationText:
      'IronPython is an open-source implementation of Python written in C# targeting the Microsoft .NET Framework and Common Language Runtime (CLR). It allows seamless access to all .NET framework libraries from Python code.',
    complexityInfo: 'Common multi-choice question on PCEP exam',
  },
  {
    id: 'pcep-s1-fc-007',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Python 2 vs Python 3 Incompatibility',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Is Python 3 backward-compatible with Python 2, and what happened to the print statement?',
    codeSnippet: `# In Python 2: print "Hello" (statement)
# In Python 3: print("Hello") (built-in function)
print("Python 3 is intentionally not backward-compatible")`,
    stdoutExpected: 'Python 3 is intentionally not backward-compatible',
    explanationTitle: 'Python 2 vs Python 3 Divergence',
    explanationText:
      'Python 3 was designed to rectify fundamental language flaws and is deliberately not backward-compatible with Python 2. Key differences include `print` becoming a function requiring parentheses, string literals being Unicode by default, and integer division `/` returning float instead of truncated int.',
    complexityInfo: 'Core historical fact tested in PCEP entry-level exams',
  },
  {
    id: 'pcep-s1-fc-008',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Python Creator & BDFL',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Who created the Python programming language, and what title did he hold?',
    codeSnippet: `creator = "Guido van Rossum"
title = "Benevolent Dictator For Life (BDFL)"
print(f"{creator} - {title}")`,
    stdoutExpected: 'Guido van Rossum - Benevolent Dictator For Life (BDFL)',
    explanationTitle: 'Origins of Python',
    explanationText:
      'Python was conceived in the late 1980s by Guido van Rossum at CWI in the Netherlands and first released in 1991. The name was inspired by BBC’s comedy series "Monty Python\'s Flying Circus". Guido served as Python’s BDFL (Benevolent Dictator For Life) until stepping down in 2018.',
    complexityInfo: 'PCEP syllabus historical objective',
  },
  {
    id: 'pcep-s1-fc-009',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'The Python Software Foundation (PSF)',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What non-profit organization manages the intellectual property and releases of Python?',
    codeSnippet: `org = "Python Software Foundation (PSF)"
print(f"Managed by: {org}")`,
    stdoutExpected: 'Managed by: Python Software Foundation (PSF)',
    explanationTitle: 'Governance by PSF',
    explanationText:
      'The Python Software Foundation (PSF) is a 501(c)(3) non-profit corporation founded in 2001. The PSF holds the intellectual property rights behind Python, manages trademark licensing, funds development grants, and organizes the PyCon international conference.',
    complexityInfo: 'PCEP community and licensing domain',
  },
  {
    id: 'pcep-s1-fc-010',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Source Code vs Machine Code',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Can the computer central processing unit (CPU) directly execute human-readable Python source code?',
    codeSnippet: `# CPU only understands machine code (binary 0s and 1s).
# Python code must first be translated into bytecode and processed by PVM.
direct_cpu_execution = False
print(f"Direct CPU execution: {direct_cpu_execution}")`,
    stdoutExpected: 'Direct CPU execution: False',
    explanationTitle: 'Levels of Programming Abstraction',
    explanationText:
      'The CPU hardware can only execute native machine language instructions composed of binary patterns. High-level languages like Python provide human readability and platform portability. High-level code must be translated into machine instructions either directly by a compiler or via an interpreter/virtual machine.',
    complexityInfo: 'Fundamental computing architecture objective',
  },
  {
    id: 'pcep-s1-fc-011',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Three Primary Categories of Programming Errors',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What are the three fundamental classifications of errors encountered in computer programming?',
    codeSnippet: `errors = ["Syntax error", "Runtime error (Exception)", "Semantic (Logic) error"]
for err in errors:
    print(f"- {err}")`,
    stdoutExpected: `- Syntax error
- Runtime error (Exception)
- Semantic (Logic) error`,
    explanationTitle: 'Error Classification in Python',
    explanationText:
      '1. Syntax Error: The code violates the grammatical rules of the language and cannot be parsed.\n2. Runtime Error: The code is syntactically valid but encounters an invalid operation during execution (e.g. division by zero).\n3. Logic (Semantic) Error: The code executes without errors but produces an incorrect result due to flawed logic.',
    complexityInfo: 'Critical distinction tested on PCEP',
  },
  {
    id: 'pcep-s1-fc-012',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Syntax Error Detection Timing',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'When is a SyntaxError detected in a Python script?',
    codeSnippet: `# print("Hello"
# Notice missing closing parenthesis:
# Python parser detects this BEFORE executing any statements.
print("Syntax errors are caught during parsing phase")`,
    stdoutExpected: 'Syntax errors are caught during parsing phase',
    explanationTitle: 'Pre-Execution Parsing Phase',
    explanationText:
      'Even though Python is an interpreted language, it first parses the entire script and compiles it into bytecode before executing line 1. If any syntax error exists anywhere in the file (such as a missing colon or unmatched parenthesis), execution halts immediately before any code runs.',
    complexityInfo: 'Explains why print statements before a SyntaxError do not execute',
  },
  {
    id: 'pcep-s1-fc-013',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Runtime Error (Exception) Behavior',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What happens to script execution when an unhandled runtime error (such as ZeroDivisionError) occurs?',
    codeSnippet: `print("Step 1: OK")
# The next line raises ZeroDivisionError at runtime:
# x = 10 / 0
# print("Step 2: Never reached")
print("Halt with traceback")`,
    stdoutExpected: `Step 1: OK
Halt with traceback`,
    explanationTitle: 'Runtime Error Execution Flow',
    explanationText:
      'Unlike syntax errors, runtime errors occur while the program is actively executing. All statements prior to the offending line execute successfully. Once the error occurs, Python raises an exception and immediately halts program execution unless enclosed in a `try...except` block.',
    complexityInfo: 'Contrast with SyntaxError pre-parsing behavior',
  },
  {
    id: 'pcep-s1-fc-014',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Semantic (Logic) Errors',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Why are semantic (logic) errors often the hardest to detect?',
    codeSnippet: `# Calculate average of 10 and 20:
# Intended: (10 + 20) / 2 = 15.0
wrong_avg = 10 + 20 / 2  # Missing parentheses: 10 + 10.0 = 20.0
print(wrong_avg)`,
    stdoutExpected: '20.0',
    explanationTitle: 'Logic Error Mechanics',
    explanationText:
      'Semantic errors produce no error messages, traceback, or warnings from the interpreter because the code is syntactically legal and valid. The program runs to completion but gives incorrect results because the algorithm or arithmetic logic was flawed.',
    complexityInfo: 'Classic PCEP question illustrating operator precedence bug',
  },
  {
    id: 'pcep-s1-fc-015',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Python REPL / Interactive Mode',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What does the acronym REPL stand for in Python interactive programming?',
    codeSnippet: `repl_definition = "Read-Eval-Print Loop"
prompt = ">>>"
print(f"{prompt} is the primary REPL prompt for: {repl_definition}")`,
    stdoutExpected: '>>> is the primary REPL prompt for: Read-Eval-Print Loop',
    explanationTitle: 'Interactive Shell: REPL',
    explanationText:
      'REPL stands for Read-Eval-Print Loop. In this interactive mode, the Python interpreter reads an expression or statement entered by the user, evaluates it, prints the result directly to the console (if non-None), and loops back to prompt `>>>` for the next command.',
    complexityInfo: 'Primary prompt `>>>` vs secondary prompt `...` in Python',
  },
  {
    id: 'pcep-s1-fc-016',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Script Mode vs Interactive Mode',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How does expression display differ between Interactive Mode (REPL) and Script Mode?',
    codeSnippet: `# In REPL, typing: 2 + 3 automatically displays: 5
# In a script file (.py):
2 + 3  # Evaluated, but result is discarded!
print(2 + 3)  # Explicitly printed`,
    stdoutExpected: '5',
    explanationTitle: 'REPL Auto-Echo vs Script Output',
    explanationText:
      'In interactive REPL mode, evaluating an expression automatically echoes the result representation to stdout (unless it is `None`). In script mode (`python script.py`), expressions alone do not generate output unless passed explicitly to `print()`.',
    complexityInfo: 'Common beginner misconception on PCEP exam',
  },
  {
    id: 'pcep-s1-fc-017',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Primary Storage (RAM) vs Secondary Storage (Disk)',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Where are Python variables and active program objects stored during execution?',
    codeSnippet: `# Variables exist in volatile memory (RAM) during execution.
# When the Python process terminates, RAM is freed.
print("RAM (Primary Storage) is volatile")`,
    stdoutExpected: 'RAM (Primary Storage) is volatile',
    explanationTitle: 'Memory Allocation during Execution',
    explanationText:
      'RAM (Random Access Memory) is primary, fast, volatile memory where the operating system and Python runtime keep active bytecode, variables, and objects. Secondary storage (hard drives, SSDs) is non-volatile and persists files after power is lost or programs exit.',
    complexityInfo: 'PCEP computer architecture syllabus topic',
  },
  {
    id: 'pcep-s1-fc-018',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'Natural vs Machine vs High-Level Languages',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the key difference between a high-level programming language and a natural human language?',
    codeSnippet: `# Natural language: ambiguous, expressive, rich context
# Programming language: formal, unambiguous, strictly defined syntax
print("Programming languages must be unambiguous")`,
    stdoutExpected: 'Programming languages must be unambiguous',
    explanationTitle: 'Formal Language Grammar',
    explanationText:
      'Natural languages (English, French, etc.) evolve organically, contain ambiguity, idioms, and multiple interpretations. Programming languages are formal artificial languages with strict lexicons and grammars designed to express computations without ambiguity.',
    complexityInfo: 'OpenEDG PCEP Section 1 fundamental theory',
  },
  {
    id: 'pcep-s1-fc-019',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'File Extension for Python Source Files',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What standard file extension is used for Python source code files and bytecode cache files?',
    codeSnippet: `source_ext = ".py"
compiled_ext = ".pyc"
print(f"Source: {source_ext} | Bytecode: {compiled_ext}")`,
    stdoutExpected: 'Source: .py | Bytecode: .pyc',
    explanationTitle: 'Standard Python File Extensions',
    explanationText:
      'Python source code files use the standard `.py` extension. When imported, CPython compiles them into bytecode cache files ending with `.pyc` (Python Compiled) placed inside the `__pycache__` folder.',
    complexityInfo: 'Standard file naming conventions tested in PCEP',
  },
  {
    id: 'pcep-s1-fc-020',
    track: 'pcep',
    cardType: 'PCEP 1.1 • Computer Fundamentals',
    topic: 'CPU Execution Cycle',
    category: 'Foundations',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What sequence of operations describes the fundamental CPU instruction execution cycle?',
    codeSnippet: `cycle = "Fetch -> Decode -> Execute"
print(cycle)`,
    stdoutExpected: 'Fetch -> Decode -> Execute',
    explanationTitle: 'Instruction Execution Cycle',
    explanationText:
      'The CPU continuously repeats the instruction cycle: 1. Fetch the instruction from memory (RAM), 2. Decode the binary opcode to determine the required operation and operands, and 3. Execute the operation in the ALU or control unit.',
    complexityInfo: 'Computer hardware fundamentals in PCEP domain 1.1',
  },

  // =========================================================================
  // CHAPTER 1.2: LITERALS, NUMERIC TYPES, BOOLEANS & SCIENTIFIC NOTATION (Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcep-s1-fc-021',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Definition of a Literal',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is a "literal" in Python programming?',
    codeSnippet: `# 123 is an integer literal
# "hello" is a string literal
# x is a variable, not a literal
x = 123
print(type(123).__name__)`,
    stdoutExpected: 'int',
    explanationTitle: 'Python Literals',
    explanationText:
      'A literal is raw data directly written into the source code whose value is determined strictly by its notation (e.g. 10, 3.14, "Python", True). Variables, expressions, and function calls are not literals.',
    complexityInfo: 'Official PCEP syllabus definition',
  },
  {
    id: 'pcep-s1-fc-022',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Binary Integer Literals (0b prefix)',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the decimal integer value represented by the binary literal 0b1011?',
    codeSnippet: `val = 0b1011
print(val)`,
    stdoutExpected: '11',
    explanationTitle: 'Binary Literal (0b / 0B)',
    explanationText:
      'Integer literals prefixed with `0b` or `0B` are parsed in base 2. In binary, 1011 = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11. Python stores and prints all numbers in base 10 by default.',
    complexityInfo: 'Binary notation is explicitly tested in PCEP',
  },
  {
    id: 'pcep-s1-fc-023',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Octal Integer Literals (0o prefix)',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the output of printing the octal literal 0o17?',
    codeSnippet: `x = 0o17
print(x)`,
    stdoutExpected: '15',
    explanationTitle: 'Octal Literal (0o / 0O)',
    explanationText:
      'Integer literals prefixed with `0o` or `0O` are in base 8 (octal). Digits 0 through 7 are valid. 0o17 = (1×8¹) + (7×8⁰) = 8 + 7 = 15.',
    complexityInfo: 'Notice: in Python 2 it was `017`, but in Python 3 it MUST be `0o17`',
  },
  {
    id: 'pcep-s1-fc-024',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Hexadecimal Integer Literals (0x prefix)',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What decimal value is printed by the hexadecimal literal 0x1F?',
    codeSnippet: `val = 0x1F
print(val)`,
    stdoutExpected: '31',
    explanationTitle: 'Hexadecimal Literal (0x / 0X)',
    explanationText:
      'Hexadecimal literals are prefixed with `0x` or `0X` and use digits 0-9 and letters A-F (or a-f, case-insensitive, where A=10, B=11, C=12, D=13, E=14, F=15). 0x1F = (1×16¹) + (15×16⁰) = 16 + 15 = 31.',
    complexityInfo: 'Base conversion arithmetic is a favorite PCEP question',
  },
  {
    id: 'pcep-s1-fc-025',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Digit Separators with Underscores in Numeric Literals',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the value and validity of writing 1_000_000 in Python 3?',
    codeSnippet: `num = 1_000_000
print(num)
print(type(num).__name__)`,
    stdoutExpected: `1000000
int`,
    explanationTitle: 'PEP 515 Underscores in Numeric Literals',
    explanationText:
      'Python allows single underscores between digits in integer and floating-point literals to improve visual readability. The interpreter simply ignores them during parsing. 1_000_000 is identical to 1000000.',
    complexityInfo: 'Underscores cannot be at the very start, end, or doubled (1__000 fails)',
  },
  {
    id: 'pcep-s1-fc-026',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Floating-Point Literal Syntax',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What type is assigned to `x = 4.` and `y = .5` in Python?',
    codeSnippet: `x = 4.
y = .5
print(type(x).__name__, type(y).__name__)
print(x + y)`,
    stdoutExpected: `float float
4.5`,
    explanationTitle: 'Omitted Digits Around Decimal Point',
    explanationText:
      'In Python, a decimal point distinguishes a float from an integer. You may omit the zero after the point (`4.` is `4.0`) or before the point (`.5` is `0.5`). Both evaluate to standard `float` objects.',
    complexityInfo: 'Frequently appears in tricky multi-choice syntax questions',
  },
  {
    id: 'pcep-s1-fc-027',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Scientific Notation: Positive Exponents',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the evaluated output and type of the literal 2.5e3 in Python?',
    codeSnippet: `val = 2.5e3
print(val)
print(type(val).__name__)`,
    stdoutExpected: `2500.0
float`,
    explanationTitle: 'Exponential Notation with e',
    explanationText:
      'The letter `e` or `E` stands for exponent (power of 10). 2.5e3 means 2.5 × 10³ = 2500.0. In Python, ANY number written with scientific notation `e` or `E` is ALWAYS of type `float`, never `int`.',
    complexityInfo: 'Remember: scientific notation always creates a float',
  },
  {
    id: 'pcep-s1-fc-028',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Scientific Notation: Negative Exponents',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the output of the scientific notation literal 3E-4?',
    codeSnippet: `num = 3E-4
print(num)`,
    stdoutExpected: '0.0003',
    explanationTitle: 'Negative Exponent Evaluation',
    explanationText:
      '`3E-4` indicates 3 × 10⁻⁴ = 3 / 10000 = 0.0003. When printed, Python outputs decimal notation if the value is sufficiently close to zero without requiring excessive trailing zeros.',
    complexityInfo: 'Both lowercase `e` and uppercase `E` are legal',
  },
  {
    id: 'pcep-s1-fc-029',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Boolean Literal Capitalization',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What error occurs if you write true or false without quotes in Python code?',
    codeSnippet: `# Python is strictly case-sensitive:
# x = true
print("NameError: name 'true' is not defined")`,
    stdoutExpected: "NameError: name 'true' is not defined",
    explanationTitle: 'Boolean Case Sensitivity',
    explanationText:
      'Python boolean literals must begin with a capital letter: `True` and `False`. Lowercase `true` and `false` are not keywords in Python; the interpreter treats them as variable names, triggering a `NameError` if they are not defined.',
    complexityInfo: 'Classic trap for learners coming from Java/C/JavaScript',
  },
  {
    id: 'pcep-s1-fc-030',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Booleans as Subclass of Integers',
    category: 'Literals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the output of True + True - False in Python?',
    codeSnippet: `res = True + True - False
print(res)
print(isinstance(True, int))`,
    stdoutExpected: `2
True`,
    explanationTitle: 'bool is Subclass of int',
    explanationText:
      'In Python, `bool` is a direct subclass of `int`. `True` has the integer value `1` and `False` has the integer value `0`. In arithmetic expressions, `True + True - False` evaluates to `1 + 1 - 0 = 2`.',
    complexityInfo: 'Official Python Institute favorite question',
  },
  {
    id: 'pcep-s1-fc-031',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'String Literal Quotation Forms',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the output when embedding single quotes inside double-quoted strings and vice-versa?',
    codeSnippet: `s1 = "I'm learning Python"
s2 = 'She said "Hello"'
print(s1)
print(s2)`,
    stdoutExpected: `I'm learning Python
She said "Hello"`,
    explanationTitle: 'Quote Nesting Without Escaping',
    explanationText:
      'In Python, strings delimited by double quotes can freely contain unescaped single quotes/apostrophes, and strings delimited by single quotes can contain unescaped double quotes.',
    complexityInfo: 'Eliminates need for backslash escaping when alternating quotes',
  },
  {
    id: 'pcep-s1-fc-032',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Triple-Quoted Multiline Strings',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How do triple-quoted strings (\\\'\\\'\\\' or """) handle embedded newline characters?',
    codeSnippet: `text = """Line 1
Line 2"""
print(text)`,
    stdoutExpected: `Line 1
Line 2`,
    explanationTitle: 'Multiline Strings & Literal Newlines',
    explanationText:
      'Strings enclosed in triple single quotes (`\'\'\'...\'\'\'`) or triple double quotes (`"""..."""`) can span multiple source code lines. Any literal newlines, tabs, and spaces between the delimiters are preserved as part of the string.',
    complexityInfo: 'Commonly used for multiline strings and function docstrings',
  },
  {
    id: 'pcep-s1-fc-033',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'The NoneType and None Literal',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the literal None in Python, and what type does it belong to?',
    codeSnippet: `x = None
print(x)
print(type(x).__name__)`,
    stdoutExpected: `None
NoneType`,
    explanationTitle: 'The None Singleton Object',
    explanationText:
      '`None` is a special constant in Python representing the intentional absence of a value or null state. It is the sole instance of the `NoneType` class. Functions without an explicit `return` statement return `None` by default.',
    complexityInfo: 'PCEP syllabus explicitly lists None under literals',
  },
  {
    id: 'pcep-s1-fc-034',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Floating-Point Representation Imprecision',
    category: 'Literals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why does print(0.1 + 0.2 == 0.3) output False in Python?',
    codeSnippet: `print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)`,
    stdoutExpected: `0.30000000000000004
False`,
    explanationTitle: 'IEEE 754 Binary Floating-Point',
    explanationText:
      'Python represents `float` values using IEEE 754 double precision (base 2). Decimal fractions like 0.1 and 0.2 cannot be represented with infinite precision in binary, producing tiny round-off errors: `0.1 + 0.2 = 0.30000000000000004`.',
    complexityInfo: 'Crucial numerical understanding tested across Python exams',
  },
  {
    id: 'pcep-s1-fc-035',
    track: 'pcep',
    cardType: 'PCEP 1.2 • Literals & Types',
    topic: 'Empty String Length and Truthiness',
    category: 'Literals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the length and boolean truth value of the empty string literal ""?',
    codeSnippet: `s = ""
print(len(s))
print(bool(s))`,
    stdoutExpected: `0
False`,
    explanationTitle: 'Empty String Evaluation',
    explanationText:
      'An empty string literal `""` contains zero characters, so `len("")` returns `0`. In boolean contexts, empty collections and empty strings evaluate to `False`, while any non-empty string evaluates to `True`.',
    complexityInfo: 'Basic truthiness concept fundamental to conditionals in Section 2',
  },
];
