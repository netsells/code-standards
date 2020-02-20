/**
 *
 */
function quux1 (foo) {

}
// Message: Missing JSDoc @param "foo" declaration.

/**
 *
 */
function quux2 (foo, bar) {

}
// Message: Missing JSDoc @param "foo" declaration.

/**
 * @param foo
 */
function quux3 (foo, bar) {

}
// Message: Missing JSDoc @param "bar" declaration.

/**
 * @param bar
 */
function quux4 (foo, bar, baz) {

}
// Message: Missing JSDoc @param "foo" declaration.

/**
 * @param foo
 * @param bar
 */
function quux5 (foo, bar, baz) {

}
// Message: Missing JSDoc @param "baz" declaration.

/**
 * @param baz
 */
function quux6 (foo, bar, baz) {

}
// Message: Missing JSDoc @param "foo" declaration.
