const functions = require("./functions");

// primeiro teste
test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// segundo teste
// toBeNull matchs only null
test("Should Be Null", () => {
  expect(functions.isNull()).toBeNull();
});

// terceiro teste
// toBeFalsy matches anything that an if statment treats as false
test("Should be falsy", () => {
  expect(functions.checkValue()).toBeFalsy();
});

// toEqual compara recursivamente todas as propriedades do objeto instanciado
test("User should be TestJest TDD object", () => {
  expect(functions.createUser()).toEqual({ firstName: "", lastName: "" });
});

// Lees than e Greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600); //toBeLessThanOrEqual()
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Should be admin in usernames", () => {
  const usernames = ["admin", "Katty", "Alock", "Master"];
  expect(usernames).toContain("admin");
});

// Working whit async data
//Promisse
test("Fetched user should by Leanne Graham", () => {
  //   expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async await sintax
test("Fetched user should be leanne graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

// Checar para TRUTHY & FALSE Values

// toBeUndefined matchs only undefined
// toBeTruthy matches anything that an if statement treats as true
