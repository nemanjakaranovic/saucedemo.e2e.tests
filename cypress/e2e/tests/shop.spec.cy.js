import LoginPage from '../pages/loginPage';
import ShopPage from '../pages/shopPage';
import ItemDetailsPage from '../pages/itemDetalsPage';

describe('Login', () => {
  const loginPage = new LoginPage();
  const shopPage = new ShopPage();
  const itemDetailsPage = new ItemDetailsPage();

  beforeEach(() => {
    loginPage.visit(); // Open the login page before each test
    cy.contains('Swag Labs').should('be.visible');
  });

  it('should successfully add an item to the cart and update cart badge', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();
    shopPage.verifyVisibleInventoryContainer();

    shopPage.addToCartBackPack();
    shopPage.shoppingCartBadgeEquals1();
  });

  it.only('should successfully update cart', () => {
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLoginButton();
    shopPage.verifyVisibleInventoryContainer();
    shopPage.addToCartBackPack();
    shopPage.shoppingCartBadgeEquals1();

    shopPage.openItem1DetailsPage();
    cy.url().should('include', `/inventory-item.html?id=1`);
    itemDetailsPage.addItemToCart();
    shopPage.openShoopingCart();
  });
});
