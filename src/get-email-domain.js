const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email !== 'string' || email.length === 0) {
    throw new Error('Email must be a non-empty string');
  }
  const atIndex = email.lastIndexOf('@');
  if (atIndex === -1) {
    throw new Error('Invalid email: missing @ symbol');
  }
  return email.slice(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
