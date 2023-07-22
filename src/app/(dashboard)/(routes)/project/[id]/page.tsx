import Button from "@/components/Button";
import Link from "next/link";
import { use } from "react";

import { GoTasklist } from "react-icons/go";

const getProject = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3456/api/projects/${id}`, {
      next: { revalidate: 60 },
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
};
const getTasks = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3456/api/tasks/project/${id}`, {
      next: { revalidate: 10 },
    });

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

/**
 * @description ProjectDetailPage component, used to display details of a project
 * @version 1.0.0
 * @returns {JSX.Element}
 */
const ProjectDetailPage = ({
  params,
}: {
  params: { id: string };
}): JSX.Element => {
  const project = use(getProject(params.id));
  const tasks = use(getTasks(params.id));

  return (
    <>
      <div>
        <section className="my-6">
          <h1 className="text-2xl font-semibold ">{project?.name}</h1>
        </section>

        <section>
          <h2 className="text-lg font-medium">Infos</h2>

          <p className="mt-4">Status : {project?.status}</p>
        </section>

        <section className="border border-gray-200 p-4 rounded-md my-6">
          <div className="flex justify-between items-center">
            <h2 className="flex justify-start items-center gap-2 text-xl font-semibold">
              <GoTasklist />
              Tasks
            </h2>

            <Button>
              <Link href="/">Add Task</Link>
            </Button>
          </div>

          <ul className="mt-4">
            {tasks?.map((task: any) => (
              <li key={task.id} className="flex justify-between">
                <span>{task.name}</span>
                <span>{task.user.name}</span>
                <span>{task.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
