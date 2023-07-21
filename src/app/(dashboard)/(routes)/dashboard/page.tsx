import Link from "next/link";

import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import Button from "@/components/Button";
import CardProject from "@/components/CardProject";

async function getProjects() {
  try {
    const res = await fetch("http://localhost:3456/api/projects/", {
      next: { revalidate: 10 },
    });

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
  const data = await getProjects();

  return (
    <>
      <section className="flex gap-4 my-6">
        <Button color={"bg-teal-700"}>
          <div className="flex gap-2 justify-between items-center">
            <HiOutlineBuildingOffice2 />

            <Link href="/project">Add Client</Link>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project: any) => (
            <CardProject key={project._id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
