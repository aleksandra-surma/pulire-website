import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import Logo from 'components/Logo/Logo';

const Header = ({ isHamburger, isMobileMenuActive, toggleMenuActive }) => {
  return (
    <header className="grid grid-cols-3 w-full h-16 font-barlow">
      <Logo />
      <NavigationMenu
        isMobileMenuActive={isMobileMenuActive}
        toggleMenuActive={toggleMenuActive}
        isHamburger={isHamburger}
      />
    </header>
  );
};

export default Header;
