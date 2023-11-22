import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar
        position="static"
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
                color:"black",
                fontWeight:'bold',
                textDecoration: "none",
                marginRight: "15px",
                
              }}
            >
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
            <Link
              component={NavLink}
              to="/another-route"
              underline="none"
              color="inherit"
              style={{ marginRight: 15 }}
            >
              Another Route
            </Link>
            <Link
              component={NavLink}
              to="/yet-another-route"
              underline="none"
              color="inherit"
            >
              Yet Another Route
            </Link>
          </div>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
      <Divider/>
      <Container>{children}</Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          padding: 2,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <GitHubIcon />
        <Typography variant="body2" sx={{ marginLeft: 1 }}>
          Follow us on GitHub for updates
        </Typography>
      </Box>
    </div>
  );
};

export default Layout;
