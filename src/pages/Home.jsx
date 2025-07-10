import { Container, Row, Col, Carousel } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  },
  {
    id: 4,
    name: 'Merrychef E1S High Speed Oven',
    description: 'Professional high-speed combination oven perfect for quick service restaurants',
    price: 27600.00,
    oldPrice: 34500.00,
    image: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    freeDelivery: true
  },
];

function Home() {
  return (
    <>
      {/* Hero Carousel */}


      {/* Featured Products */}
      <div className='category_slider_section'>
        <Container fluid>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className='category_card'>
                <img src="https://cdn.ekuep.com/v4ekuep/home/grid_banner/UBmOHNClop9KXozV2xQlGyXoakVxF2NqHJkhI6RY.png" alt="Coffee Makers" className='img-fluid' />

              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className='category_card'>
                <div className='row'>
                  <Col sm={12}>
                    <h5>Best sellers</h5>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>

                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className='category_card'>
                <div className='row'>
                  <Col sm={12}>
                    <h5>Best sellers</h5>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>
                  <Col md={6} className='card_inner_items'>
                    <Link to="#">
                      <img src="https://cdn.ekuep.com/v4ekuep/img/p/5/6/6/2/1/56621-small_default.jpg" alt="Coffee Makers" className='img-fluid' />
                      <p>Nuova Simonelli, Appia Life, 2 Group Volumetric Espresso Machine</p>
                    </Link>
                  </Col>

                </div>
              </div>
            </Col>
            {/* {sampleProducts.map(product => (
              <Col key={product.id} xs={12} md={6} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))} */}
          </Row>
        </Container>

      </div>

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