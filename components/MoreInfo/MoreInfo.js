import { Link } from 'routes';

const MoreInfo = ({ directionPage }) => {
  return (
    <Link route={directionPage}>
      <a className="block pt-4 text-sm text-neutral-400 cursor-pointer">więcej...</a>
    </Link>
  );
};

export default MoreInfo;
