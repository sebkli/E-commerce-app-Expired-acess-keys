const drawerWidth = 0;

export const appBarStyle = {
  backgroundColor: "#0e0d0d",
  color: "#fefefe",
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
};

export const cartIconStyle = {
  color: "#fefefe",
  fontSize: "2.5rem",
};

export const logoStyle = {
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
  color: "#fcba03",
};

export const badgeStyle = {
  "& .MuiBadge-badge": { fontSize: 25 },
};

export const buttonStyle = {
  color: "#fcba03",
  backgroundColor: "#0e0d0d",
  fontWeight: "bold",
  "&:hover": {
    opacity: "0.82",
    backgroundColor: "#0e0d0d",
    color: "#fcba03",
  },
};

export const cardContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  height: "45px",
};

export const cardActionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  height: "45px",
};

export const mainButtonStyle = {
  height: "4rem",
  fontSize: "2rem",
  color: "#fcba03",
  width: "90%",
  backgroundColor: "#0e0d0d",
  fontWeight: "bold",
  "&:hover": {
    opacity: "0.82",
    backgroundColor: "#0e0d0d",
    color: "#fcba03",
  },
};

export const productInfoStyle = {
  width: "95%",
  height: "500px",
  margin: "2rem",
  paddingRight: "3rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  wordWrap: "breakWord",
};

export const itemImageStyle = {
  width: "35%",
  height: "35%",
};

export const priceStyle = {
  color: "#238006",
};

export const cartFontStyle = {
  fontWeight: "bold",
};

export const drawerStyle = {
  width: "auto",
  maxWidth: "1000px",
};

export const itemContentStyle = {
  width: "100%",
};
export const itemActionsStyle = {
  width: "5%",
};

export const itemNameStyle = {
  fontSize: "2.5rem",
  overflowWrap: "break-word",
};

export const footerStyle = {
  backgroundColor: "#0e0d0d",
  color: "#fcba03",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  justifyContent: "center",
};

export const footerIconStyle = {
  fontSize: "3rem",
  color: "#fcba03",
};
