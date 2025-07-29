/**
 * Calculates the total investment based on the number of assets, price per asset, and optional fee.
 *
 * @param {number} amount - The number of assets purchased (must be ≥ 0).
 * @param {number} pricePerAsset - The price of one asset (must be ≥ 0).
 * @param {number} [fee=0] - Optional transaction fee (can be 0, must be ≥ 0).
 * @returns {number} - The total investment amount.
 *
 * @throws {Error} If any of the inputs are negative.
 *
 * @example
 * // Returns 1005
 * calculateInvestment(10, 100, 5);
 *
 * @example
 * // Returns 1000 (no fee)
 * calculateInvestment(10, 100);
 */
export const calculateInvestment = (
  amount: number,
  pricePerAsset: number,
  fee: number = 0
): number => {
  if (amount < 0 || pricePerAsset < 0 || fee < 0) {
    throw new Error("All inputs must be ≥ 0.");
  }

  return (amount * pricePerAsset) + fee;
}

/**
 * Calculates how many coins can be purchased with a given investment, price per asset, and optional fee.
 *
 * Formula:
 * coins = (investment - fee) / pricePerAsset
 *
 * @param {number} investment - The total amount of money available (must be ≥ 0).
 * @param {number} pricePerAsset - The price of a single asset (must be > 0).
 * @param {number} [fee=0] - Optional transaction fee (must be ≥ 0).
 * @returns {number} - The number of coins that can be purchased.
 *
 * @throws {Error} If pricePerAsset <= 0 or any input is negative.
 *
 * @example
 * // Returns 9.5
 * calculateAssetsFromInvestment(1000, 100, 50);
 */
export const calculateAssetsFromInvestment = (
  investment: number,
  pricePerAsset: number,
  fee: number = 0
): number => {
  if (investment < 0 || pricePerAsset <= 0 || fee < 0) {
    throw new Error("Invalid input: all values must be ≥ 0 and pricePerAsset must be > 0.");
  }

  const netInvestment = investment - fee;
  if (netInvestment < 0) return 0;

  return netInvestment / pricePerAsset;
}

/**
 * Calculates the effective price per coin based on total investment, number of coins received, and optional fee.
 *
 * Formula:
 * pricePerAsset = (investment - fee) / amount
 *
 * @param {number} investment - Total investment amount (must be ≥ 0).
 * @param {number} amount - Number of coins received (must be > 0).
 * @param {number} [fee=0] - Optional fee (must be ≥ 0).
 * @returns {number} - The price paid per coin.
 *
 * @throws {Error} If amount <= 0 or any input is negative.
 *
 * @example
 * // Returns 100
 * calculatePricePerAsset(1050, 10, 50);
 */
export const calculatePricePerAsset = (
  investment: number,
  amount: number,
  fee: number = 0
): number => {
  if (investment < 0 || amount <= 0 || fee < 0) {
    throw new Error("Invalid input: investment and fee must be ≥ 0, amount must be > 0.");
  }

  const netInvestment = investment - fee;
  if (netInvestment < 0) return 0;

  return netInvestment / amount;
}

/**
 * Calculates the net proceeds from selling assets after deducting transaction fees.
 *
 * Formula:
 * netProceeds = (amount * price) - fee
 *
 * @param {number} amount - Number of assets sold (must be ≥ 0)
 * @param {number} price - Selling price per unit (must be ≥ 0)
 * @param {number} [fee=0] - Transaction fee (must be ≥ 0)
 * @returns {number} - Net amount received after the fee
 *
 * @throws {Error} If any input is negative
 *
 * @example
 * // Returns 480
 * calculateNetSaleProceeds(10, 50, 20);
 */
export function calculateNetSaleProceeds(
  amount: number,
  price: number,
  fee: number = 0
): number {
  if (amount < 0 || price < 0 || fee < 0) {
    throw new Error("All inputs must be ≥ 0.");
  }

  const gross = amount * price;
  const net = gross - fee;
  return net >= 0 ? net : 0;
}

/**
 * Calculates the profit (or loss) from selling an asset.
 *
 * Formula:
 * profit = saleProceeds - investment
 *
 * @param {number} saleProceeds - The amount received from selling the asset (must be ≥ 0)
 * @param {number} investment - The total amount originally invested (must be ≥ 0)
 * @returns {number} - The profit (can be negative if there’s a loss)
 *
 * @throws {Error} If any input is negative
 *
 * @example
 * // Returns 200
 * calculateProfit(1100, 900);
 */
export function calculateProfit(
  saleProceeds: number,
  investment: number
): number {
  if (saleProceeds < 0 || investment < 0) {
    throw new Error("Inputs must be ≥ 0.");
  }

  return saleProceeds - investment;
}

/**
 * Calculates the remaining investment after a partial withdrawal.
 *
 * Formula:
 * remaining = initialInvestment - withdrawnAmount
 *
 * @param {number} initialInvestment - The total original investment (must be ≥ 0)
 * @param {number} withdrawnAmount - The amount withdrawn (must be ≥ 0)
 * @returns {number} - The remaining investment (never less than 0)
 *
 * @throws {Error} If any input is negative
 *
 * @example
 * // Returns 6000
 * calculateRemainingInvestment(10000, 4000);
 */
export function calculateRemainingInvestment(
  initialInvestment: number,
  withdrawnAmount: number
): number {
  if (initialInvestment < 0 || withdrawnAmount < 0) {
    throw new Error("Inputs must be ≥ 0.");
  }

  const remaining = initialInvestment - withdrawnAmount;
  return remaining >= 0 ? remaining : 0;
}