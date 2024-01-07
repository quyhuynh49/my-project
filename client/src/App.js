import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import Register from "./pages/Register";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
