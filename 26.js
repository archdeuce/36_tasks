function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  message =
    password === ADMIN_PASSWORD
      ? "Доступ разрешен"
      : "Доступ запрещён, неверный пароль!";

  return message;
}
