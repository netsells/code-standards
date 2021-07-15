# Codesigning

For the iOS component of Flutter apps, we use [Fastlane Match](https://docs.fastlane.tools/actions/match/) to manage signing certificates and provisioning profiles.

Our [project templates](https://github.com/netsells/flutter_templates) are set up for this out-of-the-box, but below is a reference Matchfile. This should be added to the `ios` directory of your project.

```ruby
git_url("git@github.com:netsells/mobile-certificates")

storage_mode("git")

type("development")

app_identifier(["com.netsells.appId"]) # TODO: Add actual app identifier
git_branch("appName") # TODO: Add name of git branch in the mobile certificates repo
team_id("") # TODO: Add Apple Developer Team ID
```

To sync and update certificates and provisioning profiles, run these commands in your project's `ios` directory:

```shell
$ fastlane match development -u example.user@netsells.co.uk
$ fastlane match adhoc -u example.user@netsells.co.uk
$ fastlane match appstore -u example.user@netsells.co.uk
```
