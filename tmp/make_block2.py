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

# --- CHAPTER 2.1: The Goal and Importance of Test Automation (Cards 1-20) ---
cards.extend([
    {
        "id": "pcat-2-001",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Beginner",
        "question": "What is the primary goal of test automation according to the PCAT curriculum?",
        "codeSnippet": "# Automated test suite execution:\n# Running 650 regression tests automatically on every Git commit.\n$ pytest tests/",
        "options": [
            "To replace human software designers completely with automated bots",
            "To execute repetitive, tedious, or regression tests rapidly and reliably, providing fast feedback and freeing human testers for exploratory testing",
            "To eliminate the need for writing requirements documentation",
            "To guarantee that code will execute with zero memory allocation"
        ],
        "correctAnswer": 1,
        "explanation": "Test automation automates repetitive, predictable regression and verification tasks to provide rapid continuous feedback, reduce human error, and allow human testers to focus on exploratory and creative testing.",
        "officialRef": "PCAT-31-0x Block 2.1: Goal and Importance of Test Automation",
        "tags": ["test-automation", "automation-goals", "roi"]
    },
    {
        "id": "pcat-2-002",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "Which type of testing is generally POORLY suited for automation and is better conducted manually?",
        "codeSnippet": "# Evaluating whether the color palette feels trustworthy and user onboarding flows intuitively:\n# Human perceptual and aesthetic appraisal.",
        "options": [
            "API schema and payload contract validation",
            "Exploratory and visual usability/aesthetic assessment by real human users",
            "High-volume regression calculation tests",
            "Performance and concurrent load testing"
        ],
        "correctAnswer": 1,
        "explanation": "Exploratory testing, ad-hoc discovery, and subjective usability/aesthetic assessments require human intuition, creativity, and empathy, making them poorly suited for automated scripting.",
        "officialRef": "PCAT-31-0x Block 2.1: Manual vs Automated Testing",
        "tags": ["manual-vs-automated", "exploratory-testing", "usability"]
    },
    {
        "id": "pcat-2-003",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is the 'Return on Investment' (ROI) calculation consideration for test automation?",
        "codeSnippet": "# Automation ROI equation:\n# Cost to automate & maintain vs (Manual execution hours saved * frequency of execution)",
        "options": [
            "Automation always pays off in sprint 1 regardless of test complexity",
            "Automation has an upfront creation and ongoing maintenance cost; it delivers high ROI when tests are executed repeatedly over many releases",
            "ROI is calculated solely by the number of assert statements written",
            "Automated tests never require any maintenance"
        ],
        "correctAnswer": 1,
        "explanation": "Automating tests requires upfront engineering and ongoing maintenance effort. The ROI becomes positive when tests run frequently (e.g. CI/CD regression suites) over a sustained lifespan.",
        "officialRef": "PCAT-31-0x Block 2.1: Goal and Importance of Test Automation",
        "tags": ["roi", "automation-economics", "maintenance"]
    },
    {
        "id": "pcat-2-004",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is a 'Flaky Test' in an automated test suite?",
        "codeSnippet": "# CI Log:\n# Build #101: test_payment_webhook() PASSED\n# Build #102: test_payment_webhook() FAILED (No code changes!)\n# Build #103: test_payment_webhook() PASSED",
        "options": [
            "A test with invalid Python syntax that fails to compile",
            "A test that exhibits both pass and fail outcomes across identical codebase runs without any changes to the application code under test",
            "A test that executes in under 1 millisecond",
            "A test that asserts multiple values in a loop"
        ],
        "correctAnswer": 1,
        "explanation": "A flaky test yields non-deterministic results: passing or failing intermittently on identical code, typically due to race conditions, timing dependencies, network latency, or shared mutable state.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["flaky-tests", "determinism", "reliability"]
    },
    {
        "id": "pcat-2-005",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "Why are flaky tests considered a severe risk to an engineering team's culture and delivery velocity?",
        "codeSnippet": "# Developer reaction to CI failure:\n# 'Oh, test_checkout_cart failed again? Just re-run the build, it fails randomly all the time!'",
        "options": [
            "They increase electricity costs of the build server",
            "They erode developer trust in the test suite, causing engineers to ignore legitimate defect failures and mask genuine regressions",
            "They prevent Python wheels from being created",
            "They permanently delete git tags"
        ],
        "correctAnswer": 1,
        "explanation": "When tests are flaky, developers lose confidence in CI. They start ignoring test failures as 'just flakiness', allowing real bugs to slip into production undetected.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["flakiness", "test-trust", "ci-cd"]
    },
    {
        "id": "pcat-2-006",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "Which of the following is a primary cause of test flakiness in Python automated tests?",
        "codeSnippet": "# Flaky test anti-pattern:\ndef test_async_fetch():\n    trigger_background_job()\n    time.sleep(2)  # Hardcoded sleep timing assumption!\n    assert get_job_status() == 'COMPLETED'",
        "options": [
            "Using descriptive variable names",
            "Relying on hardcoded arbitrary sleeps (`time.sleep`) instead of explicit polling or event synchronization, and shared mutable state between tests",
            "Writing assertions with assert statements",
            "Importing from the typing module"
        ],
        "correctAnswer": 1,
        "explanation": "Arbitrary sleeps cause flakiness: on a busy CI server, 2 seconds may not be enough, causing false failures. Sharing mutable globals or database records across tests also causes flakiness.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["flaky-causes", "sleep-anti-pattern", "synchronization"]
    },
    {
        "id": "pcat-2-007",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Beginner",
        "question": "What is the recommended best practice for tests that depend on time or date calculations?",
        "codeSnippet": "# Date dependent code:\ndef is_subscription_expired(user):\n    return datetime.datetime.now() > user.expiry_date\n\n# How should automated tests handle datetime.now()?",
        "options": [
            "Change the operating system clock before every test run",
            "Freeze or mock the system clock (e.g., using unittest.mock or freezegun) to ensure deterministic, reproducible test runs",
            "Only run the test suite on January 1st",
            "Delete date checks from production code"
        ],
        "correctAnswer": 1,
        "explanation": "Tests depending on current time can fail across midnight, month ends, or leap years. Freezing or mocking time makes tests 100% deterministic and independent of the execution moment.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["mocking-time", "determinism", "freezegun"]
    },
    {
        "id": "pcat-2-008",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is 'Continuous Testing' in modern DevOps pipelines?",
        "codeSnippet": "# Pipeline stages:\n# Code Push -> Static Lint -> Unit Tests -> Build Artifact -> Integration Tests -> Deployment Gate",
        "options": [
            "Testing an infinite loop until the CPU halts",
            "Executing automated tests continuously at every phase of the software delivery pipeline to obtain immediate quality feedback and reduce release risk",
            "Writing tests without ever writing implementation code",
            "Manual testing performed 24 hours a day by offshore teams"
        ],
        "correctAnswer": 1,
        "explanation": "Continuous testing executes automated tests systematically across the CI/CD pipeline, validating code changes at each stage (commit, pull request, integration, staging) automatically.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation and CI/CD",
        "tags": ["continuous-testing", "devops", "ci-cd"]
    },
    {
        "id": "pcat-2-009",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "Why should automated tests be isolated and independent from one another?",
        "codeSnippet": "# Order dependence anti-pattern:\ndef test_1_create_user():\n    global user_id\n    user_id = create_user('alice')\n\ndef test_2_delete_user():\n    delete_user(user_id)  # Fails if test_1 did not run first!",
        "options": [
            "To allow pytest to execute tests in any arbitrary or randomized order (and concurrently in parallel) without cascading failures",
            "Because Python 3 does not support global variables",
            "To prevent tests from using memory",
            "Because unittest requires all tests to be named test_0"
        ],
        "correctAnswer": 0,
        "explanation": "Test isolation ensures that each test sets up its own state and cleans up after itself. Tests can run in any sequence or in parallel (e.g. `pytest -n auto`) without false dependencies.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Best Practices",
        "tags": ["test-isolation", "test-independence", "parallel-testing"]
    },
    {
        "id": "pcat-2-010",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Beginner",
        "question": "What does a 'Self-Validating' test mean according to automated testing best practices?",
        "codeSnippet": "# Automated Self-Validating Test:\ndef test_uppercase():\n    # Test evaluates pass/fail automatically with clear assertion;\n    # no human needs to read stdout logs to verify if it worked!\n    assert 'hello'.upper() == 'HELLO'",
        "options": [
            "A test that submits its own results to the Python Institute for grading",
            "A test that programmatically decides whether it passed or failed via assertions without requiring manual inspection of output logs or console prints",
            "A test that edits its own source code when an error occurs",
            "A test that validates developer identity with OAuth tokens"
        ],
        "correctAnswer": 1,
        "explanation": "A self-validating test provides a binary PASS or FAIL result automatically via assertions. A human never needs to manually inspect print statements or log files to verify success.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Best Practices",
        "tags": ["self-validating", "assertions", "best-practices"]
    },
    {
        "id": "pcat-2-011",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is the primary benefit of Fast Test Execution (sub-second test runs) during active software development?",
        "codeSnippet": "# 500 unit tests execute in 0.38 seconds.\n# Developer runs test suite on every file save.",
        "options": [
            "It saves on computer battery power",
            "It maintains developer focus and flow, encouraging frequent test execution after every minor code modification",
            "It allows tests to skip assertion checks",
            "It bypasses Python bytecode compilation"
        ],
        "correctAnswer": 1,
        "explanation": "When tests run in milliseconds, developers run them constantly on save, catching bugs immediately. Slow test suites are run infrequently, allowing regressions to compound.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Best Practices",
        "tags": ["fast-tests", "feedback-loop", "developer-velocity"]
    },
    {
        "id": "pcat-2-012",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is 'Headless Browser Testing' in automated web testing?",
        "codeSnippet": "# Selenium / Playwright execution with headless mode:\noptions.add_argument('--headless')\nbrowser = webdriver.Chrome(options=options)",
        "options": [
            "Testing without a computer monitor or graphical window rendering, improving automated execution speed and running on headless Linux CI servers",
            "Testing a browser that has no JavaScript engine",
            "Testing web servers with broken HTTP header responses",
            "Testing performed by developers without looking at the screen"
        ],
        "correctAnswer": 0,
        "explanation": "Headless browser testing runs browser automation without launching a visible GUI window, enabling faster execution and allowing tests to run on headless cloud CI/CD build agents.",
        "officialRef": "PCAT-31-0x Block 2.1: Automated Test Tools",
        "tags": ["headless-testing", "browser-automation", "ci-cd"]
    },
    {
        "id": "pcat-2-013",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is a 'Test Harness'?",
        "codeSnippet": "# Automated harness:\n# Framework orchestrating test runner, mock servers, DB fixtures, and reporting plugins.",
        "options": [
            "A cable used to connect test devices to USB ports",
            "A collection of software, test execution engines, drivers, stubs, and test data configured to execute tests under controlled conditions and record results",
            "A security lock on physical development laptops",
            "A Python script that generates fake customer emails"
        ],
        "correctAnswer": 1,
        "explanation": "A test harness is the supporting framework (runners, test double libraries, environment configs, and reporters) that sets up the test bed and manages automated execution.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Infrastructure",
        "tags": ["test-harness", "infrastructure", "test-bed"]
    },
    {
        "id": "pcat-2-014",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Beginner",
        "question": "Why should test code be maintained with the same architectural cleanliness and rigor as production code?",
        "codeSnippet": "# Maintainable test code:\n# - Clear variable names and intent\n# - Isolated helper functions\n# - Clean assertions without spaghetti logic",
        "options": [
            "Because Python will refuse to execute messy test code",
            "Because messy, brittle test code accumulates high maintenance overhead, becomes difficult to refactor, and can become a blocker to product delivery",
            "Because test code is deployed directly to end-user smartphones",
            "Because linters only check test directories"
        ],
        "correctAnswer": 1,
        "explanation": "Unmaintainable, brittle test suites become a liability: they break on every code change, require huge maintenance effort, and tempt teams to disable or delete them.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Maintenance and Clean Code",
        "tags": ["test-cleanliness", "maintainability", "best-practices"]
    },
    {
        "id": "pcat-2-015",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is 'Deterministic Execution' in automated unit testing?",
        "codeSnippet": "# Deterministic test property:\n# For identical inputs and state S, test T always produces identical result R, 10,000 times in a row.",
        "options": [
            "Tests that execute in alphabetical order",
            "The property where a test produces the exact same outcome every time it is run under identical initial conditions, with zero random flakiness",
            "Tests that terminate with exit code 0",
            "Tests written using boolean expressions"
        ],
        "correctAnswer": 1,
        "explanation": "A deterministic test is completely repeatable: given the same inputs and preconditions, it consistently produces the exact same pass or fail result every time.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["deterministic", "repeatability", "reliability"]
    },
    {
        "id": "pcat-2-016",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is 'Shift-Right Testing' and how does it complement shift-left test automation?",
        "codeSnippet": "# Shift-Right practices in production:\n# Feature flags, canary deployments, production synthetic monitoring, chaos engineering.",
        "options": [
            "Indenting Python code by 8 spaces instead of 4",
            "Testing activities conducted in production or post-release environments (such as canary releases, synthetic monitoring, and chaos testing) to validate real user behavior",
            "Moving test files to the right-hand monitor",
            "Skipping automated testing on developer machines"
        ],
        "correctAnswer": 1,
        "explanation": "Shift-Right testing tests in production (monitoring, canary deployments, feature flags, A/B testing, chaos engineering) to complement pre-release Shift-Left testing with real-world validation.",
        "officialRef": "PCAT-31-0x Block 2.1: Modern Testing Paradigms",
        "tags": ["shift-right", "canary", "production-testing"]
    },
    {
        "id": "pcat-2-017",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Beginner",
        "question": "What is an automated 'Regression Test Suite' designed to detect?",
        "codeSnippet": "# Running regression suite after updating payments.py:\n# Did we accidentally break user registration or invoice generation?",
        "options": [
            "Statistical regression trend lines in finance",
            "Unintended side-effects, degradations, or regressions introduced into existing, previously working features by recent code modifications or bug fixes",
            "Whether developers logged into their workstations on time",
            "Deprecation warnings in Python 3.8"
        ],
        "correctAnswer": 1,
        "explanation": "Automated regression testing ensures that new features or bug fixes have not unintentionally broken or degraded existing, previously verified features across the application.",
        "officialRef": "PCAT-31-0x Block 2.1: Goal and Importance of Test Automation",
        "tags": ["regression-suite", "side-effects", "automation-benefits"]
    },
    {
        "id": "pcat-2-018",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is the primary danger of using a 'sleep' statement to wait for an asynchronous operation in a test?",
        "codeSnippet": "# Anti-pattern:\ntrigger_async_operation()\ntime.sleep(5)  # If it finishes in 0.1s, we wasted 4.9s. If it finishes in 5.1s, the test falsely fails!\nassert operation_completed()",
        "options": [
            "It slows down test runs unnecessarily and causes intermittent false failures when execution takes slightly longer than the hardcoded duration",
            "time.sleep() raises an exception in pytest",
            "It converts asynchronous tasks into synchronous threads",
            "Python automatically terminates tests that sleep"
        ],
        "correctAnswer": 0,
        "explanation": "Hardcoded sleeps make tests slow when the task finishes early, and flaky when the task finishes slightly late. Explicit polling or asynchronous event awaits should be used instead.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["sleep-anti-pattern", "async-testing", "flakiness"]
    },
    {
        "id": "pcat-2-019",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What is the recommended alternative to `time.sleep()` when waiting for an asynchronous event in an automated test?",
        "codeSnippet": "# Robust wait pattern:\ndef wait_until(predicate, timeout=5, interval=0.1):\n    start = time.time()\n    while time.time() - start < timeout:\n        if predicate(): return True\n        time.sleep(interval)\n    raise TimeoutError('Condition not met within timeout')",
        "options": [
            "Increasing time.sleep() to 60 seconds",
            "Using explicit polling with a condition predicate and timeout (or framework wait utilities like WebDriverWait or asyncio.wait_for)",
            "Disabling asynchronous operations in production",
            "Running tests on faster CPU hardware only"
        ],
        "correctAnswer": 1,
        "explanation": "Polling with a predicate checks for completion frequently and finishes as soon as the condition is satisfied, maximizing test speed while avoiding false timeout failures.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Reliability",
        "tags": ["polling", "explicit-waits", "async-testing"]
    },
    {
        "id": "pcat-2-020",
        "section": "Section 2",
        "chapter": "2.1",
        "category": "Test Automation",
        "difficulty": "Intermediate",
        "question": "What metric helps teams monitor the health and stability of their automated test suite over time?",
        "codeSnippet": "# Metrics Dashboard:\n# - Test execution duration (seconds)\n# - Flakiness / Retry rate (%)\n# - Pass / Fail rate (%)\n# - Code coverage trend (%)",
        "options": [
            "Lines of code per developer",
            "Test execution duration, test pass/fail rate, flaky failure rate, and code coverage over time",
            "The physical weight of the continuous integration server",
            "The number of git branches created per month"
        ],
        "correctAnswer": 1,
        "explanation": "Tracking execution time, pass rates, flaky test frequency, and coverage trends ensures the test suite remains fast, reliable, and trustworthy over the project lifecycle.",
        "officialRef": "PCAT-31-0x Block 2.1: Test Automation Metrics",
        "tags": ["test-metrics", "suite-health", "ci-cd"]
    }
])

# --- CHAPTER 2.2: The Code Refactoring Loop & Technical Debt (Cards 21-40) ---
cards.extend([
    {
        "id": "pcat-2-021",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Beginner",
        "question": "What is the formal definition of 'Code Refactoring' according to Martin Fowler?",
        "codeSnippet": "# Before refactoring:\ndef p(x, y): return x * 0.2 + y * 0.8\n\n# After refactoring:\ndef calculate_weighted_score(exam_score: float, project_score: float) -> float:\n    EXAM_WEIGHT = 0.2\n    PROJECT_WEIGHT = 0.8\n    return (exam_score * EXAM_WEIGHT) + (project_score * PROJECT_WEIGHT)",
        "options": [
            "Adding three new major features to an existing application",
            "A disciplined technique for restructuring an existing body of code, altering its internal structure without changing its external observable behavior",
            "Rewriting an entire application from scratch in a different programming language",
            "Fixing critical compiler syntax errors"
        ],
        "correctAnswer": 1,
        "explanation": "Refactoring improves non-functional attributes of software (readability, simplicity, maintainability, extensibility) while preserving its exact external behavior.",
        "officialRef": "PCAT-31-0x Block 2.2: The Code Refactoring Loop",
        "tags": ["refactoring-definition", "martin-fowler", "clean-code"]
    },
    {
        "id": "pcat-2-022",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Beginner",
        "question": "What are the three iterative phases of the 'Red-Green-Refactor' cycle in Test-Driven Development?",
        "codeSnippet": "# The classic loop:\n# 1. Red: Write a failing test\n# 2. Green: Write minimal code to pass\n# 3. Refactor: Clean up code without altering behavior",
        "options": [
            "Review -> Grade -> Release",
            "Red (write a failing test) -> Green (make the test pass) -> Refactor (clean up internal design while keeping tests green)",
            "Restart -> Generate -> Recompile",
            "Record -> Graph -> Report"
        ],
        "correctAnswer": 1,
        "explanation": "The Red-Green-Refactor loop: 1. Red (write a test that fails), 2. Green (write simplest code to make it pass), 3. Refactor (clean and reorganize code while tests remain passing).",
        "officialRef": "PCAT-31-0x Block 2.2: The Code Refactoring Loop",
        "tags": ["red-green-refactor", "tdd", "refactoring-loop"]
    },
    {
        "id": "pcat-2-023",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Intermediate",
        "question": "Why is an automated test suite an indispensable prerequisite before undertaking significant code refactoring?",
        "codeSnippet": "# Refactoring safety check:\n# 400 unit tests verify customer discount calculations.\n# Developer reorganizes classes.\n# $ pytest -> 400 passed in 0.8s -> Confirmed no regressions introduced!",
        "options": [
            "Because Python crashes if you refactor without tests",
            "Automated tests act as a safety net, instantly alerting developers if an internal restructuring accidentally alters behavior or introduces a regression",
            "Tests generate the refactored code automatically",
            "Refactoring cannot be committed to Git without 100% branch coverage"
        ],
        "correctAnswer": 1,
        "explanation": "Without comprehensive automated tests, refactoring is risky guesswork. Tests provide immediate feedback that external behavior remains unaltered after restructuring.",
        "officialRef": "PCAT-31-0x Block 2.2: The Code Refactoring Loop",
        "tags": ["refactoring-safety", "regression-prevention", "tests"]
    },
    {
        "id": "pcat-2-024",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What is a 'Code Smell' in software engineering?",
        "codeSnippet": "# A surface indication of a deeper design problem:\n# A function with 400 lines of code, 12 nested if statements, and 14 parameters.",
        "options": [
            "A hardware defect in the developer's computer fan",
            "A surface indication or diagnostic symptom in the source code that typically indicates a deeper design flaw or structural problem, without being a bug in itself",
            "A syntax error caught by the Python compiler",
            "A malicious script virus"
        ],
        "correctAnswer": 1,
        "explanation": "A code smell is not a bug (the code works), but a structural weakness (e.g., duplicate code, long method, feature envy) that slows down development and increases the risk of future defects.",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Refactoring",
        "tags": ["code-smells", "technical-debt", "clean-code"]
    },
    {
        "id": "pcat-2-025",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What code smell is characterized by a class that accumulates too many responsibilities, attributes, and methods, violating the Single Responsibility Principle?",
        "codeSnippet": "# Class UserManager:\n# Does auth, sends emails, writes SQL queries, prints PDF invoices, parses XML, and manages cookies.",
        "options": [
            "Shotgun Surgery",
            "God Class (or Large Class / Blob)",
            "Data Clumps",
            "Feature Envy"
        ],
        "correctAnswer": 1,
        "explanation": "A 'God Class' (or Large Class/Blob) knows too much or does too much, centralizing system logic and violating the Single Responsibility Principle (SRP).",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Refactoring",
        "tags": ["god-class", "code-smells", "srp"]
    },
    {
        "id": "pcat-2-026",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What code smell describes a method in Class A that spends more time querying and manipulating data belonging to Class B than its own data?",
        "codeSnippet": "class OrderReceipt:\n    def print_customer_details(self, customer):\n        # Queries customer fields extensively instead of letting Customer format itself:\n        name = customer.first_name + ' ' + customer.last_name\n        addr = customer.street + ', ' + customer.city + ' ' + customer.zip_code\n        return f'{name} - {addr}'",
        "options": [
            "Feature Envy",
            "Primitive Obsession",
            "Dead Code",
            "Speculative Generality"
        ],
        "correctAnswer": 0,
        "explanation": "Feature Envy occurs when a method is more interested in the data of another class than the class it resides in. The method should usually be moved to the other class.",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Refactoring",
        "tags": ["feature-envy", "code-smells", "object-design"]
    },
    {
        "id": "pcat-2-027",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What code smell is 'Primitive Obsession'?",
        "codeSnippet": "# Using raw strings or integers for domain entities:\ndef transfer_money(source_account: str, dest_account: str, amount_cents: int, currency: str):\n    # Passing primitives instead of domain objects like Money(amount, currency) or AccountNumber(acc)",
        "options": [
            "Using early versions of Python like Python 2.7",
            "Reluctance to use small domain-specific objects for concepts like Money, Coordinates, or Email, relying instead on raw primitive types (strings, ints, dicts) everywhere",
            "Writing assembly code inside Python",
            "Using integers instead of floats for mathematical constants"
        ],
        "correctAnswer": 1,
        "explanation": "Primitive Obsession is the habit of using primitive types (strings, ints) to represent rich domain concepts (e.g. Email, Money, Phone) instead of creating dedicated value objects with validation.",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Refactoring",
        "tags": ["primitive-obsession", "code-smells", "value-objects"]
    },
    {
        "id": "pcat-2-028",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What code smell is known as 'Shotgun Surgery'?",
        "codeSnippet": "# Making a small change to tax rate logic requires minor edits to 18 different files across the codebase.",
        "options": [
            "Deleting random functions until the tests pass",
            "A situation where making a single conceptual change requires making lots of small edits across many different classes or files",
            "Splitting a single module into multiple git submodules",
            "Over-optimizing loops using C extensions"
        ],
        "correctAnswer": 1,
        "explanation": "Shotgun Surgery occurs when a single responsibility or concept is scattered across many classes. Changing it forces developers to make widespread edits across many files.",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Refactoring",
        "tags": ["shotgun-surgery", "code-smells", "coupling"]
    },
    {
        "id": "pcat-2-029",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Beginner",
        "question": "What is 'Dead Code' and what is the refactoring recommendation for handling it?",
        "codeSnippet": "# Legacy function never called anywhere in the codebase:\ndef legacy_v1_xml_export(data):\n    pass  # No tests, no references, unused for 3 years",
        "options": [
            "Code that crashed the server; it should be rewritten in C",
            "Code (functions, classes, variables) that is never executed or referenced; it should be deleted safely because version control preserves its history",
            "Code that must be preserved with comment tags forever",
            "Code written by former employees"
        ],
        "correctAnswer": 1,
        "explanation": "Dead code adds cognitive clutter, maintenance burden, and confusion. It should be deleted cleanly, as Git preserves its history if it is ever needed in the future.",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Refactoring",
        "tags": ["dead-code", "code-smells", "cleanup"]
    },
    {
        "id": "pcat-2-030",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Beginner",
        "question": "What is the 'Extract Method' (or Extract Function) refactoring technique?",
        "codeSnippet": "# Before:\ndef print_owing(invoice):\n    print('****************')\n    print('** Customer   **')\n    print('****************')\n    # print details...\n\n# After: Extracting banner into a dedicated helper function:\ndef print_banner():\n    print('****************')\n    print('** Customer   **')\n    print('****************')",
        "options": [
            "Deleting a method from an object",
            "Taking a fragment of code from a larger method, pulling it out into a new method with a descriptive name explaining its purpose",
            "Exporting a method to a C DLL",
            "Moving private methods to the global scope"
        ],
        "correctAnswer": 1,
        "explanation": "Extract Method takes a code fragment that can be grouped together, turns it into a separate method with an intention-revealing name, improving readability and reusability.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Techniques",
        "tags": ["extract-method", "refactoring-techniques", "clean-code"]
    },
    {
        "id": "pcat-2-031",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Beginner",
        "question": "When is the 'Inline Method' refactoring technique appropriate?",
        "codeSnippet": "# Before:\ndef is_more_than_five_late_deliveries(driver):\n    return driver.number_of_late_deliveries > 5\n\n# The method body is just as clear as its name and only called once:\nif driver.number_of_late_deliveries > 5:\n    issue_warning()",
        "options": [
            "When a method's body is just as clear and simple as its name, making the extra layer of indirection pointless overhead",
            "When a method has more than 500 lines of code",
            "When writing recursive functions",
            "When importing third-party libraries"
        ],
        "correctAnswer": 0,
        "explanation": "Inline Method replaces calls to a method with the method's content when the method body is already self-evident and the extra function adds unnecessary indirection.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Techniques",
        "tags": ["inline-method", "refactoring-techniques", "simplicity"]
    },
    {
        "id": "pcat-2-032",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "What is the 'Replace Magic Number with Symbolic Constant' refactoring technique?",
        "codeSnippet": "# Before:\ndef potential_energy(mass, height):\n    return mass * 9.81 * height  # What is 9.81?\n\n# After:\nGRAVITATIONAL_ACCELERATION = 9.81\ndef potential_energy(mass, height):\n    return mass * GRAVITATIONAL_ACCELERATION * height",
        "options": [
            "Replacing mathematical numbers with complex numbers in Python",
            "Replacing a literal number that has a specific meaning with a well-named constant that explains its purpose and provides a single place for updates",
            "Converting integer values into hexadecimal strings",
            "Calculating random seed numbers"
        ],
        "correctAnswer": 1,
        "explanation": "Magic numbers are unexplained literal numbers in code. Replacing them with named constants improves readability and ensures that if the value changes, it is updated in only one place.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Techniques",
        "tags": ["magic-numbers", "constants", "refactoring"]
    },
    {
        "id": "pcat-2-033",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "What is the 'Introduce Parameter Object' refactoring technique?",
        "codeSnippet": "# Before:\ndef search_orders(start_date, end_date, customer_id, min_amount, max_amount, status):\n    pass\n\n# After:\n@dataclass\nclass OrderSearchCriteria:\n    date_range: tuple\n    customer_id: str\n    amount_range: tuple\n    status: str\n\ndef search_orders(criteria: OrderSearchCriteria):\n    pass",
        "options": [
            "Replacing a long list of parameters that frequently travel together with a single cohesive object or dataclass",
            "Converting all parameters into Python global variables",
            "Using *args and **kwargs for every function signature",
            "Serializing parameters to JSON strings"
        ],
        "correctAnswer": 0,
        "explanation": "When multiple parameters naturally clump together, grouping them into a Parameter Object (or dataclass) clarifies method signatures and creates a cohesive domain abstraction.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Techniques",
        "tags": ["parameter-object", "clean-code", "refactoring"]
    },
    {
        "id": "pcat-2-034",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "What is the 'Replace Conditional with Polymorphism' refactoring?",
        "codeSnippet": "# Before: Giant switch/if-elif checking type string:\ndef calculate_pay(employee):\n    if employee.type == 'COMMISSIONED': return employee.base + employee.commission\n    elif employee.type == 'HOURLY': return employee.hours * employee.rate\n    elif employee.type == 'SALARIED': return employee.salary",
        "options": [
            "Replacing long if-elif chains that branch based on object type with polymorphic class hierarchies where each subclass implements its own version of the method",
            "Converting object-oriented code into pure functional lambdas",
            "Replacing all if statements with try-except blocks",
            "Using Python dictionary lookups exclusively"
        ],
        "correctAnswer": 0,
        "explanation": "Instead of checking object types with switch/if-elif chains, polymorphism delegates the behavior to subclasses (e.g. HourlyEmployee, SalariedEmployee), adhering to the Open/Closed Principle.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Techniques",
        "tags": ["polymorphism", "oop", "clean-code"]
    },
    {
        "id": "pcat-2-035",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Principles",
        "difficulty": "Beginner",
        "question": "What is the 'Boy Scout Rule' in software craftsmanship and refactoring?",
        "codeSnippet": "# Developer fixing a bug in legacy module:\n# Fixes bug, and also cleans up two poorly named variables and removes an unused import.\n# 'Always leave the campground cleaner than you found it.'",
        "options": [
            "Wearing uniforms during weekly engineering meetings",
            "Always leaving the code cleaner than you found it: checking in code that is slightly cleaner than when you checked it out",
            "Only refactoring code during weekend camping trips",
            "Requiring junior developers to write all documentation"
        ],
        "correctAnswer": 1,
        "explanation": "The Boy Scout Rule (Uncle Bob) states: 'Always leave the code cleaner than you found it.' Incremental continuous micro-refactoring prevents codebases from deteriorating into technical debt.",
        "officialRef": "PCAT-31-0x Block 2.2: Continuous Refactoring",
        "tags": ["boy-scout-rule", "clean-code", "craftsmanship"]
    },
    {
        "id": "pcat-2-036",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "What is the 'Guard Clause' refactoring technique?",
        "codeSnippet": "# Before: Deeply nested if statements\ndef process_order(order):\n    if order is not None:\n        if order.is_active:\n            if order.has_items:\n                execute(order)\n\n# After: Guard clauses with early exits\ndef process_order(order):\n    if order is None or not order.is_active or not order.has_items:\n        return\n    execute(order)",
        "options": [
            "Hiring security guards for server rooms",
            "Using early return statements at the beginning of a function to handle error conditions and edge cases immediately, flattening nested conditional pyramids",
            "Wrapping every line in a try-except clause",
            "Preventing functions from having return values"
        ],
        "correctAnswer": 1,
        "explanation": "Guard clauses check for preconditions/errors at the top of a method and return immediately. This eliminates the 'arrow anti-pattern' (deep indentation) and keeps the happy path clean.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Techniques",
        "tags": ["guard-clauses", "early-return", "clean-code"]
    },
    {
        "id": "pcat-2-037",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Intermediate",
        "question": "Why should developers NEVER combine refactoring with adding new functional features in the exact same commit?",
        "codeSnippet": "# Git commit message anti-pattern:\n# 'Refactored billing module architecture AND added PayPal support'",
        "options": [
            "Because Git will reject commits with two verbs in the message",
            "Because mixing behavior changes with structural changes makes code review difficult and prevents isolating regressions to either the refactoring or the new feature",
            "Because Python does not allow new features in refactored classes",
            "Because linters will report branch divergence"
        ],
        "correctAnswer": 1,
        "explanation": "Separating refactoring from feature additions into distinct commits makes pull requests easier to review, simplifies debugging, and allows git bisect to pinpoint regressions precisely.",
        "officialRef": "PCAT-31-0x Block 2.2: The Code Refactoring Loop",
        "tags": ["refactoring-discipline", "git-hygiene", "best-practices"]
    },
    {
        "id": "pcat-2-038",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Intermediate",
        "question": "What is the difference between 'Preparatory Refactoring' and 'Opportunistic Refactoring'?",
        "codeSnippet": "# Scenario A: Before adding a new payment method, refactoring the existing payment module to make adding it trivial.\n# Scenario B: While reading code to understand a bug, renaming a confusing variable immediately.",
        "options": [
            "Preparatory refactoring refactors code before adding a new feature to make the addition clean and easy; opportunistic refactoring refactors as you encounter messy code during daily tasks",
            "Preparatory refactoring is automated; opportunistic refactoring is manual",
            "They are exact synonyms in Python testing",
            "Preparatory refactoring is only done on databases"
        ],
        "correctAnswer": 0,
        "explanation": "Kent Beck: 'Make the change easy, then make the easy change.' Preparatory refactoring restructures code to make a new feature simple to plug in. Opportunistic refactoring cleans code as you encounter it.",
        "officialRef": "PCAT-31-0x Block 2.2: The Code Refactoring Loop",
        "tags": ["preparatory-refactoring", "opportunistic-refactoring", "workflow"]
    },
    {
        "id": "pcat-2-039",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Intermediate",
        "question": "What role does 'Cyclomatic Complexity' play when identifying candidates for refactoring?",
        "codeSnippet": "# Measuring complexity with radon:\n# def complex_decision_tree():  # Cyclomatic Complexity = 24 (Grade F - Urgent Refactor!)\n#     if a:\n#         for x in y:\n#             if b or c: ...",
        "options": [
            "It measures the number of bicycle components in an IoT application",
            "It is a quantitative metric measuring the number of linearly independent paths through code, identifying overly complex, nested functions that are difficult to test and maintain",
            "It counts the number of lines of comments in Python files",
            "It calculates CPU clock cycles required to run pytest"
        ],
        "correctAnswer": 1,
        "explanation": "Cyclomatic complexity (Thomas McCabe) counts decision points (if, while, for, except) in code. Functions with high complexity (>10) have too many paths, making them error-prone and hard to test.",
        "officialRef": "PCAT-31-0x Block 2.2: Code Smells and Metrics",
        "tags": ["cyclomatic-complexity", "metrics", "radon"]
    },
    {
        "id": "pcat-2-040",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Beginner",
        "question": "What is the primary indicator that a refactoring step was completely successful?",
        "codeSnippet": "# Verification step:\n$ pytest\n# Result: All 500 pre-existing tests pass with zero assertion failures,\n# AND the code is demonstrably cleaner, more readable, and easier to understand.",
        "options": [
            "The file size of the Python script was reduced by exactly 50%",
            "All existing automated tests pass without modification, and code readability/maintainability has improved without changing observable behavior",
            "The developer earned a badge on GitHub",
            "The code has zero functions"
        ],
        "correctAnswer": 1,
        "explanation": "A successful refactoring produces cleaner, more maintainable code while all pre-existing tests pass, proving that external behavior has been preserved without regressions.",
        "officialRef": "PCAT-31-0x Block 2.2: The Code Refactoring Loop",
        "tags": ["refactoring-success", "verification", "clean-code"]
    }
])

# Save Part 1 (Cards 1-50)
write_ts_file("src/data/pcatSection2CardsPart1.ts", "pcatSection2CardsPart1", cards[:50])
print("Wrote pcatSection2CardsPart1.ts (50 cards).")

# --- CHAPTER 2.3: AAA Pattern & CHAPTER 2.4/2.5: DRY & KISS (Cards 51-100) ---
part2_cards = []

part2_cards.extend([
    {
        "id": "pcat-2-041",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Beginner",
        "question": "What do the three letters in the 'AAA' testing pattern represent?",
        "codeSnippet": "def test_calculate_interest():\n    # Arrange\n    account = SavingsAccount(balance=1000, rate=0.05)\n    # Act\n    earned = account.calculate_annual_interest()\n    # Assert\n    assert earned == 50.0",
        "options": [
            "Analyze, Allocate, Assemble",
            "Arrange, Act, Assert",
            "Authenticate, Authorize, Audit",
            "Automate, Aggregate, Archive"
        ],
        "correctAnswer": 1,
        "explanation": "The AAA pattern structures test methods into three distinct, readable phases: Arrange (setup), Act (execute), and Assert (verify outcomes).",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["aaa-pattern", "arrange-act-assert", "test-structure"]
    },
    {
        "id": "pcat-2-042",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Beginner",
        "question": "What activities belong strictly in the 'Arrange' phase of the AAA pattern?",
        "codeSnippet": "# Section of test case:\n# - Creating object instances\n# - Initializing input data parameters\n# - Configuring mock return values or database fixtures",
        "options": [
            "Setting up all preconditions, test data, mocks, and system state necessary for the test to execute",
            "Invoking the primary function being tested",
            "Asserting that the return value equals 42",
            "Tearing down temporary files from the disk"
        ],
        "correctAnswer": 0,
        "explanation": "The Arrange phase establishes the world: instantiating objects, preparing input variables, configuring test doubles (mocks/stubs), and setting up initial state.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["arrange", "setup", "aaa-pattern"]
    },
    {
        "id": "pcat-2-043",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Beginner",
        "question": "What occurs in the 'Act' phase of the AAA pattern?",
        "codeSnippet": "# Identifying the Act phase:\ndef test_withdraw_funds():\n    account = BankAccount(balance=100)\n    success = account.withdraw(40)  # <--- THIS STEP\n    assert success is True\n    assert account.balance == 60",
        "options": [
            "Setting up fake mock responses",
            "Invoking the specific method, function, or action under test with the arranged inputs",
            "Evaluating assertions with assert statements",
            "Reading configuration files from disk"
        ],
        "correctAnswer": 1,
        "explanation": "The Act phase exercises the unit under test by invoking the specific target function or method, capturing its return value or resulting state change.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["act", "execution", "aaa-pattern"]
    },
    {
        "id": "pcat-2-044",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Beginner",
        "question": "What is the purpose of the 'Assert' phase in the AAA pattern?",
        "codeSnippet": "# Identifying the Assert phase:\ndef test_user_activation():\n    user = User(is_active=False)\n    user.activate()\n    assert user.is_active is True  # <--- THIS STEP",
        "options": [
            "To instantiate new objects",
            "To verify that the action produced the expected outcomes, return values, state changes, or raised expected exceptions",
            "To delete database tables",
            "To send emails to the QA manager"
        ],
        "correctAnswer": 1,
        "explanation": "The Assert phase verifies that the expected conditions hold true: comparing actual results with expected results, checking mock calls, or verifying state modifications.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["assert", "verification", "aaa-pattern"]
    },
    {
        "id": "pcat-2-045",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "Why is having multiple interleaved Act and Assert steps inside a single unit test considered an anti-pattern?",
        "codeSnippet": "# Anti-pattern: Act-Assert-Act-Assert-Act-Assert\ndef test_cart_operations():\n    cart = Cart()\n    cart.add('Apple')\n    assert len(cart) == 1\n    cart.add('Banana')\n    assert len(cart) == 2\n    cart.remove('Apple')\n    assert len(cart) == 1\n    cart.clear()\n    assert len(cart) == 0",
        "options": [
            "It turns a unit test into a complex multi-scenario integration workflow; if an early assert fails, downstream actions are skipped, masking other defects and confusing root-cause analysis",
            "Python unittest limits each method to exactly one assert",
            "It causes memory leaks in the test runner",
            "Multiple asserts cause pytest to run in reverse order"
        ],
        "correctAnswer": 0,
        "explanation": "A unit test should test a single concept or transition. Multiple Act-Assert chains create monolithic tests where a failure in step 1 hides whether steps 2 and 3 would pass, degrading defect localization.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["aaa-anti-patterns", "single-concept", "test-design"]
    },
    {
        "id": "pcat-2-046",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "What is the 'Four-Phase Test' pattern (Meszaros) and how does it relate to the AAA pattern?",
        "codeSnippet": "# Four-Phase Test structure:\n# Phase 1: Setup    (Arrange)\n# Phase 2: Exercise (Act)\n# Phase 3: Verify   (Assert)\n# Phase 4: Teardown (Cleanup)",
        "options": [
            "It adds an explicit fourth phase: 'Teardown' (or Cleanup) to guarantee that any external resources (files, sockets, DB records) are restored",
            "It replaces the Act phase with two separate sub-acts",
            "It requires four independent developers to author each test",
            "It only applies to four-wheeled vehicle simulation software"
        ],
        "correctAnswer": 0,
        "explanation": "The Four-Phase Test pattern is equivalent to AAA with an explicit fourth phase: Setup, Exercise, Verify, and Teardown. Teardown ensures test isolation by restoring the environment.",
        "officialRef": "PCAT-31-0x Block 2.3: Four-Phase Test Pattern",
        "tags": ["four-phase-test", "teardown", "aaa-pattern"]
    },
    {
        "id": "pcat-2-047",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "How should visual formatting be used to enhance the readability of the AAA pattern in Python test methods?",
        "codeSnippet": "def test_publish_article():\n    # Blank lines visually separating the 3 distinct phases:\n    author = Author(name='Elena')\n    article = Article(title='PCAT Prep', author=author)\n\n    article.publish()\n\n    assert article.status == 'PUBLISHED'\n    assert article.published_at is not None",
        "options": [
            "By writing the entire test on one continuous single line",
            "By using blank lines (or explicit # Arrange, # Act, # Assert comments) to create clear visual separation between the three phases",
            "By wrapping each phase in a separate try-except block",
            "By naming variables with Roman numerals"
        ],
        "correctAnswer": 1,
        "explanation": "Separating the Arrange, Act, and Assert phases with blank lines creates an intuitive visual rhythm, allowing code reviewers and developers to scan and understand test mechanics instantly.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["visual-separation", "readability", "aaa-pattern"]
    },
    {
        "id": "pcat-2-048",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "In the AAA pattern, what is the best practice regarding the number of actions in the 'Act' phase?",
        "codeSnippet": "# Best Practice:\n# Exactly ONE primary action (method invocation or operation) under test.",
        "options": [
            "As many actions as possible to save computer processing power",
            "Ideally a single, focused action or invocation that represents the specific behavior being verified",
            "Zero actions; tests should only verify static attributes",
            "At least ten actions per test method"
        ],
        "correctAnswer": 1,
        "explanation": "The Act phase should be concise and focused: ideally a single line invoking the method or function under test. If you are doing multiple actions, you are likely testing multiple behaviors.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["act-phase", "single-action", "best-practices"]
    },
    {
        "id": "pcat-2-049",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "How is testing an expected exception structured within the AAA pattern in pytest?",
        "codeSnippet": "def test_invalid_email_raises_error():\n    # Arrange\n    invalid_email = 'user-at-domain'\n    \n    # Act & Assert combined cleanly via pytest.raises context manager\n    with pytest.raises(ValueError, match='Invalid email'):\n        User(email=invalid_email)",
        "options": [
            "By using an empty try-except block that passes silently",
            "By wrapping the Act inside an assert context manager (e.g., `with pytest.raises(ExpectedException):` or `self.assertRaises(...)`) which acts as the assertion",
            "Exceptions cannot be tested in the AAA pattern",
            "By letting the test crash the test runner"
        ],
        "correctAnswer": 1,
        "explanation": "When testing exceptions, the Act and Assert phases merge into a context manager (`pytest.raises` or `self.assertRaises`), which asserts that executing the action raises the expected exception.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["exceptions", "pytest-raises", "aaa-pattern"]
    },
    {
        "id": "pcat-2-050",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "What is the 'Over-Arranged Test' anti-pattern?",
        "codeSnippet": "# Test has 80 lines of complex database fixtures, mock wiring, and helper setups,\n# just to test a simple boolean helper function that calculates a discount!",
        "options": [
            "A test where the Arrange phase is excessively large, brittle, and complicated, often indicating tight coupling or poor design in the class under test",
            "A test with too many alphabetical characters in variable names",
            "A test that arranges files on the operating system desktop",
            "A test that runs before all other tests"
        ],
        "correctAnswer": 0,
        "explanation": "If a unit test requires 50+ lines of setup (over-arranged), the class under test has too many dependencies, violates SRP, or the test is reaching across multiple architectural layers.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["over-arranged", "anti-patterns", "coupling"]
    },
    {
        "id": "pcat-2-051",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Beginner",
        "question": "What does the DRY principle stand for in software engineering?",
        "codeSnippet": "# Core engineering principle:\n# 'Don't Repeat Yourself' - Every piece of knowledge must have a single, unambiguous, authoritative representation.",
        "options": [
            "Deploy Regularly Yearly",
            "Don't Repeat Yourself",
            "Data Recovery Yield",
            "Dynamic Runtime Yield"
        ],
        "correctAnswer": 1,
        "explanation": "DRY stands for 'Don't Repeat Yourself' (The Pragmatic Programmer). It mandates that duplication of logic, knowledge, and business rules should be eliminated.",
        "officialRef": "PCAT-31-0x Block 2.4: The DRY Principle",
        "tags": ["dry", "clean-code", "principles"]
    },
    {
        "id": "pcat-2-052",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "How does applying the DRY principle to test code differ subtly from applying it to production code (DRY vs DAMP)?",
        "codeSnippet": "# DAMP: Descriptive And Meaningful Phrases in tests:\n# Sometimes repeating small data setups inline is preferred over hiding setup behind\n# 5 layers of abstract inheritance, so the test remains self-contained and readable.",
        "options": [
            "Test code must never share any helper functions or fixtures",
            "While production code strictly avoids duplication (DRY), test code prioritizes readability and self-containment (DAMP: Descriptive And Meaningful Phrases) over aggressive deduplication",
            "DRY only applies to HTML files",
            "Test code must have 100% duplicated statements"
        ],
        "correctAnswer": 1,
        "explanation": "In tests, extreme DRY can obscure test intent by scattering setup across abstract base classes. Test suites balance DRY with DAMP (Descriptive And Meaningful Phrases) so tests tell a clear, self-contained story.",
        "officialRef": "PCAT-31-0x Block 2.4: DRY vs DAMP in Testing",
        "tags": ["dry-vs-damp", "test-readability", "principles"]
    },
    {
        "id": "pcat-2-053",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "What is the recommended refactoring when multiple test methods in a file repeat the exact same 10 lines of complex object setup?",
        "codeSnippet": "# Duplicated setup across 15 test functions:\n# user = create_user_with_wallet_and_card()\n# cart = populate_cart_with_sample_items(user)\n# ...\n# How to refactor?",
        "options": [
            "Copy-paste the lines into 15 more tests",
            "Extract the common setup into a reusable fixture (e.g. pytest `@pytest.fixture` or `setUp()` method in unittest)",
            "Combine all 15 tests into one giant test function",
            "Disable all assertions in the tests"
        ],
        "correctAnswer": 1,
        "explanation": "Extracting repeated setup logic into a shared test fixture (`@pytest.fixture` or `setUp()`) applies DRY cleanly, ensuring bug fixes or schema updates to setup happen in only one place.",
        "officialRef": "PCAT-31-0x Block 2.4: Refactoring Test Duplication",
        "tags": ["dry", "fixtures", "refactoring"]
    },
    {
        "id": "pcat-2-054",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "What is 'Accidental Duplication' (Coincidental Duplication) and why should developers avoid refactoring it prematurely?",
        "codeSnippet": "# Class CustomerAccount: has tax_rate = 0.08\n# Class ShippingTruck:    has safety_margin = 0.08\n# Both have the value 0.08 today, but represent totally different business concepts!",
        "options": [
            "Two pieces of code look similar or share a value by coincidence, but represent distinct domain concepts that will evolve independently; unifying them creates harmful tight coupling",
            "A duplicate key in a Python dictionary",
            "Accidentally pressing Ctrl+V twice in VS Code",
            "Creating two git branches with identical names"
        ],
        "correctAnswer": 0,
        "explanation": "Duplication is only true technical debt if both pieces of code change for the same business reason. Unifying unrelated code just because it looks similar introduces artificial coupling.",
        "officialRef": "PCAT-31-0x Block 2.4: The DRY Principle",
        "tags": ["accidental-duplication", "coupling", "dry-nuances"]
    },
    {
        "id": "pcat-2-055",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "How does using `@pytest.mark.parametrize` apply the DRY principle to test suites?",
        "codeSnippet": "# Before DRY:\ndef test_eval_zero(): assert evaluate(0) == 'ZERO'\ndef test_eval_pos():  assert evaluate(5) == 'POS'\ndef test_eval_neg():  assert evaluate(-3) == 'NEG'\n\n# After DRY:\n@pytest.mark.parametrize('val, expected', [(0, 'ZERO'), (5, 'POS'), (-3, 'NEG')])\ndef test_eval(val, expected): assert evaluate(val) == expected",
        "options": [
            "It eliminates duplicated test method scaffolding by running the exact same test logic over multiple sets of inputs and expected outputs",
            "It automatically generates randomized numbers",
            "It deletes failing test runs",
            "It speeds up execution by skipping asserts"
        ],
        "correctAnswer": 0,
        "explanation": "Parametrization deduplicates test execution logic. Instead of writing multiple nearly identical test functions, one test definition executes against a table of inputs and expected outcomes.",
        "officialRef": "PCAT-31-0x Block 2.4: The DRY Principle in Testing",
        "tags": ["dry", "parametrization", "pytest"]
    },
    {
        "id": "pcat-2-056",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Beginner",
        "question": "What does the 'KISS' principle stand for?",
        "codeSnippet": "# Design principle:\n# Keep It Simple, Stupid - Simplicity should be a key goal in design, and unnecessary complexity should be avoided.",
        "options": [
            "Kernel Instruction System Security",
            "Keep It Simple, Stupid (or Keep It Simple and Straightforward)",
            "Known Interface State Synchronization",
            "Key Input Storage System"
        ],
        "correctAnswer": 1,
        "explanation": "KISS emphasizes that systems work best when kept simple rather than complicated. Developers should avoid clever, convoluted solutions when a simple, direct approach exists.",
        "officialRef": "PCAT-31-0x Block 2.5: The KISS Principle",
        "tags": ["kiss", "simplicity", "principles"]
    },
    {
        "id": "pcat-2-057",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Beginner",
        "question": "What does the 'YAGNI' principle stand for and advise against?",
        "codeSnippet": "# YAGNI: You Aren't Gonna Need It\n# Developer proposes building a generic multi-tenant plugin system with dynamic metaclass reflection\n# for an application that only needs to read a single CSV file today.",
        "options": [
            "You Aren't Gonna Need It: Avoid adding speculative functionality or complex abstractions until they are actually required by current real needs",
            "Yield All Global Network Inputs",
            "Your Architecture Generates New Interfaces",
            "You Always Gain New Insights"
        ],
        "correctAnswer": 0,
        "explanation": "YAGNI ('You Aren't Gonna Need It') advises developers never to write code, abstractions, or features based on speculative future requirements. Implement only what is needed today.",
        "officialRef": "PCAT-31-0x Block 2.5: KISS, YAGNI, and Clean Code",
        "tags": ["yagni", "kiss", "principles"]
    },
    {
        "id": "pcat-2-058",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Intermediate",
        "question": "Which code snippet best exemplifies the KISS principle in Python?",
        "codeSnippet": "# Option A:\ndef is_even(n):\n    return n % 2 == 0\n\n# Option B:\ndef is_even(n):\n    return bool(not (int(bin(n)[-1]) ^ 0) if isinstance(n, int) else (lambda x: False)(n))",
        "options": [
            "Option B because it uses advanced bitwise manipulation and lambdas",
            "Option A because it is straightforward, readable, self-explanatory, and free of gratuitous cleverness",
            "Both are equally aligned with KISS",
            "Neither, is_even should use a recursive neural network"
        ],
        "correctAnswer": 1,
        "explanation": "Option A is simple, readable, and idiomatic Python. Option B is overly complex 'clever' code that is hard to read, debug, and maintain, directly violating KISS.",
        "officialRef": "PCAT-31-0x Block 2.5: The KISS Principle",
        "tags": ["kiss", "code-readability", "pythonic"]
    },
    {
        "id": "pcat-2-059",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Intermediate",
        "question": "According to Clean Code best practices, what makes a function name good and self-documenting?",
        "codeSnippet": "# Compare:\n# Name 1: def fn(x, y): ...\n# Name 2: def calculate_monthly_compound_interest(principal, annual_rate): ...",
        "options": [
            "It is as short as possible to minimize keyboard strokes",
            "It clearly and unambiguously describes the function's intent, purpose, and side-effects in domain terminology without needing explanatory comments",
            "It starts with three underscores",
            "It contains the developer's initials"
        ],
        "correctAnswer": 1,
        "explanation": "Good names reveal intent. A self-documenting function name describes what it does clearly, making code readable like prose and reducing the need for maintenance-heavy comments.",
        "officialRef": "PCAT-31-0x Block 2.5: KISS, YAGNI, and Clean Code",
        "tags": ["naming-conventions", "clean-code", "self-documenting"]
    },
    {
        "id": "pcat-2-060",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Intermediate",
        "question": "What is the 'Single Responsibility Principle' (SRP) and how does it relate to refactoring and testability?",
        "codeSnippet": "# SRP Definition: A class or function should have one, and only one, reason to change.",
        "options": [
            "Each developer on the team is only allowed to edit one file per sprint",
            "A module, class, or function should be responsible for only one single part of the software's functionality, making it easy to understand, test in isolation, and refactor safely",
            "Only one test can run at any given moment",
            "A Python script can only import one library"
        ],
        "correctAnswer": 1,
        "explanation": "SRP states that a unit should have only one reason to change. Units with a single responsibility are simple (KISS), highly cohesive, easy to unit test, and easy to refactor.",
        "officialRef": "PCAT-31-0x Block 2.5: SOLID Principles & Clean Code",
        "tags": ["srp", "single-responsibility", "testability"]
    },
    {
        "id": "pcat-2-061",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "What is the danger of 'Over-Abstracted Tests' resulting from an overzealous application of DRY?",
        "codeSnippet": "# Test inherits from BaseTest, which inherits from AbstractServiceTest,\n# which uses 12 magic fixture helpers defined in 4 separate modules.\n# When test_login fails on line 42, no developer can figure out what data is being tested!",
        "options": [
            "Tests become impenetrable jigsaw puzzles where the test logic is obscured across multiple helper classes, making failures hard to debug",
            "Python will run out of call stack space",
            "Code coverage drops to zero",
            "Git commits take longer to compress"
        ],
        "correctAnswer": 0,
        "explanation": "Over-abstracted tests hide essential setup and assertion details behind deep hierarchies. When a test fails, developers must navigate multiple files just to understand what was being tested.",
        "officialRef": "PCAT-31-0x Block 2.4: The DRY Principle in Testing",
        "tags": ["over-abstraction", "dry-anti-patterns", "damp"]
    },
    {
        "id": "pcat-2-062",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "In pytest, how can a common assertion pattern (e.g., verifying a REST response status code and JSON schema) be kept DRY without obscuring test flow?",
        "codeSnippet": "# Custom assertion helper function:\ndef assert_valid_user_response(response, expected_username):\n    assert response.status_code == 200\n    data = response.json()\n    assert data['username'] == expected_username\n    assert 'created_at' in data",
        "options": [
            "By writing a clear, reusable assertion helper function that encapsulates the repetitive checks with meaningful failure messages",
            "By monkey-patching the built-in assert keyword",
            "By ignoring JSON schemas during testing",
            "By using global variables in pytest"
        ],
        "correctAnswer": 0,
        "explanation": "Creating helper assertion functions encapsulates multi-line verification logic while keeping test bodies clean, readable, and DRY.",
        "officialRef": "PCAT-31-0x Block 2.4: Refactoring Test Duplication",
        "tags": ["assertion-helpers", "dry", "pytest"]
    },
    {
        "id": "pcat-2-063",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Intermediate",
        "question": "What is the 'Zen of Python' (PEP 20) philosophy regarding simplicity and readability?",
        "codeSnippet": ">>> import this\n# 'Simple is better than complex.'\n# 'Complex is better than complicated.'\n# 'Readability counts.'\n# 'Flat is better than nested.'",
        "options": [
            "Code should always be written in the shortest number of characters possible",
            "Python values simplicity, explicitness, readability, and flat structures over clever, obfuscated, or overly nested abstractions",
            "Only object-oriented designs are permitted in Python",
            "Comments are strictly forbidden"
        ],
        "correctAnswer": 1,
        "explanation": "PEP 20 embodies the KISS philosophy: 'Simple is better than complex', 'Readability counts', and 'Explicit is better than implicit' are core Python design tenets.",
        "officialRef": "PCAT-31-0x Block 2.5: The KISS Principle and Pythonic Code",
        "tags": ["pep-20", "zen-of-python", "kiss", "readability"]
    },
    {
        "id": "pcat-2-064",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Intermediate",
        "question": "Why should boolean flag arguments in function signatures (e.g. `def process(user, is_admin=False, send_email=True)`) be refactored?",
        "codeSnippet": "# Call site confusion:\nprocess(user, True, False)  # What do True and False mean here without looking up the definition?",
        "options": [
            "Booleans use too much RAM in Python",
            "Flag arguments usually indicate that the function does more than one thing, violating SRP and reducing call-site readability",
            "Python does not support default arguments",
            "Booleans cause syntax errors when passed to functions"
        ],
        "correctAnswer": 1,
        "explanation": "Boolean flags often signal that a function has two different execution paths (doing more than one thing). Splitting into two distinct functions (e.g. `process_admin(user)` vs `process_user(user)`) improves clarity.",
        "officialRef": "PCAT-31-0x Block 2.5: Clean Code Best Practices",
        "tags": ["flag-arguments", "clean-code", "refactoring"]
    },
    {
        "id": "pcat-2-065",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Beginner",
        "question": "What is a 'Magic String' and how should it be refactored?",
        "codeSnippet": "# Before:\nif user.role == 'ADM_LVL_9': ...\nelif user.role == 'ADM_LVL_5': ...\n\n# How to refactor?",
        "options": [
            "Use an `Enum` or string constant (e.g., `UserRole.SUPER_ADMIN`) to provide a single, type-safe, and self-documenting reference",
            "Convert the strings to binary numbers",
            "Use ROT13 encryption on all strings",
            "Write the strings in all lowercase"
        ],
        "correctAnswer": 0,
        "explanation": "Magic strings are hardcoded literals scattered across code. Refactoring them to an `enum.Enum` or named constants prevents typo-induced bugs and makes refactoring effortless.",
        "officialRef": "PCAT-31-0x Block 2.5: Clean Code Best Practices",
        "tags": ["magic-strings", "enums", "refactoring"]
    },
    {
        "id": "pcat-2-066",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Intermediate",
        "question": "What is 'Premature Optimization' and why does Donald Knuth famously call it 'the root of all evil'?",
        "codeSnippet": "# Writing complex low-level bitwise caching before profiling to see if the function is even a bottleneck:\n# Result: 3 days spent making code unreadable for a 0.001ms improvement in an infrequently called script.",
        "options": [
            "Optimizing code before measuring where bottlenecks actually exist, complicating code structure and introducing bugs for negligible performance gains",
            "Running Python tests in the morning before breakfast",
            "Using Python 3 instead of Python 2",
            "Compiling Python code with -O flags"
        ],
        "correctAnswer": 0,
        "explanation": "Premature optimization adds unnecessary complexity (violating KISS and YAGNI) before profiling proves an actual performance problem exists. Write clean code first; profile and optimize only where necessary.",
        "officialRef": "PCAT-31-0x Block 2.5: KISS, YAGNI, and Clean Code",
        "tags": ["premature-optimization", "knuth", "kiss"]
    },
    {
        "id": "pcat-2-067",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "In the AAA pattern, what is the best practice when writing assertion statements?",
        "codeSnippet": "# Best Practice:\n# Assertions should be specific, informative, and assert on business value or state,\n# providing custom messages when necessary.",
        "options": [
            "Use a single `assert True` to ensure the test always passes",
            "Assert specific values and states directly, avoiding complex conditionals or logic inside the assertion itself",
            "Call other test methods inside the assert statement",
            "Wrap assertions inside infinite while loops"
        ],
        "correctAnswer": 1,
        "explanation": "Assertions should be direct and simple: `assert result == expected`. Avoid putting complex logic or loops inside assert statements, which can obscure why an assertion failed.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["assert-best-practices", "assertions", "test-design"]
    },
    {
        "id": "pcat-2-068",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "How can the 'Object Mother' (or Factory) pattern help keep test setup DRY while maintaining readable variations?",
        "codeSnippet": "# Test Data Factory:\nclass UserFactory:\n    @staticmethod\n    def create_admin(name='Admin', email='admin@test.com'):\n        return User(name=name, email=email, role=UserRole.ADMIN)\n    \n    @staticmethod\n    def create_standard_user(name='Alice'):\n        return User(name=name, email='alice@test.com', role=UserRole.MEMBER)",
        "options": [
            "It centralizes default test object construction with sensible defaults, while allowing individual tests to customize only fields relevant to their scenario",
            "It generates random passwords using AI",
            "It deletes old users from the operating system",
            "It converts Python classes into C++ structs"
        ],
        "correctAnswer": 0,
        "explanation": "The Object Mother / Factory pattern provides factory methods that create domain objects with valid default state, removing boilerplate setup from tests while keeping them readable.",
        "officialRef": "PCAT-31-0x Block 2.4: Refactoring Test Duplication",
        "tags": ["object-mother", "factory-pattern", "test-data"]
    },
    {
        "id": "pcat-2-069",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Beginner",
        "question": "Why should functions ideally have NO side effects unless that is their explicitly advertised purpose?",
        "codeSnippet": "# Unintended side effect:\ndef calculate_total(cart):\n    cart.items.clear()  # Mutates the input parameter unexpectedly!\n    return sum(item.price for item in cart.items)",
        "options": [
            "Side effects make functions unpredictable, hard to test in isolation, and prone to introducing subtle bugs when called multiple times",
            "Python forbids mutating lists inside functions",
            "Side effects prevent functions from returning values",
            "Functions with side effects cannot be executed on Linux"
        ],
        "correctAnswer": 0,
        "explanation": "Hidden side effects (such as mutating input arguments or global state) violate the principle of least astonishment, making code difficult to reason about and test reliably.",
        "officialRef": "PCAT-31-0x Block 2.5: Clean Code Best Practices",
        "tags": ["side-effects", "pure-functions", "testability"]
    },
    {
        "id": "pcat-2-070",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Intermediate",
        "question": "What is the 'Strangler Fig' application pattern in system-level refactoring?",
        "codeSnippet": "# Incremental migration:\n# An old legacy monolithic system is gradually replaced by intercepting calls\n# and routing them to a newly tested microservice until the old system is completely replaced.",
        "options": [
            "A botanical algorithm for tree pruning in bioinformatics",
            "An architectural refactoring pattern where an old system is gradually replaced by building new features around the edges until the new system completely supplants the old",
            "Deleting legacy code abruptly on the first day of a project",
            "A security attack vector on Python packages"
        ],
        "correctAnswer": 1,
        "explanation": "The Strangler Fig pattern allows teams to safely refactor legacy monoliths incrementally: routing traffic piece-by-piece to a new tested architecture until the legacy system can be safely decommissioned.",
        "officialRef": "PCAT-31-0x Block 2.2: Large-Scale Refactoring",
        "tags": ["strangler-fig", "architecture", "legacy-migration"]
    },
    {
        "id": "pcat-2-071",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "Which of the following test implementations correctly adheres to the AAA pattern without anti-patterns?",
        "codeSnippet": "# Reviewing implementation structure:",
        "options": [
            "def test_tax():\n    # Arrange\n    cart = Cart(items=[Item('Book', 20)])\n    # Act\n    tax = calculate_tax(cart, rate=0.10)\n    # Assert\n    assert tax == 2.0",
            "def test_tax():\n    assert calculate_tax(Cart([Item('Book', 20)]), 0.10) == calculate_tax(Cart([Item('Book', 20)]), 0.10)",
            "def test_tax():\n    tax = 2.0\n    assert tax == 2.0",
            "def test_tax():\n    for r in range(100):\n        cart = Cart([Item('Book', r)])\n        assert calculate_tax(cart, 0.1) == r * 0.1\n        cart.clear()\n        assert len(cart) == 0"
        ],
        "correctAnswer": 0,
        "explanation": "Option A cleanly arranges the cart and item, performs the single action (`calculate_tax`), and asserts the calculated value clearly and readably.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["aaa-examples", "best-practices", "code-structure"]
    },
    {
        "id": "pcat-2-072",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Beginner",
        "question": "What is a 'Single Source of Truth' (SSOT) and how does it relate to the DRY principle?",
        "codeSnippet": "# SSOT for Tax Rate:\n# Defined once in config.py: DEFAULT_TAX_RATE = 0.08\n# Imported everywhere, rather than hardcoding '0.08' in 25 different files.",
        "options": [
            "A centralized authoritative definition for every data element or business rule, ensuring that updates happen in one place and cannot fall out of sync",
            "A database that only contains one row",
            "A single developer who makes all technical decisions",
            "A single test that runs for the entire application"
        ],
        "correctAnswer": 0,
        "explanation": "Single Source of Truth (SSOT) is the architectural expression of DRY: structuring information so that every data element or business rule is mastered in one location.",
        "officialRef": "PCAT-31-0x Block 2.4: The DRY Principle",
        "tags": ["ssot", "single-source-of-truth", "dry"]
    },
    {
        "id": "pcat-2-073",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Intermediate",
        "question": "How does decomposing a 150-line function into three 15-line functions support the KISS principle?",
        "codeSnippet": "# Decomposing parse_transaction_file():\n# 1. read_lines_from_source(filepath)\n# 2. validate_and_parse_record(line)\n# 3. aggregate_account_balances(records)",
        "options": [
            "It increases execution speed by 10x",
            "Each smaller function has a clear, singular purpose that is easy to comprehend, reason about, unit test, and debug independently",
            "It eliminates the need for unit tests",
            "It converts Python code into bytecode macros"
        ],
        "correctAnswer": 1,
        "explanation": "Decomposition breaks complex problems into bite-sized, cohesive components. Each small function is simple to understand (KISS) and test in isolation.",
        "officialRef": "PCAT-31-0x Block 2.5: The KISS Principle",
        "tags": ["decomposition", "simplicity", "refactoring"]
    },
    {
        "id": "pcat-2-074",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Intermediate",
        "question": "What is the 'Command-Query Separation' (CQS) principle (Bertrand Meyer)?",
        "codeSnippet": "# CQS Rule:\n# - Commands: Change state, return nothing (void / None).\n# - Queries: Return data, do NOT alter observable state.",
        "options": [
            "Separating keyboard commands from mouse clicks",
            "A method should either be a command that performs an action (modifies state) or a query that returns data, but not both at the same time",
            "Separating SQL command queries from HTTP requests",
            "Writing commands in terminal bash shells only"
        ],
        "correctAnswer": 1,
        "explanation": "CQS states that asking a question (Query) should not change the answer (State). Methods that alter state (Commands) should not return business data, keeping functions predictable and testable.",
        "officialRef": "PCAT-31-0x Block 2.5: Clean Code Best Practices",
        "tags": ["cqs", "clean-code", "object-design"]
    },
    {
        "id": "pcat-2-075",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Beginner",
        "question": "What is the consequence of failing to isolate test preconditions during the 'Arrange' phase?",
        "codeSnippet": "# Test 1 inserts a user with email 'test@example.com' into the shared DB.\n# Test 2 tries to insert the same email and fails with UniqueConstraintViolation!",
        "options": [
            "Tests produce false failures due to cross-test pollution and dependency on shared leftover state",
            "Python will terminate execution with a syntax error",
            "The computer's hard drive will be reformatted",
            "Pytest will skip the second test automatically"
        ],
        "correctAnswer": 0,
        "explanation": "If the Arrange phase fails to clean up or isolate state, tests contaminate each other with leftover artifacts (cross-test pollution), leading to brittle and order-dependent test failures.",
        "officialRef": "PCAT-31-0x Block 2.3: The AAA Pattern in Automated Tests",
        "tags": ["test-pollution", "arrange", "isolation"]
    },
    {
        "id": "pcat-2-076",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Refactoring",
        "difficulty": "Intermediate",
        "question": "What is 'Characterization Testing' (Golden Master Testing) and when is it employed during refactoring?",
        "codeSnippet": "# Legacy system without tests:\n# 1. Run 10,000 existing real-world inputs through legacy black box.\n# 2. Record all actual outputs as baseline 'Golden Master'.\n# 3. Refactor code aggressively.\n# 4. Verify refactored code outputs match the Golden Master exactly.",
        "options": [
            "Testing Unicode character encoding in Python strings",
            "Writing tests to capture and preserve the current actual behavior of a legacy system before beginning refactoring, when no original tests exist",
            "Testing video game player characters",
            "Validating that variable names contain only ASCII characters"
        ],
        "correctAnswer": 1,
        "explanation": "Characterization tests (Michael Feathers) baseline how legacy code currently behaves (bugs and all), establishing a safety net so developers can safely refactor without breaking existing behavior.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Legacy Code",
        "tags": ["characterization-tests", "golden-master", "legacy-code"]
    },
    {
        "id": "pcat-2-077",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Clean Code",
        "difficulty": "Beginner",
        "question": "What is the recommended approach to comments in clean code?",
        "codeSnippet": "# Bad: Explaining WHAT code does (redundant with clean code)\n# i = i + 1  # Increment i by 1\n\n# Good: Explaining WHY code does something non-obvious\n# Workaround for upstream OpenSSL bug #1234 on ARM64 platforms",
        "options": [
            "Write a comment on every single line of Python code",
            "Express intent through clean, self-documenting code and clear naming; reserve comments for explaining 'WHY' an unusual decision was made, not 'WHAT' the code does",
            "Never write comments under any circumstances",
            "Write comments only in Latin"
        ],
        "correctAnswer": 1,
        "explanation": "Code should be clean and readable on its own. Good comments explain business rationale, trade-offs, or bug workarounds ('WHY'), rather than restating the obvious code logic ('WHAT').",
        "officialRef": "PCAT-31-0x Block 2.5: Clean Code Best Practices",
        "tags": ["comments", "clean-code", "best-practices"]
    },
    {
        "id": "pcat-2-078",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY Principle",
        "difficulty": "Intermediate",
        "question": "How can the 'Rule of Three' in refactoring guide when to apply the DRY principle?",
        "codeSnippet": "# Rule of Three guideline:\n# 1. The first time you do something, you just do it.\n# 2. The second time you do something similar, you wince at the duplication, but you do it anyway.\n# 3. The third time you do something similar, you refactor!",
        "options": [
            "Every function must have exactly three lines of code",
            "Postpone extracting a common abstraction until you encounter duplication for the third time, avoiding premature abstractions based on incomplete data",
            "Every test suite must run three times before deployment",
            "A test must have three assertions"
        ],
        "correctAnswer": 1,
        "explanation": "The Rule of Three (Martin Fowler) prevents premature abstraction: duplicating code twice is acceptable, but when you do it a third time, the common pattern is clear and ready to extract.",
        "officialRef": "PCAT-31-0x Block 2.4: The DRY Principle",
        "tags": ["rule-of-three", "refactoring-guidelines", "dry"]
    },
    {
        "id": "pcat-2-079",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Intermediate",
        "question": "What is 'Code Bloat' and how does it violate the KISS and YAGNI principles?",
        "codeSnippet": "# Code Bloat symptom:\n# Codebase grows to 200,000 lines with unused abstractions, speculative factory generators,\n# and dead utility wrappers for a simple todo list app.",
        "options": [
            "Unnecessary code expansion caused by overly complex design patterns, speculative features (violating YAGNI), and copy-pasted boilerplate, degrading performance and maintainability",
            "Compressing a Python file using zipfile",
            "A memory leak caused by unclosed sockets",
            "Uploading large media files to a git repository"
        ],
        "correctAnswer": 0,
        "explanation": "Code bloat occurs when code accumulates unnecessary complexity, speculative classes, and redundant layers, making the codebase slow to navigate, test, and maintain.",
        "officialRef": "PCAT-31-0x Block 2.5: KISS, YAGNI, and Clean Code",
        "tags": ["code-bloat", "kiss", "yagni"]
    },
    {
        "id": "pcat-2-080",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "In summary of Block 2, how do the AAA pattern, DRY, KISS, and refactoring collaborate to elevate software testing quality?",
        "codeSnippet": "# Quality synergy:\n# - AAA creates readable, structured tests\n# - DRY eliminates duplication while keeping tests DAMP\n# - KISS prevents over-engineering and keeps code simple\n# - Refactoring continuously improves architecture safely under the test safety net",
        "options": [
            "They replace automated testing tools with manual inspection",
            "They provide a cohesive engineering framework: AAA structures clear tests, DRY and KISS ensure maintainability and simplicity, and refactoring continuously enhances code quality under test protection",
            "They allow Python programs to run without an operating system",
            "They guarantee that tests will pass on all versions of Python"
        ],
        "correctAnswer": 1,
        "explanation": "Block 2 synthesizes software craftsmanship: structured tests (AAA), simplicity (KISS), maintainable deduplication (DRY), and continuous improvement (Refactoring loop) work together to produce robust code.",
        "officialRef": "PCAT-31-0x Block 2: Summary of Test Automation & Refactoring",
        "tags": ["block-2-summary", "craftsmanship", "clean-code"]
    }
])

# Save Part 2 (Cards 51-100)
write_ts_file("src/data/pcatSection2CardsPart2.ts", "pcatSection2CardsPart2", part2_cards)
print("Wrote pcatSection2CardsPart2.ts (50 cards).")

# Write Section 2 barrel file
barrel = (
    "import { Flashcard } from '../types';\n"
    "import { pcatSection2CardsPart1 } from './pcatSection2CardsPart1';\n"
    "import { pcatSection2CardsPart2 } from './pcatSection2CardsPart2';\n\n"
    "export const pcatSection2Flashcards: Flashcard[] = [\n"
    "  ...pcatSection2CardsPart1,\n"
    "  ...pcatSection2CardsPart2,\n"
    "];\n"
)
with open("src/data/pcatSection2Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel)

print("Block 2 complete: 100 cards written.")
