import React, { useState } from "react";
import ComicForm from "../components/ComicForm";
import ComicStrip from "../components/ComicStrip";
import { query } from "../api";
import "../styles.css";
import Layout from "../components/Layout";
import jsPDF from "jspdf";
import { Backdrop, CircularProgress, Typography } from "@mui/material";

const GeneratePage = () => {
  const [comicData, setComicData] = useState(Array(10).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagesCreated, setImagesCreated] = useState(0);

  const handleFormSubmit = async (inputText, index) => {
    try {
      setLoading(true);

      // Check if the image for the current input is already generated
      if (comicData[index]) {
        return;
      }

      try {
        if (inputText) {
          console.log(inputText);
          const response = await query({ inputs: inputText });
          console.log(response);
          const imageUrl = URL.createObjectURL(response);

          // Update the mapping with the generated image
          setComicData((prevData) => {
            const newData = [...prevData];
            newData[index] = imageUrl;
            return newData;
          });

          setImagesCreated((prevCount) => prevCount + 1);
        }
      } catch (error) {
        console.error("Error generating comic:", error);
        setError("Failed to generate comic. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  let pdfTitle = null;
  const setPdfTitleCallback = (title) => {
    pdfTitle = title;

    handleDownloadPDF();
  };

  const handleDownloadPDF = () => {
    console.log(pdfTitle);
    const currentDate = new Date().toLocaleDateString();
    const pdf = new jsPDF("p", "mm", "a4");
    let title = pdfTitle.trim() !== "" ? `${pdfTitle}` : "Comic-E";
    title += ` | Creator: Mrin | COMIC-E ${currentDate}`;

    pdf.setFontSize(16);
    pdf.text(title, 105, 10, null, null, "center");

    const columnWidth = 90;
    const rowHeight = 60;
    let x = 10;
    let y = 20;

    comicData.forEach((image, index) => {
      if (image) {
        pdf.addImage(image, "JPEG", x, y, columnWidth, rowHeight);

        x += columnWidth + 10;

        if (index % 2 === 1) {
          x = 10;
          y += rowHeight + 10;
        }

        if (index === 9) {
          return;
        }
      }
    });

    // Save the PDF
    pdf.save("comic.pdf");
    setComicData(Array(10).fill(""));
    setImagesCreated(0);
  };

  return (
    <Layout>
      <ComicForm
        onSubmit={handleFormSubmit}
        imagesCreated={imagesCreated}
        onDownloadPDF={handleDownloadPDF}
        setPdfTitleCallback={setPdfTitleCallback}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" color="inherit" style={{ marginLeft: 16 }}>
          Comic Generating ...
        </Typography>
      </Backdrop>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ComicStrip comicData={comicData} />
    </Layout>
  );
};

export default GeneratePage;
