# Git

Is a Version Control System which records changes to a file(s) over time. 

- Git stores information as **Snapshots**, in that with each commit it only stores a new copy of a file if it has changed. 
- Nearly all Operations are Local. 
- All data stored in git has a SHA-1 hash (checksum).
- Generally, data is only added.

**Three main states:** 

- Modified: changed but not committed
- Staged: marked modified file in current version to be part of next snapshot
- Committed: data stored in local repository

**Three main sections**

- Working Tree: Single checkout of one version of the project pulled from compressed database onto local disk
- Staging Area (Index): File which contains information about the next commit
- Git Directory: database for objects and metadata

**Basic Workflow**

1. Modify files in working tree
2. Stage changes
3. Commit, which stores files in staging area in a permanent snapshot




## Resources/ Bib.

- [Git Reference Manual](https://git-scm.com/docs)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Cheat Sheet](https://github.github.com/training-kit/)

## Fun

!!! quote
    Get good at git