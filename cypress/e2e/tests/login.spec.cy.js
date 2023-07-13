import LoginPage from '../pages/loginPage';

describe('Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit(); // Open the login page before each test
    cy.contains('Swag Labs').should('be.visible');
  });

  it.only('should successfully log in with valid credentials', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();

    // Add your assertions or further test steps here
  });

  it('should display an error message with invalid credentials', () => {
    loginPage.fillUsername('invalid_user');
    loginPage.fillPassword('invalid_password');
    loginPage.clickLoginButton();

    // Add your assertions or further test steps here
  });
});
