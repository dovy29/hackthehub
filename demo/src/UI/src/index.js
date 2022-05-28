import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/views/Calendar";
import Footage from "./components/views/Footage";
import Home from "./components/views/Home";
import Navigation from "./components/layout/Navigation"
import EventDetails from "./components/views/EventDetails";
import VehicleDetails from "./components/views/VehicleDetails";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="eventdetails" element={<EventDetails />} />
      <Route path="vehicledetails" element={<VehicleDetails />} />
    </Routes>
    <Navigation />
  </BrowserRouter>
);
