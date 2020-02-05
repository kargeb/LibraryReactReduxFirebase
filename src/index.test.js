const add = (a, b) => a + b;

it("adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("add two naother num,ber", () => {
  expect(add(20, 3)).toBe(23);
});
