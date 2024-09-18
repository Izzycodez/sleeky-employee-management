import React from "react";
import Image from "next/image";
import sleeky from "@/images/sleekyProgrammers.jpg";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Welcome to SleekyProgrammers</h1>

      <Image
        src={sleeky}
        alt="Sleeky Test Logo"
        width={700}
        height={100}
        className="mx-auto rounded-lg m-4"
      />
      <p>This is a test website for Next.js.</p>
      <p>Powered by Next.js</p>
      <p>Build Date: {new Date().toLocaleDateString()}</p>
      <p>GitHub Repo:</p>
    </div>
  );
};

export default page;
