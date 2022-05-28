import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/views/Calendar";
import Footage from "./components/views/Footage";
import Home from "./components/views/Home";
import Navigation from "./components/layout/Navigation"
import "./index.css";
import EventDetails from "./components/views/EventDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="footage" element={<Footage />} />
      <Route path="eventdetails" element={<EventDetails />} />
    </Routes>
    <Navigation />
  </BrowserRouter>
);
