import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.categories": "Categories",
      "nav.account": "Account",
      "nav.cart": "Cart",
      "nav.language": "العربية",
      "product.addToCart": "Add to Cart",
      "product.freeDelivery": "Free Delivery",
      "product.inStock": "In Stock",
      "footer.about": "About Us",
      "footer.contact": "Contact Us",
      "footer.help": "Help Center",
      "footer.rights": "© 2024 Ekuep Clone. All Rights Reserved"
    }
  },
  ar: {
    translation: {
      "nav.home": "الرئيسية",
      "nav.categories": "الفئات",
      "nav.account": "حسابي",
      "nav.cart": "السلة",
      "nav.language": "English",
      "product.addToCart": "أضف إلى السلة",
      "product.freeDelivery": "توصيل مجاني",
      "product.inStock": "متوفر",
      "footer.about": "من نحن",
      "footer.contact": "اتصل بنا",
      "footer.help": "مركز المساعدة",
      "footer.rights": "© 2024 نسخة إيكوب. جميع الحقوق محفوظة"
    }
  }
};

// Custom language detector that uses URL path
const languageDetector = {
  type: 'languageDetector',
  detect: () => {
    const path = window.location.pathname;
    const lang = path.split('/')[1];
    return ['ar', 'en'].includes(lang) ? lang : 'en';
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 