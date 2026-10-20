import json
import sys

ns = {
    "write_ts_file": lambda *args, **kwargs: None,
    "print": lambda *args, **kwargs: None,
}
with open("tmp/make_block4.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace the barrel write at the end
code = code.replace('with open("src/data/pcatSection4Flashcards.ts", "w", encoding="utf-8") as f:\n    f.write(barrel)', 'pass')

exec(code, ns)

existing_cards = ns["cards"] + ns["part2_cards"]
print(f"Loaded {len(existing_cards)} existing cards for Block 4")

extra_cards = [
    {
        "id": "pcat-4-071",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What does the 'Self-Validating' principle of F.I.R.S.T. require of a unit test?",
        "codeSnippet": "# Self-Validating:\n# The test passes or fails automatically without manual human inspection of console logs or print statements.",
        "options": [
            "The test must have a crisp boolean outcome (pass or fail) determined by automated assertions, without requiring a human to interpret logs",
            "The test must validate its own author's digital certificate",
            "The test must compile its own Python interpreter",
            "The test must send an email to the QA manager upon completion"
        ],
        "correctAnswer": 0,
        "explanation": "Self-Validating means tests require no manual inspection of logs or printouts. The test runner automatically determines success or failure based on automated assertions.",
        "officialRef": "PCAT-31-0x Block 4.1: The F.I.R.S.T. Principles: Self-Validating",
        "tags": ["first-principles", "self-validating", "automation"]
    },
    {
        "id": "pcat-4-072",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What does the 'Timely' (or 'Thorough') principle of F.I.R.S.T. state?",
        "codeSnippet": "# Timely:\n# Written just before the production code (TDD) or concurrently with the feature.",
        "options": [
            "Unit tests should be written in a timely manner (ideally just before or concurrently with code) and thoroughly cover positive, negative, and edge-case paths",
            "Tests must run at exactly 12:00 PM every day",
            "Tests must complete in under 5 nanoseconds",
            "Tests should only be written once a project is finished"
        ],
        "correctAnswer": 0,
        "explanation": "Timely means tests are authored just before production code (driving design) or alongside it. Thorough means testing happy paths, boundary conditions, security constraints, and failure modes.",
        "officialRef": "PCAT-31-0x Block 4.1: The F.I.R.S.T. Principles: Timely and Thorough",
        "tags": ["first-principles", "timely", "thorough"]
    },
    {
        "id": "pcat-4-073",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is a `TestSuite` object in Python's xUnit architecture, and how is it constructed manually?",
        "codeSnippet": "import unittest\n\nsuite = unittest.TestSuite()\nsuite.addTest(TestMath('test_add'))\nsuite.addTest(TestMath('test_subtract'))",
        "options": [
            "An aggregation of individual TestCase instances or other TestSuites grouped together to be executed as a composite batch",
            "A test database container",
            "A documentation generator for unittest",
            "A multi-threaded CPU pool"
        ],
        "correctAnswer": 0,
        "explanation": "A TestSuite represents a composite collection of test cases and nested suites that can be executed together by a TestRunner (implementing the Composite design pattern).",
        "officialRef": "PCAT-31-0x Block 4.2: The TestSuite Component",
        "tags": ["TestSuite", "xunit", "architecture"]
    },
    {
        "id": "pcat-4-074",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the primary responsibility of `unittest.TestLoader`?",
        "codeSnippet": "loader = unittest.TestLoader()\nsuite = loader.discover(start_dir='tests')",
        "options": [
            "Creating test suites by discovering and loading test cases from modules, classes, and directories according to naming patterns",
            "Compiling Python source code into machine binaries",
            "Installing test dependencies from PyPI",
            "Starting mock web servers"
        ],
        "correctAnswer": 0,
        "explanation": "The TestLoader class is responsible for loading test cases from classes, modules, and directories, assembling them into TestSuite objects.",
        "officialRef": "PCAT-31-0x Block 4.2: The TestLoader Component",
        "tags": ["TestLoader", "test-discovery", "xunit"]
    },
    {
        "id": "pcat-4-075",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "How does `unittest.TestLoader.loadTestsFromTestCase(TestCaseClass)` determine which methods to include in the suite?",
        "codeSnippet": "loader = unittest.TestLoader()\nsuite = loader.loadTestsFromTestCase(MyTestClass)",
        "options": [
            "It inspects the class and creates an instance for every method whose name begins with the prefix specified by testMethodPrefix (default 'test')",
            "It runs all methods in the class alphabetically",
            "It only includes methods decorated with @test",
            "It reads method names from a text file"
        ],
        "correctAnswer": 0,
        "explanation": "loadTestsFromTestCase inspects the class attributes and creates a TestCase instance for each method whose name starts with loader.testMethodPrefix ('test' by default).",
        "officialRef": "PCAT-31-0x Block 4.2: Loading Tests from TestCase Classes",
        "tags": ["loadTestsFromTestCase", "TestLoader", "method-prefix"]
    },
    {
        "id": "pcat-4-076",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the role of `unittest.TextTestRunner` in the xUnit architecture?",
        "codeSnippet": "runner = unittest.TextTestRunner(verbosity=2)\nresult = runner.run(suite)",
        "options": [
            "A test runner implementation that executes a TestSuite and displays results in textual format to a stream (e.g. sys.stderr)",
            "A tool that transcribes audio into text",
            "A text editor for writing test files",
            "A syntax highlighter for terminal emulators"
        ],
        "correctAnswer": 0,
        "explanation": "TextTestRunner runs test suites, manages console output streams, formats dots/failures/errors according to verbosity settings, and returns a TestResult object.",
        "officialRef": "PCAT-31-0x Block 4.2: The TextTestRunner Component",
        "tags": ["TextTestRunner", "xunit", "runner"]
    },
    {
        "id": "pcat-4-077",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What information is collected and managed by the `unittest.TestResult` object during a test run?",
        "codeSnippet": "# Accessing TestResult properties:\nassert result.wasSuccessful()\nprint(len(result.failures), len(result.errors), len(result.skipped))",
        "options": [
            "Outcomes of all executed tests: counts of failures, errors, skips, expected failures, unexpected successes, and tracebacks",
            "CPU clock frequency and GPU temperature",
            "Git commit hash and branch history",
            "Line-by-line assembly instructions"
        ],
        "correctAnswer": 0,
        "explanation": "TestResult compiles the execution statistics: whether the run was successful, lists of failed tests and error tracebacks, skipped tests, and total tests run.",
        "officialRef": "PCAT-31-0x Block 4.2: The TestResult Component",
        "tags": ["TestResult", "xunit", "diagnostics"]
    },
    {
        "id": "pcat-4-078",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "CLI Runner Flags",
        "difficulty": "Beginner",
        "question": "What does the `-f` (or `--failfast`) command-line flag do when running tests with `python -m unittest`?",
        "codeSnippet": "$ python -m unittest -f",
        "options": [
            "Stops the test run immediately upon encountering the very first failure or error",
            "Runs tests 10 times faster by skipping assertions",
            "Deletes failed tests automatically",
            "Suppresses all error output"
        ],
        "correctAnswer": 0,
        "explanation": "The `-f` or `--failfast` flag stops the test run immediately at the first failure or error, rather than continuing to execute the remainder of the suite.",
        "officialRef": "PCAT-31-0x Block 4.3: CLI Flags: Failfast",
        "tags": ["--failfast", "-f", "cli"]
    },
    {
        "id": "pcat-4-079",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "CLI Runner Flags",
        "difficulty": "Intermediate",
        "question": "What does the `-c` (or `--catch`) flag do when running unittest from the command line?",
        "codeSnippet": "$ python -m unittest -c",
        "options": [
            "Catches Control-C during the test run, waiting for the currently executing test to complete before cleanly halting and reporting all results gathered up to that point",
            "Catches syntax errors and fixes them automatically",
            "Catches network packets for packet sniffing",
            "Caches test bytecode in RAM"
        ],
        "correctAnswer": 0,
        "explanation": "`-c` / `--catch` installs a control-c interrupt handler. When interrupted, it waits for the current test to finish and presents a clean report of all tests run so far.",
        "officialRef": "PCAT-31-0x Block 4.3: CLI Flags: Catch Interrupts",
        "tags": ["--catch", "-c", "cli", "interrupts"]
    },
    {
        "id": "pcat-4-080",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "CLI Runner Flags",
        "difficulty": "Intermediate",
        "question": "What does the `-b` (or `--buffer`) flag do when running unittest via the command-line interface?",
        "codeSnippet": "$ python -m unittest -b",
        "options": [
            "Buffers standard output and standard error during test execution, discarding it for passing tests and displaying it only when a test fails or errors",
            "Allocates a 1GB memory buffer for Python",
            "Runs tests in double-buffered GPU mode",
            "Bypasses disk I/O caching"
        ],
        "correctAnswer": 0,
        "explanation": "`-b` / `--buffer` captures stdout and stderr during test execution. If a test passes, output is discarded. If it fails, the captured output is echoed alongside the traceback.",
        "officialRef": "PCAT-31-0x Block 4.3: CLI Flags: Output Buffering",
        "tags": ["--buffer", "-b", "cli", "stdout"]
    },
    {
        "id": "pcat-4-081",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Test Discovery",
        "difficulty": "Beginner",
        "question": "How do you specify the directory where unittest test discovery should begin looking for test files?",
        "codeSnippet": "$ python -m unittest discover -s ___?",
        "options": [
            "-s <directory> (or --start-directory)",
            "-d <directory>",
            "--root <directory>",
            "--path <directory>"
        ],
        "correctAnswer": 0,
        "explanation": "`-s` (or `--start-directory`) specifies the filesystem directory where unittest discovery starts searching for test files (defaults to current directory '.').",
        "officialRef": "PCAT-31-0x Block 4.3: Test Discovery: Start Directory",
        "tags": ["discovery", "-s", "start-directory"]
    },
    {
        "id": "pcat-4-082",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Test Discovery",
        "difficulty": "Beginner",
        "question": "What flag specifies the filename matching pattern for unittest discovery?",
        "codeSnippet": "$ python -m unittest discover -p '*_test.py'",
        "options": [
            "-p <pattern> (or --pattern)",
            "-f <pattern>",
            "--match <pattern>",
            "-m <pattern>"
        ],
        "correctAnswer": 0,
        "explanation": "`-p <pattern>` (or `--pattern`) specifies the glob pattern matching test filenames, which defaults to `'test*.py'`.",
        "officialRef": "PCAT-31-0x Block 4.3: Test Discovery: Pattern Matching",
        "tags": ["discovery", "-p", "pattern"]
    },
    {
        "id": "pcat-4-083",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Test Discovery",
        "difficulty": "Intermediate",
        "question": "What is the purpose of the `-t` (or `--top-level-directory`) option in unittest test discovery?",
        "codeSnippet": "$ python -m unittest discover -s tests -t .",
        "options": [
            "Specifies the top-level directory of the project for package importing purposes (defaults to start directory)",
            "Limits the test run to a maximum duration in seconds",
            "Specifies the operating system thread count",
            "Creates a top-level HTML test report"
        ],
        "correctAnswer": 0,
        "explanation": "`-t` / `--top-level-directory` defines the project root for Python module import resolution, ensuring imports like `from src.my_pkg import ...` resolve correctly during discovery.",
        "officialRef": "PCAT-31-0x Block 4.3: Test Discovery: Top-Level Directory",
        "tags": ["discovery", "-t", "top-level-directory", "imports"]
    },
    {
        "id": "pcat-4-084",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Naming Conventions",
        "difficulty": "Beginner",
        "question": "Why must test methods in a unittest.TestCase subclass begin with 'test' by default?",
        "codeSnippet": "class TestSample(unittest.TestCase):\n    def test_feature(self): ... # Discovered and executed\n    def helper_setup(self): ... # Treated as a helper method, NOT executed as a test",
        "options": [
            "The test runner and loader only discover and execute methods whose names begin with the 'test' prefix",
            "Methods not starting with 'test' cause a SyntaxError in Python",
            "Python unittest deletes methods that do not begin with 'test'",
            "It is required by the Linux operating system kernel"
        ],
        "correctAnswer": 0,
        "explanation": "The TestLoader looks for methods matching `testMethodPrefix` (defaulting to 'test'). Any other methods are treated as private helpers and bypassed during test execution.",
        "officialRef": "PCAT-31-0x Block 4.4: Method Naming Conventions",
        "tags": ["naming-conventions", "test-prefix", "discovery"]
    },
    {
        "id": "pcat-4-085",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Floating Point Assertions",
        "difficulty": "Intermediate",
        "question": "What is the difference between specifying `places=N` and `delta=D` in `self.assertAlmostEqual(a, b)`?",
        "codeSnippet": "# Places comparison:\nself.assertAlmostEqual(1.000001, 1.000002, places=5)\n# Delta comparison:\nself.assertAlmostEqual(100.5, 100.45, delta=0.1)",
        "options": [
            "`places` checks decimal place rounding: round(abs(b - a), places) == 0; `delta` checks that the absolute difference abs(a - b) <= delta",
            "`delta` is only for integers, while `places` is for strings",
            "`places` uses percent difference; `delta` uses CPU cycles",
            "They are exact synonyms with no difference in calculation"
        ],
        "correctAnswer": 0,
        "explanation": "`places` asserts precision by rounding the difference to N decimal places (default 7). `delta` directly asserts that the absolute difference does not exceed the specified threshold.",
        "officialRef": "PCAT-31-0x Block 4.5: Floating-Point Assertions: places vs delta",
        "tags": ["assertAlmostEqual", "floating-point", "delta", "places"]
    },
    {
        "id": "pcat-4-086",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Collection Assertions",
        "difficulty": "Intermediate",
        "question": "Which specialized assertion method verifies two sequences and provides a detailed element-by-element diff highlighting where they diverge?",
        "codeSnippet": "self.___?(seq1, seq2, seq_type=list)",
        "options": [
            "assertSequenceEqual",
            "assertArrayMatch",
            "assertSequenceIdentical",
            "checkSequenceEquality"
        ],
        "correctAnswer": 0,
        "explanation": "assertSequenceEqual(seq1, seq2) verifies that two sequences have identical elements in identical order, and outputs a clear index-level diff of divergence if they do not match.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions: assertSequenceEqual",
        "tags": ["assertSequenceEqual", "sequences", "diffs"]
    },
    {
        "id": "pcat-4-087",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Collection Assertions",
        "difficulty": "Intermediate",
        "question": "What specialized assertion method checks that two dictionaries have the exact same keys and values, providing a key-by-key diff?",
        "codeSnippet": "self.___?({'a': 1, 'b': 2}, {'a': 1, 'b': 3})",
        "options": [
            "assertDictEqual",
            "assertMapEqual",
            "assertDictMatch",
            "verifyDict"
        ],
        "correctAnswer": 0,
        "explanation": "assertDictEqual(d1, d2) tests dictionary equality and produces a detailed failure message identifying missing keys, unexpected keys, and mismatched value pairs.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions: assertDictEqual",
        "tags": ["assertDictEqual", "dictionaries", "diffs"]
    },
    {
        "id": "pcat-4-088",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Collection Assertions",
        "difficulty": "Intermediate",
        "question": "What specialized assertion verifies that two sets are equal, highlighting elements unique to each set upon failure?",
        "codeSnippet": "self.___?({1, 2, 3}, {2, 3, 4})",
        "options": [
            "assertSetEqual",
            "assertSetsSame",
            "assertCollectionUnion",
            "checkSetMatch"
        ],
        "correctAnswer": 0,
        "explanation": "assertSetEqual(set1, set2) compares sets and produces a failure message highlighting differences (items only in set1 and items only in set2).",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions: assertSetEqual",
        "tags": ["assertSetEqual", "sets", "diffs"]
    },
    {
        "id": "pcat-4-089",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Collection Assertions",
        "difficulty": "Intermediate",
        "question": "Which assertion verifies that two lists contain the exact same items in the exact same index positions?",
        "codeSnippet": "self.___?(['a', 'b'], ['a', 'b'])",
        "options": [
            "assertListEqual",
            "assertOrderedList",
            "assertListIdentical",
            "verifyList"
        ],
        "correctAnswer": 0,
        "explanation": "assertListEqual(list1, list2) verifies that both lists contain identical elements in the exact same positional sequence.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions: assertListEqual",
        "tags": ["assertListEqual", "lists", "ordered-collections"]
    },
    {
        "id": "pcat-4-090",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Collection Assertions",
        "difficulty": "Intermediate",
        "question": "What is the critical distinction between `self.assertEqual(len(a), len(b))` and `self.assertCountEqual(a, b)`?",
        "codeSnippet": "# What assertCountEqual actually does:\nself.assertCountEqual([1, 2, 2], [2, 1, 2]) # PASSES! Same elements with same counts!\nself.assertCountEqual([1, 2, 2], [1, 2, 3]) # FAILS! Elements differ!",
        "options": [
            "assertCountEqual asserts that both collections contain the exact same elements with the exact same frequencies regardless of order; it does NOT merely check lengths",
            "assertCountEqual only compares the integer lengths of the two collections",
            "assertCountEqual converts elements into ASCII values before summing them",
            "assertCountEqual is only supported on NumPy arrays"
        ],
        "correctAnswer": 0,
        "explanation": "Despite its confusing name, assertCountEqual(a, b) does NOT just check counts of items; it asserts multiset equality (both iterables have the same elements with the same frequencies, irrespective of order).",
        "officialRef": "PCAT-31-0x Block 4.5: The assertCountEqual Method",
        "tags": ["assertCountEqual", "multiset", "frequency-comparison"]
    },
    {
        "id": "pcat-4-091",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "String Assertions",
        "difficulty": "Intermediate",
        "question": "Which assertion method compares two multiline strings and prints a contextual unified diff upon mismatch?",
        "codeSnippet": "self.___?(actual_multiline_text, expected_multiline_text)",
        "options": [
            "assertMultiLineEqual",
            "assertUnifiedDiff",
            "assertStringBlock",
            "verifyText"
        ],
        "correctAnswer": 0,
        "explanation": "assertMultiLineEqual(first, second) compares multiline strings and produces a diff (similar to difflib unified diff) in failure messages, making it easy to spot discrepancies.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions: assertMultiLineEqual",
        "tags": ["assertMultiLineEqual", "multiline", "diffs"]
    },
    {
        "id": "pcat-4-092",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Logging Assertions",
        "difficulty": "Advanced",
        "question": "Which context manager on unittest.TestCase captures log messages and asserts that at least one message was logged at or above a given level?",
        "codeSnippet": "with self.___?(logger='auth', level='WARNING') as cm:\n    attempt_invalid_login()\n\nassert 'Invalid login' in cm.output[0]",
        "options": [
            "assertLogs",
            "captureLogs",
            "expectLogging",
            "catchLogRecord"
        ],
        "correctAnswer": 0,
        "explanation": "self.assertLogs(logger=None, level=None) verifies that at least one message was logged on the given logger at or above the minimum logging level.",
        "officialRef": "PCAT-31-0x Block 4.5: Asserting Log Output with assertLogs",
        "tags": ["assertLogs", "logging", "context-manager"]
    },
    {
        "id": "pcat-4-093",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Logging Assertions",
        "difficulty": "Advanced",
        "question": "When using with self.assertLogs(...) as cm, what two attributes provide access to the captured log messages?",
        "codeSnippet": "with self.assertLogs('app', level='INFO') as cm:\n    app.start()\n\n# cm.___? (list of LogRecord objects)\n# cm.___? (list of formatted strings like 'INFO:app:Started')",
        "options": [
            "cm.records and cm.output",
            "cm.logs and cm.text",
            "cm.messages and cm.items",
            "cm.history and cm.stream"
        ],
        "correctAnswer": 0,
        "explanation": "cm.records gives direct access to the list of logging.LogRecord instances, while cm.output provides formatted log strings (e.g. 'LEVEL:logger:message').",
        "officialRef": "PCAT-31-0x Block 4.5: assertLogs Context Attributes",
        "tags": ["assertLogs", "cm.records", "cm.output"]
    },
    {
        "id": "pcat-4-094",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Assertion Customization",
        "difficulty": "Intermediate",
        "question": "How does setting `self.longMessage = True` on a TestCase affect assertion failure output?",
        "codeSnippet": "class CustomTest(unittest.TestCase):\n    longMessage = True\n    \n    def test_value(self):\n        self.assertEqual(1, 2, msg='Values must match')",
        "options": [
            "It appends the custom `msg` to the end of the standard diff message, rather than replacing the standard diff message",
            "It enables 2048-character error messages",
            "It prints messages in uppercase",
            "It translates error messages into Latin"
        ],
        "correctAnswer": 0,
        "explanation": "When longMessage is True (default in modern Python 3), unittest outputs BOTH the standard diff and the custom `msg` description upon failure, providing maximum diagnostic context.",
        "officialRef": "PCAT-31-0x Block 4.5: Customizing Assertion Output with longMessage",
        "tags": ["longMessage", "custom-messages", "diagnostics"]
    },
    {
        "id": "pcat-4-095",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Assertion Customization",
        "difficulty": "Intermediate",
        "question": "How can you prevent unittest from truncating long assertion diff output (e.g. when asserting large lists or JSON blobs)?",
        "codeSnippet": "class TestBigPayloads(unittest.TestCase):\n    ___? = None # Disables diff truncation limit!\n    \n    def test_large_dict(self):\n        self.assertDictEqual(large_actual, large_expected)",
        "options": [
            "maxDiff",
            "diffLimit",
            "fullOutput",
            "untruncatedDiff"
        ],
        "correctAnswer": 0,
        "explanation": "Setting self.maxDiff = None (or a larger integer) disables the diff truncation limit, ensuring full difference text is printed even for large data structures.",
        "officialRef": "PCAT-31-0x Block 4.5: Unbounded Diffs with maxDiff",
        "tags": ["maxDiff", "diffs", "configuration"]
    },
    {
        "id": "pcat-4-096",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Project Layout",
        "difficulty": "Beginner",
        "question": "What is the recommended directory structure for standard Python projects separating test code from production code?",
        "codeSnippet": "# Recommended Clean Project Layout:\n# project_root/\n# ├── src/\n# │   └── my_package/\n# └── tests/\n#     ├── __init__.py\n#     └── test_feature.py",
        "options": [
            "A dedicated top-level 'tests/' directory alongside 'src/' containing test modules prefixed with test_*.py",
            "Placing test files randomly in the root folder alongside README.md",
            "Storing tests in the operating system's /tmp directory",
            "Embedding all test code inside docstrings in production files only"
        ],
        "correctAnswer": 0,
        "explanation": "The standard 'src/' layout keeps production code in 'src/<package>' and tests in a parallel 'tests/' directory, preventing test files and fixtures from polluting distribution packages.",
        "officialRef": "PCAT-31-0x Block 4.4: Standard Project Directory Layout",
        "tags": ["project-layout", "src-layout", "best-practices"]
    },
    {
        "id": "pcat-4-097",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Packaging and Distribution",
        "difficulty": "Intermediate",
        "question": "Why is distributing test modules and test fixtures inside production wheel packages considered an anti-pattern?",
        "codeSnippet": "# Anti-pattern: shipping mock servers, heavy test fixtures, and unittests in production PyPI wheel",
        "options": [
            "It inflates download sizes, exposes internal test double scripts, and can introduce unintended dependencies in consumer production environments",
            "Python wheels cannot contain test files",
            "PyPI automatically rejects packages with tests",
            "It causes Python to boot in test mode"
        ],
        "correctAnswer": 0,
        "explanation": "Shipping test fixtures and mock datasets in production distributions bloats package size, risks dependency conflicts, and exposes non-production scripts to consumers.",
        "officialRef": "PCAT-31-0x Block 4.4: Test Isolation in Packaging",
        "tags": ["packaging", "wheels", "distribution"]
    },
    {
        "id": "pcat-4-098",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "Programmatic Execution",
        "difficulty": "Intermediate",
        "question": "How can a test suite be executed programmatically inside Python application code without using the CLI?",
        "codeSnippet": "suite = unittest.defaultTestLoader.loadTestsFromModule(my_test_module)\nrunner = unittest.TextTestRunner(verbosity=2)\nresult = runner.run(suite)",
        "options": [
            "By loading tests with TestLoader, instantiating TextTestRunner, and invoking runner.run(suite)",
            "By calling os.system('python -m unittest')",
            "By importing all test classes into __main__",
            "Programmatic execution is impossible in unittest"
        ],
        "correctAnswer": 0,
        "explanation": "unittest provides clean programmatic execution: loader loads tests into a suite, runner executes runner.run(suite), returning the TestResult object.",
        "officialRef": "PCAT-31-0x Block 4.2: Programmatic Test Execution",
        "tags": ["runner.run", "programmatic-testing", "xunit"]
    },
    {
        "id": "pcat-4-099",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Script Execution",
        "difficulty": "Beginner",
        "question": "What is the standard idiom to make a Python test file directly runnable as a standalone script via `python test_file.py`?",
        "codeSnippet": "if __name__ == '__main__':\n    unittest.___?()",
        "options": [
            "main",
            "run",
            "execute",
            "start"
        ],
        "correctAnswer": 0,
        "explanation": "Calling `unittest.main()` inside `if __name__ == '__main__':` provides a command-line interface to the test script, discovering and running all tests defined in that file.",
        "officialRef": "PCAT-31-0x Block 4.3: Executing Test Scripts with unittest.main",
        "tags": ["unittest.main", "standalone-scripts", "cli"]
    },
    {
        "id": "pcat-4-0100",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Summary of Block 4",
        "difficulty": "Intermediate",
        "question": "Which combination of domains best summarizes the foundational requirements assessed in PCAT Block 4: Foundations of Unit Testing?",
        "codeSnippet": "# Block 4 Summary:\n# - F.I.R.S.T. Principles (Fast, Independent, Repeatable, Self-Validating, Timely)\n# - xUnit Architecture (TestCase, TestSuite, TestRunner, TestLoader, TestResult)\n# - CLI tooling and test discovery flags (-s, -p, -t, -f, -c, -b)\n# - Exhaustive TestCase assertions (equality, sequence, dict, set, multiline, count, logs)",
        "options": [
            "F.I.R.S.T. principles of unit testing, full xUnit framework architecture, CLI runner execution and discovery, and exhaustive specialized TestCase assertions",
            "Writing CSS styling and JavaScript DOM handlers",
            "Training machine learning convolutional neural networks",
            "Configuring Kubernetes pods and Docker swarm networks"
        ],
        "correctAnswer": 0,
        "explanation": "Block 4 forms the bedrock of unit testing for PCAT: the F.I.R.S.T. principles, Python's xUnit architecture, CLI runner operations, and the full catalog of TestCase assertions.",
        "officialRef": "PCAT-31-0x Block 4: Summary of Foundations of Unit Testing",
        "tags": ["block-4-summary", "pcat-core", "foundations"]
    }
]

all_block4_cards = existing_cards + extra_cards
print(f"Total Block 4 cards: {len(all_block4_cards)}")

# Re-index from 1 to 100
for idx, c in enumerate(all_block4_cards, 1):
    c['id'] = f"pcat-4-{idx:03d}"
    c['track'] = 'pcat'
    c['section'] = 'Section 4'

part1 = all_block4_cards[:50]
part2 = all_block4_cards[50:]

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

write_ts_file("src/data/pcatSection4CardsPart1.ts", "pcatSection4CardsPart1", part1)
write_ts_file("src/data/pcatSection4CardsPart2.ts", "pcatSection4CardsPart2", part2)

barrel = (
    "import { Flashcard } from '../types';\n"
    "import { pcatSection4CardsPart1 } from './pcatSection4CardsPart1';\n"
    "import { pcatSection4CardsPart2 } from './pcatSection4CardsPart2';\n\n"
    "export const pcatSection4Flashcards: Flashcard[] = [\n"
    "  ...pcatSection4CardsPart1,\n"
    "  ...pcatSection4CardsPart2,\n"
    "];\n"
)
with open("src/data/pcatSection4Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel)

print("Successfully wrote Block 4 with 100 cards!")
