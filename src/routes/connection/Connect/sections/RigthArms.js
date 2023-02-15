//Elements
import Arm from "../elements/Arm";
import ItemSectionArm from "../elements/ItemSectionArm";

const sectionsRigth = [
  { name: "New Destination", id: "r2" },
  { name: "Templates", id: "centerR" },
  { name: "My projects", id: "r3" },
];

const RigthArms = ({ handleMargin, handleMarginText }) => {
  return (
    <div className="ml-[485px]">
      {sectionsRigth.map((section, index) => (
        <div
          key={index + section.id}
          className="absolute"
          style={{
            marginTop: handleMargin(index),
          }}
        >
          <div
            className="absolute ml-[220px]"
            style={{ marginTop: handleMarginText(index) }}
          >
            <ItemSectionArm text={section.name} left={false} />
          </div>
          <Arm type={section.id} />
        </div>
      ))}
    </div>
  );
};

export default RigthArms;
