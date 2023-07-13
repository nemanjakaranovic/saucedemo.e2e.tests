class LoginPage {
  constructor() {
    this.usernameInput = '[data-test="username"]';
    this.passwordInput = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
  }

  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }
}

export default LoginPage;
