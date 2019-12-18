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
