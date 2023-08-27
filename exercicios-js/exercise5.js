//Faça um programa que leia o valor de um produto e imprimir o valor corrigido com o reajuste de 33.33%.
const amount = 100;
const TAX = 1.3333;
const readjustment = (product, readjustmentrate) => {
  return (product * readjustmentrate).toFixed(2);
};

console.log(
  `O produto que custa R$${amount}, se for reajustado em 33,33% passará a custar R$${readjustment(
    amount,
    TAX
  )}`
);
