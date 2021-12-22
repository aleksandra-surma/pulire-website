import Link from 'next/link';

const NavigationMenu = ({ isBurgerMenu }) => {
  return (
    <nav className="col-start-3 font-normal flex justify-end align-center items-center pr-8">
      <Link href="/">HOME</Link>
      <Link href="/o-nas">O NAS</Link>
      <Link href="/oferta">OFERTA</Link>
      <Link href="/kontakt">KONTAKT</Link>
    </nav>
  );
};

export default NavigationMenu;
