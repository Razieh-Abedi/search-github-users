import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import PrivateRoute from "./pages/PrivateRoute";
import AuthWrapper from "./pages/AuthWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer className="footer">
          <a
            href="https://raziwebdeveloper.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" footer-link"
          >
            Developed with ❤ by raziwebdeveloper.com
          </a>
        </footer>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
