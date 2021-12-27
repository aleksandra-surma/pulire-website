import NavButtons from 'components/NavButtons/NavButtons';

const MobileNavigation = ({ isMobileMenuActive, toggleMenuActive, isShortNav }) => {
  return (
    <nav className="flex flex-col w-full h-full items-center bg-white justify-center absolute top-0 left-0 z-10">
      <NavButtons isMobile toggleMenuActive={toggleMenuActive} />
    </nav>
  );
};

export default MobileNavigation;
