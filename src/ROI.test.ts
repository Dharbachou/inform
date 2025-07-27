import { describe, it, expect } from 'vitest';
import { calculateROI, calculatePartialReturn, calculateReturnPercentage } from './ROI';

describe('calculateROI', () => {
  it('returns positive ROI when return is greater than investment', () => {
    expect(calculateROI(10000, 13000)).toBe(30);
  });

  it('returns 0 when return equals investment', () => {
    expect(calculateROI(10000, 10000)).toBe(0);
  });

  it('returns negative ROI when return is less than investment', () => {
    expect(calculateROI(10000, 8000)).toBe(-20);
  });

  it('handles decimal return values', () => {
    expect(calculateROI(10000, 10500)).toBe(5);
  });

  it('throws error if investment is 0', () => {
    expect(() => calculateROI(0, 10000)).toThrow();
  });

  it('throws error if investment is negative', () => {
    expect(() => calculateROI(-5000, 10000)).toThrow();
  });
});

describe('calculatePartialReturn', () => {
  it('calculates correct return for 60% of 10000', () => {
    expect(calculatePartialReturn(10000, 60)).toBe(6000);
  });

  it('returns 0 when target is 0%', () => {
    expect(calculatePartialReturn(10000, 0)).toBe(0);
  });

  it('returns full investment when target is 100%', () => {
    expect(calculatePartialReturn(10000, 100)).toBe(10000);
  });

  it('throws error on negative investment', () => {
    expect(() => calculatePartialReturn(-5000, 50)).toThrow();
  });

  it('throws error on targetPercentage > 100', () => {
    expect(() => calculatePartialReturn(10000, 120)).toThrow();
  });

  it('throws error on negative targetPercentage', () => {
    expect(() => calculatePartialReturn(10000, -10)).toThrow();
  });
});

describe('calculateReturnPercentage', () => {
  it('returns correct percentage when desired return is less than investment', () => {
    expect(calculateReturnPercentage(10000, 6000)).toBe(60);
  });

  it('returns 100% when desired return equals investment', () => {
    expect(calculateReturnPercentage(10000, 10000)).toBe(100);
  });

  it('returns >100% when desired return exceeds investment', () => {
    expect(calculateReturnPercentage(10000, 12000)).toBe(120);
  });

  it('returns 0% when desired return is 0', () => {
    expect(calculateReturnPercentage(10000, 0)).toBe(0);
  });

  it('throws error if investment is 0', () => {
    expect(() => calculateReturnPercentage(0, 5000)).toThrow();
  });

  it('throws error if investment is negative', () => {
    expect(() => calculateReturnPercentage(-10000, 5000)).toThrow();
  });
});