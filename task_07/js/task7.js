"use strict"

// Введення даних, позначення величин

const userSectionCount = parseFloat(prompt('Введіть кількість розділів', '1'))

let sectionNum = 1

// Обчислення результатів

while (sectionNum <= userSectionCount) {
   document.write(`<h2 class="second-title">Заголовок ${sectionNum}</h2>`)
   for (let pNum = 1; pNum <= sectionNum; pNum++) {
      document.write(`<p>Розділ ${sectionNum}, параграф ${pNum}</p>`)
   }
   document.write(`<hr>`)
   sectionNum++
}

// Виведення результатів

