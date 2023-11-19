import './App.css';
import ContactUs from './components/ContactUs';
import CustomSection from './components/CustomSection';
import Features from './components/Features';
import OurProcess from './components/OurProcess';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar />
      <Header />
      <Features />
      <OurProcess />
      <CustomSection />
      <ContactUs />
      <Footer/>
    </>
  );
}

export default App;
