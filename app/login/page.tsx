"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { loginEmployee } from "@/lib/loginEmployee";

const CreateUser = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await loginEmployee(email, password);
      window.location.href = "/employees";
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  }
  const inputStyle: string =
    "input input-bordered w-full max-w-xs border-2 bg-white px-3";

  return (
    <div className="mx-auto min-h-[83.5vh] w-72 pt-24 max-[640px]:min-h-[85vh]">
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Email address:</label>
        <br />
        <input
          className={inputStyle}
          type="email"
          name="address"
          id="address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="abcd@efg.com"
        />
        <br />

        <div>
          <label htmlFor="password" className="block">
            Enter Password
          </label>
          <div className="input-container">
            <input
              type={isVisible ? "text" : "password"}
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
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full border-0 bg-gray-700 p-2 text-white hover:bg-gray-500"
        >
          {isLoading ? "Logging In..." : "Login"}
        </button>
      </form>
      <p>
        Don&apos;t have an account yet? Click here to{" "}
        <Link href="/register" className="text-blue-700">
          Register...
        </Link>
      </p>
    </div>
  );
};

export default CreateUser;
