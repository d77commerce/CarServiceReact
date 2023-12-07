
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
