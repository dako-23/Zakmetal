import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import ContactUs from "./components/contact-us/Contact-us.jsx";
import AboutUs from "./components/about-us/About-us.jsx";
import ForYou from "./components/for-you/For-you.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Banner />
        <ContactUs />
        <AboutUs />
        <ForYou />
        <Footer />
      </Router>
    </>
  )
}

export default App
