import React from 'react';
import { AccordionItem } from './Accordion';
import ancoraLogo from '../../assets/img/logo_ancora.png';
import ContactButton from './ContactButton';
import menuItemsMobile from '../../data/menuItemsMobile';
import { getLangFromUrl, useTranslations } from '../../i18n/utils';
import mexicoFlag from '../../assets/svg/mexico-flag.svg';
import usaFlag from '../../assets/svg/usa-flag.svg';

const MobileMenu = () => {
  const currentUrl = new URL(window.location.href);
  const lang = getLangFromUrl(currentUrl);
  const t = useTranslations(lang);

  const [isOpen, setIsOpen] = React.useState(false);
  const [itemSelected, setItemSelected] = React.useState(-1);

  React.useEffect(() => {
    setIsOpen(false);
  }, []);

  const onSelectItem = (index: number) => {
    if (index === itemSelected) return setItemSelected(-1);
    setItemSelected(index);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  const getCurrenPath = () => {
    return currentUrl.pathname.replace(`/${lang}`, '');
  };
  return (
    <>
      <svg
        onClick={() => setIsOpen(true)}
        className="absolute left-5 top-1/2 -translate-y-1/2  cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
          fill="#0C2339"
        ></path>
      </svg>
      <div
        style={{
          transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
        }}
        className="w-screen h-screen duration-500 z-50 bg-anc-background-light fixed top-0 left-0 p-8 overflow-x-auto"
        // onClick={handleMenu}
      >
        <div className="flex flex-col gap-8 h-full">
          <div className="flex justify-between items-center">
            <a href={`/${lang}`}>
              <img className="w-[140px] sm:w-[169px]" src={ancoraLogo.src} />
            </a>
            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  fill="#0F0F0F"
                />
              </svg>
            </span>
          </div>
          <nav className={'flex flex-col gap-12 h-full justify-between'}>
            <div className="bg-anc-background-light">
              {menuItemsMobile.map((item, index) => {
                return (
                  <AccordionItem
                    key={index}
                    title={item.name[lang]}
                    isOpen={index === itemSelected}
                    setItem={() => onSelectItem(index)}
                  >
                    <ul className="flex flex-col gap-1 pb-2 -mt-2">
                      {item.submenu.map((subitem, index) => (
                        <li key={index}>
                          <a href={`/${lang}${subitem.link}`}>
                            {subitem.name[lang]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                );
              })}
            </div>
            <div className={'flex flex-col gap-2 pb-8'}>
              <button
                className={
                  'hover:bg-anc-secondary-light bg-anc-secondary rounded-[0_20px_20px_20px] text-white  text-xs duration-500'
                }
              >
                <a
                  href="https://ancora-individuales.segupoliza.com/"
                  className="py-2 px-4 flex items-center justify-center gap-2"
                >
                  Marketplace
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5L10.0169 6.45769L13.8531 10.3125H5.5V11.6875H13.8531L10.0169 15.5189L11 16.5L16.5 11L11 5.5Z"
                      fill="white"
                    ></path>
                    <path
                      d="M11 20.625C9.09636 20.625 7.23546 20.0605 5.65264 19.0029C4.06982 17.9453 2.83616 16.4421 2.10766 14.6833C1.37917 12.9246 1.18856 10.9893 1.55995 9.12226C1.93133 7.25519 2.84802 5.54018 4.1941 4.1941C5.54018 2.84802 7.25519 1.93133 9.12226 1.55995C10.9893 1.18856 12.9246 1.37917 14.6833 2.10766C16.4421 2.83616 17.9453 4.06982 19.0029 5.65264C20.0605 7.23546 20.625 9.09636 20.625 11C20.6221 13.5518 19.6071 15.9983 17.8027 17.8027C15.9983 19.6071 13.5518 20.6221 11 20.625ZM11 2.75C9.36831 2.75 7.77326 3.23386 6.41655 4.14038C5.05984 5.0469 4.00242 6.33538 3.378 7.84287C2.75358 9.35036 2.5902 11.0092 2.90853 12.6095C3.22685 14.2098 4.01259 15.6799 5.16637 16.8336C6.32016 17.9874 7.79017 18.7732 9.39051 19.0915C10.9909 19.4098 12.6497 19.2464 14.1571 18.622C15.6646 17.9976 16.9531 16.9402 17.8596 15.5835C18.7661 14.2268 19.25 12.6317 19.25 11C19.2475 8.81275 18.3774 6.71581 16.8308 5.16919C15.2842 3.62256 13.1873 2.75255 11 2.75Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
              </button>
              <ContactButton>{t('button.contact')}</ContactButton>
              <ul className="flex justify-center text-sm uppercase gap-4 items-center pt-4">
                <li>
                  <a
                    className="flex gap-2 items-center"
                    href={`/es${getCurrenPath()}`}
                  >
                    ESP
                    <img src={mexicoFlag.src} />
                  </a>
                </li>
                <span>|</span>
                <li>
                  <a
                    className="flex gap-2 items-center"
                    href={`/en${getCurrenPath()}`}
                  >
                    ENG
                    <img width="20" src={usaFlag.src} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
