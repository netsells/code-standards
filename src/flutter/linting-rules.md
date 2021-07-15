# Linting & Static Analysis Rules

We use linting and analysis tools to enforce code style and best practices. Our project [templates](https://github.com/netsells/flutter-templates) are all set up with these rules out-of-the-box, but if you need to set it up manually, here's a reference.

The following rules require the [`very_good_analysis`](https://pub.dev/packages/very_good_analysis) and [`dart_code_metrics`](https://pub.dev/packages/dart_code_metrics) packages.

```yaml
include: package:very_good_analysis/analysis_options.yaml

analyzer:
  plugins:
    - dart_code_metrics
  exclude:
    - ios/**
    - android/**
    - macos/**
    - web/**
    - lib/**.*.dart
    - test/**.*.dart

dart_code_metrics:
  anti-patterns:
    - long-method
    - long-parameter-list
  metrics:
    cyclomatic-complexity: 20
    maximum-nesting-level: 5
    number-of-parameters: 4
    source-lines-of-code: 50
  metrics-exclude:
    - test/**
  rules:
    - avoid-unused-parameters
    - binary-expression-operand-order
    - double-literal-format
    - no-object-declaration
    - newline-before-return
    - no-boolean-literal-compare
    - prefer-trailing-comma
    - prefer-conditional-expressions
    - no-equal-then-else
    - always-remove-listener
    - avoid-returning-widgets
    - avoid-unnecessary-setstate
    - avoid-wrapping-in-padding
    - prefer-extracting-callbacks
```
