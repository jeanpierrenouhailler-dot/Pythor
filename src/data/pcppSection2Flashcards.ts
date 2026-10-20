import { Flashcard } from '../types';
import { pcppSection2CardsPart1 } from './pcppSection2CardsPart1';
import { pcppSection2CardsPart2 } from './pcppSection2CardsPart2';
import { pcppSection2CardsPart3 } from './pcppSection2CardsPart3';

/**
 * PCPP-32-10x SECTION 2: CODING CONVENTIONS, BEST PRACTICES AND DESIGN PATTERNS (100 Flashcards)
 * - Chapter 2.1: PEP 8 Style Guide & Code Quality Tools (20 Cards: 1-20)
 * - Chapter 2.2: PEP 20 (The Zen of Python) & PEP 257 (Docstring Conventions) (20 Cards: 21-40)
 * - Chapter 2.3: Creational Design Patterns: Singleton, Factory, Builder, Prototype (20 Cards: 41-60)
 * - Chapter 2.4: Structural Design Patterns: Adapter, Decorator, Facade, Proxy, Composite, Flyweight, Bridge (20 Cards: 61-80)
 * - Chapter 2.5: Behavioral Design Patterns: Observer, Strategy, Command, Template Method, State, Chain of Responsibility, Iterator, Visitor, Mediator, Memento (20 Cards: 81-100)
 */
export const pcppSection2Flashcards: Flashcard[] = [
  ...pcppSection2CardsPart1,
  ...pcppSection2CardsPart2,
  ...pcppSection2CardsPart3,
];
