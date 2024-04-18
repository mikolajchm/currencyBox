import { convertUSDToPLN } from './../convertUSDToPLN';

describe('ConvertUSDtoPLN', () => {
  it('should return proper value when good input', () => {
    expect(convertUSDToPLN(1)).toBe('PLN 3.50');
    expect(convertUSDToPLN(2)).toBe('PLN 7.00');
    expect(convertUSDToPLN(20)).toBe('PLN 70.00');
    expect(convertUSDToPLN(12)).toBe('PLN 42.00');
  });
  it('should return NaN when input is text', () => {
    expect(convertUSDToPLN('6')).toBeNaN();
    expect(convertUSDToPLN('abc')).toBeNaN();
    expect(convertUSDToPLN(';cdja')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertUSDToPLN()).toBeNaN();
  });
  it('should return "Error" when input is different than number and string', () => {
    expect(convertUSDToPLN({})).toBe('Error');
    expect(convertUSDToPLN([])).toBe('Error');
    expect(convertUSDToPLN(null)).toBe('Error');
    expect(convertUSDToPLN(function() {})).toBe('Error');
  })
  it('should return $0.00 when input is < 0', () => {
    expect(convertUSDToPLN(-2)).toBe('$0.00');
    expect(convertUSDToPLN(-4)).toBe('$0.00');
    expect(convertUSDToPLN(-1)).toBe('$0.00');
    expect(convertUSDToPLN(-3)).toBe('$0.00');
  });
});