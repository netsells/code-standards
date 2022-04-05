# Continuous Integration

We use [GitHub Actions](https://github.com/features/actions) to run continuous integration workflows on our Flutter repositories.

We have a standard workflow which runs each time you push code or create a pull request. The workflow is designed to:

- Check code style and formatting (using [dartfmt](https://dart.dev/tools/dart-format))
- Run static analysis
- Run automated tests
- Send a test coverage report to [Coveralls](https://coveralls.io/)

Our [Flutter Templates](https://github.com/netsells/flutter-templates) are set up with this workflow out of the box.