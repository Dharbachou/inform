import { describe, it, expect } from 'vitest';
import { calcSimpleInterest, calcSimpleProfit } from './simpleInterest.ts';

describe('calcSimpleInterest', () => {
  it('calculates future value with simple interest', () => {
    expect(calcSimpleInterest(1000, 0.1, 2)).toBe(1200);
  });

  it('returns the same principal if rate and years are 0', () => {
    expect(calcSimpleInterest(1000, 0, 0)).toBe(1000);
  });

  it('handles negative rate correctly', () => {
    expect(calcSimpleInterest(1000, -0.05, 2)).toBe(900);
  });

  it('handles zero years', () => {
    expect(calcSimpleInterest(1000, 0.1, 0)).toBe(1000);
  });
});

describe('calcSimpleProfit', () => {
  it('calculates profit correctly', () => {
    expect(calcSimpleProfit(1000, 0.1, 2)).toBe(200);
  });

  it('returns 0 if rate and years are 0', () => {
    expect(calcSimpleProfit(1000, 0, 0)).toBe(0);
  });

  it('returns negative profit for negative rate', () => {
    expect(calcSimpleProfit(1000, -0.1, 1)).toBe(-100);
  });
});