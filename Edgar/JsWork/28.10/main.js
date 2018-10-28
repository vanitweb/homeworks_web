function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments);
}

func1(1, 2, 3,"string", true);