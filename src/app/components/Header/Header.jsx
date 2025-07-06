'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

 const Header = () => {
  return (
    <div className="sticky top-0 z-50">
        <header className="w-full h-16 px-6 flex items-center justify-between border-b-2 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="cursor-e-resize"/>
                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
                <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar className="cursor-pointer">
                    <AvatarImage src="/assets/img/user.png" alt="User" />
                    <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    </div>
  );
}

export default Header;