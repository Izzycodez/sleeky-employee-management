import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-400 text-center text-sm -y-5">
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
