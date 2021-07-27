## 📋 Intro
This is a living document that aims to document the agreed set of code standards for the iOS team. Please discuss any changes with the wider team before updating this document
## 📉 Minimum Supported Version
We currently aim to support “current minus 2”.
E.g If the current iOS version is iOS 15, then we aim to support iOS 13+. Any increases to this have to be a business lead decision.
## 🧙 Third-Party Dependencies
We try to utilise as few dependencies as possible. In some cases that is unavoidable. Where a dependency is used, it must be discussed with the team before adding it to the project. Where possible we use Swift Package Manager for this and fall back to Cocoapods if not.
## 🖥 CI System
We use Bitrise for our CI system with the following automations for branching conventions:
release/* - Pushes/merges to these branches will trigger a beta build pointing at staging that uploads to Firebase App Distribution
develop - Pushes/merges to this branch will trigger a build that runs the automated tests
master - Pushes/merges to this branch will trigger a build pointing at production that uploads to App Store Connect
Opening a PR - Opening a PR will trigger a build that runs the automated tests and code quality tools then reports back to Github
## ✅ Pull Requests
When creating a pull request, there are a few things to watch out for. Firstly, ensure that the base branch is set correctly.
Once the branches are set, Github will populate the description with a pull request template. You should fill this template in with as much detail as possible for the reviewer. 
The title of the pull request should be {JIRA_ID} - {Description} e.g IOS-101 Adding feature x
Finally, you should ensure there are no merge conflicts and that you have added somebody as a reviewer.
## 💬 Leaving Feedback
We generally stick to using two types of comments/reviews on pull requests
MUST - This is a task or action you want the engineer to take before you will approve and merge the pull request
SHOULD - This is a task or action that you would like the engineer to take or at least discuss before approval and merging. But it shouldn’t hold up a time-sensitive or business-critical release.
