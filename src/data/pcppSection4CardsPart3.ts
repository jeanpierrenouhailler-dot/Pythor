import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 4: NETWORK PROGRAMMING (Part 3: Cards 76 to 100)
 * - Chapter 4.4 (cont): Advanced requests Features (Cards 76 to 80)
 * - Chapter 4.5: JSON Data Exchange & API Serialization (Cards 81 to 100)
 */
export const pcppSection4CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.4 (CONT): ADVANCED REQUESTS FEATURES (Cards 76 to 80)
  // =========================================================================
  {
    id: 'pcpp-s4-fc-076',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Multipart file uploads using the files parameter',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you upload files via multipart/form-data encoding using requests?',
    codeSnippet: `import io

# Creating an in-memory byte stream for upload:
file_stream = io.BytesIO(b"PCPP Exam Study Notes Content")

# In requests:
# files = {'report': ('notes.txt', file_stream, 'text/plain')}
# r = requests.post("https://api.example.com/upload", files=files)

print("files parameter encodes as multipart/form-data automatically")`,
    stdoutExpected: 'files parameter encodes as multipart/form-data automatically',
    explanationTitle: 'Multipart File Uploads (files=)',
    explanationText:
      'Passing files=dict to requests.post() causes requests to construct a multipart/form-data payload with appropriate boundary markers. Files can be provided as open file objects or tuples (filename, file_object, content_type).',
    complexityInfo: 'PCPP 4.4 File upload encoding',
  },
  {
    id: 'pcpp-s4-fc-077',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Streaming large downloads with stream=True and iter_content()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you download a large file in chunks to avoid exhausting system RAM?',
    codeSnippet: `# Streaming pattern:
# r = requests.get("https://example.com/large.iso", stream=True)
# with open("large.iso", "wb") as f:
#     # iter_content streams chunks from socket directly to disk:
#     for chunk in r.iter_content(chunk_size=8192):
#         if chunk:
#             f.write(chunk)

print("stream=True defers downloading payload until iter_content() is called")`,
    stdoutExpected: 'stream=True defers downloading payload until iter_content() is called',
    explanationTitle: 'Streaming Responses (stream=True)',
    explanationText:
      'By default, requests downloads the entire response body immediately into memory. Setting stream=True delays downloading the body, holding the connection open so r.iter_content(chunk_size=N) or r.iter_lines() can process the incoming stream chunk by chunk.',
    complexityInfo: 'PCPP 4.4 Memory-efficient stream processing',
  },
  {
    id: 'pcpp-s4-fc-078',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'SSL certificate verification and the verify parameter',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How is SSL/TLS certificate verification controlled in requests, and what are the security implications of verify=False?',
    codeSnippet: `import requests

# verify=True: Default. Validates SSL certs against Mozilla's CA bundle (via certifi).
# verify=False: Suppresses SSL verification (insecure; raises InsecureRequestWarning).
# verify='/path/to/custom_ca.pem': Uses custom corporate CA certificate authority bundle.

print("Default SSL verify is enabled (True)")`,
    stdoutExpected: 'Default SSL verify is enabled (True)',
    explanationTitle: 'SSL Certificate Verification (verify=)',
    explanationText:
      'requests verifies SSL certificates for HTTPS requests by default (verify=True) using the certifi package. Setting verify=False bypasses TLS validation, exposing connections to man-in-the-middle attacks. A filesystem path to a custom CA certificate bundle can also be passed.',
    complexityInfo: 'PCPP 4.4 HTTPS transport security',
  },
  {
    id: 'pcpp-s4-fc-079',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Configuring network proxies via the proxies dictionary',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you route HTTP and HTTPS requests through forward proxies in requests?',
    codeSnippet: `proxy_config = {
    "http": "http://proxy.corp.internal:8080",
    "https": "http://proxy.corp.internal:8080"
}

# requests.get("https://api.example.com", proxies=proxy_config)
print("Configured proxy schemes:", list(proxy_config.keys()))`,
    stdoutExpected: "Configured proxy schemes: ['http', 'https']",
    explanationTitle: 'Proxy Configuration (proxies=)',
    explanationText:
      'The proxies dictionary maps protocol schemes ("http", "https") to proxy server URLs (which can include credentials, e.g. "http://user:pass@10.10.1.10:3128"). Proxies can be configured per request or globally across a requests.Session().',
    complexityInfo: 'PCPP 4.4 Proxy routing mechanics',
  },
  {
    id: 'pcpp-s4-fc-080',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'The requests exception hierarchy: RequestException and subclasses',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is the base class for all requests exceptions, and what are its primary subclasses?',
    codeSnippet: `import requests.exceptions as req_exc

# Exception Hierarchy:
# RequestException (Base class for all requests errors)
#  ├── HTTPError           (Raised by raise_for_status() for 4xx/5xx)
#  ├── ConnectionError     (DNS failure, refused connection, offline host)
#  ├── Timeout             (Request timed out)
#  │    ├── ConnectTimeout
#  │    └── ReadTimeout
#  ├── TooManyRedirects    (Exceeded maximum redirect limit)
#  └── URLRequired         (A valid URL was not provided)

print("HTTPError subclass:", issubclass(req_exc.HTTPError, req_exc.RequestException))
print("ConnectionError subclass:", issubclass(req_exc.ConnectionError, req_exc.RequestException))
print("Timeout subclass:", issubclass(req_exc.Timeout, req_exc.RequestException))`,
    stdoutExpected: 'HTTPError subclass: True\nConnectionError subclass: True\nTimeout subclass: True',
    explanationTitle: 'requests.exceptions.RequestException Hierarchy',
    explanationText:
      'All exceptions explicitly thrown by the requests package inherit from requests.exceptions.RequestException. Catching this base class catches any network failure, including ConnectionError, HTTPError, Timeout, and TooManyRedirects.',
    complexityInfo: 'High-frequency exam question on requests exception hierarchy',
  },

  // =========================================================================
  // CHAPTER 4.5: JSON DATA EXCHANGE & API SERIALIZATION (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcpp-s4-fc-081',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'What is JSON (RFC 8259) and its core supported primitive data types',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is JSON, and what are the only 6 primitive data types supported by the JSON specification?',
    codeSnippet: `# JSON (JavaScript Object Notation, RFC 8259):
# Text-based, language-independent, UTF-8 encoded data format.

# The 6 JSON Data Types:
# 1. Object: Key-value collection { "key": value } (keys MUST be strings)
# 2. Array: Ordered sequence of values [ 1, "two", true ]
# 3. String: Double-quoted Unicode string "hello"
# 4. Number: Integer or floating-point number (42, 3.14, 1e-4)
# 5. Boolean: true or false (lowercase!)
# 6. Null: null (represents null/empty)

types_count = 6
print(f"JSON defines exactly {types_count} data types")`,
    stdoutExpected: 'JSON defines exactly 6 data types',
    explanationTitle: 'JSON Specification & Core Types',
    explanationText:
      'JSON (RFC 8259) defines exactly 6 types: string, number, object, array, boolean, and null. Notably, JSON has no native representation for dates, complex numbers, binary bytes, sets, or tuples.',
    complexityInfo: 'PCPP 4.5 Data interchange format foundations',
  },
  {
    id: 'pcpp-s4-fc-082',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Python to JSON type conversion mapping table',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do Python built-in types map to JSON data types and vice versa during serialization and deserialization?',
    codeSnippet: `# Python Type  <--->  JSON Type
# dict         <--->  object
# list, tuple   --->  array  (Deserializes back to list ONLY!)
# str          <--->  string
# int, float   <--->  number
# True, False  <--->  true, false
# None         <--->  null

import json

data = {"flag": True, "empty": None, "coords": (10, 20)}
json_str = json.dumps(data)
print(json_str)`,
    stdoutExpected: '{"flag": true, "empty": null, "coords": [10, 20]}',
    explanationTitle: 'Python-to-JSON Type Mapping',
    explanationText:
      'Python dict maps to JSON object; list and tuple map to JSON array; str maps to string; int and float map to number; True and False map to true and false; None maps to null. Critical asymmetry: tuples serialize to arrays and deserialize back as lists, not tuples.',
    complexityInfo: 'High-frequency exam mapping question',
  },
  {
    id: 'pcpp-s4-fc-083',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Serializing Python objects to JSON string with json.dumps()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What does json.dumps() do, and what does the "s" in "dumps" stand for?',
    codeSnippet: `import json

payload = {"name": "Charlie", "active": True, "score": 88}

# dumps = "Dump String" -> Takes Python object, returns str!
json_str = json.dumps(payload)

print("Type of json_str:", type(json_str).__name__)
print("Contains lowercase true:", "true" in json_str)`,
    stdoutExpected: 'Type of json_str: str\nContains lowercase true: True',
    explanationTitle: 'json.dumps() Serialization',
    explanationText:
      'json.dumps(obj) serializes a Python object into a JSON-formatted str. The "s" in dumps stands for "string". It converts Python True/False to true/false and None to null.',
    complexityInfo: 'PCPP 4.5 String serialization API',
  },
  {
    id: 'pcpp-s4-fc-084',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Deserializing JSON string to Python objects with json.loads()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What does json.loads() do, and what does the "s" in "loads" stand for?',
    codeSnippet: `import json

json_text = '{"status": 200, "verified": true, "items": ["a", "b"]}'

# loads = "Load String" -> Takes JSON str/bytes, returns Python dict/list!
py_obj = json.loads(json_text)

print("Type of py_obj:", type(py_obj).__name__)
print("Python boolean:", py_obj["verified"] is True)
print("Items type:", type(py_obj["items"]).__name__)`,
    stdoutExpected: 'Type of py_obj: dict\nPython boolean: True\nItems type: list',
    explanationTitle: 'json.loads() Deserialization',
    explanationText:
      'json.loads(s) parses a JSON-formatted string (or bytes) and translates it into corresponding Python objects (dict, list, int, float, bool, None). The "s" indicates loading from a string.',
    complexityInfo: 'PCPP 4.5 String deserialization API',
  },
  {
    id: 'pcpp-s4-fc-085',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Writing JSON directly to a file stream: json.dump() vs. json.dumps()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How does json.dump() differ from json.dumps() in parameters and return value?',
    codeSnippet: `import json
import io

data = {"exam": "PCPP-32-10x", "section": 4}

# json.dumps(obj) -> Returns JSON string
str_result = json.dumps(data)

# json.dump(obj, fp) -> Writes directly to a file-like stream; returns None!
stream = io.StringIO()
ret = json.dump(data, stream)

print("dump returns:", ret)
print("Stream content:", stream.getvalue())`,
    stdoutExpected: 'dump returns: None\nStream content: {"exam": "PCPP-32-10x", "section": 4}',
    explanationTitle: 'json.dump() vs. json.dumps()',
    explanationText:
      'json.dumps(obj) takes an object and returns a JSON string. json.dump(obj, fp) takes an object AND a writable file-like pointer (fp), writes JSON data directly to the stream, and returns None. Mixing these up is a common syntax mistake.',
    complexityInfo: 'Exam trap: json.dump requires a file pointer as second argument',
  },
  {
    id: 'pcpp-s4-fc-086',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Reading JSON directly from a file stream: json.load() vs. json.loads()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How does json.load() differ from json.loads() in parameters and input source?',
    codeSnippet: `import json
import io

raw = '{"port": 8080, "host": "127.0.0.1"}'

# json.loads(str) -> Parses string directly
obj1 = json.loads(raw)

# json.load(fp) -> Reads from file-like object using fp.read()
stream = io.StringIO(raw)
obj2 = json.load(stream)

print("Results identical:", obj1 == obj2)`,
    stdoutExpected: 'Results identical: True',
    explanationTitle: 'json.load() vs. json.loads()',
    explanationText:
      'json.loads(s) accepts a string or bytes object containing JSON. json.load(fp) accepts a readable file-like stream object (such as open("file.json") or io.StringIO) and parses the stream content directly into Python objects.',
    complexityInfo: 'PCPP 4.5 File vs string deserialization',
  },
  {
    id: 'pcpp-s4-fc-087',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Pretty-printing JSON using the indent parameter',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you format JSON with line breaks and indentation for human readability?',
    codeSnippet: `import json

data = {"title": "PCPP", "tags": ["python", "cert"]}

# By default, indent=None produces compact single-line JSON.
# Setting indent=2 or indent=4 formats pretty-printed JSON:
pretty_json = json.dumps(data, indent=2)

print("Has newlines:", "\\n" in pretty_json)
print("First line:", pretty_json.splitlines()[0])`,
    stdoutExpected: 'Has newlines: True\nFirst line: {',
    explanationTitle: 'Formatting with indent=',
    explanationText:
      'In json.dumps() and json.dump(), setting indent=N (e.g. indent=2 or indent=4) formats output with indentation and newlines. Passing indent="\\t" uses tab characters. The default is indent=None, which outputs the most compact single-line representation.',
    complexityInfo: 'PCPP 4.5 Formatting and pretty-printing',
  },
  {
    id: 'pcpp-s4-fc-088',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Deterministic key ordering with sort_keys=True',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you ensure dictionary keys are always serialized in alphabetical order in json.dumps()?',
    codeSnippet: `import json

data = {"z": 1, "a": 2, "m": 3}

# sort_keys=True sorts dictionary keys alphabetically:
sorted_json = json.dumps(data, sort_keys=True)
print("Sorted output:", sorted_json)`,
    stdoutExpected: 'Sorted output: {"a": 2, "m": 3, "z": 1}',
    explanationTitle: 'Deterministic Output with sort_keys=True',
    explanationText:
      'Passing sort_keys=True to json.dumps() sorts dictionary keys alphabetically before serialization. This is critical when computing cryptographic hashes (SHA-256) of JSON payloads or comparing serialized representations deterministically in automated testing.',
    complexityInfo: 'PCPP 4.5 Deterministic JSON serialization',
  },
  {
    id: 'pcpp-s4-fc-089',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Minifying JSON output using the separators parameter',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you strip all unnecessary whitespace to produce the most compact possible JSON payload?',
    codeSnippet: `import json

data = {"id": 101, "valid": True}

# Default separators: (', ', ': ') with spaces after comma and colon:
default_json = json.dumps(data)
print("Default length:", len(default_json), default_json)

# Minified separators: (',', ':') with ZERO whitespace:
compact_json = json.dumps(data, separators=(",", ":"))
print("Compact length:", len(compact_json), compact_json)`,
    stdoutExpected: 'Default length: 24 {"id": 101, "valid": true}\nCompact length: 22 {"id":101,"valid":true}',
    explanationTitle: 'Minifying with separators=(",", ":")',
    explanationText:
      'The separators parameter takes a 2-tuple: (item_separator, key_separator). The default is (", ", ": "). To eliminate all extraneous whitespace for minimal network bandwidth, pass separators=(",", ":").',
    complexityInfo: 'PCPP 4.5 Payload size optimization',
  },
  {
    id: 'pcpp-s4-fc-090',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Unicode handling: ensure_ascii=True vs. ensure_ascii=False',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What happens to non-ASCII characters (like accented letters or emojis) when ensure_ascii is True versus False?',
    codeSnippet: `import json

data = {"city": "München", "symbol": "🐍"}

# Default ensure_ascii=True: Escapes non-ASCII chars using \\uXXXX escapes
escaped = json.dumps(data, ensure_ascii=True)
print("ensure_ascii=True:", escaped)

# ensure_ascii=False: Preserves raw UTF-8 Unicode characters directly
raw_utf8 = json.dumps(data, ensure_ascii=False)
print("ensure_ascii=False:", raw_utf8)`,
    stdoutExpected: 'ensure_ascii=True: {"city": "M\\u00fcnchen", "symbol": "\\ud83d\\udc0d"}\nensure_ascii=False: {"city": "München", "symbol": "🐍"}',
    explanationTitle: 'ensure_ascii in json.dumps()',
    explanationText:
      'By default, ensure_ascii=True guarantees that the output string consists entirely of 7-bit ASCII characters, escaping non-ASCII code points with \\uXXXX sequences. Setting ensure_ascii=False outputs native UTF-8 characters, making payloads more readable and compact for international text.',
    complexityInfo: 'Exam trap: ensure_ascii defaults to True',
  },
  {
    id: 'pcpp-s4-fc-091',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'JSON dictionary key constraints and automatic integer key coercion',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'CRITICAL TRAP: What happens when serializing a Python dict with integer keys, and what happens when deserializing it back?',
    codeSnippet: `import json

# Python allows integers or tuples as dictionary keys:
py_dict = {100: "hundred", 200: "two hundred"}

# JSON specification MANDATES that object keys MUST BE STRINGS!
json_str = json.dumps(py_dict)
print("Serialized JSON:", json_str)

# When deserializing back, keys REMAIN STRINGS!
recovered = json.loads(json_str)
print("Recovered keys:", list(recovered.keys()))
print("Integer key 100 present:", 100 in recovered)
print("String key '100' present:", "100" in recovered)`,
    stdoutExpected: 'Serialized JSON: {"100": "hundred", "200": "two hundred"}\nRecovered keys: [\'100\', \'200\']\nInteger key 100 present: False\nString key \'100\' present: True',
    explanationTitle: 'Dictionary Key String Coercion Trap',
    explanationText:
      'JSON specifications require that all object keys must be strings. When json.dumps() encounters integer or float keys in a Python dictionary, it silently converts them to strings ("100"). When loaded back via json.loads(), they are strings ("100"), NOT integers. Searching for d[100] raises a KeyError!',
    complexityInfo: 'Critical PCPP-32-10x exam trap: integer dict keys become strings',
  },
  {
    id: 'pcpp-s4-fc-092',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Non-serializable types and TypeError: Object is not JSON serializable',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What types in standard Python raise TypeError when passed to json.dumps() without a custom encoder?',
    codeSnippet: `import json
from datetime import datetime

# Non-serializable types by default:
# - set / frozenset
# - datetime / date / time
# - complex numbers
# - Custom class instances
# - bytes (must be decoded or base64 encoded)

try:
    json.dumps({"now": datetime.now()})
except TypeError as e:
    print("Caught expected:", type(e).__name__)`,
    stdoutExpected: 'Caught expected: TypeError',
    explanationTitle: 'Non-Serializable JSON Types',
    explanationText:
      'The standard json encoder only recognizes dict, list, tuple, str, int, float, bool, and None. Any other object (including set, datetime, complex, bytes, and custom user classes) raises TypeError: Object of type X is not JSON serializable.',
    complexityInfo: 'PCPP 4.5 Serialization limitations',
  },
  {
    id: 'pcpp-s4-fc-093',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Custom serialization using the default parameter in json.dumps()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you serialize unsupported types (like datetime or set) using the default parameter?',
    codeSnippet: `import json
from datetime import date

def custom_serializer(obj):
    if isinstance(obj, date):
        return obj.isoformat()
    if isinstance(obj, set):
        return sorted(list(obj))
    raise TypeError(f"Type {type(obj)} not serializable")

payload = {"birth": date(2020, 1, 1), "tags": {"python", "exam"}}
result = json.dumps(payload, default=custom_serializer)
print("Serialized with default:", result)`,
    stdoutExpected: 'Serialized with default: {"birth": "2020-01-01", "tags": ["exam", "python"]}',
    explanationTitle: 'json.dumps(default=callback)',
    explanationText:
      'The default parameter accepts a callable function that is invoked whenever an object cannot be serialized by the standard encoder. The function must return a serializable object (str, list, dict, int, etc.) or raise a TypeError.',
    complexityInfo: 'PCPP 4.5 Custom serialization handlers',
  },
  {
    id: 'pcpp-s4-fc-094',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Subclassing json.JSONEncoder and overriding default()',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you create an object-oriented custom JSON encoder by subclassing json.JSONEncoder?',
    codeSnippet: `import json
from datetime import datetime

class CustomEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.strftime("%Y-%m-%d %H:%M:%S")
        # Call super().default(o) for any unhandled types to raise standard TypeError:
        return super().default(o)

data = {"created": datetime(2026, 9, 18, 12, 0)}
encoded = json.dumps(data, cls=CustomEncoder)
print("Encoded via class:", encoded)`,
    stdoutExpected: 'Encoded via class: {"created": "2026-09-18 12:00:00"}',
    explanationTitle: 'Subclassing json.JSONEncoder',
    explanationText:
      'Subclassing json.JSONEncoder and overriding default(self, o) encapsulates serialization logic. For recognized custom types, return a serializable representation; for everything else, delegate to return super().default(o). Pass the class via json.dumps(obj, cls=CustomEncoder).',
    complexityInfo: 'PCPP 4.5 Object-oriented JSON encoders',
  },
  {
    id: 'pcpp-s4-fc-095',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Custom deserialization with object_hook in json.loads()',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you automatically reconstruct custom Python objects or classes from JSON using object_hook?',
    codeSnippet: `import json

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def point_decoder(d):
    # object_hook receives each decoded dictionary:
    if "__point__" in d:
        return Point(d["x"], d["y"])
    return d

json_text = '{"pt": {"__point__": true, "x": 10, "y": 25}}'
result = json.loads(json_text, object_hook=point_decoder)

pt_obj = result["pt"]
print("Decoded as Point instance:", isinstance(pt_obj, Point))
print(f"Coordinates: ({pt_obj.x}, {pt_obj.y})")`,
    stdoutExpected: 'Decoded as Point instance: True\nCoordinates: (10, 25)',
    explanationTitle: 'Custom Deserialization with object_hook',
    explanationText:
      'The object_hook parameter in json.loads() accepts a callable that is invoked with the result of every decoded JSON object (dictionary). Its return value replaces the dictionary in the resulting Python structure, enabling automatic reconstitution of custom domain classes.',
    complexityInfo: 'PCPP 4.5 Advanced deserialization hook',
  },
  {
    id: 'pcpp-s4-fc-096',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'The json.JSONDecodeError exception attributes (msg, doc, pos, lineno, colno)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception is raised when parsing malformed JSON, and what attributes does it expose for debugging?',
    codeSnippet: `import json

invalid_json = '{"name": "Alice", missing_quotes: 42}'

try:
    json.loads(invalid_json)
except json.JSONDecodeError as err:
    print("Caught:", type(err).__name__)
    print("Is ValueError:", isinstance(err, ValueError))
    print("Has lineno & colno:", hasattr(err, "lineno") and hasattr(err, "colno"))
    print("Has pos & doc:", hasattr(err, "pos") and hasattr(err, "doc"))`,
    stdoutExpected: 'Caught: JSONDecodeError\nIs ValueError: True\nHas lineno & colno: True\nHas pos & doc: True',
    explanationTitle: 'json.JSONDecodeError Attributes',
    explanationText:
      'When json.loads() fails to parse malformed JSON, it raises json.JSONDecodeError (a subclass of ValueError). It provides diagnostic attributes: err.msg (error message), err.doc (original string parsed), err.pos (character index of error), err.lineno (line number), and err.colno (column number).',
    complexityInfo: 'PCPP 4.5 JSON syntax error diagnostics',
  },
  {
    id: 'pcpp-s4-fc-097',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Number parsing hooks: parse_float and parse_int in json.loads()',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you prevent binary floating-point precision loss when parsing financial numbers from JSON?',
    codeSnippet: `import json
from decimal import Decimal

json_data = '{"amount": 19.99}'

# Standard loads converts float to standard IEEE-754 float:
standard = json.loads(json_data)

# Using parse_float=Decimal converts floating-point numbers to precise Decimals:
precise = json.loads(json_data, parse_float=Decimal)

print("Standard type:", type(standard["amount"]).__name__)
print("Precise type:", type(precise["amount"]).__name__)
print("Precise value:", precise["amount"])`,
    stdoutExpected: 'Standard type: float\nPrecise type: Decimal\nPrecise value: 19.99',
    explanationTitle: 'parse_float Hook (Decimal Precision)',
    explanationText:
      'Standard Python floats suffer from rounding errors in financial computations. json.loads() provides the parse_float callable hook (e.g. parse_float=Decimal), which instructs the JSON parser to decode all numeric float strings directly into high-precision decimal.Decimal objects.',
    complexityInfo: 'PCPP 4.5 Numeric precision preservation',
  },
  {
    id: 'pcpp-s4-fc-098',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Tuple serialization asymmetry (tuple -> array -> list)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Why does round-trip JSON serialization of a Python tuple NOT produce a tuple?',
    codeSnippet: `import json

original_tuple = (1, 2, 3)

# Serialization:
json_string = json.dumps(original_tuple)
print("JSON representation:", json_string)

# Deserialization:
deserialized = json.loads(json_string)
print("Deserialized type:", type(deserialized).__name__)
print("Tuple preserved:", type(deserialized) is tuple)`,
    stdoutExpected: 'JSON representation: [1, 2, 3]\nDeserialized type: list\nTuple preserved: False',
    explanationTitle: 'Tuple Serialization Asymmetry',
    explanationText:
      'JSON has only one sequence type: array. When a Python tuple is serialized with json.dumps(), it becomes a JSON array ("[1, 2, 3]"). When loaded back with json.loads(), arrays are always converted to Python lists. Immutability of the original tuple is lost.',
    complexityInfo: 'High-frequency exam trap on collection roundtripping',
  },
  {
    id: 'pcpp-s4-fc-099',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'Serializing Python sets into JSON arrays',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How do you serialize a Python set to JSON, and why cannot a set be directly dumped?',
    codeSnippet: `import json

my_set = {3, 1, 2}

# Direct dumps fails:
# json.dumps(my_set) -> TypeError: Object of type set is not JSON serializable

# Proper pattern: Convert set to sorted list:
json_arr = json.dumps(sorted(list(my_set)))
print("Serialized set as list:", json_arr)`,
    stdoutExpected: 'Serialized set as list: [1, 2, 3]',
    explanationTitle: 'Set Serialization via list()',
    explanationText:
      'Sets have no equivalent in JSON. Attempting json.dumps(my_set) raises a TypeError. Sets must be explicitly converted to lists (typically sorted for deterministic ordering: sorted(list(my_set))) or handled via a custom default function before JSON encoding.',
    complexityInfo: 'PCPP 4.5 Set conversion pattern',
  },
  {
    id: 'pcpp-s4-fc-100',
    track: 'pcpp',
    cardType: 'PCPP 4.5 • JSON Data Exchange',
    topic: 'End-to-end REST API JSON pipeline with error handling',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the complete, robust Python pattern for requesting a REST JSON endpoint with timeout, status checking, and error recovery?',
    codeSnippet: `import requests
import json

def fetch_resource(url):
    try:
        # 1. Execute request with explicit timeout
        response = requests.get(url, headers={"Accept": "application/json"}, timeout=5.0)
        # 2. Check for 4xx/5xx HTTP errors
        response.raise_for_status()
        # 3. Parse JSON safely
        data = response.json()
        return True, data
    except requests.exceptions.HTTPError as e:
        return False, f"HTTP Error: {e.response.status_code}"
    except (requests.exceptions.ConnectionError, requests.exceptions.Timeout):
        return False, "Network unavailable or timed out"
    except json.JSONDecodeError:
        return False, "Invalid JSON payload"

print("End-to-end robust pattern: timeout + raise_for_status + json() + specific exception catching")`,
    stdoutExpected: 'End-to-end robust pattern: timeout + raise_for_status + json() + specific exception catching',
    explanationTitle: 'Production REST JSON Client Architecture',
    explanationText:
      'A robust REST API client always specifies an explicit timeout, sets the Accept: application/json header, verifies HTTP success using response.raise_for_status(), parses JSON via response.json(), and gracefully handles HTTPError, ConnectionError, Timeout, and JSONDecodeError.',
    complexityInfo: 'Cap-stone PCPP-32-10x Section 4 architecture pattern',
  },
];
