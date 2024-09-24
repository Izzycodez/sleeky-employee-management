import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ minHeight: "6vh" }}
      className="-y-5 text-white-200 w-full bg-gray-500 text-center text-sm text-gray-400"
    >
      <p className="pt-2">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
