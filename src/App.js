// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ModelViewer from "./components/ModelViewer";
import CollapsibleTable from "./components/Table";
import GaugeChart from "./components/Gauge";
import ForceChart from "./components/LineChart";
import Navbar from "./components/Navbar";
import Recommender from "./components/Recommender";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route className="main" path="/" element={<Home />} />
        <Route path="/chart" element={<GaugeChart />} />
        <Route path="/lineChart" element={<ForceChart />} />
        <Route path="/table" element={<CollapsibleTable />} />
        <Route
          path="/model_viewer"
          element={<ModelViewer file={"./static/models/FLCA_3P.glb"} />}
        />
        <Route path="/lineChart" element={<CollapsibleTable />} />
        <Route path="/recommender" element={<Recommender />} />
      </Routes>
    </Router>
  );
}

export default App;
