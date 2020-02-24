/**
  * @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc block to be aligned.

/**
  * @param {Number} foo
 */
function quux (foo) {
  // with tabs
}
// Message: Expected JSDoc block to be aligned.

/**
  * @param {Number} foo
 */
function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc block to be aligned.

/**
* @param {Number} foo
*/
function quux (foo) {
  // with spaces
}
// Message: Expected JSDoc block to be aligned.

/**
 * @param {Number} foo
  */
function quux (foo) {

}
// Message: Expected JSDoc block to be aligned.

 /**
 * @param {Number} foo
 */
function quux (foo) {

}
// Message: Expected JSDoc block to be aligned.

 /**
  * @param {Number} foo
 */
function quux (foo) {

}
// Message: Expected JSDoc block to be aligned.

/**
  * @param {Number} foo
  */
 function quux (foo) {

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