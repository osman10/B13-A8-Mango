"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-2 py-1 rounded-md transition ${
        isActive ? "text-emerald-600 font-semibold" : "hover:text-emerald-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;