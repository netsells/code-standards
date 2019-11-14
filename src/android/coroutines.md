# Coroutines

Use of Kotlin coroutines is strongly recommended for asynchronous tasks like network requests.

When invoking async tasks from the presentation layer, rather than using callbacks consider returning a `Job` from your use cases. Then the presentation layer can react to the result using `invokeOnCompletion`.