class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    console.log("Successful login.");
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}

export default new AuthenticationService();
