import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pceaSection1Flashcards } from './pceaSection1Flashcards';
import { pceaSection2Flashcards } from './pceaSection2Flashcards';
import { pceaSection3Flashcards } from './pceaSection3Flashcards';
import { pceaSection4Flashcards } from './pceaSection4Flashcards';

export const pceaTrackInfo: CertificationTrackInfo = {
  id: 'pcea',
  code: 'PCEA-30-01',
  name: 'Certified Entry-Level Automation Specialist with Python',
  shortName: 'PCEA',
  level: 'Entry-Level Automation Specialist',
  officialRef: 'Python Institute PCEA-30-01',
  totalSections: 4,
  durationMinutes: 60,
  questionCount: 46,
  passingScore: 75,
  description:
    'Validates foundational proficiency in identifying tasks suitable for automation, building resilient and idempotent command-line scripts, automating file system and data processing (CSV, JSON, regex), executing web and REST API workflows, and orchestrating task scheduling, logging, and notifications.',
};

export const pceaSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcea-section-1',
    number: 1,
    title: 'Automation Fundamentals & CLI Operations',
    weight: '25%',
    description:
      'Core concepts of task automation: Identifying automation candidates vs manual tasks, calculating return on investment (ROI), ensuring idempotency and atomicity, dry-run simulation, and safety guardrails; Command-line execution with sys.argv and argparse (positional and optional flags, type conversion, store_true, choices, mutually exclusive groups, sub-commands); Environment variables and configuration (os.environ, os.getenv, .env files, secrets management, and virtual environments with venv/pip); Process automation with subprocess (subprocess.run, argument lists with shell=False, capture_output, text decoding, check=True, timeouts, cwd, and env); and Modular automation script architecture, exit codes (sys.exit), and signal handling.',
    chapters: [
      { id: '1.1', title: 'Automation Concepts, ROI & Idempotency', cardCount: 20 },
      { id: '1.2', title: 'Command-Line Interfaces with sys.argv & argparse', cardCount: 20 },
      { id: '1.3', title: 'Environment Variables, Configuration & Virtual Environments', cardCount: 20 },
      { id: '1.4', title: 'Subprocess Execution & Process Automation', cardCount: 20 },
      { id: '1.5', title: 'Modular Automation Scripting & Exit Codes', cardCount: 20 },
    ],
  },
  {
    id: 'pcea-section-2',
    number: 2,
    title: 'File System & Data Automation',
    weight: '25%',
    description:
      'Automating file operations and structured data: Modern filesystem manipulation with pathlib (Path objects, slash operator, stems, suffixes, mkdir with parents/exist_ok, glob/rglob, read_text/write_text, unlink, and atomic replace); File and directory operations with os and shutil (os.walk tree traversal and pruning, shutil.copy2 metadata preservation, shutil.copytree, shutil.rmtree, shutil.disk_usage, and automated zip archiving/unpacking); Automated tabular processing with the csv module (reader, writer, DictReader, DictWriter, newline handling, custom delimiters, quoting, and csv.Sniffer); JSON data handling (dumps/dump, loads/load, indent, sort_keys, custom serializers, error handling, and JSON Lines .jsonl processing); and Regular expressions with re (search, match, findall, finditer, capture groups, named groups, and re.sub sanitization).',
    chapters: [
      { id: '2.1', title: 'Modern Path Operations with pathlib', cardCount: 20 },
      { id: '2.2', title: 'File & Directory Manipulation with os & shutil', cardCount: 20 },
      { id: '2.3', title: 'Automated CSV Data Processing with csv module', cardCount: 20 },
      { id: '2.4', title: 'Automated JSON Data Serialization & Configuration', cardCount: 20 },
      { id: '2.5', title: 'Pattern Matching & Text Extraction with re', cardCount: 20 },
    ],
  },
  {
    id: 'pcea-section-3',
    number: 3,
    title: 'Web, API & Network Automation',
    weight: '25%',
    description:
      'Interacting with external web services and APIs: HTTP client automation with requests (GET, POST, PUT, DELETE, PATCH, query params, headers, status codes, r.ok, raise_for_status, and timeout tuples); Consuming RESTful APIs (sending JSON with json=, parsing response JSON with r.json(), Bearer token and HTTP Basic authentication, custom API key headers, and multipart file uploads); Web scraping and document extraction with BeautifulSoup (soup.find, find_all, CSS selectors with select/select_one, get_text, attribute extraction, and HTML table parsing); Automated pagination, polite scraping with rate limiting and jitter, session management with requests.Session (connection pooling, cookie persistence, and retry adapters); and Automated file downloads, streaming chunked downloads, and download verification with SHA-256.',
    chapters: [
      { id: '3.1', title: 'HTTP Automation with requests (Methods, Status Codes & Params)', cardCount: 20 },
      { id: '3.2', title: 'Consuming REST APIs & Payload Handling (JSON & Auth)', cardCount: 20 },
      { id: '3.3', title: 'HTML Scraping & Data Extraction with BeautifulSoup', cardCount: 20 },
      { id: '3.4', title: 'Pagination, Rate Limiting & Session Management', cardCount: 20 },
      { id: '3.5', title: 'Automated File Downloads & Web Assets Collection', cardCount: 20 },
    ],
  },
  {
    id: 'pcea-section-4',
    number: 4,
    title: 'Scheduling, Monitoring, Notifications & Resilient Automation',
    weight: '25%',
    description:
      'Production operationalization and automation resilience: Date, time, and duration operations with time and datetime (UTC timestamps, strftime formatting, strptime parsing, ISO-8601, timedelta calculations, and time.perf_counter benchmarks); Periodic task scheduling with the schedule library (every().day.at(), minute/hour intervals, run_pending loop, job cancellation, and crontab 5-field syntax); Enterprise logging and audit trails with logging (severity levels, basicConfig, StreamHandler, FileHandler, RotatingFileHandler, TimedRotatingFileHandler, named loggers, and exc_info); Resilient error handling and automated retry logic (try-except-else-finally, custom exceptions, exception chaining, exponential backoff retries, and circuit breakers); and Automated email notifications with smtplib and EmailMessage (STARTTLS, SMTP_SSL, HTML formatting, and attachments).',
    chapters: [
      { id: '4.1', title: 'Time, Date & Duration Calculations (time & datetime)', cardCount: 20 },
      { id: '4.2', title: 'Task Scheduling & Periodic Automation (schedule module & cron)', cardCount: 20 },
      { id: '4.3', title: 'Automated Logging & Audit Trails (logging module)', cardCount: 20 },
      { id: '4.4', title: 'Robust Exception Handling & Automated Retry Logic', cardCount: 20 },
      { id: '4.5', title: 'Email Alerts & Notification Dispatch with smtplib', cardCount: 20 },
    ],
  },
];

export const pceaAllFlashcards: Flashcard[] = [
  ...pceaSection1Flashcards,
  ...pceaSection2Flashcards,
  ...pceaSection3Flashcards,
  ...pceaSection4Flashcards,
];
