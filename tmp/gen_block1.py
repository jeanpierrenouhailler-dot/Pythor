import json

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

def write_ts_file(filepath, varname, cards):
    formatted = ",\n".join(format_card(c) for c in cards)
    content = (
        "import { Flashcard } from '../types';\n\n"
        f"export const {varname}: Flashcard[] = [\n"
        f"{formatted}\n"
        "];\n"
    )
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Block 1 generator helper ready.")
