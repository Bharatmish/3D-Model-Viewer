import React, { useEffect, useRef } from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders'; // Import loaders to handle .glb files

const ModelViewer = ({ modelUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !modelUrl) return;

    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Create a camera and light for the scene
    const camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light1", BABYLON.Vector3.Up(), scene);

    // Load the .glb model from the assets folder
    BABYLON.SceneLoader.Append("", modelUrl, scene, () => {
      engine.runRenderLoop(() => {
        scene.render();
      });
    });

    // Handle window resizing
    window.addEventListener('resize', () => {
      engine.resize();
    });

    // Cleanup on unmount
    return () => {
      engine.dispose();
    };
  }, [modelUrl]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '500px' }} />;
};

export default ModelViewer;
