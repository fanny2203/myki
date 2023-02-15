//Components
import CustomButton from "../../../../components/CustomButton";

const Empty = ({ toggleModalCreateProject }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full"
      style={{
        height: "calc(100% - 150px)",
      }}
    >
      <p className="text-xl mb-[10px]">No projects created yet</p>
      <CustomButton
        text="Create project now"
        primary={true}
        action={() => toggleModalCreateProject(true)}
      />
    </div>
  );
};

export default Empty;
