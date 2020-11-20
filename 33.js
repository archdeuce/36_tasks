function formatMessage(message, maxLength) {
  let result;

  if (message.length > maxLength) result = message.slice(0, maxLength) + "...";
  else result = message;

  return result;
}
