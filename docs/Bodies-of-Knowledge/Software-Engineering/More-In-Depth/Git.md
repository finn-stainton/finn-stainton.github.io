---
hide:
    - navigation

---

# Git


[:octicons-arrow-left-24: Return to Software Engineering](/Bodies-of-Knowledge/Software-Engineering/)

---


## Resources/ Bib.

!!! cite ""

    - [Git Reference Manual](https://git-scm.com/docs)
    - [Pro Git Book](https://git-scm.com/book/en/v2)
    - Atlassian Git Cheat Sheet
    - [GitHub Git Cheat Sheet](https://github.github.com/training-kit/)

Is a Version Control System which records changes to a file(s) over time.

- Git stores information as **Snapshots**, in that with each commit it only stores a new copy of a file if it has changed. 
- Nearly all Operations are Local. 
- All data stored in git has a SHA-1 hash (checksum).
- Generally, data is only added.

## Three main states

- Modified: changed but not committed
- Staged: marked modified file in current version to be part of next snapshot
- Committed: data stored in local repository

## Three main sections

- Working Tree: Single checkout of one version of the project pulled from compressed database onto local disk
- Staging Area (Index): File which contains information about the next commit
- Git Directory: database for objects and metadata

## Basic Workflow

1. Modify files in working tree
2. Stage changes (Track)
3. Commit, which stores files in staging area in a permanent snapshot

## Getting Started

- [Macintosh Download](https://git-scm.com/download/mac)
- [Windows Download](https://git-scm.com/download/win)

!!! note
    square braces [] denote user replaced text. No need for them

## Create

```
git init
```

Initialises a new git repository inside a directory. NB: Files/directories are not automatically added to the git service.

```
git add [file]
```

Starts to track a file

```
git add .
```

Starts to track all files in directory

```
git commit -m "[message]"
```

Commit staged changes with a message

```
git remote add origin [url]
```

Specifies a remote repository for the local repository

```
git clone [url]
```

Clones a repository

## Synchronise

```
git fetch
```

```
git merge
```

```
git push
```

```
git pull
```

## Info

```
git status
```

```
git diff
```

## Branch

```
git branch [branch]
```

Create a new branch

```
git switch -c [branch]
```

```
git checkout -b [branch]
```

Create and checkout a new branch. Drop -b flag to checkout to existing branch

```
git merge [branch]
```

Merge [branch] into current branch

```
git branch -d [branch]
```

Delete [branch]

## Change

```
git rm --cached [file]
```

Delete a file in the staging area

```
git commit --amend
```

Replace last commit with staged changes and last commit combined. Used to edit last committed message when not staged changes

```
git rebase [base]
```

Rebase the current branch onto <base>. <base> can be a commit ID,
branch name, a tag, or a relative reference to HEAD.

```
git reflog
```

Delete a file in the staging area

## Configure

```
git config --global user.name "Name"
```

Define author name for all commits of current user

```
git config --global user.email "email"
```

Define email for current user

```
git config --global alias. <alias-name> <git-command>
```

Create shortcut for a Git command. E.g. alias.glog “log --graph --oneline” will set ”git glog”equivalent to ”git log --graph --oneline.

```
git config --system core.editor <editor>
```

```
git config --global --edit
```

## Fun

!!! quote
    Get good at Git