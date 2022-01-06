import MobileMenu from 'components/MobileMenu/MobileMenu';
import NavButtons from 'components/NavButtons/NavButtons';
import { PageContext } from 'data/pageContext';
import { useContext } from 'react';

const NavigationMenu = () => {
  const { isHamburger } = useContext(PageContext);

  return (
    <nav className="flex col-start-3 justify-end items-center pr-4 font-normal xxs:pr-6 tablet:pr-8 align-center">
      {isHamburger ? <MobileMenu /> : <NavButtons isMobile={false} />}
    </nav>
  );
};

export default NavigationMenu;
