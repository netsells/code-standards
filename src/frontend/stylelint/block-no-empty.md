[&#x2190; Back](./)
# block-no-empty

> Disallow empty blocks.

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a {
    color: #ffffff;
}

@media print {
    a {
        color: #ffffff;
    }
}
```

</div>

 
<div slot="incorrect">

```css
a {

}

@media print {
    a {

    }
}
```

</div>

 
</code-highlight>

