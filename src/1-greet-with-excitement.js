const createGreeting = (name) => {
  // Your code here
  return `Hello, ${name}`;
};

const addExcitement = (message) => {
  // Your code here
  return `${message}!!`;
};

const greetWithExcitement = (name) => {
  // Your code here - use the two functions above
  return `${createGreeting(name)}${addExcitement(``)}`;
};

console.log(createGreeting("Alex")); // Should print: "Hello, Alex"
console.log(addExcitement("Alex")); // Should print: "Alex!!"
console.log(greetWithExcitement("Alex")); // Should print: "Hello, Alex!!"
