[&#x2190; Back](./)
# vue/key-spacing

> Enforce consistent spacing between keys and values in object literal properties
 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<template>
    <div :class="{ active: isActive }"></div>
</template>
```

</div>

 
<div slot="incorrect">

```vue
<template>
    <div :class="{ active : isActive }"></div>
    <div :class="{ active :isActive }"></div>
</template>
```

</div>

 
</code-highlight>

