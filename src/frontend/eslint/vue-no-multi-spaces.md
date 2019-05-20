[&#x2190; Back](./)
# vue/no-multi-spaces

> Remove multiple spaces in a row between attributes which are not used for indentation

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<div
    class="foo"
    :style="bar"
/>
```

</div>

 
<div slot="incorrect">

```vue
<div     class="foo"
         :style="bar"         />
```

</div>

 
</code-highlight>

