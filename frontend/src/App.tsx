import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import Restricted from "./components/Restricted";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RegisterNewAccountPage from "./pages/RegisterNewAccountPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import DashboardPage from "./pages/DashboardPage";
import AllUserBlogsPage from "./pages/AllUserBlogsPage";
import ProfileUpdatePage from "./pages/ProfileUpdatePage";
import SingleBlog from "./components/SingleBlog";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterNewAccountPage} />
          <Route
            path="/dashboard"
            element={
              <Restricted>
                <DashboardPage />
              </Restricted>
            }
          />

          <Route
            path="dashboard/blogs"
            element={
              <Restricted>
                <AllUserBlogsPage />
              </Restricted>
            }
          />

          <Route
            path="dashboard/blogs/create"
            element={
              <Restricted>
                <CreateBlogPage />
              </Restricted>
            }
          />

          <Route
            path="dashboard/blogs/:id"
            element={
              <Restricted>
                <SingleBlog />
              </Restricted>
            }
          />

          <Route
            path="dashboard/profile"
            element={
              <Restricted>
                <ProfileUpdatePage />
              </Restricted>
            }
          />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
