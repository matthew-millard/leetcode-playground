# Leetcode Playground

A repository where I practice data structures, algorithms, and coding challenges using LeetCode problems.

## Table of Contents

- [Easy](#easy)
  - [2626. Array Reduce Transformation](#2626-array-reduce-transformation)
  - [9. Palindrome Number](#9-palindrome-number)
  - [2677. Chunk Array](#2677-chunk-array)

## Easy

### 2626 Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

**Please solve it without using the built-in Array.reduce method.**

#### My Solution - 2626

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

### 9 Palindrome Number

Given an integar `x`, return `true` if `x` is a _palindrome_, and `false` otherwise.

#### My Solution - 9

```JavaScript
const isPalindrome = x => {
  const arrayX = Array.from(String(x));
  const reversedArrayX = [...arrayX].reverse();

  return arrayX.join('') === reversedArrayX.join('') ? true : false;
};
```

#### Test - 9

```JavaScript
describe('Palindrone number', () => {
  test('should return true if x is a palindrome', () => {
    const x = 121;
    const result = isPalindrome(x);

    expect(result).toBeTruthy();
  });

  test('should return false if x is not a palindrome', () => {
    const x = 123;
    const result = isPalindrome(x);

    expect(result).toBeFalsy();
  });
});
```

### 2677. Chunk Array

Given an array `arr` and a chunk size `size`, return a `chunked` array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

#### My solution - 2677

```JavaScript
const chunk = (arr, size) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
};
```

#### Test - 2677

```JavaScript
describe('Chunk array', () => {
  test('should return a chuncked array, that contains the original elements in the array, but consists of subarrays at the length of size', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 1;
    const expectedResult = [[1], [2], [3], [4], [5]];
    const result = chunk(arr, size);

    expect(result).toStrictEqual(expectedResult);
  });

  test('should return a chuncked array, that contains the original elements in the array, but consists of subarrays at the length of size', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 3;
    const expectedResult = [
      [1, 2, 3],
      [4, 5],
    ];
    const result = chunk(arr, size);

    expect(result).toStrictEqual(expectedResult);
  });
});
```
