"use strict"

// Введення даних, позначення величин

let weekCount = parseInt(prompt('Введіть кількість тижнів для формування звіту', '1'))
let overallProfit = 0

// Обчислення результатів

for (let w = 1; w <= weekCount; w++) {
   let weeklyProfit = 0
   for (let d = 1; d <= 7; d++) {
      let dayProfit = parseInt(prompt(`Введіть прибуток за ${d} день ${w} тижня`))
      weeklyProfit += dayProfit
   }
   document.write(`<p>Прибуток за тиждень ${w} складає: ${weeklyProfit}</p><br>`)
   overallProfit += weeklyProfit
}

// Виведення результатів

document.write(`<p>Загальний прибуток складає: ${overallProfit}</p>`)