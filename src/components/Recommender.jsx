import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ModelViewer from './ModelViewer'; // Importiere die ModelViewer Komponente

const Recommender = () => {
  const [modelFile, setModelFile] = useState(null); // Zustand, um die hochgeladene Datei zu speichern

  const onDrop = (acceptedFiles) => {
    // Nur die erste Datei wird verarbeitet
    const file = acceptedFiles[0];
    const url = URL.createObjectURL(file); // Erstelle eine URL für die hochgeladene Datei
    setModelFile(url); // Setze die URL der Datei in den Zustand
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'model/gltf-binary': ['.glb'], // Akzeptiere nur .glb Dateien
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Recommender Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        Upload your .glb model to view it in 3D!
      </Typography>
      
      {/* Dropzone */}
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed grey',
          borderRadius: '10px',
          p: 4,
          textAlign: 'center',
          backgroundColor: isDragActive ? 'lightblue' : 'white',
          transition: 'background-color 0.3s',
        }}
      >
        <input {...getInputProps()} />
        <CloudUploadIcon fontSize="large" color="primary" />
        <Typography variant="h6" gutterBottom>
          {isDragActive ? 'Drop the GLB file here...' : 'Drag and drop a GLB file here, or click to select'}
        </Typography>
        <Button variant="contained" color="primary">
          Browse Files
        </Button>
      </Box>

      {/* Modellanzeige */}
      {modelFile && (
        <Box mt={4}>
          <ModelViewer file={modelFile} /> {/* ModelViewer mit dem hochgeladenen Modell */}
        </Box>
      )}
    </Box>
  );
};

export default Recommender;
