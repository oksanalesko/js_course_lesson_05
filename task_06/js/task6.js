"use strict"
// Введення даних, позначення величин

const tableCount = 3
const rowCount = 3
const columnCount = 3

let res = ''
let cellCount = 1

// Обчислення результатів
for (let t = 1; t <= tableCount; t++) {
   res += `<table border="2px">`
   for (let r = 1; r <= rowCount; r++) {
      res += `<tr>`
      for (let c = 1; c <= columnCount; c++) {
         res += `<td>${cellCount}</td>`
         cellCount++
      }
      res += `</tr>`
   }
   res += `</table>`
}

// Виведення результатів

document.write(`${res}`)