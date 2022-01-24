import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material/";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShopContext } from "../context/ShopContext";
import { appBarStyle, cartIconStyle, badgeStyle, logoStyle } from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openCart, checkout } = useContext(ShopContext);

  return (
    <>
      <AppBar position="fixed" sx={appBarStyle}>
        <Toolbar>
          <Typography variant="h3" component={Link} to="/" sx={logoStyle}>
            supershop
          </Typography>
          <div className="grow" />
          <IconButton onClick={() => openCart()}>
            <Badge
              badgeContent={checkout.lineItems?.length}
              color="warning"
              overlap="circular"
              sx={badgeStyle}
            >
              <ShoppingCartIcon sx={cartIconStyle} />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="grow" />
    </>
  );
};

export default Navbar;
