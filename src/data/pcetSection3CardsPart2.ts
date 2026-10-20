import { Flashcard } from '../types';

export const pcetSection3CardsPart2: Flashcard[] = [
  // Chapter 3.3: Type Annotations & Type Checking (Cards 51-60)
  {
    id: 'pcet-3-051',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is a `TypeVar` used for in the `typing` module?',
    codeSnippet: 'from typing import TypeVar, Sequence\n\nT = TypeVar("T")\n\ndef first_item(items: Sequence[T]) -> T:\n    return items[0]',
    options: [
      'To define generic type parameters that preserve and link types across function arguments and return values',
      'To change the type of a variable at runtime',
      'To define an environment variable in Python',
      'To convert integers into strings'
    ],
    correctAnswer: 0,
    explanation: '`TypeVar` defines generic type variables. In `first_item`, if you pass a `Sequence[str]`, mypy deduces `T` is `str` and knows the return value is guaranteed to be a `str`.',
    officialRef: 'PCET-30-01 Block 3.3 - Generics and TypeVar',
    tags: ['typevar', 'generics', 'type-hints']
  },
  {
    id: 'pcet-3-052',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Beginner',
    question: 'How should an inline type comment or `# type: ignore` be used when mypy produces a false positive?',
    codeSnippet: '# Complex legacy dynamic dispatch:\nhandler = getattr(module, func_name)  # type: ignore[attr-defined]',
    options: [
      'It suppresses mypy errors for that specific line, allowing teams to bypass false positives or un-typeable dynamic constructs',
      'It comments out the code so Python skips executing it',
      'It deletes the file from mypy\'s cache',
      'It converts the line to C++'
    ],
    correctAnswer: 0,
    explanation: '`# type: ignore` instructs mypy to skip static checks on that specific line. Adding the specific error code (e.g. `[attr-defined]`) ensures only that specific issue is suppressed.',
    officialRef: 'PCET-30-01 Block 3.3 - mypy Suppressions',
    tags: ['mypy', 'type-ignore', 'suppression']
  },
  {
    id: 'pcet-3-053',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is `typing.Final` in Python 3.8+?',
    codeSnippet: 'from typing import Final\n\nMAX_RETRIES: Final[int] = 3\nMAX_RETRIES = 5  # What will mypy report?',
    options: [
      'Cannot assign to final name "MAX_RETRIES"',
      'SyntaxError: Final variables cannot be defined in Python',
      'No error; Python variables are always reassignable',
      'MemoryError'
    ],
    correctAnswer: 0,
    explanation: '`typing.Final` indicates that a variable or attribute is a constant that should never be reassigned, or that a method/class cannot be overridden/subclassed. Mypy flags reassignments statically.',
    officialRef: 'PCET-30-01 Block 3.3 - typing.Final',
    tags: ['final', 'constants', 'immutability', 'mypy']
  },
  {
    id: 'pcet-3-054',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is `typing.TypedDict` and why is it useful when testing JSON API payloads?',
    codeSnippet: 'from typing import TypedDict\n\nclass UserPayload(TypedDict):\n    id: int\n    username: str\n    is_admin: bool\n\nuser: UserPayload = {"id": 1, "username": "bob", "is_admin": "YES"} # Error!',
    options: [
      'It represents dictionaries with specific, expected keys and corresponding value types, allowing static validation of JSON-like dictionary structures',
      'It creates an encrypted database table',
      'It converts dictionaries into Python lists',
      'It is a dictionary that only stores numbers'
    ],
    correctAnswer: 0,
    explanation: '`TypedDict` allows static type checkers to validate dictionaries that adhere to a specific schema with defined keys and types (e.g., flagging `"is_admin": "YES"` when a `bool` was declared).',
    officialRef: 'PCET-30-01 Block 3.3 - TypedDict',
    tags: ['typeddict', 'json-validation', 'api-testing']
  },
  {
    id: 'pcet-3-055',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is a "Stub File" (`.pyi`) in Python static type checking?',
    codeSnippet: '# my_c_extension.pyi:\n# Contains only function signatures and type annotations without implementations:\ndef fast_matrix_multiply(a: list[float], b: list[float]) -> list[float]: ...',
    options: [
      'A file that provides type hints for modules written in C, C++, or third-party libraries that lack native type annotations',
      'A temporary file created when tests crash',
      'A file that mocks network connections',
      'A file that stores user passwords'
    ],
    correctAnswer: 0,
    explanation: 'Stub files (`.pyi` extensions) contain type signatures without runtime implementations. They provide typing information for C extensions or untyped third-party libraries (e.g. typeshed).',
    officialRef: 'PCET-30-01 Block 3.3 - Stub Files (.pyi)',
    tags: ['stub-files', 'pyi', 'typeshed', 'mypy']
  },
  {
    id: 'pcet-3-056',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is `typing.Protocol` (Structural Subtyping / Duck Typing)?',
    codeSnippet: 'from typing import Protocol\n\nclass Drawable(Protocol):\n    def draw(self) -> None: ...\n\nclass Circle:\n    def draw(self) -> None:\n        print("Drawing circle")\n\ndef render(obj: Drawable) -> None:\n    obj.draw()\n\nrender(Circle())  # Valid without inheriting from Drawable!',
    options: [
      'A way to define interfaces based on structure (duck typing): any class with matching methods/attributes satisfies the Protocol without explicit inheritance',
      'A network protocol like TCP/IP',
      'A security protocol for encrypting files',
      'A rule that forbids class inheritance'
    ],
    correctAnswer: 0,
    explanation: 'PEP 544 introduced `Protocol` for structural subtyping (static duck typing). An object is considered compatible if it has the required methods and attributes, without explicit class inheritance.',
    officialRef: 'PCET-30-01 Block 3.3 - typing.Protocol',
    tags: ['protocol', 'duck-typing', 'structural-subtyping']
  },
  {
    id: 'pcet-3-057',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Beginner',
    question: 'In Python 3.9+, how should built-in generic types like `list` and `dict` be annotated?',
    codeSnippet: '# Modern syntax (PEP 585):\ndef get_scores() -> dict[str, list[int]]:\n    return {"Alice": [95, 88, 92]}\n\n# Legacy syntax required: from typing import Dict, List',
    options: [
      'Using the standard built-in collections `list[T]` and `dict[K, V]` directly without importing from `typing`',
      'Using strings only: "list_of_int"',
      'Built-in collections cannot be parameterized in Python',
      'Using curly braces: {str: [int]}'
    ],
    correctAnswer: 0,
    explanation: 'PEP 585 (Python 3.9+) enables generic subscripting directly on built-in collections (`list[int]`, `dict[str, int]`, `tuple[int, ...]`), eliminating the need to import `List`, `Dict` from `typing`.',
    officialRef: 'PCET-30-01 Block 3.3 - Built-in Generic Types',
    tags: ['generics', 'pep585', 'python39']
  },
  {
    id: 'pcet-3-058',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What does `typing.NoReturn` indicate when used as a function return type annotation?',
    codeSnippet: 'from typing import NoReturn\n\ndef terminate_program(message: str) -> NoReturn:\n    print(f"FATAL: {message}")\n    import sys\n    sys.exit(1)',
    options: [
      'The function returns `None` normally',
      'The function never returns normally (it always raises an exception or terminates the process)',
      'The function takes no arguments',
      'The function cannot be called'
    ],
    correctAnswer: 1,
    explanation: '`NoReturn` indicates that the function never returns control to its caller normally because it either always raises an unhandled exception or terminates program execution (e.g. `sys.exit`).',
    officialRef: 'PCET-30-01 Block 3.3 - typing.NoReturn',
    tags: ['noreturn', 'exceptions', 'control-flow']
  },
  {
    id: 'pcet-3-059',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is the danger of using mutable default arguments with type hints in Python?',
    codeSnippet: '# Flawed code:\ndef append_item(item: int, container: list[int] = []) -> list[int]:\n    container.append(item)\n    return container',
    options: [
      'The default list is created once at function definition time, so all subsequent calls share the same mutated list across executions',
      'Python syntax rejects type hints on default arguments',
      'The function raises a TypeError on second invocation',
      'Flake8 automatically deletes the file'
    ],
    correctAnswer: 0,
    explanation: 'Default arguments are evaluated once at function definition. A mutable default like `container: list[int] = []` persists state across calls. Best practice is `container: list[int] | None = None`.',
    officialRef: 'PCET-30-01 Block 3.3 - Mutable Default Arguments Trap',
    tags: ['mutable-defaults', 'python-pitfalls', 'flake8']
  },
  {
    id: 'pcet-3-060',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'How does `from __future__ import annotations` (PEP 563) change how Python handles annotations at runtime?',
    codeSnippet: 'from __future__ import annotations\n\nclass Node:\n    def link(self, next_node: Node) -> None:  # Works without quotes around "Node"!\n        self.next = next_node',
    options: [
      'It stores annotations as unevaluated raw strings at definition time, allowing self-referential types without string forward references',
      'It compiles Python code into WebAssembly',
      'It deletes all docstrings at runtime',
      'It turns Python into a statically typed compiled language'
    ],
    correctAnswer: 0,
    explanation: 'PEP 563 delays annotation evaluation by storing them as string literals in `__annotations__`. This solves forward reference problems (referencing a class before it is fully defined) cleanly.',
    officialRef: 'PCET-30-01 Block 3.3 - Postponed Evaluation of Annotations',
    tags: ['future-annotations', 'forward-references', 'pep563']
  },

  // Chapter 3.4: Code Smells, Technical Debt & Refactoring Techniques (Cards 61-80)
  {
    id: 'pcet-3-061',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Beginner',
    question: 'According to Martin Fowler, what is a "Code Smell"?',
    codeSnippet: '# Definition context:\n# A code smell is not an actual bug (the program still runs and satisfies tests),\n# but rather a symptom in source code that indicates a deeper design or architecture problem.',
    options: [
      'A literal odor given off by overheating computer hardware',
      'A surface indication in code that usually corresponds to a deeper architectural or design flaw, reducing maintainability and increasing defect likelihood',
      'A syntax error that prevents Python from compiling',
      'A failing test case in pytest'
    ],
    correctAnswer: 1,
    explanation: 'A code smell is a surface symptom that suggests a deeper design flaw (e.g. God Class, Long Method). While smelling code may function correctly today, it degrades maintainability and testability.',
    officialRef: 'PCET-30-01 Block 3.4 - Code Smells and Technical Debt',
    tags: ['code-smells', 'refactoring', 'maintainability']
  },
  {
    id: 'pcet-3-062',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Beginner',
    question: 'What is the "God Object" (or Large Class) code smell?',
    codeSnippet: '# Class definition:\nclass SystemManager:\n    # 3,500 lines of code\n    # Handles database connection, user authentication, PDF generation,\n    # sending emails, calculating taxes, and rendering HTML templates.',
    options: [
      'An object blessed by religious authorities',
      'An anti-pattern where a single monolithic class knows too much or does too much, accumulating excessive responsibilities and violating Single Responsibility',
      'A class that inherits from every other class in Python',
      'A built-in class in the standard library'
    ],
    correctAnswer: 1,
    explanation: 'A God Object (or Blob) centralizes too many disparate duties, violating High Cohesion and the Single Responsibility Principle. It is hard to test in isolation, understand, or refactor safely.',
    officialRef: 'PCET-30-01 Block 3.4 - God Object Anti-Pattern',
    tags: ['god-object', 'large-class', 'srp']
  },
  {
    id: 'pcet-3-063',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Intermediate',
    question: 'What is the "Feature Envy" code smell?',
    codeSnippet: '# In OrderProcessor class:\ndef calculate_total(self, customer):\n    # Method accesses customer attributes exclusively and uses nothing from OrderProcessor!\n    return (customer.base_price - customer.loyalty_discount) * customer.tax_rate',
    options: [
      'When a developer is jealous of a feature written by a teammate',
      'A method in one class that accesses the data and fields of another class more extensively than its own internal data',
      'A feature that customers request repeatedly',
      'A method with too many unit tests'
    ],
    correctAnswer: 1,
    explanation: 'Feature Envy occurs when a method is more interested in the data of another class than the class it actually resides in. The refactoring remedy is typically "Move Method" to the envied class.',
    officialRef: 'PCET-30-01 Block 3.4 - Feature Envy',
    tags: ['feature-envy', 'code-smells', 'refactoring']
  },
  {
    id: 'pcet-3-064',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Intermediate',
    question: 'What is "Primitive Obsession"?',
    codeSnippet: '# Using raw strings and tuples for complex domain concepts:\ndef transfer(src_acc: str, dst_acc: str, amount_cents: int, currency_code: str):\n    # Instead of creating clean Domain Value Objects like Money and AccountNumber',
    options: [
      'Refusal to upgrade from Python 2 to Python 3',
      'The excessive reliance on primitive data types (strings, ints, floats, dictionaries) to represent domain concepts rather than creating small, expressive domain objects',
      'Using assembly language instead of Python',
      'Writing code without using any functions'
    ],
    correctAnswer: 1,
    explanation: 'Primitive Obsession is the antipattern of using basic primitives (e.g. naked strings for email addresses, raw ints for currency) instead of encapsulating them in dedicated Value Objects with validation.',
    officialRef: 'PCET-30-01 Block 3.4 - Primitive Obsession',
    tags: ['primitive-obsession', 'value-objects', 'design']
  },
  {
    id: 'pcet-3-065',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Beginner',
    question: 'What is "Dead Code" and why does static analysis flag it?',
    codeSnippet: 'def compute_discount(price: float) -> float:\n    return price * 0.90\n    # Unreachable dead code below:\n    print("Discount calculated")  # Flake8 warning: unreachable code\n    extra_bonus = 5.0',
    options: [
      'Source code that can never be reached or executed during runtime, adding clutter, confusion, and maintenance burden',
      'Code written by developers who have retired',
      'Code that deletes files on disk',
      'Code that has no comments'
    ],
    correctAnswer: 0,
    explanation: 'Dead code is unreachable or unused code. It clutters the codebase, misleads developers during maintenance, and wastes static analysis time. It should be safely removed.',
    officialRef: 'PCET-30-01 Block 3.4 - Dead Code Elimination',
    tags: ['dead-code', 'maintainability', 'flake8']
  },
  {
    id: 'pcet-3-066',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Beginner',
    question: 'What is the "Magic Numbers" code smell and how is it resolved?',
    codeSnippet: '# Smelly code:\ndef calculate_pension(salary):\n    return salary * 0.0765  # What does 0.0765 mean?\n\n# Refactored code:\nFICA_TAX_RATE = 0.0765\ndef calculate_pension(salary):\n    return salary * FICA_TAX_RATE',
    options: [
      'Numbers generated by a magic trick',
      'Using hardcoded literal numbers with unexplained meaning throughout code; resolved by extracting them into named, descriptive constants',
      'Using floating-point numbers in Python',
      'A calculation that divides by zero'
    ],
    correctAnswer: 1,
    explanation: 'Magic numbers are unexplained numeric literals scattered in code. Replacing them with named constants improves readability, searchability, and centralizes updates.',
    officialRef: 'PCET-30-01 Block 3.4 - Magic Numbers and Constants',
    tags: ['magic-numbers', 'constants', 'clean-code']
  },
  {
    id: 'pcet-3-067',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Beginner',
    question: 'What is the fundamental cardinal rule of Code Refactoring?',
    codeSnippet: '# Refactoring definition:\n# "The process of changing a software system in such a way that it does not alter\n# the external behavior of the code yet improves its internal structure."',
    options: [
      'Always add three new features while refactoring',
      'External observable behavior must remain completely unchanged, and automated tests must pass before and after the refactoring',
      'Refactoring must always double the execution speed of Python bytecode',
      'Refactoring should only be done without running any tests'
    ],
    correctAnswer: 1,
    explanation: 'Refactoring strictly modifies internal structure without changing external observable behavior. A comprehensive test suite is essential to verify that behavior remains invariant.',
    officialRef: 'PCET-30-01 Block 3.4 - Refactoring Principles',
    tags: ['refactoring', 'behavior-preservation', 'safety']
  },
  {
    id: 'pcet-3-068',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Intermediate',
    question: 'What is the "Extract Method" (or Extract Function) refactoring technique?',
    codeSnippet: '# Before:\ndef print_receipt(items):\n    # 10 lines printing header\n    # 20 lines calculating totals\n    # 10 lines formatting footer\n\n# After: Split into print_header(), calculate_totals(), and print_footer()',
    options: [
      'Extracting files from a ZIP archive',
      'Taking a coherent fragment of code from a long method and moving it into a new, separate function with a clear, descriptive name',
      'Exporting a method to an external C library',
      'Deleting a method and replacing it with comments'
    ],
    correctAnswer: 1,
    explanation: 'Extract Method takes a code fragment that does a distinct task and moves it into its own well-named function, dramatically improving modularity and unit testability.',
    officialRef: 'PCET-30-01 Block 3.4 - Extract Method Refactoring',
    tags: ['extract-method', 'refactoring', 'readability']
  },
  {
    id: 'pcet-3-069',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Intermediate',
    question: 'What is the "Introduce Parameter Object" refactoring technique?',
    codeSnippet: '# Before (Long Parameter List smell):\ndef search_flights(orig: str, dest: str, dep_date: date, ret_date: date, adults: int, kids: int, cabin: str):\n    ...\n\n# After:\n@dataclass\nclass FlightSearchCriteria:\n    orig: str\n    dest: str\n    dep_date: date\n    ret_date: date\n    adults: int\n    kids: int\n    cabin: str\n\ndef search_flights(criteria: FlightSearchCriteria):\n    ...',
    options: [
      'Replacing a group of naturally related function parameters with a single structured object (e.g. a dataclass or class)',
      'Passing Python sys.argv into all functions',
      'Making all function parameters optional',
      'Converting parameters into global variables'
    ],
    correctAnswer: 0,
    explanation: 'When a group of parameters repeatedly travel together (Long Parameter List / Data Clumps), grouping them into a Parameter Object (dataclass) simplifies signatures and enhances test fixture creation.',
    officialRef: 'PCET-30-01 Block 3.4 - Introduce Parameter Object',
    tags: ['parameter-object', 'dataclass', 'refactoring']
  },
  {
    id: 'pcet-3-070',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Intermediate',
    question: 'What is "Replace Conditional with Polymorphism"?',
    codeSnippet: '# Smelly code:\ndef get_speed(vehicle):\n    if vehicle.type == "CAR":\n        return 100\n    elif vehicle.type == "AIRPLANE":\n        return 800\n    elif vehicle.type == "BICYCLE":\n        return 20\n\n# Refactored: Vehicle base class with Car, Airplane, Bicycle implementing get_speed()',
    options: [
      'Replacing complex switch/if-elif chains checking object type with class hierarchies and polymorphic method overriding',
      'Deleting all if statements from Python code',
      'Converting conditions into while loops',
      'Using boolean operators instead of arithmetic'
    ],
    correctAnswer: 0,
    explanation: 'Conditional cascades switching on type codes violate the Open/Closed Principle. Replacing them with polymorphism allows new types to be added by creating new subclasses without modifying existing logic.',
    officialRef: 'PCET-30-01 Block 3.4 - Replace Conditional with Polymorphism',
    tags: ['polymorphism', 'refactoring', 'clean-code']
  },
  {
    id: 'pcet-3-071',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Intermediate',
    question: 'What is the "Shotgun Surgery" code smell?',
    codeSnippet: '# System issue:\n# Whenever you make a small modification to the User database model,\n# you have to make tiny edits across 25 different unrelated files throughout the project.',
    options: [
      'A software bug in hunting video games',
      'An antipattern where a single conceptual change requires making lots of small edits across many different classes or files',
      'Using a shotgun to destroy defective hard drives',
      'Running tests in parallel across 50 threads'
    ],
    correctAnswer: 1,
    explanation: 'Shotgun Surgery is the opposite of Divergent Change: one small change forces numerous small edits across multiple classes due to poor cohesion and high coupling.',
    officialRef: 'PCET-30-01 Block 3.4 - Shotgun Surgery',
    tags: ['shotgun-surgery', 'coupling', 'code-smells']
  },
  {
    id: 'pcet-3-072',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Intermediate',
    question: 'What is "Divergent Change"?',
    codeSnippet: '# In OrderManager.py:\n# - You edit this class whenever database schema changes.\n# - You edit this class whenever tax calculation rules change.\n# - You edit this class whenever UI formatting changes.',
    options: [
      'A code smell where one single class is repeatedly modified for many completely different, unrelated business reasons',
      'A git branch that has diverged from origin/main',
      'A machine learning algorithm that fails to converge',
      'A variable whose value changes randomly'
    ],
    correctAnswer: 0,
    explanation: 'Divergent Change occurs when one class is commonly changed for several different reasons, violating the Single Responsibility Principle ("a class should have only one reason to change").',
    officialRef: 'PCET-30-01 Block 3.4 - Divergent Change',
    tags: ['divergent-change', 'srp', 'code-smells']
  },
  {
    id: 'pcet-3-073',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Beginner',
    question: 'What is the "Inline Method" refactoring technique?',
    codeSnippet: '# Before:\ndef is_positive(x):\n    return x > 0\n\ndef calculate(x):\n    if is_positive(x):\n        ...\n\n# After (when the method body is as clear as the name):',
    options: [
      'Replacing a method call with the content of the method body itself when the method\'s body is as clear as its name and adds no value',
      'Writing an entire Python script on line 1',
      'Converting a method into an inline assembly statement',
      'Writing lambda expressions inside docstrings'
    ],
    correctAnswer: 0,
    explanation: 'Inline Method is the reverse of Extract Method: when a method is an unnecessary indirection and its body is self-explanatory, you replace calls with the body and remove the method.',
    officialRef: 'PCET-30-01 Block 3.4 - Inline Method Refactoring',
    tags: ['inline-method', 'refactoring', 'simplicity']
  },
  {
    id: 'pcet-3-074',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Intermediate',
    question: 'What is "Decompose Conditional"?',
    codeSnippet: '# Before:\nif date < SUMMER_START or date > SUMMER_END:\n    charge = quantity * winter_rate + winter_service_charge\nelse:\n    charge = quantity * summer_rate\n\n# After:\nif is_not_summer(date):\n    charge = winter_charge(quantity)\nelse:\n    charge = summer_charge(quantity)',
    options: [
      'Breaking down complicated conditional statements into well-named functions that clearly state what is being tested and what happens in each branch',
      'Deleting the else branch of an if statement',
      'Converting if statements into try/except blocks',
      'Replacing boolean logic with integer arithmetic'
    ],
    correctAnswer: 0,
    explanation: 'Decompose Conditional extracts the conditional logic and branch actions into small, descriptive methods, clarifying the business intent behind complex branch conditions.',
    officialRef: 'PCET-30-01 Block 3.4 - Decompose Conditional',
    tags: ['decompose-conditional', 'readability', 'clean-code']
  },
  {
    id: 'pcet-3-075',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Beginner',
    question: 'Why is "Renaming" (Variable, Method, Class) one of the most powerful refactorings?',
    codeSnippet: '# Before:\ndef f(x, y):\n    return x * y * 0.15\n\n# After:\ndef calculate_tip(bill_total: float, tip_percentage: float = 0.15) -> float:\n    return bill_total * tip_percentage',
    options: [
      'It makes Python code compile faster',
      'It makes code self-documenting and reveals intent, eliminating ambiguity and the need for explanatory comments',
      'It reduces the amount of RAM consumed by the program',
      'It is required by the Python interpreter'
    ],
    correctAnswer: 1,
    explanation: 'Renaming symbols to reveal their domain purpose is the simplest, most effective refactoring. Good names make code self-documenting, reducing cognitive load and defect rates.',
    officialRef: 'PCET-30-01 Block 3.4 - Rename Refactoring',
    tags: ['naming', 'refactoring', 'self-documenting']
  },
  {
    id: 'pcet-3-076',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Safety',
    difficulty: 'Intermediate',
    question: 'What is the "Refactoring Danger Zone"?',
    codeSnippet: '# Dangerous scenario:\n# Refactoring a 5,000-line legacy module that has ZERO automated unit tests.\n# Developer rewrites loops and splits classes blindly.',
    options: [
      'Refactoring code without a comprehensive suite of automated tests to verify that behavior has not changed',
      'Writing Python code inside a nuclear reactor',
      'Using variables named "danger"',
      'Refactoring while traveling on an airplane'
    ],
    correctAnswer: 0,
    explanation: 'Refactoring without tests is hazardous: without automated tests to verify behavior invariance, developers have no safety net and will almost certainly introduce undetected regression bugs.',
    officialRef: 'PCET-30-01 Block 3.4 - Safe Refactoring',
    tags: ['refactoring-safety', 'unit-tests', 'regressions']
  },
  {
    id: 'pcet-3-077',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Technical Debt',
    difficulty: 'Intermediate',
    question: 'How does Ward Cunningham\'s "Technical Debt Quadrant" categorize deliberate vs. inadvertent technical debt?',
    codeSnippet: '# Debt Quadrants:\n# - Deliberate & Prudent: "We must ship now to learn from users; we will deal with consequences in next sprint."\n# - Inadvertent & Reckless: "What is an architecture? We don\'t write tests."',
    options: [
      'Technical debt is always illegal in software engineering',
      'Debt can be intentional and strategic (prudent shortcut to validate a market) or accidental and reckless (sloppy coding and lack of testing)',
      'All technical debt is caused by hardware failure',
      'Technical debt only applies to financial banking systems'
    ],
    correctAnswer: 1,
    explanation: 'Martin Fowler\'s Technical Debt Quadrant distinguishes debt along Deliberate/Inadvertent and Prudent/Reckless axes. Deliberate prudent debt is taken intentionally with plans to repay.',
    officialRef: 'PCET-30-01 Block 3.4 - Technical Debt Quadrant',
    tags: ['technical-debt', 'architecture', 'strategy']
  },
  {
    id: 'pcet-3-078',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Code Smells',
    difficulty: 'Beginner',
    question: 'What is the "Duplicate Code" code smell and what core principle does it violate?',
    codeSnippet: '# Repeated block across 4 functions:\ntax = amount * 0.0825\nrounded_tax = round(tax, 2)\n# If the tax rate changes, 4 places must be updated!',
    options: [
      'It violates the DRY (Don\'t Repeat Yourself) principle, increasing maintenance overhead and the risk that updates are applied inconsistently',
      'It violates Python syntax rules',
      'It causes an infinite loop in pytest',
      'It violates PEP 257'
    ],
    correctAnswer: 0,
    explanation: 'Duplicate code is considered the most pervasive code smell. It violates DRY: any bug fix or rule change must be copied to multiple locations, leading to inconsistent updates.',
    officialRef: 'PCET-30-01 Block 3.4 - Duplicate Code and DRY',
    tags: ['duplicate-code', 'dry', 'code-smells']
  },
  {
    id: 'pcet-3-079',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Techniques',
    difficulty: 'Intermediate',
    question: 'What is "Replace Nested Conditional with Guard Clauses"?',
    codeSnippet: '# Before:\ndef process(user):\n    if user is not None:\n        if user.is_active:\n            if user.has_funds:\n                return complete_checkout(user)\n\n# After (Guard Clauses):\ndef process(user):\n    if user is None or not user.is_active or not user.has_funds:\n        return None\n    return complete_checkout(user)',
    options: [
      'Using early returns (guard clauses) at the top of a function to handle edge cases or invalid states immediately, flattening nested if-indentation',
      'Hiring security guards to protect developers',
      'Encapsulating conditions in try/except blocks',
      'Deleting conditions entirely'
    ],
    correctAnswer: 0,
    explanation: 'Guard clauses exit early when preconditions fail, flattening deep "arrow anti-pattern" nesting and allowing the primary happy path to execute cleanly without indentation.',
    officialRef: 'PCET-30-01 Block 3.4 - Guard Clauses',
    tags: ['guard-clauses', 'clean-code', 'refactoring']
  },
  {
    id: 'pcet-3-080',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.4',
    category: 'Refactoring Safety',
    difficulty: 'Intermediate',
    question: 'In refactoring, what is the concept of "Refactoring in Small Steps"?',
    codeSnippet: '# Refactoring rhythm:\n# 1. Rename single variable -> Run pytest -> Green.\n# 2. Extract single method -> Run pytest -> Green.\n# 3. Commit to git.\n# Repeat in tiny, safe increments.',
    options: [
      'Refactoring should be done in tiny, incremental micro-steps, running tests after each transformation so any introduced defect is pinpointed immediately',
      'Only typing with two fingers to slow down changes',
      'Making all changes in one gigantic 1,000-line edit before running tests',
      'Only changing 1 file per month'
    ],
    correctAnswer: 0,
    explanation: 'Refactoring in small, disciplined steps with frequent test runs ensures that if a test fails, the error can only be in the tiny change made in the last 60 seconds, enabling trivial rollback.',
    officialRef: 'PCET-30-01 Block 3.4 - Incremental Refactoring',
    tags: ['small-steps', 'incremental-refactoring', 'safety']
  },

  // Chapter 3.5: Software Decomposition, Clean Code & Engineering Principles (Cards 81-100)
  {
    id: 'pcet-3-081',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Software Design Principles',
    difficulty: 'Beginner',
    question: 'What is the difference between "Cohesion" and "Coupling" in software architecture?',
    codeSnippet: '# Principle:\n# High Cohesion: Elements inside a module belong together and focus on one task.\n# Low Coupling: Modules have minimal dependencies on each other.',
    options: [
      'Good software aims for High Cohesion and Low Coupling',
      'Good software aims for Low Cohesion and High Coupling',
      'Cohesion and Coupling are identical concepts',
      'Coupling is for hardware; Cohesion is for Python'
    ],
    correctAnswer: 0,
    explanation: 'High Cohesion means components within a module are closely related to a single well-defined task. Low Coupling means modules are loosely dependent, making changes and isolated testing easy.',
    officialRef: 'PCET-30-01 Block 3.5 - Cohesion and Coupling',
    tags: ['cohesion', 'coupling', 'architecture']
  },
  {
    id: 'pcet-3-082',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'What does the DRY principle stand for in software engineering?',
    codeSnippet: '# Principle acronym:\n# D - Don\'t\n# R - Repeat\n# Y - Yourself',
    options: [
      'Don\'t Repeat Yourself',
      'Debug Rapidly Yourself',
      'Deploy Requirements Yearly',
      'Delete Redundant Yields'
    ],
    correctAnswer: 0,
    explanation: 'DRY stands for "Don\'t Repeat Yourself" (Andy Hunt & Dave Thomas): Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.',
    officialRef: 'PCET-30-01 Block 3.5 - DRY Principle',
    tags: ['dry', 'clean-code', 'principles']
  },
  {
    id: 'pcet-3-083',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'What does the KISS principle advocate?',
    codeSnippet: '# Principle acronym:\n# K - Keep\n# I - It\n# S - Simple,\n# S - Stupid (or Simple)',
    options: [
      'Systems perform best when they are kept simple rather than made complicated; unnecessary complexity should be avoided',
      'Keyboards must be cleaned with sanitized wipes',
      'Always use the most complex design pattern possible to demonstrate skill',
      'Never write comments in Python code'
    ],
    correctAnswer: 0,
    explanation: 'KISS (Keep It Simple, Stupid) states that simplicity should be a key design goal. Simple code is easier to understand, test, debug, and maintain than clever, convoluted code.',
    officialRef: 'PCET-30-01 Block 3.5 - KISS Principle',
    tags: ['kiss', 'simplicity', 'clean-code']
  },
  {
    id: 'pcet-3-084',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'What does the YAGNI principle stand for?',
    codeSnippet: '# Developer thought:\n# "We don\'t need multi-currency crypto exchange right now, but let\'s spend\n# 3 weeks building it just in case we need it 3 years from now."\n# Lead response: "YAGNI!"',
    options: [
      'You Aren\'t Gonna Need It',
      'Yield All Generic Number Interfaces',
      'Your Application Gains New Improvements',
      'You Always Gather Network Insights'
    ],
    correctAnswer: 0,
    explanation: 'YAGNI ("You Aren\'t Gonna Need It") from Extreme Programming states that programmers should not add functionality until it is deemed actually necessary, avoiding speculative complexity.',
    officialRef: 'PCET-30-01 Block 3.5 - YAGNI Principle',
    tags: ['yagni', 'anti-overengineering', 'principles']
  },
  {
    id: 'pcet-3-085',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'What is the "Boy Scout Rule" in software craftsmanship?',
    codeSnippet: '# Team rule:\n# "Always leave the campground cleaner than you found it."\n# When working on a module, leave the code a little cleaner than it was before your change.',
    options: [
      'Wearing scout uniforms during sprint demos',
      'Always leave the code cleaner than you found it (e.g. fix a typo, rename a confusing variable, or add a missing test whenever touching a file)',
      'Only programming while camping in the wilderness',
      'Requiring developers to earn merit badges'
    ],
    correctAnswer: 1,
    explanation: 'The Boy Scout Rule (popularized by Robert C. Martin): "Always leave the code cleaner than you found it." Small continuous micro-cleanups gradually eliminate technical debt over time.',
    officialRef: 'PCET-30-01 Block 3.5 - Boy Scout Rule',
    tags: ['boy-scout-rule', 'clean-code', 'continuous-improvement']
  },
  {
    id: 'pcet-3-086',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'SOLID Principles',
    difficulty: 'Beginner',
    question: 'In the SOLID design principles, what does the "S" stand for?',
    codeSnippet: '# S - Single Responsibility Principle (SRP):\n# "A class should have one, and only one, reason to change."',
    options: [
      'Single Responsibility Principle',
      'Sequential Requirements Process',
      'Static Reflection Paradigm',
      'Secure Software Protocol'
    ],
    correctAnswer: 0,
    explanation: 'The Single Responsibility Principle (SRP) states that every class or module should have responsibility over a single part of the functionality, and only one reason to change.',
    officialRef: 'PCET-30-01 Block 3.5 - SOLID Principles (SRP)',
    tags: ['solid', 'srp', 'architecture']
  },
  {
    id: 'pcet-3-087',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'SOLID Principles',
    difficulty: 'Intermediate',
    question: 'What does the "O" (Open/Closed Principle) in SOLID dictate?',
    codeSnippet: '# OCP definition:\n# "Software entities (classes, modules, functions) should be open for extension,\n# but closed for modification."',
    options: [
      'Code should be open source on GitHub and closed on private servers',
      'Software should be open for extension (adding new behavior via polymorphism/subclasses) but closed for modification (not having to alter tested, existing code)',
      'Functions must be opened with def and closed with return',
      'All database connections must be closed immediately'
    ],
    correctAnswer: 1,
    explanation: 'The Open/Closed Principle (OCP) states that software should be extensible without modifying existing, tested source code (e.g., using inheritance, interfaces, or strategy patterns).',
    officialRef: 'PCET-30-01 Block 3.5 - SOLID Principles (OCP)',
    tags: ['solid', 'ocp', 'design-principles']
  },
  {
    id: 'pcet-3-088',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'SOLID Principles',
    difficulty: 'Intermediate',
    question: 'What does the "L" (Liskov Substitution Principle - LSP) ensure?',
    codeSnippet: '# Classic LSP violation:\n# Class Rectangle has set_width() and set_height().\n# Subclass Square overrides them so changing width changes height too.\n# Passing Square to a function expecting Rectangle breaks mathematical expectations!',
    options: [
      'Subtypes must be substitutable for their base types without altering the correctness of the program',
      'Linear search is preferred over binary search',
      'Liskov is the author of Python',
      'All lists in Python must be sorted'
    ],
    correctAnswer: 0,
    explanation: 'Liskov Substitution Principle (Barbara Liskov): Subclasses must be substitutable for their superclasses without breaking caller expectations, postconditions, or invariants.',
    officialRef: 'PCET-30-01 Block 3.5 - SOLID Principles (LSP)',
    tags: ['solid', 'lsp', 'subtyping', 'inheritance']
  },
  {
    id: 'pcet-3-089',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'SOLID Principles',
    difficulty: 'Intermediate',
    question: 'What does the "I" (Interface Segregation Principle - ISP) require?',
    codeSnippet: '# ISP violation:\n# A giant interface Worker with methods: work(), eat(), sleep(), fly(), swim().\n# HumanWorker has to implement fly(), raising NotImplementedError!',
    options: [
      'Clients should not be forced to depend on methods or interfaces they do not use; prefer many small, specific interfaces over one bloated interface',
      'Internet connection is required to run tests',
      'Interfaces must always be written in uppercase',
      'Every class must implement at least 10 interfaces'
    ],
    correctAnswer: 0,
    explanation: 'The Interface Segregation Principle states that no client should be forced to depend on methods it does not use. Large interfaces should be split into smaller, cohesive ones.',
    officialRef: 'PCET-30-01 Block 3.5 - SOLID Principles (ISP)',
    tags: ['solid', 'isp', 'interfaces']
  },
  {
    id: 'pcet-3-090',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'SOLID Principles',
    difficulty: 'Intermediate',
    question: 'What does the "D" (Dependency Inversion Principle - DIP) advocate, and how does it support testability?',
    codeSnippet: '# Tightly coupled (hard to test without real DB):\nclass UserService:\n    def __init__(self):\n        self.db = MySQLDatabaseConnection("prod-server")\n\n# Inverted (easy to test with mock DB):\nclass UserService:\n    def __init__(self, db_client: DatabaseInterface):\n        self.db = db_client',
    options: [
      'High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces), enabling trivial substitution of test doubles (mocks/stubs)',
      'Dependencies should be installed in reverse alphabetical order',
      'Dictionaries must be inverted using zip()',
      'Developers should invert screen colors to dark mode'
    ],
    correctAnswer: 0,
    explanation: 'DIP states that high-level policies should depend on abstractions, not concrete low-level implementations. Passing dependencies via Dependency Injection makes unit testing trivial using test doubles.',
    officialRef: 'PCET-30-01 Block 3.5 - SOLID Principles (DIP)',
    tags: ['solid', 'dip', 'dependency-injection', 'testability']
  },
  {
    id: 'pcet-3-091',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Software Architecture',
    difficulty: 'Beginner',
    question: 'What is "Separation of Concerns" (SoC)?',
    codeSnippet: '# MVC Pattern separation:\n# - Model: Business logic and data storage\n# - View: User interface rendering\n# - Controller: User input handling and routing',
    options: [
      'A design principle for separating a computer program into distinct sections such that each section addresses a separate concern or domain aspect',
      'Separating developers and testers into different office buildings',
      'Deleting database tables',
      'Using separate monitors for writing code'
    ],
    correctAnswer: 0,
    explanation: 'Separation of Concerns divides a system into modular boundaries where each module addresses a specific responsibility (e.g. data access vs business rules vs presentation), simplifying testing.',
    officialRef: 'PCET-30-01 Block 3.5 - Separation of Concerns',
    tags: ['separation-of-concerns', 'modularity', 'mvc']
  },
  {
    id: 'pcet-3-092',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'In Python, what is the "Zen of Python" (PEP 20)?',
    codeSnippet: 'import this\n# "Beautiful is better than ugly.\n#  Explicit is better than implicit.\n#  Simple is better than complex.\n#  Readability counts."',
    options: [
      'A collection of 19 guiding design aphorisms for the Python language that emphasize clarity, simplicity, and readability',
      'A meditation app written in Python',
      'A compiler flag that enables optimization',
      'The terms of service of the Python Software Foundation'
    ],
    correctAnswer: 0,
    explanation: 'The Zen of Python (PEP 20, by Tim Peters) summarizes the philosophy of Python: favoring explicit over implicit, readability, simplicity, and one obvious way to do things.',
    officialRef: 'PCET-30-01 Block 3.5 - The Zen of Python (PEP 20)',
    tags: ['zen-of-python', 'pep20', 'python-philosophy']
  },
  {
    id: 'pcet-3-093',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Design Patterns',
    difficulty: 'Intermediate',
    question: 'What is the "Factory Method" design pattern and how does it aid testability?',
    codeSnippet: '# Factory pattern:\nclass PaymentGatewayFactory:\n    @staticmethod\n    def get_gateway(env: str) -> PaymentGateway:\n        if env == "testing":\n            return MockPaymentGateway()\n        return StripePaymentGateway()',
    options: [
      'A creational pattern that provides an interface for creating objects, allowing tests to swap in mock or stub implementations without changing caller logic',
      'A factory that manufactures computer processors',
      'A pattern that creates database tables automatically',
      'A pattern used only in manufacturing applications'
    ],
    correctAnswer: 0,
    explanation: 'The Factory pattern decouples object creation from usage. It enhances testability by allowing test suites to inject mock or in-memory instances simply by configuring the factory.',
    officialRef: 'PCET-30-01 Block 3.5 - Creational Design Patterns',
    tags: ['factory-pattern', 'design-patterns', 'testability']
  },
  {
    id: 'pcet-3-094',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Design Patterns',
    difficulty: 'Intermediate',
    question: 'Why is the "Singleton" design pattern often considered an anti-pattern when designing for unit testing?',
    codeSnippet: '# Singleton pattern:\nclass AppConfig:\n    _instance = None\n    # Holds global mutable state shared across all functions!\n    # Tests that mutate AppConfig pollute all subsequent tests.',
    options: [
      'Because Singletons introduce global state and tight coupling, making tests dependent on execution order and hard to run in parallel without cross-test pollution',
      'Because Python does not allow classes with only one instance',
      'Because Singletons consume 100% of CPU memory',
      'Because Singletons are deprecated in Python 3'
    ],
    correctAnswer: 0,
    explanation: 'Singletons maintain global shared state. When unit tests mutate a Singleton, subsequent tests inherit the modified state, breaking test isolation and preventing parallel test execution.',
    officialRef: 'PCET-30-01 Block 3.5 - Singleton Anti-Pattern in Testing',
    tags: ['singleton', 'global-state', 'test-isolation']
  },
  {
    id: 'pcet-3-095',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Intermediate',
    question: 'What is the "Law of Demeter" (Principle of Least Knowledge)?',
    codeSnippet: '# Demeter violation (train wreck):\ncity = order.customer.address.city.name.strip()\n\n# Adhering to Demeter:\ncity = order.get_shipping_city()',
    options: [
      'A module should only talk to its immediate neighbors and avoid reaching deeply into internal collaborator structures ("don\'t talk to strangers")',
      'A Greek legal regulation regarding software sales',
      'A rule that variables cannot be longer than 8 characters',
      'A law stating that tests must run in under 1 second'
    ],
    correctAnswer: 0,
    explanation: 'The Law of Demeter states that an object should only invoke methods on itself, its fields, method parameters, or objects it creates. Long chains (`a.b().c().d()`) indicate tight coupling.',
    officialRef: 'PCET-30-01 Block 3.5 - Law of Demeter',
    tags: ['law-of-demeter', 'coupling', 'clean-code']
  },
  {
    id: 'pcet-3-096',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'Why are side-effects in functions considered detrimental to unit testability?',
    codeSnippet: '# Function with hidden side-effects:\ndef calculate_discount(price: float) -> float:\n    # Hidden: Modifies global variable, writes to external file, mutates database!\n    global current_user_discount\n    current_user_discount += 1\n    return price * 0.90',
    options: [
      'Side-effects make functions non-deterministic, hard to isolate in unit tests, and prone to breaking other tests via shared state',
      'Python refuses to run functions with side-effects',
      'Side-effects make the code formatting invalid according to PEP 8',
      'Side-effects delete unit test files'
    ],
    correctAnswer: 0,
    explanation: 'Pure functions (no side-effects, deterministic output based solely on inputs) are trivial to test. Hidden side-effects (modifying globals, file I/O) require complex setup and teardown.',
    officialRef: 'PCET-30-01 Block 3.5 - Side Effects and Testability',
    tags: ['pure-functions', 'side-effects', 'testability']
  },
  {
    id: 'pcet-3-097',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Software Design Principles',
    difficulty: 'Intermediate',
    question: 'What is "Composition over Inheritance"?',
    codeSnippet: '# Inheritance: Class Dog inherits from Animal, Hunter, Pet, Mammal...\n# Composition:\nclass Dog:\n    def __init__(self, bark_behavior, movement_behavior):\n        self.barker = bark_behavior\n        self.mover = movement_behavior',
    options: [
      'Favoring object composition (has-a relationships) over class inheritance (is-a relationships) to achieve greater flexibility, loose coupling, and easier test stubbing',
      'Writing music compositions while programming',
      'Inheriting from at least 15 base classes in every module',
      'A rule that forbids using Python classes'
    ],
    correctAnswer: 0,
    explanation: 'Composition over Inheritance promotes assembling objects from smaller components rather than building deep, rigid inheritance hierarchies. In tests, individual behaviors can easily be swapped or mocked.',
    officialRef: 'PCET-30-01 Block 3.5 - Composition over Inheritance',
    tags: ['composition', 'inheritance', 'loose-coupling']
  },
  {
    id: 'pcet-3-098',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Clean Code Principles',
    difficulty: 'Beginner',
    question: 'When is a code comment considered an "anti-pattern" in clean code?',
    codeSnippet: '# Anti-pattern comment:\n# Add 1 to index to adjust for 0-indexing\ni = i + 1\n\n# Good self-documenting code:\ncurrent_page_number = current_index + 1',
    options: [
      'When the comment merely restates what the code does or compensates for bad, unreadable variable names and convoluted logic instead of writing clear code',
      'When comments are written in English',
      'When comments are shorter than 10 words',
      'All comments are always strictly forbidden'
    ],
    correctAnswer: 0,
    explanation: 'Clean code uses comments to explain "Why" a decision was made (business context, subtle bug workaround), not "What" the code is doing. Obvious restatements indicate poor code clarity.',
    officialRef: 'PCET-30-01 Block 3.5 - Clean Code Comments',
    tags: ['comments', 'clean-code', 'self-documenting']
  },
  {
    id: 'pcet-3-099',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Design Patterns',
    difficulty: 'Intermediate',
    question: 'What is the "Observer Pattern" and how is it used in testing event-driven Python code?',
    codeSnippet: '# Observer setup:\nclass EventEmitter:\n    def __init__(self):\n        self._subscribers = []\n\n    def subscribe(self, callback):\n        self._subscribers.append(callback)\n\n    def notify(self, data):\n        for sub in self._subscribers:\n            sub(data)',
    options: [
      'A behavioral pattern where an object maintains a list of dependents (observers) and notifies them of state changes; tests can subscribe spy/mock callbacks to verify event firing',
      'Watching developers code over their shoulders',
      'A Python module that records keystrokes',
      'A pattern that watches server temperatures'
    ],
    correctAnswer: 0,
    explanation: 'The Observer pattern decouples event producers from consumers. In testing, a test can easily subscribe a mock/spy listener to verify that events are emitted with the expected payloads.',
    officialRef: 'PCET-30-01 Block 3.5 - Observer Pattern in Testing',
    tags: ['observer-pattern', 'event-driven', 'testability']
  },
  {
    id: 'pcet-3-100',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.5',
    category: 'Software Design Principles',
    difficulty: 'Intermediate',
    question: 'How does high testability directly influence overall software architecture?',
    codeSnippet: '# Architecture observation:\n# Designing code to be easily unit tested naturally forces developers to write\n# modular, decoupled, single-responsibility components with explicit dependency injection.',
    options: [
      'Designing for testability naturally drives clean architecture, high cohesion, low coupling, and clear interface boundaries',
      'It makes the code run 10x slower',
      'It requires using only functional programming',
      'It eliminates the need for software architecture entirely'
    ],
    correctAnswer: 0,
    explanation: 'Testability and good architecture are mutually reinforcing. Code that is easy to unit test is inherently modular, loosely coupled, and has clear boundaries with minimal hidden dependencies.',
    officialRef: 'PCET-30-01 Block 3.5 - Architecture and Testability',
    tags: ['testability', 'clean-architecture', 'quality']
  }
];
