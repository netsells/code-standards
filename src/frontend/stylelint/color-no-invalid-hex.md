[&#x2190; Back](./)
# color-no-invalid-hex

> Disallow invalid hex colors.

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a { 
    color: #000000; 
}

a { 
    color: #fff1a0; 
}

a { 
    color: #123450aa; 
}
```

</div>

 
<div slot="incorrect">

```css
a { 
    color: #00; 
}

a {
    color: #fff1az; 
}

a { 
    color: #12345aa; 
}
```

</div>

 
</code-highlight>

