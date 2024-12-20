import React from 'react';
import ModelViewer from './components/ModelViewer';
import modelPath from './assets/example1.glb'; // Import the .glb file

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Babylon.js 3D Model Viewer</h1>
      <ModelViewer modelUrl={modelPath} />
    </div>
  );
};

export default App;
