/**
 * Calculates a future value using a simple interest rate.
 * @param {number} principal  P — initial capital
 * @param {number} rate       r — annual rate (0.08 = 8 %)
 * @param {number} years      t — term in years
 * @returns number
 */
export const calcSimpleInterest  = ( principal: number, rate: number, years: number) => {
  return principal * (1 + rate * years);
};

/**
 * Calculates simple profit using a simple interest rate.
 * @param {number} principal  P — initial capital
 * @param {number} rate       r — annual rate (0.08 = 8 %)
 * @param {number} years      t — term in years
 * @returns number
 */
export const calcSimpleProfit = ( principal: number, rate: number, years: number) => {
  return calcSimpleInterest( principal, rate, years ) - principal;
}