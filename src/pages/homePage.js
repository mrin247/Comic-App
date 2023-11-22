import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container, Box, styled } from "@mui/material";
import Layout from "../components/Layout";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Styled component for the Button
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px",
  height: 54,
  backgroundColor: "black",
  textTransform: "none",
  color: "white",
  "&:hover": {
    backgroundColor: "gray",
  },
  width: "30vh",
  fontWeight: "bold",
}));

const gradientStyle = {
  background: `linear-gradient(45deg, #9c27b0, #ffeb3b, #f44336, #2196f3)`,
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const HomePage = () => {
  return (
    <Layout>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "93vh",
          overflow: "hidden",
        }}
      >
        <Typography variant="h1" component="div" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem", lg: "6rem" } }}>
          <span style={{ color: "black" }}>Welcome to </span>
          <span style={gradientStyle}>COMIC·E</span>
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          COMIC·E is an AI system that can create comics from
          a description in natural language.
        </Typography>
        <Box mt={4}>
          <StyledButton
            component={Link}
            to="/generate"
            endIcon={<ArrowOutwardIcon />}
          >
            Try COMIC·E
          </StyledButton>
        </Box>
      </Container>
    </Layout>
  );
};

export default HomePage;
