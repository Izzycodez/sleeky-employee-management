import { getAllEmployees } from "@/lib/getAllEmployees";
import { Navigator } from "../component/Navigator";
import Link from "next/link";
export const dynamic = "force-dynamic"; // Forces server-side rendering

export const metadata = {
  title: "Sleeky Employees",
};

const EmployeePage = async () => {
  try {
    const employees: MyEmployee[] = (await getAllEmployees()).reverse();

    return (
      <div className="border-2 w-fit mx-auto my-4 p-4  max-md:w-full">
        <h1 className="text-center text-4xl mb-3">
          Welcome to Sleeky Programmers
        </h1>
        <div className="text-right mt-4">
          <button className="btn btn-success">
            <Link href={"/employees/create-employee"}>
              Click to add a new Employee
            </Link>
          </button>
        </div>
        <section>
          <div className="grid grid-cols-2 max-lg:grid-cols-1">
            {employees.map((employee) => (
              <div
                className="card bg-indigo-400 text-white w-96 m-4 "
                key={employee.firstName}
              >
                <div className="card-body ">
                  <h2 className="card-title underline">{`${employee.firstName} ${employee.lastName}`}</h2>
                  <p>A {employee.employmentRole} at SleekyProgrammers</p>
                  <div className="card-actions justify-end">
                    <button className="btn">
                      <Navigator
                        pathDirection={`/employees/${employee._id}`}
                        text={`Go to ${employee.firstName}'s profile to see more`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error fetching employees:", error);
    return <div>Error loading employees. Please try again later.</div>;
  }
};

export default EmployeePage;
