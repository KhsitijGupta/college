import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/user/HomePage";
import AboutUs from "./pages/user/AboutUs";
import Blogs from "./pages/user/Blogs";
import { Sidebar } from "../components/admin/Sidebar";
import EventGallery from "./pages/user/EventGallery";
import CollegeAdmissionForm from "./pages/user/CollegeAdmissionForm";
import ContactUs from "./pages/user/ContactUs";
import AdminLoginForm from "../components/admin/AdminLoginForm";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/eventGallery" element={<EventGallery/>} />
        <Route path="/contactUs" element={<ContactUs  />} />
        <Route path="/addmissionForm" element={<CollegeAdmissionForm  />} />
        <Route path="/vvs/panel/login" element={<AdminLoginForm  />} />
        <Route path="/vvs/panel/dashboard" element={<Sidebar />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

