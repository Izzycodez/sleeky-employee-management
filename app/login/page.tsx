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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await loginEmployee(email, password);
      window.location.href = "/employees";
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-20 min-h-[74vh] w-72">
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Email address:</label>
        <br />
        <input
          className="h-8 w-full rounded-sm border-2 px-3"
          type="email"
          name="address"
          id="address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="abcd@efg.com"
        />
        <br />
        <label htmlFor="Password">Enter Password:</label>
        <br />
        <input
          type="password"
          required
          name="password"
          className="h-8 w-full rounded-sm border-2 px-3"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
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
