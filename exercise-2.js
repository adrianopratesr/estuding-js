import { peoples, calcularIMC, formatarIMC } from "./exercise-1";

const calcular = (people) => {
  // ordena e printa em ordem alfabetica
  people.sort((actual, next) => {
    return actual.name.localeCompare(next.name);
  });

  for (const person of people) {
    console.log(
      `A pessoa ${person.name} com altura ${person.weight} tem o peso ${
        person.height
      } e está com imc: ${calcularIMC(person.weight, person.height)}`
    );
    // console.log(`O IMC médio da lista é: ${calcularIMC}`);
  }
};

calcular(peoples);
