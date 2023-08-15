import { peoples, calcularIMC, formatarIMC } from "./exercise-1";

const calcular = (people) => {
  // ordena e printa em ordem do IMC maior para o menor
  people.sort((actual, next) => {
    const actualIMC = calcularIMC(actual.weight, actual.height);
    const nextIMC = calcularIMC(next.weight, next.height);
    return nextIMC - actualIMC;
  });

  for (const person of people) {
    const imc = calcularIMC(person.weight, person.height);
    console.log(
      `A pessoa ${person.name} com altura ${person.weight} tem o peso ${
        person.height
      } e está com imc: ${formatarIMC(imc)}`
    );
  }
};

calcular(peoples);
