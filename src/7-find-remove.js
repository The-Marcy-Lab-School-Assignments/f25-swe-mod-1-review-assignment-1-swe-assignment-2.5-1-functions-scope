/* 
Analyze the following code. Explain what happens when the function is called. Then, identify the bug and fix it.

<Your explanation goes here>
This function works perfectly fine when the target is actually something thats in the array. But grape isn't something in the array so index just becomes -1. Using the index -1 in the splice method will just make it so that 1 element gets removed from the end of the array no matter what it is.
*/
const findAndRemove = (arr, target) => {
  const index = arr.indexOf(target);
  if (index == -1) {
    return arr;
  }

  arr.splice(index, 1);
  return arr;
};

const items = ["apple", "banana", "orange"];
findAndRemove(items, "grape");
console.log(items); // This should print ["apple", "banana", "orange"]
