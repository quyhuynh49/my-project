import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import SharedLayout from "./layouts/SharedLayout";
import PrivatePage from "./pages/PrivatePage";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >

            <Route index element={<PrivatePage />}></Route>
          </Route>

          <Route path="/" element={<div>dashboard</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
