import { Icon } from '@iconify/react';

const MobileMenu = ({ isMobileMenuActive, toggleMenuActive }) => {
  return (
    <>
      {isMobileMenuActive ? (
        <Icon
          className="z-20 text-gray-600"
          onClick={toggleMenuActive}
          icon="clarity:close-line"
          width="40"
          height="40"
        />
      ) : (
        <div className="text-md xs:text-lg text-gray-600" onClick={toggleMenuActive}>
          menu
        </div>
      )}
    </>
  );
};

export default MobileMenu;
