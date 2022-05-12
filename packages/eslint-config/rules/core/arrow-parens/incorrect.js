a => {};
a => a;
a => { '\n' };
a.then(foo => {});
a.then(foo => a);
a(foo => { if (true) {} });