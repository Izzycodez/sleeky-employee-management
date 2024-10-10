"use client";
import React, { FormEvent } from "react";
import { useState } from "react";
import { registerAccount } from "@/lib/registerAccount";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerAccount(password, confirmPassword, email);
    setIsLoading(true);
    alert("Account created successfully.");
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 3000);
  };
  const inputStyle =
    "input input-bordered w-full max-w-xs border-2 bg-white px-3";

  return (
    <div className="mx-auto min-h-[83.5vh] w-72 pt-24 max-[640px]:min-h-[85vh]">
      <form action="" className="w-full p-0" onSubmit={handleSubmit}>
        <legend>
          <label htmlFor="address">Email address:</label>
          <br />
          <input
            type="email"
            className="input input-bordered w-full max-w-xs border-2 bg-white px-3"
            name="address"
            id="address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />{" "}
          <br />
          <div>
            <label htmlFor="Password" className="block">
              Set Password
            </label>
            <div className="input-container">
              <input
                type={isVisible2 ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="********"
                className={`${inputStyle} input-style`}
                required
              />
              <span
                className="toggle-visibility"
                onClick={() => setIsVisible2(!isVisible2)}
              >
                {isVisible2 ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block">
              Confirm Password
            </label>
            <div className="input-container">
              <input
                type={isVisible ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="Confirmpassword"
                id="Confirmpassword"
                placeholder="********"
                className={`${inputStyle} input-style`}
                required
              />
              <span
                className="toggle-visibility"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>
          <br />
          <br />
          <div className="text-end">
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full border-0 bg-gray-700 p-2 text-white hover:bg-gray-500"
            >
              {isLoading ? "Creating Account ..." : "Create Account"}
            </button>
          </div>
        </legend>
      </form>
    </div>
  );
};

export default Register;
