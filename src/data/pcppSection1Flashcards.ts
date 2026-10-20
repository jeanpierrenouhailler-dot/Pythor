import { Flashcard } from '../types';
import { pcppSection1CardsPart1 } from './pcppSection1CardsPart1';
import { pcppSection1CardsPart2 } from './pcppSection1CardsPart2';
import { pcppSection1CardsPart3 } from './pcppSection1CardsPart3';

/**
 * PCPP-32-10x SECTION 1: ADVANCED OBJECT-ORIENTED PROGRAMMING (100 Flashcards)
 * - Chapter 1.1: Advanced Classes, Instances, Class vs Static Methods & Properties (20 Cards: 1-20)
 * - Chapter 1.2: Special Dunder Methods, Custom Containers & Operator Overloading (20 Cards: 21-40)
 * - Chapter 1.3: Metaclasses, type Metaclass & Class Creation Internals (20 Cards: 41-60)
 * - Chapter 1.4: Abstract Base Classes (ABCs), @abstractmethod & Duck Typing (15 Cards: 61-75)
 * - Chapter 1.5: Multiple Inheritance, C3 Linearization, Serialization (pickle/shelve) & copy (25 Cards: 76-100)
 */
export const pcppSection1Flashcards: Flashcard[] = [
  ...pcppSection1CardsPart1,
  ...pcppSection1CardsPart2,
  ...pcppSection1CardsPart3,
];
