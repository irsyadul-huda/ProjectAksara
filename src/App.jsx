import { Routes, Route } from 'react-router-dom';

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Beranda from "./pages/Beranda";
import LayananKami from "./pages/LayananKami";
import Blog from "./pages/Blog1";
import CaraPemesanan from "./pages/CaraPemesanan";
import SyaratKetentuan from "./pages/SyaratKetentuan";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/"element={<Beranda />} />
        <Route path="/Layanan  Kami" element={<LayananKami />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cara Pemesanan" element={<CaraPemesanan />} />
        <Route path="/Syarat Dan Ketentuan" element={<SyaratKetentuan />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;