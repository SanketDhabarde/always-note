import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home, Landing } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr className="separator" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
