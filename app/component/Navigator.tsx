"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const Navigator = ({
  pathDirection,
  text,
}: {
  pathDirection: string;
  text: string;
}) => {
  const router = useRouter();
  return (
    <p onClick={() => router.push(pathDirection)} className="cursor-pointer">
      {text}
    </p>
  );
};
