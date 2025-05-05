import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Projects from "@/components/layout/Projects";
import Skills from "@/components/layout/Skills";

function Home() {
	return (
    <>
      <Navigation/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>    
    </>
  );
}

export default Home