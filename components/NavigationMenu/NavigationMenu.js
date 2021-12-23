import Link from 'next/link';

const NavigationMenu = ({ isBurgerMenu }) => {
  return (
    <nav className="col-start-3 font-normal flex justify-end align-center items-center pr-8">
      <div className="pr-14 text-gray-800">
        <Link href="/">HOME</Link>
      </div>
      <div className="pr-14 text-gray-800">
        <Link href="/o-nas">O NAS</Link>
      </div>
      <div className="pr-14 text-gray-800">
        <Link href="/oferta">OFERTA</Link>
      </div>
      <div className="text-gray-800">
        <Link href="/kontakt">KONTAKT</Link>
      </div>
    </nav>
  );
};

export default NavigationMenu;
