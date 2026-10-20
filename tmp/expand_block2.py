import json
import sys

# Load make_block2.py by exec'ing it in a namespace, but intercepting the write_ts_file calls
ns = {
    "write_ts_file": lambda *args, **kwargs: None,
    "print": lambda *args, **kwargs: None,
}
with open("tmp/make_block2.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace the barrel write at the end
code = code.replace('with open("src/data/pcatSection2Flashcards.ts", "w", encoding="utf-8") as f:\n    f.write(barrel)', 'pass')

exec(code, ns)

existing_cards = ns["cards"] + ns["part2_cards"]
print(f"Loaded {len(existing_cards)} existing cards for Block 2")

extra_cards = [
    {
        "id": "pcat-2-081",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "In the Arrange phase of the AAA pattern, what is the recommended practice when object creation requires dozens of complex arguments?",
        "codeSnippet": "# Complex Arrange step:\ndef test_checkout_premium_user():\n    # Practice: Factory or Test Data Builder Pattern\n    user = create_test_user(tier='premium', credits=500)",
        "options": [
            "Use Test Data Builder or Object Mother factory patterns to encapsulate complex setup into clean, intention-revealing helpers",
            "Instantiate all 20 dependencies manually with None values inside each test method",
            "Skip the Arrange step and perform mutations directly in the database",
            "Store test objects in global variables shared across all test files"
        ],
        "correctAnswer": 0,
        "explanation": "Using Test Data Builder or factory functions in the Arrange phase encapsulates boilerplate setup, keeping the test concise, readable, and focused on relevant test parameters.",
        "officialRef": "PCAT-31-0x Block 2.3: Structuring the Arrange Phase with Builders",
        "tags": ["aaa-pattern", "arrange", "test-data-builder"]
    },
    {
        "id": "pcat-2-082",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Intermediate",
        "question": "How should the 'Act' phase be scoped in an ideal unit test following the AAA pattern?",
        "codeSnippet": "# Act phase:\nresult = calculator.divide(10, 2)  # Single, focused action",
        "options": [
            "The Act phase should ideally consist of a single method call or invocation triggering the precise behavior under test",
            "The Act phase should execute at least 15 different business actions sequentially",
            "The Act phase must always be wrapped in a while loop",
            "The Act phase should perform database migrations"
        ],
        "correctAnswer": 0,
        "explanation": "The Act phase should be crisp and focused, typically invoking a single method or function that produces the outcome to be verified, adhering to Single Responsibility.",
        "officialRef": "PCAT-31-0x Block 2.3: Scoping the Act Phase",
        "tags": ["aaa-pattern", "act-phase", "clean-tests"]
    },
    {
        "id": "pcat-2-083",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "Assertion Roulette",
        "difficulty": "Intermediate",
        "question": "What is the 'Assertion Roulette' test smell in the Assert phase of AAA, and how is it mitigated?",
        "codeSnippet": "# Smell:\nassert calculate(1) == 2\nassert calculate(2) == 4\nassert calculate(3) == 6  # Which assertion failed in CI logs?\n\n# Mitigation: Subtests or descriptive failure messages (msg=...)",
        "options": [
            "Having multiple assertions in a test without explanatory messages, making it unclear which assertion caused a failure when looking at CI logs",
            "Gambling with random numbers in unit tests",
            "Running tests in random order using pytest-randomly",
            "Asserting floating point numbers without round()"
        ],
        "correctAnswer": 0,
        "explanation": "Assertion Roulette occurs when a test has several uncommented assertions. If one fails, the error output lacks context about which specific condition failed. Mitigate with custom 'msg' arguments or subtests.",
        "officialRef": "PCAT-31-0x Block 2.3: The Assertion Roulette Test Smell",
        "tags": ["assertion-roulette", "test-smells", "aaa-pattern"]
    },
    {
        "id": "pcat-2-084",
        "section": "Section 2",
        "chapter": "2.3",
        "category": "AAA Pattern",
        "difficulty": "Beginner",
        "question": "How does the Arrange-Act-Assert (AAA) pattern map conceptually to Dan North's Given-When-Then behavioral triplet?",
        "codeSnippet": "# AAA <-> Given-When-Then mapping:\n# Arrange <-> ...\n# Act     <-> ...\n# Assert  <-> ...",
        "options": [
            "Arrange corresponds to Given; Act corresponds to When; Assert corresponds to Then",
            "Arrange corresponds to When; Act corresponds to Then; Assert corresponds to Given",
            "Arrange corresponds to Then; Act corresponds to Given; Assert corresponds to When",
            "There is no conceptual correlation between them"
        ],
        "correctAnswer": 0,
        "explanation": "Arrange maps to Given (preconditions/context), Act maps to When (trigger/action), and Assert maps to Then (observable verification/outcome).",
        "officialRef": "PCAT-31-0x Block 2.3: Mapping AAA to Given-When-Then",
        "tags": ["aaa", "given-when-then", "conceptual-mapping"]
    },
    {
        "id": "pcat-2-085",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY vs DAMP",
        "difficulty": "Intermediate",
        "question": "What does the acronym 'DAMP' stand for in software testing philosophy?",
        "codeSnippet": "# DAMP in test code:\n# Prioritizing readability over aggressive deduplication",
        "options": [
            "Descriptive And Meaningful Phrases",
            "Direct Automation Memory Protocol",
            "Decoupled Architecture Modular Programming",
            "Dynamic Assertion Model Pattern"
        ],
        "correctAnswer": 0,
        "explanation": "DAMP stands for 'Descriptive And Meaningful Phrases'. In test suites, DAMP promotes readable, self-contained tests even if it means accepting slight code duplication over obscure DRY abstractions.",
        "officialRef": "PCAT-31-0x Block 2.4: DRY vs DAMP in Test Automation",
        "tags": ["damp", "dry", "readability"]
    },
    {
        "id": "pcat-2-086",
        "section": "Section 2",
        "chapter": "2.4",
        "category": "DRY vs DAMP",
        "difficulty": "Intermediate",
        "question": "Why is overly aggressive DRY (Don't Repeat Yourself) considered dangerous when applied to unit tests?",
        "codeSnippet": "# Over-DRY test:\n# Requires reader to navigate across 5 base classes and 3 helper files just to understand one test case!",
        "options": [
            "It creates hidden couplings between independent tests and forces developers to jump between multiple files to understand what a single test is actually verifying",
            "Python restricts the number of helper functions to 10 per module",
            "DRY code cannot run in parallel across CPU cores",
            "It causes memory corruption in PyPy"
        ],
        "correctAnswer": 0,
        "explanation": "In test code, aggressive DRY hides the test scenario behind complex helper hierarchies. Tests should tell a clear, self-contained story from top to bottom.",
        "officialRef": "PCAT-31-0x Block 2.4: The Pitfalls of Over-DRY Tests",
        "tags": ["dry", "damp", "anti-patterns", "test-readability"]
    },
    {
        "id": "pcat-2-087",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Principles",
        "difficulty": "Beginner",
        "question": "What is the 'Boy Scout Rule' popularized by Robert C. Martin in software maintenance?",
        "codeSnippet": "# Boy Scout Rule:\n# 'Always leave the campground cleaner than you found it.'",
        "options": [
            "Always leave the codebase cleaner than you found it whenever touching a module",
            "Only edit code during outdoor daytime hours",
            "Never refactor code without permission from the Scrum Master",
            "Always wear a uniform during code reviews"
        ],
        "correctAnswer": 0,
        "explanation": "The Boy Scout Rule states: 'Always leave the code cleaner than you found it.' Small, incremental cleanups on every commit steadily reduce technical debt over time.",
        "officialRef": "PCAT-31-0x Block 2.2: The Boy Scout Rule in Continuous Refactoring",
        "tags": ["boy-scout-rule", "clean-code", "refactoring"]
    },
    {
        "id": "pcat-2-088",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "How does refactoring nested 'if-else' ladders into 'Guard Clauses' improve code quality and testability?",
        "codeSnippet": "# Before:\ndef process(user):\n    if user is not None:\n        if user.is_active:\n            if user.has_paid:\n                return grant_access()\n\n# After (Guard Clauses):\ndef process(user):\n    if not user or not user.is_active or not user.has_paid:\n        return False\n    return grant_access()",
        "options": [
            "It flattens the cyclomatic complexity, removes deeply nested indentation, and provides early returns for edge cases",
            "It forces Python to execute code in parallel",
            "It eliminates the need for unit tests",
            "It converts dynamic types into C static types"
        ],
        "correctAnswer": 0,
        "explanation": "Guard clauses exit early when prerequisites fail, flattening the indentation arrow anti-pattern, lowering cognitive load, and simplifying individual test branch verification.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring with Guard Clauses",
        "tags": ["guard-clauses", "cyclomatic-complexity", "clean-code"]
    },
    {
        "id": "pcat-2-089",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "What is the 'Extract Method' refactoring technique, and how does it enhance unit testability?",
        "codeSnippet": "# Extracting a complex pricing algorithm out of a 200-line checkout function into calculate_pricing()",
        "options": [
            "Taking a fragment of code that can be grouped together and turning it into a dedicated function with a clear name and well-defined inputs/outputs",
            "Deleting deprecated methods from third-party libraries",
            "Exporting methods to a C DLL",
            "Moving methods into the __init__.py file"
        ],
        "correctAnswer": 0,
        "explanation": "Extract Method isolates discrete business logic into standalone, pure or focused functions that can be directly and easily verified with unit tests.",
        "officialRef": "PCAT-31-0x Block 2.2: Extract Method Refactoring",
        "tags": ["extract-method", "modularity", "testability"]
    },
    {
        "id": "pcat-2-090",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Technical Debt",
        "difficulty": "Beginner",
        "question": "What is 'Technical Debt' in a software testing context?",
        "codeSnippet": "# Technical Debt: Shortcuts taken today that demand interest payments (bugs, slow maintenance) tomorrow.",
        "options": [
            "The implied future cost of additional rework caused by choosing an easy/hacky solution now instead of using a better approach that would take longer",
            "Money owed to cloud computing providers for server instances",
            "The cost of buying commercial testing software licenses",
            "The legal liability of open source software"
        ],
        "correctAnswer": 0,
        "explanation": "Technical Debt (coined by Ward Cunningham) represents the compounding cost of quick-and-dirty hacks, lack of automated tests, and deferred refactoring that degrades future development velocity.",
        "officialRef": "PCAT-31-0x Block 2.2: Understanding and Managing Technical Debt",
        "tags": ["technical-debt", "maintenance", "software-economics"]
    },
    {
        "id": "pcat-2-091",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "KISS Principle",
        "difficulty": "Beginner",
        "question": "How should the KISS (Keep It Simple, Stupid) principle be applied to automated test logic?",
        "codeSnippet": "# KISS in tests:\n# Avoid complex loops, conditions, or regex calculations INSIDE test methods.",
        "options": [
            "Tests should be simple, linear, and devoid of complex control flow (avoid loops, conditionals, and exception handling inside test methods)",
            "Tests should only use 3-letter variable names",
            "Tests must never have more than 1 line of code",
            "Tests should be written in assembly language"
        ],
        "correctAnswer": 0,
        "explanation": "If test code contains complex branches and loops, the tests themselves become prone to bugs and require their own tests. Keep test logic flat, simple, and straightforward (KISS).",
        "officialRef": "PCAT-31-0x Block 2.5: The KISS Principle in Test Automation",
        "tags": ["kiss", "simplicity", "clean-tests"]
    },
    {
        "id": "pcat-2-092",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "YAGNI Principle",
        "difficulty": "Intermediate",
        "question": "What does the 'YAGNI' principle caution against when building test automation frameworks?",
        "codeSnippet": "# YAGNI: You Aren't Gonna Need It!\n# Don't build support for 5 databases when the application only uses PostgreSQL.",
        "options": [
            "Adding speculative features, custom test runners, or complex abstractions before an immediate requirement demands them",
            "Using Python virtual environments",
            "Writing assertions for edge cases",
            "Running tests on pull requests"
        ],
        "correctAnswer": 0,
        "explanation": "YAGNI ('You Aren't Gonna Need It') advises against over-engineering test utilities or building generic frameworks for hypothetical future needs that may never materialize.",
        "officialRef": "PCAT-31-0x Block 2.5: YAGNI in Test Architecture",
        "tags": ["yagni", "over-engineering", "pragmatism"]
    },
    {
        "id": "pcat-2-093",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Test Smells",
        "difficulty": "Intermediate",
        "question": "What is the 'Mystery Guest' test smell?",
        "codeSnippet": "# Mystery Guest smell:\ndef test_user_reports():\n    # Where did 'report_2026.csv' come from? What data is inside it?\n    data = load_report('report_2026.csv')\n    assert len(data) == 42",
        "options": [
            "A test that relies on external resources or files containing hidden data not visible in the test's Arrange phase, making the test hard to understand",
            "An unauthorized user hacking into the test server",
            "A test that runs without any assertions",
            "A test with a randomized name"
        ],
        "correctAnswer": 0,
        "explanation": "A Mystery Guest is an external file, database row, or fixture created outside the test method. The reader cannot see how the input relates to the expected output without hunting down external files.",
        "officialRef": "PCAT-31-0x Block 2.2: Test Smells: Mystery Guest",
        "tags": ["mystery-guest", "test-smells", "clarity"]
    },
    {
        "id": "pcat-2-094",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Test Smells",
        "difficulty": "Intermediate",
        "question": "What is the 'Eager Test' code smell?",
        "codeSnippet": "# Eager Test smell:\ndef test_user_operations():\n    user.register()\n    user.verify_email()\n    user.update_profile()\n    user.change_password()\n    user.delete()",
        "options": [
            "A single test method that attempts to verify multiple unrelated production methods and behaviors in one go",
            "A test that runs before the computer finishes booting",
            "A test that runs too fast to measure",
            "A test that passes on Monday but fails on Friday"
        ],
        "correctAnswer": 0,
        "explanation": "An Eager Test tests too many things at once. When it breaks, it's hard to tell what went wrong. Splitting it into single-responsibility tests restores diagnostic clarity.",
        "officialRef": "PCAT-31-0x Block 2.2: Test Smells: Eager Test",
        "tags": ["eager-test", "single-responsibility", "test-smells"]
    },
    {
        "id": "pcat-2-095",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Pure Functions",
        "difficulty": "Intermediate",
        "question": "Why does refactoring impure code into 'Pure Functions' drastically simplify unit testing?",
        "codeSnippet": "# Pure function: Deterministic, no side-effects\ndef calculate_tax(amount: float, rate: float) -> float:\n    return round(amount * rate, 2)",
        "options": [
            "Pure functions produce the same output for given inputs and have zero side effects, eliminating the need for complex mocks, database setup, or fixture teardown",
            "Pure functions execute directly on the GPU",
            "Pure functions are compiled into binary C extensions",
            "Pure functions cannot throw exceptions"
        ],
        "correctAnswer": 0,
        "explanation": "Pure functions are the easiest units to test: you pass inputs and assert the returned output, completely avoiding mocks, state mutations, and teardown logic.",
        "officialRef": "PCAT-31-0x Block 2.2: Pure Functions and Testability",
        "tags": ["pure-functions", "side-effects", "functional-testing"]
    },
    {
        "id": "pcat-2-096",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Static Quality Tools",
        "difficulty": "Intermediate",
        "question": "How do automated linting and formatting tools (like flake8, black, and ruff) support safe code refactoring?",
        "codeSnippet": "$ ruff check src/\n$ black --check src/",
        "options": [
            "They automatically enforce style conventions, detect unused variables/imports, and highlight dead code without changing program logic",
            "They rewrite production algorithms into neural networks",
            "They replace the need for writing unit tests",
            "They deploy code directly to staging environments"
        ],
        "correctAnswer": 0,
        "explanation": "Linters and formatters eliminate bikeshedding over style and catch syntactic bugs, unused variables, and dead code, allowing developers to focus refactoring on architectural clarity.",
        "officialRef": "PCAT-31-0x Block 2.2: Linters and Refactoring Support",
        "tags": ["linters", "flake8", "black", "ruff"]
    },
    {
        "id": "pcat-2-097",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What is the 'Primitive Obsession' code smell, and what refactoring cures it?",
        "codeSnippet": "# Primitive Obsession:\ndef transfer(sender_str: str, recipient_str: str, amount_int: int, currency_str: str):\n    ...\n\n# Refactoring: Replace with Domain Value Objects (Money, AccountId)",
        "options": [
            "Relying exclusively on primitive types (strings, ints, dicts) for domain concepts; cured by introducing Value Objects (e.g. Money, EmailAddress)",
            "Using old versions of Python like 2.7",
            "Writing procedural loops instead of list comprehensions",
            "Testing on primitive hardware like Raspberry Pi"
        ],
        "correctAnswer": 0,
        "explanation": "Primitive Obsession uses raw strings or integers for rich domain concepts. Refactoring to Value Objects encapsulates validation logic and makes code self-verifying.",
        "officialRef": "PCAT-31-0x Block 2.2: Refactoring Primitive Obsession",
        "tags": ["primitive-obsession", "value-objects", "refactoring"]
    },
    {
        "id": "pcat-2-098",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Refactoring Techniques",
        "difficulty": "Intermediate",
        "question": "What is the 'Introduce Parameter Object' refactoring technique?",
        "codeSnippet": "# Before:\ndef search(keyword, start_date, end_date, min_price, max_price, category, sort_by):\n    ...\n\n# After:\n@dataclass\nclass SearchCriteria:\n    keyword: str\n    ...\n\ndef search(criteria: SearchCriteria): ...",
        "options": [
            "Replacing a long list of parameters with a dedicated class or dataclass, making method signatures cleaner and easier to test",
            "Passing all arguments via sys.argv",
            "Converting parameters into global variables",
            "Packing all parameters into a binary pickle string"
        ],
        "correctAnswer": 0,
        "explanation": "Introduce Parameter Object bundles related parameters into a cohesive class or dataclass, eliminating Long Parameter List smells and simplifying test fixtures.",
        "officialRef": "PCAT-31-0x Block 2.2: Introduce Parameter Object",
        "tags": ["parameter-object", "clean-signatures", "dataclass"]
    },
    {
        "id": "pcat-2-099",
        "section": "Section 2",
        "chapter": "2.2",
        "category": "Code Smells",
        "difficulty": "Intermediate",
        "question": "What is the 'Feature Envy' code smell?",
        "codeSnippet": "# Feature Envy:\nclass OrderReporter:\n    def calculate_total(self, order):\n        # Accesses order.items, order.tax, order.discount, order.shipping...\n        # This logic belongs ON the Order class itself!",
        "options": [
            "A method on one class that seems more interested in the data and methods of another class than its own; cured by Move Method",
            "A developer wanting features from other programming languages",
            "A customer requesting features that competitors have",
            "A software license that expires in 30 days"
        ],
        "correctAnswer": 0,
        "explanation": "Feature Envy occurs when a method in class A repeatedly reaches into class B to calculate things. The 'Move Method' refactoring moves that logic directly into class B.",
        "officialRef": "PCAT-31-0x Block 2.2: Feature Envy and Move Method",
        "tags": ["feature-envy", "move-method", "cohesion"]
    },
    {
        "id": "pcat-2-0100",
        "section": "Section 2",
        "chapter": "2.5",
        "category": "Summary of Block 2",
        "difficulty": "Intermediate",
        "question": "Which combination of principles best summarizes the core syllabus topics of PCAT Block 2: Test Automation and Code Refactoring?",
        "codeSnippet": "# Block 2 Core Domains:\n# - Automation Goals & ROI\n# - Refactoring Loop (Red-Green-Refactor, Technical Debt)\n# - AAA Pattern (Arrange, Act, Assert)\n# - DRY & KISS Principles (balancing DAMP readability and simplicity)",
        "options": [
            "Test automation ROI and limitations, the refactoring loop, structured tests via the AAA pattern, and balancing DRY and KISS with readable DAMP tests",
            "Compiling Linux kernels and configuring Nginx proxy servers",
            "Machine learning gradient descent and neural network layers",
            "Writing HTML5 canvas games in JavaScript"
        ],
        "correctAnswer": 0,
        "explanation": "Block 2 evaluates test automation objectives, the code refactoring cycle, applying the Arrange-Act-Assert triplet in automated Python tests, and applying DRY and KISS principles.",
        "officialRef": "PCAT-31-0x Block 2: Summary of Test Automation & Refactoring",
        "tags": ["block-2-summary", "pcat-core", "craftsmanship"]
    }
]

all_block2_cards = existing_cards + extra_cards
print(f"Total Block 2 cards: {len(all_block2_cards)}")

# Re-index from 1 to 100
for idx, c in enumerate(all_block2_cards, 1):
    c['id'] = f"pcat-2-{idx:03d}"
    c['track'] = 'pcat'
    c['section'] = 'Section 2'

part1 = all_block2_cards[:50]
part2 = all_block2_cards[50:]

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

write_ts_file("src/data/pcatSection2CardsPart1.ts", "pcatSection2CardsPart1", part1)
write_ts_file("src/data/pcatSection2CardsPart2.ts", "pcatSection2CardsPart2", part2)

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

print("Successfully wrote Block 2 with 100 cards!")
