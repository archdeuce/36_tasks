function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  // if (password === null) {
  //     message = 'Отменено пользователем!';
  // } else if (password === ADMIN_PASSWORD) {
  //     message = 'Добро пожаловать!';
  // } else {
  //     message = 'Доступ запрещён, неверный пароль!';
  // }

  switch (password) {
    case null:
      message = "Отменено пользователем!";
      break;

    case ADMIN_PASSWORD:
      message = "Добро пожаловать!";
      break;

    default:
      message = "Доступ запрещён, неверный пароль!";
      break;
  }

  return message;
}
