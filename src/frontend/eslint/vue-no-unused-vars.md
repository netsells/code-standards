[&#x2190; Back](./)
# vue/no-unused-vars

> Disallow unused variable definitions of v-for directives or scope attributes

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <ol>
        <!-- "i" is defined and used. -->
        <li v-for="i in 5">{{ i }}</li>
    </ol>
</template>

```

</div>

 
<div slot="incorrect">

```vue
<template>
    <ol>
        <!-- "i" is defined but never used. -->
        <li v-for="i in 5">item</li>
    </ol>
</template>

```

</div>

 
</code-highlight>

