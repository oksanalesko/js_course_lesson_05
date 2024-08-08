"use strict"

// Введення даних, позначення величин

const min = 1
const max = 100

// Обчислення результатів

alert(`Загадайте дійсне число від ${min} до ${max}`)
let userAnswer
do {
   const compNumber = Math.floor(Math.random() * (max - min + 1)) + min
   userAnswer = confirm(`Загадане число дорівнює ${compNumber}?`)
   if (userAnswer) {
      alert('Комп\'ютер вгадав загадане число!')
   }
   else {
      alert('Комп\'ютер не вгадав загадане число')
   }
} while (!userAnswer)


// Виведення результатів

