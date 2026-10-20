import { Flashcard } from '../types';

export const pcetSection1CardsPart2: Flashcard[] = [
  // Chapter 1.3: Seven Fundamental Principles of Testing (Cards 51-60)
  {
    id: 'pcet-1-051',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'Why does early testing (Principle 3) advocate reviewing requirement specifications before writing Python code?',
    codeSnippet: '# Requirement text: "User can enter any negative number of items to receive a credit."\n# If a tester reviews this before implementation:\n# They spot the loophole: Users could steal unlimited store credit!',
    options: [
      'Because developers should never be allowed to read requirements',
      'Because identifying requirement defects early prevents implementing flawed logic, drastically reducing redesign costs',
      'Because static requirements testing eliminates the need for unit testing',
      'Because Python syntax does not support requirement tracking'
    ],
    correctAnswer: 1,
    explanation: 'Static testing of requirements catches ambiguities, omissions, and contradictions before developers write flawed code, preventing defect multiplication throughout the SDLC.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'early-testing', 'requirements-review']
  },
  {
    id: 'pcet-1-052',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'Which of the following scenarios is a direct demonstration of the "Absence-of-Errors Fallacy"?',
    codeSnippet: '# A banking app has zero crash bugs and zero syntax defects.\n# However, to transfer money, the user must navigate through 35 confusing menu screens.\n# Customers leave for a competitor with a 1-click transfer feature.',
    options: [
      'The software is high quality because it never crashes',
      'The software is deemed a failure because satisfying specifications without satisfying user usability and business needs produces no value',
      'The team should have run more regression tests to find hidden memory leaks',
      'The testing team violated the Pesticide Paradox'
    ],
    correctAnswer: 1,
    explanation: 'Principle 7 explains that producing a defect-free system is pointless if the product fails to deliver user value, usability, or solve the customer\'s core problem.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'absence-of-errors', 'user-experience']
  },
  {
    id: 'pcet-1-053',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'What is the relationship between testing and debugging in software development?',
    codeSnippet: '# Phase 1: Running pytest test_math.py -> FAILS with AssertionError\n# Phase 2: Opening math_utils.py, placing breakpoint(), finding typo, fixing code\n# Phase 3: Re-running pytest -> PASSES',
    options: [
      'Testing and debugging are the exact same activity performed by the same role',
      'Testing identifies failures and shows defects; debugging locates the root cause in code and fixes it',
      'Debugging is performed by QA testers; testing is performed exclusively by end users',
      'Testing is dynamic; debugging is exclusively static'
    ],
    correctAnswer: 1,
    explanation: 'Testing is the process of executing or inspecting software to find defects. Debugging is the development activity of locating the root cause of a defect in source code and repairing it.',
    officialRef: 'PCET-30-01 Block 1.3 - Testing vs Debugging',
    tags: ['testing-vs-debugging', 'root-cause', 'fundamentals']
  },
  {
    id: 'pcet-1-054',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'How does the Pareto Principle (80/20 rule) relate to software testing?',
    codeSnippet: '# Empirical observation across software industry:\n# ~80% of all software defects are found in ~20% of the software modules.',
    options: [
      'Testers should only work 20% of their working hours',
      'It underpins the Defect Clustering principle, showing that defects are disproportionately concentrated in a few complex modules',
      'It requires that every test suite must contain exactly 80 assertions',
      'It states that 80% of test runs will always fail'
    ],
    correctAnswer: 1,
    explanation: 'The Pareto Principle describes defect clustering: approximately 80% of software defects are typically discovered in roughly 20% of the codebase (the most complex, tightly coupled, or frequently modified modules).',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['pareto-principle', 'defect-clustering', 'metrics']
  },
  {
    id: 'pcet-1-055',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'Which testing principle emphasizes that an avionics flight controller requires radically different testing from a mobile recipe app?',
    codeSnippet: '# Aviation firmware: DO-178C Level A certification, 100% MC/DC coverage, formal mathematical verification.\n# Recipe app: Rapid sprint exploratory testing, simple UI checks.',
    options: [
      'Principle 6: Testing is context dependent',
      'Principle 1: Testing shows presence of defects',
      'Principle 5: Pesticide paradox',
      'Principle 4: Defect clustering'
    ],
    correctAnswer: 0,
    explanation: 'Principle 6 states that testing is context dependent: there is no universal "one size fits all" testing process; risk, domain, safety, and business context dictate the strategy.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['principles', 'context-dependent', 'safety-critical']
  },
  {
    id: 'pcet-1-056',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'Why does finding many defects in a module during initial testing suggest that testers should test that module even more thoroughly?',
    codeSnippet: '# Initial unit testing of crypto_engine.py reveals 18 critical logic defects.\n# Meanwhile, user_profile.py reveals 0 defects.\n# Where are latent undiscovered defects most likely hiding?',
    options: [
      'In user_profile.py, because it must have hidden bugs',
      'In crypto_engine.py, because defect clustering indicates where some defects exist, many more latent defects likely remain',
      'Nowhere, because all defects have now been completely discovered',
      'The testing team should abandon crypto_engine.py'
    ],
    correctAnswer: 1,
    explanation: 'Defect clustering (Principle 4) shows that if a module is found to be defect-prone, the probability of finding additional unexposed defects in that same module remains very high.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['defect-clustering', 'risk', 'principles']
  },
  {
    id: 'pcet-1-057',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Beginner',
    question: 'Can automated testing completely eliminate the need for manual testing?',
    codeSnippet: '# Fully automated pytest and Selenium suite passes.\n# Should human exploratory and usability testing be eliminated?',
    options: [
      'Yes, computers are faster and never make human mistakes',
      'No, automated tests only check what they are scripted to check; exploratory and usability testing require human judgment, intuition, and adaptability',
      'Yes, the Python standard library forbids manual testing',
      'Yes, because manual testing violates Principle 1'
    ],
    correctAnswer: 1,
    explanation: 'Automation is ideal for repetitive regression checks, but cannot replace human evaluation of aesthetics, usability, intuitive user experience, and complex exploratory testing.',
    officialRef: 'PCET-30-01 Block 1.3 - Automation and Manual Testing',
    tags: ['automation', 'exploratory-testing', 'usability']
  },
  {
    id: 'pcet-1-058',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'What is the risk of assuming a software product is ready for release simply because all automated tests passed?',
    codeSnippet: '# CI Pipeline Status: [GREEN - 100% Pass Rate]\n# But: Test suite coverage is only 18% of the codebase, and no negative tests exist.',
    options: [
      'There is no risk; green CI always guarantees perfection',
      'The test suite may have poor coverage or shallow assertions, masking severe latent defects (Principle 1 & 7)',
      'Python bytecode will run 50% slower in production',
      'Green pipelines require immediate code rollback'
    ],
    correctAnswer: 1,
    explanation: 'Passing tests only verify that the specific conditions evaluated by those tests did not fail. If coverage is inadequate or test design is shallow, major defects remain undetected.',
    officialRef: 'PCET-30-01 Block 1.3 - 7 Principles of Testing',
    tags: ['test-coverage', 'risk', 'green-builds']
  },
  {
    id: 'pcet-1-059',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'In software testing, what is meant by "Confirmation Bias" and how does it affect testing?',
    codeSnippet: '# Developer writes code and then tests their own function:\n# They only input valid numbers they know will succeed (e.g., 2, 4, 10).\n# They neglect to test 0, negative numbers, or non-numeric types.',
    options: [
      'The tendency of people to seek evidence that confirms their existing hypotheses rather than attempting to falsify them',
      'A cryptographic hash check that verifies file integrity',
      'A confirmation modal dialog displayed in a graphical user interface',
      'A boolean flag in the Python unittest module'
    ],
    correctAnswer: 0,
    explanation: 'Confirmation bias is a cognitive bias where authors unintentionally test their code to prove it works (seeking confirmation) rather than actively attempting to find weaknesses or edge case failures (seeking falsification).',
    officialRef: 'PCET-30-01 Block 1.3 - Psychology of Testing',
    tags: ['psychology', 'confirmation-bias', 'cognitive-traps']
  },
  {
    id: 'pcet-1-060',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.3',
    category: 'Testing Principles',
    difficulty: 'Intermediate',
    question: 'How does independent testing help counteract developer confirmation bias?',
    codeSnippet: '# Levels of Independent Testing:\n# 1. Author of code\n# 2. Peer developer on same team\n# 3. Dedicated QA team within organization\n# 4. External independent testing organization / Security auditors',
    options: [
      'Independent testers do not have the assumption that the code works and bring fresh perspectives, diverse techniques, and a critical mindset',
      'Independent testers write faster Python bytecode than developers',
      'Independent testers have administrative access to production databases',
      'Independent testing is legally mandatory for all Python scripts'
    ],
    correctAnswer: 0,
    explanation: 'Independent testers (peers, dedicated QA, external auditors) approach the software without the author\'s preconceptions and are more effective at identifying unhandled edge cases and invalid assumptions.',
    officialRef: 'PCET-30-01 Block 1.3 - Independent Testing',
    tags: ['independent-testing', 'psychology', 'bias']
  },

  // Chapter 1.4: Software Development Lifecycle (SDLC) & Testing Methodologies (Cards 61-80)
  {
    id: 'pcet-1-061',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'SDLC & Models',
    difficulty: 'Beginner',
    question: 'In the classic V-Model of software development, what corresponds directly to the "Unit Testing" phase on the right side of the V?',
    codeSnippet: '# V-Model mapping:\n# Requirements Analysis  <--->  User Acceptance Testing (UAT)\n# System Design          <--->  System Testing\n# Architecture Design    <--->  Integration Testing\n# Detailed Component Design <--->  [ ? ]',
    options: [
      'Unit / Component Testing',
      'Penetration Testing',
      'Disaster Recovery Testing',
      'Beta Field Trials'
    ],
    correctAnswer: 0,
    explanation: 'In the V-Model, each development phase on the left has a corresponding testing level on the right. Detailed Component Design maps directly to Unit (or Component) Testing.',
    officialRef: 'PCET-30-01 Block 1.4 - SDLC Models and V-Model',
    tags: ['v-model', 'sdlc', 'unit-testing']
  },
  {
    id: 'pcet-1-062',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'SDLC & Models',
    difficulty: 'Intermediate',
    question: 'In the V-Model, which testing level validates the software against the high-level Business / User Requirements?',
    codeSnippet: '# V-Model pairing:\n# Business Requirements <==================> [ ? ]',
    options: [
      'Unit Testing',
      'Integration Testing',
      'Acceptance Testing (UAT)',
      'Static Linting with Flake8'
    ],
    correctAnswer: 2,
    explanation: 'Acceptance Testing (including User Acceptance Testing / UAT) validates that the delivered system fulfills the original business and user requirements defined at the start of the project.',
    officialRef: 'PCET-30-01 Block 1.4 - SDLC Models and V-Model',
    tags: ['v-model', 'acceptance-testing', 'uat']
  },
  {
    id: 'pcet-1-063',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'SDLC & Models',
    difficulty: 'Beginner',
    question: 'What is a major characteristic of sequential lifecycle models (such as Waterfall)?',
    codeSnippet: '# Waterfall phases:\n# Requirements -> Design -> Implementation -> Verification -> Maintenance\n# Testing begins only after...',
    options: [
      'Testing occurs continuously on day 1 before any design is approved',
      'Each phase must be completed before the next begins, meaning dynamic testing starts late in the lifecycle after full implementation',
      'All developers write unit tests using Test-Driven Development (TDD)',
      'New software releases occur every 2 hours via CI/CD'
    ],
    correctAnswer: 1,
    explanation: 'In sequential models like Waterfall, each stage flows strictly into the next. Formal dynamic testing begins late in the project after the implementation phase is complete, which can make defect discovery late and expensive.',
    officialRef: 'PCET-30-01 Block 1.4 - Sequential vs Iterative Models',
    tags: ['waterfall', 'sdlc', 'sequential-models']
  },
  {
    id: 'pcet-1-064',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Agile & DevOps',
    difficulty: 'Beginner',
    question: 'How does testing operate within iterative and incremental methodologies (such as Agile Scrum)?',
    codeSnippet: '# Sprint duration: 2 weeks\n# Within each sprint: User stories are analyzed, coded, tested, and demonstrated as working software increments.',
    options: [
      'Testing is postponed until 6 months of sprints are completed',
      'Testing is integrated into every sprint as a continuous, collaborative activity required to meet the "Definition of Done"',
      'Testing is forbidden in Agile because documentation is not valued',
      'Only manual exploratory testing is allowed in Scrum'
    ],
    correctAnswer: 1,
    explanation: 'In Agile (e.g., Scrum), testing is integrated continuously within every iteration (sprint) alongside development. A user story is not considered "Done" until it passes all acceptance and regression criteria.',
    officialRef: 'PCET-30-01 Block 1.4 - Agile Testing',
    tags: ['agile', 'scrum', 'definition-of-done']
  },
  {
    id: 'pcet-1-065',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Agile & DevOps',
    difficulty: 'Intermediate',
    question: 'What is the "Shift-Left" testing philosophy in modern software engineering?',
    codeSnippet: '# Shift-Left practices:\n# - Static analysis & linting in IDE\n# - Unit tests & pre-commit git hooks\n# - Automated CI builds on every pull request\n# Moving testing activities to the [ ? ] of the timeline.',
    options: [
      'Postponing all testing until the day before release',
      'Moving testing activities earlier in the development lifecycle (to the left on a project timeline)',
      'Assigning all testing tasks to left-handed engineers',
      'Shifting testing from Python 3 back to Python 2'
    ],
    correctAnswer: 1,
    explanation: 'Shift-Left refers to moving testing and quality activities earlier in the development lifecycle (to the left on a project timeline), preventing defects at the requirements and code-authoring stages.',
    officialRef: 'PCET-30-01 Block 1.4 - Shift-Left Testing',
    tags: ['shift-left', 'ci-cd', 'devops']
  },
  {
    id: 'pcet-1-066',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Development Methodologies',
    difficulty: 'Beginner',
    question: 'What is the standard cycle of Test-Driven Development (TDD)?',
    codeSnippet: '# Step 1: Write a test that fails\n# Step 2: Write minimum code to make it pass\n# Step 3: Clean up and optimize the code without breaking the test',
    options: [
      'Code - Test - Deploy',
      'Red - Green - Refactor',
      'Analyze - Document - Archive',
      'Compile - Crash - Restart'
    ],
    correctAnswer: 1,
    explanation: 'TDD follows the Red-Green-Refactor cycle: Red (write a failing unit test first), Green (write the simplest production code to make the test pass), Refactor (clean up code structure while keeping tests green).',
    officialRef: 'PCET-30-01 Block 1.4 - Test-Driven Development (TDD)',
    tags: ['tdd', 'red-green-refactor', 'methodologies']
  },
  {
    id: 'pcet-1-067',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Development Methodologies',
    difficulty: 'Intermediate',
    question: 'In Behavior-Driven Development (BDD), what structure is standard for expressing acceptance criteria?',
    codeSnippet: '"""\nFeature: User Login\n  Scenario: Valid password\n    Given a registered user "alice@example.com"\n    When alice submits the correct password\n    Then alice is redirected to her dashboard\n"""',
    options: [
      'Try - Except - Finally',
      'Given - When - Then (Gherkin syntax)',
      'Setup - Exercise - Teardown',
      'Import - Define - Call'
    ],
    correctAnswer: 1,
    explanation: 'BDD uses the Given-When-Then pattern (popularized by Gherkin / Behave / Cucumber) to describe expected software behavior in clear, human-readable language understandable by business stakeholders and testers.',
    officialRef: 'PCET-30-01 Block 1.4 - Behavior-Driven Development (BDD)',
    tags: ['bdd', 'gherkin', 'given-when-then']
  },
  {
    id: 'pcet-1-068',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Development Methodologies',
    difficulty: 'Intermediate',
    question: 'In Acceptance Test-Driven Development (ATDD), when are acceptance tests created?',
    codeSnippet: '# Collaboration between Product Owner, Developer, and Tester (The Three Amigos)\n# Acceptance criteria and tests are drafted before implementation begins.',
    options: [
      'After the software has been deployed to customer servers for 30 days',
      'Collaboratively before the developers begin writing the feature code',
      'Only when a critical regression defect occurs in production',
      'At the annual corporate shareholder meeting'
    ],
    correctAnswer: 1,
    explanation: 'In ATDD, the "Three Amigos" (product owner, developer, tester) collaborate before coding begins to define explicit acceptance tests that clarify requirements and guide development.',
    officialRef: 'PCET-30-01 Block 1.4 - ATDD and Collaboration',
    tags: ['atdd', 'three-amigos', 'requirements']
  },
  {
    id: 'pcet-1-069',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'CI/CD & DevOps',
    difficulty: 'Beginner',
    question: 'What is the role of automated testing within Continuous Integration (CI)?',
    codeSnippet: '# GitHub Actions / GitLab CI pipeline on pull request:\n# 1. git checkout\n# 2. pip install -r requirements.txt\n# 3. flake8 .\n# 4. pytest --maxfail=1',
    options: [
      'To provide immediate feedback on whether new code breaks existing functionality or violates quality standards before merging',
      'To replace the operating system kernel on developer laptops',
      'To automatically purchase new AWS servers whenever a commit occurs',
      'To convert Python scripts into C++ source files'
    ],
    correctAnswer: 0,
    explanation: 'Continuous Integration runs automated build and test pipelines on every commit or pull request, giving immediate feedback to ensure new code does not introduce regressions or violate code standards.',
    officialRef: 'PCET-30-01 Block 1.4 - Continuous Integration and Testing',
    tags: ['ci-cd', 'github-actions', 'automation']
  },
  {
    id: 'pcet-1-070',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'CI/CD & DevOps',
    difficulty: 'Intermediate',
    question: 'What is a "Definition of Done" (DoD) in agile testing?',
    codeSnippet: '# Definition of Done Checklist:\n# [x] Code written and peer-reviewed\n# [x] Unit tests pass with >= 85% branch coverage\n# [x] Linters (flake8, black) pass with 0 errors\n# [x] Acceptance tests verified on staging\n# [x] Release notes updated',
    options: [
      'The date when a developer retires from the company',
      'A formal, shared agreement of quality criteria that a user story must satisfy before being considered complete and releasable',
      'The termination of a Python while loop',
      'The final line of a Python script containing sys.exit(0)'
    ],
    correctAnswer: 1,
    explanation: 'The Definition of Done (DoD) is a formal checklist agreed upon by the agile team detailing all technical and quality standards (reviews, testing, coverage, documentation) required before an item is marked done.',
    officialRef: 'PCET-30-01 Block 1.4 - Agile Definition of Done',
    tags: ['definition-of-done', 'agile', 'quality-standards']
  },
  {
    id: 'pcet-1-071',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Agile & DevOps',
    difficulty: 'Intermediate',
    question: 'What is a "Definition of Ready" (DoR)?',
    codeSnippet: '# Backlog Refinement item:\n# Story #204 has clear acceptance criteria, dependencies resolved, mockups attached, and testable scope.',
    options: [
      'The criteria a user story must meet before the agile team accepts it into a sprint for implementation',
      'The condition where pytest is installed on the testing server',
      'The status of an empty git repository ready for its first commit',
      'The signal indicating that a hardware server has finished booting'
    ],
    correctAnswer: 0,
    explanation: 'The Definition of Ready (DoR) specifies that a user story has sufficient clarity, acceptance criteria, testability, and resolved dependencies to be taken into a sprint backlog.',
    officialRef: 'PCET-30-01 Block 1.4 - Definition of Ready',
    tags: ['definition-of-ready', 'agile', 'backlog']
  },
  {
    id: 'pcet-1-072',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Agile & DevOps',
    difficulty: 'Intermediate',
    question: 'In agile teams, who is primarily responsible for software quality?',
    codeSnippet: '# Agile philosophy:\n# "Quality is not something inspected into software at the end;\n# it is built into the product at every stage."',
    options: [
      'Only the junior QA tester',
      'The entire whole team (developers, testers, product owners, and architects collaboratively)',
      'The customer service help desk after release',
      'The external auditor who reviews the company annually'
    ],
    correctAnswer: 1,
    explanation: 'Agile espouses the "Whole Team Approach": quality is the collective responsibility of the entire cross-functional team, rather than a task delegated solely to testers at the end.',
    officialRef: 'PCET-30-01 Block 1.4 - Whole Team Approach',
    tags: ['whole-team', 'agile', 'collaboration']
  },
  {
    id: 'pcet-1-073',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'SDLC & Models',
    difficulty: 'Beginner',
    question: 'What is "Continuous Delivery" (CD) compared to "Continuous Deployment"?',
    codeSnippet: '# Pipeline A: Code builds, tests pass, artifact is deployed to staging, manual business approval triggers prod deploy.\n# Pipeline B: Code builds, tests pass, artifact is deployed automatically directly to production without human intervention.',
    options: [
      'Pipeline A is Continuous Deployment; Pipeline B is Continuous Delivery',
      'Pipeline A is Continuous Delivery; Pipeline B is Continuous Deployment',
      'Continuous Delivery and Continuous Deployment mean the same thing',
      'Continuous Deployment only applies to mobile iOS apps'
    ],
    correctAnswer: 1,
    explanation: 'Continuous Delivery ensures every build is deployable, but production release requires a human decision/trigger. Continuous Deployment deploys every green build automatically to production.',
    officialRef: 'PCET-30-01 Block 1.4 - Continuous Delivery vs Deployment',
    tags: ['continuous-delivery', 'continuous-deployment', 'ci-cd']
  },
  {
    id: 'pcet-1-074',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Testing Methodologies',
    difficulty: 'Intermediate',
    question: 'What is a "Smoke Test" in a CI/CD build verification pipeline?',
    codeSnippet: '# CI step right after deployment to staging:\n# Runs 10 basic tests:\n# - Can we hit GET /health?\n# - Can we authenticate with a test account?\n# - Can we read from the database?',
    options: [
      'A physical safety test checking for overheating hardware components',
      'A subset of vital, high-level test cases that verify whether the build is stable enough for deeper, comprehensive testing',
      'A stress test that maxes out server CPU to generate heat',
      'A test that generates random log data'
    ],
    correctAnswer: 1,
    explanation: 'A Smoke Test (or Build Verification Test) is a quick suite of core tests designed to verify that the most essential functions work before committing time to full regression or manual testing.',
    officialRef: 'PCET-30-01 Block 1.4 - Smoke Testing',
    tags: ['smoke-testing', 'build-verification', 'ci-cd']
  },
  {
    id: 'pcet-1-075',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Testing Methodologies',
    difficulty: 'Intermediate',
    question: 'What is "Sanity Testing"?',
    codeSnippet: '# Scenario: Developer fixes a specific bug in the discount calculator.\n# Tester runs 5 targeted tests specifically checking discount calculations to verify the fix works as expected.',
    options: [
      'A psychological assessment given to team members before a sprint',
      'A very quick, focused test executed after a minor bug fix to verify that the specific problem is resolved without comprehensive regression testing',
      'Testing performed with completely random, insane inputs (fuzzing)',
      'A test that verifies memory allocation using the tracemalloc module'
    ],
    correctAnswer: 1,
    explanation: 'Sanity Testing is a narrow, focused check performed on a new build after a specific bug fix or minor code change to quickly verify that the fix works before running broader test suites.',
    officialRef: 'PCET-30-01 Block 1.4 - Sanity Testing',
    tags: ['sanity-testing', 'bug-verification', 'methodologies']
  },
  {
    id: 'pcet-1-076',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'SDLC & Models',
    difficulty: 'Beginner',
    question: 'Why are automated unit tests essential to enable rapid refactoring?',
    codeSnippet: '# Refactoring auth_token.py:\n# Developer replaces 100 lines of messy nested loops with clean list comprehensions.\n# They run: pytest tests/test_auth.py -> All 50 tests pass in 0.2 seconds!',
    options: [
      'They prevent Python from compiling bytecode',
      'They act as a safety net, instantly alerting the developer if the refactoring altered external behavior or introduced defects',
      'They automatically write docstrings for new functions',
      'They increase the file size of the Python repository'
    ],
    correctAnswer: 1,
    explanation: 'Automated unit tests provide rapid feedback. Developers can fearlessly refactor and clean up code knowing the test suite will immediately flag any regression or broken behavior.',
    officialRef: 'PCET-30-01 Block 1.4 - Refactoring and Testing',
    tags: ['refactoring', 'safety-net', 'unit-testing']
  },
  {
    id: 'pcet-1-077',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Testing Methodologies',
    difficulty: 'Intermediate',
    question: 'What is "Continuous Testing" in a modern DevOps pipeline?',
    codeSnippet: '# DevOps loop:\n# Code -> Commit (Unit tests) -> Build (Static analysis) -> Test (Integration, API tests) -> Deploy -> Monitor (Synthetic tests)',
    options: [
      'Running tests in an infinite while True loop until the computer crashes',
      'Executing automated tests at every stage of the software delivery pipeline to provide continuous risk assessment',
      'Testing only during weekends when developers are not committing code',
      'Testing that requires continuous manual human intervention 24/7'
    ],
    correctAnswer: 1,
    explanation: 'Continuous Testing is the practice of executing automated tests as part of the software delivery pipeline to obtain immediate feedback on business risks at every stage.',
    officialRef: 'PCET-30-01 Block 1.4 - Continuous Testing in DevOps',
    tags: ['continuous-testing', 'devops', 'risk-feedback']
  },
  {
    id: 'pcet-1-078',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Development Methodologies',
    difficulty: 'Intermediate',
    question: 'In the TDD Red-Green-Refactor cycle, what does the "Green" phase mandate?',
    codeSnippet: '# Red phase: test_factorial_zero() failed.\n# Green phase:\ndef factorial(n):\n    return 1  # Minimum implementation to satisfy the test!\n# Does factorial work for 5? Not yet, but the current test is GREEN.',
    options: [
      'Writing the most elegant and optimal code possible before running tests',
      'Writing the minimum production code necessary to make the failing test pass',
      'Adding comments with green color tags',
      'Formatting code using black'
    ],
    correctAnswer: 1,
    explanation: 'In TDD\'s Green phase, the goal is to write just enough code to make the failing test pass as quickly as possible. Code optimization and elegance are handled in the subsequent Refactor phase.',
    officialRef: 'PCET-30-01 Block 1.4 - TDD Mechanics',
    tags: ['tdd', 'green-phase', 'red-green-refactor']
  },
  {
    id: 'pcet-1-079',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'Development Methodologies',
    difficulty: 'Intermediate',
    question: 'Why must the "Red" phase precede the "Green" phase in Test-Driven Development?',
    codeSnippet: '# Writing test_calculate_discount():\n# Developer runs pytest BEFORE writing calculate_discount()\n# Test fails with NameError: name \'calculate_discount\' is not defined.',
    options: [
      'To verify that the test is actually capable of failing and is not passing vacuously due to flawed assertions or tautologies',
      'Because Python requires functions to fail before they can be defined',
      'To test the color rendering capabilities of the terminal',
      'To ensure the hard drive write permissions are active'
    ],
    correctAnswer: 0,
    explanation: 'Watching the test fail first (Red) proves that the test is valid and that it will detect failure. If a test passes before writing code, the test is likely buggy (e.g., missing assertions or always evaluating to True).',
    officialRef: 'PCET-30-01 Block 1.4 - TDD Mechanics',
    tags: ['tdd', 'red-phase', 'test-validity']
  },
  {
    id: 'pcet-1-080',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.4',
    category: 'SDLC & Models',
    difficulty: 'Intermediate',
    question: 'What is a "Release Candidate" (RC) build in software release management?',
    codeSnippet: '# Build tag: v2.4.0-rc1\n# All planned features are complete, freeze is declared, and full regression testing begins.',
    options: [
      'A preliminary version that is feature-complete and deemed stable enough for final regression and user acceptance testing prior to public release',
      'The initial alpha sketch of an idea written on a whiteboard',
      'A software build that failed all automated tests and must be deleted',
      'A candidate interviewing for a software release engineer position'
    ],
    correctAnswer: 0,
    explanation: 'A Release Candidate (RC) is a build with all features implemented and no known critical bugs, released to testing environments for final qualification before general availability (GA).',
    officialRef: 'PCET-30-01 Block 1.4 - Release Management',
    tags: ['release-candidate', 'build-management', 'sdlc']
  },

  // Chapter 1.5: Psychology of Testing, Code of Ethics & Economics of Quality (Cards 81-100)
  {
    id: 'pcet-1-081',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Psychology of Testing',
    difficulty: 'Beginner',
    question: 'How does the primary mindset of an effective software tester differ from the primary mindset of a software developer?',
    codeSnippet: '# Developer mindset: "How can I construct this feature to meet the requirements and build value?"\n# Tester mindset: [ ? ]',
    options: [
      '"How can I quickly approve this pull request so we finish early?"',
      '"How might this feature fail, what edge cases were missed, and how can we verify its behavior under unexpected inputs?"',
      '"How can I rewrite this feature in a different programming language?"',
      '"How can I avoid reporting defects so developers like me?"'
    ],
    correctAnswer: 1,
    explanation: 'While developers primarily adopt a constructive, building mindset to implement functionality, testers adopt a critical, analytical, and questioning mindset aimed at finding flaws, boundaries, and edge cases.',
    officialRef: 'PCET-30-01 Block 1.5 - Psychology of Testing',
    tags: ['psychology', 'tester-mindset', 'developer-mindset']
  },
  {
    id: 'pcet-1-082',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Psychology of Testing',
    difficulty: 'Intermediate',
    question: 'When reporting a defect, which communication approach is considered professional and constructive?',
    codeSnippet: '# Report A: "Bob wrote terrible code again, authentication is completely broken due to his incompetence."\n# Report B: "When submitting a password containing quotes (\'), the auth endpoint responds with HTTP 500. Expected HTTP 400. Stack trace attached."',
    options: [
      'Report A, because naming the author encourages accountability',
      'Report B, because it focuses objectively on the factual defect, steps to reproduce, and observed results without personal criticism',
      'Both reports are equally acceptable in modern agile retrospectives',
      'Neither; defects should only be reported verbally in private'
    ],
    correctAnswer: 1,
    explanation: 'Professional testing communication must be objective, factual, neutral, and courteous. It focuses on the product behavior and evidence rather than blaming individuals.',
    officialRef: 'PCET-30-01 Block 1.5 - Constructive Communication',
    tags: ['psychology', 'defect-reporting', 'professionalism']
  },
  {
    id: 'pcet-1-083',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Ethics of Testing',
    difficulty: 'Intermediate',
    question: 'A tester discovers a critical vulnerability in a healthcare application that could expose patient records. The project manager asks the tester to delete the bug report to meet a contract deadline. What is the ethical responsibility of the tester?',
    codeSnippet: '# Ethical dilemma:\n# Finding: PII/HIPAA data leak via unauthenticated GET /api/patients/export\n# Manager request: "Delete the ticket or we miss our quarterly bonus."',
    options: [
      'Delete the ticket immediately to obey managerial authority',
      'Stand firm, document the defect objectively, and escalate through appropriate organizational channels or safety compliance officers',
      'Post the vulnerability publicly on social media immediately',
      'Alter the defect report to mark it as "Low Severity"'
    ],
    correctAnswer: 1,
    explanation: 'Testers must uphold professional codes of ethics (e.g., IEEE/ACM/ISTQB): never falsify data, never suppress critical defects affecting public safety or privacy, and escalate serious risks through proper ethical channels.',
    officialRef: 'PCET-30-01 Block 1.5 - Code of Ethics for Testers',
    tags: ['ethics', 'integrity', 'security-compliance']
  },
  {
    id: 'pcet-1-084',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Beginner',
    question: 'In software economics, how does the cost of fixing a defect change as it progresses from Requirements to Production?',
    codeSnippet: '# Escalation curve:\n# Requirements -> Architecture -> Coding -> Integration -> System Test -> Production\n# What is the trend of the cost-to-fix curve?',
    options: [
      'The cost stays exactly flat throughout all phases',
      'The cost increases exponentially (orders of magnitude) the later the defect is discovered and fixed',
      'The cost is highest during requirements and lowest in production',
      'Fixing defects in production is completely free due to cloud hosting'
    ],
    correctAnswer: 1,
    explanation: 'The Boehm defect cost escalation curve demonstrates that fixing a defect in production costs significantly more (often 10x to 100x+) than fixing it during early requirements or unit testing phases.',
    officialRef: 'PCET-30-01 Block 1.5 - Economics of Testing',
    tags: ['economics', 'cost-to-fix', 'escalation-curve']
  },
  {
    id: 'pcet-1-085',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Intermediate',
    question: 'Which of the following is categorized as a "Cost of Non-Conformance" in the Cost of Quality (CoQ) framework?',
    codeSnippet: '# Company financial entries:\n# Item 1: Developer unit test training\n# Item 2: Running static security linters in CI\n# Item 3: Paying $500,000 in GDPR regulatory fines and customer refunds following a data leak in production',
    options: [
      'Item 1 only',
      'Item 3 only',
      'Item 1 and Item 2',
      'All three items are costs of non-conformance'
    ],
    correctAnswer: 1,
    explanation: 'Cost of Conformance includes prevention (Item 1: training) and appraisal (Item 2: testing/linters). Cost of Non-Conformance represents the damages and costs of failure (Item 3: fines, refunds, brand damage, incident response).',
    officialRef: 'PCET-30-01 Block 1.5 - Cost of Quality (CoQ)',
    tags: ['cost-of-quality', 'non-conformance', 'economics']
  },
  {
    id: 'pcet-1-086',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Risk-Based Testing',
    difficulty: 'Intermediate',
    question: 'In Risk-Based Testing, how is the "Level of Risk" quantified?',
    codeSnippet: '# Risk matrix formula:\n# Risk = Likelihood (Probability) * Impact (Consequence)',
    options: [
      'Risk is calculated solely by the number of lines of Python code in the file',
      'Risk is the product of the likelihood of a failure occurring and the severity of impact if that failure occurs',
      'Risk is the duration of time pytest takes to execute',
      'Risk is the number of developers assigned to the project'
    ],
    correctAnswer: 1,
    explanation: 'Risk level is evaluated by multiplying the likelihood (probability that a defect exists and will be triggered) by the impact (business, financial, or safety consequences if it fails).',
    officialRef: 'PCET-30-01 Block 1.5 - Risk Analysis and Prioritization',
    tags: ['risk-based-testing', 'likelihood', 'impact']
  },
  {
    id: 'pcet-1-087',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Risk-Based Testing',
    difficulty: 'Intermediate',
    question: 'Under limited time constraints before release, which feature should be tested first according to Risk-Based Testing?',
    codeSnippet: '# Feature A: "About Us" team photo footer (Likelihood: Low, Impact: Low)\n# Feature B: Credit card payment charge processing (Likelihood: Medium, Impact: Critical/Catastrophic)\n# Feature C: Blog article date filter (Likelihood: High, Impact: Low)',
    options: [
      'Feature A',
      'Feature B',
      'Feature C',
      'Features should be tested in alphabetical order'
    ],
    correctAnswer: 1,
    explanation: 'Feature B has the highest overall risk score because its failure would directly result in catastrophic financial and business impact. High-risk areas are prioritized first.',
    officialRef: 'PCET-30-01 Block 1.5 - Risk-Based Testing',
    tags: ['risk-prioritization', 'critical-systems', 'test-planning']
  },
  {
    id: 'pcet-1-088',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Psychology of Testing',
    difficulty: 'Beginner',
    question: 'Why can developers sometimes perceive defect reports as personal criticism, and how can this friction be minimized?',
    codeSnippet: '# Conflict scenario:\n# "Your code is broken!" vs. "Test case #12 failed with an unhandled TypeError when passed None."',
    options: [
      'Developers hate software testers by nature and cannot work together',
      'Developers identify closely with their creations; presenting clear, factual, non-judgmental technical observations minimizes defensive reactions',
      'Testers should never report defects to avoid hurting feelings',
      'Software defects should be resolved without telling the developer who wrote the code'
    ],
    correctAnswer: 1,
    explanation: 'Writing software is a creative intellectual effort. Constructive testers report objective facts, reproduceable evidence, and mutual shared goals of product excellence to maintain collaborative team harmony.',
    officialRef: 'PCET-30-01 Block 1.5 - Psychology of Testing',
    tags: ['psychology', 'collaboration', 'communication']
  },
  {
    id: 'pcet-1-089',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Ethics of Testing',
    difficulty: 'Intermediate',
    question: 'Which of the following violates the professional Code of Ethics for software testing professionals?',
    codeSnippet: '# Actions:\n# Action A: Writing negative tests that intentionally pass corrupted strings to an API\n# Action B: Signing off on a safety-critical medical test suite without executing the tests\n# Action C: Automating regression tests using pytest\n# Action D: Reviewing requirement specifications for ambiguities',
    options: [
      'Action A',
      'Action B',
      'Action C',
      'Action D'
    ],
    correctAnswer: 1,
    explanation: 'Falsifying test results, signing off without verification, or misleading stakeholders on software readiness is a direct breach of professional integrity and ethics.',
    officialRef: 'PCET-30-01 Block 1.5 - Code of Ethics',
    tags: ['ethics', 'integrity', 'professional-standards']
  },
  {
    id: 'pcet-1-090',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Beginner',
    question: 'What is "Technical Debt"?',
    codeSnippet: '# Developer comment:\n# "We skipped writing unit tests and hardcoded the API keys to hit the deadline;\n# we will need to refactor and test this properly next month."',
    options: [
      'The monetary loan a startup takes from a bank to purchase computers',
      'The implied future cost of rework caused by choosing an easy, fast, or incomplete solution now instead of a better, well-tested approach',
      'The cost of buying commercial pytest plugins',
      'The physical depreciation of testing hardware servers'
    ],
    correctAnswer: 1,
    explanation: 'Technical Debt (Ward Cunningham) reflects the future rework and maintenance overhead accumulated when teams cut corners, skip testing, or implement hacky workarounds for short-term speed.',
    officialRef: 'PCET-30-01 Block 1.5 - Technical Debt',
    tags: ['technical-debt', 'economics', 'maintainability']
  },
  {
    id: 'pcet-1-091',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Risk-Based Testing',
    difficulty: 'Intermediate',
    question: 'What is "Product Risk" vs. "Project Risk"?',
    codeSnippet: '# Risk 1: The encryption algorithm contains a cryptographic flaw that allows data extraction.\n# Risk 2: The lead Python developer resigns, and no one understands the codebase.',
    options: [
      'Risk 1 is Project Risk; Risk 2 is Product Risk',
      'Risk 1 is Product Risk (affects the software quality/function); Risk 2 is Project Risk (affects project management/timeline)',
      'Both risks are purely financial stock market risks',
      'Neither is considered a software risk'
    ],
    correctAnswer: 1,
    explanation: 'Product Risk relates to software characteristics, quality, reliability, and functionality. Project Risk relates to organizational, resource, schedule, budget, and personnel factors.',
    officialRef: 'PCET-30-01 Block 1.5 - Product vs Project Risk',
    tags: ['product-risk', 'project-risk', 'risk-management']
  },
  {
    id: 'pcet-1-092',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Intermediate',
    question: 'What does "Exit Criteria" (or Completion Criteria) define in a Test Plan?',
    codeSnippet: '# Test Plan excerpt:\n# "Testing may conclude when:\n#  1. 100% of planned test cases executed.\n#  2. >= 95% pass rate.\n#  3. Zero open Severity 1 (Critical) or Severity 2 (Major) defects.\n#  4. 80% branch coverage achieved."',
    options: [
      'The fire safety evacuation instructions for the QA building',
      'The predefined set of conditions that must be achieved to formally terminate a test phase or declare software ready for release',
      'The command to close the Python IDE terminal window',
      'The salary package given to an employee exiting the company'
    ],
    correctAnswer: 1,
    explanation: 'Exit Criteria (completion criteria) are the agreed-upon metrics and conditions that dictate when testing can stop, ensuring objective criteria rather than arbitrary deadlines govern release decisions.',
    officialRef: 'PCET-30-01 Block 1.5 - Test Planning and Exit Criteria',
    tags: ['exit-criteria', 'test-planning', 'completion-criteria']
  },
  {
    id: 'pcet-1-093',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Intermediate',
    question: 'What does "Entry Criteria" define in test management?',
    codeSnippet: '# Staging Test Environment Criteria:\n# - Code deployed and tagged v1.2.0-rc\n# - Automated smoke test suite passes 100%\n# - Test database seeded with sanitized production-like data',
    options: [
      'The prerequisites that must be satisfied before testing activities or a testing phase can officially begin',
      'The keycard access permissions to enter the developer office',
      'The first line of code inside a Python __init__.py file',
      'The username entered into a login dialog'
    ],
    correctAnswer: 0,
    explanation: 'Entry Criteria define the conditions, environment readiness, and prerequisite deliverables that must be satisfied before a specific test level or activity can officially start.',
    officialRef: 'PCET-30-01 Block 1.5 - Entry Criteria',
    tags: ['entry-criteria', 'test-planning', 'prerequisites']
  },
  {
    id: 'pcet-1-094',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Psychology of Testing',
    difficulty: 'Beginner',
    question: 'What is a "Blameless Post-Mortem" (or Retrospective)?',
    codeSnippet: '# Production outage review meeting:\n# Focus: "How did our CI pipeline fail to catch this defect? How can we improve our linters and tests?"\n# NOT: "Who wrote that bad commit and why should they be fired?"',
    options: [
      'A meeting where all documentation is deleted to avoid culpability',
      'A culture and practice of analyzing failures and defects to improve processes, tools, and safeguards without assigning individual blame',
      'A medical autopsy performed on hardware server units',
      'An automated Python script that silences all error logs'
    ],
    correctAnswer: 1,
    explanation: 'Blameless post-mortems assume that engineers are skilled and act in good faith. When failures occur, the focus is on fixing systemic process, testing, and architecture gaps to prevent recurrence.',
    officialRef: 'PCET-30-01 Block 1.5 - Blameless Culture',
    tags: ['blameless-postmortem', 'culture', 'continuous-improvement']
  },
  {
    id: 'pcet-1-095',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Ethics of Testing',
    difficulty: 'Intermediate',
    question: 'What is a tester\'s ethical responsibility regarding confidential test data and personally identifiable information (PII)?',
    codeSnippet: '# Copying real user credit card numbers and passwords from production DB\n# into a local developer laptop SQLite database for testing convenience.',
    options: [
      'It is perfectly acceptable if the laptop has a strong password',
      'Testers must protect confidentiality, anonymize, mask, or synthesize test data, and never expose real PII in non-production test environments',
      'Testers should share real customer records with external contractors to speed up testing',
      'PII regulations only apply to banks, not software applications'
    ],
    correctAnswer: 1,
    explanation: 'Testers must adhere to privacy regulations (GDPR, CCPA, HIPAA) and professional ethics by using sanitized, masked, or synthetic test data rather than raw production PII.',
    officialRef: 'PCET-30-01 Block 1.5 - Ethics and Data Privacy',
    tags: ['ethics', 'data-privacy', 'pii', 'anonymization']
  },
  {
    id: 'pcet-1-096',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Intermediate',
    question: 'What is the "Defect Removal Efficiency" (DRE) metric?',
    codeSnippet: '# Project data:\n# Defects found during pre-release testing (D_pre): 90\n# Defects found by customers in production (D_prod): 10\n# DRE = D_pre / (D_pre + D_prod) = 90 / 100 = 90%',
    options: [
      'The speed at which a developer clicks "Delete" on bug tickets',
      'The percentage of total defects resolved by testing prior to software release relative to all defects discovered before and after release',
      'The electric power consumed by automated test servers',
      'The ratio of passed tests to failed tests in pytest'
    ],
    correctAnswer: 1,
    explanation: 'DRE measures the quality of testing processes: it calculates what fraction of all defects were caught internally before release, where a higher percentage reflects more effective testing.',
    officialRef: 'PCET-30-01 Block 1.5 - Quality Metrics and DRE',
    tags: ['dre', 'metrics', 'efficiency']
  },
  {
    id: 'pcet-1-097',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Psychology of Testing',
    difficulty: 'Intermediate',
    question: 'What cognitive trap occurs when a tester stops testing after verifying only the happy path described in the user story ticket?',
    codeSnippet: '# Story: "Users can enter a discount code to save 10%."\n# Tester tests code "DISC10" -> Saves 10% -> Marks ticket PASS.\n# Tester did not test: expired code, empty code, SQL injection, multiple codes, lowercase.',
    options: [
      'Exhaustive testing violation',
      'Tunnel vision / Shallow happy-path verification bias',
      'Pesticide paradox',
      'Absence-of-errors theorem'
    ],
    correctAnswer: 1,
    explanation: 'Tunnel vision or happy-path bias occurs when a tester only verifies that the explicit positive requirement works, failing to explore negative conditions, boundary limits, and unexpected user behaviors.',
    officialRef: 'PCET-30-01 Block 1.5 - Psychology of Testing',
    tags: ['happy-path', 'bias', 'exploratory-testing']
  },
  {
    id: 'pcet-1-098',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Intermediate',
    question: 'What is "Appraisal Cost" in the Cost of Quality (CoQ) model?',
    codeSnippet: '# Budget items:\n# - Salaries of QA test engineers\n# - Server costs for CI test runners\n# - Licenses for automated testing tools and test reporting dashboards',
    options: [
      'The cost of fixing defects after a customer files a complaint',
      'The costs associated with measuring, evaluating, or auditing products to assure conformance with quality requirements',
      'The cost of marketing the software product in app stores',
      'The cost of purchasing new furniture for the office'
    ],
    correctAnswer: 1,
    explanation: 'Appraisal costs are expenses incurred to inspect, test, and evaluate the software to determine whether it conforms to specified requirements (e.g., test execution, audits, code reviews).',
    officialRef: 'PCET-30-01 Block 1.5 - Cost of Quality',
    tags: ['appraisal-cost', 'cost-of-quality', 'economics']
  },
  {
    id: 'pcet-1-099',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Economics of Testing',
    difficulty: 'Intermediate',
    question: 'What is "Prevention Cost" in the Cost of Quality framework?',
    codeSnippet: '# Quality investments:\n# - Training Python developers in secure coding practices\n# - Setting up pre-commit flake8 and black formatting rules\n# - Designing modular, decoupled architecture',
    options: [
      'The cost of paying insurance premiums for server fires',
      'The cost of activities specifically designed to prevent defects from being introduced into software components in the first place',
      'The expense of refunding disgruntled customers',
      'The cost of legal defense during software litigation'
    ],
    correctAnswer: 1,
    explanation: 'Prevention costs are proactive investments aimed at preventing defects before they occur (developer training, coding standards, architecture design, static analysis tools).',
    officialRef: 'PCET-30-01 Block 1.5 - Cost of Quality',
    tags: ['prevention-cost', 'cost-of-quality', 'proactive-quality']
  },
  {
    id: 'pcet-1-100',
    track: 'pcet',
    section: 'Section 1',
    chapter: '1.5',
    category: 'Psychology of Testing',
    difficulty: 'Beginner',
    question: 'Why is constructive feedback from testers valuable to the entire software engineering team?',
    codeSnippet: '# Retrospective note:\n# "By finding these race conditions in staging, the QA team saved our company from\n# a multi-million-dollar billing outage during Black Friday."',
    options: [
      'It creates an environment of fear that makes developers work longer hours',
      'It provides transparent, objective insight into quality, builds customer trust, and protects the organization from catastrophic production failures',
      'It allows management to fire the least productive developers',
      'It replaces the need for any customer support documentation'
    ],
    correctAnswer: 1,
    explanation: 'Constructive testing provides essential quality feedback that empowers teams to deliver robust, secure, and valuable software, protecting the company\'s reputation and financial stability.',
    officialRef: 'PCET-30-01 Block 1.5 - Value of Testing',
    tags: ['testing-value', 'quality-culture', 'teamwork']
  }
];
