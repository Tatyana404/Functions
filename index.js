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