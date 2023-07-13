class ShopPage {
  constructor() {
    this.inventoryContainer = '[id="inventory_container"]';
    this.addToCartBackPackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.shoppingCartLink = "//a[@class='shopping_cart_link']";
    this.shoppingCartBadge = "//span[@class='shopping_cart_badge']";
    this.item1Link = '[id="item_1_img_link"]';
  }

  verifyVisibleInventoryContainer() {
    cy.get(this.inventoryContainer).should('be.visible');
  }

  addToCartBackPack() {
    cy.get(this.addToCartBackPackBtn).click();
  }

  shoppingCartBadgeEquals1() {
    cy.xpath(this.shoppingCartBadge).should('have.text', '1');
  }

  openItem1DetailsPage() {
    cy.get(this.item1Link).click();
  }

  openShoopingCart() {
    cy.xpath(this.shoppingCartLink).click();
  }
}

export default ShopPage;
