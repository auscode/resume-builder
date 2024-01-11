import React, { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import html2pdf from 'html2pdf.js';

function Home() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-preview');

    if (!element) {
      console.error('Resume preview container not found');
      return;
    }

    const pdfOptions = {
      margin: 10,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf(element, pdfOptions);
  };

  return (
    <>
      <div className="flex m-2">
        <ResumeForm onSubmit={handleFormSubmit} />
        <div className="w-1/2 m-2 p-2 rounded-md border-2">
          <h2 className="text-lg font-bold">Resume Preview</h2>
          <div id="resume-preview">
            <ResumePreview formData={formData} />
          </div>
          <button
            onClick={handleDownloadPDF}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
