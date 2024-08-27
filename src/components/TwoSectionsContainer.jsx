export const TwoSectionsContainer = ({
  children,
  index = 0,
  clasName = "",
}) => {
  return (
    <div
      className={
        `relative w-screen flex items-center text-gray-300 lg:p-16 md:p-8 p-4 sm:gap-x-8 gap-x-4 mb-[10vh] ${
          index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
        }` + clasName
      }
    >
      {children}
    </div>
  );
};
