import React from 'react';

// html2canvas for converting the md to png image
import html2canvas from 'html2canvas';

// jsPDF for converting the image to pdf
import { jsPDF } from 'jspdf';

import './styles.css';

const Downloader = ({ mdPreviewBox, fileName, text }) => {
  // Function to download the markdown as PDF
  const downloadMdAsPDF = () => {
    const input = document.getElementById(mdPreviewBox);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
      });
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save(`${fileName}.pdf`);
    });
  };

  return (
    <div>
      {/* a 'disabled' prop to prevent download when textbox is empty */}
      <button className="md-editor btn" disabled={!text} onClick={downloadMdAsPDF}>
        <h3 className="md-editor heading-4">
          <b> Download Text</b>
        </h3>
      </button>
    </div>
  );
};

export default Downloader;
