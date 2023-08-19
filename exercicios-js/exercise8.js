//Faça um programa que se você tem entre 15 e 17 anos ou mais de 70 anos aparece  "votar é opcional", se for entre 18 e 69 anos "votar é obrigatório", com 14 anos ou menos apareça "é proibido votar".
let age = 16;
let ageTwo = 70;
let ageThree = 25;
let ageFour = 13;

const verifyAge = (age) => {
  if ((age >= 15 && age <= 17) || age >= 70) {
    return "Votar é opcional!";
  } else if (age <= 14) {
    return "É proibido votar!";
  } else {
    return "Votar é obrigatório!";
  }
};

console.log(verifyAge(age));
console.log(verifyAge(ageTwo));
console.log(verifyAge(ageThree));
console.log(verifyAge(ageFour));
