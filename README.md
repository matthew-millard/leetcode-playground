# Leetcode Playground

A repository where I practice data structures, algorithms, and coding challenges using LeetCode problems.

## Table of Contents

- [Easy](#easy)
  - [2626. Array Reduce Transformation](#2626-array-reduce-transformation)

## Easy

### 2626 Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

**Please solve it without using the built-in Array.reduce method.**

#### My Solution

```JavaScript
const reduce = (nums, fn, init) => {
  let total = init;
  if (nums.length === 0) return total;

  for (let i of nums) {
    total = fn(total, i);
  }

  return total;
};
```

Runtime: 62 ms

#### Test

```JavaScript
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
```
