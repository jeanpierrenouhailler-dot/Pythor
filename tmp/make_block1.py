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

# --- CHAPTER 1.1: Software Testing Concepts & Terminology (Cards 1-20) ---
cards.extend([
    {
        "id": "pcat-1-001",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Beginner",
        "question": "What is the primary definition and core objective of software testing according to the PCAT-31-0x syllabus?",
        "codeSnippet": "# Automated test execution\ndef test_calculate_discount():\n    assert calculate_discount(100, 0.2) == 80.0\n    assert calculate_discount(50, 0.0) == 50.0",
        "options": [
            "Proving that the software is completely free of any flaws or vulnerabilities under all conditions",
            "Evaluating software by dynamic execution or static examination to identify defects and assess quality against specified requirements",
            "Replacing user acceptance trials with automated compiler type checks",
            "Ensuring code executes with the minimum possible CPU cycle count"
        ],
        "correctAnswer": 1,
        "explanation": "Software testing is the systematic process of evaluating a software item to detect differences between existing and required conditions (defects) and to evaluate its quality features. It cannot prove the total absence of defects.",
        "officialRef": "PCAT-31-0x Block 1.1: Software Testing Concepts and Terminology",
        "tags": ["testing-concepts", "quality", "fundamentals"]
    },
    {
        "id": "pcat-1-002",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Verification vs Validation",
        "difficulty": "Beginner",
        "question": "Which of the following questions accurately captures the purpose of software 'Verification'?",
        "codeSnippet": "# Verification activity:\n# Checking code against architectural design docs, coding standards (PEP 8), and functional specs.",
        "options": [
            "\"Are we building the right product?\"",
            "\"Are we building the product right?\"",
            "\"Will the customer pay for this feature?\"",
            "\"Can the application run on obsolete hardware?\""
        ],
        "correctAnswer": 1,
        "explanation": "Verification asks 'Are we building the product right?' — verifying conformance to specifications and standards. Validation asks 'Are we building the right product?' — ensuring it meets customer needs and expectations.",
        "officialRef": "PCAT-31-0x Block 1.1: Quality Assurance vs. Quality Control",
        "tags": ["verification", "validation", "qa-qc"]
    },
    {
        "id": "pcat-1-003",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Verification vs Validation",
        "difficulty": "Beginner",
        "question": "Which activity is a primary example of software 'Validation'?",
        "codeSnippet": "# Validation activity:\ndef test_checkout_workflow_with_real_users():\n    # Ensuring the end-to-end user journey meets genuine user needs in market conditions\n    pass",
        "options": [
            "Running flake8 linting to check code style rules",
            "Executing user acceptance testing (UAT) with real business stakeholders to verify business goals",
            "Inspecting the abstract syntax tree for variable declarations",
            "Measuring cyclomatic complexity using radon"
        ],
        "correctAnswer": 1,
        "explanation": "Validation confirms that the delivered product satisfies genuine customer requirements and operational needs in the intended real-world environment ('building the right product').",
        "officialRef": "PCAT-31-0x Block 1.1: Verification vs Validation",
        "tags": ["validation", "uat", "stakeholders"]
    },
    {
        "id": "pcat-1-004",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is the key differentiator between Static Testing and Dynamic Testing?",
        "codeSnippet": "# Technique A: Code inspection, review, and typing verification without launching Python\n# Technique B: Executing pytest test_suite.py against the compiled Python runtime",
        "options": [
            "Static testing executes code with sample inputs; dynamic testing only checks syntax",
            "Static testing evaluates code or documentation without code execution; dynamic testing requires running the software",
            "Dynamic testing is strictly manual; static testing is always automated",
            "Static testing is only used for GUI applications; dynamic testing is used for backend APIs"
        ],
        "correctAnswer": 1,
        "explanation": "Static testing examines artifacts (code, requirements, architecture) without executing the program (e.g., code reviews, linters, mypy). Dynamic testing requires executing the program on a machine with test inputs.",
        "officialRef": "PCAT-31-0x Block 1.1: Static vs Dynamic Testing",
        "tags": ["static-testing", "dynamic-testing", "analysis"]
    },
    {
        "id": "pcat-1-005",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "QA vs QC",
        "difficulty": "Intermediate",
        "question": "How does Quality Assurance (QA) differ from Quality Control (QC)?",
        "codeSnippet": "# Activity 1: Defining peer review standards, CI/CD gates, and TDD team guidelines.\n# Activity 2: Running automated regression suites to find defects in the latest release candidate.",
        "options": [
            "QA is product-oriented and focuses on finding bugs; QC is process-oriented and focuses on prevention",
            "QA is process-oriented and focuses on defect prevention; QC is product-oriented and focuses on defect detection",
            "QA and QC are synonymous terms in automated testing",
            "QC is performed only after software deployment in production"
        ],
        "correctAnswer": 1,
        "explanation": "QA is proactive and process-oriented: improving and standardizing development processes to prevent defects. QC is reactive and product-oriented: inspecting and testing the product to detect defects before release.",
        "officialRef": "PCAT-31-0x Block 1.1: Quality Assurance vs. Quality Control",
        "tags": ["qa", "qc", "process-quality"]
    },
    {
        "id": "pcat-1-006",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is Black-Box Testing (Specification-Based Testing)?",
        "codeSnippet": "# Tester perspective:\ndef test_auth_service(credentials):\n    # Tester tests inputs and expected outputs without looking at internal Python implementation\n    response = auth_service.login(credentials)\n    assert response.status == 'SUCCESS'",
        "options": [
            "Testing software with complete access to source code, branch execution paths, and memory addresses",
            "Testing functionality without knowledge of internal code structure, implementation paths, or system architecture",
            "Testing designed exclusively for dark-mode graphical user interfaces",
            "Testing conducted only when the software crashes with an unhandled exception"
        ],
        "correctAnswer": 1,
        "explanation": "Black-box testing focuses purely on inputs and expected outputs based on specifications, treating the internal code and architecture as an opaque black box.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Approaches",
        "tags": ["black-box", "specifications", "test-approaches"]
    },
    {
        "id": "pcat-1-007",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is White-Box Testing (Structural Testing)?",
        "codeSnippet": "# Tester analyzes branch coverage in Python logic:\ndef process_order(total, is_vip):\n    if is_vip:             # Branch 1\n        return total * 0.8\n    elif total > 100:      # Branch 2\n        return total * 0.9\n    return total           # Branch 3",
        "options": [
            "Testing that validates UI colors and font readability",
            "Testing based on analysis of the internal structure, control flow, decision paths, and source code of the component",
            "Testing performed exclusively by end users during beta releases",
            "Testing without documentation or functional specifications"
        ],
        "correctAnswer": 1,
        "explanation": "White-box testing (clear-box, glass-box, or structural testing) examines internal paths, conditions, loops, and data structures to ensure code paths are thoroughly executed.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Approaches",
        "tags": ["white-box", "structural-testing", "code-paths"]
    },
    {
        "id": "pcat-1-008",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What characterizes Grey-Box Testing in automated Python testing?",
        "codeSnippet": "# Tester has knowledge of database schema and internal data models,\n# but tests the application primarily through external REST API endpoints.",
        "options": [
            "Testing performed when code is half-written or syntax is partially invalid",
            "Testing combining black-box exterior interface tests with partial knowledge of internal algorithms, schemas, or data structures",
            "Testing performed during night-time scheduled batch jobs only",
            "Testing restricted to deprecation warnings in third-party libraries"
        ],
        "correctAnswer": 1,
        "explanation": "Grey-box testing leverages knowledge of internal data structures, algorithms, or database schemas to design effective tests while exercising the system through external interfaces.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Approaches",
        "tags": ["grey-box", "hybrid-testing", "api"]
    },
    {
        "id": "pcat-1-009",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Quality Attributes",
        "difficulty": "Beginner",
        "question": "According to ISO/IEC 25010 and testing standards, which quality characteristic measures the degree to which a software system functions correctly under specified conditions for a defined period of time?",
        "codeSnippet": "# Quality attribute measurement:\n# System must operate 99.99% without unexpected downtime or memory leakage.",
        "options": [
            "Portability",
            "Reliability",
            "Usability",
            "Modifiability"
        ],
        "correctAnswer": 1,
        "explanation": "Reliability is the degree to which a system performs specified functions under specified conditions for a specified period of time (including fault tolerance, recoverability, and availability).",
        "officialRef": "PCAT-31-0x Block 1.1: Quality Characteristics",
        "tags": ["quality-attributes", "reliability", "standards"]
    },
    {
        "id": "pcat-1-010",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Quality Attributes",
        "difficulty": "Intermediate",
        "question": "Which software quality attribute relates directly to how easily Python code can be modified, refactored, and adapted to changing requirements?",
        "codeSnippet": "# Evaluating code readability, modularity, and testability:\n# Functions are short, follow single responsibility, and have high unit test coverage.",
        "options": [
            "Maintainability",
            "Portability",
            "Efficiency",
            "Security"
        ],
        "correctAnswer": 0,
        "explanation": "Maintainability represents the degree of effectiveness and efficiency with which software can be modified by intended maintainers (including modularity, reusability, analyzability, and testability).",
        "officialRef": "PCAT-31-0x Block 1.1: Quality Characteristics",
        "tags": ["maintainability", "refactoring", "quality"]
    },
    {
        "id": "pcat-1-011",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Beginner",
        "question": "What is an 'Oracle' in the context of software testing?",
        "codeSnippet": "# Expected output definition:\ndef oracle_sqrt(n):\n    import math\n    return math.isqrt(n)\n\n# How does the test use this?",
        "options": [
            "A proprietary commercial relational database required for unit test execution",
            "A source or mechanism used to determine expected outcomes and verify actual test results against expected truth",
            "A Python decorator that skips test cases on Windows platforms",
            "A tool that compiles Python bytecode into machine instructions"
        ],
        "correctAnswer": 1,
        "explanation": "A test oracle is an authoritative source (specification, existing benchmark, mathematical formula, domain expert, or reference model) that determines whether a test passed or failed by providing expected results.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Terminology",
        "tags": ["oracle", "expected-results", "terminology"]
    },
    {
        "id": "pcat-1-012",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is the difference between a Test Case and a Test Suite in automated Python testing?",
        "codeSnippet": "import unittest\n\nclass TestMath(unittest.TestCase): # Contains test methods (Test Cases)\n    def test_add(self): ...\n    def test_sub(self): ...\n\nsuite = unittest.TestSuite()        # Aggregation of test cases",
        "options": [
            "A Test Case is written in C; a Test Suite is written in Python",
            "A Test Case specifies inputs, actions, and expected results for a specific scenario; a Test Suite is an aggregation of multiple test cases executed together",
            "A Test Suite can only contain manual tests; a Test Case is always automated",
            "A Test Case runs only on failure; a Test Suite runs only on success"
        ],
        "correctAnswer": 1,
        "explanation": "A test case is an individual set of preconditions, inputs, actions, and expected outcomes designed for a specific objective. A test suite is a collection of test cases or other suites grouped for execution.",
        "officialRef": "PCAT-31-0x Block 1.1: Test Artifacts",
        "tags": ["test-case", "test-suite", "xunit"]
    },
    {
        "id": "pcat-1-013",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is 'Non-Functional Testing' and what does it evaluate?",
        "codeSnippet": "# Measuring response time under heavy concurrent load:\ndef test_api_latency_under_load():\n    latencies = [measure_call() for _ in range(1000)]\n    assert max(latencies) < 0.200 # 200ms threshold",
        "options": [
            "Testing code that has zero functions or callable objects",
            "Testing attributes of a system such as performance, scalability, security, reliability, and usability rather than specific behavioral functions",
            "Testing that fails to compile due to syntax errors",
            "Informal testing without expected criteria"
        ],
        "correctAnswer": 1,
        "explanation": "Non-functional testing evaluates 'how well' the system operates (performance, load, stress, security, usability, maintainability) rather than 'what' specific business functions it performs.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Types",
        "tags": ["non-functional", "performance", "testing-types"]
    },
    {
        "id": "pcat-1-014",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is 'Regression Testing'?",
        "codeSnippet": "# After refactoring billing_service.py:\n# Running existing test suite to ensure previous functionality remains intact.\n$ pytest tests/test_billing.py",
        "options": [
            "Testing performed to calculate statistical regression coefficients",
            "Re-running existing test cases against modified software to ensure that recent code changes have not introduced new defects into unchanged areas",
            "Testing only obsolete and deprecated functions before removing them",
            "Writing tests that deliberately fail to test error logging"
        ],
        "correctAnswer": 1,
        "explanation": "Regression testing verifies that recent modifications, bug fixes, or refactorings have not unintentionally degraded or broken existing, previously working capabilities.",
        "officialRef": "PCAT-31-0x Block 1.1: Regression Testing",
        "tags": ["regression-testing", "maintenance", "refactoring"]
    },
    {
        "id": "pcat-1-015",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Beginner",
        "question": "What is the distinction between 'Confirmation Testing' (Re-testing) and 'Regression Testing'?",
        "codeSnippet": "# Action 1: Re-running the exact failed test that reported Bug #104 after applying a patch.\n# Action 2: Running all 500 tests across the payment subsystem to verify no side effects.",
        "options": [
            "Confirmation testing checks if a specific defect fix succeeded; regression testing checks for unintended side-effects across unchanged code",
            "Confirmation testing tests the database; regression testing tests the user interface",
            "Confirmation testing is always automated; regression testing is strictly manual",
            "They are exact synonyms in modern software engineering"
        ],
        "correctAnswer": 0,
        "explanation": "Confirmation testing (re-testing) confirms that a specific reported bug has indeed been resolved. Regression testing verifies that the bug fix did not inadvertently break other parts of the application.",
        "officialRef": "PCAT-31-0x Block 1.1: Change-Related Testing",
        "tags": ["confirmation-testing", "retesting", "regression"]
    },
    {
        "id": "pcat-1-016",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is 'Smoke Testing' (Build Verification Testing)?",
        "codeSnippet": "# Automated build pipeline check:\ndef test_critical_path():\n    assert app.ping() == 200\n    assert db.is_connected() is True\n    assert auth.can_load_keys() is True",
        "options": [
            "Stress testing hardware until CPU components overheat",
            "A fast subset of critical tests executed on a new build to confirm its basic health before committing to deeper test cycles",
            "Testing application logging during catastrophic system crashes",
            "Testing third-party dependencies for licensing compliance"
        ],
        "correctAnswer": 1,
        "explanation": "Smoke testing is a brief, shallow suite of non-exhaustive tests verifying that the most vital functions of a build work. If a build fails smoke testing, deeper testing is halted.",
        "officialRef": "PCAT-31-0x Block 1.1: Smoke and Sanity Testing",
        "tags": ["smoke-testing", "build-verification", "ci-cd"]
    },
    {
        "id": "pcat-1-017",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is 'Sanity Testing' and when is it typically executed?",
        "codeSnippet": "# Quick targeted verification after receiving a minor hotfix in checkout_tax.py:\ndef test_tax_calculation_fixed_rate():\n    assert compute_tax(100, state='NY') == 8.875",
        "options": [
            "A psychological assessment of software developers before code reviews",
            "A targeted, focused verification performed after receiving a minor build or hotfix to confirm that a specific functionality or bug fix works as expected",
            "A full end-to-end regression run covering 100% of product features",
            "Static analysis testing for unused variable names in Python scripts"
        ],
        "correctAnswer": 1,
        "explanation": "Sanity testing is a focused, unscripted or lightweight verification to check if a specific bug fix or minor module change works rationally before proceeding with further integration.",
        "officialRef": "PCAT-31-0x Block 1.1: Smoke and Sanity Testing",
        "tags": ["sanity-testing", "hotfix", "verification"]
    },
    {
        "id": "pcat-1-018",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is 'Exploratory Testing' in software quality engineering?",
        "codeSnippet": "# Tester simultaneous learning, test design, and test execution:\n# No predefined test script; tester follows heuristics and system behavior dynamically.",
        "options": [
            "Random automated fuzzing with monkey scripts",
            "Simultaneous learning, test design, and test execution where the tester dynamically creates tests based on their evolving understanding of the system",
            "Running tests only on unreleased prototype hardware",
            "Automated test discovery using pytest --collect-only"
        ],
        "correctAnswer": 1,
        "explanation": "Exploratory testing is an active, human-centric approach where test design and execution happen concurrently, guided by the tester's domain knowledge, intuition, and observation of system reactions.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Approaches",
        "tags": ["exploratory-testing", "heuristics", "human-testing"]
    },
    {
        "id": "pcat-1-019",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Beginner",
        "question": "What is a 'Test Condition' according to testing terminology?",
        "codeSnippet": "# Requirement: User must be at least 18 years old to register.\n# Test Condition: Registration with age >= 18; Registration with age < 18.",
        "options": [
            "A hardware constraint such as available RAM during test execution",
            "An aspect or event of a component or system that can be verified by one or more test cases",
            "The specific conditional 'if' statement in Python bytecode",
            "The license agreement under which testing tools are distributed"
        ],
        "correctAnswer": 1,
        "explanation": "A test condition is an item or event (e.g., function, transaction, quality attribute, structural element) that can be verified by testing. One test condition can be addressed by multiple test cases.",
        "officialRef": "PCAT-31-0x Block 1.1: Testing Terminology",
        "tags": ["test-condition", "requirements", "traceability"]
    },
    {
        "id": "pcat-1-020",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Testing Concepts",
        "difficulty": "Intermediate",
        "question": "What is a 'Traceability Matrix' (Requirements Traceability Matrix - RTM) used for?",
        "codeSnippet": "# RTM Mapping Example:\n# Req-ID | Requirement Description  | Test Case ID | Status\n# REQ-01 | User Email Login         | TC-101, 102  | PASSED\n# REQ-02 | Password Reset Token Exp | TC-103       | PASSED",
        "options": [
            "A 2D array inside NumPy used for performance benchmark matrix operations",
            "A document or table linking user requirements directly to corresponding test cases, ensuring complete test coverage and change impact analysis",
            "A stack trace printed to stderr when an uncaught exception crashes Python",
            "A git commit history graph showing merge commits"
        ],
        "correctAnswer": 1,
        "explanation": "An RTM maps business/functional requirements to test cases bidirectionally. It verifies that all requirements have test coverage and identifies which tests must be re-run when requirements change.",
        "officialRef": "PCAT-31-0x Block 1.1: Test Documentation & Artifacts",
        "tags": ["rtm", "traceability", "requirements"]
    }
])

# --- CHAPTER 1.2: Levels of Testing (Cards 21-40) ---
cards.extend([
    {
        "id": "pcat-1-021",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Beginner",
        "question": "What is the primary target and scope of 'Unit Testing' in Python?",
        "codeSnippet": "def test_calculate_bmi():\n    # Testing a single pure Python function in complete isolation\n    result = calculate_bmi(70, 1.75)\n    assert round(result, 2) == 22.86",
        "options": [
            "The interaction between the Python server and the remote PostgreSQL database",
            "The smallest individually testable component, function, or class in isolation from external dependencies",
            "The visual layout of HTML templates rendered inside a browser",
            "The network latency of third-party payment gateways"
        ],
        "correctAnswer": 1,
        "explanation": "Unit testing focuses on verifying the smallest testable units of software (individual functions, methods, or classes) in isolation, ensuring each unit behaves correctly on its own.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["unit-testing", "isolation", "levels"]
    },
    {
        "id": "pcat-1-022",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is the primary objective of 'Integration Testing'?",
        "codeSnippet": "def test_order_repository_with_database(test_db_session):\n    # Testing the interaction between OrderRepository and the real SQL database layer\n    repo = OrderRepository(test_db_session)\n    repo.save(Order(id=1, total=50))\n    assert repo.find_by_id(1).total == 50",
        "options": [
            "Testing compiler warnings during wheel packaging",
            "Testing the interfaces, data exchange, and interactions between integrated units or subsystems",
            "Testing end-user satisfaction with marketing brochures",
            "Testing code formatting rules using black"
        ],
        "correctAnswer": 1,
        "explanation": "Integration testing verifies the communication, contract adherence, data exchange, and behavioral interactions between two or more integrated components or subsystems.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["integration-testing", "interfaces", "subsystems"]
    },
    {
        "id": "pcat-1-023",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "In integration testing strategies, what distinguishes 'Top-Down' integration from 'Bottom-Up' integration?",
        "codeSnippet": "# Strategy A: Testing high-level controller using 'Stubs' to simulate lower-level services.\n# Strategy B: Testing low-level utility functions first using 'Drivers' to invoke them.",
        "options": [
            "Top-down tests GUI down to DB using stubs; bottom-up tests base units up to GUI using test drivers",
            "Top-down uses pytest; bottom-up uses unittest",
            "Top-down tests only network sockets; bottom-up tests only CPU registers",
            "Top-down is strictly manual; bottom-up is strictly automated"
        ],
        "correctAnswer": 0,
        "explanation": "Top-down integration starts with top-level modules and uses 'stubs' to simulate unbuilt lower components. Bottom-up integration tests lowest-level foundation modules first and uses 'drivers' to invoke them.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["integration-strategies", "stubs", "drivers"]
    },
    {
        "id": "pcat-1-024",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is the major drawback of the 'Big Bang' integration testing approach?",
        "codeSnippet": "# Big Bang Approach:\n# Developers build all 20 modules independently, combine them all at once on Friday afternoon,\n# and run the test suite.",
        "options": [
            "It requires too many individual test stubs and drivers",
            "When failures occur, defect localization and root-cause isolation are extremely difficult due to multiple interacting components",
            "It cannot be run on Linux servers",
            "It forces all Python code to use static typing"
        ],
        "correctAnswer": 1,
        "explanation": "In Big Bang integration, all modules are combined simultaneously. When an error occurs, pinpointing which module or interface caused the fault is complex and time-consuming.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["big-bang", "integration-risks", "defect-localization"]
    },
    {
        "id": "pcat-1-025",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is the focus of 'System Testing' in the software testing hierarchy?",
        "codeSnippet": "# Testing the complete, integrated application end-to-end against business requirement specifications\n# Environment matches production staging with all services, databases, and background queues running.",
        "options": [
            "Verifying the internal memory layout of CPython C-structs",
            "Evaluating the behavior of the complete and fully integrated system against the specified requirements",
            "Checking syntax with ast.parse without running the code",
            "Validating whether Python packages can be uploaded to PyPI"
        ],
        "correctAnswer": 1,
        "explanation": "System testing evaluates the end-to-end behavior of the complete integrated product against specified functional and non-functional requirements in an environment simulating production.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["system-testing", "end-to-end", "requirements"]
    },
    {
        "id": "pcat-1-026",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Beginner",
        "question": "What is 'Acceptance Testing' (UAT - User Acceptance Testing)?",
        "codeSnippet": "# Business user workflow verification:\n# Stakeholder logs in, uploads monthly financial ledger, and signs off on generated tax report.",
        "options": [
            "Automated unit testing written by junior developers",
            "Formal testing conducted to determine whether a system satisfies its acceptance criteria and enables users to decide whether to accept the system for release",
            "Checking if a pull request has zero git merge conflicts",
            "Benchmarking network throughput between microservices"
        ],
        "correctAnswer": 1,
        "explanation": "Acceptance testing determines whether the system satisfies business requirements and acceptance criteria, empowering stakeholders and end-users to accept or reject delivery.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["acceptance-testing", "uat", "stakeholder-signoff"]
    },
    {
        "id": "pcat-1-027",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What distinguishes 'Alpha Testing' from 'Beta Testing'?",
        "codeSnippet": "# Scenario A: In-house internal team tests pre-release build at developer headquarters.\n# Scenario B: 5,000 real external customers run pre-release build in their own environments.",
        "options": [
            "Alpha testing is conducted by internal employees in a controlled developer environment; Beta testing is conducted by external real users in real-world environments",
            "Alpha testing is automated; Beta testing must never be automated",
            "Alpha testing tests the GUI; Beta testing tests the database",
            "Alpha testing occurs after general availability release; Beta testing occurs before design"
        ],
        "correctAnswer": 0,
        "explanation": "Alpha testing is performed by internal staff or potential users at the developer's site in a controlled setup. Beta testing is performed by external prospective customers at their own locations in real-world conditions.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["alpha-testing", "beta-testing", "acceptance"]
    },
    {
        "id": "pcat-1-028",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is 'Operational Acceptance Testing' (OAT)?",
        "codeSnippet": "# OAT test checklist:\n# 1. Automated database disaster recovery and failover verification.\n# 2. Backup and restore procedure timing.\n# 3. Log rotation and disk alerts verification.",
        "options": [
            "Testing mathematical operations like addition and matrix multiplication",
            "Acceptance testing performed by system administrators/operations to evaluate deployment, backup/restore, failover, disaster recovery, and maintenance procedures",
            "Testing that checks if developers have valid SSH keys",
            "User interface color contrast testing"
        ],
        "correctAnswer": 1,
        "explanation": "OAT validates the operational readiness of the software from a sysadmin / DevOps perspective, including failover, disaster recovery, backup/restore, monitoring, security, and maintenance tasks.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["oat", "devops", "operations"]
    },
    {
        "id": "pcat-1-029",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "In the V-Model lifecycle, which development phase corresponds directly to 'Unit Testing'?",
        "codeSnippet": "# V-Model symmetry:\n# Requirements Analysis    <---> Acceptance Testing\n# System Architecture      <---> System Testing\n# Subsystem Design         <---> Integration Testing\n# Component/Detailed Code  <---> ???",
        "options": [
            "Requirements Analysis",
            "Detailed Component Design and Implementation",
            "User Story Estimation",
            "Database Schema Migration"
        ],
        "correctAnswer": 1,
        "explanation": "In the classic V-Model, Unit Testing tests against Detailed Component Design and code implementation, verifying that individual modules fulfill their detailed technical specifications.",
        "officialRef": "PCAT-31-0x Block 1.2: Development Lifecycles and Levels",
        "tags": ["v-model", "unit-testing", "lifecycles"]
    },
    {
        "id": "pcat-1-030",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "In the V-Model lifecycle, which testing level corresponds directly to 'Requirements Analysis'?",
        "codeSnippet": "# Matching requirements with corresponding test verification level:",
        "options": [
            "Component Testing",
            "Acceptance Testing (UAT)",
            "Integration Testing",
            "Stress Testing"
        ],
        "correctAnswer": 1,
        "explanation": "Requirements Analysis defines what the customer needs. Acceptance Testing corresponds directly to this level, validating that user requirements are genuinely fulfilled.",
        "officialRef": "PCAT-31-0x Block 1.2: Development Lifecycles and Levels",
        "tags": ["v-model", "acceptance-testing", "requirements"]
    },
    {
        "id": "pcat-1-031",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "Why are unit tests significantly cheaper and faster to execute than system or end-to-end tests?",
        "codeSnippet": "# Unit test execution speed:\n# 500 unit tests: 0.42 seconds\n# 500 E2E tests: 45 minutes",
        "options": [
            "Unit tests skip assertion statements and always return pass",
            "Unit tests isolate logic in memory, eliminating external network, database, browser rendering, and filesystem I/O overhead",
            "Unit tests are compiled directly into GPU shaders",
            "System tests cannot be run concurrently"
        ],
        "correctAnswer": 1,
        "explanation": "Unit tests run entirely in-process against small isolated code units with mocked or stubbed dependencies, eliminating network latency, disk I/O, database initialization, and UI rendering.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["unit-testing", "speed", "test-pyramid"]
    },
    {
        "id": "pcat-1-032",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Beginner",
        "question": "What is a 'Test Driver' in integration testing?",
        "codeSnippet": "# Test driver invoking a low-level module:\ndef test_driver_for_hash_calculator():\n    # Temporary calling harness providing input values to hash_calc()\n    assert hash_calc('test_data') == 'expected_hash'",
        "options": [
            "A hardware device driver such as a printer or graphics card driver",
            "A software module or harness that invokes the component under test and passes test data to it",
            "A person who types code into the terminal during pair programming",
            "A Python script that installs operating system patches"
        ],
        "correctAnswer": 1,
        "explanation": "A test driver is a calling harness or dummy program that calls a component under test, feeding it inputs and receiving results when higher-level calling modules are not yet implemented.",
        "officialRef": "PCAT-31-0x Block 1.2: Test Doubles and Harnesses",
        "tags": ["test-driver", "integration", "test-harness"]
    },
    {
        "id": "pcat-1-033",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Beginner",
        "question": "What is a 'Test Stub' in integration testing?",
        "codeSnippet": "# Stub implementation of an unbuilt payment gateway:\nclass PaymentGatewayStub:\n    def charge(self, amount):\n        return {'status': 'SUCCESS', 'tx_id': 'stub-1234'}",
        "options": [
            "A piece of code that simulates an unbuilt or unavailable lower-level component called by the unit under test",
            "A compiler syntax error that halts Python script execution",
            "A test that failed due to an unhandled exception",
            "A Git branch that has been orphaned"
        ],
        "correctAnswer": 0,
        "explanation": "A stub is a skeletal implementation of a lower-level module called by the unit under test, providing canned or pre-determined responses so the higher-level module can be tested in isolation.",
        "officialRef": "PCAT-31-0x Block 1.2: Test Doubles and Harnesses",
        "tags": ["stub", "test-doubles", "integration"]
    },
    {
        "id": "pcat-1-034",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "Which testing level is responsible for validating cross-cutting non-functional requirements such as security under stress and peak transaction throughput?",
        "codeSnippet": "# Simulating 10,000 concurrent bank transfers to test lock contention and database isolation:\n$ locust -f load_test.py --users 10000 --spawn-rate 500",
        "options": [
            "Unit Testing",
            "System Testing / Performance Testing",
            "Code Linting",
            "Static Type Checking"
        ],
        "correctAnswer": 1,
        "explanation": "System testing evaluates the entire integrated system, making it the appropriate level for non-functional testing including load, stress, scalability, and system-level security testing.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["system-testing", "performance", "stress"]
    },
    {
        "id": "pcat-1-035",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is 'Contract Testing' in microservice integration architecture?",
        "codeSnippet": "# Verifying REST API schema contract between OrderService and PaymentService:\ndef test_payment_contract_schema():\n    contract = load_pact_contract('order_payment_pact.json')\n    assert verify_provider_against_contract(PaymentAPI, contract)",
        "options": [
            "Legal review of developer employment contracts",
            "A testing technique that verifies two separate services adhere to a shared agreed-upon API interface contract (schema, request/response formats) independently",
            "Testing software only when payment transactions are processed",
            "Unit testing only functions decorated with @contract"
        ],
        "correctAnswer": 1,
        "explanation": "Contract testing (e.g., using Pact) verifies that microservices can communicate correctly by checking that each service complies with a predefined contract/schema without needing all services deployed simultaneously.",
        "officialRef": "PCAT-31-0x Block 1.2: Integration Testing",
        "tags": ["contract-testing", "microservices", "api"]
    },
    {
        "id": "pcat-1-036",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Beginner",
        "question": "Who is primarily responsible for authoring and running 'Unit Tests' in modern software engineering teams?",
        "codeSnippet": "# Python software developer during feature implementation:\ndef test_slugify_unicode_string():\n    assert slugify('Café au Lait') == 'cafe-au-lait'",
        "options": [
            "External end-users during beta trials",
            "The software developers / programmers who author the code",
            "The legal compliance department",
            "System administrators during data center maintenance"
        ],
        "correctAnswer": 1,
        "explanation": "Software developers write unit tests during coding (or prior to coding in TDD). Unit tests require deep knowledge of internal code logic and language constructs.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["unit-testing", "roles", "developers"]
    },
    {
        "id": "pcat-1-037",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is 'End-to-End (E2E) Testing'?",
        "codeSnippet": "# Automated browser test driving full application stack:\ndef test_user_signup_and_purchase():\n    browser.visit('/signup')\n    browser.fill_form(user_data)\n    browser.click('#submit')\n    assert browser.has_text('Welcome to your Dashboard')",
        "options": [
            "Testing only the first and last line of a Python module",
            "Testing the entire software flow from start to finish, exercising real databases, network interfaces, frontend UI, and backend services together",
            "Testing network cable connections between server racks",
            "Testing functions that return None"
        ],
        "correctAnswer": 1,
        "explanation": "E2E testing validates complete business flows from the user interface down through APIs, database, and background services, verifying that all integrated components collaborate correctly.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["e2e", "end-to-end", "ui-testing"]
    },
    {
        "id": "pcat-1-038",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is the primary risk of relying exclusively on End-to-End (E2E) tests while neglecting unit and integration tests?",
        "codeSnippet": "# Ice-Cream Cone anti-pattern result:\n# Test run duration: 4 hours\n# Flakiness rate: 18% false failures\n# Root-cause debugging time: High",
        "options": [
            "Tests become too simple to understand",
            "Tests are slow to execute, prone to false-positive flakiness, and provide poor defect localization when failures occur",
            "Python will refuse to execute tests without a TestCase class",
            "Code coverage cannot be tracked"
        ],
        "correctAnswer": 1,
        "explanation": "Exclusive reliance on E2E tests creates an 'inverted pyramid' or 'ice-cream cone': tests take hours, fail unpredictably due to transient network or UI timing glitches, and pinpointing the root cause is difficult.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing and Pyramid",
        "tags": ["test-pyramid", "flakiness", "e2e-risks"]
    },
    {
        "id": "pcat-1-039",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Intermediate",
        "question": "What is 'Component Integration Testing' as compared to 'System Integration Testing'?",
        "codeSnippet": "# Level 1: Testing interactions between Python classes ServiceA and ServiceB in memory.\n# Level 2: Testing interactions between ServiceA and an external third-party ERP banking system.",
        "options": [
            "Component integration tests interfaces between internal code modules; system integration tests interactions between different complete systems or external platforms",
            "Component integration requires CPython; system integration requires PyPy",
            "They test the exact same scope",
            "System integration testing is performed only on mobile devices"
        ],
        "correctAnswer": 0,
        "explanation": "Component integration tests interfaces between internal software units within one application. System integration tests interfaces between the application and external systems, services, or hardware.",
        "officialRef": "PCAT-31-0x Block 1.2: Levels of Testing",
        "tags": ["component-integration", "system-integration", "interfaces"]
    },
    {
        "id": "pcat-1-040",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Levels of Testing",
        "difficulty": "Beginner",
        "question": "In test management, what does 'Exit Criteria' (Definition of Done for testing) define?",
        "codeSnippet": "# Release gate criteria:\n# 1. 100% test pass rate on critical severity test cases.\n# 2. Minimum 85% branch coverage on core domain services.\n# 3. Zero open blocker or critical defects.",
        "options": [
            "The specific keyboard shortcut to quit the Python interactive interpreter (Ctrl+D)",
            "The set of agreed-upon conditions and metrics that must be satisfied before a testing phase can be formally concluded",
            "The date when developers take vacation",
            "The memory address where Python unloads garbage collected objects"
        ],
        "correctAnswer": 1,
        "explanation": "Exit criteria define the predefined metrics (e.g., test coverage, defect thresholds, pass rate, risk sign-off) that must be met to declare a test level or release phase complete.",
        "officialRef": "PCAT-31-0x Block 1.2: Test Process & Criteria",
        "tags": ["exit-criteria", "definition-of-done", "test-process"]
    }
])

# --- CHAPTER 1.3: Software Testing Definitions & Defect Lifecycle (Cards 41-60) ---
cards.extend([
    {
        "id": "pcat-1-041",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Beginner",
        "question": "According to official testing terminology, what is the precise definition of an 'Error' (or Mistake)?",
        "codeSnippet": "# Developer misreads requirements specification:\n# Requirement: 'Users aged 65 and older receive discount.'\n# Developer writes: if age > 65: discount()",
        "options": [
            "An incorrect output produced during program execution",
            "A human action or cognitive misjudgment that produces an incorrect result",
            "A hardware crash caused by power failure",
            "An automated test script assertion failure"
        ],
        "correctAnswer": 1,
        "explanation": "An error (mistake) is a human action that produces an incorrect result (e.g., a developer misinterpreting logic, a typist writing an incorrect operator, or an analyst writing contradictory specs).",
        "officialRef": "PCAT-31-0x Block 1.3: Software Testing Definitions",
        "tags": ["error", "mistake", "defect-terminology"]
    },
    {
        "id": "pcat-1-042",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Beginner",
        "question": "What is the definition of a 'Fault', 'Defect', or 'Bug'?",
        "codeSnippet": "# Flaw embedded in code:\ndef calculate_average(items):\n    # Defect: Does not check for empty list, causing ZeroDivisionError if len(items) == 0\n    return sum(items) / len(items)",
        "options": [
            "A human developer's fatigue during overtime work",
            "An imperfection, flaw, or deficiency in a work product (such as code or documentation) where it does not meet its specification",
            "An event where the program crashes on customer hardware",
            "An unauthorized user attempting SQL injection"
        ],
        "correctAnswer": 1,
        "explanation": "A defect (fault or bug) is the manifestation of a human error in software artifacts (code, requirements, design). If executed, a defect may lead to a failure.",
        "officialRef": "PCAT-31-0x Block 1.3: Software Testing Definitions",
        "tags": ["defect", "fault", "bug", "terminology"]
    },
    {
        "id": "pcat-1-043",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Beginner",
        "question": "What is the definition of a 'Failure' in software testing?",
        "codeSnippet": "# Execution in production:\n>>> calculate_average([])\nZeroDivisionError: division by zero  # Actual runtime deviation from expected behavior!",
        "options": [
            "A flaw in the requirements document",
            "An event in which a component or system does not perform a required function within specified limits (runtime deviation)",
            "A developer forgetting to commit code to Git",
            "A code review finding a missing docstring"
        ],
        "correctAnswer": 1,
        "explanation": "A failure is an event where the actual dynamic runtime behavior or output of the system deviates from the expected behavior or specified requirement.",
        "officialRef": "PCAT-31-0x Block 1.3: Software Testing Definitions",
        "tags": ["failure", "runtime", "defect-terminology"]
    },
    {
        "id": "pcat-1-044",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Intermediate",
        "question": "Which sequence correctly illustrates the causal relationship between Error, Defect, and Failure?",
        "codeSnippet": "# Causal Chain:\n# [Cause by human] ---> [Artifact flaw] ---> [Runtime manifestation]",
        "options": [
            "Failure ---> Defect ---> Error",
            "Error (Human Mistake) ---> Defect (Fault in Code) ---> Failure (Runtime Manifestation)",
            "Defect ---> Error ---> Failure",
            "Failure ---> Error ---> Defect"
        ],
        "correctAnswer": 1,
        "explanation": "A human makes an ERROR (mistake), creating a DEFECT (fault/bug) in code or specs. When the defective code is executed under specific conditions, it results in a system FAILURE.",
        "officialRef": "PCAT-31-0x Block 1.3: Software Testing Definitions",
        "tags": ["error-defect-failure", "causality", "lifecycle"]
    },
    {
        "id": "pcat-1-045",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Intermediate",
        "question": "Does every defect present in source code inevitably cause a system failure during runtime?",
        "codeSnippet": "# Dead code defect:\ndef process_data(val):\n    if False:\n        return 1 / 0  # ZeroDivisionError defect\n    return val * 2",
        "options": [
            "Yes, Python halts execution if any defect exists in the file",
            "No, a defect only leads to a failure if the specific code path containing the defect is executed under triggering conditions",
            "Yes, linters convert all defects into runtime exceptions",
            "No, defects only cause failures on Windows systems"
        ],
        "correctAnswer": 1,
        "explanation": "A defect remains dormant unless executed under specific inputs, state, or environmental triggers. If the defective path is never reached, no failure occurs during that execution.",
        "officialRef": "PCAT-31-0x Block 1.3: Software Testing Definitions",
        "tags": ["dormant-defect", "trigger-conditions", "failure"]
    },
    {
        "id": "pcat-1-046",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Lifecycle",
        "difficulty": "Beginner",
        "question": "What is the standard initial state of a newly submitted bug report in a Defect Tracking System?",
        "codeSnippet": "# Bug tracking workflow:\n# Tester encounters crash -> Submits report -> State = ???",
        "options": [
            "Resolved",
            "New (or Logged / Submitted)",
            "Closed",
            "Deferred"
        ],
        "correctAnswer": 1,
        "explanation": "When a tester logs a defect, it starts in the 'New' (or 'Submitted') state before being triaged, assigned, and validated by the development lead.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Tracking and Lifecycle",
        "tags": ["defect-lifecycle", "new-state", "triage"]
    },
    {
        "id": "pcat-1-047",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Lifecycle",
        "difficulty": "Intermediate",
        "question": "What should happen when a developer marks a defect as 'Fixed' in the defect lifecycle?",
        "codeSnippet": "# Defect State Transition:\n# Open ---> Fixed ---> ???",
        "options": [
            "The defect is immediately deleted from the database",
            "The defect moves to 'Retest' (or 'Ready for Retest') for independent verification by a tester",
            "The defect is marked 'Closed' automatically without verification",
            "The defect is archived to GitHub release notes"
        ],
        "correctAnswer": 1,
        "explanation": "Once a developer marks a defect 'Fixed', it transitions to 'Retest' (or 'Verification'). A tester runs confirmation tests to verify the fix before closing it.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Tracking and Lifecycle",
        "tags": ["defect-lifecycle", "retest", "verification"]
    },
    {
        "id": "pcat-1-048",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Lifecycle",
        "difficulty": "Intermediate",
        "question": "What action occurs when a tester performs confirmation testing on a 'Fixed' defect and discovers the bug is still reproducible?",
        "codeSnippet": "# Retest outcome:\n# Tested build 2.1.0 with reproduction steps; defect still reproduces.\n# Status transition: Fixed ---> ???",
        "options": [
            "Closed",
            "Reopened",
            "Deferred",
            "Discarded"
        ],
        "correctAnswer": 1,
        "explanation": "If a bug still reproduces during re-testing, the tester updates the defect with new logs or test notes and sets its status to 'Reopened' for developer rework.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Tracking and Lifecycle",
        "tags": ["defect-lifecycle", "reopened", "bug-triage"]
    },
    {
        "id": "pcat-1-049",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Severity vs Priority",
        "difficulty": "Intermediate",
        "question": "What is the crucial distinction between Defect 'Severity' and Defect 'Priority'?",
        "codeSnippet": "# Case 1: Application crashes when user clicks 'About Us' link in rare Linux distro.\n# Case 2: Company logo misspelled as 'CompetitorName Corp' on home page header.",
        "options": [
            "Severity is the technical impact of the defect on the system; Priority is the business urgency of fixing it",
            "Severity is decided by marketing; Priority is decided by compiler errors",
            "Severity and Priority are synonymous numerical ratings",
            "Severity applies only to unit tests; Priority applies only to system tests"
        ],
        "correctAnswer": 0,
        "explanation": "Severity measures technical impact (e.g., crash, data loss, cosmetic). Priority measures business urgency: how soon the fix must be deployed to customers.",
        "officialRef": "PCAT-31-0x Block 1.3: Severity vs Priority",
        "tags": ["severity", "priority", "defect-classification"]
    },
    {
        "id": "pcat-1-050",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Severity vs Priority",
        "difficulty": "Intermediate",
        "question": "Which scenario represents a 'Low Severity, High Priority' defect?",
        "codeSnippet": "# Classifying the defect:\n# Logo on login screen displays incorrect company trademark name on primary landing page.",
        "options": [
            "A total database crash during midnight batch processing",
            "The company name or CEO name is misspelled on the main public login page",
            "A memory leak that crashes the server after 400 days of continuous operation",
            "An obscure division by zero error in an undocumented API endpoint"
        ],
        "correctAnswer": 1,
        "explanation": "Misspelling the company name has zero technical impact on application stability (Low Severity), but has severe brand/legal implications that must be fixed immediately (High Priority).",
        "officialRef": "PCAT-31-0x Block 1.3: Severity vs Priority",
        "tags": ["severity", "priority", "classification-examples"]
    }
])

# Save Part 1 (Cards 1-50)
write_ts_file("src/data/pcatSection1CardsPart1.ts", "pcatSection1CardsPart1", cards[:50])
print("Wrote pcatSection1CardsPart1.ts (50 cards).")

# --- CHAPTER 1.3 (Continued) & CHAPTER 1.4: Seven Principles (Cards 51-80) ---
part2_cards = []

part2_cards.extend([
    {
        "id": "pcat-1-051",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Severity vs Priority",
        "difficulty": "Intermediate",
        "question": "Which scenario represents a 'High Severity, Low Priority' defect?",
        "codeSnippet": "# Classifying the defect:\n# Application crashes with segmentation fault only when running on obsolete 32-bit Solaris hardware\n# which has 0 active paying users.",
        "options": [
            "A catastrophic crash occurring under an extremely rare, obscure hardware configuration that no active customers use",
            "A typo on the checkout button on Amazon.com on Black Friday",
            "A blue button that should be green according to brand guidelines",
            "A critical SQL injection vulnerability on the public user authentication endpoint"
        ],
        "correctAnswer": 0,
        "explanation": "A crash causing fatal failure is technically High Severity. However, if it only impacts an obsolete, unsupported configuration with no real users, the business fix priority is Low.",
        "officialRef": "PCAT-31-0x Block 1.3: Severity vs Priority",
        "tags": ["severity", "priority", "classification-examples"]
    },
    {
        "id": "pcat-1-052",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Documentation",
        "difficulty": "Beginner",
        "question": "What is the single most vital component of an effective, actionable bug report?",
        "codeSnippet": "# Bug Report Sections:\n# Title: User unable to checkout\n# Steps to Reproduce: 1. Add item to cart, 2. Enter promo code 'SAVE10', 3. Click 'Buy Now'\n# Expected Result: 10% discount applied\n# Actual Result: 500 Server Error displayed",
        "options": [
            "The tester's personal opinion of the developer's skill",
            "Clear, unambiguous, and reproducible Step-by-Step Instructions along with Expected and Actual results",
            "A copy of the entire Python git repository history",
            "A screenshot of the desktop background wallpaper"
        ],
        "correctAnswer": 1,
        "explanation": "Clear steps to reproduce (with test data, environment details, expected result, and actual result) allow developers to observe, isolate, and debug the issue promptly.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Documentation",
        "tags": ["bug-report", "reproducibility", "defect-documentation"]
    },
    {
        "id": "pcat-1-053",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Intermediate",
        "question": "What is 'Root Cause Analysis' (RCA) in quality engineering?",
        "codeSnippet": "# RCA Investigation:\n# Bug: Invoices created with negative totals.\n# Defect: Missing input validation on quantity.\n# Root Cause: Requirements specification lacked boundary rules for inventory returns.",
        "options": [
            "Deleting the root directory of a server when tests fail",
            "A structured problem-solving approach aimed at identifying the fundamental underlying cause of defects to prevent recurrence across the organization",
            "Inspecting the root node of an XML document",
            "Calculating the square root of test execution times"
        ],
        "correctAnswer": 1,
        "explanation": "Root Cause Analysis (RCA) identifies the fundamental, earliest origin of a defect (e.g., process flaw, training gap, ambiguous requirement) so process improvements can eliminate future occurrences.",
        "officialRef": "PCAT-31-0x Block 1.3: Root Cause Analysis",
        "tags": ["rca", "root-cause", "prevention"]
    },
    {
        "id": "pcat-1-054",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Lifecycle",
        "difficulty": "Intermediate",
        "question": "What does setting a defect status to 'Deferred' mean during defect triage?",
        "codeSnippet": "# Triage Meeting Decision:\n# 'We acknowledge this is a valid defect, but due to release deadlines, we postpone fixing to Q3 release.'",
        "options": [
            "The defect is rejected as not a bug",
            "The defect is acknowledged as valid, but its resolution is formally postponed to a future release or iteration",
            "The defect is impossible to fix and will never be addressed",
            "The defect has been permanently deleted from Jira"
        ],
        "correctAnswer": 1,
        "explanation": "'Deferred' (or 'Postponed') signifies that the defect is recognized as genuine, but due to low priority, time constraints, or release schedules, the fix is scheduled for a future milestone.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Tracking and Lifecycle",
        "tags": ["deferred", "defect-triage", "lifecycle"]
    },
    {
        "id": "pcat-1-055",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Intermediate",
        "question": "What is an 'Intermittent Defect' (or Flaky Bug) and why is it notoriously challenging to resolve?",
        "codeSnippet": "# Test fails 1 time out of 50 runs in CI:\ndef test_async_order_processing():\n    # Failure depends on exact thread scheduling and network timing\n    pass",
        "options": [
            "A defect that only occurs on leap years",
            "A defect that does not occur consistently under seemingly identical input conditions, often caused by race conditions, timing, or shared mutable state",
            "A defect in an uninstalled Python package",
            "A defect that affects audio speaker output"
        ],
        "correctAnswer": 1,
        "explanation": "Intermittent defects (heisenbugs) occur unpredictably due to asynchronous timing, multithreading race conditions, memory corruption, or network latency, making reproduction difficult.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Terminology",
        "tags": ["intermittent-defects", "race-conditions", "flakiness"]
    },
    {
        "id": "pcat-1-056",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Beginner",
        "question": "What is a 'False Positive' in automated test execution?",
        "codeSnippet": "# Automated test run result:\n# Test: test_user_login() -> FAILED\n# Investigation: Code is completely correct; test failed because test environment DB was offline.",
        "options": [
            "A test that fails even though the software under test is functioning correctly",
            "A test that passes even though the software contains a critical bug",
            "A test that executes twice as fast as expected",
            "A test that passes only when executed by the root user"
        ],
        "correctAnswer": 0,
        "explanation": "A False Positive (Type I error) occurs when a test reports a failure, but the application code is actually correct (often caused by bad test data, broken mocks, or environment glitches).",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Terminology",
        "tags": ["false-positive", "flaky-tests", "test-results"]
    },
    {
        "id": "pcat-1-057",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Beginner",
        "question": "What is a 'False Negative' in automated test execution?",
        "codeSnippet": "# Automated test run result:\n# Test: test_payment_charge() -> PASSED\n# Reality: Payment was never charged because the test lacked an assert statement!",
        "options": [
            "A test that passes successfully even though the software contains a defect",
            "A test that fails due to a network timeout",
            "A test with a negative integer assertion value",
            "A test that cannot be discovered by pytest"
        ],
        "correctAnswer": 0,
        "explanation": "A False Negative (Type II error) is a silent failure in testing: the test reports 'PASS', masking an underlying defect and giving false confidence in software quality.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Terminology",
        "tags": ["false-negative", "silent-bugs", "test-effectiveness"]
    },
    {
        "id": "pcat-1-058",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Lifecycle",
        "difficulty": "Intermediate",
        "question": "What is the purpose of a 'Bug Triage Meeting' in an engineering team?",
        "codeSnippet": "# Attendees: QA Lead, Engineering Manager, Product Owner\n# Agenda: Review 15 new incoming defect reports, verify reproducibility, assign severity and priority.",
        "options": [
            "A session where developers review salary increases",
            "A cross-functional meeting to evaluate new bug reports, assess severity and priority, and decide on assignment or deferral",
            "A meeting where testers write automated unit test assertions",
            "A training seminar on installing Python 3.12"
        ],
        "correctAnswer": 1,
        "explanation": "Bug triage brings together engineering, QA, and product stakeholders to review newly reported defects, assess their business impact, assign priority, and schedule resolution.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Triage",
        "tags": ["bug-triage", "stakeholders", "lifecycle"]
    },
    {
        "id": "pcat-1-059",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Terminology",
        "difficulty": "Intermediate",
        "question": "What is a 'Blocker' defect classification?",
        "codeSnippet": "# Severity: Blocker\n# Description: The application crashes during authentication, preventing any further testing of all downstream modules.",
        "options": [
            "A defect that prevents further testing or development because a primary system dependency or workflow is inoperative",
            "A defect in an asynchronous blocking I/O network socket",
            "A linting warning regarding line length exceeding 79 characters",
            "A comment in code marked with # TODO"
        ],
        "correctAnswer": 0,
        "explanation": "A Blocker defect halts testing or deployment because it renders core workflows or the entire system unusable, preventing testers from proceeding with further verification.",
        "officialRef": "PCAT-31-0x Block 1.3: Severity vs Priority",
        "tags": ["blocker", "severity", "testing-impediments"]
    },
    {
        "id": "pcat-1-060",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Defect Documentation",
        "difficulty": "Intermediate",
        "question": "Why should test execution logs and environmental metadata (OS, Python version, dependencies) always be captured in a defect report?",
        "codeSnippet": "# Environment Details in Defect #402:\n# OS: Ubuntu 22.04 LTS (x86_64)\n# Python: 3.11.4\n# Dependencies: cryptography==41.0.1, requests==2.31.0",
        "options": [
            "To prove that the tester was working during business hours",
            "Because environmental differences (operating system, interpreter version, library versions) are frequently the root cause of reproducibility issues",
            "To fulfill open-source licensing requirements",
            "To increase the file size of the bug tracking database"
        ],
        "correctAnswer": 1,
        "explanation": "Many bugs are environment-dependent. Including operating system, interpreter version, architecture, and exact library versions allows developers to recreate the exact environment to reproduce the bug.",
        "officialRef": "PCAT-31-0x Block 1.3: Defect Documentation",
        "tags": ["defect-report", "environment-metadata", "reproducibility"]
    }
])

# --- CHAPTER 1.4: The Seven Principles of Software Testing (Cards 61-80) ---
part2_cards.extend([
    {
        "id": "pcat-1-061",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "What does Principle 1 of Software Testing state: 'Testing shows the presence of defects, not their absence'?",
        "codeSnippet": "# 1,000 automated tests executed and all 1,000 passed.\n# Does this prove the software contains zero bugs?",
        "options": [
            "Testing proves 100% correctness once all unit tests pass",
            "Testing demonstrates that defects exist in the software, but cannot prove that no defects remain undetected",
            "Testing can prove total bug absence if automated tools are used",
            "Defects only exist if a tester logs them in a tracking tool"
        ],
        "correctAnswer": 1,
        "explanation": "Testing reduces the probability of undiscovered defects remaining, but even with extensive testing, it is logically impossible to prove that a software program is completely defect-free.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "presence-of-defects", "principle-1"]
    },
    {
        "id": "pcat-1-062",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "What does Principle 2 of Software Testing state: 'Exhaustive testing is impossible'?",
        "codeSnippet": "# Function accepts any 64-bit integer:\ndef check_value(x: int): ...\n# Number of possible inputs: 2^64 (18 quintillion inputs)\n# Can we test every input?",
        "options": [
            "Testing all combinations of inputs, preconditions, and execution paths is infeasible except for trivial cases; risk analysis and sampling must guide testing",
            "Testers should not work more than 8 hours a day to prevent exhaustion",
            "Automated test runners run out of memory after 1,000 assertions",
            "Only hardware testing can be exhaustive"
        ],
        "correctAnswer": 0,
        "explanation": "Due to immense combinatorial input spaces and execution paths, testing everything is impossible. Instead, testers apply risk assessment, equivalence partitioning, and boundary value analysis.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "exhaustive-testing", "principle-2"]
    },
    {
        "id": "pcat-1-063",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "What is the core message of Principle 3: 'Early testing saves time and money' (Shift-Left)?",
        "codeSnippet": "# Cost of fixing a defect at various stages:\n# Requirements phase: $100\n# Implementation phase: $1,000\n# Production release: $100,000+",
        "options": [
            "Testers should arrive at the office early in the morning",
            "Starting test activities (reviews, static analysis, test planning) early in the lifecycle catches defects when they are easiest and cheapest to fix",
            "Testing early allows teams to skip unit tests later",
            "Early testing guarantees software will ship ahead of schedule"
        ],
        "correctAnswer": 1,
        "explanation": "Defects identified early (e.g., during requirements or early unit testing) require far less effort and cost to rectify than defects that escape into production ('Shift-Left').",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "early-testing", "shift-left", "principle-3"]
    },
    {
        "id": "pcat-1-064",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "What does Principle 4: 'Defect clustering' describe in software systems?",
        "codeSnippet": "# Defect distribution across 10 modules:\n# Module 2 (Billing & Tax Engine) accounts for 82% of all logged bugs.",
        "options": [
            "Bugs group together in server rack clusters",
            "A small number of modules or components typically contain the majority of defects (applying the Pareto Principle / 80-20 rule)",
            "Testers should test in pairs to create clusters",
            "Defects always occur in alphabetical order of module names"
        ],
        "correctAnswer": 1,
        "explanation": "Defect clustering states that software defects are rarely uniformly distributed; typically, about 80% of defects are concentrated in roughly 20% of the modules (often the most complex ones).",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "defect-clustering", "pareto", "principle-4"]
    },
    {
        "id": "pcat-1-065",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "What is the 'Pesticide Paradox' (Principle 5) in software testing?",
        "codeSnippet": "# Running the identical 100 tests every week for 6 months:\n# Result: The tests all pass, but customers still discover new bugs in production.",
        "options": [
            "Running automated tests requires cleaning computer hardware with chemicals",
            "If the exact same tests are repeated over and over, they will eventually no longer find any new defects; tests must be regularly reviewed and updated",
            "Automated tests destroy bugs like insects",
            "Linters can eliminate all viruses from a Python virtual environment"
        ],
        "correctAnswer": 1,
        "explanation": "Just as insects develop resistance to repeated pesticide use, software becomes 'immune' to repeated identical tests. To discover new defects, tests must be continually updated and diversified.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "pesticide-paradox", "principle-5"]
    },
    {
        "id": "pcat-1-066",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "What does Principle 6: 'Testing is context dependent' imply for test strategy?",
        "codeSnippet": "# Application A: An e-commerce mobile photo-sharing app\n# Application B: Automated insulin pump medical device control software",
        "options": [
            "All applications should be tested using identical test plans and assertion suites",
            "Testing is performed differently depending on the application domain, regulatory standards, risk profile, and business context",
            "Tests only execute if the Python context manager (__enter__) is present",
            "Context dependency applies only to web browser testing"
        ],
        "correctAnswer": 1,
        "explanation": "No single universal test approach fits all projects. An air-traffic control system or medical device requires rigorous formal verification, whereas an e-commerce website emphasizes usability and speed.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "context-dependent", "principle-6"]
    },
    {
        "id": "pcat-1-067",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "What is the 'Absence-of-Errors Fallacy' (Principle 7)?",
        "codeSnippet": "# Engineering team delivers software with 0 known defects:\n# Customer response: 'This software has no bugs, but it does not do what we need it to do!'",
        "options": [
            "Believing that finding and fixing all defects guarantees that the software will be successful and satisfy user expectations",
            "The belief that software errors are caused by compiler bugs",
            "Assuming that junior developers write fewer errors than senior developers",
            "Believing that Python code never experiences TypeErrors"
        ],
        "correctAnswer": 0,
        "explanation": "Fixing defects does not ensure software success if the system does not fulfill genuine user requirements, business goals, or usability expectations (building the wrong product flawlessly).",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["testing-principles", "absence-of-errors", "fallacy", "principle-7"]
    },
    {
        "id": "pcat-1-068",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "How can an engineering team counteract the 'Pesticide Paradox' in an automated regression suite?",
        "codeSnippet": "# Strategy to maintain defect-finding capability:\n# 1. Regularly write new test cases covering new customer use cases.\n# 2. Add randomized property-based testing (Hypothesis).\n# 3. Apply mutation testing.",
        "options": [
            "By never running the test suite more than once",
            "By continually modifying existing tests, designing new test scenarios, and adding boundary tests to exercise new code paths",
            "By increasing the timeout threshold on all assertions",
            "By deleting failing tests from the repository"
        ],
        "correctAnswer": 1,
        "explanation": "To combat the pesticide paradox, teams must regularly inspect their test suites, add exploratory tests, introduce property-based testing, and test newly added or modified business logic.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["pesticide-paradox", "test-maintenance", "mutation-testing"]
    },
    {
        "id": "pcat-1-069",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "When applying 'Principle 4: Defect Clustering', how should a test lead prioritize testing effort?",
        "codeSnippet": "# Historical defect metrics show 75% of production bugs originate in the payment gateway module.\n# How should the upcoming sprint's testing hours be allocated?",
        "options": [
            "Distribute testing hours equally among all modules regardless of history",
            "Focus deeper testing, specialized assertions, and code reviews on the historically defect-prone payment gateway module",
            "Stop testing the payment gateway module entirely to avoid finding more bugs",
            "Test only the static CSS stylesheets"
        ],
        "correctAnswer": 1,
        "explanation": "Understanding defect clustering allows teams to target high-risk, defect-prone modules with greater test intensity, specialized test doubles, and thorough code reviews.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["defect-clustering", "risk-based-testing", "prioritization"]
    },
    {
        "id": "pcat-1-070",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "Which software testing principle directly justifies the adoption of 'Test-Driven Development' (TDD) and static analysis in modern Python development?",
        "codeSnippet": "# Writing unit test before implementation code:\n# Catching design ambiguities and edge cases before code is written.\n# Which principle is at work?",
        "options": [
            "Principle 1: Testing shows presence of defects",
            "Principle 3: Early testing saves time and money (Shift-Left)",
            "Principle 5: Pesticide paradox",
            "Principle 7: Absence-of-errors fallacy"
        ],
        "correctAnswer": 1,
        "explanation": "TDD and early static linting embody Principle 3 (Early testing), catching defects immediately during construction when the cost of rework is lowest.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["early-testing", "tdd", "shift-left"]
    },
    {
        "id": "pcat-1-071",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "Why is testing considered a risk-reduction activity rather than a guarantee of perfection?",
        "codeSnippet": "# Risk Assessment:\n# Impact = High (Financial transaction)\n# Likelihood of failure = Medium\n# Test effort concentrated to mitigate transaction calculation risk.",
        "options": [
            "Because Python does not support type safety",
            "Because testing provides evidence of software behavior and reduces residual risk to an acceptable business level, but cannot prove zero defects",
            "Because risk managers write all automated unit tests",
            "Because assertions can only evaluate boolean truthiness"
        ],
        "correctAnswer": 1,
        "explanation": "Software testing is a risk-mitigation discipline. It lowers the probability and impact of undiscovered defects to a tolerable level, enabling informed release decisions.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["risk-mitigation", "residual-risk", "quality"]
    },
    {
        "id": "pcat-1-072",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "A developer argues: 'All 400 unit tests pass, so we do not need to perform user acceptance testing.' Which principle refutes this developer's argument?",
        "codeSnippet": "# 400 unit tests pass with 100% statement coverage.\n# User tests the system: 'The workflow does not match our corporate accounting process.'",
        "options": [
            "Principle 2: Exhaustive testing is impossible",
            "Principle 7: Absence-of-errors fallacy",
            "Principle 4: Defect clustering",
            "Principle 5: Pesticide paradox"
        ],
        "correctAnswer": 1,
        "explanation": "Principle 7 states that absence of errors does not guarantee a usable or fit-for-purpose system. Code can pass all unit tests yet completely fail to satisfy real business workflows.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["absence-of-errors", "fallacy", "uat-justification"]
    },
    {
        "id": "pcat-1-073",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "What is 'Equivalence Partitioning' and which principle does it support?",
        "codeSnippet": "# Input age: 0 to 120\n# Partition 1: age < 0 (Invalid)\n# Partition 2: 0 <= age <= 120 (Valid)\n# Partition 3: age > 120 (Invalid)",
        "options": [
            "Dividing test execution time equally across developers",
            "A black-box technique dividing input data into partitions where all values in a partition are expected to be processed similarly, supporting Principle 2 (Exhaustive testing is impossible)",
            "Splitting hard drives into equal partitions for testing",
            "Testing only even numbers in Python lists"
        ],
        "correctAnswer": 1,
        "explanation": "Because testing every possible value is impossible (Principle 2), Equivalence Partitioning groups inputs into equivalent subsets, testing only one representative value from each partition.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["equivalence-partitioning", "principle-2", "test-design"]
    },
    {
        "id": "pcat-1-074",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "What is 'Boundary Value Analysis' (BVA)?",
        "codeSnippet": "# Range: 1 <= items <= 10\n# BVA Test Inputs: 0, 1, 2 (around lower boundary) and 9, 10, 11 (around upper boundary)",
        "options": [
            "Testing boundary edges of monitor screens for pixel glitches",
            "A test design technique based on testing at the boundaries between partitions, where historical data proves defects cluster most frequently",
            "Checking that files do not exceed maximum disk boundaries",
            "Testing only integers that are prime numbers"
        ],
        "correctAnswer": 1,
        "explanation": "Boundary Value Analysis tests values at and adjacent to the boundaries of equivalence partitions (e.g., min, min-1, min+1, max, max-1, max+1), where off-by-one bugs are most common.",
        "officialRef": "PCAT-31-0x Block 1.4: Test Design Techniques",
        "tags": ["bva", "boundary-value-analysis", "edge-cases"]
    },
    {
        "id": "pcat-1-075",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "Which principle explains why an automated test suite must be continuously updated when features or interfaces are modified?",
        "codeSnippet": "# Application API updated from v1 to v2:\n# Old tests still test v1 endpoints only, failing to test new v2 capabilities.",
        "options": [
            "Pesticide Paradox",
            "Absence-of-errors fallacy",
            "Defect clustering",
            "Static analysis supremacy"
        ],
        "correctAnswer": 0,
        "explanation": "The Pesticide Paradox dictates that if test sets remain static and unvaried, they cease to find new defects. Test suites must evolve alongside application features.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["pesticide-paradox", "regression-evolution"]
    },
    {
        "id": "pcat-1-076",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "Why is 'Principle 6: Testing is context dependent' critical when designing test automation for mobile apps vs cloud microservices?",
        "codeSnippet": "# Mobile: Battery consumption, screen rotations, intermittent 3G connectivity, touch gestures.\n# Cloud Microservice: Throughput (RPS), horizontal scaling, idempotency, distributed tracing.",
        "options": [
            "Both environments use identical unit tests without variation",
            "The architectural constraints, failure modes, user interactions, and operational risks differ fundamentally across domains, requiring tailored test approaches",
            "Cloud microservices cannot be tested using Python",
            "Mobile applications only require manual testing"
        ],
        "correctAnswer": 1,
        "explanation": "Context dictates testing strategy: mobile testing emphasizes battery, connectivity loss, and UI responsiveness, while cloud backend testing prioritizes throughput, latency, and fault tolerance.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["context-dependent", "mobile-vs-cloud", "test-strategy"]
    },
    {
        "id": "pcat-1-077",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "How does 'Mutation Testing' help verify the effectiveness of an automated test suite against the Pesticide Paradox?",
        "codeSnippet": "# Mutation testing engine alters original code:\n# Original: if a > b: return True\n# Mutant:   if a >= b: return True\n# Does our test suite detect (kill) this mutant?",
        "options": [
            "It deliberately injects small faults (mutants) into production code to verify that existing test suites detect and fail on the mutation",
            "It mutates Python bytecode to speed up execution by 50%",
            "It rewrites tests to use C extensions",
            "It randomly deletes database records during unit tests"
        ],
        "correctAnswer": 0,
        "explanation": "Mutation testing introduces artificial faults (mutants) into source code. If the test suite still passes (mutant survives), it reveals gaps in test coverage and assertion quality.",
        "officialRef": "PCAT-31-0x Block 1.4: Mutation Testing",
        "tags": ["mutation-testing", "test-effectiveness", "pesticide-paradox"]
    },
    {
        "id": "pcat-1-078",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Beginner",
        "question": "If a software product has passed all tests and ships with zero reported bugs, why can it still fail in the marketplace?",
        "codeSnippet": "# Principle 7 illustration:\n# Software is completely bug-free, but nobody needs or wants the feature it provides.",
        "options": [
            "Because Python 3 is slower than C++",
            "Because absence of defects does not guarantee fitness for purpose, business value, or customer satisfaction",
            "Because test runners do not compile code",
            "Because customer computers have different CPU architectures"
        ],
        "correctAnswer": 1,
        "explanation": "Under the Absence-of-Errors Fallacy (Principle 7), a product built with zero bugs is useless if it does not solve real user problems or provide business value.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["absence-of-errors", "business-value", "principle-7"]
    },
    {
        "id": "pcat-1-079",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "Which testing practice best exemplifies the application of 'Early Testing' (Principle 3) during the requirements specification phase?",
        "codeSnippet": "# QA reviewer examines user story acceptance criteria before coding begins:\n# Finds ambiguity: 'The response time should be fast.' -> Refactored to: 'p99 latency < 250ms.'",
        "options": [
            "Static review and inspection of requirements documents to detect ambiguities and inconsistencies before coding begins",
            "Running pytest on empty test files",
            "Executing load testing on mock servers",
            "Conducting user interviews after release"
        ],
        "correctAnswer": 0,
        "explanation": "Reviewing requirements to uncover ambiguities, contradictions, or untestable statements is static testing performed at the earliest possible stage, preventing defects from entering code.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["early-testing", "requirements-review", "static-testing"]
    },
    {
        "id": "pcat-1-080",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Testing Principles",
        "difficulty": "Intermediate",
        "question": "What is the key takeaway regarding the Seven Principles of Software Testing for a candidate preparing for the PCAT certification?",
        "codeSnippet": "# Summary of 7 Principles:\n# 1. Shows presence not absence  2. Exhaustive testing impossible\n# 3. Early testing saves money   4. Defect clustering\n# 5. Pesticide paradox           6. Context dependent\n# 7. Absence-of-errors fallacy",
        "options": [
            "They prove that testing can guarantee 100% bug-free software if automated",
            "They serve as fundamental guidelines that govern all testing activities, debunking myths of absolute bug-free software and guiding cost-effective, risk-based testing",
            "They only apply to manual testing, not automated Python tests",
            "They are obsolete concepts replaced by AI code generation"
        ],
        "correctAnswer": 1,
        "explanation": "The 7 testing principles establish the pragmatic foundation of software quality: testing is about risk mitigation, context-driven design, and early defect prevention, not unattainable perfection.",
        "officialRef": "PCAT-31-0x Block 1.4: Seven Principles of Software Testing",
        "tags": ["seven-principles", "summary", "certification-core"]
    }
])

# --- CHAPTER 1.5: Goal, Importance of Testing & The Test Pyramid (Cards 81-100) ---
part2_cards.extend([
    {
        "id": "pcat-1-081",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Test Pyramid",
        "difficulty": "Beginner",
        "question": "What is the 'Test Pyramid' model originally proposed by Mike Cohn?",
        "codeSnippet": "# Test Pyramid layers (from bottom to top):\n#       /  UI / E2E  \\      (Fewest, slowest, highest cost)\n#      / Service / API \\    (Moderate volume and speed)\n#     /   Unit Tests    \\   (Most numerous, fastest, lowest cost)",
        "options": [
            "A geometric shape used to draw database entity relationship diagrams",
            "An architectural visual guide describing the optimal distribution of automated tests across different levels: many fast unit tests at the base, fewer service/API tests, and very few UI/E2E tests at the top",
            "A project management framework for calculating developer hourly billing rates",
            "A pyramid scheme for selling commercial testing licenses"
        ],
        "correctAnswer": 1,
        "explanation": "The Test Pyramid recommends having a broad foundation of fast, isolated Unit tests, a moderate layer of Service/Integration tests, and a small apex of End-to-End/UI tests.",
        "officialRef": "PCAT-31-0x Block 1.5: The Test Pyramid",
        "tags": ["test-pyramid", "architecture", "test-distribution"]
    },
    {
        "id": "pcat-1-082",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Test Pyramid",
        "difficulty": "Intermediate",
        "question": "What is the 'Inverted Test Pyramid' (also known as the 'Ice-Cream Cone' anti-pattern)?",
        "codeSnippet": "# Anti-Pattern Structure:\n#   \\===================/   (Hundreds of brittle, slow E2E GUI tests)\n#    \\   Few API Tests /    \n#     \\ Few Unit Tests/     (Minimal or zero unit tests)",
        "options": [
            "A recommended agile practice for microservice testing",
            "A flawed testing strategy characterized by excessive reliance on slow, brittle UI/E2E tests while having very few underlying unit or integration tests",
            "A dessert served during software release celebrations",
            "A testing tool for verifying cooling fan speeds"
        ],
        "correctAnswer": 1,
        "explanation": "The Ice-Cream Cone anti-pattern occurs when teams write mostly UI/E2E tests and very few unit tests. This results in slow CI builds, high maintenance costs, and frequent false positives.",
        "officialRef": "PCAT-31-0x Block 1.5: The Test Pyramid",
        "tags": ["ice-cream-cone", "anti-pattern", "test-pyramid"]
    },
    {
        "id": "pcat-1-083",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Test Pyramid",
        "difficulty": "Intermediate",
        "question": "Why does the Test Pyramid advocate for the largest proportion of tests to be Unit Tests?",
        "codeSnippet": "# Comparison:\n# Unit test execution: ~1 millisecond; immediate defect localization to exact line of code.\n# E2E test execution: ~30 seconds; failure could be DB, network, browser, or code.",
        "options": [
            "Unit tests are fast to run, cheap to maintain, deterministic, and pinpoint the exact source of failure immediately",
            "Unit tests test visual colors better than UI tests",
            "Unit tests can be written without writing Python code",
            "Unit tests can only be run once per day"
        ],
        "correctAnswer": 0,
        "explanation": "Unit tests run in milliseconds, provide instant feedback during coding, are deterministic (no flaky network calls), and directly pinpoint the exact function or line causing the failure.",
        "officialRef": "PCAT-31-0x Block 1.5: The Test Pyramid",
        "tags": ["unit-tests", "test-pyramid", "benefits"]
    },
    {
        "id": "pcat-1-084",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Test Pyramid",
        "difficulty": "Intermediate",
        "question": "What role does the middle layer (Service / Integration / API Tests) play in the Test Pyramid?",
        "codeSnippet": "# Middle layer testing:\n# Validates interactions between controllers, business services, and database persistence layers\n# without rendering a browser.",
        "options": [
            "It validates business logic integration, API schemas, and component interactions without the overhead and flakiness of the browser GUI",
            "It tests printer hardware connections",
            "It replaces the need for any unit testing",
            "It is reserved exclusively for manual testing"
        ],
        "correctAnswer": 0,
        "explanation": "The middle layer validates that components integrate and communicate correctly (e.g., API contracts, business workflows, DB queries) while remaining faster and more stable than full browser E2E tests.",
        "officialRef": "PCAT-31-0x Block 1.5: The Test Pyramid",
        "tags": ["service-layer", "integration-tests", "api-tests"]
    },
    {
        "id": "pcat-1-085",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Beginner",
        "question": "What is the primary economic argument for investing in comprehensive automated testing?",
        "codeSnippet": "# ROI of automated regression:\n# Manual regression: 40 hours per release candidate * 20 releases = 800 hours/year.\n# Automated suite: 8 minutes per release candidate; runs on every git push.",
        "options": [
            "Automated testing allows companies to fire all developers",
            "Automated testing dramatically reduces the cost of defect remediation by finding bugs early, speeds up release cycles, and prevents costly production outages",
            "Automated testing increases the cost of software licenses",
            "Automated testing guarantees that no customer will ever report an issue"
        ],
        "correctAnswer": 1,
        "explanation": "Automated testing lowers the total cost of ownership by catching bugs when they are cheap to fix, reducing manual testing effort, preventing regressions, and accelerating time to market.",
        "officialRef": "PCAT-31-0x Block 1.5: Goal and Importance of Software Testing",
        "tags": ["roi", "economics", "test-automation"]
    },
    {
        "id": "pcat-1-086",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Code Coverage",
        "difficulty": "Intermediate",
        "question": "What does 'Statement Coverage' (Line Coverage) measure in Python testing?",
        "codeSnippet": "# Running coverage.py:\n$ pytest --cov=my_app tests/\n# Stmts: 100, Miss: 15 -> Statement Coverage: 85%",
        "options": [
            "The percentage of bank statement transactions processed",
            "The percentage of executable source code statements that were traversed at least once during test execution",
            "The number of comments written per line of code",
            "The percentage of tests that passed without raising an error"
        ],
        "correctAnswer": 1,
        "explanation": "Statement coverage measures the ratio of executable code statements executed by the test suite to the total number of executable statements in the codebase.",
        "officialRef": "PCAT-31-0x Block 1.5: Code Coverage",
        "tags": ["code-coverage", "statement-coverage", "metrics"]
    },
    {
        "id": "pcat-1-087",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Code Coverage",
        "difficulty": "Intermediate",
        "question": "What is 'Branch Coverage' (Decision Coverage) and why is it superior to Statement Coverage?",
        "codeSnippet": "def abs_val(x):\n    if x < 0:\n        x = -x\n    return x\n\n# Test: abs_val(-5) -> 100% statement coverage!\n# But branch for x >= 0 is never tested!",
        "options": [
            "Branch coverage measures only git branch merge points",
            "Branch coverage verifies that every boolean decision branch (True and False paths) of control structures is exercised, catching bugs statement coverage misses",
            "Branch coverage checks tree data structures in memory",
            "Branch coverage is identical to line coverage in Python"
        ],
        "correctAnswer": 1,
        "explanation": "A test can achieve 100% statement coverage while completely missing alternative decision branches (e.g., the implicit 'else' path). Branch coverage ensures both True and False branches are exercised.",
        "officialRef": "PCAT-31-0x Block 1.5: Code Coverage",
        "tags": ["branch-coverage", "decision-coverage", "coverage-metrics"]
    },
    {
        "id": "pcat-1-088",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Code Coverage",
        "difficulty": "Intermediate",
        "question": "Why is 100% code coverage NOT a guarantee that a software application is bug-free?",
        "codeSnippet": "def divide(a, b):\n    return a / b\n\ndef test_divide():\n    assert divide(10, 2) == 5\n# 100% statement & branch coverage!\n# But divide(10, 0) raises ZeroDivisionError (untested edge case)!",
        "options": [
            "Coverage tools only measure which code was executed, not whether the assertions verified all possible edge cases, boundaries, or required business behaviors",
            "Python coverage tools are inaccurate by design",
            "Code coverage only works for C extensions",
            "100% coverage causes Python to crash"
        ],
        "correctAnswer": 0,
        "explanation": "Code coverage is a quantitative metric of what code was run, not a qualitative measure of test adequacy. A test can execute code without asserting expected outcomes or testing missing requirements.",
        "officialRef": "PCAT-31-0x Block 1.5: Code Coverage Limitations",
        "tags": ["code-coverage", "coverage-limitations", "test-quality"]
    },
    {
        "id": "pcat-1-089",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Test Pyramid",
        "difficulty": "Intermediate",
        "question": "In the Test Pyramid, what is the 'Testing Trophy' model popularized by Kent C. Dodds?",
        "codeSnippet": "# Testing Trophy layers:\n#   - End-to-End (Top, small)\n#   - Integration (Widest middle body - 'Write tests. Not too many. Mostly integration.')\n#   - Unit (Narrower base)\n#   - Static (Linter / Type checking base)",
        "options": [
            "A physical trophy awarded to the tester who logs the most defects",
            "An alternative model emphasizing that Integration tests provide the highest return on investment (confidence vs effort) compared to isolated unit tests",
            "A test runner for Python game development",
            "An automated certification generator"
        ],
        "correctAnswer": 1,
        "explanation": "The Testing Trophy emphasizes Integration tests as the sweet spot for web applications: validating integrated component behavior provides high confidence without the brittleness of full E2E tests.",
        "officialRef": "PCAT-31-0x Block 1.5: Modern Test Architectures",
        "tags": ["testing-trophy", "integration-focus", "modern-testing"]
    },
    {
        "id": "pcat-1-090",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Beginner",
        "question": "What is the primary role of automated regression testing in Continuous Integration / Continuous Deployment (CI/CD)?",
        "codeSnippet": "# GitHub Actions CI pipeline on git push:\n# 1. Checkout code\n# 2. Setup Python\n# 3. Run pytest tests/\n# 4. If tests pass, deploy to Staging; If tests fail, block merge!",
        "options": [
            "Acting as an automated quality gate that provides immediate feedback to developers and prevents broken code from being merged or deployed",
            "Formatting Python code according to PEP 8",
            "Sending automated billing invoices to clients",
            "Encrypting the git repository"
        ],
        "correctAnswer": 0,
        "explanation": "In CI/CD, automated tests act as an automated safety gate. They run on every commit or pull request, catching regressions immediately and preventing flawed code from deploying to production.",
        "officialRef": "PCAT-31-0x Block 1.5: Goal and Importance of Software Testing",
        "tags": ["ci-cd", "quality-gates", "regression-testing"]
    },
    {
        "id": "pcat-1-091",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "How does automated testing enable aggressive and safe code refactoring?",
        "codeSnippet": "# Refactoring legacy code:\n# Developer replaces slow O(N^2) algorithm with fast O(N log N) algorithm.\n# Re-runs 800 automated unit tests -> All pass in 1.2s -> Confirms external behavior is preserved!",
        "options": [
            "By automatically rewriting the Python AST without developer intervention",
            "By acting as a regression safety net, verifying that internal structural changes do not alter external observable behavior or introduce bugs",
            "By disabling syntax errors in the Python compiler",
            "By converting procedural code into object-oriented classes"
        ],
        "correctAnswer": 1,
        "explanation": "A comprehensive test suite gives developers confidence to clean, reorganize, and optimize code. If a refactoring breaks existing behavior, tests fail instantly, pinpointing the regression.",
        "officialRef": "PCAT-31-0x Block 1.5: Testing and Refactoring",
        "tags": ["refactoring", "safety-net", "test-benefits"]
    },
    {
        "id": "pcat-1-092",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "What is 'Technical Debt' in relation to testing and code quality?",
        "codeSnippet": "# Skipping automated unit tests to meet a tight deadline:\n# Future consequences: Slower feature velocity, fragile codebase, fear of refactoring.",
        "options": [
            "The financial cost of buying hardware servers",
            "The implied future cost of additional rework and maintenance caused by choosing an expedient, rushed solution (e.g., omitting tests) instead of a clean, well-tested approach",
            "The money owed to cloud service providers for AWS hosting",
            "The credit card balance of software developers"
        ],
        "correctAnswer": 1,
        "explanation": "Ward Cunningham's technical debt metaphor describes how taking shortcuts (like skipping tests or writing messy code) incurs 'interest': future modifications become slower, riskier, and more expensive.",
        "officialRef": "PCAT-31-0x Block 1.5: Technical Debt and Quality",
        "tags": ["technical-debt", "code-quality", "economics"]
    },
    {
        "id": "pcat-1-093",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "What is the 'Cost of Quality' (CoQ) framework composed of?",
        "codeSnippet": "# Cost of Quality Equation:\n# CoQ = Cost of Conformance (Prevention + Appraisal) + Cost of Non-Conformance (Internal + External Failures)",
        "options": [
            "Hardware licensing costs only",
            "Cost of Conformance (Prevention like TDD and Appraisal like testing) plus Cost of Non-Conformance (Internal failure rework and External production defects)",
            "The developer's hourly wage multiplied by lines of code",
            "The marketing budget for software launches"
        ],
        "correctAnswer": 1,
        "explanation": "Cost of Quality comprises Conformance costs (prevention activities like design reviews, plus appraisal activities like testing) and Non-conformance costs (fixing bugs internally vs external production outages/penalties).",
        "officialRef": "PCAT-31-0x Block 1.5: Economics of Testing",
        "tags": ["cost-of-quality", "economics", "conformance"]
    },
    {
        "id": "pcat-1-094",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "How does early defect detection impact software project delivery schedules according to testing metrics?",
        "codeSnippet": "# Metric Comparison:\n# Defect found in Unit testing: Fix time ~15 minutes\n# Defect found in Staging Integration: Fix time ~4 hours (rebuild, redeploy, re-test)\n# Defect found in Production: Fix time ~3 days (triage, hotfix, rollback, patch release)",
        "options": [
            "Early defect detection significantly reduces overall project rework time and prevents schedule slippage caused by stabilization firefighting late in the release cycle",
            "Early defect detection slows down projects by requiring too much documentation",
            "Defect detection timing has no impact on project delivery",
            "Early testing should only be done on waterfall projects"
        ],
        "correctAnswer": 0,
        "explanation": "Defects caught early take minutes to resolve. Late defect discovery causes chaotic firefighting, release delays, urgent hotfixes, and extensive re-testing cycles.",
        "officialRef": "PCAT-31-0x Block 1.5: Goal and Importance of Software Testing",
        "tags": ["defect-cost", "schedules", "shift-left"]
    },
    {
        "id": "pcat-1-095",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Beginner",
        "question": "What is the psychological barrier known as 'Confirmation Bias' in software testing, and how does automated testing mitigate it?",
        "codeSnippet": "# Developer mind:\n# 'I wrote this function to calculate taxes for US states, and I will test it with inputs I know work!'\n# Fails to test negative inputs, missing states, or invalid data types.",
        "options": [
            "A bias where developers only write tests that confirm their code works as expected, missing invalid edge cases; mitigated by independent testing and automated boundary tests",
            "A bias that causes computers to confirm all assertions as true",
            "A preference for confirming git commits with GPG keys",
            "A psychological test given to software engineering applicants"
        ],
        "correctAnswer": 0,
        "explanation": "Confirmation bias leads authors to test paths they designed to succeed. Automated test suites, independent QA testing, and systematic boundary analysis test negative and unexpected conditions objectively.",
        "officialRef": "PCAT-31-0x Block 1.5: Psychology of Testing",
        "tags": ["confirmation-bias", "psychology", "negative-testing"]
    },
    {
        "id": "pcat-1-096",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "What is 'Negative Testing'?",
        "codeSnippet": "# Testing error handling and input validation:\ndef test_register_user_with_invalid_email():\n    with pytest.raises(ValueError, match='Invalid email format'):\n        register_user('not-an-email', 'valid_password')",
        "options": [
            "Testing only with negative integers (-1, -100)",
            "Testing the system with invalid, unexpected, or out-of-range inputs to verify that it handles exceptions gracefully without crashing or corrupting data",
            "Testing software that has a negative return on investment",
            "Insulting developers in bug reports"
        ],
        "correctAnswer": 1,
        "explanation": "Negative testing verifies that the application behaves appropriately when given invalid inputs, unauthorized requests, or boundary violations, ensuring graceful error handling.",
        "officialRef": "PCAT-31-0x Block 1.5: Test Types and Strategies",
        "tags": ["negative-testing", "exception-handling", "robustness"]
    },
    {
        "id": "pcat-1-097",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "What is 'Fuzz Testing' (Fuzzing)?",
        "codeSnippet": "# Automated fuzz testing loop:\nfor _ in range(100000):\n    random_payload = generate_pseudo_random_bytes()\n    try:\n        parse_image_header(random_payload)\n    except ExpectedParseError:\n        pass  # Graceful rejection\n    except Exception as e:\n        record_crash(e, random_payload)",
        "options": [
            "Cleaning physical dust off keyboards and monitors",
            "An automated testing technique providing semi-random, malformed, or unexpected data as inputs to detect crashes, memory leaks, and unhandled exceptions",
            "Testing graphical user interface blur effects",
            "Testing only with string data types"
        ],
        "correctAnswer": 1,
        "explanation": "Fuzz testing feeds massive streams of invalid, unexpected, or pseudo-random data into program interfaces to discover security vulnerabilities, memory corruptions, and unhandled crashes.",
        "officialRef": "PCAT-31-0x Block 1.5: Test Types and Strategies",
        "tags": ["fuzz-testing", "security", "random-testing"]
    },
    {
        "id": "pcat-1-098",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Beginner",
        "question": "What does a 'Test Plan' document describe in software quality management?",
        "codeSnippet": "# Test Plan Contents:\n# 1. Scope and Objectives\n# 2. Testing Levels and Types\n# 3. Schedule and Milestones\n# 4. Resource Allocation and Test Environments\n# 5. Entry and Exit Criteria\n# 6. Risk Assessment",
        "options": [
            "The Python source code file containing unittest assertions",
            "A comprehensive document outlining the scope, objectives, approach, resources, schedule, and criteria for intended test activities",
            "The company's employee benefits plan",
            "The network architecture diagram for cloud hosting"
        ],
        "correctAnswer": 1,
        "explanation": "A Test Plan specifies the overall strategy, scope (what will and won't be tested), environments, tooling, human resources, timelines, and acceptance criteria for testing.",
        "officialRef": "PCAT-31-0x Block 1.5: Test Planning & Documentation",
        "tags": ["test-plan", "test-management", "artifacts"]
    },
    {
        "id": "pcat-1-099",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "What is 'Load Testing' versus 'Stress Testing'?",
        "codeSnippet": "# Scenario A: Testing system under anticipated peak traffic (e.g., 2,000 requests/sec for 2 hours).\n# Scenario B: Testing system with 10x traffic until it runs out of memory, to test recovery.",
        "options": [
            "Load testing evaluates behavior under expected peak production usage; Stress testing pushes the system beyond operational capacity to evaluate failure modes and recovery",
            "Load testing is for web apps; stress testing is for databases",
            "Load testing tests RAM; stress testing tests disk space",
            "Load and stress testing are exact synonyms"
        ],
        "correctAnswer": 0,
        "explanation": "Load testing verifies performance under normal and anticipated peak workloads. Stress testing tests the system beyond its maximum capacity to see how it fails (graceful degradation vs catastrophic crash) and recovers.",
        "officialRef": "PCAT-31-0x Block 1.5: Non-Functional Testing",
        "tags": ["load-testing", "stress-testing", "performance"]
    },
    {
        "id": "pcat-1-100",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Testing Goals",
        "difficulty": "Intermediate",
        "question": "In summary of Block 1, what is the ultimate value delivered by automated software testing to a software engineering organization?",
        "codeSnippet": "# Value Summary:\n# - High code confidence and maintainability\n# - Fast, dependable continuous delivery\n# - Minimized risk of catastrophic customer-facing defects\n# - Living documentation of system behavior",
        "options": [
            "Eliminating the need for software developers",
            "Empowering teams to deliver reliable, high-quality software rapidly with confidence, predictable release velocity, and minimized operational risk",
            "Guaranteeing that no customer will ever find a defect",
            "Replacing all documentation with machine learning models"
        ],
        "correctAnswer": 1,
        "explanation": "Automated testing provides sustainable delivery velocity, high confidence, living executable documentation, and early risk reduction, enabling agile teams to ship quality software continuously.",
        "officialRef": "PCAT-31-0x Block 1.5: Goal and Importance of Software Testing",
        "tags": ["value-of-testing", "summary", "quality-engineering"]
    }
])

# Save Part 2 (Cards 51-100)
write_ts_file("src/data/pcatSection1CardsPart2.ts", "pcatSection1CardsPart2", part2_cards)
print("Wrote pcatSection1CardsPart2.ts (50 cards).")

# Write Section 1 barrel file
barrel = (
    "import { Flashcard } from '../types';\n"
    "import { pcatSection1CardsPart1 } from './pcatSection1CardsPart1';\n"
    "import { pcatSection1CardsPart2 } from './pcatSection1CardsPart2';\n\n"
    "export const pcatSection1Flashcards: Flashcard[] = [\n"
    "  ...pcatSection1CardsPart1,\n"
    "  ...pcatSection1CardsPart2,\n"
    "];\n"
)
with open("src/data/pcatSection1Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel)

print("Block 1 complete: 100 cards written.")
