import MobileMenu from 'components/Header/NavigationMenu/MobileMenu';
import NavButtons from 'components/NavButtons';
import { PageContext } from 'data/pageContext';
import { useContext } from 'react';

const NavigationMenu = () => {
  const { isTablet } = useContext(PageContext);

  return (
    <nav className="flex col-start-3 justify-end items-center pr-4 font-normal xxs:pr-6 tablet:pr-8 align-center">
      {isTablet ? <NavButtons isMobile={false} /> : <MobileMenu />}
    </nav>
  );
};

export default NavigationMenu;
