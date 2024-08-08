"use strict"
// Введення даних, позначення величин

const rowCount = 3
const columnCount = 3

let res = ''
let cellCount = 1

// Обчислення результатів

for (let r = 1; r <= rowCount; r++) {
   res += `<tr>`
   for (let c = 1; c <= columnCount; c++) {
      res += `<td>${cellCount}</td>`
      cellCount++
   }
   res += `</tr>`
}
// Виведення результатів

document.write(`<table border="2px">${res}</table>`)
