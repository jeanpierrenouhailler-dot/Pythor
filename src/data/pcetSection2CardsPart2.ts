import { Flashcard } from '../types';

export const pcetSection2CardsPart2: Flashcard[] = [
  // Chapter 2.3: Change-Related Testing (Cards 51-60)
  {
    id: 'pcet-2-051',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is a common root cause of test flakiness in Python automated tests?',
    codeSnippet: '# Test code:\nimport time\n\ndef test_background_worker():\n    trigger_async_job()\n    time.sleep(0.1)  # Fixed sleep: fails if CPU is busy!\n    assert job_completed() is True',
    options: [
      'Using arbitrary fixed sleep times (`time.sleep`) instead of explicit polling or waiting for conditions to be satisfied',
      'Using type annotations in function signatures',
      'Running tests on a 64-bit operating system',
      'Using pytest instead of print statements'
    ],
    correctAnswer: 0,
    explanation: 'Hardcoded sleeps (`time.sleep`) are notorious causes of flakiness. Under heavy load or on slower CI runners, 0.1s may not be enough, causing intermittent failures. Explicit polling/wait loops should be used instead.',
    officialRef: 'PCET-30-01 Block 2.3 - Test Stability and Flakiness',
    tags: ['flaky-tests', 'time-sleep', 'async-testing']
  },
  {
    id: 'pcet-2-052',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'Why is shared global state between test cases a major cause of test order dependency and flakiness?',
    codeSnippet: '# Test suite:\nglobal_cache = {}\n\ndef test_step_one():\n    global_cache["user"] = "Alice"\n    assert "user" in global_cache\n\ndef test_step_two():\n    # FAILS if test_step_two is executed before test_step_one!\n    assert global_cache["user"] == "Alice"',
    options: [
      'Global state violates test independence, making test outcomes depend on the execution order of the suite',
      'Python does not allow dictionaries to be global',
      'Global variables cause memory fragmentation on Linux',
      'Pytest automatically converts all global variables into integers'
    ],
    correctAnswer: 0,
    explanation: 'Tests must be completely independent (F.I.R.S.T. principle). Shared mutable global state creates hidden coupling, meaning tests pass or fail depending on the order in which pytest discovers and executes them.',
    officialRef: 'PCET-30-01 Block 2.3 - Test Independence and Isolation',
    tags: ['test-isolation', 'global-state', 'order-dependency']
  },
  {
    id: 'pcet-2-053',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'When should a Regression Test Suite be executed in a Continuous Integration workflow?',
    codeSnippet: '# Git branching workflow:\n# Developer opens Pull Request #88 from feature-branch into main branch.\n# CI trigger: [ ? ]',
    options: [
      'Only once a year during holiday maintenance',
      'Automatically on every pull request, commit to main branch, or scheduled nightly build',
      'Only after customers report critical defects in production',
      'When the server runs out of disk storage'
    ],
    correctAnswer: 1,
    explanation: 'Automated regression testing is designed to run continuously on every commit or pull request to provide rapid, automated guardrails against regressions before code is merged.',
    officialRef: 'PCET-30-01 Block 2.3 - Continuous Regression',
    tags: ['regression-testing', 'ci-cd', 'automation']
  },
  {
    id: 'pcet-2-054',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is "Data Migration Testing"?',
    codeSnippet: '# System migration:\n# Upgrading from SQLite to PostgreSQL.\n# Migrating 2,000,000 user rows.\n# Testing verifies: zero records dropped, encoding preserved, foreign keys intact.',
    options: [
      'Testing whether birds can fly with GPS trackers',
      'Verifying that data from a legacy database or system is accurately, completely, and safely transferred into the new database schema without corruption',
      'Testing data transfer speeds over dial-up modems',
      'Checking git commit history'
    ],
    correctAnswer: 1,
    explanation: 'Data Migration Testing verifies that data converted and transferred from an old system to a new system maintains data integrity, completeness, schema constraints, and format accuracy.',
    officialRef: 'PCET-30-01 Block 2.3 - Maintenance and Migration Testing',
    tags: ['data-migration', 'maintenance-testing', 'integrity']
  },
  {
    id: 'pcet-2-055',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is "Retirement Testing" (or Decommissioning Testing)?',
    codeSnippet: '# Sunsetting legacy v1 API:\n# - Archiving historical transactions to cold storage according to tax retention laws (7 years)\n# - Verifying that requests to /v1/api return HTTP 410 Gone\n# - Verifying that dependent systems continue operating using /v2/api',
    options: [
      'Testing software used by retirement pension funds',
      'Testing the orderly archiving, data preservation, and safe removal of an application, service, or feature that is being decommissioned',
      'A physical endurance test for retiring employees',
      'Testing software that has not been updated for 20 years'
    ],
    correctAnswer: 1,
    explanation: 'Retirement/Decommissioning Testing verifies that retiring a system does not leave orphan services, that data is safely archived according to compliance rules, and that client systems handle retirement gracefully.',
    officialRef: 'PCET-30-01 Block 2.3 - Decommissioning Testing',
    tags: ['retirement-testing', 'decommissioning', 'compliance']
  },
  {
    id: 'pcet-2-056',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'If a critical security patch is applied to a production server at 2:00 AM, what quick change-related test should be executed immediately before opening the site to public traffic?',
    codeSnippet: '# Emergency patch applied: CVE-2024-xxxx OpenSSL vulnerability resolved.\n# What quick test verifies that the web server is operational?',
    options: [
      'A 6-hour endurance stress test',
      'A smoke test (or sanity test) verifying that the server boots, listens on port 443, and handles basic requests',
      'A full user acceptance testing workshop with client executives',
      'An exhaustive test of every possible 64-bit integer'
    ],
    correctAnswer: 1,
    explanation: 'Following an emergency patch, a quick smoke or sanity test verifies that the system started cleanly and that core functionality is operational before full traffic is restored.',
    officialRef: 'PCET-30-01 Block 2.3 - Smoke and Sanity Testing',
    tags: ['smoke-testing', 'hotfix', 'production-readiness']
  },
  {
    id: 'pcet-2-057',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is "Regression Test Suite Bloat" and how can it be mitigated?',
    codeSnippet: '# Problem: Over 5 years, the regression suite grew to 15,000 tests taking 8 hours to execute.\n# Many tests are obsolete, redundant, or test dead features.',
    options: [
      'Increase the server hardware size infinitely to ignore the problem',
      'Regularly prune, optimize, consolidate, and retire redundant or obsolete test cases through test suite maintenance',
      'Delete the entire test suite and stop running regression tests',
      'Run only the first 5 tests in alphabetical order'
    ],
    correctAnswer: 1,
    explanation: 'Test suite bloat occurs when suites grow indefinitely without maintenance. Teams must periodically audit, refactor, and retire obsolete, redundant, or low-value tests to maintain fast CI cycle times.',
    officialRef: 'PCET-30-01 Block 2.3 - Test Suite Optimization',
    tags: ['suite-bloat', 'maintenance', 'optimization']
  },
  {
    id: 'pcet-2-058',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'Why should a new automated test be added to the regression suite every time a production bug is fixed?',
    codeSnippet: '# Defect #892: User with hyphen in last name ("Smith-Jones") crashed registration.\n# Developer fixes regex.\n# Tester writes: def test_user_with_hyphenated_name(): assert register("Alice", "Smith-Jones") is True\n# Test is added to tests/test_registration.py permanently.',
    options: [
      'To prevent the exact same defect from ever recurring unnoticed in future builds (preventing regression)',
      'To make the developer feel guilty forever',
      'Because Python syntax requires at least 1 test per bug',
      'To increase the file size of the repository'
    ],
    correctAnswer: 0,
    explanation: 'Codifying fixed bugs into automated regression tests ensures that any future changes or refactoring that inadvertently reintroduce the bug will immediately trigger a test failure.',
    officialRef: 'PCET-30-01 Block 2.3 - Defect-Driven Regression',
    tags: ['regression-testing', 'bug-prevention', 'automation']
  },
  {
    id: 'pcet-2-059',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'What is the primary danger of having NO automated regression tests in a project?',
    codeSnippet: '# Legacy project with 0 automated tests:\n# Every new feature release takes 3 weeks of manual testing,\n# and new updates constantly break previously working features.',
    options: [
      'The company cannot use Git',
      'Development velocity plummets, fear of changing code escalates, and regressions frequently reach end users in production',
      'Python code will refuse to execute',
      'The database will erase itself automatically'
    ],
    correctAnswer: 1,
    explanation: 'Without automated regression testing, verifying changes becomes prohibitively slow and expensive. Teams become afraid to refactor, and unintended regressions frequently escape to production.',
    officialRef: 'PCET-30-01 Block 2.3 - Value of Regression Testing',
    tags: ['regression-testing', 'velocity', 'quality']
  },
  {
    id: 'pcet-2-060',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'In Git workflows, how does a "Pre-Commit Hook" support change-related quality?',
    codeSnippet: '# .pre-commit-config.yaml:\n# Before git commit succeeds, it automatically runs:\n# - flake8\n# - black --check\n# - pytest tests/unit/',
    options: [
      'It prevents developers from committing code that fails basic linting, formatting, or unit tests locally before pushing to the shared repository',
      'It automatically submits code to the patent office',
      'It deletes untracked files on the hard drive',
      'It restarts the developer\'s computer after every commit'
    ],
    correctAnswer: 0,
    explanation: 'Git pre-commit hooks run automated checks locally before a commit is recorded, ensuring broken code, syntax errors, or failing unit tests never make it into the remote repository.',
    officialRef: 'PCET-30-01 Block 2.3 - Pre-Commit Hooks',
    tags: ['git-hooks', 'pre-commit', 'shift-left']
  },

  // Chapter 2.4: Test Pyramid Architecture & Test Automation Strategies (Cards 61-80)
  {
    id: 'pcet-2-061',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Beginner',
    question: 'According to Mike Cohn\'s original Test Pyramid model, which layer forms the broad base of the pyramid?',
    codeSnippet: '# Test Pyramid Structure:\n#       /  UI / E2E  \\        <-- Apex (Few, Slow, Expensive)\n#      / Service / API \\      <-- Middle\n#     /   Unit Tests   \\     <-- Base (Many, Fast, Cheap)',
    options: [
      'UI / End-to-End Tests',
      'Unit Tests',
      'Manual Exploratory Tests',
      'Performance Stress Tests'
    ],
    correctAnswer: 1,
    explanation: 'The Test Pyramid has Unit Tests at its base: they are fast to execute, highly isolated, cheap to write and maintain, and pinpoint exact failure locations.',
    officialRef: 'PCET-30-01 Block 2.4 - Test Pyramid Concept',
    tags: ['test-pyramid', 'unit-tests', 'architecture']
  },
  {
    id: 'pcet-2-062',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Intermediate',
    question: 'Why should the majority of automated tests in a healthy test suite be Unit Tests rather than End-to-End UI tests?',
    codeSnippet: '# Speed comparison:\n# 1,000 unit tests run in: 3 seconds\n# 1,000 browser E2E tests run in: 2.5 hours (and fail frequently due to network/DOM lag)',
    options: [
      'Because unit tests run thousands of times faster, are deterministic, and pinpoint the exact failing line of code without external environmental noise',
      'Because Python does not support UI testing',
      'Because end-to-end tests cannot find defects',
      'Because unit tests are legally required by the Python Institute'
    ],
    correctAnswer: 0,
    explanation: 'Unit tests execute in milliseconds, are resilient to network and UI flakiness, and provide immediate, granular feedback on the exact function or logic that failed.',
    officialRef: 'PCET-30-01 Block 2.4 - Test Pyramid Rationale',
    tags: ['test-pyramid', 'speed', 'maintainability']
  },
  {
    id: 'pcet-2-063',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid Antipatterns',
    difficulty: 'Intermediate',
    question: 'What is the "Ice Cream Cone" (or Inverted Pyramid) anti-pattern in test automation?',
    codeSnippet: '# Suite distribution:\n# - 500 Manual & Automated UI End-to-End tests\n# - 20 Integration tests\n# - 5 Unit tests\n# Result: Builds take 4 hours, tests fail randomly, debugging is painful.',
    options: [
      'A software bug in cold storage freezers',
      'An anti-pattern where a team relies predominantly on slow, brittle UI/E2E tests while having very few or no fast unit and integration tests at the base',
      'A test suite that only executes during summertime',
      'An optimal agile testing architecture'
    ],
    correctAnswer: 1,
    explanation: 'The Ice Cream Cone anti-pattern inverts the Test Pyramid: heavy reliance on slow, fragile UI/E2E tests at the top and sparse unit tests at the bottom, resulting in slow, flaky, expensive test suites.',
    officialRef: 'PCET-30-01 Block 2.4 - Anti-Patterns: Ice Cream Cone',
    tags: ['ice-cream-cone', 'anti-patterns', 'test-pyramid']
  },
  {
    id: 'pcet-2-064',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid Antipatterns',
    difficulty: 'Intermediate',
    question: 'What is the "Hourglass" (or Cupcake) anti-pattern in test automation?',
    codeSnippet: '# Suite distribution:\n# - Many Unit tests (Base is solid)\n# - Almost ZERO Integration / Service / API tests (Middle is pinched)\n# - Many UI End-to-End tests (Top is heavy)',
    options: [
      'A test suite shaped like an hourglass where unit and UI tests are abundant, but service/integration testing between layers is completely missing',
      'A test suite that measures time using sand timers',
      'A test suite that only runs for 60 minutes',
      'A performance test that evaluates battery drain'
    ],
    correctAnswer: 0,
    explanation: 'The Hourglass anti-pattern has plenty of unit tests and many UI tests, but lacks the middle integration/service layer, causing component interface errors to only be detected late at the brittle UI level.',
    officialRef: 'PCET-30-01 Block 2.4 - Anti-Patterns: Hourglass',
    tags: ['hourglass', 'anti-patterns', 'integration-gap']
  },
  {
    id: 'pcet-2-065',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Intermediate',
    question: 'What occupies the middle tier of the modern Test Pyramid?',
    codeSnippet: '# Test Pyramid:\n#       /    E2E / UI    \\\n#      / [  MIDDLE TIER  ] \\\n#     /     Unit Tests     \\',
    options: [
      'Manual ad-hoc testing',
      'Integration / API / Service-level tests',
      'Hardware firmware flashing',
      'Static requirement reviews'
    ],
    correctAnswer: 1,
    explanation: 'The middle tier represents Integration / API / Service tests. They test communication between services, database interactions, and business logic without the overhead of browser UI rendering.',
    officialRef: 'PCET-30-01 Block 2.4 - Test Pyramid Middle Layer',
    tags: ['api-testing', 'service-layer', 'test-pyramid']
  },
  {
    id: 'pcet-2-066',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Beginner',
    question: 'When is automating a test case NOT cost-effective (poor Return on Investment)?',
    codeSnippet: '# Scenario A: The monthly recurring payroll calculation script.\n# Scenario B: A one-time marketing splash page live for 48 hours for a weekend event.\n# Scenario C: Core user login authentication API.',
    options: [
      'Scenario A',
      'Scenario B',
      'Scenario C',
      'All three scenarios should always be 100% automated'
    ],
    correctAnswer: 1,
    explanation: 'Automating tests requires upfront development and ongoing maintenance. A temporary, one-off splash page (Scenario B) does not justify the automation investment; manual exploratory testing is more cost-effective.',
    officialRef: 'PCET-30-01 Block 2.4 - Automation ROI',
    tags: ['roi', 'automation-strategy', 'cost-benefit']
  },
  {
    id: 'pcet-2-067',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is "Data-Driven Testing" (DDT)?',
    codeSnippet: '# In pytest:\nimport pytest\n\n@pytest.mark.parametrize("input_val, expected", [\n    (2, 4),\n    (3, 9),\n    (4, 16),\n    (-5, 25),\n])\ndef test_square(input_val, expected):\n    assert input_val ** 2 == expected',
    options: [
      'A testing technique where test inputs and expected outputs are read from data sources (tables, CSV, parameters) so the same test logic runs across multiple data sets',
      'Testing only machine learning datasets',
      'Testing performed by database administrators only',
      'Testing without using any code'
    ],
    correctAnswer: 0,
    explanation: 'Data-Driven Testing separates test logic from test data. Using parametrized fixtures (e.g., `@pytest.mark.parametrize`), a single test function executes against multiple input-output pairs.',
    officialRef: 'PCET-30-01 Block 2.4 - Data-Driven Testing',
    tags: ['data-driven-testing', 'parametrize', 'pytest']
  },
  {
    id: 'pcet-2-068',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is "Keyword-Driven Testing"?',
    codeSnippet: '# Test script table:\n# | Action     | Target        | Value            |\n# | Open       | /login        |                  |\n# | InputText  | #username     | alice@corp.com   |\n# | InputText  | #password     | Secret123!       |\n# | Click      | #submit_btn   |                  |\n# | VerifyText | #welcome_msg  | "Welcome, Alice" |',
    options: [
      'Testing by searching keywords on Google',
      'A test automation framework where test steps are defined using action keywords (e.g., Click, InputText, Verify) that map to underlying reusable automation code',
      'Testing whether Python reserved keywords (like def, class) work in Python',
      'Testing voice recognition software'
    ],
    correctAnswer: 1,
    explanation: 'Keyword-Driven Testing specifies test steps using action keywords (Click, Open, Verify) with targets and parameters, allowing domain testers to write tests without coding the underlying automation.',
    officialRef: 'PCET-30-01 Block 2.4 - Keyword-Driven Testing',
    tags: ['keyword-driven', 'test-frameworks', 'automation']
  },
  {
    id: 'pcet-2-069',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Intermediate',
    question: 'In the Test Pyramid, why are End-to-End (E2E) UI tests considered "brittle"?',
    codeSnippet: '# Selenium UI test failure:\n# ElementClickInterceptedException: <button id="submit"> is obscured by cookie consent banner;\n# Or: Test fails because a designer changed the button class from .btn-blue to .btn-primary.',
    options: [
      'They break easily due to minor DOM changes, styling updates, animation delays, or network latency even when backend business logic works perfectly',
      'They break because Python cannot handle HTML strings',
      'They break only when executed on a Sunday',
      'They break because browsers refuse to run tests'
    ],
    correctAnswer: 0,
    explanation: 'UI tests are brittle because they depend on UI layout, CSS selectors, timing, and third-party elements. Small cosmetic changes frequently break UI tests without any defect in underlying business logic.',
    officialRef: 'PCET-30-01 Block 2.4 - Test Pyramid Fragility',
    tags: ['e2e-testing', 'brittleness', 'test-pyramid']
  },
  {
    id: 'pcet-2-070',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is the role of API Testing compared to UI Testing?',
    codeSnippet: '# API test with requests:\nimport requests\n\ndef test_create_order():\n    resp = requests.post("https://api.app.com/orders", json={"item": "Widget", "qty": 2})\n    assert resp.status_code == 201\n    assert resp.json()["status"] == "created"',
    options: [
      'API tests test business logic directly through network endpoints, running much faster and more reliably than rendering browser DOM interfaces',
      'API tests only check whether Wi-Fi is connected',
      'API tests can only be run once per deployment',
      'API tests require manual button clicks by human testers'
    ],
    correctAnswer: 0,
    explanation: 'API testing bypasses the graphical interface to test the service layer directly (request/response, status codes, payload schemas, security). It is faster, less brittle, and easier to automate in CI.',
    officialRef: 'PCET-30-01 Block 2.4 - API vs UI Testing',
    tags: ['api-testing', 'requests', 'service-tier']
  },
  {
    id: 'pcet-2-071',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Beginner',
    question: 'What is "Headless Browser Testing"?',
    codeSnippet: '# Running Playwright or Selenium in CI:\n# options.add_argument("--headless")\n# Browser runs in memory on Linux server without rendering a graphical desktop window.',
    options: [
      'Running automated browser tests without displaying a visible graphical user interface window, conserving server CPU and memory in CI environments',
      'Testing mobile phones that have no front camera',
      'Testing an application after the development lead has left the company',
      'A browser that has no address bar'
    ],
    correctAnswer: 0,
    explanation: 'A headless browser runs without a graphical user interface (GUI). It executes web pages, JavaScript, and DOM operations in memory, making it ideal for fast, resource-efficient CI test runs.',
    officialRef: 'PCET-30-01 Block 2.4 - Headless Testing',
    tags: ['headless-browser', 'ci-cd', 'selenium']
  },
  {
    id: 'pcet-2-072',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is the "Page Object Model" (POM) design pattern in UI test automation?',
    codeSnippet: '# POM structure:\nclass LoginPage:\n    def __init__(self, driver):\n        self.driver = driver\n        self.username_input = "id_username"\n        self.password_input = "id_password"\n        self.submit_btn = "btn_submit"\n\n    def login(self, username, password):\n        self.driver.type(self.username_input, username)\n        self.driver.type(self.password_input, password)\n        self.driver.click(self.submit_btn)',
    options: [
      'A pattern that models web pages as Python classes, encapsulating page elements and actions to improve test maintainability and reduce duplication',
      'A pattern that creates PDF pages from Python strings',
      'A database table storing website HTML files',
      'A compiler optimization for web browsers'
    ],
    correctAnswer: 0,
    explanation: 'The Page Object Model (POM) creates an abstraction layer where web pages are represented by classes. UI locators and actions are encapsulated, so if a selector changes, only the Page Object requires modification.',
    officialRef: 'PCET-30-01 Block 2.4 - Page Object Model',
    tags: ['pom', 'design-patterns', 'ui-automation']
  },
  {
    id: 'pcet-2-073',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Intermediate',
    question: 'Why should manual exploratory testing still take place even if a project achieves 100% automated test pass rates?',
    codeSnippet: '# Automated tests verify: "Does the system do what we expected and coded it to do?"\n# Exploratory testing discovers: "What unexpected behaviors, usability flaws, or edge cases did we never think to anticipate?"',
    options: [
      'Because automated scripts cannot think creatively, notice visual anomalies, or explore unanticipated edge cases',
      'Because Python does not allow releases without human signatures',
      'Because manual testing is faster than running pytest',
      'Because automated tests expire after 30 days'
    ],
    correctAnswer: 0,
    explanation: 'Automated tests only check conditions they were explicitly scripted to verify. Skilled human exploratory testing brings curiosity, domain intuition, and creativity to uncover unforeseen edge cases.',
    officialRef: 'PCET-30-01 Block 2.4 - Exploratory vs Automated',
    tags: ['exploratory-testing', 'human-intuition', 'automation-limits']
  },
  {
    id: 'pcet-2-074',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is a "Test Harness"?',
    codeSnippet: '# Execution framework:\n# A test harness configures environment variables, spins up mock servers,\n# populates fixture databases, executes pytest, and compiles HTML coverage reports.',
    options: [
      'A physical harness worn by server technicians',
      'A collection of software, test data, and tools configured to execute tests under controlled conditions and report results',
      'A Python dictionary storing user credentials',
      'A git branch containing experimental features'
    ],
    correctAnswer: 1,
    explanation: 'A Test Harness is the testing framework, stubs, drivers, mock servers, and execution scripts assembled to run test suites under controlled, repeatable conditions.',
    officialRef: 'PCET-30-01 Block 2.4 - Test Harness',
    tags: ['test-harness', 'execution-environment', 'tooling']
  },
  {
    id: 'pcet-2-075',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is the risk of "Over-Mocking" in unit test suites?',
    codeSnippet: '# Test snippet:\ndef test_checkout(mock_db, mock_payment, mock_cart, mock_user, mock_email):\n    # Everything is mocked! Function passes, but in production:\n    # Real database rejects SQL query due to syntax error in column name.',
    options: [
      'Over-mocking makes tests run too slowly',
      'Over-mocking isolates code so thoroughly that tests pass against fictitious assumptions, failing to detect real interface integration flaws',
      'Over-mocking uses too many CPU cores',
      'Over-mocking causes Python syntax errors'
    ],
    correctAnswer: 1,
    explanation: 'When everything is mocked, unit tests only verify that units interact with mocked assumptions. If mocks diverge from real external behavior, tests pass while production code fails.',
    officialRef: 'PCET-30-01 Block 2.4 - Mocking Pitfalls',
    tags: ['over-mocking', 'test-doubles', 'integration-risk']
  },
  {
    id: 'pcet-2-076',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Beginner',
    question: 'Which test level is fastest to execute and provides the cheapest feedback loop?',
    codeSnippet: '# Test metrics:\n# - UI E2E test: 12 seconds per test\n# - Service integration test: 350 ms per test\n# - Unit test: 2 ms per test',
    options: [
      'End-to-End UI Testing',
      'Unit Testing',
      'User Acceptance Testing',
      'Operational Disaster Recovery Testing'
    ],
    correctAnswer: 1,
    explanation: 'Unit tests run in milliseconds in memory without I/O or network overhead, providing the fastest and cheapest feedback loop to developers during active programming.',
    officialRef: 'PCET-30-01 Block 2.4 - Unit Test Speed and Value',
    tags: ['unit-testing', 'feedback-loop', 'speed']
  },
  {
    id: 'pcet-2-077',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is "Continuous Regression"?',
    codeSnippet: '# Pipeline configuration:\n# on: [push, pull_request]\n# jobs:\n#   run-regression-suite:\n#     steps:\n#       - run: pytest tests/regression/',
    options: [
      'The practice of automatically running regression tests upon every code change or integration event to detect faults immediately',
      'A software defect that continuously reverts commits in git',
      'A math formula that never converges',
      'Running tests only during office hours'
    ],
    correctAnswer: 0,
    explanation: 'Continuous Regression ensures that regression suites run automatically with each code integration event in CI, keeping the codebase continuously verifiable and deployable.',
    officialRef: 'PCET-30-01 Block 2.4 - Continuous Regression',
    tags: ['continuous-regression', 'ci-cd', 'devops']
  },
  {
    id: 'pcet-2-078',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is a "Golden Master" (or Characterization) test?',
    codeSnippet: '# Refactoring a complex 2,000-line legacy pricing algorithm:\n# 1. Run 10,000 historical real-world input combinations.\n# 2. Record all 10,000 outputs as the "Golden Master" baseline snapshot.\n# 3. Refactor the code.\n# 4. Assert that new code produces identical outputs to the baseline snapshot.',
    options: [
      'A test that earns an Olympic gold medal',
      'A testing strategy that records current behavior of legacy code as a baseline to verify that refactoring does not change existing behavior',
      'A test performed by the company founder',
      'A test that checks monetary currency values'
    ],
    correctAnswer: 1,
    explanation: 'Characterization / Golden Master testing captures the exact existing output of a complex or legacy system across many inputs, acting as an immutable regression baseline during refactoring.',
    officialRef: 'PCET-30-01 Block 2.4 - Golden Master Testing',
    tags: ['golden-master', 'characterization', 'refactoring']
  },
  {
    id: 'pcet-2-079',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Automation Strategy',
    difficulty: 'Intermediate',
    question: 'What is "Contract Testing" (e.g., using Pact) in microservice architectures?',
    codeSnippet: '# Consumer: Front-end service expects GET /users/1 to return {"id": 1, "username": "alice"}\n# Provider: Back-end API verifies it adheres to this exact contract schema before deploying.',
    options: [
      'Testing written by human lawyers before signing employment agreements',
      'A technique that tests integration points by verifying that services adhere to a shared, agreed-upon API contract without spinning up all microservices',
      'Testing whether software licenses are valid',
      'Testing only paid third-party commercial APIs'
    ],
    correctAnswer: 1,
    explanation: 'Consumer-Driven Contract Testing verifies that microservices can communicate correctly by ensuring that the provider\'s API satisfies the contract schemas expected by consumers, without heavy E2E environments.',
    officialRef: 'PCET-30-01 Block 2.4 - Contract Testing',
    tags: ['contract-testing', 'microservices', 'api-testing']
  },
  {
    id: 'pcet-2-080',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.4',
    category: 'Test Pyramid',
    difficulty: 'Intermediate',
    question: 'How does modern Cloud-Native testing shift the traditional Test Pyramid?',
    codeSnippet: '# Modern testing strategies:\n# In addition to unit tests, teams utilize:\n# - Ephemeral containerized integration tests (Testcontainers)\n# - Contract tests between microservices\n# - Canaries and synthetic monitoring in production ("Testing in Production")',
    options: [
      'It completely removes all unit testing',
      'It supplements the pyramid with fast containerized integration tests and telemetry/canary monitoring in production',
      'It mandates that all testing must occur on physical hardware servers only',
      'It requires Python code to be converted to YAML'
    ],
    correctAnswer: 1,
    explanation: 'Modern testing leverages containers (like Testcontainers for real databases) and progressive delivery (canary releases, synthetic monitoring) to complement unit tests with realistic integration checks.',
    officialRef: 'PCET-30-01 Block 2.4 - Modern Testing Architecture',
    tags: ['cloud-native', 'testcontainers', 'canary-testing']
  },

  // Chapter 2.5: Fundamental Test Process, Artifacts & Documentation (Cards 81-100)
  {
    id: 'pcet-2-081',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Fundamental Test Process',
    difficulty: 'Beginner',
    question: 'What is the FIRST phase of the Fundamental Test Process?',
    codeSnippet: '# Fundamental Test Process phases:\n# [ Phase 1 ] -> Monitoring & Control -> Analysis -> Design -> Implementation -> Execution -> Completion',
    options: [
      'Test Execution',
      'Test Planning',
      'Test Automation Scripting',
      'Defect Retesting'
    ],
    correctAnswer: 1,
    explanation: 'Test Planning is the initial phase: it defines the objectives of testing, establishes the approach, determines resources and schedule, and defines entry and exit criteria.',
    officialRef: 'PCET-30-01 Block 2.5 - Fundamental Test Process',
    tags: ['test-process', 'test-planning', 'fundamentals']
  },
  {
    id: 'pcet-2-082',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Fundamental Test Process',
    difficulty: 'Intermediate',
    question: 'What is the key question answered during the "Test Analysis" phase?',
    codeSnippet: '# Test Process:\n# Test Analysis answers: [ ? ]\n# Test Design answers: "How are we going to test it?"',
    options: [
      '"What is the root cause of this memory leak?"',
      '"What are we going to test?" (Identifying test conditions from the test basis)',
      '"How fast can we run pytest in parallel?"',
      '"How many developers should we hire?"'
    ],
    correctAnswer: 1,
    explanation: 'Test Analysis analyzes the test basis (requirements, user stories, architecture) to determine "What to test" in the form of measurable test conditions.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Analysis vs Design',
    tags: ['test-analysis', 'test-conditions', 'test-process']
  },
  {
    id: 'pcet-2-083',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Fundamental Test Process',
    difficulty: 'Intermediate',
    question: 'What activity takes place during "Test Design"?',
    codeSnippet: '# Transition from Condition to Case:\n# Test Condition: "Verify currency conversion with zero amount"\n# Test Design action: Specifying exact inputs (amount=0.00, currency="EUR"), expected outputs ("0.00 EUR"), and boundary values.',
    options: [
      'Designing graphical user interfaces using Figma',
      'Transforming test conditions into concrete test cases, specifying test inputs, expected results, and test data',
      'Fixing defects in Python backend code',
      'Purchasing server racks for the staging environment'
    ],
    correctAnswer: 1,
    explanation: 'Test Design elaborates high-level test conditions into detailed test cases, identifying specific test data, preconditions, and expected results.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Design',
    tags: ['test-design', 'test-cases', 'test-process']
  },
  {
    id: 'pcet-2-084',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Fundamental Test Process',
    difficulty: 'Intermediate',
    question: 'What occurs during the "Test Implementation" phase?',
    codeSnippet: '# Activities:\n# - Writing automated test scripts (pytest test files)\n# - Creating test fixtures and populating mock databases\n# - Organizing test cases into ordered test suites',
    options: [
      'Compiling the Python interpreter from C source code',
      'Creating and prioritizing test suites, creating test data, writing automated test scripts, and preparing the test environment',
      'Selling the software product to end customers',
      'Deleting old bug reports'
    ],
    correctAnswer: 1,
    explanation: 'Test Implementation organizes test cases into test suites, develops automated test scripts, prepares test data, and verifies test environment readiness.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Implementation',
    tags: ['test-implementation', 'test-suites', 'test-process']
  },
  {
    id: 'pcet-2-085',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Fundamental Test Process',
    difficulty: 'Beginner',
    question: 'What occurs during "Test Execution"?',
    codeSnippet: '# Running the test suites:\n# pytest tests/ --verbose\n# Comparing actual outputs to expected results, logging test results (Pass/Fail), and reporting incidents.',
    options: [
      'Running test suites manually or automatically, comparing actual results with expected results, and recording discrepancies as defect reports',
      'Executing criminal penalties against poor programmers',
      'Shutting down company operations',
      'Writing the initial business specifications'
    ],
    correctAnswer: 0,
    explanation: 'Test Execution involves running test suites, observing outcomes, comparing actual results against expected results, recording test results, and logging defects for any anomalies.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Execution',
    tags: ['test-execution', 'pass-fail', 'defect-logging']
  },
  {
    id: 'pcet-2-086',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Fundamental Test Process',
    difficulty: 'Intermediate',
    question: 'What is the purpose of the "Test Completion" (or Test Closure) phase?',
    codeSnippet: '# Release sign-off meeting:\n# - Reviewing exit criteria fulfillment\n# - Producing the Final Test Summary Report\n# - Archiving test environments and reusable test assets\n# - Documenting lessons learned for future sprints',
    options: [
      'Deleting all test files so they do not take up disk space',
      'Evaluating whether exit criteria are met, producing test summary reports, archiving reusable test artifacts, and conducting retrospectives',
      'Celebrating the release by turning off all monitoring alerts',
      'Resetting git repository history'
    ],
    correctAnswer: 1,
    explanation: 'Test Completion collects data from completed test activities to consolidate experience, finalize test deliverables, archive test assets for reuse, and evaluate exit criteria.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Completion',
    tags: ['test-completion', 'closure', 'retrospective']
  },
  {
    id: 'pcet-2-087',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Intermediate',
    question: 'What is a "Requirements Traceability Matrix" (RTM)?',
    codeSnippet: '# Matrix Table:\n# | Req ID  | Requirement Desc   | Test Case IDs     | Defect IDs  | Status |\n# | REQ-101 | User login via SMS | TC-101a, TC-101b  | BUG-45      | Pass   |\n# | REQ-102 | Password Reset     | TC-102a           | None        | Pass   |',
    options: [
      'A matrix screen saver inspired by the movie The Matrix',
      'A grid document that links requirements to the test cases designed to verify them, ensuring complete test coverage and tracking defect impacts',
      'A 2D NumPy array used for machine learning classification',
      'A list of all employees in the IT department'
    ],
    correctAnswer: 1,
    explanation: 'A Requirements Traceability Matrix (RTM) tracks bi-directional relationships between requirements, test cases, and discovered defects, proving that every requirement is tested and identifying the impact of requirement changes.',
    officialRef: 'PCET-30-01 Block 2.5 - Requirements Traceability Matrix (RTM)',
    tags: ['rtm', 'traceability', 'coverage']
  },
  {
    id: 'pcet-2-088',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Intermediate',
    question: 'Why is "Bi-Directional Traceability" valuable in software test management?',
    codeSnippet: '# Forward: Requirement -> Design -> Code -> Test Case\n# Backward: Test Case -> Defect -> Code -> Requirement',
    options: [
      'It enables impact analysis when requirements change and proves test coverage completeness from requirements down to test execution',
      'It allows code to be executed backward in Python',
      'It lets developers edit git commits in reverse chronological order',
      'It increases internet bandwidth speeds'
    ],
    correctAnswer: 0,
    explanation: 'Bi-directional traceability allows teams to verify that all requirements have corresponding tests (forward) and understand the business rationale and requirements affected by failing tests or bugs (backward).',
    officialRef: 'PCET-30-01 Block 2.5 - Bi-Directional Traceability',
    tags: ['traceability', 'rtm', 'impact-analysis']
  },
  {
    id: 'pcet-2-089',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Beginner',
    question: 'What standard information is documented in a "Test Plan"?',
    codeSnippet: '# IEEE 829 Test Plan standard structure:\n# Scope, items to be tested, items NOT to be tested, test approach, pass/fail criteria, entry/exit criteria, schedule, risks, and resource requirements.',
    options: [
      'A high-level document outlining the scope, objectives, resources, schedule, approach, and risks of planned testing activities',
      'The source code of the Python interpreter',
      'A list of company financial secrets',
      'A user manual explaining how to use Microsoft Word'
    ],
    correctAnswer: 0,
    explanation: 'A Test Plan describes the scope, approach, resources, schedule, responsibilities, risks, and exit criteria for intended testing activities, aligning the testing effort with project goals.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Plan Structure',
    tags: ['test-plan', 'documentation', 'test-management']
  },
  {
    id: 'pcet-2-090',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Intermediate',
    question: 'What is a "Test Summary Report"?',
    codeSnippet: '# Report content:\n# "Test Run: Sprint 12 Final\n# Total Tests: 450 | Passed: 448 (99.5%) | Failed: 2 (Low Severity)\n# Critical Defects: 0 | Branch Coverage: 88%\n# Recommendation: APPROVED for Production Release."',
    options: [
      'A document summarizing testing activities, execution metrics, open defects, and overall product quality evaluation to support release decisions',
      'A receipt for test automation software licenses',
      'A collection of Python docstrings extracted with Sphinx',
      'A developer\'s annual performance review'
    ],
    correctAnswer: 0,
    explanation: 'A Test Summary Report summarizes testing results, metrics, variances against the test plan, outstanding defects, and provides an objective quality recommendation regarding software release.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Summary Report',
    tags: ['test-summary-report', 'metrics', 'release-governance']
  },
  {
    id: 'pcet-2-091',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Monitoring and Control',
    difficulty: 'Intermediate',
    question: 'In the Fundamental Test Process, what is the difference between "Test Monitoring" and "Test Control"?',
    codeSnippet: '# Activity A: Daily tracking of executed test count, pass percentage, and open defect trends.\n# Activity B: Adding two additional testers and prioritizing high-risk modules because testing is behind schedule.',
    options: [
      'Activity A is Test Control; Activity B is Test Monitoring',
      'Activity A is Test Monitoring (observing metrics); Activity B is Test Control (taking corrective action to meet objectives)',
      'Both activities are identical',
      'Test monitoring is done by machines; test control is done by robots'
    ],
    correctAnswer: 1,
    explanation: 'Test Monitoring is the ongoing check of progress against the test plan using metrics. Test Control takes corrective actions (reallocating resources, adjusting scope) to steer activities toward project targets.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Monitoring and Control',
    tags: ['test-monitoring', 'test-control', 'test-management']
  },
  {
    id: 'pcet-2-092',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Beginner',
    question: 'What is a "Test Procedure" (or Test Script)?',
    codeSnippet: '"""\nTest Procedure: User Password Change\nStep 1: Navigate to /settings/security\nStep 2: Enter current password "Pass123!"\nStep 3: Enter new password "NewSecure456!"\nStep 4: Click "Save Changes"\nStep 5: Verify confirmation toast appears\n"""',
    options: [
      'A sequence of instructions for the execution of a test, specifying the operational steps to carry out a test case',
      'A legal court procedure for software patents',
      'A Python builtin function that cleans memory',
      'The keyboard shortcut to compile code'
    ],
    correctAnswer: 0,
    explanation: 'A Test Procedure (or test script / execution procedure) details the sequential step-by-step actions required to set up preconditions, execute actions, and verify expected outcomes.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Procedures and Scripts',
    tags: ['test-procedure', 'test-script', 'execution']
  },
  {
    id: 'pcet-2-093',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Intermediate',
    question: 'What constitutes good "Test Data Management"?',
    codeSnippet: '# Strategy:\n# - Version-controlled JSON/SQL fixture files\n# - Anonymized production clones with PII removed\n# - Factories/generators (e.g. FactoryBoy, Faker) producing clean, isolated test data for each run',
    options: [
      'Copying unencrypted customer bank records onto USB flash drives',
      'Using controlled, realistic, reproducible, and privacy-compliant data sets that can be reset to a known state between test runs',
      'Manually typing new random data into forms every morning',
      'Never using any test data'
    ],
    correctAnswer: 1,
    explanation: 'Test Data Management ensures test datasets are realistic, repeatable, isolated, and scrubbed of sensitive PII, enabling predictable and reproducible test executions.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Data Management',
    tags: ['test-data', 'fixtures', 'data-privacy']
  },
  {
    id: 'pcet-2-094',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Beginner',
    question: 'What is a "Test Charter" in exploratory testing?',
    codeSnippet: '# Document snippet:\n# "Charter: Explore the checkout flow with expired coupons and multiple browser tabs\n#  to discover potential race conditions and cart total inconsistencies.\n#  Time box: 60 minutes."',
    options: [
      'A document that outlines the scope, objective, and focus of an exploratory testing session without prescribing rigid step-by-step scripts',
      'A corporate constitution signed by shareholders',
      'A bus ticket to travel to testing conferences',
      'A software license agreement from Python Software Foundation'
    ],
    correctAnswer: 0,
    explanation: 'In Session-Based Exploratory Testing, a Test Charter sets the goals, target areas, tactics, and boundaries for a time-boxed exploratory testing session.',
    officialRef: 'PCET-30-01 Block 2.5 - Exploratory Testing and Charters',
    tags: ['test-charter', 'exploratory-testing', 'session-based']
  },
  {
    id: 'pcet-2-095',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Metrics',
    difficulty: 'Intermediate',
    question: 'What does "Test Execution Progress" track?',
    codeSnippet: '# Daily dashboard metric:\n# Total Test Cases Planned: 500\n# Executed: 350 (70%)\n# Passed: 330 | Failed: 20 | Blocked: 15 | Unexecuted: 150',
    options: [
      'The percentage of planned test cases executed, passed, failed, or blocked over the course of the test period',
      'The temperature of the server CPU during execution',
      'The number of characters typed by the tester',
      'The speed of the network router'
    ],
    correctAnswer: 0,
    explanation: 'Test Execution Progress tracks how many test cases have been executed against schedule, how many passed or failed, and how many are currently blocked by defects.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Progress Metrics',
    tags: ['metrics', 'test-progress', 'monitoring']
  },
  {
    id: 'pcet-2-096',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Metrics',
    difficulty: 'Intermediate',
    question: 'What is a "Blocked Test Case"?',
    codeSnippet: '# Test Case: "Verify invoice PDF download from Account page"\n# Blocker: User login API returns 500 Internal Server Error, so tester cannot reach the Account page.',
    options: [
      'A test case that the tester personally dislikes',
      'A test case that cannot be executed because a prerequisite step, dependency, or blocking defect prevents reaching the test conditions',
      'A test case encrypted with a blockchain',
      'A test case that has been permanently deleted'
    ],
    correctAnswer: 1,
    explanation: 'A test case is blocked when an upstream bug, unavailable environment, or broken dependency prevents the tester from executing the necessary steps.',
    officialRef: 'PCET-30-01 Block 2.5 - Blocked Tests',
    tags: ['blocked-tests', 'dependencies', 'execution']
  },
  {
    id: 'pcet-2-097',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Management',
    difficulty: 'Intermediate',
    question: 'What is the role of a "Test Lead" or "Test Manager"?',
    codeSnippet: '# Responsibilities:\n# - Authoring the Test Plan and coordinating test strategies\n# - Acquiring test environments and tools\n# - Tracking metrics, reporting status to stakeholders, and guiding release decisions',
    options: [
      'Writing every single line of Python backend code in the company',
      'Overseeing the overall testing process, planning, resource allocation, environment setup, and communicating test status to project management',
      'Fixing hardware soldering issues on motherboards',
      'Answering external customer sales support calls'
    ],
    correctAnswer: 1,
    explanation: 'The Test Manager / Test Lead is responsible for overall test governance, planning, resource and environment management, test monitoring and control, and stakeholder status reporting.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Roles and Responsibilities',
    tags: ['test-manager', 'roles', 'test-governance']
  },
  {
    id: 'pcet-2-098',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Management',
    difficulty: 'Beginner',
    question: 'What is the primary role of a "Test Analyst" / "Tester"?',
    codeSnippet: '# Responsibilities:\n# - Analyzing user stories and requirements\n# - Designing test cases and identifying test data\n# - Executing tests and reporting defect tickets with reproduction steps',
    options: [
      'Reviewing and analyzing the test basis, designing and executing test cases, evaluating results, and reporting defects',
      'Managing the corporate budget and payroll',
      'Designing database normalization schemas',
      'Installing operating system software updates'
    ],
    correctAnswer: 0,
    explanation: 'A Tester or Test Analyst focuses on reviewing specifications, identifying test conditions, authoring concrete test cases, executing tests, and logging detailed defect reports.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Roles and Responsibilities',
    tags: ['tester-role', 'test-analyst', 'responsibilities']
  },
  {
    id: 'pcet-2-099',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Intermediate',
    question: 'What is a "Defect Triage" meeting?',
    codeSnippet: '# Attendees: QA Lead, Tech Lead, Product Owner\n# Agenda: Review 12 newly discovered bugs, assess severity and business priority, and assign to developers or defer to a future sprint.',
    options: [
      'A meeting where the team analyzes, categorizes, prioritizes, and assigns newly logged defects to determine action plans',
      'A party held when zero defects are found',
      'A performance appraisal meeting for junior developers',
      'An interview for new QA candidates'
    ],
    correctAnswer: 0,
    explanation: 'Defect Triage brings together product, engineering, and QA leaders to review newly identified defects, assess their severity and business priority, and decide whether to fix, defer, or reject them.',
    officialRef: 'PCET-30-01 Block 2.5 - Defect Triage',
    tags: ['defect-triage', 'prioritization', 'team-collaboration']
  },
  {
    id: 'pcet-2-100',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.5',
    category: 'Test Documentation',
    difficulty: 'Intermediate',
    question: 'Why is archiving test artifacts during the Test Completion phase beneficial for future software releases?',
    codeSnippet: '# Post-release action:\n# Saving automated test suites, test environments configuration (Dockerfile), and test data templates into the repository archive.',
    options: [
      'It provides reusable assets, test fixtures, and lessons learned that accelerate testing and maintainability in subsequent releases and maintenance cycles',
      'It satisfies requirements to delete all files from git',
      'It prevents developers from modifying source code ever again',
      'It frees up memory on developer laptops'
    ],
    correctAnswer: 0,
    explanation: 'Archiving test deliverables (test cases, scripts, automated suites, fixtures, environments) ensures knowledge retention, reuse across future releases, and regulatory compliance evidence.',
    officialRef: 'PCET-30-01 Block 2.5 - Test Asset Archival',
    tags: ['test-completion', 'archival', 'knowledge-retention']
  }
];
