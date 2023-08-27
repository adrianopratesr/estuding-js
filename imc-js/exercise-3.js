import { peoples, calculateIMC, formatTextIMC } from "./exercise-1";

const orderByIMCDESC = (people) => {
  // ordena e printa em ordem do IMC maior para o menor
  people.sort((actual, next) => {
    const actualIMC = calculateIMC(actual.weight, actual.height);
    const nextIMC = calculateIMC(next.weight, next.height);
    return nextIMC - actualIMC;
  });

  for (const person of people) {
    const imc = calculateIMC(person.weight, person.height);
    console.log(
      `A pessoa ${person.name} com altura ${person.weight} tem o peso ${
        person.height
      } e está com imc: ${formatTextIMC(imc)}`
    );
  }
};

orderByIMCDESC(peoples);
