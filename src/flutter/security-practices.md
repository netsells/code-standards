# Security Best Practices

## Detecting jailbroken/rooted devices

Apps should be prevented from running on unsafe devices. A device is deemed to be unsafe if it is:

* Jailbroken
* Rooted
* An emulator
* Using mock location
* Running on external storage (Android only)

This can be achieved using the [`safe_device`](https://pub.dev/packages/safe_device) package:

```dart
import 'package:safe_device/safe_device.dart';

Future<void> main() async {
  if (kDebugMode || await SafeDevice.isSafeDevice) {
    // TODO Run application
  }
}
```

> **Important**: To enable development on a simulator/emulator, you should first check if your app is running in debug mode. If so, we can ignore the safety check.

## Store authentication tokens securely

Any data stored on the user's device, particularly secure data such as authentication tokens, **must** be stored using encryption. This is easily achievable using the [`flutter_secure_storage`](https://pub.dev/packages/flutter_secure_storage) package.

Ideally, all data stored on the user's device should be encrypted. Database/persistence packages such as [`hive`](https://pub.dev/packages/hive) support encrypted storage out-of-the-box.