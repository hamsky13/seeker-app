import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Login />} path="/" /> */}
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
