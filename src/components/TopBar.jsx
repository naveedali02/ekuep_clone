import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { FaFlag } from 'react-icons/fa';
import './TopBar.css';

function TopBar() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const getLocalizedPath = (path) => `/${lang}${path}`;

  return (
    <div className="top-bar bg-light py-2 border-bottom">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          {/* Left side */}
          <div className="topbar-left d-flex align-items-center">
            <span className="supplier-text">#1 SAUDI RESTAURANT EQUIPMENT SUPPLIER</span>
            <FaFlag className="ms-2 text-primary" />
          </div>

          {/* Right side */}
          <div className="topbar-right d-flex align-items-center">
            <div className="frequently-asked-questions me-4">
              <a 
                href="https://help.ekuep.com/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                Frequently Asked Questions
              </a>
            </div>
            
            <div className="track-order-link me-4">
              <a 
                href={getLocalizedPath('/orders')}
                className="text-decoration-none text-dark"
              >
                Track your order
              </a>
            </div>

            <div className="country-select-dropdown me-4">
              <Dropdown>
                <Dropdown.Toggle variant="link" className="text-dark text-decoration-none p-0">
                  <img 
                    width="48" 
                    height="29" 
                    src="https://cdn.ekuep.com/v4ekuep/ekuep-ksa-v4/imgs/saudi-flag.jpg" 
                    alt="KSA" 
                    className="me-1"
                  />
                  KSA
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>KSA</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="top-lang-area">
              <a 
                href={lang === 'en' ? '/ar' : '/en'} 
                className="language-selector text-decoration-none text-dark"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = lang === 'en' 
                    ? '/ar' + window.location.pathname.substring(3)
                    : '/en' + window.location.pathname.substring(3);
                }}
              >
                {lang === 'en' ? 'اللغة العربية' : 'English'}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;