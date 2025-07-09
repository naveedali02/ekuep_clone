import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4}>
            <h5>{t('footer.about')}</h5>
            <p>
              Ekuep Clone is a demo e-commerce platform showcasing restaurant and café equipment.
            </p>
          </Col>
          <Col md={4}>
            <h5>{t('footer.help')}</h5>
            <ul className="list-unstyled">
              <li>920035110</li>
              <li>support@ekuepclone.com</li>
              <li>Sun - Thu | 9AM - 5PM</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>{t('footer.contact')}</h5>
            <p>
              Riyadh, Saudi Arabia<br />
              WhatsApp: +966 135120317
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">{t('footer.rights')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer; 