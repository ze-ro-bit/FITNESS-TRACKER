import React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Blogs from "./Components/Blogs";
import DailyProgress from "./Components/Features/DailyProgress";
import Dashboard from "./Components/Features/Dashboard";
import Features from "./Components/Features";
import FitnessTracker from "./Components/Features/FitnessTracker";
import Nutrition from "./Components/Features/Nutrition";
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Calendar from "./Components/Features/Calendar";
import Daily from "./Components/Features/Daily";
import Tasks from "./Components/Features/Tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Articles from "./Components/Features/articles";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/features/daily-progress" element={<DailyProgress />}></Route>
        <Route path="/features/dashboard" element={<Dashboard />}></Route>
        <Route path="/features/fitness-tracker" element={<FitnessTracker />}></Route>
        <Route path="/features/nutrition" element={<Nutrition />}></Route>
        <Route path="/features/dashboard/calendar" element={<Calendar />}></Route>
        <Route path="/features/dashboard/daily" element={<Daily />}></Route>
        <Route path="/features/dashboard/tasks" element={<Tasks />}></Route>
        <Route path="/article" element={<Articles />}></Route>

        {/* <Route path='/' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
