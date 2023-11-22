import React, { useEffect, useState } from 'react';
import { query } from '../api';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ComicPanel = ({ text }) => {
  const [image, setImage] = useState(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        const response = await query({ inputs: text });
        setImage(URL.createObjectURL(response));
      } catch (error) {
        console.error('Error generating image:', error);
        // Handle the error or set a default image URL
        setImage('https://example.com/default-image.png');
      }
    };

    if (text) {
      generateImage();
    }
  }, [text]);

  const handleHover = () => {
    setShowText(true);
  };

  const handleLeave = () => {
    setShowText(false);
  };

  return (
    <Card
      style={{
        margin: '10px',
        textAlign: 'center',
        position: 'relative',
        cursor: 'pointer',
        height: '150px', // Set a fixed height for the Card
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {image && (
        <div
          style={{
            position: 'relative',
            height: '100%', // Ensure the inner div takes up full height
          }}
        >
          <CardMedia
            component="img"
            alt="Comic Panel"
            height="100%" // Make the CardMedia take up full height
            image={image}
          />
          {showText && (
            <CardContent
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                fontSize: '14px',
                width: '100%', // Make the CardContent take up full width
              }}
            >
              <Typography>{text}</Typography>
            </CardContent>
          )}
        </div>
      )}
    </Card>
  );
};

export default ComicPanel;
