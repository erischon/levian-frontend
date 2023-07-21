import Link from "next/link";

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
      <section className="my-6">
        <Button>
          <Link href="/project">Add Project</Link>
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
