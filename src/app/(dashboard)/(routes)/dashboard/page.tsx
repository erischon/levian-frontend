import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import { options } from "@/app/api/auth/[...nextauth]/options";
import Button from "@/components/Button";
import CardProject from "@/components/CardProject";

async function getProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/api/projects/`,
      {
        next: { revalidate: 10 },
      }
    );

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

/**
 * @description Dashboard page
 * @version 1.0.0
 * @returns {JSX.Element}
 */
const DashboardPage = async (): Promise<JSX.Element> => {
  const session = await getServerSession(options);
  console.log(session);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  let data = await getProjects();

  // sort projects by date
  function sortByDate(data: any) {
    data.sort((a: any, b: any) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  // only show 3 projects
  function showThreeProjects(data: any) {
    return data.slice(0, 5);
  }

  // only show project with status "in_progress"
  function showInProgressProjects(data: any) {
    return data.filter((project: any) => project.status === "in_progress");
  }

  // Configure data
  sortByDate(data);
  data = showThreeProjects(data);
  data = showInProgressProjects(data);

  return (
    <>
      <section className="flex gap-4 my-6">
        <Button color={"bg-teal-700"}>
          <div className="flex gap-2 justify-between items-center">
            <HiOutlineBuildingOffice2 />

            <Link href="/customer">Add Customer</Link>
          </div>
        </Button>

        <Button>
          <div className="flex gap-2 justify-between items-center">
            <AiOutlineProject />

            <Link href="/project">Add Project</Link>
          </div>
        </Button>
      </section>

      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((project: any) => (
            <CardProject key={project._id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
