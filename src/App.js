import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Archive, Home, Landing, Trash } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr className="separator" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
