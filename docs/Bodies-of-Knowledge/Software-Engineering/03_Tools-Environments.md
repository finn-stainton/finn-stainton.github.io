---
hide:
    - navigation
---
# SE/Tools and Environments

??? info "Learning Outcomes"

    1. Describe the difference between centralized and distributed software configuration management.
    [Familiarity]
    1. Describe how version control can be used to help manage software release management. [Familiarity]
    2. Identify configuration items and use a source code control tool in a small team-based project. [Usage]
    3. Describe how available static and dynamic test tools can be integrated into the software development
    environment. [Familiarity]
    1. Describe the issues that are important in selecting a set of tools for the development of a particular software
    system, including tools for requirements tracking, design modeling, implementation, build automation, and
    testing. [Familiarity]
    1. Demonstrate the capability to use software tools in support of the development of a software product of
    medium size. [Usage]

## Software configuration management

## Version control

### Git

!!! cite "Resources/ Bib."

    - [Git Reference Manual](https://git-scm.com/docs)
    - [Pro Git Book](https://git-scm.com/book/en/v2)
    - [GitHub Git Cheat Sheet](https://github.github.com/training-kit/)


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
2. Stage changes (Track)
3. Commit, which stores files in staging area in a permanent snapshot

#### Getting Started

- [Macintosh Download](https://git-scm.com/download/mac)
- [Windows Download](https://git-scm.com/download/win)

#### Create

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
git remote add origin [url]
```
Specifies a remote repository for the local repository
```
git clone [url]
```
Clones a repository

#### Synchronize

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

#### Info

``` 
git status
```

```
git diff
```


#### Branch

```
git branch [branch-name]
```
Create a new branch
```
git switch -c [branch]
```

```
git merge [branch]
```

```
git branch -d [branch-name]
```

#### Change

```
git rm --cached [file]
```
Delete a file in the staging area


#### Configure

```
git config --global user.name "Name"
```

```
git config --global user.email "email"
```


#### Fun

!!! quote
    Get good at Git

### GitFlow

Git Flow is a branching workflow model designed for product release which extents Git (initialise beforehand)

!!! cite "Resources/ Bib."

#### Getting Started

Windows
```
gitflow init -f
```

MacOS (Homebrew)
```
brew install git-flow
git flow init
```

#### Default Branches

1. Production (main)
2. Integration of the "next release" (develop)
3. Feature (feature/)
4. Bugfix (bugfix/)
5. Release (release/)
6. Support (support/)

#### Usage

A development team may have many members working on different parts of a software product. When a team member wants to create a new feature, they issue `git flow feature start [featureName]` to create a new branch for that feature.

If you are part of a larger team who relies on implementing your feature into other aspects of the product, you will need to publish your feature to the remote git repo. Issue ​`git flow feature publish ‘[featureName]’​`. (NB, this can only be done before finishing the feature, as I found out below).

When the feature has been tested and accepted, the branch can be merged into the develop branch. Issue ​`git flow feature finish [featureName]`​.

When multiple features have been completed and merged with the develop branch, a release can be made. Start a new release by issuing `git flow release start ‘[number]’​`

You can now publish the release by issuing ​`git flow release publish [number]`​. Other developers can now commit their features to the release by pulling, issue ​`git flow release pull origin [releaseNumber]`​ and then repeating the publish command above.

When all the developers have finished committing their features to the release, it can be merged with the master for deployment. issue ‘`git flow release finish [number]​` . (NB: I found this difficult as it will display the vim editor, here you’ll need to insert on a new line, `​-m [message]​`. Then hit esc, and type `:wp​` and hit enter.)

If your production code is found to have contained a bug, a hotfix may be created. Issue `​git flow hotfix start [number]​` (Make sure the number is greater than the current version, normally ​‘v.x’​). When the fix is finished and committed, issue `git flow hotfix finish [number]​`.

### GitHub

#### Pull Request

### BitBucket

## Release management

## Requirements analysis

## Design modeling tools

## Testing tools 

**Static analysis tools**

**Dynamic analysis tools**

## Automation Tools

Programming environments that automate parts of program construction processes 

automated builds

### Continuous integration and delivery (CI/CD)

#### Travis CI

#### GitHub Actions

## Tool integration concepts and mechanisms