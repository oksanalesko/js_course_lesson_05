"use strict"
// Введення даних, позначення величин

const rowCount = 3
const columnCount = 7

let res = ''
// Обчислення результатів

for (let r = 1; r <= rowCount; r++) {
   res += `<tr>`
   for (let c = 1; c <= columnCount; c++) {
      res += `<td>${c}</td>`
   }
   res += `</tr>`
}
// Виведення результатів

document.write(`<table border="2px">${res}</table>`)




