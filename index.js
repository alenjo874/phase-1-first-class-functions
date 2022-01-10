function receivesAFunction(cb) {
  return cb("hello");
}

function returnsANamedFunction() {
  return function name() {
    "hello";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    "hello";
  };
}
