import axios from "axios";

const getProjects = async () => {
  try {
    const res = await axios.get("http://localhost:3456/api/projects/");

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

async function ProjectPage() {
  const data = await getProjects();
  console.log("======data", data);
  return <div>ProjectPage</div>;
}
export default ProjectPage;
