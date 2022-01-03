import { Link } from 'routes';

const MoreInfo = ({ directionPage }) => {
  return (
    <Link route={directionPage}>
      <a>więcej...</a>
    </Link>
  );
};

export default MoreInfo;
