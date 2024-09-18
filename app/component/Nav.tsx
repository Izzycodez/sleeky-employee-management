"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const navStyles =
    "hover:px-3 rounded-md hover:bg-grey-200  hover:border-2  px-2";
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Employees", href: "/employees" },
    { name: "Login", href: "/login" },
  ];
  const pathName = usePathname();

  return (
    <header className="bg-gray-500 text-white-200 w-full">
      <nav className="flex justify-between items-center w-full sm:px-6 sm:py-4 text-xs sm:text-sm lg:text-md p-1 max-[400px]:flex-col ">
        <Link href="/">
          <div className="flex mb-1 sm:mb-0  max-[280px]:flex-col ">
            <div className="text-yellow-400 text-2xl">Sleeky</div>
            <div className="text-blue-200">Programmers</div>
          </div>
        </Link>
        <div className="flex gap-2 sm:gap-3 md:gap-10 text-white ">
          {navLinks.map((navLink) => {
            const isActive =
              navLink.href === "/"
                ? pathName === "/"
                : pathName.startsWith(navLink.href);
            return (
              <Link
                href={navLink.href}
                key={navLink.name}
                className={
                  isActive
                    ? `font-bold text-blue-400 border-b ${navStyles}`
                    : navStyles
                }
              >
                {navLink.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
