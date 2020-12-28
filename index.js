"use strict";

// Task 1

const userInput = +prompt("Введите ваш возраст:");
const isAdult = function (value) {
  if (isNaN(value)) {
    return "Вы ввели не число";
  }
  return value >= 18;
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
  if (value2 === 0) {
    return "На 0 делить нельзя!";
  }
  return value1 % value2 === 0;
};
alert(checkMultiplicity(userInput1, userInput2));

// Task 3

const userInput1 = +prompt("Введите первую сторону треугольника:");
const userInput2 = +prompt("Введите вторую сторону треугольника:");
const userInput3 = +prompt("Введите третью сторону треугольника:");
const opportunityToTriangleFormation = function (side1, side2, side3) {
  if (isNaN(side1 - side2 - side3)) {
    return "Вы ввели не число";
  }
  return (
    side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2
  );
};
alert(opportunityToTriangleFormation(userInput1, userInput2, userInput3));

// Task 4

const userInput = +prompt(
  "Выберите фигуру:\n1 - Ромб\n2 - Цилиндр\n3 - Треугольник\n4 - Прямоугольник"
);
switch (userInput) {
  case 1: {
    const userInput1 = +prompt("Введите сторону ромба:");
    const userInput2 = +prompt("Введите высоту ромба:");
    const calcAreaRhombus = function (side, height) {
      if (isNaN(side - height)) {
        return "Вы ввели не число";
      } else {
        return side * height;
      }
    };
    alert("Площадь вашего ромба =" + calcAreaRhombus(userInput1, userInput2));
    break;
  }
  case 2: {
    const userInput1 = +prompt("Введите радиус цилиндра:");
    const userInput2 = +prompt("Введите высоту цилиндра:");
    const calcAreaLateralSurfaceCylinder = function (radius, height) {
      if (isNaN(radius - height)) {
        return "Вы ввели не число";
      } else {
        return 2 * Math.PI * radius * height;
      }
    };
    alert(
      "Площадь боковой поверхности цилиндра =" +
        calcAreaLateralSurfaceCylinder(userInput1, userInput2)
    );
    break;
  }
  case 3: {
    const userInput1 = +prompt("Введите первую сторону треугольника:");
    const userInput2 = +prompt("Введите вторую сторону треугольника:");
    const userInput3 = +prompt("Введите третью сторону треугольника:");
    const calcAreaTriangle = function (side1, side2, side3) {
      if (isNaN(side1 - side2 - side3)) {
        return "Вы ввели не число";
      }
      let p = (side1 + side2 + side3) / 2;
      let s = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
      return s;
    };
    alert(
      "Площадь треугольника =" +
        calcAreaTriangle(userInput1, userInput2, userInput3)
    );
    break;
  }
  case 4: {
    const userInput1 = +prompt("Введите первую сторону прямоугольника:");
    const userInput2 = +prompt("Введите вторую сторону прямоугольника:");
    const calcAreaRectangle = function (side1, side2) {
      if (isNaN(side1 - side2)) {
        return "Вы ввели не число";
      } else {
        return side1 * side2;
      }
    };
    alert(
      "Площадь прямоугольника =" + calcAreaRectangle(userInput1, userInput2)
    );
    break;
  }
  default:
    alert("Такой фигуры нет!");
}
