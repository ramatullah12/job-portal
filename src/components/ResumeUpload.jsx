import { useState } from "react";

function ResumeUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      localStorage.setItem(
        "resumeName",
        file.name
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Resume Upload
      </h2>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />
      {fileName && (
        <p className="mt-4 text-green-600">
          Uploaded: {fileName}
        </p>
      )}
    </div>
  );
}

export default ResumeUpload;