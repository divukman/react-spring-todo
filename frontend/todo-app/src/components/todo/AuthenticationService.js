import axios from "axios";
const AUTHENTICATED_USER = "authenticatedUser"; //nemam pojma kako public static final stavit u JSu

class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: {
        authorization: this.createBasicAuthToken(username, password)
      }
    });
  }

  executeJWTAuthenticationService(username, password) {
    return axios.post("http://localhost:8080/authenticate", {
      username,
      password
    });
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username, password) {
    console.log("Successful login.");
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  createJWTAuthToken(token) {
    return "Bearer " + token;
  }

  registerSuccessfulLoginForJWT(username, token) {
    console.log("Successful login.");
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    this.setupAxiosInterceptors(this.createJWTAuthToken(token));
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn() {
    return sessionStorage.getItem(AUTHENTICATED_USER) !== null;
  }

  getLoggedInUsername() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
      ? sessionStorage.getItem(AUTHENTICATED_USER)
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
