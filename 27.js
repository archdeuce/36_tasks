function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "organization":
      price = 50;
      break;

    case "professional":
      price = 20;
      break;

    case "starter":
      price = 0;
      break;
  }

  return price;
}
