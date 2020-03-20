# Pull Requests

## Overview
This document details what is expected of you and what you can expect during the PR review process. This guide is not definitive or exhaustive but it does cover many of the common obstacles that we all come across. Remember that the intention of a review is to ensure the code quality is as high as possible and discussion is always welcome.

## Making a Pull Request
When creating a pull request, there are a few things to watch out for. Firstly, ensure the base branch is set correctly. The majority of our repos have a master and develop branch and in this case, your work should be merged into develop unless it’s a release from develop to master.

Once your branches are set, Github will populate the description with a pull request skeleton. New projects use the template detailed [here](https://netsells.atlassian.net/wiki/spaces/NO/pages/1024327708/Github+Templates). Most of our legacy projects use a simplified version of this template. You should fill this template in with as much detail as possible to ensure reviewers fully understand the purpose of your PR. Images are welcome here to aid the PR process. 

The title of your PR should be \<taskId> - \<description> as specified by our [Probot checker](https://netsells.atlassian.net/wiki/spaces/NS/pages/972980281/Netsells+Probot+PR+Title+Checker). See the [Git](git.md) pages for more detailed information.

Finally, you should ensure there are no merge conflicts. Again, Probot will send you a message if conflicts exist. The easiest way to resolve conflicts is to merge the target branch into your branch and resolve the conflicts on your branch. You can then push the resolved commit to your branch.

## Linters and CI Tests
The majority of projects have automated test suites and linters which are run by our continuous integration tools Travis and Github Actions. These are set up to ensure that your changes to the codebase don’t break existing functionality or violate the code standards for your language. If your changes fail the CI tests, they will mark it as failed on the repository. It is your responsibility to resolve these issues at this point, preferably before requesting a review.

## Requesting a review
To request a review, select the people that you want from the dropdown panel. You should add a reviewer for each discipline that your PR changes, for example if you build a tool for Nova admin panel you will need both a frontend and backend reviewer. For large or complicated changes, several reviewers are recommended to ensure multiple sets of eyes see them. You should aim to bring in a more senior developer to review your code and junior developers can be added if you believe reviewing the code would be of benefit to them.

## Review Comments
When leaving a review, we use the **MUST** and **SHOULD** keywords to indicate the level of a comment. If a reviewer leaves a **MUST** comment, the pull request will be rejected pending changes. It is up to the reviewers discretion to decide whether a PR is rejected due to **SHOULD** comments. Comments can also be left without this syntax which could be a general question asking you for more information or a piece of information that you may not know. 

Comments should be critical, informative and descriptive enough for you to implement the suggestion. Comments such as “this is wrong” or “this doesn’t work” are not acceptable and should be replaced with an explanation of the problem and suggestions for the solution, including code snippets where appropriate.

Once you have made the requested changes, you can re-request a review from a user. The person who left the original comment will mark the comment as resolved if they are happy with the solution.

## Back to QA?
Depending on the size and scope of the changes requested to your PR it may be necessary to send the code back through QA. If you’re unsure whether the changes need to go back through QA, your reviewer will be able to give you guidance.

## Merging
Once you have received an approving review, the code will be merged and the branch can be deleted. You can then move the task to “Ready to Deploy” on Jira, you have successfully completed your task!

