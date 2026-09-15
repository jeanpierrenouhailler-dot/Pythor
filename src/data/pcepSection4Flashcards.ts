import { Flashcard } from '../types';
import { pcepSection4CardsPart1 } from './pcepSection4CardsPart1';
import { pcepSection4CardsPart2 } from './pcepSection4CardsPart2';
import { pcepSection4CardsPart3 } from './pcepSection4CardsPart3';

/**
 * PCEP-30-0x SECTION 4: FUNCTIONS AND EXCEPTIONS (28% of Official PCEP Exam)
 * 100 Interactive Flashcards covering all 5 syllabus chapters:
 * - Chapter 4.1: Function Definition (def), Invocations, Arguments vs Parameters & Return Values (Cards 1-20)
 * - Chapter 4.2: Positional vs Keyword Arguments & Default Parameters (Cards 21-40)
 * - Chapter 4.3: Variable Scope: Local vs Global, the global Keyword, LEGB Rule (Cards 41-60)
 * - Chapter 4.4: Basic Exception Handling: try-except Blocks, Hierarchy & raise (Cards 61-80)
 * - Chapter 4.5: Standard Built-in Exceptions & Built-in Utilities / Type Casting (Cards 81-100)
 */
export const pcepSection4Flashcards: Flashcard[] = [
  ...pcepSection4CardsPart1,
  ...pcepSection4CardsPart2,
  ...pcepSection4CardsPart3,
];
