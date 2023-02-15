const ItemColor = ({ section, handleColor, defaultValue }) => {
  return (
    <div className="flex w-[300px] justify-between mt-3">
      <p>{section.name}</p>
      <div className="flex justify-between w-[130px]">
        <input
          className="picker"
          type="color"
          value={defaultValue}
          onChange={handleColor}
          name={section.key}
        />
        <p>{defaultValue}</p>
      </div>
    </div>
  );
};

export default ItemColor;
