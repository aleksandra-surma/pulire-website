const ViewWrapper = ({ children }) => {
  return (
    <main className="flex justify-center w-full bg-indigo-50">
      <div className="flex flex-col w-10/12 bg-indigo-100">{children}</div>
    </main>
  );
};

export default ViewWrapper;
