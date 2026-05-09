import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./dashboard/DashboardLayout ";
import DashboardHome from "./dashboard/DashboardHome";
import Materials from "./pages/Materials";
import ServiceDetails from "./pages/ServiceDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* CLIENT ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

        {/* PROTECTED DASHBOARD ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;