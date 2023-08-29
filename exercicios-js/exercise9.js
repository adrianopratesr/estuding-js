// Exercício: Admissão no Parque de Diversões
// Contexto:
// Um parque de diversões possui várias regras para admissão em uma das principais atrações:
// O visitante deve ter pelo menos 12 anos de idade.
// Se o visitante tiver entre 12 e 18 anos, deve estar acompanhado de um adulto.
// Visitantes que têm entre 12 a 15 anos ou mais de 65 anos devem também ter um cartão de saúde que comprove que estão aptos para a atração.
// Visitantes com mais de 70 anos só podem entrar se o nível de lotação do parque estiver abaixo de 50%.
// Em qualquer caso, visitantes que possuem um passe especial VIP não têm restrições de idade ou lotação e podem entrar a qualquer momento.
// Instruções:
// Dado as variáveis idade, acompanhadoPorAdulto, lotacaoAtual, temPasseEspecial e temCartaoSaude, escreva uma função em JavaScript para determinar se o visitante pode entrar na atração.

const age = 71;
const withAdult = false;
const hasHealthCard = true;
const currentCapacity = 50;
const haveSpecialPass = true;

const admissionPark = (
  age,
  withAdult,
  hasHealthCard,
  currentCapacity,
  haveSpecialPass
) => {
  if (haveSpecialPass) {
    return true;
  } else if (age < 12) {
    return false;
  } else if (age >= 12 && age <= 18 && !withAdult) {
    return false;
  } else if (((age >= 12 && age <= 15) || age >= 70) && !hasHealthCard) {
    return false;
  } else if (age >= 70 && currentCapacity >= 50) {
    return false;
  } else {
    return true;
  }
};

console.log(
  admissionPark(
    age,
    withAdult,
    hasHealthCard,
    currentCapacity,
    haveSpecialPass
  )
);
