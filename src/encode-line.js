const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(/* str */) {
  if (!str || str.length === 0) {
    return '';
  }
  let result = '';
  let currentChar = str[0];
  let count = 1;а
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      result += (count > 1 ? count.toString() : '') + currentChar;
      currentChar = str[i];
      count = 1;
    }
  }
  result += (count > 1 ? count.toString() : '') + currentChar;
  return result;
}

module.exports = {
  encodeLine
};
