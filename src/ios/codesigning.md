# Codesigning

For iOS apps, we use [Fastlane Match](https://docs.fastlane.tools/actions/match/) to manage signing certificates and provisioning profiles.

For each project we should create a new certificates repo that matches the main code repo naming conventions. e.g `my-project-certificates`

This means that should the project ever need to be transferred or outsource engineers added to the repo, we don't have to expose all other projects certificates and profiles.

```ruby
git_url("{ URL of the certificates repo }")

storage_mode("git")

type("development")

app_identifier(["com.netsells.appId"]) # TODO: Add actual app identifier
team_id("") # TODO: Add Apple Developer Team ID
```

To sync and update certificates and provisioning profiles, run these commands in your project's directory:

```shell
$ bundle exec fastlane match development -u example.user@netsells.co.uk
$ bundle exec fastlane match adhoc -u example.user@netsells.co.uk
$ bundle exec fastlane match appstore -u example.user@netsells.co.uk
```
