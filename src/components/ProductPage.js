import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import { mainButtonStyle, productInfoStyle, priceStyle } from './style';

const ProductPage = () => {
  const { handle } = useParams();

  const { fetchProductByHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductByHandle(handle);
  }, [fetchProductByHandle, handle]);

  if (!product.images) {
    return (
      <div>
        <Typography variant="h2" component="h2">
          Loading..
        </Typography>
      </div>
    );
  }
  return (
    <>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={5}>
          <img
            src={product.images[0].src}
            className="mainImage ds"
            alt="Product"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid sx={productInfoStyle}>
            <Typography variant="h1" component="h1" align="center">
              {product.title}
            </Typography>
            <Typography variant="body1" component="p" fontSize={30}>
              {product.description}
            </Typography>
            <Typography variant="h1" fontSize={70} sx={priceStyle}>
              $ {product.variants[0].price.amount}
            </Typography>
            <Button
              sx={mainButtonStyle}
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            >
              ADD TO CART
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
