import axios from "axios";
import { API_URL } from "../../Constants";

export const USERNAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser";

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get(`${API_URL}/basicauth`, {
      headers: {
        authorization: this.createBasicAuthToken(username, password)
      }
    });
  }

  executeJWTAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    console.log("Successful login.");
    sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  createJWTAuthToken(token) {
    return "Bearer " + token;
  }

  registerSuccessfulLoginForJWT(username, token) {
    console.log("Successful login.");
    sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJWTAuthToken(token));
  }

  logout() {
    sessionStorage.removeItem(USERNAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    return sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME) !== null;
  }

  getLoggedInUsername() {
    return sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
      ? sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE_NAME)
      : "";
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
