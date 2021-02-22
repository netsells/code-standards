# Pull Request Workflow

In addition to the [general PR guidance](../general/pull-requests.md), there are some specific guidelines for the mobile team.

## Screen recordings for visual changes

You should **always** aim to include images and/or GIFs showing any visual changes you have made in your PR. This gives additional context for your reviewer, and lets them see the UI without having to checkout the branch and run the app on their own machine.

You can record GIFs on MacOS using [RecordIt](https://recordit.co), or [CleanShot X](https://cleanshot.com). Please note that GitHub doesn't support attaching video files to Pull Requests, hence the need to use a GIF.

## Test Coverage

Projects with tests should have their coverage measured by Codecov, which will add a comment to your Pull Request with details of how the changes affect the overall coverage of the project. As a general rule, always aim not to decrease coverage with your changes.

In practical terms, this usually means ensuring any new code you write is covered with tests.

Code coverage is not necessarily a measure of the quality of your tests though; reviewers should always review tests to ensure edge cases are being considered, and should reject any tests which are clearly written just to satisfy coverage requirements.

_If you are working on a project with tests that doesn't currently have Codecov enabled, please ask the Lead Engineer to enable Codecov for the project._

## Deprecating Codeowners

Our previous workflow involved the use of `CODEOWNERS` files, which automatically requested reviews from all members of the relevant team(s). We should no longer be using this workflow, as inviting multiple people to review PRs can often lead to them going stale, thanks to "someone else will deal with it" syndrome.

If you're working on a project which is still using a `CODEOWNERS` file, please delete it as quickly as possible and move to manually requesting reviews according to the guidelines in the main [Pull Request Workflow](../general/pull-requests.md) page.
