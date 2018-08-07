import { setValueAsPercentage } from '../index';

describe('setValueAsPercentage', () => {
  it('return a percentage number when valid value is passed', () => {
    // set up
    const value = 0.8333333333333334;

    // execution
    const result = setValueAsPercentage(value);

    // expectation
    expect(result).toBe("83");
  })
})
