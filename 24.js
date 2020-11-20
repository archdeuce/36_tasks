function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount = BASE_DISCOUNT;

  if (totalSpent >= 50000) return GOLD_DISCOUNT;
  else if (totalSpent >= 20000) return SILVER_DISCOUNT;
  else if (totalSpent >= 5000) return BRONZE_DISCOUNT;

  return discount;
}
