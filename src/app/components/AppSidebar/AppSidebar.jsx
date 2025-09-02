'use client'
import { Calendar, Home, Inbox, Search, Settings, User, Bell, Shield, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

// General menus
const generalItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
]

// Settings menus
const settingsItems = [
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Privacy",
    url: "#",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent className="dark:bg-gray-800 border-r-1">
        {/* Header */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl mt-2 flex items-center">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Dashboard</span>
          </SidebarGroupLabel>
        </SidebarGroup>

        {/* General Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium px-2">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {generalItems.map((item) => {
                const pathname = usePathname();
                const isActive = item.url === '/' && pathname === '/';
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`mb-1 hover:font-semibold ${
                      isActive ? 'font-semibold text-black dark:text-white rounded-md bg-gray-100 dark:bg-gray-900' : ''
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-2 px-3 py-2 rounded-md transition-all hover:dark:bg-gray-900"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium px-2">
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-1 hover:font-semibold">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="hover:dark:bg-gray-900">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Profile at Bottom */}
      <SidebarFooter className="mt-auto p-4 border-t dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-r-1">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md transform hover:scale-102 border border-gray-200 dark:border-gray-600">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
              <Avatar className="cursor-pointer">
                <AvatarImage src="/assets/img/user.png" alt="User" className="rounded-full" />
                <AvatarFallback>ST</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">SARATH TV</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">sarathmithran99@gmail.com</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-sm animate-pulse"></div>
          </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar;