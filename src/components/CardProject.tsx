"use client";

import Link from "next/link";
import useSWR from "swr";

import ButtonLight from "./ButtonLight";
import { apiRoutes } from "@/utils/apiRoutes";

interface ProjectProps {
  project: {
    _id: string;
    name: string;
    startDate: string;
    status: string;
  };
}

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description Component CardProject, card of a project
 * @version 1.0.0
 */
const CardProject: React.FC<ProjectProps> = ({ project }) => {
  const { tasksRoute, hoursRoute } = apiRoutes;

  const {
    data: tasksData,
    error: tasksError,
    isLoading: tasksIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}${tasksRoute.getByProject}${project?._id}`,
    fetcher
  );

  const {
    data: hoursData,
    error: hoursError,
    isLoading: hoursIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}${hoursRoute.getByTask}${project?._id}`,
    fetcher
  );

  return (
    <>
      <div className="flex flex-col gap-2 shadow-md p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{project?.name}</h2>
          <ButtonLight>
            <Link href={`/project/${project?._id}`}>View</Link>
          </ButtonLight>
        </div>

        <p>
          Status: <span className="font-semibold">{project?.status}</span>
        </p>

        <p>
          Task(s):
          <span className="font-semibold">{tasksData?.length}</span>
        </p>
      </div>
    </>
  );
};

export default CardProject;
