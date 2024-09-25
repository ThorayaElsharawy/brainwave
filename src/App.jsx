import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifits from "./components/Benifits"
import Collaboration from "./components/Collaboration"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Roadmap from "./components/Roadmap"
import Services from "./components/Services"

function App() {


  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Services /> 
        <Pricing />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
