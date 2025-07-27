/**
 * Calculates the Return on Investment (ROI) as a percentage.
 *
 * Formula:
 * ROI = ((Return - Investment) / Investment) * 100
 *
 * @param {number} investment - The initial investment amount (must be > 0).
 * @param {number} actualReturn - The actual return gained from the investment.
 * @returns {number} - ROI as a percentage (can be negative if return is lower than investment).
 *
 * @throws {Error} If investment is less than or equal to 0.
 *
 * @example
 * // Returns 30
 * calculateROI(10000, 13000);
 *
 * @example
 * // Returns -20
 * calculateROI(10000, 8000);
 */
export const calculateROI = (investment: number, actualReturn: number): number => {
  if (investment <= 0) {
    throw new Error("Investment must be greater than 0.");
  }

  return ((actualReturn - investment) / investment) * 100;
}

/**
 * Calculates the target return amount based on the desired percentage of the original investment.
 *
 * @param {number} investment - The initial investment amount (must be ≥ 0).
 * @param {number} targetPercentage - The desired percentage of return (from 0 to 100).
 * @returns {number} - The target return amount the investor wants to recover.
 *
 * @throws {Error} If investment is negative or targetPercentage is out of range [0–100].
 *
 * @example
 * // Returns 6000
 * calculatePartialReturn(10000, 60);
 */
export const calculatePartialReturn = (investment: number, targetPercentage: number): number => {
  if (investment < 0 || targetPercentage < 0 || targetPercentage > 100) {
    throw new Error("Invalid input: investment must be ≥ 0 and targetPercentage between 0 and 100.");
  }
  return investment * (targetPercentage / 100);
}

/**
 * Calculates what percentage of the original investment a given return amount represents.
 *
 * Formula:
 * percentage = (desiredReturn / investment) * 100
 *
 * @param {number} investment - The original investment amount (must be > 0).
 * @param {number} desiredReturn - The amount the investor wants to recover.
 * @returns {number} - Percentage of the investment represented by the desired return.
 *
 * @throws {Error} If investment is 0 or less.
 *
 * @example
 * // Returns 60
 * calculateReturnPercentage(10000, 6000);
 */
export function calculateReturnPercentage(investment: number, desiredReturn: number): number {
  if (investment <= 0) {
    throw new Error("Investment must be greater than 0.");
  }

  return (desiredReturn / investment) * 100;
}
