const ViewWrapper = ({ children }) => {
  return (
    <main className="flex justify-center mt-10 w-full">
      <div className="flex flex-col w-10/12 bg-indigo-50">{children}</div>
    </main>
  );
};

export default ViewWrapper;
