"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MyAlert } from "../shadcn/MyAlert";
import MyAlertDialogue from "../shadcn/MyAlertDialogue";

const Nav = () => {
  function getCookieValue(cookieName: string) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  const accessToken = getCookieValue("token");

  const navStyles =
    "hover:px-3 rounded-md hover:bg-grey-200  hover:border-2  px-2";
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Employees", href: "/employees" },
    { name: accessToken ? "LogOut" : "LogIn", href: "/login" },
  ];
  const pathName = usePathname();
  const handleLogout = () => {
    const now = new Date();
    now.setTime(now.getTime() + 5 * 1000);
    document.cookie = `token=; expires=${now.toUTCString()}; path=/;`;

    // Redirect to login after 5 seconds
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  return (
    <header className="text-white-200 w-full bg-gray-500">
      <nav className="lg:text-md mx-auto flex w-3/4 items-center justify-between p-1 text-xs max-sm:w-full max-[400px]:flex-col sm:px-6 sm:py-4 sm:text-sm">
        <Link href="/">
          <div className="mb-1 flex max-[280px]:flex-col sm:mb-0">
            <div className="text-2xl text-yellow-400">Sleeky</div>
            <div className="text-blue-200">Programmers</div>
          </div>
        </Link>
        <div className="flex gap-2 text-white sm:gap-3 md:gap-10">
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
                    ? `border-b font-bold text-blue-400 ${navStyles}`
                    : navStyles
                }
                onClick={navLink.name === "LogOut" ? handleLogout : undefined}
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
