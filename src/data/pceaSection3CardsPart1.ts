import { Flashcard } from '../types';

export const pceaSection3CardsPart1: Flashcard[] = [
  {
    id: "pcea-3-001",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "requests.get",
    difficulty: "Beginner",
    question: "Which method in the `requests` library is used to perform a standard HTTP GET request?",
    codeSnippet: "import requests\nresponse = requests.get('https://api.example.com/status')",
    options: [
      "requests.fetch()",
      "requests.get()",
      "requests.open()",
      "requests.pull()"
    ],
    correctAnswer: 1,
    explanation: "`requests.get(url)` sends an HTTP GET request to the specified URL and returns a `Response` object.",
    officialRef: "PCEA-30-01 Block 3.1 - HTTP Automation",
    tags: ["requests", "http-get", "rest"]
  },
  {
    id: "pcea-3-002",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Query Parameters",
    difficulty: "Beginner",
    question: "How do you pass query parameters (e.g. `?search=python&page=2`) safely using `requests`?",
    codeSnippet: "import requests\nparams = {'search': 'python', 'page': 2}\nres = requests.get('https://api.example.com/items', params=params)",
    options: [
      "params={'search': 'python', 'page': 2}",
      "query='search=python&page=2'",
      "args={'search': 'python', 'page': 2}",
      "url_params={'search': 'python', 'page': 2}"
    ],
    correctAnswer: 0,
    explanation: "Passing a dictionary to `params=` automatically URL-encodes special characters and appends them formatted cleanly to the query string.",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["requests", "params", "query-string"]
  },
  {
    id: "pcea-3-003",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Status Code Inspection",
    difficulty: "Beginner",
    question: "How do you check the numeric HTTP status code returned by a server?",
    codeSnippet: "import requests\nr = requests.get('https://httpbin.org/status/200')\nprint(r.status_code)",
    options: [
      "r.status",
      "r.status_code",
      "r.code",
      "r.http_status"
    ],
    correctAnswer: 1,
    explanation: "`response.status_code` holds the integer HTTP response code returned by the server (e.g. 200, 404, 500).",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["requests", "status-code", "http"]
  },
  {
    id: "pcea-3-004",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "raise_for_status",
    difficulty: "Intermediate",
    question: "What is the purpose of calling `response.raise_for_status()` in an automation pipeline?",
    codeSnippet: "import requests\nr = requests.get('https://api.example.com/data')\nr.raise_for_status()  # Raises HTTPError if status is 4xx or 5xx",
    options: [
      "Increases download speed",
      "Raises an HTTPError if the response status code was an error (4xx client error or 5xx server error)",
      "Validates the server's SSL certificate",
      "Converts the response to JSON"
    ],
    correctAnswer: 1,
    explanation: "`raise_for_status()` raises `requests.exceptions.HTTPError` if an unsuccessful status code (4xx or 5xx) occurred, halting failing automations early.",
    officialRef: "PCEA-30-01 Block 3.1 - Error Handling",
    tags: ["raise-for-status", "http-error", "defensive-coding"]
  },
  {
    id: "pcea-3-005",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "r.ok Attribute",
    difficulty: "Beginner",
    question: "What does the boolean property `response.ok` evaluate to in `requests`?",
    codeSnippet: "import requests\nr = requests.get('https://example.com')\nif r.ok:\n    print('Request succeeded!')",
    options: [
      "True if status_code is strictly 200",
      "True if status_code is less than 400 (i.e. 2xx success or 3xx redirect)",
      "True if server response time was under 1 second",
      "True if content is valid JSON"
    ],
    correctAnswer: 1,
    explanation: "`r.ok` is a convenience boolean property that evaluates to `True` if `status_code` is less than 400, indicating non-error responses.",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["requests", "r-ok", "status-codes"]
  },
  {
    id: "pcea-3-006",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "HTTP 429 Status",
    difficulty: "Intermediate",
    question: "What does an HTTP status code of `429` signify when interacting with an automated API?",
    codeSnippet: "# API response: HTTP 429\n# Headers: Retry-After: 60",
    options: [
      "Bad Gateway",
      "Too Many Requests (Rate limit exceeded)",
      "Unauthorized Bearer Token",
      "Payload Too Large"
    ],
    correctAnswer: 1,
    explanation: "HTTP 429 Too Many Requests indicates that the client has sent too many requests in a given time period and must throttle or pause before retrying.",
    officialRef: "PCEA-30-01 Block 3.1 - HTTP Protocols",
    tags: ["http-429", "rate-limiting", "throttling"]
  },
  {
    id: "pcea-3-007",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Setting Timeouts",
    difficulty: "Intermediate",
    question: "Why is specifying a `timeout` argument mandatory for production-grade automation scripts?",
    codeSnippet: "import requests\n# Good practice: prevent script hanging indefinitely\nr = requests.get('https://api.internal/data', timeout=10.0)",
    options: [
      "Requests without timeout hang indefinitely if the remote server drops the connection or stalls",
      "The timeout argument encrypts the payload",
      "Python refuses to compile requests calls without timeout",
      "Timeout automatically retries requests 5 times"
    ],
    correctAnswer: 0,
    explanation: "Without an explicit `timeout`, Python will block indefinitely if the server accepts the socket but never sends a response, freezing scheduled automation jobs.",
    officialRef: "PCEA-30-01 Block 3.1 - Reliability",
    tags: ["timeout", "robustness", "connection-management"]
  },
  {
    id: "pcea-3-008",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Timeout Tuple",
    difficulty: "Advanced",
    question: "What does passing a tuple `timeout=(3.05, 27)` mean in `requests`?",
    codeSnippet: "import requests\nr = requests.get('https://example.com', timeout=(3.05, 27))",
    options: [
      "Min 3.05 seconds and max 27 seconds",
      "3.05 seconds connect timeout, and 27 seconds read timeout",
      "Retry after 3.05 seconds for 27 attempts",
      "3.05 MB upload and 27 MB download limits"
    ],
    correctAnswer: 1,
    explanation: "A timeout tuple specifies `(connect_timeout, read_timeout)`: the time allowed to establish socket connection, and the time to wait for bytes from the server.",
    officialRef: "PCEA-30-01 Block 3.1 - Advanced requests",
    tags: ["timeout-tuple", "connect-timeout", "read-timeout"]
  },
  {
    id: "pcea-3-009",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Custom User-Agent",
    difficulty: "Beginner",
    question: "How do you pass a custom `User-Agent` header to identify your automation bot to web servers?",
    codeSnippet: "import requests\nheaders = {'User-Agent': 'CompanyDataSync/2.1 (contact@company.com)'}\nr = requests.get('https://example.com', headers=headers)",
    options: [
      "user_agent='...'",
      "headers={'User-Agent': '...'}",
      "agent='...'",
      "auth={'User-Agent': '...'}"
    ],
    correctAnswer: 1,
    explanation: "Passing a dictionary to `headers=` sets custom HTTP request headers, including `User-Agent`, `Accept`, and custom tracing identifiers.",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["headers", "user-agent", "http"]
  },
  {
    id: "pcea-3-010",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Text vs Content",
    difficulty: "Beginner",
    question: "What is the difference between `response.text` and `response.content` in `requests`?",
    codeSnippet: "import requests\nr = requests.get('https://example.com/logo.png')\nimg_bytes = r.content  # bytes\nhtml_str = r.text      # str",
    options: [
      "text is for Python 2, content is for Python 3",
      "text returns a decoded unicode string (str); content returns the raw bytes (bytes)",
      "text returns JSON, content returns XML",
      "content is read-only, text is mutable"
    ],
    correctAnswer: 1,
    explanation: "`r.text` decodes the payload to `str` using the response encoding (e.g. UTF-8). `r.content` provides raw un-decoded binary `bytes`, ideal for images and PDFs.",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["text-vs-content", "binary-data", "encoding"]
  },
  {
    id: "pcea-3-011",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Inspecting Redirects",
    difficulty: "Intermediate",
    question: "How can an automation script inspect the redirect history of a request (e.g. HTTP to HTTPS)?",
    codeSnippet: "import requests\nr = requests.get('http://github.com')\nfor resp in r.history:\n    print(resp.status_code, resp.url)",
    options: [
      "r.redirects",
      "r.history",
      "r.chain",
      "r.hops"
    ],
    correctAnswer: 1,
    explanation: "`response.history` is a list of Response objects representing the intermediate redirect responses tracked in chronological order.",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["redirects", "history", "http-301"]
  },
  {
    id: "pcea-3-012",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Disabling Redirects",
    difficulty: "Intermediate",
    question: "How do you instruct `requests` not to automatically follow HTTP 301 or 302 redirects?",
    codeSnippet: "import requests\nr = requests.get('http://github.com', allow_redirects=False)",
    options: [
      "follow=False",
      "allow_redirects=False",
      "redirect=False",
      "max_redirects=0"
    ],
    correctAnswer: 1,
    explanation: "`allow_redirects=False` disables automatic redirect following, allowing the script to inspect the 301/302 response and `Location` header directly.",
    officialRef: "PCEA-30-01 Block 3.1 - requests",
    tags: ["allow-redirects", "http-redirects", "headers"]
  },
  {
    id: "pcea-3-013",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Base RequestException",
    difficulty: "Intermediate",
    question: "What is the root exception class for all network and HTTP errors raised by the `requests` library?",
    codeSnippet: "import requests\ntry:\n    r = requests.get('https://unreachable-host-xyz.net', timeout=3)\nexcept requests.exceptions.RequestException as err:\n    print(f'General requests error: {err}')",
    options: [
      "requests.exceptions.RequestException",
      "requests.Error",
      "requests.NetworkFailure",
      "urllib.error.URLError"
    ],
    correctAnswer: 0,
    explanation: "`requests.exceptions.RequestException` is the base class from which all specific requests exceptions (Timeout, ConnectionError, HTTPError) inherit.",
    officialRef: "PCEA-30-01 Block 3.1 - Error Handling",
    tags: ["request-exception", "exceptions", "error-handling"]
  },
  {
    id: "pcea-3-014",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Catching ConnectionError",
    difficulty: "Intermediate",
    question: "Which specific exception is raised when DNS lookup fails or the remote server refuses the TCP connection?",
    codeSnippet: "import requests\ntry:\n    requests.get('https://invalid-nonexistent-domain.xyz')\nexcept requests.exceptions.ConnectionError:\n    print('DNS or connection failure!')",
    options: [
      "requests.exceptions.Timeout",
      "requests.exceptions.ConnectionError",
      "requests.exceptions.HTTPError",
      "requests.exceptions.DNSNotFound"
    ],
    correctAnswer: 1,
    explanation: "`requests.exceptions.ConnectionError` is raised on network-level failures like refused connections and DNS resolution failures.",
    officialRef: "PCEA-30-01 Block 3.1 - Error Handling",
    tags: ["connection-error", "dns-failure", "exceptions"]
  },
  {
    id: "pcea-3-015",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Catching Timeout",
    difficulty: "Intermediate",
    question: "Which exception specifically catches request timeouts in `requests`?",
    codeSnippet: "import requests\ntry:\n    requests.get('https://example.com', timeout=0.001)\nexcept requests.exceptions.Timeout:\n    print('Timed out!')",
    options: [
      "requests.exceptions.Timeout",
      "requests.exceptions.TimeExpired",
      "TimeoutError",
      "socket.timeout"
    ],
    correctAnswer: 0,
    explanation: "`requests.exceptions.Timeout` catches both connect timeouts and read timeouts raised during the request lifecycle.",
    officialRef: "PCEA-30-01 Block 3.1 - Error Handling",
    tags: ["timeout-exception", "exceptions", "resilience"]
  },
  {
    id: "pcea-3-016",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Response Encoding",
    difficulty: "Intermediate",
    question: "How can an automation script force `requests` to decode `r.text` using `utf-8` instead of an auto-detected guess?",
    codeSnippet: "import requests\nr = requests.get('https://example.com/data.txt')\nr.encoding = 'utf-8'\nprint(r.text)",
    options: [
      "r.set_encoding('utf-8')",
      "r.encoding = 'utf-8'",
      "r.charset = 'utf-8'",
      "r.decode('utf-8')"
    ],
    correctAnswer: 1,
    explanation: "Setting `r.encoding = 'utf-8'` overrides requests' detected encoding, ensuring `r.text` is decoded with the specified codec.",
    officialRef: "PCEA-30-01 Block 3.1 - Encoding",
    tags: ["encoding", "utf-8", "text-decoding"]
  },
  {
    id: "pcea-3-017",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "HTTP Methods Taxonomy",
    difficulty: "Beginner",
    question: "In standard REST conventions, which HTTP method is used to create a new resource on the server?",
    codeSnippet: "import requests\nr = requests.post('https://api.example.com/tickets', json={'title': 'Disk Full'})",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    correctAnswer: 1,
    explanation: "HTTP `POST` is standard for creating new resources; `PUT` or `PATCH` updates existing resources, and `DELETE` removes them.",
    officialRef: "PCEA-30-01 Block 3.1 - REST Methods",
    tags: ["http-methods", "post", "rest-architecture"]
  },
  {
    id: "pcea-3-018",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "HTTP Status 201",
    difficulty: "Beginner",
    question: "What does HTTP status code `201` indicate in an automated provisioning API?",
    codeSnippet: "# API response: HTTP 201 Created",
    options: [
      "OK (Standard successful response)",
      "Created (Resource was successfully created on server)",
      "Accepted (Processing queued asynchronously)",
      "No Content"
    ],
    correctAnswer: 1,
    explanation: "HTTP 201 Created indicates that the request succeeded and resulted in the successful creation of a new resource on the server.",
    officialRef: "PCEA-30-01 Block 3.1 - Status Codes",
    tags: ["http-201", "status-codes", "rest"]
  },
  {
    id: "pcea-3-019",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "HTTP Status 204",
    difficulty: "Beginner",
    question: "What does HTTP status code `204` indicate, commonly returned by automated DELETE requests?",
    codeSnippet: "# API response: HTTP 204 No Content",
    options: [
      "Resource was deleted, but server had an internal error",
      "No Content (Request succeeded, but server deliberately returned an empty body)",
      "Forbidden",
      "Page not found"
    ],
    correctAnswer: 1,
    explanation: "HTTP 204 No Content signifies that the action succeeded and there is no response entity body to return (typical for DELETE operations).",
    officialRef: "PCEA-30-01 Block 3.1 - Status Codes",
    tags: ["http-204", "no-content", "rest"]
  },
  {
    id: "pcea-3-020",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.1",
    category: "Inspecting Response Headers",
    difficulty: "Beginner",
    question: "How do you inspect the server's declared `Content-Type` header from a `Response` object?",
    codeSnippet: "import requests\nr = requests.get('https://api.example.com')\ncontent_type = r.headers.get('content-type')",
    options: [
      "r.content_type",
      "r.headers.get('content-type')",
      "r.meta['content-type']",
      "r.get_header('content-type')"
    ],
    correctAnswer: 1,
    explanation: "`r.headers` is a case-insensitive dictionary storing the HTTP response headers returned by the web server.",
    officialRef: "PCEA-30-01 Block 3.1 - Response Headers",
    tags: ["headers", "case-insensitive", "content-type"]
  },
  {
    id: "pcea-3-021",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "json Parameter",
    difficulty: "Beginner",
    question: "Why is passing `json={'key': 'value'}` preferred over `data=json.dumps(...)` in `requests.post()`?",
    codeSnippet: "import requests\n# Clean automation pattern:\nr = requests.post('https://api.example.com/items', json={'name': 'Server01'})",
    options: [
      "It automatically serializes the dict to JSON AND sets the Content-Type header to application/json",
      "It bypasses server authentication",
      "It encrypts the payload with TLS",
      "It makes the request 100x faster"
    ],
    correctAnswer: 0,
    explanation: "The `json=` parameter serializes the dictionary to a JSON string and automatically attaches `Content-Type: application/json`.",
    officialRef: "PCEA-30-01 Block 3.2 - REST APIs",
    tags: ["requests", "json-parameter", "post-payloads"]
  },
  {
    id: "pcea-3-022",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "r.json() Method",
    difficulty: "Beginner",
    question: "How do you decode a server's JSON response directly into a Python dictionary or list?",
    codeSnippet: "import requests\nr = requests.get('https://api.example.com/user/10')\nuser_dict = r.json()",
    options: [
      "json.load(r)",
      "r.json()",
      "r.to_dict()",
      "r.decode_json()"
    ],
    correctAnswer: 1,
    explanation: "`response.json()` parses the JSON response body directly into Python dictionaries or lists, raising a JSONDecodeError if parsing fails.",
    officialRef: "PCEA-30-01 Block 3.2 - REST APIs",
    tags: ["r-json", "json-parsing", "api-consumption"]
  },
  {
    id: "pcea-3-023",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Bearer Token Auth",
    difficulty: "Beginner",
    question: "How is a Bearer API token conventionally passed to an authenticated REST endpoint in Python?",
    codeSnippet: "import requests\ntoken = 'eyJhbGciOi...'\nheaders = {'Authorization': f'Bearer {token}'}\nr = requests.get('https://api.example.com/v1/servers', headers=headers)",
    options: [
      "params={'bearer': token}",
      "headers={'Authorization': f'Bearer {token}'}",
      "auth=('bearer', token)",
      "cookies={'token': token}"
    ],
    correctAnswer: 1,
    explanation: "Standard OAuth 2.0 and modern REST APIs expect Bearer tokens in the `Authorization: Bearer <token>` HTTP request header.",
    officialRef: "PCEA-30-01 Block 3.2 - Authentication",
    tags: ["bearer-token", "authorization", "oauth2"]
  },
  {
    id: "pcea-3-024",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Basic Authentication",
    difficulty: "Beginner",
    question: "How do you provide HTTP Basic Authentication credentials in `requests`?",
    codeSnippet: "import requests\nr = requests.get('https://api.example.com/admin', auth=('admin_user', 'secret_pass'))",
    options: [
      "auth=('username', 'password')",
      "headers={'Basic': 'username:password'}",
      "credentials={'user': 'u', 'pass': 'p'}",
      "params={'auth': 'basic'}"
    ],
    correctAnswer: 0,
    explanation: "Passing a `(username, password)` tuple to `auth=` automatically generates and sends the Base64-encoded `Authorization: Basic ...` header.",
    officialRef: "PCEA-30-01 Block 3.2 - Authentication",
    tags: ["basic-auth", "authentication", "requests"]
  },
  {
    id: "pcea-3-025",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Custom API Key Header",
    difficulty: "Beginner",
    question: "Many APIs require a custom header like `X-API-Key`. How is this supplied in `requests`?",
    codeSnippet: "import requests\nheaders = {'X-API-Key': 'abc123xyz'}\nr = requests.get('https://api.example.com/data', headers=headers)",
    options: [
      "api_key='abc123xyz'",
      "headers={'X-API-Key': 'abc123xyz'}",
      "auth={'key': 'abc123xyz'}",
      "params={'x_api_key': 'abc123xyz'}"
    ],
    correctAnswer: 1,
    explanation: "Custom authentication headers are passed directly as key-value pairs in the `headers` dictionary.",
    officialRef: "PCEA-30-01 Block 3.2 - Authentication",
    tags: ["api-key", "custom-headers", "rest"]
  },
  {
    id: "pcea-3-026",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Multipart File Upload",
    difficulty: "Intermediate",
    question: "How does an automation script upload a file (e.g. `audit.pdf`) using `requests.post()`?",
    codeSnippet: "import requests\nwith open('audit.pdf', 'rb') as f:\n    files = {'document': f}\n    r = requests.post('https://api.example.com/upload', files=files)",
    options: [
      "data={'file': 'audit.pdf'}",
      "files={'document': open('audit.pdf', 'rb')}",
      "json={'file': open('audit.pdf')}",
      "upload='audit.pdf'"
    ],
    correctAnswer: 1,
    explanation: "Passing a dictionary mapping form field names to open binary file objects in `files=` encodes a standard `multipart/form-data` request.",
    officialRef: "PCEA-30-01 Block 3.2 - File Uploads",
    tags: ["files", "multipart-upload", "post"]
  },
  {
    id: "pcea-3-027",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "HTTP PUT vs PATCH",
    difficulty: "Intermediate",
    question: "What is the conceptual difference between HTTP `PUT` and HTTP `PATCH` in RESTful automation?",
    codeSnippet: "# Updating a user record:\n# PUT replaces entire entity; PATCH updates specific attributes\nr_put = requests.put('/users/1', json={'name': 'Bob', 'role': 'Admin'})\nr_patch = requests.patch('/users/1', json={'role': 'Admin'})",
    options: [
      "PUT replaces the entire resource; PATCH applies partial modifications to specific fields",
      "PUT is read-only, PATCH is write-only",
      "PATCH is only used for binary files",
      "PUT is deprecated in HTTP 1.1"
    ],
    correctAnswer: 0,
    explanation: "In REST standards, `PUT` is idempotent and replaces the target entity completely, while `PATCH` applies partial delta updates to existing fields.",
    officialRef: "PCEA-30-01 Block 3.2 - REST Architecture",
    tags: ["put-vs-patch", "rest", "idempotency"]
  },
  {
    id: "pcea-3-028",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Handling Malformed API JSON",
    difficulty: "Intermediate",
    question: "How should an automation script protect against servers returning HTML error pages when expecting JSON?",
    codeSnippet: "import requests\nr = requests.get('https://api.example.com/data')\ntry:\n    data = r.json()\nexcept requests.exceptions.JSONDecodeError:\n    print(f'Expected JSON, but received: {r.text[:100]}')",
    options: [
      "Catch requests.exceptions.JSONDecodeError (or ValueError)",
      "Check if r.text == 'json'",
      "Call json.validate(r)",
      "Wrap in time.sleep()"
    ],
    correctAnswer: 0,
    explanation: "When gateways fail (e.g. 502 Bad Gateway), they return HTML rather than JSON. Catching `JSONDecodeError` prevents unhandled crashes.",
    officialRef: "PCEA-30-01 Block 3.2 - Error Handling",
    tags: ["json-decode-error", "defensive-coding", "api-consumption"]
  },
  {
    id: "pcea-3-029",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Webhooks",
    difficulty: "Intermediate",
    question: "What is a 'webhook' in automated workflow integration (e.g. Slack or GitHub)?",
    codeSnippet: "# Sending an automated notification to an incoming webhook URL:\nimport requests\npayload = {'text': 'Nightly ETL pipeline completed successfully.'}\nrequests.post('https://hooks.slack.com/services/...', json=payload)",
    options: [
      "A physical network cable",
      "An automated HTTP callback triggered by an event that sends real-time data to a listening URL",
      "A Python function decorator",
      "A database query optimizer"
    ],
    correctAnswer: 1,
    explanation: "Webhooks are user-defined HTTP callbacks triggered by events, enabling systems to push immediate notifications or payloads to remote endpoints.",
    officialRef: "PCEA-30-01 Block 3.2 - Webhooks",
    tags: ["webhooks", "event-driven", "notifications"]
  },
  {
    id: "pcea-3-030",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Form Data vs JSON",
    difficulty: "Intermediate",
    question: "What is the difference between passing `data=payload` and `json=payload` in `requests.post()`?",
    codeSnippet: "import requests\nd = {'user': 'alice'}\n# data sends application/x-www-form-urlencoded\n# json sends application/json",
    options: [
      "data sends form-encoded data; json sends serialized JSON with application/json header",
      "data only accepts strings; json only accepts numbers",
      "There is no difference",
      "data is for GET requests only"
    ],
    correctAnswer: 0,
    explanation: "`data=dict` encodes key-value pairs as `application/x-www-form-urlencoded` (standard HTML forms), while `json=dict` sends JSON.",
    officialRef: "PCEA-30-01 Block 3.2 - requests",
    tags: ["data-vs-json", "content-type", "post"]
  },
  {
    id: "pcea-3-031",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "HTTP 401 vs 403",
    difficulty: "Intermediate",
    question: "What is the difference between HTTP status `401 Unauthorized` and `403 Forbidden`?",
    codeSnippet: "# API response comparison:\n# 401: Authentication missing or invalid (no valid token)\n# 403: Authenticated, but user lacks permission to access resource",
    options: [
      "401 means missing/invalid credentials (unauthenticated); 403 means authenticated but not allowed (unauthorized permission)",
      "401 is server error; 403 is client error",
      "401 is permanent; 403 is temporary",
      "401 means server is offline"
    ],
    correctAnswer: 0,
    explanation: "401 Unauthorized means the request lacks valid authentication credentials. 403 Forbidden means the identity is known, but lacks required permissions.",
    officialRef: "PCEA-30-01 Block 3.2 - Status Codes",
    tags: ["http-401", "http-403", "authentication-vs-authorization"]
  },
  {
    id: "pcea-3-032",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Mocking API Calls",
    difficulty: "Advanced",
    question: "How can an automation script unit test an API client without making actual outbound network requests?",
    codeSnippet: "from unittest.mock import patch\nimport requests\n\nwith patch('requests.get') as mock_get:\n    mock_get.return_value.status_code = 200\n    mock_get.return_value.json.return_value = {'status': 'active'}\n    # Call code under test",
    options: [
      "Using unittest.mock.patch to mock requests.get",
      "Unplugging the network cable",
      "Setting timeout=0",
      "Renaming requests.py"
    ],
    correctAnswer: 0,
    explanation: "Using `unittest.mock.patch` replaces network calls with simulated test doubles, guaranteeing fast, deterministic unit test execution.",
    officialRef: "PCEA-30-01 Block 3.2 - Testing Automation",
    tags: ["mock", "unit-testing", "api-testing"]
  },
  {
    id: "pcea-3-033",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Validating Content-Type",
    difficulty: "Intermediate",
    question: "How do you verify that an API response returned JSON before calling `.json()`?",
    codeSnippet: "import requests\nr = requests.get('https://api.example.com/users')\nif 'application/json' in r.headers.get('content-type', ''):\n    data = r.json()",
    options: [
      "Check if 'application/json' is in r.headers.get('content-type', '')",
      "Inspect r.status_code == 200",
      "Call r.is_json()",
      "Check type(r.content) == dict"
    ],
    correctAnswer: 0,
    explanation: "Inspecting the `Content-Type` header confirms whether the server returned JSON prior to parsing, avoiding unexpected parsing errors on HTML or XML.",
    officialRef: "PCEA-30-01 Block 3.2 - API Consumption",
    tags: ["content-type", "validation", "headers"]
  },
  {
    id: "pcea-3-034",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "SSL Certificate Verification",
    difficulty: "Intermediate",
    question: "Why is disabling SSL verification with `verify=False` hazardous in automated network scripts?",
    codeSnippet: "import requests\n# Dangerous: requests.get('https://internal.api', verify=False)",
    options: [
      "It disables TLS certificate validation, making the connection vulnerable to Man-in-the-Middle (MitM) eavesdropping and tampering",
      "It causes requests to crash with MemoryError",
      "It slows down network transfer speed by 80%",
      "It deletes the local SSL certificates from the OS"
    ],
    correctAnswer: 0,
    explanation: "Setting `verify=False` turns off certificate trust validation, exposing sensitive credentials and tokens in transit to interception and spoofing.",
    officialRef: "PCEA-30-01 Block 3.2 - Security",
    tags: ["ssl-verification", "security", "tls"]
  },
  {
    id: "pcea-3-035",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Custom CA Bundle",
    difficulty: "Advanced",
    question: "How do you point `requests` to an enterprise internal root certificate authority bundle (`corporate-ca.crt`)?",
    codeSnippet: "import requests\nr = requests.get('https://internal.company.com', verify='/etc/ssl/corporate-ca.crt')",
    options: [
      "verify='/etc/ssl/corporate-ca.crt'",
      "ca_bundle='/etc/ssl/corporate-ca.crt'",
      "cert='/etc/ssl/corporate-ca.crt'",
      "trust='/etc/ssl/corporate-ca.crt'"
    ],
    correctAnswer: 0,
    explanation: "Passing a path string to `verify=` instructs `requests` to validate TLS certificates against that specific trusted CA bundle file.",
    officialRef: "PCEA-30-01 Block 3.2 - Security & TLS",
    tags: ["ca-bundle", "verify", "enterprise-tls"]
  },
  {
    id: "pcea-3-036",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "API Pagination with Cursor",
    difficulty: "Advanced",
    question: "In cursor-based API pagination, how does an automation script fetch all pages of records?",
    codeSnippet: "cursor = None\nall_records = []\nwhile True:\n    params = {'cursor': cursor} if cursor else {}\n    data = requests.get(url, params=params).json()\n    all_records.extend(data['items'])\n    cursor = data.get('next_cursor')\n    if not cursor:\n        break",
    options: [
      "Loop while cursor exists, passing the cursor value in the next request until null/absent",
      "Call requests.get_all(url)",
      "Set params={'all_pages': True}",
      "Send 100 requests in parallel using range(100)"
    ],
    correctAnswer: 0,
    explanation: "Cursor-based pagination loops continuously, extracting the pointer token (e.g. `next_cursor`) from the payload and supplying it in the subsequent request.",
    officialRef: "PCEA-30-01 Block 3.2 - Pagination",
    tags: ["cursor-pagination", "api-loops", "data-collection"]
  },
  {
    id: "pcea-3-037",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Querying Specific Fields",
    difficulty: "Beginner",
    question: "Given `data = {'users': [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]}`, how do you extract a list of all names?",
    codeSnippet: "names = [u['name'] for u in data['users']]",
    options: [
      "names = data['users']['name']",
      "names = [u['name'] for u in data['users']]",
      "names = list(data.values())",
      "names = data.filter('name')"
    ],
    correctAnswer: 1,
    explanation: "A list comprehension `[u['name'] for u in data['users']]` concisely transforms the nested API response into a clean list of extracted values.",
    officialRef: "PCEA-30-01 Block 3.2 - Data Transformation",
    tags: ["list-comprehension", "json-parsing", "data-extraction"]
  },
  {
    id: "pcea-3-038",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Client Side Certificate",
    difficulty: "Advanced",
    question: "How do you provide a client-side mTLS certificate and private key in `requests`?",
    codeSnippet: "import requests\nr = requests.get('https://mtls.bank.com', cert=('client.crt', 'client.key'))",
    options: [
      "cert=('client.crt', 'client.key')",
      "mtls=('client.crt', 'client.key')",
      "auth=('client.crt', 'client.key')",
      "ssl_cert=('client.crt', 'client.key')"
    ],
    correctAnswer: 0,
    explanation: "The `cert` parameter accepts a tuple `('cert_file', 'key_file')` for mutual TLS (mTLS) client authentication.",
    officialRef: "PCEA-30-01 Block 3.2 - Authentication",
    tags: ["mtls", "client-certificates", "security"]
  },
  {
    id: "pcea-3-039",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "Patching Nested JSON",
    difficulty: "Intermediate",
    question: "When updating a resource via `PATCH`, how should partial changes be structured?",
    codeSnippet: "import requests\n# Only send fields that need updating:\npayload = {'status': 'MAINTENANCE', 'active': False}\nrequests.patch('https://api.example.com/nodes/12', json=payload)",
    options: [
      "Send only the modified fields in the JSON payload",
      "Send the entire database table",
      "Send an empty JSON payload",
      "Delete the resource first then POST"
    ],
    correctAnswer: 0,
    explanation: "PATCH requests only send the attributes to be modified, preserving all other existing resource fields on the server.",
    officialRef: "PCEA-30-01 Block 3.2 - REST APIs",
    tags: ["patch", "partial-updates", "rest"]
  },
  {
    id: "pcea-3-040",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.2",
    category: "URL Encoding Parameters",
    difficulty: "Intermediate",
    question: "How does `requests` handle special characters like spaces, slashes, or ampersands in query parameters?",
    codeSnippet: "import requests\n# spaces become + or %20 automatically:\nr = requests.get('https://api.example.com/search', params={'q': 'python & automation'})",
    options: [
      "It raises a ValueError",
      "It automatically percent-encodes values (e.g. converting ' ' to '%20' and '&' to '%26')",
      "It strips out all spaces and ampersands",
      "It sends the parameters as raw binary bytes"
    ],
    correctAnswer: 1,
    explanation: "`requests` automatically formats and percent-encodes dictionary parameters according to standard URL encoding rules.",
    officialRef: "PCEA-30-01 Block 3.2 - requests",
    tags: ["url-encoding", "params", "query-strings"]
  },
  {
    id: "pcea-3-041",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "BeautifulSoup Setup",
    difficulty: "Beginner",
    question: "How do you instantiate a `BeautifulSoup` parsing object from an HTML string?",
    codeSnippet: "from bs4 import BeautifulSoup\nhtml = '<html><body><h1>Dashboard</h1></body></html>'\nsoup = BeautifulSoup(html, 'html.parser')",
    options: [
      "soup = BeautifulSoup(html, 'html.parser')",
      "soup = BeautifulSoup.parse(html)",
      "soup = HTMLParser(html)",
      "soup = bs4.from_string(html)"
    ],
    correctAnswer: 0,
    explanation: "`BeautifulSoup(html_text, 'html.parser')` parses the HTML document using Python's built-in `html.parser` engine.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["beautifulsoup", "bs4", "parsing"]
  },
  {
    id: "pcea-3-042",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "find vs find_all",
    difficulty: "Beginner",
    question: "What is the difference between `soup.find()` and `soup.find_all()`?",
    codeSnippet: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\nfirst_link = soup.find('a')\nall_links = soup.find_all('a')",
    options: [
      "find returns the first matching Tag object (or None); find_all returns a ResultSet list of all matching Tags",
      "find is case-sensitive, find_all is not",
      "find searches by ID, find_all searches by class",
      "find_all only searches the <head> element"
    ],
    correctAnswer: 0,
    explanation: "`soup.find()` stops at the first matching element and returns a `Tag` (or `None`). `soup.find_all()` scans the entire DOM and returns a list-like `ResultSet`.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["find", "find-all", "bs4"]
  },
  {
    id: "pcea-3-043",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Filtering by CSS Class",
    difficulty: "Beginner",
    question: "In `soup.find()`, why must CSS class names be matched using `class_` with an underscore?",
    codeSnippet: "from bs4 import BeautifulSoup\ntag = soup.find('div', class_='alert-box')",
    options: [
      "Because class is a reserved keyword in Python",
      "Because CSS requires underscores in HTML",
      "Because BeautifulSoup converts all classes to uppercase",
      "To differentiate between IDs and classes"
    ],
    correctAnswer: 0,
    explanation: "`class` is a reserved Python keyword used for defining classes. BeautifulSoup accepts `class_` to avoid syntax errors.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["class-filter", "python-keywords", "bs4"]
  },
  {
    id: "pcea-3-044",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "CSS Selectors (select)",
    difficulty: "Intermediate",
    question: "Which method allows querying elements using standard CSS selector syntax (e.g. `div.content > ul li`)?",
    codeSnippet: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\nitems = soup.select('div.content > ul li')",
    options: [
      "soup.query()",
      "soup.select()",
      "soup.css()",
      "soup.xpath()"
    ],
    correctAnswer: 1,
    explanation: "`soup.select(css_selector)` uses standard CSS selector syntax to return a list of all matching `Tag` elements.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["css-selectors", "select", "bs4"]
  },
  {
    id: "pcea-3-045",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "select_one",
    difficulty: "Intermediate",
    question: "What does `soup.select_one('#main-title')` return?",
    codeSnippet: "from bs4 import BeautifulSoup\ntitle = soup.select_one('#main-title')",
    options: [
      "A list of tags matching that ID",
      "The first Tag object matching the selector, or None if not found",
      "A boolean True/False",
      "The text inside the element directly"
    ],
    correctAnswer: 1,
    explanation: "`soup.select_one(selector)` returns the first element matching the CSS selector, or `None` if no match exists.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["select-one", "css-selectors", "bs4"]
  },
  {
    id: "pcea-3-046",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Extracting Text",
    difficulty: "Beginner",
    question: "How do you extract clean, whitespace-stripped text content from a BeautifulSoup `Tag`?",
    codeSnippet: "from bs4 import BeautifulSoup\ntag = soup.find('h1')\ntext = tag.get_text(strip=True)",
    options: [
      "tag.value()",
      "tag.get_text(strip=True)",
      "tag.to_string()",
      "str(tag)"
    ],
    correctAnswer: 1,
    explanation: "`tag.get_text(strip=True)` (or `tag.text.strip()`) extracts all human-readable text while stripping leading, trailing, and redundant whitespace.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["get-text", "strip", "text-extraction"]
  },
  {
    id: "pcea-3-047",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Extracting Attributes",
    difficulty: "Beginner",
    question: "How do you safely extract the `href` URL from a hyperlink tag `a`?",
    codeSnippet: "from bs4 import BeautifulSoup\nlink = soup.find('a')\nurl = link.get('href', '')",
    options: [
      "link.href",
      "link.get('href', '')",
      "link.attribute('href')",
      "link['target']"
    ],
    correctAnswer: 1,
    explanation: "`tag.get('attr', default)` accesses HTML attributes like dictionary keys safely, returning a default value if the attribute is missing.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["attributes", "href", "safe-access"]
  },
  {
    id: "pcea-3-048",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Finding by ID",
    difficulty: "Beginner",
    question: "How do you find an element with a specific ID `navbar` using `soup.find()`?",
    codeSnippet: "from bs4 import BeautifulSoup\nnav = soup.find('nav', id='navbar')",
    options: [
      "soup.find(id='navbar')",
      "soup.find_id('navbar')",
      "soup.get_element_by_id('navbar')",
      "soup.find('#navbar')"
    ],
    correctAnswer: 0,
    explanation: "`soup.find(id='navbar')` or `soup.find('tag', id='navbar')` queries by element ID.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["id-filter", "dom", "bs4"]
  },
  {
    id: "pcea-3-049",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Navigating Parent Elements",
    difficulty: "Intermediate",
    question: "How do you access the immediate parent element of a `Tag` in BeautifulSoup?",
    codeSnippet: "from bs4 import BeautifulSoup\ntag = soup.find('td')\nrow = tag.parent",
    options: [
      "tag.parent",
      "tag.get_parent()",
      "tag.ancestor",
      "tag.up()"
    ],
    correctAnswer: 0,
    explanation: "`tag.parent` returns the immediate parent `Tag` object, enabling bottom-up DOM tree navigation.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["parent", "dom-traversal", "bs4"]
  },
  {
    id: "pcea-3-050",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Navigating Siblings",
    difficulty: "Intermediate",
    question: "How do you find the next sibling tag that appears immediately after an element?",
    codeSnippet: "from bs4 import BeautifulSoup\nh2 = soup.find('h2')\np = h2.find_next_sibling('p')",
    options: [
      "h2.next()",
      "h2.find_next_sibling('p')",
      "h2.following('p')",
      "h2.sibling[0]"
    ],
    correctAnswer: 1,
    explanation: "`tag.find_next_sibling('tag')` locates the first following sibling matching the filter under the same parent.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["siblings", "find-next-sibling", "dom-traversal"]
  }
];
