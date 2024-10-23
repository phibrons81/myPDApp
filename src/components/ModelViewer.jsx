import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, GizmoHelper, GizmoViewport, Center, Grid, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';  // Um das Material zu ändern
import { useControls } from 'leva'

function Model({ file }) {
  const { scene } = useGLTF(file); // Dynamischer Dateipfad für das GLTF-Modell

  // Gehe durch alle Meshes und setze ihre Materialien auf die gewünschte Farbe
  scene.traverse((object) => {
    if (object.isMesh) {
      object.material = new THREE.MeshStandardMaterial({ color: '#90dd99' });
    }
  });
  
  return <primitive object={scene} scale={0.02} />;
}

function ModelViewer({ file }) {
  // Grid-Konfiguration
  const { gridSize, ...gridConfig } = useControls({
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: '#4563c7',
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: '#969696',
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  });

  // Lichtkonfiguration
  const { ambLightIntensity, dirLightIntensity, spotLightIntensity, pointLightIntensity, dirLightDirection, spotLightDirection, dirLightColor, spotLightColor, pointLightColor } = useControls({
    ambLightIntensity: { value: 0.6, min: 0, max: 3, step: 0.1 },
    dirLightIntensity: { value: 0.6, min: 0, max: 3, step: 0.1 },
    dirLightDirection: [-11, 10, 20],
    dirLightColor: '#dddddd',
    spotLightIntensity: { value: 0.6, min: 0, max: 3, step: 0.1 },
    spotLightDirection: [0, 10, 20],
    spotLightColor: '#dddddd',
    pointLightIntensity: { value: 0.8, min: 0, max: 3, step: 0.1 },
    pointLightColor: '#ffffff',
  });

  // Kamera-Konfiguration
  const { cameraPos } = useControls({
    cameraPos: [3, 16, 12],
  });

  // Canvas_Background-Konfiguration
  /*const { backgroundColor1,backgroundColor2,backgroundColor3,backgroundColor4 } = useControls({
    backgroundColor1: '#dddddd',
    backgroundColor2: '#dddddd',
    backgroundColor3: '#dddddd',
    backgroundColor4: '#dddddd',
    });*/

  return (
    <Canvas
      shadows
      style={{
        height: '90vh',
        width: '100%',
        backgroundImage: 'linear-gradient(rgb(125, 170, 200),rgb(38, 130, 192), rgb(0,68,109), rgba(0,16,36,255))',
        /*brackgroundImage: 'linear-gradient('+{backgroundColor1}+','+{backgroundColor2}+','+{backgroundColor3}+','+{backgroundColor4}+')'*/
      }}
    >
      {/* Kamera */}
      <PerspectiveCamera
        makeDefault
        fov={30}
        position={cameraPos}
        rotation={[0, 0, 0]}
      />
      
      {/* Lichtquellen */}
      <ambientLight intensity={ambLightIntensity} />
      <directionalLight position={dirLightDirection} intensity={dirLightIntensity} color={dirLightColor} />
      <spotLight position={spotLightDirection} intensity={spotLightIntensity} penumbra={0.5} angle={0.35} castShadow color={spotLightColor} />
      <pointLight position={[5, 10, 5]} intensity={pointLightIntensity} color={pointLightColor} castShadow />

      <OrbitControls makeDefault />

      {/* Grid */}
      <Grid position={[0, -0.10, 0]} args={gridSize} {...gridConfig} />

      {/* Modell */}
      <Center top>
        <Model file={file} /> {/* Dynamischer Dateipfad */}
      </Center>

      {/* Gizmo für Koordinaten */}
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
      </GizmoHelper>
    </Canvas>
  );
}

export default ModelViewer;
