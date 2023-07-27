import useSWR from "swr";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

export default function useUser(id: string) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}/api/users/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
