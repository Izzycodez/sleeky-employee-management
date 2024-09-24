"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[82vh] bg-gray-900">
      <h2>Something went wrong...!</h2>
      <h2>
        Seems like you are trying to access a confidential Route without
        <b> Authorisation. </b>{" "}
        <Link href="/Login">Click here to go to the Login page</Link> or
        <Link href="/">Click here to go to the Home page</Link>{" "}
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
