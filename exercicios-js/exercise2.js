// Faça um programa para converter um certo valor em dólar para reais (ver cotação do dia).
const dolar = 10;
const DOLLAR_EXCHANGE = 4.96;

const convertFromUSDToBRL = (amount, DOLLAR_EXCHANGE) =>
  amount * DOLLAR_EXCHANGE;

console.log(
  `O valor de $${dolar} equivale a R$${convertFromUSDToBRL(
    dolar,
    DOLLAR_EXCHANGE
  )}`
);
