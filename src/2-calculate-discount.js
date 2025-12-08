/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.

<Your analysis goes here>

*/
const calculateDiscount = (price) => {
  let discontRate;
  if (price > 100) {
    discountRate = 0.1;
  } else {  // discontRate is within a if statement making the scope of the variable unable to be use outside of it.
    discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
