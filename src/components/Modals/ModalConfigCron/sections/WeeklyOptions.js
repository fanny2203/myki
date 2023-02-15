//Globals
import { useSelector } from "react-redux";

const dayWeeks = [
  { value: "*", label: "All days" },
  { value: "0", label: "Sunday" },
  { value: "1", label: "Monday" },
  { value: "2", label: "Tuesday" },
  { value: "3", label: "Wednesday" },
  { value: "4", label: "Thursday" },
  { value: "5", label: "Friday" },
  { value: "6", label: "Saturday" },
];

const WeeklyOptions = ({ selected = "*", handleChange }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  return (
    <div className="flex justify-between mt-[20px]">
      {dayWeeks.map((day, index) => (
        <button
          key={index + day.value}
          className="px-[10px] py-[5px] text-white rounded"
          style={{
            backgroundColor: selected === day.value && primaryColor,
            border: selected !== day.value && `1px solid ${primaryColor}`,
            color: selected !== day.value && primaryColor,
          }}
          onClick={() => handleChange(day.value)}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
};

export default WeeklyOptions;
