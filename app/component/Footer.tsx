import React from "react";

export default function Footer() {
  return (
    <footer className="-y-5 text-white-200 min-h-[6vh] w-full bg-gray-500 text-center text-sm text-gray-400">
      <p className="pt-2">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
