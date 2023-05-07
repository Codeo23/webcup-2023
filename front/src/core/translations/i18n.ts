import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { clientTranslations } from '../../client/translations';


i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          ...clientTranslations["en"]
        }
      },
      fr: {
        translation: {
          ...clientTranslations["fr"]
        }
      }
    }
  });

export default i18n;