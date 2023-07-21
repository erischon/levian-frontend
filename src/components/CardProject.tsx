import Link from "next/link";
import ButtonLight from "./ButtonLight";

interface ProjectProps {
  project: {
    _id: string;
    name: string;
    startDate: string;
    status: string;
    tasks?: Array<string>;
  };
}

/**
 * @description Component CardProject, card of a project
 * @version 1.0.0
 * @returns {JSX.Element}
 */
const CardProject: React.FC<ProjectProps> = ({ project }): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow-md p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{project.name}</h2>
          <ButtonLight>
            <Link href={`/project/${project._id}`}>View</Link>
          </ButtonLight>
        </div>

        <p>
          Status: <span className="font-semibold">{project.status}</span>
        </p>

        <p>
          Task(s):{" "}
          <span className="font-semibold">{project.tasks?.length}</span>
        </p>
      </div>
    </>
  );
};

export default CardProject;