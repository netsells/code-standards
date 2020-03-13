# Storybook

We follow a Component-Driven Development principle, in which we built all projects bottom-up. This involves breaking down areas of the site into smaller components to make them much more reusable. To do this, we use Storybook.js as a development tool for providing a sandbox environment for developing components in isolation, outside of the context of our main application frame. This allows us to concentrate on building standalone components rather than building styling + functionality for each location it appears in.

::: warning
This section may change over time as our experience with Storybook evolves
:::

## Structure

Your file structure and generated Storybook "stories" should be formatted with the following named top-level categories at a minimum:

```
├─ stories
│  ├─ 0. Welcome
│  │  └─ Welcome.stories.js
│  │ 
│  ├─ 1. Typography
│  │  └─ Typography.stories.js
│  │ 
│  ├─ 2. UI
│  │  ├─ Forms
│  │  │  └─ Input.stories.js (for example)
│  │  │ 
│  │  └─ Buttons.stories.js (for example)
│  │ 
│  ├─ ... Other categories
``` 

## Addons

In order to ensure we are making the most of the storybook platform to build reliable and accessible stories, as well as ensuring they are documented thoroughly, we make use of a few addons by default.

### Knobs

The knobs addon allows you to give the user some controls to manipulate the state and content of your components. This should be used to document various variable states of your components.

### A11y

The a11y addon provides some integrated checks on your stories to ensure that our components meet a minimum level of accessibility criteria. This is usually a minimum of AA level. See our [accessibility](./frontend/accessibility) page for the more comprehensive guidelines we require.

### Viewport

The viewport addon provides you with a UI element to modify the active viewport of the component you're working on to ensure it looks acceptable at the main grid breakpoints in the application.

## Stories
Each story should be based on a single component. As such you should name the story after the component.  
```
├─ resources
│  ├─ components
│  │  ├─ HeaderBanner.vue
│  │  │  
│  
├─ stories
│  ├─ 1. Layout
│  │  └─ HeaderBanner.stories.js
│  │ 
``` 

### File structure

Stories should all follow the same file structure

```js
import ExampleComponent from '../../resources/components/ExampleComponent';

export const exampleComponent = () => ({
    components: {
        ExampleComponent,
    },
    
    template: `
        <example-component :prop="prop"/>
    `,
    
    props: {
        prop: {
            default: 'Lorem Ipsum',
        },
    },
});

exampleComponent.story = {
    name: 'default',
};

``` 
### Setting up a story live template on JetBrains IDEs

1. Open up your Preferences panel ( `cmd,` ) and navigate to the "Live Templates" section `Editor > Live Templates`. 
2. Click on the `JavaScript` section and then the `+` on the far right hand side and select `1. Live Template`
3. Set the abbreviation as `story` and the description and `Storybook story template` 
4. paste the following in to the section called `Template text`
```javascript
import $component$ from '../../resources/components/$componentDirectory$$component$';
$ContainerDecorator$

export const $componentName$ = () => ({
    components: {
        $component$,
    },
    
    template: `
        <$template$ :$prop$="$prop$"/>
    `,
    
    props: {
        $prop$: {
            default: $propDefault$,
        },
    },
});

$componentName$.story = {
    name: '$StoryName$',

    decorators: [$decorator$],
};

```

5. Next click on "Edit Variables" on the right hand side of the template block and fill in the table as follows: 
 
| Name | Expression | Default value | Skip if defined |
|---|---|---|---|
| component | capitalize(camelCase(substringBefore(fileNameWithoutExtension(),"."))) | | &#x2611; |
| componentDirectory | "Component Directory" | "directory/" | &#x2610; |
|containerDecorator | "Container Decorator" | "import ContainerDecorator from '../decorators/ContainerDecorator';" | &#x2610; |
| componentName | camelCase(substringBefore(fileNameWithoutExtension(),".")) | | &#x2611; |
| template | lowercaseAndDash(substringBefore(fileNameWithoutExtension(),".")) | | &#x2611; |
| prop | "Prop" | "prop" | &#x2610; |
| propDefault | "Prop Default" | "'Lorem ipsum'" | &#x2610; |
| storyName | "Story Name | "default" | &#x2610; |
| decorator | "Decorator | "ContainerDecorator" | &#x2610; |

6. Finally click on "Define" at the bottom of the modal and select &#x2610; Javascript and Typescript.

You are now able to use this template while creating stories. simply create a file e.g. `ExampleComponent.sotries.js` and type `story` then press `tab`. You can now fill in each of the variables we just set in the table above by typing then pressing `tab` to progress to the next one. 


