const Category = ({ option, getList }) => {
  return (
    <button
      className="mr-[25px] flex "
      style={{ minWidth: "fit-content" }}
      onClick={() => getList(option)}
    >
      {option}
    </button>
  );
};

export default Category;
