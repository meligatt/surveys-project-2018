import { setValueAsPercentage, roundToNearestInteger } from '../index';

describe('setValueAsPercentage', () => {
  it('return a percentage number when valid value is passed', () => {
    const value = 0.8333333333333334;
    const result = setValueAsPercentage(value);
    expect(result).toBe('83');
  });

  it('return an error is value passed is invalid', () => {
    const value = '0.8333333333333334Lorem';
    expect(() => { setValueAsPercentage(value);} ).toThrow('Value is not a number');
  });
});

describe('roundToNearestInteger', () => {
  it('return a value rounded to the nearest integet when valid value is passed', () => {
    const value = 2.454443565;
    const result = roundToNearestInteger(value);
    expect(result).toBe(2);
  });

  it('return an error is value passed is invalid', () => {
    const value = '0.P1zz4c4t5';
    expect(() => { roundToNearestInteger(value);} ).toThrow('Value is not a number');
  });
});
