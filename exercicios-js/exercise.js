// Faça um programa que leia três notas, calcule e mostre a média entre elas.
const grades = [10, 15, 20];

const calculateAverageGrades = (grade) => {
  const sumWithInitial = grade.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sumWithInitial / grades.length;
};

console.log(calculateAverageGrades(grades));
