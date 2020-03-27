const { expect } = require('chai');
const { formatDate } = require('../utils.js');

describe('formatDate', () => {
  it('returns the date formatted in dd/mm/yy', () => {
    const actual = formatDate('2020-03-26T20:29:48.213Z');
    const output = '26-03-2020';
    expect(actual).to.equal(output);
  });
});
