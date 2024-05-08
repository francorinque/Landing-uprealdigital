import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FindUs from './components/FindUs/FindUs';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Slogan from './components/Slogan/Slogan';
import Testimonial from './components/Testimonial/Testimonial';
import Layout from './components/ui/Layout';

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth='max-w-[1440px]'>
        <Hero />
        <Contact />
        <Slogan />
        <Services />
        <Projects />
        <About />
        <FindUs />
        <Testimonial />
      </Layout>
    </main>
  );
}

export default App;
