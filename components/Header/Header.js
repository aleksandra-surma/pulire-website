import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import Logo from 'components/Logo/Logo';

const Header = () => {
  return (
    <header className="fixed bg-white grid grid-cols-3 w-full h-16 font-barlow z-20">
      <Logo />
      <NavigationMenu />
    </header>
  );
};

export default Header;
