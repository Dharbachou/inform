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

Calculates the total investment based on the number of coins, price per coin, and optional fee.

📦 Import
```ts
import { calculateInvestment  } from "@inveto/invform"
```

🧮 Signature

```ts
calculateInvestment(amount: number, pricePerAsset: number, fee?: number): number
```

📋 Parameters
 - amount (number): The number of assets purchased. Must be greater than or equal to 0.
 - pricePerAsset (number): The price of a single asset. Must be greater than or equal to 0.
 - fee (number, optional, default = 0): Transaction fee. Must be greater than or equal to 0.

🧪 Usage Examples

```ts
calculateInvestment(10, 100, 5);
// => 1005

calculateInvestment(10, 100);
// => 1000 (if fee is not provided)
```

