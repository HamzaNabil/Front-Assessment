import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { useSelector } from "react-redux";

function App() {
  const lang = useSelector((state) => state.language?.lang);

  const changeDir = (lang) => {
    return lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <BrowserRouter>
      <div className="app" dir={changeDir(lang)}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
