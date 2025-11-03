const card = require("./card");

describe("Card obscure test", () => {
  test("As a user I want to obscure my credit card number", () => {
    expect(card("1234567890123456")).toEqual("xxxxxxxxxxxx3456");
    expect(card("9876543210987654")).toEqual("xxxxxxxxxxxx7654");
    expect(card("1222233334444")).toEqual("xxxxxxxxx4444");
    expect(card("555666677778888")).toEqual("xxxxxxxxxxx8888");
    expect(card("333322221111")).toEqual("xxxxxxxx1111");
    expect(card("44555566667777")).toEqual("xxxxxxxxxx7777");
  });
  test("As a user I want to ensure my card is valid", () => {
    expect(card("123")).toEqual("Invalid Credit Card");
    expect(card("1234")).toEqual("Invalid Credit Card");
    expect(card("12345678901")).toEqual("Invalid Credit Card");
    expect(card("12345678901234567890")).toEqual("Invalid Credit Card");
  });
});
