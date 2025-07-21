import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Layout from "./components/Layout"
import Error from "./pages/Error"

import Contacts from "./pages/Contacts"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element= {<Contacts />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
