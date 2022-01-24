import React from "react";
import { Box, IconButton, Typography } from "@mui/material/";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { footerStyle, footerIconStyle } from "./style";

const Footer = () => {
  return (
    <>
      <div className="grow" />
      <Box sx={footerStyle}>
        <Typography variant="h4" align="center">
          Find us here
        </Typography>
        <IconButton sx={{ gap: "0.5rem" }}>
          <a href="https://twitter.com/?lang=pl">
            <TwitterIcon sx={footerIconStyle} />
          </a>
          <a href="https://pl-pl.facebook.com/">
            <FacebookIcon sx={footerIconStyle} />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon sx={footerIconStyle} />
          </a>
        </IconButton>
      </Box>
    </>
  );
};

export default Footer;
