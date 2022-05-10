# APIs
The majority of APIs we build (and interact with) are in the **JSON format**.

# Responses
## Eloquent API Resources, Fractal or 🤔
There are various ways and packages which enable you to use a layer to transform/format your data before it is returned via your api - Transformers if you will...

### Eloquent - API Resources
Built directly into the core of Laravel, so no external packages are required. Can be used for both simple and complex APIs, does lack some more complex functionality such including nested data. 

[Documentation – Eloquent: API Resources](https://laravel.com/docs/5.8/eloquent-resources)

### Fractal
An external package maintained by The PHP League. Suitable for complex APIs - overkill for small APIs. Does require additional code to be added for instantiation ([spatie/laravel-fractal](https://github.com/spatie/laravel-fractal) adds this).

[Documentation - Fractal](https://fractal.thephpleague.com)

### GraphQL
🤯

## Namespaced Data
Data in responses should be namespaced under a `data` key. This allows for additional metadata, such as pagination to be returned alongside the response data.

<code-highlight>
<template v-slot:incorrect>

```json
[
  {
		"name": "John Doe"
	},
	{
		"name": "Sally Marshall"
	}
]
```

</template>
</code-highlight>

<code-highlight>
<template v-slot:correct>

```json
{
	"data": [
        {
			"name": "John Doe"
		},
		{
			"name": "Sally Marshall"
		}
	],
	"meta": {}
}
```

</template>
</code-highlight>

## Naming of Properties
Properties in responses must be named using `snake_case`.
