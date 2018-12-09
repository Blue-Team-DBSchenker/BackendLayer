export class CreateDocumentDto {
  readonly speditorCompanyID: Number;
  readonly senderCompanyID: Number;
  readonly recipientCompanyID: Number;

  readonly originLatitude: Number;
  readonly originLongitude: Number;

  readonly destinationLatitude: Number;
  readonly destinationLongitude: Number;

  readonly delivieredItemHash: string;
}
