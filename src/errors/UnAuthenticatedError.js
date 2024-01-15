export default class UnAuthenticatedError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 403;
    }
  }
  