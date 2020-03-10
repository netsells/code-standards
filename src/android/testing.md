# Testing

The [Clean Architecture](clean-architecture.md) makes the project highly testable. Consider using a test-driven development workflow when implementing features.

You'll probably want to make use of [AndroidX Test](https://developer.android.com/topic/libraries/testing-support-library), [Robolectric](http://robolectric.org/), and [Mockito](https://site.mockito.org/).

## Types of Test

- _Local tests_ can be run on any machine with a JVM, including your computer and a continuous integration server
- _Instrumentation tests_ must be run on a real or emulated Android device

- _Unit tests_ test individual classes in isolation, using mocked versions of dependencies
- _Integration tests_ test the entire system as a whole using real dependencies

## Requirements

When reviewing pull requests, please follow these requirements.

**Pull Requests must not be merged with failing tests.**

### New Projects

- **MUST** include _local unit tests_ for everything in the `data` and `domain` layers, as well as state management components such as `ViewModel`s.
- **SHOULD** include _local unit tests_ for Fragments and Activities, provided the tests aren't too time-consuming to write.
  - You **MUST** use Robolectric when writing these tests, so that emulators/devices are not required.
- **CONSIDER** including _local integration tests_ which test the entire feature against mocked external dependencies (e.g. a mocked web server).
  - Use your judgement to decide whether this is worth the time you might spend.
- **SHOULD NOT** include _instrumented tests_. These have limited usefulness and take a very long time to write. **PREFER** manual integration testing.

### Legacy Projects

- **CONSIDER** include unit tests for new functionality as above, wherever possible
  - Make a judgement call here. If the codebase is super untestable, it may not be worth the hassle.

## How do I know what to test?

As mentioned above, the [Clean Architecture](clean-architecture.md) makes the project highly testable. It's pretty clear that you can test each component of the Clean Architecture, and what you should be testing.

If you're unsure, think about the concept of **mutation testing**. If you deliberately introduce a random bug, like removing a line of code or replacing a `<` with a `>`, will your test fail? If not, it's not doing the job it's designed for, so you should update the test to catch that bug. Remember, **tests exist to catch mistakes made by developers**, so make sure you account for every possible mistake.
