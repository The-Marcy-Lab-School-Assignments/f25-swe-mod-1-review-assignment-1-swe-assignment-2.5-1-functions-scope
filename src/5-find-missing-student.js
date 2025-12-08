const findMissingStudent = (yesterday, today) => {
  const notAttend = [];
  const names = [];
  for (let i = 0; i < yesterday.length; i++) {
    if (today.includes(yesterday[i])) {
      notAttend.push(true);
    } else {
      notAttend.push(false)
      names.push(yesterday[i])
    }
  }
  if (notAttend.includes(false)) {
    return names.join();
  } else {
    return ""
  }
}

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