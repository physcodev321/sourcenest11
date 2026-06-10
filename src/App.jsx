import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/products";
import Manufacturing from "./pages/Manufacturing";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import PrivateLabel from "./pages/services/PrivateLabel";
import CutAndSew from "./pages/services/CutAndSew";
import ScreenPrinting from "./pages/services/ScreenPrinting";
import Embroidery from "./pages/services/Embroidery";
import Portfolio from "./pages/portfolio/Portfolio";
import Hoodies from "./products/Hoodies";
import Tshirts from "./products/Tshirts";
import Sweatshirts from "./products/Sweatshirts";
import Joggers from "./products/Joggers";
import Shorts from "./products/Shorts";
import TankTops from "./products/TankTops";
import Caps from "./products/Caps";
import Activewear from "./products/Activewear";
import Sportswear from "./products/Sportswear";
import Uniforms from "./products/Uniforms";
import Polos from "./products/Polos";
import Jackets from "./products/Jackets";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/services/PrivateLabel" element={<PrivateLabel />} />
        <Route path="/services/CutAndSew" element={<CutAndSew />} />
        <Route path="/services/ScreenPrinting" element={<ScreenPrinting />} />
        <Route path="/services/Embroidery" element={<Embroidery />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products/hoodies" element={<Hoodies />} />
        <Route path="/products/tshirts" element={<Tshirts />} />
        <Route path="/products/sweatshirts" element={<Sweatshirts />}/>
        <Route path="/products/joggers" element={<Joggers />} />
        <Route path="/products/shorts" element={<Shorts />} />
        <Route path="/products/TankTops" element={<TankTops />}/>
        <Route path="/products/caps" element={<Caps />} />
        <Route path="/products/activewear" element={<Activewear />} />
        <Route path="/products/sportswear" element={<Sportswear />}/>
        <Route path="/products/uniforms" element={<Uniforms />}/>
        <Route path="/products/polos" element={<Polos />} />
        <Route path="/products/jackets" element={<Jackets />}/>
        
      </Routes>
    </BrowserRouter>
  );
}