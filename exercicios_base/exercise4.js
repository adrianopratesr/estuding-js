// Escreva uma função que aceite uma string como parâmetro e retorne a mesma string, mas com a primeira letra em maiúscula.
let a = "adriano";

const formatString = (value) => {
  return value[0].toUpperCase() + value.slice(1);
};

console.log(formatString(a));
