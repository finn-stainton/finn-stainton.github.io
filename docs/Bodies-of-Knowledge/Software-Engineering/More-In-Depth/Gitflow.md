---
hide:
    - navigation

---

# GitFlow

[:octicons-arrow-left-24: Return to Software Engineering](/Bodies-of-Knowledge/Software-Engineering/)

---


Git Flow is a branching workflow model designed for product release which extents Git (initialise beforehand)

!!! cite "Resources/ Bib."

## Getting Started

Windows

```
gitflow init -f
```

MacOS (Homebrew)

```
brew install git-flow
git flow init
```

## Default Branches

1. Production (main)
2. Integration of the "next release" (develop)
3. Feature (feature/)
4. Bugfix (bugfix/)
5. Release (release/)
6. Support (support/)

## Usage

A development team may have many members working on different parts of a software product. When a team member wants to create a new feature, they issue `git flow feature start [featureName]` to create a new branch for that feature.

If you are part of a larger team who relies on implementing your feature into other aspects of the product, you will need to publish your feature to the remote git repo. Issue ​`git flow feature publish ‘[featureName]’​`. (NB, this can only be done before finishing the feature, as I found out below).

When the feature has been tested and accepted, the branch can be merged into the develop branch. Issue ​`git flow feature finish [featureName]`​.

When multiple features have been completed and merged with the develop branch, a release can be made. Start a new release by issuing `git flow release start ‘[number]’​`

You can now publish the release by issuing ​`git flow release publish [number]`​. Other developers can now commit their features to the release by pulling, issue ​`git flow release pull origin [releaseNumber]`​ and then repeating the publish command above.

When all the developers have finished committing their features to the release, it can be merged with the master for deployment. issue ‘`git flow release finish [number]​` . (NB: I found this difficult as it will display the vim editor, here you’ll need to insert on a new line, `​-m [message]​`. Then hit esc, and type `:wp​` and hit enter.)

If your production code is found to have contained a bug, a hotfix may be created. Issue `​git flow hotfix start [number]​` (Make sure the number is greater than the current version, normally ​‘v.x’​). When the fix is finished and committed, issue `git flow hotfix finish [number]​`.