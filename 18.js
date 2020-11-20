function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let balance = customerCredits - pricePerDroid * orderedQuantity;

  if (balance >= 0)
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${balance} кредитов`;
  else message = "Недостаточно средств на счету!";

  return message;
}
