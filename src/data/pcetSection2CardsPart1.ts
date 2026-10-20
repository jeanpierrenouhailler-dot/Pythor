import { Flashcard } from '../types';

export const pcetSection2CardsPart1: Flashcard[] = [
  // Chapter 2.1: Software Testing Levels (Cards 1-20)
  {
    id: 'pcet-2-001',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'What is the primary objective of Unit (or Component) Testing?',
    codeSnippet: '# testing a single Python function in isolation:\ndef test_strip_punctuation():\n    from text_utils import clean_text\n    assert clean_text("Hello, World!") == "Hello World"',
    options: [
      'To test how multiple microservices communicate across a Docker network',
      'To verify individual units, functions, methods, or classes in isolation from the rest of the application',
      'To validate that the end-user accepts the graphical user interface design',
      'To check whether cloud servers can handle 10,000 concurrent web requests'
    ],
    correctAnswer: 1,
    explanation: 'Unit (or Component) testing focuses on the smallest testable units of software (individual functions, classes, or modules) isolated from external dependencies like databases or networks.',
    officialRef: 'PCET-30-01 Block 2.1 - Software Testing Levels',
    tags: ['unit-testing', 'component-testing', 'levels']
  },
  {
    id: 'pcet-2-002',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'In Unit Testing, what is the role of a "Test Stub"?',
    codeSnippet: '# Function under test requires weather data:\ndef calculate_delivery_eta(weather_api):\n    temp = weather_api.get_current_temp()  # Stub returns fixed 20.0 without network call\n    ...\n\nclass WeatherApiStub:\n    def get_current_temp(self):\n        return 20.0',
    options: [
      'A temporary dummy replacement for an uncalled component that provides predefined answers to calls made during the test',
      'A software driver that boots the entire operating system',
      'A piece of malware intentionally injected to test security firewalls',
      'A compiled Python extension written in C'
    ],
    correctAnswer: 0,
    explanation: 'A Stub is a controllable test double that replaces a dependent component or service, returning canned, predefined responses so the unit under test can be verified in isolation without live external dependencies.',
    officialRef: 'PCET-30-01 Block 2.1 - Test Doubles and Stubs',
    tags: ['stubs', 'test-doubles', 'unit-testing']
  },
  {
    id: 'pcet-2-003',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is a "Test Driver"?',
    codeSnippet: '# Module under test has no main() entrypoint:\n# A test harness script invokes its public methods and checks outputs:\nif __name__ == "__main__":\n    run_component_checks()',
    options: [
      'A hardware device driver supplied by an operating system vendor',
      'A software module, script, or framework component used to invoke, execute, and pass test data to the component under test',
      'The human engineer who drives to the client site for manual testing',
      'A USB flash drive containing backup test cases'
    ],
    correctAnswer: 1,
    explanation: 'A Test Driver is a software component or script that calls the unit under test, passes test data, and captures its return values or exceptions when the unit lacks an execution harness.',
    officialRef: 'PCET-30-01 Block 2.1 - Test Drivers and Harnesses',
    tags: ['test-driver', 'harness', 'unit-testing']
  },
  {
    id: 'pcet-2-004',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'What is the focus of "Integration Testing"?',
    codeSnippet: '# Integration test:\n# Verifying that OrderService correctly saves records to the PostgreSQL database\n# and sends message events to the RabbitMQ message broker.',
    options: [
      'Testing isolated arithmetic calculations inside a single loop',
      'Testing interfaces, data flows, and interactions between integrated units, modules, or subsystems',
      'Asking real customers if the font color matches company branding',
      'Reviewing source code for PEP 8 indentation errors'
    ],
    correctAnswer: 1,
    explanation: 'Integration testing focuses on the interactions and interfaces between components or systems (e.g., verifying that data passed from module A is correctly interpreted and stored by module B).',
    officialRef: 'PCET-30-01 Block 2.1 - Integration Testing',
    tags: ['integration-testing', 'interfaces', 'levels']
  },
  {
    id: 'pcet-2-005',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is the "Big Bang" integration testing approach, and why is it considered risky?',
    codeSnippet: '# Big Bang approach:\n# Developers build 15 modules independently for 4 months.\n# On the day before release, all 15 modules are combined at once and tests are executed.\n# Result: 50 obscure crashes occur simultaneously.',
    options: [
      'It tests astronomy calculation algorithms in physics laboratories',
      'All components are combined simultaneously and tested in one step, making root-cause diagnosis extremely difficult when failures occur',
      'It requires running tests on a supercomputer',
      'It only allows one test case per day'
    ],
    correctAnswer: 1,
    explanation: 'The Big Bang approach integrates all modules at once. When failures occur, isolating which module or interface caused the fault is exceedingly difficult. Incremental integration is preferred.',
    officialRef: 'PCET-30-01 Block 2.1 - Integration Strategies',
    tags: ['big-bang', 'integration-strategies', 'risk']
  },
  {
    id: 'pcet-2-006',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'In "Top-Down" integration testing, what test doubles are extensively used to simulate yet-unwritten lower-level modules?',
    codeSnippet: '# Architecture:\n# Controller (Tested first) ---> Service layer [Not written yet!]\n# To test the Controller now, we replace the Service layer with [ ? ].',
    options: [
      'Stubs',
      'Drivers',
      'Compilers',
      'Linters'
    ],
    correctAnswer: 0,
    explanation: 'In Top-Down integration, high-level control modules are integrated and tested first. Lower-level subordinate components that have not yet been written or integrated are replaced by Stubs.',
    officialRef: 'PCET-30-01 Block 2.1 - Top-Down Integration',
    tags: ['top-down', 'stubs', 'integration']
  },
  {
    id: 'pcet-2-007',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'In "Bottom-Up" integration testing, what mechanism is required to execute lower-level components before high-level callers exist?',
    codeSnippet: '# Architecture:\n# Low-level DatabaseConnector (Tested first)\n# High-level Application Manager [Not written yet!]\n# What is needed to invoke and test the DatabaseConnector?',
    options: [
      'Test Drivers',
      'Test Stubs',
      'Disassemblers',
      'Virtual reality headsets'
    ],
    correctAnswer: 0,
    explanation: 'In Bottom-Up integration, lowest-level modules are tested first. Because the higher-level calling modules do not yet exist, Test Drivers are written to simulate the callers.',
    officialRef: 'PCET-30-01 Block 2.1 - Bottom-Up Integration',
    tags: ['bottom-up', 'test-drivers', 'integration']
  },
  {
    id: 'pcet-2-008',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'What defines "System Testing"?',
    codeSnippet: '# Running full end-to-end user workflows against a complete staging environment\n# including backend APIs, PostgreSQL, Redis, external sandbox gateways, and web frontend.',
    options: [
      'Testing only the hardware CPU architecture in a cleanroom',
      'Testing the complete, integrated system as a whole to evaluate compliance with specified functional and non-functional requirements',
      'Testing a single Python mathematical helper function',
      'Checking code formatting with black'
    ],
    correctAnswer: 1,
    explanation: 'System Testing tests the entire integrated software application against specified business, functional, and non-functional requirements, typically in a staging environment mirroring production.',
    officialRef: 'PCET-30-01 Block 2.1 - System Testing',
    tags: ['system-testing', 'end-to-end', 'levels']
  },
  {
    id: 'pcet-2-009',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'What is the primary purpose of User Acceptance Testing (UAT)?',
    codeSnippet: '# Business analysts and client stakeholders execute real-world business scenarios\n# to decide whether to formally sign off and accept the software for production deployment.',
    options: [
      'To find obscure memory leaks in CPython\'s garbage collection',
      'To build confidence and verify that the system satisfies business needs, user requirements, and contract criteria to authorize deployment',
      'To calculate the cyclomatic complexity of Python classes',
      'To force developers to write unit tests'
    ],
    correctAnswer: 1,
    explanation: 'User Acceptance Testing (UAT) is performed by business users, customers, or clients to establish confidence and confirm that the system meets their operational needs before accepting release.',
    officialRef: 'PCET-30-01 Block 2.1 - Acceptance Testing (UAT)',
    tags: ['uat', 'acceptance-testing', 'business-value']
  },
  {
    id: 'pcet-2-010',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is the difference between "Alpha Testing" and "Beta Testing"?',
    codeSnippet: '# Stage 1: Conducted by internal employees at the developer\'s site before external release.\n# Stage 2: Conducted by external prospective customers in their own real operating environments.',
    options: [
      'Stage 1 is Beta Testing; Stage 2 is Alpha Testing',
      'Stage 1 is Alpha Testing; Stage 2 is Beta Testing',
      'Both stages represent identical testing performed exclusively by developers',
      'Alpha testing only tests fonts; Beta testing only tests sounds'
    ],
    correctAnswer: 1,
    explanation: 'Alpha testing is performed at the developing organization\'s site by internal users or prospective customers. Beta testing (field testing) is performed externally by real users in their own environments.',
    officialRef: 'PCET-30-01 Block 2.1 - Alpha and Beta Testing',
    tags: ['alpha-testing', 'beta-testing', 'field-testing']
  },
  {
    id: 'pcet-2-011',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is "Operational Acceptance Testing" (OAT)?',
    codeSnippet: '# System Admin tests:\n# - Testing database backup and disaster recovery restore procedures\n# - Testing system failover to secondary cloud availability zones\n# - Verifying log rotation and security auditing scripts',
    options: [
      'Testing conducted by system administrators and IT operations to ensure the system can be maintained, monitored, backed up, and recovered in production',
      'Testing the graphical color scheme of a mobile application',
      'Reviewing Python docstrings for grammatical mistakes',
      'Running flake8 on third-party libraries'
    ],
    correctAnswer: 0,
    explanation: 'Operational Acceptance Testing (OAT) validates operational readiness, including backup/restore, disaster recovery, failover, system monitoring, performance under operational conditions, and patch management.',
    officialRef: 'PCET-30-01 Block 2.1 - Operational Acceptance Testing',
    tags: ['oat', 'operations', 'disaster-recovery']
  },
  {
    id: 'pcet-2-012',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is "Contractual and Regulatory Acceptance Testing"?',
    codeSnippet: '# Verification against:\n# - ISO 27001 security standards\n# - EU GDPR privacy regulations\n# - Service Level Agreements (SLAs) specifying 99.99% uptime in client contract',
    options: [
      'Testing performed solely to satisfy legal, contractual, and regulatory compliance standards mandated by law or business agreements',
      'Testing where lawyers write Python unit tests in court',
      'An informal chat over coffee between developers and testers',
      'Running automated tests with a timer'
    ],
    correctAnswer: 0,
    explanation: 'Contractual acceptance testing evaluates software against contractual criteria (SLAs, deliverables). Regulatory acceptance testing verifies compliance with applicable government laws, standards, and industry regulations.',
    officialRef: 'PCET-30-01 Block 2.1 - Contractual and Regulatory Testing',
    tags: ['compliance', 'regulatory-testing', 'contracts']
  },
  {
    id: 'pcet-2-013',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'Which testing level is traditionally written and executed FIRST by developers during coding?',
    codeSnippet: '# Developer workflow:\n# 1. Write function calculate_tax()\n# 2. Write test_calculate_tax() in test_tax.py\n# 3. Execute pytest',
    options: [
      'Unit (Component) Testing',
      'System Testing',
      'User Acceptance Testing',
      'Regulatory Compliance Testing'
    ],
    correctAnswer: 0,
    explanation: 'Unit testing is the first and lowest testing level, typically written and run directly by developers during development to verify that individual components behave as intended.',
    officialRef: 'PCET-30-01 Block 2.1 - Testing Levels Hierarchy',
    tags: ['unit-testing', 'test-order', 'levels']
  },
  {
    id: 'pcet-2-014',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is the distinction between "Component Integration Testing" and "System Integration Testing"?',
    codeSnippet: '# Level A: Testing communication between UserService and AuthService within the same application.\n# Level B: Testing communication between our E-Commerce Platform and an external Chase Bank Visa payment clearinghouse.',
    options: [
      'Level A is System Integration; Level B is Component Integration',
      'Level A is Component Integration; Level B is System Integration',
      'Both levels represent identical Unit testing',
      'Component integration cannot be automated in Python'
    ],
    correctAnswer: 1,
    explanation: 'Component Integration Testing tests interactions between software components within the application. System Integration Testing tests interactions between different systems or external services (e.g., third-party APIs).',
    officialRef: 'PCET-30-01 Block 2.1 - Integration Testing Levels',
    tags: ['component-integration', 'system-integration', 'interfaces']
  },
  {
    id: 'pcet-2-015',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'Why should the test environment for System Testing closely replicate the production environment?',
    codeSnippet: '# Defect discovered only in production:\n# Developer tested on macOS with case-insensitive file system.\n# Production runs Linux (Ubuntu) with case-sensitive file system: import MyModule failed with ModuleNotFoundError!',
    options: [
      'To prevent developers from installing games on servers',
      'To ensure that environment-specific behaviors (OS, networking, database versions, file systems) do not cause false confidence or production surprises',
      'Because Python scripts cannot run on different operating systems',
      'To increase the monthly cloud hosting invoice'
    ],
    correctAnswer: 1,
    explanation: 'A production-like staging environment ensures that configuration, operating system nuances, network topologies, database engines, and permissions accurately reflect production, minimizing deployment surprises.',
    officialRef: 'PCET-30-01 Block 2.1 - Test Environment Fidelity',
    tags: ['test-environment', 'system-testing', 'fidelity']
  },
  {
    id: 'pcet-2-016',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is "Sandwich Integration" (Hybrid Integration)?',
    codeSnippet: '# Integration strategy:\n# Combining Top-Down integration for high-level UI/controller components\n# with Bottom-Up integration for low-level utility and database layers,\n# meeting in the middle.',
    options: [
      'An integration technique combining top-down and bottom-up approaches concurrently',
      'Eating lunch while running manual tests',
      'Wrapping tests inside try...except blocks',
      'Testing only between 12:00 PM and 1:00 PM'
    ],
    correctAnswer: 0,
    explanation: 'Sandwich (or hybrid) integration combines top-down (using stubs) and bottom-up (using drivers) testing simultaneously, converging at the middle architecture layer to leverage benefits of both strategies.',
    officialRef: 'PCET-30-01 Block 2.1 - Sandwich Integration',
    tags: ['sandwich-integration', 'hybrid-strategy', 'integration']
  },
  {
    id: 'pcet-2-017',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'Who typically executes User Acceptance Testing (UAT)?',
    codeSnippet: '# Participants in UAT session:\n# - End business users, domain subject matter experts (SMEs), customer representatives\n# - NOT the developers who wrote the feature',
    options: [
      'The lead Python core developer',
      'Business domain users, end-users, or client representatives',
      'Third-party cloud hosting providers',
      'Automated flake8 bots on GitHub'
    ],
    correctAnswer: 1,
    explanation: 'UAT is performed by actual end-users, customers, or business stakeholders to validate that the delivered software supports their real-world day-to-day business processes.',
    officialRef: 'PCET-30-01 Block 2.1 - User Acceptance Testing',
    tags: ['uat', 'stakeholders', 'user-validation']
  },
  {
    id: 'pcet-2-018',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'What is a "Mock Object" in unit and component testing?',
    codeSnippet: 'from unittest.mock import Mock\n\n# Creating a mock email service:\nemail_service = Mock()\nregister_user("alice@example.com", email_service)\n\n# Assert that email_service.send_welcome_email was called once with "alice@example.com":\nemail_service.send_welcome_email.assert_called_once_with("alice@example.com")',
    options: [
      'A component that makes fun of developers when their code fails',
      'A test double that records calls received and allows verification of behavior (method calls, arguments) without performing real operations',
      'A static code analyzer that checks variable naming conventions',
      'A hardware emulator for mobile devices'
    ],
    correctAnswer: 1,
    explanation: 'A Mock object is a sophisticated test double that records how it was called (which methods, with what arguments, how many times) and allows assertions on interactions, verifying collaboration between objects.',
    officialRef: 'PCET-30-01 Block 2.1 - Mocking in Python',
    tags: ['mock', 'unittest-mock', 'test-doubles']
  },
  {
    id: 'pcet-2-019',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Beginner',
    question: 'What distinguishes Component Testing from Integration Testing?',
    codeSnippet: '# Comparison:\n# Test 1: Testing parse_csv() using an in-memory string io.StringIO.\n# Test 2: Testing parse_csv() reading from a live PostgreSQL DB across a network socket.',
    options: [
      'Component testing verifies units in isolation; integration testing verifies interactions and communication between integrated units',
      'Component testing is only done by testers; integration is only done by customers',
      'Component testing requires Selenium; integration testing requires flake8',
      'There is no distinction; they are synonymous terms'
    ],
    correctAnswer: 0,
    explanation: 'Component testing isolates the unit under test from dependencies. Integration testing deliberately evaluates the interaction, data exchange, and communication across component interfaces.',
    officialRef: 'PCET-30-01 Block 2.1 - Component vs Integration',
    tags: ['component-testing', 'integration-testing', 'levels']
  },
  {
    id: 'pcet-2-020',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.1',
    category: 'Testing Levels',
    difficulty: 'Intermediate',
    question: 'Why is testing non-functional requirements (such as security and performance) during System Testing crucial?',
    codeSnippet: '# A banking app functions 100% correctly functionally (transfers money accurately),\n# but under 50 simultaneous users, response time slows from 0.5s to 95.0s, and unencrypted passwords are sent in plain text.',
    options: [
      'Functional correctness alone does not guarantee security, scalability, stability, or acceptable user experience',
      'Python requires non-functional tests before files can be saved to disk',
      'Non-functional tests eliminate the need for functional tests',
      'Because non-functional tests are 100% automated by default'
    ],
    correctAnswer: 0,
    explanation: 'A system can be functionally correct according to business logic, yet completely unviable in production if it cannot handle normal concurrency load, leaks private data, or has terrible latency.',
    officialRef: 'PCET-30-01 Block 2.1 - System Testing Scope',
    tags: ['system-testing', 'non-functional', 'quality-attributes']
  },

  // Chapter 2.2: Functional vs. Non-Functional Testing (Cards 21-40)
  {
    id: 'pcet-2-021',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Testing Types',
    difficulty: 'Beginner',
    question: 'What is the core distinction between Functional Testing and Non-Functional Testing?',
    codeSnippet: '# Question A: "Does the discount code calculate the correct 15% reduction?"\n# Question B: "Can the checkout endpoint process 5,000 transactions per second with < 200ms latency?"',
    options: [
      'Question A is Non-Functional; Question B is Functional',
      'Question A is Functional ("What the system does"); Question B is Non-Functional ("How well the system performs")',
      'Both questions are Functional testing',
      'Both questions are Static testing'
    ],
    correctAnswer: 1,
    explanation: 'Functional testing evaluates WHAT the system does (business features, inputs, outputs, calculations). Non-Functional testing evaluates HOW WELL the system performs (speed, reliability, usability, security, scalability).',
    officialRef: 'PCET-30-01 Block 2.2 - Functional vs Non-Functional',
    tags: ['functional-testing', 'non-functional', 'testing-types']
  },
  {
    id: 'pcet-2-022',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Performance Testing',
    difficulty: 'Beginner',
    question: 'What is "Load Testing"?',
    codeSnippet: '# Performance test specification:\n# "Simulate 500 concurrent users performing typical search and checkout flows\n# to measure system response times and throughput under normal peak traffic."',
    options: [
      'Testing the maximum physical weight that a server rack can hold',
      'Testing software behavior under anticipated, realistic operational workloads to ensure response times and stability meet requirements',
      'Testing what happens when all memory is consumed and the operating system crashes',
      'Testing how long a battery lasts on a laptop'
    ],
    correctAnswer: 1,
    explanation: 'Load Testing evaluates the performance of a system under anticipated, realistic peak workloads to verify throughput, latency, and resource utilization within expected thresholds.',
    officialRef: 'PCET-30-01 Block 2.2 - Load Testing',
    tags: ['load-testing', 'performance', 'throughput']
  },
  {
    id: 'pcet-2-023',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Performance Testing',
    difficulty: 'Intermediate',
    question: 'What is "Stress Testing"?',
    codeSnippet: '# Scenario:\n# Server expected peak load is 1,000 requests/sec.\n# Test pushes load to 5,000 requests/sec, then 10,000 requests/sec until the service fails.\n# Objective: Observe failure modes and recovery behavior.',
    options: [
      'Testing how well human developers perform under tight sprint deadlines',
      'Testing the system beyond the limits of its anticipated peak capacity to evaluate how gracefully it degrades and recovers',
      'Running flake8 with 50 rules enabled at once',
      'Testing only during stressful server maintenance windows'
    ],
    correctAnswer: 1,
    explanation: 'Stress Testing pushes the system beyond its maximum operational limits to determine its breaking point, evaluating whether it fails safely (graceful degradation) and recovers properly without data corruption.',
    officialRef: 'PCET-30-01 Block 2.2 - Stress Testing',
    tags: ['stress-testing', 'breaking-point', 'graceful-degradation']
  },
  {
    id: 'pcet-2-024',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Performance Testing',
    difficulty: 'Intermediate',
    question: 'What is "Endurance Testing" (or Soak Testing)?',
    codeSnippet: '# Test execution:\n# Running an automated test cluster at 70% load continuously for 72 hours\n# to monitor memory usage over time.\n# Result: Python process memory increases by 50MB every hour (memory leak detected!).',
    options: [
      'Testing how many times a tester can run pytest in 5 minutes',
      'Testing a system with a sustained workload over an extended period to identify slow resource leaks (memory, database connection pools, file descriptors)',
      'Submerging hardware in water to test water resistance',
      'Running tests without any sleep'
    ],
    correctAnswer: 1,
    explanation: 'Endurance (Soak) Testing applies a steady operational load over prolonged timeframes (hours or days) to detect degradation, memory leaks, unclosed handles, or buffer accumulation that short tests miss.',
    officialRef: 'PCET-30-01 Block 2.2 - Endurance Testing',
    tags: ['endurance-testing', 'soak-testing', 'memory-leaks']
  },
  {
    id: 'pcet-2-025',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Performance Testing',
    difficulty: 'Intermediate',
    question: 'What is "Spike Testing"?',
    codeSnippet: '# Traffic simulation:\n# Baseline: 100 requests/sec\n# Sudden surge: 10,000 requests/sec for 60 seconds (simulating a flash sale notification)\n# Return to baseline: 100 requests/sec',
    options: [
      'Testing software that controls electric fence voltages',
      'Testing the system\'s ability to handle sudden, dramatic surges in user traffic and evaluate whether it stabilizes after the surge subsides',
      'A test that creates spikes in the git commit graph',
      'Testing that only runs during CPU frequency scaling'
    ],
    correctAnswer: 1,
    explanation: 'Spike Testing evaluates how the system responds to sudden, massive increases and decreases in load, checking if auto-scaling mechanisms react in time and if services stabilize afterward.',
    officialRef: 'PCET-30-01 Block 2.2 - Spike Testing',
    tags: ['spike-testing', 'traffic-surges', 'auto-scaling']
  },
  {
    id: 'pcet-2-026',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Security Testing',
    difficulty: 'Beginner',
    question: 'What is the focus of "Security Testing"?',
    codeSnippet: '# Test cases:\n# 1. SQL injection in search parameter: \' OR 1=1 --\n# 2. Accessing /admin/settings without admin credentials\n# 3. Cross-Site Scripting (XSS): <script>alert("hacked")</script>',
    options: [
      'Measuring how fast the CPU calculates SHA-256 hashes',
      'Evaluating software for vulnerabilities, assessing how well it protects confidential data, maintains integrity, and prevents unauthorized access',
      'Checking that every developer has a secure desk lock',
      'Running tests on a private VPN only'
    ],
    correctAnswer: 1,
    explanation: 'Security Testing assesses how resilient an application is to malicious attacks, unauthorized access, data exfiltration, privilege escalation, and vulnerabilities (such as OWASP Top 10 flaws).',
    officialRef: 'PCET-30-01 Block 2.2 - Security Testing',
    tags: ['security-testing', 'vulnerabilities', 'owasp']
  },
  {
    id: 'pcet-2-027',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Security Testing',
    difficulty: 'Intermediate',
    question: 'What is the difference between Authentication testing and Authorization testing?',
    codeSnippet: '# Check A: Verifying whether the user is who they claim to be (username + valid bcrypt password hash).\n# Check B: Verifying whether an authenticated standard user can delete another customer\'s account (/api/users/42/delete).',
    options: [
      'Check A is Authorization; Check B is Authentication',
      'Check A is Authentication (Identity); Check B is Authorization (Permissions & Access Rights)',
      'Both checks represent identical Unit tests',
      'Neither check is considered security testing'
    ],
    correctAnswer: 1,
    explanation: 'Authentication verifies identity ("Who are you?"). Authorization verifies access rights and permissions ("Are you allowed to perform this operation?").',
    officialRef: 'PCET-30-01 Block 2.2 - Authentication vs Authorization',
    tags: ['authentication', 'authorization', 'security-testing']
  },
  {
    id: 'pcet-2-028',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Usability Testing',
    difficulty: 'Beginner',
    question: 'What is evaluated during "Usability Testing"?',
    codeSnippet: '# Usability session:\n# Observers watch real users attempt to book a train ticket on a new web app:\n# - How intuitive is the workflow?\n# - How many clicks to complete the purchase?\n# - Do users encounter confusion or friction?',
    options: [
      'The raw execution speed of the Python interpreter',
      'The degree to which software can be understood, learned, used, and attractive to users under specified conditions',
      'Whether the Python source code uses 4 spaces or tabs',
      'The power consumption of server cooling fans'
    ],
    correctAnswer: 1,
    explanation: 'Usability Testing evaluates how easily and intuitively end-users can learn, operate, navigate, and accomplish their goals using the software without unnecessary friction or confusion.',
    officialRef: 'PCET-30-01 Block 2.2 - Usability Testing',
    tags: ['usability', 'user-experience', 'learnability']
  },
  {
    id: 'pcet-2-029',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Accessibility Testing',
    difficulty: 'Intermediate',
    question: 'What is the objective of "Accessibility Testing" (a11y)?',
    codeSnippet: '# Accessibility verification:\n# - Screen reader compatibility (NVDA / VoiceOver)\n# - Keyboard navigation without a mouse (Tab key navigation)\n# - Color contrast ratios matching WCAG 2.1 AA standards for visually impaired users',
    options: [
      'Verifying that software is usable by people with disabilities, including visual, auditory, motor, or cognitive impairments',
      'Testing whether servers have fast gigabit internet access',
      'Checking whether developers can access the GitHub repo from home',
      'Testing that an API responds to GET requests'
    ],
    correctAnswer: 0,
    explanation: 'Accessibility Testing verifies that software complies with standards (e.g., WCAG) and can be used effectively by individuals with various disabilities (using screen readers, keyboard-only, high contrast, etc.).',
    officialRef: 'PCET-30-01 Block 2.2 - Accessibility Testing',
    tags: ['accessibility', 'wcag', 'a11y']
  },
  {
    id: 'pcet-2-030',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Portability & Compatibility',
    difficulty: 'Beginner',
    question: 'What is "Compatibility Testing"?',
    codeSnippet: '# Test matrix:\n# Browsers: Chrome 120, Firefox 121, Safari 17, Edge\n# Operating Systems: Windows 11, macOS Sonoma, Ubuntu 22.04\n# Python versions: 3.10, 3.11, 3.12',
    options: [
      'Testing whether the developers get along well personally',
      'Evaluating software capability to run reliably across different hardware, operating systems, browsers, network environments, and runtime versions',
      'Testing whether source code can be printed on paper',
      'Testing how many comments are written in Python'
    ],
    correctAnswer: 1,
    explanation: 'Compatibility Testing verifies that an application functions correctly across diverse environments, platforms, devices, operating systems, browsers, and language runtime versions.',
    officialRef: 'PCET-30-01 Block 2.2 - Compatibility Testing',
    tags: ['compatibility', 'portability', 'cross-platform']
  },
  {
    id: 'pcet-2-031',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Portability & Compatibility',
    difficulty: 'Intermediate',
    question: 'Why is using `pathlib.Path` or `os.path.join` critical for cross-platform Python test compatibility?',
    codeSnippet: '# Code A: file_path = "tests/data\\\\user.json"  # Hardcoded Windows backslashes\n# Code B:\nfrom pathlib import Path\nfile_path = Path("tests") / "data" / "user.json"',
    options: [
      'Code A will fail on Linux and macOS because POSIX systems use forward slashes (/) as directory separators',
      'Code B runs 500% faster in Python bytecode',
      'Code A causes a memory leak in pytest',
      'Pathlib is only supported on Windows'
    ],
    correctAnswer: 0,
    explanation: 'Hardcoding platform-specific directory separators (backslashes on Windows) breaks compatibility when running tests on Linux/macOS CI runners. `pathlib.Path` handles platform differences transparently.',
    officialRef: 'PCET-30-01 Block 2.2 - Python Cross-Platform Testing',
    tags: ['pathlib', 'cross-platform', 'compatibility']
  },
  {
    id: 'pcet-2-032',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Reliability Testing',
    difficulty: 'Intermediate',
    question: 'In reliability testing, what does the MTBF (Mean Time Between Failures) metric measure?',
    codeSnippet: '# Metrics over 10,000 hours of production operation:\n# System experienced 5 unplanned outages.\n# Total operational uptime: 9,990 hours.\n# MTBF = 9,990 / 5 = 1,998 hours.',
    options: [
      'The average predicted elapsed time between inherent failures of a system during normal operation',
      'The average time it takes for a developer to fix a bug in git',
      'The maximum number of tests that can fail before CI aborts',
      'The time between daily scrum meetings'
    ],
    correctAnswer: 0,
    explanation: 'MTBF (Mean Time Between Failures) is a key reliability metric measuring the average operational time elapsed between system failures, reflecting system stability and availability.',
    officialRef: 'PCET-30-01 Block 2.2 - Reliability Metrics',
    tags: ['reliability', 'mtbf', 'metrics']
  },
  {
    id: 'pcet-2-033',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Reliability Testing',
    difficulty: 'Intermediate',
    question: 'What does MTTR (Mean Time to Repair / Recovery) measure?',
    codeSnippet: '# Incident response data:\n# Service crashed at 14:00.\n# On-call team detected, deployed fix, and restored service at 14:15.\n# Time to recover: 15 minutes.',
    options: [
      'The time taken to write a new Python feature',
      'The average time required to troubleshoot, fix, and restore a failed system back to full operational capability',
      'The time taken to compile Python bytecode to .pyc files',
      'The duration of a sprint planning session'
    ],
    correctAnswer: 1,
    explanation: 'MTTR (Mean Time to Repair / Recovery) measures the average time taken to detect, diagnose, fix, and restore an unavailable or failed component back to healthy operation.',
    officialRef: 'PCET-30-01 Block 2.2 - Reliability and MTTR',
    tags: ['reliability', 'mttr', 'incident-response']
  },
  {
    id: 'pcet-2-034',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Localization Testing',
    difficulty: 'Intermediate',
    question: 'What is "Localization Testing" (l10n)?',
    codeSnippet: '# Test checklist for German locale (de_DE):\n# - Number formatting: 1.234,56 instead of 1,234.56\n# - Date format: DD.MM.YYYY instead of MM/DD/YYYY\n# - Umlaut characters (ä, ö, ü, ß) properly handled in UTF-8 without UnicodeDecodeError\n# - Text expansion accommodated in UI buttons',
    options: [
      'Testing whether the GPS sensor on a phone works correctly',
      'Verifying that software adapts correctly to the linguistic, cultural, and regional requirements of specific target locales',
      'Testing the location of server racks in a data center',
      'Checking local variable scope in Python functions'
    ],
    correctAnswer: 1,
    explanation: 'Localization Testing verifies that software functions properly in specific cultural and geographic locales (translations, currency formats, decimal separators, date formats, right-to-left scripts).',
    officialRef: 'PCET-30-01 Block 2.2 - Internationalization & Localization',
    tags: ['localization', 'l10n', 'i18n']
  },
  {
    id: 'pcet-2-035',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Maintainability Testing',
    difficulty: 'Intermediate',
    question: 'What is "Maintainability Testing"?',
    codeSnippet: '# Architecture audit:\n# - Measuring cyclomatic complexity of functions (radon cc)\n# - Checking coupling and modular decomposition\n# - Verifying presence of comprehensive unit tests and documentation',
    options: [
      'Testing how easily and cost-effectively the software can be modified, corrected, improved, or adapted to changing environments',
      'Testing the custodial cleaning schedule of developer offices',
      'Testing how often server hardware requires maintenance oiling',
      'Testing whether code can be published to PyPI'
    ],
    correctAnswer: 0,
    explanation: 'Maintainability Testing assesses how easily code can be understood, refactored, corrected, and updated over its lifecycle without introducing defects or incurring excessive technical debt.',
    officialRef: 'PCET-30-01 Block 2.2 - Maintainability Testing',
    tags: ['maintainability', 'code-quality', 'non-functional']
  },
  {
    id: 'pcet-2-036',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Portability Testing',
    difficulty: 'Intermediate',
    question: 'What is "Installation Testing"?',
    codeSnippet: '# Testing deployment package:\n# pip install my_custom_package-1.0.0.whl\n# Verifying: cleanly installs dependencies, handles existing versions, creates config files, uninstalls cleanly.',
    options: [
      'Testing the physical installation of desks and monitors in an office',
      'Verifying that the software installs, upgrades, and uninstalls cleanly on target environments according to specifications',
      'A test performed by Python\'s setup.py during build',
      'Testing the electric wiring in a server room'
    ],
    correctAnswer: 1,
    explanation: 'Installation testing verifies that the software installation process (including prerequisites, configuration, database migrations, updates, and uninstallation) executes smoothly and completely on supported platforms.',
    officialRef: 'PCET-30-01 Block 2.2 - Installation Testing',
    tags: ['installation-testing', 'packaging', 'deployment']
  },
  {
    id: 'pcet-2-037',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Performance Testing',
    difficulty: 'Beginner',
    question: 'What is "Throughput" in software performance testing?',
    codeSnippet: '# Benchmark result:\n# "The Python FastAPI service handled 14,200 requests per minute with 0 errors."',
    options: [
      'The number of software tasks or requests processed by the system within a specified unit of time',
      'The elapsed time between a user clicking a button and seeing a response',
      'The physical weight of server cables',
      'The number of lines of code in the repository'
    ],
    correctAnswer: 0,
    explanation: 'Throughput measures the volume of work or number of requests/transactions a system successfully processes per unit of time (e.g., requests per second, transactions per minute).',
    officialRef: 'PCET-30-01 Block 2.2 - Performance Metrics',
    tags: ['throughput', 'performance-testing', 'metrics']
  },
  {
    id: 'pcet-2-038',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Performance Testing',
    difficulty: 'Beginner',
    question: 'What is "Latency" (or Response Time)?',
    codeSnippet: '# Client metrics:\n# Request sent: 10:00:00.000\n# First byte received: 10:00:00.045\n# Latency = 45 milliseconds',
    options: [
      'The time taken from sending a request until the receiving of the corresponding response',
      'The number of users logged into the system simultaneously',
      'The percentage of CPU consumed by pytest',
      'The version number of the Python interpreter'
    ],
    correctAnswer: 0,
    explanation: 'Response time or latency is the elapsed duration from when a client initiates a request until the system returns the corresponding response.',
    officialRef: 'PCET-30-01 Block 2.2 - Latency and Response Time',
    tags: ['latency', 'response-time', 'performance']
  },
  {
    id: 'pcet-2-039',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Testing Types',
    difficulty: 'Intermediate',
    question: 'Which of the following requirements is a "Non-Functional Requirement"?',
    codeSnippet: '# Requirement 1: "The system shall calculate total price by adding item prices and 8% tax."\n# Requirement 2: "The system shall encrypt all stored credit card data using AES-256."\n# Requirement 3: "Users can reset their password via email."',
    options: [
      'Requirement 1 only',
      'Requirement 2 only (Security / Encryption standard)',
      'Requirement 3 only',
      'Requirement 1 and Requirement 3'
    ],
    correctAnswer: 1,
    explanation: 'Requirement 2 specifies a quality/security attribute ("How" data must be protected using AES-256), which is non-functional. Requirements 1 and 3 define functional behaviors ("What" the system does).',
    officialRef: 'PCET-30-01 Block 2.2 - Functional vs Non-Functional Requirements',
    tags: ['non-functional', 'security', 'requirements']
  },
  {
    id: 'pcet-2-040',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.2',
    category: 'Interoperability Testing',
    difficulty: 'Intermediate',
    question: 'What is "Interoperability Testing"?',
    codeSnippet: '# Integration scenario:\n# Verifying that our Python microservice can exchange JSON-LD payloads\n# with a legacy Java enterprise billing application and an SAP ERP system.',
    options: [
      'Testing whether two or more different software components or systems can effectively exchange information and use the information exchanged',
      'Testing the internal memory layout of Python ctypes',
      'Testing the battery life of IoT smart sensors',
      'Testing whether the mouse works with the keyboard'
    ],
    correctAnswer: 0,
    explanation: 'Interoperability Testing verifies that diverse systems, software products, or components can seamlessly exchange data and interoperate through standardized protocols and formats.',
    officialRef: 'PCET-30-01 Block 2.2 - Interoperability Testing',
    tags: ['interoperability', 'data-exchange', 'integration']
  },

  // Chapter 2.3: Change-Related Testing (Cards 41-50 in Part 1)
  {
    id: 'pcet-2-041',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'What is the specific objective of "Confirmation Testing" (also known as Re-testing)?',
    codeSnippet: '# Workflow:\n# 1. Tester logs Bug #45: "Discount code yields ZeroDivisionError".\n# 2. Developer fixes code and commits.\n# 3. Tester re-runs test case for Bug #45 on the new build.',
    options: [
      'To test all unrelated modules across the entire application',
      'To confirm that a previously detected and reported defect has been successfully resolved by the recent code fix',
      'To verify customer billing invoices',
      'To measure server electricity consumption'
    ],
    correctAnswer: 1,
    explanation: 'Confirmation Testing (Re-testing) specifically executes the test cases that previously failed to verify that the defect has actually been fixed in the new build.',
    officialRef: 'PCET-30-01 Block 2.3 - Confirmation Testing vs Regression Testing',
    tags: ['confirmation-testing', 'retesting', 'bug-fixes']
  },
  {
    id: 'pcet-2-042',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'What is the objective of "Regression Testing"?',
    codeSnippet: '# Developer fixes Bug #45 in payment_calculator.py.\n# CI pipeline executes 450 automated tests covering auth, shipping, search, and accounts.\n# Why execute tests for untouched modules?',
    options: [
      'To make the CI pipeline take longer to run',
      'To ensure that recent code modifications, bug fixes, or enhancements have not unintentionally broken existing, previously working features',
      'To discover new features that the developer forgot to announce',
      'To compile the code into native assembly language'
    ],
    correctAnswer: 1,
    explanation: 'Regression testing verifies that unchanged parts of the application have not been adversely affected or broken (regressed) as an unintended side effect of recent changes.',
    officialRef: 'PCET-30-01 Block 2.3 - Regression Testing',
    tags: ['regression-testing', 'side-effects', 'ci-cd']
  },
  {
    id: 'pcet-2-043',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'How do Confirmation Testing (Re-testing) and Regression Testing differ?',
    codeSnippet: '# Activity 1: Re-running Test #12 to confirm that the reported bug was fixed.\n# Activity 2: Running the 200 other existing tests to check for unintended side-effects.',
    options: [
      'Activity 1 is Regression Testing; Activity 2 is Confirmation Testing',
      'Activity 1 is Confirmation Testing; Activity 2 is Regression Testing',
      'Both activities are identical and can be used interchangeably',
      'Confirmation testing is automated; regression testing is always manual'
    ],
    correctAnswer: 1,
    explanation: 'Confirmation Testing verifies that the specific defect is fixed. Regression Testing verifies that the fix did not inadvertently break other, previously functioning parts of the application.',
    officialRef: 'PCET-30-01 Block 2.3 - Re-testing vs Regression Testing',
    tags: ['confirmation-testing', 'regression-testing', 'change-management']
  },
  {
    id: 'pcet-2-044',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'Why is Regression Testing an ideal candidate for automation?',
    codeSnippet: '# Regression suite characteristics:\n# - Contains hundreds of repetitive test cases\n# - Must be executed on every pull request and nightly build\n# - Requires consistent, deterministic execution without human fatigue',
    options: [
      'Because regression tests are too boring and error-prone for humans to repeat manually on every build, and automation provides fast, repeatable feedback',
      'Because manual regression testing is illegal under IEEE standards',
      'Because Python cannot be run manually',
      'Because automated tests never need maintenance'
    ],
    correctAnswer: 0,
    explanation: 'Regression tests are executed repeatedly across builds. Automating them reduces human fatigue, accelerates feedback in CI/CD, and ensures consistent quality verification.',
    officialRef: 'PCET-30-01 Block 2.3 - Automated Regression Testing',
    tags: ['automation', 'regression-testing', 'ci-cd']
  },
  {
    id: 'pcet-2-045',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is "Selective Regression Testing"?',
    codeSnippet: '# Large enterprise repository with 10,000 tests (takes 4 hours to run all).\n# Developer changes checkout_tax.py.\n# Test runner only executes the 120 tests associated with billing and checkout modules.',
    options: [
      'Choosing tests at random by rolling dice',
      'Executing a targeted subset of regression test cases selected based on impact analysis of the specific code changes, rather than the entire test suite',
      'Testing only tests written by senior developers',
      'Running tests only on select days of the week'
    ],
    correctAnswer: 1,
    explanation: 'Selective Regression Testing uses impact analysis to identify and execute only the tests related to modified components or affected dependencies, providing faster feedback when full suites take too long.',
    officialRef: 'PCET-30-01 Block 2.3 - Regression Test Selection',
    tags: ['selective-regression', 'impact-analysis', 'optimization']
  },
  {
    id: 'pcet-2-046',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'What triggers "Maintenance Testing"?',
    codeSnippet: '# Scenarios:\n# 1. Upgrading the production database from PostgreSQL 13 to PostgreSQL 16.\n# 2. Migrating Python codebase from Python 3.8 to Python 3.12.\n# 3. Sunsetting (retiring) a legacy payment gateway.',
    options: [
      'Only the initial creation of a new application',
      'Modifications to existing software, platform/OS migrations, library upgrades, or decommissioning/retiring systems',
      'Whenever developer laptops are rebooted',
      'Only when a software license expires'
    ],
    correctAnswer: 1,
    explanation: 'Maintenance testing is triggered after release by modifications (enhancements, bug fixes), platform migrations (upgrading Python runtime, moving to cloud), or system retirement/data archival.',
    officialRef: 'PCET-30-01 Block 2.3 - Maintenance Testing Triggers',
    tags: ['maintenance-testing', 'migration', 'retirement']
  },
  {
    id: 'pcet-2-047',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is "Impact Analysis" in maintenance and change testing?',
    codeSnippet: '# Developer proposes changing calculate_discount(user_id, cart).\n# Impact analysis tool inspects dependency graph and identifies:\n# 4 services, 12 API endpoints, and 45 test cases depend on calculate_discount.',
    options: [
      'Measuring the physical crash force when a hard drive falls',
      'The assessment of the consequences of a change to determine which components and tests are affected and require regression testing',
      'Calculating the financial bonus of the developer',
      'Reviewing the code with a spell checker'
    ],
    correctAnswer: 1,
    explanation: 'Impact Analysis evaluates the ripple effects of a planned change across dependencies and callers, guiding testers on what needs to be tested and helping assess risk before deployment.',
    officialRef: 'PCET-30-01 Block 2.3 - Impact Analysis',
    tags: ['impact-analysis', 'dependencies', 'risk']
  },
  {
    id: 'pcet-2-048',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Beginner',
    question: 'How does a Smoke Test differ from a full Regression Test suite?',
    codeSnippet: '# Comparison:\n# Suite A: 12 high-level tests, runs in 20 seconds, checks if app boots and core API responds.\n# Suite B: 850 comprehensive tests, runs in 25 minutes, checks every edge case and validation.',
    options: [
      'Suite A is Full Regression; Suite B is Smoke Test',
      'Suite A is Smoke Test (broad and shallow); Suite B is Full Regression (deep and comprehensive)',
      'Both suites are identical',
      'Smoke tests are only performed on paper'
    ],
    correctAnswer: 1,
    explanation: 'Smoke tests are broad and shallow, quickly confirming build stability. Regression test suites are deep and comprehensive, verifying detailed functionality across the entire codebase.',
    officialRef: 'PCET-30-01 Block 2.3 - Smoke vs Regression Testing',
    tags: ['smoke-testing', 'regression-testing', 'test-depth']
  },
  {
    id: 'pcet-2-049',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'What is a "Flaky Test" and why are flaky tests dangerous to CI/CD pipelines?',
    codeSnippet: '# In CI runner:\n# Run 1: test_notification_sent() -> PASS\n# Run 2: test_notification_sent() -> FAIL (AssertionError: Timeout waiting for async socket)\n# Run 3: test_notification_sent() -> PASS\n# (No code was changed between runs!)',
    options: [
      'A test that bakes pastry in Python',
      'A test that exhibits non-deterministic outcomes (passing and failing randomly without code changes), eroding developer trust in CI test suites',
      'A test that runs too quickly',
      'A test written using outdated Python 2 syntax'
    ],
    correctAnswer: 1,
    explanation: 'Flaky tests pass or fail non-deterministically (often due to race conditions, timing issues, or external dependencies). They erode trust in CI, leading teams to ignore real failures.',
    officialRef: 'PCET-30-01 Block 2.3 - Flaky Tests',
    tags: ['flaky-tests', 'non-determinism', 'ci-cd']
  },
  {
    id: 'pcet-2-050',
    track: 'pcet',
    section: 'Section 2',
    chapter: '2.3',
    category: 'Change-Related Testing',
    difficulty: 'Intermediate',
    question: 'How should a team handle a confirmed flaky test in an automated test pipeline?',
    codeSnippet: '# Action options for test_order_receipt_async():\n# A: Ignore it and re-run CI until it randomly turns green\n# B: Quarantine/isolate the test, investigate root cause (timing/race condition), and repair it before returning it to the main gate',
    options: [
      'Option A',
      'Option B',
      'Delete the entire project repository',
      'Disable automated testing entirely'
    ],
    correctAnswer: 1,
    explanation: 'Flaky tests should be quarantined so they do not block CI deployments or create alert fatigue, investigated for timing/race conditions, and only re-introduced once stabilized.',
    officialRef: 'PCET-30-01 Block 2.3 - Flaky Test Remediation',
    tags: ['flaky-tests', 'quarantine', 'best-practices']
  }
];
