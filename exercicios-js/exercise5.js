//Faça um programa que leia o valor de um produto e imprimir o valor corrigido com o reajuste de 33.33%.
let product = 100;
let readjustmentTax = 1.3333;
const readjustment = (product, readjustmentTax) => {
  return (product = (product * readjustmentTax).toFixed(2));
};

console.log(
  `O produto que custa R$${product}, se for reajustado em 33,33% passará a custar R$${readjustment(
    product,
    readjustmentTax
  )}`
);
