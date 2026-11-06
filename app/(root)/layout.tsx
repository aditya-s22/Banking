import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const loggedIn = { firstName: "Aditya", lastName: "Soni" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
      {children}
      </div>

    </main>
  );
}
