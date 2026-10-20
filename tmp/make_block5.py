import json
import os

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

cards = []

# =========================================================================
# CHAPTER 5.1: Test Fixtures and Environment Lifecycle (Cards 1-20)
# =========================================================================
cards.extend([
    {
        "id": "pcat-5-001",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Beginner",
        "question": "In Python's unittest framework, when is the setUp() method invoked relative to each test method in a TestCase?",
        "codeSnippet": "import unittest\n\nclass TestDatabase(unittest.TestCase):\n    def setUp(self):\n        self.conn = create_test_connection()\n    \n    def test_query_users(self):\n        self.assertIsNotNone(self.conn.query('users'))",
        "options": [
            "Exactly once before the TestCase class is loaded into memory",
            "Immediately before each individual test method execution",
            "Only when a test method raises an unexpected exception",
            "Concurrently in a background thread while test methods execute"
        ],
        "correctAnswer": 1,
        "explanation": "In unittest.TestCase, setUp() is called immediately before each test method is run. This guarantees a clean, isolated fixture environment for every individual test.",
        "officialRef": "PCAT-31-0x Block 5.1: Setting up and Tearing Down Test Environments",
        "tags": ["unittest", "lifecycle", "setUp", "fixtures"]
    },
    {
        "id": "pcat-5-002",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Beginner",
        "question": "What happens if an unhandled exception is raised inside the setUp() method?",
        "codeSnippet": "class TestService(unittest.TestCase):\n    def setUp(self):\n        raise ConnectionError('Database unreachable')\n    \n    def test_feature(self):\n        self.assertTrue(True)",
        "options": [
            "The test method executes normally and the error is ignored",
            "The test method is marked as 'ERROR' without running, and tearDown() is NOT called",
            "The test method is recorded as 'FAILED' (assertion failure) and tearDown() runs",
            "unittest automatically retries setUp() up to 3 times before failing"
        ],
        "correctAnswer": 1,
        "explanation": "If setUp() raises an exception, the test framework records the test as an ERROR (not a failure), the actual test method is never executed, and standard tearDown() is bypassed because the fixture was not successfully created.",
        "officialRef": "PCAT-31-0x Block 5.1: Fixture Error Handling",
        "tags": ["unittest", "setUp", "exceptions", "error-status"]
    },
    {
        "id": "pcat-5-003",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Beginner",
        "question": "Which method is guaranteed to run immediately after every test method, provided setUp() succeeded?",
        "codeSnippet": "class TestTempFile(unittest.TestCase):\n    def setUp(self):\n        self.f = open('temp.txt', 'w')\n        \n    def tearDown(self):\n        self.f.close()\n        os.remove('temp.txt')",
        "options": [
            "cleanUpClass()",
            "tearDown()",
            "postTest()",
            "finalize()"
        ],
        "correctAnswer": 1,
        "explanation": "tearDown() is called immediately after each test method runs, even if the test method itself failed or raised an exception, making it ideal for resource cleanup.",
        "officialRef": "PCAT-31-0x Block 5.1: tearDown Method",
        "tags": ["unittest", "tearDown", "cleanup"]
    },
    {
        "id": "pcat-5-004",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Class Fixtures",
        "difficulty": "Intermediate",
        "question": "What decorator must be applied to define setUpClass() and tearDownClass() methods in unittest.TestCase?",
        "codeSnippet": "class TestLargeSuite(unittest.TestCase):\n    @___?\n    def setUpClass(cls):\n        cls.shared_db = initialize_in_memory_db()",
        "options": [
            "@staticmethod",
            "@classmethod",
            "@unittest.fixture",
            "@property"
        ],
        "correctAnswer": 1,
        "explanation": "setUpClass() and tearDownClass() must be decorated with @classmethod and take 'cls' as their first argument. They execute once per test class rather than per method.",
        "officialRef": "PCAT-31-0x Block 5.1: Class-level Fixtures",
        "tags": ["unittest", "classmethod", "setUpClass", "tearDownClass"]
    },
    {
        "id": "pcat-5-005",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Class Fixtures",
        "difficulty": "Intermediate",
        "question": "When does tearDownClass() execute during the test suite lifecycle?",
        "codeSnippet": "class TestApiClient(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        cls.server = start_mock_server()\n    \n    @classmethod\n    def tearDownClass(cls):\n        cls.server.stop()",
        "options": [
            "After every single test method within the class finishes",
            "Only once, after all test methods in the TestCase class have been executed",
            "Before the next module begins importing its dependencies",
            "Whenever garbage collection reclaims the test case class instance"
        ],
        "correctAnswer": 1,
        "explanation": "tearDownClass() executes exactly once after all the tests in the given TestCase class have been run, providing class-level teardown for expensive resources.",
        "officialRef": "PCAT-31-0x Block 5.1: Class Fixtures Lifecycle",
        "tags": ["unittest", "tearDownClass", "performance"]
    },
    {
        "id": "pcat-5-006",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Module Fixtures",
        "difficulty": "Intermediate",
        "question": "How are module-level test fixtures named in Python's unittest module?",
        "codeSnippet": "# In test_integration.py:\ndef setUpModule():\n    global shared_cluster\n    shared_cluster = connect_cluster()\n\ndef tearDownModule():\n    shared_cluster.disconnect()",
        "options": [
            "init_module() and clean_module()",
            "setUpModule() and tearDownModule()",
            "@unittest.module_setup and @unittest.module_teardown",
            "__setup_module__() and __teardown_module__()"
        ],
        "correctAnswer": 1,
        "explanation": "unittest recognizes module-level functions named setUpModule() and tearDownModule() (written as module-level functions outside any class) which run before and after any tests in that module.",
        "officialRef": "PCAT-31-0x Block 5.1: Module-level Fixtures",
        "tags": ["unittest", "setUpModule", "tearDownModule"]
    },
    {
        "id": "pcat-5-007",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Resource Cleanup",
        "difficulty": "Advanced",
        "question": "Why is self.addCleanup() often preferred over writing cleanup logic in tearDown()?",
        "codeSnippet": "def setUp(self):\n    self.res1 = acquire_resource_one()\n    self.addCleanup(self.res1.release)\n    \n    self.res2 = acquire_resource_two()\n    self.addCleanup(self.res2.release)",
        "options": [
            "addCleanup() runs in C rather than Python for higher execution speed",
            "Cleanups registered with addCleanup() are executed in LIFO order even if subsequent steps in setUp() fail",
            "addCleanup() prevents exceptions from causing test failures",
            "addCleanup() eliminates the need for test assertion statements"
        ],
        "correctAnswer": 1,
        "explanation": "If setUp() fails halfway through, regular tearDown() is not invoked, leaving early resources leaked. With addCleanup(), any cleanup registered before an exception in setUp() is still safely executed in reverse registration order (LIFO).",
        "officialRef": "PCAT-31-0x Block 5.1: Safe Resource Cleanup with addCleanup",
        "tags": ["unittest", "addCleanup", "leak-prevention", "robustness"]
    },
    {
        "id": "pcat-5-008",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Resource Cleanup",
        "difficulty": "Intermediate",
        "question": "In what order are functions registered with self.addCleanup() executed?",
        "codeSnippet": "def setUp(self):\n    self.addCleanup(print, 'Cleanup 1')\n    self.addCleanup(print, 'Cleanup 2')\n    self.addCleanup(print, 'Cleanup 3')",
        "options": [
            "FIFO (First-In, First-Out): Cleanup 1, Cleanup 2, Cleanup 3",
            "LIFO (Last-In, First-Out): Cleanup 3, Cleanup 2, Cleanup 1",
            "Random order depending on dictionary hash randomization",
            "Alphabetical order based on function name"
        ],
        "correctAnswer": 1,
        "explanation": "addCleanup functions act like a stack (LIFO: Last-In, First-Out). The most recently registered cleanup runs first, which naturally handles unwinding dependent resources.",
        "officialRef": "PCAT-31-0x Block 5.1: addCleanup Execution Order",
        "tags": ["unittest", "addCleanup", "lifo"]
    },
    {
        "id": "pcat-5-009",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Intermediate",
        "question": "What is the class-level equivalent of self.addCleanup() called in unittest.TestCase?",
        "codeSnippet": "class TestSuite(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        cls.pool = create_pool()\n        cls.___?(cls.pool.close)",
        "options": [
            "addClassCleanup()",
            "addPostClassHook()",
            "registerClassTearDown()",
            "cleanupClassLater()"
        ],
        "correctAnswer": 0,
        "explanation": "addClassCleanup() is the class-level counterpart of addCleanup(), available on unittest.TestCase to register cleanups that execute after tearDownClass() or if setUpClass() raises an exception.",
        "officialRef": "PCAT-31-0x Block 5.1: Class Cleanup Registration",
        "tags": ["unittest", "addClassCleanup", "setUpClass"]
    },
    {
        "id": "pcat-5-010",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Isolation",
        "difficulty": "Intermediate",
        "question": "Why does unittest create a brand-new instance of the TestCase subclass for every single test method?",
        "codeSnippet": "class TestState(unittest.TestCase):\n    count = 0\n    def test_a(self):\n        self.value = 10\n    def test_b(self):\n        # self.value is NOT present here!",
        "options": [
            "To prevent instance-variable state pollution between tests and ensure test isolation",
            "Because Python does not support reusing objects once a method returns",
            "To force garbage collection of all global variables in the module",
            "To allow tests to run on separate physical CPUs automatically"
        ],
        "correctAnswer": 0,
        "explanation": "unittest instantiates a separate instance of the TestCase class for each test method. This design enforces test isolation so that attributes set on 'self' in one test do not leak into another.",
        "officialRef": "PCAT-31-0x Block 5.1: Test Case Instance Isolation",
        "tags": ["unittest", "isolation", "state-pollution"]
    },
    {
        "id": "pcat-5-011",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Fixture Architecture",
        "difficulty": "Advanced",
        "question": "If tearDown() itself raises an exception after a test passes, what is the resulting status of that test?",
        "codeSnippet": "class TestFlakyTeardown(unittest.TestCase):\n    def test_success(self):\n        self.assertEqual(1 + 1, 2)\n        \n    def tearDown(self):\n        raise RuntimeError('Teardown failed')",
        "options": [
            "SUCCESS (teardown errors are printed as warnings only)",
            "ERROR",
            "FAILED",
            "SKIPPED"
        ],
        "correctAnswer": 1,
        "explanation": "If tearDown() raises an unhandled exception, unittest reports the test outcome as an ERROR, alerting the developer that cleanup failed.",
        "officialRef": "PCAT-31-0x Block 5.1: tearDown Failure Modes",
        "tags": ["unittest", "tearDown", "error-status"]
    },
    {
        "id": "pcat-5-012",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Fixture Design",
        "difficulty": "Intermediate",
        "question": "Which of the following is considered an anti-pattern when using setUpClass()?",
        "codeSnippet": "class TestAccounts(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        cls.shared_account = Account(balance=100)\n        \n    def test_deposit(self):\n        self.shared_account.deposit(50)\n        \n    def test_withdraw(self):\n        self.shared_account.withdraw(50)",
        "options": [
            "Opening a read-only database connection",
            "Mutating shared mutable state across tests without resetting it between tests",
            "Reading configuration files once for the entire suite",
            "Creating read-only immutable mock schemas"
        ],
        "correctAnswer": 1,
        "explanation": "Mutating shared state in tests that share a setUpClass fixture introduces test interdependencies and execution-order dependencies, violating test independence.",
        "officialRef": "PCAT-31-0x Block 5.1: Shared Fixture Anti-Patterns",
        "tags": ["fixtures", "setUpClass", "anti-patterns", "mutable-state"]
    },
    {
        "id": "pcat-5-013",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Intermediate",
        "question": "What is the exact chronological sequence of calls for a test class with two test methods?",
        "codeSnippet": "class SampleTest(unittest.TestCase):\n    # setUpClass, setUp, test_1, tearDown, test_2, tearDownClass",
        "options": [
            "setUpClass -> (setUp -> test_1 -> tearDown) -> (setUp -> test_2 -> tearDown) -> tearDownClass",
            "setUpClass -> setUp -> test_1 -> test_2 -> tearDown -> tearDownClass",
            "setUp -> setUpClass -> test_1 -> tearDown -> test_2 -> tearDownClass",
            "setUpClass -> (test_1 -> setUp -> tearDown) -> (test_2 -> setUp -> tearDown) -> tearDownClass"
        ],
        "correctAnswer": 0,
        "explanation": "setUpClass runs once first; then for each test method: setUp runs, the test method executes, and tearDown runs; finally, tearDownClass runs once at the end.",
        "officialRef": "PCAT-31-0x Block 5.1: Comprehensive Test Execution Sequence",
        "tags": ["unittest", "lifecycle", "execution-order"]
    },
    {
        "id": "pcat-5-014",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Resource Cleanup",
        "difficulty": "Intermediate",
        "question": "Can arguments be passed to functions registered with self.addCleanup()?",
        "codeSnippet": "def cleanup_file(path, force=False):\n    ...\n\ndef setUp(self):\n    self.addCleanup(cleanup_file, '/tmp/test.dat', force=True)",
        "options": [
            "No, addCleanup only accepts zero-argument callables",
            "Yes, positional and keyword arguments passed to addCleanup are forwarded to the cleanup callable",
            "Only positional arguments are supported; keyword arguments raise a TypeError",
            "Arguments must be wrapped inside a lambda or functools.partial"
        ],
        "correctAnswer": 1,
        "explanation": "addCleanup(function, *args, **kwargs) accepts any arbitrary positional and keyword arguments and forwards them to the cleanup function when executed.",
        "officialRef": "PCAT-31-0x Block 5.1: addCleanup Arguments",
        "tags": ["unittest", "addCleanup", "callable-parameters"]
    },
    {
        "id": "pcat-5-015",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Fixture Architecture",
        "difficulty": "Advanced",
        "question": "If setUpClass() raises an exception, does tearDownClass() get executed?",
        "codeSnippet": "class TestService(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        raise ConnectionError('Cluster offline')\n    @classmethod\n    def tearDownClass(cls):\n        print('Tearing down cluster')",
        "options": [
            "Yes, tearDownClass always runs regardless of setUpClass outcome",
            "No, tearDownClass is skipped if setUpClass raises an unhandled exception",
            "Yes, but only if addClassCleanup was not used",
            "Only if pytest is running the unittest suite"
        ],
        "correctAnswer": 1,
        "explanation": "In unittest, if setUpClass() fails or errors out, tearDownClass() is NOT executed. However, any cleanups registered with addClassCleanup() prior to the failure WILL be called.",
        "officialRef": "PCAT-31-0x Block 5.1: setUpClass Failure Semantics",
        "tags": ["unittest", "setUpClass", "tearDownClass", "lifecycle"]
    },
    {
        "id": "pcat-5-016",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Fixtures",
        "difficulty": "Beginner",
        "question": "What is a 'test fixture' in the xUnit / PCAT terminology?",
        "codeSnippet": "# Fixture preparation:\n# DB tables created, test user seeded, session token forged.",
        "options": [
            "The physical computer hardware on which tests execute",
            "The preparation needed to perform one or more tests, plus any associate cleanup actions",
            "A software bug that has been successfully fixed",
            "The final PDF report produced by a test runner"
        ],
        "correctAnswer": 1,
        "explanation": "A test fixture represents the preparation needed to perform one or more tests (e.g., creating temporary files, directories, server connections) and associated cleanup actions.",
        "officialRef": "PCAT-31-0x Block 5.1: Definition of Test Fixture",
        "tags": ["fixture", "xunit", "terminology"]
    },
    {
        "id": "pcat-5-017",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Fixture Management",
        "difficulty": "Intermediate",
        "question": "How can a test clean up temporary files reliably without manually managing files in tearDown()?",
        "codeSnippet": "import tempfile\n\nclass TestFile(unittest.TestCase):\n    def setUp(self):\n        self.temp_dir = tempfile.TemporaryDirectory()\n        self.addCleanup(self.temp_dir.cleanup)",
        "options": [
            "By writing to the root directory / directly",
            "By using tempfile.TemporaryDirectory() combined with self.addCleanup(dir.cleanup)",
            "By setting os.environ['NO_PERSIST'] = '1'",
            "Temporary files are automatically deleted by the operating system upon file write"
        ],
        "correctAnswer": 1,
        "explanation": "Using tempfile.TemporaryDirectory() and registering its .cleanup() method with self.addCleanup guarantees reliable directory removal even if tests fail or throw unexpected errors.",
        "officialRef": "PCAT-31-0x Block 5.1: Temporary Resources & Fixtures",
        "tags": ["tempfile", "addCleanup", "best-practices"]
    },
    {
        "id": "pcat-5-018",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Intermediate",
        "question": "What method can be overridden to customize how a test method is called in unittest.TestCase?",
        "codeSnippet": "class CustomTestCase(unittest.TestCase):\n    def run(self, result=None):\n        # Custom logic before and after test execution\n        super().run(result)",
        "options": [
            "run()",
            "execute()",
            "invoke()",
            "dispatch()"
        ],
        "correctAnswer": 0,
        "explanation": "The run() method of TestCase runs the test, collecting results into a TestResult object passed as an argument. Overriding run() allows deep customization of test execution.",
        "officialRef": "PCAT-31-0x Block 5.1: TestCase Architecture",
        "tags": ["unittest", "TestCase", "run", "architecture"]
    },
    {
        "id": "pcat-5-019",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Fixture Management",
        "difficulty": "Beginner",
        "question": "Where should expensive, read-only setup operations (like training a machine learning model or compiling assets) be placed in a unittest suite?",
        "codeSnippet": "class ModelEvaluationTests(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        cls.model = load_heavy_weights()",
        "options": [
            "In setUp() so it re-runs before every single test method",
            "In setUpClass() so it runs once for all tests in that TestCase",
            "Inside the __init__() method of the test case",
            "In the global namespace without any enclosing function"
        ],
        "correctAnswer": 1,
        "explanation": "Expensive, read-only setups should be placed in setUpClass() (or setUpModule()) so that they execute once rather than on every test method, drastically speeding up test execution.",
        "officialRef": "PCAT-31-0x Block 5.1: Optimization with Class Fixtures",
        "tags": ["setUpClass", "performance", "fixtures"]
    },
    {
        "id": "pcat-5-020",
        "section": "Section 5",
        "chapter": "5.1",
        "category": "Test Lifecycle",
        "difficulty": "Intermediate",
        "question": "What happens if tearDownModule() raises an exception?",
        "codeSnippet": "# In test_suite.py:\ndef tearDownModule():\n    raise ConnectionResetError('Broker dropped connection')",
        "options": [
            "The exception is silently swallowed and exit code is 0",
            "The test runner logs an error and records a failure for the module",
            "All passing tests in the module are retroactively marked as failed",
            "The test runner immediately terminates without outputting summary counts"
        ],
        "correctAnswer": 1,
        "explanation": "Errors in tearDownModule() are reported as test runner errors, ensuring defects in module teardown infrastructure do not pass unnoticed.",
        "officialRef": "PCAT-31-0x Block 5.1: Module Teardown Error Handling",
        "tags": ["tearDownModule", "lifecycle", "errors"]
    }
])

# =========================================================================
# CHAPTER 5.2: Parameterized Testing and SubTests (Cards 21-40)
# =========================================================================
cards.extend([
    {
        "id": "pcat-5-021",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "What context manager is provided directly on unittest.TestCase to distinguish sub-test iterations inside a loop?",
        "codeSnippet": "class TestMath(unittest.TestCase):\n    def test_even_numbers(self):\n        for n in [2, 4, 5, 8]:\n            with self.___?(number=n):\n                self.assertEqual(n % 2, 0)",
        "options": [
            "subTest()",
            "subTestCase()",
            "parameterize()",
            "loopCase()"
        ],
        "correctAnswer": 0,
        "explanation": "unittest.TestCase provides the subTest() context manager (added in Python 3.4). When an assertion fails inside a subTest, the test runner records the failure with its specific parameters and continues running subsequent iterations.",
        "officialRef": "PCAT-31-0x Block 5.2: Implementing Parameterized Unit Tests with subTest",
        "tags": ["subTest", "parameterized", "unittest"]
    },
    {
        "id": "pcat-5-022",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Beginner",
        "question": "What is the primary benefit of using self.subTest() over a standard for-loop with assertions in a test method?",
        "codeSnippet": "# Plain loop vs subTest\nfor val in data:\n    with self.subTest(val=val):\n        self.assertTrue(is_valid(val))",
        "options": [
            "A single failure inside a plain loop terminates the entire test immediately, whereas subTest allows remaining iterations to run and report independently",
            "subTest executes iterations in parallel across multiple CPU cores",
            "subTest automatically generates input test cases using AI",
            "subTest runs setUp() and tearDown() before and after every loop iteration"
        ],
        "correctAnswer": 0,
        "explanation": "In a plain loop, the first assertion failure stops the test immediately. self.subTest() allows every iteration to run to completion, pinpointing all failing inputs in one test execution.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Benefits & Failure Isolation",
        "tags": ["subTest", "loop-assertions", "failure-isolation"]
    },
    {
        "id": "pcat-5-023",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "How do parameters passed as keyword arguments to self.subTest(...) appear in the test failure report?",
        "codeSnippet": "with self.subTest(user_id=42, role='admin'):\n    self.assertTrue(has_permission(42, 'admin'))",
        "options": [
            "They are printed inside parentheses alongside the test name: e.g. test_permission (user_id=42, role='admin')",
            "They are written to a separate hidden JSON file in /tmp",
            "They are encrypted as hex tokens for security",
            "They only appear if the test succeeds"
        ],
        "correctAnswer": 0,
        "explanation": "unittest displays any parameters passed to subTest as key=value pairs in parentheses next to the test failure message, allowing precise identification of which dataset caused the failure.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Failure Reporting",
        "tags": ["subTest", "reporting", "diagnostics"]
    },
    {
        "id": "pcat-5-024",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "Can multiple assertions be made inside a single self.subTest() context block?",
        "codeSnippet": "with self.subTest(item=item):\n    self.assertIsNotNone(item.id)\n    self.assertGreater(item.price, 0)\n    self.assertTrue(item.is_active)",
        "options": [
            "No, only exactly one assertion statement is permitted per subTest",
            "Yes, multiple assertions can be made; the first failure inside the block will record a failure for that specific subtest",
            "Yes, but only if all assertions are assertEqual",
            "No, subTest only supports boolean assertTrue statements"
        ],
        "correctAnswer": 1,
        "explanation": "Multiple assertions can be placed inside a single subTest block. If any assertion fails, that subtest is marked failed with the failure traceback, and execution proceeds to the next subTest block.",
        "officialRef": "PCAT-31-0x Block 5.2: Multiple Assertions within SubTest",
        "tags": ["subTest", "assertions", "flow-control"]
    },
    {
        "id": "pcat-5-025",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Advanced",
        "question": "Does self.subTest() invoke setUp() and tearDown() for each subtest iteration?",
        "codeSnippet": "class TestCounter(unittest.TestCase):\n    def setUp(self):\n        print('SET UP')\n        \n    def test_iterations(self):\n        for i in range(3):\n            with self.subTest(i=i):\n                self.assertEqual(i * 2, i + i)",
        "options": [
            "Yes, setUp and tearDown run 3 times",
            "No, setUp and tearDown run once for the entire test_iterations method",
            "tearDown runs after each subTest, but setUp only runs once",
            "setUp runs before each subTest, but tearDown only runs once"
        ],
        "correctAnswer": 1,
        "explanation": "setUp() and tearDown() are tied to the TestCase method (test_iterations), NOT to individual subtests. They run exactly once for the outer test method.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Lifecycle Interactions",
        "tags": ["subTest", "setUp", "tearDown", "lifecycle"]
    },
    {
        "id": "pcat-5-026",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Intermediate",
        "question": "Can positional arguments (like a descriptive message) be passed to self.subTest()?",
        "codeSnippet": "cases = [('valid email', 'test@example.com'), ('missing at', 'invalid.com')]\nfor desc, email in cases:\n    with self.subTest(desc):\n        self.assertEqual(validate_email(email), '@' in email)",
        "options": [
            "No, subTest only accepts keyword arguments",
            "Yes, the first positional argument is treated as a message string ('msg')",
            "No, msg must be passed to the assertions inside the block only",
            "Positional arguments cause an immediate DeprecationWarning"
        ],
        "correctAnswer": 1,
        "explanation": "self.subTest(msg=None, **params) accepts an optional positional string 'msg' as well as arbitrary keyword arguments to describe the iteration.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Positional Message Argument",
        "tags": ["subTest", "msg", "parameters"]
    },
    {
        "id": "pcat-5-027",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Advanced",
        "question": "What happens if an unhandled non-assertion exception (e.g. ZeroDivisionError) occurs inside a self.subTest()?",
        "codeSnippet": "with self.subTest(divisor=d):\n    result = 100 / d\n    self.assertGreater(result, 0)",
        "options": [
            "The exception crashes the entire Python interpreter immediately",
            "The subtest records an ERROR for that iteration, and execution continues with subsequent subtests",
            "The test is marked as SKIPPED and ignored",
            "The exception is automatically converted into an AssertionError"
        ],
        "correctAnswer": 1,
        "explanation": "Unhandled exceptions inside a subTest are captured and recorded as an ERROR for that specific subtest instance, without halting the remaining subtests in the loop.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Exception Handling",
        "tags": ["subTest", "exceptions", "error-recording"]
    },
    {
        "id": "pcat-5-028",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Intermediate",
        "question": "Which third-party library is commonly used in traditional unittest codebases to achieve parametrized test methods via a decorator before pytest?",
        "codeSnippet": "from parameterized import parameterized\n\nclass TestMath(unittest.TestCase):\n    @parameterized.expand([\n        ('positive', 2, 3, 5),\n        ('negative', -1, -2, -3),\n    ])\n    def test_add(self, name, a, b, expected):\n        self.assertEqual(a + b, expected)",
        "options": [
            "parameterized (or ddt)",
            "argparse_test",
            "unittest_loop",
            "decorator_suite"
        ],
        "correctAnswer": 0,
        "explanation": "The 'parameterized' package (and 'ddt' - Data-Driven Tests) are the standard community libraries for generating separate test methods from data matrices in unittest.",
        "officialRef": "PCAT-31-0x Block 5.2: Data-Driven Testing Patterns",
        "tags": ["parameterized", "ddt", "data-driven"]
    },
    {
        "id": "pcat-5-029",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "How are subtests counted in the summary line of standard unittest runner output (e.g., 'Ran 1 test in 0.001s')?",
        "codeSnippet": "class TestSub(unittest.TestCase):\n    def test_multi(self):\n        for i in range(10):\n            with self.subTest(i=i):\n                self.assertTrue(True)",
        "options": [
            "It reports 'Ran 10 tests' because each subtest counts as a separate test",
            "It reports 'Ran 1 test' because only the test method is counted, though subtest failures are detailed individually",
            "It reports 'Ran 11 tests' (1 parent plus 10 children)",
            "Subtests cannot be run by the standard unittest CLI runner"
        ],
        "correctAnswer": 1,
        "explanation": "The runner's summary counter reports the number of test methods run ('Ran 1 test'), but any failing subtests will be detailed individually in the failure log.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Counting and Reporting",
        "tags": ["subTest", "runner", "metrics"]
    },
    {
        "id": "pcat-5-030",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "Can subtests be nested within other subtests?",
        "codeSnippet": "for x in [1, 2]:\n    with self.subTest(x=x):\n        for y in ['a', 'b']:\n            with self.subTest(y=y):\n                self.assertIsNotNone(compute(x, y))",
        "options": [
            "No, nesting subTest blocks raises a NestedSubTestError",
            "Yes, subtests can be nested, and parameters from all enclosing subTest contexts are combined in error reports",
            "Yes, but only the inner subTest parameters will be printed upon failure",
            "Yes, but only up to 2 levels of depth in Python 3.10+"
        ],
        "correctAnswer": 1,
        "explanation": "subTest blocks can be nested. If a failure occurs inside a nested block, unittest combines the parameters from all active enclosing subTest contexts in its report.",
        "officialRef": "PCAT-31-0x Block 5.2: Nested SubTests",
        "tags": ["subTest", "nesting", "context-managers"]
    },
    {
        "id": "pcat-5-031",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Data-Driven Testing",
        "difficulty": "Beginner",
        "question": "What is the primary motivation for Data-Driven Testing (DDT)?",
        "codeSnippet": "# Testing identical logic across multiple data sets:\ntest_cases = [\n    (0, 0),\n    (1, 1),\n    (2, 4),\n    (3, 9)\n]",
        "options": [
            "To test different paths of code using different hardware drivers",
            "To separate test logic from test input/output datasets, reducing code duplication (DRY)",
            "To avoid writing test functions entirely",
            "To compile Python tests into binary machine code"
        ],
        "correctAnswer": 1,
        "explanation": "Data-Driven Testing separates the test logic from test data vectors, adhering to the DRY principle and making it easy to add new test vectors without duplicating test functions.",
        "officialRef": "PCAT-31-0x Block 5.2: Data-Driven Testing Concept",
        "tags": ["ddt", "dry", "principles"]
    },
    {
        "id": "pcat-5-032",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Advanced",
        "question": "If all subtests pass in a test method, what is the reported status of that method?",
        "codeSnippet": "def test_all_pass(self):\n    for i in range(5):\n        with self.subTest(i=i):\n            self.assertEqual(i, i)",
        "options": [
            "PASSED (ok)",
            "PARTIAL_OK",
            "SUB_PASS",
            "VERIFIED"
        ],
        "correctAnswer": 0,
        "explanation": "If no assertions or exceptions fail in any subtest, the test method as a whole completes with standard 'ok' (passed) status.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Success Semantics",
        "tags": ["subTest", "pass-condition"]
    },
    {
        "id": "pcat-5-033",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "What happens if 3 out of 10 subtests in a test method fail?",
        "codeSnippet": "def test_sample(self):\n    for i in range(10):\n        with self.subTest(i=i):\n            if i in [2, 5, 7]:\n                self.fail(f'Failed on {i}')",
        "options": [
            "The test runner reports 3 distinct failures corresponding to the subtests, and the overall test method fails",
            "Only the first failure (i=2) is recorded and reported",
            "The entire suite aborts immediately",
            "The test is marked as 70% passing in the final score"
        ],
        "correctAnswer": 0,
        "explanation": "The runner records all 3 failing subtests with their respective parameter values and tracebacks, giving clear visibility into each failure, and marks the suite as failed.",
        "officialRef": "PCAT-31-0x Block 5.2: Multiple SubTest Failures",
        "tags": ["subTest", "failure-aggregation"]
    },
    {
        "id": "pcat-5-034",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Beginner",
        "question": "Which Python version officially introduced self.subTest() into unittest.TestCase?",
        "codeSnippet": "with self.subTest():\n    pass",
        "options": [
            "Python 2.7",
            "Python 3.4",
            "Python 3.8",
            "Python 3.11"
        ],
        "correctAnswer": 1,
        "explanation": "self.subTest() was added to the standard library unittest module in Python 3.4.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest History & Versioning",
        "tags": ["python3.4", "subTest", "stdlib"]
    },
    {
        "id": "pcat-5-035",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Intermediate",
        "question": "What is the equivalent feature in pytest to unittest's self.subTest() loop pattern?",
        "codeSnippet": "# Pytest equivalent\nimport pytest\n\n@pytest.mark.parametrize('a, b, expected', [\n    (1, 2, 3),\n    (4, 5, 9),\n])\ndef test_add(a, b, expected):\n    assert a + b == expected",
        "options": [
            "@pytest.mark.parametrize",
            "@pytest.fixture(loop=True)",
            "@pytest.repeat",
            "@pytest.subtest"
        ],
        "correctAnswer": 0,
        "explanation": "@pytest.mark.parametrize is the primary mechanism in pytest for data-driven testing, creating separate test invocations for each parameter tuple.",
        "officialRef": "PCAT-31-0x Block 5.2: Comparative Parameterization (pytest vs unittest)",
        "tags": ["pytest", "parametrize", "unittest"]
    },
    {
        "id": "pcat-5-036",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Intermediate",
        "question": "When iterating over a dictionary of inputs and expected outputs, how should parameters be passed to self.subTest()?",
        "codeSnippet": "table = {'a': 1, 'b': 2, 'c': 3}\nfor key, expected in table.items():\n    with self.subTest(key=key, expected=expected):\n        self.assertEqual(lookup(key), expected)",
        "options": [
            "As explicit keyword arguments matching the variables being tested",
            "As a single raw binary string",
            "Via a global variable named SUBTEST_ARGS",
            "Through sys.argv"
        ],
        "correctAnswer": 0,
        "explanation": "Passing explicit keyword arguments (e.g. key=key, expected=expected) allows the test runner to display meaningful contextual keys upon failure.",
        "officialRef": "PCAT-31-0x Block 5.2: Best Practices for SubTest Arguments",
        "tags": ["subTest", "clean-code", "best-practices"]
    },
    {
        "id": "pcat-5-037",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Advanced",
        "question": "Can code execute outside of the subTest block within the same test method?",
        "codeSnippet": "def test_user_creation(self):\n    user = create_user('Alice')  # Outside subTest\n    self.assertIsNotNone(user.id)\n    \n    for role in ['viewer', 'editor']:\n        with self.subTest(role=role):\n            self.assertTrue(user.can_assign(role))",
        "options": [
            "No, once a method uses subTest, all lines of code in that method must be inside a subTest block",
            "Yes, test setup or shared assertions can live outside the subTest blocks in that method",
            "Yes, but assertions outside subTest are ignored",
            "No, Python raises a SyntaxError"
        ],
        "correctAnswer": 1,
        "explanation": "subTest is just a standard Python context manager. Setup logic or baseline assertions can freely live outside the loop, with only the iterative assertions inside subTest.",
        "officialRef": "PCAT-31-0x Block 5.2: Structuring Tests with SubTests",
        "tags": ["subTest", "architecture", "test-design"]
    },
    {
        "id": "pcat-5-038",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Intermediate",
        "question": "What is the result if code inside self.subTest() executes a return statement?",
        "codeSnippet": "for i in [1, 2, 3]:\n    with self.subTest(i=i):\n        if i == 2:\n            return\n        self.assertTrue(True)",
        "options": [
            "It only exits the subTest context and continues the for loop",
            "It returns from the entire test method, preventing subsequent loop iterations (i=3) from executing",
            "It triggers a SubTestReturnError",
            "It skips to tearDown immediately with a WARNING"
        ],
        "correctAnswer": 1,
        "explanation": "A return statement exits the containing function (the test method). It does not simply break the subtest; it terminates the method completely, so remaining iterations never run.",
        "officialRef": "PCAT-31-0x Block 5.2: Flow Control Pitfalls in SubTests",
        "tags": ["subTest", "flow-control", "pitfalls"]
    },
    {
        "id": "pcat-5-039",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "Parameterized Testing",
        "difficulty": "Intermediate",
        "question": "Which of the following data structures is most commonly used to store table-driven test cases for parameterized loops?",
        "codeSnippet": "TEST_CASES = [\n    # (input_val, expected_val, should_error)\n    ('hello', 'HELLO', False),\n    ('', '', False),\n    (None, '', True),\n]",
        "options": [
            "A list of tuples or namedtuples or dictionaries representing inputs and expectations",
            "A thread-safe multiprocessing FIFO queue",
            "A single continuous long string parsed with regex",
            "An XML document compiled into bytecode"
        ],
        "correctAnswer": 0,
        "explanation": "A list of tuples, dataclasses, or dictionaries is the standard Python pattern for table-driven testing, providing clean, readable datasets.",
        "officialRef": "PCAT-31-0x Block 5.2: Table-Driven Test Design",
        "tags": ["table-driven", "data-structures", "patterns"]
    },
    {
        "id": "pcat-5-040",
        "section": "Section 5",
        "chapter": "5.2",
        "category": "SubTests",
        "difficulty": "Advanced",
        "question": "How does self.subTest() interact with test runners that do not implement the SubTest protocol?",
        "codeSnippet": "# Custom or legacy TestResult object",
        "options": [
            "Legacy runners crash with an AttributeError",
            "subTest falls back gracefully to running assertions as normal block code; failures are reported as ordinary test failures",
            "The test suite is skipped entirely",
            "Python raises a SystemExit"
        ],
        "correctAnswer": 1,
        "explanation": "In unittest, if a custom TestResult does not implement addSubTest, subTest still acts as a context manager; if an assertion fails, it reports as a normal test failure rather than crashing.",
        "officialRef": "PCAT-31-0x Block 5.2: SubTest Backwards Compatibility",
        "tags": ["subTest", "compatibility", "test-result"]
    }
])

# =========================================================================
# CHAPTER 5.3: Conditional Execution and Test Marking (Cards 41-60)
# =========================================================================
cards.extend([
    {
        "id": "pcat-5-041",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Tests",
        "difficulty": "Beginner",
        "question": "Which decorator unconditionally skips a test method with a required explanation reason?",
        "codeSnippet": "class TestNetworking(unittest.TestCase):\n    @unittest.___?('External payment API under maintenance')\n    def test_live_charge(self):\n        charge_credit_card()",
        "options": [
            "skip",
            "ignore",
            "bypass",
            "omit"
        ],
        "correctAnswer": 0,
        "explanation": "@unittest.skip(reason) unconditionally skips the decorated test. A string reason explaining why the test is skipped is required.",
        "officialRef": "PCAT-31-0x Block 5.3: Skipping Tests Unconditionally",
        "tags": ["unittest", "skip", "decorators"]
    },
    {
        "id": "pcat-5-042",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Tests",
        "difficulty": "Beginner",
        "question": "Which decorator skips a test only if a given condition evaluates to True?",
        "codeSnippet": "import sys\n\nclass TestWindowsFeature(unittest.TestCase):\n    @unittest.___?(sys.platform != 'win32', 'Requires Windows OS')\n    def test_registry_access(self):\n        read_win_registry()",
        "options": [
            "skipUnless",
            "skipIf",
            "conditionalSkip",
            "skipWhen"
        ],
        "correctAnswer": 1,
        "explanation": "@unittest.skipIf(condition, reason) skips the decorated test if condition evaluates to True.",
        "officialRef": "PCAT-31-0x Block 5.3: Conditional Skipping with skipIf",
        "tags": ["unittest", "skipIf", "platform-checks"]
    },
    {
        "id": "pcat-5-043",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Tests",
        "difficulty": "Beginner",
        "question": "Which decorator skips a test unless a given condition evaluates to True?",
        "codeSnippet": "import shutil\n\nclass TestGitTools(unittest.TestCase):\n    @unittest.___?(shutil.which('git') is not None, 'git CLI must be installed')\n    def test_clone_repo(self):\n        run_git_clone()",
        "options": [
            "skipIf",
            "skipUnless",
            "requireIf",
            "mustHave"
        ],
        "correctAnswer": 1,
        "explanation": "@unittest.skipUnless(condition, reason) skips the test unless the condition is True (i.e. skips when condition is False).",
        "officialRef": "PCAT-31-0x Block 5.3: Conditional Skipping with skipUnless",
        "tags": ["unittest", "skipUnless", "prerequisites"]
    },
    {
        "id": "pcat-5-044",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Expected Failures",
        "difficulty": "Intermediate",
        "question": "What is the purpose of decorating a test method with @unittest.expectedFailure?",
        "codeSnippet": "class TestBugFix(unittest.TestCase):\n    @unittest.expectedFailure\n    def test_known_bug_issue_404(self):\n        # Bug documented in Jira #404, not yet patched\n        self.assertEqual(parse_broken_date('2026-99-99'), None)",
        "options": [
            "It causes the test to fail immediately without running its body",
            "It marks the test as expected to fail; if it fails, it is not counted as a failure on the TestResult",
            "It retries the test repeatedly until it fails",
            "It raises an assertion error if the test takes more than 1 second to execute"
        ],
        "correctAnswer": 1,
        "explanation": "@unittest.expectedFailure indicates that the test is expected to fail (e.g. for a known bug). If the test fails, it counts as an 'expected failure' rather than an ordinary failure, keeping the build green.",
        "officialRef": "PCAT-31-0x Block 5.3: Handling Known Bugs with expectedFailure",
        "tags": ["unittest", "expectedFailure", "known-bugs"]
    },
    {
        "id": "pcat-5-045",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Expected Failures",
        "difficulty": "Intermediate",
        "question": "What happens if a test decorated with @unittest.expectedFailure unexpectedly passes?",
        "codeSnippet": "@unittest.expectedFailure\ndef test_feature(self):\n    self.assertEqual(1 + 1, 2)  # Passes!",
        "options": [
            "It is recorded as an 'unexpected success' (UXSUCCESS / U)",
            "It is recorded as a standard test failure",
            "It is marked as SKIPPED",
            "The test runner deletes the test file"
        ],
        "correctAnswer": 0,
        "explanation": "If a test marked with @expectedFailure passes, unittest marks it as an 'unexpected success' (abbreviated 'u' or reported as unexpected success). Depending on runner flags, this can be flagged for cleanup.",
        "officialRef": "PCAT-31-0x Block 5.3: Unexpected Success Outcome",
        "tags": ["unittest", "unexpected-success", "expectedFailure"]
    },
    {
        "id": "pcat-5-046",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Dynamic Skipping",
        "difficulty": "Intermediate",
        "question": "How can a test be dynamically skipped from within the test method body or setUp() during runtime?",
        "codeSnippet": "def test_connect_remote_server(self):\n    if not ping_server('10.0.0.1'):\n        self.___?('Server unreachable on LAN')\n    self.assertTrue(connect())",
        "options": [
            "skipTest(reason)",
            "abortTest(reason)",
            "cancelTest(reason)",
            "passTest(reason)"
        ],
        "correctAnswer": 0,
        "explanation": "Calling self.skipTest(reason) (or raising unittest.SkipTest(reason)) dynamically aborts execution of the current test and marks it as SKIPPED.",
        "officialRef": "PCAT-31-0x Block 5.3: Dynamic Test Skipping with skipTest",
        "tags": ["unittest", "skipTest", "runtime-skipping"]
    },
    {
        "id": "pcat-5-047",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Class Skipping",
        "difficulty": "Intermediate",
        "question": "What happens if @unittest.skip or @unittest.skipIf is placed on a TestCase class rather than a method?",
        "codeSnippet": "@unittest.skip('Database migrations pending')\nclass TestUserMigrations(unittest.TestCase):\n    def test_one(self): pass\n    def test_two(self): pass",
        "options": [
            "Only the first test in the class is skipped",
            "All test methods in the decorated class are skipped, and setUpClass is not executed",
            "It raises a TypeError because skip decorators only work on functions",
            "The class is executed in mock mode"
        ],
        "correctAnswer": 1,
        "explanation": "Applying skip decorators to a TestCase class skips every test method in that class, and class fixtures like setUpClass/tearDownClass are not run.",
        "officialRef": "PCAT-31-0x Block 5.3: Class-Level Skipping",
        "tags": ["unittest", "class-decorator", "skip"]
    },
    {
        "id": "pcat-5-048",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Mechanics",
        "difficulty": "Advanced",
        "question": "What underlying exception does self.skipTest(reason) raise under the hood?",
        "codeSnippet": "def test_demo(self):\n    self.skipTest('Demonstration')",
        "options": [
            "unittest.SkipTest",
            "StopIteration",
            "KeyboardInterrupt",
            "unittest.TestIgnoredException"
        ],
        "correctAnswer": 0,
        "explanation": "self.skipTest(reason) raises unittest.SkipTest(reason), which is caught by the test runner framework and recorded as a skipped test.",
        "officialRef": "PCAT-31-0x Block 5.3: SkipTest Exception Architecture",
        "tags": ["unittest", "SkipTest", "internals"]
    },
    {
        "id": "pcat-5-049",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Mechanics",
        "difficulty": "Intermediate",
        "question": "If self.skipTest() is called inside setUp(), what happens to the test method and tearDown()?",
        "codeSnippet": "class TestResource(unittest.TestCase):\n    def setUp(self):\n        if not os.path.exists('/dev/ttyUSB0'):\n            self.skipTest('Hardware device absent')\n        self.dev = open('/dev/ttyUSB0')\n    def tearDown(self):\n        self.dev.close()",
        "options": [
            "The test method is skipped, and tearDown() is NOT called",
            "The test method runs anyway",
            "tearDown() runs and raises an AttributeError because self.dev is missing",
            "The entire suite halts with exit code 1"
        ],
        "correctAnswer": 0,
        "explanation": "Calling skipTest() inside setUp() skips the test immediately. Because setUp did not complete, tearDown() is not invoked, preventing cleanup errors on uninitialized resources.",
        "officialRef": "PCAT-31-0x Block 5.3: Skipping Inside setUp",
        "tags": ["setUp", "skipTest", "tearDown"]
    },
    {
        "id": "pcat-5-050",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Runner Reporting",
        "difficulty": "Beginner",
        "question": "What single character represents a skipped test in unittest's default command-line output?",
        "codeSnippet": "$ python -m unittest\n..s.F.s.E.",
        "options": [
            "'S' (or lowercase 's')",
            "'?'",
            "'-'",
            "'K'"
        ],
        "correctAnswer": 0,
        "explanation": "unittest prints 's' for skipped tests in default non-verbose console mode (while '.' is pass, 'F' is failure, 'E' is error, and 'u'/'x' for unexpected success/expected failure).",
        "officialRef": "PCAT-31-0x Block 5.3: CLI Symbol Conventions",
        "tags": ["cli", "symbols", "unittest-output"]
    }
])

part1_cards = cards[:50]
part2_cards = []

# CHAPTER 5.3 (Continued) Cards 51-60
part2_cards.extend([
    {
        "id": "pcat-5-051",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Runner Reporting",
        "difficulty": "Beginner",
        "question": "What character represents an expected failure in default unittest console output?",
        "codeSnippet": "$ python -m unittest\n..x...",
        "options": [
            "'x'",
            "'e'",
            "'f'",
            "'X'"
        ],
        "correctAnswer": 0,
        "explanation": "In unittest, an expected failure is denoted by 'x' in standard console output.",
        "officialRef": "PCAT-31-0x Block 5.3: CLI Status Symbols",
        "tags": ["cli", "expectedFailure", "symbols"]
    },
    {
        "id": "pcat-5-052",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Runner Reporting",
        "difficulty": "Beginner",
        "question": "What character represents an unexpected success in default unittest console output?",
        "codeSnippet": "$ python -m unittest\n..u...",
        "options": [
            "'u'",
            "'v'",
            "'P'",
            "'*'"
        ],
        "correctAnswer": 0,
        "explanation": "An unexpected success (a test marked @expectedFailure that passed anyway) is denoted by 'u'.",
        "officialRef": "PCAT-31-0x Block 5.3: Unexpected Success Symbol",
        "tags": ["cli", "unexpectedSuccess", "symbols"]
    },
    {
        "id": "pcat-5-053",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Best Practices",
        "difficulty": "Intermediate",
        "question": "Why is it important to always provide a descriptive 'reason' string when skipping a test?",
        "codeSnippet": "@unittest.skip('TODO: Refactor authentication header after OAuth2 migration in Sprint 12')\ndef test_auth(self): pass",
        "options": [
            "Python raises a ValueError if reason is left empty",
            "It documents technical debt, clarifies why the test was deactivated, and helps team members know when it can be re-enabled",
            "The reason string is sent to the Python Software Foundation telemetry servers",
            "It automatically creates a GitHub issue"
        ],
        "correctAnswer": 1,
        "explanation": "Providing a clear reason explains the technical debt, external dependency, or blocking bug to teammates, preventing tests from being silently forgotten.",
        "officialRef": "PCAT-31-0x Block 5.3: Documentation and Maintenance of Skipped Tests",
        "tags": ["maintenance", "technical-debt", "best-practices"]
    },
    {
        "id": "pcat-5-054",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Conditional Skipping",
        "difficulty": "Intermediate",
        "question": "How can you skip a test based on the Python runtime version?",
        "codeSnippet": "import sys\n\nclass TestFeatures(unittest.TestCase):\n    @unittest.___?(sys.version_info < (3, 10), 'Structural pattern matching requires Python 3.10+')\n    def test_match_case(self):\n        pass",
        "options": [
            "skipIf",
            "skipVersion",
            "versionGuard",
            "requirePython"
        ],
        "correctAnswer": 0,
        "explanation": "@unittest.skipIf(sys.version_info < (3, 10), 'reason') is the standard idiom for conditionally skipping tests on unsupported Python versions.",
        "officialRef": "PCAT-31-0x Block 5.3: Python Version Guards",
        "tags": ["sys.version_info", "skipIf", "versioning"]
    },
    {
        "id": "pcat-5-055",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Conditional Skipping",
        "difficulty": "Advanced",
        "question": "When are the conditions in @unittest.skipIf evaluated?",
        "codeSnippet": "flag = False\n\nclass TestTiming(unittest.TestCase):\n    @unittest.skipIf(flag, 'Flag is set')\n    def test_demo(self):\n        pass\n\nflag = True  # Mutated after class definition!",
        "options": [
            "When the module is imported / class is defined, not when the test method executes",
            "Dynamically right before test_demo is called",
            "Only when the test runner writes its final report",
            "At Python installation time"
        ],
        "correctAnswer": 0,
        "explanation": "Because decorators are applied at definition time (when module/class is imported), conditions in @unittest.skipIf are evaluated once at import time. For dynamic runtime checks, self.skipTest() should be used.",
        "officialRef": "PCAT-31-0x Block 5.3: Decorator Evaluation Timing",
        "tags": ["decorators", "evaluation-order", "skipIf"]
    },
    {
        "id": "pcat-5-056",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Mechanics",
        "difficulty": "Intermediate",
        "question": "Can setUpClass() invoke cls.skipTest() or raise unittest.SkipTest?",
        "codeSnippet": "class TestCloudCluster(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        if not has_cloud_credentials():\n            raise unittest.SkipTest('No cloud API credentials provided')",
        "options": [
            "No, SkipTest is forbidden in class methods",
            "Yes, raising unittest.SkipTest in setUpClass skips the entire class cleanly",
            "Only if cls.tearDownClass is also removed",
            "It causes an uncaught Exception error in all versions of Python"
        ],
        "correctAnswer": 1,
        "explanation": "Raising unittest.SkipTest inside setUpClass() cleanly skips all test methods belonging to that TestCase class without erroring.",
        "officialRef": "PCAT-31-0x Block 5.3: Skipping from setUpClass",
        "tags": ["setUpClass", "SkipTest", "clean-skipping"]
    },
    {
        "id": "pcat-5-057",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Best Practices",
        "difficulty": "Intermediate",
        "question": "Which of the following is considered a bad practice when dealing with broken tests?",
        "codeSnippet": "# Action taken on a test that suddenly broke on master:\n# Option A: Comment it out\n# Option B: Use @unittest.expectedFailure\n# Option C: Use @unittest.skip(reason='Link to bug tracker')",
        "options": [
            "Marking it with @expectedFailure while actively investigating",
            "Commenting out the test code or deleting it so nobody realizes the feature broke",
            "Skipping it with an explicit issue ticket link",
            "Running it under a specific CI tag"
        ],
        "correctAnswer": 1,
        "explanation": "Commenting out or deleting tests masks regressions and leads to dead, forgotten tests. Proper practice is using @skip or @expectedFailure with a tracked bug reference.",
        "officialRef": "PCAT-31-0x Block 5.3: Quality Engineering Test Hygiene",
        "tags": ["test-hygiene", "anti-patterns", "clean-code"]
    },
    {
        "id": "pcat-5-058",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Conditional Execution",
        "difficulty": "Advanced",
        "question": "Can custom decorators be constructed that combine multiple skip checks?",
        "codeSnippet": "def requires_docker(func):\n    return unittest.skipUnless(is_docker_running(), 'Docker daemon required')(func)",
        "options": [
            "No, unittest decorators cannot be composed",
            "Yes, decorator composition allows reusable domain-specific skip conditions across the test suite",
            "Only by monkeypatching unittest.TestCase",
            "Custom skip decorators only work in pytest"
        ],
        "correctAnswer": 1,
        "explanation": "Decorators in Python are higher-order functions. You can compose custom domain decorators like @requires_docker or @requires_gpu to provide clean, reusable skip guards.",
        "officialRef": "PCAT-31-0x Block 5.3: Custom Skip Decorators",
        "tags": ["decorators", "skipUnless", "reusability"]
    },
    {
        "id": "pcat-5-059",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Expected Failures",
        "difficulty": "Intermediate",
        "question": "Does @unittest.expectedFailure hide unhandled syntax errors inside a test method?",
        "codeSnippet": "class TestSyntax(unittest.TestCase):\n    # Python runtime syntax check",
        "options": [
            "Yes, syntax errors are treated as expected failures",
            "No, syntax errors prevent the module from being compiled/imported at all, causing a fatal import error",
            "Syntax errors are converted into warnings",
            "The test runner ignores files with syntax errors"
        ],
        "correctAnswer": 1,
        "explanation": "A SyntaxError prevents the Python parser from compiling the module, so the test file cannot even be imported by the runner, let alone execute @expectedFailure.",
        "officialRef": "PCAT-31-0x Block 5.3: Import Errors vs Expected Failures",
        "tags": ["SyntaxError", "compilation", "expectedFailure"]
    },
    {
        "id": "pcat-5-060",
        "section": "Section 5",
        "chapter": "5.3",
        "category": "Skipping Mechanics",
        "difficulty": "Beginner",
        "question": "Does a skipped test increment the count of failed tests on the exit status of the test runner?",
        "codeSnippet": "$ python -m unittest test_suite.py\n# Ran 10 tests (3 skipped)\n# OK (skipped=3)",
        "options": [
            "Yes, any test that does not pass counts as a test failure and returns exit code 1",
            "No, skipped tests do not cause the test run to fail (exit code remains 0)",
            "Only if more than 50% of tests are skipped",
            "Only if strict mode is enabled in Python 3.7"
        ],
        "correctAnswer": 1,
        "explanation": "Skipped tests do not cause the test suite to fail; the runner returns exit code 0 (success) with a count of skipped tests noted.",
        "officialRef": "PCAT-31-0x Block 5.3: Exit Codes and Skipped Tests",
        "tags": ["cli", "exit-code", "skipping"]
    }
])

# =========================================================================
# CHAPTER 5.4: Test Doubles and Mocking with unittest.mock (Cards 61-80)
# =========================================================================
part2_cards.extend([
    {
        "id": "pcat-5-061",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mocking Basics",
        "difficulty": "Beginner",
        "question": "What standard library module in Python provides tools for mocking and creating test doubles?",
        "codeSnippet": "from ___? import Mock, patch, MagicMock",
        "options": [
            "unittest.mock",
            "testing.doubles",
            "sys.mock",
            "pytest.fake"
        ],
        "correctAnswer": 0,
        "explanation": "Python's standard library provides unittest.mock (introduced in Python 3.3 via PEP 417, based on Michael Foord's mock library).",
        "officialRef": "PCAT-31-0x Block 5.4: Test Doubles and the unittest.mock Mechanism",
        "tags": ["unittest.mock", "standard-library", "imports"]
    },
    {
        "id": "pcat-5-062",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mock vs MagicMock",
        "difficulty": "Intermediate",
        "question": "What is the key difference between unittest.mock.Mock and unittest.mock.MagicMock?",
        "codeSnippet": "m1 = Mock()\nm2 = MagicMock()\n\n# len(m2) works out of the box!\n# len(m1) raises TypeError: object of type 'Mock' has no len()",
        "options": [
            "Mock is for functions while MagicMock is only for classes",
            "MagicMock has default implementations of most Python magic / dunder methods (like __len__, __iter__, __enter__, __exit__), whereas Mock does not",
            "Mock is thread-safe whereas MagicMock is not",
            "MagicMock executes calls asynchronously on a thread pool"
        ],
        "correctAnswer": 1,
        "explanation": "MagicMock subclasses Mock and comes pre-configured with mocked implementations of standard magic/dunder methods (e.g., __getitem__, __len__, __enter__, __exit__, __iter__), making it ideal for mocking objects used in protocols.",
        "officialRef": "PCAT-31-0x Block 5.4: Mock vs MagicMock",
        "tags": ["Mock", "MagicMock", "dunder-methods"]
    },
    {
        "id": "pcat-5-063",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mock Behavior",
        "difficulty": "Beginner",
        "question": "What attribute of a Mock object is configured to specify a fixed value that calling the mock should return?",
        "codeSnippet": "mock_func = Mock()\nmock_func.___? = 42\n\nassert mock_func() == 42",
        "options": [
            "return_value",
            "result_value",
            "output",
            "response"
        ],
        "correctAnswer": 0,
        "explanation": "Setting 'return_value' on a Mock causes any call to the mock to return that specific value.",
        "officialRef": "PCAT-31-0x Block 5.4: Configuring return_value",
        "tags": ["mock", "return_value", "basics"]
    },
    {
        "id": "pcat-5-064",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mock Behavior",
        "difficulty": "Intermediate",
        "question": "How can a Mock be configured to raise an exception when called, or return different values on sequential calls?",
        "codeSnippet": "mock_func = Mock()\nmock_func.___? = [1, 2, ValueError('Out of range')]\n\nprint(mock_func()) # 1\nprint(mock_func()) # 2\nmock_func()         # raises ValueError",
        "options": [
            "side_effect",
            "on_call",
            "call_action",
            "sequence_result"
        ],
        "correctAnswer": 0,
        "explanation": "'side_effect' can be set to an exception (to raise on call), a callable (executed dynamically), or an iterable (returning each element in sequence and raising if an element is an Exception class or instance).",
        "officialRef": "PCAT-31-0x Block 5.4: Configuring side_effect",
        "tags": ["mock", "side_effect", "exceptions", "sequences"]
    },
    {
        "id": "pcat-5-065",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Patch Decorator",
        "difficulty": "Intermediate",
        "question": "Where must the target string in @patch('target') point according to the classic rule: 'Mock where it's used, not where it's defined'?",
        "codeSnippet": "# In my_module.py:\nfrom weather import get_temperature\n\ndef check_jacket():\n    return get_temperature() < 10\n\n# In test_module.py:\n@patch('___?')\ndef test_jacket(mock_temp):\n    ...",
        "options": [
            "'weather.get_temperature'",
            "'my_module.get_temperature'",
            "'builtins.get_temperature'",
            "'weather.models.get_temperature'"
        ],
        "correctAnswer": 1,
        "explanation": "Always patch an object in the namespace where it is looked up/used ('my_module.get_temperature'), NOT where it was originally defined ('weather.get_temperature').",
        "officialRef": "PCAT-31-0x Block 5.4: The Where to Patch Rule",
        "tags": ["patch", "where-to-patch", "namespaces"]
    },
    {
        "id": "pcat-5-066",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Patch Context Manager",
        "difficulty": "Intermediate",
        "question": "How can unittest.mock.patch be used as a context manager inside a test?",
        "codeSnippet": "with patch('services.auth.verify_token') as mock_verify:\n    mock_verify.return_value = True\n    result = login('secret')\n    self.assertTrue(result)",
        "options": [
            "By using the 'with patch(...) as mock_obj:' statement",
            "By calling patch.begin() and patch.end()",
            "patch cannot be used with the 'with' statement",
            "By wrapping it inside contextlib.closing()"
        ],
        "correctAnswer": 0,
        "explanation": "patch() works seamlessly as a context manager with 'with patch(...) as mock:'. The target is automatically patched upon entering the block and unpatched upon exit.",
        "officialRef": "PCAT-31-0x Block 5.4: patch as Context Manager",
        "tags": ["patch", "context-manager", "with"]
    },
    {
        "id": "pcat-5-067",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Call Assertions",
        "difficulty": "Intermediate",
        "question": "Which assertion verifies that a mock was called exactly once with specific arguments?",
        "codeSnippet": "mock_send = Mock()\nsend_notification('user@example.com', subject='Welcome')\n\nmock_send.___?('user@example.com', subject='Welcome')",
        "options": [
            "assert_called_once_with",
            "verify_single_call",
            "assert_invoked_exactly",
            "check_called_with"
        ],
        "correctAnswer": 0,
        "explanation": "mock.assert_called_once_with(*args, **kwargs) verifies that the mock was called exactly one time, and that the arguments in that call matched the expected arguments.",
        "officialRef": "PCAT-31-0x Block 5.4: Mock Call Assertions",
        "tags": ["mock", "assert_called_once_with", "verification"]
    },
    {
        "id": "pcat-5-068",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Call Assertions",
        "difficulty": "Intermediate",
        "question": "What is the danger of writing self.assertTrue(mock_obj.assert_called_once)?",
        "codeSnippet": "# Flawed test:\nmock_obj = Mock()\n# Note: Typo omitting parentheses on assert_called_once!\nself.assertTrue(mock_obj.assert_called_once)",
        "options": [
            "It raises a TypeError immediately",
            "mock_obj.assert_called_once without () simply evaluates to a truthy Mock object method, always passing even if the mock was NEVER called!",
            "It deletes the mock object from memory",
            "It causes Python to enter an infinite loop"
        ],
        "correctAnswer": 1,
        "explanation": "Omitting parentheses means you evaluate the method object itself (which is always truthy) inside assertTrue, creating a silent false pass. In Python 3.8+, Mock raises an AttributeError if you access non-existent assert_* spelling typos.",
        "officialRef": "PCAT-31-0x Block 5.4: Mock Assertion Pitfalls",
        "tags": ["mock", "assertion-pitfalls", "silent-pass"]
    },
    {
        "id": "pcat-5-069",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Patch Object",
        "difficulty": "Intermediate",
        "question": "What is the difference between patch() and patch.object()?",
        "codeSnippet": "import my_module\n\n# patch vs patch.object\nwith patch.object(my_module, 'API_CLIENT', mock_client):\n    ...",
        "options": [
            "patch takes a target string ('pkg.module.attr'), while patch.object takes the actual object reference and the attribute name as a string",
            "patch.object only works on built-in classes like int and str",
            "patch.object creates permanent changes that cannot be undone",
            "patch is asynchronous while patch.object is synchronous"
        ],
        "correctAnswer": 0,
        "explanation": "patch('path.to.module.attribute') resolves target via string import, whereas patch.object(target_obj, 'attr_name') takes the target object reference directly, offering refactor-safe attribute mocking.",
        "officialRef": "PCAT-31-0x Block 5.4: patch.object Usage",
        "tags": ["patch.object", "patch", "refactor-safety"]
    },
    {
        "id": "pcat-5-070",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mock Inspection",
        "difficulty": "Intermediate",
        "question": "Which attribute on a Mock object stores the total number of times it has been called?",
        "codeSnippet": "m = Mock()\nm()\nm()\n\nassert m.___? == 2",
        "options": [
            "call_count",
            "invocations",
            "times_called",
            "total_calls"
        ],
        "correctAnswer": 0,
        "explanation": "mock.call_count tracks the integer number of times the mock object has been called.",
        "officialRef": "PCAT-31-0x Block 5.4: Mock Call Introspection",
        "tags": ["mock", "call_count", "introspection"]
    },
    {
        "id": "pcat-5-071",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mock Safety",
        "difficulty": "Advanced",
        "question": "Why is autospec=True heavily recommended when using @patch?",
        "codeSnippet": "@patch('services.mailer.send_email', autospec=True)\ndef test_notify(mock_send):\n    # If send_email takes (to, subject), calling mock_send(invalid_arg=1)\n    # will raise a TypeError instead of silently creating a new mock!",
        "options": [
            "It runs the mock code in C for high performance",
            "It creates a mock that mimics the exact signature and attributes of the real object, preventing tests from calling non-existent methods or passing invalid parameters",
            "It automatically writes docstrings for the mock",
            "It encrypts the mock parameters"
        ],
        "correctAnswer": 1,
        "explanation": "Without autospec, mocks happily accept ANY method name and ANY arguments without error. autospec=True enforces that the mock conforms strictly to the spec of the real object, catching signature changes and typos.",
        "officialRef": "PCAT-31-0x Block 5.4: Safe Mocking with autospec",
        "tags": ["autospec", "type-safety", "signature-verification"]
    },
    {
        "id": "pcat-5-072",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Test Doubles Terminology",
        "difficulty": "Intermediate",
        "question": "According to Gerard Meszaros' xUnit Test Patterns, what type of Test Double is an object that records calls made to it so they can be asserted afterwards?",
        "codeSnippet": "# Recorded calls for later inspection:\nassert mock_email.called\nassert mock_email.call_count == 1",
        "options": [
            "Spy",
            "Dummy",
            "Fake",
            "Stub"
        ],
        "correctAnswer": 0,
        "explanation": "A Test Spy is a test double that captures and records indirect outputs (calls, arguments) for post-execution verification. Mock objects in Python act as Spies by default.",
        "officialRef": "PCAT-31-0x Block 5.4: Test Double Taxonomies (Spy vs Stub vs Fake)",
        "tags": ["test-doubles", "spy", "terminology"]
    },
    {
        "id": "pcat-5-073",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Test Doubles Terminology",
        "difficulty": "Intermediate",
        "question": "What is the difference between a 'Stub' and a 'Fake' in test double terminology?",
        "codeSnippet": "# Implementation A: Returns hardcoded 200 OK regardless of input\n# Implementation B: An in-memory SQLite database instead of PostgreSQL",
        "options": [
            "A Stub provides canned hardcoded answers to calls made during the test; a Fake actually has a working implementation, but takes shortcuts (like an in-memory database)",
            "A Stub is written in Python; a Fake is written in C",
            "A Fake is only used in integration testing; a Stub is only used in system testing",
            "There is no difference; they are exact synonyms"
        ],
        "correctAnswer": 0,
        "explanation": "A Stub returns canned, hardcoded responses without processing. A Fake has working business logic (e.g. an in-memory dictionary acting as a repository), but is simplified and not suitable for production.",
        "officialRef": "PCAT-31-0x Block 5.4: Stubs vs Fakes",
        "tags": ["stub", "fake", "test-doubles"]
    },
    {
        "id": "pcat-5-074",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Call Assertions",
        "difficulty": "Intermediate",
        "question": "What does mock.assert_not_called() do?",
        "codeSnippet": "mock_delete = Mock()\nif is_safe_mode():\n    pass # do not delete\n\nmock_delete.assert_not_called()",
        "options": [
            "Asserts that the mock was never invoked (call_count == 0); raises AssertionError if it was called",
            "Clears the call history of the mock",
            "Prevents the mock from being called in the future",
            "Marks the mock as deleted"
        ],
        "correctAnswer": 0,
        "explanation": "mock.assert_not_called() asserts that the mock was never called. If mock.call_count > 0, an AssertionError is raised.",
        "officialRef": "PCAT-31-0x Block 5.4: assert_not_called Verification",
        "tags": ["mock", "assert_not_called"]
    },
    {
        "id": "pcat-5-075",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Call Assertions",
        "difficulty": "Advanced",
        "question": "What helper object from unittest.mock represents any arbitrary or wildcard argument when asserting mock calls?",
        "codeSnippet": "from unittest.mock import Mock, ANY\n\nm = Mock()\nm(10, timestamp=1672531199, secret='xyz')\n\nm.assert_called_once_with(10, timestamp=ANY, secret='xyz')",
        "options": [
            "ANY",
            "WILDCARD",
            "IGNORE",
            "ALL"
        ],
        "correctAnswer": 0,
        "explanation": "unittest.mock.ANY is a sentinel comparison object that compares equal to any value, allowing assertions on specific arguments while ignoring unstable values like timestamps or random UUIDs.",
        "officialRef": "PCAT-31-0x Block 5.4: The ANY Sentinel",
        "tags": ["ANY", "mock", "wildcard-assertions"]
    },
    {
        "id": "pcat-5-076",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Property Mocking",
        "difficulty": "Advanced",
        "question": "Which specialized mock class is used to mock a Python @property on a class?",
        "codeSnippet": "from unittest.mock import PropertyMock, patch\n\nwith patch('models.User.is_authenticated', new_callable=PropertyMock) as mock_prop:\n    mock_prop.return_value = True\n    user = User()\n    assert user.is_authenticated is True",
        "options": [
            "PropertyMock",
            "AttributeMock",
            "GetterMock",
            "DescriptorMock"
        ],
        "correctAnswer": 0,
        "explanation": "PropertyMock is designed specifically to mock Python properties. It is passed via new_callable=PropertyMock to patch().",
        "officialRef": "PCAT-31-0x Block 5.4: Mocking Properties with PropertyMock",
        "tags": ["PropertyMock", "properties", "advanced-mocking"]
    },
    {
        "id": "pcat-5-077",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Async Mocking",
        "difficulty": "Advanced",
        "question": "What class in unittest.mock is used to mock asynchronous coroutines (async def)?",
        "codeSnippet": "from unittest.mock import AsyncMock\n\nmock_coro = AsyncMock(return_value='data')\n# In async test:\nresult = await mock_coro()\nassert result == 'data'",
        "options": [
            "AsyncMock",
            "CoroutineMock",
            "AwaitableMock",
            "TaskMock"
        ],
        "correctAnswer": 0,
        "explanation": "Python 3.8 introduced unittest.mock.AsyncMock, which provides an awaitable mock designed specifically for async/await code.",
        "officialRef": "PCAT-31-0x Block 5.4: AsyncMock for Asynchronous Code",
        "tags": ["AsyncMock", "asyncio", "python3.8"]
    },
    {
        "id": "pcat-5-078",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Patch Cleanup",
        "difficulty": "Intermediate",
        "question": "If you start a patcher manually using p = patch(...); p.start(), how should you stop it safely in unittest?",
        "codeSnippet": "def setUp(self):\n    self.patcher = patch('sys.stdout', new_callable=io.StringIO)\n    self.mock_stdout = self.patcher.start()\n    self.___?(self.patcher.stop)",
        "options": [
            "addCleanup",
            "tearDownClass",
            "del",
            "sys.exit"
        ],
        "correctAnswer": 0,
        "explanation": "Registering patcher.stop with self.addCleanup(self.patcher.stop) ensures the patch is stopped even if the test or subsequent setup steps fail.",
        "officialRef": "PCAT-31-0x Block 5.4: Starting and Stopping Patchers Safely",
        "tags": ["patcher", "start", "stop", "addCleanup"]
    },
    {
        "id": "pcat-5-079",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Mock Resetting",
        "difficulty": "Intermediate",
        "question": "What method on a Mock object resets its call history (call_count, mock_calls, called)?",
        "codeSnippet": "m = Mock()\nm(1)\nassert m.called\n\nm.___?()\nassert not m.called\nassert m.call_count == 0",
        "options": [
            "reset_mock()",
            "clear()",
            "wipe()",
            "zero()"
        ],
        "correctAnswer": 0,
        "explanation": "mock.reset_mock() clears the call statistics (call_count, mock_calls, etc.), while preserving configured return_value and side_effect (unless return_value=True / side_effect=True is passed).",
        "officialRef": "PCAT-31-0x Block 5.4: Resetting Mocks with reset_mock",
        "tags": ["mock", "reset_mock"]
    },
    {
        "id": "pcat-5-080",
        "section": "Section 5",
        "chapter": "5.4",
        "category": "Call Assertions",
        "difficulty": "Intermediate",
        "question": "What does mock.assert_has_calls(calls, any_order=False) verify?",
        "codeSnippet": "from unittest.mock import call\n\nm = Mock()\nm(1)\nm(2)\nm(3)\n\nm.assert_has_calls([call(1), call(2), call(3)])",
        "options": [
            "It asserts that the mock was called with the specified sequence of calls in order",
            "It generates mock calls automatically",
            "It checks that all methods on the mock have docstrings",
            "It asserts that no errors were raised during execution"
        ],
        "correctAnswer": 0,
        "explanation": "mock.assert_has_calls(calls, any_order=False) verifies that the mock was invoked with the specified list of call() objects in that exact order (or in any order if any_order=True).",
        "officialRef": "PCAT-31-0x Block 5.4: Sequence Verification with assert_has_calls",
        "tags": ["mock", "call", "assert_has_calls"]
    }
])

# =========================================================================
# CHAPTER 5.5: Exception Handling and Warning Verification (Cards 81-100)
# =========================================================================
part2_cards.extend([
    {
        "id": "pcat-5-081",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Beginner",
        "question": "Which assertion method on unittest.TestCase tests that a specific exception is raised by a callable?",
        "codeSnippet": "class TestDivide(unittest.TestCase):\n    def test_zero_division(self):\n        self.___?(ZeroDivisionError, divide, 10, 0)",
        "options": [
            "assertRaises",
            "assertThrows",
            "assertExcept",
            "catchError"
        ],
        "correctAnswer": 0,
        "explanation": "self.assertRaises(exception_cls, callable, *args, **kwargs) verifies that calling the callable with the given arguments raises the expected exception.",
        "officialRef": "PCAT-31-0x Block 5.5: Handling Exceptions in Unit Tests",
        "tags": ["assertRaises", "exceptions", "unittest"]
    },
    {
        "id": "pcat-5-082",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Beginner",
        "question": "How is self.assertRaises() used as a context manager for testing inline code blocks?",
        "codeSnippet": "with self.assertRaises(ValueError):\n    int('invalid_numeric_string')",
        "options": [
            "Using the 'with self.assertRaises(ExceptionType):' block syntax",
            "Wrapping the block in a lambda and passing it to eval()",
            "Using try/except with a manual self.fail() call only",
            "Calling self.assertRaises.begin()"
        ],
        "correctAnswer": 0,
        "explanation": "assertRaises can be used as a context manager with 'with self.assertRaises(ExpectedException):', which asserts that the code inside the block raises the exception.",
        "officialRef": "PCAT-31-0x Block 5.5: assertRaises Context Manager",
        "tags": ["assertRaises", "context-manager", "with"]
    },
    {
        "id": "pcat-5-083",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Inspection",
        "difficulty": "Intermediate",
        "question": "How can you inspect the raised exception object when using self.assertRaises() as a context manager?",
        "codeSnippet": "with self.assertRaises(CustomError) as cm:\n    raise CustomError('Code: 400', error_code=400)\n\nself.assertEqual(cm.exception.error_code, 400)",
        "options": [
            "By capturing the context manager using 'as cm' and inspecting cm.exception",
            "By checking sys.last_exception global variable",
            "By using inspect.get_active_exception()",
            "It is impossible; exceptions inside context managers are discarded"
        ],
        "correctAnswer": 0,
        "explanation": "The context manager returned by assertRaises stores the caught exception instance on its 'exception' attribute (cm.exception), allowing assertions on custom error attributes.",
        "officialRef": "PCAT-31-0x Block 5.5: Inspecting Caught Exception Objects",
        "tags": ["assertRaises", "cm.exception", "custom-exceptions"]
    },
    {
        "id": "pcat-5-084",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "Which assertion checks that an exception is raised AND that its message matches a regular expression?",
        "codeSnippet": "with self.___?(ValueError, r'Invalid age: -?\\d+'):\n    set_age(-5)",
        "options": [
            "assertRaisesRegex",
            "assertErrorMessage",
            "assertRaisesPattern",
            "assertExceptionMatch"
        ],
        "correctAnswer": 0,
        "explanation": "self.assertRaisesRegex(expected_exception, expected_regex, *args, **kwargs) verifies that the expected exception is raised and its string representation matches the regex.",
        "officialRef": "PCAT-31-0x Block 5.5: Regex Message Matching with assertRaisesRegex",
        "tags": ["assertRaisesRegex", "regex", "error-messages"]
    },
    {
        "id": "pcat-5-085",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "What happens if NO exception is raised inside a with self.assertRaises(...) block?",
        "codeSnippet": "with self.assertRaises(ValueError):\n    x = 10 + 20 # Does not raise anything!",
        "options": [
            "The test passes anyway",
            "The context manager raises an AssertionError stating that ValueError was not raised",
            "Python waits 30 seconds before timing out",
            "The test is marked as SKIPPED"
        ],
        "correctAnswer": 1,
        "explanation": "If no exception is raised inside the assertRaises context block, the context manager's __exit__ method raises an AssertionError, failing the test.",
        "officialRef": "PCAT-31-0x Block 5.5: assertRaises Failure Modes",
        "tags": ["assertRaises", "AssertionError", "failure"]
    },
    {
        "id": "pcat-5-086",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "What happens if an unexpected exception type (e.g. KeyError instead of ValueError) is raised inside with self.assertRaises(ValueError)?",
        "codeSnippet": "with self.assertRaises(ValueError):\n    d = {}\n    val = d['missing_key'] # Raises KeyError",
        "options": [
            "The KeyError is not swallowed by the context manager; it propagates and causes the test runner to report an ERROR",
            "It is converted into a ValueError automatically",
            "The test passes because any exception satisfies assertRaises",
            "The test runner ignores the exception"
        ],
        "correctAnswer": 0,
        "explanation": "assertRaises only traps exceptions that are instances of the specified exception class (or subclasses). Any other exception propagates normally and is recorded as an ERROR.",
        "officialRef": "PCAT-31-0x Block 5.5: Exception Type Mismatch Behavior",
        "tags": ["assertRaises", "exception-propagation", "error-status"]
    },
    {
        "id": "pcat-5-087",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Warning Testing",
        "difficulty": "Intermediate",
        "question": "Which assertion verifies that a specific warning category is triggered during execution?",
        "codeSnippet": "import warnings\n\nwith self.___?(DeprecationWarning):\n    legacy_api_call()",
        "options": [
            "assertWarns",
            "catchWarning",
            "assertAlert",
            "expectWarning"
        ],
        "correctAnswer": 0,
        "explanation": "self.assertWarns(warning_class, callable=None, *args, **kwargs) tests that a warning of the given class is triggered, and works both as a callable wrapper and context manager.",
        "officialRef": "PCAT-31-0x Block 5.5: Warning Verification with assertWarns",
        "tags": ["assertWarns", "warnings", "deprecation"]
    },
    {
        "id": "pcat-5-088",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Warning Testing",
        "difficulty": "Intermediate",
        "question": "Which assertion checks both that a warning is triggered AND that its warning text matches a regex pattern?",
        "codeSnippet": "with self.___?(UserWarning, r'feature X will be removed in v3'):\n    feature_x()",
        "options": [
            "assertWarnsRegex",
            "assertWarningMessage",
            "assertWarningPattern",
            "checkWarningRegex"
        ],
        "correctAnswer": 0,
        "explanation": "assertWarnsRegex(expected_warning, expected_regex) asserts that a specific warning class was issued and that its message matches the provided regular expression.",
        "officialRef": "PCAT-31-0x Block 5.5: Regex Warning Matching with assertWarnsRegex",
        "tags": ["assertWarnsRegex", "warnings", "regex"]
    },
    {
        "id": "pcat-5-089",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Advanced",
        "question": "Can multiple exception classes be passed as a tuple to self.assertRaises()?",
        "codeSnippet": "with self.assertRaises((KeyError, IndexError)):\n    access_item(collection, index)",
        "options": [
            "No, only a single exception type can ever be specified",
            "Yes, passing a tuple of exception classes tests that ANY of the specified exceptions is raised",
            "Yes, but both exceptions must be raised simultaneously",
            "Only in pytest, not in standard unittest"
        ],
        "correctAnswer": 1,
        "explanation": "Just like standard Python except clauses (except (TypeError, ValueError):), self.assertRaises accepts a tuple of exception classes and succeeds if any matching exception is raised.",
        "officialRef": "PCAT-31-0x Block 5.5: Asserting on Multiple Exception Classes",
        "tags": ["assertRaises", "tuple-exceptions", "python-idioms"]
    },
    {
        "id": "pcat-5-090",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "Why is using with self.assertRaises(...) preferred over a manual try-except-fail pattern?",
        "codeSnippet": "# Pattern A (manual):\ntry:\n    divide(1, 0)\n    self.fail('Did not raise ZeroDivisionError')\nexcept ZeroDivisionError:\n    pass\n\n# Pattern B:\nwith self.assertRaises(ZeroDivisionError):\n    divide(1, 0)",
        "options": [
            "Pattern B is concise, idiomatic, less error-prone, and captures the exception object automatically on cm.exception",
            "Pattern A is deprecated and raises a warning in Python 3.10",
            "Pattern B executes on the GPU",
            "Pattern A cannot catch built-in exceptions"
        ],
        "correctAnswer": 0,
        "explanation": "Manual try/except/fail blocks are verbose and easy to get wrong (e.g. forgetting self.fail or catching too broadly). assertRaises provides clean, intent-revealing context management.",
        "officialRef": "PCAT-31-0x Block 5.5: Clean Exception Testing Idioms",
        "tags": ["assertRaises", "clean-code", "best-practices"]
    },
    {
        "id": "pcat-5-091",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Hierarchy",
        "difficulty": "Intermediate",
        "question": "If a method raises a CustomNotFoundError that inherits from KeyError, does self.assertRaises(KeyError) pass?",
        "codeSnippet": "class CustomNotFoundError(KeyError): pass\n\ndef lookup(): raise CustomNotFoundError('Not found')\n\nwith self.assertRaises(KeyError):\n    lookup()",
        "options": [
            "No, assertRaises requires an exact type match without polymorphism",
            "Yes, because CustomNotFoundError is a subclass of KeyError (isinstance check)",
            "Only if exact_match=False is passed",
            "It raises a MetaclassError"
        ],
        "correctAnswer": 1,
        "explanation": "assertRaises uses standard Python isinstance / issubclass semantics, so asserting a base exception class (KeyError) will pass if a derived subclass is raised.",
        "officialRef": "PCAT-31-0x Block 5.5: Polymorphism in Exception Assertions",
        "tags": ["exceptions", "inheritance", "polymorphism"]
    },
    {
        "id": "pcat-5-092",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Warning Testing",
        "difficulty": "Advanced",
        "question": "When inspecting warnings captured by with self.assertWarns(UserWarning) as cm:, where are the caught warning objects stored?",
        "codeSnippet": "with self.assertWarns(UserWarning) as cm:\n    trigger_warning()\n\n# cm.warning vs cm.warnings",
        "options": [
            "cm.warning stores the first warning and cm.warnings stores the list of all caught warning objects",
            "sys.last_warning",
            "warnings.history",
            "os.environ['LAST_WARNING']"
        ],
        "correctAnswer": 0,
        "explanation": "The context manager object stores the primary caught warning object on cm.warning and the full list of captured WarningMessage objects on cm.warnings.",
        "officialRef": "PCAT-31-0x Block 5.5: Warning Context Manager Introspection",
        "tags": ["assertWarns", "warnings-list", "introspection"]
    },
    {
        "id": "pcat-5-093",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "What is the danger of writing code after the line that raises an exception inside a with self.assertRaises(...) block?",
        "codeSnippet": "with self.assertRaises(ValueError):\n    val = int('invalid') # Raises ValueError here!\n    self.cleanup()       # THIS LINE IS NEVER REACHED!",
        "options": [
            "It causes a compiler warning",
            "Lines following the exception-raising statement inside the with block are never reached because the exception immediately exits the block",
            "It clears the caught exception",
            "It causes assertRaises to fail"
        ],
        "correctAnswer": 1,
        "explanation": "As soon as an exception is raised, execution jumps immediately to the context manager's __exit__ method. Any assertions or cleanups placed after the raising statement inside the block are dead code.",
        "officialRef": "PCAT-31-0x Block 5.5: Dead Code Inside Exception Context Blocks",
        "tags": ["assertRaises", "control-flow", "dead-code"]
    },
    {
        "id": "pcat-5-094",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Beginner",
        "question": "Can self.assertRaises() test that BaseException subclasses like SystemExit or KeyboardInterrupt are raised?",
        "codeSnippet": "with self.assertRaises(SystemExit):\n    sys.exit(1)",
        "options": [
            "Yes, self.assertRaises handles any exception type derived from BaseException including SystemExit",
            "No, assertRaises only works on classes inheriting from Exception, not BaseException",
            "Only if catch_system_exit=True is configured in unittest",
            "No, sys.exit terminates the operating system process immediately bypassing test runners"
        ],
        "correctAnswer": 0,
        "explanation": "SystemExit inherits from BaseException. unittest.TestCase.assertRaises catches BaseException, allowing clean testing of CLI commands that invoke sys.exit().",
        "officialRef": "PCAT-31-0x Block 5.5: Testing SystemExit and CLI Commands",
        "tags": ["SystemExit", "BaseException", "cli-testing"]
    },
    {
        "id": "pcat-5-095",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Custom Exceptions",
        "difficulty": "Intermediate",
        "question": "What is the recommended base class when creating custom application domain exceptions in Python?",
        "codeSnippet": "class PaymentProcessingError(___?):\n    '''Raised when a third-party gateway rejects payment.'''",
        "options": [
            "Exception",
            "BaseException",
            "StandardError",
            "ArithmeticError"
        ],
        "correctAnswer": 0,
        "explanation": "Custom exceptions should inherit from Exception (not BaseException). BaseException is reserved for system-exiting exceptions like SystemExit and KeyboardInterrupt.",
        "officialRef": "PCAT-31-0x Block 5.5: Designing Custom Testable Exceptions",
        "tags": ["exceptions", "clean-architecture", "best-practices"]
    },
    {
        "id": "pcat-5-096",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Warning Testing",
        "difficulty": "Intermediate",
        "question": "How can warnings be converted into exceptions globally during test runs to ensure all deprecations are caught?",
        "codeSnippet": "$ python -W error -m unittest discover",
        "options": [
            "Using the '-W error' command-line flag or setting PYTHONWARNINGS='error'",
            "By setting os.environ['DISABLE_WARNINGS'] = '1'",
            "Warnings cannot be converted into exceptions in Python",
            "By deleting the warnings module"
        ],
        "correctAnswer": 0,
        "explanation": "Passing '-W error' to Python treats all issued warnings as errors, immediately failing tests if any deprecated code or syntax is executed.",
        "officialRef": "PCAT-31-0x Block 5.5: Warning Filters and CI Quality Gates",
        "tags": ["warnings", "PYTHONWARNINGS", "-W", "ci"]
    },
    {
        "id": "pcat-5-097",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "How can you assert that a callable DOES NOT raise an exception in unittest?",
        "codeSnippet": "class TestSafe(unittest.TestCase):\n    def test_safe_execution(self):\n        # How to assert function() completes without error?\n        function_that_must_not_throw()",
        "options": [
            "Simply call the function directly without wrapping it; if an unhandled exception is raised, the test will automatically fail with an ERROR status",
            "There is a mandatory method self.assertNotRaises() that must be called",
            "Wrap it inside with self.assertRaises(None):",
            "Wrap it inside try/except BaseException and call pass"
        ],
        "correctAnswer": 0,
        "explanation": "There is no assertNotRaises in unittest because it is unnecessary: simply calling the function directly guarantees that any unexpected exception fails the test immediately.",
        "officialRef": "PCAT-31-0x Block 5.5: Testing for Absence of Exceptions",
        "tags": ["assertNotRaises", "idiomatic-testing", "unittest"]
    },
    {
        "id": "pcat-5-098",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Inspection",
        "difficulty": "Advanced",
        "question": "How can you check chained exceptions (PEP 3134 'raise ... from ...') in unit tests?",
        "codeSnippet": "try:\n    parse_config()\nexcept FileNotFoundError as err:\n    raise ConfigLoadError('Missing config') from err\n\n# In unit test:\nwith self.assertRaises(ConfigLoadError) as cm:\n    load()\n\nself.assertIsInstance(cm.exception.___?, FileNotFoundError)",
        "options": [
            "__cause__",
            "__parent__",
            "__origin__",
            "__chained__"
        ],
        "correctAnswer": 0,
        "explanation": "PEP 3134 exception chaining stores the explicit cause ('raise X from Y') on the __cause__ attribute of the exception instance.",
        "officialRef": "PCAT-31-0x Block 5.5: Testing Chained Exceptions (__cause__)",
        "tags": ["PEP3134", "__cause__", "exception-chaining"]
    },
    {
        "id": "pcat-5-099",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Exception Testing",
        "difficulty": "Intermediate",
        "question": "What is the return value of self.assertRaises(ValueError, int, '42') when no exception is raised by the callable?",
        "codeSnippet": "self.assertRaises(ValueError, int, '42') # '42' parses fine!",
        "options": [
            "It raises an AssertionError failing the test immediately",
            "It returns False",
            "It returns None",
            "It returns 42"
        ],
        "correctAnswer": 0,
        "explanation": "When called in functional mode (callable, *args), assertRaises immediately invokes the callable and raises AssertionError if no matching exception was raised.",
        "officialRef": "PCAT-31-0x Block 5.5: Functional Mode of assertRaises",
        "tags": ["assertRaises", "functional-mode", "AssertionError"]
    },
    {
        "id": "pcat-5-100",
        "section": "Section 5",
        "chapter": "5.5",
        "category": "Summary of Block 5",
        "difficulty": "Intermediate",
        "question": "Which combination of capabilities best summarizes the core domains assessed in PCAT Block 5: Advanced Unit Testing Techniques?",
        "codeSnippet": "# PCAT-31-0x Block 5 Summary:\n# Fixtures, SubTests, Skipping, Mocking, Exception Handling",
        "options": [
            "Web scraping, database normalization, and multi-threaded socket servers",
            "Fixture lifecycle management, data-driven parameterized subtests, conditional test skipping/expected failures, test doubles with unittest.mock, and exception/warning assertions",
            "Writing CSS styles and JavaScript event listeners for browsers",
            "Deploying Docker containers to AWS Elastic Beanstalk"
        ],
        "correctAnswer": 1,
        "explanation": "Block 5 of the PCAT-31-0x syllabus focuses specifically on advanced unit testing techniques: fixture lifecycle (setUp/tearDown/addCleanup), subtests (self.subTest), conditional skipping (@skip/@skipIf/@expectedFailure), mocking doubles (unittest.mock), and exception/warning verification.",
        "officialRef": "PCAT-31-0x Block 5: Summary of Advanced Unit Testing Techniques",
        "tags": ["block-5-summary", "advanced-testing", "pcat-core"]
    }
])

assert len(part1_cards) == 50, f"Part 1 has {len(part1_cards)} cards"
assert len(part2_cards) == 50, f"Part 2 has {len(part2_cards)} cards"

write_ts_file("src/data/pcatSection5CardsPart1.ts", "pcatSection5CardsPart1", part1_cards)
print("Wrote pcatSection5CardsPart1.ts (50 cards)")

write_ts_file("src/data/pcatSection5CardsPart2.ts", "pcatSection5CardsPart2", part2_cards)
print("Wrote pcatSection5CardsPart2.ts (50 cards)")

barrel = (
    "import { Flashcard } from '../types';\n"
    "import { pcatSection5CardsPart1 } from './pcatSection5CardsPart1';\n"
    "import { pcatSection5CardsPart2 } from './pcatSection5CardsPart2';\n\n"
    "export const pcatSection5Flashcards: Flashcard[] = [\n"
    "  ...pcatSection5CardsPart1,\n"
    "  ...pcatSection5CardsPart2,\n"
    "];\n"
)
with open("src/data/pcatSection5Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel)

print("Wrote pcatSection5Flashcards.ts (100 cards total)")
