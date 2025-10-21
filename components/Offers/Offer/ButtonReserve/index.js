import Link from 'next/link';

const ButtonReserve = () => {
  return (
    <Link href="/kontakt">
      <a
        title="kontakt"
        className="bg-green-500 hover:bg-green-600 tracking-widest block px-4 py-3 mt-8 w-full text-lg font-bold text-center text-white rounded-md cursor-pointer disabled:opacity-60 lg:w-60 cursor-pointer">
        Uzyskaj ofertę
      </a>
    </Link>
  );
};

export default ButtonReserve;
