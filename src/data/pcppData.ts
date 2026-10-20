import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcppSection1Flashcards } from './pcppSection1Flashcards';
import { pcppSection2Flashcards } from './pcppSection2Flashcards';
import { pcppSection3Flashcards } from './pcppSection3Flashcards';
import { pcppSection4Flashcards } from './pcppSection4Flashcards';
import { pcppSection5Flashcards } from './pcppSection5Flashcards';

export const pcppTrackInfo: CertificationTrackInfo = {
  id: 'pcpp',
  code: 'PCPP-32-10x',
  name: 'Certified Professional in Python Programming 1',
  shortName: 'PCPP1',
  level: 'Professional',
  officialRef: 'Python Institute PCPP-32-101',
  totalSections: 5,
  durationMinutes: 65,
  questionCount: 45,
  passingScore: 70,
  description:
    'Demonstrates advanced professional-level Python 3 engineering skills: Advanced Object-Oriented Programming, Best Practices (PEP 8, PEP 20, PEP 257), GUI Programming (tkinter), Network Programming (REST, socket, requests), and File Processing (sqlite3, xml, csv, logging).',
};

export const pcppSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcpp-section-1',
    number: 1,
    title: 'Advanced Object-Oriented Programming',
    weight: '25%',
    description:
      'Deep dive into the Python object model: classes, instances, class & static methods, properties, descriptors, slots, dunders, operator overloading, container protocol, metaclasses, ABCs, multiple inheritance, C3 linearization, and object serialization (pickle, shelve, copy).',
    chapters: [
      { id: '1.1', title: 'Advanced Classes, Class vs Static Methods & Properties', cardCount: 20 },
      { id: '1.2', title: 'Special Dunder Methods, Containers & Operator Overloading', cardCount: 20 },
      { id: '1.3', title: 'Metaclasses, type Metaclass & Class Creation Internals', cardCount: 20 },
      { id: '1.4', title: 'Abstract Base Classes (ABCs), @abstractmethod & Duck Typing', cardCount: 15 },
      { id: '1.5', title: 'Multiple Inheritance, C3 MRO, Serialization & copy', cardCount: 25 },
    ],
  },
  {
    id: 'pcpp-section-2',
    number: 2,
    title: 'Coding Conventions, Best Practices and Design Patterns',
    weight: '20%',
    description:
      'Adherence to PEP 8, PEP 20 (The Zen of Python), PEP 257 (Docstring Conventions), and classic Gang of Four (GoF) design patterns: Creational (Singleton, Factory), Structural (Adapter, Decorator, Facade), and Behavioral (Observer, Command, Strategy).',
    chapters: [
      { id: '2.1', title: 'PEP 8 Style Guide & Code Quality Tools', cardCount: 20 },
      { id: '2.2', title: 'PEP 20 Zen of Python & PEP 257 Docstrings', cardCount: 20 },
      { id: '2.3', title: 'Creational Design Patterns (Singleton, Factory, Builder)', cardCount: 20 },
      { id: '2.4', title: 'Structural Design Patterns (Adapter, Decorator, Proxy)', cardCount: 20 },
      { id: '2.5', title: 'Behavioral Design Patterns (Observer, Strategy, Command)', cardCount: 20 },
    ],
  },
  {
    id: 'pcpp-section-3',
    number: 3,
    title: 'GUI Programming (Tkinter)',
    weight: '20%',
    description:
      'GUI architecture with Tkinter: mainloop, Tk window management, core widgets (Button, Entry, Label, Frame, Canvas), geometry managers (pack, grid, place), event handling (bind, callbacks), variables (StringVar, IntVar), and dialogs/menus.',
    chapters: [
      { id: '3.1', title: 'Tkinter Architecture & Window Lifecycle', cardCount: 20 },
      { id: '3.2', title: 'Core Widgets: Label, Button, Entry, Canvas, Frame', cardCount: 20 },
      { id: '3.3', title: 'Geometry Managers: pack, grid, and place', cardCount: 20 },
      { id: '3.4', title: 'Event-Driven Programming: Binding & Event Objects', cardCount: 20 },
      { id: '3.5', title: 'Variables, Menus, Dialogs & Messageboxes', cardCount: 20 },
    ],
  },
  {
    id: 'pcpp-section-4',
    number: 4,
    title: 'Network Programming',
    weight: '20%',
    description:
      'TCP/IP networking, low-level socket programming (socket creation, bind, listen, accept, send/recv), RESTful APIs, HTTP verbs and status codes, the requests library, and serialization formats (JSON processing).',
    chapters: [
      { id: '4.1', title: 'Network Fundamentals, TCP/IP & Sockets Architecture', cardCount: 20 },
      { id: '4.2', title: 'Socket Programming: Server and Client Implementation', cardCount: 20 },
      { id: '4.3', title: 'RESTful Architecture & HTTP Methods/Status Codes', cardCount: 20 },
      { id: '4.4', title: 'HTTP Requests with the requests Library', cardCount: 20 },
      { id: '4.5', title: 'JSON Data Exchange & API Serialization', cardCount: 20 },
    ],
  },
  {
    id: 'pcpp-section-5',
    number: 5,
    title: 'File Processing and Data Persistence',
    weight: '15%',
    description:
      'Working with relational databases via sqlite3 (connections, cursors, transactions, parameterized queries), XML processing with xml.etree.ElementTree, CSV data handling, and enterprise logging with the logging module.',
    chapters: [
      { id: '5.1', title: 'Relational Database Operations with sqlite3', cardCount: 20 },
      { id: '5.2', title: 'XML Processing with xml.etree.ElementTree', cardCount: 20 },
      { id: '5.3', title: 'CSV File Operations: reader, writer & DictReader', cardCount: 20 },
      { id: '5.4', title: 'Logging Architecture: loggers, handlers, formatters', cardCount: 20 },
      { id: '5.5', title: 'Configuring Log Levels & File Handlers', cardCount: 20 },
    ],
  },
];

export const pcppStarterFlashcards: Flashcard[] = [
  ...pcppSection1Flashcards,
  ...pcppSection2Flashcards,
  ...pcppSection3Flashcards,
  ...pcppSection4Flashcards,
  ...pcppSection5Flashcards,
];

export const pcppFlashcardsData = pcppStarterFlashcards;
export {
  pcppSection1Flashcards,
  pcppSection2Flashcards,
  pcppSection3Flashcards,
  pcppSection4Flashcards,
  pcppSection5Flashcards,
};
