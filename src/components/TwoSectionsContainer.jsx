export const TwoSectionsContainer = ({ children, clasName = "" }) => {
  return (
    <div
      className={
        "relative w-screen flex items-center text-gray-300 lg:p-16 md:p-8 p-4 sm:gap-x-8 gap-x-4 mb-[10vh] " +
        clasName
      }
    >
      {children}
    </div>
  );
};
