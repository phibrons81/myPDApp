// server.js
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Set up multer for file upload handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder to save the files in
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage: storage });

// Create uploads directory if not exists
const fs = require("fs");
const dir = "./uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }
  res.status(200).send({
    message: "File uploaded successfully",
    file: req.file.filename,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
