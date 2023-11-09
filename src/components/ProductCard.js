import React, { useContext } from 'react';
import {
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { buttonStyle, cardContentStyle, cardActionsStyle } from './style';

const ProductCard = ({ product }) => {
  const { addItemToCheckout } = useContext(ShopContext);

  return (
    <Card>
      <CardMedia component="img" src={product.images[0].src} />
      <CardContent sx={cardContentStyle}>
        <Typography variant="h5" gutterBottom component="h2">
          {product.title}
        </Typography>
        <Typography variant="h5" component="h5">
          ${product.variants[0].price.amount}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={cardActionsStyle}>
        <Link to={`/product/${product.handle}`} className="link">
          <Button variant="contained" sx={buttonStyle}>
            View details
          </Button>
        </Link>
        <IconButton
          onClick={() => addItemToCheckout(product.variants[0].id, 1)}
        >
          <AddShoppingCartIcon fontSize="large" color="warning" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
