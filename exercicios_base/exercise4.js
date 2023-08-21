// Escreva uma função que aceite uma string como parâmetro e retorne a mesma string, mas com a primeira letra em maiúscula.
const a = "adriano";

const capitalize = (value) => {
  return value[0].toUpperCase() + value.slice(1);
};

console.log(capitalize(a));
