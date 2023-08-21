import { peoples, calculateIMC } from "./exercise-1";

const orderAlphabetically = (people) => {
  // ordena e printa em ordem alfabetica
  people.sort((actual, next) => {
    return actual.name.localeCompare(next.name);
  });

  for (const person of people) {
    console.log(
      `A pessoa ${person.name} com altura ${person.weight} tem o peso ${
        person.height
      } e está com imc: ${calculateIMC(person.weight, person.height)}`
    );
  }
};

orderAlphabetically(peoples);
