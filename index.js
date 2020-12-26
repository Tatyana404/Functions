"use strict";

// Task 1

const userInput = +prompt("Введите ваш возраст:");
const isAdult = function (value) {
  if (isNaN(value)) {
    return "Вы ввели не число";
  }
  if (value >= 18) {
    return true;
  }
  return false;
};
alert(isAdult(userInput));

// Task 2

const userInput1 = +prompt("Введите первое число:");
const userInput2 = +prompt("Введите второе число:");
const checkMultiplicity = function (value1, value2) {
  if (isNaN(value1 - value2)) {
    return "Вы ввели не число!";
  }

  if (value1 === 0) {
    return 0;
  }
  if (value2 <= 0) {
    return "На 0 делить нельзя!";
  }
  return value1 % value2 === 0;
};
alert(checkMultiplicity(userInput1, userInput2));

// Task 3

const userInput1 = +prompt("Введите первую сторону треугольника:");
const userInput2 = +prompt("Введите вторую сторону треугольника:");
const userInput3 = +prompt("Введите третью сторону треугольника:");
const opportunityTriangleFormation = function (side1, side2, side3) {
  if (isNaN(side1 - side2 - side3)) {
    return "Вы ввели не число";
  }
  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    return true;
  }
  return false;
};
alert(opportunityTriangleFormation(userInput1, userInput2, userInput3));
