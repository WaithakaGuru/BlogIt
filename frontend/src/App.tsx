import "./styles/index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogComponent from "./components/BlogContentInput"

function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={BlogComponent} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
