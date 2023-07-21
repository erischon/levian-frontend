import { ProjectForm } from "@/components/ProjectForm/";

/**
 * @description ProjectPage component, used to display the project creation page
 * @version 1.0.0
 * @returns {JSX.Element}
 */
function ProjectPage(): JSX.Element {
  return (
    <>
      <main className="w-[90%] sm:w-1/2 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Ajouter un projet
        </h1>

        <ProjectForm />
      </main>
    </>
  );
}
export default ProjectPage;
