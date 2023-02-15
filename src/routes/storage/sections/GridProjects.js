//Components
import DirItem from "../../../components/DirItem";

const GridProjects = ({ projects, action = () => {} }) => {
  return (
    <div
      className="scroll flex w-full p-[20px]"
      style={{
        flexWrap: "wrap",
        gap: "10px",
        maxHeight: "calc(100vh - 155px)",
        overflowY: "auto",
      }}
    >
      {projects.map((project, index) => (
        <DirItem key={project.name + index} data={project} action={action} />
      ))}
    </div>
  );
};

export default GridProjects;
