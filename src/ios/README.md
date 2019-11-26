# iOS

This section contains the standard best practices we follow on new iOS projects.

## Minimum supported versions
It is impossible to support every version of iOS. As a standard we support current major version - 2.

This means, if the current version is iOS 13, we support iOS 11 unless the project requires any specific functionality which is only included in later versions of iOS. 

## Dependency management
We use cocoapods for our dependancy management tool.

## CI
We use Bitrise for all of our CI needs. All new projects should be setup with Bitrise by default
