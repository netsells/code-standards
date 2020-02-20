/**
 * @param {Number} foo
 */
function quux1 (foo) {
    // with spaces
}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux2 (foo) {
    // with tabs
}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux3 (foo) {
    // with spaces
}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux4 (foo) {
    // with spaces
}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux5 (foo) {

}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux6 (foo) {

}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux7 (foo) {

}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
 */
function quux8 (foo) {

}
// Message: Expected JSDoc block to be aligned.

/**
 * A jsdoc not attached to any node.
 */
    // Message: Expected JSDoc block to be aligned.

class Foo {
    /**
     *  Some method
     * @param a
     */
    quux(a) {}
}
// Message: Expected JSDoc block to be aligned.
