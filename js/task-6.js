let total6 = 0;

while (true) {
  let userNumber = prompt("Введите число");

  if (userNumber === null) {
    break;
  }

  userNumber = Number(userNumber);

  const notANumber = Number.isNaN(userNumber);

  if (notANumber) {
    console.log("Было введено не число, попробуйте еще раз");
    continue;
  }

  total6 += userNumber;
}

alert(`Общая сумма чисел равна ${total6}`);
