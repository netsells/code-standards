[&#x2190; Back](./)
# vue/no-textarea-mustache

> Disallows the use of mustaches within textareas

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<textarea v-model="message" />

```

</div>

 
<div slot="incorrect">

```vue
<textarea>{{ message }}</textarea>

```

</div>

 
</code-highlight>

