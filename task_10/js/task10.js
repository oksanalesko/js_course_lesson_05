"use strict"

// Введення даних, позначення величин

const userNumber1 = parseFloat(prompt('Введіть перше число', '1'))
const userNumber2 = parseFloat(prompt('Введіть друге число', '10'))

let sum = 0

// Обчислення результатів

for (let userNumber = userNumber1; userNumber <= userNumber2; userNumber++) {
   if (userNumber % 2 !== 0) {
      sum += userNumber
   }
}

// Виведення результатів

document.write(`<p>Сума непарних чисел між ${userNumber1} та ${userNumber2} дорівнює ${sum}</p>`)