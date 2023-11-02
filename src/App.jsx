import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <main className="mui">
        <Sidebar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/portolio" element={<h1>portfolo</h1>} />
          <Route path="/service" element={<h1>service</h1>} />
          <Route path="*" element={<h1>not found page</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
