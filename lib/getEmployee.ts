import { cookies } from "next/headers";
import { BASE_API_URL } from "@/config";

export const getEmployee = async (id: string): Promise<MyEmployee> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("token")?.value;

  if (!accessToken) {
    throw new Error("No access token found.");
  }
  const API: string = `${BASE_API_URL}/${id}`;
  const res = await fetch(API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data...");
  }

  return res.json();
};
