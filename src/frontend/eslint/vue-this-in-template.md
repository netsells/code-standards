[&#x2190; Back](./)
# vue/this-in-template

> Disallow using "this" in template form

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <div>{{ foo }}</div>
</template>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <div>{{ this.foo }}</div>
</template>
```

</div>

 
</code-highlight>

