const createGreeting = (name) => {
  return `Hello, ${name}`;
}

const addExcitement = (message) => {
  return `${message}!!`;
}

const greetWithExcitement = (name) => {
  return addExcitement(createGreeting(name));
}

console.log(greetWithExcitement("Alex")); // Should print: "Hello, Alex!!"
