[&#x2190; Back](./)
# vue/v-on-function-call

> Enforce or forbid parentheses after method calls without arguments in ```v-on``` directives
 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <button @click="closeModal">
        Close
    </button>
    <button @click="closeModal(arg)">
        Close
    </button>
</template>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <button @click="closeModal()">
        Close
    </button>
</template>
```

</div>

 
</code-highlight>

