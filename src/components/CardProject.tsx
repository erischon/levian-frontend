import ButtonLight from "./ButtonLight";

/**
 * @description Component CardProject, card of a project
 * @version 1.0.0
 * @returns {JSX.Element}
 */
const CardProject = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow-md p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Project Name</h2>
          <ButtonLight>View</ButtonLight>
        </div>

        <p>
          Status: <span className="font-semibold">Completed</span>
        </p>

        <p>
          Task(s): <span className="font-semibold">3</span>
        </p>
      </div>
    </>
  );
};

export default CardProject;
