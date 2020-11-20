function checkForSpam(message) {
  let result = false;

  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  )
    result = true;

  return result;
}

console.log("checkForSpam('sPam');", checkForSpam("sPam"));
console.log("checkForSpam('salE');", checkForSpam("salE"));
console.log("checkForSpam('sPam');", checkForSpam("other"));
