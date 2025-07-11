import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogComponent from "./components/BlogContentInput";
import HomePage from "./pages/HomePage";
import Restricted from "./components/Restricted";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route
          path="/blogs"
          element={
            <Restricted>
              <BlogComponent />
            </Restricted>
          }
        />
        <Route path="/login" Component={LoginPage} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
