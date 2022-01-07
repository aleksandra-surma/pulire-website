import NavButtons from 'components/NavButtons/NavButtons';

const MobileNavigation = () => {
  return (
    <nav className="flex flex-col bg-white overflow-clip w-full h-full items-center justify-center fixed top-0 left-0 z-10">
      <NavButtons isMobile />
    </nav>
  );
};

export default MobileNavigation;
