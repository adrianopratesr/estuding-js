//Verifique se um número é par ou ímpar
let number = 10;
let numberTwo = 15;

const verifyNumberEvenOrOdd = (number) => {
  if (number % 2 == 0) {
    return "O número é par";
  } else {
    return "O número é ímpar";
  }
};

console.log(verifyNumberEvenOrOdd(number));
console.log(verifyNumberEvenOrOdd(numberTwo));
