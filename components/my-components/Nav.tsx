"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-8">
        {headerLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.route}
              className={`${
                pathname === link.route
                  ? "text-accent border-b-2 border-accent"
                  : "text-white"
              } capitalize hover:text-accent font-medium transition-all ease-in `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
