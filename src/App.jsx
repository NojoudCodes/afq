import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Jobspage from "./pages/Jobs/Jobspage"
import Companies from "./pages/Companies/Companies"
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/jobs" element={ <Jobspage />} />
        <Route path="/companies" element={ <Companies />} />
        <Route path="/dashboard" element={ <Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
