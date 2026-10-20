import { Flashcard } from '../types';

export const pcadSection1CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.1: DATA COLLECTION METHODS & SAMPLING [Cards 1-20]
  // =========================================================================
  {
    id: 'pcad-sec1-001',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Data Sourcing',
    topic: 'Primary vs. Secondary Data Sources',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the fundamental distinction between primary data and secondary data in an analytical investigation?',
    codeSnippet: `# Analytical Project Classification:
# Source A: Sensor telemetry collected directly from company IoT devices.
# Source B: Aggregated census tables downloaded from the World Bank portal.`,
    options: [
      'Primary data is collected first-hand by the researcher specifically for the current investigation; secondary data was collected previously by a third party for a different purpose',
      'Primary data is always structured in SQL; secondary data is always unstructured text',
      'Primary data requires machine learning; secondary data can only be analyzed with Excel',
      'Primary data is free of errors; secondary data always contains missing values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Primary data is collected first-hand by the researcher specifically for the current investigation; secondary data was collected previously by a third party for a different purpose',
    explanationTitle: 'Primary vs. Secondary Data Characteristics',
    explanationText:
      'Primary data offers high relevance and direct control over collection methodology, but requires significant time and cost. Secondary data is inexpensive and immediately available, but may lack desired granularity, specific variables, or documentation of measurement bias.',
    deepDive:
      'When using secondary data, analysts must conduct rigorous provenance checks: verify collection date, sampling methodology, sample size, and third-party definitions before integrating into production models.',
    tags: ['Data Sourcing', 'Primary Data', 'Secondary Data', 'Methodology', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-002',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Sampling Methodology',
    topic: 'Simple Random Sampling with pandas',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'How do you extract an unbiased, reproducible Simple Random Sample of 1,000 records without replacement from a large pandas DataFrame `df`?',
    codeSnippet: `import pandas as pd

# Extract reproducible random sample:
sample_df = df.sample(n=1000, replace=False, random_state=42)`,
    options: [
      'df.sample(n=1000, replace=False, random_state=42) gives every row an equal probability of selection without duplicates and guarantees reproducibility',
      'df.head(1000) takes the first 1,000 rows which is statistically equivalent to a random sample',
      'df.iloc[::10] selects every 10th row using systematic sampling',
      'df.sample(n=1000, replace=True) ensures no row is sampled twice'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.sample(n=1000, replace=False, random_state=42) gives every row an equal probability of selection without duplicates and guarantees reproducibility',
    explanationTitle: 'Simple Random Sampling Mechanics in pandas',
    explanationText:
      '`df.sample(n=k, replace=False)` implements Simple Random Sampling (SRS) where every observation in the population has an identical inclusion probability. Setting `random_state` seeds the pseudo-random generator, ensuring identical results across runs.',
    deepDive:
      'If `replace=True`, sampling with replacement (bootstrap sampling) occurs, meaning an individual row can appear multiple times in the sample. For standard survey extraction, `replace=False` is standard.',
    tags: ['Sampling', 'pandas', 'sample', 'Reproducibility', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-003',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Sampling Methodology',
    topic: 'Stratified Sampling vs. Cluster Sampling',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When analyzing customer churn across 5 distinct subscription tiers with heavily imbalanced user counts, why is Stratified Sampling preferred over Simple Random Sampling?',
    codeSnippet: `from sklearn.model_selection import train_test_split

# Ensuring proportional subgroup representation:
train_df, test_df = train_test_split(
    df, test_size=0.2, stratify=df['subscription_tier'], random_state=42
)`,
    options: [
      'Stratified sampling divides the population into non-overlapping subgroups (strata) and samples proportionally from each, guaranteeing rare tiers are adequately represented and reducing sampling variance',
      'Stratified sampling selects entire geographical groups and tests all members inside them',
      'Stratified sampling runs 10x faster because it does not compute random numbers',
      'Stratified sampling replaces all continuous variables with categorical strings'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Stratified sampling divides the population into non-overlapping subgroups (strata) and samples proportionally from each, guaranteeing rare tiers are adequately represented and reducing sampling variance',
    explanationTitle: 'Stratified vs. Cluster Sampling Design',
    explanationText:
      'In simple random sampling, rare strata (e.g. Enterprise tier representing 1% of users) might be completely omitted by chance. Stratified sampling partitions the population by the stratum variable and draws samples from each partition, preserving the exact population proportions.',
    deepDive:
      'In contrast, Cluster Sampling partitions the population into clusters (e.g., city blocks or schools), randomly selects a few entire clusters, and surveys every unit inside those chosen clusters to minimize data collection travel costs.',
    tags: ['Sampling', 'Stratified Sampling', 'Cluster Sampling', 'sklearn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-004',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Sampling Bias',
    topic: 'Non-Probability Sampling & Selection Bias',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'An online tech magazine posts a poll: "Do you support AI code generators?". 92% of respondents vote "Yes". Why is this finding invalid as a generalization of software engineers worldwide?',
    codeSnippet: `# Poll Characteristics:
# - Self-selected respondents (Voluntary Response Bias)
# - Audience consists exclusively of tech-forward online readers
# - Non-respondents (engineers not visiting the site) are systematically ignored`,
    options: [
      'It suffers from voluntary response bias and convenience sampling; individuals with strong favorable opinions self-select into the sample, while the general population is excluded',
      'The sample size was less than 1,000,000 responses',
      'Online polls must use SQL database triggers to validate IP addresses',
      'Python Institute mandates that survey questions contain at least three options'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It suffers from voluntary response bias and convenience sampling; individuals with strong favorable opinions self-select into the sample, while the general population is excluded',
    explanationTitle: 'Selection Bias in Non-Probability Sampling',
    explanationText:
      'Voluntary response and convenience samples lack a random sampling mechanism. The probability of selection is unknown, making it mathematically impossible to calculate standard errors or project findings to the broader target population without extreme bias.',
    deepDive:
      'No amount of statistical post-processing or machine learning can fix a fundamentally biased non-probability sample. Proper probability sampling is required for external validity.',
    tags: ['Sampling Bias', 'Selection Bias', 'Surveys', 'Validity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-005',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Survey Methodology',
    topic: 'Non-Response Bias and Longitudinal Attrition',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What is "attrition bias" (drop-out bias) in longitudinal data collection, and why does it threaten analytical validity?',
    codeSnippet: `# Study Design: 12-Month Health Tracking App
# Month 1: 10,000 participants (avg health score = 65)
# Month 12: 1,500 participants remaining (avg health score = 88)
# Did the app improve health, or did unhealthy users drop out?`,
    options: [
      'Participants who drop out over time differ systematically from those who remain, leading to an artificially skewed surviving sample that misrepresents original cohort outcomes',
      'Data packets lost during Wi-Fi transmission between mobile phones and the server',
      'Database indexes becoming corrupted when users delete their accounts',
      'The gradual decay of battery life in sensor collection hardware'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Participants who drop out over time differ systematically from those who remain, leading to an artificially skewed surviving sample that misrepresents original cohort outcomes',
    explanationTitle: 'Longitudinal Attrition and Non-Response Bias',
    explanationText:
      'If participants drop out non-randomly (e.g., users who struggle with fitness quit using the app, while high achievers stay), the final sample exhibits survivorship bias. A reported increase in average health is an artifact of differential attrition rather than program efficacy.',
    deepDive:
      'To mitigate attrition bias, analysts conduct sensitivity tests comparing baseline demographics of dropouts against retainees, and apply techniques like Inverse Probability Weighting (IPW).',
    tags: ['Surveys', 'Attrition', 'Non-Response Bias', 'Data Quality', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-006',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Web Scraping',
    topic: 'HTTP GET Requests with the requests Library',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Which Python code correctly issues a standard HTTP GET request with a custom User-Agent header and checks for a successful response?',
    codeSnippet: `import requests

url = 'https://api.example.com/data'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

response = requests.get(url, headers=headers)
response.raise_for_status()`,
    options: [
      'requests.get(url, headers=headers) executes the GET request, and response.raise_for_status() raises an HTTPError if the response code was 4xx or 5xx',
      'requests.fetch(url, header=headers)',
      'requests.post(url, user_agent=headers)',
      'requests.download(url, check_errors=True)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'requests.get(url, headers=headers) executes the GET request, and response.raise_for_status() raises an HTTPError if the response code was 4xx or 5xx',
    explanationTitle: 'Executing HTTP GET Requests in Python',
    explanationText:
      'The `requests` library is the standard Python tool for HTTP communication. `requests.get()` retrieves the resource. Calling `response.raise_for_status()` guarantees that failed responses (e.g. 404 Not Found, 403 Forbidden, 500 Server Error) raise an exception immediately rather than proceeding silently.',
    deepDive:
      'Always pass a descriptive `User-Agent` header. Many web servers block default Python User-Agents (e.g. `python-requests/2.31.0`) with a 403 Forbidden error.',
    tags: ['requests', 'HTTP', 'Web Scraping', 'User-Agent', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-007',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Web Scraping',
    topic: 'HTTP Status Codes and Rate-Limiting (429)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'During automated web scraping or API polling, what does an HTTP response code of `429 Too Many Requests` indicate, and how should a Python script handle it?',
    codeSnippet: `import time
import requests

response = requests.get('https://api.example.com/records')
if response.status_code == 429:
    # How should the script react?
    retry_after = int(response.headers.get('Retry-After', 60))
    time.sleep(retry_after)`,
    options: [
      'The client has exceeded the server’s rate limit threshold; the script should pause execution (e.g. using time.sleep with exponential backoff or honoring the Retry-After header) before retrying',
      'The target URL has permanently moved to a new domain name',
      'The requested data payload is too large to fit into RAM',
      'The client’s SSL/TLS certificate has expired'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The client has exceeded the server’s rate limit threshold; the script should pause execution (e.g. using time.sleep with exponential backoff or honoring the Retry-After header) before retrying',
    explanationTitle: 'Handling HTTP 429 Rate Limiting Gracefully',
    explanationText:
      'Servers use rate limiting to protect themselves from denial-of-service or aggressive scraping. When status 429 is encountered, continuing to hammer the server will result in an IP ban. The script should inspect the `Retry-After` header or implement exponential backoff.',
    deepDive:
      'Exponential backoff doubles the wait time after each consecutive failure (e.g., 2s, 4s, 8s, 16s...) with a small random jitter to avoid synchronized retry waves.',
    tags: ['HTTP Codes', 'Rate Limiting', '429', 'Exponential Backoff', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-008',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Web Scraping',
    topic: 'HTML Parsing with BeautifulSoup find() vs. find_all()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'In `bs4.BeautifulSoup`, what is the difference in return value between `soup.find()` and `soup.find_all()`?',
    codeSnippet: `from bs4 import BeautifulSoup

html_doc = """
<div class="product"><span class="price">$19.99</span></div>
<div class="product"><span class="price">$29.99</span></div>
"""
soup = BeautifulSoup(html_doc, 'html.parser')

first_price = soup.find('span', class_='price')
all_prices = soup.find_all('span', class_='price')`,
    options: [
      'soup.find() returns the first matching Tag object (or None if not found); soup.find_all() returns a list (ResultSet) of all matching Tag objects (or an empty list)',
      'soup.find() returns a string; soup.find_all() returns a pandas DataFrame',
      'soup.find() searches CSS classes; soup.find_all() only searches HTML ids',
      'soup.find() is asynchronous; soup.find_all() is synchronous'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'soup.find() returns the first matching Tag object (or None if not found); soup.find_all() returns a list (ResultSet) of all matching Tag objects (or an empty list)',
    explanationTitle: 'BeautifulSoup find() vs. find_all() Return Types',
    explanationText:
      '`soup.find()` stops scanning the DOM tree as soon as the first match is discovered, returning a single `bs4.element.Tag`. `soup.find_all()` traverses the entire DOM tree, returning a list-like `bs4.element.ResultSet` containing every tag satisfying the filter criteria.',
    deepDive:
      'Note the keyword parameter syntax: because `class` is a reserved keyword in Python, BeautifulSoup requires `class_="price"` with a trailing underscore.',
    tags: ['BeautifulSoup', 'bs4', 'HTML Parsing', 'Web Scraping', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-009',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Web Scraping',
    topic: 'Extracting Tag Text and Attributes in BeautifulSoup',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Given a BeautifulSoup tag `<a href="https://example.com/report.pdf" id="dl-link">Download PDF</a>`, how do you extract the hyperlink target URL and the visible anchor text?',
    codeSnippet: `link_tag = soup.find('a', id='dl-link')

# Extract URL and text:
url = link_tag['href']        # or link_tag.get('href')
label = link_tag.text.strip() # or link_tag.get_text(strip=True)`,
    options: [
      'Access attribute values via dictionary lookup link_tag["href"] (or link_tag.get("href")), and text content via link_tag.text or link_tag.get_text()',
      'Call link_tag.href() and link_tag.value()',
      'Access link_tag.url and link_tag.content',
      'Use re.findall(link_tag, "href")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Access attribute values via dictionary lookup link_tag["href"] (or link_tag.get("href")), and text content via link_tag.text or link_tag.get_text()',
    explanationTitle: 'Extracting Attributes and Text from HTML Tags',
    explanationText:
      'BeautifulSoup treats tag attributes like Python dictionary key-value pairs. Using `tag.get("href")` is safer than `tag["href"]` because it returns `None` instead of raising a `KeyError` if the attribute is absent. `.get_text(strip=True)` removes surrounding whitespace.',
    deepDive:
      'If an attribute can appear multiple times (such as `class`), BeautifulSoup parses it into a list of strings (e.g. `["btn", "btn-primary"]`).',
    tags: ['BeautifulSoup', 'Attributes', 'DOM', 'Data Extraction', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-010',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Web Scraping Ethics',
    topic: 'Politeness & Rate Limiting with time.sleep()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'Why must automated scraping scripts insert intentional pauses (`time.sleep()`) between successive HTTP requests?',
    codeSnippet: `import time
import requests

for page_id in range(1, 500):
    res = requests.get(f'https://example.com/catalog?page={page_id}')
    # Extract data...
    time.sleep(2.0) # Polite pause between requests`,
    options: [
      'To avoid overwhelming the web server with high request frequency, preventing Denial-of-Service (DoS) conditions and reducing the probability of IP blocking',
      'To allow Python’s garbage collector time to clear memory buffers',
      'Because the HTTP protocol requires at least 1 second to close TCP sockets',
      'To synchronize the client clock with the server timestamp'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To avoid overwhelming the web server with high request frequency, preventing Denial-of-Service (DoS) conditions and reducing the probability of IP blocking',
    explanationTitle: 'Ethical Scraping and Server Politeness',
    explanationText:
      'Automated scripts can issue hundreds of requests per second, which can degrade web performance for genuine human visitors and cause server outages. Adding intentional delays (`time.sleep()`) respects server resources and adheres to ethical scraping standards.',
    deepDive:
      'Randomizing sleep intervals (e.g., `time.sleep(random.uniform(1.5, 3.5))`) mimics human browsing cadence and helps prevent automated detection.',
    tags: ['Web Scraping', 'Politeness', 'time.sleep', 'Ethics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-011',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Web Scraping Ethics',
    topic: 'Robots Exclusion Standard (robots.txt)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What is the purpose of `robots.txt` located at the root of a domain (e.g., `https://example.com/robots.txt`), and how should an analyst interpret `Disallow: /api/`?',
    codeSnippet: `# robots.txt example:
User-agent: *
Disallow: /checkout/
Disallow: /api/
Crawl-delay: 5`,
    options: [
      'It defines the Robots Exclusion Standard, instructing automated bots and scrapers which paths are forbidden from crawling (Disallow: /api/ means bots must not access paths starting with /api/)',
      'It is an executable shell script that installs firewall rules on the client machine',
      'It is an encrypted database of registered user passwords',
      'It lists all available API endpoints for public download'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It defines the Robots Exclusion Standard, instructing automated bots and scrapers which paths are forbidden from crawling (Disallow: /api/ means bots must not access paths starting with /api/)',
    explanationTitle: 'Understanding robots.txt Directives',
    explanationText:
      '`robots.txt` is an advisory protocol published by webmasters to govern crawler access. `User-agent: *` applies rules to all bots. `Disallow: /api/` explicitly requests that bots refrain from crawling the `/api/` path. `Crawl-delay: 5` requests a 5-second pause between requests.',
    deepDive:
      'In Python, the standard library module `urllib.robotparser.RobotFileParser` can automatically parse `robots.txt` and verify whether a specific URL is permitted via `.can_fetch()`.',
    tags: ['robots.txt', 'Ethics', 'Crawler', 'Compliance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-012',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'API Integration',
    topic: 'Parsing JSON Responses with requests.json()',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'When an API endpoint responds with `Content-Type: application/json`, how does `response.json()` convert the payload into Python objects?',
    codeSnippet: `import requests

response = requests.get('https://api.github.com/users/octocat')
data = response.json()

print(type(data))       # <class 'dict'>
print(data['location']) # 'San Francisco'`,
    options: [
      'It deserializes the JSON-formatted string body into native Python dictionaries, lists, strings, numbers, and booleans using Python’s built-in json decoder',
      'It returns a pandas DataFrame directly',
      'It saves a physical .json file to the current working directory',
      'It converts the JSON payload into an XML DOM tree'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It deserializes the JSON-formatted string body into native Python dictionaries, lists, strings, numbers, and booleans using Python’s built-in json decoder',
    explanationTitle: 'Deserializing JSON API Payloads',
    explanationText:
      '`response.json()` parses the JSON text payload into corresponding Python data structures (JSON objects become Python `dict`, JSON arrays become Python `list`). If the response body is not valid JSON, it raises a `requests.exceptions.JSONDecodeError`.',
    deepDive:
      'To load an array of JSON objects directly into a structured table, pass the result to `pd.DataFrame(response.json())` or use `pd.json_normalize()` for nested structures.',
    tags: ['API', 'JSON', 'requests', 'Deserialization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-013',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'API Integration',
    topic: 'Passing Query Parameters & Bearer Tokens in requests',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How do you correctly configure HTTP Bearer token authentication and URL query parameters in a `requests.get()` call?',
    codeSnippet: `import requests

url = 'https://api.example.com/v1/orders'
params = {'status': 'completed', 'limit': 50}
headers = {'Authorization': 'Bearer sk_live_abc12345'}

res = requests.get(url, params=params, headers=headers)`,
    options: [
      'Pass query parameters as a dictionary to params= (which auto-encodes them into the query string ?status=completed&limit=50) and authorization tokens in headers={"Authorization": "Bearer ..."}',
      'Manually string-concatenate the token into the URL: url + "?token=" + token',
      'Pass auth_token="sk_live_abc12345" as a direct keyword argument',
      'Set cookies={"token": "Bearer ..."} and params=url'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass query parameters as a dictionary to params= (which auto-encodes them into the query string ?status=completed&limit=50) and authorization tokens in headers={"Authorization": "Bearer ..."}',
    explanationTitle: 'Structured Parameters and Headers in requests',
    explanationText:
      '`params=` handles URL percent-encoding for spaces and special characters automatically, avoiding malformed query strings. Passing `Authorization: Bearer <token>` in `headers=` complies with the RFC 6750 OAuth 2.0 standard.',
    deepDive:
      'Never hardcode API keys in source files; load them from environment variables via `os.getenv("API_KEY")` to avoid leaking credentials in version control.',
    tags: ['API', 'OAuth', 'Bearer Token', 'Query Parameters', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-014',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'API Integration',
    topic: 'Handling Paginated API Responses',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'When an API endpoint limits responses to 100 items per call, which architectural pattern collects the complete dataset across all pages?',
    codeSnippet: `import requests

all_records = []
url = 'https://api.example.com/events'
params = {'page': 1, 'per_page': 100}

while True:
    res = requests.get(url, params=params).json()
    items = res.get('data', [])
    if not items:
        break # No more records to fetch
    all_records.extend(items)
    params['page'] += 1`,
    options: [
      'A while loop that requests consecutive pages by incrementing page parameters (or following "next" cursor tokens in the response) until an empty page or termination flag is reached',
      'Setting params={"per_page": 99999999} to force the server to return everything in one burst',
      'Opening 50 simultaneous browser tabs to download CSV dumps',
      'Calling requests.get_all_pages(url)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A while loop that requests consecutive pages by incrementing page parameters (or following "next" cursor tokens in the response) until an empty page or termination flag is reached',
    explanationTitle: 'Pagination Harvesting Patterns',
    explanationText:
      'APIs paginate large datasets using offset/limit, page/per_page, or cursor-based pagination. An automated harvester repeatedly fetches the current page, accumulates items in a list, updates the pagination pointer, and stops when the data array is empty or the `next_url` is null.',
    deepDive:
      'Cursor-based pagination is preferred over offset-based pagination in fast-changing production databases because it avoids duplicate or skipped records when rows are inserted concurrently.',
    tags: ['Pagination', 'API', 'Data Harvesting', 'Pipelines', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-015',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Data Ingestion',
    topic: 'Sensor & IoT Telemetry: ISO 8601 Timestamps',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why is standardizing event timestamps to UTC in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`) essential when ingesting sensor and IoT telemetry data?',
    codeSnippet: `# Heterogeneous raw timestamps:
# Sensor US: "10/12/2026 03:00 PM EST"
# Sensor EU: "12/10/2026 21:00 CEST"

# Standardized ISO 8601 UTC:
# "2026-10-12T20:00:00Z"
# "2026-10-12T19:00:00Z"`,
    options: [
      'It eliminates ambiguity between date formats (MM/DD vs DD/MM), unifies multi-timezone data into an absolute chronological timeline, and simplifies temporal joins and time-series aggregation',
      'It reduces file size by compressing numbers into binary hex',
      'Python cannot parse dates that do not end with the letter Z',
      'It automatically recalculates missing sensor values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It eliminates ambiguity between date formats (MM/DD vs DD/MM), unifies multi-timezone data into an absolute chronological timeline, and simplifies temporal joins and time-series aggregation',
    explanationTitle: 'Standardizing IoT Timestamps to ISO 8601 UTC',
    explanationText:
      'Sensor data originating across multiple geographic zones with differing daylight saving rules cannot be reliably sorted or compared without a unified reference frame. ISO 8601 with UTC offset (`Z`) provides unambiguous, lexicographically sortable time representations.',
    deepDive:
      'In pandas, `pd.to_datetime(df["timestamp"], utc=True)` automatically parses diverse string formats and converts them into unified UTC `datetime64[ns, UTC]` objects.',
    tags: ['IoT', 'Sensors', 'Timestamps', 'ISO 8601', 'UTC', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-016',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Survey Methodology',
    topic: 'Likert Scales & Survey Instrument Design',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'In survey research, what type of variable is produced by a 5-point Likert scale (e.g., Strongly Disagree = 1 to Strongly Agree = 5), and what mathematical operation is technically invalid on raw responses?',
    codeSnippet: `# Survey Question: "The software UI is intuitive."
# [1] Strongly Disagree
# [2] Disagree
# [3] Neutral
# [4] Agree
# [5] Strongly Agree`,
    options: [
      'It is an Ordinal categorical variable; assuming equal intervals between points to calculate a parametric mean is technically invalid without justifying interval scaling assumptions',
      'It is a Ratio variable with an absolute physical zero point',
      'It is a Nominal variable with no inherent ordering',
      'It is a Continuous variable that can take any fractional decimal value'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It is an Ordinal categorical variable; assuming equal intervals between points to calculate a parametric mean is technically invalid without justifying interval scaling assumptions',
    explanationTitle: 'Ordinal Nature of Likert Scales',
    explanationText:
      'Likert scales have clear rank order, but the distance between "Neutral" and "Agree" is subjective and cannot be assumed equal to the distance between "Agree" and "Strongly Agree". Medians, modes, frequencies, and non-parametric tests (Mann-Whitney U) are theoretically sound.',
    deepDive:
      'While business analysts frequently compute means on Likert data for simplicity, academic and clinical researchers treat them strictly as ordinal data.',
    tags: ['Surveys', 'Likert Scale', 'Ordinal Data', 'Measurement', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-017',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Experimental Design',
    topic: 'Observational vs. Experimental Data',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What unique methodological capability do Randomized Controlled Trials (A/B Tests) possess that observational data acquisition cannot achieve?',
    codeSnippet: `# Scenario A (Observational):
# Compare users who voluntarily enabled Dark Mode vs. Light Mode on retention.
# Scenario B (Experimental / A/B Test):
# Randomly assign 50,000 new signups to Dark Mode and 50,000 to Light Mode.`,
    options: [
      'Random assignment balances both observed and unobserved confounding variables across groups, enabling valid causal inference rather than mere correlation',
      'A/B tests do not require collecting user data',
      'Observational studies run faster in Python because they require no statistical tests',
      'A/B tests guarantee a p-value of exactly 0.05'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Random assignment balances both observed and unobserved confounding variables across groups, enabling valid causal inference rather than mere correlation',
    explanationTitle: 'Causal Inference via Randomization',
    explanationText:
      'In observational studies, self-selection and confounders (e.g. tech-savvy users prefer dark mode AND naturally retain longer) confound the relationship. Experimental randomization breaks the link between confounders and treatment, establishing true causality.',
    deepDive:
      'Whenever business leadership asks "Does Feature X drive revenue?", an analyst should emphasize that observational logs show correlation, while an A/B test establishes causality.',
    tags: ['A/B Testing', 'Causality', 'Observational Data', 'Confounders', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-018',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Measurement Theory',
    topic: 'Sampling Frame Error vs. Measurement Error',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What is the difference between a "Sampling Frame Error" and a "Measurement Error" during data collection?',
    codeSnippet: `# Error A: Polling voters using a landline phone directory, omitting cell-only mobile users.
# Error B: Asking a survey question worded so ambiguously that respondents misunderstand what is being asked.`,
    options: [
      'Sampling Frame Error occurs when the list from which the sample is drawn fails to match the target population; Measurement Error occurs when the recorded values differ from the true values due to faulty tools or ambiguous questions',
      'Sampling Frame Error refers to hard drive disk failure; Measurement Error refers to CPU float rounding',
      'Measurement Error only occurs in physics labs; Sampling Frame Error only occurs in politics',
      'Both terms refer to the same statistical concept'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sampling Frame Error occurs when the list from which the sample is drawn fails to match the target population; Measurement Error occurs when the recorded values differ from the true values due to faulty tools or ambiguous questions',
    explanationTitle: 'Sampling Frame vs. Measurement Error',
    explanationText:
      'The sampling frame is the operational roster of population members. If landlines exclude young adults, undercoverage occurs (Sampling Frame Error). Measurement error arises at the recording stage: broken thermometers, leading survey questions, or recording typos.',
    deepDive:
      'Classic historic example: The 1936 Literary Digest presidential poll sampled car owners and telephone registries during the Great Depression, predicting Landon would defeat Roosevelt due to massive sampling frame bias.',
    tags: ['Sampling Frame', 'Measurement Error', 'Data Quality', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-019',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Data Architecture',
    topic: 'Batch Data Ingestion vs. Streaming Webhooks',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'How does real-time webhook ingestion differ fundamentally from scheduled batch ETL extraction?',
    codeSnippet: `# Approach 1 (Batch): Cron job runs every night at 02:00 AM:
# Queries SQL database for all transactions completed in the prior 24 hours.

# Approach 2 (Webhook / Event-Driven):
# E-commerce server issues an immediate HTTP POST to the analytics listener
# the instant an order completes.`,
    options: [
      'Batch ingestion collects and processes accumulated data at scheduled intervals; Webhooks deliver data in near-real-time as push events triggered immediately when actions occur',
      'Webhooks only work on Windows servers; Batch only works on Linux',
      'Batch ingestion requires NoSQL databases; Webhooks require relational SQL',
      'Webhooks cannot transfer JSON payloads'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Batch ingestion collects and processes accumulated data at scheduled intervals; Webhooks deliver data in near-real-time as push events triggered immediately when actions occur',
    explanationTitle: 'Batch vs. Event-Driven Webhook Ingestion',
    explanationText:
      'Batch pipelines process large volumes periodically (high latency, high throughput, low cost per record). Webhooks provide event-driven push delivery (near-zero latency, individual payloads, critical for fraud alerts and real-time inventory).',
    deepDive:
      'Webhooks require robust idempotency handling: if a network hiccup causes the sender to retry a webhook, the receiver must not duplicate the transaction in the database.',
    tags: ['Webhooks', 'Batch Ingestion', 'Streaming', 'Architecture', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-020',
    section: 'Section 1',
    chapter: '1.1',
    track: 'pcad',
    cardType: 'Data Procurement',
    topic: 'Web Scraping vs. Licensed API Trade-offs',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the primary technical and operational risk of relying on web scraping compared to using an officially supported REST API?',
    codeSnippet: `# Fragility of Web Scraping:
# A minor CSS class rename in the target website's frontend
# (e.g., class="price-tag" -> class="ui-v2-cost")
# instantly breaks the BeautifulSoup parser!`,
    options: [
      'Scraping is fragile because unannounced UI/DOM updates break parsers, and scrapers risk IP bans, CAPTCHAs, and legal disputes; official APIs provide stable schemas, SLAs, and authentication',
      'Web scrapers cannot extract text written in English',
      'APIs cannot be accessed from Python',
      'Scraping requires paid software licenses, whereas APIs are always free'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Scraping is fragile because unannounced UI/DOM updates break parsers, and scrapers risk IP bans, CAPTCHAs, and legal disputes; official APIs provide stable schemas, SLAs, and authentication',
    explanationTitle: 'Scraping Fragility vs. API Stability',
    explanationText:
      'Web scrapers depend entirely on the visual presentation layer (HTML DOM hierarchy and CSS classes). Whenever frontend engineers modify the website layout, scrapers fail silently or crash. Official APIs offer versioned contracts (e.g. `/v2/`) with guaranteed data structures.',
    deepDive:
      'When building enterprise pipelines, always prioritize official APIs over web scraping unless no API exists or costs are prohibitive.',
    tags: ['Data Procurement', 'Web Scraping', 'API', 'Maintenance', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 1.2: ETHICAL, LEGAL & ANONYMIZATION CONSIDERATIONS [Cards 21-35]
  // =========================================================================
  {
    id: 'pcad-sec1-021',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Privacy',
    topic: 'Direct vs. Indirect Personally Identifiable Information (PII)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'In regulatory frameworks (GDPR, CCPA), what distinguishes a "direct identifier" from an "indirect identifier" (quasi-identifier)?',
    codeSnippet: `# Column Classification:
# Col 1: Social Security Number (SSN), Full Legal Name, Email Address
# Col 2: ZIP Code, Date of Birth, Gender, Job Title`,
    options: [
      'Direct identifiers uniquely identify a specific person on their own (e.g. SSN, email); indirect identifiers do not identify someone alone, but can re-identify an individual when combined with auxiliary datasets',
      'Direct identifiers are stored in PostgreSQL; indirect identifiers are stored in MongoDB',
      'Direct identifiers can be freely shared publicly without encryption',
      'Indirect identifiers cannot be processed by machine learning algorithms'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Direct identifiers uniquely identify a specific person on their own (e.g. SSN, email); indirect identifiers do not identify someone alone, but can re-identify an individual when combined with auxiliary datasets',
    explanationTitle: 'Direct vs. Indirect Identifiers (Quasi-Identifiers)',
    explanationText:
      'Direct identifiers (passport number, national ID, email) pinpoint an individual without external info. Indirect identifiers (quasi-identifiers like {ZIP code, birth date, gender}) seem harmless in isolation, but research by Latanya Sweeney proved that 87% of the US population is uniquely identified by that exact 3-variable combination.',
    deepDive:
      'Anonymization pipelines must scrub direct identifiers AND transform quasi-identifiers (via generalization or suppression) to prevent linkage attacks.',
    tags: ['PII', 'GDPR', 'Quasi-Identifiers', 'Privacy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-022',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Regulation',
    topic: 'Core Principles of GDPR and CCPA',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Which GDPR principle mandates that organizations must only collect personal data strictly necessary for a specified, legitimate analytical purpose and delete it once that purpose is fulfilled?',
    codeSnippet: `# GDPR Article 5 Principles:
# 1. Lawfulness, fairness, and transparency
# 2. Purpose limitation
# 3. Data minimization & Storage limitation
# 4. Accuracy
# 5. Integrity and confidentiality`,
    options: [
      'Data Minimization and Purpose Limitation',
      'Unlimited Retention and Big Data Maximization',
      'Universal Scraping Authorization',
      'Unrestricted Third-Party Monetization'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Data Minimization and Purpose Limitation',
    explanationTitle: 'GDPR Data Minimization & Purpose Limitation',
    explanationText:
      'Under GDPR Article 5, "Data Minimization" requires data to be adequate, relevant, and limited to what is necessary in relation to the purposes for which they are processed. Collecting extraneous user data "just in case we might need it later" violates compliance.',
    deepDive:
      'Storage limitation also dictates that personal data must be kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed.',
    tags: ['GDPR', 'CCPA', 'Compliance', 'Data Minimization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-023',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Anonymization',
    topic: 'Salted Cryptographic Hashing with hashlib',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why is adding a secret "salt" string essential when pseudonymizing user identifiers using SHA-256 hashing in Python?',
    codeSnippet: `import hashlib

# Pseudonymizing emails:
salt = "CompanySecretKey2026!#"
email = "user@example.com"

# Salted Hash:
salted_str = (email + salt).encode('utf-8')
hashed_id = hashlib.sha256(salted_str).hexdigest()`,
    options: [
      'Without a salt, attackers can trivially invert hashes of common emails or IDs using precomputed Rainbow Tables or dictionary lookups; the salt introduces high entropy to defeat dictionary attacks',
      'Because hashlib.sha256() will raise an error if the input length is less than 64 characters',
      'The salt compresses the output string to save storage space',
      'The salt allows anyone to reverse the hash without knowing the secret key'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Without a salt, attackers can trivially invert hashes of common emails or IDs using precomputed Rainbow Tables or dictionary lookups; the salt introduces high entropy to defeat dictionary attacks',
    explanationTitle: 'Defeating Rainbow Tables with Salted Hashes',
    explanationText:
      'Plain SHA-256 hashes of predictable strings (like phone numbers or names) can be cracked in seconds using public rainbow tables. Prepending or appending a secret cryptographic salt guarantees that identical plaintexts produce unique, non-reversible digests unless the attacker possesses the salt.',
    deepDive:
      'Salted hashing provides pseudonymization, NOT full anonymization, because anyone with access to the salt and raw dataset can reproduce the linkage.',
    tags: ['hashlib', 'SHA-256', 'Pseudonymization', 'Rainbow Tables', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-024',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Privacy Attacks',
    topic: 'The Mosaic Effect & Re-Identification Attacks',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What is the "Mosaic Effect" in data privacy and intelligence analysis?',
    codeSnippet: `# Dataset 1 (De-identified hospital records):
# {Age: 48, Gender: M, ZIP: 02138, Diagnosis: Pancreatitis}

# Dataset 2 (Public voter registry):
# {Name: William Weld, Age: 48, Gender: M, ZIP: 02138}
# Combining separate benign tiles reveals the complete private picture!`,
    options: [
      'The process where multiple seemingly innocuous, de-identified datasets are linked together using common quasi-identifiers to reconstruct private individual identities',
      'A technique for generating pixelated heatmap graphics in matplotlib',
      'A method of compressing high-resolution satellite imagery',
      'A database indexing algorithm for multi-column primary keys'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The process where multiple seemingly innocuous, de-identified datasets are linked together using common quasi-identifiers to reconstruct private individual identities',
    explanationTitle: 'The Mosaic Effect in Re-Identification',
    explanationText:
      'Just as individual colored tiles create a recognizable mosaic image, disparate pieces of non-sensitive public data (voter registries, social media posts, real estate deeds) can be cross-referenced with "de-identified" records to re-identify individuals and their sensitive attributes.',
    deepDive:
      'A famous demonstration occurred when Massachusetts Governor William Weld’s confidential medical records were re-identified by Dr. Latanya Sweeney using a public voter list and hospital discharge records.',
    tags: ['Mosaic Effect', 'Re-identification', 'Linkage Attack', 'Privacy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-025',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Anonymization',
    topic: 'k-Anonymity Privacy Model',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'A dataset is said to satisfy $k$-Anonymity if and only if:',
    codeSnippet: `# Quasi-Identifier Equivalence Class for k=3:
# ZIP: 9410*, Age: [30-40], Gender: Female -> 5 records
# ZIP: 9410*, Age: [40-50], Gender: Male   -> 3 records
# Every distinct combination appears at least k times!`,
    options: [
      'Each record is indistinguishable from at least k - 1 other records with respect to its quasi-identifiers (every equivalence class has a frequency >= k)',
      'The dataset contains at most k columns and k rows',
      'All continuous numbers are divided by k',
      'Exactly k records are deleted from the database'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Each record is indistinguishable from at least k - 1 other records with respect to its quasi-identifiers (every equivalence class has a frequency >= k)',
    explanationTitle: 'The k-Anonymity Guarantee',
    explanationText:
      '$k$-Anonymity prevents identity disclosure. By generalizing quasi-identifiers (e.g. converting exact age 34 to range [30–40], masking ZIP `94103` to `9410*`), every individual blends into a crowd of at least $k$ people, making the probability of linking a specific record at most $1/k$.',
    deepDive:
      'Weakness: $k$-Anonymity does not protect against attribute disclosure (homogeneity attack). If all $k$ people in a group share the exact same sensitive diagnosis (e.g. Cancer), an attacker knows the diagnosis with 100% certainty.',
    tags: ['k-Anonymity', 'Generalization', 'Suppression', 'Privacy Models', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-026',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Anonymization',
    topic: 'l-Diversity: Overcoming Homogeneity Attacks',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'How does the $l$-Diversity privacy model improve upon $k$-Anonymity to prevent Homogeneity Attacks?',
    codeSnippet: `# Homogeneity Vulnerability (3-Anonymous but 1-Diverse):
# ZIP: 9410*, Age: [30-40] | Condition: Heart Disease
# ZIP: 9410*, Age: [30-40] | Condition: Heart Disease
# ZIP: 9410*, Age: [30-40] | Condition: Heart Disease
# Attacker knows target has Heart Disease with 100% certainty!`,
    options: [
      'It requires that each equivalence class contains at least l well-represented distinct values for each sensitive attribute',
      'It requires that the dataset contains l different languages',
      'It divides the dataset into l separate SQLite tables',
      'It mandates that machine learning models achieve at least l% accuracy'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It requires that each equivalence class contains at least l well-represented distinct values for each sensitive attribute',
    explanationTitle: 'l-Diversity and Attribute Protection',
    explanationText:
      '$l$-Diversity extends $k$-anonymity by ensuring diversity within sensitive attributes. If an equivalence class contains 5 records ($k=5$), but all 5 individuals have "Flu", there is zero diversity ($l=1$). Requiring $l \ge 3$ ensures at least 3 distinct diagnoses exist in every group.',
    deepDive:
      'Limitation: $l$-diversity does not prevent skewness attacks. If a disease is rare overall (0.1%), having an equivalence class where 50% have the disease leaks high probability of infection.',
    tags: ['l-Diversity', 'Privacy', 'Homogeneity Attack', 'Anonymization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-027',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Anonymization',
    topic: 't-Closeness Privacy Model',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'What formal requirement does the $t$-Closeness privacy standard enforce on an equivalence class?',
    codeSnippet: `# Global Population: 2% of citizens have Disease X.
# Equivalence Class A: 60% of members have Disease X.
# High distance from global distribution -> leaks significant probabilistic information!
# t-Closeness mandates distance D[P, Q] <= t (using Earth Mover's Distance).`,
    options: [
      'The statistical distribution of any sensitive attribute within an equivalence class must not deviate from the attribute’s global population distribution by more than a threshold t',
      'The time between database backups must not exceed t seconds',
      'The distance between server racks must be within t meters',
      'The t-statistic must be statistically significant at alpha = 0.05'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The statistical distribution of any sensitive attribute within an equivalence class must not deviate from the attribute’s global population distribution by more than a threshold t',
    explanationTitle: 't-Closeness and Semantic Information Leakage',
    explanationText:
      '$t$-Closeness solves the skewness and similarity vulnerabilities of $l$-diversity by requiring the marginal distribution of sensitive values inside every group to closely mirror the global distribution across the entire table (measured via Earth Mover’s Distance $\le t$).',
    deepDive:
      'Together, $k$-Anonymity, $l$-Diversity, and $t$-Closeness form the classic progression of syntactic anonymization models.',
    tags: ['t-Closeness', 'Privacy Models', 'Earth Movers Distance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-028',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Differential Privacy',
    topic: 'Differential Privacy and the Epsilon (ε) Privacy Budget',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'advanced',
    question: 'In Differential Privacy ($\epsilon$-DP), what mathematical guarantee is provided, and what happens when the privacy budget $\epsilon$ approaches zero?',
    codeSnippet: `# Differential Privacy Guarantee:
# P[M(D1) ∈ S] <= exp(ε) * P[M(D2) ∈ S]
# where D1 and D2 differ by exactly one individual record.
# Adding calibrated Laplace or Gaussian noise to query outputs.`,
    options: [
      'It mathematically guarantees that the presence or absence of any single individual in the dataset does not noticeably alter query results; as ε approaches 0, privacy protection becomes stronger (more noise is injected)',
      'It guarantees 100% query accuracy with zero added noise when ε = 0',
      'It compresses SQL databases using gzip algorithms',
      'It encrypts database tables using 512-bit RSA public keys'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It mathematically guarantees that the presence or absence of any single individual in the dataset does not noticeably alter query results; as ε approaches 0, privacy protection becomes stronger (more noise is injected)',
    explanationTitle: 'The Epsilon (ε) Parameter in Differential Privacy',
    explanationText:
      'Differential Privacy is the gold standard of modern statistical privacy. By adding calibrated random noise (Laplace or Gaussian) proportional to query sensitivity, an observer cannot determine whether a specific individual was included in the dataset. Smaller $\epsilon$ means stronger privacy but lower statistical utility.',
    deepDive:
      'The US Census Bureau and tech companies (Apple, Google) deploy differential privacy for public demographic releases and telemetry collection.',
    tags: ['Differential Privacy', 'Epsilon', 'Laplace Mechanism', 'Privacy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-029',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Governance',
    topic: 'Data Retention Schedules & Automated Purging',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why do corporate data governance policies mandate strict automated data retention schedules (e.g. deleting web access logs older than 90 days)?',
    codeSnippet: `# Scheduled retention policy query:
DELETE FROM user_session_logs 
WHERE session_timestamp < NOW() - INTERVAL '90 days';`,
    options: [
      'To comply with regulatory storage limitation laws (GDPR Art. 5), minimize legal discovery liabilities during litigation, and reduce exposure in the event of a cybersecurity breach',
      'Because SQL databases become completely corrupted after 90 days',
      'To force customers to register new accounts every 3 months',
      'Because historical data loses its statistical correlation coefficient over time'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To comply with regulatory storage limitation laws (GDPR Art. 5), minimize legal discovery liabilities during litigation, and reduce exposure in the event of a cybersecurity breach',
    explanationTitle: 'Data Retention Schedules and Risk Reduction',
    explanationText:
      'Hoarding outdated user data poses severe corporate risk: if a breach occurs, the company is legally liable for all compromised records, including forgotten logs from 5 years ago. Automated retention policies enforce automatic purging or cold-storage archiving once business utility expires.',
    deepDive:
      'Always distinguish between operational raw logs (short retention, e.g. 30–90 days) and legally mandated tax/financial records (multi-year retention, often 7 years).',
    tags: ['Governance', 'Retention', 'Compliance', 'Security', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-030',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Legal Compliance',
    topic: 'Web Scraping Legal Boundaries (CFAA & Copyright)',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Following landmark legal rulings (e.g., hiQ Labs v. LinkedIn), what is the current legal consensus regarding scraping publicly accessible web data versus authenticated private data?',
    codeSnippet: `# Legal Boundary Check:
# Scenario 1: Scraping publicly accessible product prices without logging in.
# Scenario 2: Creating fake user accounts to scrape private profiles behind a password paywall.`,
    options: [
      'Scraping publicly accessible data generally does not violate the Computer Fraud and Abuse Act (CFAA), but scraping data behind authentication or violating copyright/database rights creates severe breach of contract and civil liability',
      'All forms of web scraping are classified as federal felonies',
      'Scraping is completely unregulated and any website can be scraped without legal consequence',
      'Only government websites are legally permitted to be scraped'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Scraping publicly accessible data generally does not violate the Computer Fraud and Abuse Act (CFAA), but scraping data behind authentication or violating copyright/database rights creates severe breach of contract and civil liability',
    explanationTitle: 'Legal Landscape of Automated Scraping',
    explanationText:
      'The 9th Circuit affirmed in hiQ v. LinkedIn that accessing public websites without a password does not constitute "unauthorized access" under the CFAA. However, commercial scrapers can still face lawsuits under breach of Terms of Service (contract law), copyright infringement, and trespass to chattels.',
    deepDive:
      'Never scrape data that requires bypassing login barriers, CAPTCHAs, or IP blockades without explicit written licensing agreements.',
    tags: ['Scraping Law', 'CFAA', 'Compliance', 'Copyright', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-031',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Governance',
    topic: 'Data Sovereignty & Cross-Border Transfers',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'What is "Data Sovereignty", and how does it impact multi-region cloud data pipeline architecture?',
    codeSnippet: `# Cloud Architecture Constraint:
# EU customer PII must reside physically in AWS eu-central-1 (Frankfurt)
# US customer PII must reside physically in AWS us-east-1 (N. Virginia)
# Direct unencrypted transfer across borders violates EU Schrems II ruling!`,
    options: [
      'The legal concept that digital data is subject to the laws and governance of the physical nation where it is collected or stored, restricting international transfers without adequate legal mechanisms',
      'The ownership rights granted to software developers over open-source code',
      'The maximum amount of memory a sovereign state allows in cloud GPUs',
      'A rule requiring all database servers to be owned by state governments'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The legal concept that digital data is subject to the laws and governance of the physical nation where it is collected or stored, restricting international transfers without adequate legal mechanisms',
    explanationTitle: 'Data Sovereignty and Geographic Residency',
    explanationText:
      'Data sovereignty laws mandate that citizen data collected within a jurisdiction must remain physically stored and processed within that jurisdiction. Cross-border transfers between the EU and US require compliant frameworks (e.g. EU-US Data Privacy Framework) and strict safeguards.',
    deepDive:
      'Data engineers design multi-region architectures where sensitive PII is tokenized or localized in regional data lakes, while only aggregated, fully anonymized metrics leave the sovereign boundary.',
    tags: ['Data Sovereignty', 'GDPR', 'Cloud Storage', 'Architecture', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-032',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Ethical AI',
    topic: 'Algorithmic Bias and Historical Training Skew',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'If a company trains an automated resume screening model on 10 years of successful historical engineering hires where 90% of hires were male, what will the model learn, and why is this an ethical hazard?',
    codeSnippet: `# Historical Training Set:
# 90% Male, 10% Female
# Model penalizes resumes containing terms like "Women's Rugby Captain" or
# names of women's universities! (Real-world Amazon recruiting AI case study)`,
    options: [
      'The model will encode and amplify historical societal prejudices, penalizing qualified female applicants because it mistakes past hiring bias for predictive job qualification',
      'The model will automatically correct historical bias using neural network gradient descent',
      'The model will refuse to execute because gender is not a numerical float',
      'The model will produce unbiased results because machine learning algorithms cannot have personal emotions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The model will encode and amplify historical societal prejudices, penalizing qualified female applicants because it mistakes past hiring bias for predictive job qualification',
    explanationTitle: 'Historical Bias Amplification in Machine Learning',
    explanationText:
      'Machine learning models do not learn what ought to happen; they learn statistical correlations present in historical training data. If historical decisions were tainted by human bias or systemic underrepresentation, the model will codify and automate that discrimination at scale.',
    deepDive:
      'Data analysts must audit training data distributions for demographic parity and employ fairness-aware pre-processing (reweighing, synthetic balancing) before deploying algorithmic decision systems.',
    tags: ['Ethical AI', 'Algorithmic Bias', 'Fairness', 'Recruiting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-033',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Security',
    topic: 'Encryption at Rest vs. Encryption in Transit',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'beginner',
    question: 'What is the operational difference between "Encryption at Rest" and "Encryption in Transit"?',
    codeSnippet: `# Layer 1: HTTPS / TLS 1.3 encrypts packets moving over the internet wire.
# Layer 2: AES-256 encrypts database files stored on SSD physical storage volumes.`,
    options: [
      'Encryption in Transit protects data moving across networks between clients and servers (e.g. TLS/HTTPS); Encryption at Rest protects persistent data stored on physical disks or cloud buckets (e.g. AES-256)',
      'Encryption at Rest is only used during server maintenance shutdowns',
      'Encryption in Transit requires physical USB hardware keys',
      'Encryption at Rest converts text to Base64; Encryption in Transit converts text to ASCII'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Encryption in Transit protects data moving across networks between clients and servers (e.g. TLS/HTTPS); Encryption at Rest protects persistent data stored on physical disks or cloud buckets (e.g. AES-256)',
    explanationTitle: 'Data Protection: At Rest vs. In Transit',
    explanationText:
      'Both layers are mandatory for comprehensive data security. Encryption in transit prevents eavesdropping, man-in-the-middle attacks, and packet sniffing. Encryption at rest ensures that if a physical hard drive is stolen from a data center or an unauthenticated disk image is cloned, the raw bytes cannot be read.',
    deepDive:
      'Modern regulations (HIPAA, PCI-DSS) also mandate Key Management Services (KMS) with automated annual cryptographic key rotation.',
    tags: ['Security', 'Encryption', 'TLS', 'AES-256', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-034',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Data Governance',
    topic: 'Data Lineage and Enterprise Metadata Catalogs',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why is capturing "Data Lineage" crucial in production enterprise analytics pipelines?',
    codeSnippet: `# Data Lineage Graph:
# [Raw CRM API] -> [S3 Bronze Bucket] -> [dbt Cleaning Script] ->
# [Snowflake Silver Warehouse] -> [Executive Revenue Dashboard]`,
    options: [
      'It tracks the complete lifecycle, transformation history, dependencies, and movement of data from initial raw source to final downstream destination, ensuring auditability and root-cause tracing',
      'It translates Python scripts into biological family trees',
      'It automatically formats all numbers as United States Dollars',
      'It limits database queries to 50 milliseconds'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It tracks the complete lifecycle, transformation history, dependencies, and movement of data from initial raw source to final downstream destination, ensuring auditability and root-cause tracing',
    explanationTitle: 'The Critical Role of Data Lineage',
    explanationText:
      'When an executive dashboard displays anomalous revenue numbers, data lineage allows engineers to trace upstream through every transformation step to identify exactly which raw pipeline or calculation failed. It is also required for regulatory compliance (e.g. BCBS 239 risk reporting).',
    deepDive:
      'Data catalogs (e.g. Apache Atlas, OpenLineage, Collibra) automatically map these directed acyclic graphs (DAGs) across ETL systems.',
    tags: ['Governance', 'Data Lineage', 'Metadata', 'Auditability', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec1-035',
    section: 'Section 1',
    chapter: '1.2',
    track: 'pcad',
    cardType: 'Compliance & Auditing',
    topic: 'Immutable Audit Logs for Forensic Auditing',
    category: 'Data Acquisition and Pre-Processing',
    difficulty: 'intermediate',
    question: 'Why must enterprise analytical systems maintain "append-only immutable audit logs" for sensitive data access?',
    codeSnippet: `# Audit Record:
# Timestamp: 2026-10-12T14:32:01Z
# User: analyst_42
# Action: SELECT ssn, salary FROM payroll_records WHERE emp_id = 9011
# Integrity: SHA-256 chained hash (Cannot be edited or deleted by anyone!)`,
    options: [
      'To ensure a tamper-proof chronological record of who accessed, exported, or modified sensitive records, enabling forensic investigation during security breaches or regulatory compliance audits',
      'To prevent the database from running out of disk space',
      'To accelerate Pandas DataFrame slicing performance',
      'Because Python Institute requires every print statement to be saved in an audit log'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To ensure a tamper-proof chronological record of who accessed, exported, or modified sensitive records, enabling forensic investigation during security breaches or regulatory compliance audits',
    explanationTitle: 'Immutable Audit Logging Principles',
    explanationText:
      'If audit logs can be modified or deleted by system administrators, a malicious insider or hacker can erase traces of unauthorized data exfiltration. Write-Once-Read-Many (WORM) storage and cryptographic log chaining ensure forensic integrity for regulators and investigators.',
    deepDive:
      'Cloud storage providers support Object Lock (compliance mode) where objects cannot be deleted or overwritten by any user, including the root account, until a retention period expires.',
    tags: ['Auditing', 'Compliance', 'Security', 'Forensics', 'PCAD-31-02']
  }
];
