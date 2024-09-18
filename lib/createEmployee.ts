"use server";
import { cookies } from "next/headers";

export const createEmployee = async (
  employeeData: MyEmployee
): Promise<MyEmployee> => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("token")?.value;

    if (!accessToken) {
      throw new Error("No access token found.");
    }

    const res = await fetch(process.env.NEXT_PUBLIC_EMPLOYEE_API as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(employeeData),
    });

    if (res.status !== 200) {
      const errorData = await res.json();
      console.error("Error Response:", errorData);
      throw new Error("Failed to create employee.");
    }

    console.log("Employee created successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
  return employeeData;
};
