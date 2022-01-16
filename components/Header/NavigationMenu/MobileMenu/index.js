import { Icon } from '@iconify/react';
import { PageContext } from 'data/pageContext';
import { useContext } from 'react';

const MobileMenu = () => {
  const { isMobileMenuActive, toggleMenuActive } = useContext(PageContext);

  return isMobileMenuActive ? (
    <Icon
      className="z-20 text-neutral-600"
      onClick={toggleMenuActive}
      icon="clarity:close-line"
      width="40"
      height="40"
    />
  ) : (
    <div className="text-md xs:text-lg text-neutral-600 tracking-widest" onClick={toggleMenuActive}>
      menu
    </div>
  );
};

export default MobileMenu;
