"use strict";
// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// isAdult(20); // true
// isAdult(4); // false

// 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// 3. Проверка возможности треугольника. Создать функцию, которая принимает длины треугольника; Функция возвращает true если треугольник возможен и false если нет

// 4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольник, прямоугольник

// Task 1

const age = parseInt(prompt("Введите ваш возраст:"));

const isAdult = (age) => (isNaN(age) ? "Вы ввели не число !" : age >= 18);

alert(isAdult(age));

// Task 2

const firstNumber = parseFloat(prompt("Введите первое число:"));
const secondNumber = parseFloat(prompt("Введите второе число:"));

const checkMultiplicity = (firstNumber, secondNumber) => {
  if (isNaN(firstNumber - secondNumber)) {
    return "Вы ввели не число !";
  }

  if (firstNumber === 0) {
    return 0;
  }

  if (secondNumber === 0) {
    return "На 0 делить нельзя !";
  }

  return firstNumber % secondNumber === 0;
};

alert(checkMultiplicity(firstNumber, secondNumber));

// Task 3

const firstSide = parseFloat(prompt("Введите первую сторону треугольника:"));
const secondSide = parseFloat(prompt("Введите вторую сторону треугольника:"));
const thirdSide = parseFloat(prompt("Введите третью сторону треугольника:"));

const opportunityToTriangleFormation = (firstSide, secondSide, thirdSide) =>
  isNaN(firstSide - secondSide - thirdSide)
    ? "Вы ввели не число !"
    : firstSide + secondSide > thirdSide &&
      secondSide + thirdSide > firstSide &&
      firstSide + thirdSide > secondSide;

alert(opportunityToTriangleFormation(firstSide, secondSide, thirdSide));

// Task 4

const figureNumber = parseInt(
  prompt(
    "Выберите фигуру:\n1 - Ромб\n2 - Цилиндр\n3 - Треугольник\n4 - Прямоугольник"
  )
);

switch (figureNumber) {
  case 1: {
    const side = parseFloat(prompt("Введите сторону ромба:"));
    const height = parseFloat(prompt("Введите высоту ромба:"));

    const calcAreaOfRhombus = (side, height) =>
      isNaN(side - height)
        ? "Вы ввели не число !"
        : `Площадь ромба = ${side * height}`;

    alert(calcAreaOfRhombus(side, height));
    break;
  }
  case 2: {
    const radius = parseFloat(prompt("Введите радиус цилиндра:"));
    const height = parseFloat(prompt("Введите высоту цилиндра:"));

    const calcFullSurfaceAreaOfCylinder = (radius, height) =>
      `Площадь полной поверхности цилиндра = ${
        2 * Math.PI * radius * (height + radius)
      }`;

    const calcSideSurfaceAreaOfCylinder = (radius, height) =>
      `Площадь боковой поверхности цилиндра = ${2 * Math.PI * radius * height}`;

    alert(
      isNaN(radius - height)
        ? "Вы ввели не число !"
        : `${calcFullSurfaceAreaOfCylinder(
            radius,
            height
          )}\n${calcSideSurfaceAreaOfCylinder(radius, height)}`
    );
    break;
  }
  case 3: {
    const firstSide = parseFloat(
      prompt("Введите первую сторону треугольника:")
    );
    const secondSide = parseFloat(
      prompt("Введите вторую сторону треугольника:")
    );
    const thirdSide = parseFloat(
      prompt("Введите третью сторону треугольника:")
    );

    const calcAreaOfTriangle = (firstSide, secondSide, thirdSide) => {
      if (isNaN(firstSide - secondSide - thirdSide)) {
        return "Вы ввели не число !";
      }

      const p = (firstSide + secondSide + thirdSide) / 2;
      const s = Math.sqrt(
        p * (p - firstSide) * (p - secondSide) * (p - thirdSide)
      );

      return `Площадь треугольника = ${s}`;
    };

    alert(calcAreaOfTriangle(firstSide, secondSide, thirdSide));
    break;
  }
  case 4: {
    const firstSide = parseFloat(
      prompt("Введите первую сторону прямоугольника:")
    );
    const secondSide = parseFloat(
      prompt("Введите вторую сторону прямоугольника:")
    );

    const calcAreaOfRectangle = (firstSide, secondSide) =>
      isNaN(firstSide - secondSide)
        ? "Вы ввели не число !"
        : `Площадь прямоугольника = ${firstSide * secondSide}`;

    alert(calcAreaOfRectangle(firstSide, secondSide));
    break;
  }

  default:
    alert("Такой фигуры нет !");
}
