function foo () {
    // do nothing.
}

let foo = function () {
    // any clear comments.
};

let foo = () => {
    bar();
};

let obj = {
    foo: function () {
        // do nothing.
    },

    foo () {
        // do nothing.
    },
};

class A {
    constructor () {
        // do nothing.
    }

    foo () {
        // do nothing.
    }
}
