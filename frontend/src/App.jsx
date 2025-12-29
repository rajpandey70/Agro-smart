// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Farms from "./pages/Farms";
// import Sensors from "./pages/Sensors";
// import Analytics from "./pages/Analytics";
// import Reports from "./pages/Reports";

// import "./styles/layout.css";

// function AppLayout() {
//   return (
//     <div className="app-layout">
//       <Sidebar />
//       <div className="app-content">
//         <Navbar />
//         <div className="content-area">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/farms" element={<Farms />} />
//             <Route path="/sensors" element={<Sensors />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/reports" element={<Reports />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//         <Route path="/*" element={<AppLayout />} />
//       </Routes>
//     </Router>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Farms from "./pages/Farms";
import Sensors from "./pages/Sensors";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";

import "./styles/layout.css";

function AppLayout() {
  return (
    <ProtectedRoute>
      <div className="app-layout">
        <Sidebar />
        <div className="app-content">
          <Navbar />
          <div className="content-area">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/farms" element={<Farms />} />
              <Route path="/sensors" element={<Sensors />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔐 Protected */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}
