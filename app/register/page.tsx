"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { registerAccount } from "@/lib/registerAccount";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerAccount(password, confirmPassword, email);
    router.push("/login");
  };

  return (
    <div className="w-72 mx-auto mt-20">
      <form action="" className="w-full p-0 " onSubmit={handleSubmit}>
        <legend>
          <label htmlFor="address">Email address:</label>
          <br />
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            name="address"
            id="address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />{" "}
          <br />
          <label htmlFor="Password">Set Password</label>
          <br />
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            placeholder="********"
          />{" "}
          <br />
          <label htmlFor="ConfirmPassword">Confirm Password </label>
          <br />
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="Confirmpassword"
            id="Confirmpassword"
            placeholder="********"
          />{" "}
          <br />
          <div className="text-end">
            <button type="submit" className="btn btn-accent my-2 mr-4">
              Create Account
            </button>
          </div>
        </legend>
      </form>
    </div>
  );
};

export default Register;
