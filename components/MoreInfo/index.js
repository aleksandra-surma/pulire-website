import Link from 'next/link';

const MoreInfo = ({ directionPage }) => {
  return (
    <Link href={directionPage}>
      <a className="block pt-4 text-sm text-neutral-400 cursor-pointer">więcej...</a>
    </Link>
  );
};

export default MoreInfo;
