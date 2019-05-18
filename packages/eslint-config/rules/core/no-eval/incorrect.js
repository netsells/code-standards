let obj = { x: 'foo' },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

let foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");

window.eval("var a = 0");

global.eval("var a = 0");
