# Testing Flutter Apps

Comprehensive automated tests are a crucial component of a healthy codebase. Not only do they allow behaviour to be continuously verified as changes are made to a project; they also encourage good development habits, boost productivity, and serve as living documentation for the intended functionality of your code.

Thankfully, Flutter's testing APIs make it easy to write a comprehensive test suite.

**Summary**

- Use a "given-when-then" structure for tests
- Aim for 100% test coverage
- Bake testing into your development workflow
- Review tests in PRs carefully
- Don't skip tests to save time

## 🧪 Formula for a good test

A good test has 3 steps:

1. Set up
2. Act
3. Assert

This can also be thought of as a "given-when-then" structure. For example:

> **Given** the Home screen is displayed, **when** I tap the Floating Action Button, **then** the Add Todo widget should be displayed.

Here are some signs you might be writing a bad test:

- The goal of the test is unclear
- The test has multiple reasons to fail
- The test contains artificial delays
- The test has hidden or internal dependencies
- There are no assertions, expectations, of verifications
- The order in which a test is executed affects its result

## 💯 Aim for 100% test coverage

Test coverage is a fairly blunt measure of how effective your tests are, but it's the best one we have. Increasing test coverage can never be a bad thing, and the higher the coverage, the more confident we can be in our code.

We expect 100% test coverage in our new projects. Any less than 100% coverage makes a test suite limited in its usefulness; with 100% coverage you can be extremely confident in the continuous correctness of the codebase as changes are made and new features added.

_Note: generated code is excluded from our test coverage measurements; only handwritten code is measured._

We measure test coverage in projects using [Coveralls](https://coveralls.io). Each time you open a PR, Coveralls will look at your coverage and provide a report as a comment on your PR.

Additionally, if coverage drops below 95%, your PR will be blocked. The 5% flexibility is there to ensure that time-sensitive and critical changes aren't blocked as a result of test coverage requirements. In day-to-day development, all code should be covered or explicitly ignored.

#### Tips for 100% coverage

- If you're struggling, bring in another developer to help
- Use [golden tests](https://api.flutter.dev/flutter/flutter_test/matchesGoldenFile.html) as a quick way of verifying the visual design and layout of a widget
- Use feature-level integration tests to cover lines which are harder to cover with just unit tests
- Don't slowly build up to 100% at the start of the project; the codebase should be 100% covered from the very first commit
- For code which genuinely cannot be tested (e.g. packages which use top-level or static methods, or platform channels), wrap the functionality in a mockable class and add this comment to the top of the file: `// coverage:ignore-file`. This excludes the file from being included in coverage measurements. **Watch out for abuses of this functionality when reviewing PRs!**

## 🧁 Bake testing into your development workflow

Tests are easiest to write when the functionality under test is already in your mind. It's much more taxing to go back and write tests for a bunch of functionality you wrote a few days or weeks ago.

To that end, bake testing into your development workflow. You could use a framework like Test-driven Development (TDD), or simply write tests for each class immediately after you've written the production code. Do whatever works for you.

In any case, when it's time to open your Pull Request you should ensure you're meeting the requirement for 100% coverage, and that all tests are passing.

## 🔬 Review tests in PRs carefully

Even with 100% line coverage, it's extremely important that tests are reviewed manually during the code review process. When reviewing tests, look out for these red flags:

- Tests with no assertions, expectations, or verifications
- Tests which have obviously been written just to satisfy the coverage requirement
- Not all logical branches are tested (e.g. only the right-hand-side of a ternary operator)
- Only testing the "happy path"
- Abuses of the `// coverage:ignore-file` rule

## ⌛ Don't skip tests to save time

Skipping tests saves you time today, but this time saving doesn't come for free. You exchange this time for technical debt.

Fundamentally, an untested codebase cannot scale efficiently, and will become more and more difficult to work with over time. The time you save now by not writing a test will need to be paid back - with significant interest - later down the line.

Be firm on this principle when working with non-technical staff. Project timelines should and must include sufficient time for developers to write high-quality, well-tested code, and any estimates you give must include time for adding/updating tests. There is no such thing as "pushing to get this over the line"; writing good code takes as long as it needs to.
