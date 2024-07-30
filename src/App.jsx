import { Routes, Route } from 'react-router-dom';

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePages from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import Faq from "./pages/Faq";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/syaratketentuan" element={<SyaratKetentuan />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;