const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("String reverse", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});

test("String reverse with uppercase", () => {
  expect(reverseString("hEllo")).toEqual("olleh");
});
