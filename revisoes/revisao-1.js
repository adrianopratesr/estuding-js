const verifyNumber = (value) => {
  if (value >= 5) {
    return "O número é maior ou igual a 5";
  } else {
    return "O número é menor que 5";
  }
};

console.log(verifyNumber(10));
