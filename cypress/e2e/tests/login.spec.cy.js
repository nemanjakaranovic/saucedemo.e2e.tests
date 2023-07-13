import LoginPage from '../pages/loginPage';
import ShopPage from '../pages/shopPage';

describe('Login', () => {
  const loginPage = new LoginPage();
  const shopPage = new ShopPage();

  beforeEach(() => {
    loginPage.visit(); // Open the login page before each test
    cy.contains('Swag Labs').should('be.visible');
  });

  it('should successfully log in with valid credentials', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();

    shopPage.verifyVisibleInventoryContainer();
  });

  it('should display an error message with invalid credentials', () => {
    loginPage.fillUsername('invalid_user');
    loginPage.fillPassword('invalid_password');
    loginPage.clickLoginButton();
    loginPage.errorMessageVisible();
  });
});
