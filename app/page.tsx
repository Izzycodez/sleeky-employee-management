import React from "react";
import Image from "next/image";
import sleeky from "@/images/sleekyProgrammers.jpg";

const page = () => {
  return (
    <div className="min-h-[76vh] max-sm:m-5 min-[400px]:min-h-[81vh]">
      <h1 className="text-center text-2xl">Sleeky Employee Management</h1>
      <Image
        src={sleeky}
        alt="Sleeky Test Logo"
        width={700}
        height={100}
        className="m-4 mx-auto rounded-lg"
      />
      <p className="text-center">Let&apos;s change your ideas into codes </p>
      <p>Powered by Next.js</p>
      <p>Build Date: {new Date().toLocaleDateString()}</p>
      <p>GitHub Repo:</p>
    </div>
  );
};

export default page;
