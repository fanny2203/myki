import React from "react";

const CustomSelect = ({ data }) => {
  return (
    <div className="flex justify-between items-center mt-[20px] w-[300px]">
      <label for="cars" className="mr-[20px]">
        {data.name}
      </label>

      <select
        className="py-2"
        name="cars"
        id="cars"
        style={{
          borderBottom: `1px solid gray`,
        }}
      >
        <option value="" disabled selected>
          Select your option
        </option>
        {data.options.map((option, index) => (
          <option key={option.name + index} value="volvo">
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
