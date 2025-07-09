import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: 'Nuova Simonelli Appia Life',
    description: '2 Group Volumetric Espresso Machine - Professional grade coffee machine for cafes and restaurants',
    price: 14381.15,
    oldPrice: 16919.00,
    image: 'https://images.unsplash.com/photo-1587075417738-aa364f901100?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    freeDelivery: true
  },
  {
    id: 2,
    name: 'Merrychef E1S High Speed Oven',
    description: 'Professional high-speed combination oven perfect for quick service restaurants',
    price: 27600.00,
    oldPrice: 34500.00,
    image: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    freeDelivery: true
  },
  {
    id: 3,
    name: 'True TUC-27-HC Refrigerator',
    description: 'Solid Door Refrigerator with Hydrocarbon Refrigerant - Energy efficient commercial refrigeration',
    price: 11261.65,
    oldPrice: 13249.00,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    freeDelivery: true
  }
];

function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <Container fluid className="px-0 mb-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="First slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h2>Professional Kitchen Equipment</h2>
              <p>Discover our range of high-quality restaurant equipment</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Second slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h2>Coffee Shop Solutions</h2>
              <p>Everything you need for your café business</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Featured Products */}
      <Container>
        <div className="section-header mb-4">
          <h2 className="section-title">Featured Products</h2>
          <p className="text-muted">Discover our most popular equipment</p>
        </div>
        <Row className="g-4">
          {sampleProducts.map(product => (
            <Col key={product.id} xs={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Categories Preview */}
      <Container className="mt-5">
        <div className="section-header mb-4">
          <h2 className="section-title">Popular Categories</h2>
          <p className="text-muted">Browse our top equipment categories</p>
        </div>
        <Row className="g-4">
          <Col md={3}>
            <div className="category-card text-center p-4 bg-white rounded shadow-sm">
              <img src="https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="Coffee Makers"
                   className="mb-3 rounded"
                   style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h5>Coffee Makers</h5>
            </div>
          </Col>
          <Col md={3}>
            <div className="category-card text-center p-4 bg-white rounded shadow-sm">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="Refrigeration"
                   className="mb-3 rounded"
                   style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h5>Refrigeration</h5>
            </div>
          </Col>
          <Col md={3}>
            <div className="category-card text-center p-4 bg-white rounded shadow-sm">
              <img src="https://images.unsplash.com/photo-1588279102050-419701a1d508?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="Cooking Equipment"
                   className="mb-3 rounded"
                   style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h5>Cooking Equipment</h5>
            </div>
          </Col>
          <Col md={3}>
            <div className="category-card text-center p-4 bg-white rounded shadow-sm">
              <img src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="Food Preparation"
                   className="mb-3 rounded"
                   style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h5>Food Preparation</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home; 