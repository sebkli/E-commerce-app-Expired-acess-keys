import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ProductsList = () => {
  const { fetchAllProducts, productsList } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (productsList.length === 0) {
    return (
      <div>
        <Typography variant="h2" component="h2">
          Loading..
        </Typography>
      </div>
    );
  }
  return (
    <Grid container justifyContent="center" spacing={4}>
      {productsList.map((product) => (
        <Grid key={product.id} item xs={12} md={4} lg={2}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
