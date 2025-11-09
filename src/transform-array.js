const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  const commands = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (!commands.has(current)) {
      result.push(current);
      continue;
    }
    switch (current) {
      case '--discard-next':
        if (i + 1 < arr.length) {
          i++;
        }
        break;

      case '--discard-prev':
        if (result.length > 0) {
          result.pop();
        }
        break;

      case '--double-next':
        if (i + 1 < arr.length) {
          const nextElement = arr[i + 1];
          if (!commands.has(nextElement)) {
            result.push(nextElement);
          }
          i++;
        }
        break;

      case '--double-prev':
        if (result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
