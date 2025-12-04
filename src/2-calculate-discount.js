/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.

<Your analysis goes here>

*/
const calculateDiscount = (price) => {
  if (price > 100) {
    const discountRate = 0.1;
  } else {
    const discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
