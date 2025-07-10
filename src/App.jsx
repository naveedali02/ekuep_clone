import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Account from './pages/Account';
import Cart from './pages/Cart';

// Language route wrapper component
function LanguageRoute() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!['en', 'ar'].includes(lang)) {
      navigate('/en');
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  }, [lang, i18n, navigate]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    window.location.pathname = `/${newLang}${window.location.pathname.substring(3)}`;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang/*" element={<LanguageRoute />} />
    </Routes>
  );
}

export default App;
