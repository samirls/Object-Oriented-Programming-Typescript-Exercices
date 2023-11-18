// DESCRIBE - tests suites
//IT or TEST - tests cases
//EXPECT - expected results

function sum (a, b) {
  return a + b;
}

describe("Initial Tests", () => {
  test("Return a sum", () => {
    const firstArgument = 7;
    const secondArgument = 1;

    let result = sum(firstArgument, secondArgument);

    expect(result).toEqual(firstArgument + secondArgument);
  })
})