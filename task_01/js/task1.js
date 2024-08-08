"use strict"
// Крок 0. Введення даних, позначення величин

const userListNum = parseFloat(prompt('Введіть кількість випадкових чисел', '1'))
const MIN_NUM = 1
const MAX_NUM = 100

// Крок 1. Обчислення результатів

// Виведення результатів

document.write(`<ul class="tasks-list">`)
let listCount = 1
while (listCount <= userListNum) {
   let randomNum = Math.floor(MIN_NUM + Math.random() * (MAX_NUM - MIN_NUM + 1))
   document.write(`
      <li class="task-item">
         ${randomNum}
      </li>
   `)
   listCount++
}
document.write(`</ul>`)