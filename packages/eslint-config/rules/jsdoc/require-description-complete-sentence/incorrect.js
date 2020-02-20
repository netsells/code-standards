/**
 * foo.
 */
function quux1 () {

}
// Message: Sentence should start with an uppercase character.

/**
 * foo?
 */
function quux2 () {

}
// Message: Sentence should start with an uppercase character.

/**
 * @description foo.
 */
function quux3 () {

}
// Message: Sentence should start with an uppercase character.

/**
 * Foo)
 */
function quux4 () {

}
// Message: Sentence must end with a period.

/**
 * `foo` is a variable
 */
function quux5 () {

}
// Message: Sentence must end with a period.

/**
 * Foo.
 *
 * foo.
 */
function quux6 () {

}
// Message: Sentence should start with an uppercase character.

/**
 * тест.
 */
function quux7 () {

}
// Message: Sentence should start with an uppercase character.

/**
 * Foo
 */
function quux8 () {

}
// Message: Sentence must end with a period.

/**
 * Foo
 * Bar.
 */
function quux9 () {

}
// Message: A line of text is started with an uppercase character, but preceding line does not end the sentence.

/**
 * Foo.
 *
 * @param foo foo.
 */
function quux10 (foo) {

}
// Message: Sentence should start with an uppercase character.

/**
 * Foo.
 *
 * @param foo bar
 */
function quux11 (foo) {

}
// Message: Sentence should start with an uppercase character.

/**
 * {@see Foo.bar} buz
 */
function quux12 (foo) {

}
// Message: Sentence should start with an uppercase character.

/**
 * Foo.
 *
 * @returns {number} foo
 */
function quux13 (foo) {

}
// Message: Sentence should start with an uppercase character.

/**
 * Foo.
 *
 * @returns foo.
 */
function quux14 (foo) {

}
// Message: Sentence should start with an uppercase character.

/**
 * lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque elit diam,
 * iaculis eu dignissim sed, ultrices sed nisi. nulla at ligula auctor, consectetur neque sed,
 * tincidunt nibh. vivamus sit amet vulputate ligula. vivamus interdum elementum nisl,
 * vitae rutrum tortor semper ut. morbi porta ante vitae dictum fermentum.
 * proin ut nulla at quam convallis gravida in id elit. sed dolor mauris, blandit quis ante at,
 * consequat auctor magna. duis pharetra purus in porttitor mollis.
 */
function longDescription (foo) {

}
// Message: Sentence should start with an uppercase character.
