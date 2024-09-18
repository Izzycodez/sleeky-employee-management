"use server";
import { BASE_API_URL } from "@/config";
import { cookies } from "next/headers";
export const deleteEmployee = async (id: string) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("token")?.value;

  if (!accessToken) {
    throw new Error("No access token found.");
  }

  const API: string = `${BASE_API_URL}/${id}`;
  const res = await fetch(API, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      id: id,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    const errorMessage = errorData.message || "Failed to delete employee.";
    throw new Error(errorMessage);
  }
};
//  const accessToken = document.cookie.split("=")[1].trim();
