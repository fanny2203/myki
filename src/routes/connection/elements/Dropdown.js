import Icons from "../icons";

const Dropdown = ({ data = [], toggleTag, expanded, id, tagSelected }) => {
  const renderTag = (tag) => {
    if (!tag) {
      return null;
    }

    const handleIcon = () => {
      if (tag?.tags_son) {
        return expanded[tag._id] ? (
          <Icons icon="close" />
        ) : (
          <Icons icon="open" />
        );
      }
    };

    return (
      <li className="flex mt-2" key={tag._id}>
        <div className="mr-4"></div>
        <div>
          <div onClick={() => toggleTag(tag)} className="flex cursor-pointer">
            <div className="mr-1">{handleIcon()}</div>
            <div
              className={`${
                tagSelected?._id === tag._id && "text-color-primary"
              }`}
              style={{ color: tagSelected?._id === tag._id && primaryColor }}
            >
              {tag.name}
            </div>
          </div>
          {tag?.tags_son && (
            <ul>
              {tag.tags_son.map((tag_son) =>
                expanded[tag._id] ? renderTag(tag_son) : null
              )}
            </ul>
          )}
        </div>
      </li>
    );
  };

  return (
    <div
      onMouseDown={(event) => event.preventDefault()}
      id={id}
      className="scroll absolute w-full h-[250px] mt-[30px] rounded p-[10px]"
      style={{
        overflowY: "auto",
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <ul>{data.map((tag) => renderTag(tag))}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
