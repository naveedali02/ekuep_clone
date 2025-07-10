import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch, FaPhone, FaWhatsapp, FaUserAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import logoIcon from '../assets/images/logoIcon.png';
import { FiShoppingCart } from 'react-icons/fi';
import { PiHandCoins } from 'react-icons/pi';

function MainLayout({ children }) {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { lang } = useParams();

  const handleLanguageChange = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`);
    window.location.href = newPath;
  };

  return (
    <div className={`layout ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <TopBar />

      {/* Header with Search */}
      <header className="header py-3 bg-white">
        <Container fluid>
          <Row className="align-items-center">
            {/* <Col md={3}>
            <div className='d-flex align-items-center gap-2'>
              <img src={logoIcon} alt="Ekuep" height="40" className="logo-icon rounded" />
              <h5 className='mb-0 logo-text text-dark'>Material supply</h5>
            </div>
            </Col>
            <Col md={6}>
              <InputGroup>
                <Form.Control
                  placeholder={i18n.language === 'ar' ? "ابحث عن المنتجات..." : "Search products..."}
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
                <small className="text-muted d-block">{i18n.language === 'ar' ? "تحتاج مساعدة؟" : "Need Help?"}</small>
                <span className="fw-bold">Call: 920035110</span>
              </div>
            </Col> */}

            <div className='col header-middle d-flex align-items-center'>
              <div className='d-flex align-items-center gap-2 logo_area'>
                <img src={logoIcon} alt="Ekuep" height="40" className="logo-icon rounded" />
                <h5 className='mb-0 logo-text text-dark'>Material Supply</h5>
              </div>
              <div className='search_area w-100'>
                <div className='position-relative'>
                  <Form.Control
                    placeholder={i18n.language === 'ar' ? "ابحث عن المنتجات..." : "Search products..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='search-input'
                  />
                  <Button variant="primary" className='search-button'>
                    <FaSearch /> Search
                  </Button>
                </div>
              </div>
              <div className='account-area d-none d-md-flex align-items-center justify-content-end'>
                <button className='btn btn_light_grey d-flex align-items-center gap-2 justify-content-center'><PiHandCoins /> Rowad Points</button>
                <button className='btn btn_light_grey d-flex align-items-center gap-2 justify-content-center'> <FaUserAlt className='me-1' /> Sign In</button>
                <button className='btn btn_light_grey cart_btn'> <FiShoppingCart /></button>
              </div>
            </div>
          </Row>
        </Container>
      </header>

      {/* Navigation */}
      <Navbar onLanguageChange={handleLanguageChange} />
      <div class="feature-bar-section">
        <Container fluid >
          <div class="container">
            <div class="d-flex justify-content-around">
              <div class="d-flex">
                <a class="d-flex align-items-center" target="blank" href="https://api.whatsapp.com/send/?phone=966540290416&amp;text&amp;app_absent=0">
                  <FaWhatsapp className='me-1' />
                  <span class="">Got a project? Talk to us</span>
                </a>
              </div>
              <div class="d-md-flex align-items-center d-none">
                <a target="blank" class="d-flex align-items-center" href="https://api.whatsapp.com/send/?phone=966135120313&amp;text&amp;app_absent=0">
                  <FaWhatsapp className='me-1' />
                  <span class="">Need help finding parts?</span>
                </a>
              </div>
              <div class="separator d-md-none d-flex">
                <span class=""></span>
              </div>
              <div class="d-flex align-items-center ">
                <a target="blank" class="d-flex align-items-center" href="https://api.whatsapp.com/send/?phone=966540286531&amp;text&amp;app_absent=0">
                  <FaWhatsapp className='me-1' />
                  <span class="">Rent Instead?</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
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