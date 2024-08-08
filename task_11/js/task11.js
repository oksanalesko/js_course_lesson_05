"use strict"

// Введення даних, позначення величин

let userNumber1 = parseFloat(prompt('Введіть перше число', '1'))
let userNumber2 = parseFloat(prompt('Введіть друге число', '10'))

let sumOddNum = 0, countOddNum = 0

// Обчислення результатів

if (userNumber1 > userNumber2) {
   let temp = userNumber1
   userNumber1 = userNumber2
   userNumber2 = temp
}

for (let i = userNumber1; i <= userNumber2 && countOddNum < 5; i++) {
   if (i % 2 !== 0) {
      // console.log(sumOddNum)
      sumOddNum += i
      // console.log(sumOddNum)
      countOddNum++
   }
}

// Виведення результатів

document.write(`<p>Сума 5 непарних чисел між числами ${userNumber1} та ${userNumber2} дорівнює ${sumOddNum}</p>`)