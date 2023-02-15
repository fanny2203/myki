//Elements
import Arm from "../elements/Arm";
import ItemSectionArm from "../elements/ItemSectionArm";

const sectionsLeft = [
  { name: "New Source", id: "l2" },
  { name: "Templates", id: "centerL" },
  { name: "My projects", id: "l3" },
];

const LeftArms = ({ handleMargin, handleMarginText }) => {
  return (
    <div className="ml-[180px]">
      {sectionsLeft.map((section, index) => (
        <div
          key={index + section.id}
          className="absolute"
          style={{
            marginTop: handleMargin(index),
          }}
        >
          <div
            className="absolute ml-[-180px]"
            style={{ marginTop: handleMarginText(index) }}
          >
            <ItemSectionArm text={section.name} />
          </div>
          <Arm type={section.id} />
        </div>
      ))}
    </div>
  );
};

export default LeftArms;
