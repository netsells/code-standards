[&#x2190; Back](./)
# vue/html-indent

> Enforce 4 space continuous indentation

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <div>
        <my-component
            :foo="bar"
            :abc="xyz"
        </my-component>
    </div>
</template>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <div>
        <my-component
            :foo="bar"
            :abc="xyz">
    </my-component>
</div>
</template>
```

</div>

 
</code-highlight>

