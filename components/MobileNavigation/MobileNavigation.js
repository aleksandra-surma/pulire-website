import NavButtons from 'components/NavButtons/NavButtons';

const MobileNavigation = ({ toggleMenuActive }) => {
  return (
    <nav className="flex flex-col bg-white overflow-clip w-full h-full items-center justify-center absolute top-0 left-0">
      <NavButtons isMobile toggleMenuActive={toggleMenuActive} />
    </nav>
  );
};

export default MobileNavigation;
