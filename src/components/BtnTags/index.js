import "./stylesDropTags.css";

import { TagsIcon } from "../../resources/icon";

//Globals
import { useSelector } from "react-redux";

const BtnTags = ({ position = "-180px", tags = [], addTag }) => {
  const { primaryColor } = useSelector((state) => state.theme.theme);

  const handleAction = (event) => {
    event.stopPropagation();
  };

  const handleAddTag = (event) => {
    event.stopPropagation();
    addTag();
  };

  return (
    <div className="btnTag flex cursor-pointer relative">
      <TagsIcon />
      <div className="scroll tagsContainer" style={{ left: position }}>
        {tags.map((tag, index) => (
          <div
            key={index + tag.key}
            className="tagItem flex bg-color-primary text-white px-3 py-1 rounded mb-[3px]"
            onClick={handleAction}
            style={{ background: primaryColor }}
          >
            <p
              className="max-w-[110px]"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {tag.name}
            </p>
            <p className="flex justify-center ml-[10px] w-[25px]">X</p>
          </div>
        ))}
        <div
          className="flex items-center px-[15px] py-[4px] border rounded bg-white"
          onClick={handleAddTag}
          style={{
            borderColor: primaryColor,
            color: primaryColor,
          }}
        >
          Add Tag
          <p
            className="ml-[5px] text-lg"
            style={{
              color: primaryColor,
            }}
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default BtnTags;
