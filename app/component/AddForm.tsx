"use client";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { createEmployee } from "@/lib/createEmployee";
import { useRouter } from "next/navigation";

const enum JobRoles {
  SOFTWARE_ENGINEER = "SOFTWARE_ENGINEER",
  PRODUCT_MANAGER = "PRODUCT_MANAGER",
  DESIGNER = "DESIGNER",
  SOFTWARE_TESTER = "SOFTWARE_TESTER",
}
const enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

function AddForm() {
  const router = useRouter();
  const [newEmployee, setNewEmployee] = useState<MyEmployee>({
    accountName: "",
    bankAccountNumber: 0,
    bankName: "",
    dateOfBirth: "",
    educationalLevel: "",
    emailAddress: "",
    emergencyPhoneNumber: "",
    employmentRole: "",
    employmentStartDate: "",
    firstName: "",
    gender: "",
    lastName: "",
    nextOfKinFullName: "",
    nextOfKinPhoneNumber: "",
    nextOfKinRelationship: "",
    phoneNumber: "",
    physicalAddress: "",
  });
  const formStyle: string = "px-1 md:p-2 border w-full";

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setNewEmployee((previous) => {
      return { ...previous, [name]: type === "checkbox" ? checked : value };
    });
  }
  async function handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const createdEmployee = await createEmployee(newEmployee);
    console.log(newEmployee);
    if (createdEmployee) {
      router.push("/employees");
    }
  }
  return (
    <div>
      <form
        className="grid grid-cols-2 rounded-lg max-[600px]:grid-cols-1 border-2"
        onSubmit={handleAdd}
      >
        <div className="p-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            className={formStyle}
            required
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            value={newEmployee.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="lastName">last Name</label>
          <input
            className={formStyle}
            required
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Biden"
            value={newEmployee.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            className={formStyle}
            required
            type="email"
            name="emailAddress"
            id="emailAddress"
            placeholder="joebiden@xyz.com"
            value={newEmployee.emailAddress}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className={formStyle}
            required
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter Employee's Phone Number"
            value={newEmployee.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="emergencyPhoneNumber">Emergency Number</label>
          <input
            className={formStyle}
            required
            type="text"
            name="emergencyPhoneNumber"
            id="emergencyPhoneNumber"
            placeholder="+2349859890391"
            value={newEmployee.emergencyPhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="bankName">Bank Name</label>
          <input
            className={formStyle}
            required
            type="text"
            name="bankName"
            id="bankName"
            placeholder="Bank name"
            value={newEmployee.bankName}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="bankAccountNumber">Bank Account Number</label>
          <input
            className={formStyle}
            required
            type="number"
            name="bankAccountNumber"
            id="bankAccountNumber"
            placeholder="10000000001"
            value={newEmployee.bankAccountNumber}
            onChange={(e) =>
              setNewEmployee((prev) => ({
                ...prev,
                bankAccountNumber: Number(e.target.value),
              }))
            }
          />
        </div>
        <div className="p-2">
          <label htmlFor="accountName">Account Name</label>
          <input
            className={formStyle}
            required
            type="text"
            name="accountName"
            id="accountName"
            placeholder="Joe biden"
            value={newEmployee.accountName}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="physicalAddress">Physical Address</label>
          <input
            className={formStyle}
            required
            type="text"
            name="physicalAddress"
            id="physicalAddress"
            placeholder="Your home address"
            value={newEmployee.physicalAddress}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <fieldset>
            <legend>Gender</legend>
            <input
              type="radio"
              className="mx-2"
              name="gender"
              id="gender"
              value="MALE"
              checked={newEmployee.gender === Gender.MALE}
              onChange={handleChange}
            />
            <label htmlFor="gender">FEMALE</label>
            <br />
            <input
              type="radio"
              className="mx-2"
              name="gender"
              id="gender"
              value="FEMALE"
              checked={newEmployee.gender === Gender.FEMALE}
              onChange={handleChange}
            />
            <label htmlFor="gender">MALE</label>
            <br />
          </fieldset>
        </div>
        <div className="p-2">
          <label htmlFor="nextOfKinFullName">Next Of Kin Full name</label>
          <input
            className={formStyle}
            required
            type="text"
            name="nextOfKinFullName"
            id="nextOfKinFullName"
            placeholder="sam biden"
            value={newEmployee.nextOfKinFullName}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="nextOfKinPhoneNumber">Next of kin phone number</label>
          <input
            className={formStyle}
            required
            type="text"
            name="nextOfKinPhoneNumber"
            id="nextOfKinPhoneNumber"
            placeholder="+2349859890391"
            value={newEmployee.nextOfKinPhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="nextOfKinRelationship">
            Next of kin relationship
          </label>
          <input
            className={formStyle}
            required
            type="text"
            name="nextOfKinRelationship"
            id="nextOfKinRelationship"
            placeholder="Brother"
            value={newEmployee.nextOfKinRelationship}
            onChange={handleChange}
          />
        </div>

        <div className="p-2">
          <label htmlFor="employmentRole">Job Role</label> <br />
          <select
            name="employmentRole"
            id="employmentRole"
            value={newEmployee.employmentRole}
            onChange={(e) =>
              setNewEmployee((prev) => ({
                ...prev,
                employmentRole: e.target.value,
              }))
            }
          >
            <option value="">Select an option</option>
            <option value={JobRoles.SOFTWARE_ENGINEER}>
              Software Engineer
            </option>
            <option value={JobRoles.SOFTWARE_TESTER}>Software Tester</option>
            <option value={JobRoles.DESIGNER}>Product Designer</option>
            <option value={JobRoles.PRODUCT_MANAGER}>Product Manager</option>
          </select>
        </div>
        <div className="p-2">
          <label htmlFor="employmentStartDate">Start date</label>
          <input
            className={formStyle}
            required
            type="date"
            name="employmentStartDate"
            id="employmentStartDate"
            placeholder="02-04-1999"
            value={newEmployee.employmentStartDate}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            className={formStyle}
            required
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Enter Employee's Date of Birth"
            value={newEmployee.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label htmlFor="educationLevel">Education Level</label>
          <input
            className={formStyle}
            required
            type="text"
            name="educationalLevel"
            id="educationalLevel"
            placeholder="PhD "
            value={newEmployee.educationalLevel}
            onChange={handleChange}
          />
        </div>
        <button className="bg-green-500 p-4 rounded-lg"> ADD</button>
      </form>
    </div>
  );
}

export default AddForm;
