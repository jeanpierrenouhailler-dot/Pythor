import { Flashcard } from '../types';

export const pcapSection2Flashcards: Flashcard[] = [
  {
    id: 'pcap-s2-fc-001',
    cardType: 'PCAP 2.1 • Strings',
    topic: 'String immutability in Python',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Can you modify a character in a Python string in-place?',
    codeSnippet: `s = "python"
try:
    s[0] = "P"
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Strings Are Immutable',
    explanationText:
      'Strings in Python are immutable sequences. Attempting item assignment raises `TypeError: \'str\' object does not support item assignment`.',
    complexityInfo: 'Core sequence property',
  },
  {
    id: 'pcap-s2-fc-002',
    cardType: 'PCAP 2.2 • Exceptions',
    topic: 'try-except-else-finally execution order',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '2.2',
    section: 'Section 2',
    question: 'In what order do `else` and `finally` blocks execute when no exception is raised?',
    codeSnippet: `try:
    val = 10 / 2
except ZeroDivisionError:
    print("except")
else:
    print("else")
finally:
    print("finally")`,
    stdoutExpected: `else
finally`,
    explanationTitle: 'else and finally Execution Flow',
    explanationText:
      'The `else` clause runs if and only if no exception occurred in the `try` block. The `finally` clause runs unconditionally in all cases before leaving the construct.',
    complexityInfo: 'Exception control flow',
  },
  {
    id: 'pcap-s2-fc-003',
    cardType: 'PCAP 2.3 • Containers',
    topic: 'List slicing with step',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does `nums[::-1]` produce on a list?',
    codeSnippet: `nums = [10, 20, 30, 40]
print(nums[::-1])`,
    stdoutExpected: '[40, 30, 20, 10]',
    explanationTitle: 'Negative Slice Reversal',
    explanationText:
      'A slice step of `-1` without start and stop indices reverses the sequence, producing a shallow copy in reversed order.',
    complexityInfo: 'Extended slice indexing',
  },
];
