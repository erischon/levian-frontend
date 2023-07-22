import { use } from "react";

const getProject = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3456/api/projects/${id}`);

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

/**
 * @description ProjectDetailPage component, used to display the project details page
 * @returns {JSX.Element}
 */
const ProjectDetailPage = ({
  params,
}: {
  params: { id: string };
}): JSX.Element => {
  const project = use(getProject(params.id));

  return (
    <>
      <div>
        <section className="my-6">
          <h1 className="text-2xl font-semibold ">{project?.name}</h1>
        </section>

        <section className="border border-gray-400 p-4 rounded-md my-6">
          <h2 className="text-lg font-medium">Tasks</h2>
          {!project?.tasks ? (
            <p>pas de task</p>
          ) : (
            <ul className="">
              {project?.tasks.map((task: any) => (
                <div
                  key={task._id}
                  className="flex flex-col sm:items-center sm:flex-row sm:gap-2 my-2 text-sm"
                >
                  <h3 className="font-semibold">{task.name}</h3>
                  <p className="text-sm">{task.description}</p>
                  <p className="text-sm">{task.user.googleId}</p>
                  <p className="text-sm">{task.status}</p>
                </div>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
