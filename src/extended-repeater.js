const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (!options) {
    return String(str);
  }
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  const baseStr = String(str);
  let additionPart = '';
  if (addition !== undefined) {
    const additionStr = String(addition);
    const repeatedAddition = Array(additionRepeatTimes)
      .fill(additionStr)
      .join(additionSeparator);
    additionPart = repeatedAddition;
  }
  const unit = baseStr + additionPart;

  const result = Array(repeatTimes)
    .fill(unit)
    .join(separator);
  return result;
}

module.exports = {
  repeater
};
