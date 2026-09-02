# The Linux Commandline

In this section, you will learn the basics and advanced concepts of the Linux command line. The shell is a powerful tool to efficiently manage your system and automate tasks.

---

## 1. Navigating the Filesystem

- `pwd` – Shows the current working directory.
- `ls` – Lists files and directories.
 ```bash
ls -l   # detailed view
ls -a   # including hidden files
 ```
- `cd <directory>` – Changes to another directory.
 ```bash
cd /home/user/Documents
 ```
- `tree` – Displays the directory structure as a tree.

---

## 2. File Management

- `cp <source> <destination>` – Copies files or directories.
 ```bash
cp file1.txt /destination/path/
 ```
- `mv <source> <destination>` – Moves or renames files/directories.
 ```bash
mv file1.txt /destination/path/
 ```
- `rm <file>` – Deletes files.
 ```bash
rm file.txt
rm -r directory/  # deletes directory with all contents
 ```
- `touch <file>` – Creates a new empty file.
 ```bash
touch new_file.txt
 ```
- `mkdir <directory>` – Creates a new directory.
 ```bash
mkdir new_directory
 ```

---

## 3. Viewing and Editing Files

- `cat <file>` – Displays the content of a file.
 ```bash
cat file.txt
 ```
- `less <file>` – Displays content page by page.
 ```bash
less file.txt
 ```
- `nano <file>` – Simple text editor in the terminal.
 ```bash
nano file.txt
 ```
- `vim <file>` – Powerful text editor with a learning curve.
 ```bash
vim file.txt
 ```

---

## 4. Pipes and Redirections

- `>` – Redirects output to a file (overwrites).
- `>>` – Redirects output to a file (appends).
- `|` – Pipe: Sends output of one command into another.
 ```bash
ls -l | grep "Documents"
 ```

---

## 5. Useful Text Tools

- `grep <word> <file>` – Searches for text in files.
 ```bash
grep "search_term" file.txt
 ```
- `awk` – Pattern-based text processing.
 ```bash
awk '{print $1}' file.txt
 ```
- `sed` – Replaces or manipulates text.
 ```bash
sed 's/old/new/' file.txt
 ```
- `find <path> -name "<pattern>"` – Searches for files.
 ```bash
find /home/user -name "*.txt"
 ```

---

## 6. Processes and Jobs

- `ps` – Shows running processes.
 ```bash
ps aux
 ```
- `top` or `htop` – Dynamic process overview.
 ```bash
top
htop
 ```
- `kill <pid>` – Terminates a process by its process ID.
 ```bash
kill 1234
 ```
- `bg`, `fg`, `jobs` – Manage background and foreground jobs.
 ```bash
jobs
fg %1
bg %1
 ```

---

## 7. Package Management

- Debian/Ubuntu:
 ```bash
sudo apt update      # update package lists
sudo apt upgrade     # upgrade packages
sudo apt install <package>  # install a package
 ```
- RedHat/CentOS:
 ```bash
sudo yum install <package>
sudo dnf update
 ```

---

## 8. Useful Shortcuts

- Autocomplete with `TAB`
- `history` – Shows command history.
 ```bash
history
 ```
- `!!` – Repeats the last command.
 ```bash
!!
 ```
- Create an alias:
 ```bash
alias ll='ls -la'
 ```

---

This document covers the essential basics to navigate and use the Linux command line. For advanced shell scripts and automation, you can explore `bash` scripting and variables.