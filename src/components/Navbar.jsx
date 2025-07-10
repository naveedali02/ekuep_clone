import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logoIcon from '../assets/images/logoIcon.png';

function Navbar({ onLanguageChange }) {
  const { t } = useTranslation();
  const { lang } = useParams();

  const getLocalizedPath = (path) => `/${lang}${path}`;

  return (
    <BsNavbar bg="light" expand="lg">
      <Container fluid>
       
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={getLocalizedPath('/')}>Coffee Makers</Nav.Link>
            {/* <Nav.Link as={Link} to={getLocalizedPath('/categories')}>{t('nav.categories')}</Nav.Link> */}
            <Nav.Link as={Link} to="#">Ekuep Used market</Nav.Link>
            <Nav.Link as={Link} to="#">Rental Solutions</Nav.Link>
            <Nav.Link as={Link} to="#">REFRIGERATION</Nav.Link>
            <Nav.Link as={Link} to="#">Beverage</Nav.Link>
            <Nav.Link as={Link} to="#">Display Refrigerators</Nav.Link>
          </Nav>
       
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar; 