import json
import sys

ns = {
    "write_ts_file": lambda *args, **kwargs: None,
    "print": lambda *args, **kwargs: None,
}
with open("tmp/make_block3.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace the barrel write at the end
code = code.replace('with open("src/data/pcatSection3Flashcards.ts", "w", encoding="utf-8") as f:\n    f.write(barrel)', 'pass')

exec(code, ns)

existing_cards = ns["cards"] + ns["part2_cards"]
print(f"Loaded {len(existing_cards)} existing cards for Block 3")

extra_cards = [
    {
        "id": "pcat-3-081",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "Context Managers",
        "difficulty": "Advanced",
        "question": "How does contextlib.ExitStack simplify testing scenarios that require a dynamic or variable number of context managers?",
        "codeSnippet": "from contextlib import ExitStack\n\nwith ExitStack() as stack:\n    files = [stack.enter_context(open(f'test_{i}.dat')) for i in range(n)]\n    # All opened files are safely closed in LIFO order upon exit!",
        "options": [
            "It programmatically manages an arbitrary number of context managers, guaranteeing unwinding in LIFO order even if exceptions occur",
            "It forces all context managers to run in separate Linux sub-processes",
            "It prevents memory allocation in context managers",
            "It turns synchronous context managers into async context managers"
        ],
        "correctAnswer": 0,
        "explanation": "contextlib.ExitStack provides programmatic context management, allowing tests to enter a dynamic number of context managers and guaranteeing cleanup in reverse order.",
        "officialRef": "PCAT-31-0x Block 3.2: Programmatic Context Management with ExitStack",
        "tags": ["ExitStack", "contextlib", "resource-management"]
    },
    {
        "id": "pcat-3-082",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "Context Managers",
        "difficulty": "Intermediate",
        "question": "What is the purpose of contextlib.suppress in test fixture setup and teardown?",
        "codeSnippet": "import os\nfrom contextlib import suppress\n\n# Safely delete temp file without raising error if it does not exist:\nwith suppress(FileNotFoundError):\n    os.remove('test_artifact.tmp')",
        "options": [
            "It silently catches and suppresses specified exceptions inside the with block, avoiding boilerplate try/except/pass blocks in cleanup",
            "It disables all assertion failures across the test suite",
            "It suppresses all logging messages sent to stdout",
            "It hides syntax errors during compilation"
        ],
        "correctAnswer": 0,
        "explanation": "contextlib.suppress(*exceptions) is an elegant context manager that catches and ignores specific exceptions, ideal for safe teardown and cleanup routines.",
        "officialRef": "PCAT-31-0x Block 3.2: Clean Teardown with contextlib.suppress",
        "tags": ["contextlib.suppress", "cleanup", "exception-handling"]
    },
    {
        "id": "pcat-3-083",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "Context Managers",
        "difficulty": "Intermediate",
        "question": "How can console output (stdout) be captured or redirected during a test using the standard contextlib module?",
        "codeSnippet": "import io\nfrom contextlib import redirect_stdout\n\nf = io.StringIO()\nwith redirect_stdout(f):\n    print('Hello PCAT!')\n\noutput = f.getvalue().strip()\nassert output == 'Hello PCAT!'",
        "options": [
            "Using with contextlib.redirect_stdout(stream):",
            "Using os.system('capture stdout')",
            "By setting sys.stdout = None",
            "Redirecting is only possible by patching C-level file descriptors"
        ],
        "correctAnswer": 0,
        "explanation": "contextlib.redirect_stdout(target_stream) redirects sys.stdout to a stream like io.StringIO for the duration of the with block, making CLI output assertions clean.",
        "officialRef": "PCAT-31-0x Block 3.2: Redirecting Streams with contextlib",
        "tags": ["redirect_stdout", "contextlib", "stdout-testing"]
    },
    {
        "id": "pcat-3-084",
        "section": "Section 3",
        "chapter": "3.3",
        "category": "Decorators",
        "difficulty": "Intermediate",
        "question": "What is the primary structural difference between a function decorator and a class decorator in Python?",
        "codeSnippet": "# Function decorator: wraps callable\n@measure_time\ndef compute(): pass\n\n# Class decorator: modifies or wraps class\n@singleton\nclass DatabaseManager: pass",
        "options": [
            "A function decorator accepts and returns a function/callable; a class decorator accepts a class object and returns a modified or wrapped class",
            "Class decorators can only be used on abstract classes",
            "Function decorators can only run in Python 2",
            "Class decorators execute every time an instance method is called"
        ],
        "correctAnswer": 0,
        "explanation": "Class decorators take a class as input and return a class (or wrapper), allowing class-wide modifications (like dynamically adding test methods or mocking attributes).",
        "officialRef": "PCAT-31-0x Block 3.3: Function Decorators vs Class Decorators",
        "tags": ["decorators", "class-decorators", "metaprogramming"]
    },
    {
        "id": "pcat-3-085",
        "section": "Section 3",
        "chapter": "3.3",
        "category": "Decorators",
        "difficulty": "Intermediate",
        "question": "Why is @functools.wraps considered mandatory when writing custom test decorators?",
        "codeSnippet": "import functools\n\ndef retry(times):\n    def decorator(func):\n        @functools.wraps(func)  # Crucial!\n        def wrapper(*args, **kwargs):\n            ...\n        return wrapper\n    return decorator",
        "options": [
            "It preserves the original function's name (__name__), docstring (__doc__), and signature, allowing test runners to identify and display tests accurately",
            "It accelerates Python bytecode execution speed",
            "It turns synchronous functions into coroutines",
            "Without it, Python raises a DecoratorError on startup"
        ],
        "correctAnswer": 0,
        "explanation": "@functools.wraps copies original metadata (name, docstring, module) from the wrapped function to the wrapper, preventing test discovery frameworks from losing test identities.",
        "officialRef": "PCAT-31-0x Block 3.3: Preserving Metadata with functools.wraps",
        "tags": ["functools.wraps", "decorators", "test-discovery"]
    },
    {
        "id": "pcat-3-086",
        "section": "Section 3",
        "chapter": "3.3",
        "category": "Decorators",
        "difficulty": "Intermediate",
        "question": "In what order are stacked decorators evaluated and applied in Python?",
        "codeSnippet": "@dec_a\n@dec_b\ndef target():\n    pass\n# Equivalent to: target = dec_a(dec_b(target))",
        "options": [
            "Bottom-up at definition time: dec_b wraps target first, and dec_a wraps the result; at runtime dec_a executes first, then dec_b",
            "Top-down: dec_a wraps target first, then dec_b",
            "Random order based on memory address",
            "Concurrently in two separate threads"
        ],
        "correctAnswer": 0,
        "explanation": "Decorators are applied from the bottom up (closest to the def line first): target = dec_a(dec_b(target)). At call time, dec_a's outer wrapper executes before dec_b's.",
        "officialRef": "PCAT-31-0x Block 3.3: Stacking and Order of Decorators",
        "tags": ["decorators", "execution-order", "stacking"]
    },
    {
        "id": "pcat-3-087",
        "section": "Section 3",
        "chapter": "3.3",
        "category": "Decorators",
        "difficulty": "Advanced",
        "question": "How is a decorator that accepts configuration arguments implemented in Python?",
        "codeSnippet": "def repeat(num_times):\n    def decorator_repeat(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for _ in range(num_times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator_repeat",
        "options": [
            "As a decorator factory: an outer function accepting the arguments that returns the actual decorator function",
            "By setting os.environ['DECORATOR_ARGS']",
            "By passing arguments inside sys.argv",
            "Python does not support decorators with arguments"
        ],
        "correctAnswer": 0,
        "explanation": "A decorator with arguments is a 3-layer closure (decorator factory): the outer function receives arguments and returns a decorator, which wraps and returns the inner function.",
        "officialRef": "PCAT-31-0x Block 3.3: Parameterized Decorator Factories",
        "tags": ["decorators", "decorator-factory", "closures"]
    },
    {
        "id": "pcat-3-088",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Descriptor Protocol",
        "difficulty": "Advanced",
        "question": "What three dunder methods constitute the Python Descriptor Protocol underlying method binding and @property?",
        "codeSnippet": "class Descriptor:\n    def __get__(self, instance, owner): ...\n    def __set__(self, instance, value): ...\n    def __delete__(self, instance): ...",
        "options": [
            "__get__, __set__, and __delete__",
            "__enter__, __exit__, and __call__",
            "__init__, __new__, and __del__",
            "__read__, __write__, and __flush__"
        ],
        "correctAnswer": 0,
        "explanation": "The descriptor protocol consists of __get__(), __set__(), and __delete__(). Python methods, @classmethod, @staticmethod, and @property are all descriptors.",
        "officialRef": "PCAT-31-0x Block 3.5: Python Descriptor Protocol in OOP",
        "tags": ["descriptors", "__get__", "__set__", "internals"]
    },
    {
        "id": "pcat-3-089",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Method Types",
        "difficulty": "Beginner",
        "question": "What is the primary syntactic and behavioral difference between @classmethod and @staticmethod in Python?",
        "codeSnippet": "class MathUtils:\n    @classmethod\n    def from_string(cls, s):\n        # Receives cls as first parameter\n        return cls()\n        \n    @staticmethod\n    def add(a, b):\n        # Receives no implicit first parameter\n        return a + b",
        "options": [
            "@classmethod automatically receives the class object ('cls') as its first parameter; @staticmethod receives no implicit first parameter",
            "@staticmethod is only for private methods; @classmethod is public",
            "@classmethod can only be called on instances; @staticmethod only on classes",
            "@staticmethod executes in C while @classmethod executes in Python"
        ],
        "correctAnswer": 0,
        "explanation": "@classmethod receives the class object 'cls' as its first argument, enabling dynamic instantiation. @staticmethod receives no implicit self/cls and behaves like a plain function.",
        "officialRef": "PCAT-31-0x Block 3.5: classmethod vs staticmethod",
        "tags": ["classmethod", "staticmethod", "method-types"]
    },
    {
        "id": "pcat-3-090",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Method Types",
        "difficulty": "Intermediate",
        "question": "Why is @classmethod preferred over @staticmethod when implementing factory methods in test classes?",
        "codeSnippet": "class BaseTestCase:\n    @classmethod\n    def create_fixture(cls):\n        return cls()  # Properly instantiates DerivedTestCase when called on child!",
        "options": [
            "When inherited by subclasses, cls() correctly instantiates the derived subclass rather than the hardcoded base class (polymorphic instantiation)",
            "@classmethod is 50% faster than @staticmethod",
            "@staticmethod cannot return objects",
            "@classmethod bypasses __init__"
        ],
        "correctAnswer": 0,
        "explanation": "Because 'cls' points to the class through which the method was called, subclassing works seamlessly with @classmethod factories, instantiating the derived test case class.",
        "officialRef": "PCAT-31-0x Block 3.5: Polymorphic Factories with classmethod",
        "tags": ["classmethod", "factory-pattern", "inheritance"]
    },
    {
        "id": "pcat-3-091",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Property Decorator",
        "difficulty": "Intermediate",
        "question": "How does the @property decorator support writing clean test assertions in Python?",
        "codeSnippet": "class BankAccount:\n    @property\n    def is_overdrawn(self) -> bool:\n        return self.balance < 0\n\n# In unit test:\nassert account.is_overdrawn  # Clean attribute syntax without ()",
        "options": [
            "It turns a method into a read-only getter attribute, allowing natural property access syntax without parentheses in test assertions",
            "It stores the property value in a Redis cache",
            "It prevents the attribute from being inspected in unit tests",
            "It forces all return values to be booleans"
        ],
        "correctAnswer": 0,
        "explanation": "@property allows methods to be accessed as attributes, making test assertions read naturally as domain assertions (e.g. assert user.is_active rather than assert user.is_active()).",
        "officialRef": "PCAT-31-0x Block 3.5: Property Access in Test Assertions",
        "tags": ["@property", "attributes", "clean-assertions"]
    },
    {
        "id": "pcat-3-092",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "Context Managers",
        "difficulty": "Intermediate",
        "question": "In a custom context manager class, what determines the value bound to the 'as' target variable in a with statement?",
        "codeSnippet": "class ManagedResource:\n    def __enter__(self):\n        self.conn = connect()\n        return self.conn  # What is returned here is bound to 'c'!\n\nwith ManagedResource() as c:\n    assert c.is_alive()",
        "options": [
            "The return value of the __enter__() method",
            "The instance of the ManagedResource class itself, always",
            "The return value of __init__()",
            "The return value of __exit__()"
        ],
        "correctAnswer": 0,
        "explanation": "Whatever object is returned by the __enter__() method is assigned to the variable following the 'as' keyword in the 'with' statement.",
        "officialRef": "PCAT-31-0x Block 3.2: The __enter__ Return Value and 'as' Target",
        "tags": ["__enter__", "as-target", "context-managers"]
    },
    {
        "id": "pcat-3-093",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "Context Managers",
        "difficulty": "Intermediate",
        "question": "What 4 arguments are received by the __exit__() method of a context manager?",
        "codeSnippet": "def __exit__(self, exc_type, exc_val, exc_tb):\n    ...",
        "options": [
            "self, exc_type, exc_val, exc_tb (the exception type, exception instance, and traceback)",
            "self, status, error, code",
            "self, target, args, kwargs",
            "self, return_value, duration, success"
        ],
        "correctAnswer": 0,
        "explanation": "The __exit__ method receives: self, exc_type (exception class), exc_val (exception instance), and exc_tb (traceback object). If no exception occurred, all three are None.",
        "officialRef": "PCAT-31-0x Block 3.2: The __exit__ Signature and Exception Arguments",
        "tags": ["__exit__", "exc_type", "exc_val", "exc_tb"]
    },
    {
        "id": "pcat-3-094",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "Context Managers",
        "difficulty": "Intermediate",
        "question": "How can __exit__() swallow (suppress) an exception that occurred inside the with block so it does NOT propagate outward?",
        "codeSnippet": "def __exit__(self, exc_type, exc_val, exc_tb):\n    if exc_type is ValueError:\n        return True  # Suppresses ValueError!",
        "options": [
            "By returning a truthy value (such as True) from __exit__",
            "By raising StopIteration",
            "By calling sys.clear_exc()",
            "Exceptions inside with blocks can never be suppressed by __exit__"
        ],
        "correctAnswer": 0,
        "explanation": "If __exit__() returns True (or any truthy value), Python swallows the exception and continues execution past the with statement. If it returns False or None, the exception propagates.",
        "officialRef": "PCAT-31-0x Block 3.2: Suppressing Exceptions in __exit__",
        "tags": ["__exit__", "suppression", "truthy-return"]
    },
    {
        "id": "pcat-3-095",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "contextlib",
        "difficulty": "Beginner",
        "question": "How does the @contextlib.contextmanager decorator allow writing context managers using generator functions?",
        "codeSnippet": "from contextlib import contextmanager\n\n@contextmanager\ndef temp_flag():\n    set_flag(True)   # __enter__ logic\n    try:\n        yield        # with block executes here\n    finally:\n        set_flag(False) # __exit__ cleanup logic",
        "options": [
            "It turns a generator with a single 'yield' into a context manager: code before yield runs on enter, and code after yield runs on exit",
            "It compiles the generator into C++ code",
            "It converts the function into a class with metaclasses",
            "It runs the generator in a background thread"
        ],
        "correctAnswer": 0,
        "explanation": "@contextmanager transforms a generator into a context manager. Execution pauses at 'yield' while the with body runs, and resumes in the finally block for teardown.",
        "officialRef": "PCAT-31-0x Block 3.2: Generator Context Managers with @contextmanager",
        "tags": ["@contextmanager", "generators", "yield"]
    },
    {
        "id": "pcat-3-096",
        "section": "Section 3",
        "chapter": "3.2",
        "category": "contextlib",
        "difficulty": "Advanced",
        "question": "Why MUST the yield inside a @contextlib.contextmanager generator be wrapped in a try/finally block?",
        "codeSnippet": "@contextmanager\ndef managed_resource():\n    acquire()\n    try:\n        yield\n    finally:\n        release()  # Guaranteed cleanup even if with block raises an exception!",
        "options": [
            "Because if an unhandled exception is raised inside the with block, it is re-raised at the yield statement; without try/finally, cleanup code after yield would be skipped",
            "Python raises a SyntaxError if yield is not inside a try block",
            "Because generators cannot execute without finally",
            "To prevent memory leaks in the operating system"
        ],
        "correctAnswer": 0,
        "explanation": "If the code inside the with block raises an exception, it is thrown into the generator at the yield point. A try/finally guarantees cleanup code executes even during exceptions.",
        "officialRef": "PCAT-31-0x Block 3.2: Robust Cleanup in @contextmanager with try/finally",
        "tags": ["try-finally", "contextmanager", "robust-cleanup"]
    },
    {
        "id": "pcat-3-097",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Dunder Methods",
        "difficulty": "Intermediate",
        "question": "What special method enables an instance of a Python class to be invoked directly as a callable (e.g. `obj()`), useful for custom test doubles?",
        "codeSnippet": "class CallableSpy:\n    def __init__(self):\n        self.calls = []\n    def ___?(self, *args):\n        self.calls.append(args)\n        return 'ok'\n\nspy = CallableSpy()\nassert spy('arg1') == 'ok'",
        "options": [
            "__call__",
            "__invoke__",
            "__run__",
            "__execute__"
        ],
        "correctAnswer": 0,
        "explanation": "Defining __call__(self, *args, **kwargs) allows an object to behave like a function, making it easy to create customized mock and spy callables in test suites.",
        "officialRef": "PCAT-31-0x Block 3.5: Callable Objects with __call__",
        "tags": ["__call__", "callables", "spies"]
    },
    {
        "id": "pcat-3-098",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Dunder Methods",
        "difficulty": "Intermediate",
        "question": "How do __repr__ and __str__ differ in their significance for automated test diagnostics?",
        "codeSnippet": "# Difference in test failure outputs:\n# assert item1 == item2\n# AssertionError: User('alice', id=1) != User('bob', id=2)",
        "options": [
            "__repr__ provides an unambiguous, detailed representation intended for developers and debugging (used by test runners and assert outputs); __str__ is an informal readable representation",
            "__str__ is used in test runners; __repr__ is only used for integers",
            "There is no difference; they are exact aliases",
            "__repr__ is deprecated in Python 3"
        ],
        "correctAnswer": 0,
        "explanation": "Test frameworks and assertion diffs use __repr__ to show exact, unambiguous object details when assertions fail. Implementing good __repr__ methods makes debugging test failures fast.",
        "officialRef": "PCAT-31-0x Block 3.5: __repr__ vs __str__ in Testing Diagnostics",
        "tags": ["__repr__", "__str__", "diagnostics"]
    },
    {
        "id": "pcat-3-099",
        "section": "Section 3",
        "chapter": "3.1",
        "category": "Walrus Operator",
        "difficulty": "Intermediate",
        "question": "How does the 'Walrus Operator' (:=) introduced in Python 3.8 streamline test assertion code?",
        "codeSnippet": "# Python 3.8+ Walrus Operator in test:\nassert (match := regex.search(log_line)) is not None\nassert match.group(1) == 'ERROR_500'",
        "options": [
            "It allows assigning a value to a variable within an expression, avoiding redundant method calls when checking and reusing a result in assertions",
            "It automatically retries failing assertions 3 times",
            "It turns assertions into non-blocking background tasks",
            "It converts strings into regex patterns automatically"
        ],
        "correctAnswer": 0,
        "explanation": "The walrus operator (:=) assigns values inside expressions, enabling concise tests where an intermediate result is assigned and immediately asserted (e.g. in a truthiness check).",
        "officialRef": "PCAT-31-0x Block 3.1: Python 3.8 Assignment Expressions in Testing",
        "tags": [":=", "walrus-operator", "clean-assertions"]
    },
    {
        "id": "pcat-3-0100",
        "section": "Section 3",
        "chapter": "3.5",
        "category": "Summary of Block 3",
        "difficulty": "Intermediate",
        "question": "Which combination of topics accurately represents the complete scope of PCAT Block 3: Assertions, Context Managers, Decorators, and Python Methods?",
        "codeSnippet": "# Block 3 Comprehensive Scope:\n# - Assertions and assert invariants\n# - Context managers (__enter__/__exit__, contextlib, suppress, ExitStack)\n# - Decorators (higher-order wrappers, @wraps, parameterized factories)\n# - Python method types (instance, classmethod, staticmethod, property, dunders)",
        "options": [
            "Python assertions and invariant checking, context managers and resource lifecycle protocols, function and class decorators, and Python OOP method types (@classmethod, @staticmethod, @property, dunder methods)",
            "Configuring Apache Kafka clusters and processing stream partitions",
            "Writing HTML5 stylesheets and WebGL 3D graphics",
            "Training recurrent neural networks on GPUs"
        ],
        "correctAnswer": 0,
        "explanation": "Block 3 tests fundamental language mechanics vital for automated testing: assertions, context managers and contextlib, decorators and wraps, and method structures (@classmethod, @staticmethod, @property).",
        "officialRef": "PCAT-31-0x Block 3: Summary of Python Testing Constructs",
        "tags": ["block-3-summary", "pcat-core", "mastery"]
    }
]

all_block3_cards = existing_cards + extra_cards
print(f"Total Block 3 cards: {len(all_block3_cards)}")

# Re-index from 1 to 100
for idx, c in enumerate(all_block3_cards, 1):
    c['id'] = f"pcat-3-{idx:03d}"
    c['track'] = 'pcat'
    c['section'] = 'Section 3'

part1 = all_block3_cards[:50]
part2 = all_block3_cards[50:]

def format_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pcat',\n"
        f"    section: {json.dumps(c['section'])},\n"
        f"    chapter: {json.dumps(c['chapter'])},\n"
        f"    category: {json.dumps(c['category'])},\n"
        f"    difficulty: {json.dumps(c['difficulty'])},\n"
        f"    question: {json.dumps(c['question'])},\n"
        f"    codeSnippet: {json.dumps(c['codeSnippet'])},\n"
        f"    options: {json.dumps(c['options'])},\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_ts_file(filepath, varname, cards):
    formatted = ",\n".join(format_card(c) for c in cards)
    content = (
        "import { Flashcard } from '../types';\n\n"
        f"export const {varname}: Flashcard[] = [\n"
        f"{formatted}\n"
        "];\n"
    )
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

write_ts_file("src/data/pcatSection3CardsPart1.ts", "pcatSection3CardsPart1", part1)
write_ts_file("src/data/pcatSection3CardsPart2.ts", "pcatSection3CardsPart2", part2)

barrel = (
    "import { Flashcard } from '../types';\n"
    "import { pcatSection3CardsPart1 } from './pcatSection3CardsPart1';\n"
    "import { pcatSection3CardsPart2 } from './pcatSection3CardsPart2';\n\n"
    "export const pcatSection3Flashcards: Flashcard[] = [\n"
    "  ...pcatSection3CardsPart1,\n"
    "  ...pcatSection3CardsPart2,\n"
    "];\n"
)
with open("src/data/pcatSection3Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel)

print("Successfully wrote Block 3 with 100 cards!")
