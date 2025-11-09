const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();

  if (str.length === 1) {
    return 0;
  }
  
  let maxResult = 0;

  for (let i = 0; i < str.length; i++) {
    const newNumberStr = str.slice(0, i) + str.slice(i + 1);
    const newNumber = parseInt(newNumberStr, 10);

    if (newNumber > maxResult) {
      maxResult = newNumber;
    }
  }
  
  return maxResult;
}

module.exports = {
  deleteDigit
};
