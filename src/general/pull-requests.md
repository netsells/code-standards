# Pull Requests

## Overview
This document details what is expected of you and what you can expect during the PR review process. This guide is not definitive or exhaustive but it does cover many of the common obstacles that we all come across. Remember that the intention of a review is to ensure the code quality is as high as possible and discussion is always welcome.

We run all of our code through pull requests for a variety of reasons. These include:

- Sanity checking of logic
- Code style checks
- Mentoring opportunities

PRs are the responsibility of all engineers and it’s important that everyone plays a part in this. 

## Making a Pull Request
When creating a pull request, there are a few things to watch out for. Firstly, ensure the base branch is set correctly. The majority of our repos have a master and develop branch and in this case, your work should be merged into develop unless it’s a release from develop to master.

Once your branches are set, Github will populate the description with a pull request skeleton. New projects use the template detailed [here](https://netsells.atlassian.net/wiki/spaces/NO/pages/1024327708/Github+Templates). Most of our legacy projects use a simplified version of this template. You should fill this template in with as much detail as possible to ensure reviewers fully understand the purpose of your PR. Images are welcome here to aid the PR process. 

The title of your PR should be \<taskId> - \<description> as specified by our [Probot checker](https://netsells.atlassian.net/wiki/spaces/NS/pages/972980281/Netsells+Probot+PR+Title+Checker). See the [Git](git.md) pages for more detailed information.

Finally, you should ensure there are no merge conflicts. Again, Probot will send you a message if conflicts exist. The easiest way to resolve conflicts is to merge the target branch into your branch and resolve the conflicts on your branch. You can then push the resolved commit to your branch.

## Linters and CI Tests
The majority of projects have automated test suites and linters which are run by our continuous integration tools Travis and Github Actions. These are set up to ensure that your changes to the codebase don’t break existing functionality or violate the code standards for your language. If your changes fail the CI tests, they will mark it as failed on the repository. It is your responsibility to resolve these issues at this point, preferably before requesting a review.

## Requesting a review
To request a review, select the people that you want from the dropdown panel. You should add a reviewer for each discipline that your PR changes, for example if you build a tool for Nova admin panel you will need both a frontend and backend reviewer. For large or complicated changes, several reviewers are recommended to ensure multiple sets of eyes see them. You should aim to bring in a more senior developer to review your code and junior developers can be added if you believe reviewing the code would be of benefit to them.

If there are multiple developers within your discipline on the project you are submitting a pull request for, please assign them as reviewers in the first instance. If you are the only developer within your discipline on the project you are submitting a pull request for, please assign any other developer from within your discipline as reviewers. It would be sensible to assign a number of potential reviewers, for example if you are the only frontend developer on a project, you could assign pull requests to other frontend developers, even if they are not working on that project.

As a general rule of thumb we suggest a minimum of two developers per pull request and maximum of three. The minimum accounts for one of your reviewers potentially being unable to review imminently, and the maximum prevents an overkill situation where all developers are getting notified for every pull request.

## Review Comments
When leaving a review, we use two types of pull request comments: **MUST** and **SHOULD**. These keywords will indicate the requirement level of a comment. If a reviewer leaves a **MUST** comment, the pull request will be rejected pending changes. It is up to the reviewers discretion to decide whether a PR is rejected due to **SHOULD** comments. Comments can also be left without this syntax which could be a general question asking you for more information or a piece of information that you may not know. 

Comments should be critical, informative and descriptive enough for you to implement the suggestion. Comments such as “this is wrong” or “this doesn’t work” are not acceptable and should be replaced with an explanation of the problem and suggestions for the solution, including code snippets where appropriate.

Examples of appropriate comments;

`MUST: It looks like you've missed an import for the DB facade, make sure you prefix with a \ to avoid exceptions!`

```
SHOULD: we typically split arrays onto multiple lines for better gif diffs (with a trailing comma)

'user' => [
    'first_name', 
    'last_name',
],
```

## Comment Tips and Examples for Reviewers
- Try to give clear instructions on what you want changing and do not refer to in-person discussions. Pull requests are often looked back on to understand why decisions were made; "as we spoke about on Tuesday" does not help anyone 5 months later!
- If an in-person discussion is needed (ie it'll be a lengthy comment thread) - make sure you post back with the summary so it's known to others
- Provide clear examples whenever possible to help mentor and avoid excessive back and forth with clarifications.
- As a reviewer please keep your feedback constructive and try to ensure your first review is thorough to avoid sending the pull request back multiple times for changes that could have been requested within the first review.
- Read every line of code
- Don't hold author hostage - We have enough power to block a PR, lets not use this for evil by requesting changes outside the scope of the PR. e.g fixing old code
- Add links to comments where appropriate. External docs and discussions around topics are extremely valuable learning resources.
- Please log the time you’ve spent on a pull request against the task the pull request is for, which should be detailed in both the pull request title and the description. Please ensure that when you add your time log you have checked the option labelled ‘Reviewing PR’.
- To avoid multiple people reviewing the same pull request, please add yourself as an assignee as you start to review it. This way everyone else assigned can see you are already reviewing the pull request and can move onto the next one on their list.
- Developers should need no more than around 30 minutes a day for reviewing PRs. We suggest everyone blocks out 30 minutes of their morning to look through any pull requests they have been assigned to.
- There is a GitHub slack integration which we suggest everyone sets up, which will notify you whenever you are assigned to a pull request. This will ensure that no pull request gets missed and will give people a clearer picture of what they’re assigned to. You can set up reminders here https://github.com/settings/reminders/.

## Back to QA?
Depending on the size and scope of the changes requested to your PR it may be necessary to send the code back through QA. If you’re unsure whether the changes need to go back through QA, your reviewer will be able to give you guidance.

## Merging
Once you have received an approving review, the code will be merged and the branch can be deleted. You can then move the task to “Ready to Deploy” on Jira, you have successfully completed your task!

