export class RegisterUserDro {
  readonly success: boolean;
  readonly responseCode: Number;
  readonly systemUserID: Number;
  readonly companyUserID: Number;

  constructor(
    succes: boolean,
    responseCode: Number,
    systemUserID: Number,
    companyUserID: Number
  ) {
    this.success = succes;
    this.responseCode = responseCode;
    this.systemUserID = systemUserID;
    this.companyUserID = companyUserID;
  }
}
