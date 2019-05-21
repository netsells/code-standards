[&#x2190; Back](./)
# vue/match-component-file-name

> Require component name property to match its file name
 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<!-- file name: src/MyComponent.vue -->
<script>
  export default {
    name: 'my-component',
    template: '<div />'
  }
</script>
```

</div>

 
<div slot="incorrect">

```vue
<!-- file name: src/MyComponent.vue -->
<script>
  export default {
    name: 'm-component',
    template: '<div />'
  }
</script>
```

</div>

 
</code-highlight>

