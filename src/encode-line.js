const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let count = 1
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let curElement = str[i]
    if (curElement === str[i + 1]) {
      count++
    } else {
      if (count === 1) {
        result = result + curElement
      } else {
        result = result + count + curElement
        count = 1
      }
    }
  }
  return(result)
}

module.exports = {
  encodeLine
};
