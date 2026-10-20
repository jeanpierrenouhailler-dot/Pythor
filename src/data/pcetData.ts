import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcetSection1Flashcards } from './pcetSection1Flashcards';
import { pcetSection2Flashcards } from './pcetSection2Flashcards';
import { pcetSection3Flashcards } from './pcetSection3Flashcards';
import { pcetSection4Flashcards } from './pcetSection4Flashcards';

export const pcetTrackInfo: CertificationTrackInfo = {
  id: 'pcet',
  code: 'PCET-30-01',
  name: 'Certified Entry-Level Tester with Python',
  shortName: 'PCET',
  level: 'Entry-Level Software Tester',
  officialRef: 'Python Institute PCET-30-01',
  totalSections: 4,
  durationMinutes: 60,
  questionCount: 40,
  passingScore: 70,
  description:
    'Validates foundational proficiency in software testing principles, testing terminology, test levels and types, static and dynamic analysis, Python linters and type checking, code refactoring, test automation with pytest and unittest, mocking, code coverage, and CI/CD quality engineering pipelines.',
};

export const pcetSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcet-section-1',
    number: 1,
    title: 'Fundamentals of Software Testing & Quality Assurance',
    weight: '19.9%',
    description:
      'Core concepts of software quality, verification vs. validation, quality assurance vs. quality control, errors vs. faults/defects vs. failures, the 7 fundamental testing principles, psychology of testing and cognitive biases, the cost of quality and defect origin economics, and verification/validation across traditional Waterfall, V-Model, and Agile/DevOps lifecycles.',
    chapters: [
      { id: '1.1', title: 'Quality Concepts, Verification vs. Validation, and QA vs. QC', cardCount: 20 },
      { id: '1.2', title: 'Defect Terminology: Errors, Faults, and Failures', cardCount: 20 },
      { id: '1.3', title: 'The 7 Fundamental Principles of Software Testing', cardCount: 20 },
      { id: '1.4', title: 'Psychology of Testing, Cognitive Biases & Mindset', cardCount: 20 },
      { id: '1.5', title: 'Cost of Quality, Testing Economics & Development Lifecycles', cardCount: 20 },
    ],
  },
  {
    id: 'pcet-section-2',
    number: 2,
    title: 'Software Testing Types, Levels, and Processes',
    weight: '22.9%',
    description:
      'Testing levels (Unit, Integration, System, Acceptance / UAT, OAT, Alpha/Beta), functional vs. non-functional testing (Performance, Load, Stress, Soak, Security, Usability, Accessibility, Compatibility), change-related testing (Confirmation / Re-testing, Regression, Smoke, Sanity, Maintenance), Test Pyramid architecture, flaky test remediation, and the Fundamental Test Process artifacts (Test Plan, RTM, Test Summary Report).',
    chapters: [
      { id: '2.1', title: 'Software Testing Levels (Unit, Integration, System, Acceptance)', cardCount: 20 },
      { id: '2.2', title: 'Functional vs. Non-Functional Testing (Performance, Security, Usability)', cardCount: 20 },
      { id: '2.3', title: 'Change-Related Testing (Confirmation, Regression, Smoke, Sanity)', cardCount: 20 },
      { id: '2.4', title: 'Test Pyramid Architecture & Automation Strategies', cardCount: 20 },
      { id: '2.5', title: 'Fundamental Test Process, Artifacts & Documentation (RTM, Test Plan)', cardCount: 20 },
    ],
  },
  {
    id: 'pcet-section-3',
    number: 3,
    title: 'Static Analysis, Dynamic Testing, and Code Refactoring',
    weight: '28.6%',
    description:
      'Static testing methods (Informal, Walkthrough, Technical Review, Formal Inspection), Python standards and linters (PEP 8, flake8, pylint, black, radon, bandit AST security scanning), type hints and static type checking with mypy (Union, Optional, TypedDict, Protocol, TypeVar), code smells (God Object, Feature Envy, Primitive Obsession, Dead Code, Magic Numbers), refactoring techniques (Extract Method, Inline, Rename, Guard Clauses), and software engineering principles (DRY, KISS, YAGNI, Boy Scout, SOLID).',
    chapters: [
      { id: '3.1', title: 'Static Testing Methods, Code Reviews & Formal Inspection', cardCount: 20 },
      { id: '3.2', title: 'Python Standards & Static Analysis Tools (PEP 8, flake8, pylint, black, bandit)', cardCount: 20 },
      { id: '3.3', title: 'Type Annotations & Type Checking with mypy & typing', cardCount: 20 },
      { id: '3.4', title: 'Code Smells, Technical Debt & Safe Refactoring Techniques', cardCount: 20 },
      { id: '3.5', title: 'Software Decomposition, Clean Code & Engineering Principles (SOLID, DRY, KISS)', cardCount: 20 },
    ],
  },
  {
    id: 'pcet-section-4',
    number: 4,
    title: 'Test Automation with pytest, unittest, and CI/CD',
    weight: '28.6%',
    description:
      'The standard library unittest framework (TestCase, assertions, lifecycle setUp/tearDown, subTest, discovery), modern test authoring with pytest (plain asserts, AST rewriting, CLI flags -v/-s/-k/-x/--lf, markers skip/xfail, parametrize, pytest.raises), fixtures and conftest.py (scopes, yield teardown, autouse, tmp_path, capsys, monkeypatch), mocking with unittest.mock (Mock, MagicMock, patch, return_value, side_effect, autospec, AsyncMock), and code coverage with pytest-cov alongside CI/CD pipelines (GitHub Actions, matrix builds, JUnit XML, quality gates).',
    chapters: [
      { id: '4.1', title: 'The unittest Standard Library Framework (TestCase, Assertions, Lifecycle)', cardCount: 20 },
      { id: '4.2', title: 'Writing Modern Tests with pytest (Assertions, CLI, Markers, Parametrization)', cardCount: 20 },
      { id: '4.3', title: 'pytest Fixtures & Configuration (conftest.py, Scopes, Built-in Fixtures)', cardCount: 20 },
      { id: '4.4', title: 'Mocking, Test Doubles & Isolation (unittest.mock, patch, Spies, AsyncMock)', cardCount: 20 },
      { id: '4.5', title: 'Code Coverage, CI/CD & Test Automation Pipelines (pytest-cov, GitHub Actions)', cardCount: 20 },
    ],
  },
];

export const pcetAllFlashcards: Flashcard[] = [
  ...pcetSection1Flashcards,
  ...pcetSection2Flashcards,
  ...pcetSection3Flashcards,
  ...pcetSection4Flashcards,
];
