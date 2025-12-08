const uniqueNames = (names) => {
  list = {}
  let name;
  const arr = []
  for (let i = 0; i < names.length; i++) {
    name = names[i].toLowerCase();
    if (list[name]) {
      continue;
    } else {
      list[name] = 1;
      const index = names.indexOf(names[i]);
      arr.push(index);
    }
  }
  for (let n = 0; n < arr.length; n++) {
    arr[n] = names[arr[n]];
  }
  return arr
}

console.log(uniqueNames(["Maya", "Carlos", "maya", "sarah", "CARLOS"]));
// ["Maya", "Carlos", "sarah"]

console.log(uniqueNames(["ALEX", "Alex", "alex", "AlEx"]));
// ["ALEX"]