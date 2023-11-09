import React, { useContext } from 'react';
import { Drawer, Typography, Grid, Button } from '@mui/material';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import { cartFontStyle, drawerStyle, mainButtonStyle } from './style';

const Cart = () => {
  const { checkout, closeCart, isCartOpen } = useContext(ShopContext);

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => closeCart()}
        sx={drawerStyle}
      >
        <Typography
          variant="h1"
          component="h2"
          align="center"
          sx={cartFontStyle}
        >
          Your cart
        </Typography>
        {checkout.lineItems === 0 && (
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={cartFontStyle}
          >
            Your cart is empty
          </Typography>
        )}

        <Grid container direction="row" sx={drawerStyle}>
          {checkout.lineItems &&
            checkout.lineItems.map((item) => [
              <Grid item xs={7} lg={6} key={item.id}>
                <CartItem item={item} />
              </Grid>,
            ])}
        </Grid>
        {checkout.totalPrice > 0 && (
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={cartFontStyle}
          >
            Subtotal <br />
            {checkout.totalPrice}$ <br />
            <a href={checkout.webUrl} className="link">
              <Button sx={mainButtonStyle}>Checkout</Button>
            </a>
          </Typography>
        )}
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;
