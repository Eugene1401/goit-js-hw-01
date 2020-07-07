"use strict";
const total = 100;
const ordered = 50;
let sms =
  total < ordered
    ? "На складе недостаточно твоаров!"
    : "Заказ оформлен, с вами свяжется менеджер";
console.log(sms);
