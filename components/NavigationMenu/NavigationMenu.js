import MobileMenu from '../MobileMenu/MobileMenu';
import NavButtons from '../NavButtons/NavButtons';

const NavigationMenu = ({ isShortNav, isMobileMenuActive, toggleMenuActive }) => {
  return (
    <nav className="flex col-start-3 justify-end items-center pr-4 font-normal xxs:pr-6 tablet:pr-8 align-center">
      {isShortNav ? (
        <MobileMenu isMobileMenuActive={isMobileMenuActive} toggleMenuActive={toggleMenuActive} />
      ) : (
        <NavButtons isMobile={false} />
      )}
      {/* {isShortNav && isMobileMenuActive ? <MobileNavigation /> : null} */}
    </nav>
  );
};

export default NavigationMenu;
