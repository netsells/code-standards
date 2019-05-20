# Hatchly

This section of documentation relates to the use of features within the Hatchly CMS platform developed by Netsells.

## Section and Attribute key casing

Section and attribute keys should always be lowercase and should follow the snake_case pattern. This makes it consistent with other object values, and allows consistent behaviour with when accessed from the page model (`$page->attribute`), via the `hatchly-pages-api` endpoint and when passing directly into javascript.

## Keeping Sections DRY

If your templates share common template sections, it's important to remember to keep the code DRY and extract this code to a commonly accessible location. To do so you can simply create a class which extends the `Hatchly\Pages\Attributes\Section` class. For example:

<spoiler>

```php
<?php

namespace App\Http\Templates\Sections;

use Hatchly\Pages\Attributes\Section;
use Hatchly\Pages\Attributes\Attribute;

class BannerSection extends Section
{
    public function __construct()
    {
        parent::__construct('banner', [
            'title' => 'Banner',
            'attributes' => [
                'background' => new Attribute([
                    'title' => 'Background',
                ], 'image'),
                'content' => new Attribute([
                    'title' => 'Content',
                ], 'wysiwyg'),
            ],
        ]);
    }
}
```

</spoiler>

This should then be used within the template file as you would a normal section class.

<spoiler>

```php
<?php

namespace App\Http\Templates\Frontend\System;

use App\Http\Templates\Sections\BannerSection;
use Hatchly\Pages\Templates\PageTemplate;

class Homepage extends PageTemplate
{
    public function getSections()
    {
        return [
            new BannerSection,
            new Section('content', [
                'title'      => 'Content',
                'attributes' => [
                    ...
                ],
            ]),
        ];
    }
}
```

</spoiler>

