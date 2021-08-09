# Crash Reporting

All Flutter apps should be set up to report crashes to our crash logging infrastructure. We currently use [Sentry](https://sentry.io/).

Our [project template](https://github.com/netsells/mobile-templates) is set up to automatically add Sentry logging. Below is a setup snippet for reference.

```dart
Future<void> main() async {
    // ...
    
    await SentryFlutter.init(
        (options) {
            options.dsn = 'https://example@sentry.io/add-your-dsn-here';
            options.environment = 'staging'; // Or dev/production.
        },
        appRunner: () => runApp(MyApp()),
    );
}
```