/**
 * @returns
 */
function quux1 (foo) {

}
// Message: JSDoc @returns declaration present but return expression not available in function.

/**
 * @returns
 */
const quux2 = () => {}
// Message: JSDoc @returns declaration present but return expression not available in function.

/**
 * @returns {undefined} Foo.
 * @returns {String} Foo.
 */
function quux3 () {

    return foo;
}
// Message: Found more than one @returns declaration.

const language = {
    /**
     * @param {string} name
     * @returns {string}
     */
    get name() {
        this._name = name;
    }
}
// Message: JSDoc @returns declaration present but return expression not available in function.

class Foo {
    /**
     * @returns {string}
     */
    bar () {
    }
}
// Message: JSDoc @returns declaration present but return expression not available in function.

/**
 * @returns {string}
 */
function f () {
    function g() {
        return 'foo'
    }

    () => {
        return 5
    }
}
// Message: JSDoc @returns declaration present but return expression not available in function.
