let deliveryToCountry = prompt("Введите страну доставки:");
let cost;

if (deliveryToCountry === null) {
  console.log("Отмененно пользователем!");
} else {
  deliveryToCountry = deliveryToCountry.toLowerCase();
  switch (deliveryToCountry) {
    case "китай":
      cost = 100;
      deliveryToCountry = "Китай";
      break;

    case "чили":
      cost = 250;
      deliveryToCountry = "Чили";
      break;

    case "австралия":
      cost = 170;
      deliveryToCountry = "австралия";
      break;

    case "индия":
      cost = 80;
      deliveryToCountry = "индия";
      break;

    case "ямайка":
      cost = 120;
      deliveryToCountry = "ямайка";
      break;

    default:
      deliveryToCountry = "not available";
      break;
  }
}
if (cost === "not available") {
  alert("В вашей стране доставка не доступна");
} else {
  alert(`Доставка в ${deliveryToCountry}  будет стоить ${cost} кредитов`);
}
