# Git

## Branching

The points below detail how branches should be structured in order to make reviews and releases more manageable.

::: tip <badge text="master" type="tip" vertical="middle"/> <badge text="restricted" type="error" vertical="middle"/>
All projects should have a ‘master’ branch - this is the branch that will mirror what is currently live on Production. Merging into this branch should always be restricted to senior developers. 
:::

::: tip <badge text="develop" type="tip" vertical="middle"/> <badge text="restricted" type="error" vertical="middle"/>
All projects will then have a ‘develop’ branch - develop should contain anything that is completed and ready to go live, but has not yet been deployed to production. This is often the "stable" branch used to show progress to clients. Merging into this branch should always be restricted to senior developers.
:::

::: tip <badge text="feature/*" type="tip" vertical="middle"/> <badge text="web only" type="warning" vertical="middle"/>
If a section of work contains multiple epics it might be wise to branch away from develop with a `feature/*` branch. 

Feature branches can be used to group a selection of epics together. they should be created at the start of development and branched from when creating `epic/*`, `task/*` and `bug/*` branches relating to the feature. once a feature is complete and ready for deployment it can be PRd into `develop`. e.g. `feature/frontend-rebuild` `feature/sprint-2` 
:::

::: tip <badge text="epic/*" type="tip" vertical="middle"/>
For each epic you should then create an Epic branch from the `develop` or `feature/*` branch, e.g. `epic/PROJCD-1234-an-epic`
:::

::: tip <badge text="task/*" type="tip" vertical="middle"/>
For each task in an epic you should create a branch for each task you actively work on, e.g. `task/PROJCD-5678-a-task` 

If a task is not contained within an epic you should branch from `develop` or `feature/*` and still use the above naming convention.
:::

::: tip <badge text="release/*" type="tip" vertical="middle"/> <badge text="mobile only" type="warning" vertical="middle"/>
Once develop is feature complete for a release, you branch from develop and create a release branch. Here you can perform any final tweaks or bugfixes on `bug/*` branches while work for future versions continues on develop. Once completed, you can merge into master and develop. e.g. `release/1.2.0`
:::

::: tip <badge text="bug/*" type="tip" vertical="middle"/>
When the QA team are testing a release they will create jira bugs. These should be completed by branching from and PRing back in to the branch being tested. , e.g. `bug/PROJCD-5678-a-bug` 
:::

::: tip <badge text="hotfix/*" type="tip" vertical="middle"/>
These are the only branches that are branched from and merged in to `master`. Once complete a PR should be created into both `master` and `develop`.
:::


### Permissions

Master and develop should be locked down and developers should not be able to commit directly to these branches without a pull request being reviewed and merged.

### Naming

Branch names for tasks and epics should follow the prefix convention shown above for visibility and clarity on what a branch is.

The task/epic ID from JIRA should follow directly after the "type" prefix. This identifier is used by JIRA to track branches and commits against an individual task, and provides an easy way to lookup what the branch is.
e.g. `task/PROJCD-5678`

Optionally, but **highly recommended**, is a branch description to further improve the clarity around the contents of the branch.
e.g. `task/PROJCD-5678-dashboard-styling`

#### See below for an example of this structure:
<br>
<spoiler>

```
master - Should always mirror production
│
├─ develop - Code ready for deployment to production
│  │  
│  ├─ feature/sprint-1 - feature containing several epics
│  │  │ 
│  │  ├─ epic/PROJCD-1234-calendar-page - epic within a feature
│  │  │   │ 
│  │  │   ├─ task/PROJCD-5678-a-task - Task branch
│  │  │   │ 
│  │  │   └─ task/PROJCD-5679-another-task task/PROJCD-5678-a-task - Task branch
│  │  │   
│  │  ├─ epic/PROJCD-1234-dashboard-page - epic within a feature
│  │  │   │ 
│  │  │   ├─ task/PROJCD-5678-a-task - Task branch
│  │  │   │ 
│  │  │   └─ task/PROJCD-5679-another-task task/PROJCD-5678-a-task - Task branch
│  │  │   
│  │  ├─ bug/PROJCD-5679-a-bug
│  │  │   
│  │  └─ bug/PROJCD-5679-a-bug
│  │  
│  │  
│  ├─ epic/PROJCD-1234-an-epic - Epic branch
│  │  │ 
│  │  ├─ task/PROJCD-5678-a-task - Task branch
│  │  │ 
│  │  ├─ task/PROJCD-5679-another-task
│  │  │ 
│  │  └─ bug/PROJCD-5679-a-bug
│  │ 
│  │ 
│  ├─ task/PROJCD-5678-a-task
│  │ 
│  │ 
├─ hotfix/PROJCD-9101-hot-fix - Branched from master, merged into master and develop
│  │ 
│  │ 
``` 

</spoiler>

## Commit Messages
### Formatting
Commits must be prefixed with the JIRA task ID, and formatted as follows:

>YPS-123 - Add additional validation to booking endpoints

### Tense
Commit messages should be written in present tense.

You may find it helpful when you're writing commit messages to prefix it with a silent "This commit will" (So don't include it in the actual commit messages)

>~~This commit will~~ Change registration validation

## Pull Requests

Once you have completed work for the task, a PR should be created to merge the work back into your epic branch. If you are working on an especially large task, which hasn’t been broken down much, use your initiative at this point to do regular PRs back into the epic branch so that we can keep on top of the process.

Once all work is completed for the task or epic you should then create a PR to merge the epic branch back into it's base branch (`develop` or `feature/*`) - at this point, because the code has already been reviewed it should be a relatively quick process to merge.

When ready, and confirmed that it’s good to go for launch we can then create a final PR to merge develop into master - again, because the code has already been reviewed whilst these PRs will be large, it will be more of a cursory check to ensure we haven’t missed anything obvious.

### PR Title
Pull requests must be titled correct and using the following format: `<task> <description>`. For example: `PROJCD-123 Implement new homepage`

### PR Template
In addition to the above, pull requests must make use of the latest PR Template, completed with accurate information for deployment/merge.

The latest template can be found here. 

[https://netsells.atlassian.net/wiki/spaces/NO/pages/1024327708/Github+Templates](https://netsells.atlassian.net/wiki/spaces/NO/pages/1024327708/Github+Templates)
