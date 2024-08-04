// Mengimpor komponen dan fungsi yang diperlukan
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  // Membuat state untuk menampilkan/menyembunyikan navbar
  const [showNavbar, setShowNavbar] = useState(false);

  // Fungsi untuk menangani scroll
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  // Menggunakan useEffect untuk menambahkan dan menghapus event listener scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Komponen Navbar dengan kondisi latar belakang berdasarkan scroll */}
      <Navbar
        expand="lg"
        className={`${showNavbar ? "bg-white" : ""}`}
        style={{
          transition: "background-color 1s ease",
        }}
      >
        <Container>
          {/* Brand/Logo Navbar */}
          <Navbar.Brand href="#Beranda" className="fs-3 fw-bold" style={{ color: "blue", fontWeight: "bold" }}>
            Aksara
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Menu navigasi */}
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-item" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`} end>
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            {/* Tombol-tombol aksi */}
            <div className="text-center d-flex flex-column flex-lg-row justify-content-center align-items-center">
              {/* Tombol Masuk */}
              <button
                className="btn btn-primary btn-sm me-lg-3 mb-2 mb-lg-0"
                style={{
                  fontSize: "0.8rem",
                  padding: "0.2rem 0.5rem",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out",
                  boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.5)";
                }}
              >
                Masuk
              </button>
              {/* Tombol Daftar Berlangganan */}
              <button
                className="btn btn-primary btn-sm"
                style={{
                  fontSize: "0.8rem",
                  padding: "0.2rem 0.5rem",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out",
                  boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.5)";
                }}
              >
                Daftar Berlangganan
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

// Mengekspor komponen NavbarComponent
export default NavbarComponent;
