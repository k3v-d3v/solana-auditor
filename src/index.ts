import {
  Connection,
  PublicKey,
  ParsedTransactionWithMeta,
} from "@solana/web3.js";

export class SolanaAuditor {
  private connection: Connection;

  constructor(rpcUrl: string = "https://api.mainnet-beta.solana.com") {
    this.connection = new Connection(rpcUrl);
  }

  async fetchTransactions(
    walletAddress: string
  ): Promise<ParsedTransactionWithMeta[]> {
    const publicKey = new PublicKey(walletAddress);
    const signatures = await this.connection.getSignaturesForAddress(publicKey);
    const signatureStrings = signatures.map((sig) => sig.signature);
    const transactions = await this.connection.getParsedTransactions(
      signatureStrings
    );
    return transactions.filter(
      (tx): tx is ParsedTransactionWithMeta => tx !== null
    );
  }
}
