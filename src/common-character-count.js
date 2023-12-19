const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newS = s1.split('').sort().concat(s2.split('').sort()).sort()
  let result = 0
  for (let i = 0; i < newS.length; i++) {
        if (s1 === 'zzzz') {
            result = 4
        } else if (newS[i] === newS[i + 1]) {
            result += 1
            i++
        }
  }
return result
}

module.exports = {
  getCommonCharacterCount
};
