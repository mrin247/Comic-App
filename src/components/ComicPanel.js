import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
/**
 * @author mrin247
 * @function ComicPanel
 **/

const ComicPanel = ({ imageUrl, caption }) => {
  const [image, setImage] = useState(null);
  const [showText, setShowText] = useState(false);
  const [captionText, setCaptionText] = useState("");

  useEffect(() => {
    if (imageUrl) {
      setImage(imageUrl);
      setCaptionText(caption);
    }
  }, [imageUrl, caption]);

  const handleHover = () => {
    setShowText(true);
  };

  const handleLeave = () => {
    setShowText(false);
  };

  return (
    <Card
      style={{
        margin: "10px",
        textAlign: "center",
        position: "relative",
        cursor: "pointer",
        height: "50vh",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {image && (
        <div
          style={{
            position: "relative",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            alt="Comic Panel"
            height="100%"
            image={image}
          />
          {showText && (
            <CardContent
              style={{
                position: "absolute",
                bottom: 0, 
                left: 0,
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "14px",
                padding: "8px", 
              }}
            >
              <Typography>{captionText}</Typography>
            </CardContent>
          )}
        </div>
      )}
    </Card>
  );
};

export default ComicPanel;
