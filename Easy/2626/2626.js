const reduce = (nums, fn, init) => {
  let total = init;
  if (nums.length === 0) return total;

  for (let i of nums) {
    total = fn(total, i);
  }

  return total;
};

module.exports = reduce;
