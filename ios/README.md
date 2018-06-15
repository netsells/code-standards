# iOS

This section contains the standard best practices we follow on new iOS projects.

## Minimum supported versions
It is impossible to support every version of iOS. As a standard we support current major version - 2.

This means, if the current version is iOS 11, we support iOS 9 unless the project requires any specific functionality which is only included in later versions of iOS. 

### Crossover
If a project is started and is likely to still be in active development when a new major version of IOS is released, take this into consideration. E.G if iOS 12 is likely to be released while the project is still in development, bump the minimum version upto iOS 10

## Dependency management
We use cocoapods for our dependancy management tool.
