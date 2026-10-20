import { Flashcard } from '../types';

export const pceaSection3CardsPart2: Flashcard[] = [
  {
    id: "pcea-3-051",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Parsing HTML Tables",
    difficulty: "Intermediate",
    question: "How can an automation script extract all rows from an HTML table `<table>`?",
    codeSnippet: "table = soup.find('table')\nrows_data = []\nfor tr in table.find_all('tr'):\n    cols = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]\n    if cols:\n        rows_data.append(cols)",
    options: [
      "Iterate through tr tags, and for each tr extract text from all td/th tags into a list",
      "Call table.to_dataframe() directly in BeautifulSoup",
      "Use json.loads(table)",
      "Use re.findall('table', html)"
    ],
    correctAnswer: 0,
    explanation: "Iterating `table.find_all('tr')` and extracting `td.get_text(strip=True)` from each column is the standard robust scraping pattern for HTML tables.",
    officialRef: "PCEA-30-01 Block 3.3 - Table Scraping",
    tags: ["tables", "table-scraping", "html-parsing"]
  },
  {
    id: "pcea-3-052",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Preventing NoneType Crashes",
    difficulty: "Intermediate",
    question: "What is the best way to avoid `AttributeError: 'NoneType' object has no attribute 'text'` when scraping?",
    codeSnippet: "elem = soup.find('span', class_='price')\nprice = elem.get_text(strip=True) if elem else 'N/A'",
    options: [
      "Check `if elem:` before accessing `.text` or use a ternary conditional fallback",
      "Turn off Python error reporting",
      "Wrap the entire computer in a try block",
      "Assume elements are always present"
    ],
    correctAnswer: 0,
    explanation: "When target elements might be missing from some pages, verifying `if elem is not None:` prevents catastrophic `AttributeError` crashes.",
    officialRef: "PCEA-30-01 Block 3.3 - Defensive Scraping",
    tags: ["none-type", "attribute-error", "defensive-coding"]
  },
  {
    id: "pcea-3-053",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Regex Filters in BS4",
    difficulty: "Intermediate",
    question: "How can you find all tags whose class contains the word `'btn-'` followed by digits?",
    codeSnippet: "import re\nfrom bs4 import BeautifulSoup\nbuttons = soup.find_all('button', class_=re.compile(r'btn-\\d+'))",
    options: [
      "soup.find_all('button', class_=re.compile(r'btn-\\d+'))",
      "soup.find_all('button', class_='btn-*')",
      "soup.find_all('button', regex='btn-\\d+')",
      "soup.regex('button.btn-\\d+')"
    ],
    correctAnswer: 0,
    explanation: "Passing a compiled regular expression `re.compile(...)` to tag filters matches attribute values matching that regex pattern.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["regex-filters", "re-compile", "bs4"]
  },
  {
    id: "pcea-3-054",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "lxml vs html.parser",
    difficulty: "Intermediate",
    question: "What is the advantage of using the third-party `lxml` parser over Python's built-in `html.parser` in BeautifulSoup?",
    codeSnippet: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(huge_html, 'lxml')",
    options: [
      "lxml is written in C and is significantly faster and more forgiving of broken, malformed HTML",
      "lxml uses 0% CPU",
      "lxml converts HTML to Python classes automatically",
      "lxml does not require strings"
    ],
    correctAnswer: 0,
    explanation: "`lxml` is a high-speed C-based parser offering superior performance and lenient handling of broken, non-compliant HTML documents.",
    officialRef: "PCEA-30-01 Block 3.3 - Parsers",
    tags: ["lxml", "html-parser", "performance"]
  },
  {
    id: "pcea-3-055",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Modifying the DOM",
    difficulty: "Intermediate",
    question: "How can you remove unwanted `<script>` and `<style>` tags from a page before extracting article text?",
    codeSnippet: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\nfor tag in soup(['script', 'style']):\n    tag.decompose()\nclean_text = soup.get_text(strip=True)",
    options: [
      "tag.decompose() or tag.extract()",
      "tag.delete()",
      "del tag",
      "tag.clear_element()"
    ],
    correctAnswer: 0,
    explanation: "`tag.decompose()` completely destroys a tag and its contents from the parse tree, leaving only the desired content.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["decompose", "dom-cleaning", "text-extraction"]
  },
  {
    id: "pcea-3-056",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Child Iteration",
    difficulty: "Beginner",
    question: "What is the difference between `tag.contents` and `tag.children` in BeautifulSoup?",
    codeSnippet: "tag = soup.find('ul')\ncontent_list = tag.contents  # list\nchild_iter = tag.children     # iterator",
    options: [
      "contents returns a list of direct children; children returns an iterator",
      "contents includes all descendants, children includes only direct",
      "contents returns strings, children returns tags",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`tag.contents` is a materialized Python list of a tag's immediate children, while `tag.children` is an iterator over those children.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["contents", "children", "dom-hierarchy"]
  },
  {
    id: "pcea-3-057",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Attribute List Values",
    difficulty: "Intermediate",
    question: "In HTML, what data type does `tag['class']` return in BeautifulSoup?",
    codeSnippet: "from bs4 import BeautifulSoup\nsoup = BeautifulSoup('<div class=\"btn btn-primary active\"></div>', 'html.parser')\nprint(soup.div['class'])",
    options: [
      "['btn', 'btn-primary', 'active'] (a list of strings)",
      "'btn btn-primary active' (a single string)",
      "A set",
      "A dictionary"
    ],
    correctAnswer: 0,
    explanation: "HTML multi-valued attributes like `class` are parsed by BeautifulSoup into a Python `list` of individual class tokens.",
    officialRef: "PCEA-30-01 Block 3.3 - BeautifulSoup",
    tags: ["class-list", "multi-valued-attributes", "bs4"]
  },
  {
    id: "pcea-3-058",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Combining Requests & BS4",
    difficulty: "Beginner",
    question: "What is the standard idiom to download and parse a webpage using `requests` and `BeautifulSoup`?",
    codeSnippet: "import requests\nfrom bs4 import BeautifulSoup\n\nr = requests.get('https://news.ycombinator.com', timeout=5)\nr.raise_for_status()\nsoup = BeautifulSoup(r.text, 'html.parser')",
    options: [
      "Pass r.text to BeautifulSoup along with 'html.parser'",
      "Pass the response object r directly to BeautifulSoup()",
      "Use requests.scrape()",
      "Call r.soup()"
    ],
    correctAnswer: 0,
    explanation: "Downloading with `requests.get()` followed by passing `r.text` into `BeautifulSoup(r.text, 'html.parser')` is the universal web scraping pattern.",
    officialRef: "PCEA-30-01 Block 3.3 - Integration",
    tags: ["requests-bs4", "idiom", "web-scraping"]
  },
  {
    id: "pcea-3-059",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "CSS Attribute Selector",
    difficulty: "Intermediate",
    question: "How do you select all links with a `target=\"_blank\"` attribute using CSS selectors in BeautifulSoup?",
    codeSnippet: "links = soup.select('a[target=\"_blank\"]')",
    options: [
      "soup.select('a[target=\"_blank\"]')",
      "soup.select('a.target._blank')",
      "soup.select('a:target(_blank)')",
      "soup.select('a -> _blank')"
    ],
    correctAnswer: 0,
    explanation: "Standard CSS attribute selector syntax `tag[attribute=\"value\"]` queries elements with matching attribute values.",
    officialRef: "PCEA-30-01 Block 3.3 - CSS Selectors",
    tags: ["css-selectors", "attribute-selectors", "bs4"]
  },
  {
    id: "pcea-3-060",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.3",
    category: "Extracting Nested Links",
    difficulty: "Beginner",
    question: "How do you collect all image source URLs (`<img src=\"...\">`) from a parsed page?",
    codeSnippet: "img_urls = [img['src'] for img in soup.find_all('img') if img.get('src')]",
    options: [
      "img_urls = [img['src'] for img in soup.find_all('img') if img.get('src')]",
      "img_urls = soup.find_all('src')",
      "img_urls = soup.images.urls",
      "img_urls = list(soup.src)"
    ],
    correctAnswer: 0,
    explanation: "Iterating through `soup.find_all('img')` and retrieving `img['src']` gathers all image locations on the page.",
    officialRef: "PCEA-30-01 Block 3.3 - Asset Scraping",
    tags: ["image-scraping", "find-all", "data-extraction"]
  },
  {
    id: "pcea-3-061",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "requests.Session",
    difficulty: "Beginner",
    question: "What are the two major advantages of using `requests.Session()` across multiple requests?",
    codeSnippet: "import requests\nwith requests.Session() as s:\n    s.headers.update({'User-Agent': 'Bot/1.0'})\n    r1 = s.get('https://example.com/login')\n    r2 = s.get('https://example.com/dashboard')",
    options: [
      "TCP connection pooling (reusing TCP/TLS connections) and automatic cookie persistence across requests",
      "It hides the computer's IP address and bypasses firewalls",
      "It translates web pages into Spanish",
      "It encrypts local hard drive files"
    ],
    correctAnswer: 0,
    explanation: "`requests.Session()` persists cookies across requests and reuses underlying TCP sockets via connection pooling, drastically improving network throughput.",
    officialRef: "PCEA-30-01 Block 3.4 - Sessions",
    tags: ["session", "connection-pooling", "cookies"]
  },
  {
    id: "pcea-3-062",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Default Session Headers",
    difficulty: "Intermediate",
    question: "How do you set a default header (such as `Authorization`) that will automatically be sent on EVERY request made by a session?",
    codeSnippet: "session = requests.Session()\nsession.headers.update({'Authorization': 'Bearer my_token'})\nsession.get('https://api.example.com/data')  # Header included automatically",
    options: [
      "session.headers.update({'Authorization': 'Bearer my_token'})",
      "session.set_header('Authorization', 'Bearer my_token')",
      "session.default_headers = [...]",
      "session.auth_header = '...'"
    ],
    correctAnswer: 0,
    explanation: "`session.headers.update({...})` persists default headers across all subsequent calls invoked through that session instance.",
    officialRef: "PCEA-30-01 Block 3.4 - Sessions",
    tags: ["session-headers", "persistent-headers", "requests"]
  },
  {
    id: "pcea-3-063",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Automated Retries Adapter",
    difficulty: "Advanced",
    question: "How can an automation script configure `requests.Session` to automatically retry failed requests on HTTP 500, 502, 503, and 504?",
    codeSnippet: "from urllib3.util import Retry\nfrom requests.adapters import HTTPAdapter\n\nretry_strat = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503, 504])\nadapter = HTTPAdapter(max_retries=retry_strat)\nsession = requests.Session()\nsession.mount('https://', adapter)",
    options: [
      "Mounting an HTTPAdapter with a configured urllib3.util.Retry strategy",
      "Calling session.set_retry_count(3)",
      "Passing auto_retry=True to requests.get()",
      "Setting retry=True on the operating system"
    ],
    correctAnswer: 0,
    explanation: "Mounting an `HTTPAdapter` with `urllib3.util.Retry` enables automated exponential backoff retries for transient gateway and network failures.",
    officialRef: "PCEA-30-01 Block 3.4 - Reliability",
    tags: ["retries", "http-adapter", "urllib3"]
  },
  {
    id: "pcea-3-064",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Rate Limiting with sleep",
    difficulty: "Beginner",
    question: "Why is inserting `time.sleep()` between HTTP requests critical in automated batch scraping?",
    codeSnippet: "import time, requests\nfor item_id in ids:\n    res = requests.get(f'https://api.example.com/items/{item_id}')\n    time.sleep(1.0)",
    options: [
      "To prevent overwhelming target web servers and avoid triggering IP bans or HTTP 429 rate limit blocks",
      "Because Python cannot make more than 1 request per second",
      "To allow the hard drive to spin down",
      "To clear memory caches"
    ],
    correctAnswer: 0,
    explanation: "Polite scraping includes intentional delays (`time.sleep`) to respect server resource limits and prevent IP blacklisting.",
    officialRef: "PCEA-30-01 Block 3.4 - Politeness",
    tags: ["rate-limiting", "time-sleep", "polite-scraping"]
  },
  {
    id: "pcea-3-065",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Random Jitter",
    difficulty: "Intermediate",
    question: "Why is adding random 'jitter' (`time.sleep(random.uniform(1.0, 3.0))`) recommended over static sleep intervals?",
    codeSnippet: "import time, random\ntime.sleep(random.uniform(1.5, 3.5))",
    options: [
      "It varies timing intervals, making automated request patterns less predictable and avoiding synchronized traffic spikes",
      "It speeds up script execution by 50%",
      "It allows Python to run in multi-threaded mode",
      "It generates random encryption keys"
    ],
    correctAnswer: 0,
    explanation: "Adding randomized jitter distributes traffic naturally, avoiding thundering herd synchronization and evasion of rigid automated bot heuristics.",
    officialRef: "PCEA-30-01 Block 3.4 - Politeness",
    tags: ["jitter", "random-sleep", "best-practices"]
  },
  {
    id: "pcea-3-066",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Offset Pagination Loop",
    difficulty: "Intermediate",
    question: "How is page-based pagination typically implemented when crawling an API endpoint?",
    codeSnippet: "page = 1\nwhile True:\n    resp = requests.get(f'https://api.example.com/items?page={page}').json()\n    if not resp.get('items'):\n        break  # Reached end of data\n    process(resp['items'])\n    page += 1",
    options: [
      "Increment a page counter in a while loop until an empty list or 404 is encountered",
      "Run a for loop from 1 to 1,000,000 without stopping",
      "Set requests.get(url, all_pages=True)",
      "Call api.fetch_everything()"
    ],
    correctAnswer: 0,
    explanation: "A while loop that increments the `page` query parameter until the returned item collection is empty is the standard pattern for page-offset APIs.",
    officialRef: "PCEA-30-01 Block 3.4 - Pagination",
    tags: ["page-offset", "pagination-loop", "api-consumption"]
  },
  {
    id: "pcea-3-067",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "urljoin",
    difficulty: "Intermediate",
    question: "Which standard library function correctly converts a relative link `'/docs/setup.html'` to an absolute URL based on `'https://example.com/blog/'`?",
    codeSnippet: "from urllib.parse import urljoin\nfull_url = urljoin('https://example.com/blog/', '/docs/setup.html')\n# 'https://example.com/docs/setup.html'",
    options: [
      "urllib.parse.urljoin",
      "pathlib.Path.join_url",
      "os.path.join",
      "requests.url_combine"
    ],
    correctAnswer: 0,
    explanation: "`urllib.parse.urljoin(base, url)` handles RFC 3986 relative URL resolution, handling relative paths, leading slashes, and anchor tags.",
    officialRef: "PCEA-30-01 Block 3.4 - URL Handling",
    tags: ["urljoin", "urllib-parse", "relative-urls"]
  },
  {
    id: "pcea-3-068",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "urlencode",
    difficulty: "Intermediate",
    question: "Which standard library function encodes a dictionary into a query string (`'name=John+Doe&age=30'`)?",
    codeSnippet: "from urllib.parse import urlencode\nquery = urlencode({'name': 'John Doe', 'age': 30})",
    options: [
      "urllib.parse.urlencode",
      "urllib.parse.quote_dict",
      "requests.encode_params",
      "json.to_query"
    ],
    correctAnswer: 0,
    explanation: "`urllib.parse.urlencode(dict)` converts key-value mappings into standard percent-encoded URL query strings.",
    officialRef: "PCEA-30-01 Block 3.4 - URL Handling",
    tags: ["urlencode", "urllib-parse", "query-strings"]
  },
  {
    id: "pcea-3-069",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "robots.txt Awareness",
    difficulty: "Beginner",
    question: "What is the purpose of checking a website's `/robots.txt` file before deploying an automated scraper?",
    codeSnippet: "# Inspecting: https://example.com/robots.txt\n# User-agent: *\n# Disallow: /private/\n# Crawl-delay: 5",
    options: [
      "To discover what paths and rate limits the site owner has designated as off-limits to automated crawlers",
      "To find the administrator password",
      "To download the website source code",
      "To test the site's SSL certificate"
    ],
    correctAnswer: 0,
    explanation: "`robots.txt` specifies rules and crawl delays set by website administrators governing which areas automated crawlers are allowed or forbidden to index.",
    officialRef: "PCEA-30-01 Block 3.4 - Ethics & Compliance",
    tags: ["robots-txt", "web-ethics", "crawler-policy"]
  },
  {
    id: "pcea-3-070",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "urllib.robotparser",
    difficulty: "Intermediate",
    question: "Which built-in Python module parses `robots.txt` files to programmatically verify if your bot can crawl a URL?",
    codeSnippet: "import urllib.robotparser\nrp = urllib.robotparser.RobotFileParser()\nrp.set_url('https://example.com/robots.txt')\nrp.read()\ncan_fetch = rp.can_fetch('MyBot', 'https://example.com/data')",
    options: [
      "urllib.robotparser",
      "robots_checker",
      "requests.robots",
      "bs4.robots"
    ],
    correctAnswer: 0,
    explanation: "`urllib.robotparser.RobotFileParser` fetches and evaluates `robots.txt` files, testing whether a specific user-agent is permitted to fetch target URLs.",
    officialRef: "PCEA-30-01 Block 3.4 - Ethics & Compliance",
    tags: ["robotparser", "standard-library", "compliance"]
  },
  {
    id: "pcea-3-071",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Retry-After Header",
    difficulty: "Intermediate",
    question: "When an API responds with HTTP 429 and includes a `Retry-After: 15` header, what should your script do?",
    codeSnippet: "import time\nretry_after = int(r.headers.get('Retry-After', 5))\ntime.sleep(retry_after)",
    options: [
      "Sleep for at least 15 seconds before resending the request",
      "Immediately retry the request 15 times",
      "Change your IP address",
      "Abort the script and delete the virtual environment"
    ],
    correctAnswer: 0,
    explanation: "The `Retry-After` header specifies how many seconds the client must wait before making another request to allow rate limit windows to reset.",
    officialRef: "PCEA-30-01 Block 3.4 - Rate Limiting",
    tags: ["retry-after", "rate-limiting", "http-429"]
  },
  {
    id: "pcea-3-072",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Session Cookies",
    difficulty: "Intermediate",
    question: "How can an automation script inspect cookies saved by a `requests.Session` object?",
    codeSnippet: "session = requests.Session()\nsession.get('https://example.com/login')\nfor cookie in session.cookies:\n    print(cookie.name, cookie.value)",
    options: [
      "session.cookies",
      "session.headers['Cookies']",
      "session.cookie_jar()",
      "session.tokens"
    ],
    correctAnswer: 0,
    explanation: "`session.cookies` contains a `RequestsCookieJar` maintaining all cookies received across requests, which are automatically sent back in future calls.",
    officialRef: "PCEA-30-01 Block 3.4 - Cookies",
    tags: ["cookies", "cookie-jar", "session"]
  },
  {
    id: "pcea-3-073",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Exponential Backoff",
    difficulty: "Intermediate",
    question: "What is the mathematical pattern of 'exponential backoff' used in automated retry loops?",
    codeSnippet: "# Wait times: 1s, 2s, 4s, 8s, 16s...\nfor attempt in range(max_retries):\n    wait = 2 ** attempt\n    time.sleep(wait)",
    options: [
      "Each retry wait duration doubles (or multiplies exponentially) relative to the previous attempt",
      "Wait time decreases linearly on each retry",
      "Wait time is constant (e.g. exactly 5 seconds every time)",
      "Wait time is determined by CPU temperature"
    ],
    correctAnswer: 0,
    explanation: "Exponential backoff (`2 ** attempt`) progressively lengthens the wait time between retries, giving failing upstream services time to recover.",
    officialRef: "PCEA-30-01 Block 3.4 - Reliability",
    tags: ["exponential-backoff", "retry-logic", "fault-tolerance"]
  },
  {
    id: "pcea-3-074",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Session Closing",
    difficulty: "Beginner",
    question: "Why should `requests.Session()` be used inside a `with` statement context manager?",
    codeSnippet: "with requests.Session() as session:\n    session.get('https://api.example.com')\n# Underlying socket connections are cleanly closed upon exiting",
    options: [
      "To ensure underlying TCP connection sockets and adapters are cleanly closed when done",
      "To prevent other programs from accessing the internet",
      "Because requests fails without with statements",
      "To speed up DNS resolution"
    ],
    correctAnswer: 0,
    explanation: "Using `with requests.Session() as s:` guarantees that underlying TCP connection pools and socket handles are closed, preventing resource leaks.",
    officialRef: "PCEA-30-01 Block 3.4 - Resource Management",
    tags: ["context-manager", "session-closure", "clean-code"]
  },
  {
    id: "pcea-3-075",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Link Header Pagination",
    difficulty: "Advanced",
    question: "Some APIs (like GitHub) use RFC 5988 `Link` headers for pagination. How do you access them in `requests`?",
    codeSnippet: "r = requests.get('https://api.github.com/events')\nnext_url = r.links.get('next', {}).get('url')",
    options: [
      "r.links",
      "r.headers['Pagination']",
      "r.pages",
      "r.next_page()"
    ],
    correctAnswer: 0,
    explanation: "`response.links` automatically parses RFC 5988 `Link` headers into a convenient dictionary (e.g. `r.links['next']['url']`).",
    officialRef: "PCEA-30-01 Block 3.4 - Advanced Pagination",
    tags: ["link-header", "rfc-5988", "pagination"]
  },
  {
    id: "pcea-3-076",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Simulating Form Login",
    difficulty: "Intermediate",
    question: "How can an automation script log into a traditional web application that requires session cookies?",
    codeSnippet: "with requests.Session() as s:\n    # 1. Fetch login page to capture CSRF token\n    login_page = s.get('https://example.com/login')\n    # 2. POST credentials\n    s.post('https://example.com/login', data={'user': 'me', 'pass': 'secret'})\n    # 3. Access protected dashboard using same session\n    dash = s.get('https://example.com/dashboard')",
    options: [
      "Use requests.Session to capture CSRF tokens, post login form data, and maintain authenticated session cookies across subsequent requests",
      "Send login credentials in query parameters of every URL",
      "Use a fresh requests.get() call for each step",
      "Download the site's database directly"
    ],
    correctAnswer: 0,
    explanation: "A `Session` object stores cookies received during authentication, automatically attaching them to subsequent requests to access protected pages.",
    officialRef: "PCEA-30-01 Block 3.4 - Web Automation",
    tags: ["form-login", "session-cookies", "csrf"]
  },
  {
    id: "pcea-3-077",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Handling HTTP 503",
    difficulty: "Intermediate",
    question: "What does HTTP status `503 Service Unavailable` indicate to an automated worker?",
    codeSnippet: "# API response: HTTP 503 Service Unavailable",
    options: [
      "The endpoint does not exist",
      "The server is temporarily overloaded or undergoing maintenance, and the client should retry after a delay",
      "The API key was revoked",
      "The payload was malformed"
    ],
    correctAnswer: 1,
    explanation: "HTTP 503 indicates temporary server overload or maintenance downtime. Automations should implement retry loops with backoff.",
    officialRef: "PCEA-30-01 Block 3.4 - Status Codes",
    tags: ["http-503", "service-unavailable", "retries"]
  },
  {
    id: "pcea-3-078",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Streaming Large Requests",
    difficulty: "Intermediate",
    question: "When checking service health by fetching HTTP headers only without downloading body content, which method should be used?",
    codeSnippet: "import requests\nr = requests.head('https://example.com/huge-file.iso')\nprint(r.headers.get('content-length'))",
    options: [
      "requests.head()",
      "requests.get()",
      "requests.trace()",
      "requests.options()"
    ],
    correctAnswer: 0,
    explanation: "`requests.head()` retrieves only HTTP response headers without downloading the message body, saving bandwidth and execution time.",
    officialRef: "PCEA-30-01 Block 3.4 - HTTP Methods",
    tags: ["http-head", "bandwidth-saving", "health-checks"]
  },
  {
    id: "pcea-3-079",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "Session Mount Prefix",
    difficulty: "Advanced",
    question: "What does `session.mount('https://', adapter)` do?",
    codeSnippet: "session.mount('https://', adapter)",
    options: [
      "Binds the custom transport adapter to all outgoing HTTPS requests made through that session",
      "Mounts a network disk drive",
      "Encrypts local cookies",
      "Binds the script to port 443"
    ],
    correctAnswer: 0,
    explanation: "`session.mount(prefix, adapter)` registers a transport adapter to intercept and process all requests matching the URL prefix (e.g. `'https://'`).",
    officialRef: "PCEA-30-01 Block 3.4 - Transport Adapters",
    tags: ["session-mount", "transport-adapter", "urllib3"]
  },
  {
    id: "pcea-3-080",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.4",
    category: "URL Query Dict",
    difficulty: "Intermediate",
    question: "How do you parse an existing query string `'?cat=tools&sort=price'` into a Python dictionary?",
    codeSnippet: "from urllib.parse import parse_qs\nparams = parse_qs('cat=tools&sort=price')",
    options: [
      "urllib.parse.parse_qs",
      "requests.to_dict",
      "string.split_query",
      "json.loads"
    ],
    correctAnswer: 0,
    explanation: "`urllib.parse.parse_qs()` parses a query string into a dictionary where values are lists of strings for each parameter key.",
    officialRef: "PCEA-30-01 Block 3.4 - URL Handling",
    tags: ["parse-qs", "query-parsing", "urllib-parse"]
  },
  {
    id: "pcea-3-081",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Streaming Downloads",
    difficulty: "Intermediate",
    question: "Why must large file downloads (e.g. a 500 MB database backup) use `stream=True` in `requests.get()`?",
    codeSnippet: "import requests\nwith requests.get('https://example.com/backup.dump', stream=True) as r:\n    r.raise_for_status()\n    with open('backup.dump', 'wb') as f:\n        for chunk in r.iter_content(chunk_size=8192):\n            f.write(chunk)",
    options: [
      "To prevent downloading the entire multi-gigabyte file into system RAM all at once, which could cause a MemoryError",
      "Because requests refuses to download files larger than 1 MB without it",
      "It speeds up network download speeds by 10x",
      "It validates file virus signatures"
    ],
    correctAnswer: 0,
    explanation: "`stream=True` defers downloading the response body until iterated over with `iter_content()`, streaming data directly to disk without bloating memory.",
    officialRef: "PCEA-30-01 Block 3.5 - File Downloads",
    tags: ["stream-true", "iter-content", "memory-efficiency"]
  },
  {
    id: "pcea-3-082",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "iter_content chunk_size",
    difficulty: "Beginner",
    question: "What is the role of `chunk_size=8192` in `response.iter_content()`?",
    codeSnippet: "for chunk in r.iter_content(chunk_size=8192):\n    f.write(chunk)",
    options: [
      "Specifies the byte size of data read into memory per iteration (8 KB)",
      "Specifies the maximum total download file size",
      "Limits network speed to 8 KB per second",
      "Sets timeout to 8192 ms"
    ],
    correctAnswer: 0,
    explanation: "`chunk_size` defines the number of bytes read into memory per iteration chunk, balancing memory consumption and I/O efficiency.",
    officialRef: "PCEA-30-01 Block 3.5 - File Downloads",
    tags: ["chunk-size", "iter-content", "streaming"]
  },
  {
    id: "pcea-3-083",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Download Progress Calculation",
    difficulty: "Intermediate",
    question: "Which HTTP response header tells your automation script the total size of a file before downloading begins?",
    codeSnippet: "total_bytes = int(r.headers.get('content-length', 0))",
    options: [
      "Content-Length",
      "File-Size",
      "Total-Bytes",
      "Transfer-Size"
    ],
    correctAnswer: 0,
    explanation: "The `Content-Length` header indicates the total size of the response entity body in bytes, allowing automated progress tracking.",
    officialRef: "PCEA-30-01 Block 3.5 - Headers",
    tags: ["content-length", "progress-tracking", "http-headers"]
  },
  {
    id: "pcea-3-084",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Download Verification",
    difficulty: "Intermediate",
    question: "How should an automated asset downloader verify that a downloaded file was not corrupted during transit?",
    codeSnippet: "import hashlib\n\nhasheng = hashlib.sha256()\nwith open('file.zip', 'rb') as f:\n    while chunk := f.read(8192):\n        hasheng.update(chunk)\nassert hasheng.hexdigest() == expected_checksum",
    options: [
      "Calculate the SHA-256 or MD5 cryptographic hash of the downloaded file and compare it against the expected checksum",
      "Check that the filename ends in .zip",
      "Check that file size is greater than 0",
      "Open the file in text mode and print it"
    ],
    correctAnswer: 0,
    explanation: "Comparing cryptographic digest baselines (e.g. SHA-256) guarantees that the file downloaded completely and without bit-rot or tampering.",
    officialRef: "PCEA-30-01 Block 3.5 - Verification",
    tags: ["checksum", "hashlib", "data-integrity"]
  },
  {
    id: "pcea-3-085",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Saving Binary Files",
    difficulty: "Beginner",
    question: "When writing downloaded binary files (like images, ZIPs, or PDFs) to disk, what file mode must be used?",
    codeSnippet: "with open('document.pdf', 'wb') as f:\n    f.write(r.content)",
    options: [
      "'w'",
      "'wb'",
      "'w+'",
      "'a'"
    ],
    correctAnswer: 1,
    explanation: "`'wb'` (write binary) ensures that bytes are written directly without line-ending translation (`\\n` to `\\r\\n`), preventing binary corruption.",
    officialRef: "PCEA-30-01 Block 3.5 - File I/O",
    tags: ["binary-mode", "wb", "file-writing"]
  },
  {
    id: "pcea-3-086",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Sanitizing Download Filenames",
    difficulty: "Intermediate",
    question: "Why must filenames extracted from web headers (e.g. `Content-Disposition`) be sanitized before saving to disk?",
    codeSnippet: "import re, pathlib\nraw_filename = '../../etc/cron.d/malicious'\nsafe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', pathlib.Path(raw_filename).name)",
    options: [
      "To prevent directory traversal attacks (e.g. '../../etc/shadow') and illegal filesystem characters",
      "To make filenames strictly uppercase",
      "Because Windows does not support lowercase letters",
      "To compress the filename"
    ],
    correctAnswer: 0,
    explanation: "Unsanitized filenames can contain path traversal sequences (`../`) or characters illegal on the host filesystem (`:`, `*`, `?`, `|`), creating vulnerabilities.",
    officialRef: "PCEA-30-01 Block 3.5 - Security",
    tags: ["path-traversal", "sanitization", "security"]
  },
  {
    id: "pcea-3-087",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Content-Disposition Header",
    difficulty: "Intermediate",
    question: "How do servers suggest a download filename to HTTP clients?",
    codeSnippet: "# Server response header:\n# Content-Disposition: attachment; filename=\"monthly_report_2026.xlsx\"",
    options: [
      "Via the Content-Disposition header",
      "Via the Title header",
      "Via the User-Agent header",
      "Via the Referer header"
    ],
    correctAnswer: 0,
    explanation: "The `Content-Disposition: attachment; filename=\"...\"` header indicates that the response should be saved as a file and suggests a filename.",
    officialRef: "PCEA-30-01 Block 3.5 - Headers",
    tags: ["content-disposition", "file-download", "http-headers"]
  },
  {
    id: "pcea-3-088",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Extracting Links with BS4",
    difficulty: "Beginner",
    question: "How do you collect all PDF download links from an archive page?",
    codeSnippet: "from bs4 import BeautifulSoup\npdf_links = [a['href'] for a in soup.find_all('a', href=True) if a['href'].endswith('.pdf')]",
    options: [
      "Filter soup.find_all('a', href=True) where a['href'].endswith('.pdf')",
      "soup.find('pdf')",
      "soup.select('pdf')",
      "re.match('pdf', soup)"
    ],
    correctAnswer: 0,
    explanation: "Filtering anchor tags whose `href` attribute ends in `.pdf` extracts all document download endpoints.",
    officialRef: "PCEA-30-01 Block 3.5 - Web Scraping",
    tags: ["pdf-links", "find-all", "data-extraction"]
  },
  {
    id: "pcea-3-089",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Downloading Images with pathlib",
    difficulty: "Beginner",
    question: "What is a concise way to download and save an image using `requests` and `pathlib.Path`?",
    codeSnippet: "from pathlib import Path\nimport requests\n\nr = requests.get('https://example.com/logo.png')\nPath('logo.png').write_bytes(r.content)",
    options: [
      "Path('logo.png').write_bytes(r.content)",
      "Path('logo.png').save(r.text)",
      "r.save_to('logo.png')",
      "requests.download('logo.png')"
    ],
    correctAnswer: 0,
    explanation: "`Path.write_bytes(r.content)` writes the binary byte payload directly to disk in a single concise, expressive statement.",
    officialRef: "PCEA-30-01 Block 3.5 - pathlib & requests",
    tags: ["write-bytes", "pathlib", "image-download"]
  },
  {
    id: "pcea-3-090",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Batch Asset Collector",
    difficulty: "Intermediate",
    question: "When downloading 100 images sequentially in an automation loop, what pattern ensures failed downloads do not crash the script?",
    codeSnippet: "for url in image_urls:\n    try:\n        r = requests.get(url, timeout=5)\n        r.raise_for_status()\n        save_image(r.content)\n    except requests.RequestException as e:\n        logging.error(f'Failed to download {url}: {e}')",
    options: [
      "Wrap each download iteration in a try-except block catching RequestException and logging the error",
      "Turn off internet access",
      "Use sys.exit(1) on the first error",
      "Set ignore_all_errors = True"
    ],
    correctAnswer: 0,
    explanation: "Handling errors inside the loop isolates failures to individual items, allowing the batch script to continue processing remaining downloads.",
    officialRef: "PCEA-30-01 Block 3.5 - Robustness",
    tags: ["batch-download", "error-isolation", "logging"]
  },
  {
    id: "pcea-3-091",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Resuming Downloads",
    difficulty: "Advanced",
    question: "Which HTTP request header allows an automation script to resume an interrupted file download from byte 50,000?",
    codeSnippet: "headers = {'Range': 'bytes=50000-'}\nr = requests.get(url, headers=headers, stream=True)",
    options: [
      "Range",
      "Resume-From",
      "Offset",
      "Content-Start"
    ],
    correctAnswer: 0,
    explanation: "The `Range: bytes=start-end` HTTP header requests a specific byte slice of a resource, allowing download resumption if the server supports partial content (HTTP 206).",
    officialRef: "PCEA-30-01 Block 3.5 - Resumable Downloads",
    tags: ["range-header", "http-206", "resumable-downloads"]
  },
  {
    id: "pcea-3-092",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "HTTP Status 206",
    difficulty: "Intermediate",
    question: "What status code does a server return when successfully responding to a `Range` header request?",
    codeSnippet: "# Response: HTTP 206 Partial Content",
    options: [
      "200 OK",
      "206 Partial Content",
      "204 No Content",
      "304 Not Modified"
    ],
    correctAnswer: 1,
    explanation: "HTTP 206 Partial Content indicates that the server successfully fulfilled the partial GET request requested by the `Range` header.",
    officialRef: "PCEA-30-01 Block 3.5 - Status Codes",
    tags: ["http-206", "partial-content", "status-codes"]
  },
  {
    id: "pcea-3-093",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Atomic File Download",
    difficulty: "Intermediate",
    question: "Why should downloaded files be saved with a `.tmp` extension and renamed to their final name only upon completion?",
    codeSnippet: "# Pattern: download to file.tmp -> rename to file.zip\ntmp_path = Path('report.zip.tmp')\ntmp_path.write_bytes(r.content)\ntmp_path.replace('report.zip')",
    options: [
      "It guarantees that other monitoring processes never read a partially downloaded, corrupt file if the download fails halfway",
      "It makes download speeds 2x faster",
      "It avoids paying cloud egress fees",
      "It automatically scans for malware"
    ],
    correctAnswer: 0,
    explanation: "Downloading to a temporary file and atomically renaming upon success prevents downstream automations from consuming half-downloaded files.",
    officialRef: "PCEA-30-01 Block 3.5 - Atomic Operations",
    tags: ["atomic-download", "file-integrity", "defensive-coding"]
  },
  {
    id: "pcea-3-094",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "urllib.request.urlretrieve",
    difficulty: "Beginner",
    question: "Which standard library function downloads a remote URL directly to a local file path without third-party libraries?",
    codeSnippet: "import urllib.request\nurllib.request.urlretrieve('https://example.com/data.csv', 'data.csv')",
    options: [
      "urllib.request.urlretrieve()",
      "os.download()",
      "sys.fetch()",
      "urllib.parse.download()"
    ],
    correctAnswer: 0,
    explanation: "`urllib.request.urlretrieve(url, filename)` is Python's standard library convenience function for copying a network object directly to a local file.",
    officialRef: "PCEA-30-01 Block 3.5 - Standard Library",
    tags: ["urlretrieve", "urllib-request", "standard-library"]
  },
  {
    id: "pcea-3-095",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Handling GZIP Content",
    difficulty: "Intermediate",
    question: "How does the `requests` library handle GZIP-compressed HTTP responses (`Content-Encoding: gzip`)?",
    codeSnippet: "# Server sends gzip compressed response\nr = requests.get('https://example.com/data')",
    options: [
      "It decompresses gzip and deflate content automatically and transparently in r.content and r.text",
      "It raises a GzipError",
      "The user must manually invoke the gzip module on r.content",
      "It deletes the compressed data"
    ],
    correctAnswer: 0,
    explanation: "`requests` automatically decodes and decompresses gzip and deflate transfer encodings behind the scenes.",
    officialRef: "PCEA-30-01 Block 3.5 - Compression",
    tags: ["gzip", "decompression", "requests"]
  },
  {
    id: "pcea-3-096",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Directory Structuring for Assets",
    difficulty: "Beginner",
    question: "How can an asset scraper organize downloaded assets by file extension automatically?",
    codeSnippet: "from pathlib import Path\nfor img in images:\n    target_dir = Path('downloads') / img.suffix.lstrip('.')\n    target_dir.mkdir(parents=True, exist_ok=True)\n    # save into target_dir",
    options: [
      "Compute target directory dynamically based on Path.suffix and ensure it exists with mkdir(parents=True, exist_ok=True)",
      "Save all files to the root directory /",
      "Put all files on the Windows Desktop",
      "Use zip files exclusively"
    ],
    correctAnswer: 0,
    explanation: "Using `pathlib` to dynamically group files into subdirectories based on extension or date creates structured, manageable storage.",
    officialRef: "PCEA-30-01 Block 3.5 - Asset Organization",
    tags: ["asset-organization", "pathlib", "directory-structure"]
  },
  {
    id: "pcea-3-097",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Scraping Paginated Tables",
    difficulty: "Intermediate",
    question: "When scraping a multi-page table, what is the best strategy to store the aggregated dataset in memory before exporting to CSV?",
    codeSnippet: "all_rows = []\nfor page in range(1, total_pages + 1):\n    table_rows = scrape_page(page)\n    all_rows.extend(table_rows)\nexport_to_csv('output.csv', all_rows)",
    options: [
      "Accumulate rows in a list of dicts, then write out to CSV in a single DictWriter pass",
      "Overwrite the CSV file on every page iteration",
      "Print all rows to stdout only",
      "Save each row as an individual file"
    ],
    correctAnswer: 0,
    explanation: "Aggregating parsed records in a list of dicts and serializing with `csv.DictWriter` produces a clean, unified dataset.",
    officialRef: "PCEA-30-01 Block 3.5 - Data Aggregation",
    tags: ["pagination", "table-scraping", "csv-export"]
  },
  {
    id: "pcea-3-098",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Detecting Redirects on Download",
    difficulty: "Intermediate",
    question: "How can an automated downloader determine the final redirected filename if the initial URL was a redirect link (e.g. `https://short.url/123`)?",
    codeSnippet: "import requests, pathlib\nr = requests.get('https://short.url/123', allow_redirects=True)\nfinal_filename = pathlib.Path(r.url).name",
    options: [
      "Inspect pathlib.Path(r.url).name from the response's final resolved URL",
      "Check r.history[0].url",
      "Check r.request.url",
      "Redirects cannot have filenames"
    ],
    correctAnswer: 0,
    explanation: "`r.url` stores the final URL after all redirects have been followed, allowing the script to extract the actual target filename.",
    officialRef: "PCEA-30-01 Block 3.5 - Redirects",
    tags: ["r-url", "redirects", "file-download"]
  },
  {
    id: "pcea-3-099",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Handling Broken Links",
    difficulty: "Beginner",
    question: "What HTTP status code is returned when a downloaded asset URL no longer exists on the server?",
    codeSnippet: "# Attempting to download missing image: HTTP 404 Not Found",
    options: [
      "200",
      "404",
      "500",
      "302"
    ],
    correctAnswer: 1,
    explanation: "HTTP 404 Not Found indicates that the requested resource could not be found on the server.",
    officialRef: "PCEA-30-01 Block 3.5 - Status Codes",
    tags: ["http-404", "broken-links", "status-codes"]
  },
  {
    id: "pcea-3-100",
    track: 'pcea',
    section: "Section 3",
    chapter: "3.5",
    category: "Disk Space Check Before Download",
    difficulty: "Intermediate",
    question: "How can an automation script verify that enough disk space is available before downloading a large file?",
    codeSnippet: "import shutil\n_, _, free_space = shutil.disk_usage('.')\ncontent_length = int(r.headers.get('Content-Length', 0))\nif free_space < content_length * 1.2:\n    raise SystemExit('Insufficient disk space for download!')",
    options: [
      "Compare shutil.disk_usage().free against the response's Content-Length header with a safety margin",
      "Download the file and see if it fails",
      "Delete all other files first",
      "There is no way to check disk space in Python"
    ],
    correctAnswer: 0,
    explanation: "Comparing available free bytes via `shutil.disk_usage()` against `Content-Length` guarantees the system will not run out of disk mid-download.",
    officialRef: "PCEA-30-01 Block 3.5 - Defensive Scripting",
    tags: ["disk-usage", "content-length", "preflight-checks"]
  }
];
