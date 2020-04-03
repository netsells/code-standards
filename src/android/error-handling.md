# Error Handling

Often, error handling amounts to catching exceptions in the UI and displaying the message. This works, but has some important drawbacks:

* Relies on the developer building the UI understanding which exceptions are possible, and which to handle.
* Couples the implementation of a data source to the implementation of the UI, reducing the maintainability of the project.
* Encourages developers to simply use `catch (e: Exception)`, which is bad practice

## Effective Error Handling

An effective error handling solution solves all of these problems by:

* Catching relevant exceptions early and propagating them to the UI in a way that is not specific to the data source implementation
* Not catching unexpected exceptions
    * *While this seems counter-intuitive, unexpected exceptions indicate something has gone horribly wrong, and often the safest thing to do here is to just kill the process*
* Make it easier for developers to handle failures than to ignore them

To this end, when handling errors, we use two concepts: `Either` and `Failure`.

### Failure

A `Failure` should represent an **expected** error. An example implementation of a `Failure` in Kotlin is:

```kotlin
/**
 * Represents an expected error.
 * @property message A human-readable error message which can be displayed in the UI
 * @property code An optional unique code which can be used to identify this type of error  
 */
data class Failure(val message: String, val code: Int? = null)
```

### Either

`Either` is a concept from functional programming. It's a construct which allows a value or variable to be one of two types.

A great implementation of `Either` can be found in the Arrow library for Kotlin. Instructions for adding this library to your project are [here](https://arrow-kt.io/docs/0.10/quickstart/setup/).

An example of `Either` in practice:

```kotlin
var either: Either<String, int> = Left("Hello")
either = Right(2)
```

### Bringing Failure and Either together to handle errors

Consider the following function:

```kotlin
@Throws(ArrayIndexOutOfBoundsException::class)
fun List<Int>.getAt(index: Int): Int {
	return this[index]
}
```

When calling this function, we could wrap the call site in a `try`/`catch` block and explicitly handle `ArrayIndexOutOfBoundsException`:

```kotlin
val list = listOf(1, 2, 3)
try {
    val item = list.getAt(3) // throws
    // ...
} catch (e: ArrayIndexOutOfBoundsException) {
    // Do some error handling
}
```

There are a few issues with this implementation:

* It relies on the developer using the function knowing that it could throw that type of exception
* It relies on the developer using the function remembering to catch the exception
* It relies on the developer writing an appropriate error message every time the exception occurs. If the function is used in multiple places this can introduce inconsistency
* It ties the use of the function to its implementation. If a new implementation for the function is created which could throw a different type of exception, all call sites will have to be updated to handle the new exception type


As an alternative, consider this implementation of the function:

```kotlin
fun List<Int>.getAt(index: Int): Either<Failure, Int> {
    try {
        return Right(this[index])
    } catch (e: ArrayIndexOutOfBoundsException) {
        return Left(Failure("There isn't anything at index ${index}"))
    }
}
```

Then, then call site looks like this:

```kotlin
val list = listOf(1, 2, 3)
val result = list.getAt(3)

result.fold(
    ifLeft = { f: Failure
        // Handle failure
    },
    ifRight = { item: Int
        // Handle success
    }
)
```

*For more documentation on the `Either` class, see the [Arrow Documentation](https://arrow-kt.io/docs/0.10/apidocs/arrow-core-data/arrow.core/-either/index.html).*


The advantages of this approach are:

* Developers calling the function are alerted to the fact that it could return a `Failure`, and are therefore more likely to handle it
* The same error message is provided every time the `ArrayIndexOutOfBoundsException` occurs, increasing consistency
* Removes the coupling between the function's implementation and its call sites, allowing the implementation to change (and possibly handle different exceptions) without the call sites being modified.

## In a Clean Architecture Project

A datasource using Retrofit has the potential to return either a `Response`, which may be a successful or unsuccessful response, or throw an `IOException`.

When calling a Retrofit data source in a `Repository` implementation, the methods should return `Either<Failure, T>`, where `T` is the type of a successful response.

In the event of an `IOException` or an unsuccessful response, the repository method should return `Left<Failure>`. Otherwise, return `Right<T>`.

For example, here's a data source:

```kotlin
interface NumberTriviaDataSource {
    @GET("random")
    suspend fun getRandomNumberTrivia() : NumberTrivia
}
```

And here's a repository implementation that uses the data source:

```kotlin
class DefaultNumberTriviaRepository(
    private val dataSource: NumberTriviaDataSource
) {
    suspend fun getRandomNumberTrivia() : Either<Failure, NumberTrivia> {
        return try {
            Right(dataSource.getRandomNumberTrivia())
        } catch (e: HttpException) {
            // Unsuccessful response
            Left(e.message())
        } catch (e: IOException) {
            // Other network-related exception
            Left(e.localizedMessage)
        }
    }
}
```

It may be useful to add a utility function to your project so you can avoid having to write this out every time.

```kotlin
/**
 * Attempts to run the [block] and return [Right] with the result.
 *
 * Returns [Left] if [block] throws an [HttpException] or a [IOException].
 */
suspend fun <T> ioSafe(block: suspend () -> T): Either<Failure, T> {
    return try {
        Right(block())
    } catch (e: HttpException) {
        Left(Failure(e.message()))
    } catch (e: IOException) {
        Left(Failure(e.localizedMessage))
    }
}
```

Then the repository becomes:

```kotlin
class DefaultNumberTriviaRepository(
    private val dataSource: NumberTriviaDataSource
) {
    suspend fun getRandomNumberTrivia() : Either<Failure, NumberTrivia> {
        return ioSafe {
            dataSource.getRandomNumberTrivia()
        }
    }
}
```