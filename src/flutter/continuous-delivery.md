# Continuous Delivery

We use GitHub Actions to run our CD pipelines. These workflows enable us to automatically publish versions of the app to Firebase App Distribution for internal testing, and to the App Store/Play Store for public release.

Most projects are setup with 2 workflows:

- `qa`, which compiles staging versions of the app and deploys them to [Firebase App Distribution](https://firebase.google.com/products/app-distribution)
- `production`, which compiles production versions of the app and delivers them to App Store Connect and Google Play
  - Note that this workflow does not automatically publish the new version; this should be done manually

Our repositories are all set up to run these workflows automatically using the following trigger scheme:

- When code is pushed to a `release/*` or `hotfix/*` branch, the `qa` workflow is triggered
- When code is pushed to `main`, the `production` workflow is triggered

Workflows can also be triggered manually at any time using the GitHub Actions UI.
