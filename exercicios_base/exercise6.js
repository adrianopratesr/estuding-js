// Escreva um código que verifica a idade de uma pessoa e imprime se ela pode dirigir. Se a idade for maior ou igual a 18, imprima "Você pode dirigir". Caso contrário, imprima "Você não pode dirigir".
let a = 20;

const verificarIdade = (value) => {
  if (value >= 18) {
    return "Você pode dirigir";
  } else {
    return "Você não pode dirigir";
  }
};

console.log(verificarIdade(a));
