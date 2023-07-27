import useSWR from "swr";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description Hook to get all projects from a user
 * @version 1.0.1
 */
export default function useGetProjects(user: string) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}/api/projects/${user}`,
    fetcher
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
