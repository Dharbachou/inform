import {describe, it, expect} from 'vitest';
import {
  calculateInvestment,
  calculateAssetsFromInvestment,
  calculatePricePerAsset,
  calculateNetSaleProceeds,
  calculateProfit,
  calculateRemainingInvestment
} from './baseFinance';

describe('calculateInvestment', () => {
  it('calculates investment with fee', () => {
    expect(calculateInvestment(10, 100, 5)).toBe(1005);
  });

  it('calculates investment without fee', () => {
    expect(calculateInvestment(10, 100)).toBe(1000);
  });

  it('returns 0 for zero amount and price', () => {
    expect(calculateInvestment(0, 0)).toBe(0);
  });

  it('throws error for negative amount', () => {
    expect(() => calculateInvestment(-1, 100)).toThrow();
  });

  it('throws error for negative pricePerCoin', () => {
    expect(() => calculateInvestment(10, -100)).toThrow();
  });

  it('throws error for negative fee', () => {
    expect(() => calculateInvestment(10, 100, -5)).toThrow();
  });
});

describe('calculateCoinsFromInvestment', () => {
  it('calculates coins with fee', () => {
    expect(calculateAssetsFromInvestment(1000, 100, 50)).toBe(9.5);
  });

  it('calculates coins without fee', () => {
    expect(calculateAssetsFromInvestment(1000, 100)).toBe(10);
  });

  it('returns 0 if fee >= investment', () => {
    expect(calculateAssetsFromInvestment(100, 10, 100)).toBe(0);
    expect(calculateAssetsFromInvestment(100, 10, 150)).toBe(0);
  });

  it('throws if pricePerCoin <= 0', () => {
    expect(() => calculateAssetsFromInvestment(1000, 0, 50)).toThrow();
    expect(() => calculateAssetsFromInvestment(1000, -10, 50)).toThrow();
  });

  it('throws if investment or fee is negative', () => {
    expect(() => calculateAssetsFromInvestment(-1000, 100)).toThrow();
    expect(() => calculateAssetsFromInvestment(1000, 100, -5)).toThrow();
  });
});

describe('calculatePricePerCoin', () => {
  it('calculates correct price with fee', () => {
    expect(calculatePricePerAsset(1050, 10, 50)).toBe(100);
  });

  it('calculates correct price without fee', () => {
    expect(calculatePricePerAsset(1000, 10)).toBe(100);
  });

  it('returns 0 if fee is greater than investment', () => {
    expect(calculatePricePerAsset(50, 10, 100)).toBe(0);
  });

  it('throws error if amount is zero or negative', () => {
    expect(() => calculatePricePerAsset(1000, 0)).toThrow();
    expect(() => calculatePricePerAsset(1000, -5)).toThrow();
  });

  it('throws error if investment or fee is negative', () => {
    expect(() => calculatePricePerAsset(-1000, 10)).toThrow();
    expect(() => calculatePricePerAsset(1000, 10, -10)).toThrow();
  });
});

describe('calculateNetSaleProceeds', () => {
  it('calculates net proceeds with fee', () => {
    expect(calculateNetSaleProceeds(10, 50, 20)).toBe(480);
  });

  it('calculates net proceeds with zero fee', () => {
    expect(calculateNetSaleProceeds(10, 50)).toBe(500);
  });

  it('returns 0 if fee exceeds gross sale', () => {
    expect(calculateNetSaleProceeds(1, 10, 15)).toBe(0);
  });

  it('throws for negative amount, price, or fee', () => {
    expect(() => calculateNetSaleProceeds(-1, 50, 10)).toThrow();
    expect(() => calculateNetSaleProceeds(1, -50, 10)).toThrow();
    expect(() => calculateNetSaleProceeds(1, 50, -10)).toThrow();
  });
});

describe('calculateProfit', () => {
  it('returns positive profit', () => {
    expect(calculateProfit(1100, 900)).toBe(200);
  });

  it('returns zero profit when break-even', () => {
    expect(calculateProfit(1000, 1000)).toBe(0);
  });

  it('returns negative profit (loss)', () => {
    expect(calculateProfit(800, 1000)).toBe(-200);
  });

  it('throws error for negative inputs', () => {
    expect(() => calculateProfit(-100, 100)).toThrow();
    expect(() => calculateProfit(1000, -100)).toThrow();
  });
});

describe('calculateRemainingInvestment', () => {
  it('calculates correct remaining investment', () => {
    expect(calculateRemainingInvestment(10000, 4000)).toBe(6000);
  });

  it('returns 0 if all funds withdrawn', () => {
    expect(calculateRemainingInvestment(5000, 5000)).toBe(0);
  });

  it('returns 0 if withdrawn more than invested', () => {
    expect(calculateRemainingInvestment(3000, 5000)).toBe(0);
  });

  it('throws for negative inputs', () => {
    expect(() => calculateRemainingInvestment(-1000, 500)).toThrow();
    expect(() => calculateRemainingInvestment(1000, -500)).toThrow();
  });
});