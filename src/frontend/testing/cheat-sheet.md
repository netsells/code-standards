# Cheatsheet

## Dynamic classes are applied correctly

```js
test('the active class is not applied', () => {
    expect(myComponent().classes('active'))
        .toBeTruthy();
});

describe('when the button is clicked', () => {
    beforeEach(async () => {
        await button().trigger('click');
    });
    
    test('the active class is applied', () => {
        expect(myComponent().classes('active'))
            .toBeFalsy();
    });
});
```

## Test that a component renders

### A component renders by default

```js
test('MyComponent exists', () => {
  expect(myComponent().exists())
      .toBeTruthy();
});
```

### A component renders when an action takes place

```js
test('MyComponent is not rendered by default', () => {
    expect(myComponent().exists())
        .toBeFalsy();
});

describe('when the button is clicked', () => {
    beforeEach(async () => {
        await button().trigger('click');
    });
    
    test('MyComponent is rendered', () => {
        expect(myComponent().exists())
            .toBeTruthy();
    });
});
```

### Test that a component receives the correct props

```js
test('MyComponent is passed the type', () => {
    expect(myComponent().props('type'))
        .toBe('organisation');
});
```

## Testing component events

### When a component emits an event it is handled appropriately

```js
describe('when MyComponent emits the success event', () => {
    beforeEach(() => {
        myComponent().vm.$emit('success');
    });

    test('MyComponent is passed the type', () => {
        expect(myComponent().props('type'))
            .toBe('organisation');
    });
});
```

## Testing store actions/mutations

### An action/mutation is called

### An action/mutation is called with the right data

### Mocking the response of an action/mutation

### Delaying the response of an action/mutation

### Mocking an error response of an action



