import { Flashcard } from '../types';
import { pcppSection3CardsPart1 } from './pcppSection3CardsPart1';
import { pcppSection3CardsPart2 } from './pcppSection3CardsPart2';
import { pcppSection3CardsPart3 } from './pcppSection3CardsPart3';

/**
 * Complete PCPP-32-10x Section 3 Flashcard Deck (100 Cards)
 * Covers Chapters 3.1 through 3.5:
 * - 3.1 Tkinter Architecture & Window Lifecycle (Cards 1-20)
 * - 3.2 Core Widgets: Label, Button, Entry, Canvas, Frame, Text, Checkbutton, Radiobutton, Listbox (Cards 21-40)
 * - 3.3 Geometry Managers: pack, grid, and place (Cards 41-60)
 * - 3.4 Event-Driven Programming: Binding & Event Sequences (Cards 61-80)
 * - 3.5 Variables, Menus, Dialogs & Messageboxes (Cards 81-100)
 */
export const pcppSection3Flashcards: Flashcard[] = [
  ...pcppSection3CardsPart1,
  ...pcppSection3CardsPart2,
  ...pcppSection3CardsPart3,
];
