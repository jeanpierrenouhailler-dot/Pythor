import { Flashcard } from '../types';

export const pcetSection4CardsPart1: Flashcard[] = [
  // Chapter 4.1: The unittest Standard Library Framework (Cards 1-20)
  {
    id: 'pcet-4-001',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Beginner',
    question: 'In Python\'s standard library `unittest` module, what base class must a test class inherit from?',
    codeSnippet: 'import unittest\n\nclass TestCalculator( [ ? ] ):\n    def test_add(self):\n        self.assertEqual(1 + 1, 2)',
    options: [
      'unittest.TestCase',
      'unittest.TestBase',
      'unittest.TestSuite',
      'object'
    ],
    correctAnswer: 0,
    explanation: 'In the `unittest` framework, individual test classes must subclass `unittest.TestCase` to gain access to assertion methods and lifecycle hooks.',
    officialRef: 'PCET-30-01 Block 4.1 - unittest.TestCase',
    tags: ['unittest', 'testcase', 'standard-library']
  },
  {
    id: 'pcet-4-002',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Beginner',
    question: 'What naming convention must test methods follow in `unittest` for the test runner to discover and execute them?',
    codeSnippet: 'class TestAuth(unittest.TestCase):\n    def verify_login(self):  # Will this run automatically?\n        pass\n\n    def test_logout(self):   # Will this run automatically?\n        pass',
    options: [
      'Method names must begin with the prefix `test` (e.g. `test_logout`)',
      'Method names must end with `_check`',
      'Method names must be decorated with `@run`',
      'Method names must be written in ALL_CAPS'
    ],
    correctAnswer: 0,
    explanation: 'By default, the `unittest` test loader discovers and runs methods whose names begin with `test` (e.g., `test_logout`). Methods not starting with `test` are treated as helper methods.',
    officialRef: 'PCET-30-01 Block 4.1 - Test Method Naming',
    tags: ['unittest', 'naming-convention', 'discovery']
  },
  {
    id: 'pcet-4-003',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Lifecycle',
    difficulty: 'Beginner',
    question: 'In `unittest.TestCase`, when are the `setUp()` and `tearDown()` methods called?',
    codeSnippet: 'class TestDatabase(unittest.TestCase):\n    def setUp(self):\n        self.db = connect_test_db()\n\n    def tearDown(self):\n        self.db.disconnect()',
    options: [
      'Once before the first test method, and once after the last test method in the class',
      'Immediately before and after EVERY individual test method in the class',
      'Only if a test fails',
      'During module compilation only'
    ],
    correctAnswer: 1,
    explanation: '`setUp()` is called immediately before each individual test method is invoked; `tearDown()` is called immediately after each test method completes, even if an exception was raised.',
    officialRef: 'PCET-30-01 Block 4.1 - setUp and tearDown Fixtures',
    tags: ['unittest', 'setup', 'teardown', 'fixtures']
  },
  {
    id: 'pcet-4-004',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Lifecycle',
    difficulty: 'Intermediate',
    question: 'How do `setUpClass()` and `tearDownClass()` differ from `setUp()` and `tearDown()`?',
    codeSnippet: 'class TestHeavyResource(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        cls.server = start_expensive_docker_container()\n\n    @classmethod\n    def tearDownClass(cls):\n        cls.server.stop()',
    options: [
      'They are class methods executed once for the entire TestCase class, rather than before and after every test method',
      'They can only be used on Windows',
      'They are deprecated in Python 3',
      'They run inside a separate thread for every test'
    ],
    correctAnswer: 0,
    explanation: '`@classmethod def setUpClass(cls)` runs once before any tests in the class execute. `@classmethod def tearDownClass(cls)` runs once after all tests in the class finish, saving time on expensive resources.',
    officialRef: 'PCET-30-01 Block 4.1 - Class-level Fixtures',
    tags: ['unittest', 'setupclass', 'teardownclass', 'performance']
  },
  {
    id: 'pcet-4-005',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Assertions',
    difficulty: 'Beginner',
    question: 'Which `unittest.TestCase` assertion method should be used to verify that a function raises a `ValueError`?',
    codeSnippet: 'class TestParser(unittest.TestCase):\n    def test_invalid_input(self):\n        with [ ? ](ValueError):\n            parse_age("-5")',
    options: [
      'self.assertRaises',
      'self.assertException',
      'self.assertError',
      'self.catchError'
    ],
    correctAnswer: 0,
    explanation: '`self.assertRaises(ExceptionClass)` is used as a context manager (or function caller) to assert that the enclosed code raises the specified exception.',
    officialRef: 'PCET-30-01 Block 4.1 - assertRaises',
    tags: ['unittest', 'assertions', 'exceptions']
  },
  {
    id: 'pcet-4-006',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Assertions',
    difficulty: 'Intermediate',
    question: 'Why should `self.assertAlmostEqual(a, b)` be used instead of `self.assertEqual(a, b)` when comparing floating-point numbers?',
    codeSnippet: 'class TestMath(unittest.TestCase):\n    def test_float_math(self):\n        val = 0.1 + 0.2  # 0.30000000000000004 due to IEEE 754 precision\n        self.assertAlmostEqual(val, 0.3, places=7)',
    options: [
      'Because floating-point representation errors in binary arithmetic make exact equality (`0.1 + 0.2 == 0.3`) evaluate to False',
      'Because assertEqual is not supported for numbers in unittest',
      'Because assertAlmostEqual runs 10x faster',
      'Because assertAlmostEqual rounds numbers to the nearest integer'
    ],
    correctAnswer: 0,
    explanation: 'Binary floating-point arithmetic (IEEE 754) introduces small precision discrepancies (e.g. `0.1 + 0.2 != 0.3`). `assertAlmostEqual` compares values up to a specified number of decimal places (default 7).',
    officialRef: 'PCET-30-01 Block 4.1 - assertAlmostEqual',
    tags: ['unittest', 'floating-point', 'assertAlmostEqual']
  },
  {
    id: 'pcet-4-007',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Assertions',
    difficulty: 'Beginner',
    question: 'What is the purpose of the optional `msg` parameter in `unittest` assertions?',
    codeSnippet: 'self.assertEqual(status_code, 200, msg="Endpoint failed to return HTTP 200 OK")',
    options: [
      'It sends a text message to the developer\'s phone',
      'It provides a custom descriptive failure message displayed in the test runner output if the assertion fails',
      'It encrypts the assertion result in a log file',
      'It suppresses test output on success'
    ],
    correctAnswer: 1,
    explanation: 'Every `unittest.TestCase` assertion accepts an optional `msg` parameter that prints a custom explanation in the failure traceback when the assertion fails.',
    officialRef: 'PCET-30-01 Block 4.1 - Assertion Failure Messages',
    tags: ['unittest', 'assertions', 'messages']
  },
  {
    id: 'pcet-4-008',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Skipping',
    difficulty: 'Intermediate',
    question: 'Which decorator in `unittest` conditionally skips a test only when running on a specific operating system?',
    codeSnippet: 'import sys\nimport unittest\n\nclass TestWindowsFeature(unittest.TestCase):\n    @[ ? ](sys.platform != "win32", "Requires Windows OS")\n    def test_windows_registry(self):\n        pass',
    options: [
      'unittest.skipIf',
      'unittest.ignoreIf',
      'unittest.bypassWhen',
      'unittest.skipUnless'
    ],
    correctAnswer: 0,
    explanation: '`@unittest.skipIf(condition, reason)` skips the decorated test if the condition is True. Alternatively, `@unittest.skipUnless(condition, reason)` skips unless the condition is True.',
    officialRef: 'PCET-30-01 Block 4.1 - Skipping Tests in unittest',
    tags: ['unittest', 'skipif', 'decorators']
  },
  {
    id: 'pcet-4-009',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Subtests',
    difficulty: 'Intermediate',
    question: 'What is the benefit of using `self.subTest()` in `unittest` when testing multiple values in a loop?',
    codeSnippet: 'class TestNumbers(unittest.TestCase):\n    def test_even_numbers(self):\n        for i in [2, 4, 5, 8]:\n            with self.subTest(number=i):\n                self.assertEqual(i % 2, 0)',
    options: [
      'If one iteration fails (like 5), the test runner still continues executing subsequent subtests (like 8) and reports each failure individually',
      'It makes tests run in parallel threads',
      'It automatically skips odd numbers',
      'It prevents any exceptions from being raised'
    ],
    correctAnswer: 0,
    explanation: 'Without `subTest`, a failure on iteration 3 halts the entire test method. Using `with self.subTest():` allows `unittest` to distinguish each iteration and continue running the rest, reporting all failures.',
    officialRef: 'PCET-30-01 Block 4.1 - SubTests',
    tags: ['unittest', 'subtest', 'data-driven']
  },
  {
    id: 'pcet-4-010',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Test Runner',
    difficulty: 'Beginner',
    question: 'What command-line command executes test discovery across the current project using Python\'s built-in `unittest`?',
    codeSnippet: '# Running discovery from terminal in project root directory:',
    options: [
      'python -m unittest discover',
      'python --test-all',
      'unittest run *',
      'python run_tests.py'
    ],
    correctAnswer: 0,
    explanation: '`python -m unittest discover` (or simply `python -m unittest`) scans the project directory recursively, finds all files matching `test*.py`, and executes them.',
    officialRef: 'PCET-30-01 Block 4.1 - unittest Test Discovery',
    tags: ['unittest', 'cli', 'test-discovery']
  },
  {
    id: 'pcet-4-011',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Intermediate',
    question: 'What does the `@unittest.expectedFailure` decorator signify?',
    codeSnippet: 'class TestFeature(unittest.TestCase):\n    @unittest.expectedFailure\n    def test_broken_feature(self):\n        self.assertEqual(1, 2)',
    options: [
      'The test is expected to fail; if it fails, it is not counted as an error/failure in the test suite run',
      'The test will cause the Python process to crash intentionally',
      'The test must only be run on development laptops',
      'The test is run 10 times in a row'
    ],
    correctAnswer: 0,
    explanation: '`@unittest.expectedFailure` marks a test known to fail (e.g. for an unresolved bug). A failure is reported as an "expected failure" (xfail) and does not count as a test failure in the final result.',
    officialRef: 'PCET-30-01 Block 4.1 - Expected Failures',
    tags: ['unittest', 'expected-failure', 'decorators']
  },
  {
    id: 'pcet-4-012',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Intermediate',
    question: 'What does `unittest.TestSuite` represent?',
    codeSnippet: 'def suite():\n    test_suite = unittest.TestSuite()\n    test_suite.addTest(TestAuth("test_login"))\n    test_suite.addTest(TestBilling("test_charge"))\n    return test_suite',
    options: [
      'A collection of individual test cases and/or test suites grouped together for batch execution',
      'A suite of luxury furniture for developers',
      'A hotel room booked for test engineers',
      'A Python dictionary storing test names'
    ],
    correctAnswer: 0,
    explanation: '`TestSuite` aggregates multiple test cases or other test suites into a composite hierarchy, allowing tailored execution of specific subsets of tests.',
    officialRef: 'PCET-30-01 Block 4.1 - unittest.TestSuite',
    tags: ['unittest', 'testsuite', 'composition']
  },
  {
    id: 'pcet-4-013',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Lifecycle',
    difficulty: 'Intermediate',
    question: 'In `unittest`, if `setUp()` raises an exception, what happens to the corresponding test method and `tearDown()`?',
    codeSnippet: 'class TestBadSetup(unittest.TestCase):\n    def setUp(self):\n        raise ConnectionError("DB unavailable")\n\n    def test_read(self):\n        self.assertTrue(True)\n\n    def tearDown(self):\n        print("Tearing down")',
    options: [
      'The test method is NOT executed, and `tearDown()` is NOT executed; the test is reported as an ERROR',
      'The test method runs normally',
      '`tearDown()` runs twice',
      'The exception is silently ignored'
    ],
    correctAnswer: 0,
    explanation: 'If `setUp()` fails or raises an exception, the test method is skipped, `tearDown()` is not invoked, and the test run records an Error (not a failure).',
    officialRef: 'PCET-30-01 Block 4.1 - setUp Failure Semantics',
    tags: ['unittest', 'setup', 'exception-handling']
  },
  {
    id: 'pcet-4-014',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Beginner',
    question: 'What is the standard idiom placed at the bottom of a `unittest` script to make it runnable directly via `python test_file.py`?',
    codeSnippet: '# test_sample.py\nimport unittest\n\nclass SampleTest(unittest.TestCase):\n    def test_example(self):\n        self.assertTrue(True)\n\n[ ? ]',
    options: [
      'if __name__ == "__main__": unittest.main()',
      'if __name__ == "__main__": unittest.run()',
      'unittest.execute_all()',
      'run(SampleTest)'
    ],
    correctAnswer: 0,
    explanation: '`if __name__ == "__main__": unittest.main()` provides a command-line interface to the test script, discovering and running all tests defined in the file.',
    officialRef: 'PCET-30-01 Block 4.1 - unittest.main()',
    tags: ['unittest', 'main', 'execution']
  },
  {
    id: 'pcet-4-015',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Assertions',
    difficulty: 'Intermediate',
    question: 'Which assertion method verifies that two objects are identical in memory (`a is b`) in `unittest`?',
    codeSnippet: 'class TestIdentity(unittest.TestCase):\n    def test_singleton(self):\n        a = get_instance()\n        b = get_instance()\n        self.[ ? ](a, b)',
    options: [
      'assertIs',
      'assertEqual',
      'assertSame',
      'assertIdentical'
    ],
    correctAnswer: 0,
    explanation: '`self.assertIs(a, b)` checks identity using Python\'s `is` operator (`a is b`), whereas `self.assertEqual(a, b)` checks value equality using the `==` operator (`a == b`).',
    officialRef: 'PCET-30-01 Block 4.1 - assertIs vs assertEqual',
    tags: ['unittest', 'assertIs', 'object-identity']
  },
  {
    id: 'pcet-4-016',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Assertions',
    difficulty: 'Beginner',
    question: 'Which assertion verifies that an item is a member of a collection (e.g. list, set, dict) in `unittest`?',
    codeSnippet: 'class TestMembership(unittest.TestCase):\n    def test_keys(self):\n        data = {"status": "ok", "code": 200}\n        self.[ ? ]("status", data)',
    options: [
      'assertIn',
      'assertContains',
      'assertHasKey',
      'assertMember'
    ],
    correctAnswer: 0,
    explanation: '`self.assertIn(member, container)` tests whether `member in container` evaluates to True, providing clear error messages if the membership test fails.',
    officialRef: 'PCET-30-01 Block 4.1 - assertIn',
    tags: ['unittest', 'assertIn', 'membership']
  },
  {
    id: 'pcet-4-017',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Assertions',
    difficulty: 'Intermediate',
    question: 'How can you capture and inspect the raised exception object when using `self.assertRaises` as a context manager?',
    codeSnippet: 'class TestValidation(unittest.TestCase):\n    def test_custom_message(self):\n        with self.assertRaises(ValueError) as cm:\n            validate_age(-1)\n        self.assertIn("Age must be positive", str(cm.exception))',
    options: [
      'Via the `.exception` attribute on the context manager object bound by `as cm`',
      'By reading `sys.last_value`',
      'Exceptions cannot be inspected in unittest',
      'By defining an except block inside the test'
    ],
    correctAnswer: 0,
    explanation: 'When used as a context manager (`with self.assertRaises(E) as cm:`), the context manager stores the caught exception in `cm.exception`, allowing detailed inspection of its message and attributes.',
    officialRef: 'PCET-30-01 Block 4.1 - assertRaises Context Manager',
    tags: ['unittest', 'assertRaises', 'exceptions']
  },
  {
    id: 'pcet-4-018',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Lifecycle',
    difficulty: 'Intermediate',
    question: 'What is `self.addCleanup()` in `unittest.TestCase` and why is it preferred over `tearDown()` in complex tests?',
    codeSnippet: 'class TestFile(unittest.TestCase):\n    def setUp(self):\n        self.f = open("temp.txt", "w")\n        self.addCleanup(self.f.close)',
    options: [
      'Cleanups added via `addCleanup` are guaranteed to be called even if `setUp()` itself fails partway through, whereas `tearDown()` is only called if `setUp()` succeeds completely',
      'It deletes the temporary directory from disk',
      'It formats code using PEP 8',
      'It closes the terminal window after tests'
    ],
    correctAnswer: 0,
    explanation: '`addCleanup(func, *args)` functions are invoked on test completion even if `setUp()` raises an exception partway through, preventing resource leaks when partial setup occurs.',
    officialRef: 'PCET-30-01 Block 4.1 - addCleanup Pattern',
    tags: ['unittest', 'addcleanup', 'resource-management']
  },
  {
    id: 'pcet-4-019',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Beginner',
    question: 'What output characters does `unittest.TextTestRunner` print to indicate a passed test, a failed assertion, and an unhandled error?',
    codeSnippet: '# Test execution output:\n# ..F.E.s\n# What do the letters represent?',
    options: [
      '`.` = Pass, `F` = Assertion Failure, `E` = Unhandled Exception / Error, `s` = Skipped',
      '`.` = Skipped, `F` = Fast, `E` = Easy, `s` = Slow',
      '`.` = Failed, `F` = Finished, `E` = Executed, `s` = Saved',
      'They are random characters generated by Python'
    ],
    correctAnswer: 0,
    explanation: 'In `unittest` console output: `.` means a test passed, `F` means an assertion failed, `E` means an unhandled exception occurred during execution, and `s` means skipped.',
    officialRef: 'PCET-30-01 Block 4.1 - unittest Output Indicators',
    tags: ['unittest', 'cli-output', 'texttestrunner']
  },
  {
    id: 'pcet-4-020',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.1',
    category: 'unittest Framework',
    difficulty: 'Intermediate',
    question: 'What is the distinction between a Test "Failure" and a Test "Error" in Python testing frameworks?',
    codeSnippet: '# Outcome A: self.assertEqual(calculate(2), 5)  -> AssertionError: 4 != 5\n# Outcome B: calculate(2) -> ZeroDivisionError: division by zero',
    options: [
      'Outcome A is a Failure (assertion expectation not met); Outcome B is an Error (unexpected exception raised in test or production code)',
      'Outcome A is an Error; Outcome B is a Failure',
      'Both outcomes are identical Failures',
      'Python does not distinguish between Failure and Error'
    ],
    correctAnswer: 0,
    explanation: 'A Failure occurs when an explicit assertion fails (`AssertionError`), indicating an expected condition was not met. An Error occurs when an unexpected exception (e.g. `ZeroDivisionError`, `KeyError`) crashes execution.',
    officialRef: 'PCET-30-01 Block 4.1 - Failures vs Errors',
    tags: ['unittest', 'failure-vs-error', 'exceptions']
  },

  // Chapter 4.2: Writing Modern Tests with pytest (Cards 21-40)
  {
    id: 'pcet-4-021',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Framework',
    difficulty: 'Beginner',
    question: 'How do assertions in `pytest` differ fundamentally from `unittest`?',
    codeSnippet: '# pytest test:\ndef test_addition():\n    assert 1 + 1 == 2',
    options: [
      'pytest uses standard, native Python `assert` statements and rewrites AST bytecode to produce detailed comparison failure messages without boilerplate self.assertX methods',
      'pytest requires importing special assertion classes from pytest.asserts',
      'pytest does not support assertions',
      'pytest only allows testing functions that return booleans'
    ],
    correctAnswer: 0,
    explanation: 'pytest uses Python\'s plain `assert` statement. Via AST rewriting at import time, pytest introspects expressions to provide rich failure diffs (e.g. exact dictionary differences or mismatched elements).',
    officialRef: 'PCET-30-01 Block 4.2 - pytest Assertions',
    tags: ['pytest', 'assertions', 'ast-rewriting']
  },
  {
    id: 'pcet-4-022',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Test Discovery',
    difficulty: 'Beginner',
    question: 'What are the default test discovery file and function naming conventions in `pytest`?',
    codeSnippet: '# Which of these files will pytest automatically discover by default?\n# 1. test_auth.py\n# 2. auth_test.py\n# 3. test_helpers.py\n# 4. check_db.py',
    options: [
      'Files matching `test_*.py` or `*_test.py`, and functions prefixed with `test_*`',
      'Only files named exactly `test.py`',
      'Any file with more than 10 lines of code',
      'Files ending with `.test`'
    ],
    correctAnswer: 0,
    explanation: 'By default, pytest discovers files named `test_*.py` or `*_test.py`. Inside those files, it runs test functions prefixed with `test_*` and methods prefixed with `test_*` inside classes prefixed with `Test*` (without `__init__`).',
    officialRef: 'PCET-30-01 Block 4.2 - pytest Test Discovery Conventions',
    tags: ['pytest', 'discovery', 'conventions']
  },
  {
    id: 'pcet-4-023',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Beginner',
    question: 'What does the `-v` (or `--verbose`) flag do when running `pytest`?',
    codeSnippet: '$ pytest -v\n# Output:\n# tests/test_auth.py::test_login PASSED   [ 50%]\n# tests/test_auth.py::test_logout PASSED  [100%]',
    options: [
      'It increases verbosity, displaying the full test file name, individual test function name, and status for every test',
      'It verifies the version of the operating system',
      'It runs tests at variable speeds',
      'It suppresses all output entirely'
    ],
    correctAnswer: 0,
    explanation: 'The `-v` (verbose) flag displays each test on its own line along with its full path and pass/fail/skip status, instead of just dots.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest CLI Flags',
    tags: ['pytest', 'cli', 'verbose']
  },
  {
    id: 'pcet-4-024',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Beginner',
    question: 'What does the `-s` (or `--capture=no`) flag do in `pytest`?',
    codeSnippet: 'def test_console_output():\n    print("DEBUG: entering calculation...")\n    assert 2 * 2 == 4\n\n# $ pytest -s',
    options: [
      'It disables standard output capture, allowing `print()` statements to be displayed live in the console during test execution',
      'It skips all failing tests',
      'It stops pytest after 1 second',
      'It saves test results to an SQL database'
    ],
    correctAnswer: 0,
    explanation: 'By default, pytest captures stdout/stderr and only shows it for failing tests. The `-s` shortcut disables output capture, printing all stdout/stderr directly to the terminal as tests run.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest Output Capture',
    tags: ['pytest', 'cli', 'stdout-capture']
  },
  {
    id: 'pcet-4-025',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Intermediate',
    question: 'How does the `-k` flag allow filtering tests in `pytest`?',
    codeSnippet: '# Terminal command:\n$ pytest -k "auth and not slow"',
    options: [
      'It filters and runs only tests whose names match the given substring expression (e.g. matching "auth" and omitting tests with "slow")',
      'It kills running test processes that exceed CPU limits',
      'It specifies the number of kernel threads to use',
      'It keeps temporary files after tests complete'
    ],
    correctAnswer: 0,
    explanation: 'The `-k EXPRESSION` option allows expression-based filtering matching test function, class, or file names, supporting boolean operators like `and`, `or`, and `not`.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest -k Filtering',
    tags: ['pytest', 'filtering', 'cli']
  },
  {
    id: 'pcet-4-026',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Beginner',
    question: 'What does the `-x` (or `--exitfirst`) flag do in `pytest`?',
    codeSnippet: '$ pytest -x\n# Test 1: PASSED\n# Test 2: FAILED\n# !!! Interrupted: stopping after 1 failure !!!',
    options: [
      'It stops test execution immediately upon encountering the very first test failure or error',
      'It executes tests in XML format',
      'It excludes all tests in the current directory',
      'It runs tests in an external browser'
    ],
    correctAnswer: 0,
    explanation: '`-x` (or `--exitfirst`) halts the test run immediately upon the first failure, which is helpful for rapid test-driven development (TDD) debugging.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest -x Flag',
    tags: ['pytest', 'exitfirst', 'tdd']
  },
  {
    id: 'pcet-4-027',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Parametrization',
    difficulty: 'Intermediate',
    question: 'What is the syntax for parametrizing a test function in `pytest` using `@pytest.mark.parametrize`?',
    codeSnippet: 'import pytest\n\n@[ ? ]("input_num, expected", [\n    (2, 4),\n    (3, 9),\n    (4, 16),\n])\ndef test_square(input_num, expected):\n    assert input_num ** 2 == expected',
    options: [
      'pytest.mark.parametrize',
      'pytest.parametrize',
      'pytest.mark.data_driven',
      'pytest.loop'
    ],
    correctAnswer: 0,
    explanation: '`@pytest.mark.parametrize("argnames", argvalues)` runs the test function multiple times, once for each tuple in `argvalues`, generating distinct, individually reported test cases.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest Parametrize',
    tags: ['pytest', 'parametrize', 'data-driven']
  },
  {
    id: 'pcet-4-028',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Exceptions',
    difficulty: 'Beginner',
    question: 'How do you test that an exception is raised in `pytest`?',
    codeSnippet: 'import pytest\n\ndef test_zero_division():\n    with [ ? ](ZeroDivisionError):\n        1 / 0',
    options: [
      'pytest.raises',
      'pytest.expect_error',
      'pytest.assert_raises',
      'pytest.catch'
    ],
    correctAnswer: 0,
    explanation: '`with pytest.raises(ExpectedException):` is the standard pytest idiom to assert that a block of code raises a specific exception.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest.raises',
    tags: ['pytest', 'pytest-raises', 'exceptions']
  },
  {
    id: 'pcet-4-029',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Exceptions',
    difficulty: 'Intermediate',
    question: 'How can you verify that an exception raised in `pytest.raises` matches a specific error message pattern?',
    codeSnippet: 'def validate_email(email):\n    if "@" not in email:\n        raise ValueError("Invalid email format: missing @ symbol")\n\ndef test_email_error():\n    with pytest.raises(ValueError, match=r"missing @ symbol"):\n        validate_email("bademail.com")',
    options: [
      'Using the `match` argument with a regex pattern inside `pytest.raises(Exception, match=...)`',
      'Using the `message` argument',
      'By reading `sys.stderr`',
      'By nesting another assert statement inside the with block'
    ],
    correctAnswer: 0,
    explanation: '`pytest.raises(ExpectedException, match=r"regex")` tests both that the exception was raised and that its string representation matches the provided regular expression pattern.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest.raises match Parameter',
    tags: ['pytest', 'pytest-raises', 'regex', 'exceptions']
  },
  {
    id: 'pcet-4-030',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Markers',
    difficulty: 'Beginner',
    question: 'What marker in `pytest` is used to skip a test unconditionally?',
    codeSnippet: 'import pytest\n\n@[ ? ](reason="Feature deprecated and pending removal")\ndef test_legacy_api():\n    pass',
    options: [
      'pytest.mark.skip',
      'pytest.mark.ignore',
      'pytest.mark.pass_over',
      'pytest.mark.bypass'
    ],
    correctAnswer: 0,
    explanation: '`@pytest.mark.skip(reason="...")` marks a test to be skipped unconditionally during test execution.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest.mark.skip',
    tags: ['pytest', 'skip', 'markers']
  },
  {
    id: 'pcet-4-031',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Markers',
    difficulty: 'Intermediate',
    question: 'What marker marks a test that is expected to fail in `pytest`?',
    codeSnippet: 'import pytest\n\n@[ ? ](reason="Bug #124 open in Jira; fix in progress")\ndef test_unresolved_bug():\n    assert calculate_tax(100) == 15',
    options: [
      'pytest.mark.xfail',
      'pytest.mark.fail_ok',
      'pytest.mark.bug',
      'pytest.mark.expected_failure'
    ],
    correctAnswer: 0,
    explanation: '`@pytest.mark.xfail` marks a test as expected to fail. If it fails, it reports as `XFAIL` (passing build); if it unexpectedly passes, it reports as `XPASS`.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest.mark.xfail',
    tags: ['pytest', 'xfail', 'markers']
  },
  {
    id: 'pcet-4-032',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Markers',
    difficulty: 'Intermediate',
    question: 'How do you define and run custom markers (e.g. `slow`, `integration`) in `pytest`?',
    codeSnippet: '# In test file:\n@pytest.mark.slow\ndef test_long_running_simulation():\n    ...\n\n# Terminal execution to run ONLY slow tests:\n$ pytest -m [ ? ]',
    options: [
      'slow',
      '--slow',
      '@slow',
      'mark=slow'
    ],
    correctAnswer: 0,
    explanation: 'Tests tagged with `@pytest.mark.<name>` are filtered on the CLI using `-m <name>` (e.g. `pytest -m slow` or `pytest -m "not slow"`). Markers should be registered in `pytest.ini`.',
    officialRef: 'PCET-30-01 Block 4.2 - Custom Markers and -m Flag',
    tags: ['pytest', 'custom-markers', 'cli']
  },
  {
    id: 'pcet-4-033',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Configuration',
    difficulty: 'Intermediate',
    question: 'Where should custom markers be registered to avoid `PytestUnknownMarkWarning` warnings?',
    codeSnippet: '# pytest.ini / pyproject.toml:\n# [pytest]\n# markers =\n#     slow: marks tests as slow (deselect with \'-m "not slow"\')\n#     integration: marks integration tests',
    options: [
      '`pytest.ini`, `pyproject.toml`, or `setup.cfg` in the project root',
      'Inside Python\'s internal lib directory',
      'In a global OS environment variable',
      'In the git commit message'
    ],
    correctAnswer: 0,
    explanation: 'Registering custom markers in configuration files (`pytest.ini`, `pyproject.toml`, or `setup.cfg`) documents their purpose and prevents `PytestUnknownMarkWarning`.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest Configuration and Markers',
    tags: ['pytest-ini', 'configuration', 'markers']
  },
  {
    id: 'pcet-4-034',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Intermediate',
    question: 'What does the `--maxfail=2` CLI option instruct `pytest` to do?',
    codeSnippet: '$ pytest --maxfail=2',
    options: [
      'Stop test execution after 2 failures or errors have occurred',
      'Retry failed tests up to 2 times',
      'Allow only 2 assertions per test',
      'Fail any test that takes more than 2 seconds'
    ],
    correctAnswer: 0,
    explanation: '`--maxfail=N` instructs pytest to abort the entire test run as soon as $N$ test failures or errors have occurred.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest --maxfail',
    tags: ['pytest', 'maxfail', 'cli']
  },
  {
    id: 'pcet-4-035',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Warnings',
    difficulty: 'Intermediate',
    question: 'How can you verify that a function emits a `UserWarning` in `pytest`?',
    codeSnippet: 'import warnings\nimport pytest\n\ndef old_function():\n    warnings.warn("Use new_function() instead", UserWarning)\n\ndef test_deprecation():\n    with [ ? ](UserWarning):\n        old_function()',
    options: [
      'pytest.warns',
      'pytest.raises',
      'pytest.catches',
      'pytest.expect_warning'
    ],
    correctAnswer: 0,
    explanation: '`with pytest.warns(UserWarning):` asserts that the enclosed code emits a warning of the specified category, failing if no warning or a different warning is issued.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest.warns',
    tags: ['pytest', 'warnings', 'pytest-warns']
  },
  {
    id: 'pcet-4-036',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Assertions',
    difficulty: 'Intermediate',
    question: 'How does pytest handle floating-point comparisons when testing numerical results?',
    codeSnippet: 'import pytest\n\ndef test_numerical():\n    assert 0.1 + 0.2 == pytest.approx(0.3)',
    options: [
      'Using `pytest.approx()`, which compares numbers and collections of numbers within a default relative tolerance ($1e-6$)',
      'Using `math.isclose()` exclusively',
      'By converting all numbers to strings',
      'pytest does not support float comparisons'
    ],
    correctAnswer: 0,
    explanation: '`pytest.approx(expected, rel=1e-6, abs=1e-12)` compares floats, lists, and dicts of floats within an acceptable tolerance, avoiding floating-point equality pitfalls cleanly.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest.approx',
    tags: ['pytest', 'approx', 'floating-point']
  },
  {
    id: 'pcet-4-037',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Intermediate',
    question: 'What does the `--tb=short` flag do in pytest?',
    codeSnippet: '$ pytest --tb=short',
    options: [
      'Formats tracebacks in a compact, short format showing only the file, line number, and failing code line without full frames',
      'Turns on tuberculosis virus warnings',
      'Runs tests in short-circuit mode',
      'Deletes traceback history from disk'
    ],
    correctAnswer: 0,
    explanation: '`--tb=style` configures traceback formatting. Options include `short`, `line`, `native`, `auto`, and `no` (which suppresses tracebacks entirely).',
    officialRef: 'PCET-30-01 Block 4.2 - Traceback Customization',
    tags: ['pytest', 'traceback', 'cli']
  },
  {
    id: 'pcet-4-038',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Framework',
    difficulty: 'Beginner',
    question: 'Can `pytest` run existing test suites written using `unittest.TestCase`?',
    codeSnippet: '# Legacy test_old.py written with unittest.TestCase\n# Developer runs: $ pytest',
    options: [
      'Yes, pytest automatically discovers and seamlessly executes existing unittest.TestCase test classes without requiring any code conversion',
      'No, unittest tests must be rewritten before pytest can run them',
      'Only if unittest is uninstalled from Python',
      'Only on Linux operating systems'
    ],
    correctAnswer: 0,
    explanation: 'pytest has out-of-the-box support for `unittest.TestCase` classes. It discovers and runs them seamlessly, allowing incremental migration to pytest features.',
    officialRef: 'PCET-30-01 Block 4.2 - pytest unittest Compatibility',
    tags: ['pytest', 'unittest-compatibility', 'migration']
  },
  {
    id: 'pcet-4-039',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest CLI',
    difficulty: 'Intermediate',
    question: 'What does the `--lf` (or `--last-failed`) flag do in `pytest`?',
    codeSnippet: '$ pytest --lf',
    options: [
      'Re-runs only the test cases that failed during the immediately preceding test run',
      'Runs only the last test in alphabetical order',
      'Deletes all failed tests from git',
      'Lists all fatal errors'
    ],
    correctAnswer: 0,
    explanation: '`pytest --lf` reads the `.pytest_cache` and re-runs only the tests that failed in the last run. `--ff` (`--failed-first`) runs failed tests first, then remaining tests.',
    officialRef: 'PCET-30-01 Block 4.2 - Cache and --lf Flag',
    tags: ['pytest', 'last-failed', 'cache', 'tdd']
  },
  {
    id: 'pcet-4-040',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.2',
    category: 'pytest Parametrization',
    difficulty: 'Intermediate',
    question: 'How can you assign human-readable test IDs to parametrized test cases in `pytest`?',
    codeSnippet: '@pytest.mark.parametrize(\n    "username, is_valid",\n    [("alice", True), ("", False), ("user@domain", False)],\n    ids=["valid_name", "empty_string", "contains_at_symbol"]\n)\ndef test_username(username, is_valid):\n    assert check_username(username) == is_valid',
    options: [
      'Using the `ids` parameter inside `@pytest.mark.parametrize` to specify custom test identifier labels in terminal output',
      'By adding docstrings to each tuple',
      'By naming the parameters id1, id2, id3',
      'Custom IDs are not supported in pytest'
    ],
    correctAnswer: 0,
    explanation: 'The `ids` argument (a list of strings or a callable) generates clean, descriptive test names in the test runner output (e.g. `test_username[valid_name]`).',
    officialRef: 'PCET-30-01 Block 4.2 - Parametrize Custom IDs',
    tags: ['pytest', 'parametrize', 'ids']
  },

  // Chapter 4.3: pytest Fixtures & Configuration (Cards 41-50 in Part 1)
  {
    id: 'pcet-4-041',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Beginner',
    question: 'How is a fixture defined and consumed in `pytest`?',
    codeSnippet: 'import pytest\n\n@[ ? ]\ndef sample_user():\n    return {"id": 1, "username": "alice"}\n\ndef test_user_name(sample_user):\n    assert sample_user["username"] == "alice"',
    options: [
      'pytest.fixture',
      'pytest.setup',
      'pytest.provider',
      'pytest.resource'
    ],
    correctAnswer: 0,
    explanation: '`@pytest.fixture` defines a reusable fixture function. Test functions consume fixtures by simply declaring the fixture name as an argument in their function signature (Dependency Injection).',
    officialRef: 'PCET-30-01 Block 4.3 - pytest Fixtures',
    tags: ['pytest', 'fixtures', 'dependency-injection']
  },
  {
    id: 'pcet-4-042',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What is the default scope of a `@pytest.fixture` if no `scope` argument is provided?',
    codeSnippet: '@pytest.fixture\ndef db_session():\n    return create_session()',
    options: [
      '`function` scope (created and destroyed once per individual test function)',
      '`session` scope',
      '`module` scope',
      '`class` scope'
    ],
    correctAnswer: 0,
    explanation: 'The default fixture scope is `function`. A fresh fixture instance is invoked for every test function that requests it, guaranteeing test isolation.',
    officialRef: 'PCET-30-01 Block 4.3 - Fixture Scopes',
    tags: ['pytest', 'fixtures', 'scopes']
  },
  {
    id: 'pcet-4-043',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What are the five available fixture scopes in modern `pytest`?',
    codeSnippet: '# @pytest.fixture(scope="...")\n# Arrange from narrowest to widest lifecycle:',
    options: [
      '`function`, `class`, `module`, `package`, `session`',
      '`unit`, `integration`, `system`, `acceptance`',
      '`local`, `global`, `universal`',
      '`line`, `block`, `file`, `repo`'
    ],
    correctAnswer: 0,
    explanation: 'The five scopes in pytest are: `function` (per test), `class` (per test class), `module` (per module file), `package` (per directory package), and `session` (once per entire test suite run).',
    officialRef: 'PCET-30-01 Block 4.3 - All Fixture Scopes',
    tags: ['pytest', 'fixtures', 'scopes']
  },
  {
    id: 'pcet-4-044',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'How is teardown/cleanup logic implemented in a `pytest` fixture?',
    codeSnippet: '@pytest.fixture\ndef temp_database():\n    db = setup_db()   # Setup code\n    [ ? ] db          # Provide fixture value to test\n    db.teardown()     # Cleanup/teardown code executed after test finishes',
    options: [
      'yield',
      'return',
      'break',
      'continue'
    ],
    correctAnswer: 0,
    explanation: 'Using the `yield` statement creates a teardown fixture. Code before `yield` runs before the test (setup), the yielded value is injected into the test, and code after `yield` runs after test completion (cleanup).',
    officialRef: 'PCET-30-01 Block 4.3 - Yield Fixtures',
    tags: ['pytest', 'yield-fixtures', 'teardown']
  },
  {
    id: 'pcet-4-045',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What special file in a directory enables sharing fixtures across multiple test files without importing them?',
    codeSnippet: '# Directory structure:\n# tests/\n#   ├── [ ? ]           <-- Fixtures defined here are available to all tests below\n#   ├── test_auth.py\n#   └── test_billing.py',
    options: [
      'conftest.py',
      'fixtures.py',
      '__init__.py',
      'pytest_config.py'
    ],
    correctAnswer: 0,
    explanation: '`conftest.py` is automatically discovered by pytest. Fixtures and hooks defined in `conftest.py` are globally accessible to all tests within that directory and child directories without imports.',
    officialRef: 'PCET-30-01 Block 4.3 - conftest.py',
    tags: ['conftest', 'pytest', 'shared-fixtures']
  },
  {
    id: 'pcet-4-046',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What does the `autouse=True` argument do in a `@pytest.fixture`?',
    codeSnippet: '@pytest.fixture(autouse=True)\ndef reset_environment():\n    os.environ["ENV"] = "test"\n    yield\n    os.environ.pop("ENV", None)',
    options: [
      'It automatically activates and executes the fixture for every test in scope without requiring tests to explicitly name it in their signatures',
      'It automatically generates unit tests using AI',
      'It automatically commits the code to git',
      'It causes the test to run only on automated CI machines'
    ],
    correctAnswer: 0,
    explanation: 'An `autouse=True` fixture is invoked automatically for all tests within its scope without needing any test function to explicitly declare it as a parameter.',
    officialRef: 'PCET-30-01 Block 4.3 - autouse Fixtures',
    tags: ['autouse', 'fixtures', 'pytest']
  },
  {
    id: 'pcet-4-047',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'Built-in Fixtures',
    difficulty: 'Intermediate',
    question: 'What does the built-in `tmp_path` fixture provide in `pytest`?',
    codeSnippet: 'def test_create_file(tmp_path):\n    # tmp_path is a unique pathlib.Path object pointing to a temporary directory\n    file_path = tmp_path / "hello.txt"\n    file_path.write_text("Hello World")\n    assert file_path.read_text() == "Hello World"',
    options: [
      'A unique `pathlib.Path` instance pointing to a temporary directory created for the test invocation and automatically managed',
      'A string path to the Windows registry',
      'A temporary database connection',
      'A path to the user\'s desktop'
    ],
    correctAnswer: 0,
    explanation: '`tmp_path` is a built-in fixture providing a fresh `pathlib.Path` object pointing to an isolated temporary directory created specifically for that test, automatically cleaned up.',
    officialRef: 'PCET-30-01 Block 4.3 - tmp_path Built-in Fixture',
    tags: ['tmp_path', 'pathlib', 'built-in-fixtures']
  },
  {
    id: 'pcet-4-048',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'Built-in Fixtures',
    difficulty: 'Intermediate',
    question: 'What does the built-in `capsys` fixture do in `pytest`?',
    codeSnippet: 'def test_greeting(capsys):\n    print("Hello, World!")\n    captured = capsys.readouterr()\n    assert captured.out == "Hello, World!\\n"',
    options: [
      'It captures text written to `sys.stdout` and `sys.stderr` during the test, allowing programmatic assertions on console output',
      'It turns on the Caps Lock key on the keyboard',
      'It limits memory consumption of the test',
      'It captures screenshots of the browser'
    ],
    correctAnswer: 0,
    explanation: '`capsys` captures standard output (`stdout`) and standard error (`stderr`) streams. Calling `capsys.readouterr()` returns a namedtuple `(out, err)` with the captured string outputs.',
    officialRef: 'PCET-30-01 Block 4.3 - capsys Built-in Fixture',
    tags: ['capsys', 'stdout', 'built-in-fixtures']
  },
  {
    id: 'pcet-4-049',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'Built-in Fixtures',
    difficulty: 'Intermediate',
    question: 'What is the built-in `monkeypatch` fixture used for in `pytest`?',
    codeSnippet: 'def test_env_var(monkeypatch):\n    monkeypatch.setenv("API_KEY", "test_secret_123")\n    assert os.getenv("API_KEY") == "test_secret_123"\n    # Automatically restores previous env variable after test finishes!',
    options: [
      'Safely modifying or setting attributes, environment variables, dictionary entries, or sys.path for the duration of a test and automatically undoing the modifications afterward',
      'Simulating monkeys typing random text on a keyboard',
      'Running chaotic stress tests',
      'Patching Python bytecode with C libraries'
    ],
    correctAnswer: 0,
    explanation: '`monkeypatch` provides methods (`setattr`, `delattr`, `setenv`, `delenv`, `setitem`, `syspath_prepend`) to modify state safely, guaranteeing automatic rollback on teardown.',
    officialRef: 'PCET-30-01 Block 4.3 - monkeypatch Built-in Fixture',
    tags: ['monkeypatch', 'environment-variables', 'built-in-fixtures']
  },
  {
    id: 'pcet-4-050',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What is a "Fixture Factory" in `pytest`?',
    codeSnippet: '@pytest.fixture\ndef make_user():\n    # Fixture returns a factory function:\n    def _make_user(name: str, role: str = "member"):\n        return {"name": name, "role": role}\n    return _make_user\n\ndef test_multiple_users(make_user):\n    admin = make_user("Alice", role="admin")\n    guest = make_user("Bob", role="guest")',
    options: [
      'A fixture that returns a generator or callable function, allowing tests to create multiple customized data objects with varying parameters within the same test',
      'A software design pattern for manufacturing physical computer parts',
      'A tool that generates fixture code from JSON schemas',
      'A fixture that can only be used in factory automation'
    ],
    correctAnswer: 0,
    explanation: 'A fixture factory is a fixture that returns an inner helper function. This pattern allows a single test to instantiate multiple unique model/data instances with custom attributes.',
    officialRef: 'PCET-30-01 Block 4.3 - Fixture Factories',
    tags: ['fixture-factories', 'pytest', 'design-patterns']
  }
];
