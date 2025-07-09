import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

function MainLayout({ children }) {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`layout ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <TopBar />

      {/* Header with Search */}
      <header className="header py-3 bg-white border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={3}>
              <img src="/logo.png" alt="Ekuep" height="40" className="logo" />
            </Col>
            <Col md={6}>
              <InputGroup>
                <Form.Control
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-primary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Col>
            <Col md={3} className="text-end">
              <div className="contact-info">
                <small className="text-muted d-block">Need Help?</small>
                <span className="fw-bold">Call: 920035110</span>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content py-4">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout; 