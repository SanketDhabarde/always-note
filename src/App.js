import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Archive, Home, Landing, Login, Signup, Trash } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr className="separator" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </div>
  );
}

export default App;
