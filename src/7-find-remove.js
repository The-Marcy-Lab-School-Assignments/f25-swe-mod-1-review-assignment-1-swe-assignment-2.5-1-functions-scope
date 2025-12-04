/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>

*/
const findAndRemove = (arr, target) => {
  const index = arr.indexOf(target);
  arr.splice(index, 1);
  return arr;
}

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
