import { getAllEmployees } from "@/lib/getAllEmployees";
import { Navigator } from "../component/Navigator";
import Link from "next/link";
import { MyAlert } from "../shadcn/MyAlert";
export const dynamic = "force-dynamic"; // Forces server-side rendering

export const metadata = {
  title: "Sleeky Employees",
};

const EmployeePage = async () => {
  try {
    const employees: MyEmployee[] = (await getAllEmployees()).reverse();

    return (
      <div className="mx-auto my-4 w-fit border-2 p-4 max-md:w-full">
        <h1 className="mb-3 text-center text-4xl">
          Welcome to Sleeky Programmers
        </h1>

        <section className="mx-auto w-fit">
          <div className="mx-auto grid grid-cols-2 max-lg:grid-cols-1">
            {employees.map((employee) => (
              <div
                className="card m-4 w-80 bg-gray-500 text-white hover:bg-gray-700"
                key={employee.firstName}
              >
                <div className="card-body">
                  <h2 className="card-title underline">{`${employee.firstName} ${employee.lastName}`}</h2>
                  <p>A {employee.employmentRole} at SleekyProgrammers</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-blue-400">
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
        <div className="my-4 text-center">
          <button className="btn bg-green-400 hover:bg-green-600 hover:text-xl">
            <Link href={"/employees/create-employee"}>
              Click to add a new Employee
            </Link>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <>
        <div className="mx-auto my-12 h-52 w-fit">
          Error loading employees.
          <MyAlert
            title="Error...!"
            description={error?.toString()!}
            alertStyle="text-red-600 font-serif text-xl my-6 font-bold"
          ></MyAlert>
          Please login to continue.
        </div>
      </>
    );
  }
};

export default EmployeePage;
