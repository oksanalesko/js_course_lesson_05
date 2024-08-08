"use strict"

// Введення даних, позначення величин

const min = 1
const max = 10

// Обчислення результатів
alert(`Загадайте дійсне число від ${min} до ${max}`)
for (let attemptCount = 0; attemptCount < 3; attemptCount++) {
   const compNumber = Math.floor(Math.random() * (max - min + 1)) + min
   let userAnswer = confirm(`Загадане число дорівнює ${compNumber}?`)
   if (userAnswer) {
      alert('Комп\'ютер вгадав загадане число!')
      break
   }
   else {
      alert('Комп\'ютер не вгадав загадане число')
   }
}

// Виведення результатів

