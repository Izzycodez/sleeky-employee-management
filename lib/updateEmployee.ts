"use server";
import { cookies } from "next/headers";
import { BASE_API_URL } from "@/config";

export const updateEmployee = async (
  id: string,
  employeeData: MyEmployee
): Promise<MyEmployee> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("token")?.value;

  if (!accessToken) {
    throw new Error("No access token found.");
  }
  const API: string = `${BASE_API_URL}/${id}`;
  const res = await fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(employeeData),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data...");
  }

  return res.json();
};
