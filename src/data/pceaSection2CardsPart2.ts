import { Flashcard } from '../types';

export const pceaSection2CardsPart2: Flashcard[] = [
  {
    id: "pcea-2-051",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "csv.Error",
    difficulty: "Intermediate",
    question: "Which exception class is raised when the `csv` module encounters a parsing or formatting error?",
    codeSnippet: "import csv\ntry:\n    for row in csv.reader(f):\n        pass\nexcept csv.Error as e:\n    print(f'CSV format error: {e}')",
    options: [
      "csv.ParseException",
      "csv.Error",
      "csv.FormattingError",
      "csv.BadDataError"
    ],
    correctAnswer: 1,
    explanation: "`csv.Error` is the standard exception raised by the csv module when errors occur during parsing or serialization.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-error", "exceptions", "error-handling"]
  },
  {
    id: "pcea-2-052",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Missing Fields in DictWriter",
    difficulty: "Intermediate",
    question: "If a dictionary passed to `DictWriter.writerow()` is missing one of the declared `fieldnames`, what value is written by default?",
    codeSnippet: "import csv\nw = csv.DictWriter(f, fieldnames=['id', 'name', 'role'], restval='N/A')\nw.writerow({'id': 1, 'name': 'Alice'})",
    options: [
      "An empty string '' (or the string specified by restval)",
      "It raises a KeyError immediately",
      "The string 'None'",
      "0"
    ],
    correctAnswer: 0,
    explanation: "By default, DictWriter inserts an empty string `''` for missing keys, or whatever default string is passed to `restval=`.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-dict-writer", "restval", "default-values"]
  },
  {
    id: "pcea-2-053",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Extra Fields in DictWriter",
    difficulty: "Intermediate",
    question: "What happens if a dict passed to `DictWriter.writerow()` contains a key NOT listed in `fieldnames`?",
    codeSnippet: "import csv\nw = csv.DictWriter(f, fieldnames=['id', 'name'])\nw.writerow({'id': 1, 'name': 'Alice', 'extra_data': 999})",
    options: [
      "It raises a ValueError by default",
      "It silently ignores the extra field",
      "It adds a new column to the CSV file",
      "It converts the row to JSON"
    ],
    correctAnswer: 0,
    explanation: "DictWriter raises `ValueError` if a dictionary contains keys not in fieldnames, unless `extrasaction='ignore'` is set.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-dict-writer", "extrasaction", "value-error"]
  },
  {
    id: "pcea-2-054",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Encoding in CSV",
    difficulty: "Beginner",
    question: "Why should CSV files opened for automation processing always specify `encoding='utf-8'`?",
    codeSnippet: "with open('customers.csv', 'r', encoding='utf-8') as f:\n    reader = csv.reader(f)",
    options: [
      "To avoid UnicodeDecodeError on international characters (accents, emojis) across different OS locales",
      "To allow integers to be negative",
      "Because Python cannot read ASCII files",
      "To enable automatic compression"
    ],
    correctAnswer: 0,
    explanation: "Omitting `encoding` relies on the system default (e.g. cp1252 on Windows), which will crash when encountering UTF-8 accented characters or emojis.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["encoding", "utf-8", "internationalization"]
  },
  {
    id: "pcea-2-055",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Filtering CSV Rows",
    difficulty: "Intermediate",
    question: "In an automation pipeline, how do you filter rows from `input.csv` and write only active records to `active.csv`?",
    codeSnippet: "import csv\nwith open('in.csv', 'r', encoding='utf-8') as fin, \\\n     open('active.csv', 'w', newline='', encoding='utf-8') as fout:\n    reader = csv.DictReader(fin)\n    writer = csv.DictWriter(fout, fieldnames=reader.fieldnames)\n    writer.writeheader()\n    for row in reader:\n        if row['status'] == 'ACTIVE':\n            writer.writerow(row)",
    options: [
      "Use DictReader to inspect row['status'] and conditionally call writer.writerow(row)",
      "Delete inactive rows from the hard drive with os.remove()",
      "Use csv.filter_file('in.csv', condition='status==ACTIVE')",
      "Load the CSV into Python's sys.modules"
    ],
    correctAnswer: 0,
    explanation: "Streaming with `DictReader` and conditionally writing matching rows to a new `DictWriter` is memory-efficient and handles multi-gigabyte files cleanly.",
    officialRef: "PCEA-30-01 Block 2.3 - Data Pipelines",
    tags: ["csv-pipeline", "filtering", "streaming"]
  },
  {
    id: "pcea-2-056",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Aggregating CSV Data",
    difficulty: "Intermediate",
    question: "How do you calculate the total sum of a numeric column 'amount' when reading a CSV?",
    codeSnippet: "import csv\ntotal = 0.0\nwith open('orders.csv', 'r') as f:\n    for row in csv.DictReader(f):\n        total += float(row['amount'])",
    options: [
      "total += int(row['amount'])",
      "total += float(row['amount'])",
      "total += row['amount']",
      "total = sum(csv.DictReader(f)['amount'])"
    ],
    correctAnswer: 1,
    explanation: "CSV values are read as strings; numeric fields must be explicitly cast to `float` or `int` before arithmetic addition.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv", "type-casting", "aggregation"]
  },
  {
    id: "pcea-2-057",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Handling Embedded Commas",
    difficulty: "Intermediate",
    question: "How does standard CSV handle fields that contain a comma (e.g. `'Smith, John'`)?",
    codeSnippet: "# CSV formatting: 101,\"Smith, John\",Admin",
    options: [
      "By replacing the comma with a dash",
      "By enclosing the entire field in quotation marks",
      "By raising a SyntaxError",
      "By deleting the comma silently"
    ],
    correctAnswer: 1,
    explanation: "Standard CSV encloses fields containing delimiters in quotes (`\"Smith, John\"`), which `csv.reader` correctly parses as a single value.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-quoting", "delimiters", "rfc4180"]
  },
  {
    id: "pcea-2-058",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Handling Embedded Quotes",
    difficulty: "Intermediate",
    question: "How does the standard CSV specification escape a double quote character inside a quoted field?",
    codeSnippet: "# Data: 102,\"He said \"\"Hello\"\" to me\",User",
    options: [
      "By using a backslash \\\"",
      "By doubling the quote character (\"\")",
      "By replacing it with an apostrophe",
      "By URL-encoding it as %22"
    ],
    correctAnswer: 1,
    explanation: "Per RFC 4180, double quotes inside quoted fields are escaped by doubling them (`\"\"`), automatically handled by Python's `csv` module.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-quoting", "escaping", "rfc4180"]
  },
  {
    id: "pcea-2-059",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Sniffer has_header",
    difficulty: "Intermediate",
    question: "How can an automation script check whether a CSV file contains a header row?",
    codeSnippet: "import csv\nwith open('data.csv', 'r') as f:\n    sample = f.read(1024)\n    has_header = csv.Sniffer().has_header(sample)",
    options: [
      "csv.has_header('data.csv')",
      "csv.Sniffer().has_header(sample)",
      "csv.check_header(f)",
      "f.has_columns()"
    ],
    correctAnswer: 1,
    explanation: "`csv.Sniffer().has_header(sample)` analyzes column types and string heuristics in the first two rows to determine if the first row is a header.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-sniffer", "has-header", "heuristics"]
  },
  {
    id: "pcea-2-060",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "CSV to List of Dicts",
    difficulty: "Beginner",
    question: "What is a concise way to load an entire small CSV file into a Python list of dictionaries?",
    codeSnippet: "import csv\nwith open('users.csv', 'r') as f:\n    data = list(csv.DictReader(f))",
    options: [
      "data = csv.load_dicts('users.csv')",
      "data = list(csv.DictReader(f))",
      "data = dict(csv.reader(f))",
      "data = csv.to_dict(f)"
    ],
    correctAnswer: 1,
    explanation: "`list(csv.DictReader(f))` materializes all rows as dictionaries in a standard Python list, suitable for small to medium automation data sets.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-dict-reader", "list-conversion", "recipes"]
  },
  {
    id: "pcea-2-061",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "json.dumps vs dump",
    difficulty: "Beginner",
    question: "What is the difference between `json.dumps()` and `json.dump()`?",
    codeSnippet: "import json\ndata = {'status': 'OK'}\n# dumps returns string, dump writes to a file object\ns = json.dumps(data)\nwith open('f.json', 'w') as f:\n    json.dump(data, f)",
    options: [
      "dumps is for dictionaries, dump is for lists",
      "dumps serializes a Python object to a JSON string; dump serializes directly to a writable file object",
      "dumps is deprecated in Python 3",
      "dump creates a binary file, dumps creates a text file"
    ],
    correctAnswer: 1,
    explanation: "The 's' in `dumps` stands for 'string' (returns `str`), whereas `dump` writes directly to a file-like stream object.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "dumps", "dump"]
  },
  {
    id: "pcea-2-062",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "json.loads vs load",
    difficulty: "Beginner",
    question: "What is the difference between `json.loads()` and `json.load()`?",
    codeSnippet: "import json\n# loads parses a string; load parses from a file object\nobj = json.loads('{\"port\": 80}')\nwith open('config.json') as f:\n    cfg = json.load(f)",
    options: [
      "loads is for large files, load is for small files",
      "loads parses from a JSON string; load parses from a readable file object",
      "loads returns a list, load returns a dictionary",
      "load is only available in Python 2"
    ],
    correctAnswer: 1,
    explanation: "`json.loads(str)` deserializes a JSON-formatted string, while `json.load(file)` deserializes from a readable text file stream.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "loads", "load"]
  },
  {
    id: "pcea-2-063",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Pretty Printing JSON",
    difficulty: "Beginner",
    question: "Which parameter in `json.dump()` or `json.dumps()` formats output with human-readable indentation?",
    codeSnippet: "import json\nprint(json.dumps({'a': 1, 'b': 2}, indent=4))",
    options: [
      "pretty=True",
      "indent=4",
      "format='readable'",
      "spaces=4"
    ],
    correctAnswer: 1,
    explanation: "`indent=N` formats the serialized JSON with newlines and N spaces of indentation per nesting level.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "indent", "pretty-print"]
  },
  {
    id: "pcea-2-064",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Deterministic JSON Keys",
    difficulty: "Intermediate",
    question: "Why is `sort_keys=True` valuable when writing automated configuration or cache files?",
    codeSnippet: "import json\ns = json.dumps({'b': 2, 'a': 1}, sort_keys=True)  # '{\"a\": 1, \"b\": 2}'",
    options: [
      "It produces deterministic, sorted output so diffs and hash checksums remain identical across runs",
      "It makes JSON files load 50% faster",
      "It sorts array items in ascending order",
      "It encrypts dictionary keys"
    ],
    correctAnswer: 0,
    explanation: "`sort_keys=True` guarantees identical key ordering across runs, enabling meaningful diffs and consistent cryptographic hashes for cache validation.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "sort-keys", "determinism"]
  },
  {
    id: "pcea-2-065",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Type Mapping",
    difficulty: "Beginner",
    question: "What does Python's `None` value serialize to in JSON?",
    codeSnippet: "import json\nprint(json.dumps({'result': None}))",
    options: [
      "'{\"result\": None}'",
      "'{\"result\": null}'",
      "'{\"result\": undefined}'",
      "'{\"result\": \"\"}'"
    ],
    correctAnswer: 1,
    explanation: "Python's `None` maps to JSON's native `null` literal, and JSON's `null` deserializes back to Python's `None`.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "type-mapping", "null"]
  },
  {
    id: "pcea-2-066",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Boolean Mapping",
    difficulty: "Beginner",
    question: "What do Python's `True` and `False` serialize to in JSON?",
    codeSnippet: "import json\nprint(json.dumps({'active': True, 'archived': False}))",
    options: [
      "'{\"active\": True, \"archived\": False}'",
      "'{\"active\": true, \"archived\": false}'",
      "'{\"active\": 1, \"archived\": 0}'",
      "'{\"active\": \"yes\", \"archived\": \"no\"}'"
    ],
    correctAnswer: 1,
    explanation: "Python uppercase booleans (`True`, `False`) map directly to lowercase JSON literals (`true`, `false`).",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "type-mapping", "booleans"]
  },
  {
    id: "pcea-2-067",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "JSONDecodeError",
    difficulty: "Intermediate",
    question: "Which exception is raised when `json.loads()` attempts to parse malformed JSON syntax?",
    codeSnippet: "import json\ntry:\n    json.loads('{bad_json: 123}')\nexcept json.JSONDecodeError as err:\n    print(f'JSON syntax error on line {err.lineno}')",
    options: [
      "json.SyntaxError",
      "json.JSONDecodeError",
      "ValueError only",
      "TypeError"
    ],
    correctAnswer: 1,
    explanation: "`json.JSONDecodeError` (a subclass of `ValueError`) is raised on invalid JSON syntax, exposing attributes like `lineno`, `colno`, and `pos`.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "json-decode-error", "error-handling"]
  },
  {
    id: "pcea-2-068",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Custom Type Serialization",
    difficulty: "Advanced",
    question: "What exception is raised if you try to serialize a `datetime.datetime` object with `json.dumps()` without a custom serializer?",
    codeSnippet: "import json, datetime\njson.dumps({'time': datetime.datetime.now()})",
    options: [
      "ValueError",
      "TypeError: Object of type datetime is not JSON serializable",
      "KeyError",
      "AttributeError"
    ],
    correctAnswer: 1,
    explanation: "Standard JSON only supports numbers, strings, booleans, null, lists, and dicts. Unsupported types raise `TypeError: Object of type X is not JSON serializable`.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "type-error", "serialization"]
  },
  {
    id: "pcea-2-069",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "default Parameter",
    difficulty: "Advanced",
    question: "How do you serialize `datetime` objects to ISO-8601 strings when calling `json.dumps()`?",
    codeSnippet: "import json, datetime\nnow = datetime.datetime.now()\ns = json.dumps({'time': now}, default=str)",
    options: [
      "json.dumps(..., default=str)",
      "json.dumps(..., allow_datetime=True)",
      "json.dumps(..., parse_dates=True)",
      "json.dumps(..., cast=True)"
    ],
    correctAnswer: 0,
    explanation: "The `default` parameter specifies a callable converter (like `str` or a custom function) for objects not natively serializable by JSON.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "default-converter", "datetime"]
  },
  {
    id: "pcea-2-070",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "ensure_ascii",
    difficulty: "Intermediate",
    question: "What does setting `ensure_ascii=False` do in `json.dumps()`?",
    codeSnippet: "import json\ndata = {'city': 'Montr\u00e9al', 'currency': '\u20ac'}\nprint(json.dumps(data, ensure_ascii=False))",
    options: [
      "Escapes all characters as ASCII unicode escape sequences",
      "Outputs raw UTF-8 characters directly instead of \\u escape sequences",
      "Throws an error if non-ASCII characters are present",
      "Converts characters to binary numbers"
    ],
    correctAnswer: 1,
    explanation: "By default, `ensure_ascii=True` escapes non-ASCII characters as `\\u00e9`. Setting `ensure_ascii=False` preserves raw UTF-8 characters.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "ensure-ascii", "utf-8"]
  },
  {
    id: "pcea-2-071",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "In-Place JSON Mutation",
    difficulty: "Intermediate",
    question: "How does an automation script safely update a setting in an existing JSON configuration file?",
    codeSnippet: "import json, pathlib\np = pathlib.Path('config.json')\ncfg = json.loads(p.read_text(encoding='utf-8'))\ncfg['retries'] = 5\np.write_text(json.dumps(cfg, indent=2), encoding='utf-8')",
    options: [
      "Read the file, parse to dict with json.loads, modify dict key, serialize back, and rewrite",
      "Call json.update_key('config.json', 'retries', 5)",
      "Append the new key to the end of the file",
      "Use regex to search and replace without parsing"
    ],
    correctAnswer: 0,
    explanation: "The robust pattern reads the JSON into a Python dictionary, modifies keys programmatically, and writes the re-serialized JSON back to disk.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "mutation", "config-updates"]
  },
  {
    id: "pcea-2-072",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Schema Validation",
    difficulty: "Intermediate",
    question: "How can an automation script check that a required key exists in parsed JSON data?",
    codeSnippet: "data = json.loads(raw_json)\nrequired_keys = {'host', 'port', 'user'}\nif not required_keys.issubset(data.keys()):\n    raise ValueError('Missing required configuration keys!')",
    options: [
      "Using set.issubset() or checking `if 'host' in data:`",
      "By calling json.validate_schema(data)",
      "By catching a SyntaxError",
      "JSON files automatically enforce required keys"
    ],
    correctAnswer: 0,
    explanation: "Checking key membership (`'key' in data`) or verifying that required keys form a subset of dict keys validates configuration schema early.",
    officialRef: "PCEA-30-01 Block 2.4 - Validation",
    tags: ["json", "schema-validation", "defensive-coding"]
  },
  {
    id: "pcea-2-073",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Tuple Serialization",
    difficulty: "Intermediate",
    question: "What does a Python tuple `(1, 2, 3)` serialize to and deserialize back into when passed through JSON?",
    codeSnippet: "import json\norig = (1, 2, 3)\nres = json.loads(json.dumps(orig))\nprint(type(res))",
    options: [
      "tuple",
      "list",
      "set",
      "array"
    ],
    correctAnswer: 1,
    explanation: "JSON has no native tuple type; all Python tuples serialize into JSON arrays `[1, 2, 3]` and deserialize back as Python `list` objects.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "tuples", "type-mapping"]
  },
  {
    id: "pcea-2-074",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Dictionary Key Strings",
    difficulty: "Intermediate",
    question: "If a Python dictionary has integer keys `{1: 'a', 2: 'b'}`, what happens after `json.dumps()` and `json.loads()`?",
    codeSnippet: "import json\nd = {1: 'a', 2: 'b'}\nres = json.loads(json.dumps(d))\nprint(res)",
    options: [
      "{1: 'a', 2: 'b'}",
      "{'1': 'a', '2': 'b'}",
      "Raises TypeError",
      "[('1', 'a'), ('2', 'b')]"
    ],
    correctAnswer: 1,
    explanation: "JSON object keys must always be strings. When Python serializes `{1: 'a'}`, it converts the key `1` to string `'1'`, which returns as a string upon parsing.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "dict-keys", "string-keys"]
  },
  {
    id: "pcea-2-075",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "JSON Lines (jsonl)",
    difficulty: "Advanced",
    question: "What is the JSON Lines (`.jsonl`) format frequently used in automated log and stream processing?",
    codeSnippet: "# JSONL format:\n# {\"timestamp\": 1, \"event\": \"login\"}\n# {\"timestamp\": 2, \"event\": \"logout\"}",
    options: [
      "A file where each line is a separate, valid, self-contained JSON object",
      "A JSON file compressed with LZO compression",
      "A binary encoding of JSON",
      "A JSON array formatted on one single line"
    ],
    correctAnswer: 0,
    explanation: "JSON Lines files store one valid JSON document per line, allowing massive files to be streamed and processed line-by-line without loading the entire dataset into memory.",
    officialRef: "PCEA-30-01 Block 2.4 - JSONL",
    tags: ["jsonl", "streaming", "log-processing"]
  },
  {
    id: "pcea-2-076",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Reading JSONL",
    difficulty: "Intermediate",
    question: "How do you process a `.jsonl` file line-by-line in a memory-efficient manner?",
    codeSnippet: "import json\nwith open('events.jsonl', 'r') as f:\n    for line in f:\n        record = json.loads(line.strip())\n        process(record)",
    options: [
      "Load the entire file with json.load()",
      "Iterate over lines using a for loop and call json.loads() on each line individually",
      "Use json.read_lines(f)",
      "Convert to CSV first"
    ],
    correctAnswer: 1,
    explanation: "Iterating over file lines consumes minimal memory because only one line is held in RAM at any moment, ideal for multi-gigabyte log archives.",
    officialRef: "PCEA-30-01 Block 2.4 - JSONL",
    tags: ["jsonl", "memory-efficiency", "streaming"]
  },
  {
    id: "pcea-2-077",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "compact JSON",
    difficulty: "Intermediate",
    question: "How do you produce the most compact JSON string possible (no unnecessary whitespace) for network payloads?",
    codeSnippet: "import json\npayload = json.dumps(data, separators=(',', ':'))",
    options: [
      "separators=(',', ':')",
      "compact=True",
      "whitespace=False",
      "strip=True"
    ],
    correctAnswer: 0,
    explanation: "Setting `separators=(',', ':')` eliminates trailing whitespace after commas and colons, minimizing bandwidth consumption for HTTP API payloads.",
    officialRef: "PCEA-30-01 Block 2.4 - Optimization",
    tags: ["json", "compact", "bandwidth"]
  },
  {
    id: "pcea-2-078",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Comments in JSON",
    difficulty: "Beginner",
    question: "Are comments (like `//` or `/* */`) allowed in standard JSON specifications parsed by Python's `json` module?",
    codeSnippet: "# Does json.loads('{\"key\": 1 // comment}') work?",
    options: [
      "Yes, standard JSON supports // comments",
      "No, standard JSON strictly forbids comments and will raise a json.JSONDecodeError",
      "Only /* */ multiline comments are allowed",
      "Only # comments are allowed"
    ],
    correctAnswer: 1,
    explanation: "Standard JSON specifications (RFC 8259) do not support comments; attempting to parse comments with `json.loads()` raises a `JSONDecodeError`.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "comments", "rfc8259"]
  },
  {
    id: "pcea-2-079",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Object Hook",
    difficulty: "Advanced",
    question: "How can `json.loads()` transform JSON objects into custom Python objects during deserialization?",
    codeSnippet: "import json\ndef as_server(d):\n    return Server(**d) if 'ip' in d else d\ndata = json.loads(json_str, object_hook=as_server)",
    options: [
      "object_hook=callable",
      "deserializer=callable",
      "parse_class=cls",
      "transform=callable"
    ],
    correctAnswer: 0,
    explanation: "The `object_hook` parameter receives every decoded dictionary and can return custom domain class instances instead of plain dictionaries.",
    officialRef: "PCEA-30-01 Block 2.4 - Advanced JSON",
    tags: ["json", "object-hook", "custom-deserialization"]
  },
  {
    id: "pcea-2-080",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.4",
    category: "Circular Reference",
    difficulty: "Advanced",
    question: "What exception is raised if an automation script attempts to serialize a circular self-referential dictionary?",
    codeSnippet: "import json\nd = {}\nd['self'] = d\njson.dumps(d)",
    options: [
      "ValueError: Circular reference detected",
      "MemoryError",
      "RecursionError",
      "AttributeError"
    ],
    correctAnswer: 0,
    explanation: "Python's `json.dumps()` maintains a recursion tracker and raises `ValueError: Circular reference detected` when encountering self-referential cycles.",
    officialRef: "PCEA-30-01 Block 2.4 - json module",
    tags: ["json", "circular-reference", "value-error"]
  },
  {
    id: "pcea-2-081",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.search vs re.match",
    difficulty: "Beginner",
    question: "What is the key difference between `re.search()` and `re.match()`?",
    codeSnippet: "import re\ns = 'Status: SUCCESS code=200'\nm1 = re.match(r'SUCCESS', s)   # None\nm2 = re.search(r'SUCCESS', s)  # Match object",
    options: [
      "re.match only matches from the beginning of the string, while re.search matches anywhere in the string",
      "re.search is case-insensitive by default",
      "re.match searches backwards from the end",
      "re.search returns a list of strings"
    ],
    correctAnswer: 0,
    explanation: "`re.match()` checks for a match only at the very start of the string, whereas `re.search()` scans through the entire string looking for the first location where pattern matches.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "search-vs-match", "pattern-matching"]
  },
  {
    id: "pcea-2-082",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.findall",
    difficulty: "Beginner",
    question: "What does `re.findall(r'\\d+', text)` return when scanning a log line?",
    codeSnippet: "import re\ntext = 'Errors on ports 80, 443, and 8080'\nres = re.findall(r'\\d+', text)\nprint(res)",
    options: [
      "['80', '443', '8080']",
      "[80, 443, 8080]",
      "A Match object",
      "3"
    ],
    correctAnswer: 0,
    explanation: "`re.findall()` returns all non-overlapping matches of the pattern as a list of strings.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "findall", "extraction"]
  },
  {
    id: "pcea-2-083",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Raw Strings",
    difficulty: "Beginner",
    question: "Why should regular expression patterns in Python always be declared as raw strings `r'...'`?",
    codeSnippet: "import re\npattern = r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b'",
    options: [
      "To prevent Python from interpreting backslashes as string escape sequences like \\n or \\t",
      "To make regex execute faster",
      "Because regular expressions without r'' cause SyntaxError",
      "To convert the pattern to uppercase"
    ],
    correctAnswer: 0,
    explanation: "Raw string notation (`r'...'`) treats backslashes literally, avoiding double-escaping issues when defining regex metacharacters like `\\d`, `\\w`, or `\\b`.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["raw-strings", "backslashes", "syntax"]
  },
  {
    id: "pcea-2-084",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Capturing Groups",
    difficulty: "Intermediate",
    question: "How do you extract individual captured groups from a `re.Match` object?",
    codeSnippet: "import re\nm = re.search(r'User: (\\w+) Status: (\\w+)', 'User: alice Status: active')\nuser = m.group(1)\nstatus = m.group(2)",
    options: [
      "m.group(1) and m.group(2)",
      "m.captured[0] and m.captured[1]",
      "m.sub(1) and m.sub(2)",
      "m[0] and m[1]"
    ],
    correctAnswer: 0,
    explanation: "`m.group(0)` returns the entire matched text, while `m.group(1)`, `m.group(2)`, etc., return parenthesized capture groups in order.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "capture-groups", "group"]
  },
  {
    id: "pcea-2-085",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Named Capture Groups",
    difficulty: "Intermediate",
    question: "How do you define and access a named capturing group in Python regex?",
    codeSnippet: "import re\npattern = r'(?P<ip>\\d+\\.\\d+\\.\\d+\\.\\d+):(?P<port>\\d+)'\nm = re.search(pattern, 'Connected to 192.168.1.1:8080')\nip = m.group('ip')\nport = m.group('port')",
    options: [
      "(?P<name>pattern) and m.group('name')",
      "(?name:pattern) and m['name']",
      "(:name pattern) and m.get('name')",
      "(?<name>pattern) and m.name"
    ],
    correctAnswer: 0,
    explanation: "Python uses the `(?P<name>pattern)` syntax for named groups, allowing clear attribute or string key access (`m.group('name')` or `m.groupdict()`).",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "named-groups", "groupdict"]
  },
  {
    id: "pcea-2-086",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.sub",
    difficulty: "Beginner",
    question: "How can an automation script sanitize log text by redacting all Social Security Numbers (`\\d{3}-\\d{2}-\\d{4}`)?",
    codeSnippet: "import re\nlog = 'User SSN: 123-45-6789 verified'\nclean_log = re.sub(r'\\d{3}-\\d{2}-\\d{4}', '[REDACTED]', log)",
    options: [
      "re.sub(pattern, replacement, text)",
      "re.replace(pattern, replacement, text)",
      "text.replace_regex(pattern, replacement)",
      "re.clean(pattern, text)"
    ],
    correctAnswer: 0,
    explanation: "`re.sub(pattern, repl, string)` returns a new string where all occurrences of the pattern are replaced with the replacement string.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "re-sub", "sanitization"]
  },
  {
    id: "pcea-2-087",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.compile",
    difficulty: "Intermediate",
    question: "Why should frequently used regex patterns in tight automation loops be compiled with `re.compile()`?",
    codeSnippet: "import re\npattern = re.compile(r'ERROR \\[(\\w+)\\]: (.*)')\nfor line in huge_log_file:\n    m = pattern.search(line)",
    options: [
      "Compiling pre-analyzes and saves the regex pattern into a reusable RegexObject, improving performance over repeated searches",
      "Compiled patterns run on the GPU",
      "It prevents memory leaks",
      "It converts the regex into C source code"
    ],
    correctAnswer: 0,
    explanation: "`re.compile()` caches the compiled pattern object, saving execution time when matching against thousands or millions of lines in large log files.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re-compile", "performance", "optimization"]
  },
  {
    id: "pcea-2-088",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.IGNORECASE",
    difficulty: "Beginner",
    question: "How do you perform a case-insensitive regex search in Python?",
    codeSnippet: "import re\nm = re.search(r'warning', text, re.IGNORECASE)  # or re.I",
    options: [
      "re.search(..., flag='i')",
      "re.search(..., re.IGNORECASE)",
      "re.search(..., case=False)",
      "text.lower() only"
    ],
    correctAnswer: 1,
    explanation: "Passing `re.IGNORECASE` (or `re.I`) as a flag enables case-insensitive matching across letters.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "ignorecase", "flags"]
  },
  {
    id: "pcea-2-089",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.DOTALL",
    difficulty: "Intermediate",
    question: "What is the effect of the `re.DOTALL` (or `re.S`) flag?",
    codeSnippet: "import re\ntext = 'Start\\nMiddle\\nEnd'\nm = re.search(r'Start.*End', text, re.DOTALL)",
    options: [
      "It forces dots to match literal periods only",
      "It makes the dot '.' metacharacter match any character including newline '\\n'",
      "It matches decimal numbers only",
      "It matches words separated by dots"
    ],
    correctAnswer: 1,
    explanation: "Normally, `.` matches any character except newline. Under `re.DOTALL`, `.` matches absolutely any character including newlines.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "dotall", "multiline"]
  },
  {
    id: "pcea-2-090",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.MULTILINE",
    difficulty: "Intermediate",
    question: "What does the `re.MULTILINE` (or `re.M`) flag change about `^` and `$` assertions?",
    codeSnippet: "import re\ntext = 'line 1\\nline 2\\nline 3'\nlines = re.findall(r'^line \\d', text, re.MULTILINE)",
    options: [
      "^ and $ match the start and end of EACH LINE (immediately following or preceding a newline), not just the start and end of the entire string",
      "It converts the text to a list of lines",
      "It searches files in parallel threads",
      "It ignores empty lines"
    ],
    correctAnswer: 0,
    explanation: "In MULTILINE mode, `^` matches at the beginning of the string and at the beginning of each line; `$` matches at the end of the string and the end of each line.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re", "multiline", "anchors"]
  },
  {
    id: "pcea-2-091",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Greedy vs Non-Greedy",
    difficulty: "Intermediate",
    question: "Given `text = '<div>first</div><div>second</div>'`, what does greedy `<div>.*</div>` match versus non-greedy `<div>.*?</div>`?",
    codeSnippet: "import re\ntext = '<div>first</div><div>second</div>'\ngreedy = re.findall(r'<div>.*</div>', text)\nnon_greedy = re.findall(r'<div>.*?</div>', text)",
    options: [
      "Greedy matches the entire string; non-greedy matches two separate elements ['<div>first</div>', '<div>second</div>']",
      "Both return identical results",
      "Greedy returns nothing; non-greedy matches everything",
      "Non-greedy raises a SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "Greedy matching `.*` consumes as many characters as possible up to the last `</div>`. Adding `?` makes it non-greedy (`.*?`), matching the shortest possible string.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["greedy", "non-greedy", "quantifiers"]
  },
  {
    id: "pcea-2-092",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.finditer",
    difficulty: "Intermediate",
    question: "Why is `re.finditer()` preferred over `re.findall()` when processing huge log files?",
    codeSnippet: "import re\nfor match in re.finditer(r'ERROR: (.*)', log_text):\n    print(match.start(), match.group(1))",
    options: [
      "finditer returns an iterator yielding Match objects on demand, saving memory and providing match positions (start/end)",
      "finditer searches 10 times faster",
      "finditer only works with integers",
      "finditer automatically writes results to a file"
    ],
    correctAnswer: 0,
    explanation: "`finditer()` yields `Match` objects lazily, providing index positions (`start()`, `end()`) and span information without allocating a giant list of strings.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re-finditer", "memory-efficiency", "lazy-iteration"]
  },
  {
    id: "pcea-2-093",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.split",
    difficulty: "Beginner",
    question: "How can an automation script split a string by any sequence of commas, semicolons, or whitespace?",
    codeSnippet: "import re\nitems = re.split(r'[,;\\s]+', 'apple, banana; orange   grape')",
    options: [
      "re.split(r'[,;\\s]+', text)",
      "text.split(';, ')",
      "re.tokenize(text, '[,;\\s]')",
      "re.explode(text)"
    ],
    correctAnswer: 0,
    explanation: "`re.split(pattern, string)` splits the target string wherever the regular expression pattern matches, handling irregular multi-character delimiters.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re-split", "tokenization", "text-processing"]
  },
  {
    id: "pcea-2-094",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Extracting IP Addresses",
    difficulty: "Intermediate",
    question: "Which regular expression accurately matches standard IPv4 addresses (1-3 digits separated by dots)?",
    codeSnippet: "import re\nlog = 'Failed login from 192.168.1.100 on port 22'\nm = re.search(r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b', log)",
    options: [
      "r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'",
      "r'\\d+\\.\\d+'",
      "r'[0-9]{4}\\.[0-9]{4}'",
      "r'\\w+\\.\\w+\\.\\w+\\.\\w+'"
    ],
    correctAnswer: 0,
    explanation: "`r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'` matches four octets of 1-3 digits bounded by word boundaries, ideal for automated log parsing.",
    officialRef: "PCEA-30-01 Block 2.5 - Practical Regex",
    tags: ["ip-regex", "log-parsing", "pattern-matching"]
  },
  {
    id: "pcea-2-095",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Word Boundaries",
    difficulty: "Intermediate",
    question: "What does the `\\b` anchor represent in a regular expression?",
    codeSnippet: "import re\n# Matches 'cat' in 'the cat sat', but not in 'catalog' or 'concatenate':\nm = re.findall(r'\\bcat\\b', 'cat catalog concatenate')",
    options: [
      "A backspace character",
      "A word boundary (the transition between a word character \\w and a non-word character \\W or edge of string)",
      "A binary byte",
      "The beginning of a line"
    ],
    correctAnswer: 1,
    explanation: "`\\b` asserts a zero-width word boundary, preventing partial substring matches inside larger compound words.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["word-boundary", "anchors", "zero-width"]
  },
  {
    id: "pcea-2-096",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Function Substitutions",
    difficulty: "Advanced",
    question: "In `re.sub(pattern, repl, text)`, what can `repl` be besides a replacement string?",
    codeSnippet: "import re\ndef double_num(m):\n    return str(int(m.group(0)) * 2)\nres = re.sub(r'\\d+', double_num, 'Item 5 cost 10')",
    options: [
      "A list of strings",
      "A callable function that receives the Match object and returns the replacement string",
      "A dictionary of regex flags",
      "A file handle"
    ],
    correctAnswer: 1,
    explanation: "`repl` can be a callable function that takes each `Match` object and dynamically computes its replacement string at runtime.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["re-sub", "callable-replacement", "advanced-regex"]
  },
  {
    id: "pcea-2-097",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Character Classes",
    difficulty: "Beginner",
    question: "What does the regex character class `[^0-9]` match?",
    codeSnippet: "import re\nres = re.findall(r'[^0-9]+', 'order_4829_item')",
    options: [
      "Only digits 0 through 9",
      "Any character that is NOT a digit",
      "Only the number 0 or 9",
      "The caret '^' character followed by a digit"
    ],
    correctAnswer: 1,
    explanation: "A caret `^` at the beginning of a character class `[...]` negates it, matching any character that is NOT in the specified set.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["character-class", "negation", "syntax"]
  },
  {
    id: "pcea-2-098",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Non-Capturing Groups",
    difficulty: "Intermediate",
    question: "What is the syntax for a non-capturing group that groups sub-patterns without creating a numbered match group?",
    codeSnippet: "import re\npattern = r'(?:https?|ftp)://([^/\\s]+)'",
    options: [
      "(?#pattern)",
      "(?:pattern)",
      "(?!pattern)",
      "(?Ppattern)"
    ],
    correctAnswer: 1,
    explanation: "`(?:...)` creates a non-capturing group, allowing repetition or alternation without storing the group in match results or `re.findall()` tuples.",
    officialRef: "PCEA-30-01 Block 2.5 - re module",
    tags: ["non-capturing-group", "grouping", "optimization"]
  },
  {
    id: "pcea-2-099",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "Timestamp Extraction",
    difficulty: "Intermediate",
    question: "How do you extract ISO-8601 timestamps (`2026-10-01T02:40:00`) from an automation log line?",
    codeSnippet: "import re\nlog = '2026-10-01T02:40:00Z [INFO] Service started'\nm = re.search(r'\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}', log)",
    options: [
      "re.search(r'\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}', log)",
      "re.search(r'\\w+', log)",
      "log.split('T')",
      "datetime.from_regex(log)"
    ],
    correctAnswer: 0,
    explanation: "Using `r'\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}'` isolates standard ISO formatted timestamps for chronological sorting and ingestion.",
    officialRef: "PCEA-30-01 Block 2.5 - Practical Regex",
    tags: ["iso8601", "timestamps", "log-parsing"]
  },
  {
    id: "pcea-2-100",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.5",
    category: "re.purge",
    difficulty: "Advanced",
    question: "What does `re.purge()` do in an automation worker that processes hundreds of dynamically generated regex patterns?",
    codeSnippet: "import re\nre.purge()",
    options: [
      "Erases the contents of the file being searched",
      "Clears Python's internal compiled regular expression cache to free memory",
      "Resets the CPU registers",
      "Deletes all regex modules from sys.modules"
    ],
    correctAnswer: 1,
    explanation: "`re.purge()` clears the internal cache of compiled regular expressions, useful in long-running processes that dynamically generate unique regexes.",
    officialRef: "PCEA-30-01 Block 2.5 - Memory Management",
    tags: ["re-purge", "cache-clearing", "memory-management"]
  }
];
