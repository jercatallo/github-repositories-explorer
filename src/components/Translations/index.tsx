import { IntlProvider } from 'react-intl';
import messagesEn from '../../translations/en.json';
import { ENVIRONMENTS } from '../../constants/environments';
import { TranslationsType } from './types';

const Translations:TranslationsType = ({ children }) => {
  const locale = ENVIRONMENTS.DEFAULT_LANGUAGE || 'en';
  const messages: Record<string, Record<string, string>> = {
    en: messagesEn,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

export default Translations;