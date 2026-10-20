import { Flashcard } from '../types';

export const pceaSection2CardsPart1: Flashcard[] = [
  {
    id: "pcea-2-001",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "pathlib Basics",
    difficulty: "Beginner",
    question: "Which operator is overloaded in `pathlib.Path` to provide intuitive, cross-platform path joining?",
    codeSnippet: "from pathlib import Path\nbase_dir = Path('/var/log')\n# Joining base_dir and 'app.log':\nlog_file = base_dir / 'app.log'",
    options: [
      "+",
      "/",
      "\\\\",
      "%"
    ],
    correctAnswer: 1,
    explanation: "The forward slash `/` operator is overloaded by Path objects to join paths cleanly across Windows and POSIX systems without manual string concatenation.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "path-joining", "slash-operator"]
  },
  {
    id: "pcea-2-002",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Path Components",
    difficulty: "Beginner",
    question: "Given `p = Path('/var/data/report.final.csv')`, what is the value of `p.stem`?",
    codeSnippet: "from pathlib import Path\np = Path('/var/data/report.final.csv')\nprint(p.stem)",
    options: [
      "'report'",
      "'report.final'",
      "'.csv'",
      "'report.final.csv'"
    ],
    correctAnswer: 1,
    explanation: "p.stem returns the final path component without its last suffix. For 'report.final.csv', stem is 'report.final' and suffix is '.csv'.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "stem", "file-names"]
  },
  {
    id: "pcea-2-003",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Path Components",
    difficulty: "Beginner",
    question: "What attribute on a `Path` object returns the file extension including the leading dot?",
    codeSnippet: "from pathlib import Path\np = Path('archive.tar.gz')\nprint(p.suffix)",
    options: [
      "p.ext",
      "p.suffix",
      "p.extension",
      "p.tail"
    ],
    correctAnswer: 1,
    explanation: "`p.suffix` returns the last extension including the leading period ('.gz'). `p.suffixes` returns all extensions (['.tar', '.gz']).",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "suffix", "file-extension"]
  },
  {
    id: "pcea-2-004",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Path Existence",
    difficulty: "Beginner",
    question: "Which method checks if a file or directory actually exists on the filesystem?",
    codeSnippet: "from pathlib import Path\nconfig = Path('/etc/app.conf')\nif config.exists():\n    print('Found!')",
    options: [
      "config.is_present()",
      "config.exists()",
      "config.available()",
      "config.has_file()"
    ],
    correctAnswer: 1,
    explanation: "`Path.exists()` returns True if the path points to an existing file, directory, or symlink on the filesystem.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "exists", "filesystem-checks"]
  },
  {
    id: "pcea-2-005",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Path Types",
    difficulty: "Beginner",
    question: "How do you distinguish whether an existing path is a file or a directory in `pathlib`?",
    codeSnippet: "from pathlib import Path\np = Path('/opt/backup')\nis_dir = p.is_dir()\nis_file = p.is_file()",
    options: [
      "p.type == 'dir'",
      "p.is_dir() and p.is_file()",
      "p.check_dir()",
      "p.stat().type"
    ],
    correctAnswer: 1,
    explanation: "`is_dir()` and `is_file()` return booleans indicating whether the target path represents a directory or a regular file respectively.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "is-file", "is-dir"]
  },
  {
    id: "pcea-2-006",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Directory Creation",
    difficulty: "Intermediate",
    question: "How do you create nested parent directories automatically without raising an error if they exist?",
    codeSnippet: "from pathlib import Path\nout = Path('/tmp/daily/2026/10/logs')\nout.mkdir(parents=True, exist_ok=True)",
    options: [
      "out.mkdir()",
      "out.mkdir(parents=True, exist_ok=True)",
      "out.create_dirs()",
      "out.touch(dirs=True)"
    ],
    correctAnswer: 1,
    explanation: "`parents=True` creates any missing intermediate ancestor folders (like `mkdir -p`), and `exist_ok=True` prevents FileExistsError if the folder already exists.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "mkdir", "idempotency"]
  },
  {
    id: "pcea-2-007",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Globbing",
    difficulty: "Intermediate",
    question: "What is the difference between `Path.glob('*.log')` and `Path.rglob('*.log')`?",
    codeSnippet: "from pathlib import Path\np = Path('/var/log')\nshallow = list(p.glob('*.log'))\ndeep = list(p.rglob('*.log'))",
    options: [
      "glob is recursive while rglob only searches top-level",
      "glob only matches the immediate directory, while rglob searches recursively down the entire directory tree",
      "rglob only matches read-only files",
      "glob is case-insensitive while rglob is case-sensitive"
    ],
    correctAnswer: 1,
    explanation: "`glob('*.log')` matches files in the target directory only, whereas `rglob('*.log')` is shorthand for `glob('**/*.log')`, matching recursively across all subfolders.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "glob", "rglob"]
  },
  {
    id: "pcea-2-008",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Reading Text",
    difficulty: "Beginner",
    question: "How can an automation script read an entire text file into a string with a single method call in `pathlib`?",
    codeSnippet: "from pathlib import Path\ncontent = Path('config.json').read_text(encoding='utf-8')",
    options: [
      "Path('config.json').read()",
      "Path('config.json').read_text(encoding='utf-8')",
      "Path('config.json').load()",
      "Path('config.json').to_str()"
    ],
    correctAnswer: 1,
    explanation: "`Path.read_text()` opens the file, reads its contents as a decoded string, and closes it automatically, ideal for concise automation scripts.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "read-text", "file-reading"]
  },
  {
    id: "pcea-2-009",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Writing Text",
    difficulty: "Beginner",
    question: "How do you write a string directly to a file using `pathlib`?",
    codeSnippet: "from pathlib import Path\nPath('output.txt').write_text('Audit status: OK', encoding='utf-8')",
    options: [
      "Path('output.txt').save('...')",
      "Path('output.txt').write_text('Audit status: OK', encoding='utf-8')",
      "Path('output.txt').put('...')",
      "Path('output.txt').dump('...')"
    ],
    correctAnswer: 1,
    explanation: "`Path.write_text()` opens the file in write mode, encodes the text string, writes it, and closes the handle cleanly.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "write-text", "file-writing"]
  },
  {
    id: "pcea-2-010",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Deleting Files",
    difficulty: "Intermediate",
    question: "How do you safely delete a file using `pathlib` without raising `FileNotFoundError` if it is already deleted?",
    codeSnippet: "from pathlib import Path\nlog_file = Path('temp.log')\nlog_file.unlink(missing_ok=True)",
    options: [
      "log_file.delete(force=True)",
      "log_file.unlink(missing_ok=True)",
      "log_file.remove(ignore=True)",
      "log_file.destroy()"
    ],
    correctAnswer: 1,
    explanation: "`Path.unlink(missing_ok=True)` deletes the file; if the file does not exist, it quietly succeeds without raising an exception.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "unlink", "missing-ok"]
  },
  {
    id: "pcea-2-011",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Deleting Directories",
    difficulty: "Intermediate",
    question: "What exception is raised if `Path.rmdir()` is called on a directory that still contains files?",
    codeSnippet: "from pathlib import Path\nfolder = Path('/backups')\nfolder.rmdir()  # Folder is not empty!",
    options: [
      "IsADirectoryError",
      "OSError (Directory not empty)",
      "PermissionError",
      "FileNotFoundError"
    ],
    correctAnswer: 1,
    explanation: "`Path.rmdir()` only removes empty directories. If the directory contains files, the OS raises an OSError (`Directory not empty`). Use `shutil.rmtree()` for recursive removal.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "rmdir", "exceptions"]
  },
  {
    id: "pcea-2-012",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Path Resolution",
    difficulty: "Intermediate",
    question: "What does `Path('../reports/daily.csv').resolve()` do?",
    codeSnippet: "from pathlib import Path\np = Path('../reports/daily.csv')\nabs_path = p.resolve()",
    options: [
      "Deletes the relative symlink",
      "Returns the absolute, canonical path with all relative segments and symlinks resolved",
      "Checks if the file has read permission",
      "Renames the file to 'daily.csv'"
    ],
    correctAnswer: 1,
    explanation: "`resolve()` converts relative paths (with `..` and `.`) and symbolic links into an unambiguous absolute filesystem path.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "resolve", "absolute-path"]
  },
  {
    id: "pcea-2-013",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Atomic Replacement",
    difficulty: "Advanced",
    question: "Why is `Path.replace()` preferred over manual copy-and-delete when updating critical data files?",
    codeSnippet: "from pathlib import Path\nnew_conf = Path('config.tmp')\ntarget = Path('config.ini')\nnew_conf.replace(target)",
    options: [
      "It runs in an asynchronous thread",
      "It performs an atomic filesystem-level rename that immediately overwrites the target without leaving an empty or corrupt state",
      "It converts the file to binary format",
      "It encrypts the target file with SHA-256"
    ],
    correctAnswer: 1,
    explanation: "`Path.replace(target)` performs an atomic rename at the OS filesystem level, ensuring other processes never see a half-written or missing file.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "replace", "atomic-write"]
  },
  {
    id: "pcea-2-014",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "File Metadata",
    difficulty: "Intermediate",
    question: "How do you inspect a file's size in bytes and last modification timestamp using `pathlib`?",
    codeSnippet: "from pathlib import Path\ninfo = Path('data.csv').stat()\nsize = info.st_size\nmtime = info.st_mtime",
    options: [
      "Path('data.csv').meta()",
      "Path('data.csv').stat()",
      "Path('data.csv').properties()",
      "Path('data.csv').details()"
    ],
    correctAnswer: 1,
    explanation: "`Path.stat()` returns an `os.stat_result` object containing attributes like `st_size` (size in bytes) and `st_mtime` (last modification timestamp in epoch seconds).",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "stat", "metadata"]
  },
  {
    id: "pcea-2-015",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Filename Alterations",
    difficulty: "Intermediate",
    question: "How do you generate a new `Path` object with the extension changed from `.txt` to `.json`?",
    codeSnippet: "from pathlib import Path\np = Path('/var/log/data.txt')\njson_path = p.with_suffix('.json')",
    options: [
      "p.change_ext('.json')",
      "p.with_suffix('.json')",
      "p.set_suffix('.json')",
      "p.replace_ext('.json')"
    ],
    correctAnswer: 1,
    explanation: "`Path.with_suffix('.json')` returns a new Path object with the specified extension replaced, preserving directory and stem.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "with-suffix", "path-manipulation"]
  },
  {
    id: "pcea-2-016",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Parent Traversals",
    difficulty: "Beginner",
    question: "Given `p = Path('/usr/local/bin/python3')`, what does `p.parent` evaluate to?",
    codeSnippet: "from pathlib import Path\np = Path('/usr/local/bin/python3')\nprint(p.parent)",
    options: [
      "Path('/usr/local/bin')",
      "Path('/usr/local')",
      "Path('/usr')",
      "Path('/')"
    ],
    correctAnswer: 0,
    explanation: "`p.parent` returns the immediate logical parent directory (`/usr/local/bin`). `p.parents[1]` would return `/usr/local`.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "parent", "hierarchy"]
  },
  {
    id: "pcea-2-017",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "iterdir",
    difficulty: "Beginner",
    question: "How do you iterate through all immediate items inside a directory using `pathlib`?",
    codeSnippet: "from pathlib import Path\nfor item in Path('/var/data').iterdir():\n    print(item.name)",
    options: [
      "Path('/var/data').list()",
      "Path('/var/data').iterdir()",
      "Path('/var/data').walk()",
      "Path('/var/data').children()"
    ],
    correctAnswer: 1,
    explanation: "`Path.iterdir()` yields Path objects for all entries in the directory (excluding '.' and '..').",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "iterdir", "directory-traversal"]
  },
  {
    id: "pcea-2-018",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Home & CWD",
    difficulty: "Beginner",
    question: "How do you construct a path pointing to a file inside the current logged-in user's home directory?",
    codeSnippet: "from pathlib import Path\nconfig = Path.home() / '.app_config'",
    options: [
      "Path.root() / '.app_config'",
      "Path.home() / '.app_config'",
      "Path.user() / '.app_config'",
      "Path.profile() / '.app_config'"
    ],
    correctAnswer: 1,
    explanation: "`Path.home()` returns the current user's home directory path cross-platform (e.g. `/home/user` on Linux or `C:\\Users\\user` on Windows).",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "home", "cross-platform"]
  },
  {
    id: "pcea-2-019",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "Touch",
    difficulty: "Beginner",
    question: "What does `Path('flag.lock').touch()` do if the file does not already exist?",
    codeSnippet: "from pathlib import Path\nPath('flag.lock').touch()",
    options: [
      "Creates an empty file at that path",
      "Throws a FileNotFoundError",
      "Creates a directory named 'flag.lock'",
      "Deletes the path"
    ],
    correctAnswer: 0,
    explanation: "`touch()` creates a 0-byte file if it does not exist, or updates its modification and access timestamps to the current time if it does exist.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "touch", "file-creation"]
  },
  {
    id: "pcea-2-020",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.1",
    category: "relative_to",
    difficulty: "Intermediate",
    question: "Given `p = Path('/var/log/nginx/access.log')`, what does `p.relative_to('/var/log')` produce?",
    codeSnippet: "from pathlib import Path\np = Path('/var/log/nginx/access.log')\nrel = p.relative_to('/var/log')",
    options: [
      "Path('nginx/access.log')",
      "Path('/nginx/access.log')",
      "Path('access.log')",
      "ValueError"
    ],
    correctAnswer: 0,
    explanation: "`relative_to()` computes the relative subpath starting from the given ancestor path, returning `Path('nginx/access.log')`.",
    officialRef: "PCEA-30-01 Block 2.1 - pathlib",
    tags: ["pathlib", "relative-to", "subpaths"]
  },
  {
    id: "pcea-2-021",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "os.walk",
    difficulty: "Intermediate",
    question: "What 3-tuple is yielded on each iteration of `os.walk(start_dir)`?",
    codeSnippet: "import os\nfor root, dirs, files in os.walk('/var/data'):\n    pass",
    options: [
      "(directory_path, dir_names, file_names)",
      "(file_name, file_size, file_type)",
      "(parent_dir, current_dir, child_dir)",
      "(inode, owner, permissions)"
    ],
    correctAnswer: 0,
    explanation: "os.walk yields `(root, dirs, files)`: the current directory path as string, a list of subdirectory names, and a list of non-directory filenames.",
    officialRef: "PCEA-30-01 Block 2.2 - os.walk",
    tags: ["os-walk", "recursion", "filesystem"]
  },
  {
    id: "pcea-2-022",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "os.walk Pruning",
    difficulty: "Advanced",
    question: "How can an automation script tell `os.walk` to skip searching inside `.git` or `node_modules` folders?",
    codeSnippet: "import os\nfor root, dirs, files in os.walk('.'):\n    dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules')]",
    options: [
      "Call os.skip_dir('.git')",
      "Modify the dirs list in-place (e.g. dirs[:] = [...])",
      "Set os.walk(prune=['.git'])",
      "Raise a StopIteration exception"
    ],
    correctAnswer: 1,
    explanation: "Modifying the mutable `dirs` list in-place before the next iteration instructs `os.walk` to omit pruned directories from subsequent recursive traversals.",
    officialRef: "PCEA-30-01 Block 2.2 - os.walk",
    tags: ["os-walk", "pruning", "optimization"]
  },
  {
    id: "pcea-2-023",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "shutil.copy vs copy2",
    difficulty: "Intermediate",
    question: "What is the key advantage of `shutil.copy2(src, dst)` over `shutil.copy(src, dst)` in backup scripts?",
    codeSnippet: "import shutil\nshutil.copy2('source.txt', 'backup.txt')",
    options: [
      "copy2 preserves file metadata such as creation and last modification timestamps",
      "copy2 compresses the file with gzip",
      "copy2 verifies SHA-256 integrity checksums automatically",
      "copy2 runs 5 times faster on SSD drives"
    ],
    correctAnswer: 0,
    explanation: "`shutil.copy()` only copies file content and permissions. `shutil.copy2()` also attempts to preserve file metadata, including timestamps and flags.",
    officialRef: "PCEA-30-01 Block 2.2 - shutil",
    tags: ["shutil", "copy2", "metadata-preservation"]
  },
  {
    id: "pcea-2-024",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "shutil.copytree",
    difficulty: "Intermediate",
    question: "How do you recursively copy an entire directory tree using Python's standard library?",
    codeSnippet: "import shutil\nshutil.copytree('/var/www', '/backups/www_backup', dirs_exist_ok=True)",
    options: [
      "os.copy_folder('/var/www', '/backups/www_backup')",
      "shutil.copytree('/var/www', '/backups/www_backup', dirs_exist_ok=True)",
      "shutil.replicate('/var/www', '/backups/www_backup')",
      "pathlib.Path('/var/www').copy_all('/backups/www_backup')"
    ],
    correctAnswer: 1,
    explanation: "`shutil.copytree()` recursively copies an entire directory tree. In Python 3.8+, `dirs_exist_ok=True` allows copying into an existing destination directory.",
    officialRef: "PCEA-30-01 Block 2.2 - shutil",
    tags: ["shutil", "copytree", "directory-copying"]
  },
  {
    id: "pcea-2-025",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "shutil.rmtree",
    difficulty: "Beginner",
    question: "Which function completely and recursively deletes a directory along with all of its files and subdirectories?",
    codeSnippet: "import shutil\nshutil.rmtree('/tmp/build_artifacts')",
    options: [
      "os.remove_tree()",
      "shutil.rmtree()",
      "os.unlink_all()",
      "pathlib.Path().delete_all()"
    ],
    correctAnswer: 1,
    explanation: "`shutil.rmtree(path)` removes an entire directory tree recursively. It should be used with extreme caution in automation scripts.",
    officialRef: "PCEA-30-01 Block 2.2 - shutil",
    tags: ["shutil", "rmtree", "deletion"]
  },
  {
    id: "pcea-2-026",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "shutil.move",
    difficulty: "Beginner",
    question: "How do you move or rename a file or directory cross-filesystem using `shutil`?",
    codeSnippet: "import shutil\nshutil.move('/incoming/data.csv', '/processed/data.csv')",
    options: [
      "shutil.move(src, dst)",
      "shutil.transfer(src, dst)",
      "os.relocate(src, dst)",
      "shutil.shift(src, dst)"
    ],
    correctAnswer: 0,
    explanation: "`shutil.move()` moves a file or directory to another location, handling cross-device/cross-filesystem operations transparently by copying then deleting.",
    officialRef: "PCEA-30-01 Block 2.2 - shutil",
    tags: ["shutil", "move", "file-operations"]
  },
  {
    id: "pcea-2-027",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "Disk Space Audit",
    difficulty: "Intermediate",
    question: "How can an automation script check available free disk space before starting a large download or backup?",
    codeSnippet: "import shutil\ntotal, used, free = shutil.disk_usage('/var/backups')\nfree_gb = free / (1024 ** 3)\nprint(f'{free_gb:.2f} GB available')",
    options: [
      "os.get_free_space()",
      "shutil.disk_usage(path)",
      "sys.storage_info()",
      "pathlib.Path().free_space()"
    ],
    correctAnswer: 1,
    explanation: "`shutil.disk_usage(path)` returns a named tuple `(total, used, free)` in bytes for the volume containing the specified path.",
    officialRef: "PCEA-30-01 Block 2.2 - Disk Monitoring",
    tags: ["shutil", "disk-usage", "disk-monitoring"]
  },
  {
    id: "pcea-2-028",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "ZIP Archiving",
    difficulty: "Intermediate",
    question: "How can an automated backup script compress a directory `/var/logs` into a `logs_backup.zip` file with one call?",
    codeSnippet: "import shutil\nshutil.make_archive('logs_backup', 'zip', '/var/logs')",
    options: [
      "shutil.compress_dir('/var/logs', 'logs_backup.zip')",
      "shutil.make_archive('logs_backup', 'zip', '/var/logs')",
      "os.zip_folder('/var/logs', 'logs_backup.zip')",
      "pathlib.Path('/var/logs').zip('logs_backup.zip')"
    ],
    correctAnswer: 1,
    explanation: "`shutil.make_archive(base_name, format, root_dir)` creates an archive file (such as zip, tar, gztar) from a directory tree.",
    officialRef: "PCEA-30-01 Block 2.2 - Archiving",
    tags: ["shutil", "make-archive", "compression"]
  },
  {
    id: "pcea-2-029",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "Unpacking Archives",
    difficulty: "Intermediate",
    question: "How do you extract a downloaded `.zip` or `.tar.gz` archive to a target directory in Python?",
    codeSnippet: "import shutil\nshutil.unpack_archive('deployment.zip', '/opt/app')",
    options: [
      "shutil.unpack_archive('deployment.zip', '/opt/app')",
      "shutil.extract_all('deployment.zip', '/opt/app')",
      "os.unarchive('deployment.zip', '/opt/app')",
      "zipfile.extract_smart('deployment.zip', '/opt/app')"
    ],
    correctAnswer: 0,
    explanation: "`shutil.unpack_archive(filename, extract_dir)` inspects the archive format (zip, tar, gztar, bztar) and extracts it into the target folder.",
    officialRef: "PCEA-30-01 Block 2.2 - Archiving",
    tags: ["shutil", "unpack-archive", "extraction"]
  },
  {
    id: "pcea-2-030",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "Temporary Directory",
    difficulty: "Intermediate",
    question: "Why is `tempfile.TemporaryDirectory()` ideal for staging automation processing?",
    codeSnippet: "import tempfile, pathlib\n\nwith tempfile.TemporaryDirectory() as tmp_dir:\n    p = pathlib.Path(tmp_dir) / 'work.txt'\n    p.write_text('scratch data')\n# tmp_dir and all its files are automatically deleted on exit",
    options: [
      "It stores files in the computer's GPU memory",
      "It creates an isolated temporary directory that is automatically cleaned up when exiting the with block",
      "It bypasses all antivirus scanners",
      "It encrypts the files with a random password"
    ],
    correctAnswer: 1,
    explanation: "`tempfile.TemporaryDirectory()` creates a unique, secure scratch folder and guarantees complete recursive deletion upon leaving the context block.",
    officialRef: "PCEA-30-01 Block 2.2 - tempfile",
    tags: ["tempfile", "scratch-space", "context-manager"]
  },
  {
    id: "pcea-2-031",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "os.scandir Performance",
    difficulty: "Advanced",
    question: "Why is `os.scandir()` significantly faster than `os.listdir()` when scanning directories with thousands of files?",
    codeSnippet: "import os\nwith os.scandir('/var/huge_dir') as entries:\n    for entry in entries:\n        if entry.is_file():\n            size = entry.stat().st_size",
    options: [
      "It compiles directory paths to C assembly code",
      "It yields DirEntry objects with cached stat information, avoiding extra stat system calls per file",
      "It uses multi-threading across 16 CPU cores",
      "It only scans files modified today"
    ],
    correctAnswer: 1,
    explanation: "`os.scandir()` yields `os.DirEntry` objects that cache file type and stat data retrieved during directory iteration, eliminating expensive repeated `stat()` system calls.",
    officialRef: "PCEA-30-01 Block 2.2 - Performance",
    tags: ["os-scandir", "dir-entry", "performance"]
  },
  {
    id: "pcea-2-032",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "chmod Permissions",
    difficulty: "Intermediate",
    question: "How do you set a script file's permissions to read/write/execute for owner, and read/execute for others (`755` octal)?",
    codeSnippet: "import os\nos.chmod('deploy.sh', 0o755)",
    options: [
      "os.chmod('deploy.sh', 755)",
      "os.chmod('deploy.sh', 0o755)",
      "os.set_permissions('deploy.sh', 'rwxr-xr-x')",
      "shutil.chmod('deploy.sh', '755')"
    ],
    correctAnswer: 1,
    explanation: "File permission mode masks in Python are passed as octal integer literals prefixed with `0o` (e.g. `0o755`). A decimal 755 would produce wrong bitmasks.",
    officialRef: "PCEA-30-01 Block 2.2 - File Permissions",
    tags: ["os-chmod", "octal", "permissions"]
  },
  {
    id: "pcea-2-033",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "os.rename vs os.replace",
    difficulty: "Intermediate",
    question: "On Windows, what happens if you call `os.rename(src, dst)` when `dst` already exists?",
    codeSnippet: "import os\nos.rename('temp.txt', 'existing.txt')",
    options: [
      "It silently overwrites existing.txt",
      "It raises a FileExistsError",
      "It appends temp.txt to existing.txt",
      "It creates a shortcut named existing.lnk"
    ],
    correctAnswer: 1,
    explanation: "On Windows, `os.rename()` fails with `FileExistsError` if the destination exists. `os.replace()` must be used for cross-platform silent atomic overwriting.",
    officialRef: "PCEA-30-01 Block 2.2 - os operations",
    tags: ["os-rename", "os-replace", "windows-gotchas"]
  },
  {
    id: "pcea-2-034",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "tempfile.NamedTemporaryFile",
    difficulty: "Intermediate",
    question: "How do you ensure a temporary file created with `tempfile.NamedTemporaryFile` can be opened by external subprocesses on Windows?",
    codeSnippet: "import tempfile, subprocess\nwith tempfile.NamedTemporaryFile(delete=False) as tmp:\n    tmp.write(b'data')\n    tmp.close()\n# Now external tools can open tmp.name on Windows",
    options: [
      "Pass delete=False, close the handle before launching the subprocess, and manually remove it afterwards",
      "Set windows_share=True",
      "Run Windows in developer mode",
      "Pass temporary=False"
    ],
    correctAnswer: 0,
    explanation: "On Windows, open files cannot be opened a second time by another process. Setting `delete=False`, closing the file handle, and deleting it in a finally block is the standard pattern.",
    officialRef: "PCEA-30-01 Block 2.2 - tempfile",
    tags: ["tempfile", "named-temp-file", "windows"]
  },
  {
    id: "pcea-2-035",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "Checking Symlinks",
    difficulty: "Intermediate",
    question: "How can an automation script detect if a path is a symbolic link rather than a real file or directory?",
    codeSnippet: "from pathlib import Path\nimport os\nis_link = Path('link_to_logs').is_symlink()  # or os.path.islink('link_to_logs')",
    options: [
      "Path('link').is_symlink()",
      "Path('link').has_target()",
      "os.path.is_shortcut('link')",
      "Path('link').stat().is_pointer"
    ],
    correctAnswer: 0,
    explanation: "`Path.is_symlink()` and `os.path.islink()` return True if the path points to a symbolic link, preventing recursive traversal loops.",
    officialRef: "PCEA-30-01 Block 2.2 - Symlinks",
    tags: ["symlinks", "pathlib", "os-path"]
  },
  {
    id: "pcea-2-036",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "File Matching Patterns",
    difficulty: "Beginner",
    question: "Which standard library module provides Unix-style pathname pattern expansion outside of pathlib?",
    codeSnippet: "import glob\nfiles = glob.glob('/var/log/**/*.log', recursive=True)",
    options: [
      "fnmatch",
      "glob",
      "regex",
      "pathsearch"
    ],
    correctAnswer: 1,
    explanation: "The `glob` module provides wildcard pattern matching (`*`, `?`, `[]`, `**`) returning matching path strings directly.",
    officialRef: "PCEA-30-01 Block 2.2 - globbing",
    tags: ["glob", "wildcards", "standard-library"]
  },
  {
    id: "pcea-2-037",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "fnmatch",
    difficulty: "Intermediate",
    question: "How can you check if a simple filename string matches a pattern like `test_*.py`?",
    codeSnippet: "import fnmatch\nif fnmatch.fnmatch('test_api.py', 'test_*.py'):\n    print('Test file matched!')",
    options: [
      "fnmatch.fnmatch(name, pattern)",
      "re.glob(name, pattern)",
      "string.match(name, pattern)",
      "os.match(name, pattern)"
    ],
    correctAnswer: 0,
    explanation: "`fnmatch.fnmatch(filename, pattern)` tests whether a filename string matches a shell wildcard pattern with case normalization for the OS.",
    officialRef: "PCEA-30-01 Block 2.2 - fnmatch",
    tags: ["fnmatch", "pattern-matching", "utilities"]
  },
  {
    id: "pcea-2-038",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "Safe Path Concatenation",
    difficulty: "Beginner",
    question: "Before `pathlib`, which `os` function was standard for joining directory paths safely?",
    codeSnippet: "import os\npath = os.path.join('/var', 'data', 'records.csv')",
    options: [
      "os.path.combine()",
      "os.path.join()",
      "os.path.append()",
      "os.path.concat()"
    ],
    correctAnswer: 1,
    explanation: "`os.path.join()` joins multiple path components inserting the correct OS separator (`/` or `\\\\`), still prevalent in legacy automation scripts.",
    officialRef: "PCEA-30-01 Block 2.2 - os.path",
    tags: ["os-path-join", "legacy-python", "path-handling"]
  },
  {
    id: "pcea-2-039",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "shutil.copymode",
    difficulty: "Advanced",
    question: "What does `shutil.copymode(src, dst)` do in an automated build pipeline?",
    codeSnippet: "import shutil\nshutil.copymode('template.sh', 'generated.sh')",
    options: [
      "Copies only the permission bits (chmod mode) from src to dst without touching content",
      "Copies the file content and deletes the original",
      "Copies the owner user ID",
      "Converts the script to an executable binary"
    ],
    correctAnswer: 0,
    explanation: "`shutil.copymode()` copies the permission bits (e.g. executable flags) from source to destination leaving file contents and timestamps unchanged.",
    officialRef: "PCEA-30-01 Block 2.2 - shutil",
    tags: ["shutil", "copymode", "permissions"]
  },
  {
    id: "pcea-2-040",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.2",
    category: "Finding Directory Roots",
    difficulty: "Intermediate",
    question: "How can an automation script locate its own repository root relative to its script location?",
    codeSnippet: "from pathlib import Path\nREPO_ROOT = Path(__file__).resolve().parent.parent",
    options: [
      "Path.cwd()",
      "Path(__file__).resolve().parent.parent",
      "os.environ['ROOT']",
      "sys.base_prefix"
    ],
    correctAnswer: 1,
    explanation: "Using `Path(__file__).resolve().parent...` anchors path calculations reliably to the script's actual disk location regardless of what working directory it was invoked from.",
    officialRef: "PCEA-30-01 Block 2.2 - Best Practices",
    tags: ["file-anchor", "pathlib", "repository-root"]
  },
  {
    id: "pcea-2-041",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "newline Parameter",
    difficulty: "Intermediate",
    question: "Why must files opened for CSV writing in Python 3 include `newline=''`?",
    codeSnippet: "import csv\nwith open('output.csv', 'w', newline='', encoding='utf-8') as f:\n    writer = csv.writer(f)\n    writer.writerow(['id', 'status'])",
    options: [
      "To prevent csv.writer from adding extra blank lines between rows on Windows",
      "To format headers in uppercase",
      "To convert data to ASCII",
      "To enable multi-threaded writing"
    ],
    correctAnswer: 0,
    explanation: "On Windows, Python translates `\\n` to `\\r\\n`. Because the csv module writes its own `\\r\\n`, omission of `newline=''` results in double carriage returns and blank lines.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv", "newline-parameter", "windows-gotchas"]
  },
  {
    id: "pcea-2-042",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "csv.reader",
    difficulty: "Beginner",
    question: "What data structure is yielded for each line when iterating over a `csv.reader` object?",
    codeSnippet: "import csv\nwith open('data.csv', 'r') as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(type(row))",
    options: [
      "dict",
      "list of strings",
      "tuple of integers",
      "string"
    ],
    correctAnswer: 1,
    explanation: "`csv.reader` parses each row into a standard Python `list` of strings, split according to the delimiter and quotation rules.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-reader", "lists", "parsing"]
  },
  {
    id: "pcea-2-043",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Skipping Headers",
    difficulty: "Beginner",
    question: "How do you advance past the column header row in a `csv.reader` to process only data rows?",
    codeSnippet: "import csv\nwith open('users.csv', 'r') as f:\n    reader = csv.reader(f)\n    header = next(reader)  # Skip header\n    for row in reader:\n        process_user(row)",
    options: [
      "reader.skip(1)",
      "header = next(reader)",
      "reader.header()",
      "reader.seek(1)"
    ],
    correctAnswer: 1,
    explanation: "Because `csv.reader` is a standard Python iterator, calling `next(reader)` consumes the first row (the header) and advances the stream to the data rows.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-reader", "next", "header-handling"]
  },
  {
    id: "pcea-2-044",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "csv.DictReader",
    difficulty: "Beginner",
    question: "What is the primary benefit of using `csv.DictReader` over `csv.reader` in automation scripts?",
    codeSnippet: "import csv\nwith open('servers.csv', 'r') as f:\n    for row in csv.DictReader(f):\n        print(row['hostname'], row['ip_address'])",
    options: [
      "It automatically converts numeric strings into floats",
      "It maps row values into a dictionary keyed by header column names, making scripts resilient to column reordering",
      "It reads CSV files 10x faster",
      "It automatically removes duplicate rows"
    ],
    correctAnswer: 1,
    explanation: "DictReader maps column values to keys matching the header row, so script logic accesses columns by name (`row['hostname']`) rather than fragile numeric indices (`row[2]`).",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-dict-reader", "dictionary", "resilience"]
  },
  {
    id: "pcea-2-045",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "csv.writer",
    difficulty: "Beginner",
    question: "Which method writes a single row of data to an open CSV file using `csv.writer`?",
    codeSnippet: "import csv\nwith open('log.csv', 'w', newline='') as f:\n    w = csv.writer(f)\n    w.writerow(['2026-10-01', 'Backup Completed'])",
    options: [
      "w.write_line()",
      "w.writerow()",
      "w.append()",
      "w.insert()"
    ],
    correctAnswer: 1,
    explanation: "`writer.writerow(iterable)` takes an iterable of fields and formats it as a single delimited CSV row in the output file.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-writer", "writerow", "csv-generation"]
  },
  {
    id: "pcea-2-046",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "writerows",
    difficulty: "Beginner",
    question: "How do you write a list of multiple rows in one operation using `csv.writer`?",
    codeSnippet: "import csv\nrows = [['a', 1], ['b', 2], ['c', 3]]\nwith open('out.csv', 'w', newline='') as f:\n    csv.writer(f).writerows(rows)",
    options: [
      "csv.writer(f).write_batch(rows)",
      "csv.writer(f).writerows(rows)",
      "csv.writer(f).dump_all(rows)",
      "csv.writer(f).export(rows)"
    ],
    correctAnswer: 1,
    explanation: "`writer.writerows(list_of_iterables)` iterates through a collection of rows and writes each as a line in the CSV file.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-writer", "writerows", "batch-writing"]
  },
  {
    id: "pcea-2-047",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "csv.DictWriter",
    difficulty: "Intermediate",
    question: "What method must be called first to write the column titles when using `csv.DictWriter`?",
    codeSnippet: "import csv\nwith open('out.csv', 'w', newline='') as f:\n    w = csv.DictWriter(f, fieldnames=['user', 'score'])\n    w.writeheader()\n    w.writerow({'user': 'alice', 'score': 95})",
    options: [
      "w.write_columns()",
      "w.writeheader()",
      "w.header()",
      "w.init_headers()"
    ],
    correctAnswer: 1,
    explanation: "`w.writeheader()` writes the fields specified in `fieldnames` as the top row of the CSV file.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-dict-writer", "writeheader", "headers"]
  },
  {
    id: "pcea-2-048",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Custom Delimiter",
    difficulty: "Intermediate",
    question: "How do you parse a semicolon-separated file (`.csv`) or tab-separated file (`.tsv`) with the `csv` module?",
    codeSnippet: "import csv\nwith open('data.tsv', 'r') as f:\n    reader = csv.reader(f, delimiter='\\t')",
    options: [
      "separator='\\t'",
      "delimiter='\\t'",
      "split='\\t'",
      "sep='\\t'"
    ],
    correctAnswer: 1,
    explanation: "The `delimiter` parameter specifies the one-character string used to separate fields, defaulting to `,`.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv", "delimiter", "tsv"]
  },
  {
    id: "pcea-2-049",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "Quoting Options",
    difficulty: "Intermediate",
    question: "How can an automation script force quotes around every single field when generating a CSV export?",
    codeSnippet: "import csv\nw = csv.writer(f, quoting=csv.QUOTE_ALL)",
    options: [
      "quoting=csv.QUOTE_MINIMAL",
      "quoting=csv.QUOTE_ALL",
      "quote=True",
      "enforce_quotes=True"
    ],
    correctAnswer: 1,
    explanation: "`csv.QUOTE_ALL` instructs the writer to quote all fields regardless of data type or special characters.",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv", "quoting", "quote-all"]
  },
  {
    id: "pcea-2-050",
    track: 'pcea',
    section: "Section 2",
    chapter: "2.3",
    category: "csv.Sniffer",
    difficulty: "Advanced",
    question: "What does `csv.Sniffer().sniff(sample)` do in an automated ingestion pipeline?",
    codeSnippet: "import csv\nwith open('unknown_data.txt', 'r') as f:\n    sample = f.read(2048)\n    dialect = csv.Sniffer().sniff(sample)\n    f.seek(0)\n    reader = csv.reader(f, dialect)",
    options: [
      "Scans the file for computer viruses",
      "Automatically analyzes a sample of the text to deduce the delimiter, quote character, and dialect",
      "Compresses the CSV file using bzip2",
      "Converts the CSV to JSON automatically"
    ],
    correctAnswer: 1,
    explanation: "`csv.Sniffer` analyzes a sample of CSV text to automatically deduce its formatting dialect (such as comma vs semicolon vs tab delimiter).",
    officialRef: "PCEA-30-01 Block 2.3 - csv module",
    tags: ["csv-sniffer", "dialect-detection", "robust-parsing"]
  }
];
