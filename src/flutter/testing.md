# Testing

**Pull Requests must not be merged with failing tests.**

- **MUST** include _unit tests_ for everything outside the UI layer
- **SHOULD** include _widget tests_
- **CONSIDER** including _integration tests_ which test the entire feature against mocked external dependencies (e.g. a mocked web server).
  - Use your judgement to decide whether this is worth the time you might spend.
  - Use the [integration_test](https://pub.dev/packages/integration_test) package
