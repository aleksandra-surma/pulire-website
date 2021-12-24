import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import Logo from 'components/Logo/Logo';

const Header = () => {
  return (
    <nav className="grid grid-cols-3 w-full h-16 font-barlow">
      <Logo />
      <NavigationMenu />
    </nav>
  );
};

export default Header;
