# Pull Request Workflow

In addition to the [general PR guidance](../general/pull-requests.md), there are some specific guidelines for the mobile team.

## PR Assignment

Pull Requests have an "Assignee" field. Its purpose is ambiguous, but we use it to identify the engineer who needs to take the next action. This is likely to be the reviewer initially. Once reviewed, the reviewer should either merge the PR or assign it back to the engineer who submitted the PR, who can apply any requested changes or merge the PR themselves according to the review outcome.

## Screen recordings for visual changes

You should **always** aim to include images and/or GIFs showing any visual changes you have made in your PR. This gives additional context for your reviewer, and lets them see the UI without having to checkout the branch and run the app on their own machine.

You can record GIFs on MacOS using [RecordIt](https://recordit.co), or [CleanShot X](https://cleanshot.com). Please note that GitHub doesn't support attaching video files to Pull Requests, hence the need to use a GIF.

## Test Coverage

Projects with tests should have their coverage measured by Codecov, which will add a comment to your Pull Request with details of how the changes affect the overall coverage of the project. As a general rule, always aim not to decrease coverage with your changes.

In practical terms, this usually means ensuring any new code you write is covered with tests.

Code coverage is not necessarily a measure of the quality of your tests though; reviewers should always review tests to ensure edge cases are being considered, and should reject any tests which are clearly written just to satisfy coverage requirements.

_If you are working on a project with tests that doesn't currently have Codecov enabled, please ask the Lead Engineer to enable Codecov for the project._

## Code Owners

We use GitHub's "Code Owners" feature to make it easier to track who needs to review PRs for any given project. In general, a project should have two code owners: the project's principle developer, and one other developer (ideally with some knowledge of the project).

For Flutter projects, code owners should also be set up to cover native code. Again, Swift/Objective-C and Kotlin/Java files should have two code owners.

Please see GitHub's [guide](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) on code owners to learn how to set this up. An example `CODEOWNERS` file might look like this:

```
* @ptrbrynt @benbaggley

*.swift @jackcolley @dramonddaniel

*.storyboard @jackcolley @dramonddaniel

*.kt @ptrbrynt @helenasewell

*.java @ptrbrynt @helenasewell

*.xml @ptrbrynt @helenasewell

*.gradle @ptrbrynt @helenasewell
```

_Please note that some projects may have a team (e.g. @netsells/android) set as a code owner. This is a remnant of our old workflow. If you come across an instance of this, please go ahead and update the code owners file according to the current workflow._
