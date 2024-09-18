"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { loginEmployee } from "@/lib/loginEmployee";

const CreateUser = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const accessToken = await loginEmployee(email, password);
      console.log("Logged in with token:", accessToken);
      router.push("/employees");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle the error (e.g., show a message to the user)
    }
  }

  return (
    <div className="w-72 mx-auto mt-20">
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Email address:</label>
        <br />
        <input
          className="input input-bordered w-full max-w-xs"
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
          className="input input-bordered w-full max-w-xs"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="text-blue-300 w-full bg-black p-2 border-0 mt-2"
        >
          Login
        </button>
      </form>
      <p>
        Don’t have an account yet? Click here to{" "}
        <Link href="/register" className="text-blue-700">
          Register...
        </Link>
      </p>
    </div>
  );
};

export default CreateUser;
