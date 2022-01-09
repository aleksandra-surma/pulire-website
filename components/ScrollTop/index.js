import { Icon } from '@iconify/react';
import { animateScroll } from 'react-scroll';

const ScrollTop = () => {
  return (
    <div className="fixed right-8 bottom-4">
      <button type="button" onClick={animateScroll.scrollToTop}>
        <Icon className="scrollToTopIcon" icon="ph:caret-up-bold" width={30} height={30} />
      </button>
    </div>
  );
};

export default ScrollTop;
