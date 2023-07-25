/**
 * @description Get all projects from the database
 * @returns     {Promise}
 */
export async function getProjects(): Promise<unknown> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/projects/`);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}
