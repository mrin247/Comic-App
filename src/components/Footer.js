import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
/**
 * @author mrin247
 * @function Footer
 **/

export const Footer = (props) => {
  return (
    <Box
      bottom={0}
      left={0}
      width="100%"
      backgroundColor="white"
      textAlign="center"
      padding={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <MuiLink
        href="https://github.com/mrin247"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <GitHubIcon style={{ marginRight: "4px" }} />
      </MuiLink>
      <Typography variant="body2">
        <MuiLink
          href="https://mrin247.github.io/mrinmoymondal/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          Mrinmoy Mondal
        </MuiLink>{" "}
      </Typography>
    </Box>
  );
};
