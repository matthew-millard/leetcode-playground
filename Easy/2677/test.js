const chunk = require('./2677');

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
