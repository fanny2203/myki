import "./stylesLoader.css";

const Spinner = ({ color = "black" }) => {
  return (
    <div className="lds-ring">
      <div
        style={{
          border: `8px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          border: `8px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          border: `8px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          border: `8px solid ${color}`,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
};

export default Spinner;
