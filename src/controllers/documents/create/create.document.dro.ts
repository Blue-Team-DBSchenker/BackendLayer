export class CreateDocumentDro {
  readonly documentID: Number;
  readonly txHash: string;
  readonly success: boolean;
  readonly errorCode: Number;

  constructor(
    documentID: Number,
    txHash: string,
    success: boolean,
    errorCode: Number
  ) {
    this.documentID = documentID;
    this.txHash = txHash;
    this.success = success;
    this.errorCode = errorCode;
  }
}
