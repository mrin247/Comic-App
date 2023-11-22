import React, { useState } from "react";
import { TextField, Button, Grid, Container, styled } from "@mui/material";

// Styled component for the Button
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px", // Match border radius
  height: 54, // Match height to TextField
  backgroundColor: 'black', // Set background color to black
  color: 'white', // Set text color to white
  textTransform: 'none',
  "&:hover": {
    backgroundColor: 'gray', // Change hover background color if needed
  },
  fontWeight: 'bold',
}));

const ComicForm = ({ onSubmit, imagesCreated, onDownloadPDF, setPdfTitleCallback }) => {
  const [panelIndex, setPanelIndex] = useState(0);
  const [panelText, setPanelText] = useState("");
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setPanelText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(panelText, panelIndex);
    setPanelText("");
    setPanelIndex((prevIndex) => (prevIndex + 1) % 10); // Cycle through panels 0-9
  };

  const downloadPDF=(e)=>{
    e.preventDefault();

    setPdfTitleCallback(title);

  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      {imagesCreated < 10 ? (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={9}>
              <TextField
                variant="outlined"
                fullWidth
                value={panelText}
                placeholder={`Panel ${panelIndex + 1} instructions..`}
                color="secondary"
                onChange={handleInputChange}
                InputProps={{
                  sx: {
                    borderRadius: "40px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    "&:hover": {
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                    },
                    "&:focus": {
                      borderColor: "black", // Set border color on focus to black
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <StyledButton type="submit" variant="contained" fullWidth onClick={handleSubmit}>
                Generate
              </StyledButton>
            </Grid>
          </Grid>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <TextField
                variant="outlined"
                fullWidth
                value={title}
                placeholder="Enter title..."
                color="secondary"
                onChange={(e) => setTitle(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "40px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                    "&:hover": {
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
                    },
                    "&:focus": {
                      borderColor: "black", // Set border color on focus to black
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <StyledButton variant="contained" fullWidth>
                Share
              </StyledButton>
            </Grid>
            <Grid item xs={2}>
              <StyledButton variant="contained" fullWidth onClick={downloadPDF}>
                Download PDF
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Container>
  );
};

export default ComicForm;
