# Continuous Delivery

We use [Bitrise](https://bitrise.io) to implement a continuous delivery system, which allows us to automatically compile and publish apps internally, to test users, and to the public.

Most projects are setup with 2 workflows:

- `qa`, which compiles staging versions of the app and deploys them to [Firebase App Distribution](https://firebase.google.com/products/app-distribution)
- `production`, which compiles production versions of the app and delivers them to App Store Connect and Google Play
  - Note that this workflow does not automatically publish the new version; this should be done manually

Our repositories are all set up to run these workflows automatically using the following trigger scheme:

- When code is pushed to a `release/*` or `hotfix/*` branch, the `qa` workflow is triggered
- When code is pushed to `master`, the `production` workflow is triggered

Workflows can also be triggered manually at any time using the Bitrise dashboard.
