import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/HEADER/Header";
import Home from "./Component/HEADER/HOME/Home";
import  Product from "./Component/HEADER/PRODUCT/Product";
import Contact from "./Component/HEADER/CONTACT/Contact";
import About from "./Component/HEADER/ABOUT/About";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path='/error' element={<Error/>}/> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
