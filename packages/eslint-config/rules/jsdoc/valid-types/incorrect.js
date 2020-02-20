/**
 * @param {Array<string} foo
 */
function quux1() {

}
// Message: Syntax error in type: Array<string

/**
 * @memberof module:namespace.SomeClass<~
 */
function quux2() {

}
// Message: Syntax error in namepath: module:namespace.SomeClass<~

/**
 * @memberof module:namespace.SomeClass~<
 */
function quux3() {

}
// Message: Syntax error in namepath: module:namespace.SomeClass~<

/**
 * @borrows foo% as bar
 */
function quux4() {

}
// Message: Syntax error in namepath: foo%

/**
 * @borrows #foo as bar
 */
function quux5() {

}
// Message: Syntax error in namepath: #foo

/**
 * @borrows foo as bar%
 */
function quux6() {

}
// Message: Syntax error in namepath: bar%

/**
 * @borrows foo
 */
function quux7() {

}
// Message: @borrows must have an "as" expression. Found ""
