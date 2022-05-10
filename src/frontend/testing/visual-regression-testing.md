# Visual regression testing

## What is Visual Regression Testing?

Regression testing, in general, is validating that the changes we introduce to our source code do not have an unexpected impact on our system. With visual regression tests we are aiming for the same goal, but we are more concerned about the *interface* that is being *presented* *to our* *final user* rather than how functional our system is.

At the end of the day, what is important is what our user is seeing and what it is interacting with. Essentially, Visual Regression Tests (or VRT for short) allows us to understand the changes that will be perceived by our users through /screenshots/and content comparison between those images.

Using automation we're able to see what changed and where, BEFORE the code reaches production.

Having these tests alongside our Unit Tests give us confidence that any change to our codebase won’t have any unintended consequences in either our logic or our design.

## How we use it

Developing in a component first manner using storybook.js as our base, we are able to build up a library of “stories” that define our various application states at the component level. Having this as a base level allows us to utilise automated processes of generating our Visual Regression Tests.

The automation happens as part of the various workflows in our Github Actions pipeline. Using this we can generate our screens, run the comparison and output this into the Pull Requests themselves as part of our Peer Review process, allowing us to sign off both the code and visual aspects of the change.

## Guidelines

### Test your states

If the component can take various props and slots which change the visual display of your component, each of these states and combinations should be reasonably documented as stories.

By “reasonably” we mean if for example you have a prop that can change the border colour, you wouldn't need to test every combination of other props with each border colour selected.

### Test your viewports

We develop responsively, so our components should also be responsive. By default, we have our projects set up based on the bootstrap container sizes which should cover most instances, but if you have components that is used at different sizes it may be worth also accounting for these.

### Test only the viewports you need

If you have a mobile menu for example, this doesn't need to be tested at each viewport as it's not visible on desktop screens, so you may only want to visually test it at mobile portrait and mobile landscape sizes.

### Take the component out of its original context

It’s important to build your components as standalone items. This means not making any assumptions around usage and placement in your app. For example, a component shouldn’t have any margins or positioning styles on the top-level element for it to be spaced appropriately in your page. Your page should instead apply the css rules to enable this spacing.

Doing so will mean that your component, by default, will be even more reusable.
