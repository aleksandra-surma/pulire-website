import { useContext } from 'react';
import { Icon } from '@iconify/react';
import { PageContext } from 'data/pageContext';

const Cookies = () => {
  const { handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useContext(PageContext);

  return (
    <div className="fixed flex h-20 sm:h-12 justify-center items-center w-screen bottom-0 left-0 bg-neutral-800 text-white font-redHat text-sm sm:text-neutral-800 sm:bg-white">
      <div className="cookies__content-container w-[280px] sm:w-auto flex flex-col sm:flex-row justify-center mr-4">
        <p>Strona korzysta z plików cookies. Więcej na:</p>
        <div className="flex ml-2">
          <div className="mr-2 underline underline-offset-2">
            <a href="https://wszystkoociasteczkach.pl/" className="cookies__link" target="black">
              Wszystko o ciasteczkach
            </a>
          </div>
          <button
            type="submit"
            className="underline cookies__accept underline-offset-2"
            onClick={handleCookiesPolicyAgree}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCookiesPolicyAgree();
              }
            }}
            tabIndex={0}>
            Ok, akceptuję.
          </button>
        </div>
      </div>
      <div className="text-white sm:text-black">
        <Icon
          tabIndex={0}
          onClick={() => handleDismissCookiesPopUp(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleDismissCookiesPopUp(false);
            }
          }}
          className="short-contact-exit"
          icon="feather:x"
          aria-hidden={false}
          alt="zamknij okno cookies bez podejmowania decyzji"
        />
      </div>
    </div>
  );
};

export default Cookies;
