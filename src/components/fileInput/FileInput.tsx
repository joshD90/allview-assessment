import { useDropzone } from "react-dropzone";

import "./fileInput.css";
import { useContext } from "react";
import { fileContext } from "../../context/fileContext";

const FileInput = () => {
  const { files, setFiles } = useContext(fileContext);

  const accept = {
    "image/jpeg": [".jpeg", ".jpg"],
    "image/png": [".png"],
    "image/gif": [".gif"],
    "image/webp": [".webp"],
    "image/tiff": [".tiff", ".tif"],
    "image/svg+xml": [".svg"],
    "image/bmp": [".bmp"],
    "image/heic": [".heic"], // High Efficiency Image File Format
    "image/avif": [".avif"], // AV1 Image File Format
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <div
      {...getRootProps()}
      className="drag-drop__container"
      style={{
        backgroundColor: isDragActive
          ? "var(--mutedblue)"
          : "var(--background)",
      }}
    >
      <input {...getInputProps()} />
      {files.length > 0 ? (
        files.map((file) => <p key={file.name}>{file.name}</p>)
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileInput;
