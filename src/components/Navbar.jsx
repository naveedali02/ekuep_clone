import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Navbar({ onLanguageChange }) {
  const { t } = useTranslation();
  const { lang } = useParams();

  const getLocalizedPath = (path) => `/${lang}${path}`;

  return (
    <BsNavbar bg="light" expand="lg" className="border-bottom">
      <Container>
        <BsNavbar.Brand as={Link} to={getLocalizedPath('/')}>
          <img src="/logo.png" alt="Ekuep" height="40" />
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={getLocalizedPath('/')}>{t('nav.home')}</Nav.Link>
            <Nav.Link as={Link} to={getLocalizedPath('/categories')}>{t('nav.categories')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onLanguageChange} style={{ cursor: 'pointer' }}>{t('nav.language')}</Nav.Link>
            <Nav.Link as={Link} to={getLocalizedPath('/account')}>
              <FaUser /> {t('nav.account')}
            </Nav.Link>
            <Nav.Link as={Link} to={getLocalizedPath('/cart')}>
              <FaShoppingCart /> {t('nav.cart')}
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar; 