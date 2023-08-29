import { peoples, calculateIMC, formatTextIMC } from "./exercise-1";

const calculateAverageIMC = (people) => {
  // qual o imc médio da lista
  const amountPeople = people.length;
  let sumIMC = 0;

  for (const person of people) {
    const imc = calculateIMC(person.weight, person.height);
    sumIMC += imc;
  }

  const mediaIMC = sumIMC / amountPeople;
  console.log(
    `A média do IMC de todas as pessoas é ${mediaIMC.toFixed(
      1
    )} - ${formatTextIMC(mediaIMC)}`
  );
};

calculateAverageIMC(peoples);
