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
const twoLines = (a, b) => {
  return `${a} \n${b}`;
};

console.log(twoLines("Luana", "Luz"));

//printando data e hora atual DD/MM/AAAA HH:MM:SS
const data = () => {
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

console.log(data());

//  Calculando a Diferença Entre Duas Datas
const dataA = new Date(23, 8, 19);
const dataB = new Date(23, 8, 10);

const diferenca = (valueA, valueB) => {
  const dataC = valueA - valueB;
  return dataC / 1000 / 60 / 60 / 24;
};

console.log(diferenca(dataA, dataB));
