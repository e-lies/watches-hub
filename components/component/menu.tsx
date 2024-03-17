"use client";
import { useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Navbar } from "./order-history";
import { usePathname } from "next/navigation";

export function Menu({ children }: { children: React.ReactElement }) {
  const selected = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center space-x-4">
          <button
            className={`p-2 rounded-md ${
              isOpen ? "bg-gray-200" : "bg-blue-200"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon isOpen={isOpen} />
          </button>
          <Avatar>
            <AvatarImage
              alt="Jenny's Avatar"
              src="/placeholder.svg?height=40&width=40"
            />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <span className="text-lg font-semibold">Welcome, Jenny</span>
        </div>
        <Button className="flex items-center space-x-2" variant="ghost">
          <BellIcon className="h-6 w-6" />
        </Button>
      </header>
      <div className="flex items-start justify-around p-4 bg-gray-100">
        <Navbar path={selected} isOpen={isOpen} />
        {children}
      </div>
    </div>
  );
}

function BellIcon(props: { [key: string]: any }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function MenuIcon(props: { isOpen: boolean }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.isOpen ? "currentColor" : "none"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
