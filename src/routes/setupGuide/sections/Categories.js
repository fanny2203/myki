import Category from "./Category";

const Categories = ({ options }) => {
  return (
    <div
      className="scroll flex items-center  py-[20px] "
      style={{ overflowX: "auto" }}
    >
      {options.map((option, index) => {
        return <Category key={`${option} ${index}`} option={option} />;
      })}
    </div>
  );
};

export default Categories;
