// Faça um programa que leia um valor e imprima o saldo com reajuste de 1%.
let value = 100;

const readjustment = (value) => {
  return (value = value * 1.01);
};

console.log(
  `O valor de R$${value} reajustado em 1% é equivalente a R$${readjustment(
    value
  )}`
);
