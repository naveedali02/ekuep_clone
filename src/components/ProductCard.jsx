import { useTranslation } from 'react-i18next';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaTruck } from 'react-icons/fa';

function ProductCard({ product }) {
  const { t } = useTranslation();

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-title">{product.name}</Card.Title>
        <div className="mb-2">
          <Badge bg="success" className="me-2">{t('product.inStock')}</Badge>
          {product.freeDelivery && (
            <Badge bg="info">
              <FaTruck className="me-1" />
              {t('product.freeDelivery')}
            </Badge>
          )}
        </div>
        <Card.Text>{product.description}</Card.Text>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <div className="price-section">
              <h4 className="mb-0">${product.price.toFixed(2)}</h4>
              {product.oldPrice && (
                <small className="text-muted text-decoration-line-through">
                  ${product.oldPrice.toFixed(2)}
                </small>
              )}
            </div>
            <Button variant="primary">{t('product.addToCart')}</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard; 