const isPalindrome = x => {
  const arrayX = Array.from(String(x));
  const reversedArrayX = [...arrayX].reverse();

  return arrayX.join('') === reversedArrayX.join('') ? true : false;
};

module.exports = isPalindrome;
