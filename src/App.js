// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import ModelViewer from "./components/ModelViewer";
import CollapsibleTable from "./components/Table";
import GaugeChart from "./components/Gauge";
import ForceChart from "./components/LineChart";
import Navbar from "./components/Navbar";
import Recommender from "./components/Recommender";
import SignIn from "./components/signIn/SignIn";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route className="main" path="/" element={<Landing />} />
        <Route path="/chart" element={<GaugeChart />} />
        <Route path="/lineChart" element={<ForceChart />} />
        <Route path="/table" element={<CollapsibleTable />} />
        <Route
          path="/model_viewer"
          element={<ModelViewer file={"./static/models/FLCA_3P.glb"} />}
        />
        <Route path="/lineChart" element={<CollapsibleTable />} />
        <Route path="/recommender" element={<Recommender />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
