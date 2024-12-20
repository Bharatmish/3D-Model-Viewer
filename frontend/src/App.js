import React, { useState } from 'react';
import QRScanner from './components/QRScanner';
import ModelViewer from './components/ModelViewer';
import QRCodeDisplay from './components/QRCodeDisplay';

const App = () => {
  const [modelUrl, setModelUrl] = useState(null);
  const [showScanner, setShowScanner] = useState(false);

  const handleModelLoaded = (url) => {
    console.log("Model URL received:", url); // Debug log
    setModelUrl(url);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>3D Model Viewer App</h1>
      {!modelUrl && !showScanner && (
        <div>
          <QRCodeDisplay />
          <button
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={() => {
              console.log("Scanner activated"); // Debug log
              setShowScanner(true);
            }}
          >
            Scan QR Code
          </button>
        </div>
      )}

      {showScanner && !modelUrl && (
        <div>
          <p>QR Scanner is active</p>
          <QRScanner onModelLoaded={handleModelLoaded} />
        </div>
      )}

      {modelUrl && (
        <div>
          <p>Loading Model Viewer...</p>
          <ModelViewer modelUrl={modelUrl} />
        </div>
      )}
    </div>
  );
};

export default App;
