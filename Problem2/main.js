const arr = [];
let sum = 0;
let evenNumbers = [];
let product = 1;

let userinput = prompt("Enter numbers separated by space").split(" ");

for (let i = 0; i < userinput.length; i++) {
  arr.push(parseInt(userinput[i]));
}

arr.forEach((e) => {
  if (e % 2 == 0) {
    evenNumbers.push(e);
    product *= e;
  } else if (e % 2 !== 0) {
    sum += e;
  }
});

let average = sum / (arr.length - evenNumbers.length);

let result = arr.join(" ");
let evenNumbersresult = evenNumbers.join(" ");

console.log(`Input values: ${result}`);
console.log("Output:");
console.log(`Even Numbers: ${evenNumbersresult}`);
console.log(`Average of odd numbers: ${average}`);
console.log(`product of all even numbers: ${product}`);
