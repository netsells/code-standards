[&#x2190; Back](./)
# vue/no-duplicate-attributes

> When duplicate arguments exist, only the last one is valid

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<my-component
    class="bar"
    :class="{ foo: true }"
    abc="xyz"
></my-component>
```

</div>

 
<div slot="incorrect">

```vue
<my-component
    :foo="bar"
    foo="xyz"
></my-component>
```

</div>

 
</code-highlight>

