#!/usr/bin/env python3
"""
Generator for PCEA Block 3: Web, API & Network Automation (100 Cards)
Covers Chapters 3.1 - 3.5 for PCEA-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcea-3-{id_num:03d}",
        "section": "Section 3",
        "chapter": chap,
        "category": cat,
        "difficulty": diff,
        "question": q,
        "codeSnippet": snippet,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp,
        "officialRef": ref,
        "tags": tags
    })

# ==========================================
# CHAPTER 3.1: HTTP Automation with requests (Methods, Status Codes & Params) (Cards 1-20)
# ==========================================
add_c(1, "3.1", "requests.get", "Beginner",
      "Which method in the `requests` library is used to perform a standard HTTP GET request?",
      "import requests\nresponse = requests.get('https://api.example.com/status')",
      ["requests.fetch()", "requests.get()", "requests.open()", "requests.pull()"],
      1,
      "`requests.get(url)` sends an HTTP GET request to the specified URL and returns a `Response` object.",
      "PCEA-30-01 Block 3.1 - HTTP Automation",
      ["requests", "http-get", "rest"])

add_c(2, "3.1", "Query Parameters", "Beginner",
      "How do you pass query parameters (e.g. `?search=python&page=2`) safely using `requests`?",
      "import requests\nparams = {'search': 'python', 'page': 2}\nres = requests.get('https://api.example.com/items', params=params)",
      ["params={'search': 'python', 'page': 2}", "query='search=python&page=2'", "args={'search': 'python', 'page': 2}", "url_params={'search': 'python', 'page': 2}"],
      0,
      "Passing a dictionary to `params=` automatically URL-encodes special characters and appends them formatted cleanly to the query string.",
      "PCEA-30-01 Block 3.1 - requests",
      ["requests", "params", "query-string"])

add_c(3, "3.1", "Status Code Inspection", "Beginner",
      "How do you check the numeric HTTP status code returned by a server?",
      "import requests\nr = requests.get('https://httpbin.org/status/200')\nprint(r.status_code)",
      ["r.status", "r.status_code", "r.code", "r.http_status"],
      1,
      "`response.status_code` holds the integer HTTP response code returned by the server (e.g. 200, 404, 500).",
      "PCEA-30-01 Block 3.1 - requests",
      ["requests", "status-code", "http"])

add_c(4, "3.1", "raise_for_status", "Intermediate",
      "What is the purpose of calling `response.raise_for_status()` in an automation pipeline?",
      "import requests\nr = requests.get('https://api.example.com/data')\nr.raise_for_status()  # Raises HTTPError if status is 4xx or 5xx",
      ["Increases download speed", "Raises an HTTPError if the response status code was an error (4xx client error or 5xx server error)", "Validates the server's SSL certificate", "Converts the response to JSON"],
      1,
      "`raise_for_status()` raises `requests.exceptions.HTTPError` if an unsuccessful status code (4xx or 5xx) occurred, halting failing automations early.",
      "PCEA-30-01 Block 3.1 - Error Handling",
      ["raise-for-status", "http-error", "defensive-coding"])

add_c(5, "3.1", "r.ok Attribute", "Beginner",
      "What does the boolean property `response.ok` evaluate to in `requests`?",
      "import requests\nr = requests.get('https://example.com')\nif r.ok:\n    print('Request succeeded!')",
      ["True if status_code is strictly 200", "True if status_code is less than 400 (i.e. 2xx success or 3xx redirect)", "True if server response time was under 1 second", "True if content is valid JSON"],
      1,
      "`r.ok` is a convenience boolean property that evaluates to `True` if `status_code` is less than 400, indicating non-error responses.",
      "PCEA-30-01 Block 3.1 - requests",
      ["requests", "r-ok", "status-codes"])

add_c(6, "3.1", "HTTP 429 Status", "Intermediate",
      "What does an HTTP status code of `429` signify when interacting with an automated API?",
      "# API response: HTTP 429\n# Headers: Retry-After: 60",
      ["Bad Gateway", "Too Many Requests (Rate limit exceeded)", "Unauthorized Bearer Token", "Payload Too Large"],
      1,
      "HTTP 429 Too Many Requests indicates that the client has sent too many requests in a given time period and must throttle or pause before retrying.",
      "PCEA-30-01 Block 3.1 - HTTP Protocols",
      ["http-429", "rate-limiting", "throttling"])

add_c(7, "3.1", "Setting Timeouts", "Intermediate",
      "Why is specifying a `timeout` argument mandatory for production-grade automation scripts?",
      "import requests\n# Good practice: prevent script hanging indefinitely\nr = requests.get('https://api.internal/data', timeout=10.0)",
      ["Requests without timeout hang indefinitely if the remote server drops the connection or stalls", "The timeout argument encrypts the payload", "Python refuses to compile requests calls without timeout", "Timeout automatically retries requests 5 times"],
      0,
      "Without an explicit `timeout`, Python will block indefinitely if the server accepts the socket but never sends a response, freezing scheduled automation jobs.",
      "PCEA-30-01 Block 3.1 - Reliability",
      ["timeout", "robustness", "connection-management"])

add_c(8, "3.1", "Timeout Tuple", "Advanced",
      "What does passing a tuple `timeout=(3.05, 27)` mean in `requests`?",
      "import requests\nr = requests.get('https://example.com', timeout=(3.05, 27))",
      ["Min 3.05 seconds and max 27 seconds", "3.05 seconds connect timeout, and 27 seconds read timeout", "Retry after 3.05 seconds for 27 attempts", "3.05 MB upload and 27 MB download limits"],
      1,
      "A timeout tuple specifies `(connect_timeout, read_timeout)`: the time allowed to establish socket connection, and the time to wait for bytes from the server.",
      "PCEA-30-01 Block 3.1 - Advanced requests",
      ["timeout-tuple", "connect-timeout", "read-timeout"])

add_c(9, "3.1", "Custom User-Agent", "Beginner",
      "How do you pass a custom `User-Agent` header to identify your automation bot to web servers?",
      "import requests\nheaders = {'User-Agent': 'CompanyDataSync/2.1 (contact@company.com)'}\nr = requests.get('https://example.com', headers=headers)",
      ["user_agent='...'", "headers={'User-Agent': '...'}", "agent='...'", "auth={'User-Agent': '...'}"],
      1,
      "Passing a dictionary to `headers=` sets custom HTTP request headers, including `User-Agent`, `Accept`, and custom tracing identifiers.",
      "PCEA-30-01 Block 3.1 - requests",
      ["headers", "user-agent", "http"])

add_c(10, "3.1", "Text vs Content", "Beginner",
      "What is the difference between `response.text` and `response.content` in `requests`?",
      "import requests\nr = requests.get('https://example.com/logo.png')\nimg_bytes = r.content  # bytes\nhtml_str = r.text      # str",
      ["text is for Python 2, content is for Python 3", "text returns a decoded unicode string (str); content returns the raw bytes (bytes)", "text returns JSON, content returns XML", "content is read-only, text is mutable"],
      1,
      "`r.text` decodes the payload to `str` using the response encoding (e.g. UTF-8). `r.content` provides raw un-decoded binary `bytes`, ideal for images and PDFs.",
      "PCEA-30-01 Block 3.1 - requests",
      ["text-vs-content", "binary-data", "encoding"])

add_c(11, "3.1", "Inspecting Redirects", "Intermediate",
      "How can an automation script inspect the redirect history of a request (e.g. HTTP to HTTPS)?",
      "import requests\nr = requests.get('http://github.com')\nfor resp in r.history:\n    print(resp.status_code, resp.url)",
      ["r.redirects", "r.history", "r.chain", "r.hops"],
      1,
      "`response.history` is a list of Response objects representing the intermediate redirect responses tracked in chronological order.",
      "PCEA-30-01 Block 3.1 - requests",
      ["redirects", "history", "http-301"])

add_c(12, "3.1", "Disabling Redirects", "Intermediate",
      "How do you instruct `requests` not to automatically follow HTTP 301 or 302 redirects?",
      "import requests\nr = requests.get('http://github.com', allow_redirects=False)",
      ["follow=False", "allow_redirects=False", "redirect=False", "max_redirects=0"],
      1,
      "`allow_redirects=False` disables automatic redirect following, allowing the script to inspect the 301/302 response and `Location` header directly.",
      "PCEA-30-01 Block 3.1 - requests",
      ["allow-redirects", "http-redirects", "headers"])

add_c(13, "3.1", "Base RequestException", "Intermediate",
      "What is the root exception class for all network and HTTP errors raised by the `requests` library?",
      "import requests\ntry:\n    r = requests.get('https://unreachable-host-xyz.net', timeout=3)\nexcept requests.exceptions.RequestException as err:\n    print(f'General requests error: {err}')",
      ["requests.exceptions.RequestException", "requests.Error", "requests.NetworkFailure", "urllib.error.URLError"],
      0,
      "`requests.exceptions.RequestException` is the base class from which all specific requests exceptions (Timeout, ConnectionError, HTTPError) inherit.",
      "PCEA-30-01 Block 3.1 - Error Handling",
      ["request-exception", "exceptions", "error-handling"])

add_c(14, "3.1", "Catching ConnectionError", "Intermediate",
      "Which specific exception is raised when DNS lookup fails or the remote server refuses the TCP connection?",
      "import requests\ntry:\n    requests.get('https://invalid-nonexistent-domain.xyz')\nexcept requests.exceptions.ConnectionError:\n    print('DNS or connection failure!')",
      ["requests.exceptions.Timeout", "requests.exceptions.ConnectionError", "requests.exceptions.HTTPError", "requests.exceptions.DNSNotFound"],
      1,
      "`requests.exceptions.ConnectionError` is raised on network-level failures like refused connections and DNS resolution failures.",
      "PCEA-30-01 Block 3.1 - Error Handling",
      ["connection-error", "dns-failure", "exceptions"])

add_c(15, "3.1", "Catching Timeout", "Intermediate",
      "Which exception specifically catches request timeouts in `requests`?",
      "import requests\ntry:\n    requests.get('https://example.com', timeout=0.001)\nexcept requests.exceptions.Timeout:\n    print('Timed out!')",
      ["requests.exceptions.Timeout", "requests.exceptions.TimeExpired", "TimeoutError", "socket.timeout"],
      0,
      "`requests.exceptions.Timeout` catches both connect timeouts and read timeouts raised during the request lifecycle.",
      "PCEA-30-01 Block 3.1 - Error Handling",
      ["timeout-exception", "exceptions", "resilience"])

add_c(16, "3.1", "Response Encoding", "Intermediate",
      "How can an automation script force `requests` to decode `r.text` using `utf-8` instead of an auto-detected guess?",
      "import requests\nr = requests.get('https://example.com/data.txt')\nr.encoding = 'utf-8'\nprint(r.text)",
      ["r.set_encoding('utf-8')", "r.encoding = 'utf-8'", "r.charset = 'utf-8'", "r.decode('utf-8')"],
      1,
      "Setting `r.encoding = 'utf-8'` overrides requests' detected encoding, ensuring `r.text` is decoded with the specified codec.",
      "PCEA-30-01 Block 3.1 - Encoding",
      ["encoding", "utf-8", "text-decoding"])

add_c(17, "3.1", "HTTP Methods Taxonomy", "Beginner",
      "In standard REST conventions, which HTTP method is used to create a new resource on the server?",
      "import requests\nr = requests.post('https://api.example.com/tickets', json={'title': 'Disk Full'})",
      ["GET", "POST", "PUT", "DELETE"],
      1,
      "HTTP `POST` is standard for creating new resources; `PUT` or `PATCH` updates existing resources, and `DELETE` removes them.",
      "PCEA-30-01 Block 3.1 - REST Methods",
      ["http-methods", "post", "rest-architecture"])

add_c(18, "3.1", "HTTP Status 201", "Beginner",
      "What does HTTP status code `201` indicate in an automated provisioning API?",
      "# API response: HTTP 201 Created",
      ["OK (Standard successful response)", "Created (Resource was successfully created on server)", "Accepted (Processing queued asynchronously)", "No Content"],
      1,
      "HTTP 201 Created indicates that the request succeeded and resulted in the successful creation of a new resource on the server.",
      "PCEA-30-01 Block 3.1 - Status Codes",
      ["http-201", "status-codes", "rest"])

add_c(19, "3.1", "HTTP Status 204", "Beginner",
      "What does HTTP status code `204` indicate, commonly returned by automated DELETE requests?",
      "# API response: HTTP 204 No Content",
      ["Resource was deleted, but server had an internal error", "No Content (Request succeeded, but server deliberately returned an empty body)", "Forbidden", "Page not found"],
      1,
      "HTTP 204 No Content signifies that the action succeeded and there is no response entity body to return (typical for DELETE operations).",
      "PCEA-30-01 Block 3.1 - Status Codes",
      ["http-204", "no-content", "rest"])

add_c(20, "3.1", "Inspecting Response Headers", "Beginner",
      "How do you inspect the server's declared `Content-Type` header from a `Response` object?",
      "import requests\nr = requests.get('https://api.example.com')\ncontent_type = r.headers.get('content-type')",
      ["r.content_type", "r.headers.get('content-type')", "r.meta['content-type']", "r.get_header('content-type')"],
      1,
      "`r.headers` is a case-insensitive dictionary storing the HTTP response headers returned by the web server.",
      "PCEA-30-01 Block 3.1 - Response Headers",
      ["headers", "case-insensitive", "content-type"])

# ==========================================
# CHAPTER 3.2: Consuming REST APIs & Payload Handling (JSON & Auth) (Cards 21-40)
# ==========================================
add_c(21, "3.2", "json Parameter", "Beginner",
      "Why is passing `json={'key': 'value'}` preferred over `data=json.dumps(...)` in `requests.post()`?",
      "import requests\n# Clean automation pattern:\nr = requests.post('https://api.example.com/items', json={'name': 'Server01'})",
      ["It automatically serializes the dict to JSON AND sets the Content-Type header to application/json", "It bypasses server authentication", "It encrypts the payload with TLS", "It makes the request 100x faster"],
      0,
      "The `json=` parameter serializes the dictionary to a JSON string and automatically attaches `Content-Type: application/json`.",
      "PCEA-30-01 Block 3.2 - REST APIs",
      ["requests", "json-parameter", "post-payloads"])

add_c(22, "3.2", "r.json() Method", "Beginner",
      "How do you decode a server's JSON response directly into a Python dictionary or list?",
      "import requests\nr = requests.get('https://api.example.com/user/10')\nuser_dict = r.json()",
      ["json.load(r)", "r.json()", "r.to_dict()", "r.decode_json()"],
      1,
      "`response.json()` parses the JSON response body directly into Python dictionaries or lists, raising a JSONDecodeError if parsing fails.",
      "PCEA-30-01 Block 3.2 - REST APIs",
      ["r-json", "json-parsing", "api-consumption"])

add_c(23, "3.2", "Bearer Token Auth", "Beginner",
      "How is a Bearer API token conventionally passed to an authenticated REST endpoint in Python?",
      "import requests\ntoken = 'eyJhbGciOi...'\nheaders = {'Authorization': f'Bearer {token}'}\nr = requests.get('https://api.example.com/v1/servers', headers=headers)",
      ["params={'bearer': token}", "headers={'Authorization': f'Bearer {token}'}", "auth=('bearer', token)", "cookies={'token': token}"],
      1,
      "Standard OAuth 2.0 and modern REST APIs expect Bearer tokens in the `Authorization: Bearer <token>` HTTP request header.",
      "PCEA-30-01 Block 3.2 - Authentication",
      ["bearer-token", "authorization", "oauth2"])

add_c(24, "3.2", "Basic Authentication", "Beginner",
      "How do you provide HTTP Basic Authentication credentials in `requests`?",
      "import requests\nr = requests.get('https://api.example.com/admin', auth=('admin_user', 'secret_pass'))",
      ["auth=('username', 'password')", "headers={'Basic': 'username:password'}", "credentials={'user': 'u', 'pass': 'p'}", "params={'auth': 'basic'}"],
      0,
      "Passing a `(username, password)` tuple to `auth=` automatically generates and sends the Base64-encoded `Authorization: Basic ...` header.",
      "PCEA-30-01 Block 3.2 - Authentication",
      ["basic-auth", "authentication", "requests"])

add_c(25, "3.2", "Custom API Key Header", "Beginner",
      "Many APIs require a custom header like `X-API-Key`. How is this supplied in `requests`?",
      "import requests\nheaders = {'X-API-Key': 'abc123xyz'}\nr = requests.get('https://api.example.com/data', headers=headers)",
      ["api_key='abc123xyz'", "headers={'X-API-Key': 'abc123xyz'}", "auth={'key': 'abc123xyz'}", "params={'x_api_key': 'abc123xyz'}"],
      1,
      "Custom authentication headers are passed directly as key-value pairs in the `headers` dictionary.",
      "PCEA-30-01 Block 3.2 - Authentication",
      ["api-key", "custom-headers", "rest"])

add_c(26, "3.2", "Multipart File Upload", "Intermediate",
      "How does an automation script upload a file (e.g. `audit.pdf`) using `requests.post()`?",
      "import requests\nwith open('audit.pdf', 'rb') as f:\n    files = {'document': f}\n    r = requests.post('https://api.example.com/upload', files=files)",
      ["data={'file': 'audit.pdf'}", "files={'document': open('audit.pdf', 'rb')}", "json={'file': open('audit.pdf')}", "upload='audit.pdf'"],
      1,
      "Passing a dictionary mapping form field names to open binary file objects in `files=` encodes a standard `multipart/form-data` request.",
      "PCEA-30-01 Block 3.2 - File Uploads",
      ["files", "multipart-upload", "post"])

add_c(27, "3.2", "HTTP PUT vs PATCH", "Intermediate",
      "What is the conceptual difference between HTTP `PUT` and HTTP `PATCH` in RESTful automation?",
      "# Updating a user record:\n# PUT replaces entire entity; PATCH updates specific attributes\nr_put = requests.put('/users/1', json={'name': 'Bob', 'role': 'Admin'})\nr_patch = requests.patch('/users/1', json={'role': 'Admin'})",
      ["PUT replaces the entire resource; PATCH applies partial modifications to specific fields", "PUT is read-only, PATCH is write-only", "PATCH is only used for binary files", "PUT is deprecated in HTTP 1.1"],
      0,
      "In REST standards, `PUT` is idempotent and replaces the target entity completely, while `PATCH` applies partial delta updates to existing fields.",
      "PCEA-30-01 Block 3.2 - REST Architecture",
      ["put-vs-patch", "rest", "idempotency"])

add_c(28, "3.2", "Handling Malformed API JSON", "Intermediate",
      "How should an automation script protect against servers returning HTML error pages when expecting JSON?",
      "import requests\nr = requests.get('https://api.example.com/data')\ntry:\n    data = r.json()\nexcept requests.exceptions.JSONDecodeError:\n    print(f'Expected JSON, but received: {r.text[:100]}')",
      ["Catch requests.exceptions.JSONDecodeError (or ValueError)", "Check if r.text == 'json'", "Call json.validate(r)", "Wrap in time.sleep()"],
      0,
      "When gateways fail (e.g. 502 Bad Gateway), they return HTML rather than JSON. Catching `JSONDecodeError` prevents unhandled crashes.",
      "PCEA-30-01 Block 3.2 - Error Handling",
      ["json-decode-error", "defensive-coding", "api-consumption"])

add_c(29, "3.2", "Webhooks", "Intermediate",
      "What is a 'webhook' in automated workflow integration (e.g. Slack or GitHub)?",
      "# Sending an automated notification to an incoming webhook URL:\nimport requests\npayload = {'text': 'Nightly ETL pipeline completed successfully.'}\nrequests.post('https://hooks.slack.com/services/...', json=payload)",
      ["A physical network cable", "An automated HTTP callback triggered by an event that sends real-time data to a listening URL", "A Python function decorator", "A database query optimizer"],
      1,
      "Webhooks are user-defined HTTP callbacks triggered by events, enabling systems to push immediate notifications or payloads to remote endpoints.",
      "PCEA-30-01 Block 3.2 - Webhooks",
      ["webhooks", "event-driven", "notifications"])

add_c(30, "3.2", "Form Data vs JSON", "Intermediate",
      "What is the difference between passing `data=payload` and `json=payload` in `requests.post()`?",
      "import requests\nd = {'user': 'alice'}\n# data sends application/x-www-form-urlencoded\n# json sends application/json",
      ["data sends form-encoded data; json sends serialized JSON with application/json header", "data only accepts strings; json only accepts numbers", "There is no difference", "data is for GET requests only"],
      0,
      "`data=dict` encodes key-value pairs as `application/x-www-form-urlencoded` (standard HTML forms), while `json=dict` sends JSON.",
      "PCEA-30-01 Block 3.2 - requests",
      ["data-vs-json", "content-type", "post"])

add_c(31, "3.2", "HTTP 401 vs 403", "Intermediate",
      "What is the difference between HTTP status `401 Unauthorized` and `403 Forbidden`?",
      "# API response comparison:\n# 401: Authentication missing or invalid (no valid token)\n# 403: Authenticated, but user lacks permission to access resource",
      ["401 means missing/invalid credentials (unauthenticated); 403 means authenticated but not allowed (unauthorized permission)", "401 is server error; 403 is client error", "401 is permanent; 403 is temporary", "401 means server is offline"],
      0,
      "401 Unauthorized means the request lacks valid authentication credentials. 403 Forbidden means the identity is known, but lacks required permissions.",
      "PCEA-30-01 Block 3.2 - Status Codes",
      ["http-401", "http-403", "authentication-vs-authorization"])

add_c(32, "3.2", "Mocking API Calls", "Advanced",
      "How can an automation script unit test an API client without making actual outbound network requests?",
      "from unittest.mock import patch\nimport requests\n\nwith patch('requests.get') as mock_get:\n    mock_get.return_value.status_code = 200\n    mock_get.return_value.json.return_value = {'status': 'active'}\n    # Call code under test",
      ["Using unittest.mock.patch to mock requests.get", "Unplugging the network cable", "Setting timeout=0", "Renaming requests.py"],
      0,
      "Using `unittest.mock.patch` replaces network calls with simulated test doubles, guaranteeing fast, deterministic unit test execution.",
      "PCEA-30-01 Block 3.2 - Testing Automation",
      ["mock", "unit-testing", "api-testing"])

add_c(33, "3.2", "Validating Content-Type", "Intermediate",
      "How do you verify that an API response returned JSON before calling `.json()`?",
      "import requests\nr = requests.get('https://api.example.com/users')\nif 'application/json' in r.headers.get('content-type', ''):\n    data = r.json()",
      ["Check if 'application/json' is in r.headers.get('content-type', '')", "Inspect r.status_code == 200", "Call r.is_json()", "Check type(r.content) == dict"],
      0,
      "Inspecting the `Content-Type` header confirms whether the server returned JSON prior to parsing, avoiding unexpected parsing errors on HTML or XML.",
      "PCEA-30-01 Block 3.2 - API Consumption",
      ["content-type", "validation", "headers"])

add_c(34, "3.2", "SSL Certificate Verification", "Intermediate",
      "Why is disabling SSL verification with `verify=False` hazardous in automated network scripts?",
      "import requests\n# Dangerous: requests.get('https://internal.api', verify=False)",
      ["It disables TLS certificate validation, making the connection vulnerable to Man-in-the-Middle (MitM) eavesdropping and tampering", "It causes requests to crash with MemoryError", "It slows down network transfer speed by 80%", "It deletes the local SSL certificates from the OS"],
      0,
      "Setting `verify=False` turns off certificate trust validation, exposing sensitive credentials and tokens in transit to interception and spoofing.",
      "PCEA-30-01 Block 3.2 - Security",
      ["ssl-verification", "security", "tls"])

add_c(35, "3.2", "Custom CA Bundle", "Advanced",
      "How do you point `requests` to an enterprise internal root certificate authority bundle (`corporate-ca.crt`)?",
      "import requests\nr = requests.get('https://internal.company.com', verify='/etc/ssl/corporate-ca.crt')",
      ["verify='/etc/ssl/corporate-ca.crt'", "ca_bundle='/etc/ssl/corporate-ca.crt'", "cert='/etc/ssl/corporate-ca.crt'", "trust='/etc/ssl/corporate-ca.crt'"],
      0,
      "Passing a path string to `verify=` instructs `requests` to validate TLS certificates against that specific trusted CA bundle file.",
      "PCEA-30-01 Block 3.2 - Security & TLS",
      ["ca-bundle", "verify", "enterprise-tls"])

add_c(36, "3.2", "API Pagination with Cursor", "Advanced",
      "In cursor-based API pagination, how does an automation script fetch all pages of records?",
      "cursor = None\nall_records = []\nwhile True:\n    params = {'cursor': cursor} if cursor else {}\n    data = requests.get(url, params=params).json()\n    all_records.extend(data['items'])\n    cursor = data.get('next_cursor')\n    if not cursor:\n        break",
      ["Loop while cursor exists, passing the cursor value in the next request until null/absent", "Call requests.get_all(url)", "Set params={'all_pages': True}", "Send 100 requests in parallel using range(100)"],
      0,
      "Cursor-based pagination loops continuously, extracting the pointer token (e.g. `next_cursor`) from the payload and supplying it in the subsequent request.",
      "PCEA-30-01 Block 3.2 - Pagination",
      ["cursor-pagination", "api-loops", "data-collection"])

add_c(37, "3.2", "Querying Specific Fields", "Beginner",
      "Given `data = {'users': [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]}`, how do you extract a list of all names?",
      "names = [u['name'] for u in data['users']]",
      ["names = data['users']['name']", "names = [u['name'] for u in data['users']]", "names = list(data.values())", "names = data.filter('name')"],
      1,
      "A list comprehension `[u['name'] for u in data['users']]` concisely transforms the nested API response into a clean list of extracted values.",
      "PCEA-30-01 Block 3.2 - Data Transformation",
      ["list-comprehension", "json-parsing", "data-extraction"])

add_c(38, "3.2", "Client Side Certificate", "Advanced",
      "How do you provide a client-side mTLS certificate and private key in `requests`?",
      "import requests\nr = requests.get('https://mtls.bank.com', cert=('client.crt', 'client.key'))",
      ["cert=('client.crt', 'client.key')", "mtls=('client.crt', 'client.key')", "auth=('client.crt', 'client.key')", "ssl_cert=('client.crt', 'client.key')"],
      0,
      "The `cert` parameter accepts a tuple `('cert_file', 'key_file')` for mutual TLS (mTLS) client authentication.",
      "PCEA-30-01 Block 3.2 - Authentication",
      ["mtls", "client-certificates", "security"])

add_c(39, "3.2", "Patching Nested JSON", "Intermediate",
      "When updating a resource via `PATCH`, how should partial changes be structured?",
      "import requests\n# Only send fields that need updating:\npayload = {'status': 'MAINTENANCE', 'active': False}\nrequests.patch('https://api.example.com/nodes/12', json=payload)",
      ["Send only the modified fields in the JSON payload", "Send the entire database table", "Send an empty JSON payload", "Delete the resource first then POST"],
      0,
      "PATCH requests only send the attributes to be modified, preserving all other existing resource fields on the server.",
      "PCEA-30-01 Block 3.2 - REST APIs",
      ["patch", "partial-updates", "rest"])

add_c(40, "3.2", "URL Encoding Parameters", "Intermediate",
      "How does `requests` handle special characters like spaces, slashes, or ampersands in query parameters?",
      "import requests\n# spaces become + or %20 automatically:\nr = requests.get('https://api.example.com/search', params={'q': 'python & automation'})",
      ["It raises a ValueError", "It automatically percent-encodes values (e.g. converting ' ' to '%20' and '&' to '%26')", "It strips out all spaces and ampersands", "It sends the parameters as raw binary bytes"],
      1,
      "`requests` automatically formats and percent-encodes dictionary parameters according to standard URL encoding rules.",
      "PCEA-30-01 Block 3.2 - requests",
      ["url-encoding", "params", "query-strings"])

# ==========================================
# CHAPTER 3.3: HTML Scraping & Data Extraction with BeautifulSoup (Cards 41-60)
# ==========================================
add_c(41, "3.3", "BeautifulSoup Setup", "Beginner",
      "How do you instantiate a `BeautifulSoup` parsing object from an HTML string?",
      "from bs4 import BeautifulSoup\nhtml = '<html><body><h1>Dashboard</h1></body></html>'\nsoup = BeautifulSoup(html, 'html.parser')",
      ["soup = BeautifulSoup(html, 'html.parser')", "soup = BeautifulSoup.parse(html)", "soup = HTMLParser(html)", "soup = bs4.from_string(html)"],
      0,
      "`BeautifulSoup(html_text, 'html.parser')` parses the HTML document using Python's built-in `html.parser` engine.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["beautifulsoup", "bs4", "parsing"])

add_c(42, "3.3", "find vs find_all", "Beginner",
      "What is the difference between `soup.find()` and `soup.find_all()`?",
      "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\nfirst_link = soup.find('a')\nall_links = soup.find_all('a')",
      ["find returns the first matching Tag object (or None); find_all returns a ResultSet list of all matching Tags", "find is case-sensitive, find_all is not", "find searches by ID, find_all searches by class", "find_all only searches the <head> element"],
      0,
      "`soup.find()` stops at the first matching element and returns a `Tag` (or `None`). `soup.find_all()` scans the entire DOM and returns a list-like `ResultSet`.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["find", "find-all", "bs4"])

add_c(43, "3.3", "Filtering by CSS Class", "Beginner",
      "In `soup.find()`, why must CSS class names be matched using `class_` with an underscore?",
      "from bs4 import BeautifulSoup\ntag = soup.find('div', class_='alert-box')",
      ["Because class is a reserved keyword in Python", "Because CSS requires underscores in HTML", "Because BeautifulSoup converts all classes to uppercase", "To differentiate between IDs and classes"],
      0,
      "`class` is a reserved Python keyword used for defining classes. BeautifulSoup accepts `class_` to avoid syntax errors.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["class-filter", "python-keywords", "bs4"])

add_c(44, "3.3", "CSS Selectors (select)", "Intermediate",
      "Which method allows querying elements using standard CSS selector syntax (e.g. `div.content > ul li`)?",
      "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\nitems = soup.select('div.content > ul li')",
      ["soup.query()", "soup.select()", "soup.css()", "soup.xpath()"],
      1,
      "`soup.select(css_selector)` uses standard CSS selector syntax to return a list of all matching `Tag` elements.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["css-selectors", "select", "bs4"])

add_c(45, "3.3", "select_one", "Intermediate",
      "What does `soup.select_one('#main-title')` return?",
      "from bs4 import BeautifulSoup\ntitle = soup.select_one('#main-title')",
      ["A list of tags matching that ID", "The first Tag object matching the selector, or None if not found", "A boolean True/False", "The text inside the element directly"],
      1,
      "`soup.select_one(selector)` returns the first element matching the CSS selector, or `None` if no match exists.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["select-one", "css-selectors", "bs4"])

add_c(46, "3.3", "Extracting Text", "Beginner",
      "How do you extract clean, whitespace-stripped text content from a BeautifulSoup `Tag`?",
      "from bs4 import BeautifulSoup\ntag = soup.find('h1')\ntext = tag.get_text(strip=True)",
      ["tag.value()", "tag.get_text(strip=True)", "tag.to_string()", "str(tag)"],
      1,
      "`tag.get_text(strip=True)` (or `tag.text.strip()`) extracts all human-readable text while stripping leading, trailing, and redundant whitespace.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["get-text", "strip", "text-extraction"])

add_c(47, "3.3", "Extracting Attributes", "Beginner",
      "How do you safely extract the `href` URL from a hyperlink tag `a`?",
      "from bs4 import BeautifulSoup\nlink = soup.find('a')\nurl = link.get('href', '')",
      ["link.href", "link.get('href', '')", "link.attribute('href')", "link['target']"],
      1,
      "`tag.get('attr', default)` accesses HTML attributes like dictionary keys safely, returning a default value if the attribute is missing.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["attributes", "href", "safe-access"])

add_c(48, "3.3", "Finding by ID", "Beginner",
      "How do you find an element with a specific ID `navbar` using `soup.find()`?",
      "from bs4 import BeautifulSoup\nnav = soup.find('nav', id='navbar')",
      ["soup.find(id='navbar')", "soup.find_id('navbar')", "soup.get_element_by_id('navbar')", "soup.find('#navbar')"],
      0,
      "`soup.find(id='navbar')` or `soup.find('tag', id='navbar')` queries by element ID.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["id-filter", "dom", "bs4"])

add_c(49, "3.3", "Navigating Parent Elements", "Intermediate",
      "How do you access the immediate parent element of a `Tag` in BeautifulSoup?",
      "from bs4 import BeautifulSoup\ntag = soup.find('td')\nrow = tag.parent",
      ["tag.parent", "tag.get_parent()", "tag.ancestor", "tag.up()"],
      0,
      "`tag.parent` returns the immediate parent `Tag` object, enabling bottom-up DOM tree navigation.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["parent", "dom-traversal", "bs4"])

add_c(50, "3.3", "Navigating Siblings", "Intermediate",
      "How do you find the next sibling tag that appears immediately after an element?",
      "from bs4 import BeautifulSoup\nh2 = soup.find('h2')\np = h2.find_next_sibling('p')",
      ["h2.next()", "h2.find_next_sibling('p')", "h2.following('p')", "h2.sibling[0]"],
      1,
      "`tag.find_next_sibling('tag')` locates the first following sibling matching the filter under the same parent.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["siblings", "find-next-sibling", "dom-traversal"])

add_c(51, "3.3", "Parsing HTML Tables", "Intermediate",
      "How can an automation script extract all rows from an HTML table `<table>`?",
      "table = soup.find('table')\nrows_data = []\nfor tr in table.find_all('tr'):\n    cols = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]\n    if cols:\n        rows_data.append(cols)",
      ["Iterate through tr tags, and for each tr extract text from all td/th tags into a list", "Call table.to_dataframe() directly in BeautifulSoup", "Use json.loads(table)", "Use re.findall('table', html)"],
      0,
      "Iterating `table.find_all('tr')` and extracting `td.get_text(strip=True)` from each column is the standard robust scraping pattern for HTML tables.",
      "PCEA-30-01 Block 3.3 - Table Scraping",
      ["tables", "table-scraping", "html-parsing"])

add_c(52, "3.3", "Preventing NoneType Crashes", "Intermediate",
      "What is the best way to avoid `AttributeError: 'NoneType' object has no attribute 'text'` when scraping?",
      "elem = soup.find('span', class_='price')\nprice = elem.get_text(strip=True) if elem else 'N/A'",
      ["Check `if elem:` before accessing `.text` or use a ternary conditional fallback", "Turn off Python error reporting", "Wrap the entire computer in a try block", "Assume elements are always present"],
      0,
      "When target elements might be missing from some pages, verifying `if elem is not None:` prevents catastrophic `AttributeError` crashes.",
      "PCEA-30-01 Block 3.3 - Defensive Scraping",
      ["none-type", "attribute-error", "defensive-coding"])

add_c(53, "3.3", "Regex Filters in BS4", "Intermediate",
      "How can you find all tags whose class contains the word `'btn-'` followed by digits?",
      "import re\nfrom bs4 import BeautifulSoup\nbuttons = soup.find_all('button', class_=re.compile(r'btn-\\d+'))",
      ["soup.find_all('button', class_=re.compile(r'btn-\\d+'))", "soup.find_all('button', class_='btn-*')", "soup.find_all('button', regex='btn-\\d+')", "soup.regex('button.btn-\\d+')"],
      0,
      "Passing a compiled regular expression `re.compile(...)` to tag filters matches attribute values matching that regex pattern.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["regex-filters", "re-compile", "bs4"])

add_c(54, "3.3", "lxml vs html.parser", "Intermediate",
      "What is the advantage of using the third-party `lxml` parser over Python's built-in `html.parser` in BeautifulSoup?",
      "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(huge_html, 'lxml')",
      ["lxml is written in C and is significantly faster and more forgiving of broken, malformed HTML", "lxml uses 0% CPU", "lxml converts HTML to Python classes automatically", "lxml does not require strings"],
      0,
      "`lxml` is a high-speed C-based parser offering superior performance and lenient handling of broken, non-compliant HTML documents.",
      "PCEA-30-01 Block 3.3 - Parsers",
      ["lxml", "html-parser", "performance"])

add_c(55, "3.3", "Modifying the DOM", "Intermediate",
      "How can you remove unwanted `<script>` and `<style>` tags from a page before extracting article text?",
      "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\nfor tag in soup(['script', 'style']):\n    tag.decompose()\nclean_text = soup.get_text(strip=True)",
      ["tag.decompose() or tag.extract()", "tag.delete()", "del tag", "tag.clear_element()"],
      0,
      "`tag.decompose()` completely destroys a tag and its contents from the parse tree, leaving only the desired content.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["decompose", "dom-cleaning", "text-extraction"])

add_c(56, "3.3", "Child Iteration", "Beginner",
      "What is the difference between `tag.contents` and `tag.children` in BeautifulSoup?",
      "tag = soup.find('ul')\ncontent_list = tag.contents  # list\nchild_iter = tag.children     # iterator",
      ["contents returns a list of direct children; children returns an iterator", "contents includes all descendants, children includes only direct", "contents returns strings, children returns tags", "There is no difference"],
      0,
      "`tag.contents` is a materialized Python list of a tag's immediate children, while `tag.children` is an iterator over those children.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["contents", "children", "dom-hierarchy"])

add_c(57, "3.3", "Attribute List Values", "Intermediate",
      "In HTML, what data type does `tag['class']` return in BeautifulSoup?",
      "from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<div class=\"btn btn-primary active\"></div>', 'html.parser')\nprint(soup.div['class'])",
      ["['btn', 'btn-primary', 'active'] (a list of strings)", "'btn btn-primary active' (a single string)", "A set", "A dictionary"],
      0,
      "HTML multi-valued attributes like `class` are parsed by BeautifulSoup into a Python `list` of individual class tokens.",
      "PCEA-30-01 Block 3.3 - BeautifulSoup",
      ["class-list", "multi-valued-attributes", "bs4"])

add_c(58, "3.3", "Combining Requests & BS4", "Beginner",
      "What is the standard idiom to download and parse a webpage using `requests` and `BeautifulSoup`?",
      "import requests\nfrom bs4 import BeautifulSoup\n\nr = requests.get('https://news.ycombinator.com', timeout=5)\nr.raise_for_status()\nsoup = BeautifulSoup(r.text, 'html.parser')",
      ["Pass r.text to BeautifulSoup along with 'html.parser'", "Pass the response object r directly to BeautifulSoup()", "Use requests.scrape()", "Call r.soup()"],
      0,
      "Downloading with `requests.get()` followed by passing `r.text` into `BeautifulSoup(r.text, 'html.parser')` is the universal web scraping pattern.",
      "PCEA-30-01 Block 3.3 - Integration",
      ["requests-bs4", "idiom", "web-scraping"])

add_c(59, "3.3", "CSS Attribute Selector", "Intermediate",
      "How do you select all links with a `target=\"_blank\"` attribute using CSS selectors in BeautifulSoup?",
      "links = soup.select('a[target=\"_blank\"]')",
      ["soup.select('a[target=\"_blank\"]')", "soup.select('a.target._blank')", "soup.select('a:target(_blank)')", "soup.select('a -> _blank')"],
      0,
      "Standard CSS attribute selector syntax `tag[attribute=\"value\"]` queries elements with matching attribute values.",
      "PCEA-30-01 Block 3.3 - CSS Selectors",
      ["css-selectors", "attribute-selectors", "bs4"])

add_c(60, "3.3", "Extracting Nested Links", "Beginner",
      "How do you collect all image source URLs (`<img src=\"...\">`) from a parsed page?",
      "img_urls = [img['src'] for img in soup.find_all('img') if img.get('src')]",
      ["img_urls = [img['src'] for img in soup.find_all('img') if img.get('src')]", "img_urls = soup.find_all('src')", "img_urls = soup.images.urls", "img_urls = list(soup.src)"],
      0,
      "Iterating through `soup.find_all('img')` and retrieving `img['src']` gathers all image locations on the page.",
      "PCEA-30-01 Block 3.3 - Asset Scraping",
      ["image-scraping", "find-all", "data-extraction"])

# ==========================================
# CHAPTER 3.4: Pagination, Rate Limiting & Session Management (Cards 61-80)
# ==========================================
add_c(61, "3.4", "requests.Session", "Beginner",
      "What are the two major advantages of using `requests.Session()` across multiple requests?",
      "import requests\nwith requests.Session() as s:\n    s.headers.update({'User-Agent': 'Bot/1.0'})\n    r1 = s.get('https://example.com/login')\n    r2 = s.get('https://example.com/dashboard')",
      ["TCP connection pooling (reusing TCP/TLS connections) and automatic cookie persistence across requests", "It hides the computer's IP address and bypasses firewalls", "It translates web pages into Spanish", "It encrypts local hard drive files"],
      0,
      "`requests.Session()` persists cookies across requests and reuses underlying TCP sockets via connection pooling, drastically improving network throughput.",
      "PCEA-30-01 Block 3.4 - Sessions",
      ["session", "connection-pooling", "cookies"])

add_c(62, "3.4", "Default Session Headers", "Intermediate",
      "How do you set a default header (such as `Authorization`) that will automatically be sent on EVERY request made by a session?",
      "session = requests.Session()\nsession.headers.update({'Authorization': 'Bearer my_token'})\nsession.get('https://api.example.com/data')  # Header included automatically",
      ["session.headers.update({'Authorization': 'Bearer my_token'})", "session.set_header('Authorization', 'Bearer my_token')", "session.default_headers = [...]", "session.auth_header = '...'"],
      0,
      "`session.headers.update({...})` persists default headers across all subsequent calls invoked through that session instance.",
      "PCEA-30-01 Block 3.4 - Sessions",
      ["session-headers", "persistent-headers", "requests"])

add_c(63, "3.4", "Automated Retries Adapter", "Advanced",
      "How can an automation script configure `requests.Session` to automatically retry failed requests on HTTP 500, 502, 503, and 504?",
      "from urllib3.util import Retry\nfrom requests.adapters import HTTPAdapter\n\nretry_strat = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503, 504])\nadapter = HTTPAdapter(max_retries=retry_strat)\nsession = requests.Session()\nsession.mount('https://', adapter)",
      ["Mounting an HTTPAdapter with a configured urllib3.util.Retry strategy", "Calling session.set_retry_count(3)", "Passing auto_retry=True to requests.get()", "Setting retry=True on the operating system"],
      0,
      "Mounting an `HTTPAdapter` with `urllib3.util.Retry` enables automated exponential backoff retries for transient gateway and network failures.",
      "PCEA-30-01 Block 3.4 - Reliability",
      ["retries", "http-adapter", "urllib3"])

add_c(64, "3.4", "Rate Limiting with sleep", "Beginner",
      "Why is inserting `time.sleep()` between HTTP requests critical in automated batch scraping?",
      "import time, requests\nfor item_id in ids:\n    res = requests.get(f'https://api.example.com/items/{item_id}')\n    time.sleep(1.0)",
      ["To prevent overwhelming target web servers and avoid triggering IP bans or HTTP 429 rate limit blocks", "Because Python cannot make more than 1 request per second", "To allow the hard drive to spin down", "To clear memory caches"],
      0,
      "Polite scraping includes intentional delays (`time.sleep`) to respect server resource limits and prevent IP blacklisting.",
      "PCEA-30-01 Block 3.4 - Politeness",
      ["rate-limiting", "time-sleep", "polite-scraping"])

add_c(65, "3.4", "Random Jitter", "Intermediate",
      "Why is adding random 'jitter' (`time.sleep(random.uniform(1.0, 3.0))`) recommended over static sleep intervals?",
      "import time, random\ntime.sleep(random.uniform(1.5, 3.5))",
      ["It varies timing intervals, making automated request patterns less predictable and avoiding synchronized traffic spikes", "It speeds up script execution by 50%", "It allows Python to run in multi-threaded mode", "It generates random encryption keys"],
      0,
      "Adding randomized jitter distributes traffic naturally, avoiding thundering herd synchronization and evasion of rigid automated bot heuristics.",
      "PCEA-30-01 Block 3.4 - Politeness",
      ["jitter", "random-sleep", "best-practices"])

add_c(66, "3.4", "Offset Pagination Loop", "Intermediate",
      "How is page-based pagination typically implemented when crawling an API endpoint?",
      "page = 1\nwhile True:\n    resp = requests.get(f'https://api.example.com/items?page={page}').json()\n    if not resp.get('items'):\n        break  # Reached end of data\n    process(resp['items'])\n    page += 1",
      ["Increment a page counter in a while loop until an empty list or 404 is encountered", "Run a for loop from 1 to 1,000,000 without stopping", "Set requests.get(url, all_pages=True)", "Call api.fetch_everything()"],
      0,
      "A while loop that increments the `page` query parameter until the returned item collection is empty is the standard pattern for page-offset APIs.",
      "PCEA-30-01 Block 3.4 - Pagination",
      ["page-offset", "pagination-loop", "api-consumption"])

add_c(67, "3.4", "urljoin", "Intermediate",
      "Which standard library function correctly converts a relative link `'/docs/setup.html'` to an absolute URL based on `'https://example.com/blog/'`?",
      "from urllib.parse import urljoin\nfull_url = urljoin('https://example.com/blog/', '/docs/setup.html')\n# 'https://example.com/docs/setup.html'",
      ["urllib.parse.urljoin", "pathlib.Path.join_url", "os.path.join", "requests.url_combine"],
      0,
      "`urllib.parse.urljoin(base, url)` handles RFC 3986 relative URL resolution, handling relative paths, leading slashes, and anchor tags.",
      "PCEA-30-01 Block 3.4 - URL Handling",
      ["urljoin", "urllib-parse", "relative-urls"])

add_c(68, "3.4", "urlencode", "Intermediate",
      "Which standard library function encodes a dictionary into a query string (`'name=John+Doe&age=30'`)?",
      "from urllib.parse import urlencode\nquery = urlencode({'name': 'John Doe', 'age': 30})",
      ["urllib.parse.urlencode", "urllib.parse.quote_dict", "requests.encode_params", "json.to_query"],
      0,
      "`urllib.parse.urlencode(dict)` converts key-value mappings into standard percent-encoded URL query strings.",
      "PCEA-30-01 Block 3.4 - URL Handling",
      ["urlencode", "urllib-parse", "query-strings"])

add_c(69, "3.4", "robots.txt Awareness", "Beginner",
      "What is the purpose of checking a website's `/robots.txt` file before deploying an automated scraper?",
      "# Inspecting: https://example.com/robots.txt\n# User-agent: *\n# Disallow: /private/\n# Crawl-delay: 5",
      ["To discover what paths and rate limits the site owner has designated as off-limits to automated crawlers", "To find the administrator password", "To download the website source code", "To test the site's SSL certificate"],
      0,
      "`robots.txt` specifies rules and crawl delays set by website administrators governing which areas automated crawlers are allowed or forbidden to index.",
      "PCEA-30-01 Block 3.4 - Ethics & Compliance",
      ["robots-txt", "web-ethics", "crawler-policy"])

add_c(70, "3.4", "urllib.robotparser", "Intermediate",
      "Which built-in Python module parses `robots.txt` files to programmatically verify if your bot can crawl a URL?",
      "import urllib.robotparser\nrp = urllib.robotparser.RobotFileParser()\nrp.set_url('https://example.com/robots.txt')\nrp.read()\ncan_fetch = rp.can_fetch('MyBot', 'https://example.com/data')",
      ["urllib.robotparser", "robots_checker", "requests.robots", "bs4.robots"],
      0,
      "`urllib.robotparser.RobotFileParser` fetches and evaluates `robots.txt` files, testing whether a specific user-agent is permitted to fetch target URLs.",
      "PCEA-30-01 Block 3.4 - Ethics & Compliance",
      ["robotparser", "standard-library", "compliance"])

add_c(71, "3.4", "Retry-After Header", "Intermediate",
      "When an API responds with HTTP 429 and includes a `Retry-After: 15` header, what should your script do?",
      "import time\nretry_after = int(r.headers.get('Retry-After', 5))\ntime.sleep(retry_after)",
      ["Sleep for at least 15 seconds before resending the request", "Immediately retry the request 15 times", "Change your IP address", "Abort the script and delete the virtual environment"],
      0,
      "The `Retry-After` header specifies how many seconds the client must wait before making another request to allow rate limit windows to reset.",
      "PCEA-30-01 Block 3.4 - Rate Limiting",
      ["retry-after", "rate-limiting", "http-429"])

add_c(72, "3.4", "Session Cookies", "Intermediate",
      "How can an automation script inspect cookies saved by a `requests.Session` object?",
      "session = requests.Session()\nsession.get('https://example.com/login')\nfor cookie in session.cookies:\n    print(cookie.name, cookie.value)",
      ["session.cookies", "session.headers['Cookies']", "session.cookie_jar()", "session.tokens"],
      0,
      "`session.cookies` contains a `RequestsCookieJar` maintaining all cookies received across requests, which are automatically sent back in future calls.",
      "PCEA-30-01 Block 3.4 - Cookies",
      ["cookies", "cookie-jar", "session"])

add_c(73, "3.4", "Exponential Backoff", "Intermediate",
      "What is the mathematical pattern of 'exponential backoff' used in automated retry loops?",
      "# Wait times: 1s, 2s, 4s, 8s, 16s...\nfor attempt in range(max_retries):\n    wait = 2 ** attempt\n    time.sleep(wait)",
      ["Each retry wait duration doubles (or multiplies exponentially) relative to the previous attempt", "Wait time decreases linearly on each retry", "Wait time is constant (e.g. exactly 5 seconds every time)", "Wait time is determined by CPU temperature"],
      0,
      "Exponential backoff (`2 ** attempt`) progressively lengthens the wait time between retries, giving failing upstream services time to recover.",
      "PCEA-30-01 Block 3.4 - Reliability",
      ["exponential-backoff", "retry-logic", "fault-tolerance"])

add_c(74, "3.4", "Session Closing", "Beginner",
      "Why should `requests.Session()` be used inside a `with` statement context manager?",
      "with requests.Session() as session:\n    session.get('https://api.example.com')\n# Underlying socket connections are cleanly closed upon exiting",
      ["To ensure underlying TCP connection sockets and adapters are cleanly closed when done", "To prevent other programs from accessing the internet", "Because requests fails without with statements", "To speed up DNS resolution"],
      0,
      "Using `with requests.Session() as s:` guarantees that underlying TCP connection pools and socket handles are closed, preventing resource leaks.",
      "PCEA-30-01 Block 3.4 - Resource Management",
      ["context-manager", "session-closure", "clean-code"])

add_c(75, "3.4", "Link Header Pagination", "Advanced",
      "Some APIs (like GitHub) use RFC 5988 `Link` headers for pagination. How do you access them in `requests`?",
      "r = requests.get('https://api.github.com/events')\nnext_url = r.links.get('next', {}).get('url')",
      ["r.links", "r.headers['Pagination']", "r.pages", "r.next_page()"],
      0,
      "`response.links` automatically parses RFC 5988 `Link` headers into a convenient dictionary (e.g. `r.links['next']['url']`).",
      "PCEA-30-01 Block 3.4 - Advanced Pagination",
      ["link-header", "rfc-5988", "pagination"])

add_c(76, "3.4", "Simulating Form Login", "Intermediate",
      "How can an automation script log into a traditional web application that requires session cookies?",
      "with requests.Session() as s:\n    # 1. Fetch login page to capture CSRF token\n    login_page = s.get('https://example.com/login')\n    # 2. POST credentials\n    s.post('https://example.com/login', data={'user': 'me', 'pass': 'secret'})\n    # 3. Access protected dashboard using same session\n    dash = s.get('https://example.com/dashboard')",
      ["Use requests.Session to capture CSRF tokens, post login form data, and maintain authenticated session cookies across subsequent requests", "Send login credentials in query parameters of every URL", "Use a fresh requests.get() call for each step", "Download the site's database directly"],
      0,
      "A `Session` object stores cookies received during authentication, automatically attaching them to subsequent requests to access protected pages.",
      "PCEA-30-01 Block 3.4 - Web Automation",
      ["form-login", "session-cookies", "csrf"])

add_c(77, "3.4", "Handling HTTP 503", "Intermediate",
      "What does HTTP status `503 Service Unavailable` indicate to an automated worker?",
      "# API response: HTTP 503 Service Unavailable",
      ["The endpoint does not exist", "The server is temporarily overloaded or undergoing maintenance, and the client should retry after a delay", "The API key was revoked", "The payload was malformed"],
      1,
      "HTTP 503 indicates temporary server overload or maintenance downtime. Automations should implement retry loops with backoff.",
      "PCEA-30-01 Block 3.4 - Status Codes",
      ["http-503", "service-unavailable", "retries"])

add_c(78, "3.4", "Streaming Large Requests", "Intermediate",
      "When checking service health by fetching HTTP headers only without downloading body content, which method should be used?",
      "import requests\nr = requests.head('https://example.com/huge-file.iso')\nprint(r.headers.get('content-length'))",
      ["requests.head()", "requests.get()", "requests.trace()", "requests.options()"],
      0,
      "`requests.head()` retrieves only HTTP response headers without downloading the message body, saving bandwidth and execution time.",
      "PCEA-30-01 Block 3.4 - HTTP Methods",
      ["http-head", "bandwidth-saving", "health-checks"])

add_c(79, "3.4", "Session Mount Prefix", "Advanced",
      "What does `session.mount('https://', adapter)` do?",
      "session.mount('https://', adapter)",
      ["Binds the custom transport adapter to all outgoing HTTPS requests made through that session", "Mounts a network disk drive", "Encrypts local cookies", "Binds the script to port 443"],
      0,
      "`session.mount(prefix, adapter)` registers a transport adapter to intercept and process all requests matching the URL prefix (e.g. `'https://'`).",
      "PCEA-30-01 Block 3.4 - Transport Adapters",
      ["session-mount", "transport-adapter", "urllib3"])

add_c(80, "3.4", "URL Query Dict", "Intermediate",
      "How do you parse an existing query string `'?cat=tools&sort=price'` into a Python dictionary?",
      "from urllib.parse import parse_qs\nparams = parse_qs('cat=tools&sort=price')",
      ["urllib.parse.parse_qs", "requests.to_dict", "string.split_query", "json.loads"],
      0,
      "`urllib.parse.parse_qs()` parses a query string into a dictionary where values are lists of strings for each parameter key.",
      "PCEA-30-01 Block 3.4 - URL Handling",
      ["parse-qs", "query-parsing", "urllib-parse"])

# ==========================================
# CHAPTER 3.5: Automated File Downloads & Web Assets Collection (Cards 81-100)
# ==========================================
add_c(81, "3.5", "Streaming Downloads", "Intermediate",
      "Why must large file downloads (e.g. a 500 MB database backup) use `stream=True` in `requests.get()`?",
      "import requests\nwith requests.get('https://example.com/backup.dump', stream=True) as r:\n    r.raise_for_status()\n    with open('backup.dump', 'wb') as f:\n        for chunk in r.iter_content(chunk_size=8192):\n            f.write(chunk)",
      ["To prevent downloading the entire multi-gigabyte file into system RAM all at once, which could cause a MemoryError", "Because requests refuses to download files larger than 1 MB without it", "It speeds up network download speeds by 10x", "It validates file virus signatures"],
      0,
      "`stream=True` defers downloading the response body until iterated over with `iter_content()`, streaming data directly to disk without bloating memory.",
      "PCEA-30-01 Block 3.5 - File Downloads",
      ["stream-true", "iter-content", "memory-efficiency"])

add_c(82, "3.5", "iter_content chunk_size", "Beginner",
      "What is the role of `chunk_size=8192` in `response.iter_content()`?",
      "for chunk in r.iter_content(chunk_size=8192):\n    f.write(chunk)",
      ["Specifies the byte size of data read into memory per iteration (8 KB)", "Specifies the maximum total download file size", "Limits network speed to 8 KB per second", "Sets timeout to 8192 ms"],
      0,
      "`chunk_size` defines the number of bytes read into memory per iteration chunk, balancing memory consumption and I/O efficiency.",
      "PCEA-30-01 Block 3.5 - File Downloads",
      ["chunk-size", "iter-content", "streaming"])

add_c(83, "3.5", "Download Progress Calculation", "Intermediate",
      "Which HTTP response header tells your automation script the total size of a file before downloading begins?",
      "total_bytes = int(r.headers.get('content-length', 0))",
      ["Content-Length", "File-Size", "Total-Bytes", "Transfer-Size"],
      0,
      "The `Content-Length` header indicates the total size of the response entity body in bytes, allowing automated progress tracking.",
      "PCEA-30-01 Block 3.5 - Headers",
      ["content-length", "progress-tracking", "http-headers"])

add_c(84, "3.5", "Download Verification", "Intermediate",
      "How should an automated asset downloader verify that a downloaded file was not corrupted during transit?",
      "import hashlib\n\nhasheng = hashlib.sha256()\nwith open('file.zip', 'rb') as f:\n    while chunk := f.read(8192):\n        hasheng.update(chunk)\nassert hasheng.hexdigest() == expected_checksum",
      ["Calculate the SHA-256 or MD5 cryptographic hash of the downloaded file and compare it against the expected checksum", "Check that the filename ends in .zip", "Check that file size is greater than 0", "Open the file in text mode and print it"],
      0,
      "Comparing cryptographic digest baselines (e.g. SHA-256) guarantees that the file downloaded completely and without bit-rot or tampering.",
      "PCEA-30-01 Block 3.5 - Verification",
      ["checksum", "hashlib", "data-integrity"])

add_c(85, "3.5", "Saving Binary Files", "Beginner",
      "When writing downloaded binary files (like images, ZIPs, or PDFs) to disk, what file mode must be used?",
      "with open('document.pdf', 'wb') as f:\n    f.write(r.content)",
      ["'w'", "'wb'", "'w+'", "'a'"],
      1,
      "`'wb'` (write binary) ensures that bytes are written directly without line-ending translation (`\\n` to `\\r\\n`), preventing binary corruption.",
      "PCEA-30-01 Block 3.5 - File I/O",
      ["binary-mode", "wb", "file-writing"])

add_c(86, "3.5", "Sanitizing Download Filenames", "Intermediate",
      "Why must filenames extracted from web headers (e.g. `Content-Disposition`) be sanitized before saving to disk?",
      "import re, pathlib\nraw_filename = '../../etc/cron.d/malicious'\nsafe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', pathlib.Path(raw_filename).name)",
      ["To prevent directory traversal attacks (e.g. '../../etc/shadow') and illegal filesystem characters", "To make filenames strictly uppercase", "Because Windows does not support lowercase letters", "To compress the filename"],
      0,
      "Unsanitized filenames can contain path traversal sequences (`../`) or characters illegal on the host filesystem (`:`, `*`, `?`, `|`), creating vulnerabilities.",
      "PCEA-30-01 Block 3.5 - Security",
      ["path-traversal", "sanitization", "security"])

add_c(87, "3.5", "Content-Disposition Header", "Intermediate",
      "How do servers suggest a download filename to HTTP clients?",
      "# Server response header:\n# Content-Disposition: attachment; filename=\"monthly_report_2026.xlsx\"",
      ["Via the Content-Disposition header", "Via the Title header", "Via the User-Agent header", "Via the Referer header"],
      0,
      "The `Content-Disposition: attachment; filename=\"...\"` header indicates that the response should be saved as a file and suggests a filename.",
      "PCEA-30-01 Block 3.5 - Headers",
      ["content-disposition", "file-download", "http-headers"])

add_c(88, "3.5", "Extracting Links with BS4", "Beginner",
      "How do you collect all PDF download links from an archive page?",
      "from bs4 import BeautifulSoup\npdf_links = [a['href'] for a in soup.find_all('a', href=True) if a['href'].endswith('.pdf')]",
      ["Filter soup.find_all('a', href=True) where a['href'].endswith('.pdf')", "soup.find('pdf')", "soup.select('pdf')", "re.match('pdf', soup)"],
      0,
      "Filtering anchor tags whose `href` attribute ends in `.pdf` extracts all document download endpoints.",
      "PCEA-30-01 Block 3.5 - Web Scraping",
      ["pdf-links", "find-all", "data-extraction"])

add_c(89, "3.5", "Downloading Images with pathlib", "Beginner",
      "What is a concise way to download and save an image using `requests` and `pathlib.Path`?",
      "from pathlib import Path\nimport requests\n\nr = requests.get('https://example.com/logo.png')\nPath('logo.png').write_bytes(r.content)",
      ["Path('logo.png').write_bytes(r.content)", "Path('logo.png').save(r.text)", "r.save_to('logo.png')", "requests.download('logo.png')"],
      0,
      "`Path.write_bytes(r.content)` writes the binary byte payload directly to disk in a single concise, expressive statement.",
      "PCEA-30-01 Block 3.5 - pathlib & requests",
      ["write-bytes", "pathlib", "image-download"])

add_c(90, "3.5", "Batch Asset Collector", "Intermediate",
      "When downloading 100 images sequentially in an automation loop, what pattern ensures failed downloads do not crash the script?",
      "for url in image_urls:\n    try:\n        r = requests.get(url, timeout=5)\n        r.raise_for_status()\n        save_image(r.content)\n    except requests.RequestException as e:\n        logging.error(f'Failed to download {url}: {e}')",
      ["Wrap each download iteration in a try-except block catching RequestException and logging the error", "Turn off internet access", "Use sys.exit(1) on the first error", "Set ignore_all_errors = True"],
      0,
      "Handling errors inside the loop isolates failures to individual items, allowing the batch script to continue processing remaining downloads.",
      "PCEA-30-01 Block 3.5 - Robustness",
      ["batch-download", "error-isolation", "logging"])

add_c(91, "3.5", "Resuming Downloads", "Advanced",
      "Which HTTP request header allows an automation script to resume an interrupted file download from byte 50,000?",
      "headers = {'Range': 'bytes=50000-'}\nr = requests.get(url, headers=headers, stream=True)",
      ["Range", "Resume-From", "Offset", "Content-Start"],
      0,
      "The `Range: bytes=start-end` HTTP header requests a specific byte slice of a resource, allowing download resumption if the server supports partial content (HTTP 206).",
      "PCEA-30-01 Block 3.5 - Resumable Downloads",
      ["range-header", "http-206", "resumable-downloads"])

add_c(92, "3.5", "HTTP Status 206", "Intermediate",
      "What status code does a server return when successfully responding to a `Range` header request?",
      "# Response: HTTP 206 Partial Content",
      ["200 OK", "206 Partial Content", "204 No Content", "304 Not Modified"],
      1,
      "HTTP 206 Partial Content indicates that the server successfully fulfilled the partial GET request requested by the `Range` header.",
      "PCEA-30-01 Block 3.5 - Status Codes",
      ["http-206", "partial-content", "status-codes"])

add_c(93, "3.5", "Atomic File Download", "Intermediate",
      "Why should downloaded files be saved with a `.tmp` extension and renamed to their final name only upon completion?",
      "# Pattern: download to file.tmp -> rename to file.zip\ntmp_path = Path('report.zip.tmp')\ntmp_path.write_bytes(r.content)\ntmp_path.replace('report.zip')",
      ["It guarantees that other monitoring processes never read a partially downloaded, corrupt file if the download fails halfway", "It makes download speeds 2x faster", "It avoids paying cloud egress fees", "It automatically scans for malware"],
      0,
      "Downloading to a temporary file and atomically renaming upon success prevents downstream automations from consuming half-downloaded files.",
      "PCEA-30-01 Block 3.5 - Atomic Operations",
      ["atomic-download", "file-integrity", "defensive-coding"])

add_c(94, "3.5", "urllib.request.urlretrieve", "Beginner",
      "Which standard library function downloads a remote URL directly to a local file path without third-party libraries?",
      "import urllib.request\nurllib.request.urlretrieve('https://example.com/data.csv', 'data.csv')",
      ["urllib.request.urlretrieve()", "os.download()", "sys.fetch()", "urllib.parse.download()"],
      0,
      "`urllib.request.urlretrieve(url, filename)` is Python's standard library convenience function for copying a network object directly to a local file.",
      "PCEA-30-01 Block 3.5 - Standard Library",
      ["urlretrieve", "urllib-request", "standard-library"])

add_c(95, "3.5", "Handling GZIP Content", "Intermediate",
      "How does the `requests` library handle GZIP-compressed HTTP responses (`Content-Encoding: gzip`)?",
      "# Server sends gzip compressed response\nr = requests.get('https://example.com/data')",
      ["It decompresses gzip and deflate content automatically and transparently in r.content and r.text", "It raises a GzipError", "The user must manually invoke the gzip module on r.content", "It deletes the compressed data"],
      0,
      "`requests` automatically decodes and decompresses gzip and deflate transfer encodings behind the scenes.",
      "PCEA-30-01 Block 3.5 - Compression",
      ["gzip", "decompression", "requests"])

add_c(96, "3.5", "Directory Structuring for Assets", "Beginner",
      "How can an asset scraper organize downloaded assets by file extension automatically?",
      "from pathlib import Path\nfor img in images:\n    target_dir = Path('downloads') / img.suffix.lstrip('.')\n    target_dir.mkdir(parents=True, exist_ok=True)\n    # save into target_dir",
      ["Compute target directory dynamically based on Path.suffix and ensure it exists with mkdir(parents=True, exist_ok=True)", "Save all files to the root directory /", "Put all files on the Windows Desktop", "Use zip files exclusively"],
      0,
      "Using `pathlib` to dynamically group files into subdirectories based on extension or date creates structured, manageable storage.",
      "PCEA-30-01 Block 3.5 - Asset Organization",
      ["asset-organization", "pathlib", "directory-structure"])

add_c(97, "3.5", "Scraping Paginated Tables", "Intermediate",
      "When scraping a multi-page table, what is the best strategy to store the aggregated dataset in memory before exporting to CSV?",
      "all_rows = []\nfor page in range(1, total_pages + 1):\n    table_rows = scrape_page(page)\n    all_rows.extend(table_rows)\nexport_to_csv('output.csv', all_rows)",
      ["Accumulate rows in a list of dicts, then write out to CSV in a single DictWriter pass", "Overwrite the CSV file on every page iteration", "Print all rows to stdout only", "Save each row as an individual file"],
      0,
      "Aggregating parsed records in a list of dicts and serializing with `csv.DictWriter` produces a clean, unified dataset.",
      "PCEA-30-01 Block 3.5 - Data Aggregation",
      ["pagination", "table-scraping", "csv-export"])

add_c(98, "3.5", "Detecting Redirects on Download", "Intermediate",
      "How can an automated downloader determine the final redirected filename if the initial URL was a redirect link (e.g. `https://short.url/123`)?",
      "import requests, pathlib\nr = requests.get('https://short.url/123', allow_redirects=True)\nfinal_filename = pathlib.Path(r.url).name",
      ["Inspect pathlib.Path(r.url).name from the response's final resolved URL", "Check r.history[0].url", "Check r.request.url", "Redirects cannot have filenames"],
      0,
      "`r.url` stores the final URL after all redirects have been followed, allowing the script to extract the actual target filename.",
      "PCEA-30-01 Block 3.5 - Redirects",
      ["r-url", "redirects", "file-download"])

add_c(99, "3.5", "Handling Broken Links", "Beginner",
      "What HTTP status code is returned when a downloaded asset URL no longer exists on the server?",
      "# Attempting to download missing image: HTTP 404 Not Found",
      ["200", "404", "500", "302"],
      1,
      "HTTP 404 Not Found indicates that the requested resource could not be found on the server.",
      "PCEA-30-01 Block 3.5 - Status Codes",
      ["http-404", "broken-links", "status-codes"])

add_c(100, "3.5", "Disk Space Check Before Download", "Intermediate",
      "How can an automation script verify that enough disk space is available before downloading a large file?",
      "import shutil\n_, _, free_space = shutil.disk_usage('.')\ncontent_length = int(r.headers.get('Content-Length', 0))\nif free_space < content_length * 1.2:\n    raise SystemExit('Insufficient disk space for download!')",
      ["Compare shutil.disk_usage().free against the response's Content-Length header with a safety margin", "Download the file and see if it fails", "Delete all other files first", "There is no way to check disk space in Python"],
      0,
      "Comparing available free bytes via `shutil.disk_usage()` against `Content-Length` guarantees the system will not run out of disk mid-download.",
      "PCEA-30-01 Block 3.5 - Defensive Scripting",
      ["disk-usage", "content-length", "preflight-checks"])

assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

def to_ts_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pcea',\n"
        f"    section: {json.dumps(c['section'])},\n"
        f"    chapter: {json.dumps(c['chapter'])},\n"
        f"    category: {json.dumps(c['category'])},\n"
        f"    difficulty: {json.dumps(c['difficulty'])},\n"
        f"    question: {json.dumps(c['question'])},\n"
        f"    codeSnippet: {json.dumps(c['codeSnippet'])},\n"
        f"    options: [\n" + ",\n".join(f"      {json.dumps(opt)}" for opt in c['options']) + "\n    ],\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_ts_file(filepath, var_name, cards_list):
    content = "import { Flashcard } from '../types';\n\n"
    content += f"export const {var_name}: Flashcard[] = [\n"
    content += ",\n".join(to_ts_card(c) for c in cards_list)
    content += "\n];\n"
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Wrote {len(cards_list)} cards to {filepath}")

write_ts_file("src/data/pceaSection3CardsPart1.ts", "pceaSection3CardsPart1", cards[:50])
write_ts_file("src/data/pceaSection3CardsPart2.ts", "pceaSection3CardsPart2", cards[50:])

with open("src/data/pceaSection3Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceaSection3CardsPart1 } from './pceaSection3CardsPart1';
import { pceaSection3CardsPart2 } from './pceaSection3CardsPart2';

export const pceaSection3Flashcards: Flashcard[] = [
  ...pceaSection3CardsPart1,
  ...pceaSection3CardsPart2,
];
""")
print("Wrote pceaSection3Flashcards.ts successfully!")
