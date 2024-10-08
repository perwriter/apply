import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Applications from "./Pages/Applications";
import Jobsearch from "./Pages/Jobsearch";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Landing from "./Pages/Landing"; // Import the Landing Page
import Assistant from "./Components/Assistant";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import Aboutus from "./Components/Aboutus";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} /> {/* Set Landing as Default */}
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<Aboutus/>}/>
          <Route path="assistant" element={<Assistant/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="resume" element={<Resume/>} />
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="applications" element={<Applications />} />
          <Route path="job" element={<Jobsearch />} />
          <Route path="resume" element={<Resume/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
