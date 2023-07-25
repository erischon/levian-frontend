/**
 * @description Get all projects from the database
 * @returns     {Promise}
 */
export async function getProjects(): Promise<unknown> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/projects/`);

    return res.json();
  } catch (err) {
    console.log(err);
  }
}
