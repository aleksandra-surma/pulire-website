const ViewWrapper = ({ children }) => {
  return (
    <main className="flex justify-center tabletTall:min-h-[calc(100vh-100px)] tabletBigLandscape:min-h-[calc(100vh-100px)]">
      <div className="flex flex-col lg:justify-evenly mx-4 max-w-screen-xl w-full my-6 xxs:mx-6 tablet:my-6 tablet:mx-8 laptop:my-16 mt-[80px] tablet:mt-[80px] laptop:mt-[80px]">
        {children}
      </div>
    </main>
  );
};

export default ViewWrapper;
