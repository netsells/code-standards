[&#x2190; Back](./)
# declaration-block-no-duplicate-properties

> Disallow duplicate properties within declaration blocks.
This rule ignores variables ($sass, @less, --custom-property).

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a { 
    color: #ffffff;
}
a { 
    color: #ffffff; 
    background: #000000;
}
```

</div>

 
<div slot="incorrect">

```css
a { 
    color: #FFFFFF;
    color: #000000; 
}
a { 
    color: #FFFFFF;
    background: #000000; 
    color: #000000;
}
```

</div>

 
</code-highlight>

