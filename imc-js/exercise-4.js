import { peoples, calculateIMC, formatTextIMC } from "./exercise-1";

const calculingAverageIMC = (people) => {
  // qual o imc médio da lista
  const qtdPessoas = people.length;
  let somaIMC = 0;

  for (const person of people) {
    const imc = calculateIMC(person.weight, person.height);
    somaIMC += imc;
    // console.log(`O IMC médio da lista é: ${calcularIMC}`);somaIMC / qtdPessoa
  }

  const mediaIMC = somaIMC / qtdPessoas;
  console.log(
    `A média do IMC de todas as pessoas é ${mediaIMC.toFixed(
      1
    )} - ${formatTextIMC(mediaIMC)}`
  );
};

calculingAverageIMC(peoples);
