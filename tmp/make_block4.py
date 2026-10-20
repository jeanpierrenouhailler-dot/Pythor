import json

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

# --- CHAPTER 4.1: F.I.R.S.T. Principles of Unit Testing (Cards 1-20) ---
cards.extend([
    {
        "id": "pcat-4-001",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What do the five letters in the 'F.I.R.S.T.' principles of unit testing stand for?",
        "codeSnippet": "# Clean Craftsmanship Standards for Unit Tests:\n# F - ...\n# I - ...\n# R - ...\n# S - ...\n# T - ...",
        "options": [
            "Functional, Integrated, Reliable, Standard, Tested",
            "Fast, Independent, Repeatable, Self-Validating, Timely (or Thorough)",
            "Framework, Interface, Regression, Security, Throughput",
            "Flexible, Immutable, Reactive, Scalable, Thread-Safe"
        ],
        "correctAnswer": 1,
        "explanation": "F.I.R.S.T. stands for Fast, Independent (or Isolated), Repeatable, Self-Validating, and Timely (or Thorough). They define the quality standards of effective unit tests.",
        "officialRef": "PCAT-31-0x Block 4.1: The F.I.R.S.T. Principles",
        "tags": ["first-principles", "unit-testing", "clean-code"]
    },
    {
        "id": "pcat-4-002",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "Why must unit tests be 'Fast' according to the F.I.R.S.T. principles?",
        "codeSnippet": "# Fast Unit Test execution:\n# 500 tests run in 0.25 seconds.\n# Developer runs them after every minor code edit.",
        "options": [
            "To save money on cloud computing electricity bills",
            "Because if tests are slow, developers will hesitate to run them frequently, allowing defects to go unnoticed and accumulate",
            "Because Python crashes if tests run longer than 5 seconds",
            "Fast tests are required by the Python language grammar"
        ],
        "correctAnswer": 1,
        "explanation": "When unit tests run in milliseconds, developers run them constantly on every file save. If tests take minutes, developers stop running them, losing fast feedback.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Fast",
        "tags": ["fast-tests", "feedback-loop", "first-principles"]
    },
    {
        "id": "pcat-4-003",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What does the 'Independent' (or Isolated) principle require of unit tests?",
        "codeSnippet": "# Test independence requirement:\n# Test B must pass regardless of whether Test A ran before it, ran after it, or failed.",
        "options": [
            "Tests should not depend on other tests, should not share mutable state, and must be able to run in any order or in parallel",
            "Tests must be written by independent third-party contractors",
            "Tests must run on separate physical computer hardware",
            "Tests must not import any modules from the project"
        ],
        "correctAnswer": 0,
        "explanation": "Tests must be completely independent and self-contained: no shared global mutable state, no order dependence, and capable of executing in isolation or parallel.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Independent",
        "tags": ["independent", "isolation", "first-principles"]
    },
    {
        "id": "pcat-4-004",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What does the 'Repeatable' principle mean in unit testing?",
        "codeSnippet": "# Repeatability check:\n# A test passes on a developer laptop in London, in an offline airplane, and on a Linux CI build agent.",
        "options": [
            "Tests must contain a `while` loop that repeats 10 times",
            "Tests should be deterministic and yield the exact same result in any environment (development, CI, offline) without network or environmental dependencies",
            "Tests must be executed every day at the same time",
            "Tests should repeat the implementation code logic"
        ],
        "correctAnswer": 1,
        "explanation": "Repeatable tests are deterministic: they do not rely on live internet connections, specific databases, or system locale, passing or failing reliably anywhere, anytime.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Repeatable",
        "tags": ["repeatable", "determinism", "first-principles"]
    },
    {
        "id": "pcat-4-005",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What does 'Self-Validating' mean in the F.I.R.S.T. principles?",
        "codeSnippet": "# Bad test (Not self-validating):\ndef test_output():\n    print(calculate_val())  # Developer must manually read console to see if it's correct!\n\n# Good test (Self-validating):\ndef test_output():\n    assert calculate_val() == 42  # Clear binary pass/fail!",
        "options": [
            "The test sends an email to the developer upon passing",
            "The test has a boolean assertion that produces a clear pass or fail verdict without requiring manual log inspection or human interpretation",
            "The test checks the digital signature of the Python interpreter",
            "The test writes its own code"
        ],
        "correctAnswer": 1,
        "explanation": "Self-validating tests either PASS or FAIL unambiguously via assertions. A developer never needs to inspect stdout, log files, or terminal text to verify correctness.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Self-Validating",
        "tags": ["self-validating", "assertions", "first-principles"]
    },
    {
        "id": "pcat-4-006",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "What does 'Timely' (or 'Thorough') mean in the F.I.R.S.T. principles?",
        "codeSnippet": "# Timely testing workflow:\n# Writing tests just before or concurrently with production code (e.g. TDD),\n# rather than months after code has shipped.",
        "options": [
            "Tests are written in a timely fashion (just before or alongside the production code), covering happy paths, edge cases, boundaries, and exceptions thoroughly",
            "Tests must display the current time in milliseconds",
            "Tests must only run between 9am and 5pm",
            "Tests should be scheduled with cron jobs"
        ],
        "correctAnswer": 0,
        "explanation": "Timely means tests are authored concurrently with code (or prior in TDD), when logic is fresh. Thorough means covering boundaries, edge cases, and error states, not just the happy path.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Timely/Thorough",
        "tags": ["timely", "thorough", "first-principles"]
    },
    {
        "id": "pcat-4-007",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "Which of the following scenarios violates the 'Repeatable' principle?",
        "codeSnippet": "# Reviewing test implementation:\ndef test_weather_alert():\n    response = requests.get('https://api.weather.com/v1/current')\n    assert response.status_code == 200",
        "options": [
            "The test asserts on a local dictionary",
            "The test makes a live network call to an external third-party API, causing it to fail if the internet is down, the API rate-limits, or the server is offline",
            "The test runs in under 1 millisecond",
            "The test uses mock objects"
        ],
        "correctAnswer": 1,
        "explanation": "Relying on external live HTTP servers violates Repeatability: network outages, firewall rules, or remote API downtimes will cause false test failures.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Repeatable",
        "tags": ["repeatability-violation", "external-dependencies", "mocking"]
    },
    {
        "id": "pcat-4-008",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "Which of the following scenarios violates the 'Independent' principle?",
        "codeSnippet": "# Test suite:\ndef test_create_record():\n    global record_id\n    record_id = db.insert('item')\n\ndef test_update_record():\n    db.update(record_id, 'new_value')",
        "options": [
            "Tests that use pytest fixtures with function scope",
            "`test_update_record` depends on `test_create_record` having run first and populated a global `record_id`; running `test_update_record` in isolation causes failure",
            "Tests that assert equality on integers",
            "Tests that run in separate processes"
        ],
        "correctAnswer": 1,
        "explanation": "Sharing state via `global record_id` couples the tests. If `test_update_record` runs alone, or tests execute in random order, it fails because `record_id` is undefined.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Independent",
        "tags": ["independence-violation", "shared-state", "coupling"]
    },
    {
        "id": "pcat-4-009",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "How can a test suite achieve 'Thoroughness' without writing redundant duplicate tests?",
        "codeSnippet": "# Testing strategy:\n# - 1 Happy path test\n# - Boundary value analysis (0, 1, max, max+1)\n# - Equivalence partition testing\n# - Negative tests (invalid types, exceptions)",
        "options": [
            "By systematically applying Equivalence Partitioning and Boundary Value Analysis to cover distinct behavioral equivalence classes with minimal overlapping tests",
            "By copy-pasting the same test 50 times with different numbers",
            "By writing tests that have no assert statements",
            "By executing tests on 20 different operating systems"
        ],
        "correctAnswer": 0,
        "explanation": "Thorough testing is not about sheer volume; it is about covering equivalence partitions, boundary conditions, edge cases, and error paths systematically.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Thorough",
        "tags": ["thoroughness", "test-design", "boundary-values"]
    },
    {
        "id": "pcat-4-010",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "What is the consequence when tests violate the 'Fast' principle and the suite takes 45 minutes to run?",
        "codeSnippet": "# Slow test suite symptom:\n# Developers stop running tests locally and wait for CI after push.\n# Broken builds increase by 300%.",
        "options": [
            "Developers shift to testing locally on every change",
            "Developers stop running tests before committing, relying on delayed CI feedback, which slows down the feedback cycle and increases integration breaks",
            "The Python interpreter automatically deletes slow tests",
            "CPU usage drops to zero"
        ],
        "correctAnswer": 1,
        "explanation": "When unit tests are slow, developers push without testing locally. Bugs are caught hours later in CI, turning what should have been a 5-second fix into a disruptive context switch.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Fast",
        "tags": ["fast-tests", "feedback-loop", "developer-velocity"]
    },
    {
        "id": "pcat-4-011",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "How does using in-memory databases (e.g. SQLite `:memory:`) or test doubles support the F.I.R.S.T. principles?",
        "codeSnippet": "engine = create_engine('sqlite:///:memory:')\n# Database created in RAM in 2 milliseconds, isolated per test run!",
        "options": [
            "It makes tests Fast (in-memory I/O), Independent (fresh database per test), and Repeatable (no external database server dependencies)",
            "It makes tests run in parallel across distributed cluster nodes",
            "It eliminates the need for SQL schema migrations",
            "It compresses table data by 90%"
        ],
        "correctAnswer": 0,
        "explanation": "In-memory test doubles eliminate disk and network I/O (Fast), ensure each test gets a pristine database (Independent), and run without requiring external servers (Repeatable).",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles in Practice",
        "tags": ["in-memory-db", "first-principles", "test-doubles"]
    },
    {
        "id": "pcat-4-012",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "Why is testing random numbers with non-deterministic random inputs (without setting a fixed seed) a violation of the Repeatable principle?",
        "codeSnippet": "import random\n\ndef test_random_shuffle():\n    items = [1, 2, 3, 4, 5]\n    random.shuffle(items)\n    # 1 out of 120 times, items happens to remain [1, 2, 3, 4, 5] by chance!\n    assert items != [1, 2, 3, 4, 5]",
        "options": [
            "Because random numbers are not supported in Python 3",
            "Because non-deterministic randomness can cause intermittent failures that are difficult to reproduce; setting a fixed seed (`random.seed(42)`) ensures reproducibility",
            "Because shuffle() raises an exception on integers",
            "Because unit tests cannot test algorithms"
        ],
        "correctAnswer": 1,
        "explanation": "True randomness causes non-deterministic flakiness. Fixing the pseudo-random generator seed (`random.seed(...)`) ensures identical test execution on every run, satisfying Repeatability.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Repeatable",
        "tags": ["randomness", "seed", "repeatability", "determinism"]
    },
    {
        "id": "pcat-4-013",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "How does Test-Driven Development (TDD) directly reinforce the 'Timely' principle?",
        "codeSnippet": "# TDD flow:\n# Test authored BEFORE implementation code.\n# Implementation is designed for testability from second one.",
        "options": [
            "TDD ensures tests are written at the most timely moment possible — before the code is even written — ensuring high testability and design focus",
            "TDD requires all tests to be run at midnight",
            "TDD measures how fast developers type code",
            "TDD prevents code from having timestamps"
        ],
        "correctAnswer": 0,
        "explanation": "Writing tests before or concurrently with code ensures testing is not an afterthought, guarantees testability, and forces code to be modular from the start.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Timely",
        "tags": ["timely", "tdd", "first-principles"]
    },
    {
        "id": "pcat-4-014",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "What is the primary danger of a unit test that is NOT 'Self-Validating'?",
        "codeSnippet": "def test_tax_calc():\n    result = calculate_tax(100)\n    # No assert statement! Just prints to stdout:\n    print('Calculated tax:', result)",
        "options": [
            "The test will always pass in automated CI pipelines regardless of whether the calculation returned 0, -100, or a wrong value, masking defects completely",
            "Python will refuse to execute print statements",
            "The test will raise a ZeroDivisionError",
            "The test will execute too quickly"
        ],
        "correctAnswer": 0,
        "explanation": "Without assertions, test runners consider any test that doesn't raise an unhandled exception as 'PASS'. Flawed code passes silently because no programmatic check exists.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Self-Validating",
        "tags": ["self-validating", "false-passes", "assertions"]
    },
    {
        "id": "pcat-4-015",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "Which of the following test setups best adheres to all five F.I.R.S.T. principles?",
        "codeSnippet": "# Reviewing sample unit test:",
        "options": [
            "def test_calculate_discount():\n    # In-memory, isolated, fast, deterministic, self-validating\n    assert calculate_discount(price=100, discount_pct=0.20) == 80.0",
            "def test_discount():\n    time.sleep(10)\n    resp = requests.get('https://remote-db.com/data')\n    print(resp.json())",
            "def test_order():\n    global state\n    state += 1",
            "def test_check():\n    pass"
        ],
        "correctAnswer": 0,
        "explanation": "Option A executes in sub-milliseconds (Fast), has no dependencies (Independent & Repeatable), asserts expected output directly (Self-Validating), and tests business logic (Thorough).",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles in Practice",
        "tags": ["first-principles", "best-practices", "unit-testing"]
    },
    {
        "id": "pcat-4-016",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "What is 'Test Pollution' and which F.I.R.S.T. principle does it violate?",
        "codeSnippet": "# Test 1 sets an environment variable without cleaning it up:\n# os.environ['SECRET_KEY'] = 'test'\n# Test 2 fails because it expected SECRET_KEY to be unset!",
        "options": [
            "Environmental pollution caused by server data centers",
            "When a test leaves lingering side effects (modified global state, unclosed files, DB records) that pollute subsequent tests, violating the Independent principle",
            "Printing too many debug lines to stdout",
            "Writing tests in multiple programming languages"
        ],
        "correctAnswer": 1,
        "explanation": "Test pollution occurs when a test fails to clean up its side effects, contaminating the environment for subsequent tests and violating test Independence.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Independent",
        "tags": ["test-pollution", "independence", "cleanup"]
    },
    {
        "id": "pcat-4-017",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "Why should tests avoid asserting on system-specific absolute file paths like `/Users/alice/projects/app/data.csv`?",
        "codeSnippet": "# Fragile path assertion:\nassert output_file == '/home/developer/app/output.csv'",
        "options": [
            "Because absolute paths violate Repeatability: the test will fail when run on any other machine, operating system (e.g. Windows `C:\\`), or CI build agent",
            "Because Python does not support forward slashes",
            "Because file paths cannot be stored in strings",
            "Because paths must be encrypted"
        ],
        "correctAnswer": 0,
        "explanation": "Hardcoding developer-specific absolute paths breaks Repeatability across machines and platforms. Tests should use relative paths, `pathlib.Path`, or `tmp_path` fixtures.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Repeatable",
        "tags": ["repeatability", "pathlib", "portable-tests"]
    },
    {
        "id": "pcat-4-018",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "What is the role of mock objects in fulfilling the 'Fast' and 'Independent' principles?",
        "codeSnippet": "# Using unittest.mock to replace slow external email service:\nwith patch('services.email.send_welcome_email') as mock_send:\n    register_user('bob@example.com')\n    mock_send.assert_called_once()",
        "options": [
            "Mocks replace slow, external, or non-deterministic dependencies (network calls, third-party APIs, disk writes) with fast in-memory test doubles",
            "Mocks compile Python into C code",
            "Mocks run tests in parallel across GPUs",
            "Mocks encrypt user passwords automatically"
        ],
        "correctAnswer": 0,
        "explanation": "Mocks isolate the unit under test from slow, flaky, or stateful external systems, enabling tests to run in sub-milliseconds (Fast) and without external dependencies (Independent).",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles in Practice",
        "tags": ["mocking", "fast", "independent", "first-principles"]
    },
    {
        "id": "pcat-4-019",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Intermediate",
        "question": "What does 'Thorough' testing dictate about testing exception cases?",
        "codeSnippet": "# Thorough test coverage of error scenarios:\ndef test_divide_by_zero_raises_expected_exception():\n    with pytest.raises(ZeroDivisionError, match='division by zero'):\n        safe_divide(10, 0)",
        "options": [
            "Tests should only test happy paths where everything succeeds",
            "Thorough testing requires testing both valid inputs (happy path) and invalid inputs, boundary extremes, and error scenarios that should raise expected exceptions",
            "Tests should catch all exceptions and ignore them",
            "Exceptions should only be tested manually"
        ],
        "correctAnswer": 1,
        "explanation": "Thorough testing requires verifying negative paths: ensuring that when bad input or error states occur, the application raises appropriate, expected exceptions with helpful messages.",
        "officialRef": "PCAT-4.1: F.I.R.S.T. Principles - Thorough",
        "tags": ["thorough", "negative-testing", "exceptions"]
    },
    {
        "id": "pcat-4-020",
        "section": "Section 4",
        "chapter": "4.1",
        "category": "FIRST Principles",
        "difficulty": "Beginner",
        "question": "What is the ultimate benefit of following the F.I.R.S.T. principles across an entire test suite?",
        "codeSnippet": "# Results of F.I.R.S.T. alignment:\n# - High developer confidence\n# - Continuous, friction-free testing\n# - Fast CI pipeline feedback\n# - High code quality and reliable releases",
        "options": [
            "A fast, dependable, deterministic test suite that developers trust and run frequently, enabling rapid and safe software iteration",
            "Replacing all human testers with AI bots",
            "Writing zero lines of documentation",
            "Generating 100% of code automatically"
        ],
        "correctAnswer": 0,
        "explanation": "F.I.R.S.T. principles create a test suite that is fast, reliable, and trustworthy. Developers run it constantly, regressions are caught instantly, and software is delivered with confidence.",
        "officialRef": "PCAT-4.1: The F.I.R.S.T. Principles Summary",
        "tags": ["first-principles", "summary", "best-practices"]
    }
])

# --- CHAPTER 4.2: The xUnit Architecture in Python (Cards 21-40) ---
cards.extend([
    {
        "id": "pcat-4-021",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Beginner",
        "question": "What is the 'xUnit' architecture in software testing?",
        "codeSnippet": "# History:\n# Kent Beck SUnit (Smalltalk) -> JUnit (Java) -> PyUnit (unittest in Python)\n# Shared architectural pattern across all modern testing frameworks.",
        "options": [
            "A mathematical algebraic equation for testing",
            "A family of unit testing frameworks sharing a common architectural pattern, originally created by Kent Beck, which standard library `unittest` directly implements",
            "A Unix command-line utility for disk formatting",
            "A commercial closed-source testing tool"
        ],
        "correctAnswer": 1,
        "explanation": "xUnit is the collective name for unit testing frameworks derived from Kent Beck's SUnit (JUnit, NUnit, PyUnit/unittest). They share core concepts: Test Case, Suite, Runner, and Fixture.",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture",
        "tags": ["xunit", "architecture", "history"]
    },
    {
        "id": "pcat-4-022",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What are the four primary conceptual components of the xUnit architecture?",
        "codeSnippet": "# xUnit Core Components:\n# 1. Test Case\n# 2. Test Suite\n# 3. Test Runner\n# 4. Test Result (and Test Fixture)",
        "options": [
            "Compiler, Linker, Assembler, Debugger",
            "Test Case, Test Suite, Test Runner, Test Result (with Test Fixture)",
            "Client, Server, Database, Cache",
            "Model, View, Controller, Template"
        ],
        "correctAnswer": 1,
        "explanation": "The xUnit framework architecture consists of: Test Case (single scenario), Test Suite (collection of tests), Test Runner (orchestrates execution), Test Result (records outcomes), and Test Fixture (setup/cleanup baseline).",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture",
        "tags": ["xunit-components", "architecture", "test-case"]
    },
    {
        "id": "pcat-4-023",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Beginner",
        "question": "What is a 'Test Fixture' in the xUnit architecture?",
        "codeSnippet": "import unittest\n\nclass TestAccount(unittest.TestCase):\n    def setUp(self):    # Test Fixture Setup\n        self.account = BankAccount(balance=100)\n    def tearDown(self): # Test Fixture Teardown\n        self.account.close()",
        "options": [
            "A physical lamp used in the server room",
            "The preparation and baseline environment needed to perform one or more tests, along with any associated cleanup actions (e.g. setting up databases, directories, mock objects)",
            "A test that is permanently broken and cannot be changed",
            "A GUI widget in Tkinter"
        ],
        "correctAnswer": 1,
        "explanation": "A test fixture represents the preparation needed to execute tests (creation of temporary databases, mock servers, sample objects) and cleanup actions after the test completes.",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture - Test Fixtures",
        "tags": ["test-fixture", "setup-teardown", "xunit"]
    },
    {
        "id": "pcat-4-024",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Beginner",
        "question": "What class in Python's standard library `unittest` represents an individual Test Case?",
        "codeSnippet": "import unittest\n\nclass TestMathOperations(unittest.TestCase):\n    def test_addition(self):\n        self.assertEqual(1 + 1, 2)",
        "options": [
            "`unittest.TestRunner`",
            "`unittest.TestCase`",
            "`unittest.TestSuite`",
            "`unittest.TestResult`"
        ],
        "correctAnswer": 1,
        "explanation": "`unittest.TestCase` is the base class for individual unit test cases in standard library Python. Subclasses implement test methods named with the `test_` prefix.",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture - TestCase",
        "tags": ["unittest.TestCase", "test-case", "xunit"]
    },
    {
        "id": "pcat-4-025",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the role of `unittest.TestSuite` in the xUnit architecture?",
        "codeSnippet": "import unittest\n\nsuite = unittest.TestSuite()\nsuite.addTest(TestMath('test_addition'))\nsuite.addTest(TestMath('test_subtraction'))",
        "options": [
            "It compiles Python files into executable binaries",
            "It is a composite container that aggregates multiple test cases (or other test suites) so they can be executed together as a single unit",
            "It creates user accounts on the operating system",
            "It formats test output as HTML"
        ],
        "correctAnswer": 1,
        "explanation": "`unittest.TestSuite` aggregates multiple test cases or nested test suites, following the Composite design pattern so that groups of tests can be executed together.",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture - TestSuite",
        "tags": ["unittest.TestSuite", "test-aggregation", "xunit"]
    },
    {
        "id": "pcat-4-026",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the responsibility of the 'Test Runner' (e.g. `unittest.TextTestRunner`) in xUnit?",
        "codeSnippet": "runner = unittest.TextTestRunner(verbosity=2)\nresult = runner.run(suite)",
        "options": [
            "It is a developer who runs tests manually",
            "An orchestration object that coordinates the execution of tests in a suite and presents the results (output) to the user or console",
            "A hardware component that speeds up CPU execution",
            "A Python script that installs dependencies"
        ],
        "correctAnswer": 1,
        "explanation": "A Test Runner orchestrates the execution of test cases and suites, recording outcomes in a `TestResult` object and printing or formatting the output for users (e.g. `TextTestRunner`).",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture - TestRunner",
        "tags": ["test-runner", "TextTestRunner", "xunit"]
    },
    {
        "id": "pcat-4-027",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What does a `unittest.TestResult` object record during a test run?",
        "codeSnippet": "# Inspecting TestResult:\n# result.wasSuccessful() -> bool\n# result.failures        -> list of failed assertions\n# result.errors          -> list of unhandled exceptions\n# result.skipped         -> list of skipped tests",
        "options": [
            "It records the outcomes of test executions: number of tests run, list of failures, list of errors, skips, and overall pass/fail status",
            "It saves code coverage percentage to disk",
            "It records developer keystrokes",
            "It stores database query logs"
        ],
        "correctAnswer": 0,
        "explanation": "`TestResult` compiles test execution statistics: count of tests run, lists of failures (assertion errors), errors (unhandled exceptions), skips, and whether the overall run was successful.",
        "officialRef": "PCAT-31-0x Block 4.2: The xUnit Architecture - TestResult",
        "tags": ["TestResult", "failures", "errors", "xunit"]
    },
    {
        "id": "pcat-4-028",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "In `unittest`, what is the critical difference between a 'Failure' and an 'Error' in test results?",
        "codeSnippet": "# Scenario A: self.assertEqual(1, 2)       -> ???\n# Scenario B: x = 10 / 0 (ZeroDivisionError) -> ???",
        "options": [
            "A Failure is caused by an assertion not being met (`AssertionError`); an Error is an unexpected unhandled exception (e.g. `KeyError`, `ZeroDivisionError`) raised during execution",
            "A Failure occurs in pytest; an Error occurs in unittest",
            "They are completely identical in test reporting",
            "An Error is a syntax error; a Failure is a runtime crash"
        ],
        "correctAnswer": 0,
        "explanation": "A Failure occurs when an assertion fails (expected condition was false). An Error occurs when code raises an unhandled exception (e.g. TypeError, ZeroDivisionError) outside of an assertion.",
        "officialRef": "PCAT-31-0x Block 4.2: Failures vs Errors in xUnit",
        "tags": ["failures-vs-errors", "assertion-failure", "exceptions"]
    },
    {
        "id": "pcat-4-029",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the execution lifecycle of a `unittest.TestCase` class containing two test methods?",
        "codeSnippet": "class MyTest(unittest.TestCase):\n    def setUp(self): print('setUp')\n    def test_one(self): print('test_1')\n    def test_two(self): print('test_2')\n    def tearDown(self): print('tearDown')",
        "options": [
            "setUp -> test_1 -> test_2 -> tearDown",
            "setUp -> test_1 -> tearDown -> setUp -> test_2 -> tearDown",
            "test_1 -> test_2 -> setUp -> tearDown",
            "setUp -> tearDown -> test_1 -> test_2"
        ],
        "correctAnswer": 1,
        "explanation": "In xUnit, each test method runs in a fresh instance of the TestCase class. For every test method, `setUp()` is called before it, and `tearDown()` is called after it.",
        "officialRef": "PCAT-31-0x Block 4.2: xUnit Lifecycle",
        "tags": ["lifecycle", "setUp", "tearDown", "xunit"]
    },
    {
        "id": "pcat-4-030",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "Why does `unittest` instantiate a NEW instance of the `TestCase` subclass for EACH test method executed?",
        "codeSnippet": "# Why does test_2 not see modifications made to self.items in test_1?\nclass TestCart(unittest.TestCase):\n    def test_1(self):\n        self.items = ['apple']\n    def test_2(self):\n        # hasattr(self, 'items') is False!\n        pass",
        "options": [
            "Because Python runs out of memory if an object is reused",
            "To ensure complete test isolation: instance attributes modified in one test method cannot leak into or affect another test method",
            "Because CPython does not allow calling two methods on the same object",
            "To increase garbage collection activity"
        ],
        "correctAnswer": 1,
        "explanation": "Instantiating a fresh TestCase instance for every test method guarantees test isolation: modifications to `self` in one test cannot pollute subsequent tests.",
        "officialRef": "PCAT-31-0x Block 4.2: xUnit Lifecycle and Isolation",
        "tags": ["test-isolation", "instance-per-test", "xunit"]
    },
    {
        "id": "pcat-4-031",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "How does `unittest` discover tests automatically via `unittest.defaultTestLoader`?",
        "codeSnippet": "# Automated test discovery:\n$ python -m unittest discover",
        "options": [
            "By searching for files matching `test*.py`, importing them, and inspecting classes subclassing `unittest.TestCase` for methods starting with `test`",
            "By reading git commit messages",
            "By executing every file in the directory including setup.py",
            "By looking for comments marked # TEST"
        ],
        "correctAnswer": 0,
        "explanation": "Test discovery inspects directory trees, finding files matching `test*.py` (by default), loading classes derived from `unittest.TestCase`, and finding methods starting with `test`.",
        "officialRef": "PCAT-31-0x Block 4.2: Test Discovery",
        "tags": ["test-discovery", "defaultTestLoader", "unittest"]
    },
    {
        "id": "pcat-4-032",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What design pattern does `unittest.TestSuite` utilize to allow suites to contain both individual TestCases and other TestSuites?",
        "codeSnippet": "# Architecture Pattern:\n# Suite -> contains [TestCase, TestCase, NestedSuite -> contains [TestCase]]",
        "options": [
            "Singleton Pattern",
            "Composite Pattern",
            "Observer Pattern",
            "Strategy Pattern"
        ],
        "correctAnswer": 1,
        "explanation": "The Composite pattern allows individual objects (TestCase) and compositions of objects (TestSuite) to be treated uniformly, so a runner can execute a suite containing nested suites.",
        "officialRef": "PCAT-31-0x Block 4.2: xUnit Design Patterns",
        "tags": ["composite-pattern", "design-patterns", "xunit"]
    },
    {
        "id": "pcat-4-033",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What method does `unittest.TestCase` provide to add an arbitrary cleanup function that runs after the test, even if `setUp()` raised an exception halfway through?",
        "codeSnippet": "def setUp(self):\n    self.file = open('temp.txt', 'w')\n    self.addCleanup(self.file.close)  # <--- Clean and guaranteed!\n    self.db = connect_db()            # If this raises, file.close() STILL runs!",
        "options": [
            "`self.tearDown()`",
            "`self.addCleanup(function, *args, **kwargs)`",
            "`self.register_exit()`",
            "`self.on_failure()`"
        ],
        "correctAnswer": 1,
        "explanation": "`self.addCleanup(callable, *args, **kwargs)` registers cleanup functions executed in LIFO order after the test finishes, even if `setUp()` raised an exception before completing.",
        "officialRef": "PCAT-31-0x Block 4.2: Clean Resource Management in xUnit",
        "tags": ["addCleanup", "resource-cleanup", "unittest"]
    },
    {
        "id": "pcat-4-034",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the purpose of `setUpClass()` and `tearDownClass()` in `unittest.TestCase`?",
        "codeSnippet": "class TestLargeDatabase(unittest.TestCase):\n    @classmethod\n    def setUpClass(cls):\n        cls.connection = connect_slow_db()  # Run ONCE before all tests in this class\n        \n    @classmethod\n    def tearDownClass(cls):\n        cls.connection.close()              # Run ONCE after all tests in this class",
        "options": [
            "They run once per test method",
            "They are class methods that execute once before and once after all test methods in that specific test class, useful for expensive shared fixtures (like database connections)",
            "They are constructor methods in CPython",
            "They are only called if tests fail"
        ],
        "correctAnswer": 1,
        "explanation": "Decorated with `@classmethod`, `setUpClass` runs once before any tests in the class, and `tearDownClass` runs once after all tests in the class have executed.",
        "officialRef": "PCAT-31-0x Block 4.2: Class-Level Fixtures in xUnit",
        "tags": ["setUpClass", "tearDownClass", "fixtures"]
    },
    {
        "id": "pcat-4-035",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is the purpose of `setUpModule()` and `tearDownModule()` in Python `unittest`?",
        "codeSnippet": "# At top-level module scope in test_network.py:\ndef setUpModule():\n    start_mock_server()\n\ndef tearDownModule():\n    stop_mock_server()",
        "options": [
            "They run before and after every individual test function",
            "They are module-level functions that execute once before any test cases in the module file, and once after all test cases in the module file finish",
            "They configure python package wheels",
            "They are deprecated and forbidden in Python 3"
        ],
        "correctAnswer": 1,
        "explanation": "`setUpModule()` and `tearDownModule()` are module-level hook functions that run once per test module file, managing module-wide resources like starting/stopping background servers.",
        "officialRef": "PCAT-31-0x Block 4.2: Module-Level Fixtures in xUnit",
        "tags": ["setUpModule", "tearDownModule", "module-fixtures"]
    },
    {
        "id": "pcat-4-036",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "How does `pytest` relate to the traditional xUnit architecture?",
        "codeSnippet": "# Pytest running unittest TestCase:\n$ pytest test_legacy_unittest.py\n# Pytest discovers and runs xUnit unittest.TestCase classes natively!",
        "options": [
            "Pytest cannot run xUnit tests and requires complete rewriting",
            "Pytest provides a modern, function-based fixture architecture, but also provides 100% native backward compatibility to discover and execute standard xUnit `unittest.TestCase` classes",
            "Pytest replaces xUnit with Java classes",
            "Pytest is an obsolete version of PyUnit"
        ],
        "correctAnswer": 1,
        "explanation": "Pytest supports modern plain assert and fixture syntax, but fully supports xUnit: it discovers, sets up, runs, and tears down `unittest.TestCase` classes seamlessly.",
        "officialRef": "PCAT-31-0x Block 4.2: xUnit Compatibility in Pytest",
        "tags": ["pytest", "xunit-compatibility", "runners"]
    },
    {
        "id": "pcat-4-037",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Beginner",
        "question": "What is the standard command idiom to make a Python `unittest` file runnable directly from the command line?",
        "codeSnippet": "if __name__ == '__main__':\n    unittest.main()",
        "options": [
            "Calling `unittest.main()` inside the `if __name__ == '__main__':` block at the bottom of the test file",
            "Calling `sys.exit(0)`",
            "Writing a bash wrapper script",
            "Compiling the file with py_compile"
        ],
        "correctAnswer": 0,
        "explanation": "`if __name__ == '__main__': unittest.main()` provides a command-line interface to the test script, discovering and running all tests in the file when executed directly.",
        "officialRef": "PCAT-31-0x Block 4.2: Running unittest Directly",
        "tags": ["unittest.main", "cli", "entrypoint"]
    },
    {
        "id": "pcat-4-038",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What happens if an unhandled exception is raised inside the `setUp()` method of a `unittest.TestCase`?",
        "codeSnippet": "class TestResource(unittest.TestCase):\n    def setUp(self):\n        raise ConnectionError('Database offline')\n    def test_query(self):\n        self.assertTrue(True)\n    def tearDown(self):\n        print('tearDown called')",
        "options": [
            "The test method runs anyway",
            "The test is marked as an 'Error', the test method (`test_query`) is NOT executed, and `tearDown()` is NOT executed",
            "The test passes silently",
            "Python raises a SyntaxError"
        ],
        "correctAnswer": 1,
        "explanation": "If `setUp()` fails, the test method is skipped and marked as an Error. Furthermore, `tearDown()` is not called (which is why `self.addCleanup` is safer than `tearDown`).",
        "officialRef": "PCAT-31-0x Block 4.2: xUnit Lifecycle Pitfalls",
        "tags": ["setUp-failure", "tearDown", "addCleanup"]
    },
    {
        "id": "pcat-4-039",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Intermediate",
        "question": "What is a 'Test Loader' in xUnit (`unittest.TestLoader`)?",
        "codeSnippet": "loader = unittest.TestLoader()\nsuite = loader.loadTestsFromTestCase(TestMath)\nsuite2 = loader.loadTestsFromName('tests.test_billing')",
        "options": [
            "A truck that transports server racks",
            "A class responsible for creating test suites from test classes, modules, or directory trees according to discovery rules",
            "A memory cache for Python bytecode",
            "A tool for downloading packages from PyPI"
        ],
        "correctAnswer": 1,
        "explanation": "`TestLoader` is the component in xUnit responsible for finding test methods, instantiating `TestCase` instances, and assembling them into `TestSuite` objects.",
        "officialRef": "PCAT-31-0x Block 4.2: TestLoader in xUnit",
        "tags": ["TestLoader", "test-assembly", "xunit"]
    },
    {
        "id": "pcat-4-040",
        "section": "Section 4",
        "chapter": "4.2",
        "category": "xUnit Architecture",
        "difficulty": "Beginner",
        "question": "What naming pattern must a method inside a `unittest.TestCase` class adhere to for the TestLoader to recognize it as a test case?",
        "codeSnippet": "class MyTestCase(unittest.TestCase):\n    def test_feature(self): ...     # Method A\n    def verify_feature(self): ...   # Method B\n    def check_feature(self): ...    # Method C",
        "options": [
            "The method name must begin with the lowercase prefix `test` (e.g. `test_feature`)",
            "The method name must end with `_test`",
            "The method name must be in ALL_CAPS",
            "The method name must contain the word `assert`"
        ],
        "correctAnswer": 0,
        "explanation": "By default, `unittest.TestLoader` inspects classes for methods whose names start with `test` (case-sensitive). Methods named `verify_` or `check_` are ignored as helper methods.",
        "officialRef": "PCAT-31-0x Block 4.2: Naming Conventions in xUnit",
        "tags": ["naming-conventions", "test-discovery", "unittest"]
    }
])

# Save Part 1 (Cards 1-50)
write_ts_file("src/data/pcatSection4CardsPart1.ts", "pcatSection4CardsPart1", cards[:50])
print("Wrote pcatSection4CardsPart1.ts (50 cards).")

# --- CHAPTER 4.3: CLI Tools & CHAPTER 4.4/4.5: Structure & Assertions (Cards 51-100) ---
part2_cards = []

part2_cards.extend([
    {
        "id": "pcat-4-051",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Beginner",
        "question": "What is the standard command-line command to execute test discovery with Python's standard `unittest` module?",
        "codeSnippet": "$ python -m unittest discover",
        "options": [
            "`python run tests`",
            "`python -m unittest discover` (or `python -m unittest`)",
            "`unittest --all`",
            "`python test.py`"
        ],
        "correctAnswer": 1,
        "explanation": "`python -m unittest discover` (or simply `python -m unittest` in Python 3.2+) runs the built-in test discovery engine from the current directory.",
        "officialRef": "PCAT-31-0x Block 4.3: Running Tests via CLI",
        "tags": ["unittest-cli", "discover", "command-line"]
    },
    {
        "id": "pcat-4-052",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Beginner",
        "question": "What does the `-v` (or `--verbose`) flag do when running tests with `unittest` or `pytest`?",
        "codeSnippet": "$ python -m unittest -v\n# Output:\n# test_addition (tests.test_math.TestMath) ... ok\n# test_subtraction (tests.test_math.TestMath) ... ok",
        "options": [
            "It prints the Python interpreter version number and exits",
            "It runs tests with verbose output, displaying each individual test name and its specific pass/fail outcome rather than simple dots (`.`)",
            "It validates syntax without executing tests",
            "It runs tests in a virtual machine"
        ],
        "correctAnswer": 1,
        "explanation": "The `-v` (verbose) flag enables detailed output: printing the full name of every test case and its individual result (ok, FAIL, ERROR, skipped) instead of single characters.",
        "officialRef": "PCAT-31-0x Block 4.3: Running Tests via CLI",
        "tags": ["verbose-flag", "test-runners", "cli"]
    },
    {
        "id": "pcat-4-053",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does the `-f` (or `--failfast`) option do in `python -m unittest`?",
        "codeSnippet": "$ python -m unittest -f",
        "options": [
            "It runs the tests at maximum CPU clock speed",
            "It halts test execution immediately upon encountering the first failure or error, rather than continuing through the rest of the suite",
            "It ignores all assertion failures",
            "It formats output using fast JSON"
        ],
        "correctAnswer": 1,
        "explanation": "`--failfast` (or `-f`) stops the test run immediately on the first failure or error, saving time during active debugging instead of waiting for a long suite to complete.",
        "officialRef": "PCAT-31-0x Block 4.3: Running Tests via CLI",
        "tags": ["failfast", "unittest", "cli-options"]
    },
    {
        "id": "pcat-4-054",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does the `-k` flag do in both modern `unittest` and `pytest`?",
        "codeSnippet": "$ pytest -k 'user and not admin'\n# Or in unittest:\n$ python -m unittest -k 'test_user*'",
        "options": [
            "It sets the encryption key for tests",
            "It filters and runs only test cases or methods whose names match the given substring expression or pattern",
            "It keeps temporary files on disk",
            "It kills running background processes"
        ],
        "correctAnswer": 1,
        "explanation": "The `-k` flag acts as a keyword expression filter, running only tests whose names match the expression (e.g. `pytest -k 'login or auth'`).",
        "officialRef": "PCAT-31-0x Block 4.3: Test Filtering via CLI",
        "tags": ["keyword-filter", "-k-flag", "cli"]
    },
    {
        "id": "pcat-4-055",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does the `-s` (or `--capture=no`) flag do in `pytest`?",
        "codeSnippet": "$ pytest -s tests/test_login.py",
        "options": [
            "It skips all assertions",
            "It disables stdout and stderr capturing, allowing print statements and logging to display directly in the console immediately as tests run",
            "It executes tests synchronously on a single CPU core",
            "It saves test results to an SQL database"
        ],
        "correctAnswer": 1,
        "explanation": "Pytest captures standard output by default, only showing prints if a test fails. Passing `-s` disables capture, allowing `print()` statements to be seen immediately during execution.",
        "officialRef": "PCAT-31-0x Block 4.3: Pytest CLI Options",
        "tags": ["capture-no", "-s-flag", "pytest-cli"]
    },
    {
        "id": "pcat-4-056",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What is the standard exit code returned by `pytest` or `unittest` when ALL executed tests PASS?",
        "codeSnippet": "$ pytest tests/\n$ echo $?\n0",
        "options": [
            "`1`",
            "`0`",
            "`2`",
            "`100`"
        ],
        "correctAnswer": 1,
        "explanation": "By POSIX convention and standard test runner contract, exit code `0` indicates success (all tests passed). CI pipelines check for exit code 0 to pass builds.",
        "officialRef": "PCAT-31-0x Block 4.3: Test Runner Exit Codes",
        "tags": ["exit-codes", "ci-cd", "posix"]
    },
    {
        "id": "pcat-4-057",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does an exit code of `1` signify when running `pytest`?",
        "codeSnippet": "$ pytest tests/\n$ echo $?\n1",
        "options": [
            "All tests passed successfully",
            "Tests were collected and run, but at least one test failed or raised an error",
            "Pytest was interrupted by the user with Ctrl+C",
            "No tests were found in the directory"
        ],
        "correctAnswer": 1,
        "explanation": "Exit code `1` in pytest indicates that tests were collected and executed, but some test(s) failed or experienced errors. CI pipelines treat exit code 1 as a failed build gate.",
        "officialRef": "PCAT-31-0x Block 4.3: Test Runner Exit Codes",
        "tags": ["exit-codes", "test-failure", "pytest"]
    },
    {
        "id": "pcat-4-058",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does an exit code of `5` signify when running `pytest`?",
        "codeSnippet": "$ pytest tests/empty_folder/\n$ echo $?\n5",
        "options": [
            "Internal pytest plugin crash",
            "No tests were collected",
            "Memory allocation error",
            "All tests passed with warnings"
        ],
        "correctAnswer": 1,
        "explanation": "Exit code `5` in pytest indicates that no tests were collected (e.g. invalid test pattern, empty directory, or mismatched `-k` filter).",
        "officialRef": "PCAT-31-0x Block 4.3: Pytest Exit Codes",
        "tags": ["exit-code-5", "no-tests-collected", "pytest"]
    },
    {
        "id": "pcat-4-059",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does the `--maxfail=N` option do in `pytest`?",
        "codeSnippet": "$ pytest --maxfail=3",
        "options": [
            "It limits memory usage to 3 gigabytes",
            "It stops the test execution run after N failures or errors have occurred",
            "It retries failing tests 3 times",
            "It sets the maximum recursion limit to 3"
        ],
        "correctAnswer": 1,
        "explanation": "`--maxfail=N` stops test execution after N failures (note: `pytest -x` is a shortcut for `--maxfail=1`).",
        "officialRef": "PCAT-31-0x Block 4.3: Pytest CLI Options",
        "tags": ["maxfail", "-x", "pytest-cli"]
    },
    {
        "id": "pcat-4-060",
        "section": "Section 4",
        "chapter": "4.3",
        "category": "Running Tests CLI",
        "difficulty": "Intermediate",
        "question": "What does the `-l` (or `--showlocals`) option do in `pytest`?",
        "codeSnippet": "$ pytest -l tests/test_math.py",
        "options": [
            "It lists all installed pytest plugins",
            "It prints local variable names and their current values in tracebacks when a test fails, aiding debugging without launching a debugger",
            "It forces tests to run in local timezone",
            "It locks the test directory"
        ],
        "correctAnswer": 1,
        "explanation": "`--showlocals` (or `-l`) displays local variables and their values inside traceback stack frames for failed tests, providing vital context for debugging without needing a debugger.",
        "officialRef": "PCAT-31-0x Block 4.3: Pytest CLI Options",
        "tags": ["showlocals", "traceback", "debugging"]
    },
    {
        "id": "pcat-4-061",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Test Project Structure",
        "difficulty": "Beginner",
        "question": "What is the recommended standard project directory layout for automated tests in Python packages?",
        "codeSnippet": "# Recommended Layout:\n# my_project/\n# ├── src/\n# │   └── my_package/\n# │       └── core.py\n# ├── tests/\n# │   ├── __init__.py\n# │   └── test_core.py\n# └── pyproject.toml",
        "options": [
            "Placing tests in a top-level `tests/` directory outside the application package source tree (or adjacent `src/` layout)",
            "Placing all tests in the root `/tmp` folder",
            "Embedding all test code inside docstrings of production classes",
            "Storing tests as plain text files on the desktop"
        ],
        "correctAnswer": 0,
        "explanation": "A top-level `tests/` directory outside `src/my_package/` keeps production packages clean from test code, prevents test files from being shipped in production wheels, and follows standard Python packaging best practices.",
        "officialRef": "PCAT-31-0x Block 4.4: Test File Structure and Layout",
        "tags": ["project-structure", "tests-directory", "packaging"]
    },
    {
        "id": "pcat-4-062",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Test Project Structure",
        "difficulty": "Intermediate",
        "question": "Why is running `pip install -e .` (editable install) the best practice for making application code importable by test suites?",
        "codeSnippet": "$ pip install -e .\n$ pytest tests/",
        "options": [
            "It avoids fragile `sys.path.append('..')` hacks inside test files and ensures tests import the package exactly as installed users and CI environments will import it",
            "It compiles Python into encrypted bytecode",
            "It speeds up pytest execution by 200%",
            "It deletes test files after execution"
        ],
        "correctAnswer": 0,
        "explanation": "Installing the project in editable mode (`pip install -e .`) registers the package in site-packages pointing to source. Tests can cleanly do `from my_package import ...` without brittle `sys.path` manipulations.",
        "officialRef": "PCAT-31-0x Block 4.4: Packaging and Imports in Testing",
        "tags": ["editable-install", "sys.path", "imports"]
    },
    {
        "id": "pcat-4-063",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Test Project Structure",
        "difficulty": "Beginner",
        "question": "What naming pattern should test files follow for automated test discovery tools (`pytest` and `unittest`) to find them?",
        "codeSnippet": "# Which files are discovered automatically?\n# File 1: test_payment.py\n# File 2: payment_test.py\n# File 3: payment.py",
        "options": [
            "Files starting with `test_` or ending with `_test.py` (e.g. `test_*.py` or `*_test.py`)",
            "Files named in ALL_CAPS",
            "Files with `.txt` extensions",
            "Files starting with an underscore `_`"
        ],
        "correctAnswer": 0,
        "explanation": "By default, both pytest and unittest discovery patterns search for files named `test_*.py` (and pytest also collects `*_test.py`).",
        "officialRef": "PCAT-31-0x Block 4.4: Test Naming Conventions",
        "tags": ["file-naming", "discovery-patterns", "conventions"]
    },
    {
        "id": "pcat-4-064",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Test Project Structure",
        "difficulty": "Intermediate",
        "question": "What is the recommended naming convention for test functions to convey maximum semantic clarity?",
        "codeSnippet": "# Recommended convention:\ndef test_<unit_or_action>_<scenario_or_input>_<expected_outcome>():\n    pass\n\n# Example:\ndef test_withdraw_with_insufficient_funds_raises_value_error():\n    pass",
        "options": [
            "`test_` followed by the function under test, the specific scenario or input conditions, and the expected outcome",
            "`test1()`, `test2()`, `test3()`",
            "Using the developer's name: `test_alice()`",
            "Naming tests with random UUID strings"
        ],
        "correctAnswer": 0,
        "explanation": "A descriptive pattern like `test_<method>_<condition>_<expected_result>` makes test reports self-documenting. If it fails in CI, developers know exactly what failed and why without opening the file.",
        "officialRef": "PCAT-31-0x Block 4.4: Test Naming Conventions",
        "tags": ["naming-conventions", "test-names", "self-documenting"]
    },
    {
        "id": "pcat-4-065",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Test Project Structure",
        "difficulty": "Intermediate",
        "question": "Why should test classes in `pytest` NOT define an `__init__` constructor?",
        "codeSnippet": "class TestBilling:\n    def __init__(self):  # <--- Warning / Error in pytest!\n        self.client = APIClient()",
        "options": [
            "Python classes cannot have constructors",
            "Pytest manages test class instantiation itself; defining `__init__` interferes with pytest's fixture collection and instantiations, raising a `PytestWarning` or error",
            "It causes memory leaks in Linux",
            "It turns the class into a staticmethod"
        ],
        "correctAnswer": 1,
        "explanation": "In pytest, test classes should never have an `__init__` constructor. Use fixtures (`@pytest.fixture` or `autouse=True`) or `setup_method(self)` instead.",
        "officialRef": "PCAT-31-0x Block 4.4: Pytest Class Conventions",
        "tags": ["pytest-classes", "__init__-anti-pattern", "conventions"]
    },
    {
        "id": "pcat-4-066",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Beginner",
        "question": "What assertion method in `unittest.TestCase` verifies that two values are equal?",
        "codeSnippet": "class TestMath(unittest.TestCase):\n    def test_sum(self):\n        # Which method verifies equality?\n        self.assertEqual(2 + 2, 4)",
        "options": [
            "`self.assertIs()`",
            "`self.assertEqual(first, second, msg=None)`",
            "`self.assertTrue(a == b)`",
            "`self.assertEquivalent()`"
        ],
        "correctAnswer": 1,
        "explanation": "`self.assertEqual(a, b)` verifies `a == b`. If it fails, it produces an informative diff comparing the values of `a` and `b`.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions in unittest",
        "tags": ["assertEqual", "equality", "unittest"]
    },
    {
        "id": "pcat-4-067",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Beginner",
        "question": "What is the difference between `self.assertEqual(a, b)` and `self.assertIs(a, b)` in `unittest`?",
        "codeSnippet": "x = [1, 2]\ny = [1, 2]\nself.assertEqual(x, y)  # Passes!\nself.assertIs(x, y)     # Fails! Why?",
        "options": [
            "`assertEqual` checks value equality (`a == b`); `assertIs` checks object identity (`a is b`, matching memory addresses)",
            "`assertIs` checks string representations; `assertEqual` checks types",
            "They are completely identical",
            "`assertIs` only works on numbers"
        ],
        "correctAnswer": 0,
        "explanation": "`assertEqual` checks value equality (`==`). `assertIs` checks identity (`is`), ensuring that `a` and `b` evaluate to the exact same object in memory.",
        "officialRef": "PCAT-31-0x Block 4.5: Equality vs Identity in unittest",
        "tags": ["assertEqual", "assertIs", "identity"]
    },
    {
        "id": "pcat-4-068",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Beginner",
        "question": "Which assertion should be used to verify that a value is `None` in `unittest`?",
        "codeSnippet": "result = find_user_by_id(999999)\n# What is the idiomatic assertion?",
        "options": [
            "`self.assertEqual(result, None)`",
            "`self.assertIsNone(result, msg=None)`",
            "`self.assertTrue(result == None)`",
            "`self.assertEmpty(result)`"
        ],
        "correctAnswer": 1,
        "explanation": "`self.assertIsNone(obj)` (and `self.assertIsNotNone(obj)`) is the idiomatic assertion for testing None identity, following PEP 8 guidance that comparisons to None should use `is`.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions in unittest",
        "tags": ["assertIsNone", "assertIsNotNone", "unittest"]
    },
    {
        "id": "pcat-4-069",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What does `self.assertCountEqual(a, b)` verify in `unittest.TestCase`?",
        "codeSnippet": "list1 = [1, 2, 2, 3]\nlist2 = [3, 1, 2, 2]\nself.assertCountEqual(list1, list2)  # Does this pass?",
        "options": [
            "It only checks if `len(a) == len(b)`",
            "It verifies that `a` and `b` contain the exact same elements with the same frequencies (counts), regardless of their ordering",
            "It checks that all numbers in `a` are positive",
            "It sorts the lists in place"
        ],
        "correctAnswer": 1,
        "explanation": "`assertCountEqual` checks that both collections have the same elements with the same multiplicity, regardless of element order (named `assertItemsEqual` in Python 2).",
        "officialRef": "PCAT-31-0x Block 4.5: Collection Assertions in unittest",
        "tags": ["assertCountEqual", "collections", "unittest"]
    },
    {
        "id": "pcat-4-070",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What is the purpose of `self.assertAlmostEqual(a, b, places=7)` in `unittest`?",
        "codeSnippet": "result = 0.1 + 0.2\nself.assertAlmostEqual(result, 0.3, places=7)",
        "options": [
            "It checks if two strings look similar",
            "It compares floating-point numbers by verifying that their difference rounds to zero to the specified number of decimal places (default 7 places)",
            "It converts numbers to integers before checking",
            "It randomly passes if numbers are close"
        ],
        "correctAnswer": 1,
        "explanation": "`assertAlmostEqual` checks that floating-point numbers are equal within a specified decimal precision (`places` or `delta`), avoiding float representation errors.",
        "officialRef": "PCAT-31-0x Block 4.5: Numeric Assertions in unittest",
        "tags": ["assertAlmostEqual", "floating-point", "unittest"]
    },
    {
        "id": "pcat-4-071",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What does `self.assertRaisesRegex(ExpectedException, regex_pattern)` do in `unittest`?",
        "codeSnippet": "with self.assertRaisesRegex(ValueError, r'invalid postal code: \\d+'):\n    parse_address('invalid postal code: 99999')",
        "options": [
            "It verifies that an expected exception is raised AND that its string message matches the provided regular expression pattern",
            "It uses regex to search the source code for exceptions",
            "It replaces the exception with a regular expression",
            "It skips the test if the regex is invalid"
        ],
        "correctAnswer": 0,
        "explanation": "`assertRaisesRegex` ensures that the code raises the expected exception type AND that the exception message matches the specified regular expression, preventing false passes on unrelated errors of the same type.",
        "officialRef": "PCAT-31-0x Block 4.5: Exception Testing in unittest",
        "tags": ["assertRaisesRegex", "exceptions", "regex"]
    },
    {
        "id": "pcat-4-072",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What is the primary advantage of using `with self.subTest(msg=None, **params):` inside a loop in `unittest`?",
        "codeSnippet": "class TestParity(unittest.TestCase):\n    def test_even_numbers(self):\n        for n in [2, 4, 5, 6, 8]:\n            with self.subTest(number=n):\n                self.assertEqual(n % 2, 0)",
        "options": [
            "It runs the loop in a background thread",
            "If an assertion fails for one item (e.g. n=5), `subTest` records the failure and allows the loop to continue testing the remaining items (6 and 8), rather than halting on the first failure",
            "It converts the test into a pytest fixture",
            "It skips all assertions"
        ],
        "correctAnswer": 1,
        "explanation": "Without `subTest`, a failure on 5 terminates the test method immediately, hiding whether 6 and 8 would pass. `self.subTest` isolates each iteration as a distinguishable sub-test result.",
        "officialRef": "PCAT-31-0x Block 4.5: Sub-tests in unittest",
        "tags": ["subTest", "data-driven", "unittest"]
    },
    {
        "id": "pcat-4-073",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Beginner",
        "question": "Which assertion checks that an object is an instance of a given class or tuple of classes?",
        "codeSnippet": "user = AdminUser(name='Alice')\n# Verifying type inheritance:\nself.assertIsInstance(user, (User, AdminUser))",
        "options": [
            "`self.assertType(user, User)`",
            "`self.assertIsInstance(obj, cls, msg=None)`",
            "`self.assertClass(user, User)`",
            "`self.assertInherits(user, User)`"
        ],
        "correctAnswer": 1,
        "explanation": "`self.assertIsInstance(obj, cls)` uses `isinstance(obj, cls)` to verify that an object is an instance of the class or any of its subclasses.",
        "officialRef": "PCAT-31-0x Block 4.5: Type Assertions in unittest",
        "tags": ["assertIsInstance", "type-checking", "unittest"]
    },
    {
        "id": "pcat-4-074",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What is the purpose of `self.assertWarns(WarningClass)` in `unittest`?",
        "codeSnippet": "with self.assertWarns(DeprecationWarning):\n    legacy_api_call()",
        "options": [
            "It tests that executing the code block triggers an expected Python warning (e.g. `DeprecationWarning`, `UserWarning`)",
            "It prints a warning to the developer's screen",
            "It converts warnings into assertion failures",
            "It disables all warnings in Python"
        ],
        "correctAnswer": 0,
        "explanation": "`self.assertWarns(WarningClass)` is a context manager ensuring that the wrapped code emits a specific warning, valuable for testing deprecation notices and non-fatal alerts.",
        "officialRef": "PCAT-31-0x Block 4.5: Warning Assertions in unittest",
        "tags": ["assertWarns", "warnings", "deprecation"]
    },
    {
        "id": "pcat-4-075",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Living Documentation",
        "difficulty": "Intermediate",
        "question": "How do docstrings on test methods serve as 'Living Documentation' in `unittest`?",
        "codeSnippet": "class TestAuth(unittest.TestCase):\n    def test_expired_token(self):\n        \"\"\"Verify that authentication tokens expired past 24 hours return 401 Unauthorized.\"\"\"\n        ...",
        "options": [
            "In verbose mode (`-v`), `unittest` displays the first line of the test's docstring instead of the raw function name, explaining the system requirement being verified",
            "Docstrings are compiled into HTML manuals automatically by Python",
            "Docstrings are required for tests to run",
            "Docstrings replace assert statements"
        ],
        "correctAnswer": 0,
        "explanation": "When run with `-v`, `unittest` prints the first line of the method docstring, turning test reports into a readable specification of system behavior ('Living Documentation').",
        "officialRef": "PCAT-31-0x Block 4.5: Unit Tests as Living Documentation",
        "tags": ["living-documentation", "docstrings", "test-reporting"]
    },
    {
        "id": "pcat-4-076",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What does `self.assertDictEqual(d1, d2)` provide when comparing two dictionaries that differ?",
        "codeSnippet": "d1 = {'a': 1, 'b': 2, 'c': 3}\nd2 = {'a': 1, 'b': 99, 'c': 3}\nself.assertDictEqual(d1, d2)",
        "options": [
            "It provides a detailed visual diff showing which keys are missing, extra, or have differing values (`b: 2 != 99`)",
            "It merges the two dictionaries together",
            "It sorts dictionary keys in place",
            "It only checks if the dictionaries have the same number of keys"
        ],
        "correctAnswer": 0,
        "explanation": "`assertDictEqual` provides rich diagnostic diffs for dictionaries, pinpointing exact key mismatches and value differences in failure messages.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions in unittest",
        "tags": ["assertDictEqual", "dictionaries", "diffs"]
    },
    {
        "id": "pcat-4-077",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Beginner",
        "question": "Which assertion checks that a substring or item is present in a collection or string in `unittest`?",
        "codeSnippet": "response_text = 'User registration successful'\nself.assertIn('successful', response_text)",
        "options": [
            "`self.assertContains(needle, haystack)`",
            "`self.assertIn(member, container, msg=None)`",
            "`self.assertHas(haystack, needle)`",
            "`self.assertIncludes(container, member)`"
        ],
        "correctAnswer": 1,
        "explanation": "`self.assertIn(a, b)` (and `self.assertNotIn(a, b)`) checks membership (`a in b`) across strings, lists, tuples, sets, and dictionaries.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions in unittest",
        "tags": ["assertIn", "assertNotIn", "membership"]
    },
    {
        "id": "pcat-4-078",
        "section": "Section 4",
        "chapter": "4.4",
        "category": "Test Project Structure",
        "difficulty": "Intermediate",
        "question": "Why is having an empty `__init__.py` inside subdirectories of `tests/` useful for package resolution in large test suites?",
        "codeSnippet": "# Directory layout:\n# tests/\n# ├── unit/\n# │   ├── __init__.py\n# │   └── test_auth.py\n# └── integration/\n#     ├── __init__.py\n#     └── test_auth.py",
        "options": [
            "It prevents module name collisions (e.g. `tests.unit.test_auth` vs `tests.integration.test_auth`), ensuring test loaders can distinguish identical filenames across subdirectories",
            "It compiles test files to `.pyc`",
            "It speeds up git clone operations",
            "It is required by the Python interpreter"
        ],
        "correctAnswer": 0,
        "explanation": "Having `__init__.py` in test subdirectories gives them unique package namespaces (`tests.unit.test_auth` vs `tests.integration.test_auth`), preventing Python from confusing modules with the same filename.",
        "officialRef": "PCAT-31-0x Block 4.4: Test File Structure & Namespaces",
        "tags": ["__init__.py", "namespaces", "name-collisions"]
    },
    {
        "id": "pcat-4-079",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "unittest Assertions",
        "difficulty": "Intermediate",
        "question": "What is the purpose of the custom `msg` parameter available in all `unittest.TestCase` assertion methods?",
        "codeSnippet": "self.assertEqual(user.role, 'ADMIN', msg='User role was not elevated after promotion')",
        "options": [
            "It sends an SMS message to the user",
            "It specifies a custom descriptive failure message appended to the assertion output if the assertion fails, explaining why the check was critical",
            "It formats output in markdown",
            "It sets the name of the test"
        ],
        "correctAnswer": 1,
        "explanation": "The `msg` parameter allows authors to attach domain-specific explanations to assertions, displayed if the test fails to clarify what business rule was violated.",
        "officialRef": "PCAT-31-0x Block 4.5: Specialized Assertions in unittest",
        "tags": ["custom-msg", "assertion-messages", "unittest"]
    },
    {
        "id": "pcat-4-080",
        "section": "Section 4",
        "chapter": "4.5",
        "category": "Foundations Summary",
        "difficulty": "Intermediate",
        "question": "In summary of Block 4, what foundational skills does a Python tester demonstrate to achieve PCAT certification?",
        "codeSnippet": "# Block 4 Mastery:\n# - Adhering to F.I.R.S.T. unit testing principles\n# - Navigating xUnit framework architecture (TestCase, Suite, Runner, Fixture)\n# - Structuring clean test projects and naming conventions\n# - Executing and filtering tests effectively via CLI runners\n# - Utilizing specialized assertion methods and subtests for thorough verification",
        "options": [
            "Building web scraping spiders with BeautifulSoup",
            "Designing, structuring, executing, and maintaining robust, isolated, and readable unit tests using Python's xUnit architecture and CLI tooling",
            "Configuring Kubernetes clusters",
            "Writing machine learning algorithms from scratch"
        ],
        "correctAnswer": 1,
        "explanation": "Block 4 establishes foundational testing competence: F.I.R.S.T. principles, xUnit architecture, CLI runner mechanics, clean project layout, and specialized assertions.",
        "officialRef": "PCAT-31-0x Block 4: Summary of Foundations of Unit Testing",
        "tags": ["block-4-summary", "foundations", "certification-core"]
    }
])

# Save Part 2 (Cards 51-100)
write_ts_file("src/data/pcatSection4CardsPart2.ts", "pcatSection4CardsPart2", part2_cards)
print("Wrote pcatSection4CardsPart2.ts (50 cards).")

# Write Section 4 barrel file
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

print("Block 4 complete: 100 cards written.")
