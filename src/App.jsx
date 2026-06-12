import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Jobspage from "./pages/Jobs/Jobspage"
import NotFound from "./pages/NotFound"

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/jobs" element={ <Jobspage />} />
        <Route path="/companies" element={ <NotFound />} />
        <Route path="/dashboard" element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
