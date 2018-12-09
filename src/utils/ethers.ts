import { abi } from "./abi";
import { ethers } from "ethers";

export class BlockchainClient {
  public contract: any;
  public ethers: any;
  public accounts: any;
  public provider: any;
  public wallet: any;
  constructor(privateKey: string) {
    const contractAddress: string =
      "0x1a6bbc4f4759053a3eac90ecf2b8458c26c6420f";
    this.provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:7545"
    );
    this.contract = new ethers.Contract(
      contractAddress,
      abi,
      new ethers.Wallet(privateKey, this.provider)
    );
  }
}
