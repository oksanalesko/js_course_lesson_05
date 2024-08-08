"use strict"

// Введення даних, позначення величин

const seaWidth = parseInt(prompt(`Введіть кількість клітинок для поля по осі X`, '10'))
const seaHeight = parseInt(prompt(`Введіть кількість клітинок для поля по осі Y`, '10'))
const positionX = Math.floor(1 + Math.random() * seaWidth)
const positionY = Math.floor(1 + Math.random() * seaHeight)
let shotNum = 20

// Обчислення результатів

for (let i = 1; i <= shotNum; i++) {
   const userPositionX = parseInt(prompt(`Введіть позицію корабля по осі X`, '1'))
   const userPositionY = parseInt(prompt(`Введіть позицію корабля по осі Y`, '1'))
   if (positionX === userPositionX && positionY === userPositionY) {
      document.write(`<p>Корабель потоплений! You\'re win!</p>`)
      break
   } else alert(`Ви не попали у корабель, лишилося ${shotNum - i} спроб`)
}

// Виведення результатів

document.write(`<p>Позиція корабля була по осі X - ${positionX}, по осі Y - ${positionY}}</p>`)