function foo () {
    // do nothing.
}

let bar = function () {
    // any clear comments.
};

let baz = () => {
    bar();
};

let quz = {
    foo: function () {
        // do nothing.
    },

    foo () {
        // do nothing.
    },
};

class FooClass {
    constructor () {
        // do nothing.
    }

    foo () {
        // do nothing.
    }
}
