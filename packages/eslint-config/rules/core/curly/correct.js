(() => {
    if (foo) {
        return;
    }
});

while (bar) {
    baz();
}

if (foo) {
    baz();
} else {
    qux();
}
