# Git

Development is a collaborative process, and git is a fundamental part of this process, so it's important to get it right. At netsells, we somewhat follow a variant on "git flow", this is slightly different between departments where testing and deployment require slightly difference processes.

The main benefit of the flow outlined below is that we eliminate having pull requests that end up being 1000s of lines long needing to be reviewed - PRs like this take up a significant amount of time and also create inefficiencies in our development process, particularly at the point of deployment.

## Branching

The points below detail how branches should be structured in ordered to make reviews and releases more manageable.

::: tip <badge text="master" type="tip" vertical="middle"/>
All projects should have a ‘master’ branch - this is the branch that will mirror what is currently live on Production.
:::

::: tip <badge text="develop" type="tip" vertical="middle"/>
All projects will then have a ‘develop’ branch - develop should contain anything that is completed and ready to go live, but has not yet been deployed to production. This is often the "stable" branch used to show progress to clients.
:::

::: tip <badge text="epic/*" type="tip" vertical="middle"/>
For each epic you should then create an Epic branch from the develop branch, e.g. `epic/PROJCD-1234-an-epic`
:::

::: tip <badge text="task/*" type="tip" vertical="middle"/>
For each task in an epic you should create a branch for each task you actively work on, e.g. `task/PROJCD-5678-a-task` 
:::

### Naming

Branch names for tasks and epics should follow the prefix convention shown above for visibility and clarity on what a branch is.

The task/epic ID from JIRA should follow directly after the "type" prefix. This identifier is used by JIRA to track branches and commits against an individual task, and provides an easy way to lookup what the branch is.

Optionally, but **highly recommended**, is a branch description to further improve the clarity around the contents of the branch.

#### See below for an example of this structure:
<br>
<spoiler>

```
master - Should always mirror production
│
├─ develop - Code ready for deployment to production
│  │  
│  ├─ epic/PROJCD-1234-an-epic - Epic release branch
│  │  │ 
│  │  └─ task/PROJCD-5678-a-task - Task branch
│  │  │ 
│  │  └─ task/PROJCD-5679-another-task
│  │ 
│  │ 
│  ├─ epic/PROJCD-1235-another-epic
│  │  │ 
│  │  └─ task/PROJCD-5678-a-task
│  │ 
│  │ 
│  ├─ hotfix/PROJCD-9101-hot-fix
│  │ 
``` 

</spoiler>

### Permissions

Master and develop should be locked down and developers should not be able to commit directly to these branches without a pull request being reviewed and merged.

## Pull Requests

Once you have completed work for the task, a PR should be created to merge the work back into your epic branch. If you are working on an especially large task, which hasn’t been broken down much, use your initiative at this point to do regular PRs back into the epic branch so that we can keep on top of the process.

Once all work is completed for the epic you should then create a PR to merge the epic branch back into develop - at this point, because the code has already been reviewed it should be a relatively quick process to merge the entire epic back into develop.

Once on develop we have the option to deploy to staging, allowing the client to see the work completed so far on a stable platform.

When ready, and confirmed that it’s good to go for launch we can then create a final PR to merge all of develop back into master - again, because the code has already been reviewed whilst these PRs will be large, it will be more of a cursory check to ensure we haven’t missed anything obvious.

## Hotfixes

The process outlined above will not apply for hot fixes, for which the process is as follows;

- Branch straight off master into a hot fix branch, e.g. `hotfix/PROJCD-9101-hot-fix`
- Once complete and tested create a pull request to merge directly back into master

## Further Reading

For further information regarding our git process, please read the guidlines for [general git usage](../general/git.html).


