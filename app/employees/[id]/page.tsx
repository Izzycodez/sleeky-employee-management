"use server";
import Link from "next/link";
import { Metadata } from "next";
import { getEmployee } from "@/lib/getEmployee";
import ClientDelete from "@/app/component/ClientDelete";
import MyAlertDialogue from "@/app/shadcn/MyAlertDialogue";
import EditEmployee from "@/app/component/EditEmployee";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.id}`,
  };
};
type Props = {
  params: { id: string };
};
async function EmployeePage({ params }: Props) {
  const employee: MyEmployee = await getEmployee(params.id);
  console.log(employee);
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">
              This is {employee.firstName + " " + employee.lastName} profile.
            </h1>
            <div className="py-6">
              <div className="px-8 text-start ">
                Bank name: {employee.bankName} <br />
                Account name: {employee.accountName} <br />
                Account Number: {employee.bankAccountNumber} <br />
                Employee Address: {employee.physicalAddress} <br />
                E-Address: {employee.emailAddress} <br />
                Phone Number: {employee.phoneNumber} <br />
                Emergency Number : {employee.emergencyPhoneNumber} <br />
                Next of kin : {employee.nextOfKinFullName} <br />
                Next Of kin Number: {employee.nextOfKinPhoneNumber} <br />
                Next Of kin Relationship: {employee.nextOfKinRelationship}{" "}
                <br />
                Job Role: {employee.employmentRole} <br />
                Employment Start Date: {employee.employmentStartDate} <br />
                Birthday: {employee.dateOfBirth} <br />
                Education level: {employee.educationalLevel} <br />
                <Link href={"/employees"} className="text-blue-400">
                  Go back to the previous page
                </Link>
              </div>
            </div>
            <div className="flex justify-between w-1/2 mx-auto">
              <MyAlertDialogue
                trigger="Edit"
                title="Edit Employee details"
                body={<EditEmployee employee={employee} />}
                T_style="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-200"
              />
              <MyAlertDialogue
                T_style="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-800 transition duration-200"
                trigger="Delete"
                title={`Are you sure you want to delete ${employee.firstName} from the database?`}
                body={<ClientDelete id={params.id} />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 m-2"></div>
    </div>
  );
}

export default EmployeePage;
