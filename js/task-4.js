const numberOfDroid = prompt("Введите количество дроидов!");
let message4;
let totalPrice;
const pricePerDroid = 3000;
let credits = 23850;

if (numberOfDroid === null) {
  message4 = "Отменено пользователем!";
  console.log(message4);
}

totalPrice = numberOfDroid * pricePerDroid;

if (totalPrice > credits) {
  message4 = "Недостаточно средств на счету!";
  console.log(message4);
} else {
  credits = credits - totalPrice;
  message4 = `Вы купили ${numberOfDroid}  дроидов, на счету осталось ${credits} кредитов.`;
  console.log(message4);
}
