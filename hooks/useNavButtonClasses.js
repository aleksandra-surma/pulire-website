import { useRouter } from 'next/router';
import navButtonsData from '../data/buttons';

const useNavButtonClasses = () => {
  const router = useRouter();

  const navButtonClasses = (index, path) =>
    `${router.asPath === path ? 'text-gray-800 font-semibold' : 'text-gray-500'} ${
      index === navButtonsData.length - 1 ? '' : 'pr-14'
    }`;

  return [navButtonClasses];
};

export default useNavButtonClasses;
