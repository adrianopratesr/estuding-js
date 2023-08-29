// Faça um programa que leia três notas, calcule e mostre a média entre elas.
const grades = [10, 15, 20];

const calculateAverageGrades = (grade) => {
  const sumOfGrades = grade.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sumOfGrades / grades.length;
};

console.log(calculateAverageGrades(grades));
