const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    return "Divison by zero";
  } else {
    return a / b;
  }
};

const modulas = function (a, b) {
  return a % b;
};

const sqrt = function (a) {
  return Math.sqrt(a);
};

export { add, sqrt, subtract, modulas, multiply, divide };
