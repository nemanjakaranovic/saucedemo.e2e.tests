class ItemDetailsPage {
  constructor() {
    this.addItemToCartBtn = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
  }

  addItemToCart() {
    cy.get(this.addItemToCartBtn).click();
  }
}

export default ItemDetailsPage;
