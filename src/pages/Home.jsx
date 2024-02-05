import { useState } from 'react';
import {createRoot} from 'react-dom';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/Templates/ResumePreview';
import ResumePreviewTemp1 from '../components/Templates/ResumePreviewTemp1';
import ResumePreviewTemp2 from '../components/Templates/ResumePreviewTemp2';
import ResumePreviewTemp3 from '../components/Templates/ResumePreviewTemp3';
import html2pdf from 'html2pdf.js';
import TempImage1 from '../assets/TempImage1.png'

function Home() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleDownloadPDFDefault = () => {
    downloadPDF('Resume.pdf', <ResumePreview formData={formData} />);
  };

  const handleDownloadPDFTemp1 = () => {
    console.log("handleDownloadPDFTemp1 ")
    console.log(formData)
    downloadPDF('Resume_Temp1.pdf', <ResumePreviewTemp1 formData={formData} />);
  };

  const handleDownloadPDFTemp2 = () => {
    downloadPDF('Resume_Temp2.pdf', <ResumePreviewTemp2 formData={formData} />);
  };
  const handleDownloadPDFTemp3 = () => {
    downloadPDF('Resume_Temp3.pdf', <ResumePreviewTemp3 formData={formData} />);
  };

  const downloadPDF = (filename, component) => {
    const element = document.createElement('div');
    document.body.appendChild(element);

    const pdfOptions = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    // Use createRoot inside the downloadPDF function
    createRoot(element).render(component);

    // Wait for the component to render before generating PDF
    setTimeout(() => {
      html2pdf(element, pdfOptions);
      document.body.removeChild(element);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <>
      <div className="flex m-2">
        <ResumeForm onSubmit={handleFormSubmit} />
        <div className="w-1/2 m-2 p-2 rounded-md border-2">
          <h2 className="text-2xl mb-2 font-bold text-center">Resume Preview</h2>
          <div className="flex flex-wrap items-center justify-items-center">
            <div className='bg-yellow-500 rounded-md m-4 border-2 border-gray-200 p-2 lg:w-1/2'>
              <div className=''>
              <img src={TempImage1} alt="Template Image" className=' object-fill' />
              <div id="resume-preview" className='hidden'>
                  <ResumePreview formData={formData} />
                </div>
              </div>
              <div className='mt-2 justify-center items-center flex'>
                <button
                  onClick={handleDownloadPDFDefault}
                  className="bg-yellow-500 border-2 border-white text-white px-4 py-2 rounded hover:bg-yellow-600 "
                >
                  Download PDF (Default)
                </button>
              </div> 
            </div>
            <div className='bg-blue-500 rounded-md m-4 border-2 border-gray-200 p-2'>
            {/* <img src={TempImage1} alt="Template Image" className='size-2/4' /> */}
              <div id="resume-preview1">
                <ResumePreviewTemp1 formData={formData} />
              </div>
              <button
                onClick={handleDownloadPDFTemp1}
                className="bg-blue-500 border-2 border-white text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
              >
                Download PDF (Template 1)
              </button>
            </div>
            <div className='bg-green-500 rounded-md m-4 border-2 border-gray-200 p-2'>
              <div id="resume-preview2">
                <ResumePreviewTemp2 formData={formData} />
              </div>
              <button
                onClick={handleDownloadPDFTemp2}
                className="bg-green-500 border-2 border-white text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Download PDF (Template 2)
              </button>
            </div>
            <div className='bg-red-500 rounded-md m-4 border-2 border-gray-200 p-2'>
              <div id="resume-preview3">
                <ResumePreviewTemp3 formData={formData} />
              </div>
              <button
                onClick={handleDownloadPDFTemp3}
                className="bg-red-500 border-2 border-white text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Download PDF (Template 3)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

