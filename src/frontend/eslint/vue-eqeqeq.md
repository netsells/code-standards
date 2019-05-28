[&#x2190; Back](./)
# vue/eqeqeq

> Require the use of ```===``` and ```!==```
 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <div v-if="type === 'A'">
        A
    </div>
</template>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <div v-if="type == 'A'">
        A
    </div>
</template>
```

</div>

 
</code-highlight>

