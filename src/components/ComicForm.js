import React, { useState } from "react";
import { TextField, Button, Grid, Container, styled, Box, Typography } from "@mui/material";
/**
 * @author mrin247
 * @function ComicForm
 **/

// Styled component for the Button
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px", 
  height: 54, 
  backgroundColor: "black", 
  color: "white", 
  textTransform: "none",
  "&:hover": {
    backgroundColor: "gray", 
  },
  fontWeight: "bold",
}));

const ComicForm = ({
  onSubmit,
  imagesCreated,
  onDownloadPDF,
  setPdfTitleCallback,
}) => {
  const [panelIndex, setPanelIndex] = useState(0);
  const [panelText, setPanelText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleInputChange = (event) => {
    setPanelText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if panelText is empty
    if (!panelText.trim()) {
      alert("Please add instruction for image generation!");
      return;
    }
    onSubmit(panelText, panelIndex);
    setPanelText("");
    setPanelIndex((prevIndex) => (prevIndex + 1) % 10); // Cycle through panels 0-9
  };

  const downloadPDF = (e) => {
    e.preventDefault();
    // Check if title is empty
    if (!title || !title.trim()) {
      alert("Please add a title for the comic!");
      return;
    }

    setPdfTitleCallback({title, author});

    setAuthor("");
    setTitle("");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 15,
        marginBottom: 4,
        width: "100%", 
      }}
    >
      {imagesCreated < 10 ? (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              fullWidth
              value={panelText}
              placeholder={`Panel ${panelIndex + 1} instruction...`}
              color="secondary"
              onChange={handleInputChange}
              autoComplete="off"
              InputProps={{
                sx: {
                  borderRadius: "40px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  "&:hover": {
                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                  },
                  "&:focus": {
                    borderColor: "black",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <StyledButton
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleSubmit}
            >
              Generate
            </StyledButton>
          </Grid>
        </Grid>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                fullWidth
                value={title}
                placeholder="Enter title..."
                color="secondary"
                autoComplete="off"
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "40px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    "&:hover": {
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                    },
                    "&:focus": {
                      borderColor: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                fullWidth
                value={author}
                placeholder="Enter Author Name..."
                color="secondary"
                autoComplete="off"
                onChange={(e) => setAuthor(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "40px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    "&:hover": {
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                    },
                    "&:focus": {
                      borderColor: "black",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <StyledButton variant="contained" fullWidth onClick={downloadPDF}>
                Download PDF
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 2,
          color: "rgb(119 119 119)",
          fontWeight:'bold'
        }}
      >
        {imagesCreated < 10 ? <Typography variant="h6" color="inherit" style={{ marginLeft: 16 }}>
          Generate {10 - imagesCreated} more images to create a comic!
        </Typography>: <Typography>Enter a title and download & share. Thank you, Happy Creativity!</Typography>}
        
      </Box>
    </Container>
  );
};

export default ComicForm;
