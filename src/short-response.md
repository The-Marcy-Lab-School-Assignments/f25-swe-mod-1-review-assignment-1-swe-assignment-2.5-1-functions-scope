# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Using the code block below, explain what it means for a function call to be an "expression that resolves/evaluates to a value."

```js
const double = (num) => {
  return num * 2;
}

const result = double(5);
```

In your response, make sure to cover the following details:
1. Explain what an "expression" is.
2. Explain how it is determined what value a function call will resolve/evaluate to.
3. Explain why function calls sometimes resolve/evaluate to `undefined`.

### Response 1

A **function** call is an "expression that resolves/evaluates to a value," because an **expression** is a method that gives a result based on the input given. When **invoked**, the value that is returned is determined by the expression and **variable** input. For example, the function takes the inputted number value and doubles said value. However, some functions, when invoked, will return undefined because some expressions will either change or be **modified**. 

---

## Prompt 2

Analyze the following code. Then, fill in the template below with the callstack and the values of all variables at the moment when the `getFirstLetter()` function has just been called *for the first time* but has NOT yet returned.

```js
const buildProfile = (firstName, lastName, age) => {
  const fullName = createFullName(firstName, lastName);
  const initials = extractInitials(firstName, lastName);
  const bio = `${fullName} (${initials}) - Age: ${age}`;
  return bio;
}

const createFullName = (first, last) => {
  const fullName = first + " " + last;
  return fullName;
}

const extractInitials = (first, last) => {
  const firstInitial = getFirstLetter(first); // <--- we're in this function call
  const lastInitial = getFirstLetter(last);
  return firstInitial + lastInitial;
}

const getFirstLetter = (name) => {
  // ***draw the callstack at this moment before the return***
  return name[0].toUpperCase();
}

const userProfile = buildProfile("reuben", "ogbonna", 24);
console.log(userProfile); // reuben ogbonna (RO) - Age: 24
```

**Your response should include:**

1. A diagram of the callstack showing all functions currently executing (most recent calls at the top)
2. All variables in each scope with their current values
   - Use `waiting` for variables waiting to receive a value from a function call
   - Use `undefined` for variables not yet assigned a value

### Response 2

```
Callstack: (recent calls at the top)
---------------------------
[userProfile]
[createFullName]
[extractInitials]
[getFirstLetter]


Variables by Scope:
---------------------------
Global Scope:
- buildProfile = firstName, lastName, age
- createFullName = firstName, lastName
- extractInitials = firstName, lastName
- getFirstLetter = name
- userProfile = firstName, lastName, age

buildProfile() scope:
- firstName = waiting
- lastName = waiting
- age = waiting
- fullName = undefined
- initials = undefined
- bio = undefined

createFullName() scope:
- (first, last)

extractInitials() scope:
- first = waiting
- last = waiting
- firstInitial = undefined
- lastInitial = undefined

getFirstLetter() scope:
- name = waiting
```

---

## Prompt 3

These two code snippets look similar but behave differently. Explain what each one prints and WHY they produce different results. Use the proper scope terminology in your explanation. Feel free to run these code blocks.

Example A:

```js
let count = 0;

const incrementA = () => {
  count = count + 1;
}

incrementA();
console.log(count);
```

Example B

```js
let count = 0;

const incrementB = () => {
  let count = 0;
  count = count + 1;
}

incrementB();
console.log(count);
```

### Response 3

The two code snippets behave differently because of **data priority**. In example A, the function `incrementA()` increases the **count** by 1 when invoked. In example B, the function `incrementB()` is invoked increases the count within the function by 1; the reason why it that a function takes the **variable** the most closest to its **scope**, which is the variable in the function and not the one outside of the function.  

---

## Prompt 4

You need to remove a student's name from an array of enrolled students. Your coworker suggests two approaches:

```js
// Approach A:
const index = students.indexOf(nameToRemove);
students.splice(index, 1);

// Approach B:
const newStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i] !== nameToRemove) {
    newStudents.push(students[i]);
  }
}
```

Which approach would you choose and why? In your answer, identify at least one potential bug and explain the tradeoff between these approaches.

### Response 4

I believe the best approach is A because the code is **easy to use**, the method `indexOf()` gives me the placement of the student I want to remove, and `splice()` allows me to remove a student by inputting the **index** of the student's position. The only problem, however, is if I input a **name** that isn’t in the list of students, the index value would be **-1**, causing the `splice()` method would go in **reverse**, removing a different student.

---

## Prompt 5

Label the basic array methods below with a 1-sentence description of what they do. Indicate with `(mutating)` or `(non-mutating)` whether or not the method directly mutates the array

### Response 5

- `push(value)` - The method mutates an array by **placing** a value at the end of the array.
- `pop()` - The method mutates an array by **removing** the **last** value of the array.
- `shift()` - The method mutates an array by removing the **first** value of the array.
- `unshift(value)` - The method mutates an array by **adding** the first value of an array.
- `splice(index, deleteCount)` - The method mutates an array by either **removing, replacing, or adding** a value based on the **starting index** and **delete count**.
- `slice(start, end)` - The method does not mutate an array. It makes a **new array** by taking values from a **start** index and an **end** index.
