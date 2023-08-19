// Faça um programa que leia um número, verifique se este número é positivo, negativo ou Zero. Se for negativo mostre a mensagem "Você digitou um numero negativo", Se for positivo mostre: "Você digitou um número positivo" e se for zero mostre: “Você digitou zero”.
let number = 0;
let numberTwo = -10;
let numberThree = 10;

const verifyNumber = (number) => {
  if (number > 0) {
    return "Você digitou um número positivo";
  } else if (number < 0) {
    return "Você digitou um número negativo";
  } else {
    return "Você digitou zero";
  }
};

console.log(verifyNumber(number));
console.log(verifyNumber(numberTwo));
console.log(verifyNumber(numberThree));
