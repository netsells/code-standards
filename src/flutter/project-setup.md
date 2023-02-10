# Setting up a Flutter Project

*An example of this setup can be found at [https://github.com/netsells/example-flutter](https://github.com/netsells/example-flutter)*

## 1️⃣ Create a repository using the template

1. Go to the [template repository](https://github.com/netsells/flutter-template) and click **Use this template**, then **Create a new repository**.
2. Fill in the repository details and click **Create repository from template**. Wait for the repository to generate.
3. Once the repository is generated, clone it to your machine:

```bash
git clone git@github.com:netsells/flutter-example
```

4. Follow the instructions in `README.md` to make sure the bundle identifier/package name, and app name are all set correctly.

## 2️⃣ Setup Firebase

1. Use the instructions on the [Firebase website](https://firebase.google.com/docs/flutter/setup?platform=web) to set up a Firebase project for your app.

> Please note that we no longer create multiple Firebase projects for our apps; both staging and production environments live in one Firebase project to simplify configuration.

*Don't forget to add the staging app IDs to Firebase, as well as the production ones.*

2. Add `FIREBASE_IOS_APP_ID` and `FIREBASE_ANDROID_APP_ID` secrets to your GitHub repository, under **Settings** → **Secrets and variables** → **Actions**. Remember to use the **staging** app IDs here.

## 3️⃣ Set up Fastlane Match

1. Ensure you have registered your app identifiers in the client's [Apple Developer Account](https://developer.apple.com/). Again, remember to include the staging version (the same as the normal version, but with `.stg` suffixed.
2. Ensure you have at least one iOS device registered in the Apple Developer account
3. Create a GitHub repository for your certificates e.g. `netsells/example-flutter-certificates`
4. Generate a password to use for Match storage, and save it in 1Password
5. Find your Apple Team ID and add it to `ios/fastlane/Matchfile`
6. Using your terminal, move to the `ios` directory and run `bundle install`
7. Then run the following commands:
   - `bundle exec fastlane match development`
   - `bundle exec fastlane match adhoc`
   - `bundle exec fastlane match appstore`
1. Open the iOS project in Xcode, switch off Automatic Signing, and configure the various build configurations to use the appropriate provisioning profiles
2. Commit and push your changes

## 4️⃣ Set up Sentry

1. Go to the [Project Creation screen](https://netsells.sentry.io/projects/new/) in Sentry and create a new project
2. Copy the DSN into the `credentials.dart` file
3. Commit and push your changes

## 5️⃣ Set up Mixpanel

*This can be done a bit later if it's not possible at the start of the project.*

1. Once the client has provided you with Mixpanel access, copy the token into `credentials.dart`
2. Commit and push your changes

## 6️⃣ Set up Production Deployment

*This can be done a bit later if it's not possible at the start of the project.*

1. Collect a service account JSON file from the client, and add its contents as an Actions Secret in your project's repository settings, with the following key: `SERVICE_ACCOUNT_JSON`
2. Set up your Apple App Store listing and copy the app's Apple ID into the `Fastfile` where indicated
3. Commit and push your changes

