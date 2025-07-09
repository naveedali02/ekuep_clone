import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar({ onLanguageChange }) {
  const { t } = useTranslation();

  return (
    <BsNavbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <BsNavbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="Ekuep" height="40" />
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{t('nav.home')}</Nav.Link>
            <Nav.Link as={Link} to="/categories">{t('nav.categories')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onLanguageChange}>{t('nav.language')}</Nav.Link>
            <Nav.Link as={Link} to="/account">
              <FaUser /> {t('nav.account')}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart /> {t('nav.cart')}
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar; 