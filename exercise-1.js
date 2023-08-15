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

var peso = 50;
var altura = 1.5;

export function calcularIMC(peso, altura) {
  imc = peso / (altura * altura);
  return imc;
}

export function formatarIMC(imc) {
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
