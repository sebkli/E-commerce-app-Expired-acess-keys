import React, { useContext } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import {
  itemImageStyle,
  itemActionsStyle,
  itemContentStyle,
  itemNameStyle,
} from "./style";
import { ShopContext } from "../context/ShopContext";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const CartItem = ({ item }) => {
  const { deleteLineItem } = useContext(ShopContext);

  return (
    <Card>
      <CardMedia
        component="img"
        src={item.variant.image.src}
        sx={itemImageStyle}
      />
      <CardContent sx={itemContentStyle}>
        <Typography variant="h3" gutterBottom component="h2" sx={itemNameStyle}>
          {item.title} <br />
          Quantity {item.quantity}
        </Typography>
        <Typography variant="h4" component="h5">
          ${item.variant.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={itemActionsStyle}>
        <IconButton onClick={() => deleteLineItem(item.id)}>
          <RemoveShoppingCartIcon sx={{ fontSize: "3.5rem" }} color="warning" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
