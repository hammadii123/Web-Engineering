// 1)))
let nums = [];
for (let i = 1; i <= 20; i++) {
    nums.push(i);
}
console.log("Numbers from 1 to 20:", nums);

// 2))
let squares = nums.map(n => n * n);
console.log("Squares of numbers:", squares);

// 3))
let evens = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);


// 4))
let product = nums.reduce((total, current) => total * current, 1);
console.log("Product of all numbers:", product);


// 5))

let hasNumberGreaterThan10 = nums.some(n => n > 10);
let allLessThan100 = nums.every(n => n < 100);

console.log("Has number > 10?", hasNumberGreaterThan10);
console.log("Are all numbers < 100?", allLessThan100);
