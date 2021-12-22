import { useState } from 'react';
import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import Logo from 'components/Logo/Logo';

const Header = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  return (
    <nav className="grid grid-cols-3 w-full h-16 font-barlow">
      <Logo />
      <NavigationMenu isBurgerMenu={isBurgerMenu} />
    </nav>
  );
};

export default Header;
