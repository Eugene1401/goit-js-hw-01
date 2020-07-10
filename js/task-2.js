"use strict";
const total = 100;
const ordered = 50;
const sms =
  total < ordered
    ? "На складе недостаточно товаров!"
    : "Заказ оформлен, с вами свяжется менеджер";
console.log(sms);
