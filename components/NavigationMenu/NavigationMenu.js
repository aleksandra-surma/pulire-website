import { useContext } from 'react';
import { Link } from 'routes';
import navButtonsData from 'data/buttons';
import { PageContext } from 'data/pageContext';

const NavigationMenu = () => {
  const { currentPage: pathnameUrl } = useContext(PageContext);

  const navButtonsInfo = Object.values(navButtonsData);

  const navButtonClasses = (path) => {
    // 1. if nav button is active -> bold string / 2.if last button ("/kontakt") don't add right padding
    return `${pathnameUrl === path ? 'text-gray-800 font-semibold' : 'text-gray-500'} ${
      path === '/kontakt' ? '' : 'pr-14'
    }`;
  };

  return (
    <nav className="flex col-start-3 justify-end items-center pr-8 font-normal align-center">
      {navButtonsInfo.map(({ label, path }) => {
        return (
          <div key={label} className={navButtonClasses(path)}>
            <Link route={path}>{label}</Link>
          </div>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
