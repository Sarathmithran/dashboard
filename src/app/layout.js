import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./components/Header/Header";
import AppSidebar from "./components/AppSidebar/AppSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cred Dashboard",
  description: "Cred garage inspired dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-screen">
            <Header />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
