# Solana Auditor

Audit Solana netework with ease

- List all transactions under a Solana Wallet

## Getting Started

Install the package:

```sh
npm install @k3v-d3v/solana-auditor
```

Example usage:

```ts
import { SolanaAuditor } from "@k3v-d3v/solana-auditor";

const auditor = new SolanaAuditor();
const walletAddress = "your-wallet-address";
const transactions = await auditor.fetchTransactions(walletAddress);
console.log(JSON.stringify(transactions, null, 2));
```
