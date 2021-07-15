# Continuous Integration

We use [GitHub Actions](https://github.com/features/actions) to run continuous integration workflows on our Flutter repositories.

We have a standard workflow which runs each time you push code or create a pull request. The workflow is designed to:

- Check code style and formatting (using [dartfmt](https://dart.dev/tools/dart-format))
- Run static analysis
- Run a [Dart Code Metrics](https://pub.dev/packages/dart_code_metrics) report
- Check imports are sorted correctly using [Import Sorter](https://github.com/packages/import_sorter)
- Run automated tests
- Send a test coverage report to [Coveralls](https://coveralls.io/)

Our [Flutter Templates](https://github.com/netsells/flutter-templates) are set up with this workflow out of the box, but below is the configuration for reference.

```yaml
name: Test

on:
  - pull_request
  - push

jobs:
  test:
    runs-on: [self-hosted, ubuntu]

    steps:
      - uses: actions/checkout@v2

      - name: Setup Path
        run: |
          echo "/usr/lib/dart/bin" >> $GITHUB_PATH
          echo "$HOME/.pub-cache/bin" >> $GITHUB_PATH

      - name: Install Flutter
        run: |
          fvm install

      - name: Install project dependencies
        run: fvm flutter pub get

      - name: Run code generation
        run: fvm flutter pub run build_runner build --delete-conflicting-outputs

      - name: Check formatting
        run: fvm flutter format --set-exit-if-changed .

      - name: Run static analysis
        run: fvm flutter analyze .

      - name: Run code metrics
        run: fvm flutter pub run dart_code_metrics:metrics --reporter=github lib

      - name: Check imports
        run: fvm flutter pub run import_sorter:main --exit-if-changed

      - name: Run tests
        run: |
          fvm flutter test --no-pub --coverage --test-randomize-ordering-seed random
          fvm flutter pub run remove_from_coverage -f coverage/lcov.info -r '\..*\.dart'

      - name: Coveralls
        uses: coverallsapp/github-action@master
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
