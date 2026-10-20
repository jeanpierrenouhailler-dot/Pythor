import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 4: NETWORK PROGRAMMING (Part 2: Cards 41 to 75)
 * - Chapter 4.3: RESTful Architecture & HTTP Methods/Status Codes (Cards 41 to 60)
 * - Chapter 4.4: HTTP Requests with the requests Library (Part 1: Cards 61 to 75)
 */
export const pcppSection4CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.3: RESTFUL ARCHITECTURE & HTTP METHODS/STATUS CODES (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcpp-s4-fc-041',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Core constraints of REST (Representational State Transfer)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What are the 6 foundational architectural constraints that define a truly RESTful web service?',
    codeSnippet: `# 6 Guiding Architectural Constraints of REST (Roy Fielding, 2000):
# 1. Client-Server Architecture (separation of concerns, independent evolution)
# 2. Statelessness (no client session state stored on server; each request self-contained)
# 3. Cacheability (responses must explicitly state if they are cacheable)
# 4. Layered System (intermediaries, proxies, gateways without client knowledge)
# 5. Uniform Interface (resource identification, standard methods, HATEOAS)
# 6. Code on Demand (optional: executable scripts transferred to client)

rest_principles = ["Client-Server", "Stateless", "Cacheable", "Layered", "Uniform Interface"]
print(f"Core constraints count: {len(rest_principles)}")`,
    stdoutExpected: 'Core constraints count: 5',
    explanationTitle: 'REST Architectural Constraints',
    explanationText:
      'REST relies on 6 constraints: Client-Server separation, Stateless requests (the server holds no client session state between calls), Cacheable responses to improve network efficiency, a Layered system of proxies/load balancers, a Uniform Interface via standard HTTP verbs and URIs, and optional Code on Demand.',
    complexityInfo: 'PCPP 4.3 Architectural design constraints',
  },
  {
    id: 'pcpp-s4-fc-042',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'URI, URL, and URN structure anatomy',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What are the structural components of a standard URL (Uniform Resource Locator)?',
    codeSnippet: `from urllib.parse import urlparse

url = "https://api.example.com:8443/v1/users?role=admin#section2"
parsed = urlparse(url)

print("Scheme:", parsed.scheme)
print("Netloc:", parsed.netloc)
print("Port:", parsed.port)
print("Path:", parsed.path)
print("Query:", parsed.query)
print("Fragment:", parsed.fragment)`,
    stdoutExpected: 'Scheme: https\nNetloc: api.example.com:8443\nPort: 8443\nPath: /v1/users\nQuery: role=admin\nFragment: section2',
    explanationTitle: 'URL Component Breakdown',
    explanationText:
      'A URL is composed of: 1) Scheme/Protocol (https), 2) Authority/Host (api.example.com) with optional Port (8443), 3) Resource Path (/v1/users), 4) Query string (?role=admin for filtering/sorting), and 5) Fragment (#section2 for client-side navigation).',
    complexityInfo: 'PCPP 4.3 Resource addressing structure',
  },
  {
    id: 'pcpp-s4-fc-043',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP request message structure (Request Line, Headers, Body)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the exact text formatting structure of an HTTP/1.1 request message?',
    codeSnippet: `# Raw HTTP Request Format:
# [Method] [Request-URI] [HTTP-Version]\\r\\n   <- Request Line
# [Header-Name]: [Header-Value]\\r\\n           <- Headers
# \\r\\n                                        <- Mandatory Empty Line
# [Optional Message Body]                     <- Payload

raw_request = (
    "GET /api/status HTTP/1.1\\r\\n"
    "Host: api.example.com\\r\\n"
    "User-Agent: Python-App/1.0\\r\\n"
    "\\r\\n"
)
lines = raw_request.split("\\r\\n")
print("Request line:", lines[0])`,
    stdoutExpected: 'Request line: GET /api/status HTTP/1.1',
    explanationTitle: 'HTTP Request Wire Format',
    explanationText:
      'An HTTP request starts with the Request Line containing the HTTP method, the request path/URI, and protocol version (separated by spaces and terminated by CRLF \\r\\n). Followed by header lines, a mandatory empty line (\\r\\n\\r\\n), and the optional message body.',
    complexityInfo: 'Exam trap: headers and body are strictly separated by an empty CRLF line',
  },
  {
    id: 'pcpp-s4-fc-044',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP response message structure (Status Line, Headers, Body)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the exact text formatting structure of an HTTP/1.1 response message?',
    codeSnippet: `# Raw HTTP Response Format:
# [HTTP-Version] [Status-Code] [Reason-Phrase]\\r\\n <- Status Line
# [Header-Name]: [Header-Value]\\r\\n               <- Response Headers
# \\r\\n                                            <- Mandatory Empty Line
# [Response Body Data]                            <- Payload

raw_response = (
    "HTTP/1.1 200 OK\\r\\n"
    "Content-Type: application/json\\r\\n"
    "Content-Length: 15\\r\\n"
    "\\r\\n"
    '{"status": "ok"}'
)
status_line = raw_response.split("\\r\\n")[0]
print("Status line:", status_line)`,
    stdoutExpected: 'Status line: HTTP/1.1 200 OK',
    explanationTitle: 'HTTP Response Wire Format',
    explanationText:
      'An HTTP response begins with the Status Line containing the HTTP version, 3-digit numeric status code, and human-readable reason phrase (e.g. HTTP/1.1 200 OK). After the status line come response headers, an empty CRLF line, and the response body.',
    complexityInfo: 'PCPP 4.3 Wire protocol representation',
  },
  {
    id: 'pcpp-s4-fc-045',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP GET method: semantics, safety, and idempotency',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What are the semantic rules of the HTTP GET method regarding safety, idempotency, and message bodies?',
    codeSnippet: `# HTTP GET Semantics:
# - Purpose: Retrieve a representation of the specified resource.
# - Safe: YES (does not mutate server state).
# - Idempotent: YES (multiple identical requests produce the same side effects).
# - Cacheable: YES by default.
# - Message Body: Has no defined meaning and should NOT carry a request body.

get_info = {"Safe": True, "Idempotent": True, "HasBody": False}
print(f"Safe: {get_info['Safe']}, Idempotent: {get_info['Idempotent']}")`,
    stdoutExpected: 'Safe: True, Idempotent: True',
    explanationTitle: 'HTTP GET Semantics',
    explanationText:
      'GET is used strictly for data retrieval. It is both safe (read-only, causing no server side effects) and idempotent (repeating the call N times results in the same server state). GET requests pass query parameters in the URL and must not rely on request bodies.',
    complexityInfo: 'PCPP 4.3 Safe & idempotent method definitions',
  },
  {
    id: 'pcpp-s4-fc-046',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP POST method: semantics, resource creation, and non-idempotency',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Why is HTTP POST classified as neither safe nor idempotent?',
    codeSnippet: `# HTTP POST Semantics:
# - Purpose: Submit data to be processed; create a subordinate resource.
# - Safe: NO (modifies server state / creates database records).
# - Idempotent: NO (repeating POST 5 times creates 5 separate records or transactions).
# - Standard Success Status: 201 Created (with Location header) or 200 OK.

post_info = {"Safe": False, "Idempotent": False}
print("POST is Safe:", post_info["Safe"])
print("POST is Idempotent:", post_info["Idempotent"])`,
    stdoutExpected: 'POST is Safe: False\nPOST is Idempotent: False',
    explanationTitle: 'HTTP POST Semantics',
    explanationText:
      'POST submits data to create a new resource or initiate server-side processing. Because executing N POST requests creates N different items or triggers multiple charges/actions, POST is non-safe and non-idempotent.',
    complexityInfo: 'High-frequency exam distinction between POST and PUT',
  },
  {
    id: 'pcpp-s4-fc-047',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP PUT method: full replacement and idempotency',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How does HTTP PUT differ from POST, and why is PUT considered idempotent?',
    codeSnippet: `# HTTP PUT Semantics:
# - Purpose: Completely REPLACE the target resource representation with the payload,
#   or create it if it does not already exist at the specified URI.
# - Safe: NO (mutates server data).
# - Idempotent: YES (repeating PUT /users/42 with the same payload 10 times
#   leaves the resource in the exact same state as running it once).

put_info = {"Safe": False, "Idempotent": True}
print(f"PUT - Safe: {put_info['Safe']}, Idempotent: {put_info['Idempotent']}")`,
    stdoutExpected: 'PUT - Safe: False, Idempotent: True',
    explanationTitle: 'HTTP PUT Method & Idempotency',
    explanationText:
      'PUT targets a specific URI (e.g. /users/42) and replaces the entire resource with the submitted payload. While it modifies state (unsafe), it is idempotent because multiple identical PUT requests result in the exact same server state as a single request.',
    complexityInfo: 'PCPP 4.3 PUT idempotency rule',
  },
  {
    id: 'pcpp-s4-fc-048',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP PATCH method: partial modification',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'When should HTTP PATCH be used instead of PUT, and is PATCH guaranteed to be idempotent?',
    codeSnippet: `# HTTP PATCH (RFC 5789):
# - Purpose: Apply partial modifications to a resource.
#   Only the fields to be changed are sent in the payload.
# - Example: PATCH /users/42 {"email": "new@example.com"}
# - Safe: NO.
# - Idempotent: Not necessarily! (e.g. PATCH /counter {"increment": 1} is not idempotent).

patch_info = {"Operation": "Partial Modification", "Safe": False}
print("PATCH operation:", patch_info["Operation"])`,
    stdoutExpected: 'PATCH operation: Partial Modification',
    explanationTitle: 'HTTP PATCH vs. PUT',
    explanationText:
      'PUT requires sending the entire resource representation (omitted fields are reset or deleted). PATCH applies partial updates, only transmitting the modified attributes. While setting a specific field value is idempotent, operations like append or increment are not.',
    complexityInfo: 'PCPP 4.3 Partial update semantics',
  },
  {
    id: 'pcpp-s4-fc-049',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP DELETE method: resource removal and idempotency',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What does HTTP DELETE do, and why is it considered idempotent even if the second call returns 404?',
    codeSnippet: `# HTTP DELETE Semantics:
# - Purpose: Delete the resource identified by the Request-URI.
# - Safe: NO (deletes data).
# - Idempotent: YES!
#
# Idempotency is defined by SERVER STATE, not response status code!
# First DELETE /items/5 -> removes item (returns 200/204)
# Second DELETE /items/5 -> item remains deleted (returns 404)
# The end state on the server is identical: item 5 does not exist!

print("DELETE is idempotent: True")`,
    stdoutExpected: 'DELETE is idempotent: True',
    explanationTitle: 'HTTP DELETE & Idempotency Nuance',
    explanationText:
      'DELETE removes the resource at the target URI. It is idempotent because calling DELETE once or multiple times results in the same final server state (the resource is gone). The fact that the first call may return 204/200 and subsequent calls return 404 does not violate idempotency.',
    complexityInfo: 'Frequent exam question regarding DELETE idempotency',
  },
  {
    id: 'pcpp-s4-fc-050',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP HEAD and OPTIONS methods',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What are the purposes of the HTTP HEAD and OPTIONS methods?',
    codeSnippet: `# HTTP HEAD:
# Exactly identical to GET, EXCEPT the server MUST NOT return a message body!
# Used to check resource existence, Content-Length, or Last-Modified without downloading payload.

# HTTP OPTIONS:
# Queries the communication options / supported verbs for a target resource or server.
# Server responds with the 'Allow' header (e.g. Allow: GET, POST, OPTIONS).
# Used heavily in CORS pre-flight browser checks.

print("HEAD: headers only; OPTIONS: permitted verbs via Allow header")`,
    stdoutExpected: 'HEAD: headers only; OPTIONS: permitted verbs via Allow header',
    explanationTitle: 'HEAD and OPTIONS Semantics',
    explanationText:
      'HEAD returns the exact same headers as a GET request but with no response body, allowing clients to check caching tags (ETag), file sizes, or link validity cheaply. OPTIONS discovers which HTTP methods are supported by the server for that endpoint, returned in the "Allow" header.',
    complexityInfo: 'PCPP 4.3 Inspection and CORS methods',
  },
  {
    id: 'pcpp-s4-fc-051',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Safety vs. Idempotency matrix across all standard HTTP methods',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Summarize the Safe and Idempotent classifications across GET, HEAD, OPTIONS, POST, PUT, and DELETE.',
    codeSnippet: `# Matrix:
# Method   | Safe? | Idempotent?
# ---------+-------+------------
# GET      | YES   | YES
# HEAD     | YES   | YES
# OPTIONS  | YES   | YES
# PUT      | NO    | YES
# DELETE   | NO    | YES
# POST     | NO    | NO
# PATCH    | NO    | (Usually NO)

safe_methods = {"GET", "HEAD", "OPTIONS"}
idempotent_methods = {"GET", "HEAD", "OPTIONS", "PUT", "DELETE"}

print("Safe methods:", sorted(list(safe_methods)))
print("Idempotent methods:", sorted(list(idempotent_methods)))`,
    stdoutExpected: "Safe methods: ['GET', 'HEAD', 'OPTIONS']\nIdempotent methods: ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PUT']",
    explanationTitle: 'Safety vs. Idempotency Matrix',
    explanationText:
      'Safe methods only read data and make no state changes (GET, HEAD, OPTIONS). Idempotent methods ensure that N identical requests leave the server in the exact same state as 1 request (GET, HEAD, OPTIONS, PUT, DELETE). POST and PATCH are not safe and not strictly idempotent.',
    complexityInfo: 'High-yield PCPP-32-10x exam table',
  },
  {
    id: 'pcpp-s4-fc-052',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'HTTP status code classes (1xx, 2xx, 3xx, 4xx, 5xx)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What do the first digits (1xx through 5xx) of HTTP status codes signify?',
    codeSnippet: `# HTTP Status Code Categories:
# 1xx: Informational (Request received, continuing process, e.g. 100 Continue, 101 Switching Protocols)
# 2xx: Success (Action was successfully received, understood, and accepted)
# 3xx: Redirection (Further action must be taken to complete request)
# 4xx: Client Error (Request contains bad syntax or cannot be fulfilled by client fault)
# 5xx: Server Error (Server failed to fulfill an apparently valid request)

classes = {
    1: "Informational",
    2: "Success",
    3: "Redirection",
    4: "Client Error",
    5: "Server Error",
}
print(", ".join([f"{k}xx={v}" for k, v in classes.items()]))`,
    stdoutExpected: '1xx=Informational, 2xx=Success, 3xx=Redirection, 4xx=Client Error, 5xx=Server Error',
    explanationTitle: 'HTTP Status Code Classes',
    explanationText:
      'HTTP status codes are 3-digit integers categorized by their first digit: 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error, meaning the client sent bad input, lacks auth, or requested a missing resource), and 5xx (Server Error, meaning the server crashed or timed out).',
    complexityInfo: 'PCPP 4.3 Status code classification',
  },
  {
    id: 'pcpp-s4-fc-053',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Key 2xx Success status codes: 200, 201, 204',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What are the specific use cases for status codes 200 OK, 201 Created, and 204 No Content?',
    codeSnippet: `# 200 OK: Standard successful response for GET, PUT, or POST.
# 201 Created: Request succeeded and a NEW resource was created (typically returned by POST;
#              includes a 'Location' header pointing to the new resource URI).
# 204 No Content: Request succeeded but the response body is intentionally EMPTY
#                 (common for successful DELETE or PUT actions).

success_codes = {200: "OK", 201: "Created", 204: "No Content"}
print(f"201 includes Location: True, 204 body empty: True")`,
    stdoutExpected: '201 includes Location: True, 204 body empty: True',
    explanationTitle: 'Standard 2xx Success Codes',
    explanationText:
      '200 OK indicates general success. 201 Created signifies that a new resource was created, often providing its URI in the Location response header. 204 No Content confirms success while indicating no payload body is returned (frequently used after DELETE operations).',
    complexityInfo: 'PCPP 4.3 Success response standards',
  },
  {
    id: 'pcpp-s4-fc-054',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Key 3xx Redirection status codes: 301, 302, 304',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How do 301 Moved Permanently, 302 Found, and 304 Not Modified differ?',
    codeSnippet: `# 301 Moved Permanently: Resource permanently relocated to new URI in 'Location' header.
#                        Search engines update their indexes to the new URL.
# 302 Found: Temporary redirect to URI in 'Location' header.
# 304 Not Modified: Conditional GET response; resource has not changed since last fetch
#                   (matches ETag or If-Modified-Since). Client uses its cached copy!

redirect_codes = {301: "Permanent", 302: "Temporary", 304: "Cache Hit"}
print("304 sends body:", False)`,
    stdoutExpected: '304 sends body: False',
    explanationTitle: 'Key 3xx Redirection Codes',
    explanationText:
      '301 instructs clients and search engines that the URL has moved permanently. 302 provides a temporary redirection. 304 Not Modified is crucial for web caching: the server informs the client that the cached version is still fresh, sending headers without a redundant response body.',
    complexityInfo: 'PCPP 4.3 Caching and redirection mechanics',
  },
  {
    id: 'pcpp-s4-fc-055',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Key 4xx Client Error codes: 400, 401, 403, 404',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the critical distinction between 401 Unauthorized and 403 Forbidden?',
    codeSnippet: `# 400 Bad Request: Malformed syntax, invalid JSON, or missing required fields.
# 401 Unauthorized: Authentication is REQUIRED and has failed or NOT been provided!
#                   (Server returns WWW-Authenticate challenge header).
# 403 Forbidden: Server understood identity, but client DOES NOT HAVE PERMISSION!
#                (Re-authenticating will not help; user lacks authorization rights).
# 404 Not Found: Target resource does not exist.

print("401 = Missing/Bad Credentials (Authentication)")
print("403 = Authenticated but Insufficient Rights (Authorization)")`,
    stdoutExpected: '401 = Missing/Bad Credentials (Authentication)\n403 = Authenticated but Insufficient Rights (Authorization)',
    explanationTitle: '401 Unauthorized vs. 403 Forbidden',
    explanationText:
      '401 Unauthorized means authentication is missing or invalid (the user must log in). 403 Forbidden means authentication is recognized, but the server refuses to authorize access because the user lacks adequate permissions.',
    complexityInfo: 'High-frequency exam trap: 401 (AuthN) vs 403 (AuthZ)',
  },
  {
    id: 'pcpp-s4-fc-056',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Other important 4xx codes: 405, 408, 409, 422, 429',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What do HTTP status codes 405 Method Not Allowed and 429 Too Many Requests indicate?',
    codeSnippet: `# 405 Method Not Allowed: HTTP method recognized, but disabled for this endpoint
#                          (Must return 'Allow' header with valid methods, e.g. Allow: GET).
# 408 Request Timeout: Server timed out waiting for client to finish transmitting request.
# 409 Conflict: Request conflicts with current resource state (e.g. duplicate unique username).
# 422 Unprocessable Entity: Syntactically valid JSON, but semantic validation failed.
# 429 Too Many Requests: Client sent too many requests in given time (Rate Limiting).

print("405 requires Allow header; 429 indicates rate limiting")`,
    stdoutExpected: '405 requires Allow header; 429 indicates rate limiting',
    explanationTitle: 'Specialized 4xx Client Error Codes',
    explanationText:
      '405 Method Not Allowed means the requested verb is forbidden on that URI (e.g. attempting POST on a read-only endpoint) and requires an "Allow" header listing valid verbs. 429 indicates the client exceeded rate limits, often accompanied by a "Retry-After" header.',
    complexityInfo: 'PCPP 4.3 API client error standards',
  },
  {
    id: 'pcpp-s4-fc-057',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Key 5xx Server Error codes: 500, 502, 503, 504',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How do 500, 502 Bad Gateway, 503 Service Unavailable, and 504 Gateway Timeout differ in a proxy/microservice architecture?',
    codeSnippet: `# 500 Internal Server Error: Unhandled exception or crash inside server code.
# 502 Bad Gateway: Proxy/Gateway received an INVALID response from upstream backend.
# 503 Service Unavailable: Server is temporarily overloaded or down for maintenance.
# 504 Gateway Timeout: Proxy/Gateway did NOT receive a response in time from upstream backend.

server_errors = {500: "Internal Error", 502: "Bad Gateway", 503: "Unavailable", 504: "Gateway Timeout"}
print(f"502 vs 504: 502 = Invalid response, 504 = Timed out waiting")`,
    stdoutExpected: '502 vs 504: 502 = Invalid response, 504 = Timed out waiting',
    explanationTitle: 'Key 5xx Server Error Codes',
    explanationText:
      '500 means the server threw an unhandled error. 502 Bad Gateway means a reverse proxy (like Nginx) contacted an upstream server (like Gunicorn) but received an invalid or closed connection. 504 Gateway Timeout means the upstream backend took too long to reply.',
    complexityInfo: 'PCPP 4.3 Server failure troubleshooting',
  },
  {
    id: 'pcpp-s4-fc-058',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Standard HTTP request headers: Host, Accept, User-Agent, Authorization',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Which HTTP request header is MANDATORY in all HTTP/1.1 requests, and what are Accept and Authorization used for?',
    codeSnippet: `# MANDATORY in HTTP/1.1: 'Host' header!
# Enables virtual hosting on shared web servers. Without Host, server returns 400 Bad Request.

# Accept: Tells the server what MIME types the client understands (e.g. application/json).
# User-Agent: Identifies the client software/library (e.g. python-requests/2.31.0).
# Authorization: Credentials for authenticating client (e.g. Bearer <token> or Basic <b64>).

headers = {"Host": "api.example.com", "Accept": "application/json"}
print("Host header mandatory in HTTP/1.1:", "Host" in headers)`,
    stdoutExpected: 'Host header mandatory in HTTP/1.1: True',
    explanationTitle: 'Essential HTTP Request Headers',
    explanationText:
      'In HTTP/1.1, the "Host" header is strictly mandatory so web servers hosting multiple domains on the same IP can route to the correct virtual host. "Accept" signals acceptable response media types, and "Authorization" carries authentication tokens or credentials.',
    complexityInfo: 'Exam trap: Host header is mandatory in HTTP/1.1',
  },
  {
    id: 'pcpp-s4-fc-059',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Standard HTTP response headers: Content-Type, Content-Length, Location, ETag',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What roles do Content-Type, Location, and ETag play in HTTP response headers?',
    codeSnippet: `# Content-Type: Media type of the response body (e.g. application/json; charset=utf-8)
# Content-Length: Exact size of response body in octets (bytes)
# Location: Target URL used in 201 Created (new resource) or 3xx Redirections
# ETag: Entity Tag (hash/identifier) used for cache validation (304 Not Modified)

headers = {
    "Content-Type": "application/json",
    "Content-Length": "128",
    "ETag": '"33a64df551425fcc3e71f"'
}
print("ETag used for caching:", "ETag" in headers)`,
    stdoutExpected: 'ETag used for caching: True',
    explanationTitle: 'Key HTTP Response Headers',
    explanationText:
      'Content-Type specifies the payload encoding and format. Content-Length defines payload size in bytes. Location indicates where a newly created resource lives (in 201) or where to redirect (in 301/302). ETag provides a resource version identifier for caching.',
    complexityInfo: 'PCPP 4.3 Response header specifications',
  },
  {
    id: 'pcpp-s4-fc-060',
    track: 'pcpp',
    cardType: 'PCPP 4.3 • REST & HTTP Architecture',
    topic: 'Content Negotiation: Accept header vs. Content-Type header',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How do client and server negotiate data formats (like JSON vs XML) using HTTP headers?',
    codeSnippet: `# Content Negotiation:
# Client sends 'Accept': "application/json" -> "I would like response formatted as JSON"
# Server inspects 'Accept':
#   - If supported: server replies with Content-Type: "application/json"
#   - If unsupported: server replies with 406 Not Acceptable!

# When sending a body (POST/PUT), client declares its own payload format via 'Content-Type':
#   - e.g. Content-Type: "application/json"

print("Client prefers via Accept; Sender declares via Content-Type")`,
    stdoutExpected: 'Client prefers via Accept; Sender declares via Content-Type',
    explanationTitle: 'HTTP Content Negotiation',
    explanationText:
      'Content negotiation allows the same URL to serve representations in different formats. The client uses the "Accept" header to declare requested formats (e.g. application/json, text/csv). The server responds with the actual format in "Content-Type", or returns 406 Not Acceptable.',
    complexityInfo: 'PCPP 4.3 Content negotiation flow',
  },

  // =========================================================================
  // CHAPTER 4.4: HTTP REQUESTS WITH THE REQUESTS LIBRARY (Cards 61 to 75)
  // =========================================================================
  {
    id: 'pcpp-s4-fc-061',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Introduction to requests library ("HTTP for Humans") vs. urllib',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Why is the third-party requests package widely preferred over the standard library urllib.request?',
    codeSnippet: `import requests

# Built-in urllib requires manual URL encoding, manual connection pooling,
# and complex header/cookie handlers.
# 'requests' provides an intuitive API:
# r = requests.get("https://httpbin.org/get")

print("requests library installed:", requests.__name__ == "requests")`,
    stdoutExpected: 'requests library installed: True',
    explanationTitle: 'requests ("HTTP for Humans")',
    explanationText:
      'While Python includes urllib, the third-party requests library is the de-facto standard for HTTP operations and is explicitly tested in PCPP-32-10x. It simplifies connection pooling, automatic JSON encoding/decoding, session cookies, and timeout management.',
    complexityInfo: 'PCPP 4.4 Exam scope covers the requests package',
  },
  {
    id: 'pcpp-s4-fc-062',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'The Response object: status_code, ok, and reason',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you check whether a request succeeded using Response.status_code and the Response.ok boolean property?',
    codeSnippet: `import requests

# Simulated response inspection:
# r = requests.get("https://api.example.com/items")
# r.status_code -> integer (e.g. 200, 404, 500)
# r.reason      -> string description (e.g. 'OK', 'Not Found')
# r.ok          -> boolean True if status_code < 400, False otherwise!

status = 200
ok = status < 400
print(f"Status: {status}, Is OK: {ok}")`,
    stdoutExpected: 'Status: 200, Is OK: True',
    explanationTitle: 'Response Status Code and .ok Property',
    explanationText:
      'Every requests method returns a Response object. r.status_code holds the numeric HTTP code. The r.ok property returns True if status_code is less than 400 (meaning all 2xx and 3xx codes evaluate to True, while 4xx and 5xx evaluate to False).',
    complexityInfo: 'PCPP 4.4 Response inspection properties',
  },
  {
    id: 'pcpp-s4-fc-063',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Accessing response payload: r.text vs. r.content and r.encoding',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is the critical distinction between response.text and response.content in requests?',
    codeSnippet: `# r.text: Returns decoded UNICODE STRING (str).
#         Automatically decoded using r.encoding (inferred from HTTP headers or chardet).
#         You can manually set r.encoding if the server provides no charset.

# r.content: Returns RAW BINARY BYTES (bytes).
#            Essential for downloading non-text resources (images, PDFs, ZIPs).

binary_data = b"\\x89PNG\\r\\n\\x1a\\n"
print("content type:", type(binary_data).__name__)
print("text type is str:", isinstance("Hello", str))`,
    stdoutExpected: 'content type: bytes\ntext type is str: True',
    explanationTitle: 'r.text vs. r.content Distinction',
    explanationText:
      'r.text returns the response payload decoded as a Python str according to r.encoding. r.content returns the raw bytes without any decoding, which must be used for binary assets like images, audio files, or serialized data.',
    complexityInfo: 'High-frequency exam trap: text vs content types',
  },
  {
    id: 'pcpp-s4-fc-064',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Automatic JSON deserialization with response.json()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you deserialize a JSON HTTP response body directly into Python dictionaries and lists?',
    codeSnippet: `import json

# In requests: data = r.json()
# Built-in helper that calls json.loads(r.text) internally.
# Raises requests.exceptions.JSONDecodeError (subclass of ValueError) if response is not valid JSON.

mock_response_text = '{"name": "Alice", "score": 95}'
data = json.loads(mock_response_text)
print("Parsed name:", data["name"])
print("Is dict:", isinstance(data, dict))`,
    stdoutExpected: 'Parsed name: Alice\nIs dict: True',
    explanationTitle: 'r.json() Helper Method',
    explanationText:
      'The r.json() method decodes the response body directly into native Python data structures (dict or list). If the response body does not contain valid JSON, it raises an exception (requests.exceptions.JSONDecodeError or ValueError).',
    complexityInfo: 'PCPP 4.4 JSON response handling',
  },
  {
    id: 'pcpp-s4-fc-065',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Passing URL query parameters using the params argument',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How does requests automatically encode query strings using the params dictionary argument?',
    codeSnippet: `from urllib.parse import urlencode

# In requests:
# r = requests.get("https://api.example.com/search", params={"q": "python pcpp", "page": 2})
# Resulting URL: https://api.example.com/search?q=python+pcpp&page=2

# Note: None values in params dictionary are omitted entirely!
query_dict = {"q": "python pcpp", "limit": 10}
encoded_query = urlencode(query_dict)
print("Encoded query string:", encoded_query)`,
    stdoutExpected: 'Encoded query string: q=python+pcpp&limit=10',
    explanationTitle: 'Query Parameters with params=',
    explanationText:
      'Passing params=dict to requests.get() automatically URL-encodes special characters, spaces, and list values into the target query string, appending ? and & separators correctly and cleanly.',
    complexityInfo: 'PCPP 4.4 URL query parameter encoding',
  },
  {
    id: 'pcpp-s4-fc-066',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Supplying custom request headers via headers argument',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you send custom HTTP headers (such as User-Agent or Authorization) with a request?',
    codeSnippet: `import requests

custom_headers = {
    "User-Agent": "MyExamBot/1.0",
    "Accept": "application/json",
    "Authorization": "Bearer my_secret_token_123"
}

# requests.get("https://api.example.com/data", headers=custom_headers)
print("Header count:", len(custom_headers))
print("Accept specified:", custom_headers.get("Accept"))`,
    stdoutExpected: 'Header count: 3\nAccept specified: application/json',
    explanationTitle: 'Custom Request Headers',
    explanationText:
      'All HTTP verb functions in requests accept a headers=dict parameter. Custom headers override default values (such as the default User-Agent: python-requests/x.y.z) and allow sending authentication tokens and API keys.',
    complexityInfo: 'PCPP 4.4 HTTP header customization',
  },
  {
    id: 'pcpp-s4-fc-067',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'POST payloads: data= (form-encoded) vs. json= (JSON body)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'CRITICAL TRAP: What is the difference between requests.post(url, data=payload) and requests.post(url, json=payload)?',
    codeSnippet: `# Case 1: data=dict
# Automatically form-encodes the dict and sets:
# Content-Type: application/x-www-form-urlencoded

# Case 2: json=dict
# Automatically calls json.dumps(dict) and sets:
# Content-Type: application/json

print("data= sets form-urlencoded; json= sets application/json")`,
    stdoutExpected: 'data= sets form-urlencoded; json= sets application/json',
    explanationTitle: 'data= vs. json= in requests.post()',
    explanationText:
      'Passing a dictionary to data= encodes it as an HTML form (application/x-www-form-urlencoded). Passing a dictionary to json= automatically serializes it to JSON and sets the Content-Type header to application/json. If both are passed, json is ignored or will conflict.',
    complexityInfo: 'Critical PCPP-32-10x exam trap: data= vs json=',
  },
  {
    id: 'pcpp-s4-fc-068',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Executing PUT, PATCH, and DELETE with requests',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What functions does the requests module provide for PUT, PATCH, and DELETE verbs?',
    codeSnippet: `import requests

# All standard verbs are top-level module functions:
# r_put   = requests.put("https://api.example.com/users/1", json={"name": "Bob"})
# r_patch = requests.patch("https://api.example.com/users/1", json={"age": 30})
# r_del   = requests.delete("https://api.example.com/users/1")

verbs = ["get", "post", "put", "patch", "delete", "head", "options"]
print("All verbs available:", all(hasattr(requests, v) for v in verbs))`,
    stdoutExpected: 'All verbs available: True',
    explanationTitle: 'HTTP Verb Methods in requests',
    explanationText:
      'The requests module exposes direct convenience functions matching HTTP verbs: requests.get(), post(), put(), patch(), delete(), head(), and options(). Each takes the target URL as its first parameter along with optional parameters (headers, params, data, json, timeout).',
    complexityInfo: 'PCPP 4.4 Top-level HTTP functions',
  },
  {
    id: 'pcpp-s4-fc-069',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Case-insensitive response headers (CaseInsensitiveDict)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Why does r.headers["content-type"] work even if the server sent "Content-Type" or "CONTENT-TYPE"?',
    codeSnippet: `from requests.structures import CaseInsensitiveDict

headers = CaseInsensitiveDict({"Content-Type": "application/json"})

# Case-insensitive header lookups:
print(headers["content-type"])
print(headers["Content-Type"])
print(headers["CONTENT-TYPE"])`,
    stdoutExpected: 'application/json\napplication/json\napplication/json',
    explanationTitle: 'CaseInsensitiveDict for Headers',
    explanationText:
      'HTTP/1.1 specifications state that header field names are case-insensitive. In requests, response.headers returns a CaseInsensitiveDict, allowing keys to be accessed with any casing ("content-type", "Content-Type", or "CONTENT-TYPE") without throwing KeyError.',
    complexityInfo: 'PCPP 4.4 Header case-insensitivity rule',
  },
  {
    id: 'pcpp-s4-fc-070',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Raising exceptions on HTTP errors with response.raise_for_status()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What does response.raise_for_status() do when an HTTP request encounters a 4xx or 5xx status code?',
    codeSnippet: `import requests

# raise_for_status() checks status_code:
# - If status_code is 200-399: returns None (does nothing)
# - If status_code is 4xx or 5xx: raises requests.exceptions.HTTPError!

print("HTTPError is subclass of RequestException:",
      issubclass(requests.exceptions.HTTPError, requests.exceptions.RequestException))`,
    stdoutExpected: 'HTTPError is subclass of RequestException: True',
    explanationTitle: 'raise_for_status() Error Handling',
    explanationText:
      'By default, requests does NOT raise exceptions for 4xx or 5xx status codes (since communicating with the server was successful). Calling response.raise_for_status() raises an HTTPError if the response represents an error code, making error handling straightforward.',
    complexityInfo: 'PCPP 4.4 Idiomatic HTTP error raising',
  },
  {
    id: 'pcpp-s4-fc-071',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Configuring timeouts in requests (single float vs. tuple)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you prevent a request from hanging indefinitely, and what does passing a 2-tuple to timeout do?',
    codeSnippet: `import requests

# Case 1: Single float -> applied to both connect and read phases combined:
# requests.get("https://api.example.com", timeout=3.5)

# Case 2: 2-tuple (connect_timeout, read_timeout):
# requests.get("https://api.example.com", timeout=(2.0, 5.0))
# - connect_timeout: Time allowed to establish TCP connection
# - read_timeout: Time allowed to wait for the first byte of response data

print("Tuple timeout: (connect_timeout, read_timeout)")`,
    stdoutExpected: 'Tuple timeout: (connect_timeout, read_timeout)',
    explanationTitle: 'Request Timeouts (Float vs. Tuple)',
    explanationText:
      'By default, requests calls will block indefinitely if the server does not respond. Setting timeout=seconds guarantees raising requests.exceptions.Timeout if elapsed time is exceeded. Passing a tuple timeout=(connect_t, read_t) sets separate limits for connection and read phases.',
    complexityInfo: 'PCPP 4.4 Timeout configuration best practices',
  },
  {
    id: 'pcpp-s4-fc-072',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'HTTP Basic Authentication with auth=("user", "pass")',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How does requests handle HTTP Basic Authentication, and what header is generated?',
    codeSnippet: `import base64

user, pwd = "admin", "secret123"
# In requests:
# requests.get("https://api.example.com/admin", auth=(user, pwd))
# Or explicitly: auth=HTTPBasicAuth(user, pwd)

# Generates header: 'Authorization: Basic <base64(user:pwd)>'
raw = f"{user}:{pwd}".encode("utf-8")
encoded = base64.b64encode(raw).decode("ascii")
print(f"Authorization: Basic {encoded}")`,
    stdoutExpected: 'Authorization: Basic YWRtaW46c2VjcmV0MTIz',
    explanationTitle: 'HTTP Basic Authentication (auth=)',
    explanationText:
      'Passing a 2-tuple auth=("username", "password") to any request function automatically sets the "Authorization: Basic <base64>" header. It can also be passed explicitly using requests.auth.HTTPBasicAuth(user, password).',
    complexityInfo: 'PCPP 4.4 Authentication helpers',
  },
  {
    id: 'pcpp-s4-fc-073',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Persistent sessions with requests.Session() and connection pooling',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What are the 3 major performance and state advantages of using requests.Session()?',
    codeSnippet: `import requests

# Advantages of requests.Session():
# 1. Connection Pooling: Reuses underlying TCP socket across multiple requests (HTTP Keep-Alive),
#    drastically reducing latency by avoiding redundant TCP 3-way handshakes!
# 2. Cookie Persistence: Cookies set by the server in one request are automatically sent in subsequent requests.
# 3. Default Configuration: Shared headers, auth, or certs set on session apply to all requests.

with requests.Session() as s:
    s.headers.update({"X-API-Key": "abc-123"})
    print("Session header configured:", s.headers.get("X-API-Key"))`,
    stdoutExpected: 'Session header configured: abc-123',
    explanationTitle: 'requests.Session() Capabilities',
    explanationText:
      'requests.Session() provides persistent TCP connections (via urllib3 connection pooling), automatic cookie persistence across multiple sequential requests, and shared default parameters (headers, auth, proxies) applied across all calls made through the session object.',
    complexityInfo: 'High-frequency exam question on requests.Session()',
  },
  {
    id: 'pcpp-s4-fc-074',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Cookie handling: inspecting response.cookies and passing cookies dict',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you inspect cookies sent by a server and supply client cookies in a request?',
    codeSnippet: `import requests

# Supplying custom cookies in request:
# r = requests.get(url, cookies={"session_token": "xyz789"})

# Inspecting received cookies:
# r.cookies is a RequestsCookieJar object (acts like a dictionary):
# cookie_val = r.cookies.get("session_token")

print("Cookies can be passed as dict and inspected via RequestsCookieJar")`,
    stdoutExpected: 'Cookies can be passed as dict and inspected via RequestsCookieJar',
    explanationTitle: 'Cookies in requests (RequestsCookieJar)',
    explanationText:
      'Cookies can be passed to requests via the cookies=dict parameter. Incoming cookies are stored in response.cookies as a RequestsCookieJar instance, which behaves like a dictionary while also providing cookie domain and path management methods.',
    complexityInfo: 'PCPP 4.4 Cookie management',
  },
  {
    id: 'pcpp-s4-fc-075',
    track: 'pcpp',
    cardType: 'PCPP 4.4 • The requests Library',
    topic: 'Handling HTTP redirects and inspecting redirect history with r.history',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How does requests handle HTTP 3xx redirects by default, and how do you inspect the redirect history chain?',
    codeSnippet: `import requests

# By default:
# - requests.get() automatically follows 3xx redirects (allow_redirects=True).
# - requests.head() defaults to allow_redirects=False.

# To disable: requests.get(url, allow_redirects=False)

# r.history: A list of Response objects created in order to complete the request!
# Sorted from oldest to newest redirect response.

print("GET follows redirects by default; history is list of intermediate Responses")`,
    stdoutExpected: 'GET follows redirects by default; history is list of intermediate Responses',
    explanationTitle: 'Redirect Handling and r.history',
    explanationText:
      'By default, requests.get() follows HTTP redirects. You can suppress this behavior by setting allow_redirects=False. When redirects occur, r.history stores a list of previous Response objects (e.g. [Response [301], Response [302]]) leading up to the final destination response.',
    complexityInfo: 'PCPP 4.4 Redirect tracking and allow_redirects',
  },
];
