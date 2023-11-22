import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
/**
 * @author mrin247
 * @function ComicPanel
 **/

const ComicPanel = ({ text }) => {
  const [image, setImage] = useState(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {

    if (text) {
      setImage(text);
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
        height: '50vh',
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {image && (
        <div
          style={{
            position: 'relative',
            height: '100%',
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
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                fontSize: '14px',
                width: '100%',
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
