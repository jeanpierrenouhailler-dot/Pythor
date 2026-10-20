#!/usr/bin/env python3
"""
Generator for PCEA Block 4: Scheduling, Monitoring, Notifications & Resilient Automation (100 Cards)
Covers Chapters 4.1 - 4.5 for PCEA-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcea-4-{id_num:03d}",
        "section": "Section 4",
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
# CHAPTER 4.1: Time, Date & Duration Calculations (time & datetime) (Cards 1-20)
# ==========================================
add_c(1, "4.1", "UTC Awareness", "Beginner",
      "Why should automated background jobs always record timestamps in UTC rather than local server time?",
      "from datetime import datetime, timezone\nnow_utc = datetime.now(timezone.utc)",
      ["Local times change with Daylight Saving Time and timezones, leading to duplicate, out-of-order, or confusing log sequences", "UTC timestamps run 2x faster", "Python only supports UTC time", "Operating systems forbid storing local time"],
      0,
      "UTC is unambiguous, constant, and avoids Daylight Saving Time (DST) jumps, ensuring chronological ordering across distributed servers.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["utc", "timezones", "datetime-now"])

add_c(2, "4.1", "strftime Formatting", "Beginner",
      "Which method converts a `datetime` object into a custom formatted string like `'2026-10-01'`?",
      "from datetime import datetime\nnow = datetime(2026, 10, 1)\ns = now.strftime('%Y-%m-%d')",
      ["dt.strptime()", "dt.strftime('%Y-%m-%d')", "dt.format()", "dt.to_date_string()"],
      1,
      "`strftime()` ('string format time') formats a datetime object into a string according to format directives like `%Y-%m-%d`.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["strftime", "formatting", "datetime"])

add_c(3, "4.1", "strptime Parsing", "Beginner",
      "Which method parses an incoming timestamp string like `'2026-10-01 14:30:00'` into a `datetime` object?",
      "from datetime import datetime\ndt = datetime.strptime('2026-10-01 14:30:00', '%Y-%m-%d %H:%M:%S')",
      ["datetime.strptime()", "datetime.strftime()", "datetime.parse()", "datetime.from_format()"],
      0,
      "`strptime()` ('string parse time') parses a text string into a datetime object using format codes matching the input structure.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["strptime", "parsing", "datetime"])

add_c(4, "4.1", "Format Directives", "Intermediate",
      "In `strftime` directives, what is the difference between `%m` and `%M`?",
      "# Formatting month vs minute:\n# %m is 2-digit month (01-12)\n# %M is 2-digit minute (00-59)",
      ["%m represents the month (01-12); %M represents the minute (00-59)", "%m represents the minute; %M represents the month", "%m is millisecond; %M is microsecond", "%m is Monday; %M is Month name"],
      0,
      "Lowercase `%m` denotes the zero-padded month number (01 to 12), while uppercase `%M` denotes the zero-padded minute (00 to 59).",
      "PCEA-30-01 Block 4.1 - datetime Directives",
      ["directives", "strftime", "syntax"])

add_c(5, "4.1", "timedelta Arithmetic", "Beginner",
      "How do you calculate a timestamp exactly 7 days into the future?",
      "from datetime import datetime, timedelta\nfuture = datetime.now() + timedelta(days=7)",
      ["datetime.now() + timedelta(days=7)", "datetime.now() + 7", "datetime.add_days(7)", "datetime.now().next_week()"],
      0,
      "`timedelta(days=7)` represents a duration of 7 days, which can be directly added or subtracted from `datetime` objects.",
      "PCEA-30-01 Block 4.1 - timedelta",
      ["timedelta", "date-arithmetic", "datetime"])

add_c(6, "4.1", "Measuring Elapsed Time", "Intermediate",
      "Which function from the `time` module provides the most accurate, monotonic clock for benchmarking automation execution duration?",
      "import time\nstart = time.perf_counter()\n# execute pipeline\nelapsed = time.perf_counter() - start\nprint(f'Execution took {elapsed:.2f} seconds')",
      ["time.time()", "time.perf_counter()", "time.clock()", "time.process_time()"],
      1,
      "`time.perf_counter()` is a monotonic clock with the highest available resolution, immune to system clock adjustments or daylight saving shifts.",
      "PCEA-30-01 Block 4.1 - time module",
      ["perf-counter", "benchmarking", "monotonic-clock"])

add_c(7, "4.1", "ISO-8601 Standard", "Beginner",
      "How do you generate a standard ISO-8601 timestamp string from a `datetime` object?",
      "from datetime import datetime\ns = datetime.now().isoformat()  # e.g. '2026-10-01T02:40:00.123456'",
      ["dt.isoformat()", "dt.to_iso()", "dt.iso_string()", "str(dt.iso)"],
      0,
      "`dt.isoformat()` produces a standard ISO-8601 string (`YYYY-MM-DDTHH:MM:SS`), universally accepted in JSON APIs and databases.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["isoformat", "iso8601", "datetime"])

add_c(8, "4.1", "Parsing ISO-8601", "Intermediate",
      "How can an automation script parse an ISO-8601 string (`'2026-10-01T15:30:00Z'`) without manual format strings?",
      "from datetime import datetime\ndt = datetime.fromisoformat('2026-10-01T15:30:00+00:00')",
      ["datetime.fromisoformat()", "datetime.parse_iso()", "datetime.iso_to_dt()", "datetime.read_iso()"],
      0,
      "`datetime.fromisoformat()` parses standard ISO-8601 formatted strings into datetime instances directly.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["fromisoformat", "iso8601", "parsing"])

add_c(9, "4.1", "Epoch Timestamps", "Intermediate",
      "How do you convert a Unix epoch timestamp (seconds since Jan 1, 1970) into a Python `datetime` object?",
      "from datetime import datetime\nts = 1790800000\ndt = datetime.fromtimestamp(ts)",
      ["datetime.fromtimestamp(ts)", "datetime.from_epoch(ts)", "datetime.parse_timestamp(ts)", "datetime.epoch(ts)"],
      0,
      "`datetime.fromtimestamp(ts)` converts POSIX timestamp seconds into a local or UTC datetime object.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["fromtimestamp", "epoch", "posix-time"])

add_c(10, "4.1", "Datetime to Epoch", "Intermediate",
      "How do you convert a `datetime` object into a Unix epoch timestamp float?",
      "from datetime import datetime\nepoch_seconds = datetime.now().timestamp()",
      ["dt.timestamp()", "dt.to_epoch()", "dt.posix()", "float(dt)"],
      0,
      "`dt.timestamp()` returns the POSIX timestamp as a floating-point number representing seconds since January 1, 1970 UTC.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["timestamp", "epoch", "posix"])

add_c(11, "4.1", "Cleaning Old Log Files", "Intermediate",
      "How can an automation script identify files in a directory that were modified more than 30 days ago?",
      "import time, pathlib\ncutoff = time.time() - (30 * 86400)\nfor p in pathlib.Path('/logs').glob('*.log'):\n    if p.stat().st_mtime < cutoff:\n        p.unlink()",
      ["Compare p.stat().st_mtime against (time.time() - 30 * 86400)", "Check if 'old' is in the filename", "Call p.is_expired(30)", "Count lines in the file"],
      0,
      "`p.stat().st_mtime` provides the last modification timestamp in epoch seconds. Comparing it to `time.time() - (30 * 86400)` identifies files older than 30 days.",
      "PCEA-30-01 Block 4.1 - Practical Automation",
      ["file-pruning", "st-mtime", "log-retention"])

add_c(12, "4.1", "Time Sleep", "Beginner",
      "What is the effect of calling `time.sleep(2.5)` in a Python script?",
      "import time\ntime.sleep(2.5)",
      ["Suspends execution of the current thread for 2.5 seconds", "Slows down execution speed by 2.5x", "Sets a timeout limit of 2.5 seconds", "Shuts down the computer after 2.5 seconds"],
      0,
      "`time.sleep(secs)` suspends execution of the calling thread for the given number of seconds (which can be a floating-point number).",
      "PCEA-30-01 Block 4.1 - time module",
      ["time-sleep", "delays", "throttling"])

add_c(13, "4.1", "Replacing Datetime Components", "Intermediate",
      "How can you create a new `datetime` object with the time reset to midnight (`00:00:00`)?",
      "from datetime import datetime\nnow = datetime.now()\nmidnight = now.replace(hour=0, minute=0, second=0, microsecond=0)",
      ["now.replace(hour=0, minute=0, second=0, microsecond=0)", "now.reset_time()", "now.midnight()", "now.set_time(0, 0, 0)"],
      0,
      "`dt.replace(...)` returns a new datetime object with specified fields replaced while retaining year, month, and day.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["replace", "midnight", "datetime-manipulation"])

add_c(14, "4.1", "Total Seconds", "Intermediate",
      "How do you get the total duration of a `timedelta` object expressed as a single floating-point number of seconds?",
      "from datetime import timedelta\ndelta = timedelta(days=1, hours=2, minutes=30)\nseconds = delta.total_seconds()",
      ["delta.total_seconds()", "delta.seconds", "float(delta)", "delta.to_seconds()"],
      0,
      "`delta.total_seconds()` calculates the entire duration across all days, hours, and minutes converted into total seconds. (`delta.seconds` only counts the seconds portion under 1 day).",
      "PCEA-30-01 Block 4.1 - timedelta",
      ["total-seconds", "duration", "timedelta"])

add_c(15, "4.1", "Year Directives", "Beginner",
      "What is the difference between `%Y` and `%y` in `strftime`?",
      "# Year directives:\n# %Y: 2026 (4-digit century year)\n# %y: 26 (2-digit year without century)",
      ["%Y is 4-digit year (e.g. 2026); %y is 2-digit year (e.g. 26)", "%Y is year day; %y is year month", "%Y is fiscal year; %y is calendar year", "There is no difference"],
      0,
      "Uppercase `%Y` represents the year with century as a 4-digit decimal number (e.g. 2026), while lowercase `%y` is the 2-digit year (00-99).",
      "PCEA-30-01 Block 4.1 - datetime Directives",
      ["year-directives", "strftime", "directives"])

add_c(16, "4.1", "Weekday Determination", "Intermediate",
      "How do you check if a given date falls on a weekend (Saturday or Sunday) in Python?",
      "from datetime import date\nd = date.today()\nis_weekend = d.weekday() >= 5  # 5 is Saturday, 6 is Sunday",
      ["d.weekday() >= 5", "d.is_weekend()", "d.day_name() in ('Sat', 'Sun')", "d.weekend == True"],
      0,
      "`date.weekday()` returns the day of the week as an integer where Monday is 0, Saturday is 5, and Sunday is 6.",
      "PCEA-30-01 Block 4.1 - datetime",
      ["weekday", "weekend-check", "date"])

add_c(17, "4.1", "Timezone Conversion", "Advanced",
      "How do you convert an aware UTC datetime object to US Eastern time using Python 3.9+ `zoneinfo`?",
      "from datetime import datetime, timezone\nfrom zoneinfo import ZoneInfo\n\nnow_utc = datetime.now(timezone.utc)\neastern = now_utc.astimezone(ZoneInfo('America/New_York'))",
      ["dt.astimezone(ZoneInfo('America/New_York'))", "dt.convert('America/New_York')", "ZoneInfo.convert(dt)", "dt.set_tz('America/New_York')"],
      0,
      "`dt.astimezone(ZoneInfo('...'))` converts a timezone-aware datetime to the target IANA timezone, automatically adjusting UTC offset and DST.",
      "PCEA-30-01 Block 4.1 - ZoneInfo",
      ["zoneinfo", "timezones", "astimezone"])

add_c(18, "4.1", "Comparing Dates", "Beginner",
      "Can two `datetime` objects be directly compared using relational operators like `<` and `>`?",
      "from datetime import datetime\ndt1 = datetime(2026, 1, 1)\ndt2 = datetime(2026, 10, 1)\nprint(dt1 < dt2)  # True",
      ["Yes, datetime objects support standard chronological comparison (<, <=, >, ==) if both are naive or both are aware", "No, they must be converted to strings first", "No, they must be converted to timestamps first", "Only equality (==) is supported"],
      0,
      "Datetime objects support chronological comparisons naturally, provided they are both naive (no timezone) or both aware (with timezone).",
      "PCEA-30-01 Block 4.1 - datetime",
      ["date-comparison", "relational-operators", "chronology"])

add_c(19, "4.1", "Microseconds Extraction", "Intermediate",
      "Which format code formats microseconds (000000 to 999999) in `strftime`?",
      "from datetime import datetime\ns = datetime.now().strftime('%Y%m%d_%H%M%S_%f')",
      ["%f", "%u", "%ms", "%S"],
      0,
      "`%f` formats the microsecond component as a decimal number zero-padded to 6 digits, widely used for unique automation file naming.",
      "PCEA-30-01 Block 4.1 - datetime Directives",
      ["microseconds", "directives", "file-naming"])

add_c(20, "4.1", "Time Delta Subtraction", "Beginner",
      "What is the result of subtracting one `datetime` object from another?",
      "from datetime import datetime\nd1 = datetime(2026, 10, 2)\nd2 = datetime(2026, 10, 1)\ndiff = d1 - d2\nprint(type(diff))",
      ["datetime.timedelta", "int (number of days)", "float (number of seconds)", "str"],
      0,
      "Subtracting two `datetime` objects returns a `datetime.timedelta` object representing the elapsed difference.",
      "PCEA-30-01 Block 4.1 - timedelta",
      ["subtraction", "timedelta", "datetime"])

# ==========================================
# CHAPTER 4.2: Task Scheduling & Periodic Automation (schedule module & cron) (Cards 21-40)
# ==========================================
add_c(21, "4.2", "schedule Library", "Beginner",
      "How do you schedule a function `backup_job` to run daily at 02:30 using the popular `schedule` library?",
      "import schedule\nschedule.every().day.at('02:30').do(backup_job)",
      ["schedule.every().day.at('02:30').do(backup_job)", "schedule.daily('02:30', backup_job)", "schedule.run_at('02:30', backup_job)", "schedule.register(backup_job, time='02:30')"],
      0,
      "`schedule.every().day.at('02:30').do(backup_job)` provides a clean, human-readable DSL for scheduling recurring tasks.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["schedule", "dsl", "task-scheduling"])

add_c(22, "4.2", "schedule Loop", "Beginner",
      "What main loop is required to execute pending jobs registered with the `schedule` library?",
      "import schedule, time\nwhile True:\n    schedule.run_pending()\n    time.sleep(1)",
      ["while True: schedule.run_pending(); time.sleep(1)", "schedule.start_daemon()", "schedule.listen_forever()", "schedule.execute_all()"],
      0,
      "`schedule` relies on a polling loop where `schedule.run_pending()` checks and executes any jobs whose scheduled time has arrived.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["run-pending", "event-loop", "polling"])

add_c(23, "4.2", "Intervals in schedule", "Beginner",
      "How do you configure a task to execute every 15 minutes with the `schedule` library?",
      "import schedule\nschedule.every(15).minutes.do(check_health)",
      ["schedule.every(15).minutes.do(check_health)", "schedule.interval(15, 'min', check_health)", "schedule.repeat(minutes=15, func=check_health)", "schedule.every().15_minutes.do(check_health)"],
      0,
      "`schedule.every(N).minutes.do(func)` registers an interval job that triggers every N minutes.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["schedule", "intervals", "periodic-tasks"])

add_c(24, "4.2", "Cancelling a Job", "Intermediate",
      "How can a job cancel its own future executions from within the scheduled function in `schedule`?",
      "import schedule\ndef one_off_task():\n    print('Executing once...')\n    return schedule.CancelJob",
      ["return schedule.CancelJob", "schedule.stop_self()", "raise StopIteration", "sys.exit(0)"],
      0,
      "Returning `schedule.CancelJob` from a scheduled function removes the job from the schedule after it completes.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["cancel-job", "one-time-task", "schedule"])

add_c(25, "4.2", "Job Tagging", "Intermediate",
      "How can you group and cancel specific tasks using tags in the `schedule` module?",
      "import schedule\nschedule.every().hour.do(job1).tag('reports')\nschedule.every().day.do(job2).tag('reports')\n# Cancel all report jobs:\nschedule.clear('reports')",
      ["Use .tag('name') when registering and schedule.clear('name') to remove them", "Assign a group_id parameter", "Store them in a list and call list.clear()", "Tagging is not supported in schedule"],
      0,
      "Tagging jobs with `.tag('label')` allows bulk operations like `schedule.clear('label')` to remove related tasks simultaneously.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["tags", "clear", "job-management"])

add_c(26, "4.2", "Cron Syntax Fields", "Beginner",
      "How many time-and-date fields make up a standard Unix `crontab` schedule expression?",
      "# Standard crontab format:\n# * * * * * command\n# (minute, hour, day of month, month, day of week)",
      ["3 fields", "5 fields", "7 fields", "1 field"],
      1,
      "Standard Unix cron expressions consist of 5 fields: Minute (0-59), Hour (0-23), Day of Month (1-31), Month (1-12), and Day of Week (0-7).",
      "PCEA-30-01 Block 4.2 - Cron",
      ["cron", "crontab", "scheduling-syntax"])

add_c(27, "4.2", "Cron Every 5 Minutes", "Intermediate",
      "Which crontab expression runs a script every 5 minutes?",
      "# Crontab line:\n# */5 * * * * /usr/bin/python3 /opt/sync.py",
      ["*/5 * * * *", "5 * * * *", "* 5 * * *", "* * */5 * *"],
      0,
      "`*/5 * * * *` specifies a step interval of every 5 minutes throughout every hour, day, and month.",
      "PCEA-30-01 Block 4.2 - Cron",
      ["cron", "intervals", "step-values"])

add_c(28, "4.2", "Cron Daily at Midnight", "Beginner",
      "Which crontab expression runs every night at midnight (00:00)?",
      "# Crontab line: 0 0 * * * /usr/bin/python3 /opt/backup.py",
      ["0 0 * * *", "* * * * *", "12 0 * * *", "0 * * * *"],
      0,
      "`0 0 * * *` triggers at minute 0 of hour 0 (midnight) every day of every month.",
      "PCEA-30-01 Block 4.2 - Cron",
      ["cron", "daily-schedule", "midnight"])

add_c(29, "4.2", "Cron Virtual Environment", "Intermediate",
      "Why must crontab entries specify absolute paths to the virtual environment Python interpreter?",
      "# Recommended crontab entry:\n# 0 2 * * * /home/user/app/.venv/bin/python /home/user/app/job.py >> /var/log/cron.log 2>&1",
      ["Cron runs in a minimal environment with a stripped PATH that does not include user virtual environments or shell aliases", "Cron refuses to run files with relative names", "Virtual environments cannot run in the background", "To make cron run as superuser"],
      0,
      "Cron executes jobs in a restricted environment with a default system PATH. Using absolute paths ensures the correct interpreter and site-packages are used.",
      "PCEA-30-01 Block 4.2 - Cron Best Practices",
      ["cron", "venv-path", "environment"])

add_c(30, "4.2", "Cron Output Redirection", "Intermediate",
      "In a crontab entry, what does `>> /var/log/job.log 2>&1` do?",
      "# 0 4 * * * /opt/job.py >> /var/log/job.log 2>&1",
      ["Appends both standard output (1) and standard error (2) to the specified log file", "Sends the output as an email attachment", "Deletes the log file after running", "Disables all logging"],
      0,
      "`>> /var/log/job.log` appends stdout, and `2>&1` redirects stderr into the same stream, ensuring all script output and errors are captured.",
      "PCEA-30-01 Block 4.2 - Cron",
      ["redirection", "cron-logging", "stderr-stdout"])

add_c(31, "4.2", "Passing Arguments in schedule", "Intermediate",
      "How do you pass arguments to a scheduled function using `schedule`?",
      "import schedule\ndef send_alert(recipient, severity='INFO'):\n    pass\n\nschedule.every().day.do(send_alert, 'ops@example.com', severity='CRITICAL')",
      ["Pass positional and keyword arguments directly after the function in .do()", "Use lambda: send_alert() only", "schedule does not support arguments", "Set schedule.args = [...]"],
      0,
      "`.do(func, *args, **kwargs)` accepts positional and keyword arguments that are automatically forwarded to the target function upon invocation.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["schedule", "function-arguments", "do"])

add_c(32, "4.2", "Overlapping Execution Prevention", "Intermediate",
      "What risk arises if a scheduled 5-minute task takes 7 minutes to complete?",
      "# Risk of concurrent duplicate runs",
      ["Duplicate overlapping instances run concurrently, potentially creating race conditions, database deadlocks, and memory exhaustion", "The computer will crash immediately", "Python will terminate the operating system", "The script will run backwards"],
      0,
      "Without locking mechanisms, schedulers will launch duplicate concurrent instances, leading to data corruption and resource contention.",
      "PCEA-30-01 Block 4.2 - Schedulers",
      ["overlap-prevention", "race-conditions", "concurrency"])

add_c(33, "4.2", "Windows Task Scheduler CLI", "Intermediate",
      "Which command-line utility in Windows allows scripting and automating scheduled tasks?",
      "# Windows task scheduling CLI: schtasks /create /sc daily /tn \"Backup\" /tr \"python backup.py\"",
      ["schtasks", "cron.exe", "win_schedule", "taskmgr"],
      0,
      "`schtasks.exe` is the Windows command-line utility for creating, querying, running, and modifying scheduled tasks.",
      "PCEA-30-01 Block 4.2 - Windows Automation",
      ["schtasks", "windows", "task-scheduler"])

add_c(34, "4.2", "Crontab Editing Command", "Beginner",
      "Which terminal command opens the current user's crontab file for editing in Unix/Linux?",
      "# Shell command: crontab -e",
      ["crontab -e", "crontab -edit", "cron --open", "nano /etc/cron"],
      0,
      "`crontab -e` opens the crontab configuration for the logged-in user in the system's default text editor.",
      "PCEA-30-01 Block 4.2 - Cron",
      ["crontab-e", "posix", "cli"])

add_c(35, "4.2", "Crontab Listing Command", "Beginner",
      "Which command displays the contents of the current user's active crontab file?",
      "# Shell command: crontab -l",
      ["crontab -l", "crontab -show", "cron list", "cat /cron"],
      0,
      "`crontab -l` lists all active cron jobs scheduled under the current user account.",
      "PCEA-30-01 Block 4.2 - Cron",
      ["crontab-l", "posix", "cli"])

add_c(36, "4.2", "Cron Day-of-Week Syntax", "Intermediate",
      "In standard cron, which numbers represent Sunday for the day-of-week field?",
      "# Cron day-of-week field: 0 or 7",
      ["0 or 7", "1 only", "6 only", "Sunday must be written in full"],
      0,
      "In standard Unix cron implementations, both `0` and `7` represent Sunday, with 1 being Monday and 6 being Saturday.",
      "PCEA-30-01 Block 4.2 - Cron",
      ["cron-days", "sunday", "syntax"])

add_c(37, "4.2", "schedule Exception Resilience", "Advanced",
      "By default, what happens to the `schedule` polling loop if a scheduled function raises an unhandled exception?",
      "def broken_job():\n    raise ValueError('Oops!')\n# while True: schedule.run_pending() -> crashes the entire loop!",
      ["The entire Python process crashes and the scheduling loop terminates", "schedule catches the error and retries in 5 seconds", "schedule ignores the exception silently", "schedule restarts the computer"],
      0,
      "An unhandled exception inside a scheduled job propagates up and terminates the `while True: schedule.run_pending()` loop. Jobs should catch exceptions internally.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["error-handling", "loop-resilience", "unhandled-exceptions"])

add_c(38, "4.2", "Systemd Timers", "Advanced",
      "What modern Linux service architecture is widely used as a replacement for cron in enterprise infrastructure?",
      "# systemd timer unit file: backup.timer",
      ["Systemd timers (.timer units)", "Windows Registry", "syslog daemon", "Python GIL"],
      0,
      "Systemd timers offer fine-grained event-driven scheduling, dependency management, and native logging via `journalctl` as a modern cron alternative.",
      "PCEA-30-01 Block 4.2 - System Automation",
      ["systemd", "timers", "linux-automation"])

add_c(39, "4.2", "Next Run Inspection", "Intermediate",
      "How can an automation script inspect the timestamp of the next upcoming scheduled job in `schedule`?",
      "import schedule\nnext_run_dt = schedule.next_run()",
      ["schedule.next_run()", "schedule.get_next()", "schedule.upcoming()", "schedule.peek()"],
      0,
      "`schedule.next_run()` returns a `datetime` object indicating when the earliest pending scheduled job is due to execute.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["next-run", "inspection", "schedule"])

add_c(40, "4.2", "Specific Weekday Scheduling", "Beginner",
      "How do you schedule a job to execute every Monday at 09:00 with `schedule`?",
      "import schedule\nschedule.every().monday.at('09:00').do(weekly_report)",
      ["schedule.every().monday.at('09:00').do(weekly_report)", "schedule.weekly('monday', '09:00', weekly_report)", "schedule.cron('0 9 * * 1', weekly_report)", "schedule.repeat(day='Mon', at='09:00', do=weekly_report)"],
      0,
      "`schedule.every().monday.at('09:00').do(...)` schedules tasks specifically on Monday mornings.",
      "PCEA-30-01 Block 4.2 - schedule module",
      ["monday", "weekly-schedule", "schedule"])

# ==========================================
# CHAPTER 4.3: Automated Logging & Audit Trails (logging module) (Cards 41-60)
# ==========================================
add_c(41, "4.3", "Log Levels Hierarchy", "Beginner",
      "What is the correct order of Python logging levels from lowest to highest severity?",
      "# Logging severity levels: DEBUG < INFO < WARNING < ERROR < CRITICAL",
      ["DEBUG < INFO < WARNING < ERROR < CRITICAL", "INFO < DEBUG < WARNING < ERROR < FATAL", "CRITICAL < ERROR < WARNING < INFO < DEBUG", "TRACE < NOTICE < ALERT < EMERGENCY"],
      0,
      "The five standard levels in ascending order of severity are DEBUG (10), INFO (20), WARNING (30), ERROR (40), and CRITICAL (50).",
      "PCEA-30-01 Block 4.3 - logging module",
      ["logging-levels", "severity", "hierarchy"])

add_c(42, "4.3", "Default Log Level", "Beginner",
      "What is the default logging threshold level if `logging.basicConfig()` is called with no arguments?",
      "import logging\nlogging.basicConfig()\n# Which messages appear by default?",
      ["DEBUG", "INFO", "WARNING", "ERROR"],
      2,
      "The default threshold level is `WARNING`. Messages at DEBUG and INFO levels are ignored unless the level is explicitly configured.",
      "PCEA-30-01 Block 4.3 - logging module",
      ["default-level", "warning", "threshold"])

add_c(43, "4.3", "basicConfig Setup", "Beginner",
      "How do you configure logging to append timestamped INFO messages to a file `audit.log`?",
      "import logging\nlogging.basicConfig(\n    filename='audit.log',\n    level=logging.INFO,\n    format='%(asctime)s [%(levelname)s] %(message)s'\n)",
      ["logging.basicConfig(filename='audit.log', level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')", "logging.init_file('audit.log')", "logging.set_target('audit.log', 'INFO')", "logging.config_file('audit.log')"],
      0,
      "`logging.basicConfig(filename=..., level=..., format=...)` initializes the root logger to write formatted records to disk.",
      "PCEA-30-01 Block 4.3 - logging module",
      ["basic-config", "file-logging", "formatting"])

add_c(44, "4.3", "Named Loggers", "Intermediate",
      "Why is `logger = logging.getLogger(__name__)` preferred over calling `logging.info()` directly in modular automation scripts?",
      "# module.py\nimport logging\nlogger = logging.getLogger(__name__)\nlogger.info('Module initialized')",
      ["It namespaces log records hierarchically by module name, making it easy to identify which component emitted each message", "It prints messages in color", "It runs 10 times faster", "It bypasses the Global Interpreter Lock"],
      0,
      "Using `getLogger(__name__)` tags records with the module's qualified name, allowing granular per-module filtering and clear log provenance.",
      "PCEA-30-01 Block 4.3 - logging module",
      ["get-logger", "dunder-name", "modularity"])

add_c(45, "4.3", "Logging Exceptions", "Intermediate",
      "How do you log an error message along with the full exception traceback in a single call?",
      "try:\n    run_step()\nexcept Exception:\n    logging.exception('Failed to run step!')",
      ["logging.exception('Failed to run step!') (or logging.error(..., exc_info=True))", "logging.print_traceback()", "logging.error(traceback=True)", "sys.log_trace()"],
      0,
      "`logging.exception()` logs an ERROR-level message and automatically appends the current exception's full traceback (`exc_info=True`).",
      "PCEA-30-01 Block 4.3 - logging module",
      ["logging-exception", "exc-info", "traceback"])

add_c(46, "4.3", "RotatingFileHandler", "Intermediate",
      "Which logging handler automatically closes the current log file and opens a new one when it reaches 5 MB?",
      "from logging.handlers import RotatingFileHandler\nhandler = RotatingFileHandler('app.log', maxBytes=5_000_000, backupCount=3)",
      ["TimedFileHandler", "RotatingFileHandler", "RollingLogger", "SplitFileHandler"],
      1,
      "`RotatingFileHandler(filename, maxBytes=..., backupCount=...)` rotates log files when `maxBytes` is reached, preserving a fixed number of backup files.",
      "PCEA-30-01 Block 4.3 - Log Rotation",
      ["rotating-file-handler", "log-rotation", "disk-management"])

add_c(47, "4.3", "TimedRotatingFileHandler", "Intermediate",
      "How do you rotate log files daily at midnight using the `logging.handlers` module?",
      "from logging.handlers import TimedRotatingFileHandler\nhandler = TimedRotatingFileHandler('daily.log', when='midnight', backupCount=14)",
      ["TimedRotatingFileHandler('daily.log', when='midnight', backupCount=14)", "DailyLogHandler('daily.log', days=14)", "RotatingFileHandler(interval='daily')", "ClockRotatingHandler('daily.log')"],
      0,
      "`TimedRotatingFileHandler(filename, when='midnight', backupCount=14)` automatically rolls over logs at midnight, keeping 14 days of history.",
      "PCEA-30-01 Block 4.3 - Log Rotation",
      ["timed-rotating-handler", "daily-rotation", "retention"])

add_c(48, "4.3", "Format Directive asctime", "Beginner",
      "Which format directive in `logging.basicConfig()` outputs human-readable timestamps for log records?",
      "format='%(asctime)s - %(message)s'",
      ["%(time)s", "%(asctime)s", "%(timestamp)s", "%(now)s"],
      1,
      "`%(asctime)s` formats the creation time of the log record into a readable date-time string (e.g. `2026-10-01 02:40:00,123`).",
      "PCEA-30-01 Block 4.3 - Log Formatting",
      ["asctime", "formatting", "directives"])

add_c(49, "4.3", "Console and File Dual Logging", "Intermediate",
      "How can an automation script output log messages to both the console terminal and a disk file simultaneously?",
      "logger = logging.getLogger('automation')\nlogger.setLevel(logging.DEBUG)\n\nc_handler = logging.StreamHandler()  # Console\nf_handler = logging.FileHandler('run.log')  # Disk\n\nlogger.addHandler(c_handler)\nlogger.addHandler(f_handler)",
      ["Attach both a StreamHandler and a FileHandler to the logger", "Call logging.basicConfig() twice", "Redirect stdout in bash", "Use print() for console and logging for file"],
      0,
      "Loggers support multiple handlers. Attaching both a `StreamHandler` (console) and a `FileHandler` (disk) directs logs to both destinations concurrently.",
      "PCEA-30-01 Block 4.3 - Handlers",
      ["stream-handler", "file-handler", "dual-logging"])

add_c(50, "4.3", "Lazy Formatting in Logging", "Intermediate",
      "Why is `logger.info('Processing %s items', count)` preferred over `logger.info(f'Processing {count} items')`?",
      "# Lazy interpolation avoids string formatting overhead if the log level is disabled\nlogger.debug('Costly object: %s', compute_large_summary())",
      ["String formatting is evaluated lazily only if the log level threshold is enabled, saving CPU cycles when DEBUG is disabled", "f-strings cause SyntaxError inside loggers", "% formatting runs in parallel", "It encrypts the log string"],
      0,
      "Supplying arguments to `logger.log(msg, *args)` defers string interpolation until Python confirms the record meets the active severity threshold.",
      "PCEA-30-01 Block 4.3 - Best Practices",
      ["lazy-formatting", "performance", "optimization"])

add_c(51, "4.3", "Structured Logging (JSON Logs)", "Advanced",
      "Why are JSON-formatted logs widely adopted in automated cloud operations?",
      "# JSON log entry: {\"timestamp\": \"...\", \"level\": \"INFO\", \"job_id\": 42, \"items\": 150}",
      ["JSON logs can be ingested, indexed, queried, and visualized directly by centralized log analyzers (Datadog, Splunk, Elastic) without complex regexes", "JSON logs consume 0 disk space", "JSON logs prevent server crashes", "JSON logs cannot be deleted"],
      0,
      "Structured JSON logs allow log aggregation platforms to parse fields automatically, enabling instant filtering by user, job ID, or severity.",
      "PCEA-30-01 Block 4.3 - Structured Logging",
      ["structured-logging", "json-logs", "observability"])

add_c(52, "4.3", "Custom Extra Data", "Intermediate",
      "How do you pass custom contextual metadata (like `job_id=42`) into a log record?",
      "logger.info('Task started', extra={'job_id': 42, 'server': 'web01'})",
      ["extra={'job_id': 42}", "metadata={'job_id': 42}", "params={'job_id': 42}", "context={'job_id': 42}"],
      0,
      "The `extra` keyword argument passes a dictionary whose keys can be incorporated into log format strings or structured JSON loggers.",
      "PCEA-30-01 Block 4.3 - logging module",
      ["extra", "contextual-logging", "metadata"])

add_c(53, "4.3", "Suppressing Third-Party Logs", "Intermediate",
      "How do you silence noisy DEBUG logs from a third-party library like `urllib3` while keeping your own script at DEBUG level?",
      "logging.getLogger('urllib3').setLevel(logging.WARNING)",
      ["logging.getLogger('urllib3').setLevel(logging.WARNING)", "urllib3.disable_logging()", "logging.silence('urllib3')", "del logging.loggers['urllib3']"],
      0,
      "Calling `logging.getLogger('library_name').setLevel(logging.WARNING)` raises the threshold specifically for that library without affecting your application's logs.",
      "PCEA-30-01 Block 4.3 - Log Filtering",
      ["log-filtering", "third-party-logs", "verbosity"])

add_c(54, "4.3", "Root vs Child Loggers", "Intermediate",
      "If a child logger `logging.getLogger('app.worker')` emits a message, does it propagate to handlers on parent `logging.getLogger('app')`?",
      "# Logger hierarchy propagation\nlogger = logging.getLogger('app.worker')\nlogger.info('Work done')  # Propagates up to parent handlers",
      ["Yes, messages propagate up the logger hierarchy by default unless propagate=False is set", "No, loggers never share messages", "Only if both loggers have identical names", "Only on Linux systems"],
      0,
      "By default, records propagate up ancestor loggers to the root logger, allowing parent handlers to capture all child messages centrally.",
      "PCEA-30-01 Block 4.3 - Logger Hierarchy",
      ["propagation", "logger-hierarchy", "handlers"])

add_c(55, "4.3", "FileHandler Mode", "Beginner",
      "By default, does `logging.FileHandler('run.log')` overwrite or append to existing log files?",
      "from logging import FileHandler\nhandler = FileHandler('run.log', mode='a')",
      ["Appends ('a')", "Overwrites ('w')", "Creates a new file with timestamp suffix", "Raises FileExistsError"],
      0,
      "By default, `FileHandler` opens files in append mode (`mode='a'`), preserving previous historical log records across restarts.",
      "PCEA-30-01 Block 4.3 - FileHandler",
      ["append-mode", "file-handler", "logging"])

add_c(56, "4.3", "CRITICAL Level Use Case", "Beginner",
      "When should an automation script log a `CRITICAL` severity message?",
      "logging.critical('Database disk full; all pipeline writes failed. Aborting script!')",
      ["When an unexpected, unrecoverable failure forces the entire automation pipeline to halt", "For routine routine status updates", "To benchmark execution speed", "When downloading a web image"],
      0,
      "`CRITICAL` is reserved for catastrophic, fatal events that prevent the application from continuing to execute.",
      "PCEA-30-01 Block 4.3 - Severity Levels",
      ["critical-level", "fatal-errors", "logging"])

add_c(57, "4.3", "Formatter Class", "Intermediate",
      "Which class defines the string structure and timestamp format of records in the `logging` module?",
      "from logging import Formatter\nformatter = Formatter('%(asctime)s - %(levelname)s: %(message)s', datefmt='%Y-%m-%d %H:%M:%S')",
      ["logging.Formatter", "logging.Template", "logging.Layout", "logging.StringSpec"],
      0,
      "`logging.Formatter` objects configure the structure, directives, and date formatting for handlers.",
      "PCEA-30-01 Block 4.3 - Formatting",
      ["formatter", "datefmt", "logging"])

add_c(58, "4.3", "Sensitive Data in Logs", "Beginner",
      "Why must automated scripts never log raw passwords, credit cards, or API secrets?",
      "# Bad: logging.info(f'User logged in with password: {password}')",
      ["Logs are stored in plain text and often sent to shared central monitoring tools, creating severe security and compliance breaches", "Passwords cause formatting errors in logging", "Loggers automatically convert passwords to hashtags", "It slows down the network"],
      0,
      "Logs are often widely accessible to developers and administrators. Writing plain text credentials to logs violates security policies and compliance regulations (GDPR, PCI-DSS).",
      "PCEA-30-01 Block 4.3 - Security in Logging",
      ["secrets-leakage", "compliance", "security"])

add_c(59, "4.3", "Line Number Directive", "Intermediate",
      "Which format directive inserts the source code line number where the log call was invoked?",
      "format='%(filename)s:%(lineno)d - %(message)s'",
      ["%(lineno)d", "%(line)s", "%(loc)d", "%(num)d"],
      0,
      "`%(lineno)d` outputs the source code line number where the logging call was made, invaluable for diagnosing errors in production.",
      "PCEA-30-01 Block 4.3 - Directives",
      ["lineno", "debugging", "directives"])

add_c(60, "4.3", "Audit Trail Ledger", "Intermediate",
      "In automation, what is the key characteristic of an audit log compared to a debug log?",
      "# Audit log: 2026-10-01 02:40:00 [AUDIT] Target: /etc/hosts | Action: UPDATED | User: backup_svc",
      ["Audit logs record business-critical actions, changes, and initiators for governance and compliance, whereas debug logs record technical diagnostics", "Audit logs are deleted every 10 seconds", "Audit logs must only be written in binary", "Audit logs cannot have timestamps"],
      0,
      "Audit logs record who did what, when, and to which resource, creating an immutable paper trail for security and regulatory compliance.",
      "PCEA-30-01 Block 4.3 - Audit Trails",
      ["audit-logs", "compliance", "traceability"])

# ==========================================
# CHAPTER 4.4: Robust Exception Handling & Automated Retry Logic (Cards 61-80)
# ==========================================
add_c(61, "4.4", "try-except-else-finally", "Beginner",
      "In a `try-except-else-finally` block, when does the `else` block execute?",
      "try:\n    perform_task()\nexcept SpecificError:\n    handle_error()\nelse:\n    print('Task succeeded without errors!')\nfinally:\n    cleanup()",
      ["Only when the try block completes WITHOUT raising any exceptions", "Only when an exception is caught", "Always, regardless of errors", "Before the try block starts"],
      0,
      "The `else` block executes only if the code in the `try` block runs to completion without raising any exceptions.",
      "PCEA-30-01 Block 4.4 - Exception Handling",
      ["try-else", "flow-control", "exceptions"])

add_c(62, "4.4", "finally Block", "Beginner",
      "When is the `finally` block executed in Python exception handling?",
      "try:\n    f = open('data.bin', 'wb')\n    write_data(f)\nfinally:\n    f.close()",
      ["Always, whether an exception occurred, was caught, or not caught, or if return was called", "Only if an error was raised", "Only if no error occurred", "Only if the script is running in debug mode"],
      0,
      "`finally` is guaranteed to execute under all circumstances before the block exits, ensuring reliable cleanup of resources.",
      "PCEA-30-01 Block 4.4 - Exception Handling",
      ["finally", "resource-cleanup", "guaranteed-execution"])

add_c(63, "4.4", "Bare except Hazard", "Intermediate",
      "Why is writing a bare `except:` or `except BaseException:` considered harmful in automation scripts?",
      "# Dangerous bare except:\n# try: run() except: pass",
      ["It intercepts SystemExit and KeyboardInterrupt (Ctrl+C), preventing scripts from terminating or being stopped by operators", "It causes syntax errors in Python 3", "It slows down CPU clock speed", "It deletes variable contents"],
      0,
      "A bare `except:` catches `BaseException`, swallowing `KeyboardInterrupt` (Ctrl+C) and `SystemExit`, making scripts impossible to stop cleanly.",
      "PCEA-30-01 Block 4.4 - Anti-Patterns",
      ["bare-except", "anti-patterns", "system-exit"])

add_c(64, "4.4", "Catching Exception", "Beginner",
      "Why is `except Exception as err:` preferred when catching general unexpected runtime errors?",
      "try:\n    process_record()\nexcept Exception as err:\n    logging.error(f'Record failed: {err}')",
      ["It catches all standard runtime errors while still allowing KeyboardInterrupt and SystemExit to terminate the script cleanly", "It only catches division by zero errors", "It automatically fixes the bug", "It runs in an asynchronous thread"],
      0,
      "Standard operational errors inherit from `Exception`, while system termination signals inherit directly from `BaseException`. Catching `Exception` leaves interrupts functional.",
      "PCEA-30-01 Block 4.4 - Best Practices",
      ["except-exception", "best-practices", "error-handling"])

add_c(65, "4.4", "Custom Exceptions", "Intermediate",
      "How do you define a custom domain exception for an automation tool?",
      "class BackupFailedError(Exception):\n    \"\"\"Raised when database backup fails.\"\"\"\n    pass",
      ["class BackupFailedError(Exception): pass", "def BackupFailedError(): pass", "error BackupFailedError", "create_exception(BackupFailedError)"],
      0,
      "Custom exceptions are defined by subclassing Python's built-in `Exception` class.",
      "PCEA-30-01 Block 4.4 - Custom Exceptions",
      ["custom-exceptions", "subclassing", "architecture"])

add_c(66, "4.4", "Exception Chaining", "Intermediate",
      "What syntax chains a low-level OS error to a high-level domain error while preserving the original cause?",
      "try:\n    os.remove('protected.file')\nexcept OSError as err:\n    raise DeploymentError('Failed to remove lockfile') from err",
      ["raise DeploymentError(...) from err", "raise DeploymentError(...) with err", "raise DeploymentError(...) cause err", "raise DeploymentError(...).link(err)"],
      0,
      "`raise NewException(...) from original_err` preserves the original traceback and exception context via explicit exception chaining (`__cause__`).",
      "PCEA-30-01 Block 4.4 - Exception Chaining",
      ["exception-chaining", "raise-from", "traceability"])

add_c(67, "4.4", "Retry Loop Pattern", "Intermediate",
      "What is the standard pattern for retrying a flaky network operation up to 3 times before giving up?",
      "max_retries = 3\nfor attempt in range(1, max_retries + 1):\n    try:\n        return call_remote_service()\n    except TransientNetworkError as e:\n        if attempt == max_retries:\n            raise\n        time.sleep(2 ** attempt)",
      ["Loop over a range of attempts with a try-except, re-raising on the final attempt and sleeping between failures", "Call the function 3 times on the same line", "Use a recursive function with no base case", "Restart the Python virtualenv"],
      0,
      "A counted loop with exponential sleep that catches transient errors and re-raises on the final attempt is the standard retry pattern.",
      "PCEA-30-01 Block 4.4 - Retry Logic",
      ["retry-loop", "transient-errors", "resilience"])

add_c(68, "4.4", "Retry Decorator", "Advanced",
      "How can a Python decorator be used to add automated retry capability to any function?",
      "def retry(max_attempts=3):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for i in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception:\n                    if i == max_attempts - 1:\n                        raise\n                    time.sleep(1)\n        return wrapper\n    return decorator",
      ["Wrap the target function in an outer wrapper that executes a retry loop", "Decorators cannot catch exceptions", "Use @retry keyword built into Python", "Modify the bytecode of the function"],
      0,
      "A decorator wraps the target function with retry loop mechanics, cleanly separating resilience logic from core business logic.",
      "PCEA-30-01 Block 4.4 - Decorators",
      ["decorators", "retry-decorator", "clean-code"])

add_c(69, "4.4", "Circuit Breaker Concept", "Advanced",
      "What is the purpose of the 'Circuit Breaker' pattern in automated external integrations?",
      "# Circuit states: CLOSED (normal) -> OPEN (stop calling failing service) -> HALF-OPEN (test canary)",
      ["To immediately stop sending requests to an external service that has repeatedly failed, avoiding cascading timeouts and resource exhaustion", "To cut physical power to the server", "To bypass API rate limits", "To compress network payloads"],
      0,
      "Circuit breakers detect repeated failures and 'trip open', failing fast locally without waiting for timeouts until the external service recovers.",
      "PCEA-30-01 Block 4.4 - Architecture",
      ["circuit-breaker", "fail-fast", "resilience"])

add_c(70, "4.4", "Dead Letter Queue / Failure Ledger", "Intermediate",
      "When processing a batch of 10,000 records, what should happen to individual records that fail processing?",
      "failures = []\nfor record in records:\n    try:\n        process(record)\n    except Exception as e:\n        failures.append({'record': record, 'error': str(e)})\nsave_dead_letter_log(failures)",
      ["Record failed items to a failure ledger or dead-letter queue for offline inspection while continuing to process remaining records", "Crash the entire batch on the first failure", "Silently discard the failed records without logging", "Delete the database"],
      0,
      "Recording failed items in a dead-letter log or queue allows the main automation batch to finish while isolating defective records for human review.",
      "PCEA-30-01 Block 4.4 - Batch Processing",
      ["dead-letter-queue", "failure-ledger", "batch-automation"])

add_c(71, "4.4", "Re-Raising Exceptions", "Beginner",
      "How do you re-raise the currently active exception inside an `except` block after logging it?",
      "try:\n    critical_step()\nexcept Exception as e:\n    logging.error('Step failed!')\n    raise  # Re-raises current exception",
      ["Call `raise` with no arguments", "Call `raise e`", "Call `raise Exception`", "Call `sys.exit(1)`"],
      0,
      "A bare `raise` statement inside an except block re-raises the active exception currently being handled, preserving the original traceback.",
      "PCEA-30-01 Block 4.4 - Exception Handling",
      ["bare-raise", "re-raise", "traceback-preservation"])

add_c(72, "4.4", "Multiple Exception Types", "Beginner",
      "How do you catch both `FileNotFoundError` and `PermissionError` with identical handling logic in a single `except` statement?",
      "try:\n    read_config()\nexcept (FileNotFoundError, PermissionError) as err:\n    logging.warning(f'Config access issue: {err}')",
      ["except (FileNotFoundError, PermissionError) as err:", "except FileNotFoundError or PermissionError:", "except [FileNotFoundError, PermissionError]:", "except FileNotFoundError, PermissionError:"],
      0,
      "Multiple exception classes can be caught together by specifying them as a parenthesized tuple: `except (ErrorA, ErrorB) as err:`.",
      "PCEA-30-01 Block 4.4 - Syntax",
      ["multiple-exceptions", "tuple-syntax", "error-handling"])

add_c(73, "4.4", "Specific vs General Exceptions", "Beginner",
      "When defining multiple `except` blocks, what order must they appear in?",
      "try:\n    val = int('abc')\nexcept ValueError:\n    print('Specific handling')\nexcept Exception:\n    print('General fallback')",
      ["Most specific exception classes first, followed by more general base classes", "Most general classes first, then specific classes", "Alphabetical order", "Order does not matter"],
      0,
      "Python evaluates `except` clauses top-to-bottom. Specific subclasses must appear first; otherwise, a broad base class would intercept them prematurely.",
      "PCEA-30-01 Block 4.4 - Exception Hierarchy",
      ["ordering", "specificity", "subclasses"])

add_c(74, "4.4", "Idempotent Retry", "Intermediate",
      "Why must operations executed inside automated retry loops be idempotent?",
      "# Bad: Charging a customer credit card without an idempotency key inside a retry loop!",
      ["If a non-idempotent operation (like charging a credit card or appending to a file) is retried after a network timeout, it may execute multiple duplicate actions", "Because Python throws an error if retried functions are not idempotent", "Idempotent functions run twice as fast", "It enables multithreading"],
      0,
      "If a request times out after reaching the server, retrying a non-idempotent action will execute it multiple times (e.g. double charging).",
      "PCEA-30-01 Block 4.4 - Retry Logic",
      ["idempotent-retries", "safety", "network-timeouts"])

add_c(75, "4.4", "Assert Statements in Production", "Intermediate",
      "Why should `assert` statements NOT be used for business logic error handling in production automation scripts?",
      "# Dangerous: assert is_admin, 'Unauthorized!'\n# Running python with -O disables all assert statements!",
      ["Running Python with optimizations (-O flag) completely disables and removes all assert statements at compile time", "assert statements consume 50 MB of memory each", "assert statements cannot be caught by try-except", "assert is only available in Python 2"],
      0,
      "Asserts are designed for internal debugging. Production code run with `python -O` strips asserts, bypassing security or data validation checks.",
      "PCEA-30-01 Block 4.4 - Anti-Patterns",
      ["assert-statements", "python-optimizations", "production-safety"])

add_c(76, "4.4", "Uncaught Exception Hook", "Advanced",
      "How can an automation script configure a global fallback handler to catch any unhandled exception before the script terminates?",
      "import sys, logging\n\ndef global_exception_handler(exc_type, exc_value, exc_traceback):\n    logging.critical('Unhandled crash!', exc_info=(exc_type, exc_value, exc_traceback))\n    send_pager_alert()\n\nsys.excepthook = global_exception_handler",
      ["Assign a callback function to sys.excepthook", "Wrap the Python interpreter in a daemon", "Set sys.global_try = True", "Set os.on_error = callback"],
      0,
      "`sys.excepthook` is called by Python when an exception is raised and uncaught, allowing global emergency notification before process exit.",
      "PCEA-30-01 Block 4.4 - Global Hooks",
      ["sys-excepthook", "crash-reporting", "observability"])

add_c(77, "4.4", "KeyboardInterrupt Clean Exit", "Beginner",
      "How do you catch a user pressing `Ctrl+C` to display a clean exit message without printing an ugly traceback?",
      "try:\n    run_loop()\nexcept KeyboardInterrupt:\n    print('\\nScript cancelled by operator.')\n    sys.exit(130)",
      ["Catch KeyboardInterrupt explicitly in the main entry point", "Disable the keyboard with os.system()", "Wrap code in while True: pass", "Use time.sleep()"],
      0,
      "Catching `KeyboardInterrupt` enables clean cancellation, closing files and suppressing raw stack trace dumps when cancelled by operators.",
      "PCEA-30-01 Block 4.4 - User Experience",
      ["keyboard-interrupt", "clean-exit", "cli"])

add_c(78, "4.4", "Validating Invariants", "Intermediate",
      "What is the term for checking conditions that must always hold true throughout an automation pipeline (such as positive account balance)?",
      "# Invariant check:\nif account.balance < 0:\n    raise InvariantViolationError('Balance cannot be negative!')",
      ["Invariant validation", "Dynamic typing", "Polymorphism", "Reflection"],
      0,
      "Invariants are state assertions that must remain true across processing stages; checking them prevents corrupted states from persisting.",
      "PCEA-30-01 Block 4.4 - Defensive Programming",
      ["invariants", "data-integrity", "defensive-coding"])

add_c(79, "4.4", "Safe Resource Cleanup", "Intermediate",
      "If a file handle or network connection is opened before a `try` block, what construct ensures it is always closed?",
      "with open('data.txt') as f:\n    process(f)",
      ["A context manager (with statement) or a finally block", "A global variable", "A lambda function", "A while loop"],
      0,
      "Both context managers (`with`) and `finally` blocks guarantee cleanup execution even if unexpected exceptions occur.",
      "PCEA-30-01 Block 4.4 - Resource Management",
      ["context-managers", "finally", "cleanup"])

add_c(80, "4.4", "Silent Failures Anti-Pattern", "Beginner",
      "Why is `except Exception: pass` known as one of the most dangerous anti-patterns in automation?",
      "# Anti-pattern: try: step() except Exception: pass",
      ["It hides genuine bugs, syntax errors, and data corruption, leaving automations in silently broken or unpredictable states", "It increases execution time by 10x", "It disables Python garbage collection", "It converts exceptions into integers"],
      0,
      "Silently swallowing exceptions without logging makes debugging impossible and allows broken pipelines to continue producing corrupt results undetected.",
      "PCEA-30-01 Block 4.4 - Anti-Patterns",
      ["swallowing-exceptions", "silent-failures", "best-practices"])

# ==========================================
# CHAPTER 4.5: Email Alerts & Notification Dispatch with smtplib (Cards 81-100)
# ==========================================
add_c(81, "4.5", "smtplib Setup", "Beginner",
      "Which standard library module handles sending email alerts over SMTP in Python?",
      "import smtplib\nwith smtplib.SMTP('smtp.example.com', 587) as server:\n    pass",
      ["email_sender", "smtplib", "mailx", "socket.smtp"],
      1,
      "`smtplib` is the Python standard library client implementation of the Simple Mail Transfer Protocol (SMTP).",
      "PCEA-30-01 Block 4.5 - smtplib",
      ["smtplib", "email", "standard-library"])

add_c(82, "4.5", "STARTTLS Encryption", "Intermediate",
      "What is the purpose of calling `server.starttls()` when connecting to port 587?",
      "import smtplib\nserver = smtplib.SMTP('smtp.example.com', 587)\nserver.starttls()  # Upgrade connection to TLS\nserver.login(user, password)",
      ["Upgrades an existing plain text connection to an encrypted TLS (SSL) session before transmitting credentials", "Restarts the SMTP server", "Sends the email in HTML format", "Compresses the email body"],
      0,
      "`starttls()` negotiates Transport Layer Security (TLS) over an existing plaintext socket, encrypting login credentials and email messages.",
      "PCEA-30-01 Block 4.5 - smtplib",
      ["starttls", "encryption", "security"])

add_c(83, "4.5", "SMTP_SSL", "Intermediate",
      "When connecting to an SMTP server on port 465, which smtplib class initiates direct SSL encryption from the outset?",
      "import smtplib\nwith smtplib.SMTP_SSL('smtp.example.com', 465) as server:\n    server.login(user, password)",
      ["smtplib.SMTP_SSL", "smtplib.SecureSMTP", "smtplib.TLS_SMTP", "smtplib.SMTP(ssl=True)"],
      0,
      "`smtplib.SMTP_SSL` creates a connection that is encrypted via SSL/TLS from the initial socket handshake (standard on port 465).",
      "PCEA-30-01 Block 4.5 - smtplib",
      ["smtp-ssl", "port-465", "tls"])

add_c(84, "4.5", "EmailMessage Class", "Beginner",
      "Which modern standard library class is recommended for constructing email messages with headers, text, HTML, and attachments?",
      "from email.message import EmailMessage\nmsg = EmailMessage()\nmsg['Subject'] = 'Automated Report'\nmsg['From'] = 'bot@example.com'\nmsg['To'] = 'ops@example.com'\nmsg.set_content('All jobs completed.')",
      ["email.message.EmailMessage", "email.MIMEText", "smtplib.MailObject", "email.Composer"],
      0,
      "`EmailMessage` (introduced in Python 3.6+) is the modern, intuitive interface for assembling RFC 5322 compliant messages.",
      "PCEA-30-01 Block 4.5 - email module",
      ["email-message", "modern-email", "composition"])

add_c(85, "4.5", "Email Headers", "Beginner",
      "How are email headers like `Subject`, `From`, and `To` set on an `EmailMessage` object?",
      "msg = EmailMessage()\nmsg['Subject'] = 'Daily Report'\nmsg['From'] = 'bot@domain.com'\nmsg['To'] = 'admin@domain.com'",
      ["Using dictionary key assignment: msg['Header'] = 'value'", "Calling msg.set_header('Subject', 'value')", "Passing them as kwargs to EmailMessage()", "Writing them to a text file"],
      0,
      "`EmailMessage` behaves like a dictionary for setting and retrieving standard email headers.",
      "PCEA-30-01 Block 4.5 - EmailMessage",
      ["headers", "subject", "recipient"])

add_c(86, "4.5", "Plain Text Body", "Beginner",
      "How do you set the main plain-text content of an `EmailMessage` object?",
      "msg = EmailMessage()\nmsg.set_content('Execution summary: 0 failures, 142 processed.')",
      ["msg.set_content('...')", "msg.body = '...'", "msg.write('...')", "msg['Body'] = '...'"],
      0,
      "`msg.set_content(text)` sets the payload and specifies `Content-Type: text/plain` with UTF-8 encoding by default.",
      "PCEA-30-01 Block 4.5 - EmailMessage",
      ["set-content", "plain-text", "email-body"])

add_c(87, "4.5", "HTML Email Alternative", "Intermediate",
      "How do you add an HTML formatted version of an alert email alongside the plain text version?",
      "msg = EmailMessage()\nmsg.set_content('Plain text fallback')\nmsg.add_alternative('<h1>Alert</h1><p>Status: OK</p>', subtype='html')",
      ["msg.add_alternative(html_content, subtype='html')", "msg.set_html(html_content)", "msg['Content-Type'] = 'text/html'", "msg.html = html_content"],
      0,
      "`msg.add_alternative(html_string, subtype='html')` creates a `multipart/alternative` container with both plain-text and rich HTML formats.",
      "PCEA-30-01 Block 4.5 - HTML Emails",
      ["html-email", "add-alternative", "multipart"])

add_c(88, "4.5", "Attaching Files to Email", "Intermediate",
      "How do you attach a CSV report file `summary.csv` to an `EmailMessage` object?",
      "with open('summary.csv', 'rb') as f:\n    data = f.read()\nmsg.add_attachment(data, maintype='text', subtype='csv', filename='summary.csv')",
      ["msg.add_attachment(data, maintype='text', subtype='csv', filename='summary.csv')", "msg.attach_file('summary.csv')", "msg.attachments.append('summary.csv')", "msg['Attachment'] = 'summary.csv'"],
      0,
      "`msg.add_attachment(data, maintype=..., subtype=..., filename=...)` attaches binary data, setting MIME boundaries and headers automatically.",
      "PCEA-30-01 Block 4.5 - Attachments",
      ["add-attachment", "mime", "csv-attachment"])

add_c(89, "4.5", "send_message Method", "Beginner",
      "Which method on an `SMTP` object sends an `EmailMessage` instance directly without needing manual recipient address lists?",
      "server.send_message(msg)",
      ["server.send_message(msg)", "server.sendmail(msg)", "server.dispatch(msg)", "server.transmit(msg)"],
      0,
      "`server.send_message(msg)` extracts envelope recipients (`To`, `Cc`, `Bcc`) and sender (`From`) directly from the message object.",
      "PCEA-30-01 Block 4.5 - smtplib",
      ["send-message", "smtplib", "dispatch"])

add_c(90, "4.5", "App-Specific Passwords", "Intermediate",
      "Why do modern email providers (like Gmail or Outlook) require 'App-Specific Passwords' for automated Python SMTP scripts?",
      "# Authenticating automated bots securely without compromising main account password",
      ["They protect the main account password when 2-Factor Authentication (2FA) is enabled, granting restricted access revocable at any time", "Python cannot send standard passwords over the internet", "App-specific passwords make emails deliver 5x faster", "SMTP port 587 requires 32-character keys"],
      0,
      "App-specific passwords bypass 2FA challenges for headless scripts while keeping primary credentials secure and revocable.",
      "PCEA-30-01 Block 4.5 - Email Security",
      ["app-passwords", "2fa", "authentication"])

add_c(91, "4.5", "Multiple Recipients", "Beginner",
      "How do you specify multiple email recipients in the `To` header of an `EmailMessage`?",
      "msg['To'] = 'dev1@example.com, dev2@example.com, dev3@example.com'",
      ["Assign a comma-separated string of email addresses", "Assign a Python list of strings", "Call msg.add_recipient() for each", "Assign an integer count of recipients"],
      0,
      "In standard email headers, multiple recipients are separated by commas within a single string (e.g. `'user1@domain.com, user2@domain.com'`).",
      "PCEA-30-01 Block 4.5 - EmailMessage",
      ["recipients", "to-header", "rfc5322"])

add_c(92, "4.5", "Authentication Errors", "Intermediate",
      "Which exception is raised by `smtplib` when incorrect credentials are provided to `server.login()`?",
      "import smtplib\ntry:\n    server.login('user', 'wrong_pass')\nexcept smtplib.SMTPAuthenticationError:\n    print('Login credentials rejected!')",
      ["smtplib.SMTPAuthenticationError", "smtplib.AuthFailure", "PermissionError", "ValueError"],
      0,
      "`smtplib.SMTPAuthenticationError` is raised when the SMTP server rejects the provided username and password.",
      "PCEA-30-01 Block 4.5 - Error Handling",
      ["smtp-authentication-error", "exceptions", "login"])

add_c(93, "4.5", "Context Manager Cleanup", "Beginner",
      "Why should SMTP connections be established using a `with` statement?",
      "with smtplib.SMTP('smtp.example.com', 587) as server:\n    server.starttls()\n    server.login(u, p)\n    server.send_message(msg)\n# server.quit() is called automatically",
      ["It guarantees that server.quit() is called and the TCP connection is closed cleanly, even if sending fails with an exception", "It avoids having to enter a password", "It encrypts the Python file", "It delivers the email immediately"],
      0,
      "Using `with smtplib.SMTP(...) as server:` guarantees that `server.quit()` is called, closing the socket session cleanly under all conditions.",
      "PCEA-30-01 Block 4.5 - Resource Management",
      ["context-manager", "server-quit", "clean-code"])

add_c(94, "4.5", "Attaching Log Files", "Intermediate",
      "How do you read a text log file and attach it as a MIME attachment to an email alert?",
      "with open('error.log', 'r', encoding='utf-8') as f:\n    log_text = f.read()\nmsg.add_attachment(log_text, subtype='plain', filename='error.log')",
      ["Read the text and call msg.add_attachment(log_text, subtype='plain', filename='error.log')", "Pass the filename to msg.attach()", "msg['Attachment'] = open('error.log')", "Embed the log in the email subject"],
      0,
      "`msg.add_attachment(text_or_bytes, subtype=..., filename=...)` accepts both string and binary payloads, formatting appropriate MIME headers.",
      "PCEA-30-01 Block 4.5 - Attachments",
      ["log-attachment", "add-attachment", "troubleshooting"])

add_c(95, "4.5", "Bcc Recipients", "Intermediate",
      "How can an automation script send a message to a Blind Carbon Copy (`Bcc`) recipient without exposing their address in email headers?",
      "msg['Bcc'] = 'audit@example.com'\n# send_message extracts Bcc for envelope recipients, but removes Bcc header from outgoing message body",
      ["Set msg['Bcc'] = 'audit@example.com' (send_message handles stripping the header from the message body)", "Bcc is not supported in Python", "Manually encrypt the email address", "Send two separate emails"],
      0,
      "`EmailMessage` allows setting `Bcc`. `server.send_message()` routes to Bcc recipients while stripping the header from the transmitted headers.",
      "PCEA-30-01 Block 4.5 - EmailMessage",
      ["bcc", "privacy", "email-headers"])

add_c(96, "4.5", "Alert Throttling", "Intermediate",
      "Why must an automated monitoring script implement alert throttling (e.g. at most 1 alert email per hour per error)?",
      "# Alert throttling pattern: prevent flooding inbox with 10,000 emails during an outage",
      ["To avoid flooding the on-call engineer's inbox with thousands of duplicate notification emails during an active outage", "Because SMTP servers only allow 1 email per year", "To prevent running out of hard drive space", "Because Python can only send 1 email per day"],
      0,
      "Throttling or debouncing alerts prevents inbox spam and alert fatigue when a recurring error occurs hundreds of times per minute.",
      "PCEA-30-01 Block 4.5 - Best Practices",
      ["throttling", "alert-fatigue", "monitoring"])

add_c(97, "4.5", "HTML Report Summary", "Intermediate",
      "What is the advantage of sending an HTML table summary in daily operational emails rather than raw CSV attachments only?",
      "# Executive dashboard in email body:\n# <table><tr><th>Service</th><th>Status</th></tr><tr><td>DB</td><td>OK</td></tr></table>",
      ["Stakeholders can view key metrics and health status immediately inside mobile and desktop email clients without downloading files", "HTML emails bypass spam filters", "HTML emails take 0 bytes of bandwidth", "HTML emails require no internet connection"],
      0,
      "Inline HTML tables allow recipients to review critical KPIs and execution statuses directly in their email preview pane.",
      "PCEA-30-01 Block 4.5 - Reporting",
      ["html-reporting", "executive-summary", "email-design"])

add_c(98, "4.5", "SMTPServerDisconnected", "Intermediate",
      "Which exception is raised when the SMTP server abruptly closes the network socket during transmission?",
      "import smtplib\ntry:\n    server.send_message(msg)\nexcept smtplib.SMTPServerDisconnected:\n    print('Server dropped the connection!')",
      ["smtplib.SMTPServerDisconnected", "smtplib.ConnectionLost", "ConnectionResetError only", "smtplib.Timeout"],
      0,
      "`smtplib.SMTPServerDisconnected` is raised when the remote mail server closes the socket unexpectedly.",
      "PCEA-30-01 Block 4.5 - Error Handling",
      ["smtp-disconnected", "socket-drop", "exceptions"])

add_c(99, "4.5", "MIME Type Detection", "Advanced",
      "Which standard library module can guess the MIME type and subtype of a file for email attachments?",
      "import mimetypes\nctype, encoding = mimetypes.guess_type('report.xlsx')\n# ctype -> 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'",
      ["mimetypes", "file_guesser", "email.types", "os.mimetype"],
      0,
      "`mimetypes.guess_type(filename)` looks up the filename's extension in the system MIME database, returning the correct MIME type and encoding.",
      "PCEA-30-01 Block 4.5 - MIME Types",
      ["mimetypes", "guess-type", "attachments"])

add_c(100, "4.5", "SMS / Chat Gateways", "Intermediate",
      "Besides traditional email, how can `smtplib` trigger SMS alerts to mobile phones?",
      "# Many telecom carriers provide email-to-SMS gateways:\n# msg['To'] = '5551234567@vtext.com'",
      ["By addressing the email to the carrier's email-to-SMS gateway address (e.g. number@carrier-gateway.com)", "By dialing the phone with a modem", "By connecting to port 80", "By sending a ping packet to the phone"],
      0,
      "Most mobile carriers provide email-to-SMS gateways (e.g. `number@vtext.com`), allowing automated email scripts to dispatch mobile text messages without dedicated SMS APIs.",
      "PCEA-30-01 Block 4.5 - Notification Dispatch",
      ["email-to-sms", "mobile-alerts", "telecom-gateways"])

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

write_ts_file("src/data/pceaSection4CardsPart1.ts", "pceaSection4CardsPart1", cards[:50])
write_ts_file("src/data/pceaSection4CardsPart2.ts", "pceaSection4CardsPart2", cards[50:])

with open("src/data/pceaSection4Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceaSection4CardsPart1 } from './pceaSection4CardsPart1';
import { pceaSection4CardsPart2 } from './pceaSection4CardsPart2';

export const pceaSection4Flashcards: Flashcard[] = [
  ...pceaSection4CardsPart1,
  ...pceaSection4CardsPart2,
];
""")
print("Wrote pceaSection4Flashcards.ts successfully!")
