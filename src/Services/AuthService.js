import AuthConnector from "../Connectors/AuthConnector";

export default class AuthService {
  static loginHandler(login, password) {
    return AuthConnector.loginHandler(login, password);
  }

  static registerHandler(login, password) {
    return AuthConnector.registerHandler(login, password);
  }

  static resetPassword(email) {
    return AuthConnector.resetPassword(email);
  }
}
