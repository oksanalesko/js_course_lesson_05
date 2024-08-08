"use strict"
// Поступово генерувати 100 випадкових чисел від 1 до 1000. 
// Підрахувати яких чисел більше: парних чи непарних.

// Введення даних, позначення величин
const MIN_NUM = 1
const MAX_NUM = 1000
let evenNums = 0
let oddNums = 0

// Обчислення результатів
for (let i = 0; i < 100; i++) {
   const randomNum = Math.floor(MIN_NUM + Math.random() * (MAX_NUM - MIN_NUM + 1))
   console.log(randomNum)
   if ((randomNum % 2) === 0)
      evenNums++
   else oddNums++
}
// Виведення результатів
if (evenNums > oddNums)
   document.write(`<p>Парних (${evenNums}) більше, ніж непарних (${oddNums})</p>`)
else
   document.write(`<p>Непарних (${oddNums}) більше, ніж парних (${evenNums})</p>`)


