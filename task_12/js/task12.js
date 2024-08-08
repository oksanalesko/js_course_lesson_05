"use strict"

// Введення даних, позначення величин

let outputImagePosition = '', win = ''


// Обчислення результатів

for (let i = 0; i < 3; i++) {
   const randomNum = Math.floor(1 + Math.random() * 4)
   outputImagePosition += String(randomNum)
   document.write(`<img src="img/img${randomNum}.jpg" alt="#">`)
}

// Виведення результатів

switch (outputImagePosition) {
   case "111": win = "Ви виграли 100 грн"
      break;
   case "222": win = "Ви виграли 200 грн"
      break;
   case "333": win = "Ви виграли 500 грн"
      break;
   case "444": win = "Ви виграли 1000 грн"
      break;
   default: win = "Ви програли"
      break;
}

document.write(`<p>${win}</p>`)