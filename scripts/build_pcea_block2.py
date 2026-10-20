#!/usr/bin/env python3
"""
Generator for PCEA Block 2: File System & Data Automation (100 Cards)
Covers Chapters 2.1 - 2.5 for PCEA-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcea-2-{id_num:03d}",
        "section": "Section 2",
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
# CHAPTER 2.1: Modern Path Operations with pathlib (Cards 1-20)
# ==========================================
add_c(1, "2.1", "pathlib Basics", "Beginner",
      "Which operator is overloaded in `pathlib.Path` to provide intuitive, cross-platform path joining?",
      "from pathlib import Path\nbase_dir = Path('/var/log')\n# Joining base_dir and 'app.log':\nlog_file = base_dir / 'app.log'",
      ["+", "/", "\\\\", "%"],
      1,
      "The forward slash `/` operator is overloaded by Path objects to join paths cleanly across Windows and POSIX systems without manual string concatenation.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "path-joining", "slash-operator"])

add_c(2, "2.1", "Path Components", "Beginner",
      "Given `p = Path('/var/data/report.final.csv')`, what is the value of `p.stem`?",
      "from pathlib import Path\np = Path('/var/data/report.final.csv')\nprint(p.stem)",
      ["'report'", "'report.final'", "'.csv'", "'report.final.csv'"],
      1,
      "p.stem returns the final path component without its last suffix. For 'report.final.csv', stem is 'report.final' and suffix is '.csv'.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "stem", "file-names"])

add_c(3, "2.1", "Path Components", "Beginner",
      "What attribute on a `Path` object returns the file extension including the leading dot?",
      "from pathlib import Path\np = Path('archive.tar.gz')\nprint(p.suffix)",
      ["p.ext", "p.suffix", "p.extension", "p.tail"],
      1,
      "`p.suffix` returns the last extension including the leading period ('.gz'). `p.suffixes` returns all extensions (['.tar', '.gz']).",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "suffix", "file-extension"])

add_c(4, "2.1", "Path Existence", "Beginner",
      "Which method checks if a file or directory actually exists on the filesystem?",
      "from pathlib import Path\nconfig = Path('/etc/app.conf')\nif config.exists():\n    print('Found!')",
      ["config.is_present()", "config.exists()", "config.available()", "config.has_file()"],
      1,
      "`Path.exists()` returns True if the path points to an existing file, directory, or symlink on the filesystem.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "exists", "filesystem-checks"])

add_c(5, "2.1", "Path Types", "Beginner",
      "How do you distinguish whether an existing path is a file or a directory in `pathlib`?",
      "from pathlib import Path\np = Path('/opt/backup')\nis_dir = p.is_dir()\nis_file = p.is_file()",
      ["p.type == 'dir'", "p.is_dir() and p.is_file()", "p.check_dir()", "p.stat().type"],
      1,
      "`is_dir()` and `is_file()` return booleans indicating whether the target path represents a directory or a regular file respectively.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "is-file", "is-dir"])

add_c(6, "2.1", "Directory Creation", "Intermediate",
      "How do you create nested parent directories automatically without raising an error if they exist?",
      "from pathlib import Path\nout = Path('/tmp/daily/2026/10/logs')\nout.mkdir(parents=True, exist_ok=True)",
      ["out.mkdir()", "out.mkdir(parents=True, exist_ok=True)", "out.create_dirs()", "out.touch(dirs=True)"],
      1,
      "`parents=True` creates any missing intermediate ancestor folders (like `mkdir -p`), and `exist_ok=True` prevents FileExistsError if the folder already exists.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "mkdir", "idempotency"])

add_c(7, "2.1", "Globbing", "Intermediate",
      "What is the difference between `Path.glob('*.log')` and `Path.rglob('*.log')`?",
      "from pathlib import Path\np = Path('/var/log')\nshallow = list(p.glob('*.log'))\ndeep = list(p.rglob('*.log'))",
      ["glob is recursive while rglob only searches top-level", "glob only matches the immediate directory, while rglob searches recursively down the entire directory tree", "rglob only matches read-only files", "glob is case-insensitive while rglob is case-sensitive"],
      1,
      "`glob('*.log')` matches files in the target directory only, whereas `rglob('*.log')` is shorthand for `glob('**/*.log')`, matching recursively across all subfolders.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "glob", "rglob"])

add_c(8, "2.1", "Reading Text", "Beginner",
      "How can an automation script read an entire text file into a string with a single method call in `pathlib`?",
      "from pathlib import Path\ncontent = Path('config.json').read_text(encoding='utf-8')",
      ["Path('config.json').read()", "Path('config.json').read_text(encoding='utf-8')", "Path('config.json').load()", "Path('config.json').to_str()"],
      1,
      "`Path.read_text()` opens the file, reads its contents as a decoded string, and closes it automatically, ideal for concise automation scripts.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "read-text", "file-reading"])

add_c(9, "2.1", "Writing Text", "Beginner",
      "How do you write a string directly to a file using `pathlib`?",
      "from pathlib import Path\nPath('output.txt').write_text('Audit status: OK', encoding='utf-8')",
      ["Path('output.txt').save('...')", "Path('output.txt').write_text('Audit status: OK', encoding='utf-8')", "Path('output.txt').put('...')", "Path('output.txt').dump('...')"],
      1,
      "`Path.write_text()` opens the file in write mode, encodes the text string, writes it, and closes the handle cleanly.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "write-text", "file-writing"])

add_c(10, "2.1", "Deleting Files", "Intermediate",
      "How do you safely delete a file using `pathlib` without raising `FileNotFoundError` if it is already deleted?",
      "from pathlib import Path\nlog_file = Path('temp.log')\nlog_file.unlink(missing_ok=True)",
      ["log_file.delete(force=True)", "log_file.unlink(missing_ok=True)", "log_file.remove(ignore=True)", "log_file.destroy()"],
      1,
      "`Path.unlink(missing_ok=True)` deletes the file; if the file does not exist, it quietly succeeds without raising an exception.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "unlink", "missing-ok"])

add_c(11, "2.1", "Deleting Directories", "Intermediate",
      "What exception is raised if `Path.rmdir()` is called on a directory that still contains files?",
      "from pathlib import Path\nfolder = Path('/backups')\nfolder.rmdir()  # Folder is not empty!",
      ["IsADirectoryError", "OSError (Directory not empty)", "PermissionError", "FileNotFoundError"],
      1,
      "`Path.rmdir()` only removes empty directories. If the directory contains files, the OS raises an OSError (`Directory not empty`). Use `shutil.rmtree()` for recursive removal.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "rmdir", "exceptions"])

add_c(12, "2.1", "Path Resolution", "Intermediate",
      "What does `Path('../reports/daily.csv').resolve()` do?",
      "from pathlib import Path\np = Path('../reports/daily.csv')\nabs_path = p.resolve()",
      ["Deletes the relative symlink", "Returns the absolute, canonical path with all relative segments and symlinks resolved", "Checks if the file has read permission", "Renames the file to 'daily.csv'"],
      1,
      "`resolve()` converts relative paths (with `..` and `.`) and symbolic links into an unambiguous absolute filesystem path.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "resolve", "absolute-path"])

add_c(13, "2.1", "Atomic Replacement", "Advanced",
      "Why is `Path.replace()` preferred over manual copy-and-delete when updating critical data files?",
      "from pathlib import Path\nnew_conf = Path('config.tmp')\ntarget = Path('config.ini')\nnew_conf.replace(target)",
      ["It runs in an asynchronous thread", "It performs an atomic filesystem-level rename that immediately overwrites the target without leaving an empty or corrupt state", "It converts the file to binary format", "It encrypts the target file with SHA-256"],
      1,
      "`Path.replace(target)` performs an atomic rename at the OS filesystem level, ensuring other processes never see a half-written or missing file.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "replace", "atomic-write"])

add_c(14, "2.1", "File Metadata", "Intermediate",
      "How do you inspect a file's size in bytes and last modification timestamp using `pathlib`?",
      "from pathlib import Path\ninfo = Path('data.csv').stat()\nsize = info.st_size\nmtime = info.st_mtime",
      ["Path('data.csv').meta()", "Path('data.csv').stat()", "Path('data.csv').properties()", "Path('data.csv').details()"],
      1,
      "`Path.stat()` returns an `os.stat_result` object containing attributes like `st_size` (size in bytes) and `st_mtime` (last modification timestamp in epoch seconds).",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "stat", "metadata"])

add_c(15, "2.1", "Filename Alterations", "Intermediate",
      "How do you generate a new `Path` object with the extension changed from `.txt` to `.json`?",
      "from pathlib import Path\np = Path('/var/log/data.txt')\njson_path = p.with_suffix('.json')",
      ["p.change_ext('.json')", "p.with_suffix('.json')", "p.set_suffix('.json')", "p.replace_ext('.json')"],
      1,
      "`Path.with_suffix('.json')` returns a new Path object with the specified extension replaced, preserving directory and stem.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "with-suffix", "path-manipulation"])

add_c(16, "2.1", "Parent Traversals", "Beginner",
      "Given `p = Path('/usr/local/bin/python3')`, what does `p.parent` evaluate to?",
      "from pathlib import Path\np = Path('/usr/local/bin/python3')\nprint(p.parent)",
      ["Path('/usr/local/bin')", "Path('/usr/local')", "Path('/usr')", "Path('/')"],
      0,
      "`p.parent` returns the immediate logical parent directory (`/usr/local/bin`). `p.parents[1]` would return `/usr/local`.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "parent", "hierarchy"])

add_c(17, "2.1", "iterdir", "Beginner",
      "How do you iterate through all immediate items inside a directory using `pathlib`?",
      "from pathlib import Path\nfor item in Path('/var/data').iterdir():\n    print(item.name)",
      ["Path('/var/data').list()", "Path('/var/data').iterdir()", "Path('/var/data').walk()", "Path('/var/data').children()"],
      1,
      "`Path.iterdir()` yields Path objects for all entries in the directory (excluding '.' and '..').",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "iterdir", "directory-traversal"])

add_c(18, "2.1", "Home & CWD", "Beginner",
      "How do you construct a path pointing to a file inside the current logged-in user's home directory?",
      "from pathlib import Path\nconfig = Path.home() / '.app_config'",
      ["Path.root() / '.app_config'", "Path.home() / '.app_config'", "Path.user() / '.app_config'", "Path.profile() / '.app_config'"],
      1,
      "`Path.home()` returns the current user's home directory path cross-platform (e.g. `/home/user` on Linux or `C:\\Users\\user` on Windows).",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "home", "cross-platform"])

add_c(19, "2.1", "Touch", "Beginner",
      "What does `Path('flag.lock').touch()` do if the file does not already exist?",
      "from pathlib import Path\nPath('flag.lock').touch()",
      ["Creates an empty file at that path", "Throws a FileNotFoundError", "Creates a directory named 'flag.lock'", "Deletes the path"],
      0,
      "`touch()` creates a 0-byte file if it does not exist, or updates its modification and access timestamps to the current time if it does exist.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "touch", "file-creation"])

add_c(20, "2.1", "relative_to", "Intermediate",
      "Given `p = Path('/var/log/nginx/access.log')`, what does `p.relative_to('/var/log')` produce?",
      "from pathlib import Path\np = Path('/var/log/nginx/access.log')\nrel = p.relative_to('/var/log')",
      ["Path('nginx/access.log')", "Path('/nginx/access.log')", "Path('access.log')", "ValueError"],
      0,
      "`relative_to()` computes the relative subpath starting from the given ancestor path, returning `Path('nginx/access.log')`.",
      "PCEA-30-01 Block 2.1 - pathlib",
      ["pathlib", "relative-to", "subpaths"])

# ==========================================
# CHAPTER 2.2: File & Directory Manipulation with os & shutil (Cards 21-40)
# ==========================================
add_c(21, "2.2", "os.walk", "Intermediate",
      "What 3-tuple is yielded on each iteration of `os.walk(start_dir)`?",
      "import os\nfor root, dirs, files in os.walk('/var/data'):\n    pass",
      ["(directory_path, dir_names, file_names)", "(file_name, file_size, file_type)", "(parent_dir, current_dir, child_dir)", "(inode, owner, permissions)"],
      0,
      "os.walk yields `(root, dirs, files)`: the current directory path as string, a list of subdirectory names, and a list of non-directory filenames.",
      "PCEA-30-01 Block 2.2 - os.walk",
      ["os-walk", "recursion", "filesystem"])

add_c(22, "2.2", "os.walk Pruning", "Advanced",
      "How can an automation script tell `os.walk` to skip searching inside `.git` or `node_modules` folders?",
      "import os\nfor root, dirs, files in os.walk('.'):\n    dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules')]",
      ["Call os.skip_dir('.git')", "Modify the dirs list in-place (e.g. dirs[:] = [...])", "Set os.walk(prune=['.git'])", "Raise a StopIteration exception"],
      1,
      "Modifying the mutable `dirs` list in-place before the next iteration instructs `os.walk` to omit pruned directories from subsequent recursive traversals.",
      "PCEA-30-01 Block 2.2 - os.walk",
      ["os-walk", "pruning", "optimization"])

add_c(23, "2.2", "shutil.copy vs copy2", "Intermediate",
      "What is the key advantage of `shutil.copy2(src, dst)` over `shutil.copy(src, dst)` in backup scripts?",
      "import shutil\nshutil.copy2('source.txt', 'backup.txt')",
      ["copy2 preserves file metadata such as creation and last modification timestamps", "copy2 compresses the file with gzip", "copy2 verifies SHA-256 integrity checksums automatically", "copy2 runs 5 times faster on SSD drives"],
      0,
      "`shutil.copy()` only copies file content and permissions. `shutil.copy2()` also attempts to preserve file metadata, including timestamps and flags.",
      "PCEA-30-01 Block 2.2 - shutil",
      ["shutil", "copy2", "metadata-preservation"])

add_c(24, "2.2", "shutil.copytree", "Intermediate",
      "How do you recursively copy an entire directory tree using Python's standard library?",
      "import shutil\nshutil.copytree('/var/www', '/backups/www_backup', dirs_exist_ok=True)",
      ["os.copy_folder('/var/www', '/backups/www_backup')", "shutil.copytree('/var/www', '/backups/www_backup', dirs_exist_ok=True)", "shutil.replicate('/var/www', '/backups/www_backup')", "pathlib.Path('/var/www').copy_all('/backups/www_backup')"],
      1,
      "`shutil.copytree()` recursively copies an entire directory tree. In Python 3.8+, `dirs_exist_ok=True` allows copying into an existing destination directory.",
      "PCEA-30-01 Block 2.2 - shutil",
      ["shutil", "copytree", "directory-copying"])

add_c(25, "2.2", "shutil.rmtree", "Beginner",
      "Which function completely and recursively deletes a directory along with all of its files and subdirectories?",
      "import shutil\nshutil.rmtree('/tmp/build_artifacts')",
      ["os.remove_tree()", "shutil.rmtree()", "os.unlink_all()", "pathlib.Path().delete_all()"],
      1,
      "`shutil.rmtree(path)` removes an entire directory tree recursively. It should be used with extreme caution in automation scripts.",
      "PCEA-30-01 Block 2.2 - shutil",
      ["shutil", "rmtree", "deletion"])

add_c(26, "2.2", "shutil.move", "Beginner",
      "How do you move or rename a file or directory cross-filesystem using `shutil`?",
      "import shutil\nshutil.move('/incoming/data.csv', '/processed/data.csv')",
      ["shutil.move(src, dst)", "shutil.transfer(src, dst)", "os.relocate(src, dst)", "shutil.shift(src, dst)"],
      0,
      "`shutil.move()` moves a file or directory to another location, handling cross-device/cross-filesystem operations transparently by copying then deleting.",
      "PCEA-30-01 Block 2.2 - shutil",
      ["shutil", "move", "file-operations"])

add_c(27, "2.2", "Disk Space Audit", "Intermediate",
      "How can an automation script check available free disk space before starting a large download or backup?",
      "import shutil\ntotal, used, free = shutil.disk_usage('/var/backups')\nfree_gb = free / (1024 ** 3)\nprint(f'{free_gb:.2f} GB available')",
      ["os.get_free_space()", "shutil.disk_usage(path)", "sys.storage_info()", "pathlib.Path().free_space()"],
      1,
      "`shutil.disk_usage(path)` returns a named tuple `(total, used, free)` in bytes for the volume containing the specified path.",
      "PCEA-30-01 Block 2.2 - Disk Monitoring",
      ["shutil", "disk-usage", "disk-monitoring"])

add_c(28, "2.2", "ZIP Archiving", "Intermediate",
      "How can an automated backup script compress a directory `/var/logs` into a `logs_backup.zip` file with one call?",
      "import shutil\nshutil.make_archive('logs_backup', 'zip', '/var/logs')",
      ["shutil.compress_dir('/var/logs', 'logs_backup.zip')", "shutil.make_archive('logs_backup', 'zip', '/var/logs')", "os.zip_folder('/var/logs', 'logs_backup.zip')", "pathlib.Path('/var/logs').zip('logs_backup.zip')"],
      1,
      "`shutil.make_archive(base_name, format, root_dir)` creates an archive file (such as zip, tar, gztar) from a directory tree.",
      "PCEA-30-01 Block 2.2 - Archiving",
      ["shutil", "make-archive", "compression"])

add_c(29, "2.2", "Unpacking Archives", "Intermediate",
      "How do you extract a downloaded `.zip` or `.tar.gz` archive to a target directory in Python?",
      "import shutil\nshutil.unpack_archive('deployment.zip', '/opt/app')",
      ["shutil.unpack_archive('deployment.zip', '/opt/app')", "shutil.extract_all('deployment.zip', '/opt/app')", "os.unarchive('deployment.zip', '/opt/app')", "zipfile.extract_smart('deployment.zip', '/opt/app')"],
      0,
      "`shutil.unpack_archive(filename, extract_dir)` inspects the archive format (zip, tar, gztar, bztar) and extracts it into the target folder.",
      "PCEA-30-01 Block 2.2 - Archiving",
      ["shutil", "unpack-archive", "extraction"])

add_c(30, "2.2", "Temporary Directory", "Intermediate",
      "Why is `tempfile.TemporaryDirectory()` ideal for staging automation processing?",
      "import tempfile, pathlib\n\nwith tempfile.TemporaryDirectory() as tmp_dir:\n    p = pathlib.Path(tmp_dir) / 'work.txt'\n    p.write_text('scratch data')\n# tmp_dir and all its files are automatically deleted on exit",
      ["It stores files in the computer's GPU memory", "It creates an isolated temporary directory that is automatically cleaned up when exiting the with block", "It bypasses all antivirus scanners", "It encrypts the files with a random password"],
      1,
      "`tempfile.TemporaryDirectory()` creates a unique, secure scratch folder and guarantees complete recursive deletion upon leaving the context block.",
      "PCEA-30-01 Block 2.2 - tempfile",
      ["tempfile", "scratch-space", "context-manager"])

add_c(31, "2.2", "os.scandir Performance", "Advanced",
      "Why is `os.scandir()` significantly faster than `os.listdir()` when scanning directories with thousands of files?",
      "import os\nwith os.scandir('/var/huge_dir') as entries:\n    for entry in entries:\n        if entry.is_file():\n            size = entry.stat().st_size",
      ["It compiles directory paths to C assembly code", "It yields DirEntry objects with cached stat information, avoiding extra stat system calls per file", "It uses multi-threading across 16 CPU cores", "It only scans files modified today"],
      1,
      "`os.scandir()` yields `os.DirEntry` objects that cache file type and stat data retrieved during directory iteration, eliminating expensive repeated `stat()` system calls.",
      "PCEA-30-01 Block 2.2 - Performance",
      ["os-scandir", "dir-entry", "performance"])

add_c(32, "2.2", "chmod Permissions", "Intermediate",
      "How do you set a script file's permissions to read/write/execute for owner, and read/execute for others (`755` octal)?",
      "import os\nos.chmod('deploy.sh', 0o755)",
      ["os.chmod('deploy.sh', 755)", "os.chmod('deploy.sh', 0o755)", "os.set_permissions('deploy.sh', 'rwxr-xr-x')", "shutil.chmod('deploy.sh', '755')"],
      1,
      "File permission mode masks in Python are passed as octal integer literals prefixed with `0o` (e.g. `0o755`). A decimal 755 would produce wrong bitmasks.",
      "PCEA-30-01 Block 2.2 - File Permissions",
      ["os-chmod", "octal", "permissions"])

add_c(33, "2.2", "os.rename vs os.replace", "Intermediate",
      "On Windows, what happens if you call `os.rename(src, dst)` when `dst` already exists?",
      "import os\nos.rename('temp.txt', 'existing.txt')",
      ["It silently overwrites existing.txt", "It raises a FileExistsError", "It appends temp.txt to existing.txt", "It creates a shortcut named existing.lnk"],
      1,
      "On Windows, `os.rename()` fails with `FileExistsError` if the destination exists. `os.replace()` must be used for cross-platform silent atomic overwriting.",
      "PCEA-30-01 Block 2.2 - os operations",
      ["os-rename", "os-replace", "windows-gotchas"])

add_c(34, "2.2", "tempfile.NamedTemporaryFile", "Intermediate",
      "How do you ensure a temporary file created with `tempfile.NamedTemporaryFile` can be opened by external subprocesses on Windows?",
      "import tempfile, subprocess\nwith tempfile.NamedTemporaryFile(delete=False) as tmp:\n    tmp.write(b'data')\n    tmp.close()\n# Now external tools can open tmp.name on Windows",
      ["Pass delete=False, close the handle before launching the subprocess, and manually remove it afterwards", "Set windows_share=True", "Run Windows in developer mode", "Pass temporary=False"],
      0,
      "On Windows, open files cannot be opened a second time by another process. Setting `delete=False`, closing the file handle, and deleting it in a finally block is the standard pattern.",
      "PCEA-30-01 Block 2.2 - tempfile",
      ["tempfile", "named-temp-file", "windows"])

add_c(35, "2.2", "Checking Symlinks", "Intermediate",
      "How can an automation script detect if a path is a symbolic link rather than a real file or directory?",
      "from pathlib import Path\nimport os\nis_link = Path('link_to_logs').is_symlink()  # or os.path.islink('link_to_logs')",
      ["Path('link').is_symlink()", "Path('link').has_target()", "os.path.is_shortcut('link')", "Path('link').stat().is_pointer"],
      0,
      "`Path.is_symlink()` and `os.path.islink()` return True if the path points to a symbolic link, preventing recursive traversal loops.",
      "PCEA-30-01 Block 2.2 - Symlinks",
      ["symlinks", "pathlib", "os-path"])

add_c(36, "2.2", "File Matching Patterns", "Beginner",
      "Which standard library module provides Unix-style pathname pattern expansion outside of pathlib?",
      "import glob\nfiles = glob.glob('/var/log/**/*.log', recursive=True)",
      ["fnmatch", "glob", "regex", "pathsearch"],
      1,
      "The `glob` module provides wildcard pattern matching (`*`, `?`, `[]`, `**`) returning matching path strings directly.",
      "PCEA-30-01 Block 2.2 - globbing",
      ["glob", "wildcards", "standard-library"])

add_c(37, "2.2", "fnmatch", "Intermediate",
      "How can you check if a simple filename string matches a pattern like `test_*.py`?",
      "import fnmatch\nif fnmatch.fnmatch('test_api.py', 'test_*.py'):\n    print('Test file matched!')",
      ["fnmatch.fnmatch(name, pattern)", "re.glob(name, pattern)", "string.match(name, pattern)", "os.match(name, pattern)"],
      0,
      "`fnmatch.fnmatch(filename, pattern)` tests whether a filename string matches a shell wildcard pattern with case normalization for the OS.",
      "PCEA-30-01 Block 2.2 - fnmatch",
      ["fnmatch", "pattern-matching", "utilities"])

add_c(38, "2.2", "Safe Path Concatenation", "Beginner",
      "Before `pathlib`, which `os` function was standard for joining directory paths safely?",
      "import os\npath = os.path.join('/var', 'data', 'records.csv')",
      ["os.path.combine()", "os.path.join()", "os.path.append()", "os.path.concat()"],
      1,
      "`os.path.join()` joins multiple path components inserting the correct OS separator (`/` or `\\\\`), still prevalent in legacy automation scripts.",
      "PCEA-30-01 Block 2.2 - os.path",
      ["os-path-join", "legacy-python", "path-handling"])

add_c(39, "2.2", "shutil.copymode", "Advanced",
      "What does `shutil.copymode(src, dst)` do in an automated build pipeline?",
      "import shutil\nshutil.copymode('template.sh', 'generated.sh')",
      ["Copies only the permission bits (chmod mode) from src to dst without touching content", "Copies the file content and deletes the original", "Copies the owner user ID", "Converts the script to an executable binary"],
      0,
      "`shutil.copymode()` copies the permission bits (e.g. executable flags) from source to destination leaving file contents and timestamps unchanged.",
      "PCEA-30-01 Block 2.2 - shutil",
      ["shutil", "copymode", "permissions"])

add_c(40, "2.2", "Finding Directory Roots", "Intermediate",
      "How can an automation script locate its own repository root relative to its script location?",
      "from pathlib import Path\nREPO_ROOT = Path(__file__).resolve().parent.parent",
      ["Path.cwd()", "Path(__file__).resolve().parent.parent", "os.environ['ROOT']", "sys.base_prefix"],
      1,
      "Using `Path(__file__).resolve().parent...` anchors path calculations reliably to the script's actual disk location regardless of what working directory it was invoked from.",
      "PCEA-30-01 Block 2.2 - Best Practices",
      ["file-anchor", "pathlib", "repository-root"])

# ==========================================
# CHAPTER 2.3: Automated CSV Data Processing with csv module (Cards 41-60)
# ==========================================
add_c(41, "2.3", "newline Parameter", "Intermediate",
      "Why must files opened for CSV writing in Python 3 include `newline=''`?",
      "import csv\nwith open('output.csv', 'w', newline='', encoding='utf-8') as f:\n    writer = csv.writer(f)\n    writer.writerow(['id', 'status'])",
      ["To prevent csv.writer from adding extra blank lines between rows on Windows", "To format headers in uppercase", "To convert data to ASCII", "To enable multi-threaded writing"],
      0,
      "On Windows, Python translates `\\n` to `\\r\\n`. Because the csv module writes its own `\\r\\n`, omission of `newline=''` results in double carriage returns and blank lines.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv", "newline-parameter", "windows-gotchas"])

add_c(42, "2.3", "csv.reader", "Beginner",
      "What data structure is yielded for each line when iterating over a `csv.reader` object?",
      "import csv\nwith open('data.csv', 'r') as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(type(row))",
      ["dict", "list of strings", "tuple of integers", "string"],
      1,
      "`csv.reader` parses each row into a standard Python `list` of strings, split according to the delimiter and quotation rules.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-reader", "lists", "parsing"])

add_c(43, "2.3", "Skipping Headers", "Beginner",
      "How do you advance past the column header row in a `csv.reader` to process only data rows?",
      "import csv\nwith open('users.csv', 'r') as f:\n    reader = csv.reader(f)\n    header = next(reader)  # Skip header\n    for row in reader:\n        process_user(row)",
      ["reader.skip(1)", "header = next(reader)", "reader.header()", "reader.seek(1)"],
      1,
      "Because `csv.reader` is a standard Python iterator, calling `next(reader)` consumes the first row (the header) and advances the stream to the data rows.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-reader", "next", "header-handling"])

add_c(44, "2.3", "csv.DictReader", "Beginner",
      "What is the primary benefit of using `csv.DictReader` over `csv.reader` in automation scripts?",
      "import csv\nwith open('servers.csv', 'r') as f:\n    for row in csv.DictReader(f):\n        print(row['hostname'], row['ip_address'])",
      ["It automatically converts numeric strings into floats", "It maps row values into a dictionary keyed by header column names, making scripts resilient to column reordering", "It reads CSV files 10x faster", "It automatically removes duplicate rows"],
      1,
      "DictReader maps column values to keys matching the header row, so script logic accesses columns by name (`row['hostname']`) rather than fragile numeric indices (`row[2]`).",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-dict-reader", "dictionary", "resilience"])

add_c(45, "2.3", "csv.writer", "Beginner",
      "Which method writes a single row of data to an open CSV file using `csv.writer`?",
      "import csv\nwith open('log.csv', 'w', newline='') as f:\n    w = csv.writer(f)\n    w.writerow(['2026-10-01', 'Backup Completed'])",
      ["w.write_line()", "w.writerow()", "w.append()", "w.insert()"],
      1,
      "`writer.writerow(iterable)` takes an iterable of fields and formats it as a single delimited CSV row in the output file.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-writer", "writerow", "csv-generation"])

add_c(46, "2.3", "writerows", "Beginner",
      "How do you write a list of multiple rows in one operation using `csv.writer`?",
      "import csv\nrows = [['a', 1], ['b', 2], ['c', 3]]\nwith open('out.csv', 'w', newline='') as f:\n    csv.writer(f).writerows(rows)",
      ["csv.writer(f).write_batch(rows)", "csv.writer(f).writerows(rows)", "csv.writer(f).dump_all(rows)", "csv.writer(f).export(rows)"],
      1,
      "`writer.writerows(list_of_iterables)` iterates through a collection of rows and writes each as a line in the CSV file.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-writer", "writerows", "batch-writing"])

add_c(47, "2.3", "csv.DictWriter", "Intermediate",
      "What method must be called first to write the column titles when using `csv.DictWriter`?",
      "import csv\nwith open('out.csv', 'w', newline='') as f:\n    w = csv.DictWriter(f, fieldnames=['user', 'score'])\n    w.writeheader()\n    w.writerow({'user': 'alice', 'score': 95})",
      ["w.write_columns()", "w.writeheader()", "w.header()", "w.init_headers()"],
      1,
      "`w.writeheader()` writes the fields specified in `fieldnames` as the top row of the CSV file.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-dict-writer", "writeheader", "headers"])

add_c(48, "2.3", "Custom Delimiter", "Intermediate",
      "How do you parse a semicolon-separated file (`.csv`) or tab-separated file (`.tsv`) with the `csv` module?",
      "import csv\nwith open('data.tsv', 'r') as f:\n    reader = csv.reader(f, delimiter='\\t')",
      ["separator='\\t'", "delimiter='\\t'", "split='\\t'", "sep='\\t'"],
      1,
      "The `delimiter` parameter specifies the one-character string used to separate fields, defaulting to `,`.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv", "delimiter", "tsv"])

add_c(49, "2.3", "Quoting Options", "Intermediate",
      "How can an automation script force quotes around every single field when generating a CSV export?",
      "import csv\nw = csv.writer(f, quoting=csv.QUOTE_ALL)",
      ["quoting=csv.QUOTE_MINIMAL", "quoting=csv.QUOTE_ALL", "quote=True", "enforce_quotes=True"],
      1,
      "`csv.QUOTE_ALL` instructs the writer to quote all fields regardless of data type or special characters.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv", "quoting", "quote-all"])

add_c(50, "2.3", "csv.Sniffer", "Advanced",
      "What does `csv.Sniffer().sniff(sample)` do in an automated ingestion pipeline?",
      "import csv\nwith open('unknown_data.txt', 'r') as f:\n    sample = f.read(2048)\n    dialect = csv.Sniffer().sniff(sample)\n    f.seek(0)\n    reader = csv.reader(f, dialect)",
      ["Scans the file for computer viruses", "Automatically analyzes a sample of the text to deduce the delimiter, quote character, and dialect", "Compresses the CSV file using bzip2", "Converts the CSV to JSON automatically"],
      1,
      "`csv.Sniffer` analyzes a sample of CSV text to automatically deduce its formatting dialect (such as comma vs semicolon vs tab delimiter).",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-sniffer", "dialect-detection", "robust-parsing"])

add_c(51, "2.3", "csv.Error", "Intermediate",
      "Which exception class is raised when the `csv` module encounters a parsing or formatting error?",
      "import csv\ntry:\n    for row in csv.reader(f):\n        pass\nexcept csv.Error as e:\n    print(f'CSV format error: {e}')",
      ["csv.ParseException", "csv.Error", "csv.FormattingError", "csv.BadDataError"],
      1,
      "`csv.Error` is the standard exception raised by the csv module when errors occur during parsing or serialization.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-error", "exceptions", "error-handling"])

add_c(52, "2.3", "Missing Fields in DictWriter", "Intermediate",
      "If a dictionary passed to `DictWriter.writerow()` is missing one of the declared `fieldnames`, what value is written by default?",
      "import csv\nw = csv.DictWriter(f, fieldnames=['id', 'name', 'role'], restval='N/A')\nw.writerow({'id': 1, 'name': 'Alice'})",
      ["An empty string '' (or the string specified by restval)", "It raises a KeyError immediately", "The string 'None'", "0"],
      0,
      "By default, DictWriter inserts an empty string `''` for missing keys, or whatever default string is passed to `restval=`.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-dict-writer", "restval", "default-values"])

add_c(53, "2.3", "Extra Fields in DictWriter", "Intermediate",
      "What happens if a dict passed to `DictWriter.writerow()` contains a key NOT listed in `fieldnames`?",
      "import csv\nw = csv.DictWriter(f, fieldnames=['id', 'name'])\nw.writerow({'id': 1, 'name': 'Alice', 'extra_data': 999})",
      ["It raises a ValueError by default", "It silently ignores the extra field", "It adds a new column to the CSV file", "It converts the row to JSON"],
      0,
      "DictWriter raises `ValueError` if a dictionary contains keys not in fieldnames, unless `extrasaction='ignore'` is set.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-dict-writer", "extrasaction", "value-error"])

add_c(54, "2.3", "Encoding in CSV", "Beginner",
      "Why should CSV files opened for automation processing always specify `encoding='utf-8'`?",
      "with open('customers.csv', 'r', encoding='utf-8') as f:\n    reader = csv.reader(f)",
      ["To avoid UnicodeDecodeError on international characters (accents, emojis) across different OS locales", "To allow integers to be negative", "Because Python cannot read ASCII files", "To enable automatic compression"],
      0,
      "Omitting `encoding` relies on the system default (e.g. cp1252 on Windows), which will crash when encountering UTF-8 accented characters or emojis.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["encoding", "utf-8", "internationalization"])

add_c(55, "2.3", "Filtering CSV Rows", "Intermediate",
      "In an automation pipeline, how do you filter rows from `input.csv` and write only active records to `active.csv`?",
      "import csv\nwith open('in.csv', 'r', encoding='utf-8') as fin, \\\n     open('active.csv', 'w', newline='', encoding='utf-8') as fout:\n    reader = csv.DictReader(fin)\n    writer = csv.DictWriter(fout, fieldnames=reader.fieldnames)\n    writer.writeheader()\n    for row in reader:\n        if row['status'] == 'ACTIVE':\n            writer.writerow(row)",
      ["Use DictReader to inspect row['status'] and conditionally call writer.writerow(row)", "Delete inactive rows from the hard drive with os.remove()", "Use csv.filter_file('in.csv', condition='status==ACTIVE')", "Load the CSV into Python's sys.modules"],
      0,
      "Streaming with `DictReader` and conditionally writing matching rows to a new `DictWriter` is memory-efficient and handles multi-gigabyte files cleanly.",
      "PCEA-30-01 Block 2.3 - Data Pipelines",
      ["csv-pipeline", "filtering", "streaming"])

add_c(56, "2.3", "Aggregating CSV Data", "Intermediate",
      "How do you calculate the total sum of a numeric column 'amount' when reading a CSV?",
      "import csv\ntotal = 0.0\nwith open('orders.csv', 'r') as f:\n    for row in csv.DictReader(f):\n        total += float(row['amount'])",
      ["total += int(row['amount'])", "total += float(row['amount'])", "total += row['amount']", "total = sum(csv.DictReader(f)['amount'])"],
      1,
      "CSV values are read as strings; numeric fields must be explicitly cast to `float` or `int` before arithmetic addition.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv", "type-casting", "aggregation"])

add_c(57, "2.3", "Handling Embedded Commas", "Intermediate",
      "How does standard CSV handle fields that contain a comma (e.g. `'Smith, John'`)?",
      "# CSV formatting: 101,\"Smith, John\",Admin",
      ["By replacing the comma with a dash", "By enclosing the entire field in quotation marks", "By raising a SyntaxError", "By deleting the comma silently"],
      1,
      "Standard CSV encloses fields containing delimiters in quotes (`\"Smith, John\"`), which `csv.reader` correctly parses as a single value.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-quoting", "delimiters", "rfc4180"])

add_c(58, "2.3", "Handling Embedded Quotes", "Intermediate",
      "How does the standard CSV specification escape a double quote character inside a quoted field?",
      "# Data: 102,\"He said \"\"Hello\"\" to me\",User",
      ["By using a backslash \\\"", "By doubling the quote character (\"\")", "By replacing it with an apostrophe", "By URL-encoding it as %22"],
      1,
      "Per RFC 4180, double quotes inside quoted fields are escaped by doubling them (`\"\"`), automatically handled by Python's `csv` module.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-quoting", "escaping", "rfc4180"])

add_c(59, "2.3", "Sniffer has_header", "Intermediate",
      "How can an automation script check whether a CSV file contains a header row?",
      "import csv\nwith open('data.csv', 'r') as f:\n    sample = f.read(1024)\n    has_header = csv.Sniffer().has_header(sample)",
      ["csv.has_header('data.csv')", "csv.Sniffer().has_header(sample)", "csv.check_header(f)", "f.has_columns()"],
      1,
      "`csv.Sniffer().has_header(sample)` analyzes column types and string heuristics in the first two rows to determine if the first row is a header.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-sniffer", "has-header", "heuristics"])

add_c(60, "2.3", "CSV to List of Dicts", "Beginner",
      "What is a concise way to load an entire small CSV file into a Python list of dictionaries?",
      "import csv\nwith open('users.csv', 'r') as f:\n    data = list(csv.DictReader(f))",
      ["data = csv.load_dicts('users.csv')", "data = list(csv.DictReader(f))", "data = dict(csv.reader(f))", "data = csv.to_dict(f)"],
      1,
      "`list(csv.DictReader(f))` materializes all rows as dictionaries in a standard Python list, suitable for small to medium automation data sets.",
      "PCEA-30-01 Block 2.3 - csv module",
      ["csv-dict-reader", "list-conversion", "recipes"])

# ==========================================
# CHAPTER 2.4: Automated JSON Data Serialization & Configuration (Cards 61-80)
# ==========================================
add_c(61, "2.4", "json.dumps vs dump", "Beginner",
      "What is the difference between `json.dumps()` and `json.dump()`?",
      "import json\ndata = {'status': 'OK'}\n# dumps returns string, dump writes to a file object\ns = json.dumps(data)\nwith open('f.json', 'w') as f:\n    json.dump(data, f)",
      ["dumps is for dictionaries, dump is for lists", "dumps serializes a Python object to a JSON string; dump serializes directly to a writable file object", "dumps is deprecated in Python 3", "dump creates a binary file, dumps creates a text file"],
      1,
      "The 's' in `dumps` stands for 'string' (returns `str`), whereas `dump` writes directly to a file-like stream object.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "dumps", "dump"])

add_c(62, "2.4", "json.loads vs load", "Beginner",
      "What is the difference between `json.loads()` and `json.load()`?",
      "import json\n# loads parses a string; load parses from a file object\nobj = json.loads('{\"port\": 80}')\nwith open('config.json') as f:\n    cfg = json.load(f)",
      ["loads is for large files, load is for small files", "loads parses from a JSON string; load parses from a readable file object", "loads returns a list, load returns a dictionary", "load is only available in Python 2"],
      1,
      "`json.loads(str)` deserializes a JSON-formatted string, while `json.load(file)` deserializes from a readable text file stream.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "loads", "load"])

add_c(63, "2.4", "Pretty Printing JSON", "Beginner",
      "Which parameter in `json.dump()` or `json.dumps()` formats output with human-readable indentation?",
      "import json\nprint(json.dumps({'a': 1, 'b': 2}, indent=4))",
      ["pretty=True", "indent=4", "format='readable'", "spaces=4"],
      1,
      "`indent=N` formats the serialized JSON with newlines and N spaces of indentation per nesting level.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "indent", "pretty-print"])

add_c(64, "2.4", "Deterministic JSON Keys", "Intermediate",
      "Why is `sort_keys=True` valuable when writing automated configuration or cache files?",
      "import json\ns = json.dumps({'b': 2, 'a': 1}, sort_keys=True)  # '{\"a\": 1, \"b\": 2}'",
      ["It produces deterministic, sorted output so diffs and hash checksums remain identical across runs", "It makes JSON files load 50% faster", "It sorts array items in ascending order", "It encrypts dictionary keys"],
      0,
      "`sort_keys=True` guarantees identical key ordering across runs, enabling meaningful diffs and consistent cryptographic hashes for cache validation.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "sort-keys", "determinism"])

add_c(65, "2.4", "Type Mapping", "Beginner",
      "What does Python's `None` value serialize to in JSON?",
      "import json\nprint(json.dumps({'result': None}))",
      ["'{\"result\": None}'", "'{\"result\": null}'", "'{\"result\": undefined}'", "'{\"result\": \"\"}'"],
      1,
      "Python's `None` maps to JSON's native `null` literal, and JSON's `null` deserializes back to Python's `None`.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "type-mapping", "null"])

add_c(66, "2.4", "Boolean Mapping", "Beginner",
      "What do Python's `True` and `False` serialize to in JSON?",
      "import json\nprint(json.dumps({'active': True, 'archived': False}))",
      ["'{\"active\": True, \"archived\": False}'", "'{\"active\": true, \"archived\": false}'", "'{\"active\": 1, \"archived\": 0}'", "'{\"active\": \"yes\", \"archived\": \"no\"}'"],
      1,
      "Python uppercase booleans (`True`, `False`) map directly to lowercase JSON literals (`true`, `false`).",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "type-mapping", "booleans"])

add_c(67, "2.4", "JSONDecodeError", "Intermediate",
      "Which exception is raised when `json.loads()` attempts to parse malformed JSON syntax?",
      "import json\ntry:\n    json.loads('{bad_json: 123}')\nexcept json.JSONDecodeError as err:\n    print(f'JSON syntax error on line {err.lineno}')",
      ["json.SyntaxError", "json.JSONDecodeError", "ValueError only", "TypeError"],
      1,
      "`json.JSONDecodeError` (a subclass of `ValueError`) is raised on invalid JSON syntax, exposing attributes like `lineno`, `colno`, and `pos`.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "json-decode-error", "error-handling"])

add_c(68, "2.4", "Custom Type Serialization", "Advanced",
      "What exception is raised if you try to serialize a `datetime.datetime` object with `json.dumps()` without a custom serializer?",
      "import json, datetime\njson.dumps({'time': datetime.datetime.now()})",
      ["ValueError", "TypeError: Object of type datetime is not JSON serializable", "KeyError", "AttributeError"],
      1,
      "Standard JSON only supports numbers, strings, booleans, null, lists, and dicts. Unsupported types raise `TypeError: Object of type X is not JSON serializable`.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "type-error", "serialization"])

add_c(69, "2.4", "default Parameter", "Advanced",
      "How do you serialize `datetime` objects to ISO-8601 strings when calling `json.dumps()`?",
      "import json, datetime\nnow = datetime.datetime.now()\ns = json.dumps({'time': now}, default=str)",
      ["json.dumps(..., default=str)", "json.dumps(..., allow_datetime=True)", "json.dumps(..., parse_dates=True)", "json.dumps(..., cast=True)"],
      0,
      "The `default` parameter specifies a callable converter (like `str` or a custom function) for objects not natively serializable by JSON.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "default-converter", "datetime"])

add_c(70, "2.4", "ensure_ascii", "Intermediate",
      "What does setting `ensure_ascii=False` do in `json.dumps()`?",
      "import json\ndata = {'city': 'Montréal', 'currency': '€'}\nprint(json.dumps(data, ensure_ascii=False))",
      ["Escapes all characters as ASCII unicode escape sequences", "Outputs raw UTF-8 characters directly instead of \\u escape sequences", "Throws an error if non-ASCII characters are present", "Converts characters to binary numbers"],
      1,
      "By default, `ensure_ascii=True` escapes non-ASCII characters as `\\u00e9`. Setting `ensure_ascii=False` preserves raw UTF-8 characters.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "ensure-ascii", "utf-8"])

add_c(71, "2.4", "In-Place JSON Mutation", "Intermediate",
      "How does an automation script safely update a setting in an existing JSON configuration file?",
      "import json, pathlib\np = pathlib.Path('config.json')\ncfg = json.loads(p.read_text(encoding='utf-8'))\ncfg['retries'] = 5\np.write_text(json.dumps(cfg, indent=2), encoding='utf-8')",
      ["Read the file, parse to dict with json.loads, modify dict key, serialize back, and rewrite", "Call json.update_key('config.json', 'retries', 5)", "Append the new key to the end of the file", "Use regex to search and replace without parsing"],
      0,
      "The robust pattern reads the JSON into a Python dictionary, modifies keys programmatically, and writes the re-serialized JSON back to disk.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "mutation", "config-updates"])

add_c(72, "2.4", "Schema Validation", "Intermediate",
      "How can an automation script check that a required key exists in parsed JSON data?",
      "data = json.loads(raw_json)\nrequired_keys = {'host', 'port', 'user'}\nif not required_keys.issubset(data.keys()):\n    raise ValueError('Missing required configuration keys!')",
      ["Using set.issubset() or checking `if 'host' in data:`", "By calling json.validate_schema(data)", "By catching a SyntaxError", "JSON files automatically enforce required keys"],
      0,
      "Checking key membership (`'key' in data`) or verifying that required keys form a subset of dict keys validates configuration schema early.",
      "PCEA-30-01 Block 2.4 - Validation",
      ["json", "schema-validation", "defensive-coding"])

add_c(73, "2.4", "Tuple Serialization", "Intermediate",
      "What does a Python tuple `(1, 2, 3)` serialize to and deserialize back into when passed through JSON?",
      "import json\norig = (1, 2, 3)\nres = json.loads(json.dumps(orig))\nprint(type(res))",
      ["tuple", "list", "set", "array"],
      1,
      "JSON has no native tuple type; all Python tuples serialize into JSON arrays `[1, 2, 3]` and deserialize back as Python `list` objects.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "tuples", "type-mapping"])

add_c(74, "2.4", "Dictionary Key Strings", "Intermediate",
      "If a Python dictionary has integer keys `{1: 'a', 2: 'b'}`, what happens after `json.dumps()` and `json.loads()`?",
      "import json\nd = {1: 'a', 2: 'b'}\nres = json.loads(json.dumps(d))\nprint(res)",
      ["{1: 'a', 2: 'b'}", "{'1': 'a', '2': 'b'}", "Raises TypeError", "[('1', 'a'), ('2', 'b')]"],
      1,
      "JSON object keys must always be strings. When Python serializes `{1: 'a'}`, it converts the key `1` to string `'1'`, which returns as a string upon parsing.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "dict-keys", "string-keys"])

add_c(75, "2.4", "JSON Lines (jsonl)", "Advanced",
      "What is the JSON Lines (`.jsonl`) format frequently used in automated log and stream processing?",
      "# JSONL format:\n# {\"timestamp\": 1, \"event\": \"login\"}\n# {\"timestamp\": 2, \"event\": \"logout\"}",
      ["A file where each line is a separate, valid, self-contained JSON object", "A JSON file compressed with LZO compression", "A binary encoding of JSON", "A JSON array formatted on one single line"],
      0,
      "JSON Lines files store one valid JSON document per line, allowing massive files to be streamed and processed line-by-line without loading the entire dataset into memory.",
      "PCEA-30-01 Block 2.4 - JSONL",
      ["jsonl", "streaming", "log-processing"])

add_c(76, "2.4", "Reading JSONL", "Intermediate",
      "How do you process a `.jsonl` file line-by-line in a memory-efficient manner?",
      "import json\nwith open('events.jsonl', 'r') as f:\n    for line in f:\n        record = json.loads(line.strip())\n        process(record)",
      ["Load the entire file with json.load()", "Iterate over lines using a for loop and call json.loads() on each line individually", "Use json.read_lines(f)", "Convert to CSV first"],
      1,
      "Iterating over file lines consumes minimal memory because only one line is held in RAM at any moment, ideal for multi-gigabyte log archives.",
      "PCEA-30-01 Block 2.4 - JSONL",
      ["jsonl", "memory-efficiency", "streaming"])

add_c(77, "2.4", "compact JSON", "Intermediate",
      "How do you produce the most compact JSON string possible (no unnecessary whitespace) for network payloads?",
      "import json\npayload = json.dumps(data, separators=(',', ':'))",
      ["separators=(',', ':')", "compact=True", "whitespace=False", "strip=True"],
      0,
      "Setting `separators=(',', ':')` eliminates trailing whitespace after commas and colons, minimizing bandwidth consumption for HTTP API payloads.",
      "PCEA-30-01 Block 2.4 - Optimization",
      ["json", "compact", "bandwidth"])

add_c(78, "2.4", "Comments in JSON", "Beginner",
      "Are comments (like `//` or `/* */`) allowed in standard JSON specifications parsed by Python's `json` module?",
      "# Does json.loads('{\"key\": 1 // comment}') work?",
      ["Yes, standard JSON supports // comments", "No, standard JSON strictly forbids comments and will raise a json.JSONDecodeError", "Only /* */ multiline comments are allowed", "Only # comments are allowed"],
      1,
      "Standard JSON specifications (RFC 8259) do not support comments; attempting to parse comments with `json.loads()` raises a `JSONDecodeError`.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "comments", "rfc8259"])

add_c(79, "2.4", "Object Hook", "Advanced",
      "How can `json.loads()` transform JSON objects into custom Python objects during deserialization?",
      "import json\ndef as_server(d):\n    return Server(**d) if 'ip' in d else d\ndata = json.loads(json_str, object_hook=as_server)",
      ["object_hook=callable", "deserializer=callable", "parse_class=cls", "transform=callable"],
      0,
      "The `object_hook` parameter receives every decoded dictionary and can return custom domain class instances instead of plain dictionaries.",
      "PCEA-30-01 Block 2.4 - Advanced JSON",
      ["json", "object-hook", "custom-deserialization"])

add_c(80, "2.4", "Circular Reference", "Advanced",
      "What exception is raised if an automation script attempts to serialize a circular self-referential dictionary?",
      "import json\nd = {}\nd['self'] = d\njson.dumps(d)",
      ["ValueError: Circular reference detected", "MemoryError", "RecursionError", "AttributeError"],
      0,
      "Python's `json.dumps()` maintains a recursion tracker and raises `ValueError: Circular reference detected` when encountering self-referential cycles.",
      "PCEA-30-01 Block 2.4 - json module",
      ["json", "circular-reference", "value-error"])

# ==========================================
# CHAPTER 2.5: Pattern Matching & Text Extraction with re (Cards 81-100)
# ==========================================
add_c(81, "2.5", "re.search vs re.match", "Beginner",
      "What is the key difference between `re.search()` and `re.match()`?",
      "import re\ns = 'Status: SUCCESS code=200'\nm1 = re.match(r'SUCCESS', s)   # None\nm2 = re.search(r'SUCCESS', s)  # Match object",
      ["re.match only matches from the beginning of the string, while re.search matches anywhere in the string", "re.search is case-insensitive by default", "re.match searches backwards from the end", "re.search returns a list of strings"],
      0,
      "`re.match()` checks for a match only at the very start of the string, whereas `re.search()` scans through the entire string looking for the first location where pattern matches.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "search-vs-match", "pattern-matching"])

add_c(82, "2.5", "re.findall", "Beginner",
      "What does `re.findall(r'\\d+', text)` return when scanning a log line?",
      "import re\ntext = 'Errors on ports 80, 443, and 8080'\nres = re.findall(r'\\d+', text)\nprint(res)",
      ["['80', '443', '8080']", "[80, 443, 8080]", "A Match object", "3"],
      0,
      "`re.findall()` returns all non-overlapping matches of the pattern as a list of strings.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "findall", "extraction"])

add_c(83, "2.5", "Raw Strings", "Beginner",
      "Why should regular expression patterns in Python always be declared as raw strings `r'...'`?",
      "import re\npattern = r'\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b'",
      ["To prevent Python from interpreting backslashes as string escape sequences like \\n or \\t", "To make regex execute faster", "Because regular expressions without r'' cause SyntaxError", "To convert the pattern to uppercase"],
      0,
      "Raw string notation (`r'...'`) treats backslashes literally, avoiding double-escaping issues when defining regex metacharacters like `\\d`, `\\w`, or `\\b`.",
      "PCEA-30-01 Block 2.5 - re module",
      ["raw-strings", "backslashes", "syntax"])

add_c(84, "2.5", "Capturing Groups", "Intermediate",
      "How do you extract individual captured groups from a `re.Match` object?",
      "import re\nm = re.search(r'User: (\\w+) Status: (\\w+)', 'User: alice Status: active')\nuser = m.group(1)\nstatus = m.group(2)",
      ["m.group(1) and m.group(2)", "m.captured[0] and m.captured[1]", "m.sub(1) and m.sub(2)", "m[0] and m[1]"],
      0,
      "`m.group(0)` returns the entire matched text, while `m.group(1)`, `m.group(2)`, etc., return parenthesized capture groups in order.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "capture-groups", "group"])

add_c(85, "2.5", "Named Capture Groups", "Intermediate",
      "How do you define and access a named capturing group in Python regex?",
      "import re\npattern = r'(?P<ip>\\d+\\.\\d+\\.\\d+\\.\\d+):(?P<port>\\d+)'\nm = re.search(pattern, 'Connected to 192.168.1.1:8080')\nip = m.group('ip')\nport = m.group('port')",
      ["(?P<name>pattern) and m.group('name')", "(?name:pattern) and m['name']", "(:name pattern) and m.get('name')", "(?<name>pattern) and m.name"],
      0,
      "Python uses the `(?P<name>pattern)` syntax for named groups, allowing clear attribute or string key access (`m.group('name')` or `m.groupdict()`).",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "named-groups", "groupdict"])

add_c(86, "2.5", "re.sub", "Beginner",
      "How can an automation script sanitize log text by redacting all Social Security Numbers (`\\d{3}-\\d{2}-\\d{4}`)?",
      "import re\nlog = 'User SSN: 123-45-6789 verified'\nclean_log = re.sub(r'\\d{3}-\\d{2}-\\d{4}', '[REDACTED]', log)",
      ["re.sub(pattern, replacement, text)", "re.replace(pattern, replacement, text)", "text.replace_regex(pattern, replacement)", "re.clean(pattern, text)"],
      0,
      "`re.sub(pattern, repl, string)` returns a new string where all occurrences of the pattern are replaced with the replacement string.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "re-sub", "sanitization"])

add_c(87, "2.5", "re.compile", "Intermediate",
      "Why should frequently used regex patterns in tight automation loops be compiled with `re.compile()`?",
      "import re\npattern = re.compile(r'ERROR \\[(\\w+)\\]: (.*)')\nfor line in huge_log_file:\n    m = pattern.search(line)",
      ["Compiling pre-analyzes and saves the regex pattern into a reusable RegexObject, improving performance over repeated searches", "Compiled patterns run on the GPU", "It prevents memory leaks", "It converts the regex into C source code"],
      0,
      "`re.compile()` caches the compiled pattern object, saving execution time when matching against thousands or millions of lines in large log files.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re-compile", "performance", "optimization"])

add_c(88, "2.5", "re.IGNORECASE", "Beginner",
      "How do you perform a case-insensitive regex search in Python?",
      "import re\nm = re.search(r'warning', text, re.IGNORECASE)  # or re.I",
      ["re.search(..., flag='i')", "re.search(..., re.IGNORECASE)", "re.search(..., case=False)", "text.lower() only"],
      1,
      "Passing `re.IGNORECASE` (or `re.I`) as a flag enables case-insensitive matching across letters.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "ignorecase", "flags"])

add_c(89, "2.5", "re.DOTALL", "Intermediate",
      "What is the effect of the `re.DOTALL` (or `re.S`) flag?",
      "import re\ntext = 'Start\\nMiddle\\nEnd'\nm = re.search(r'Start.*End', text, re.DOTALL)",
      ["It forces dots to match literal periods only", "It makes the dot '.' metacharacter match any character including newline '\\n'", "It matches decimal numbers only", "It matches words separated by dots"],
      1,
      "Normally, `.` matches any character except newline. Under `re.DOTALL`, `.` matches absolutely any character including newlines.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "dotall", "multiline"])

add_c(90, "2.5", "re.MULTILINE", "Intermediate",
      "What does the `re.MULTILINE` (or `re.M`) flag change about `^` and `$` assertions?",
      "import re\ntext = 'line 1\\nline 2\\nline 3'\nlines = re.findall(r'^line \\d', text, re.MULTILINE)",
      ["^ and $ match the start and end of EACH LINE (immediately following or preceding a newline), not just the start and end of the entire string", "It converts the text to a list of lines", "It searches files in parallel threads", "It ignores empty lines"],
      0,
      "In MULTILINE mode, `^` matches at the beginning of the string and at the beginning of each line; `$` matches at the end of the string and the end of each line.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re", "multiline", "anchors"])

add_c(91, "2.5", "Greedy vs Non-Greedy", "Intermediate",
      "Given `text = '<div>first</div><div>second</div>'`, what does greedy `<div>.*</div>` match versus non-greedy `<div>.*?</div>`?",
      "import re\ntext = '<div>first</div><div>second</div>'\ngreedy = re.findall(r'<div>.*</div>', text)\nnon_greedy = re.findall(r'<div>.*?</div>', text)",
      ["Greedy matches the entire string; non-greedy matches two separate elements ['<div>first</div>', '<div>second</div>']", "Both return identical results", "Greedy returns nothing; non-greedy matches everything", "Non-greedy raises a SyntaxError"],
      0,
      "Greedy matching `.*` consumes as many characters as possible up to the last `</div>`. Adding `?` makes it non-greedy (`.*?`), matching the shortest possible string.",
      "PCEA-30-01 Block 2.5 - re module",
      ["greedy", "non-greedy", "quantifiers"])

add_c(92, "2.5", "re.finditer", "Intermediate",
      "Why is `re.finditer()` preferred over `re.findall()` when processing huge log files?",
      "import re\nfor match in re.finditer(r'ERROR: (.*)', log_text):\n    print(match.start(), match.group(1))",
      ["finditer returns an iterator yielding Match objects on demand, saving memory and providing match positions (start/end)", "finditer searches 10 times faster", "finditer only works with integers", "finditer automatically writes results to a file"],
      0,
      "`finditer()` yields `Match` objects lazily, providing index positions (`start()`, `end()`) and span information without allocating a giant list of strings.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re-finditer", "memory-efficiency", "lazy-iteration"])

add_c(93, "2.5", "re.split", "Beginner",
      "How can an automation script split a string by any sequence of commas, semicolons, or whitespace?",
      "import re\nitems = re.split(r'[,;\\s]+', 'apple, banana; orange   grape')",
      ["re.split(r'[,;\\s]+', text)", "text.split(';, ')", "re.tokenize(text, '[,;\\s]')", "re.explode(text)"],
      0,
      "`re.split(pattern, string)` splits the target string wherever the regular expression pattern matches, handling irregular multi-character delimiters.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re-split", "tokenization", "text-processing"])

add_c(94, "2.5", "Extracting IP Addresses", "Intermediate",
      "Which regular expression accurately matches standard IPv4 addresses (1-3 digits separated by dots)?",
      "import re\nlog = 'Failed login from 192.168.1.100 on port 22'\nm = re.search(r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b', log)",
      ["r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'", "r'\\d+\\.\\d+'", "r'[0-9]{4}\\.[0-9]{4}'", "r'\\w+\\.\\w+\\.\\w+\\.\\w+'"],
      0,
      "`r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b'` matches four octets of 1-3 digits bounded by word boundaries, ideal for automated log parsing.",
      "PCEA-30-01 Block 2.5 - Practical Regex",
      ["ip-regex", "log-parsing", "pattern-matching"])

add_c(95, "2.5", "Word Boundaries", "Intermediate",
      "What does the `\\b` anchor represent in a regular expression?",
      "import re\n# Matches 'cat' in 'the cat sat', but not in 'catalog' or 'concatenate':\nm = re.findall(r'\\bcat\\b', 'cat catalog concatenate')",
      ["A backspace character", "A word boundary (the transition between a word character \\w and a non-word character \\W or edge of string)", "A binary byte", "The beginning of a line"],
      1,
      "`\\b` asserts a zero-width word boundary, preventing partial substring matches inside larger compound words.",
      "PCEA-30-01 Block 2.5 - re module",
      ["word-boundary", "anchors", "zero-width"])

add_c(96, "2.5", "Function Substitutions", "Advanced",
      "In `re.sub(pattern, repl, text)`, what can `repl` be besides a replacement string?",
      "import re\ndef double_num(m):\n    return str(int(m.group(0)) * 2)\nres = re.sub(r'\\d+', double_num, 'Item 5 cost 10')",
      ["A list of strings", "A callable function that receives the Match object and returns the replacement string", "A dictionary of regex flags", "A file handle"],
      1,
      "`repl` can be a callable function that takes each `Match` object and dynamically computes its replacement string at runtime.",
      "PCEA-30-01 Block 2.5 - re module",
      ["re-sub", "callable-replacement", "advanced-regex"])

add_c(97, "2.5", "Character Classes", "Beginner",
      "What does the regex character class `[^0-9]` match?",
      "import re\nres = re.findall(r'[^0-9]+', 'order_4829_item')",
      ["Only digits 0 through 9", "Any character that is NOT a digit", "Only the number 0 or 9", "The caret '^' character followed by a digit"],
      1,
      "A caret `^` at the beginning of a character class `[...]` negates it, matching any character that is NOT in the specified set.",
      "PCEA-30-01 Block 2.5 - re module",
      ["character-class", "negation", "syntax"])

add_c(98, "2.5", "Non-Capturing Groups", "Intermediate",
      "What is the syntax for a non-capturing group that groups sub-patterns without creating a numbered match group?",
      "import re\npattern = r'(?:https?|ftp)://([^/\\s]+)'",
      ["(?#pattern)", "(?:pattern)", "(?!pattern)", "(?Ppattern)"],
      1,
      "`(?:...)` creates a non-capturing group, allowing repetition or alternation without storing the group in match results or `re.findall()` tuples.",
      "PCEA-30-01 Block 2.5 - re module",
      ["non-capturing-group", "grouping", "optimization"])

add_c(99, "2.5", "Timestamp Extraction", "Intermediate",
      "How do you extract ISO-8601 timestamps (`2026-10-01T02:40:00`) from an automation log line?",
      "import re\nlog = '2026-10-01T02:40:00Z [INFO] Service started'\nm = re.search(r'\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}', log)",
      ["re.search(r'\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}', log)", "re.search(r'\\w+', log)", "log.split('T')", "datetime.from_regex(log)"],
      0,
      "Using `r'\\b\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}'` isolates standard ISO formatted timestamps for chronological sorting and ingestion.",
      "PCEA-30-01 Block 2.5 - Practical Regex",
      ["iso8601", "timestamps", "log-parsing"])

add_c(100, "2.5", "re.purge", "Advanced",
      "What does `re.purge()` do in an automation worker that processes hundreds of dynamically generated regex patterns?",
      "import re\nre.purge()",
      ["Erases the contents of the file being searched", "Clears Python's internal compiled regular expression cache to free memory", "Resets the CPU registers", "Deletes all regex modules from sys.modules"],
      1,
      "`re.purge()` clears the internal cache of compiled regular expressions, useful in long-running processes that dynamically generate unique regexes.",
      "PCEA-30-01 Block 2.5 - Memory Management",
      ["re-purge", "cache-clearing", "memory-management"])

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

write_ts_file("src/data/pceaSection2CardsPart1.ts", "pceaSection2CardsPart1", cards[:50])
write_ts_file("src/data/pceaSection2CardsPart2.ts", "pceaSection2CardsPart2", cards[50:])

with open("src/data/pceaSection2Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceaSection2CardsPart1 } from './pceaSection2CardsPart1';
import { pceaSection2CardsPart2 } from './pceaSection2CardsPart2';

export const pceaSection2Flashcards: Flashcard[] = [
  ...pceaSection2CardsPart1,
  ...pceaSection2CardsPart2,
];
""")
print("Wrote pceaSection2Flashcards.ts successfully!")
