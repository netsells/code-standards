foo(function(a) {
    return a;
});

foo(function() {
    return this.a;
}.bind(this));
