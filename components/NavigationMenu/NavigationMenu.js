import { Link } from 'routes';

const NavigationMenu = () => {
  return (
    <nav className="flex col-start-3 justify-end items-center pr-8 font-normal align-center">
      <div className="pr-14 text-gray-800">
        <Link route="/">HOME</Link>
      </div>
      <div className="pr-14 text-gray-800">
        <Link route="/o-nas">O NAS</Link>
      </div>
      <div className="pr-14 text-gray-800">
        <Link route="/oferta">OFERTA</Link>
      </div>
      <div className="text-gray-800">
        <Link route="/kontakt">KONTAKT</Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;
