/**
 * @returns Foo.
 */
function quux1 () {

    return foo;
}

/**
 * @returns {string} Foo.
 */
function quux2 () {

    return foo;
}

/**
 * @returns {string} Foo.
 */
function quux3 () {

    return foo;
}

/**
 *
 */
function quux4 () {
}

/**
 * @returns {*} Foo.
 */
const quux5 = () => foo;

/**
 * @returns {undefined} Foo.
 */
function quux6 () {}

/**
 * @returns { void } Foo.
 */
function quux7 () {}

/**
 * @returns {Promise<void>}
 */
async function quux8() {}

/**
 * @returns {Promise<void>}
 */
const quux9 = async function () {}

/**
 * @returns {Promise<void>}
 */
const quux10 = async () => {}

/**
 * @returns Foo.
 * @abstract
 */
function quux11 () {
    throw new Error('must be implemented by subclass!');
}

/**
 * @returns Foo.
 * @virtual
 */
function quux12 () {
    throw new Error('must be implemented by subclass!');
}

/**
 * @returns Foo.
 * @constructor
 */
function quux13 () {
}

/**
 * @interface
 */
class Foo {
    /**
     * @returns {string}
     */
    bar () {
    }
}

/**
 * @returns {undefined} Foo.
 */
function quux14 () {
}

/**
 * @returns {void} Foo.
 */
function quux15 () {
}

/**
 *
 */
function quux16 () {
    return undefined;
}

/**
 * @returns {true|undefined}
 */
function quux17 () {
    try {
        return true;
    } catch (err) {
    }
    return;
}
