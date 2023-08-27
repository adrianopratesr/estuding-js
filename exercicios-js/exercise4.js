// Faça um programa que leia um valor e imprima o saldo com reajuste de 1%.
const value = 100;
const tax = 1.01;

const readjustment = (value, tax) => {
  return value * tax;
};

console.log(
  `O valor de R$${value} reajustado em 1% é equivalente a R$${readjustment(
    value,
    tax
  )}`
);
