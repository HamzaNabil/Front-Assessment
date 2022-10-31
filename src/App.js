import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
