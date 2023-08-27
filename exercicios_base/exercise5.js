// Escreva um código que verifica se uma pessoa está acima do peso, com base no IMC. Se o IMC for maior que 25, imprima "Você está acima do peso".
const weight = 60;
const height = 1.5;

const calculateIMC = (weight, height) => {
  return weight / (height * height);
};

const formatIMC = (imc) => {
  if (imc <= 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.6 && imc <= 24.9) {
    return "Peso ideal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Você está acima do peso";
  } else {
    return "Obesidade";
  }
};

console.log(formatIMC(calculateIMC(weight, height)));
