import { Link } from 'routes';
import navButtonsData from 'data/buttons';
import { useRouter } from 'next/router';

const NavigationMenu = () => {
  const { asPath: pathnameUrl } = useRouter();

  const navButtonClasses = (index, path) => {
    return `${pathnameUrl === path ? 'text-gray-800 font-semibold' : 'text-gray-500'} ${
      index === navButtonsData.length - 1 ? '' : 'pr-14'
    }`;
  };

  return (
    <nav className="flex col-start-3 justify-end items-center pr-8 font-normal align-center">
      {navButtonsData.map(({ label, path }, index) => {
        return (
          <div key={label} className={navButtonClasses(index, path)}>
            <Link route={path}>{label}</Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
