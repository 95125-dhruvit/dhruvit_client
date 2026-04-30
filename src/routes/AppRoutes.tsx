import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../admin/layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

// User Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

// Admin Pages
import Dashboard from "../admin/pages/Dashboard";
import AdminLogin from "../admin/pages/AdminLogin";

export default function AppRoutes() {
  return (
    <Routes>

      {/* USER SIDE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ✅ ADMIN LOGIN (PUBLIC) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ✅ ADMIN SIDE (PROTECTED) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* Redirect /admin → /admin/dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
}















// import { Routes, Route } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import Experience from "../pages/Experience";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   );
// }