import { peoples, calcularIMC, formatarIMC } from "./exercise-1";

const calcularMaior = (people) => {
  const person = people.sort((actual, next) => {
    const actualIMC = calcularIMC(actual.weight, actual.height);
    const nextIMC = calcularIMC(next.weight, next.height);
    return nextIMC - actualIMC;
  })[0];

  console.log(
    `O maior IMC da lista pertence à: ${person.name}, e ela pesa ${
      person.weight
    }, tem a altura ${person.height} e seu IMC é ${calcularIMC(
      person.weight,
      person.height
    ).toFixed(1)}, o que equivale à ${formatarIMC(imc)}`
  );
};
calcularMaior(peoples);

const calcularMenor = (people) => {
  const person = people.sort((actual, next) => {
    const actualIMC = calcularIMC(actual.weight, actual.height);
    const nextIMC = calcularIMC(next.weight, next.height);
    return actualIMC - nextIMC;
  })[0];

  console.log(
    `O menor IMC da lista pertence à: ${person.name}, e ela pesa ${
      person.weight
    }, tem a altura ${person.height} e seu IMC é ${calcularIMC(
      person.weight,
      person.height
    ).toFixed(1)}, o que equivale à ${formatarIMC(imc)}`
  );
};
calcularMenor(peoples);

// o que é um objeto?
// o que é um function?
// o que é uma variável?
// o que é uma constante?
// o que são arrays?
// quais são as principais funções de interadores?
