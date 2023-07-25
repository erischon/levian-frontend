"use client";

/**
 * @description Get user from the database
 * @returns     {Promise}
 */
export async function getUser(id: string): Promise<unknown> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/user/${id}`);

  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}
