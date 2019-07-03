import axios from "axios";
const AUTHENTICATED_USER = "authenticatedUser"; //nemam pojma kako public static final stavit u JSu

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Successful login.");
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    const basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    this.setupAxiosInterceptors(basicAuthHeader);
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

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use(config => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
