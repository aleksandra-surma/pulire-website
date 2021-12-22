import { NavLink } from 'react-router-dom';

const NavigationMenu = ({ isBurgerMenu }) => {
  return (
    <nav className="col-start-3 font-normal flex justify-end align-center items-center pr-8">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">O NAS</NavLink>
      <NavLink to="/offer">OFERTA</NavLink>
      <NavLink to="/contact">KONTAKT</NavLink>
    </nav>
  );
};

export default NavigationMenu;
