"use client";

import useSWR from "swr";

import { CreateHoursForm } from "@/components/ProjectForm";
import { apiRoutes } from "@/utils/apiRoutes";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description CreateHoursPage component, used to create a new task
 * @version 1.0.0
 */
function CreateHoursPage({ params }: { params: { id: string } }) {
  const { tasksRoute, hoursRoute } = apiRoutes;

  const {
    data: taskData,
    error: projectError,
    isLoading: projectIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}${tasksRoute.get}${params?.id}`,
    fetcher
  );

  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="flex flex-col text-3xl font-semibold text-center mb-4">
          Add hours to
          <span className="font-medium">{taskData?.name}</span>
        </h1>

        <CreateHoursForm taskId={params?.id} postRoute={hoursRoute.post} />
      </main>
    </>
  );
}
export default CreateHoursPage;
