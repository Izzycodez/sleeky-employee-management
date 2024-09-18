"use client";
import { useRouter } from "next/navigation";
import { deleteEmployee } from "@/lib/deleteEmployee";

export const ClientDelete = ({ id }: { id: string }) => {
  const router = useRouter();
  function removeEmployee() {
    deleteEmployee(id);
    router.push("/employees"); // Redirect after deletion
  }
  return (
    <div>
      <button
        onClick={() => removeEmployee()}
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default ClientDelete;
