import React from "react";
import Image from "next/image";
import sleeky from "@/images/sleekyProgrammers.jpg";

const page = () => {
  return (
    <div className="max-sm: m-5">
      <h1 className="text-center text-2xl">Welcome to SleekyProgrammers</h1>

      <Image
        src={sleeky}
        alt="Sleeky Test Logo"
        width={700}
        height={100}
        className="m-4 mx-auto rounded-lg"
      />
      <p className="text-center">Let's change your ideas into codes </p>
      <p>Powered by Next.js</p>
      <p>Build Date: {new Date().toLocaleDateString()}</p>
      <p>GitHub Repo:</p>
    </div>
  );
};

export default page;
