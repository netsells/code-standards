# Crash Reporting and Logging

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

Additionally, we have infrastructure for general logging. This can be easily enabled using the `flogged` and `lumberdash` packages, and calling the following before running the app:


```dart
final pInfo = await PackageInfo.fromPlatform();
putLumberdashToWork(
    withClients: [
        FloggedLumberdash(
            appName: '[[APP NAME]]',
            appVersionName: pInfo.version,
            appVersionCode: int.parse(pInfo.buildNumber),
            environment: environment.name,
            logstashUrl: 'http://logstash.netsells.tools',
            logstashPort: 5001,
        ),
    ],
);
```

Then, you can use the `logMessage`, `logWarning`, `logError`, and `logFatal`. **Sensitive data such as passwords should always be excluded from these logs.**