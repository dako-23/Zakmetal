import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop.js";
import ContactButtons from "./components/floating-buttons/Contact-buttons.jsx";
import HomePage from "./components/home-page/HomePage.jsx";


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ContactButtons />
      </Router>
    </>
  )
}

export default App
