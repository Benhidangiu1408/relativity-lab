// import React, { useRef, useState } from "react";

// const FileUploader: React.FC = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [fileContent, setFileContent] = useState<string | null>(null); // For text-based files
//   const inputFileRef = useRef<HTMLInputElement | null>(null);

//   // Function to trigger the file input when button is clicked
//   const handleButtonClick = () => {
//     inputFileRef.current?.click(); // Open file explorer
//   };

//   // Function to handle file selection
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]); // Get selected file
//       previewFile(event.target.files[0]); // Call to preview the selected file
//     }
//   };

//   const previewFile = (file: File) => {
//     const fileType = file.type;

//     if (fileType === "application/pdf") {
//       // For PDF files, set the URL to be used in an iframe
//       const fileURL = URL.createObjectURL(file);
//       setFileContent(fileURL);
//     } else if (fileType.startsWith("text/")) {
//       // For text files, use FileReader to read the content
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFileContent(reader.result as string);
//       };
//       reader.readAsText(file);
//     } else if (
//       fileType ===
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//     ) {
//       // DOCX file - Placeholder (needs third-party library for full preview)
//       setFileContent("DOCX preview is not supported directly in the browser.");
//     } else {
//       setFileContent("File type not supported for preview.");
//     }
//   };

//   return (
//     <>
//       <div className="file-uploader">
//         <button type="button" onClick={handleButtonClick}>
//           Upload File
//         </button>

//         {/* Hidden input that triggers when the button is clicked */}
//         <input
//           type="file"
//           ref={inputFileRef}
//           style={{ display: "none" }} // Hide the actual file input
//           accept=".pdf,.txt,.docx" // Accept PDFs, text, and Word files
//           onChange={handleFileChange} // Handle file selection
//         />

//         {/* Display selected file name */}
//         {selectedFile && <p>Selected file: {selectedFile.name}</p>}
//       </div>

//       <div className="file-preview">
//         {selectedFile?.type === "application/pdf" && (
//           <iframe
//             src={fileContent || ""}
//             title="PDF Preview"
//             width="100%"
//             height="500px"
//           ></iframe>
//         )}

//         {selectedFile?.type.startsWith("text/") && (
//           <div>
//             <h3>Text File Preview:</h3>
//             <pre>{fileContent}</pre>
//           </div>
//         )}

//         {selectedFile?.type ===
//           "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
//           <div>
//             <h3>DOCX Preview:</h3>
//             <p>{fileContent}</p> {/* Placeholder text for DOCX files */}
//           </div>
//         )}

//         {fileContent === "File type not supported for preview." && (
//           <p>{fileContent}</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default FileUploader;

import React, { useRef, useState } from "react";
import ConfigurePrint from "./ConfigurePrint";
import { Separator } from "@/components/ui/separator";
import { ProgressDemo } from "./components/ui/Upfile/Progress";

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null); // For text-based files
  const [showPreview, setShowPreview] = useState<boolean>(false); // Control preview modal
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  // Function to trigger the file input when button is clicked
  const handleButtonClick = () => {
    inputFileRef.current?.click(); // Open file explorer
  };

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      previewFile(file); // Call to preview the selected file
    }
  };

  // Function to preview the file based on its type
  const previewFile = (file: File) => {
    const fileType = file.type;

    if (fileType === "application/pdf") {
      // For PDF files, set the URL to be used in an iframe
      const fileURL = URL.createObjectURL(file);
      setFileContent(fileURL);
    } else if (fileType.startsWith("text/")) {
      // For text files, use FileReader to read the content
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result as string);
      };
      reader.readAsText(file);
    } else {
      setFileContent("File type not supported for preview.");
    }
    setShowPreview(true); // Show preview modal
  };

  // Function to close the preview modal
  const closePreview = () => {
    setShowPreview(false);
  };

  // Function to trigger the browser's print dialog
  const handlePrint = () => {
    window.print(); // This will open the browser's print dialog
  };

  return (
    <div className="file-uploader ">
      <button type="button" onClick={handleButtonClick}>
        Upload File
      </button>

      {/* Hidden input that triggers when the button is clicked */}
      <input
        type="file"
        ref={inputFileRef}
        style={{ display: "none" }}
        accept=".pdf,.txt,.docx" // Accept PDFs, text, and Word files
        onChange={handleFileChange}
      />

      {/* Display selected file name */}
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}

      {/* Preview Modal */}
      {showPreview && (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 ">
            <div className="bg-white shadow-lg rounded-lg w-4/5 h-4/5 overflow-hidden relative">
              {/* Preview Content */}
              {/* <div className="blur-[0px] flex justify-center ">
                <ProgressDemo />
              </div> */}
              <div className="absolute w-1/3 h-full flex   justify-center ">
                {/* Close Button */}

                <p className="text-black flex justify-center absolute mt-8 text-2xl font-semibold">
                  PRINT
                </p>

                {/* <Separator className=" pt-5 w-full" /> */}
                <div className="pt-20">
                  <ConfigurePrint closePreview={closePreview} />
                </div>

                {/* <div className="flex flex-row gap-2">
                  <button
                    className="absolute text-gray-500 hover:text-gray-700 pt-15"
                    onClick={closePreview}
                  >
                    Close
                  </button>

                  <button
                    className="absolute  text-blue-500 hover:text-blue-700"
                    onClick={handlePrint}
                  >
                    Print
                  </button>
                </div> */}
              </div>
              <div className="w-2/3 h-full overflow-auto p-4 ml-auto ">
                {selectedFile?.type === "application/pdf" && (
                  <iframe
                    src={fileContent || ""}
                    title="PDF Preview"
                    className="w-full h-full"
                    frameBorder="0"
                  ></iframe>
                )}

                {selectedFile?.type.startsWith("text/") && (
                  <div className="prose max-w-none">
                    <h3>Text File Preview:</h3>
                    <pre className="whitespace-pre-wrap">{fileContent}</pre>
                  </div>
                )}

                {fileContent === "File type not supported for preview." && (
                  <p>{fileContent}</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
