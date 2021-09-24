# Bundler

## Getting Started With Bundler

We use bundler to ensure consistency with versions of tooling used by different developers.

To get started using bundler you should add a `Gemfile` to your project.

Below is an example Gemfile

```ruby
source "https://rubygems.org"

gem "fastlane", '~>2.181.0'
gem "cocoapods", '~>1.10.1'

plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
```

Once you have created and populated the file in your project's directory. You can simply run bundle install

## Using Bundler

Ensure you have run `bundle install` successfully

If you want to use Cocoapods or Fastlane, you simply need to prefix their commands with `bundle exec`

`pod install` becomes `bundle exec pod install`
