import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <main>
        SIDEBAR
        {children}
    </main>
    
  );
}
