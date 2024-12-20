import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { getModelInfo } from "../api"; // Ensure this API function is correctly implemented

const QRScanner = ({ onModelLoaded }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async (data) => {
    if (!data) return; // Skip if no data

    setLoading(true);
    setError(null); // Reset any previous errors
    try {
      console.log("Scanned data:", data); // Debug log
      const response = await getModelInfo(data); // Call the API with the scanned QR data
      console.log("API response:", response); // Debug log

      if (response.data && response.data.url) {
        onModelLoaded(response.data.url); // Pass the model URL to the parent component
      } else {
        setError("Invalid QR Code. No model URL found.");
      }
    } catch (err) {
      console.error("Error fetching model info:", err);
      setError("Failed to fetch model. Please try again.");
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  const handleError = (err) => {
    console.error("QR Scanner error:", err);
    setError("QR Scanner encountered an error. Please try again.");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Scan a QR Code</h2>
      {loading && <p>Loading model data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ margin: "20px auto", width: "300px", height: "300px" }}>
        <QrReader
          onResult={(result, error) => {
            if (result) {
              handleScan(result.text); // Process the scanned result
            }
            if (error) {
              handleError(error); // Handle scanning errors
            }
          }}
          constraints={{ facingMode: "environment" }} // Use the back camera
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default QRScanner;
