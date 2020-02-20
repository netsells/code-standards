/** @typoo {string} */
let a;
// Message: Invalid JSDoc tag name "typoo".

/**
 * @Param
 */
function quux1 () {

}
// Message: Invalid JSDoc tag name "Param".

/**
 * @foo
 */
function quux2 () {

}
// Message: Invalid JSDoc tag name "foo".

/**
 * @arg foo
 */
function quux3 (foo) {

}
// Message: Invalid JSDoc tag (preference). Replace "arg" JSDoc tag with "param".
