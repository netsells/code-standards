/**
 * Desc
 *
 * @param {Number} foo
 */
function quux1 (foo) {

}

/**
 * Desc
 *
 * @param {{
  foo: Bar,
  bar: Baz
 * }} foo
 *
 */
function quux2 (foo) {

}

/*  <- JSDoc must start with 2 stars.
 *    So this is unchecked.
 */
function quux3 (foo) {}
