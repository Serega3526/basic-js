const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }
  let CurDate = date.getMonth()
  if (CurDate === 0 || CurDate === 1 || CurDate === 11) {
    return 'winter'
  } else if (CurDate === 2 || CurDate === 3 || CurDate === 4) {
    return 'spring'
  } else if (CurDate === 5 || CurDate === 6 || CurDate === 7) {
    return 'summer'
  } else if (CurDate === 8 || CurDate === 9 || CurDate === 10) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
