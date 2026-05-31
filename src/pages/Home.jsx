import About from "../layouts/About/About"
import Footer from "../layouts/Footer/Footer"
import Hero from "../layouts/Hero/Hero"
import Jobs from "../layouts/Jobsection/Jobsection"
import Market from "../layouts/Market/Market"

function Home() {
  return(
    <>
      <Hero />
      <About />
      <Market />
      <Jobs />
      <Footer />
    </>
  )
}

export default Home