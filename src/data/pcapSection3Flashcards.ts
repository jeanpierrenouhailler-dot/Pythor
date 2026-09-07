import { Flashcard } from '../types';

export const pcapSection3Flashcards: Flashcard[] = [
  {
    id: 'pcap-s3-fc-001',
    cardType: 'PCAP 3.1 • Generators',
    topic: 'yield keyword transforms function into generator',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What type is returned when a function containing `yield` is invoked?',
    codeSnippet: `def count_up(n):
    for i in range(n):
        yield i

g = count_up(3)
print(type(g).__name__)
print(next(g), next(g))`,
    stdoutExpected: `generator
0 1`,
    explanationTitle: 'Generator Functions',
    explanationText:
      'Any function containing `yield` returns a generator object when called. It implements the iterator protocol with lazy evaluation on each `next()` call.',
    complexityInfo: 'Iterator protocol and state suspension',
  },
  {
    id: 'pcap-s3-fc-002',
    cardType: 'PCAP 3.2 • Lambdas',
    topic: 'Anonymous lambda syntax and limitations',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What expression limit exists on Python lambda functions?',
    codeSnippet: `cube = lambda x: x ** 3
print(cube(4))`,
    stdoutExpected: '64',
    explanationTitle: 'Single-Expression Lambda Constraint',
    explanationText:
      'Python lambdas can only contain a single syntactic expression whose result is implicitly returned. Statements (such as `return`, `pass`, assignments, or loops) cannot appear in lambdas.',
    complexityInfo: 'Lambda syntactic constraint',
  },
  {
    id: 'pcap-s3-fc-003',
    cardType: 'PCAP 3.3 • Closures',
    topic: 'Enclosing scope variable capture',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is a closure in Python functions?',
    codeSnippet: `def make_multiplier(factor):
    def multiply(n):
        return n * factor
    return multiply

double = make_multiplier(2)
print(double(7))`,
    stdoutExpected: '14',
    explanationTitle: 'Function Closures',
    explanationText:
      'A closure is an inner function that retains access to variables in its enclosing lexical scope even after the outer function has finished executing.',
    complexityInfo: 'Lexical scoping rules',
  },
];
