# Laravel

## Models
### Ordering
Our preferred ordering of items within a Laravel Model class is as follows:

- Traits
- Constants
- Laravel specific fields ($table, $guarded, $fillable etc)
- Public fields
- Private fields
- Relations
- Scopes
- Other Methods


## Routing

The following guidelines are applicable to Laravel's [Routing](http://laravel.com/docs/routing).

### Method definitions

Laravel provides a few differing ways to define routing within your application. When defining routes, explicit is the way to go - using Laravel magic 🧙‍♂️ like `resources` can make code difficult to understand.

<code-highlight>
<div slot="incorrect">

```php
Route::post(...);
Route::get(...);
Route::delete(...);
Route::resource(...);
$router->resource(...);
```

</div>
<div slot="correct">

```php
use Illuminate\Routing\Router;

$router = new Router();

$router->patch(...);
$router->post(...);
$router->get(...);
$router->delete(...);
```

</div>
</code-highlight>

### Parameter definitions
Routes require some parameters to be defined, such as the controller method, they also allow additioanl parameters such as a name to be defined. In true Laravel fashion, there are multiple ways to do this.

<code-highlight>
<div slot="incorrect">

```php
$router->get('profile', 'ProfileController@index')->name('profile');
```

</div>
<div slot="correct">

```php
$router->get('profile', [
    'uses' => 'ProfileController@index',
    'as' => 'profile',
]);
```

</div>
</code-highlight>

## Validation
Validation for request should be implemented by adding the validation rules to the `rules()` method on Request classes where possible - these help encapsulate validation and authorisation for the request. We discourage using `Validator::make()` unless it is absolutely necessary and Request classes can not be utilised.
