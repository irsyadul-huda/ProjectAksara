import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

const Beranda = () => {
  return (
    <div className="Beranda">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col md={6}>
              <h1>
                Temukan <br />
                <span>Style</span> Desainmu Disini
              </h1>
              <p>
                Temukan beragam style desain yang memukau dan inspiratif di sini, kami hadirkan khusus untuk Anda.
                <br />
                <br />
                <p>
                  <strong>Berlangganan sekarang untuk hemat lebih banyak</strong>
                </p>
              </p>
              <button
                className="btn btn-primary btn-sm me-3"
                style={{
                  fontSize: "1rem",
                  padding: "0.3rem 0.6rem",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out, color 0.3s ease-in-out",
                  boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.8)";
                  e.target.style.color = "yellow";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 0 5px rgba(255, 255, 255, 0.5)";
                  e.target.style.color = "";
                }}
              >
                Berlangganan
              </button>
            </Col>
            <Col md={6}>
              <img src={HeroImage} alt="hero-img" className="img-fluid" style={{ width: "80%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default Beranda;
