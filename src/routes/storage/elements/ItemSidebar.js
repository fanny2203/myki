const ItemSidebar = ({ text, icon, collapse, action = () => {} }) => {
  return (
    <div
      className={`flex items-center mb-[20px] relative cursor-pointer ${
        collapse && "justify-center"
      }`}
      onClick={() => action()}
    >
      <div className={`${!collapse && "mr-[15px]"}`}>{icon}</div>
      <p
        className="absolute ml-[30px]"
        style={{
          opacity: collapse ? "0" : "1",
          transition: collapse ? "opacity 0s ease-in" : "opacity 0.2s ease-in",
          transitionDelay: !collapse && "0.3s",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default ItemSidebar;
