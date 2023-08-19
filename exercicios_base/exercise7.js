// Escreva um código que verifica a classificação de um filme. Se a idade for menor que 13, imprima "Filme para todas as idades". Se for entre 13 e 17, imprima "Filme para adolescentes". Se for 18 ou mais, imprima "Filme para adultos".

const idadeFilmeUm = 12;
const idadeFilmeDois = 15;
const idadeFilmeTres = 18;

const validacaoFilme = (value) => {
  if (value < 13) {
    return "Filme para todas as idades";
  } else if (value >= 13 && value <= 17) {
    return "Filme para adolescentes";
  } else {
    return "Filme para adultos";
  }
};

console.log(validacaoFilme(idadeFilmeUm));
console.log(validacaoFilme(idadeFilmeDois));
console.log(validacaoFilme(idadeFilmeTres));
