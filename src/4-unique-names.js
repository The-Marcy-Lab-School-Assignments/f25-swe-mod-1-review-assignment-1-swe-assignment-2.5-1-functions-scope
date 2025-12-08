const uniqueNames = (names) => {
  names = [...names];

  for (let i = 0; i < names.length; i++) {
    for (let j = 1; j < names.length; j++) {}
  }
};

console.log(uniqueNames(["Maya", "Carlos", "maya", "sarah", "CARLOS"]));
// ["Maya", "Carlos", "sarah"]

console.log(uniqueNames(["ALEX", "Alex", "alex", "AlEx"]));
// ["ALEX"]
