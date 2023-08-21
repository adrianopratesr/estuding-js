// Escreva um código que verifica a classificação de um filme. Se a idade for menor que 13, imprima "Filme para todas as idades". Se for entre 13 e 17, imprima "Filme para adolescentes". Se for 18 ou mais, imprima "Filme para adultos".

const ageMovieOne = 12;
const ageMovieTwo = 15;
const ageMovieThree = 18;

const classifyMovieByAge = (value) => {
  if (value < 13) {
    return "Filme para todas as idades";
  } else if (value >= 13 && value <= 17) {
    return "Filme para adolescentes";
  } else {
    return "Filme para adultos";
  }
};

console.log(classifyMovieByAge(ageMovieOne));
console.log(classifyMovieByAge(ageMovieTwo));
console.log(classifyMovieByAge(ageMovieThree));
