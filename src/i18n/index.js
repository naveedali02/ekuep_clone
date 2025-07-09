import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 