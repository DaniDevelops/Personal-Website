import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className=" text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="website logo" width={147} height={5} />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button asChild className="bg-accent">
            <Link href="/contact">Hit Me Up</Link>
          </Button>
        </div>
        <div className="flex items-center xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
