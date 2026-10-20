import json
import os

cards = []

# --- CHAPTER 1.1: Software Testing Concepts & Terminology (Cards 1-20) ---
ch1_1 = [
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
]

cards.extend(ch1_1)
print(f"Added Chapter 1.1: {len(ch1_1)} cards. Total: {len(cards)}")
