const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
    if (arr.length === 0) {
      return 1;
    }

    let maxDepth = 0;

    for (const element of arr) {
      if (Array.isArray(element)) {
        const depth = this.calculateDepth(element);
        maxDepth = Math.max(maxDepth, depth);
      }
    }

    return 1 + maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
