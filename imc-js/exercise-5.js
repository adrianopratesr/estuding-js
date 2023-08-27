import { peoples, calculateIMC, formatTextIMC } from "./exercise-1";

const getHigherIMC = (people) => {
  const person = people.sort((actual, next) => {
    const actualIMC = calculateIMC(actual.weight, actual.height);
    const nextIMC = calculateIMC(next.weight, next.height);
    return nextIMC - actualIMC;
  })[0];

  console.log(
    `O maior IMC da lista pertence à: ${person.name}, e ela pesa ${
      person.weight
    }, tem a altura ${person.height} e seu IMC é ${calculateIMC(
      person.weight,
      person.height
    ).toFixed(1)}, o que equivale à ${formatTextIMC(imc)}`
  );
};
getHigherIMC(peoples);

const getLowerIMC = (people) => {
  const person = people.sort((actual, next) => {
    const actualIMC = calculateIMC(actual.weight, actual.height);
    const nextIMC = calculateIMC(next.weight, next.height);
    return actualIMC - nextIMC;
  })[0];

  console.log(
    `O menor IMC da lista pertence à: ${person.name}, e ela pesa ${
      person.weight
    }, tem a altura ${person.height} e seu IMC é ${calculateIMC(
      person.weight,
      person.height
    ).toFixed(1)}, o que equivale à ${formatTextIMC(imc)}`
  );
};
getLowerIMC(peoples);
