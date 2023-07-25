import Link from "next/link";

import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import Button from "@/components/Button";
import CardProject from "@/components/CardProject";
import { getProjects } from "@/lib/getProjects";

/**
 * @description Dashboard page
 * @version 1.0.0
 */
const DashboardPage = async () => {
  let data: any = await getProjects();

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
