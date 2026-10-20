import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcatSection1Flashcards } from './pcatSection1Flashcards';
import { pcatSection2Flashcards } from './pcatSection2Flashcards';
import { pcatSection3Flashcards } from './pcatSection3Flashcards';
import { pcatSection4Flashcards } from './pcatSection4Flashcards';
import { pcatSection5Flashcards } from './pcatSection5Flashcards';
import { pcatSection6Flashcards } from './pcatSection6Flashcards';

export const pcatTrackInfo: CertificationTrackInfo = {
  id: 'pcat',
  code: 'PCAT-31-0x',
  name: 'Certified Associate Tester with Python',
  shortName: 'PCAT',
  level: 'Associate-Level Software Tester',
  officialRef: 'Python Institute PCAT-31-0x',
  totalSections: 6,
  durationMinutes: 65,
  questionCount: 40,
  passingScore: 70,
  description:
    'Validates professional associate-level proficiency in creating, maintaining, and scaling automated software tests using Python. Covers software testing essentials, automation and code refactoring loops, assertions, context managers and decorators, unit testing foundations with xUnit and CLI runners, advanced unit testing techniques with fixtures, parameterization, conditional execution and mock doubles, and Test-Driven & Behavior-Driven Development (TDD/BDD) with Gherkin and Behave.',
};

export const pcatSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcat-section-1',
    number: 1,
    title: 'Software Testing Essentials',
    weight: '16.7%',
    description:
      'Core concepts of software quality, verification vs. validation, QA vs. QC, error vs. fault vs. failure, defect lifecycle and tracking, testing levels (unit, integration, system, acceptance), the 7 fundamental principles of testing, testing economics, and the Test Pyramid.',
    chapters: [
      { id: '1.1', title: 'Software Testing Concepts & Terminology', cardCount: 20 },
      { id: '1.2', title: 'Software Testing Levels', cardCount: 20 },
      { id: '1.3', title: 'Defect Lifecycle & Terminology', cardCount: 20 },
      { id: '1.4', title: 'The Seven Fundamental Principles of Testing', cardCount: 20 },
      { id: '1.5', title: 'Goal, Importance of Testing & The Test Pyramid', cardCount: 20 },
    ],
  },
  {
    id: 'pcat-section-2',
    number: 2,
    title: 'Test Automation and Code Refactoring',
    weight: '9.5%',
    description:
      'Goals and ROI of test automation, limitations and flakiness remediation, the code refactoring cycle (Red-Green-Refactor), technical debt management, the Arrange-Act-Assert (AAA) pattern, and applying DRY (with DAMP test readability) and KISS principles.',
    chapters: [
      { id: '2.1', title: 'The Goal and Importance of Test Automation', cardCount: 20 },
      { id: '2.2', title: 'The Code Refactoring Loop & Technical Debt', cardCount: 20 },
      { id: '2.3', title: 'The Arrange, Act, Assert (AAA) Pattern', cardCount: 20 },
      { id: '2.4', title: 'The DRY (Don\'t Repeat Yourself) & DAMP Principles', cardCount: 20 },
      { id: '2.5', title: 'The KISS (Keep It Simple, Stupid) Principle', cardCount: 20 },
    ],
  },
  {
    id: 'pcat-section-3',
    number: 3,
    title: 'Assertions, Context Managers, Decorators, and Python Methods',
    weight: '11.9%',
    description:
      'Python assert statement syntax, invariant verification, context managers and the with statement (__enter__/__exit__, contextlib, suppress, ExitStack, redirect_stdout), function decorators and @functools.wraps, class decorators, and Python OOP method types (@classmethod, @staticmethod, @property, and dunders).',
    chapters: [
      { id: '3.1', title: 'Python Assertions & Invariant Checking', cardCount: 20 },
      { id: '3.2', title: 'Context Managers and the with Statement', cardCount: 20 },
      { id: '3.3', title: 'Function Decorators and Metaprogramming', cardCount: 20 },
      { id: '3.4', title: 'Class Decorators and Custom Class Modifiers', cardCount: 20 },
      { id: '3.5', title: 'Python Method Types: Instance, Class, Static, and Properties', cardCount: 20 },
    ],
  },
  {
    id: 'pcat-section-4',
    number: 4,
    title: 'Foundations of Unit Testing',
    weight: '28.6%',
    description:
      'The F.I.R.S.T. principles of unit testing, the xUnit framework architecture in Python (TestCase, TestSuite, TestRunner, TestLoader, TestResult), CLI tooling and test discovery flags (-s, -p, -t, -f, -c, -b), clean project layout and naming conventions, and specialized unittest assertions.',
    chapters: [
      { id: '4.1', title: 'The F.I.R.S.T. Principles of Unit Testing', cardCount: 20 },
      { id: '4.2', title: 'The xUnit Architecture in Python', cardCount: 20 },
      { id: '4.3', title: 'CLI Tools & Test Discovery Mechanisms', cardCount: 20 },
      { id: '4.4', title: 'Project Structure and Naming Conventions', cardCount: 20 },
      { id: '4.5', title: 'Assertions in unittest.TestCase', cardCount: 20 },
    ],
  },
  {
    id: 'pcat-section-5',
    number: 5,
    title: 'Advanced Unit Testing Techniques',
    weight: '26.2%',
    description:
      'Setting up and tearing down test environments with fixtures (setUp, tearDown, setUpClass, tearDownClass, addCleanup), parameterized unit tests and subtests (self.subTest), marking tests for special conditions (@skip, @skipIf, @skipUnless, @expectedFailure), test doubles and mocking with unittest.mock (Mock, MagicMock, patch, side_effect, autospec), and exception/warning handling (assertRaises, assertWarns).',
    chapters: [
      { id: '5.1', title: 'Test Fixtures and Environment Lifecycle', cardCount: 20 },
      { id: '5.2', title: 'Parameterized Testing and SubTests', cardCount: 20 },
      { id: '5.3', title: 'Conditional Execution and Test Marking', cardCount: 20 },
      { id: '5.4', title: 'Test Doubles and Mocking with unittest.mock', cardCount: 20 },
      { id: '5.5', title: 'Exception Handling and Warning Verification', cardCount: 20 },
    ],
  },
  {
    id: 'pcat-section-6',
    number: 6,
    title: 'Test-Driven and Behavior-Driven Development',
    weight: '7.1%',
    description:
      'Core concepts and principles of Test-Driven Development (TDD cycle: Red, Green, Refactor, triangulation, emerging design), principles and foundations of Behavior-Driven Development (BDD, Dan North, ubiquitous language, 3 Amigos), Gherkin syntax (Feature, Scenario, Given, When, Then, Scenario Outline, Examples), Python BDD frameworks (behave, pytest-bdd, context, environment.py), and living documentation with ATDD.',
    chapters: [
      { id: '6.1', title: 'Fundamentals of Test-Driven Development (TDD)', cardCount: 20 },
      { id: '6.2', title: 'Principles and Foundations of Behavior-Driven Development (BDD)', cardCount: 20 },
      { id: '6.3', title: 'Gherkin Syntax and Feature Specifications', cardCount: 20 },
      { id: '6.4', title: 'Python BDD with Behave and pytest-bdd', cardCount: 20 },
      { id: '6.5', title: 'Living Documentation, Acceptance Testing (ATDD) & Best Practices', cardCount: 20 },
    ],
  },
];

export const pcatAllFlashcards: Flashcard[] = [
  ...pcatSection1Flashcards,
  ...pcatSection2Flashcards,
  ...pcatSection3Flashcards,
  ...pcatSection4Flashcards,
  ...pcatSection5Flashcards,
  ...pcatSection6Flashcards,
];
