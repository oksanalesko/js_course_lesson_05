"use strict"

// Введення даних, позначення величин

const totalPrice = 2000
let customerMoney = 0

// Обчислення результатів

do {
   let customerMoneyPart = parseInt(prompt(`Введіть кількість грошей. До повної вартості товару залишилось ${totalPrice - customerMoney}`, '0'))
   if (!isFinite(customerMoneyPart)) {
      alert('Введені дані не коректні')
      continue
   }
   customerMoney += customerMoneyPart
} while (customerMoney < totalPrice);

// Виведення результатів
alert('Суми достатньо для оплати товарів!')
