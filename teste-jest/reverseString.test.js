const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverse", () => {
  expect(reverseString("Hello")).toEqual("olleH");
});
