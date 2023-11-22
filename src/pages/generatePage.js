import React, { useRef, useState } from "react";
import ComicForm from "../components/ComicForm";
import ComicStrip from "../components/ComicStrip";
import { query } from "../api";
import "../styles.css";
import Layout from "../components/Layout";
import jsPDF from "jspdf";

const GeneratePage = () => {
  const [comicData, setComicData] = useState(Array(10).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagesCreated, setImagesCreated] = useState(0);

  const imageCache = new Map();

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
  
  
  

  let pdfTitle=null;
  const setPdfTitleCallback = (title) => {
    pdfTitle=title;

    handleDownloadPDF();
  };

  const handleDownloadPDF = () => {
    console.log(pdfTitle);
    const currentDate = new Date().toLocaleDateString();
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait orientation, millimeters, A4 size
    let title = pdfTitle.trim() !== "" ? `${pdfTitle}` : "Comic-E";
    title += ` | Creator: Mrin | COMIC-E ${currentDate}`

    // Add title to the PDF
    pdf.setFontSize(16);
    pdf.text(title, 105, 10, null, null, "center");

    // Add images to the PDF in a 5x2 grid
    const columnWidth = 90;
    const rowHeight = 60;
    let x = 10;
    let y = 20;

    comicData.forEach((image, index) => {
      if (image) {
        pdf.addImage(image, "JPEG", x, y, columnWidth, rowHeight);

        x += columnWidth + 10; // Add 10 for spacing between images

        if (index % 2 === 1) {
          // Move to the next row after two images
          x = 10;
          y += rowHeight + 10; // Add 10 for spacing between rows
        }

        if (index === 9) {
          // Break the loop after 10 images
          return;
        }
      }
    });

    // Save the PDF
    pdf.save("comic.pdf");
    console.log(pdfTitle);
  };
  

  return (
    <Layout>
      <ComicForm
        onSubmit={handleFormSubmit}
        imagesCreated={imagesCreated}
        onDownloadPDF={handleDownloadPDF}
        setPdfTitleCallback={setPdfTitleCallback}
      />
      {loading && <p>Comic Generating...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ComicStrip comicData={comicData} />
    </Layout>
  );
}

export default GeneratePage;
