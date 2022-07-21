# Crash Reporting

All Flutter apps should be set up to report crashes to our crash logging infrastructure. We currently use [Sentry](https://sentry.io/).

Our [project template](https://github.com/netsells/mobile-templates) is set up to automatically add Sentry logging. Below is a setup snippet for reference.

```dart
void main() {
  runZonedGuarded(() async {
    WidgetsFlutterBinding.ensureInitialized();

    if (kReleaseMode) {
      final pInfo = await PackageInfo.fromPlatform();
      await SentryFlutter.init(
        (options) => options
        ..dsn = sentryDsn
        ..environment = 'staging' // or production
        ..release = '${pInfo.version} (${pInfo.buildNumber})',
      );
    }
    
    // Initialize and run the app
  },
  (error, stack) async {
    if (kReleaseMode) {
      await Sentry.captureException(error, stackTrace: stack);
    }
  },
})
```
