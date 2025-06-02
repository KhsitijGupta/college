import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/user/HomePage";
import AboutUs from "./pages/user/AboutUs";
import Blogs from "./pages/user/Blogs";
import { Sidebar } from "../components/admin/sidebar";
import EventGallery from "./pages/user/EventGallery";
import CollegeAdmissionForm from "./pages/user/CollegeAdmissionForm";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/adminpannel" element={<Sidebar />} />
        <Route path="/eventGallery" element={<EventGallery/>} />
        <Route path="/addmissionForm" element={<CollegeAdmissionForm  />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

