const ViewWrapper = ({ children }) => {
  return (
    <main className="flex justify-center mt-4 mb-10 w-full">
      <div className="flex flex-col mx-4 xxs:mx-6 tablet:mx-8">{children}</div>
    </main>
  );
};

export default ViewWrapper;
