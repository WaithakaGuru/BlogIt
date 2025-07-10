import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogComponent from "./components/BlogContentInput"
import HomePage from "./pages/HomePage"
import Restricted from "./components/Restricted"
import LoginPage from './pages/LoginPage'

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/blogs" element={
        <Restricted>
          <BlogComponent/>
        </Restricted>
      }/>
      <Route path='/login' Component={LoginPage} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
