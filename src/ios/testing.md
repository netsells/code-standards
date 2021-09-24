# Testing

Comprehensive automated tests are a crucial component of a healthy codebase. Not only do they allow behaviours to be continuously verified as changes are made to a project; they also encourage good development habits, boost productivity and serve as living documentation for the intended functionality of your code.

## Summary

* Use a “given, when, then” structure for tests
* Try to match the “given, when, then” tests to the acceptance crtieria in the ticket you are working on
* Bake tests into your development workflow
* Always review tests in PRs carefully
* Don’t skip tests to save time

## 🧑‍Formula for a good test

A good test has 3 steps:
* Setup
* Act
* Assert

This can also be thought of as a “given, when, then” structure. Similar to how we define our acceptance criteria. 

Some signs of a bad test are:
* The goal of the test in unclear
* The test has multiple reasons to fail
* More than one thing is been tested
* The test contains artificial delays
* The test has hidden or internal dependencies
* There are no assertions, expectations or verifications
* The order in which a test is executed affects its results

## Matching the acceptance criteria
We spend a lot of time in refinement sessions breaking down each ticket and writing the acceptance criteria for all functionality. Try to write your tests to match and verify the acceptance criteria for the ticket you are working on. 

## 🍞 Bake tests into your development workflow

Tests are easiest to write when the functionality under test is already in your mind. It is much more taxing and easy to miss something vital when you go back and write tests for functionality you wrote a few days or weeks ago.

You could use a framework like Test-driven development (TDD), or simply write tests for each class immediately after you’ve written the production code. Doing whatever works best for you will lead to the best productivity and efficiency.

When it's time to open up a pull request, you should ensure you’re meeting the requirement that all tests are passing and new functionality is covered by tests.

## Review tests in PRs carefully

Its important that tests are reviewed carefully during the PR stage. When reviewing tests, look out for these red flags:
* Tests with no assertions, expectations or verifications
* Tests which have obviously been written to just satisfy the requirement for tests to be added
* Not all logical branches are tested e.g only the happy path is tested

## Don’t skip tests to save time
Skipping tests today might save you time, but you are exchanging the saved time for technical debt. An untested codebase can’t scale efficiently, and will become more and more difficult to work on over time. The time you might save by not writing a test will need to be paid back - with significant interest later down the line.
It's okay to be firm on this principle when communicating with non-technical staff. Ticket estimates should and must include sufficient allowance for engineers to write high-quality, well-tested code.
