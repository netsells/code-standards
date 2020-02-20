/**
 * @param {number} foo
 * @param {Bar} bar
 * @param {*} baz
 */
function quux1 (foo, bar, baz) {

}

/**
 * @arg {number} foo
 * @arg {Bar} bar
 * @arg {*} baz
 */
function quux2 (foo, bar, baz) {

}

/**
 * @param {(number|string|boolean)=} foo
 */
function quux3 (foo, bar, baz) {

}

/**
 * @param {typeof bar} foo
 */
function qux1(foo) {
}

/**
 * @param {import('./foo').bar.baz} foo
 */
function qux2(foo) {
}

/**
 * @param {(x: number, y: string) => string} foo
 */
function qux3(foo) {
}

/**
 * @param {() => string} foo
 */
function qux4(foo) {
}
