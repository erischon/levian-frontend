"use client";

import { useSelector } from "react-redux";
import useSWR from "swr";

import { CreateProjectForm } from "@/components/ProjectForm/";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description CreateProjectPage component, page to create a project
 * @version 1.0.0
 */
function CreateProjectPage() {
  const { user } = useSelector((state: any) => state.user);

  const { data, error, isLoading } = useSWR(
    user?.id
      ? `${process.env.NEXT_PUBLIC_API_URI}/api/customers/${user.id}`
      : null,
    fetcher
  );

  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Ajouter un projet
        </h1>

        <CreateProjectForm customers={data} userId={user?.id} />
      </main>
    </>
  );
}
export default CreateProjectPage;
