"use client";

import Link from "next/link";
import useSWR from "swr";

import { GoTasklist } from "react-icons/go";
import { BsInfoSquare } from "react-icons/bs";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description ProjectDetailPage component, used to display details of a project
 * @version 1.0.0
 */
const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const {
    data: projectData,
    error: projectError,
    isLoading: projectIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}/api/projects/project/${params?.id}`,
    fetcher
  );

  const {
    data: taskData,
    error: taskError,
    isLoading: taskIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}/api/tasks/project/${projectData?._id}`,
    fetcher
  );

  const startDate = new Date(projectData?.startDate).toLocaleDateString();

  return (
    <>
      <div>
        <section className="flex flex-col my-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold mb-4">{projectData?.name}</h1>

            <div className="border border-indigo-200 py-1 px-3 rounded-md shadow-sm text-sm">
              <Link href="/">Update project</Link>
            </div>
          </div>

          <p className="text-sm pl-4 border-l-4 border-indigo-300">
            {projectData?.description}
          </p>
        </section>

        <section className="flex flex-col my-8">
          <h2 className="flex justify-start items-center gap-2 text-lg font-semibold mb-4">
            <BsInfoSquare />
            Infos
          </h2>

          <div className="sm:flex sm:justify-start sm:items-center gap-6 text-sm">
            <p className="sm:border-r-2 border-indigo-300 sm:pr-4">
              Start Date :{" "}
              <span className="font-semibold tracking-wider">{startDate}</span>
            </p>
            <p className="sm:border-r-2 border-indigo-300 sm:pr-4">
              Status :{" "}
              <span className="font-semibold tracking-wider">
                {projectData?.status}
              </span>
            </p>
            <p className="">
              Assignee :{" "}
              <span className="font-semibold tracking-wider">
                {projectData?.user?.name}
              </span>
            </p>
          </div>
        </section>

        <section className="my-8">
          <div className="flex justify-between items-center">
            <h2 className="flex justify-start items-center gap-2 text-lg font-semibold">
              <GoTasklist />
              Tasks
            </h2>

            <div className="border border-indigo-200 py-1 px-3 rounded-md shadow-sm text-sm">
              <Link href={`/task/create/${projectData?._id}`}>Add Task</Link>
            </div>
          </div>

          <ul className="mt-4">
            {taskData?.map((task: any) => (
              <li key={task._id} className="flex justify-between">
                <span>{task.name}</span>
                <span>{task.user.name}</span>
                <span>{task.status}</span>
                <span>
                  <Link href={`/hours/create/${task._id}`}>Hours</Link>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
