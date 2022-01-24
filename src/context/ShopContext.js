import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_KEY,
});

const checkout_ID = localStorage.checkout_ID;

class ShopProvider extends Component {
  state = {
    product: {},
    productsList: [],
    checkout: {},
    isCartOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout_ID) {
      this.fetchCheckout(localStorage.checkout_ID);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_ID", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
  };

  deleteLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ productsList: products });
  };

  fetchProductByHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          addItemToCheckout: this.addItemToCheckout,
          deleteLineItem: this.deleteLineItem,
          fetchProductByHandle: this.fetchProductByHandle,
          fetchAllProducts: this.fetchAllProducts,
          openCart: this.openCart,
          closeCart: this.closeCart,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer, ShopProvider };
