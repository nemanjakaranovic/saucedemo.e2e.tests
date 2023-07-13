class LoginPage {
  constructor() {
    this.usernameInput = '[data-test="username"]';
    this.passwordInput = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.errorMessage = '[data-test="error"]';
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

  errorMessageVisible() {
    cy.get(this.errorMessage).should('be.visible');
    cy.get(this.errorMessage).should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service'
    );
  }
}

export default LoginPage;
