---

hide:
    - navigation 
---
# SE/Tools and Environments

[:octicons-arrow-left-24: Return to Software Engineering](/Bodies-of-Knowledge/Software-Engineering/)

---

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

### [Git]

!!! cite "Resources/ Bib."

    - [Git Reference Manual](https://git-scm.com/docs)
    - [Pro Git Book](https://git-scm.com/book/en/v2)
    - Atlassian Git Cheat Sheet
    - [GitHub Git Cheat Sheet](https://github.github.com/training-kit/)

Is a Version Control System which records changes to a file(s) over time.

- Git stores information as **Snapshots**, in that with each commit it only stores a new copy of a file if it has changed. 
- Nearly all Operations are Local. 
- All data stored in git has a SHA-1 hash (checksum).
- Generally, data is only added.

[:octicons-arrow-right-24: Continue reading][Git]

[Git]: More-In-Depth/Git.md

### [Gitflow]

Git Flow is a branching workflow model designed for product release which extents Git (initialise beforehand)

[:octicons-arrow-right-24: Continue reading][Gitflow]

[Gitflow]: More-In-Depth/Gitflow.md

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