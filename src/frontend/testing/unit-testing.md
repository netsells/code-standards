# Unit Testing

Our unit test suites are primarily built on top of our storybook stories, as a lot of the setup leg work has already been done within this process, e.g. a default story, a story with a prop set, etc.

Tests should be written using [jest](https://jestjs.io/) .

Any non-component tests should follow the same format as below, but interact with [jest](https://jestjs.io/) directly.

## Packages

### Vue Storybook Test Utils

Link: [@netsells/vue-storybook-test-utils](https://github.com/netsells/vue-storybook-test-utils)

Most of your test composition and variants (e.g. props, slots) is already setup as part of storybook for use in component-first development and Visual Regression Testing process. It makes little sense to do this setup twice. This module allows you to pass your stories directly to the [@vue/test-utils](https://vue-test-utils.vuejs.org/) package and have the wrappers automatically generated with your provided props and story markup.

For further details and usage check out the module README.

## Format

### File Convention

Test files should be suffixed with `.spec.js` and should match the name of the file being tested. They should be placed alongside the source file in your application. For example, if we were to have a `TextInput.vue` component, our file structure would look something like so:

```
├─ TextInput/
│  ├─ TextInput.vue
│  ├─ TextInput.spec.js
│  └─ TextInput.stories.js
```

Doing so makes it easier to see where the tests are located for each part of your application.

### Test Structure

It’s recommended that you structure your tests similar to a UAT. For example, at the root level you would specify your component, and then you would nest your tests as if they were a written sentence. For example, take the following sentence:
 
> **On the TextInput component, when the `disabled` prop is passed, the input will become disabled.**

What we end up with are three pieces of information. 

* The <badge vertical="middle">entity</badge> being tested: `TextInput`
* The <badge vertical="middle">functionality</badge> being tested: the `disabled` prop being passed
* The desired <badge vertical="middle">outcome</badge>: the input will become disabled

Given, this information we can structure our test like so:

```js
describe('TextInput', () => { // the entity
    describe('when the `disabled` prop is provided', () => { // the functionality
        test('the input is disabled', () => { // the outcome
            // Run tests to satisfy the UAT
        });
    });
});
```

The idea behind this format is to avoid cases where you might have a test named `updates data appropriately`. What does “appropriately” mean? If a new developer were to modify this component and update the test in future would they know what the individual requirements of the component are?

Eventually you will end up with a complete, living UAT document within the codebase.

### Fixtures

When testing against data, rather than hardcoding your data within your test, it's better to move this data to a `fixture`. A fixture is an immutable dataset that your tests are based on to mimic real data. For instance if you have a component which takes data from an endpoint and populates a users table, you might have a `users.json` fixture with your static data. You would then pull this into your test instead.

Fixtures should be placed in `<root>/tests/fixtures/`. 

::: warning
It's important that your fixture remains immutable as to not introduce any essence of unpredictability into your tests
:::
