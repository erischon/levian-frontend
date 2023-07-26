"use client";

import { useSelector } from "react-redux";
import useSWR from "swr";

import { ProjectForm } from "@/components/ProjectForm/";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description CreateProjectPage component, page to create a project
 * @version 1.0.0
 * @returns {JSX.Element}
 */
function CreateProjectPage(): JSX.Element {
  const { user } = useSelector((state: any) => state.user);

  const { data, error, isLoading } = useSWR(
    user?.id
      ? `${process.env.NEXT_PUBLIC_API_URI}/api/customers/${user.id}`
      : null,
    fetcher
  );

  console.log("====== user", user?.id);
  console.log("====== customers", data);

  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Ajouter un projet
        </h1>

        {/* <ProjectForm customers={data} /> */}
      </main>
    </>
  );
}
export default CreateProjectPage;
