function checkStorage(available, ordered) {
  let message;

  if (available >= ordered)
    message = "Заказ оформлен, с вами свяжется менеджер";
  else message = "На складе недостаточно товаров!";

  //message = available >= ordered ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';

  return message;
}
