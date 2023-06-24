const reduce = require('./2626');

describe('array reduce transformation', () => {
  test('should return the sum of array elements', () => {
    const nums = [1, 2, 3, 4, 5];
    const init = 0;
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    const expectedOutput = 15;

    const result = reduce(nums, fn, init);

    expect(result).toBe(expectedOutput);
  });

  test('should return init if array length is 0', () => {
    const nums = [];
    const init = 100;
    const fn = function sum(accum, curr) {
      return accum + curr;
    };
    const expectedOutput = 100;

    const result = reduce(nums, fn, init);

    expect(result).toBe(expectedOutput);
  });
});
