import {
  add,
  sqrt,
  subtract,
  modulas,
  multiply,
  divide,
} from "../src/operations.js";

test("adds 2 and 3 to be 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtract 2 from 3 to be 1", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("multiply 2 and 3 to be 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide 3 and 6 to be 2", () => {
  expect(divide(6, 3)).toBe(2);
});

test("adds 2 and 0 to be divison by zero", () => {
  expect(divide(2, 0)).toBe("Divison by zero");
});

test("modulas 4 and 2 to be 0", () => {
  expect(modulas(4, 2)).toBe(0);
});

test("square root of 64 to be 8", () => {
  expect(sqrt(64)).toBe(8);
});
