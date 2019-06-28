const AUTHENTICATED_USER = "authenticatedUser"; //nemam pojma kako public static final stavit u JSu

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Successful login.");
    sessionStorage.setItem(AUTHENTICATED_USER, username);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn() {
    return sessionStorage.getItem(AUTHENTICATED_USER) !== null;
  }
}

export default new AuthenticationService();
