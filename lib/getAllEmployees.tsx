import { cookies } from "next/headers";

export const getAllEmployees = async (): Promise<MyEmployee[]> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("token")?.value;

  if (!accessToken) {
    throw new Error("No access token found.");
  }

  const res = await fetch(process.env.NEXT_PUBLIC_EMPLOYEE_API as string, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: { revalidate: 2 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data...");
  }

  return res.json();
};
