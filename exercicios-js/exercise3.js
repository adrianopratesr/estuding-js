// Faça um programa para converter um certo valor em reais para dólares (ver cotação do dia).
const amount = 100;
const DOLLAR_EXCHANGE = 4.96;

const convertFromBRLtoUSD = (brl, DOLLAR_EXCHANGE) => {
  return (brl / DOLLAR_EXCHANGE).toFixed(2);
};

console.log(
  `O valor de R$${amount} é o equivale a $${convertFromBRLtoUSD(
    amount,
    DOLLAR_EXCHANGE
  )}`
);
