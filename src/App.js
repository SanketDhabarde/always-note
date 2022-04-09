import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, RequiresAuth } from "./components";
import {
  Archive,
  Home,
  Landing,
  Login,
  NotFound,
  Signup,
  Trash,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr className="separator" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
