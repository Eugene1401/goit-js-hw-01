"use strict";

const ADMIN_PASSWORD = "q";
let message3;
const userInput = prompt("Введите пароль!");

if (userInput === null) {
  message3 = "Отменено пользователем!";
  console.log(message3);
  alert(message3);
} else if (userInput === ADMIN_PASSWORD) {
  message3 = "Добро пожаловать!";
  console.log(message3);
  alert(message3);
} else {
  message3 = "Доступ запрещен, неверный пароль!";
  console.log(message3);
  alert(message3);
}
