# HTML

## Indentation 

All tags that end on a different line should indent their children by the standard indentation level (4 spaces).

## Alt tags

Images should always have an alt tag provided in order for our images to be accessible to visitors using screen readers. If the image is hatchly managed, you can access the image name from the model for example:

```html
<img src="{{ $image->public_url }}" alt="{{ $image->name }}">
```
