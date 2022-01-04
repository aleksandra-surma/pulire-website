const ViewWrapper = ({ children }) => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col mx-4 max-w-screen-xl my-6 xxs:mx-6 xxs:my-6 tablet:my-6 tablet:mx-8 laptop:my-16 xxs:mt-[80px] tablet:mt-[80px] laptop:mt-[80px]">
        {children}
      </div>
    </main>
  );
};

export default ViewWrapper;
