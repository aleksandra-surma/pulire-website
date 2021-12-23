import { Link } from 'routes';
import navButtonsData from 'data/buttons';
import useNavButtonClasses from 'hooks/useNavButtonClasses';

const NavigationMenu = () => {
  const [navButtonClasses] = useNavButtonClasses();

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
