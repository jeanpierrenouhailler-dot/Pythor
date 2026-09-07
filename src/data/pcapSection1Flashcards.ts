import { Flashcard } from '../types';

export const pcapSection1Flashcards: Flashcard[] = [
  {
    id: 'pcap-s1-fc-001',
    cardType: 'PCAP 1.1 • Modules & Packages',
    topic: 'Module import statement mechanics',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What namespace does `import math` bind in the current scope?',
    codeSnippet: `import math
print(math.pi > 3)`,
    stdoutExpected: 'True',
    explanationTitle: 'Module Namespace Binding',
    explanationText:
      '`import math` creates a single name `math` in the current namespace referencing the module object. All module attributes are accessed via `math.<attr>`.',
    complexityInfo: 'Namespace isolation',
  },
  {
    id: 'pcap-s1-fc-002',
    cardType: 'PCAP 1.1 • Modules & Packages',
    topic: 'from module import name mechanics',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How does `from math import sqrt` differ from `import math`?',
    codeSnippet: `from math import sqrt
print(sqrt(16))`,
    stdoutExpected: '4.0',
    explanationTitle: 'Selective Attribute Import',
    explanationText:
      '`from math import sqrt` binds the identifier `sqrt` directly into the current namespace. The name `math` is NOT bound in the current scope.',
    complexityInfo: 'Direct symbol binding',
  },
  {
    id: 'pcap-s1-fc-003',
    cardType: 'PCAP 1.1 • Modules & Packages',
    topic: '__name__ attribute in top-level script vs module',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the value of `__name__` when a file is executed directly as the main program?',
    codeSnippet: `if __name__ == "__main__":
    print("Main entry point")`,
    stdoutExpected: 'Main entry point',
    explanationTitle: '__name__ and __main__',
    explanationText:
      'When a Python file is run directly, Python sets its `__name__` attribute to `"__main__"`. When imported as a module, `__name__` is set to the module\'s file name without `.py`.',
    complexityInfo: 'Core module execution trigger',
  },
  {
    id: 'pcap-s1-fc-004',
    cardType: 'PCAP 1.1 • Modules & Packages',
    topic: 'sys.path search sequence',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What list of directory paths does Python search when resolving an import statement?',
    codeSnippet: `import sys
print(type(sys.path).__name__)
print(len(sys.path) > 0)`,
    stdoutExpected: `list
True`,
    explanationTitle: 'sys.path Resolution Sequence',
    explanationText:
      '`sys.path` is a list of directory strings initialized from: 1) the directory containing the input script, 2) PYTHONPATH environment variable, 3) standard library directories, and 4) site-packages.',
    complexityInfo: 'Module resolution search path',
  },
  {
    id: 'pcap-s1-fc-005',
    cardType: 'PCAP 1.2 • Packages',
    topic: '__init__.py package marker',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What special file designates a directory as a regular Python package in PCAP syllabus?',
    codeSnippet: `# Directory layout:
# my_pkg/
#   __init__.py
#   service.py
print("Directory with __init__.py is recognized as regular package")`,
    stdoutExpected: 'Directory with __init__.py is recognized as regular package',
    explanationTitle: '__init__.py Package Initialization',
    explanationText:
      'In Python (and specifically emphasized in the PCAP exam), a directory must contain an `__init__.py` file to be treated as a regular package. It executes upon package import.',
    complexityInfo: 'Package initialization marker',
  },
];
