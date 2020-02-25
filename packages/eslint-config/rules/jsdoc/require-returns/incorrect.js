/**
 *
 */
function quux1 (foo) {

    return foo;
}
// Message: Missing JSDoc @returns declaration.

/**
 *
 */
const foo1 = () => ({
    bar: 'baz'
})
// Message: Missing JSDoc @returns declaration.

/**
 *
 */
const foo2 = bar=>({ bar })
// Message: Missing JSDoc @returns declaration.

/**
 *
 */
const foo3 = bar => bar.baz()
// Message: Missing JSDoc @returns declaration.
