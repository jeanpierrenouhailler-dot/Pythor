import { Flashcard } from '../types';

export const pcetSection3CardsPart1: Flashcard[] = [
  // Chapter 3.1: Static Testing Methods (Cards 1-20)
  {
    id: 'pcet-3-001',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing',
    difficulty: 'Beginner',
    question: 'What is the fundamental difference between Static Testing and Dynamic Testing?',
    codeSnippet: '# Comparison:\n# Activity 1: A team reads code and runs flake8 on a pull request before merging.\n# Activity 2: A team executes pytest tests/ to run test cases against live bytecode.',
    options: [
      'Static testing executes the software; dynamic testing only reads documents',
      'Static testing evaluates code, documentation, or design without executing the software; dynamic testing requires running the code with inputs to observe runtime behavior',
      'Static testing is only done by managers; dynamic testing is done by interns',
      'Static testing requires a compiled C++ binary'
    ],
    correctAnswer: 1,
    explanation: 'Static testing evaluates software work products (requirements, design, source code) without executing code. Dynamic testing requires code execution to observe runtime behavior and outputs.',
    officialRef: 'PCET-30-01 Block 3.1 - Static vs Dynamic Testing',
    tags: ['static-testing', 'dynamic-testing', 'fundamentals']
  },
  {
    id: 'pcet-3-002',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'According to formal review standards, what is an "Informal Review"?',
    codeSnippet: '# Scenario:\n# Two developers sit together at a desk (or on a quick video call) to look over\n# a 20-line regex helper function before committing.',
    options: [
      'A review that requires formal documentation, predefined checklists, and a moderator',
      'An informal check or pair discussion without a formal defined process, formal meeting, or documented report',
      'A review that takes place only during corporate holiday parties',
      'A review conducted exclusively by third-party auditors'
    ],
    correctAnswer: 1,
    explanation: 'An Informal Review (e.g., buddy check, pair programming review) lacks a formal process, formal agendas, or documented defect metrics, but is quick and low cost.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Types',
    tags: ['informal-review', 'reviews', 'peer-review']
  },
  {
    id: 'pcet-3-003',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What characterizes a "Walkthrough" review?',
    codeSnippet: '# Review session:\n# The author of the new billing engine leads a meeting with peers,\n# stepping through the code line by line and walking through scenarios to gather feedback.',
    options: [
      'Walking around the office building while thinking about tests',
      'A review led by the author of the work product, where the author guides participants through the document or code to gather feedback and achieve common understanding',
      'A formal inspection led by an independent moderator where the author remains silent',
      'An automated scan executed by a GitHub bot'
    ],
    correctAnswer: 1,
    explanation: 'A Walkthrough is led by the author of the work product. The author walks the audience through scenarios and logic to train peers, explain design choices, and solicit feedback.',
    officialRef: 'PCET-30-01 Block 3.1 - Walkthroughs',
    tags: ['walkthrough', 'author-led', 'reviews']
  },
  {
    id: 'pcet-3-004',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What is a "Technical Review"?',
    codeSnippet: '# Agenda: Architecture conformance check\n# Participants: Lead Architect, Senior Developers, Security Engineer\n# Objective: Evaluate technical design alternatives and verify compliance with architectural standards.',
    options: [
      'A peer-oriented technical review focused on achieving technical consensus, evaluating design decisions, and verifying compliance with architecture standards',
      'A lesson teaching junior developers how to type on keyboards',
      'An interview testing Python knowledge',
      'A customer sales presentation'
    ],
    correctAnswer: 0,
    explanation: 'A Technical Review is a peer-group discussion focused on technical content, architecture compliance, evaluating design alternatives, and solving technical problems.',
    officialRef: 'PCET-30-01 Block 3.1 - Technical Reviews',
    tags: ['technical-review', 'architecture', 'peer-review']
  },
  {
    id: 'pcet-3-005',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What distinguishes a "Formal Inspection" (Fagan Inspection) from other review types?',
    codeSnippet: '# Structure:\n# - Defined roles: Moderator/Facilitator, Author, Reviewers, Scribe\n# - Formal entry and exit criteria\n# - Formal preparation and rules\n# - Defect collection and formal metrics reporting',
    options: [
      'It is the most formal, structured review process with defined roles, metrics collection, checklist-based examination, and formal entry/exit criteria',
      'It is an informal conversation by the coffee machine',
      'It is an automated command line tool installed via pip',
      'It is a review that must be completed within 60 seconds'
    ],
    correctAnswer: 0,
    explanation: 'An Inspection (e.g. Fagan inspection) is the most formal review technique: led by a trained Moderator (not the author), with formal preparation, defined roles, checklists, and documented metrics.',
    officialRef: 'PCET-30-01 Block 3.1 - Formal Inspections',
    tags: ['inspection', 'fagan-inspection', 'formal-reviews']
  },
  {
    id: 'pcet-3-006',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'In a formal inspection, who is responsible for leading the meeting, keeping order, and ensuring review procedures are followed?',
    codeSnippet: '# Role identification:\n# "The [ ? ] chairs the inspection meeting, ensures everyone prepared,\n# mediates discussions, and evaluates entry and exit criteria."',
    options: [
      'The Author',
      'The Moderator (or Facilitator)',
      'The Scribe (or Recorder)',
      'The Company CEO'
    ],
    correctAnswer: 1,
    explanation: 'The Moderator (Facilitator) leads the inspection process, ensures participants are prepared, guides the meeting objectively, keeps focus on defect discovery, and oversees follow-ups.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Roles',
    tags: ['moderator', 'inspection-roles', 'formal-reviews']
  },
  {
    id: 'pcet-3-007',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'In a formal review, what is the duty of the "Scribe" (or Recorder)?',
    codeSnippet: '# Review meeting:\n# Scribe logs:\n# - Issue #1: Line 42, potential unhandled KeyError\n# - Issue #2: Line 89, missing type annotation\n# - Action items assigned to author',
    options: [
      'To read the code aloud in a dramatic voice',
      'To record every defect, issue, decision, and recommendation discovered during the review meeting in the review log',
      'To immediately edit the code live during the meeting',
      'To vote on whether to fire the author'
    ],
    correctAnswer: 1,
    explanation: 'The Scribe (Recorder) documents all logged defects, open issues, and action items during the review session so participants can focus on reviewing.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Roles',
    tags: ['scribe', 'recorder', 'inspection-roles']
  },
  {
    id: 'pcet-3-008',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing',
    difficulty: 'Beginner',
    question: 'Which defect is MOST easily detected via static review rather than dynamic execution?',
    codeSnippet: '# Code under examination:\n# 1. Unreachable dead code after a return statement\n# 2. Inconsistent naming conventions (mixing camelCase and snake_case)\n# 3. Missing or misleading docstring comments',
    options: [
      'Dynamic testing finds all three effortlessly',
      'Static testing finds all three directly, whereas dynamic testing rarely or never detects them because they do not cause execution crashes',
      'Neither static nor dynamic testing can find these defects',
      'Only hardware diagnostics can find them'
    ],
    correctAnswer: 1,
    explanation: 'Dead code, style inconsistencies, and inaccurate comments rarely cause dynamic runtime exceptions, making them almost invisible to dynamic test suites, but trivially spotted during static review and linting.',
    officialRef: 'PCET-30-01 Block 3.1 - Strengths of Static Testing',
    tags: ['static-testing', 'dead-code', 'code-review']
  },
  {
    id: 'pcet-3-009',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What is a "Checklist-Based Review"?',
    codeSnippet: '# Review checklist:\n# [ ] Are all external inputs validated for type and bounds?\n# [ ] Are open file handles closed using with statements?\n# [ ] Are exceptions caught specifically rather than except Exception: pass?\n# [ ] Are docstrings formatted to PEP 257?',
    options: [
      'Reviewers examine the work product guided by a structured list of questions, rules, or known defect categories',
      'A review that checks whether groceries were purchased for the team',
      'A review that counts the number of lines of code',
      'A review done only once at project inception'
    ],
    correctAnswer: 0,
    explanation: 'In Checklist-Based reviews, reviewers evaluate code or documents against a curated list of defect types, security checks, and standards to ensure consistent and systematic scrutiny.',
    officialRef: 'PCET-30-01 Block 3.1 - Checklist-Based Reviews',
    tags: ['checklists', 'review-techniques', 'standards']
  },
  {
    id: 'pcet-3-010',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Beginner',
    question: 'How does modern Pull Request (PR) code review in Git combine static review with automated tooling?',
    codeSnippet: '# GitHub Pull Request #42:\n# 1. Automated CI bots run flake8, black, and mypy (Automated static analysis)\n# 2. Peer developers inspect the unified diff and leave comments (Human static review)\n# 3. Merging is blocked until all automated checks pass and 2 approvals are submitted.',
    options: [
      'It replaces the need for any human thought',
      'It blends automated static analysis (linters, type checkers) with human peer code review for comprehensive static quality assurance',
      'It only checks whether the pull request title contains emojis',
      'It automatically deploys code to production without inspection'
    ],
    correctAnswer: 1,
    explanation: 'Modern PR workflows combine automated static analysis (fast linter and type checks) with human peer review (evaluating architecture, readability, and intent) before merging.',
    officialRef: 'PCET-30-01 Block 3.1 - Modern Code Review Workflows',
    tags: ['pull-requests', 'git', 'peer-review']
  },
  {
    id: 'pcet-3-011',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What is a key factor for conducting successful, productive code reviews?',
    codeSnippet: '# Team Norms:\n# - Review code, not the person\n# - Provide clear rationale for change requests with links to standards\n# - Praise good, clean solutions\n# - Keep reviews small (< 400 lines of code per review)',
    options: [
      'Critique the author\'s character to motivate them',
      'Focus objectively on code quality and standards, review manageable chunks, and maintain courteous, constructive communication',
      'Review 5,000 lines of code in one 10-minute session',
      'Reject every pull request at least twice on principle'
    ],
    correctAnswer: 1,
    explanation: 'Successful reviews require keeping diffs small (< 400 LOC), focusing objectively on code and design rather than personalities, providing actionable suggestions, and fostering psychological safety.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Best Practices',
    tags: ['code-review', 'best-practices', 'team-culture']
  },
  {
    id: 'pcet-3-012',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing',
    difficulty: 'Intermediate',
    question: 'Why is static testing considered significantly more cost-effective than finding defects via dynamic testing in late stages?',
    codeSnippet: '# Comparison:\n# Catching missing null check during 5-minute PR review: 5 minutes to fix.\n# Catching missing null check after deployment: crashes customer transactions, triggers outage incident, hotfix emergency deploy.',
    options: [
      'Static testing catches defects directly at their origin (the code or specification) before they manifest as complex runtime failures across integrated systems',
      'Static testing uses free open-source electricity',
      'Static testing makes developers work without pay',
      'Dynamic testing is obsolete'
    ],
    correctAnswer: 0,
    explanation: 'Static analysis identifies the defect directly in the artifact. Dynamic testing only observes a symptom/failure, requiring downstream debugging and investigation to locate the fault.',
    officialRef: 'PCET-30-01 Block 3.1 - Economics of Static Testing',
    tags: ['economics', 'static-testing', 'defect-origin']
  },
  {
    id: 'pcet-3-013',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What is "Scenario-Based Reviewing"?',
    codeSnippet: '# Review method:\n# Reviewers are given specific operational use-case scenarios\n# (e.g. "Customer attempts to purchase product while item is out of stock")\n# and trace the requirement/code step-by-step through that scenario.',
    options: [
      'Reviewing movie scripts',
      'A review technique where reviewers trace specific scenarios, use cases, or operational paths through the work product to evaluate readiness and completeness',
      'A review where developers act out roles in costume',
      'Testing only during power outages'
    ],
    correctAnswer: 1,
    explanation: 'Scenario-based reviewing uses concrete use cases or operational scenarios to step through documents or code, ensuring requirements handle real user journeys.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Techniques',
    tags: ['scenario-based', 'review-techniques', 'use-cases']
  },
  {
    id: 'pcet-3-014',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What is "Perspective-Based Reading" (PBR)?',
    codeSnippet: '# Roles assigned for reviewing a feature document:\n# Reviewer 1 adopts the perspective of the End-User.\n# Reviewer 2 adopts the perspective of the Security Auditor.\n# Reviewer 3 adopts the perspective of the Maintenance Engineer.',
    options: [
      'Reviewing code while wearing 3D glasses',
      'A review technique where different reviewers adopt different stakeholder perspectives (e.g., user, tester, architect, security officer) to maximize diverse defect discovery',
      'Reading code backwards from the last line to the first',
      'A review conducted from the perspective of the Python interpreter'
    ],
    correctAnswer: 1,
    explanation: 'Perspective-Based Reading (PBR) assigns specific stakeholder viewpoints to reviewers, ensuring comprehensive coverage from user, technical, security, and operational angles.',
    officialRef: 'PCET-30-01 Block 3.1 - Perspective-Based Reading',
    tags: ['perspective-based', 'pbr', 'review-techniques']
  },
  {
    id: 'pcet-3-015',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Beginner',
    question: 'Can static testing be applied to artifacts other than source code?',
    codeSnippet: '# Artifacts under static review:\n# 1. User Story acceptance criteria\n# 2. Database entity-relationship (ER) diagrams\n# 3. REST API OpenAPI specification (YAML)\n# 4. End-user software installation manual',
    options: [
      'No, static testing can strictly only be performed on .py files',
      'Yes, static testing can be applied to any software work product, including requirements, design architecture, test plans, and documentation',
      'Only if the document is converted into Python bytecode',
      'Only requirements can be reviewed, not architecture'
    ],
    correctAnswer: 1,
    explanation: 'Static testing is universal: any written software artifact (requirements, architecture diagrams, test cases, user manuals, contracts) can be reviewed statically.',
    officialRef: 'PCET-30-01 Block 3.1 - Scope of Static Testing',
    tags: ['static-testing', 'work-products', 'requirements']
  },
  {
    id: 'pcet-3-016',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing',
    difficulty: 'Intermediate',
    question: 'In software inspection, what does "Defect Logging Rate" measure?',
    codeSnippet: '# Metrics collected by Scribe during 2-hour formal inspection:\n# Total defects logged: 24\n# Defect Logging Rate = 24 / 2 hours = 12 defects/hour',
    options: [
      'The speed at which the hard drive saves files to disk',
      'The number of defects identified and recorded per unit of review time, used to assess inspection effectiveness and preparation depth',
      'The number of characters per minute typed by the scribe',
      'The speed of Python test execution'
    ],
    correctAnswer: 1,
    explanation: 'Defect logging rate is a standard inspection metric indicating review efficiency and thoroughness. Excessively high or low rates signal issues with preparation or review pacing.',
    officialRef: 'PCET-30-01 Block 3.1 - Inspection Metrics',
    tags: ['inspection-metrics', 'defect-logging-rate', 'formal-reviews']
  },
  {
    id: 'pcet-3-017',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing',
    difficulty: 'Intermediate',
    question: 'What is a "Defect Typology" in the context of static code reviews?',
    codeSnippet: '# Category distribution of reviewed pull requests:\n# - 40% Logic & boundary errors\n# - 25% Unhandled exceptions & null references\n# - 20% Security & authorization gaps\n# - 15% Documentation & PEP 8 formatting issues',
    options: [
      'A classification or taxonomy of discovered defects by type, root cause, or module to identify systemic development gaps',
      'The font typography used in Python code editors',
      'A compiler error in Python\'s tokenizer',
      'A list of Python keywords'
    ],
    correctAnswer: 0,
    explanation: 'Defect typology categorizes defects (e.g., boundary errors, missing validation, concurrency flaws) to reveal recurring developer blind spots and inform targeted training.',
    officialRef: 'PCET-30-01 Block 3.1 - Defect Typology',
    tags: ['defect-typology', 'metrics', 'root-cause']
  },
  {
    id: 'pcet-3-018',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Beginner',
    question: 'What is "Egoless Programming" in code review culture?',
    codeSnippet: '# Engineering mindset:\n# "You are not your code. When a reviewer identifies a flaw in a pull request,\n# they are helping improve the product, not criticizing your personal worth."',
    options: [
      'A philosophy recognizing that separation of personal ego from code produces better software, encouraging open receptivity to constructive peer review',
      'Programming while blindfolded',
      'A programming language with no self keyword',
      'Allowing an AI model to write all software without human oversight'
    ],
    correctAnswer: 0,
    explanation: 'Egoless Programming (Gerald Weinberg) emphasizes that engineers should separate their self-worth from their code, embracing reviews as collaborative opportunities to catch defects early.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Culture and Psychology',
    tags: ['egoless-programming', 'culture', 'peer-review']
  },
  {
    id: 'pcet-3-019',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing',
    difficulty: 'Intermediate',
    question: 'What is a major symptom that a code review process has failed?',
    codeSnippet: '# Observation on a team\'s pull requests:\n# PR #101 (+2,500 lines changed): Approved in 45 seconds with comment "LGTM!" (Looks Good To Me).\n# In production 1 hour later: Major database outage caused by unmigrated schema.',
    options: [
      'Rubber-stamping: Approving complex, large changes without genuine scrutiny or comprehension',
      'The review took too many days',
      'The author used too many comments',
      'The reviewer asked too many technical questions'
    ],
    correctAnswer: 0,
    explanation: '"Rubber-stamping" occurs when reviewers approve large pull requests without reading or understanding them ("LGTM syndrome"), completely defeating the quality gate.',
    officialRef: 'PCET-30-01 Block 3.1 - Code Review Failure Modes',
    tags: ['rubber-stamping', 'lgtm', 'code-review-anti-patterns']
  },
  {
    id: 'pcet-3-020',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.1',
    category: 'Static Testing Reviews',
    difficulty: 'Intermediate',
    question: 'What is the recommended size limit for a pull request to ensure high-quality static review?',
    codeSnippet: '# Empirical studies on code reviews:\n# Reviewing 200 lines of code in 60 mins -> Finds 85% of defects.\n# Reviewing 2,000 lines of code in 60 mins -> Reviewer fatigue sets in, defect detection drops below 20%.',
    options: [
      'Between 10,000 and 50,000 lines of code',
      'Small, focused increments, typically under 200 to 400 lines of code per review',
      'Exactly 1 line of code per pull request',
      'All changes across an entire quarter in one mega pull request'
    ],
    correctAnswer: 1,
    explanation: 'Studies show reviewer effectiveness plummets after 400 lines of code or 60 minutes of review. Keeping pull requests small and focused ensures thorough defect discovery.',
    officialRef: 'PCET-30-01 Block 3.1 - Review Best Practices',
    tags: ['pr-size', 'review-depth', 'code-review']
  },

  // Chapter 3.2: Python Linters & Static Analysis Tools (Cards 21-40)
  {
    id: 'pcet-3-021',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Python Standards & Linters',
    difficulty: 'Beginner',
    question: 'What is PEP 8 in the Python ecosystem?',
    codeSnippet: '# PEP 8 examples:\n# - Indentation: 4 spaces per indentation level (never tabs)\n# - Variable names: snake_case\n# - Class names: CamelCase\n# - Maximum line length: 79 characters',
    options: [
      'A software package for training machine learning algorithms',
      'The official Style Guide for Python Code, defining conventions for code layout, naming, imports, and whitespace',
      'The 8th version of the Python programming language',
      'A security patch for the Linux kernel'
    ],
    correctAnswer: 1,
    explanation: 'PEP 8 is the official Style Guide for Python Code written by Guido van Rossum, Barry Warsaw, and Nick Coghlan. It defines standard conventions to maximize code readability across the Python community.',
    officialRef: 'PCET-30-01 Block 3.2 - PEP 8 Style Guide',
    tags: ['pep8', 'style-guide', 'python-standards']
  },
  {
    id: 'pcet-3-022',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Python Standards & Linters',
    difficulty: 'Beginner',
    question: 'According to PEP 8, how should module imports be organized?',
    codeSnippet: '# Import grouping order:\n# Group 1: [ ? ]\n# Group 2: Third-party imports (e.g. requests, pytest)\n# Group 3: Local application / library-specific imports',
    options: [
      'Future imports first, then Standard library imports',
      'Random alphabetical order regardless of origin',
      'Local imports first, then third-party, then standard library',
      'Third-party imports first, then standard library'
    ],
    correctAnswer: 0,
    explanation: 'PEP 8 mandates imports be grouped in this order: 1. Standard library imports, 2. Related third-party imports, 3. Local application/library-specific imports, separated by a blank line.',
    officialRef: 'PCET-30-01 Block 3.2 - PEP 8 Import Order',
    tags: ['pep8', 'imports', 'code-style']
  },
  {
    id: 'pcet-3-023',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Beginner',
    question: 'What is `flake8` and what tools does it bundle together?',
    codeSnippet: '# Running flake8 in terminal:\n$ flake8 my_script.py\n# my_script.py:12:80: E501 line too long (84 > 79 characters)\n# my_script.py:15:1: F401 "os" imported but unused',
    options: [
      'A tool that bakes breakfast cereals',
      'A wrapper that glues together PyFlakes (syntax/logical errors), pycodestyle (PEP 8 checks), and Ned Batchelder\'s McCabe script (cyclomatic complexity)',
      'A tool that converts Python 2 code into Python 3 bytecode',
      'A dynamic testing framework identical to pytest'
    ],
    correctAnswer: 1,
    explanation: 'Flake8 is a widely used Python static linter that bundles PyFlakes (catches logical/unused import bugs), pycodestyle (enforces PEP 8 style), and McCabe (evaluates code complexity).',
    officialRef: 'PCET-30-01 Block 3.2 - flake8 Linter',
    tags: ['flake8', 'pyflakes', 'pycodestyle', 'mccabe']
  },
  {
    id: 'pcet-3-024',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Intermediate',
    question: 'In flake8 error reporting, what does error code prefix "F" signify vs prefix "E"?',
    codeSnippet: '# flake8 output:\n# F401: \'sys\' imported but unused\n# E302: expected 2 blank lines, found 1',
    options: [
      '"F" represents Fatal syntax/PyFlakes logical issues; "E" represents pycodestyle PEP 8 style formatting errors',
      '"F" stands for Fast; "E" stands for Expensive',
      '"F" is an error in FreeBSD; "E" is an error in Enterprise Linux',
      'There is no difference between F and E'
    ],
    correctAnswer: 0,
    explanation: 'In flake8: Codes starting with "F" originate from PyFlakes (logical flaws, undefined names, unused imports). Codes starting with "E" (and "W") originate from pycodestyle (PEP 8 style and whitespace warnings).',
    officialRef: 'PCET-30-01 Block 3.2 - flake8 Error Codes',
    tags: ['flake8', 'error-codes', 'pyflakes', 'pep8']
  },
  {
    id: 'pcet-3-025',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Intermediate',
    question: 'How does `pylint` differ from `flake8`?',
    codeSnippet: '# Running pylint:\n$ pylint my_project/\n# Output: Generates detailed ratings (e.g. "Your code has been rated at 8.75/10"),\n# detects code smells (R: Refactor, C: Convention, W: Warning, E: Error), and checks UML dependencies.',
    options: [
      'Pylint is a much more comprehensive, opinionated static code analyzer that inspects code smells, refactoring suggestions, docstrings, and assigns an overall quality score out of 10',
      'Pylint only runs on Windows 95',
      'Pylint executes the software dynamically with random test data',
      'Pylint is an alternative name for the Python garbage collector'
    ],
    correctAnswer: 0,
    explanation: 'While flake8 focuses on fast PEP 8 style and simple logic errors, pylint is a deeper, highly configurable analyzer that evaluates design metrics, variable naming, code smells, duplication, and grades code out of 10.',
    officialRef: 'PCET-30-01 Block 3.2 - Pylint vs Flake8',
    tags: ['pylint', 'flake8', 'code-metrics']
  },
  {
    id: 'pcet-3-026',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters & Formatters',
    difficulty: 'Beginner',
    question: 'What is `black` in the Python development ecosystem?',
    codeSnippet: '# Terminal command:\n$ black my_code.py\n# "reformatted my_code.py\n# 1 file reformatted."',
    options: [
      'A software vulnerability scanner',
      'An uncompromising, deterministic, automated code formatter that automatically reformats Python code to adhere to PEP 8 standards',
      'A tool that obfuscates code for security',
      'A compiler for compiling Python into C'
    ],
    correctAnswer: 1,
    explanation: 'Black is known as "The Uncompromising Code Formatter". It re-parses and formats Python files deterministically, eliminating manual formatting debates and enforcing clean PEP 8 styling automatically.',
    officialRef: 'PCET-30-01 Block 3.2 - Black Code Formatter',
    tags: ['black', 'formatter', 'pep8', 'automation']
  },
  {
    id: 'pcet-3-027',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Complexity Analysis',
    difficulty: 'Intermediate',
    question: 'What is "Cyclomatic Complexity" (McCabe Complexity) and how does static analysis evaluate it?',
    codeSnippet: '# Code complexity:\ndef evaluate_credit(user):\n    if user.age > 18:             # Decision 1\n        if user.income > 50000:    # Decision 2\n            if not user.has_debt: # Decision 3\n                return "Approved"\n    return "Denied"',
    options: [
      'The number of characters in a Python function name',
      'A software metric measuring the number of linearly independent paths through a program\'s source code, calculated based on decision points (if, while, for)',
      'The number of days since the code was last committed',
      'The CPU clock cycles required to compile the script'
    ],
    correctAnswer: 1,
    explanation: 'Cyclomatic Complexity measures the structural complexity of a program based on decision control flow ($V(G) = P + 1$, where $P$ is the number of decision points). Higher complexity correlates with higher defect rates and harder testability.',
    officialRef: 'PCET-30-01 Block 3.2 - Cyclomatic Complexity',
    tags: ['cyclomatic-complexity', 'mccabe', 'radon']
  },
  {
    id: 'pcet-3-028',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Complexity Analysis',
    difficulty: 'Intermediate',
    question: 'What tool in Python is commonly used to compute Cyclomatic Complexity and Maintainability Index scores from the CLI?',
    codeSnippet: '# CLI command:\n$ radon cc my_project/ -a -s\n# Output:\n# my_project/billing.py\n#     F 12:4 calculate_tax - B (7)\n#     F 45:4 process_invoice - F (34) <-- Extreme complexity!',
    options: [
      'pytest',
      'radon',
      'numpy',
      'sqlite3'
    ],
    correctAnswer: 1,
    explanation: '`radon` is a Python tool that computes Cyclomatic Complexity (ranks A through F), Maintainability Index (MI), Raw metrics (SLOC, comments), and Halstead metrics statically from source code.',
    officialRef: 'PCET-30-01 Block 3.2 - Radon Code Metrics',
    tags: ['radon', 'cyclomatic-complexity', 'metrics']
  },
  {
    id: 'pcet-3-029',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Security Static Analysis',
    difficulty: 'Intermediate',
    question: 'What is `bandit` used for in Python development?',
    codeSnippet: '# Running bandit:\n$ bandit -r my_package/\n# >> Issue: [B307:blacklist] Use of possibly insecure function - consider using ast.literal_eval.\n#    Location: my_package/calc.py:28\n#    28 result = eval(user_input)',
    options: [
      'A tool designed to find common security issues and vulnerabilities in Python code via static AST (Abstract Syntax Tree) analysis',
      'A load testing tool for attacking servers with DDoS attacks',
      'A Python package that cracks passwords',
      'A plugin that speeds up pip downloads'
    ],
    correctAnswer: 0,
    explanation: 'Bandit is a security-focused static analyzer for Python. It parses source files into Abstract Syntax Trees (AST) and scans for known security anti-patterns (e.g. `eval()`, hardcoded secrets, shell injection).',
    officialRef: 'PCET-30-01 Block 3.2 - Bandit Security Analysis',
    tags: ['bandit', 'security-analysis', 'sast']
  },
  {
    id: 'pcet-3-030',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Security Static Analysis',
    difficulty: 'Intermediate',
    question: 'Why does static security analysis flag the use of Python\'s `eval()` function as a severe security vulnerability (Bandit B307)?',
    codeSnippet: '# Vulnerable code:\ndef process_formula(user_input: str):\n    return eval(user_input)\n\n# Malicious input:\n# __import__(\'os\').system(\'rm -rf /\')',
    options: [
      'Because `eval()` runs arbitrary Python code, allowing untrusted users to execute malicious shell commands or compromise the host machine (Arbitrary Code Execution)',
      'Because `eval()` slows down the Python garbage collector',
      'Because `eval()` is only supported in Python 2',
      'Because `eval()` requires an internet connection'
    ],
    correctAnswer: 0,
    explanation: '`eval()` evaluates arbitrary strings as Python expressions. Passing untrusted input to `eval()` allows attackers to execute arbitrary system code, delete files, or exfiltrate private data.',
    officialRef: 'PCET-30-01 Block 3.2 - Insecure Functions in Python',
    tags: ['security', 'eval', 'vulnerabilities', 'bandit']
  },
  {
    id: 'pcet-3-031',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Security Static Analysis',
    difficulty: 'Intermediate',
    question: 'Which of the following lines would Bandit flag for insecure shell injection risks?',
    codeSnippet: '# Option A:\nimport subprocess\nsubprocess.run(f"cat {user_file}", shell=True)\n\n# Option B:\nsubprocess.run(["cat", user_file], shell=False)',
    options: [
      'Option A, because `shell=True` combined with string interpolation allows command injection (e.g., `user_file = "test.txt; rm -rf /"`)',
      'Option B, because subprocess cannot accept list arguments',
      'Both options are completely safe',
      'Neither; Python forbids running subprocesses'
    ],
    correctAnswer: 0,
    explanation: 'Option A uses `shell=True` with unvalidated string formatting, exposing the system to shell command injection. Option B safely passes arguments as an array with `shell=False`.',
    officialRef: 'PCET-30-01 Block 3.2 - Shell Injection Analysis',
    tags: ['bandit', 'subprocess', 'shell-injection', 'security']
  },
  {
    id: 'pcet-3-032',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Python Standards & Linters',
    difficulty: 'Beginner',
    question: 'What is PEP 257 in Python?',
    codeSnippet: '# Docstring conventions:\ndef calculate_area(radius: float) -> float:\n    """Calculate the area of a circle.\n\n    Args:\n        radius: The radius of the circle in meters.\n    Returns:\n        The calculated area as a float.\n    """\n    return 3.14159 * (radius ** 2)',
    options: [
      'The Python Docstring Conventions specification, prescribing rules and formats for docstrings in modules, classes, and functions',
      'The specification for writing Python unit tests',
      'The rules for naming git branches',
      'The memory limit for Python dictionaries'
    ],
    correctAnswer: 0,
    explanation: 'PEP 257 documents conventions associated with Python docstrings (triple-quoted strings), defining formatting rules for single-line and multi-line docstrings.',
    officialRef: 'PCET-30-01 Block 3.2 - PEP 257 Docstring Conventions',
    tags: ['pep257', 'docstrings', 'standards']
  },
  {
    id: 'pcet-3-033',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Beginner',
    question: 'How can a developer temporarily suppress a specific flake8 warning on a single line of code?',
    codeSnippet: 'import unused_module  # noqa: F401',
    options: [
      'By appending `# noqa` (or `# noqa: <code_id>`) at the end of the line',
      'By writing `# ignore` before the import',
      'By indenting the line with 8 spaces',
      'By putting the line inside a while False loop'
    ],
    correctAnswer: 0,
    explanation: 'Appending `# noqa` (No Quality Assurance) instructs flake8 to ignore warnings on that specific line. Best practice is to specify the exact code: `# noqa: F401`.',
    officialRef: 'PCET-30-01 Block 3.2 - flake8 Configuration',
    tags: ['flake8', 'noqa', 'linting']
  },
  {
    id: 'pcet-3-034',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Intermediate',
    question: 'What configuration file can be used to set project-wide flake8 rules, line lengths, and exclusions?',
    codeSnippet: '# File contents:\n# [flake8]\n# max-line-length = 88\n# extend-ignore = E203, W503\n# exclude = .git, __pycache__, .venv',
    options: [
      '.flake8 or setup.cfg',
      'flake8.exe',
      'package.json',
      'requirements.txt'
    ],
    correctAnswer: 0,
    explanation: 'Flake8 supports project configuration in `.flake8`, `setup.cfg`, or `tox.ini` files located in the root of the repository.',
    officialRef: 'PCET-30-01 Block 3.2 - flake8 Configuration',
    tags: ['flake8', 'configuration', 'setup-cfg']
  },
  {
    id: 'pcet-3-035',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters & Formatters',
    difficulty: 'Beginner',
    question: 'What is the default maximum line length enforced by `black` by default, and why does it differ from PEP 8\'s 79 characters?',
    codeSnippet: '# Black default setting:\n# max-line-length = 88\n# Rationale: 88 characters is ~10% longer than 79, significantly reducing vertical line wrapping while remaining comfortable on modern wide screens.',
    options: [
      '88 characters',
      '255 characters',
      '50 characters',
      'Unlimited characters'
    ],
    correctAnswer: 0,
    explanation: 'Black defaults to 88 characters per line. Pragmatic analysis demonstrated that 88 characters reduces vertical sprawl by ~18% while still fitting comfortably on modern monitors.',
    officialRef: 'PCET-30-01 Block 3.2 - Black Formatter Conventions',
    tags: ['black', 'line-length', 'pep8']
  },
  {
    id: 'pcet-3-036',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Intermediate',
    question: 'What is `isort` used for in Python projects?',
    codeSnippet: '# Before isort:\nimport sys\nfrom my_local import helper\nimport requests\nimport os\n\n# After isort:\nimport os\nimport sys\n\nimport requests\n\nfrom my_local import helper',
    options: [
      'A utility that automatically sorts and groups Python imports alphabetically and into correct PEP 8 sections (standard, third-party, local)',
      'A tool that sorts numbers in a list',
      'A database indexing algorithm',
      'A tool that sorts git branches by date'
    ],
    correctAnswer: 0,
    explanation: '`isort` is a Python utility that parses, organizes, and formats imports into standard library, third-party, and local sections, alphabetically sorted according to PEP 8.',
    officialRef: 'PCET-30-01 Block 3.2 - isort Utility',
    tags: ['isort', 'imports', 'pep8', 'formatting']
  },
  {
    id: 'pcet-3-037',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Intermediate',
    question: 'What is an "Abstract Syntax Tree" (AST) in static code analysis?',
    codeSnippet: 'import ast\n\ntree = ast.parse("x = 10 + 20")\n# Tree structure:\n# Assign(targets=[Name(id=\'x\')], value=BinOp(left=Constant(value=10), op=Add(), right=Constant(value=20)))',
    options: [
      'A tree planted outside a technology office',
      'A tree-like structural representation of the abstract syntactic grammar of source code, allowing tools like Bandit, Pylint, and Black to analyze and transform code without executing it',
      'A binary search tree algorithm implemented in Python',
      'A git commit branching diagram'
    ],
    correctAnswer: 1,
    explanation: 'An Abstract Syntax Tree (AST) represents the syntactic structure of source code as a nested tree data structure. Static analyzers traverse the AST to inspect operations, variables, and calls without running the code.',
    officialRef: 'PCET-30-01 Block 3.2 - AST in Static Analysis',
    tags: ['ast', 'static-analysis', 'compiler']
  },
  {
    id: 'pcet-3-038',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Security Static Analysis',
    difficulty: 'Intermediate',
    question: 'Which Bandit test code warns against hardcoded passwords or API keys in source code?',
    codeSnippet: '# Detected flaw:\nAPI_SECRET = "sk_live_9837498172398471923"  # In git commit history!\n# Bandit warning: [B105:hardcoded_password_string]',
    options: [
      'Hardcoded credentials or API tokens stored directly in source code rather than loaded from environment variables or secure secret managers',
      'Using double quotes instead of single quotes',
      'Writing comments longer than 50 characters',
      'Defining a class without inheritance'
    ],
    correctAnswer: 0,
    explanation: 'Hardcoding secrets (passwords, tokens, API keys) in source files exposes them to unauthorized repository viewers. Static analyzers flag potential secrets so they can be moved to environment variables.',
    officialRef: 'PCET-30-01 Block 3.2 - Hardcoded Secrets Detection',
    tags: ['bandit', 'secrets', 'security', 'static-analysis']
  },
  {
    id: 'pcet-3-039',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters & Static Analysis',
    difficulty: 'Intermediate',
    question: 'What is a "False Positive" when running a static linter, and how should it be managed?',
    codeSnippet: '# Bandit flags md5 hash usage:\n# hashlib.md5(file_chunk).hexdigest()\n# Context: Not used for passwords or security; used solely for fast file deduplication checksums.',
    options: [
      'The tool correctly flags a non-security issue as a critical risk; it should be reviewed and documented with an inline `# nosec` comment explaining why it is safe',
      'Delete the entire module immediately',
      'Rewrite the entire application in Assembly',
      'Disable Bandit completely across the entire repository'
    ],
    correctAnswer: 0,
    explanation: 'Static tools cannot understand full human context and sometimes flag benign code. After technical review confirms the code is safe, suppression with justification (e.g. `# nosec: B324 - checksum only`) is documented.',
    officialRef: 'PCET-30-01 Block 3.2 - Linter False Positives',
    tags: ['false-positive', 'nosec', 'linter-suppression']
  },
  {
    id: 'pcet-3-040',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.2',
    category: 'Linters',
    difficulty: 'Beginner',
    question: 'Why should linters and formatters be enforced automatically in Continuous Integration (CI)?',
    codeSnippet: '# GitHub Actions step:\n# - name: Run Linters\n#   run: |\n#     flake8 .\n#     black --check .\n#     bandit -r src/',
    options: [
      'To prevent non-compliant, poorly formatted, or insecure code from ever merging into the production branch, removing subjective style arguments from code reviews',
      'Because Python refuses to run if black has not touched it',
      'To reduce server disk storage usage',
      'Because developers love arguing about spaces and tabs during meetings'
    ],
    correctAnswer: 0,
    explanation: 'Enforcing linters in CI ensures that code quality, security checks, and formatting standards are consistently validated on every pull request automatically, saving human review time.',
    officialRef: 'PCET-30-01 Block 3.2 - Automated Quality Gates',
    tags: ['ci-cd', 'linters', 'quality-gates']
  },

  // Chapter 3.3: Type Annotations & Type Checking with mypy & typing (Cards 41-50 in Part 1)
  {
    id: 'pcet-3-041',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Beginner',
    question: 'What is the primary role of Python Type Hints (PEP 484) and static type checkers like `mypy`?',
    codeSnippet: 'def add_numbers(a: int, b: int) -> int:\n    return a + b\n\n# Calling:\nresult = add_numbers("hello", 42)',
    options: [
      'Python crashes with a TypeError at compile time before running',
      'Python\'s runtime executes normally (dynamic typing), but static type checker `mypy` flags the mismatch ahead of execution without running the code',
      'Python automatically converts the string into an integer at runtime',
      'Type hints make Python code run 10x faster'
    ],
    correctAnswer: 1,
    explanation: 'Python runtime does not enforce type annotations (it remains dynamically typed). Static type checkers like `mypy` analyze type hints statically to catch type mismatches before runtime.',
    officialRef: 'PCET-30-01 Block 3.3 - Type Hints and mypy',
    tags: ['type-hints', 'mypy', 'pep484', 'static-analysis']
  },
  {
    id: 'pcet-3-042',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Beginner',
    question: 'In Python 3.10+, how can a function parameter accept either an `int` or `None` using the modern union syntax?',
    codeSnippet: '# Modern syntax:\ndef find_user(user_id: int | None) -> str:\n    ...\n\n# Legacy (typing module) equivalent:\n# from typing import Optional\n# user_id: Optional[int]',
    options: [
      '`user_id: int | None`',
      '`user_id: int or None`',
      '`user_id: either(int, None)`',
      '`user_id: [int, None]`'
    ],
    correctAnswer: 0,
    explanation: 'PEP 604 (introduced in Python 3.10) allows the pipe operator `|` for union types: `int | None` is modern, cleaner syntax equivalent to `typing.Union[int, None]` or `typing.Optional[int]`.',
    officialRef: 'PCET-30-01 Block 3.3 - Union and Optional Types',
    tags: ['type-hints', 'union-operator', 'python310']
  },
  {
    id: 'pcet-3-043',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What does `typing.Any` represent in static type checking?',
    codeSnippet: 'from typing import Any\n\ndef process_payload(data: Any) -> None:\n    data.non_existent_method()  # mypy will NOT report an error here!\n    x: int = data',
    options: [
      'A type indicating that data can be an integer only',
      'An unconstrained wildcard type that disables static type checking for that value, allowing any operation or assignment',
      'A type that forces data to be None',
      'A type used only for asynchronous functions'
    ],
    correctAnswer: 1,
    explanation: '`Any` is an escape hatch from the static type system: operations on a value of type `Any` are assumed to be valid by `mypy`, bypassing static validation.',
    officialRef: 'PCET-30-01 Block 3.3 - typing.Any',
    tags: ['typing-any', 'mypy', 'type-checking']
  },
  {
    id: 'pcet-3-044',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What error will `mypy` report on the following snippet?',
    codeSnippet: 'from typing import Optional\n\ndef get_username(user_id: int) -> Optional[str]:\n    if user_id > 0:\n        return "Alice"\n    return None\n\nname = get_username(-1)\nprint(name.upper())',
    options: [
      'Item "None" of "Optional[str]" has no attribute "upper"',
      'ZeroDivisionError',
      'SyntaxError on Optional',
      'No error; mypy permits calling methods on None'
    ],
    correctAnswer: 0,
    explanation: 'Because `get_username` can return `None`, `name` has type `Optional[str]` (i.e. `str | None`). Calling `.upper()` without first checking if `name is not None` triggers a mypy error.',
    officialRef: 'PCET-30-01 Block 3.3 - Optional and None Checking',
    tags: ['mypy', 'optional', 'none-check', 'type-narrowing']
  },
  {
    id: 'pcet-3-045',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is "Type Narrowing" (or Type Guarding) in `mypy`?',
    codeSnippet: 'def process_value(val: int | str) -> int:\n    if isinstance(val, str):\n        return len(val)  # mypy narrows type of val to str inside this block\n    return val * 2       # mypy narrows type of val to int here',
    options: [
      'The process where a type checker automatically narrows a variable\'s type to a more specific type based on conditional checks like `isinstance()` or `is not None`',
      'Converting 64-bit integers to 8-bit integers',
      'Shortening variable names in functions',
      'Deleting unused types from the typing module'
    ],
    correctAnswer: 0,
    explanation: 'Type narrowing occurs when control flow analysis (e.g. `isinstance()`, `is None`) enables the type checker to deduce a more specific type within a conditional branch.',
    officialRef: 'PCET-30-01 Block 3.3 - Type Narrowing',
    tags: ['type-narrowing', 'isinstance', 'mypy']
  },
  {
    id: 'pcet-3-046',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'How does Python access type annotations at runtime?',
    codeSnippet: 'def greet(name: str) -> str:\n    return f"Hello, {name}"\n\n# Accessing annotations:\nprint(greet.__annotations__)',
    options: [
      'Through the `__annotations__` dictionary attribute attached to the function, class, or module',
      'Type annotations cannot be accessed at runtime',
      'By reading the .pyc file directly from disk',
      'Through sys.argv'
    ],
    correctAnswer: 0,
    explanation: 'Python stores annotations in the `__annotations__` dictionary on the function/class/module object. Python does not enforce them at runtime, but libraries (like Pydantic or FastAPI) read them.',
    officialRef: 'PCET-30-01 Block 3.3 - __annotations__ Attribute',
    tags: ['__annotations__', 'runtime-reflection', 'type-hints']
  },
  {
    id: 'pcet-3-047',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is `typing.Literal` used for?',
    codeSnippet: 'from typing import Literal\n\ndef open_file(mode: Literal["r", "w", "a"]) -> None:\n    ...\n\nopen_file("read")  # What does mypy do?',
    options: [
      'mypy raises a static type error because "read" is not one of the allowed literal values ("r", "w", "a")',
      'mypy allows any string',
      'Python throws a SyntaxError',
      'open_file crashes at startup'
    ],
    correctAnswer: 0,
    explanation: '`typing.Literal` restricts a type to specific exact literal values. Passing `"read"` when only `"r"`, `"w"`, or `"a"` are declared triggers a static type error in mypy.',
    officialRef: 'PCET-30-01 Block 3.3 - typing.Literal',
    tags: ['literal', 'type-hints', 'mypy']
  },
  {
    id: 'pcet-3-048',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What is `typing.Callable` used to type-hint?',
    codeSnippet: 'from typing import Callable\n\n# A callback that takes two ints and returns a bool:\nFilterFunc = Callable[[int, int], bool]',
    options: [
      'A callback function or any callable object, specifying argument types in a list and the return type',
      'A telephone communication protocol',
      'A class method that can only be called once',
      'An asynchronous generator'
    ],
    correctAnswer: 0,
    explanation: '`Callable[[Arg1Type, Arg2Type], ReturnType]` type-hints functions or callable objects. For instance, `Callable[[int, int], bool]` expects a function taking two integers and returning a boolean.',
    officialRef: 'PCET-30-01 Block 3.3 - typing.Callable',
    tags: ['callable', 'higher-order-functions', 'typing']
  },
  {
    id: 'pcet-3-049',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'What does the `--strict` flag in `mypy` enforce?',
    codeSnippet: '# Terminal command:\n$ mypy --strict my_module.py',
    options: [
      'It turns on all optional error checks, requiring complete type annotations across all functions, disallowing untyped defs, and forbidding implicit Any types',
      'It formats code using black',
      'It deletes any function with more than 10 lines of code',
      'It restricts Python execution to 1 CPU core'
    ],
    correctAnswer: 0,
    explanation: '`mypy --strict` enables maximum static rigor: it forbids untyped functions, disallows dynamic typing and implicit `Any`, and requires comprehensive type annotations across the codebase.',
    officialRef: 'PCET-30-01 Block 3.3 - mypy Strict Mode',
    tags: ['mypy', 'strict-mode', 'static-analysis']
  },
  {
    id: 'pcet-3-050',
    track: 'pcet',
    section: 'Section 3',
    chapter: '3.3',
    category: 'Type Annotations & mypy',
    difficulty: 'Intermediate',
    question: 'Why does adding static type hints improve software testability and maintainability?',
    codeSnippet: '# Clear contract:\ndef calculate_discount(price: float, rate: float) -> float:\n    return price * (1.0 - rate)',
    options: [
      'It clarifies function contracts, prevents common TypeError bugs before runtime, and allows IDEs and linters to provide rich autocomplete and static verification',
      'It completely removes the need for writing unit tests',
      'It eliminates memory usage in Python',
      'It allows Python to run in web browsers without JavaScript'
    ],
    correctAnswer: 0,
    explanation: 'Type hints provide explicit machine-verifiable contracts. They catch interface mismatches early via static analysis and improve documentation, refactoring safety, and IDE tooling.',
    officialRef: 'PCET-30-01 Block 3.3 - Value of Type Annotations',
    tags: ['type-hints', 'maintainability', 'testability']
  }
];
