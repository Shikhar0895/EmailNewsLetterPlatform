export class AuthRequiredError extends Error {
  constructor(message = "This is a testing error") {
    super(message);
    this.name = "AuthRequired Error";
  }
}
