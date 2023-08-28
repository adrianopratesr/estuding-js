//divisão de 2 números
const division = (a, b) => {
  return a / b;
};

console.log(division(50, 10));

//concatenção de duas string
const conc = (a, b) => {
  return `${a} ${b}`;
};

console.log(conc("Luana", "Luz"));

//função que retorna se é impar = true, par = false
const isOdd = (a) => {
  if (a % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isOdd(10));

//função que printa uma string em duas linhas
const breakStringInTwoLines = (a, b) => {
  return `${a} \n${b}`;
};

console.log(breakStringInTwoLines("Luana", "Luz"));

//printando data e hora atual DD/MM/AAAA HH:MM:SS
const formatCurrentDate = () => {
  const date = new Date();
  const day = padStart(date.getDate());
  const month = padStart(date.getMonth());
  const year = date.getFullYear();
  const hour = padStart(date.getHours());
  const min = padStart(date.getMinutes());
  const sec = padStart(date.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
};

const padStart = (number) => {
  //   if (number >= 0 && number <= 9) {
  //     return `0${number}`;
  //   }
  return String(number).padStart(2, "0");
};

console.log(formatCurrentDate());

//  Calculando a Diferença Entre Duas Datas
const dateA = new Date(23, 8, 19);
const dateB = new Date(23, 8, 10);

const difference = (valueA, valueB) => {
  const dateC = valueA - valueB;
  return dateC / 1000 / 60 / 60 / 24;
};

console.log(difference(dateA, dateB));

//Escreva uma função que aceite um ano como entrada e retorne true se for um ano bissexto ou false se não for.

const leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true
  } else {
    return false
  } 
}

console.log(leapYear(1996));

//Crie uma função que aceite uma data e um número de dias como entrada. A função deve adicionar o número de dias à data e retornar a nova data.
const dateD = new Date(2023, 5, 20);

const addDaysToDate = (date, days) => {
  return new Date(date.setDate(date.getDate() + days));
}

console.log(addDaysToDate(dateD, 1))

//Escreva uma função que aceite uma data e retorne a data no formato "DD de [mês por extenso] de AAAA". Por exemplo, "17 de Agosto de 2023".
const date = new Date();

  const MONTHS_IN_PTBR = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const WEEK_DAYS = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

const formatDate = (date) => {
  const day = padStart(date.getDate());
  const month = MONTHS_IN_PTBR[date.getMonth()];
  const year = date.getFullYear();

  return `${day} de ${month} de ${year}`
}

console.log(formatDate(date));

//Peça ao usuário que insira uma data e exiba informações como o dia da semana, o mês, o ano, etc.
const valueC = new Date();

const showDateDetails = (date) => {
  const day = padStart(date.getDate());
  const weekDay = WEEK_DAYS[date.getDay()];
  const month = MONTHS_IN_PTBR[date.getMonth()];
  const year = date.getFullYear();

  return `Dia: ${day} | Mês: ${month} | Ano: ${year} | Dia da semana: ${weekDay}`; 
}

console.log(showDateDetails(valueC))

