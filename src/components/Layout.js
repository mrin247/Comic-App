import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";
import BoltIcon from '@mui/icons-material/Bolt';

/**
 * @author mrin247
 * @function Layout
 **/



const Layout = ({ children }) => {
  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          height: "48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "rgb(119 119 119)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link
              to="/"
              component={NavLink}
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
                marginRight: "15px",
              }}
            >
              <BoltIcon/>
              COMIC·E
            </Link>
          </Typography>
          <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link
              component={NavLink}
              to="/generate"
              underline="none"
              color="inherit"
              style={{ marginRight: 15 }}
            >
              Generate
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Divider />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
