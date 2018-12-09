import { abi } from "./abi";

const Web3 = require("web3");

export class BlockchainClient {
  public contract: any;
  public web3: any;
  public accounts: any;
  constructor() {
    this.web3 = new Web3();

    this.web3.setProvider(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );

    this.contract = new this.web3.eth.Contract(
      abi,
      "0x1a6bbc4f4759053a3eac90ecf2b8458c26c6420f",
      { gasLimit: "200000" }
    );

    this.web3.eth.getAccounts().then(accounts => {
      this.accounts = accounts;
    });
  }
}
