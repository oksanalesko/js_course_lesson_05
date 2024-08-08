"use strict"
// Введення даних

document.write(`<form action="#" method="get">`)

// Обчислення результатів

for (let productCount = 1; productCount <= 10; productCount++) {
   document.write(`
      <div class="form-line">
         <label class="form-label">Product # ${productCount}</label>
         <input class="form-input" type="text">
      </div>
   `)
}

// Виведення результатів

document.write(`</form>`)
