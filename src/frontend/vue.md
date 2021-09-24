# Vue

## Linting

We make use of an automated approach of enforcing most JavaScript code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

See [netsells/eslint-config-netsells](https://github.com/netsells/eslint-config-netsells)

## Spacing between SFC tags

The tags that make up Single File Components (`<template>`/`<script>`/`<style>` should be separated by a single blank line in order to make it easier to distinguish between the different tags.

<spoiler toggle-suffix="Examples">

<code-highlight>
<template v-slot:incorrect>

```html
<template>
   ...
</template>
<script>
   ...
</script>
<style>
   ...
</style>
```

</template>
<template v-slot:correct>

```html
<template>
   ...
</template>

<script>
   ...
</script>

<style>
   ...
</style>
```

</template>
</code-highlight>

</spoiler>
