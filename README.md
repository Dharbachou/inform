# 📊 @investo/invform

A versatile and developer-friendly library of core investment formulas, including NPV, IRR, ROI, DCF, and more — ideal for financial modeling, analytics, and automation.

## Table of Contents

- [Features](#Features)
- [Installation](#Installation)
- [Examples](#Examples)

---

## Features

- 📈 Net Present Value (NPV)
- 📉 Internal Rate of Return (IRR)
- 💰 Return on Investment (ROI)
- 📆 Discounted Cash Flow (DCF)
- 🧮 Time Value of Money calculations
- 🔧 Typed and well-documented functions

---

## Installation

```bash
npm install @investo/invform
```

## Examples

### 📈 calculateInvestment

Calculates the total investment based on the number of assets, price per asset, and optional fee.

📦 Import
```ts
import { calculateInvestment  } from "@inveto/invform"
```

🧮 Signature
```ts
calculateInvestment(amount: number, pricePerAsset: number, fee?: number): number
```

📋 Parameters
 - `amount (number)`: The number of assets purchased. Must be greater than or equal to 0.
 - `pricePerAsset (number)`: The price of a single asset. Must be greater than or equal to 0.
 - `fee (number, optional, default = 0)`: Transaction fee. Must be greater than or equal to 0.

🧪 Usage Examples
```ts
calculateInvestment(10, 100, 5); // => 1005

calculateInvestment(10, 100); // => 1000 (if fee is not provided)
```

### 📉 calculateAssetsFromInvestment

Calculates how many assets can be purchased with a given investment, price per coin, and optional fee.

📦 Import
```ts
import { calculateAssetsFromInvestment  } from "@inveto/invform"
```

🧮 Signature
```ts
calculateAssetsFromInvestment(investment: number, pricePerAsset: number, fee?: number): number
```

📋 Parameters
 - `investment (number)`: Total amount of money available. Must be ≥ 0.
 - `pricePerAsset (number)`: Price of a single asset. Must be > 0.
 - `fee (number, optional, default = 0)`: Optional transaction fee. Must be ≥ 0.

🧪 Usage Examples
```ts
calculateAssetsFromInvestment(1000, 100, 50); // => 9.5
```

### 💰 calculatePricePerAsset

Calculates the effective price per asset based on the total investment amount, the number of assets received, and an optional fee.

📦 Import
```ts
import { calculatePricePerAsset  } from "@inveto/invform"
```

🧮 Signature
```ts
calculatePricePerAsset(investment: number, amount: number, fee?: number): number
```

📋 Parameters
 - `investment (number)`: Total amount spent. Must be ≥ 0.
 - `amount (number)`: Number of assets received. Must be > 0.
 - `fee (number, optional, default = 0)`: Optional transaction fee. Must be ≥ 0.

🧪 Usage Examples
```ts
calculatePricePerAsset(1050, 10, 50); // => 100
```

### 💵 calculateNetSaleProceeds

Calculates the net proceeds from selling assets, subtracting any transaction fee from the total sale value.

📦 Import
```ts
import { calculateNetSaleProceeds  } from "@inveto/invform"
```

🧮 Signature
```ts
calculateNetSaleProceeds(amount: number, price: number, fee?: number): number
```

📋 Parameters
 - `amount (number)`: Number of assets sold. Must be ≥ 0.
 - `price (number)`: Selling price per asset. Must be ≥ 0.
 - `fee (number, optional, default = 0)`: Transaction fee. Must be ≥ 0.

🧪 Usage Examples
```ts
calculateNetSaleProceeds(10, 50, 20); // => 480
```

### 📊 calculateProfit

Calculates the profit (or loss) from selling an asset.

📦 Import
```ts
import { calculateProfit  } from "@inveto/invform"
```

🧮 Signature
```ts
calculateProfit(saleProceeds: number, investment: number): number
```

📋 Parameters
 - `saleProceeds (number)`: The amount received from selling the asset. Must be ≥ 0.
 - `investment (number)`: The total amount originally invested. Must be ≥ 0.

🧪 Usage Examples
```ts
calculateProfit(1100, 900); // => 200
```

### 🏦 calculateRemainingInvestment

Calculates the remaining investment after a partial withdrawal.

📦 Import
```ts
import { calculateRemainingInvestment  } from "@inveto/invform"
```

🧮 Signature
```ts
calculateProfit(initialInvestment: number, withdrawnAmount: number): number
```

📋 Parameters
 - `initialInvestment (number)`: The original total investment. Must be ≥ 0.
 - `withdrawnAmount (number)`: The amount withdrawn. Must be ≥ 0.

🧪 Usage Examples
```ts
calculateRemainingInvestment(10000, 4000); // => 6000
```