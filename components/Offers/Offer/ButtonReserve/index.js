import { Link } from 'routes';

const ButtonReserve = () => {
  return (
    <Link route="/kontakt">
      <a className="bg-green-500 hover:bg-green-600 tracking-widest block px-4 py-3 mt-8 w-full text-lg font-bold text-center text-white rounded-md cursor-pointer disabled:opacity-60 lg:w-60 cursor-pointer">
        Rezerwuję
      </a>
    </Link>
  );
};

export default ButtonReserve;
