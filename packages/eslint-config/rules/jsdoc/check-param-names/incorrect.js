/**
 * @param Foo
 */
function quux1 (foo = 'FOO') {

}
// Message: Expected @param names to be "foo". Got "Foo".

/**
 * @param Foo
 */
function quux2 (foo) {

}
// Message: Expected @param names to be "foo". Got "Foo".
