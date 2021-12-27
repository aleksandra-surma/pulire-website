import MobileMenu from 'components/MobileMenu/MobileMenu';
import NavButtons from 'components/NavButtons/NavButtons';

const NavigationMenu = ({ isHamburger, isMobileMenuActive, toggleMenuActive }) => {
  return (
    <nav className="flex col-start-3 justify-end items-center pr-4 font-normal xxs:pr-6 tablet:pr-8 align-center">
      {isHamburger ? (
        <MobileMenu isMobileMenuActive={isMobileMenuActive} toggleMenuActive={toggleMenuActive} />
      ) : (
        <NavButtons isMobile={false} />
      )}
    </nav>
  );
};

export default NavigationMenu;
