# Branching

We use GitFlow for our branching structure. If you're unsure of how GitFlow works. See (here)[https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow].

## master
This should always contain the code that is either a) released on the App Store or b) in the process of been submitted to the App Store

## develop
This should be the base branch for all active development work

## feature/{JIRA ID}
If you're working on a Jira task e.g ART-255 you would create a feature branch called feature/ART-255. Once you have completed the work, this would then get merged into develop

## hotfix/*
This should be used if you're fixing a single critical production bug. Once completed, this gets merged into master and pushed straight to the App Store

## release/1.2.0
Once develop is feature complete for a release e.g 1.2.0, you branch from develop and create release/1.2.0. Here you can perform any final tweaks on this branch while work for future versions continues on develop. Once completed, you can merge into master.