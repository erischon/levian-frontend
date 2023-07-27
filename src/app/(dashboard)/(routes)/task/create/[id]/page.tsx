"use client";

import useSWR from "swr";

import { CreateTaskForm } from "@/components/ProjectForm/";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description CreateTaskPage component, used to create a new task
 * @version 1.0.0
 */
function CreateTaskPage({ params }: { params: { id: string } }) {
  const {
    data: projectData,
    error: projectError,
    isLoading: projectIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}/api/projects/project/${params?.id}`,
    fetcher
  );

  console.log("====== projectData", projectData);

  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="flex flex-col text-3xl font-semibold text-center mb-4">
          Add a Task to
          <span className="font-medium">{projectData?.name}</span>
        </h1>

        <CreateTaskForm
          projectId={projectData?._id}
          userId={projectData?.user?._id}
        />
      </main>
    </>
  );
}
export default CreateTaskPage;
