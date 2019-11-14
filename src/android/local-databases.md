# Local Databases & Persistence

For local databases and persistence, use [Room](https://developer.android.com/topic/libraries/architecture/room).

The main database object should be stored in the `core/data/datasources` package, with individual DAOs stored in their respective feature's `data/datasources` package.