import { Flashcard } from '../types';

export const pceaSection4CardsPart1: Flashcard[] = [
  {
    id: "pcea-4-001",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "UTC Awareness",
    difficulty: "Beginner",
    question: "Why should automated background jobs always record timestamps in UTC rather than local server time?",
    codeSnippet: "from datetime import datetime, timezone\nnow_utc = datetime.now(timezone.utc)",
    options: [
      "Local times change with Daylight Saving Time and timezones, leading to duplicate, out-of-order, or confusing log sequences",
      "UTC timestamps run 2x faster",
      "Python only supports UTC time",
      "Operating systems forbid storing local time"
    ],
    correctAnswer: 0,
    explanation: "UTC is unambiguous, constant, and avoids Daylight Saving Time (DST) jumps, ensuring chronological ordering across distributed servers.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["utc", "timezones", "datetime-now"]
  },
  {
    id: "pcea-4-002",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "strftime Formatting",
    difficulty: "Beginner",
    question: "Which method converts a `datetime` object into a custom formatted string like `'2026-10-01'`?",
    codeSnippet: "from datetime import datetime\nnow = datetime(2026, 10, 1)\ns = now.strftime('%Y-%m-%d')",
    options: [
      "dt.strptime()",
      "dt.strftime('%Y-%m-%d')",
      "dt.format()",
      "dt.to_date_string()"
    ],
    correctAnswer: 1,
    explanation: "`strftime()` ('string format time') formats a datetime object into a string according to format directives like `%Y-%m-%d`.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["strftime", "formatting", "datetime"]
  },
  {
    id: "pcea-4-003",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "strptime Parsing",
    difficulty: "Beginner",
    question: "Which method parses an incoming timestamp string like `'2026-10-01 14:30:00'` into a `datetime` object?",
    codeSnippet: "from datetime import datetime\ndt = datetime.strptime('2026-10-01 14:30:00', '%Y-%m-%d %H:%M:%S')",
    options: [
      "datetime.strptime()",
      "datetime.strftime()",
      "datetime.parse()",
      "datetime.from_format()"
    ],
    correctAnswer: 0,
    explanation: "`strptime()` ('string parse time') parses a text string into a datetime object using format codes matching the input structure.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["strptime", "parsing", "datetime"]
  },
  {
    id: "pcea-4-004",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Format Directives",
    difficulty: "Intermediate",
    question: "In `strftime` directives, what is the difference between `%m` and `%M`?",
    codeSnippet: "# Formatting month vs minute:\n# %m is 2-digit month (01-12)\n# %M is 2-digit minute (00-59)",
    options: [
      "%m represents the month (01-12); %M represents the minute (00-59)",
      "%m represents the minute; %M represents the month",
      "%m is millisecond; %M is microsecond",
      "%m is Monday; %M is Month name"
    ],
    correctAnswer: 0,
    explanation: "Lowercase `%m` denotes the zero-padded month number (01 to 12), while uppercase `%M` denotes the zero-padded minute (00 to 59).",
    officialRef: "PCEA-30-01 Block 4.1 - datetime Directives",
    tags: ["directives", "strftime", "syntax"]
  },
  {
    id: "pcea-4-005",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "timedelta Arithmetic",
    difficulty: "Beginner",
    question: "How do you calculate a timestamp exactly 7 days into the future?",
    codeSnippet: "from datetime import datetime, timedelta\nfuture = datetime.now() + timedelta(days=7)",
    options: [
      "datetime.now() + timedelta(days=7)",
      "datetime.now() + 7",
      "datetime.add_days(7)",
      "datetime.now().next_week()"
    ],
    correctAnswer: 0,
    explanation: "`timedelta(days=7)` represents a duration of 7 days, which can be directly added or subtracted from `datetime` objects.",
    officialRef: "PCEA-30-01 Block 4.1 - timedelta",
    tags: ["timedelta", "date-arithmetic", "datetime"]
  },
  {
    id: "pcea-4-006",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Measuring Elapsed Time",
    difficulty: "Intermediate",
    question: "Which function from the `time` module provides the most accurate, monotonic clock for benchmarking automation execution duration?",
    codeSnippet: "import time\nstart = time.perf_counter()\n# execute pipeline\nelapsed = time.perf_counter() - start\nprint(f'Execution took {elapsed:.2f} seconds')",
    options: [
      "time.time()",
      "time.perf_counter()",
      "time.clock()",
      "time.process_time()"
    ],
    correctAnswer: 1,
    explanation: "`time.perf_counter()` is a monotonic clock with the highest available resolution, immune to system clock adjustments or daylight saving shifts.",
    officialRef: "PCEA-30-01 Block 4.1 - time module",
    tags: ["perf-counter", "benchmarking", "monotonic-clock"]
  },
  {
    id: "pcea-4-007",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "ISO-8601 Standard",
    difficulty: "Beginner",
    question: "How do you generate a standard ISO-8601 timestamp string from a `datetime` object?",
    codeSnippet: "from datetime import datetime\ns = datetime.now().isoformat()  # e.g. '2026-10-01T02:40:00.123456'",
    options: [
      "dt.isoformat()",
      "dt.to_iso()",
      "dt.iso_string()",
      "str(dt.iso)"
    ],
    correctAnswer: 0,
    explanation: "`dt.isoformat()` produces a standard ISO-8601 string (`YYYY-MM-DDTHH:MM:SS`), universally accepted in JSON APIs and databases.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["isoformat", "iso8601", "datetime"]
  },
  {
    id: "pcea-4-008",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Parsing ISO-8601",
    difficulty: "Intermediate",
    question: "How can an automation script parse an ISO-8601 string (`'2026-10-01T15:30:00Z'`) without manual format strings?",
    codeSnippet: "from datetime import datetime\ndt = datetime.fromisoformat('2026-10-01T15:30:00+00:00')",
    options: [
      "datetime.fromisoformat()",
      "datetime.parse_iso()",
      "datetime.iso_to_dt()",
      "datetime.read_iso()"
    ],
    correctAnswer: 0,
    explanation: "`datetime.fromisoformat()` parses standard ISO-8601 formatted strings into datetime instances directly.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["fromisoformat", "iso8601", "parsing"]
  },
  {
    id: "pcea-4-009",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Epoch Timestamps",
    difficulty: "Intermediate",
    question: "How do you convert a Unix epoch timestamp (seconds since Jan 1, 1970) into a Python `datetime` object?",
    codeSnippet: "from datetime import datetime\nts = 1790800000\ndt = datetime.fromtimestamp(ts)",
    options: [
      "datetime.fromtimestamp(ts)",
      "datetime.from_epoch(ts)",
      "datetime.parse_timestamp(ts)",
      "datetime.epoch(ts)"
    ],
    correctAnswer: 0,
    explanation: "`datetime.fromtimestamp(ts)` converts POSIX timestamp seconds into a local or UTC datetime object.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["fromtimestamp", "epoch", "posix-time"]
  },
  {
    id: "pcea-4-010",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Datetime to Epoch",
    difficulty: "Intermediate",
    question: "How do you convert a `datetime` object into a Unix epoch timestamp float?",
    codeSnippet: "from datetime import datetime\nepoch_seconds = datetime.now().timestamp()",
    options: [
      "dt.timestamp()",
      "dt.to_epoch()",
      "dt.posix()",
      "float(dt)"
    ],
    correctAnswer: 0,
    explanation: "`dt.timestamp()` returns the POSIX timestamp as a floating-point number representing seconds since January 1, 1970 UTC.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["timestamp", "epoch", "posix"]
  },
  {
    id: "pcea-4-011",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Cleaning Old Log Files",
    difficulty: "Intermediate",
    question: "How can an automation script identify files in a directory that were modified more than 30 days ago?",
    codeSnippet: "import time, pathlib\ncutoff = time.time() - (30 * 86400)\nfor p in pathlib.Path('/logs').glob('*.log'):\n    if p.stat().st_mtime < cutoff:\n        p.unlink()",
    options: [
      "Compare p.stat().st_mtime against (time.time() - 30 * 86400)",
      "Check if 'old' is in the filename",
      "Call p.is_expired(30)",
      "Count lines in the file"
    ],
    correctAnswer: 0,
    explanation: "`p.stat().st_mtime` provides the last modification timestamp in epoch seconds. Comparing it to `time.time() - (30 * 86400)` identifies files older than 30 days.",
    officialRef: "PCEA-30-01 Block 4.1 - Practical Automation",
    tags: ["file-pruning", "st-mtime", "log-retention"]
  },
  {
    id: "pcea-4-012",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Time Sleep",
    difficulty: "Beginner",
    question: "What is the effect of calling `time.sleep(2.5)` in a Python script?",
    codeSnippet: "import time\ntime.sleep(2.5)",
    options: [
      "Suspends execution of the current thread for 2.5 seconds",
      "Slows down execution speed by 2.5x",
      "Sets a timeout limit of 2.5 seconds",
      "Shuts down the computer after 2.5 seconds"
    ],
    correctAnswer: 0,
    explanation: "`time.sleep(secs)` suspends execution of the calling thread for the given number of seconds (which can be a floating-point number).",
    officialRef: "PCEA-30-01 Block 4.1 - time module",
    tags: ["time-sleep", "delays", "throttling"]
  },
  {
    id: "pcea-4-013",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Replacing Datetime Components",
    difficulty: "Intermediate",
    question: "How can you create a new `datetime` object with the time reset to midnight (`00:00:00`)?",
    codeSnippet: "from datetime import datetime\nnow = datetime.now()\nmidnight = now.replace(hour=0, minute=0, second=0, microsecond=0)",
    options: [
      "now.replace(hour=0, minute=0, second=0, microsecond=0)",
      "now.reset_time()",
      "now.midnight()",
      "now.set_time(0, 0, 0)"
    ],
    correctAnswer: 0,
    explanation: "`dt.replace(...)` returns a new datetime object with specified fields replaced while retaining year, month, and day.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["replace", "midnight", "datetime-manipulation"]
  },
  {
    id: "pcea-4-014",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Total Seconds",
    difficulty: "Intermediate",
    question: "How do you get the total duration of a `timedelta` object expressed as a single floating-point number of seconds?",
    codeSnippet: "from datetime import timedelta\ndelta = timedelta(days=1, hours=2, minutes=30)\nseconds = delta.total_seconds()",
    options: [
      "delta.total_seconds()",
      "delta.seconds",
      "float(delta)",
      "delta.to_seconds()"
    ],
    correctAnswer: 0,
    explanation: "`delta.total_seconds()` calculates the entire duration across all days, hours, and minutes converted into total seconds. (`delta.seconds` only counts the seconds portion under 1 day).",
    officialRef: "PCEA-30-01 Block 4.1 - timedelta",
    tags: ["total-seconds", "duration", "timedelta"]
  },
  {
    id: "pcea-4-015",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Year Directives",
    difficulty: "Beginner",
    question: "What is the difference between `%Y` and `%y` in `strftime`?",
    codeSnippet: "# Year directives:\n# %Y: 2026 (4-digit century year)\n# %y: 26 (2-digit year without century)",
    options: [
      "%Y is 4-digit year (e.g. 2026); %y is 2-digit year (e.g. 26)",
      "%Y is year day; %y is year month",
      "%Y is fiscal year; %y is calendar year",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Uppercase `%Y` represents the year with century as a 4-digit decimal number (e.g. 2026), while lowercase `%y` is the 2-digit year (00-99).",
    officialRef: "PCEA-30-01 Block 4.1 - datetime Directives",
    tags: ["year-directives", "strftime", "directives"]
  },
  {
    id: "pcea-4-016",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Weekday Determination",
    difficulty: "Intermediate",
    question: "How do you check if a given date falls on a weekend (Saturday or Sunday) in Python?",
    codeSnippet: "from datetime import date\nd = date.today()\nis_weekend = d.weekday() >= 5  # 5 is Saturday, 6 is Sunday",
    options: [
      "d.weekday() >= 5",
      "d.is_weekend()",
      "d.day_name() in ('Sat', 'Sun')",
      "d.weekend == True"
    ],
    correctAnswer: 0,
    explanation: "`date.weekday()` returns the day of the week as an integer where Monday is 0, Saturday is 5, and Sunday is 6.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["weekday", "weekend-check", "date"]
  },
  {
    id: "pcea-4-017",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Timezone Conversion",
    difficulty: "Advanced",
    question: "How do you convert an aware UTC datetime object to US Eastern time using Python 3.9+ `zoneinfo`?",
    codeSnippet: "from datetime import datetime, timezone\nfrom zoneinfo import ZoneInfo\n\nnow_utc = datetime.now(timezone.utc)\neastern = now_utc.astimezone(ZoneInfo('America/New_York'))",
    options: [
      "dt.astimezone(ZoneInfo('America/New_York'))",
      "dt.convert('America/New_York')",
      "ZoneInfo.convert(dt)",
      "dt.set_tz('America/New_York')"
    ],
    correctAnswer: 0,
    explanation: "`dt.astimezone(ZoneInfo('...'))` converts a timezone-aware datetime to the target IANA timezone, automatically adjusting UTC offset and DST.",
    officialRef: "PCEA-30-01 Block 4.1 - ZoneInfo",
    tags: ["zoneinfo", "timezones", "astimezone"]
  },
  {
    id: "pcea-4-018",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Comparing Dates",
    difficulty: "Beginner",
    question: "Can two `datetime` objects be directly compared using relational operators like `<` and `>`?",
    codeSnippet: "from datetime import datetime\ndt1 = datetime(2026, 1, 1)\ndt2 = datetime(2026, 10, 1)\nprint(dt1 < dt2)  # True",
    options: [
      "Yes, datetime objects support standard chronological comparison (<, <=, >, ==) if both are naive or both are aware",
      "No, they must be converted to strings first",
      "No, they must be converted to timestamps first",
      "Only equality (==) is supported"
    ],
    correctAnswer: 0,
    explanation: "Datetime objects support chronological comparisons naturally, provided they are both naive (no timezone) or both aware (with timezone).",
    officialRef: "PCEA-30-01 Block 4.1 - datetime",
    tags: ["date-comparison", "relational-operators", "chronology"]
  },
  {
    id: "pcea-4-019",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Microseconds Extraction",
    difficulty: "Intermediate",
    question: "Which format code formats microseconds (000000 to 999999) in `strftime`?",
    codeSnippet: "from datetime import datetime\ns = datetime.now().strftime('%Y%m%d_%H%M%S_%f')",
    options: [
      "%f",
      "%u",
      "%ms",
      "%S"
    ],
    correctAnswer: 0,
    explanation: "`%f` formats the microsecond component as a decimal number zero-padded to 6 digits, widely used for unique automation file naming.",
    officialRef: "PCEA-30-01 Block 4.1 - datetime Directives",
    tags: ["microseconds", "directives", "file-naming"]
  },
  {
    id: "pcea-4-020",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.1",
    category: "Time Delta Subtraction",
    difficulty: "Beginner",
    question: "What is the result of subtracting one `datetime` object from another?",
    codeSnippet: "from datetime import datetime\nd1 = datetime(2026, 10, 2)\nd2 = datetime(2026, 10, 1)\ndiff = d1 - d2\nprint(type(diff))",
    options: [
      "datetime.timedelta",
      "int (number of days)",
      "float (number of seconds)",
      "str"
    ],
    correctAnswer: 0,
    explanation: "Subtracting two `datetime` objects returns a `datetime.timedelta` object representing the elapsed difference.",
    officialRef: "PCEA-30-01 Block 4.1 - timedelta",
    tags: ["subtraction", "timedelta", "datetime"]
  },
  {
    id: "pcea-4-021",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "schedule Library",
    difficulty: "Beginner",
    question: "How do you schedule a function `backup_job` to run daily at 02:30 using the popular `schedule` library?",
    codeSnippet: "import schedule\nschedule.every().day.at('02:30').do(backup_job)",
    options: [
      "schedule.every().day.at('02:30').do(backup_job)",
      "schedule.daily('02:30', backup_job)",
      "schedule.run_at('02:30', backup_job)",
      "schedule.register(backup_job, time='02:30')"
    ],
    correctAnswer: 0,
    explanation: "`schedule.every().day.at('02:30').do(backup_job)` provides a clean, human-readable DSL for scheduling recurring tasks.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["schedule", "dsl", "task-scheduling"]
  },
  {
    id: "pcea-4-022",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "schedule Loop",
    difficulty: "Beginner",
    question: "What main loop is required to execute pending jobs registered with the `schedule` library?",
    codeSnippet: "import schedule, time\nwhile True:\n    schedule.run_pending()\n    time.sleep(1)",
    options: [
      "while True: schedule.run_pending(); time.sleep(1)",
      "schedule.start_daemon()",
      "schedule.listen_forever()",
      "schedule.execute_all()"
    ],
    correctAnswer: 0,
    explanation: "`schedule` relies on a polling loop where `schedule.run_pending()` checks and executes any jobs whose scheduled time has arrived.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["run-pending", "event-loop", "polling"]
  },
  {
    id: "pcea-4-023",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Intervals in schedule",
    difficulty: "Beginner",
    question: "How do you configure a task to execute every 15 minutes with the `schedule` library?",
    codeSnippet: "import schedule\nschedule.every(15).minutes.do(check_health)",
    options: [
      "schedule.every(15).minutes.do(check_health)",
      "schedule.interval(15, 'min', check_health)",
      "schedule.repeat(minutes=15, func=check_health)",
      "schedule.every().15_minutes.do(check_health)"
    ],
    correctAnswer: 0,
    explanation: "`schedule.every(N).minutes.do(func)` registers an interval job that triggers every N minutes.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["schedule", "intervals", "periodic-tasks"]
  },
  {
    id: "pcea-4-024",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cancelling a Job",
    difficulty: "Intermediate",
    question: "How can a job cancel its own future executions from within the scheduled function in `schedule`?",
    codeSnippet: "import schedule\ndef one_off_task():\n    print('Executing once...')\n    return schedule.CancelJob",
    options: [
      "return schedule.CancelJob",
      "schedule.stop_self()",
      "raise StopIteration",
      "sys.exit(0)"
    ],
    correctAnswer: 0,
    explanation: "Returning `schedule.CancelJob` from a scheduled function removes the job from the schedule after it completes.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["cancel-job", "one-time-task", "schedule"]
  },
  {
    id: "pcea-4-025",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Job Tagging",
    difficulty: "Intermediate",
    question: "How can you group and cancel specific tasks using tags in the `schedule` module?",
    codeSnippet: "import schedule\nschedule.every().hour.do(job1).tag('reports')\nschedule.every().day.do(job2).tag('reports')\n# Cancel all report jobs:\nschedule.clear('reports')",
    options: [
      "Use .tag('name') when registering and schedule.clear('name') to remove them",
      "Assign a group_id parameter",
      "Store them in a list and call list.clear()",
      "Tagging is not supported in schedule"
    ],
    correctAnswer: 0,
    explanation: "Tagging jobs with `.tag('label')` allows bulk operations like `schedule.clear('label')` to remove related tasks simultaneously.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["tags", "clear", "job-management"]
  },
  {
    id: "pcea-4-026",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cron Syntax Fields",
    difficulty: "Beginner",
    question: "How many time-and-date fields make up a standard Unix `crontab` schedule expression?",
    codeSnippet: "# Standard crontab format:\n# * * * * * command\n# (minute, hour, day of month, month, day of week)",
    options: [
      "3 fields",
      "5 fields",
      "7 fields",
      "1 field"
    ],
    correctAnswer: 1,
    explanation: "Standard Unix cron expressions consist of 5 fields: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), and Day of Week (0-7).",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["cron", "crontab", "scheduling-syntax"]
  },
  {
    id: "pcea-4-027",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cron Every 5 Minutes",
    difficulty: "Intermediate",
    question: "Which crontab expression runs a script every 5 minutes?",
    codeSnippet: "# Crontab line:\n# */5 * * * * /usr/bin/python3 /opt/sync.py",
    options: [
      "*/5 * * * *",
      "5 * * * *",
      "* 5 * * *",
      "* * */5 * *"
    ],
    correctAnswer: 0,
    explanation: "`*/5 * * * *` specifies a step interval of every 5 minutes throughout every hour, day, and month.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["cron", "intervals", "step-values"]
  },
  {
    id: "pcea-4-028",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cron Daily at Midnight",
    difficulty: "Beginner",
    question: "Which crontab expression runs every night at midnight (00:00)?",
    codeSnippet: "# Crontab line: 0 0 * * * /usr/bin/python3 /opt/backup.py",
    options: [
      "0 0 * * *",
      "* * * * *",
      "12 0 * * *",
      "0 * * * *"
    ],
    correctAnswer: 0,
    explanation: "`0 0 * * *` triggers at minute 0 of hour 0 (midnight) every day of every month.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["cron", "daily-schedule", "midnight"]
  },
  {
    id: "pcea-4-029",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cron Virtual Environment",
    difficulty: "Intermediate",
    question: "Why must crontab entries specify absolute paths to the virtual environment Python interpreter?",
    codeSnippet: "# Recommended crontab entry:\n# 0 2 * * * /home/user/app/.venv/bin/python /home/user/app/job.py >> /var/log/cron.log 2>&1",
    options: [
      "Cron runs in a minimal environment with a stripped PATH that does not include user virtual environments or shell aliases",
      "Cron refuses to run files with relative names",
      "Virtual environments cannot run in the background",
      "To make cron run as superuser"
    ],
    correctAnswer: 0,
    explanation: "Cron executes jobs in a restricted environment with a default system PATH. Using absolute paths ensures the correct interpreter and site-packages are used.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron Best Practices",
    tags: ["cron", "venv-path", "environment"]
  },
  {
    id: "pcea-4-030",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cron Output Redirection",
    difficulty: "Intermediate",
    question: "In a crontab entry, what does `>> /var/log/job.log 2>&1` do?",
    codeSnippet: "# 0 4 * * * /opt/job.py >> /var/log/job.log 2>&1",
    options: [
      "Appends both standard output (1) and standard error (2) to the specified log file",
      "Sends the output as an email attachment",
      "Deletes the log file after running",
      "Disables all logging"
    ],
    correctAnswer: 0,
    explanation: "`>> /var/log/job.log` appends stdout, and `2>&1` redirects stderr into the same stream, ensuring all script output and errors are captured.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["redirection", "cron-logging", "stderr-stdout"]
  },
  {
    id: "pcea-4-031",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Passing Arguments in schedule",
    difficulty: "Intermediate",
    question: "How do you pass arguments to a scheduled function using `schedule`?",
    codeSnippet: "import schedule\ndef send_alert(recipient, severity='INFO'):\n    pass\n\nschedule.every().day.do(send_alert, 'ops@example.com', severity='CRITICAL')",
    options: [
      "Pass positional and keyword arguments directly after the function in .do()",
      "Use lambda: send_alert() only",
      "schedule does not support arguments",
      "Set schedule.args = [...]"
    ],
    correctAnswer: 0,
    explanation: "`.do(func, *args, **kwargs)` accepts positional and keyword arguments that are automatically forwarded to the target function upon invocation.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["schedule", "function-arguments", "do"]
  },
  {
    id: "pcea-4-032",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Overlapping Execution Prevention",
    difficulty: "Intermediate",
    question: "What risk arises if a scheduled 5-minute task takes 7 minutes to complete?",
    codeSnippet: "# Risk of concurrent duplicate runs",
    options: [
      "Duplicate overlapping instances run concurrently, potentially creating race conditions, database deadlocks, and memory exhaustion",
      "The computer will crash immediately",
      "Python will terminate the operating system",
      "The script will run backwards"
    ],
    correctAnswer: 0,
    explanation: "Without locking mechanisms, schedulers will launch duplicate concurrent instances, leading to data corruption and resource contention.",
    officialRef: "PCEA-30-01 Block 4.2 - Schedulers",
    tags: ["overlap-prevention", "race-conditions", "concurrency"]
  },
  {
    id: "pcea-4-033",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Windows Task Scheduler CLI",
    difficulty: "Intermediate",
    question: "Which command-line utility in Windows allows scripting and automating scheduled tasks?",
    codeSnippet: "# Windows task scheduling CLI: schtasks /create /sc daily /tn \"Backup\" /tr \"python backup.py\"",
    options: [
      "schtasks",
      "cron.exe",
      "win_schedule",
      "taskmgr"
    ],
    correctAnswer: 0,
    explanation: "`schtasks.exe` is the Windows command-line utility for creating, querying, running, and modifying scheduled tasks.",
    officialRef: "PCEA-30-01 Block 4.2 - Windows Automation",
    tags: ["schtasks", "windows", "task-scheduler"]
  },
  {
    id: "pcea-4-034",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Crontab Editing Command",
    difficulty: "Beginner",
    question: "Which terminal command opens the current user's crontab file for editing in Unix/Linux?",
    codeSnippet: "# Shell command: crontab -e",
    options: [
      "crontab -e",
      "crontab -edit",
      "cron --open",
      "nano /etc/cron"
    ],
    correctAnswer: 0,
    explanation: "`crontab -e` opens the crontab configuration for the logged-in user in the system's default text editor.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["crontab-e", "posix", "cli"]
  },
  {
    id: "pcea-4-035",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Crontab Listing Command",
    difficulty: "Beginner",
    question: "Which command displays the contents of the current user's active crontab file?",
    codeSnippet: "# Shell command: crontab -l",
    options: [
      "crontab -l",
      "crontab -show",
      "cron list",
      "cat /cron"
    ],
    correctAnswer: 0,
    explanation: "`crontab -l` lists all active cron jobs scheduled under the current user account.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["crontab-l", "posix", "cli"]
  },
  {
    id: "pcea-4-036",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Cron Day-of-Week Syntax",
    difficulty: "Intermediate",
    question: "In standard cron, which numbers represent Sunday for the day-of-week field?",
    codeSnippet: "# Cron day-of-week field: 0 or 7",
    options: [
      "0 or 7",
      "1 only",
      "6 only",
      "Sunday must be written in full"
    ],
    correctAnswer: 0,
    explanation: "In standard Unix cron implementations, both `0` and `7` represent Sunday, with 1 being Monday and 6 being Saturday.",
    officialRef: "PCEA-30-01 Block 4.2 - Cron",
    tags: ["cron-days", "sunday", "syntax"]
  },
  {
    id: "pcea-4-037",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "schedule Exception Resilience",
    difficulty: "Advanced",
    question: "By default, what happens to the `schedule` polling loop if a scheduled function raises an unhandled exception?",
    codeSnippet: "def broken_job():\n    raise ValueError('Oops!')\n# while True: schedule.run_pending() -> crashes the entire loop!",
    options: [
      "The entire Python process crashes and the scheduling loop terminates",
      "schedule catches the error and retries in 5 seconds",
      "schedule ignores the exception silently",
      "schedule restarts the computer"
    ],
    correctAnswer: 0,
    explanation: "An unhandled exception inside a scheduled job propagates up and terminates the `while True: schedule.run_pending()` loop. Jobs should catch exceptions internally.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["error-handling", "loop-resilience", "unhandled-exceptions"]
  },
  {
    id: "pcea-4-038",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Systemd Timers",
    difficulty: "Advanced",
    question: "What modern Linux service architecture is widely used as a replacement for cron in enterprise infrastructure?",
    codeSnippet: "# systemd timer unit file: backup.timer",
    options: [
      "Systemd timers (.timer units)",
      "Windows Registry",
      "syslog daemon",
      "Python GIL"
    ],
    correctAnswer: 0,
    explanation: "Systemd timers offer fine-grained event-driven scheduling, dependency management, and native logging via `journalctl` as a modern cron alternative.",
    officialRef: "PCEA-30-01 Block 4.2 - System Automation",
    tags: ["systemd", "timers", "linux-automation"]
  },
  {
    id: "pcea-4-039",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Next Run Inspection",
    difficulty: "Intermediate",
    question: "How can an automation script inspect the timestamp of the next upcoming scheduled job in `schedule`?",
    codeSnippet: "import schedule\nnext_run_dt = schedule.next_run()",
    options: [
      "schedule.next_run()",
      "schedule.get_next()",
      "schedule.upcoming()",
      "schedule.peek()"
    ],
    correctAnswer: 0,
    explanation: "`schedule.next_run()` returns a `datetime` object indicating when the earliest pending scheduled job is due to execute.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["next-run", "inspection", "schedule"]
  },
  {
    id: "pcea-4-040",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.2",
    category: "Specific Weekday Scheduling",
    difficulty: "Beginner",
    question: "How do you schedule a job to execute every Monday at 09:00 with `schedule`?",
    codeSnippet: "import schedule\nschedule.every().monday.at('09:00').do(weekly_report)",
    options: [
      "schedule.every().monday.at('09:00').do(weekly_report)",
      "schedule.weekly('monday', '09:00', weekly_report)",
      "schedule.cron('0 9 * * 1', weekly_report)",
      "schedule.repeat(day='Mon', at='09:00', do=weekly_report)"
    ],
    correctAnswer: 0,
    explanation: "`schedule.every().monday.at('09:00').do(...)` schedules tasks specifically on Monday mornings.",
    officialRef: "PCEA-30-01 Block 4.2 - schedule module",
    tags: ["monday", "weekly-schedule", "schedule"]
  },
  {
    id: "pcea-4-041",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Log Levels Hierarchy",
    difficulty: "Beginner",
    question: "What is the correct order of Python logging levels from lowest to highest severity?",
    codeSnippet: "# Logging severity levels: DEBUG < INFO < WARNING < ERROR < CRITICAL",
    options: [
      "DEBUG < INFO < WARNING < ERROR < CRITICAL",
      "INFO < DEBUG < WARNING < ERROR < FATAL",
      "CRITICAL < ERROR < WARNING < INFO < DEBUG",
      "TRACE < NOTICE < ALERT < EMERGENCY"
    ],
    correctAnswer: 0,
    explanation: "The five standard levels in ascending order of severity are DEBUG (10), INFO (20), WARNING (30), ERROR (40), and CRITICAL (50).",
    officialRef: "PCEA-30-01 Block 4.3 - logging module",
    tags: ["logging-levels", "severity", "hierarchy"]
  },
  {
    id: "pcea-4-042",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Default Log Level",
    difficulty: "Beginner",
    question: "What is the default logging threshold level if `logging.basicConfig()` is called with no arguments?",
    codeSnippet: "import logging\nlogging.basicConfig()\n# Which messages appear by default?",
    options: [
      "DEBUG",
      "INFO",
      "WARNING",
      "ERROR"
    ],
    correctAnswer: 2,
    explanation: "The default threshold level is `WARNING`. Messages at DEBUG and INFO levels are ignored unless the level is explicitly configured.",
    officialRef: "PCEA-30-01 Block 4.3 - logging module",
    tags: ["default-level", "warning", "threshold"]
  },
  {
    id: "pcea-4-043",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "basicConfig Setup",
    difficulty: "Beginner",
    question: "How do you configure logging to append timestamped INFO messages to a file `audit.log`?",
    codeSnippet: "import logging\nlogging.basicConfig(\n    filename='audit.log',\n    level=logging.INFO,\n    format='%(asctime)s [%(levelname)s] %(message)s'\n)",
    options: [
      "logging.basicConfig(filename='audit.log', level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')",
      "logging.init_file('audit.log')",
      "logging.set_target('audit.log', 'INFO')",
      "logging.config_file('audit.log')"
    ],
    correctAnswer: 0,
    explanation: "`logging.basicConfig(filename=..., level=..., format=...)` initializes the root logger to write formatted records to disk.",
    officialRef: "PCEA-30-01 Block 4.3 - logging module",
    tags: ["basic-config", "file-logging", "formatting"]
  },
  {
    id: "pcea-4-044",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Named Loggers",
    difficulty: "Intermediate",
    question: "Why is `logger = logging.getLogger(__name__)` preferred over calling `logging.info()` directly in modular automation scripts?",
    codeSnippet: "# module.py\nimport logging\nlogger = logging.getLogger(__name__)\nlogger.info('Module initialized')",
    options: [
      "It namespaces log records hierarchically by module name, making it easy to identify which component emitted each message",
      "It prints messages in color",
      "It runs 10 times faster",
      "It bypasses the Global Interpreter Lock"
    ],
    correctAnswer: 0,
    explanation: "Using `getLogger(__name__)` tags records with the module's qualified name, allowing granular per-module filtering and clear log provenance.",
    officialRef: "PCEA-30-01 Block 4.3 - logging module",
    tags: ["get-logger", "dunder-name", "modularity"]
  },
  {
    id: "pcea-4-045",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Logging Exceptions",
    difficulty: "Intermediate",
    question: "How do you log an error message along with the full exception traceback in a single call?",
    codeSnippet: "try:\n    run_step()\nexcept Exception:\n    logging.exception('Failed to run step!')",
    options: [
      "logging.exception('Failed to run step!') (or logging.error(..., exc_info=True))",
      "logging.print_traceback()",
      "logging.error(traceback=True)",
      "sys.log_trace()"
    ],
    correctAnswer: 0,
    explanation: "`logging.exception()` logs an ERROR-level message and automatically appends the current exception's full traceback (`exc_info=True`).",
    officialRef: "PCEA-30-01 Block 4.3 - logging module",
    tags: ["logging-exception", "exc-info", "traceback"]
  },
  {
    id: "pcea-4-046",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "RotatingFileHandler",
    difficulty: "Intermediate",
    question: "Which logging handler automatically closes the current log file and opens a new one when it reaches 5 MB?",
    codeSnippet: "from logging.handlers import RotatingFileHandler\nhandler = RotatingFileHandler('app.log', maxBytes=5_000_000, backupCount=3)",
    options: [
      "TimedFileHandler",
      "RotatingFileHandler",
      "RollingLogger",
      "SplitFileHandler"
    ],
    correctAnswer: 1,
    explanation: "`RotatingFileHandler(filename, maxBytes=..., backupCount=...)` rotates log files when `maxBytes` is reached, preserving a fixed number of backup files.",
    officialRef: "PCEA-30-01 Block 4.3 - Log Rotation",
    tags: ["rotating-file-handler", "log-rotation", "disk-management"]
  },
  {
    id: "pcea-4-047",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "TimedRotatingFileHandler",
    difficulty: "Intermediate",
    question: "How do you rotate log files daily at midnight using the `logging.handlers` module?",
    codeSnippet: "from logging.handlers import TimedRotatingFileHandler\nhandler = TimedRotatingFileHandler('daily.log', when='midnight', backupCount=14)",
    options: [
      "TimedRotatingFileHandler('daily.log', when='midnight', backupCount=14)",
      "DailyLogHandler('daily.log', days=14)",
      "RotatingFileHandler(interval='daily')",
      "ClockRotatingHandler('daily.log')"
    ],
    correctAnswer: 0,
    explanation: "`TimedRotatingFileHandler(filename, when='midnight', backupCount=14)` automatically rolls over logs at midnight, keeping 14 days of history.",
    officialRef: "PCEA-30-01 Block 4.3 - Log Rotation",
    tags: ["timed-rotating-handler", "daily-rotation", "retention"]
  },
  {
    id: "pcea-4-048",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Format Directive asctime",
    difficulty: "Beginner",
    question: "Which format directive in `logging.basicConfig()` outputs human-readable timestamps for log records?",
    codeSnippet: "format='%(asctime)s - %(message)s'",
    options: [
      "%(time)s",
      "%(asctime)s",
      "%(timestamp)s",
      "%(now)s"
    ],
    correctAnswer: 1,
    explanation: "`%(asctime)s` formats the creation time of the log record into a readable date-time string (e.g. `2026-10-01 02:40:00,123`).",
    officialRef: "PCEA-30-01 Block 4.3 - Log Formatting",
    tags: ["asctime", "formatting", "directives"]
  },
  {
    id: "pcea-4-049",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Console and File Dual Logging",
    difficulty: "Intermediate",
    question: "How can an automation script output log messages to both the console terminal and a disk file simultaneously?",
    codeSnippet: "logger = logging.getLogger('automation')\nlogger.setLevel(logging.DEBUG)\n\nc_handler = logging.StreamHandler()  # Console\nf_handler = logging.FileHandler('run.log')  # Disk\n\nlogger.addHandler(c_handler)\nlogger.addHandler(f_handler)",
    options: [
      "Attach both a StreamHandler and a FileHandler to the logger",
      "Call logging.basicConfig() twice",
      "Redirect stdout in bash",
      "Use print() for console and logging for file"
    ],
    correctAnswer: 0,
    explanation: "Loggers support multiple handlers. Attaching both a `StreamHandler` (console) and a `FileHandler` (disk) directs logs to both destinations concurrently.",
    officialRef: "PCEA-30-01 Block 4.3 - Handlers",
    tags: ["stream-handler", "file-handler", "dual-logging"]
  },
  {
    id: "pcea-4-050",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Lazy Formatting in Logging",
    difficulty: "Intermediate",
    question: "Why is `logger.info('Processing %s items', count)` preferred over `logger.info(f'Processing {count} items')`?",
    codeSnippet: "# Lazy interpolation avoids string formatting overhead if the log level is disabled\nlogger.debug('Costly object: %s', compute_large_summary())",
    options: [
      "String formatting is evaluated lazily only if the log level threshold is enabled, saving CPU cycles when DEBUG is disabled",
      "f-strings cause SyntaxError inside loggers",
      "% formatting runs in parallel",
      "It encrypts the log string"
    ],
    correctAnswer: 0,
    explanation: "Supplying arguments to `logger.log(msg, *args)` defers string interpolation until Python confirms the record meets the active severity threshold.",
    officialRef: "PCEA-30-01 Block 4.3 - Best Practices",
    tags: ["lazy-formatting", "performance", "optimization"]
  }
];
