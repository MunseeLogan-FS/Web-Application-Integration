const card = (cardNumber) => {
  const cardLength = cardNumber.length;
  if (cardLength < 12 || cardLength > 16) {
    return "Invalid Credit Card";
  }
  const lastFourDigits = cardNumber.slice(-4);
  const obscuredDigits = "x".repeat(cardLength - 4);
  return `${obscuredDigits}${lastFourDigits}`;
};

module.exports = card;
