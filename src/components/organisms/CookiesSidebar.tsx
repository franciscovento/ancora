import React, { useEffect } from 'react';
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

const CookiesSidebar = () => {
  const url = new URL(window.location.href);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [showCookies, setShowCookies] = React.useState(true);
  useEffect(() => {
    const cookies = document.cookie;
    if (cookies.includes('cookies-accepted=true')) {
      setShowCookies(false);
    }
  }, []);

  const onAcceptCookies = () => {
    setShowCookies(false);
    document.cookie = 'cookies-accepted=true;max-age=31536000';
  };

  return (
    showCookies && (
      <div className="w-full fixed bottom-0 bg-anc-secondary text-white flex items-center justify-center gap-4 px-8 py-4 animate-fade-up">
        <p className="text-white text-sm" dangerouslySetInnerHTML={{ __html: t('cookies.text') }} />
        <button
          onClick={onAcceptCookies}
          className="bg-anc-primary px-4 py-1 text-sm rounded-sm hover:bg-anc-primary-light transition-colors duration-300 ease-in-out"
        >
          {t('cookies.button')}
        </button>
      </div>
    )
  );
};

export default CookiesSidebar;
