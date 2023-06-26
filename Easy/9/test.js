const isPalindrome = require('./9');

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
