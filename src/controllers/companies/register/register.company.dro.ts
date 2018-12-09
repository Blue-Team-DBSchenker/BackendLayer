export class RegisterCompanyDro {
  readonly privateKey: string;
  readonly walletAddress: string;
  readonly companyID: Number;

  constructor(privateKey: string, walletAddress: string, companyID: Number) {
    this.privateKey = privateKey;
    this.walletAddress = walletAddress;
    this.companyID = companyID;
  }
}
