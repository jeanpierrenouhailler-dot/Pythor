import { Flashcard } from '../types';

export const pcetSection1CardsPart1: Flashcard[] = [
  // Chapter 1.1: Fundamentals of Software Testing, Definitions, Quality, Verification vs. Validation (Cards 1-20)
  {
    id: 'pcet-1-001',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'What is the primary objective of software testing in a software development lifecycle?',
    codeSnippet: '# Software Testing Objective Evaluation\ndef test_payment_gateway(amount):\n    assert amount > 0, "Amount must be positive"\n    return process_transaction(amount)\n\n# Why do we execute this test?',
    options: [
      'To prove that the software contains zero defects under all circumstances',
      'To verify requirements, identify defects, evaluate quality, and reduce the risk of failure in production',
      'To replace the need for static code reviews and architecture design',
      'To guarantee 100% test execution speed during continuous integration'
    ],
    correctAnswer: 1,
    explanation: 'According to testing principles and the PCET syllabus, testing cannot prove that software is bug-free (Principle 1). Its primary objectives are to evaluate quality, detect defects before release, verify that requirements are met, and reduce operational risk.',
    officialRef: 'PCET-30-01 Block 1.1 - Fundamentals of Software Testing',
    tags: ['testing-objectives', 'quality-assurance', 'fundamentals']
  },
  {
    id: 'pcet-1-002',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Verification vs Validation',
    difficulty: 'Beginner',
    question: 'Which question summarizes the objective of "Verification"?',
    codeSnippet: '# Verification vs. Validation check\n# Activity A: Checking whether code conforms to PEP 8 standards and requirements specs.\n# Activity B: Conducting user acceptance testing to ensure the app solves the user\'s real problem.',
    options: [
      '"Are we building the right product?"',
      '"Are we building the product right?"',
      '"Will the product sell at a competitive price?"',
      '"Is the application free from third-party open-source dependencies?"'
    ],
    correctAnswer: 1,
    explanation: 'Verification asks "Are we building the product right?" (conformance to specifications, design documents, and standards). Validation asks "Are we building the right product?" (satisfying real customer and business needs).',
    officialRef: 'PCET-30-01 Block 1.1 - Verification vs. Validation',
    tags: ['verification', 'validation', 'quality']
  },
  {
    id: 'pcet-1-003',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Verification vs Validation',
    difficulty: 'Intermediate',
    question: 'A team builds a Python script that perfectly satisfies all specified mathematical formulas, but the end-user cannot use it because the required input format differs from customer files. Which quality dimension failed?',
    codeSnippet: 'def calculate_interest(principal: float, rate: float, time: float) -> float:\n    """Strictly matches IEEE mathematical specification document."""\n    return principal * (1 + rate * time)\n\n# User provides comma-separated strings with currency symbols ($1,000.00)',
    options: [
      'Verification failed, because the code has runtime syntax errors',
      'Validation failed, because the system does not satisfy the operational needs of the end user',
      'Both verification and validation passed successfully',
      'Unit testing failed because floating-point precision was exceeded'
    ],
    correctAnswer: 1,
    explanation: 'The code verified correctly against its written technical specs ("built right"), but failed validation because it does not satisfy the real-world operational user requirements ("built the wrong product").',
    officialRef: 'PCET-30-01 Block 1.1 - Verification vs. Validation',
    tags: ['validation', 'user-needs', 'specification']
  },
  {
    id: 'pcet-1-004',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Quality Assurance vs Quality Control',
    difficulty: 'Beginner',
    question: 'How does Quality Assurance (QA) differ fundamentally from Quality Control (QC)?',
    codeSnippet: '# Scenario A: Defining a mandatory code review checklist and automated CI pipeline.\n# Scenario B: Running automated integration test suites to catch bugs before release.',
    options: [
      'QA is corrective and product-oriented; QC is preventive and process-oriented',
      'QA is process-oriented and focuses on defect prevention; QC is product-oriented and focuses on defect detection',
      'QA is only performed by external auditors; QC is performed exclusively by Python developers',
      'QA and QC are synonymous terms with identical operational scopes'
    ],
    correctAnswer: 1,
    explanation: 'Quality Assurance (QA) focuses on processes, standards, and prevention of defects. Quality Control (QC) and testing focus on evaluating the product itself to detect defects.',
    officialRef: 'PCET-30-01 Block 1.1 - QA vs QC vs Testing',
    tags: ['qa', 'qc', 'process-improvement']
  },
  {
    id: 'pcet-1-005',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'Which of the following is considered a dynamic testing activity in Python?',
    codeSnippet: '# Activity 1: Running flake8 on main.py\n# Activity 2: Peer review of auth_service.py pull request\n# Activity 3: Executing pytest tests/test_auth.py\n# Activity 4: Reading system requirement specifications',
    options: [
      'Activity 1 only',
      'Activity 3 only',
      'Activity 1 and Activity 2',
      'Activity 2 and Activity 4'
    ],
    correctAnswer: 1,
    explanation: 'Dynamic testing requires executing the program code with inputs to observe runtime behavior and output (Activity 3: executing pytest). Static testing inspects code or documents without executing the software (linting, peer reviews, reading specifications).',
    officialRef: 'PCET-30-01 Block 1.1 - Dynamic vs. Static Testing',
    tags: ['dynamic-testing', 'pytest', 'execution']
  },
  {
    id: 'pcet-1-006',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'What is a "Test Basis" in software testing terminology?',
    codeSnippet: '# Developing test cases for a discount module:\n# Reference docs: Functional Requirements Document v2.1, User Stories #104-108, Database Schema.\n# What role do these reference documents play?',
    options: [
      'The physical server hardware where pytest runs',
      'The body of knowledge and documentation used as the basis for test analysis and design',
      'The base class from which unittest.TestCase inherits',
      'The Python virtual environment (.venv) containing installed test packages'
    ],
    correctAnswer: 1,
    explanation: 'The Test Basis is the body of knowledge comprising requirements, design specifications, user stories, contracts, or architecture models used as the foundational reference to design test cases.',
    officialRef: 'PCET-30-01 Block 1.1 - Test Basis and Test Artifacts',
    tags: ['test-basis', 'requirements', 'terminology']
  },
  {
    id: 'pcet-1-007',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'What is a "Test Oracle"?',
    codeSnippet: 'def add(a: int, b: int) -> int:\n    return a + b\n\n# Test input: a = 5, b = 7\n# Expected outcome: 12\n# Where does the expected outcome "12" come from?',
    options: [
      'An external Oracle SQL relational database engine',
      'A source to determine expected results to compare with the actual outcome of the software under test',
      'The Python garbage collector clearing memory after test execution',
      'A hardware random number generator used for fuzzing'
    ],
    correctAnswer: 1,
    explanation: 'A Test Oracle is an authority, specification, mathematical model, existing system, or human expert used to determine expected results against which actual results are evaluated.',
    officialRef: 'PCET-30-01 Block 1.1 - Test Oracles',
    tags: ['test-oracle', 'expected-results', 'terminology']
  },
  {
    id: 'pcet-1-008',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'What is the relationship between test execution and software quality improvement?',
    codeSnippet: 'def calculate_tax(income: float) -> float:\n    # BUG: Negative income calculates negative tax\n    return income * 0.20\n\n# Running pytest shows: AssertionError: calculate_tax(-100) returned -20.0',
    options: [
      'Testing directly fixes the bug and automatically corrects the source code',
      'Testing provides visibility into defects and quality, but fixing defects (debugging/reworking) actually alters code quality',
      'Running tests increases quality even if failing tests are ignored by the development team',
      'Testing reduces quality because creating test scripts adds complexity to the repository'
    ],
    correctAnswer: 1,
    explanation: 'Testing identifies defects and measures quality, but testing by itself does not fix defects. Quality improves when defects revealed by tests are diagnosed (debugged) and fixed.',
    officialRef: 'PCET-30-01 Block 1.1 - Testing and Quality',
    tags: ['testing-purpose', 'quality', 'debugging']
  },
  {
    id: 'pcet-1-009',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'Which term describes the software component, application, or system under test?',
    codeSnippet: '# In a pytest suite:\n# from my_project.services.billing import BillingEngine\n# Here, BillingEngine is being targeted for test verification.',
    options: [
      'Test Driver',
      'Test Harness',
      'Test Object (or System Under Test - SUT)',
      'Test Stub'
    ],
    correctAnswer: 2,
    explanation: 'The Test Object (or System Under Test / SUT / CUT) is the specific software item, module, or system that is being subjected to testing.',
    officialRef: 'PCET-30-01 Block 1.1 - Test Objects',
    tags: ['sut', 'test-object', 'terminology']
  },
  {
    id: 'pcet-1-010',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'What is a "Test Condition"?',
    codeSnippet: '# Requirement: "The user account must be locked after 3 consecutive failed password attempts."\n# Condition to verify: Account lock status upon 3rd invalid credential submission.',
    options: [
      'A boolean flag inside Python\'s sys module that halts the runtime',
      'An aspect or event of a test object that can be verified by one or more test cases',
      'The physical environmental state of the test server (CPU load, free RAM)',
      'The time limit allowed for a test suite before it times out in CI'
    ],
    correctAnswer: 1,
    explanation: 'A Test Condition is an item or event of a component or system that could be verified by one or more test cases (e.g., valid login, account lockout after 3 tries, invalid email format).',
    officialRef: 'PCET-30-01 Block 1.1 - Test Conditions',
    tags: ['test-condition', 'test-design', 'terminology']
  },
  {
    id: 'pcet-1-011',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'Why is testing considered a risk mitigation activity in professional software engineering?',
    codeSnippet: '# Deploying a financial algorithm without testing vs. with testing:\nrisk = probability_of_defect * impact_of_failure',
    options: [
      'Testing eliminates all business and legal liability automatically',
      'Testing identifies critical flaws early, reducing the probability and cost of catastrophic failures occurring in production',
      'Testing guarantees that the software will generate revenue',
      'Testing avoids the need to purchase server backup storage'
    ],
    correctAnswer: 1,
    explanation: 'Software risk is the product of likelihood and impact. By detecting flaws prior to release, testing directly lowers the likelihood of defective behavior affecting end users in production.',
    officialRef: 'PCET-30-01 Block 1.1 - Risk-Based Testing',
    tags: ['risk-management', 'economics', 'fundamentals']
  },
  {
    id: 'pcet-1-012',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'What is the role of a Test Case in software testing?',
    codeSnippet: '"""\nTest Case ID: TC_AUTH_001\nTitle: Successful login with valid credentials\nPreconditions: User \'alice\' exists with password \'Secret123!\'\nInputs: username=\'alice\', password=\'Secret123!\'\nExpected Result: HTTP 200, JWT token returned\n"""',
    options: [
      'A set of preconditions, inputs, actions, expected results, and postconditions developed for a particular objective',
      'A compiled Python bytecode (.pyc) file stored inside __pycache__',
      'A defect ticket logged inside an issue tracker after an error occurs',
      'An automated shell script that installs Python dependencies'
    ],
    correctAnswer: 0,
    explanation: 'A Test Case formalizes the set of inputs, execution preconditions, expected results, and postconditions designed to verify a specific software requirement or test condition.',
    officialRef: 'PCET-30-01 Block 1.1 - Test Cases',
    tags: ['test-case', 'documentation', 'test-design']
  },
  {
    id: 'pcet-1-013',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'In software testing terminology, what is a "Test Suite"?',
    codeSnippet: '# pytest test collection:\n# tests/\n#   ├── test_auth.py\n#   ├── test_billing.py\n#   └── test_shipping.py',
    options: [
      'A physical room where QA testers conduct manual exploratory sessions',
      'A collection of test suites or test cases intended to be executed together in a specific test run',
      'The IDE software (such as PyCharm or VS Code) used to write Python programs',
      'The licensing agreement required by commercial testing vendors'
    ],
    correctAnswer: 1,
    explanation: 'A Test Suite is a collection of test cases or test scripts grouped together for execution purposes (e.g., smoke suite, regression suite, unit test suite).',
    officialRef: 'PCET-30-01 Block 1.1 - Test Suite',
    tags: ['test-suite', 'organization', 'pytest']
  },
  {
    id: 'pcet-1-014',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'What constitutes an "Actual Result" in testing?',
    codeSnippet: 'def divide(a, b):\n    return a // b  # Developer used integer floor division instead of true division\n\nresult = divide(5, 2)  # Returns 2, but spec required 2.5',
    options: [
      'The outcome documented in the business requirements specification',
      'The behavior produced or value returned by the component or system when executed',
      'The time elapsed during test suite setup',
      'The number of lines of code covered by flake8'
    ],
    correctAnswer: 1,
    explanation: 'The actual result is the observable behavior, output, return value, or state produced by the component under test when executed with given test inputs.',
    officialRef: 'PCET-30-01 Block 1.1 - Actual vs Expected Results',
    tags: ['actual-result', 'test-execution', 'terminology']
  },
  {
    id: 'pcet-1-015',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'When is a test case considered to have "Passed"?',
    codeSnippet: 'actual_output = format_user_name("guido", "van rossum")\nexpected_output = "Guido Van Rossum"\n\nassert actual_output == expected_output',
    options: [
      'When the code executes without any SyntaxError regardless of the return value',
      'When the actual results match the expected results within specified criteria',
      'When the test finishes in under 1 millisecond',
      'When the developer approves the pull request without running tests'
    ],
    correctAnswer: 1,
    explanation: 'A test case passes when its observed actual results match or conform to the predefined expected results (the test oracle).',
    officialRef: 'PCET-30-01 Block 1.1 - Pass/Fail Criteria',
    tags: ['pass-fail', 'assertions', 'test-execution']
  },
  {
    id: 'pcet-1-016',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'What is a "Negative Test Case"?',
    codeSnippet: 'def parse_age(age_str: str) -> int:\n    val = int(age_str)\n    if val < 0 or val > 150:\n        raise ValueError("Invalid age range")\n    return val\n\n# Negative test:\n# Input: "-5", "abc", "999"',
    options: [
      'A test case that failed during execution and generated an error',
      'A test case designed to verify that the system handles invalid, unexpected, or out-of-range inputs gracefully',
      'A test case written by a tester with a negative or hostile attitude towards developers',
      'A test case that executes with inverted boolean logic'
    ],
    correctAnswer: 1,
    explanation: 'Negative testing aims to show that the system behaves correctly (e.g., raises proper exceptions, logs errors, rejects bad data) when subjected to invalid inputs or unexpected conditions.',
    officialRef: 'PCET-30-01 Block 1.1 - Positive vs Negative Testing',
    tags: ['negative-testing', 'error-handling', 'robustness']
  },
  {
    id: 'pcet-1-017',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'What is "Positive Testing"?',
    codeSnippet: 'def validate_zip_code(zip_code: str) -> bool:\n    return len(zip_code) == 5 and zip_code.isdigit()\n\n# Test input: "90210"',
    options: [
      'Testing aimed at proving that the software functions as expected with valid data and typical user workflows',
      'Testing that only runs on Fridays when code is released to production',
      'Testing performed without using any assertions',
      'Testing where all unit tests are mocked'
    ],
    correctAnswer: 0,
    explanation: 'Positive testing verifies that the application correctly performs its intended function when provided with valid inputs and normal operating conditions.',
    officialRef: 'PCET-30-01 Block 1.1 - Positive vs Negative Testing',
    tags: ['positive-testing', 'happy-path', 'validation']
  },
  {
    id: 'pcet-1-018',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'What is meant by the "Cost of Quality" (CoQ) in software engineering?',
    codeSnippet: '# Cost model:\n# Cost of Conformance = Prevention (training, linting) + Appraisal (testing)\n# Cost of Non-Conformance = Internal Failures (rework) + External Failures (outages, fines)',
    options: [
      'The monetary price paid for commercial testing tools and IDE licenses',
      'The total cost incurred to prevent, detect, and remedy defects, plus the costs of defects that reach production',
      'The hourly salary of software test engineers relative to developers',
      'The hosting bill for staging and production AWS environments'
    ],
    correctAnswer: 1,
    explanation: 'Cost of Quality includes costs of conformance (prevention such as training and static analysis, appraisal such as automated testing) and costs of non-conformance (internal failures before release and external customer failures post-release).',
    officialRef: 'PCET-30-01 Block 1.1 - Economics of Testing',
    tags: ['cost-of-quality', 'economics', 'conformance']
  },
  {
    id: 'pcet-1-019',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Beginner',
    question: 'Which of the following activities is an example of "Static Testing"?',
    codeSnippet: '# Task A: Executing python -m unittest discover\n# Task B: Performing a code walkthrough of a new sorting algorithm\n# Task C: Benchmarking memory usage with cProfile while sorting a 1M item list\n# Task D: Running Selenium automated browser clicks',
    options: [
      'Task A',
      'Task B',
      'Task C',
      'Task D',
    ],
    correctAnswer: 1,
    explanation: 'Static testing evaluates code, designs, or requirements without executing the code. A code walkthrough (Task B) is a static review technique. Tasks A, C, and D execute the software dynamically.',
    officialRef: 'PCET-30-01 Block 1.1 - Static vs Dynamic Testing',
    tags: ['static-testing', 'walkthrough', 'code-review']
  },
  {
    id: 'pcet-1-020',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.1',
    category: 'Testing Fundamentals',
    difficulty: 'Intermediate',
    question: 'What is the primary role of a "Test Strategy"?',
    codeSnippet: '# Document snippet:\n# "All Python microservices must achieve 80% branch coverage with pytest,\n# run Bandit for static security analysis, and execute integration tests in Docker before merge."',
    options: [
      'A high-level document describing the testing approach, tools, test levels, and environment objectives across an organization or project',
      'A Python script that launches all tests concurrently using multiprocessing',
      'A list of usernames and passwords used during manual QA testing',
      'A bug report template sent to developers'
    ],
    correctAnswer: 0,
    explanation: 'A Test Strategy provides the high-level, overarching approach to testing across an organization or project, defining testing levels, automation guidelines, tools, and quality gates.',
    officialRef: 'PCET-30-01 Block 1.1 - Test Strategy and Planning',
    tags: ['test-strategy', 'governance', 'planning']
  },

  // Chapter 1.2: Errors, Defects, Bugs, Faults, and Failures (Cards 21-40)
  {
    id: 'pcet-1-021',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Beginner',
    question: 'What is the precise distinction between an "Error", a "Defect", and a "Failure"?',
    codeSnippet: '# Sequence of events:\n# 1. Developer forgets that Python lists are 0-indexed.\n# 2. Developer writes: items[len(items)]\n# 3. User clicks checkout and application crashes with IndexError.',
    options: [
      '1 is a Failure, 2 is an Error, 3 is a Defect',
      '1 is an Error (human mistake), 2 is a Defect/Bug (in code), 3 is a Failure (in runtime)',
      '1 is a Defect, 2 is a Failure, 3 is an Error',
      'Error, Defect, and Failure are identical terms referring to the same runtime exception'
    ],
    correctAnswer: 1,
    explanation: 'An Error is a human action/mistake that produces an incorrect result. A Defect (or bug/fault) is the flaw in the software or documentation caused by that error. A Failure is an event where the software fails to perform its required function within specified limits at runtime.',
    officialRef: 'PCET-30-01 Block 1.2 - Errors, Defects, and Failures',
    tags: ['error', 'defect', 'failure', 'terminology']
  },
  {
    id: 'pcet-1-022',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Intermediate',
    question: 'Can a defect exist in software without ever causing a failure during execution?',
    codeSnippet: 'def apply_promotional_discount(total: float, promo_code: str) -> float:\n    if promo_code == "SUPER_SECRET_UNANNOUNCED_CODE":\n        return total * -1  # DEFECT: negative price refund\n    return total * 0.90\n\n# In production, no customer has ever entered "SUPER_SECRET_UNANNOUNCED_CODE".',
    options: [
      'No, every defect immediately causes a crash the moment the application starts',
      'Yes, a defect may remain latent if the specific execution path or boundary conditions that trigger it are never reached',
      'No, the Python compiler detects and eliminates all unexecuted defects at bytecode compilation time',
      'Yes, but only if the Python file is named test_*.py'
    ],
    correctAnswer: 1,
    explanation: 'A defect is a latent flaw in code. If the inputs or execution paths that trigger the defective code are never executed, the defect remains dormant and no failure is observed.',
    officialRef: 'PCET-30-01 Block 1.2 - Latent Defects and Failures',
    tags: ['latent-defects', 'code-execution', 'runtime']
  },
  {
    id: 'pcet-1-023',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Beginner',
    question: 'A server crashes because a hard drive fills to 100% capacity due to uncompressed logs, not because of a bug in the Python application code. How is this event classified?',
    codeSnippet: '# Python app tries to write a normal log message:\nwith open("/var/log/app.log", "a") as f:\n    f.write("User logged in\\n")\n# OSError: [Errno 28] No space left on device',
    options: [
      'A software syntax defect inside the Python standard library',
      'An environmental failure caused by system resource exhaustion rather than a code defect',
      'A unit test failure that should be caught by flake8',
      'A compiler error in Python\'s PVM'
    ],
    correctAnswer: 1,
    explanation: 'Failures can be caused by environmental conditions (hardware issues, out-of-disk space, network outages, radiation/hardware flips) without an inherent logic defect in the application source code.',
    officialRef: 'PCET-30-01 Block 1.2 - Root Cause and Environmental Failures',
    tags: ['environmental-failure', 'root-cause', 'exceptions']
  },
  {
    id: 'pcet-1-024',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Intermediate',
    question: 'What is a "False Positive" result in automated testing?',
    codeSnippet: '# Test code:\nimport time\n\ndef test_api_speed():\n    start = time.time()\n    response = fetch_data()  # Normal operation\n    duration = time.time() - start\n    # Test fails because CI runner CPU was temporarily throttled\n    assert duration < 0.05, f"Took {duration}s"',
    options: [
      'A test that correctly flags a legitimate bug in the application logic',
      'A test that reports a failure or defect even though the software under test actually behaves correctly according to specifications',
      'A test that passes even though a critical defect exists in the code',
      'A test case that executes with 100% branch coverage'
    ],
    correctAnswer: 1,
    explanation: 'A false positive (type I error in testing) occurs when a test fails (indicating a defect) when in reality the software under test is correct, often due to a flaky test, flawed test setup, or environmental latency.',
    officialRef: 'PCET-30-01 Block 1.2 - False Positives and False Negatives',
    tags: ['false-positive', 'flaky-tests', 'test-results']
  },
  {
    id: 'pcet-1-025',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Intermediate',
    question: 'What is a "False Negative" in software testing?',
    codeSnippet: '# Test code:\ndef test_user_authentication():\n    try:\n        authenticate("admin", "WRONG_PASSWORD")\n    except Exception:\n        pass  # Caught and swallowed! Test silently passes\n    # No assertion made!',
    options: [
      'A test that fails because the code is incorrect',
      'A test that passes and reports no defects even though the software actually contains a defect',
      'A test case that only tests negative inputs',
      'A test report generated with inverted color formatting'
    ],
    correctAnswer: 1,
    explanation: 'A false negative (type II error) occurs when the test passes without alerting the team, despite the presence of a real defect in the system under test. This gives a false sense of security.',
    officialRef: 'PCET-30-01 Block 1.2 - False Positives and False Negatives',
    tags: ['false-negative', 'test-design', 'risk']
  },
  {
    id: 'pcet-1-026',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Management',
    difficulty: 'Beginner',
    question: 'What is the difference between Defect "Severity" and Defect "Priority"?',
    codeSnippet: '# Bug A: Company logo is misspelled on the public homepage.\n# Bug B: A rare obscure background export report crashes once a year for 1 internal user.',
    options: [
      'Severity and Priority are identical values decided solely by the developer',
      'Severity reflects the degree of technical impact on the system; Priority reflects the business urgency to fix the defect',
      'Severity is determined by the marketing department; Priority is determined by pytest',
      'Severity can only be High; Priority can only be Low'
    ],
    correctAnswer: 1,
    explanation: 'Severity is the technical impact of a defect (e.g., system crash, data loss vs. typo). Priority indicates the business urgency of fixing it (e.g., misspelled brand logo on homepage is low severity but high priority; obscure crash might be high severity but low priority).',
    officialRef: 'PCET-30-01 Block 1.2 - Severity vs Priority',
    tags: ['severity', 'priority', 'defect-reporting']
  },
  {
    id: 'pcet-1-027',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Management',
    difficulty: 'Intermediate',
    question: 'Which of the following defect classifications represents: "High Priority, Low Severity"?',
    codeSnippet: '# Example evaluation:\n# Option A: Core database drops customer data during checkout.\n# Option B: The company name is misspelled as "Microsft" on the main landing page header.\n# Option C: Internal developer utility script has a memory leak after 7 days.',
    options: [
      'Core database dropping customer transactions',
      'Misspelled company name on the public home page',
      'Internal developer utility script memory leak after 7 days',
      'Failure of an experimental feature toggle hidden behind admin permissions'
    ],
    correctAnswer: 1,
    explanation: 'A typo on the landing page does not crash the system (Low Severity), but damages brand reputation and customer trust immediately, requiring an immediate fix (High Priority).',
    officialRef: 'PCET-30-01 Block 1.2 - Severity vs Priority',
    tags: ['severity', 'priority', 'defect-triage']
  },
  {
    id: 'pcet-1-028',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Management',
    difficulty: 'Intermediate',
    question: 'What is "Root Cause Analysis" (RCA) in defect management?',
    codeSnippet: '# Symptom: ZeroDivisionError in invoice_calculator.py\n# Immediate cause: user_discount divisor was 0\n# Root cause: Sales team was allowed to enter "100% free" promos without input validation upstream.',
    options: [
      'The process of identifying the fundamental, underlying reason why a defect occurred to prevent similar occurrences in the future',
      'The process of assigning blame and financial penalties to the developer who committed the error',
      'A Python script that deletes defective git branches',
      'Running flake8 with --max-line-length=120'
    ],
    correctAnswer: 0,
    explanation: 'Root Cause Analysis looks past the immediate technical symptom to discover the underlying process, human, or systemic failure that allowed the defect to be introduced, aiming for long-term prevention.',
    officialRef: 'PCET-30-01 Block 1.2 - Root Cause Analysis',
    tags: ['rca', 'root-cause', 'quality-improvement']
  },
  {
    id: 'pcet-1-029',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Lifecycle',
    difficulty: 'Beginner',
    question: 'What is the standard state of a newly discovered defect in a defect tracking system?',
    codeSnippet: '# Defect Tracker Workflow:\n# [ ? ] -> Open -> Assigned -> In Progress -> Fixed -> Retest -> Closed',
    options: [
      'Closed',
      'New (or Submitted)',
      'Deferred',
      'Rejected'
    ],
    correctAnswer: 1,
    explanation: 'When a tester or user initially identifies and logs a defect into a tracking system (e.g., Jira, Bugzilla, GitHub Issues), its initial status is typically "New" or "Submitted" before triage.',
    officialRef: 'PCET-30-01 Block 1.2 - Defect Lifecycle',
    tags: ['defect-lifecycle', 'triage', 'jira']
  },
  {
    id: 'pcet-1-030',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Lifecycle',
    difficulty: 'Intermediate',
    question: 'In a defect tracking workflow, what status should be assigned when a defect is verified as fixed by the tester?',
    codeSnippet: '# Workflow step:\n# Developer marks ticket "Resolved / Fixed".\n# Tester executes re-test on the new build and confirms the bug no longer occurs.',
    options: [
      'Reopened',
      'Closed (or Verified)',
      'Deferred',
      'Assigned'
    ],
    correctAnswer: 1,
    explanation: 'Once a developer resolves a defect and the tester conducts a confirmation re-test validating that the issue no longer occurs without side-effects, the ticket status changes to "Closed" or "Verified".',
    officialRef: 'PCET-30-01 Block 1.2 - Defect Lifecycle',
    tags: ['defect-lifecycle', 'retesting', 'closure']
  },
  {
    id: 'pcet-1-031',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Lifecycle',
    difficulty: 'Intermediate',
    question: 'What happens when a tester performs a re-test on a defect marked "Resolved", but the bug still reproduces?',
    codeSnippet: '# Developer note: "Fixed in commit 8f2a1b"\n# Tester action: Pulls latest build, runs test case -> Bug still occurs identical to original report.',
    options: [
      'The tester changes the status to "Closed"',
      'The tester marks the ticket as "Reopened"',
      'The tester deletes the test case from the repository',
      'The tester files a lawsuit against the developer'
    ],
    correctAnswer: 1,
    explanation: 'If a confirmation re-test demonstrates that the defect is still present or only partially addressed, the tester transitions the ticket back to "Reopened" with updated logs and evidence.',
    officialRef: 'PCET-30-01 Block 1.2 - Defect Lifecycle',
    tags: ['defect-lifecycle', 'reopened', 'retesting']
  },
  {
    id: 'pcet-1-032',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Management',
    difficulty: 'Intermediate',
    question: 'What does a "Deferred" defect status indicate?',
    codeSnippet: '# Product Owner comment:\n# "This issue will not be fixed in Sprint 14 due to release deadlines;\n# we will schedule it for the Q3 refactoring release."',
    options: [
      'The defect was deemed invalid and will never be investigated',
      'The defect is acknowledged as a valid issue, but its resolution is intentionally postponed to a future release or sprint',
      'The defect was automatically resolved by Python\'s interpreter',
      'The defect has caused the whole company network to shut down'
    ],
    correctAnswer: 1,
    explanation: 'A deferred status means the team acknowledges the defect, but based on priority, schedule, or business constraints, fixes are postponed to a future release cycle.',
    officialRef: 'PCET-30-01 Block 1.2 - Defect Lifecycle and Triage',
    tags: ['deferred', 'triage', 'defect-management']
  },
  {
    id: 'pcet-1-033',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Reporting',
    difficulty: 'Beginner',
    question: 'Which piece of information is MOST essential in a well-written Defect Report to ensure developers can reproduce it?',
    codeSnippet: '# Defect Report Draft:\n# Title: "Login broken"\n# Description: "It doesn\'t work please fix ASAP"\n# What vital section is missing?',
    options: [
      'The tester\'s personal social media profile',
      'Clear, numbered step-by-step reproduction instructions along with expected and actual results',
      'The developer\'s performance rating score',
      'The git commit hash of the Python documentation repository'
    ],
    correctAnswer: 1,
    explanation: 'A useful defect report must include step-by-step reproduction instructions, test data used, environmental details, expected vs. actual results, and attachments (stack traces, screenshots).',
    officialRef: 'PCET-30-01 Block 1.2 - Defect Reporting Quality',
    tags: ['defect-report', 'reproducibility', 'best-practices']
  },
  {
    id: 'pcet-1-034',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Beginner',
    question: 'Consider the following Python code snippet. Which line contains the "Defect"?',
    codeSnippet: '1: def is_adult(age: int) -> bool:\n2:     # Requirement: age 18 and older is an adult\n3:     if age > 18:    # Line 3\n4:         return True\n5:     return False',
    options: [
      'Line 1, because int type annotations are illegal in Python',
      'Line 3, because it uses > instead of >=, failing the boundary condition for age 18',
      'Line 4, because True should be formatted in lowercase',
      'Line 5, because a function cannot return a boolean'
    ],
    correctAnswer: 1,
    explanation: 'Line 3 contains the defect: it checks `age > 18` rather than `age >= 18`. When `is_adult(18)` is called, it returns `False`, causing a failure against the requirement.',
    officialRef: 'PCET-30-01 Block 1.2 - Identification of Defects',
    tags: ['boundary-defect', 'logical-error', 'code-inspection']
  },
  {
    id: 'pcet-1-035',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Intermediate',
    question: 'What is a "Bug Bounty" program in modern software quality?',
    codeSnippet: '# Security disclosure policy:\n# Ethical hackers find security defects in production and report them responsibly in exchange for recognition and rewards.',
    options: [
      'A penalty deducted from developers\' paychecks for every failing test',
      'A reward initiative offering compensation to individuals who responsibly find and report software vulnerabilities',
      'A Python package that automatically cleans the git commit history',
      'A sales promotion offering software discounts to customers who report bugs'
    ],
    correctAnswer: 1,
    explanation: 'A Bug Bounty program compensates independent security researchers and testers for discovering and responsibly disclosing vulnerabilities and defects before malicious actors exploit them.',
    officialRef: 'PCET-30-01 Block 1.2 - Quality and Security',
    tags: ['bug-bounty', 'security', 'defect-discovery']
  },
  {
    id: 'pcet-1-036',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Intermediate',
    question: 'What is an "Anomaly" in software testing?',
    codeSnippet: '# During test execution:\n# The application responds with 200 OK, but takes 12 seconds instead of the usual 0.2s.\n# Is this expected? The tester logs an anomaly for investigation.',
    options: [
      'A condition that deviates from expectations based on requirements specifications, design documents, or standards',
      'A Python variable that is misspelled in a docstring',
      'A hardware motherboard failure that requires replacement',
      'An intentional Easter egg left by the lead developer'
    ],
    correctAnswer: 0,
    explanation: 'An anomaly is any condition that deviates from expectations, whether based on requirements specifications, design documents, user expectations, or operational baselines.',
    officialRef: 'PCET-30-01 Block 1.2 - Anomalies and Incidents',
    tags: ['anomaly', 'terminology', 'investigation']
  },
  {
    id: 'pcet-1-037',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Terminology',
    difficulty: 'Beginner',
    question: 'Which of the following describes a "Heisenbug"?',
    codeSnippet: '# Tester finds a crash in production.\n# Developer tries to run it under pdb debugger: the crash disappears!\n# Once debugger is removed: the crash randomly reappears.',
    options: [
      'A bug named after Guido van Rossum',
      'A bug that seems to disappear or alter its behavior when one attempts to observe, debug, or isolate it',
      'A syntax error caught before bytecode compilation',
      'A defect caused by infinite recursion in Python'
    ],
    correctAnswer: 1,
    explanation: 'A Heisenbug is a software bug that seems to disappear or change its behavior when an attempt is made to isolate or debug it, often related to race conditions, timing, or uninitialized memory.',
    officialRef: 'PCET-30-01 Block 1.2 - Debugging and Defect Types',
    tags: ['heisenbug', 'concurrency', 'debugging-traps']
  },
  {
    id: 'pcet-1-038',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Management',
    difficulty: 'Intermediate',
    question: 'What is "Defect Density" and how is it calculated?',
    codeSnippet: '# Module metrics:\n# Total defects discovered: 15\n# Total Lines of Code (KLOC): 3,000 lines (3 KLOC)\n# Defect Density = 15 / 3 = 5 defects per KLOC',
    options: [
      'The number of bytes occupied by bug tickets in a PostgreSQL database',
      'The ratio of confirmed defects to the size of the software (typically defects per thousand lines of code or function points)',
      'The number of developers assigned to fix a single bug simultaneously',
      'The percentage of CPU memory consumed by failing pytest suites'
    ],
    correctAnswer: 1,
    explanation: 'Defect Density is a standard software quality metric calculated as the number of confirmed defects divided by the size of the component (e.g., defects per KLOC or per story point).',
    officialRef: 'PCET-30-01 Block 1.2 - Quality Metrics',
    tags: ['defect-density', 'metrics', 'code-quality']
  },
  {
    id: 'pcet-1-039',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Management',
    difficulty: 'Intermediate',
    question: 'What is a "Regression Defect"?',
    codeSnippet: '# Commit 124 introduces a new currency converter.\n# Immediately afterward, the existing user login module stops working.\n# Login worked perfectly in all previous builds.',
    options: [
      'A mathematical defect in a machine learning linear regression model',
      'A defect introduced into previously working functionality as an unintended side effect of a new code change or bug fix',
      'A defect that existed in the very first version of the software',
      'A defect that can only be found using exploratory testing'
    ],
    correctAnswer: 1,
    explanation: 'A regression defect is a flaw unintentionally introduced into previously working features as a result of a recent code modification, bug fix, dependency update, or refactoring.',
    officialRef: 'PCET-30-01 Block 1.2 - Regression Defects',
    tags: ['regression', 'side-effects', 'regression-testing']
  },
  {
    id: 'pcet-1-040',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.2',
    category: 'Defect Lifecycle',
    difficulty: 'Beginner',
    question: 'When a defect report is marked as "Duplicate", what does this mean?',
    codeSnippet: '# Bug #104: "Checkout button unresponsive on mobile"\n# Bug #108: "Cannot click checkout on iOS Safari"\n# Triage action: Mark Bug #108 as Duplicate of Bug #104.',
    options: [
      'The bug was cloned to two different repositories simultaneously',
      'The reported defect describes the same underlying problem that is already tracked in an existing ticket',
      'The developer fixed the bug twice in two branches',
      'The defect was produced by a duplicate line of code'
    ],
    correctAnswer: 1,
    explanation: 'Marking a defect report as Duplicate means another ticket already describes the exact same issue or root cause, consolidating tracking to a single active ticket.',
    officialRef: 'PCET-30-01 Block 1.2 - Defect Triage and Deduplication',
    tags: ['duplicate', 'triage', 'defect-tracking']
  },

  // Chapter 1.3: Seven Fundamental Principles of Testing (Cards 41-50 in Part 1)
  {
    id: 'pcet-1-041',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'According to the Seven Principles of Testing, what does Principle 1 state regarding defect detection?',
    codeSnippet: '# Pytest result:\n# ===== 240 passed in 1.42s =====\n# Does this mean the application has zero bugs?',
    options: [
      'Testing proves that no defects remain in the software',
      'Testing shows the presence of defects, not their absence',
      'If all tests pass, the software is mathematically proven 100% reliable',
      'Testing guarantees complete customer satisfaction'
    ],
    correctAnswer: 1,
    explanation: 'Testing Principle 1: Testing shows the presence of defects, not their absence. Testing reduces the probability of undiscovered defects remaining, but finding no defects does not prove complete absence.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'principle-1', 'fundamentals']
  },
  {
    id: 'pcet-1-042',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'Why is "Exhaustive Testing" impossible for non-trivial software (Principle 2)?',
    codeSnippet: 'def process_order(product_id: int, quantity: int, discount_pct: float, user_tier: str) -> bool:\n    # With infinite possible combinations of inputs, timing, and environmental states:\n    ...\n# How many total test cases would be needed to test every permutation?',
    options: [
      'Python only permits running 1,000 test cases per file',
      'Testing all combinations of inputs, preconditions, and execution paths is computationally and economically infeasible',
      'CPython bytecode crashes when more than 10,000 assertions are evaluated',
      'Modern agile frameworks forbid testing more than 5 cases per function'
    ],
    correctAnswer: 1,
    explanation: 'Principle 2 states that testing everything (all combinations of inputs and preconditions) is impossible, except in trivial cases. Instead, risk analysis, equivalence partitioning, and boundary value analysis guide test prioritization.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'exhaustive-testing', 'combinatorics']
  },
  {
    id: 'pcet-1-043',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'What is the core benefit advocated by Principle 3: "Early Testing" (Shift-Left)?',
    codeSnippet: '# Cost to fix a defect over project timeline:\n# Requirements phase: $100\n# Coding phase: $1,000\n# Production phase: $100,000 (reputation, downtime, urgent hotfix)',
    options: [
      'Testing early prevents testers from having to work overtime during releases',
      'Catching defects early in requirements and design minimizes expensive rework and escalation costs',
      'Early testing removes the need for any integration testing later in the lifecycle',
      'It ensures developers write code before requirements are finalized'
    ],
    correctAnswer: 1,
    explanation: 'Principle 3 (Early Testing / Shift-Left): Starting testing activities early in the software development lifecycle prevents defect amplification, saving substantial time and financial expense.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'shift-left', 'early-testing']
  },
  {
    id: 'pcet-1-044',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'What phenomenon is described by Principle 4: "Defect Clustering"?',
    codeSnippet: '# In a project with 20 modules:\n# 80% of all recorded defects originate from just 2 modules (payment_engine.py and legacy_sync.py).\n# What principle explains this distribution?',
    options: [
      'Pesticide Paradox',
      'Defect Clustering (Pareto Principle / 80-20 Rule)',
      'Absence-of-Errors Fallacy',
      'Exhaustive Testing Impossibility'
    ],
    correctAnswer: 1,
    explanation: 'Principle 4 (Defect Clustering): A small number of modules usually contain most of the defects discovered during pre-release testing or are responsible for most operational failures (Pareto 80/20 rule).',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'defect-clustering', 'pareto']
  },
  {
    id: 'pcet-1-045',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'What is the "Pesticide Paradox" (Principle 5) in software testing?',
    codeSnippet: '# For 6 months, the team executes the EXACT same 50 test cases without change.\n# Every run passes 100%.\n# Yet users report dozens of new defects in production. Why?',
    options: [
      'Bugs in Python adapt biologically to the operating system',
      'If the same tests are repeated over and over, eventually the same set of test cases will no longer find any new defects',
      'Using insecticides in server rooms damages solid-state drives',
      'Tests should only be executed once and then discarded'
    ],
    correctAnswer: 1,
    explanation: 'Principle 5 (Pesticide Paradox): Just as pests develop resistance to repeated pesticide use, software tests that are executed repeatedly without modification lose their effectiveness in catching new defects. Test cases must be regularly reviewed and updated.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'pesticide-paradox', 'test-maintenance']
  },
  {
    id: 'pcet-1-046',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'How does Principle 6: "Testing is Context Dependent" apply when comparing an e-commerce website with medical infusion pump firmware?',
    codeSnippet: '# System A: Web shop selling vintage t-shirts\n# System B: Software controlling intravenous dosage of insulin in an ICU hospital',
    options: [
      'Both systems must use identical testing strategies, tools, and regulatory rigor',
      'Testing is conducted differently depending on the context, risk, safety-criticality, and regulatory environment of each application',
      'E-commerce systems require more formal mathematical verification than medical devices',
      'Context only refers to the dark mode vs. light mode theme of the application'
    ],
    correctAnswer: 1,
    explanation: 'Principle 6 (Testing is context dependent): Testing strategy, coverage requirements, and intensity differ based on context (e.g., an agile mobile gaming app vs. safety-critical aviation or medical firmware).',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'context-dependent', 'risk-criticality']
  },
  {
    id: 'pcet-1-047',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'What is the "Absence-of-Errors Fallacy" (Principle 7)?',
    codeSnippet: '# A development team delivers software with 0 known open bugs and 100% test pass rate.\n# However, the software does not support the core workflow needed by users,\n# causing the business to abandon the project.',
    options: [
      'The mistaken belief that fixing all defects automatically produces a usable, successful system that satisfies user needs',
      'The belief that bugs can never be found by automated linters',
      'The assumption that all Python code will eventually throw an exception',
      'The requirement that every error must be logged to standard error'
    ],
    correctAnswer: 0,
    explanation: 'Principle 7 (Absence-of-errors fallacy): Finding and fixing defects does not ensure success if the system built is unusable, fails to meet user expectations, or does not support the business goals.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'absence-of-errors', 'user-validation']
  },
  {
    id: 'pcet-1-048',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'A manager asks: "Why haven\'t we tested all 4 billion possible 32-bit integer inputs for this function?" Which testing principle explains why this was not done?',
    codeSnippet: 'def square(n: int) -> int:\n    return n * n',
    options: [
      'Principle 1: Testing shows the presence of defects',
      'Principle 2: Exhaustive testing is impossible',
      'Principle 5: Pesticide paradox',
      'Principle 7: Absence-of-errors fallacy'
    ],
    correctAnswer: 1,
    explanation: 'Principle 2 dictates that exhaustive testing is impossible due to time, economic, and computational constraints. Instead, testers apply sampling techniques like Equivalence Partitioning.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'exhaustive-testing', 'boundary-values']
  },
  {
    id: 'pcet-1-049',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'A QA lead notices that after 3 months of refactoring, the automated test suite continues to pass but customer complaints are rising. What practical action counteracts the Pesticide Paradox?',
    codeSnippet: '# Current suite: test_v1_legacy.py (last modified 6 months ago)\n# Customer issue: New REST API endpoints and payload variations are untested.',
    options: [
      'Delete the automated test suite and test everything manually',
      'Review existing test cases, retire redundant checks, and write new tests covering new inputs and features',
      'Run the exact same test suite 10 times consecutively every night',
      'Increase the timeout threshold for pytest from 30s to 300s'
    ],
    correctAnswer: 1,
    explanation: 'To overcome the Pesticide Paradox (Principle 5), test suites must be regularly reviewed, updated, and enhanced with new test scenarios and edge cases.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'pesticide-paradox', 'test-maintenance']
  },
  {
    id: 'pcet-1-050',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'How does Defect Clustering guide the allocation of testing effort during regression testing?',
    codeSnippet: '# Defect history analysis:\n# auth_module.py: 42 bugs logged in past 6 months\n# static_help.py: 0 bugs logged in past 6 months\n# Where should the tester focus deep exploration?',
    options: [
      'Spend 100% of testing effort on static_help.py because it hasn\'t been tested enough',
      'Focus higher testing effort and deeper test case design on auth_module.py while maintaining baseline checks on others',
      'Ignore auth_module.py because developers must have fixed all its bugs by now',
      'Equally divide time regardless of defect history'
    ],
    correctAnswer: 1,
    explanation: 'Defect clustering informs risk-based testing: modules that have historically exhibited high defect density or high complexity warrant greater testing focus.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'defect-clustering', 'risk-based-testing']
  }
];
