import React from "react";
import ComicPanel from "./ComicPanel";
import { Box, Container, Grid } from "@mui/material";

/**
 * @author mrin247
 * @function ComicStrip
 **/

const ComicStrip = ({ comicData }) => {
  console.log(comicData);
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
        marginBottom: 4,
        
        
      }}
    >
      <Box>
        <Grid container spacing={1}>
          {comicData.map(({ imageUrl, caption }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              {imageUrl && <ComicPanel imageUrl={imageUrl} caption={caption} />}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ComicStrip;
