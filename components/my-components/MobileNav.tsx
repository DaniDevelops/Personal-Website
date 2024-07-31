"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { headerLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <AlignRight className="text-accent" size={40} />
      </SheetTrigger>
      <SheetContent className="flex flex-col" side="left">
        <div className="mt-10 mb-10 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="mobile navigation logo"
            width={120}
            height={5}
          />
        </div>
        <nav>
          <ul className="flex flex-col justify-center items-center gap-8">
            {headerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.route}
                  className={`${
                    pathname === link.route &&
                    "text-accent border-b-2 border-accent"
                  } capitalize hover:text-accent font-medium transition-all ease-in `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact" &&
                  "text-accent border-b-2 border-accent"
                } capitalize hover:text-accent font-medium transition-all ease-in `}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
