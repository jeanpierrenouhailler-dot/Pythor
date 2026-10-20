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
# CHAPTER 6.1: Fundamentals of Test-Driven Development (TDD) (Cards 1-20)
# =========================================================================
cards.extend([
    {
        "id": "pcat-6-001",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Fundamentals",
        "difficulty": "Beginner",
        "question": "What are the three canonical phases of the Test-Driven Development (TDD) cycle in their exact sequential order?",
        "codeSnippet": "# The TDD Loop:\n# Phase 1: ...\n# Phase 2: ...\n# Phase 3: ...",
        "options": [
            "Plan, Code, Test",
            "Red, Green, Refactor",
            "Draft, Verify, Commit",
            "Design, Automate, Deploy"
        ],
        "correctAnswer": 1,
        "explanation": "The TDD micro-cycle formulated by Kent Beck consists of Red (write a failing test), Green (write minimum code to pass), and Refactor (clean up code while keeping tests green).",
        "officialRef": "PCAT-31-0x Block 6.1: The TDD Cycle: Red, Green, Refactor",
        "tags": ["tdd", "red-green-refactor", "fundamentals"]
    },
    {
        "id": "pcat-6-002",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Red Phase",
        "difficulty": "Beginner",
        "question": "In the 'Red' phase of TDD, what is the developer's immediate goal?",
        "codeSnippet": "def test_calculate_interest():\n    # calculate_interest does not exist yet!\n    assert calculate_interest(1000, 0.05) == 50.0",
        "options": [
            "Write a comprehensive implementation that handles all edge cases",
            "Write a test for a single increment of functionality and verify that it fails (for the expected reason)",
            "Run performance benchmarks to measure CPU utilization",
            "Write user manual documentation"
        ],
        "correctAnswer": 1,
        "explanation": "In the Red phase, the developer writes a small, focused test specifying a desired behavior and runs it to ensure it fails. Running it confirms that the test is valid and not passing trivially.",
        "officialRef": "PCAT-31-0x Block 6.1: The Red Phase Objectives",
        "tags": ["tdd", "red-phase", "test-first"]
    },
    {
        "id": "pcat-6-003",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Green Phase",
        "difficulty": "Beginner",
        "question": "What is the primary rule guiding code authoring during the 'Green' phase of TDD?",
        "codeSnippet": "def calculate_interest(principal, rate):\n    return 50.0  # Simplest code to make current test pass!",
        "options": [
            "Write the simplest code that makes the failing test pass, even if it uses hardcoded values or naive algorithms",
            "Write a generic, enterprise-grade architecture with abstract factory patterns",
            "Optimize algorithm complexity to O(1)",
            "Write at least 5 additional unit tests"
        ],
        "correctAnswer": 0,
        "explanation": "In the Green phase, the objective is to get the test to pass as quickly as possible with minimal code. Quick solutions (like fake it till you make it) keep the feedback loop fast and focused.",
        "officialRef": "PCAT-31-0x Block 6.1: The Green Phase Rules",
        "tags": ["tdd", "green-phase", "minimal-code"]
    },
    {
        "id": "pcat-6-004",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Refactor Phase",
        "difficulty": "Beginner",
        "question": "During the 'Refactor' phase of TDD, what constraint MUST be respected at all times?",
        "codeSnippet": "# Refactor phase:\n# Eliminating duplication, renaming variables for clarity...\n# Critical constraint: All tests MUST stay green!",
        "options": [
            "New functional behavior must be added to the production code",
            "External observable behavior must remain unchanged and all tests must stay green",
            "Existing unit tests must be deleted",
            "All functions must be converted to lambda expressions"
        ],
        "correctAnswer": 1,
        "explanation": "Refactoring is modifying internal code structure without altering external behavior. The comprehensive test suite acts as a safety harness, ensuring changes don't break existing features.",
        "officialRef": "PCAT-31-0x Block 6.1: The Refactor Phase Discipline",
        "tags": ["tdd", "refactoring", "safety-net"]
    },
    {
        "id": "pcat-6-005",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Techniques",
        "difficulty": "Intermediate",
        "question": "What is 'Triangulation' in Test-Driven Development?",
        "codeSnippet": "# Test 1:\nassert add(2, 2) == 4   # could be satisfied by: return 4\n# Test 2 (Triangulation):\nassert add(2, 3) == 5   # forces real generalization: return a + b",
        "options": [
            "Locating defects using 3 GPS satellites",
            "Writing a second test with different inputs to force the implementation to generalize beyond a hardcoded constant",
            "Having 3 developers review each line of test code",
            "Running tests on 3 different operating systems simultaneously"
        ],
        "correctAnswer": 1,
        "explanation": "Triangulation is a TDD technique where you write two or more test examples with different inputs to drive general logic rather than allowing hardcoded values to satisfy the test.",
        "officialRef": "PCAT-31-0x Block 6.1: Triangulation Technique",
        "tags": ["tdd", "triangulation", "generalization"]
    },
    {
        "id": "pcat-6-006",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Benefits",
        "difficulty": "Intermediate",
        "question": "Which of the following is a primary architectural benefit of practicing TDD?",
        "codeSnippet": "# By writing tests first, tight coupling is immediately apparent:\n# If a class is difficult to test, its design is flawed.",
        "options": [
            "It automatically optimizes database indexing",
            "It drives loose coupling, high cohesion, and testable modular design because code must be testable from the start",
            "It eliminates the need for Python's garbage collector",
            "It increases total lines of production code by 500%"
        ],
        "correctAnswer": 1,
        "explanation": "Writing tests first forces the developer to design code from the client's perspective, naturally leading to modularity, dependency injection, loose coupling, and clean interfaces.",
        "officialRef": "PCAT-31-0x Block 6.1: Architectural Benefits of TDD",
        "tags": ["tdd", "design", "modular-architecture", "clean-code"]
    },
    {
        "id": "pcat-6-007",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Rules",
        "difficulty": "Intermediate",
        "question": "According to Robert C. Martin's (Uncle Bob) Three Laws of TDD, when are you permitted to write production code?",
        "codeSnippet": "# Uncle Bob's 1st Law of TDD:\n# You may not write any production code until...",
        "options": [
            "Only when the product manager has signed off on the pull request",
            "Only to pass a currently failing unit test",
            "Whenever you have a great architectural idea",
            "During scheduled maintenance windows"
        ],
        "correctAnswer": 1,
        "explanation": "Uncle Bob's Laws of TDD state: 1) You are not allowed to write any production code unless it is to make a failing unit test pass. 2) You are only allowed to write enough of a unit test to fail. 3) You are only allowed to write enough production code to pass.",
        "officialRef": "PCAT-31-0x Block 6.1: Three Laws of TDD",
        "tags": ["tdd", "uncle-bob", "rules-of-tdd"]
    },
    {
        "id": "pcat-6-008",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Red Phase",
        "difficulty": "Intermediate",
        "question": "Why is it vital to verify that a new test actually FAILS before implementing the code to fix it?",
        "codeSnippet": "def test_email_validation():\n    # Running test BEFORE writing validate_email()\n    assert validate_email('bad_address') is False",
        "options": [
            "To prove that the test is actually testing something and would detect a regression rather than passing trivially (false positive)",
            "To warm up the Python bytecode cache",
            "Because Python unittest requires at least one failure in memory",
            "To benchmark the failure speed"
        ],
        "correctAnswer": 0,
        "explanation": "If a test passes before you write any production code, either the feature already exists, or more dangerously, the test is tautological (does not actually assert what you think) and provides false confidence.",
        "officialRef": "PCAT-31-0x Block 6.1: Verifying Test Failure",
        "tags": ["tdd", "red-phase", "false-positives"]
    },
    {
        "id": "pcat-6-009",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Techniques",
        "difficulty": "Intermediate",
        "question": "In TDD literature, what is the strategy 'Fake It ('Til You Make It)'?",
        "codeSnippet": "def is_leap_year(year):\n    return True  # Faking it for test_is_leap_year(2000)",
        "options": [
            "Lying about code coverage metrics to project managers",
            "Returning a constant hardcoded answer first to get to Green quickly, then replacing it with real logic through triangulation or refactoring",
            "Replacing all unit tests with mock stubs",
            "Writing tests that never assert anything"
        ],
        "correctAnswer": 1,
        "explanation": "'Fake It' is a deliberate TDD tactic to return a constant value to quickly reach a passing test and verify the wiring, before gradually introducing the real algorithm.",
        "officialRef": "PCAT-31-0x Block 6.1: TDD Implementation Strategies",
        "tags": ["tdd", "fake-it", "tactics"]
    },
    {
        "id": "pcat-6-010",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Philosophy",
        "difficulty": "Beginner",
        "question": "Who is credited with rediscovering and formalizing Test-Driven Development as part of Extreme Programming (XP)?",
        "codeSnippet": "# Author of 'Test-Driven Development: By Example' (2002)",
        "options": [
            "Kent Beck",
            "Linus Torvalds",
            "Guido van Rossum",
            "Bjarne Stroustrup"
        ],
        "correctAnswer": 0,
        "explanation": "Kent Beck developed Extreme Programming and authored 'Test-Driven Development: By Example', formalizing TDD as a core agile engineering discipline.",
        "officialRef": "PCAT-31-0x Block 6.1: History of TDD",
        "tags": ["tdd", "kent-beck", "history"]
    },
    {
        "id": "pcat-6-011",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Rhythm",
        "difficulty": "Intermediate",
        "question": "What is the typical time duration of a single Red-Green-Refactor micro-cycle in mature TDD practice?",
        "codeSnippet": "# Micro-cycle loop:\n# Write 1 assert -> Run -> Write 3 lines of code -> Run -> Refactor -> Repeat",
        "options": [
            "A few seconds to a few minutes (typically 1 to 5 minutes)",
            "One entire two-week sprint",
            "Exactly 24 hours",
            "3 to 4 days"
        ],
        "correctAnswer": 0,
        "explanation": "TDD operates at a micro-cadence of seconds to minutes. Keeping steps tiny ('baby steps') ensures that if anything breaks, the cause is immediately obvious in the last 2-3 lines written.",
        "officialRef": "PCAT-31-0x Block 6.1: Cadence and Baby Steps in TDD",
        "tags": ["tdd", "micro-cycle", "baby-steps"]
    },
    {
        "id": "pcat-6-012",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD vs Test-After",
        "difficulty": "Intermediate",
        "question": "What is a common defect observed when tests are written AFTER the production code has already been completed?",
        "codeSnippet": "# Test-After syndrome:\n# Code is written with hardcoded dependencies, private methods, and global state.",
        "options": [
            "The production code is often difficult to test because it wasn't designed for testability, and developers tend to write tests that merely confirm what the code already does rather than what was required",
            "The tests will execute significantly slower due to interpreter caching",
            "Python does not support testing existing code",
            "It guarantees 100% bug-free delivery"
        ],
        "correctAnswer": 0,
        "explanation": "Writing tests after often leads to Confirmation Bias (testing how the code was built rather than requirements) and untestable tightly coupled architectures.",
        "officialRef": "PCAT-31-0x Block 6.1: Test-First vs Test-After",
        "tags": ["tdd", "test-after", "confirmation-bias"]
    },
    {
        "id": "pcat-6-013",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Misconceptions",
        "difficulty": "Intermediate",
        "question": "Which statement correctly distinguishes TDD from simple unit testing?",
        "codeSnippet": "# Unit testing = Verification activity\n# TDD = Design methodology driven by tests",
        "options": [
            "Unit testing is a quality assurance activity; TDD is a software design and specification technique that uses tests to drive code architecture",
            "Unit testing only works in Java while TDD is exclusive to Python",
            "TDD completely replaces the need for integration, performance, and security testing",
            "TDD requires writing all tests before any coding begins in a 100-page document"
        ],
        "correctAnswer": 0,
        "explanation": "TDD is fundamentally an iterative design tool that produces a comprehensive regression test suite as a natural byproduct.",
        "officialRef": "PCAT-31-0x Block 6.1: TDD as Design Discipline",
        "tags": ["tdd", "design-technique", "unit-testing"]
    },
    {
        "id": "pcat-6-014",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Red Phase",
        "difficulty": "Intermediate",
        "question": "In Python, does an AttributeError or ImportError indicating a class or function doesn't exist count as a valid 'Red' phase?",
        "codeSnippet": "def test_user_wallet():\n    from finance import Wallet # ImportError: cannot import name 'Wallet'\n    w = Wallet()",
        "options": [
            "Yes, compilation or import errors because the target unit does not exist yet are the first valid failure of the Red phase",
            "No, only assertion errors (AssertionError) count as Red phase",
            "No, import errors mean the test runner crashed",
            "Only in C/C++, not in Python"
        ],
        "correctAnswer": 0,
        "explanation": "In TDD, an initial test will fail because the target function or module doesn't exist yet (ImportError, NameError). This is a completely valid Red state before creating the skeleton.",
        "officialRef": "PCAT-31-0x Block 6.1: Red State Manifestations",
        "tags": ["tdd", "red-state", "ImportError"]
    },
    {
        "id": "pcat-6-015",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Techniques",
        "difficulty": "Advanced",
        "question": "What is 'Obvious Implementation' in TDD?",
        "codeSnippet": "# If the algorithm is trivial and immediately obvious:\ndef multiply(a, b):\n    return a * b  # Type it directly instead of faking it",
        "options": [
            "Typing the obvious, real solution immediately if it is trivial, rather than going through fake-it steps",
            "Publishing the code on GitHub",
            "Adding print statements to all functions",
            "Using auto-complete in VS Code"
        ],
        "correctAnswer": 0,
        "explanation": "If the solution to a simple problem is completely obvious and straightforward, typing the real implementation directly (rather than faking constants) is standard practice.",
        "officialRef": "PCAT-31-0x Block 6.1: Obvious Implementation Strategy",
        "tags": ["tdd", "strategies", "obvious-implementation"]
    },
    {
        "id": "pcat-6-016",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Regression Safety",
        "difficulty": "Beginner",
        "question": "How does TDD provide developers with 'fearless refactoring'?",
        "codeSnippet": "# Fast feedback:\n# Tests run in 200ms -> instantly notify developer if anything broke",
        "options": [
            "By disabling runtime error checking in Python",
            "By providing a comprehensive automated regression suite that immediately alerts if any structural alteration broke existing functionality",
            "By guaranteeing code runs without memory leaks",
            "By requiring legal waivers before commits"
        ],
        "correctAnswer": 1,
        "explanation": "A comprehensive, fast-running test suite creates a safety net, allowing developers to aggressively clean up code, modernize patterns, and simplify algorithms with confidence.",
        "officialRef": "PCAT-31-0x Block 6.1: Regression Safety and Fearless Refactoring",
        "tags": ["tdd", "refactoring", "safety"]
    },
    {
        "id": "pcat-6-017",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Anti-Patterns",
        "difficulty": "Intermediate",
        "question": "Which of the following is considered a harmful anti-pattern in TDD?",
        "codeSnippet": "# Anti-pattern:\n# Testing private implementation details:\ndef test_internal_hash_bucket_index():\n    h = MyMap()\n    assert h._hash_index('key') == 4",
        "options": [
            "Writing tests that couple tightly to private internal implementation details instead of public behavior",
            "Running tests frequently",
            "Writing small test methods",
            "Keeping test execution fast"
        ],
        "correctAnswer": 0,
        "explanation": "Testing internal implementation details makes tests brittle: any refactoring breaks the tests even if external behavior is completely correct. Tests should assert observable behavior.",
        "officialRef": "PCAT-31-0x Block 6.1: TDD Anti-Patterns (Brittle Tests)",
        "tags": ["anti-patterns", "brittle-tests", "black-box"]
    },
    {
        "id": "pcat-6-018",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Edge Cases",
        "difficulty": "Intermediate",
        "question": "In TDD, how should boundary conditions and edge cases (e.g. empty lists, negative numbers, None) be incorporated?",
        "codeSnippet": "def test_calculate_average_empty_list():\n    with pytest.raises(ValueError):\n        calculate_average([])",
        "options": [
            "Added as subsequent failing tests in the TDD cycle, driving error handling and validation logic",
            "Written only after the product is deployed to production",
            "Ignored because unit tests only cover the happy path",
            "Handled by operating system hardware interrupts"
        ],
        "correctAnswer": 0,
        "explanation": "Each edge case or boundary condition is introduced as a distinct new failing test in the TDD cycle, incrementally driving validation, exception handling, and boundary logic.",
        "officialRef": "PCAT-31-0x Block 6.1: Driving Edge Cases with TDD",
        "tags": ["tdd", "edge-cases", "boundary-testing"]
    },
    {
        "id": "pcat-6-019",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Lifecycle",
        "difficulty": "Intermediate",
        "question": "What should a developer do if, during the Refactor phase, a test unexpectedly turns RED?",
        "codeSnippet": "# Refactor step -> Test turns Red!\n# Action:",
        "options": [
            "Stop, undo or revert the last refactoring step, return to GREEN, and rethink the refactoring in smaller steps",
            "Change the test assertion so it passes again",
            "Delete the failing test permanently",
            "Continue writing more production code"
        ],
        "correctAnswer": 0,
        "explanation": "If a test turns red during refactoring, you have altered behavior or made an error. The rule is to revert to the last working green state immediately, rather than debugging forward while red.",
        "officialRef": "PCAT-31-0x Block 6.1: Handling Refactor Breakages",
        "tags": ["refactoring", "revert", "discipline"]
    },
    {
        "id": "pcat-6-020",
        "section": "Section 6",
        "chapter": "6.1",
        "category": "TDD Summary",
        "difficulty": "Beginner",
        "question": "What is the primary artifact produced at the conclusion of a TDD-driven development effort?",
        "codeSnippet": "# Product + Test Suite",
        "options": [
            "Working, clean production code accompanied by a comprehensive, automated regression test suite specifying system behavior",
            "A Microsoft Word requirement specifications document",
            "A compiled C-extension binary",
            "A sequence of Jira screenshots"
        ],
        "correctAnswer": 0,
        "explanation": "TDD delivers well-designed, modular production code backed by an exhaustive suite of automated unit tests that act as living documentation and continuous regression guards.",
        "officialRef": "PCAT-31-0x Block 6.1: TDD Deliverables",
        "tags": ["tdd", "deliverables", "living-documentation"]
    }
])

# =========================================================================
# CHAPTER 6.2: Principles and Foundations of Behavior-Driven Development (BDD) (Cards 21-40)
# =========================================================================
cards.extend([
    {
        "id": "pcat-6-021",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Origins",
        "difficulty": "Beginner",
        "question": "Who created Behavior-Driven Development (BDD) in the early 2000s as an evolution of Test-Driven Development?",
        "codeSnippet": "# Originator of BDD and the 'Given-When-Then' structure",
        "options": [
            "Dan North",
            "Martin Fowler",
            "Guido van Rossum",
            "Alan Turing"
        ],
        "correctAnswer": 0,
        "explanation": "Dan North created BDD in 2003-2006 to overcome common pitfalls and confusion surrounding TDD (such as 'where to start', 'what to test', and 'how to name tests').",
        "officialRef": "PCAT-31-0x Block 6.2: Origins and Evolution of BDD",
        "tags": ["bdd", "dan-north", "history"]
    },
    {
        "id": "pcat-6-022",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "Ubiquitous Language",
        "difficulty": "Intermediate",
        "question": "What is the role of a 'Ubiquitous Language' in Behavior-Driven Development?",
        "codeSnippet": "# Domain concepts shared across the entire team:\n# Customer, Cart, Checkout, BillingAddress",
        "options": [
            "A shared, unambiguous vocabulary used by business stakeholders, developers, and testers alike to describe system behavior without technical jargon",
            "A universal programming language that runs on all computers",
            "English subtitles for video calls",
            "Standard SQL database queries"
        ],
        "correctAnswer": 0,
        "explanation": "Ubiquitous Language (borrowed from Domain-Driven Design) establishes common domain terminology shared by business analysts, developers, and QA, eliminating translation errors.",
        "officialRef": "PCAT-31-0x Block 6.2: The Ubiquitous Language in BDD",
        "tags": ["ubiquitous-language", "ddd", "collaboration"]
    },
    {
        "id": "pcat-6-023",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "Specification by Example",
        "difficulty": "Intermediate",
        "question": "What is 'Specification by Example' (SBE) in the context of BDD?",
        "codeSnippet": "# Concrete realistic example:\n# Given an account with balance $100\n# When the user withdraws $40\n# Then the account balance should be $60",
        "options": [
            "Using concrete, real-world examples to clarify requirements and illustrate business rules, which double as automated executable acceptance tests",
            "Providing code samples in Python documentation comments",
            "Writing tests using random numbers generated by faker libraries",
            "Giving new developers sample code during onboarding"
        ],
        "correctAnswer": 0,
        "explanation": "Specification by Example uses realistic, concrete examples to explore, define, and document requirements during conversations, which then become automated executable specifications.",
        "officialRef": "PCAT-31-0x Block 6.2: Specification by Example",
        "tags": ["specification-by-example", "concrete-examples", "bdd"]
    },
    {
        "id": "pcat-6-024",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "The Three Amigos",
        "difficulty": "Beginner",
        "question": "Who are the participants in the classic 'Three Amigos' meeting in BDD?",
        "codeSnippet": "# The Three Amigos Triad:\n# Role 1: Business / Product Owner (What problem are we solving?)\n# Role 2: Developer (How will we build it?)\n# Role 3: QA / Tester (What could go wrong? Edge cases?)",
        "options": [
            "Product Owner (Business), Developer, and Tester (QA)",
            "Scrum Master, Agile Coach, and Department Manager",
            "Frontend Developer, Backend Developer, and DevOps Engineer",
            "CEO, CFO, and CTO"
        ],
        "correctAnswer": 0,
        "explanation": "The Three Amigos represents the three key viewpoints: Business (describing goals/requirements), Development (feasibility/implementation), and Testing (edge cases/quality).",
        "officialRef": "PCAT-31-0x Block 6.2: The Three Amigos Meeting",
        "tags": ["three-amigos", "collaboration", "agile"]
    },
    {
        "id": "pcat-6-025",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "Shift-Left Testing",
        "difficulty": "Intermediate",
        "question": "How does BDD enable 'Shift-Left' quality engineering?",
        "codeSnippet": "# Defect prevention before code is written:\n# Requirements conversation -> ambiguous rules clarified BEFORE implementation",
        "options": [
            "By pushing testing activities earlier in the development lifecycle (into requirements discussions), preventing defects before code is written",
            "By shifting keyboard keys to the left side of the desk",
            "By delaying all testing until 24 hours before release",
            "By automating tests using left-recursive grammars"
        ],
        "correctAnswer": 0,
        "explanation": "Shift-Left means moving testing earlier. BDD does this at the earliest stage: conversations during story grooming surface misunderstandings and missing requirements before development starts.",
        "officialRef": "PCAT-31-0x Block 6.2: Shift-Left Testing with BDD",
        "tags": ["shift-left", "defect-prevention", "quality"]
    },
    {
        "id": "pcat-6-026",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "User Stories",
        "difficulty": "Beginner",
        "question": "What is the standard Connextra format for user stories widely utilized in BDD?",
        "codeSnippet": "# User Story Template:\n# As a [role]\n# I want [feature/action]\n# So that [business benefit]",
        "options": [
            "As a <role>, I want <feature>, So that <business value/benefit>",
            "Given <input>, When <compute>, Then <output>",
            "Create <table>, Insert <data>, Drop <database>",
            "Sprint <number>, Epic <name>, Estimate <points>"
        ],
        "correctAnswer": 0,
        "explanation": "The Connextra template ('As a [role], I want [feature], So that [benefit]') provides context on who needs the feature, what it does, and why it provides business value.",
        "officialRef": "PCAT-31-0x Block 6.2: User Story Formats",
        "tags": ["user-story", "connextra", "agile"]
    },
    {
        "id": "pcat-6-027",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Core Philosophy",
        "difficulty": "Intermediate",
        "question": "What is the primary problem that BDD solves in software engineering organizations?",
        "codeSnippet": "# Misalignment:\n# Business thought X -> Dev built Y -> QA tested Z",
        "options": [
            "Slow compiler speeds in Python",
            "The communication gap and misalignment between non-technical business stakeholders and technical engineering teams",
            "High cloud hosting costs on AWS",
            "Managing Git branch merge conflicts"
        ],
        "correctAnswer": 1,
        "explanation": "BDD's core mission is closing the communication chasm between business and technology. By using shared language and concrete examples, everyone aligns on what must be built.",
        "officialRef": "PCAT-31-0x Block 6.2: The Core Mission of BDD",
        "tags": ["bdd", "communication", "alignment"]
    },
    {
        "id": "pcat-6-028",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "Outside-In Development",
        "difficulty": "Intermediate",
        "question": "What is 'Outside-In' development in the context of BDD and TDD?",
        "codeSnippet": "# Step 1: Write failing high-level Acceptance / BDD Scenario (Outer loop)\n# Step 2: Write failing unit tests & unit code to fulfill steps (Inner loop)\n# Step 3: High-level BDD scenario turns green!",
        "options": [
            "Starting development by deploying to production first",
            "Starting from user-visible external behavior (acceptance scenarios) and stepping down into internal unit tests and domain objects to fulfill that behavior",
            "Outsourcing unit testing to third-party vendors",
            "Designing database tables before talking to users"
        ],
        "correctAnswer": 1,
        "explanation": "Outside-In development (Double-Loop TDD) uses a high-level BDD acceptance scenario as the outer loop. Developers then enter the inner TDD loop to implement the needed units until the outer scenario passes.",
        "officialRef": "PCAT-31-0x Block 6.2: Outside-In Development and Double Loop",
        "tags": ["outside-in", "double-loop", "tdd-bdd"]
    },
    {
        "id": "pcat-6-029",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Misconceptions",
        "difficulty": "Intermediate",
        "question": "What is a major misconception regarding Behavior-Driven Development?",
        "codeSnippet": "# Misconception: 'BDD is just Cucumber/Behave automation tool!'",
        "options": [
            "Believing BDD is merely a software test automation tool (like Behave/Cucumber) rather than a collaborative communication practice",
            "Believing BDD can be used in agile projects",
            "Believing BDD scenarios can be automated in Python",
            "Believing BDD uses Given-When-Then"
        ],
        "correctAnswer": 0,
        "explanation": "BDD is first and foremost a collaborative conversation practice between stakeholders. Automating the resulting specifications is a valuable downstream byproduct, not the practice itself.",
        "officialRef": "PCAT-31-0x Block 6.2: BDD Misconceptions",
        "tags": ["bdd", "misconceptions", "collaboration"]
    },
    {
        "id": "pcat-6-030",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Triplet",
        "difficulty": "Beginner",
        "question": "Which standard triad of keywords structures scenarios in Behavior-Driven Development?",
        "codeSnippet": "# BDD Triplet:\n# ... [Initial context]\n# ... [Event/Action]\n# ... [Expected outcome]",
        "options": [
            "Arrange, Act, Assert",
            "Given, When, Then",
            "Setup, Run, Teardown",
            "Input, Process, Output"
        ],
        "correctAnswer": 1,
        "explanation": "Given, When, Then is the hallmark BDD behavioral triad conceived by Dan North (mapping closely to Arrange, Act, Assert from unit testing).",
        "officialRef": "PCAT-31-0x Block 6.2: Given, When, Then Syntax",
        "tags": ["given-when-then", "bdd-triplet", "syntax"]
    },
    {
        "id": "pcat-6-031",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Triplet",
        "difficulty": "Beginner",
        "question": "In the Given-When-Then structure, what is the role of the 'Given' step?",
        "codeSnippet": "Given a registered user with email 'user@example.com' and active subscription",
        "options": [
            "To describe the initial context, state, or preconditions of the system before an action occurs",
            "To trigger an asynchronous API call",
            "To verify the final database state",
            "To execute a cleanup script after test run"
        ],
        "correctAnswer": 0,
        "explanation": "'Given' sets up the context: the starting state, preconditions, or known world before the event or interaction under test happens.",
        "officialRef": "PCAT-31-0x Block 6.2: The Given Step",
        "tags": ["given", "preconditions", "context"]
    },
    {
        "id": "pcat-6-032",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Triplet",
        "difficulty": "Beginner",
        "question": "In the Given-When-Then structure, what is the role of the 'When' step?",
        "codeSnippet": "When the user clicks the 'Cancel Subscription' button",
        "options": [
            "To describe the key action, event, interaction, or trigger performed by the user or external actor",
            "To assert that no errors were thrown",
            "To establish database connections",
            "To format the report output"
        ],
        "correctAnswer": 0,
        "explanation": "'When' specifies the action or event — the transition that drives the system from the initial state toward an outcome.",
        "officialRef": "PCAT-31-0x Block 6.2: The When Step",
        "tags": ["when", "action", "event"]
    },
    {
        "id": "pcat-6-033",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Triplet",
        "difficulty": "Beginner",
        "question": "In the Given-When-Then structure, what is the role of the 'Then' step?",
        "codeSnippet": "Then the subscription status should be 'Cancelled'\nAnd a confirmation email should be sent to 'user@example.com'",
        "options": [
            "To assert and verify the expected outcome, observable results, or new state of the system",
            "To run the Python compiler",
            "To start a timer for performance metrics",
            "To define function parameters"
        ],
        "correctAnswer": 0,
        "explanation": "'Then' specifies the observable consequences, outcomes, and postconditions that must be verified to confirm the behavior.",
        "officialRef": "PCAT-31-0x Block 6.2: The Then Step",
        "tags": ["then", "postconditions", "assertions"]
    },
    {
        "id": "pcat-6-034",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "Living Documentation",
        "difficulty": "Intermediate",
        "question": "Why are automated BDD feature specifications referred to as 'Living Documentation'?",
        "codeSnippet": "# Living documentation:\n# Written in human language AND executed on every build in CI",
        "options": [
            "Because they are written in plain human language that anyone can read, AND they are continuously executed by automated CI tests, ensuring they never become stale or out-of-date",
            "Because they self-generate using artificial intelligence",
            "Because they must be updated manually every Friday",
            "Because they are printed out on biological paper"
        ],
        "correctAnswer": 0,
        "explanation": "Static documentation rot occurs because code evolves while docs don't. BDD specs are executable tests: if the code diverges from the documentation, the tests fail in CI, keeping docs constantly synchronized with reality.",
        "officialRef": "PCAT-31-0x Block 6.2: Concept of Living Documentation",
        "tags": ["living-documentation", "executable-spec", "ci"]
    },
    {
        "id": "pcat-6-035",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "INVEST Criteria",
        "difficulty": "Intermediate",
        "question": "What agile mnemonic criteria should user stories fulfill before BDD scenarios are written for them?",
        "codeSnippet": "# Story quality criteria:\n# I - Independent\n# N - Negotiable\n# V - Valuable\n# E - Estimable\n# S - Small\n# T - Testable",
        "options": [
            "SOLID",
            "INVEST",
            "FIRST",
            "ACID"
        ],
        "correctAnswer": 1,
        "explanation": "The INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable), created by Bill Wake, ensure stories are well-formed and ready for BDD elaboration.",
        "officialRef": "PCAT-31-0x Block 6.2: INVEST Criteria for User Stories",
        "tags": ["invest", "agile", "user-stories"]
    },
    {
        "id": "pcat-6-036",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Levels",
        "difficulty": "Intermediate",
        "question": "Can BDD principles (Given-When-Then) be applied at the unit test level in Python?",
        "codeSnippet": "def test_transfer_funds():\n    # Given\n    acc1 = Account(balance=100)\n    acc2 = Account(balance=50)\n    # When\n    transfer(acc1, acc2, 30)\n    # Then\n    assert acc1.balance == 70\n    assert acc2.balance == 80",
        "options": [
            "Yes, structuring unit tests or naming methods using Given-When-Then patterns enhances clarity and connects unit tests directly to domain behavior",
            "No, BDD is forbidden below system integration testing",
            "Only if cucumber-python is imported",
            "Python unittest raises an error if comments contain Given-When-Then"
        ],
        "correctAnswer": 0,
        "explanation": "BDD is a mindset. Structuring unit tests with Given-When-Then comments or method names (e.g. test_given_valid_account_when_withdrawing_then_balance_decreases) brings BDD clarity to low-level code.",
        "officialRef": "PCAT-31-0x Block 6.2: BDD at Unit Test Level",
        "tags": ["unit-testing", "given-when-then", "patterns"]
    },
    {
        "id": "pcat-6-037",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "Acceptance Criteria",
        "difficulty": "Beginner",
        "question": "What is the relationship between Acceptance Criteria and BDD Scenarios?",
        "codeSnippet": "# User Story: As a buyer...\n# Acceptance Criteria -> Formulated into concrete BDD Scenarios",
        "options": [
            "BDD scenarios are formal, executable expressions of a user story's acceptance criteria using concrete examples",
            "They are mutually exclusive alternatives",
            "Acceptance criteria are written by QA after code is released",
            "BDD scenarios replace the need for acceptance criteria"
        ],
        "correctAnswer": 0,
        "explanation": "Acceptance criteria define the conditions a story must satisfy. BDD scenarios turn those criteria into concrete, unambiguous, executable examples.",
        "officialRef": "PCAT-31-0x Block 6.2: Acceptance Criteria to BDD Scenarios",
        "tags": ["acceptance-criteria", "scenarios", "agile"]
    },
    {
        "id": "pcat-6-038",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Collaboration",
        "difficulty": "Intermediate",
        "question": "When should the Three Amigos discuss BDD scenarios in an iterative cycle?",
        "codeSnippet": "# Lifecycle timing:\n# Backlog refinement / Sprint planning BEFORE sprint development begins",
        "options": [
            "During backlog refinement or sprint planning before coding starts",
            "During production deployment",
            "Only when customer complaints exceed threshold",
            "After all Python code has been merged to main"
        ],
        "correctAnswer": 0,
        "explanation": "Three Amigos conversations must happen before implementation starts (e.g. during discovery / refinement) so shared understanding guides the code from day one.",
        "officialRef": "PCAT-31-0x Block 6.2: Timing of Three Amigos Conversations",
        "tags": ["three-amigos", "refinement", "timing"]
    },
    {
        "id": "pcat-6-039",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD Scope",
        "difficulty": "Intermediate",
        "question": "Why should BDD scenarios avoid technical jargon like 'SELECT * FROM users' or 'Click input #btn-submit'?",
        "codeSnippet": "# Declarative vs Imperative:\n# Bad (Technical): When I click xpath '//button[@id=\"sub\"]' and check table tbl_tx\n# Good (Business): When the customer confirms payment",
        "options": [
            "Technical jargon obscures the business rule, makes scenarios brittle to UI/DB redesigns, and prevents non-technical business partners from reviewing them",
            "The Gherkin parser cannot process symbols like # or *",
            "Python does not allow strings with SQL commands",
            "Technical terms increase test runtime by 10x"
        ],
        "correctAnswer": 0,
        "explanation": "BDD scenarios should express business intent (declarative style) rather than technical mechanics (imperative style). This makes tests resilient to UI refactorings and understandable to stakeholders.",
        "officialRef": "PCAT-31-0x Block 6.2: Declarative vs Imperative BDD",
        "tags": ["declarative", "business-intent", "resilience"]
    },
    {
        "id": "pcat-6-040",
        "section": "Section 6",
        "chapter": "6.2",
        "category": "BDD vs TDD Summary",
        "difficulty": "Beginner",
        "question": "Which phrase best summarizes the complementary relationship between TDD and BDD?",
        "codeSnippet": "# BDD: Building the RIGHT product (conformance to customer needs)\n# TDD: Building the product RIGHT (clean, bug-free, modular implementation)",
        "options": [
            "BDD ensures you build the right thing; TDD ensures you build the thing right",
            "BDD is for testers only; TDD is for managers only",
            "TDD has completely replaced BDD in modern software engineering",
            "BDD is synchronous while TDD is asynchronous"
        ],
        "correctAnswer": 0,
        "explanation": "BDD focuses on building the right product (ensuring requirements match customer expectations), while TDD focuses on building the product right (ensuring code is robust, modular, and defect-free).",
        "officialRef": "PCAT-31-0x Block 6.2: BDD and TDD Synergy",
        "tags": ["bdd", "tdd", "synergy", "quality"]
    }
])

# =========================================================================
# CHAPTER 6.3: Gherkin Syntax and Feature Specifications (Cards 41-50)
# =========================================================================
cards.extend([
    {
        "id": "pcat-6-041",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Syntax",
        "difficulty": "Beginner",
        "question": "What is Gherkin in the context of BDD frameworks like Behave and Cucumber?",
        "codeSnippet": "# File: transfer.feature\nFeature: Bank Transfers\n  Scenario: Successful transfer between accounts\n    Given ...",
        "options": [
            "A Business-Readable, Domain-Specific Language (DSL) that lets you describe system behavior without detailing how that behavior is implemented",
            "A Python database driver for SQLite",
            "A code formatter similar to Black",
            "A web scraping library for parsing HTML tables"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin is a plain-text domain-specific language using structural keywords (Feature, Scenario, Given, When, Then) to write executable specifications.",
        "officialRef": "PCAT-31-0x Block 6.3: Gherkin Language Foundations",
        "tags": ["gherkin", "dsl", "syntax"]
    },
    {
        "id": "pcat-6-042",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "File Conventions",
        "difficulty": "Beginner",
        "question": "What file extension is used for Gherkin specification files in Python BDD frameworks?",
        "codeSnippet": "# File naming:\n# shopping_cart.___?",
        "options": [
            ".feature",
            ".gherkin",
            ".bdd",
            ".spec.py"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin specifications are stored in plain text files with the '.feature' extension (e.g., checkout.feature).",
        "officialRef": "PCAT-31-0x Block 6.3: Feature File Conventions",
        "tags": [".feature", "conventions", "files"]
    },
    {
        "id": "pcat-6-043",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Keywords",
        "difficulty": "Beginner",
        "question": "Which keyword must be the very first structural keyword in any Gherkin .feature file?",
        "codeSnippet": "# First line of the file:\n___?: User Authentication and Password Reset",
        "options": [
            "Feature",
            "Epic",
            "Scenario",
            "Module"
        ],
        "correctAnswer": 0,
        "explanation": "Every valid Gherkin file starts with the 'Feature:' keyword followed by the title and optional high-level description.",
        "officialRef": "PCAT-31-0x Block 6.3: The Feature Keyword",
        "tags": ["Feature", "gherkin", "structure"]
    },
    {
        "id": "pcat-6-044",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Conjunctions",
        "difficulty": "Beginner",
        "question": "What keywords are used in Gherkin to link multiple preconditions or multiple assertions together without repeating Given or Then?",
        "codeSnippet": "Given an item in stock\n___? the user has sufficient credits\nWhen the user purchases the item\nThen the order status is 'Confirmed'\n___? the stock count is decremented",
        "options": [
            "And / But",
            "Also / Plus",
            "Next / Finally",
            "With / Without"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin provides 'And' and 'But' as natural conjunctions to chain multiple Givens, Whens, or Thens while maintaining fluid readable English.",
        "officialRef": "PCAT-31-0x Block 6.3: And and But Conjunctions",
        "tags": ["And", "But", "conjunctions"]
    },
    {
        "id": "pcat-6-045",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Background",
        "difficulty": "Intermediate",
        "question": "What is the purpose of the 'Background' section in a Gherkin feature file?",
        "codeSnippet": "Feature: Admin Portal\n\n  Background:\n    Given an administrator account exists\n    And the administrator is logged in\n\n  Scenario: Reset customer password\n    ...",
        "options": [
            "It defines common steps (preconditions) that are run before each and every scenario in that feature file",
            "It sets the desktop background image during headless test runs",
            "It runs tests in the background as asynchronous threads",
            "It archives old test results to S3 storage"
        ],
        "correctAnswer": 0,
        "explanation": "'Background:' lets you extract common Given steps that apply to every Scenario in that file, keeping individual scenarios DRY and focused on their specific deltas.",
        "officialRef": "PCAT-31-0x Block 6.3: The Background Keyword",
        "tags": ["Background", "dry", "preconditions"]
    },
    {
        "id": "pcat-6-046",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Parameterized Scenarios",
        "difficulty": "Intermediate",
        "question": "Which pair of keywords allows parameterizing a single scenario template across multiple data rows in Gherkin?",
        "codeSnippet": "___? Outline: Calculate shipping cost\n  Given package weight is <weight> kg\n  When destination is <zone>\n  Then shipping rate should be <price>\n\n___?:\n  | weight | zone    | price |\n  | 1      | local   | $5    |\n  | 5      | local   | $15   |\n  | 2      | express | $20   |",
        "options": [
            "Scenario Outline and Examples",
            "Scenario Matrix and Data",
            "Template and Values",
            "TestCase and Iterations"
        ],
        "correctAnswer": 0,
        "explanation": "'Scenario Outline' (or Scenario Template) combined with an 'Examples:' table runs the scenario once for each row in the table, substituting the angle-bracket placeholders <param> with values.",
        "officialRef": "PCAT-31-0x Block 6.3: Scenario Outline and Examples",
        "tags": ["Scenario-Outline", "Examples", "data-tables"]
    },
    {
        "id": "pcat-6-047",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Syntax",
        "difficulty": "Intermediate",
        "question": "In a Gherkin Scenario Outline, how are variable placeholders represented within the steps?",
        "codeSnippet": "Given a user named <username> with role <role>",
        "options": [
            "Angle brackets: <variable_name>",
            "Curly braces: {variable_name}",
            "Dollar signs: $variable_name",
            "Colons: :variable_name"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin standardizes angle brackets (<param>) for placeholders in Scenario Outline steps, which match column headers in the Examples table.",
        "officialRef": "PCAT-31-0x Block 6.3: Placeholder Syntax in Scenario Outlines",
        "tags": ["placeholders", "angle-brackets", "syntax"]
    },
    {
        "id": "pcat-6-048",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "DocStrings",
        "difficulty": "Intermediate",
        "question": "How are multiline text blocks (such as a JSON payload or email template) attached to a step in Gherkin?",
        "codeSnippet": "When I POST to '/api/users' with payload:\n  \"\"\"\n  {\n    \"name\": \"Alice\",\n    \"email\": \"alice@example.com\"\n  }\n  \"\"\"",
        "options": [
            "Enclosed in triple quotes (\"\"\") known as a DocString",
            "Enclosed in HTML <pre> tags",
            "Indented with 16 spaces",
            "Saved in an external .txt file"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin DocStrings use triple quotes (\"\"\" or ```) to pass multiline strings to step definitions (accessible via context.text in Behave).",
        "officialRef": "PCAT-31-0x Block 6.3: DocStrings in Gherkin",
        "tags": ["DocString", "multiline", "json"]
    },
    {
        "id": "pcat-6-049",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Step Data Tables",
        "difficulty": "Intermediate",
        "question": "How can tabular data be passed directly into a single Gherkin step?",
        "codeSnippet": "Given the following users exist in the system:\n  | name  | department  | role     |\n  | Alice | Engineering | Admin    |\n  | Bob   | Marketing   | Editor   |",
        "options": [
            "By writing a pipe-delimited data table immediately below the step line",
            "By uploading an Excel spreadsheet",
            "By embedding a CSV string in parentheses",
            "Tables cannot be attached to individual steps"
        ],
        "correctAnswer": 0,
        "explanation": "Pipe-delimited (| col |) data tables directly follow a step and are passed to the step definition (accessible via context.table in Behave).",
        "officialRef": "PCAT-31-0x Block 6.3: Step Data Tables",
        "tags": ["data-tables", "step-arguments", "pipes"]
    },
    {
        "id": "pcat-6-050",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Tags",
        "difficulty": "Beginner",
        "question": "What symbol prefixes tags in Gherkin used to categorize and selectively filter scenarios (e.g. for smoke testing)?",
        "codeSnippet": "___?smoke ___?critical\nScenario: User login with valid credentials",
        "options": [
            "The at symbol: @ (e.g. @smoke, @critical)",
            "The hash symbol: #",
            "The dollar symbol: $",
            "The percent symbol: %"
        ],
        "correctAnswer": 0,
        "explanation": "Tags in Gherkin begin with '@' (e.g. @smoke, @slow, @wip, @regression), and can be applied to entire Features or individual Scenarios for selective CLI test runs.",
        "officialRef": "PCAT-31-0x Block 6.3: Gherkin Tags",
        "tags": ["tags", "@smoke", "filtering"]
    }
])

part1_cards = cards[:50]
part2_cards = []
part2_cards.extend([
    {
        "id": "pcat-6-051",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Comments",
        "difficulty": "Beginner",
        "question": "What character denotes a comment line in a Gherkin .feature file?",
        "codeSnippet": "___ This is a note explaining why this scenario is structured this way\nScenario: Checkout with coupon",
        "options": [
            "# (hash)",
            "// (double slash)",
            "/* (slash star)",
            "-- (double dash)"
        ],
        "correctAnswer": 0,
        "explanation": "In Gherkin, comments start with the hash symbol '#' and must be the first non-whitespace character on the line.",
        "officialRef": "PCAT-31-0x Block 6.3: Gherkin Comments",
        "tags": ["comments", "syntax", "hash"]
    },
    {
        "id": "pcat-6-052",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Structure",
        "difficulty": "Intermediate",
        "question": "Can a single .feature file contain multiple Scenario blocks?",
        "codeSnippet": "Feature: Cart Management\n\n  Scenario: Add item\n    ...\n\n  Scenario: Remove item\n    ...\n\n  Scenario: Empty cart\n    ...",
        "options": [
            "Yes, a feature file typically contains multiple scenarios describing different behaviors and edge cases of that feature",
            "No, Gherkin enforces strict 1 scenario per file",
            "Only if they share the exact same number of steps",
            "Only if they run in parallel"
        ],
        "correctAnswer": 0,
        "explanation": "A single Feature file groups related scenarios describing the various behaviors, rules, and acceptance criteria of that single functional feature.",
        "officialRef": "PCAT-31-0x Block 6.3: Multiple Scenarios in Feature Files",
        "tags": ["scenarios", "feature-files", "grouping"]
    },
    {
        "id": "pcat-6-053",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Rules",
        "difficulty": "Advanced",
        "question": "What is the 'Rule' keyword (introduced in Gherkin 6) used for inside a Feature?",
        "codeSnippet": "Feature: Cart Checkout\n\n  Rule: Free shipping applies only over $50\n    Scenario: Order of $60 gets free shipping\n    Scenario: Order of $40 pays $5 shipping",
        "options": [
            "To group several related scenarios under a specific business rule within a large feature",
            "To write Python assertions directly in the feature file",
            "To define ESLint or flake8 rules for test files",
            "To enforce strict typing on step parameters"
        ],
        "correctAnswer": 0,
        "explanation": "The 'Rule:' keyword (Gherkin 6+) allows grouping scenarios under explicit business rules, enhancing clarity for complex domain specifications.",
        "officialRef": "PCAT-31-0x Block 6.3: The Rule Keyword in Gherkin",
        "tags": ["Rule", "gherkin-6", "business-rules"]
    },
    {
        "id": "pcat-6-054",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Localization",
        "difficulty": "Intermediate",
        "question": "How can Gherkin feature files be written in languages other than English (e.g. French, Spanish, German)?",
        "codeSnippet": "# language: fr\nFonctionnalité: Gestion du compte\n  Scénario: Virement réussi\n    Soit un compte créditeur...",
        "options": [
            "By placing a '# language: <code >' comment on the first line of the feature file",
            "By setting the operating system locale",
            "Gherkin strictly only supports the English language",
            "By compiling the file through gettext"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin supports over 70 spoken languages. Adding '# language: fr' (or es, de, etc.) tells the parser to translate keywords like Feature into 'Fonctionnalité' and Given into 'Soit'.",
        "officialRef": "PCAT-31-0x Block 6.3: Internationalization in Gherkin",
        "tags": ["i18n", "localization", "#language"]
    },
    {
        "id": "pcat-6-055",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Best Practices",
        "difficulty": "Intermediate",
        "question": "Why is it considered bad practice to have scenarios with 25+ steps in Gherkin?",
        "codeSnippet": "# A 30-step scenario clicking every input, dropdown, and checkbox",
        "options": [
            "It indicates an imperative, UI-heavy test script rather than a concise behavioral specification; scenarios become brittle, hard to read, and difficult to maintain",
            "Gherkin parsers crash if a scenario exceeds 15 steps",
            "It slows down Python by 90%",
            "Python Behave only allocates 1KB of memory per scenario"
        ],
        "correctAnswer": 0,
        "explanation": "Long scenarios with dozens of steps almost always indicate incidental UI clicking instead of domain behavior. Good scenarios have 3-8 expressive, high-level declarative steps.",
        "officialRef": "PCAT-31-0x Block 6.3: Scenario Sizing and Anti-patterns",
        "tags": ["best-practices", "concise-scenarios", "anti-patterns"]
    },
    {
        "id": "pcat-6-056",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Tags",
        "difficulty": "Intermediate",
        "question": "If a tag like @critical is applied at the Feature level, which scenarios inherit it?",
        "codeSnippet": "@critical\nFeature: Billing Operations\n\n  Scenario: Charge card\n  Scenario: Refund payment",
        "options": [
            "All scenarios inside that feature automatically inherit the @critical tag",
            "Only the first scenario inherits the tag",
            "Only scenarios that explicitly re-declare @critical",
            "Tags cannot be applied at the Feature level"
        ],
        "correctAnswer": 0,
        "explanation": "Tags placed above the Feature keyword are inherited by every Scenario and Scenario Outline defined within that feature file.",
        "officialRef": "PCAT-31-0x Block 6.3: Tag Inheritance",
        "tags": ["tags", "inheritance", "feature-tags"]
    },
    {
        "id": "pcat-6-057",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Scenario Outlines",
        "difficulty": "Intermediate",
        "question": "Can a Scenario Outline have multiple 'Examples' tables with different tags?",
        "codeSnippet": "Scenario Outline: Login validation\n  ...\n\n  @quick\n  Examples: Valid credentials\n    | user | pass |\n    | bob  | secret |\n\n  @slow\n  Examples: Lockout policies\n    | user | pass |\n    | alice| wrong1 |",
        "options": [
            "Yes, multiple Examples tables can be defined with separate names and tags to partition test runs",
            "No, only exactly one Examples table is permitted per Scenario Outline",
            "Yes, but they must have different column headers",
            "Only in Behave, not in Cucumber"
        ],
        "correctAnswer": 0,
        "explanation": "Gherkin allows multiple Examples tables under a single Scenario Outline, each with its own descriptive header and tags (e.g. splitting fast vs slow datasets).",
        "officialRef": "PCAT-31-0x Block 6.3: Multiple Examples Tables",
        "tags": ["Examples", "tags", "partitioning"]
    },
    {
        "id": "pcat-6-058",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Step Matching",
        "difficulty": "Intermediate",
        "question": "Does Gherkin treat the following two steps as the same step definition under the hood?\n'Given a logged-in user'\n'And a logged-in user'",
        "codeSnippet": "# Step 1: Given a logged-in user\n# Step 2: And a logged-in user",
        "options": [
            "Yes, 'And' simply adopts the keyword type of the preceding step; the step matcher matches the text 'a logged-in user'",
            "No, 'And' requires a separate @and decorator in Python",
            "It raises a duplicate step definition error",
            "Only if they are separated by an empty line"
        ],
        "correctAnswer": 0,
        "explanation": "'And' and 'But' take on the nature of the step they follow (Given, When, or Then). The framework matches against the string text 'a logged-in user'.",
        "officialRef": "PCAT-31-0x Block 6.3: Step Resolution with And/But",
        "tags": ["step-resolution", "And", "matching"]
    },
    {
        "id": "pcat-6-059",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Descriptions",
        "difficulty": "Beginner",
        "question": "Where can free-form narrative text describing business context be placed in a Gherkin file?",
        "codeSnippet": "Feature: Account Transfers\n  In order to send money to friends\n  As a mobile app user\n  I want to transfer funds immediately between checking accounts\n\n  Scenario: ...",
        "options": [
            "Directly below the Feature: line and above the first Scenario or Background",
            "Only inside Python comments starting with #",
            "In a separate README.md file in the root folder",
            "Free-form text is illegal in Gherkin syntax"
        ],
        "correctAnswer": 0,
        "explanation": "Any lines between the Feature: header line and the first Scenario/Background are treated as free-form narrative description, commonly used for the user story.",
        "officialRef": "PCAT-31-0x Block 6.3: Feature Narrative Description",
        "tags": ["narrative", "user-story", "feature-header"]
    },
    {
        "id": "pcat-6-060",
        "section": "Section 6",
        "chapter": "6.3",
        "category": "Gherkin Formatting",
        "difficulty": "Beginner",
        "question": "Is whitespace indentation strictly required for Gherkin parsing, or is it primarily for human readability?",
        "codeSnippet": "Feature: X\nScenario: Y\nGiven A\nWhen B\nThen C",
        "options": [
            "Indentation is primarily for human readability and clean visual aesthetics; Gherkin parsers are keyword-based rather than indentation-sensitive like Python",
            "Gherkin requires strict 4-space indentation; any tab causes a syntax error",
            "Gherkin requires tabs exclusively",
            "Indentation dictates scenario execution order"
        ],
        "correctAnswer": 0,
        "explanation": "Unlike Python, Gherkin syntax is keyword-oriented rather than indentation-sensitive. However, consistent 2-space indentation is standard convention for readability.",
        "officialRef": "PCAT-31-0x Block 6.3: Indentation and Formatting Conventions",
        "tags": ["formatting", "indentation", "conventions"]
    }
])

# =========================================================================
# CHAPTER 6.4: Python BDD with Behave and pytest-bdd (Cards 61-80)
# =========================================================================
part2_cards.extend([
    {
        "id": "pcat-6-061",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Behave Framework",
        "difficulty": "Beginner",
        "question": "What is the standard directory structure required by the Python 'behave' BDD framework?",
        "codeSnippet": "# Directory layout:\n# my_project/\n# └── features/\n#     ├── steps/\n#     │   └── auth_steps.py\n#     ├── environment.py\n#     └── auth.feature",
        "options": [
            "A root 'features/' directory containing '.feature' files, a 'steps/' subdirectory for step definitions, and optional 'environment.py'",
            "A 'tests/' folder with files named test_bdd_*.py only",
            "A 'gherkin/' directory with binary .feature.bin files",
            "Any folder, provided PYTHONPATH is set to /bin"
        ],
        "correctAnswer": 0,
        "explanation": "behave expects a 'features/' directory at project root, with '.feature' files, a 'steps/' folder containing Python step implementations, and optional 'environment.py' hooks.",
        "officialRef": "PCAT-31-0x Block 6.4: Behave Project Layout",
        "tags": ["behave", "directory-structure", "conventions"]
    },
    {
        "id": "pcat-6-062",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Step Definitions",
        "difficulty": "Beginner",
        "question": "Which decorators are imported from behave to link Gherkin steps to Python functions?",
        "codeSnippet": "from behave import ___?, ___?, ___?\n\n@___?('a user with balance of {amount:d}')\ndef step_impl(context, amount):\n    context.user = User(balance=amount)",
        "options": [
            "given, when, then",
            "assert_given, assert_when, assert_then",
            "setup, test, verify",
            "step_g, step_w, step_t"
        ],
        "correctAnswer": 0,
        "explanation": "behave provides given, when, then (and step) decorators that match the text of Gherkin steps to Python function implementations.",
        "officialRef": "PCAT-31-0x Block 6.4: Step Definition Decorators",
        "tags": ["behave", "step-definitions", "decorators"]
    },
    {
        "id": "pcat-6-063",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "The Context Object",
        "difficulty": "Intermediate",
        "question": "What is the purpose of the 'context' parameter automatically passed as the first argument to every Behave step function?",
        "codeSnippet": "@when('the user deposits {amount:d} dollars')\ndef step_deposit(context, amount):\n    context.account.deposit(amount)  # context shares state!",
        "options": [
            "A state-sharing context object that holds scenario-level attributes and parameters across steps in a scenario",
            "The standard Python logging object",
            "A reference to the Linux operating system kernel",
            "A connection pool to PostgreSQL"
        ],
        "correctAnswer": 0,
        "explanation": "The 'context' object is Behave's state container. It is created per scenario, allowing step functions (Given, When, Then) to share variables and test fixtures cleanly.",
        "officialRef": "PCAT-31-0x Block 6.4: The Context Object in Behave",
        "tags": ["context", "state-sharing", "behave"]
    },
    {
        "id": "pcat-6-064",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Step Matchers",
        "difficulty": "Intermediate",
        "question": "What is the default step matcher format used by Behave for extracting typed arguments from step strings?",
        "codeSnippet": "@given('a cart with {count:d} items priced at {price:f}')\ndef step_impl(context, count, price):\n    pass",
        "options": [
            "parse (using format-like syntax '{var:type}')",
            "regular expressions (re)",
            "XPath",
            "lex / yacc compiler syntax"
        ],
        "correctAnswer": 0,
        "explanation": "Behave defaults to the 'parse' matcher (based on the Python 'parse' library), allowing typed placeholders like {name:d} (int), {name:f} (float), and {name:w} (word).",
        "officialRef": "PCAT-31-0x Block 6.4: Step Parameter Matching with Parse",
        "tags": ["parse", "matchers", "type-conversion"]
    },
    {
        "id": "pcat-6-065",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Step Matchers",
        "difficulty": "Advanced",
        "question": "How can you switch to using standard Python regular expressions for step definitions in Behave?",
        "codeSnippet": "from behave import use_step_matcher, given\n\n___?('re')\n\n@given(r'user (?P<name>\\w+) has (?P<credits>\\d+) credits')\ndef step_impl(context, name, credits):\n    pass",
        "options": [
            "use_step_matcher('re')",
            "enable_regex()",
            "set_matcher(re.compile)",
            "import re_steps"
        ],
        "correctAnswer": 0,
        "explanation": "Calling use_step_matcher('re') switches the active step matcher to regular expressions, allowing full regex syntax and named capture groups.",
        "officialRef": "PCAT-31-0x Block 6.4: Regular Expression Step Matchers",
        "tags": ["regex", "use_step_matcher", "behave"]
    },
    {
        "id": "pcat-6-066",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Environment Hooks",
        "difficulty": "Intermediate",
        "question": "In Behave, where are lifecycle hook functions (like before_scenario, after_scenario, before_feature) defined?",
        "codeSnippet": "# In features/___?.py:\ndef before_scenario(context, scenario):\n    context.db = setup_clean_db()\n\ndef after_scenario(context, scenario):\n    context.db.close()",
        "options": [
            "environment.py",
            "hooks.py",
            "conftest.py",
            "setup.py"
        ],
        "correctAnswer": 0,
        "explanation": "Behave looks for a file named 'environment.py' inside the 'features/' directory to discover lifecycle hooks like before_scenario, after_scenario, before_all, and after_all.",
        "officialRef": "PCAT-31-0x Block 6.4: Environment Hooks in environment.py",
        "tags": ["environment.py", "hooks", "lifecycle"]
    },
    {
        "id": "pcat-6-067",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Environment Hooks",
        "difficulty": "Intermediate",
        "question": "Which hook in Behave's environment.py executes exactly once before any feature or scenario in the test run starts?",
        "codeSnippet": "# In features/environment.py:\ndef ___?(context):\n    print('Starting full test run...')",
        "options": [
            "before_all(context)",
            "before_suite(context)",
            "init_all(context)",
            "start_test_run(context)"
        ],
        "correctAnswer": 0,
        "explanation": "before_all(context) executes once before any features or scenarios run, ideal for initializing global test servers or reading environment configuration.",
        "officialRef": "PCAT-31-0x Block 6.4: before_all and after_all Hooks",
        "tags": ["before_all", "hooks", "behave"]
    },
    {
        "id": "pcat-6-068",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Accessing Tables in Steps",
        "difficulty": "Intermediate",
        "question": "If a Gherkin step contains a data table, how do you iterate over its rows in Behave?",
        "codeSnippet": "@given('the following products in catalog')\ndef step_impl(context):\n    for row in context.___?:\n        add_product(row['name'], float(row['price']))",
        "options": [
            "table",
            "data_grid",
            "rows",
            "records"
        ],
        "correctAnswer": 0,
        "explanation": "Step data tables are attached to the context object as 'context.table'. You can iterate through rows directly (for row in context.table:), accessing column values by header name.",
        "officialRef": "PCAT-31-0x Block 6.4: Processing context.table in Behave",
        "tags": ["context.table", "data-tables", "behave"]
    },
    {
        "id": "pcat-6-069",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Accessing DocStrings in Steps",
        "difficulty": "Intermediate",
        "question": "How is a multiline DocString attached to a step accessed in Behave?",
        "codeSnippet": "@when('I submit the config')\ndef step_impl(context):\n    raw_json = context.___?\n    data = json.loads(raw_json)",
        "options": [
            "text",
            "docstring",
            "payload",
            "body"
        ],
        "correctAnswer": 0,
        "explanation": "Multiline DocStrings in Gherkin are exposed in the step function as a single string via 'context.text'.",
        "officialRef": "PCAT-31-0x Block 6.4: Accessing context.text in Behave",
        "tags": ["context.text", "docstrings", "behave"]
    },
    {
        "id": "pcat-6-070",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Behave CLI",
        "difficulty": "Beginner",
        "question": "How do you run only scenarios with the tag @smoke from the command line using Behave?",
        "codeSnippet": "$ behave ___?",
        "options": [
            "--tags=@smoke",
            "-m smoke",
            "--filter=smoke",
            "--only smoke"
        ],
        "correctAnswer": 0,
        "explanation": "Behave uses the '--tags=@tag_name' flag (or -t @tag_name) to filter and execute only scenarios decorated with the specified tag.",
        "officialRef": "PCAT-31-0x Block 6.4: Running Tagged Scenarios with Behave",
        "tags": ["behave", "cli", "--tags"]
    },
    {
        "id": "pcat-6-071",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Undefined Steps",
        "difficulty": "Beginner",
        "question": "What does Behave output when you execute a feature file that contains steps without any matching Python step definitions?",
        "codeSnippet": "$ behave\n# You can implement step definitions for undefined steps with these snippets:\n@given('an unregistered user visits the homepage')\ndef step_impl(context):\n    raise NotImplementedError...",
        "options": [
            "It generates boilerplate Python code snippets in the console that you can copy-paste directly into your step implementation files",
            "It throws a fatal C-level segmentation fault",
            "It automatically synthesizes the Python code using deep learning",
            "It deletes the feature file"
        ],
        "correctAnswer": 0,
        "explanation": "When encountering undefined steps, Behave prints ready-to-use Python snippet templates with matching decorators and parameter stubs to help you quickly implement them.",
        "officialRef": "PCAT-31-0x Block 6.4: Handling Undefined Steps in Behave",
        "tags": ["undefined-steps", "code-snippets", "behave-cli"]
    },
    {
        "id": "pcat-6-072",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "pytest-bdd",
        "difficulty": "Intermediate",
        "question": "What is 'pytest-bdd' and how does its architecture differ from Behave?",
        "codeSnippet": "# pytest-bdd test authoring:\nfrom pytest_bdd import scenarios, given, when, then\n\nscenarios('features/login.feature')",
        "options": [
            "pytest-bdd is a plugin for pytest that binds Gherkin feature files directly into pytest's test runner, reusing pytest fixtures and command-line flags",
            "pytest-bdd is an obsolete C library replaced by unittest",
            "pytest-bdd does not use Gherkin files",
            "pytest-bdd requires Java to run"
        ],
        "correctAnswer": 0,
        "explanation": "Unlike Behave (which is an independent standalone runner), pytest-bdd is a pytest plugin. It seamlessly integrates Gherkin scenarios with pytest fixtures, marks, and runners.",
        "officialRef": "PCAT-31-0x Block 6.4: pytest-bdd Architecture vs Behave",
        "tags": ["pytest-bdd", "pytest", "comparison"]
    },
    {
        "id": "pcat-6-073",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "pytest-bdd State Sharing",
        "difficulty": "Intermediate",
        "question": "How is state typically shared between steps in pytest-bdd instead of using Behave's context object?",
        "codeSnippet": "@pytest.fixture\ndef cart():\n    return ShoppingCart()\n\n@when(parsers.parse('I add {item} to cart'))\ndef add_item(cart, item):\n    cart.add(item)",
        "options": [
            "Via standard pytest fixtures passed as function arguments",
            "Through global module variables",
            "By writing to a temporary file on disk",
            "Via thread-local storage"
        ],
        "correctAnswer": 0,
        "explanation": "In pytest-bdd, step definitions are standard pytest functions. State is shared idiomatically using pytest fixtures injected as function arguments.",
        "officialRef": "PCAT-31-0x Block 6.4: State Sharing with Fixtures in pytest-bdd",
        "tags": ["pytest-bdd", "fixtures", "dependency-injection"]
    },
    {
        "id": "pcat-6-074",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Step Reusability",
        "difficulty": "Intermediate",
        "question": "Can multiple Gherkin scenarios share the same Python step definition function?",
        "codeSnippet": "# Scenario 1:\n# Given a registered user\n# Scenario 2:\n# Given a registered user\n# Implementation in auth_steps.py:\n@given('a registered user')\ndef step_impl(context): ...",
        "options": [
            "Yes, step definitions are globally reusable across all feature files in the project",
            "No, each step string must have a unique implementation per scenario",
            "Only if they are in the same .feature file",
            "Only if decorated with @reusable"
        ],
        "correctAnswer": 0,
        "explanation": "Step definitions in Behave and pytest-bdd are globally registered. Any feature file matching that step pattern automatically executes that shared Python function.",
        "officialRef": "PCAT-31-0x Block 6.4: Step Definition Reusability",
        "tags": ["reusability", "step-library", "dry"]
    },
    {
        "id": "pcat-6-075",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Assertions in BDD",
        "difficulty": "Beginner",
        "question": "How are verification assertions typically written inside a Behave 'Then' step function in Python?",
        "codeSnippet": "@then('the user balance should be {expected:d}')\ndef step_verify_balance(context, expected):\n    assert context.user.balance == expected, f'Expected {expected}, got {context.user.balance}'",
        "options": [
            "Using standard Python 'assert' statements (or assertion libraries like PyHamcrest)",
            "By returning True or False from the function",
            "Using print statements",
            "By writing to stderr"
        ],
        "correctAnswer": 0,
        "explanation": "Behave relies on standard Python 'assert' statements. If the assertion fails (raises AssertionError), Behave captures it and reports that step as FAILED.",
        "officialRef": "PCAT-31-0x Block 6.4: Assertions in Step Definitions",
        "tags": ["assert", "assertions", "failure-reporting"]
    },
    {
        "id": "pcat-6-076",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Behave Step Execution",
        "difficulty": "Intermediate",
        "question": "What happens if a 'When' step fails inside a Behave scenario containing 5 steps?",
        "codeSnippet": "Scenario: Checkout\n  Given a cart with items   # PASSED\n  When payment is processed # FAILED (AssertionError!)\n  Then order is created     # ...?\n  And receipt is emailed    # ...?",
        "options": [
            "The scenario execution halts immediately; subsequent steps are marked as SKIPPED, and the scenario status is FAILED",
            "Behave continues executing subsequent steps regardless of failure",
            "Behave rolls back the computer filesystem",
            "The test runner deletes the scenario from the file"
        ],
        "correctAnswer": 0,
        "explanation": "When a step fails, Behave immediately stops executing subsequent steps for that scenario, marking the remaining steps as SKIPPED and the scenario as FAILED.",
        "officialRef": "PCAT-31-0x Block 6.4: Step Failure Cascading",
        "tags": ["failure-cascading", "skipped-steps", "flow-control"]
    },
    {
        "id": "pcat-6-077",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Behave CLI",
        "difficulty": "Intermediate",
        "question": "What does the '--dry-run' command-line flag do in Behave?",
        "codeSnippet": "$ behave --dry-run",
        "options": [
            "It validates feature files and checks that all step definitions exist without actually executing any step code",
            "It runs the tests using simulated solar power",
            "It tests internet connectivity",
            "It compiles Python files into .pyc"
        ],
        "correctAnswer": 0,
        "explanation": "The '--dry-run' flag parses feature files and maps them to step definitions to detect undefined steps or syntax errors instantly, without executing the underlying code.",
        "officialRef": "PCAT-31-0x Block 6.4: Dry-Run Validation",
        "tags": ["--dry-run", "validation", "cli"]
    },
    {
        "id": "pcat-6-078",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Step Matchers",
        "difficulty": "Advanced",
        "question": "How can custom types (e.g. converting a string 'yes'/'no' into a boolean) be registered with Behave's parse matcher?",
        "codeSnippet": "from behave import register_type\n\ndef parse_bool(text):\n    return text.lower() in ('yes', 'true', '1')\n\nregister_type(Boolean=parse_bool)\n\n@given('is active: {active:Boolean}')\ndef step_impl(context, active):\n    assert isinstance(active, bool)",
        "options": [
            "By using behave.register_type(TypeName=type_converter_func)",
            "By overriding __builtins__.bool",
            "Custom types are not supported in Behave",
            "By monkeypatching sys.modules"
        ],
        "correctAnswer": 0,
        "explanation": "register_type() allows registering custom type parsers with Behave's parse matcher, automatically converting step arguments into domain objects.",
        "officialRef": "PCAT-31-0x Block 6.4: Registering Custom Parameter Types",
        "tags": ["register_type", "type-conversion", "parse"]
    },
    {
        "id": "pcat-6-079",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Fixtures in Behave",
        "difficulty": "Advanced",
        "question": "How can clean fixture management with automatic teardown be achieved in Behave using behave.fixture?",
        "codeSnippet": "from behave import fixture, use_fixture\n\n@fixture\ndef browser_fixture(context):\n    context.browser = create_driver()\n    yield context.browser\n    context.browser.quit()\n\ndef before_scenario(context, scenario):\n    use_fixture(browser_fixture, context)",
        "options": [
            "By defining a generator fixture using @fixture and calling use_fixture(fixture_func, context)",
            "By creating a thread lock in environment.py",
            "Behave does not support fixtures; only global variables",
            "By importing pytest"
        ],
        "correctAnswer": 0,
        "explanation": "Behave provides a fixture mechanism (@fixture with yield and use_fixture) that mirrors pytest generator fixtures for safe setup and teardown.",
        "officialRef": "PCAT-31-0x Block 6.4: Behave Fixture Mechanism",
        "tags": ["behave.fixture", "use_fixture", "teardown"]
    },
    {
        "id": "pcat-6-080",
        "section": "Section 6",
        "chapter": "6.4",
        "category": "Behave Logging",
        "difficulty": "Intermediate",
        "question": "How does Behave handle standard output (stdout / print statements) during test execution by default?",
        "codeSnippet": "# By default, stdout is captured:\n# print('Debug info') does NOT appear on console for passing tests!",
        "options": [
            "It captures stdout and only displays it if a step fails (unless --no-capture is passed)",
            "It discards all print statements permanently",
            "It writes all output directly to /var/log/syslog",
            "It converts prints into speech using text-to-speech"
        ],
        "correctAnswer": 0,
        "explanation": "Behave captures stdout and stderr during step execution, displaying it only when a step fails to keep console output clean. Passing '--no-capture' disables this.",
        "officialRef": "PCAT-31-0x Block 6.4: Stdout Capture and Debugging",
        "tags": ["stdout", "capture", "debugging"]
    }
])

# =========================================================================
# CHAPTER 6.5: Living Documentation, Acceptance Testing (ATDD) & Best Practices (Cards 81-100)
# =========================================================================
part2_cards.extend([
    {
        "id": "pcat-6-081",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "ATDD",
        "difficulty": "Intermediate",
        "question": "What is Acceptance Test-Driven Development (ATDD)?",
        "codeSnippet": "# ATDD Cycle:\n# 1. Collaborate on acceptance criteria with customer\n# 2. Write automated acceptance tests\n# 3. Implement feature code\n# 4. Acceptance tests pass -> Done!",
        "options": [
            "A collaborative practice where team members and business stakeholders write automated acceptance tests before developers begin writing the code",
            "Testing only after the product has been in production for 30 days",
            "An approach where only testers write unit tests",
            "Automated load testing using JMeter"
        ],
        "correctAnswer": 0,
        "explanation": "ATDD (closely aligned with BDD) involves defining acceptance criteria as automated tests before development begins, ensuring the team builds exactly what the customer accepted.",
        "officialRef": "PCAT-31-0x Block 6.5: Acceptance Test-Driven Development (ATDD)",
        "tags": ["atdd", "acceptance-testing", "collaborative-design"]
    },
    {
        "id": "pcat-6-082",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Test Pyramid Alignment",
        "difficulty": "Intermediate",
        "question": "How should BDD acceptance scenarios be positioned within the Test Pyramid architecture?",
        "codeSnippet": "# Test Pyramid:\n# Top: UI / E2E Scenarios (fewest)\n# Middle: Service / Acceptance BDD Scenarios (moderate)\n# Base: Fast Unit Tests (most)",
        "options": [
            "BDD scenarios should focus on key business rules and critical user journeys at the service/acceptance level, while fast unit tests form the broad foundation",
            "BDD scenarios should replace 100% of unit tests",
            "BDD scenarios should only test browser CSS styling",
            "BDD scenarios should only run once a year"
        ],
        "correctAnswer": 0,
        "explanation": "BDD scenarios should not duplicate granular unit test logic (which causes the 'Inverted Pyramid' / Ice Cream Cone anti-pattern). They should focus on high-value business flows.",
        "officialRef": "PCAT-31-0x Block 6.5: BDD and the Test Pyramid",
        "tags": ["test-pyramid", "strategy", "architecture"]
    },
    {
        "id": "pcat-6-083",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD Anti-Patterns",
        "difficulty": "Intermediate",
        "question": "What is the 'Ice Cream Cone' (or Inverted Pyramid) anti-pattern in automated testing?",
        "codeSnippet": "# Anti-Pattern:\n# 500 slow, brittle UI/BDD tests at the top\n# 20 unit tests at the base",
        "options": [
            "Having very few fast unit tests and an enormous, brittle suite of slow end-to-end UI tests that constantly break",
            "Naming test variables after desserts",
            "Running tests on frozen Linux servers",
            "Writing tests that pass in summer but fail in winter"
        ],
        "correctAnswer": 0,
        "explanation": "The Inverted Pyramid has massive numbers of slow, brittle UI/E2E tests and few unit tests. This leads to slow CI builds, high maintenance costs, and frequent false alarms.",
        "officialRef": "PCAT-31-0x Block 6.5: The Inverted Pyramid Anti-Pattern",
        "tags": ["inverted-pyramid", "anti-patterns", "maintenance"]
    },
    {
        "id": "pcat-6-084",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Declarative Gherkin",
        "difficulty": "Intermediate",
        "question": "Why is 'Declarative' Gherkin style vastly superior to 'Imperative' Gherkin style?",
        "codeSnippet": "# Style A (Declarative): When the user checks out with express delivery\n# Style B (Imperative): When I click '#ship-dropdown' and select option 'express' and click '#btn-next'...",
        "options": [
            "Declarative style focuses on business intent rather than UI mechanics; it remains valid when the UI is redesigned, whereas imperative style breaks with any HTML change",
            "Declarative style compiles into C++ bytecode",
            "Imperative style is forbidden by Python syntax rules",
            "Declarative style does not require any step definitions"
        ],
        "correctAnswer": 0,
        "explanation": "Declarative Gherkin describes WHAT the user does (business intent), not HOW the UI widget operates. It is readable by business partners and immune to UI element changes.",
        "officialRef": "PCAT-31-0x Block 6.5: Declarative vs Imperative Gherkin",
        "tags": ["declarative", "imperative", "clean-gherkin"]
    },
    {
        "id": "pcat-6-085",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Living Documentation Tools",
        "difficulty": "Intermediate",
        "question": "Which reporting tools can ingest Gherkin test execution results to generate living documentation web portals for non-technical stakeholders?",
        "codeSnippet": "# Generating HTML / Allure living documentation from test outputs",
        "options": [
            "Allure Report, Cucumber Living Documentation (Pickles / Cukedoctor)",
            "Grep and awk terminal utilities",
            "Wireshark packet capture",
            "Docker Compose"
        ],
        "correctAnswer": 0,
        "explanation": "Tools like Allure Report, Cukedoctor, and Pickles transform Gherkin feature files and test execution logs into interactive HTML dashboards for business stakeholders.",
        "officialRef": "PCAT-31-0x Block 6.5: Living Documentation Portals",
        "tags": ["living-documentation", "allure", "reporting"]
    },
    {
        "id": "pcat-6-086",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "CI/CD Integration",
        "difficulty": "Intermediate",
        "question": "How can Behave generate machine-readable test reports suitable for CI/CD servers like GitHub Actions or Jenkins?",
        "codeSnippet": "$ behave --junit --junit-directory=reports/",
        "options": [
            "Using the '--junit' flag to generate standard JUnit XML format reports",
            "By taking screenshots of the terminal and uploading to Slack",
            "By printing binary code to stdout",
            "CI/CD servers cannot read Behave outputs"
        ],
        "correctAnswer": 0,
        "explanation": "Passing '--junit' tells Behave to produce standard JUnit XML reports, which Jenkins, GitHub Actions, and GitLab CI parse into visual test trend graphs.",
        "officialRef": "PCAT-31-0x Block 6.5: JUnit XML Reporting in CI/CD",
        "tags": ["ci-cd", "junit-xml", "jenkins", "github-actions"]
    },
    {
        "id": "pcat-6-087",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Step Explosion",
        "difficulty": "Intermediate",
        "question": "What is the 'Step Definition Explosion' anti-pattern in BDD and how is it prevented?",
        "codeSnippet": "# Anti-pattern: 500 nearly identical step definitions with slight wording variations:\n# @given('user logs in')\n# @given('user has logged in')\n# @given('the user is logged in')",
        "options": [
            "Accumulating hundreds of redundant step definitions due to inconsistent phrasing; prevented by reusing existing steps and maintaining a shared step catalog",
            "When the computer hard drive fills up with .py files",
            "An error caused by recursive step calling",
            "A memory leak in the Python garbage collector"
        ],
        "correctAnswer": 0,
        "explanation": "Step Explosion occurs when team members don't review existing step libraries and write slightly different variations of identical steps. Maintaining a step catalog prevents this.",
        "officialRef": "PCAT-31-0x Block 6.5: Preventing Step Definition Explosion",
        "tags": ["step-explosion", "reusability", "anti-patterns"]
    },
    {
        "id": "pcat-6-088",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD Refactoring",
        "difficulty": "Intermediate",
        "question": "When a business rule changes, what should happen to the corresponding Gherkin feature file?",
        "codeSnippet": "# Business rule change: Free shipping threshold lowered from $50 to $35",
        "options": [
            "The feature file should be updated to reflect the new business specification, and the step definitions or production code updated to match",
            "The feature file should be left unchanged and the test bypassed using @skip",
            "The entire project should be rewritten in Go",
            "Old feature files should never be edited under any circumstance"
        ],
        "correctAnswer": 0,
        "explanation": "Feature files represent the current living specification of the system. When business rules evolve, the specs must be updated first, keeping documentation in sync with product reality.",
        "officialRef": "PCAT-31-0x Block 6.5: Evolving Living Documentation",
        "tags": ["living-docs", "business-evolution", "maintenance"]
    },
    {
        "id": "pcat-6-089",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD and Mocking",
        "difficulty": "Advanced",
        "question": "Should external third-party services (like Stripe or SMS gateways) be mocked in automated BDD acceptance scenarios?",
        "codeSnippet": "# Real bank vs Test Double:\n# In BDD tests in CI, payment gateways are replaced with Stubs/Fakes",
        "options": [
            "Yes, external third-party APIs should be replaced with reliable Test Doubles (stubs/fakes) to ensure tests are fast, deterministic, and free of external rate limits or network flakiness",
            "No, BDD strictly mandates using live production bank accounts",
            "Only if the third party provides free unlimited API calls",
            "Mocking is prohibited in BDD"
        ],
        "correctAnswer": 0,
        "explanation": "Relying on external third-party services makes acceptance tests slow, expensive, and flaky. Using fast, isolated fakes or stubs at the system boundaries is standard practice.",
        "officialRef": "PCAT-31-0x Block 6.5: External Boundaries and Test Doubles in BDD",
        "tags": ["mocking", "test-doubles", "flakiness"]
    },
    {
        "id": "pcat-6-090",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Page Object Model",
        "difficulty": "Intermediate",
        "question": "What design pattern is recommended when BDD scenarios drive web browser automation via Selenium or Playwright?",
        "codeSnippet": "# Clean architecture:\n# Gherkin step -> Calls Page Object method -> Interacts with DOM",
        "options": [
            "Page Object Model (POM)",
            "Singleton Pattern",
            "Active Record",
            "Abstract Factory"
        ],
        "correctAnswer": 0,
        "explanation": "The Page Object Model (POM) encapsulates DOM interaction and web locators inside dedicated page classes, shielding Gherkin step definitions from raw HTML selectors.",
        "officialRef": "PCAT-31-0x Block 6.5: Page Object Model in Web BDD",
        "tags": ["page-object-model", "selenium", "playwright"]
    },
    {
        "id": "pcat-6-091",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD Scope",
        "difficulty": "Intermediate",
        "question": "Can BDD be applied to backend REST APIs and microservices without any user interface?",
        "codeSnippet": "Feature: Order Management API\n  Scenario: Create order via POST\n    When the client sends POST '/api/orders' with valid body\n    Then the response status should be 201 Created",
        "options": [
            "Yes, BDD is highly effective for REST APIs and service boundaries, specifying endpoints, request contracts, and response behaviors in plain English",
            "No, BDD requires an HTML browser interface like Chrome or Firefox",
            "Only if the API returns XML",
            "Only on Windows servers"
        ],
        "correctAnswer": 0,
        "explanation": "BDD is not a UI testing tool; it is a behavioral specification technique. Specifying API contracts and business logic via BDD is widespread in microservice architectures.",
        "officialRef": "PCAT-31-0x Block 6.5: BDD for APIs and Microservices",
        "tags": ["rest-api", "microservices", "headless-bdd"]
    },
    {
        "id": "pcat-6-092",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Flaky Tests in BDD",
        "difficulty": "Intermediate",
        "question": "What is the primary cause of flaky tests in end-to-end BDD scenarios and how should it be resolved?",
        "codeSnippet": "# Flaky test cause: Hardcoded sleep:\nimport time\ntime.sleep(5)  # Anti-pattern! Use explicit waits instead.",
        "options": [
            "Asynchronous timing issues and hardcoded sleeps; resolved by using dynamic explicit polling/waits for specific conditions to become true",
            "Python's Global Interpreter Lock (GIL)",
            "Using descriptive variable names",
            "Running tests on Linux"
        ],
        "correctAnswer": 0,
        "explanation": "Hardcoded sleep(5) leads to intermittent flakiness when networks or servers lag. Explicit waiting (polling until an element or state exists with a timeout) solves this.",
        "officialRef": "PCAT-31-0x Block 6.5: Remediation of Flaky BDD Tests",
        "tags": ["flaky-tests", "explicit-waits", "reliability"]
    },
    {
        "id": "pcat-6-093",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Gherkin Best Practices",
        "difficulty": "Intermediate",
        "question": "What is the 'Golden Rule' of Gherkin scenario writing?",
        "codeSnippet": "# One scenario = One single business rule / behavior",
        "options": [
            "Each scenario should test exactly one single business rule or behavioral outcome",
            "Each scenario must contain at least 10 Given steps",
            "Feature files must be under 10 bytes",
            "All step names must rhyme"
        ],
        "correctAnswer": 0,
        "explanation": "A scenario should focus on illustrating a single concept or business rule. If a scenario tests 5 different workflows chained together, it is brittle and difficult to debug.",
        "officialRef": "PCAT-31-0x Block 6.5: Single Responsibility in Scenarios",
        "tags": ["golden-rule", "single-behavior", "clean-bdd"]
    },
    {
        "id": "pcat-6-094",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "ATDD Lifecycle",
        "difficulty": "Intermediate",
        "question": "In ATDD, what does a passing automated acceptance test signify for a user story?",
        "codeSnippet": "# Acceptance suite turns GREEN -> Definition of Done fulfilled!",
        "options": [
            "The feature satisfies the agreed-upon business requirements and fulfills the 'Definition of Done' from a functional standpoint",
            "The application is immune to all cyber attacks",
            "Developers can delete their Git repositories",
            "The server must be rebooted"
        ],
        "correctAnswer": 0,
        "explanation": "When the automated acceptance test turns green, the agreed-upon criteria for success have been objectively satisfied, signaling that the story meets its Definition of Done.",
        "officialRef": "PCAT-31-0x Block 6.5: Definition of Done in ATDD",
        "tags": ["definition-of-done", "atdd", "acceptance"]
    },
    {
        "id": "pcat-6-095",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD Documentation",
        "difficulty": "Beginner",
        "question": "Who can read, understand, and validate Gherkin feature files?",
        "codeSnippet": "# Plain English specifications:\nFeature: Return Policy\n  Scenario: Item returned within 30 days receives full refund",
        "options": [
            "Anyone in the organization, including non-technical product managers, domain experts, compliance auditors, testers, and engineers",
            "Only developers with a degree in computer science",
            "Only automated bots",
            "Only database administrators"
        ],
        "correctAnswer": 0,
        "explanation": "Because Gherkin is written in plain natural language using domain terminology, anyone — including business analysts, legal auditors, and product managers — can validate the specifications.",
        "officialRef": "PCAT-31-0x Block 6.5: Accessibility of Living Documentation",
        "tags": ["living-documentation", "accessibility", "collaboration"]
    },
    {
        "id": "pcat-6-096",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Test Data Management",
        "difficulty": "Intermediate",
        "question": "How should test data be managed in BDD scenarios to avoid brittle dependencies between tests?",
        "codeSnippet": "# Anti-pattern: Hardcoded user ID '123' that already exists in persistent database\n# Best practice: Each scenario creates its own isolated test data via Given steps",
        "options": [
            "Each scenario should create and clean up its own isolated test data, ensuring no dependencies on existing mutable database records",
            "All scenarios must share a single static database record",
            "Test data should be manually entered by hand before running Behave",
            "Data should be stored in Python comments"
        ],
        "correctAnswer": 0,
        "explanation": "Scenarios should be completely self-contained and isolated. Relying on pre-existing mutable records in a shared database causes intermittent test failures when test order changes.",
        "officialRef": "PCAT-31-0x Block 6.5: Test Data Management in BDD",
        "tags": ["test-data", "isolation", "determinism"]
    },
    {
        "id": "pcat-6-097",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD and Regression Testing",
        "difficulty": "Beginner",
        "question": "What happens to completed BDD acceptance scenarios once a feature is delivered to production?",
        "codeSnippet": "# Delivered to production -> Scenario joins the automated regression suite!",
        "options": [
            "They become part of the permanent automated regression suite, executed on every build to prevent regressions",
            "They are archived and deleted",
            "They are printed and filed in physical cabinets",
            "They must be converted into C code"
        ],
        "correctAnswer": 0,
        "explanation": "Once a story is delivered, its BDD scenarios don't disappear; they join the automated regression safety net, continuously verifying that existing behaviors are never broken.",
        "officialRef": "PCAT-31-0x Block 6.5: BDD Scenarios as Regression Suites",
        "tags": ["regression-testing", "continuous-testing", "ci"]
    },
    {
        "id": "pcat-6-098",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD Anti-Patterns",
        "difficulty": "Intermediate",
        "question": "What is the problem with writing BDD scenarios that test multiple unrelated features in a single flow?",
        "codeSnippet": "# Anti-pattern: A scenario that tests user registration, then profile edit, then buying a shirt, then returning the shirt, then changing password",
        "options": [
            "If an early step fails, the remainder of the workflow is skipped, hiding failures in downstream features and making root cause diagnosis difficult",
            "It runs too fast for Python to track",
            "It automatically triggers a database rollback",
            "It forces the test runner into infinite loop mode"
        ],
        "correctAnswer": 0,
        "explanation": "Mega-scenarios that chain unrelated features together violate the Single Responsibility Principle: an issue in step 2 masks critical bugs in steps 8-15, and diagnostic clarity is lost.",
        "officialRef": "PCAT-31-0x Block 6.5: Mega-Scenario Anti-Pattern",
        "tags": ["anti-patterns", "isolation", "diagnostics"]
    },
    {
        "id": "pcat-6-099",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "BDD Metrics",
        "difficulty": "Intermediate",
        "question": "How does Behavior-Driven Development impact the cost of fixing defects?",
        "codeSnippet": "# Cost of defect curve:\n# Requirements phase: 1x\n# Implementation: 5x\n# Production: 100x+",
        "options": [
            "It dramatically reduces defect costs by catching ambiguities and bugs during requirements conversations (1x cost) rather than in production (100x cost)",
            "It increases total software development costs by 500%",
            "It has zero impact on defect costs",
            "It only lowers cloud hosting bills"
        ],
        "correctAnswer": 0,
        "explanation": "By shifting quality conversations to the requirements phase (Three Amigos), misunderstandings are resolved before code is written, saving exponential remediation costs.",
        "officialRef": "PCAT-31-0x Block 6.5: Economics of BDD and Defect Prevention",
        "tags": ["economics", "cost-of-quality", "defect-prevention"]
    },
    {
        "id": "pcat-6-100",
        "section": "Section 6",
        "chapter": "6.5",
        "category": "Summary of Block 6",
        "difficulty": "Intermediate",
        "question": "Which set of topics comprehensively summarizes Block 6: Test-Driven and Behavior-Driven Development of the PCAT-31-0x syllabus?",
        "codeSnippet": "# PCAT Block 6 Summary:\n# TDD (Red-Green-Refactor, Triangulation, Design)\n# BDD (Dan North, Ubiquitous Language, Three Amigos)\n# Gherkin (Feature, Scenario, Given-When-Then, Outlines)\n# Python Tools (behave, context, environment.py, pytest-bdd)\n# Living Documentation and ATDD Best Practices",
        "options": [
            "Compiling CPython source code with GCC and writing Makefiles",
            "TDD fundamentals (Red-Green-Refactor, triangulation), BDD principles (ubiquitous language, specification by example, Three Amigos), Gherkin syntax, Python BDD frameworks (behave, pytest-bdd), and living documentation / ATDD practices",
            "Setting up Kubernetes clusters on Google Cloud",
            "Training neural networks using TensorFlow and PyTorch"
        ],
        "correctAnswer": 1,
        "explanation": "Block 6 of the Python Institute PCAT-31-0x exam specifically validates proficiency in Test-Driven Development (TDD cycle, triangulation), BDD philosophy, Gherkin syntax, Python tooling (behave/pytest-bdd), and living documentation.",
        "officialRef": "PCAT-31-0x Block 6: Summary of TDD and BDD",
        "tags": ["block-6-summary", "tdd", "bdd", "pcat-core"]
    }
])

assert len(part1_cards) == 50, f"Part 1 has {len(part1_cards)} cards"
assert len(part2_cards) == 50, f"Part 2 has {len(part2_cards)} cards"

write_ts_file("src/data/pcatSection6CardsPart1.ts", "pcatSection6CardsPart1", part1_cards)
print("Wrote pcatSection6CardsPart1.ts (50 cards)")

write_ts_file("src/data/pcatSection6CardsPart2.ts", "pcatSection6CardsPart2", part2_cards)
print("Wrote pcatSection6CardsPart2.ts (50 cards)")

barrel = (
    "import { Flashcard } from '../types';\n"
    "import { pcatSection6CardsPart1 } from './pcatSection6CardsPart1';\n"
    "import { pcatSection6CardsPart2 } from './pcatSection6CardsPart2';\n\n"
    "export const pcatSection6Flashcards: Flashcard[] = [\n"
    "  ...pcatSection6CardsPart1,\n"
    "  ...pcatSection6CardsPart2,\n"
    "];\n"
)
with open("src/data/pcatSection6Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel)

print("Wrote pcatSection6Flashcards.ts (100 cards total)")
