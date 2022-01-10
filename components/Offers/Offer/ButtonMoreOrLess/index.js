const ButtonMoreOrLess = ({ isOpened, setIsOpened }) => {
  const additionalClasses = isOpened ? 'text-neutral-400' : 'text-neutral-800 font-bold';

  return (
    <button
      type="button"
      className={`${additionalClasses} text-sm tracking-wider underline underline-offset-4 cursor-pointer`}
      onClick={() => setIsOpened((prevVal) => !prevVal)}>
      {isOpened ? 'mniej info...' : 'więcej...'}
    </button>
  );
};

export default ButtonMoreOrLess;
