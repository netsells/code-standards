# General Guidelines

All points here here are general guidelines only - break them if you have a good reason (but only if you have a good reason).



## EF and DB

DB interaction should be through entity framework - only use custom sql / stored procedure etc. when absolutely necessary.

Use of automapper projections is strongly encouraged.

Db interaction should be contained in repository classes

Primary db interactions should be via ICommonRepository or equivalent.

Filtering should be done primarily through IEntityFilter implementations. Avoid complex filters - use IMultiPartFilter when possible.

Ordering should be done primarily through IEntity order implementations.

Avoid EF includes where possible - nothing outside the repository method which is accessing the db and the service directly cosuming it should assume any navigation properties are populated.


## Automapper

Automapper should be used for simple type mappings.

Mappings from db entities to model should take care to only use simple mappings so they can be executed in SQL by EF.

Do not put complex logic in automapper profiles - if you need a custom resolver or any services injected then use an explicit mapping service.


## Controllers and services

Business logic should be kept out of controllers. Controllers should only contain logic for interfacing between request and service actions.

Entity classes should not be used as request / result models - add a model with a mapping.



## Async

Where possible, all interactions with external services / dbs / filesystems etc. should be async.

Avoid using Task.Result or equivalents - use async / await.


## Request validation and exceptions

Where possible requests should be validated.

Use Fluent Validation.

Where practical validation should be separated from action logic and performed before any other actions.

Any caught exceptions should be logged. Don't swallow exceptions.

Don't add try catch blocks which then throw a generic exception e.g.:
``` csharp
try
{
	//Some stuff
}
catch 
{
	//Doing this loses the stack trace and all information about the actual error.
	throw new SomethingWentWrongException()
}
```

## Services and dependency Injection

Code should be logically divided into services, connected via interfaces using dependency injection.

All services should have a single purpose.

Services should usually only have a few external methods - services with lost of methods generally have too many responsibilities.

Each logical code area should have its own service registration extension.

Services should generally be registered as either scoped or transient. Be extremely careful registering anything as static scope.


## External interactions

Interaction with external API or other resources should be implemented behind a facade service. It's usually impractical to unit test these facade services.



## Unit Tests

Where practical, all code should be unit tested.

Unit test should be in their own project.

Each service should have a folder for its unit tests, named after the class e.g. MyClassTests.

Each public method in a service should have it's own test file named for the method e.g. GetTheDataTests.

Services with multiple public methods should have a test base class dealing with initialisation etc.

Unit test for filters and orders do not need a folder - they can have a single file named for the filter e.g. MyFilterTests.

Use Moq and FluentAssertions.
