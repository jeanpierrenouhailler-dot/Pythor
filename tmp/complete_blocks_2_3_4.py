import json
import re

def parse_cards_from_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the array content between export const ... = [ ... ];
    match = re.search(r'export const \w+: Flashcard\[\] = \[\s*([\s\S]*?)\s*\];', content)
    if not match:
        raise ValueError(f"Could not parse cards from {filepath}")
    
    raw = match.group(1).strip()
    if not raw:
        return []
    
    # We can parse the individual card objects using json by converting TS object notation to JSON
    # Or simpler: evaluate using a safe python literal parser or JS parser.
    # Let's write a robust parser for the cards array
    card_strs = re.findall(r'\{\s*id:[\s\S]*?\n  \}', raw)
    cards = []
    for c_str in card_strs:
        card = {}
        for key in ['id', 'track', 'section', 'chapter', 'category', 'difficulty', 'question', 'codeSnippet', 'options', 'correctAnswer', 'explanation', 'officialRef', 'tags']:
            # match key: value
            if key == 'options':
                m = re.search(r'options:\s*(\[[^\]]*\])', c_str)
                if m:
                    card[key] = json.loads(m.group(1))
            elif key == 'tags':
                m = re.search(r'tags:\s*(\[[^\]]*\])', c_str)
                if m:
                    card[key] = json.loads(m.group(1))
            elif key == 'correctAnswer':
                m = re.search(r'correctAnswer:\s*(\d+)', c_str)
                if m:
                    card[key] = int(m.group(1))
            else:
                m = re.search(rf'{key}:\s*("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')', c_str)
                if m:
                    val = m.group(1)
                    if val.startswith("'"):
                        # convert single quoted to double quoted
                        val = '"' + val[1:-1].replace('\\\'', "'").replace('"', '\\"') + '"'
                    card[key] = json.loads(val)
        cards.append(card)
    return cards

def format_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pcat',\n"
        f"    section: {json.dumps(c['section'])},\n"
        f"    chapter: {json.dumps(c['chapter'])},\n"
        f"    category: {json.dumps(c['category'])},\n"
        f"    difficulty: {json.dumps(c['difficulty'])},\n"
        f"    question: {json.dumps(c['question'])},\n"
        f"    codeSnippet: {json.dumps(c['codeSnippet'])},\n"
        f"    options: {json.dumps(c['options'])},\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_block(block_num, cards):
    assert len(cards) == 100, f"Block {block_num} must have 100 cards, got {len(cards)}"
    # re-index cleanly
    for idx, c in enumerate(cards, 1):
        c['id'] = f"pcat-{block_num}-{idx:03d}"
        c['track'] = 'pcat'
        c['section'] = f"Section {block_num}"
    
    part1 = cards[:50]
    part2 = cards[50:]
    
    f1 = f"src/data/pcatSection{block_num}CardsPart1.ts"
    f2 = f"src/data/pcatSection{block_num}CardsPart2.ts"
    fb = f"src/data/pcatSection{block_num}Flashcards.ts"
    
    content1 = "import { Flashcard } from '../types';\n\n" f"export const pcatSection{block_num}CardsPart1: Flashcard[] = [\n" + ",\n".join(format_card(c) for c in part1) + "\n];\n"
    content2 = "import { Flashcard } from '../types';\n\n" f"export const pcatSection{block_num}CardsPart2: Flashcard[] = [\n" + ",\n".join(format_card(c) for c in part2) + "\n];\n"
    
    with open(f1, 'w', encoding='utf-8') as f:
        f.write(content1)
    with open(f2, 'w', encoding='utf-8') as f:
        f.write(content2)
        
    barrel = (
        "import { Flashcard } from '../types';\n"
        f"import {{ pcatSection{block_num}CardsPart1 }} from './pcatSection{block_num}CardsPart1';\n"
        f"import {{ pcatSection{block_num}CardsPart2 }} from './pcatSection{block_num}CardsPart2';\n\n"
        f"export const pcatSection{block_num}Flashcards: Flashcard[] = [\n"
        f"  ...pcatSection{block_num}CardsPart1,\n"
        f"  ...pcatSection{block_num}CardsPart2,\n"
        "];\n"
    )
    with open(fb, 'w', encoding='utf-8') as f:
        f.write(barrel)
    print(f"Successfully wrote Block {block_num} (100 cards total)")

print("Helper script ready.")
