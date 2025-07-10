import "./styles/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogComponent from "./components/BlogContentInput"
import HomePage from "./pages/HomePage"
import Restricted from "./components/Restricted"

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/blogs" element={
        <Restricted>
          <BlogComponent/>
        </Restricted>
      }>
      </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App
