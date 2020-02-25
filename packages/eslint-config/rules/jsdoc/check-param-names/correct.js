/**
 *
 */
function quux1 (foo) {

}

/**
 * @param foo
 */
function quux2 (foo) {

}

/**
 * @param foo
 * @param bar
 */
function quux3 (foo, bar) {

}

/**
 * @param foo
 * @param bar
 */
function quux4 (foo, bar, baz) {

}

/**
 * @param foo
 * @param foo.foo
 * @param bar
 */
function quux5 (foo, bar) {

}

/**
 * @param args
 */
function quux6 (...args) {

}

/**
 * @param foo
 */
function quux7 ({a, b}) {

}

/**
 * @param foo
 * @param foo.bar
 * @param foo.baz
 * @param bar
 */
function quux8 (foo, bar) {

}

/**
 * @param args
 */
function quux9 ({a, b} = {}) {

}

/**
 * @param foo
 */
function quux10 ([a, b] = []) {

}

/**
 * Assign the project to a list of employees.
 * @param {object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
function assign (employees) {

};

export class SomeClass {
    /**
     * @param property
     */
    constructor(property) {}
}

/**
 * @param {Error} error Exit code
 * @param {number} [code = 1] Exit code
 */
function quux11 (error, code = 1) {
};
