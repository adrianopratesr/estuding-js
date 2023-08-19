// Faça um programa que leia três notas, calcule e mostre a média entre elas.
let notas = [10, 15, 20];

const mediaNotas = (nota) => {
  const initialValue = 0;
  const sumWithInitial = nota.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const media = sumWithInitial / notas.length;
  return media;
};

console.log(mediaNotas(notas));
