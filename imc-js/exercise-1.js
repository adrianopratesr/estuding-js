//a seguir um array de objetos com os dados
export const peoples = [
  {
    name: "Joao",
    weight: 120,
    height: 1.75,
  },
  {
    name: "Jose",
    weight: 150,
    height: 2.3,
  },
  {
    name: "Joaquina",
    weight: 45,
    height: 1.45,
  },
  {
    name: "Pedro",
    weight: 90,
    height: 1.7,
  },
  {
    name: "Jessica",
    weight: 90,
    height: 1.85,
  },
  {
    name: "Bianca",
    weight: 160,
    height: 1.5,
  },
];

//esta função realiza o calculo do IMC
export function calculateIMC(weight, height) {
  return weight / (height * height);
}

//esta função realiza a comparação do resultado do IMC e retorna uma mensagem em qual nível do IMC a pessoa se encontra
export function formatTextIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.6 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Acima do peso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau I";
  } else if (imc >= 35 && imc <= 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }
}
