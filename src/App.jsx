import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import ContactUs from "./components/contact-us/Contact-us.jsx";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Banner />
        <ContactUs/>
      </Router>
    </>
  )
}

export default App
