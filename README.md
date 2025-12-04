# Functions and Scope, String and Array Manipulation

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
- [Coding Problems](#coding-problems)
  - [1 - greetWithExcitement](#1---greetwithexcitement)
  - [2 - calculateDiscount](#2---calculatediscount)
  - [3 - maskEmail](#3---maskemail)
  - [4 - uniqueNames](#4---uniquenames)
  - [5 - findMissingStudent](#5---findmissingstudent)
  - [6 - extractHashtags](#6---extracthashtags)
  - [7 - findAndRemove](#7---findandremove)

## Reminders

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests. 

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
git checkout -b draft   # switch to the draft branch before starting

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

When you are finished, create a pull request and tag your instructor for review.

## Short Response Questions

Short response questions can be found in the `src/short-response.md` file. Write your responses directly in that file! Do not forget to complete this part of the assignment.

## Coding Problems

There are NO tests for these coding problems. Solve these problems to the best of your ability and use the provided example usage code to test your work.

These problems will test your knowledge of functions and scope as well as array and string manipulation including:
- `indexOf()`
- `includes()`
- `split()`
- `join()`
- `toUpperCase()`
- `toLowerCase()`
- `trim()`
- Bracket notation

### 1 - greetWithExcitement

In the `1-greet-with-excitement.js` file, first write two functions:

- `createGreeting(name)` - returns a greeting string like `"Hello, [name]"`
- `addExcitement(message)` - takes a message and returns it with `"!!"` added to the end

Then write a third function `greetWithExcitement(name)` that uses both functions to create an excited greeting.

Example Usage:
```js
console.log(createGreeting("Alex")); // Should print: "Hello, Alex"
console.log(addExcitement("Alex")); // Should print: "Alex!!"
console.log(greetWithExcitement("Alex")); // Should print: "Hello, Alex!!"
```

### 2 - calculateDiscount

In the `2-calculate-discount.js` file, the function `calculateDiscount` is not working properly. Identify the bug and fix it. Then, in a comment, explain what the bug was using scope terminology.

### 3 - maskEmail

In the `3-mask-email.js` file, write a function `maskEmail(email)` that "masks" (hides) part of an email address for privacy.

Requirements:
- Show only first character before `@`
- Replace remaining characters before `@` with `***`
- Keep everything after `@` unchanged
- If there are 2 or fewer characters before `@`, don't do anything
- Remove excess whitespace (trim it)
- Return the masked email

Example Usage:
```js
console.log(maskEmail("maya.rodriguez@example.com"));
// "m***@example.com"

console.log(maskEmail("  abc@example.com"));
// "a***@example.com"

console.log(maskEmail("j@example.com"));
// "j@example.com" (too short to mask)
```

### 4 - uniqueNames

In the `4-unique-names.js` file, write a function `uniqueNames(names)` that takes in an array of names and returns a copy of the given array with duplicate names removed. Treat different uppercase/lowercase versions of names as the same name.

Requirements:

- Keep the first occurrence (with its original capitalization)
- Remove subsequent duplicates regardless of case
- Maintain original order
- Return a new array (don't mutate original)

Example Usage:
```js
console.log(uniqueNames(["Maya", "Carlos", "maya", "sarah", "CARLOS"]));
// ["Maya", "Carlos", "sarah"]

console.log(uniqueNames(["ALEX", "Alex", "alex", "AlEx"]));
// ["ALEX"]
```

### 5 - findMissingStudent

In the `5-find-missing-student.js` file, write a function called `findMissingStudent(yesterday, today)` that takes in two arrays of strings representing yesterday's attendance and today's. 

Return the name of the student who is missing today.

Requirements:
- Return the name of the missing student
- Return an empty string if no one is missing
- Arrays might be in different orders
- Assume that there will either be one student missing, or none

Example Usage:
```js
console.log(findMissingStudent(
  ["Maya", "Reuben", "Sarah", "James"],
  ["Maya", "Sarah", "James"]
));
// "Reuben"

console.log(findMissingStudent(
  ["Alex", "Jordan"],
  ["Jordan", "Alex"]
));
// "" (no one missing)
```

### 6 - extractHashtags

In the file `6-extract-hashtags.js`, write a function `extractHashtags(post)` that extracts all hashtags from a social media post.

Requirements:

- Find all words starting with `#`
- Return empty array if none found

Example Usage:
```js
console.log(extractHashtags("Love this #coding bootcamp! #javascript #WebDev"));
// ["#coding", "#javascript", "#WebDev"]

console.log(extractHashtags("No hashtags here"));
// []

console.log(extractHashtags("#First word #last-word and #middle123 word"));
// ["#First", "#last-word", "#middle123"]
```

### 7 - findAndRemove

In the file `7-find-remove.js` the function `findAndRemove` is not working properly. Explain what is happening, identify the bug, and then implement a fix.
