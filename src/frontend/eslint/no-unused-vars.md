[&#x2190; Back](./)
# no-unused-vars

> Prevents leaving unused imports & vars in code

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <ol v-for="i in 5">
        <li>{{ i }}</li><!-- "i" is defined and used. -->
    </ol>
</template>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <ol v-for="i in 5"><!-- "i" is defined but never used. -->
        <li>item</li>
    </ol>
</template>
```

</div>

 
</code-highlight>

