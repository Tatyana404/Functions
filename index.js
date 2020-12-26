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

// Task 4

let formula = +prompt(
  "Выберите фигуру:\n1 - Ромб\n2 - Цилиндр\n3 - Треугольник\n4 - Прямоугольник"
);
function f(choice) {
  if (isNaN(choice)) {
    return alert("Вы ввели не число!");
  }
  if (choice < 1 || choice > 4) {
    return alert("Такой фигуры нет!");
  }
  if (choice === 1) {
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
  }
  if (choice === 2) {
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
  }
  if (choice === 3) {
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
  }
  if (choice === 4) {
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
  }
}
f(formula);
