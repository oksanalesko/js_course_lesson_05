"use strict"

// Введення даних, позначення величин

const yearDays = 365
let sumTemperature = 0
let averageTemperature

// Обчислення результатів

for (let day = 1; day <= yearDays; day++) {
   let dayTemperature = parseInt(prompt(`Введіть температуру повітря цього дня. Сьогодні ${day} день року. Середня температура повітря складає ${averageTemperature} градусів`))
   sumTemperature += dayTemperature
   averageTemperature = (sumTemperature / day).toFixed(1)
}


// Виведення результатів

document.write(`<p>Середня річна температура повітря складає ${averageTemperature} градусів</p>`)