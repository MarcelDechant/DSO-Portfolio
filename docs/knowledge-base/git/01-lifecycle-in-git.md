---
sidebar_label: Lifecycle in Git
title: Lifecycle in Git
---

# Git Lifecycle

The Git lifecycle describes how files move through different states inside a repository. Understanding these states helps you track changes accurately and avoid mistakes.

---

## 1. File States in Git

Git tracks files through **four main states**:

### **Untracked**
Files that exist in your working directory but Git does not track yet.

### **Unmodified**
Files that are tracked by Git and have **no changes** since the last commit.

### **Modified**
Files that have been changed but are **not yet staged**.

### **Staged**
Files that have been marked to be included in the **next commit**.

---

## 2. Lifecycle Flow

A typical workflow goes like this:

1. Modify a file → becomes **Modified**
2. Stage it:
 ```bash
git add <file>
 ```
3. Commit it:
 ```bash
git commit -m "Your commit message"
 ```
4. Push it to the remote:
 ```bash
git push
 ```

When the commit is done, the file becomes **Unmodified** again (because Git now knows the latest version).

---

## 3. Standard Workflow: Clone → Commit → Push

### **Clone**
Copy an existing repository to your local system:

 ```bash
git clone <url>
 ```

### **Commit**

First, stage the changes:
 ```bash
git add <file>
 ```

Then, create the commit:
 ```bash
git commit -m "Describe your changes"
 ```

### **Push**
Send the committed changes to the remote repository:

 ```bash
git push
 ```

---

## 4. File State Overview

| State       | Meaning                                                | How to reach it                       |
|-------------|--------------------------------------------------------|----------------------------------------|
| Untracked   | Git does not track this file yet                      | Create a new file                      |
| Modified    | File changed since last commit                        | Edit a tracked file                    |
| Staged      | File is prepared for the next commit                  | `git add <file>`                       |
| Committed   | Changes saved permanently in Git history              | `git commit -m "msg"`                  |

---

## 5. ASCII Diagram of the Git Lifecycle

 ```
      +--------------+
      |  Untracked   |
      +--------------+
             |
             | git add
             v
      +--------------+
      |   Staged     |
      +--------------+
             |
             | git commit
             v
      +--------------+
      |  Committed   |
      +--------------+
             |
             | edit file
             v
      +--------------+
      |   Modified   |
      +--------------+
             |
             | git add
             v
      +--------------+
      |   Staged     |
      +--------------+
```

---

## Summary

The Git lifecycle revolves around the movement of files between:

- **Untracked**
- **Modified**
- **Staged**
- **Committed**

Once you understand this flow, the rest of Git becomes much easier.
