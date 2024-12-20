import React, { useState, useEffect, useRef } from "react";
import { QrReader } from "react-qr-reader";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";

const QRModelViewer = () => {
  const [modelUrl, setModelUrl] = useState(null);
  const canvasRef = useRef(null);

  // Initialize Babylon.js scene
  const initBabylonScene = () => {
    const canvas = canvasRef.current;

    // Create the Babylon.js engine
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Create a basic camera and light
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 2,
      5,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(1, 1, 0),
      scene
    );

    // Load the 3D model
    if (modelUrl) {
      BABYLON.SceneLoader.Append("", modelUrl, scene, () => {
        console.log("Model loaded successfully");
      }, null, (error) => {
        console.error("Failed to load model:", error);
      });
    }

    // Render the scene
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle window resizing
    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  };

  // Start Babylon.js when modelUrl changes
  useEffect(() => {
    if (modelUrl) {
      initBabylonScene();
    }
  }, [modelUrl]);

  // Handle QR code scanning
  const handleScan = (data) => {
    if (data) {
      setModelUrl(data); // QR code should contain the .glb model URL
    }
  };

  const handleError = (err) => {
    console.error(err);
    alert("Error scanning QR code. Please try again.");
  };

  return (
    <div>
      <h2>Scan QR Code to View 3D Model</h2>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.text);
          }
          if (!!error) {
            handleError(error);
          }
        }}
        style={{ width: "300px" }}
      />
      {modelUrl && <p>Model URL: {modelUrl}</p>}
      <canvas ref={canvasRef} style={{ width: "100%", height: "500px" }}></canvas>
    </div>
  );
};

export default QRModelViewer;
