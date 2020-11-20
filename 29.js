function getShippingCost(country) {
  let message;

  switch (country) {
    case "китай":
      message = `Доставка в ${country} будет стоить 100 кредитов`;
      break;

    case "чили":
      message = `Доставка в ${country} будет стоить 250 кредитов`;
      break;

    case "австралия":
      message = `Доставка в ${country} будет стоить 170 кредитов`;
      break;

    case "ямайка":
      message = `Доставка в ${country} будет стоить 120 кредитов`;
      break;

    default:
      message = "Извините, в вашу страну доставки нет";
      break;
  }

  return message;
}
