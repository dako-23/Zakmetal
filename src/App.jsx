import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import ContactUs from "./components/contact-us/Contact-us.jsx";
import AboutUs from "./components/about-us/About-us.jsx";
import ForYou from "./components/for-you/For-you.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollToTop from "./helpers/scrollToTop.js";
import ContactButtons from "./components/floating-buttons/Contact-buttons.jsx";


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Banner />
        <ContactUs />
        <AboutUs />
        <ForYou />
        <Footer />
        <ContactButtons />
      </Router>
    </>
  )
}

export default App
