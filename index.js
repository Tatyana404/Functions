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
