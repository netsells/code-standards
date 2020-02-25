/**
 * @returns Foo.
 */
function quux1 () {

    return foo;
}

/**
 *
 */
function quux2 () {
}

/**
 *
 */
function quux3 (bar) {
    bar.filter(baz => {
        return baz.corge();
    })
}

/**
 * @returns Array
 */
function quux4 (bar) {
    return bar.filter(baz => {
        return baz.corge();
    })
}
