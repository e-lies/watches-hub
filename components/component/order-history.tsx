import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export function Navbar({ isOpen, path }: { isOpen: boolean; path: string }) {
  return (
    <div className={isOpen ? "bg-gray-100 p-8" : "hidden"}>
      <div className="flex flex-col md:flex-row" id="navbarMenu">
        <div className="md:w-64 bg-white p-4 shadow-md rounded-lg  md:block">
          <div className="flex items-center mb-6">
            <ArrowLeftIcon className="text-gray-600 h-6 w-6" />
            <h2 className="ml-4 text-lg font-semibold">Order History</h2>
          </div>
          <div className="space-y-4">
            <Link
              className={
                path === "/content/order-history"
                  ? "flex items-center space-x-3 text-orange-500"
                  : "flex items-center space-x-3 text-gray-600"
              }
              href="#"
            >
              <CloudLightningIcon className="h-6 w-6" />
              <span>TrueFalse</span>
            </Link>
            <Link
              className={
                path === "/content/home"
                  ? "flex items-center space-x-3 text-orange-500"
                  : "flex items-center space-x-3 text-gray-600"
              }
              href="/content/home"
            >
              <HomeIcon className="h-6 w-6" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              className={
                path === "/content/products"
                  ? "flex items-center space-x-3 text-orange-500"
                  : "flex items-center space-x-3 text-gray-600"
              }
              href="/content/products"
            >
              <SearchIcon className="h-6 w-6" />
              <span>Recherche</span>
            </Link>
            <Link
              className={
                path === "/content/tracking"
                  ? "flex items-center space-x-3 text-orange-500"
                  : "flex items-center space-x-3 text-gray-600"
              }
              href="/content/tracking"
            >
              <TrainTrackIcon className="h-6 w-6" />
              <span>Traking</span>
            </Link>
          </div>
          <div className="mt-6">
            <div className="flex items-center space-x-3">
              <Link className="flex items-center space-x-3" href="/login">
                <Avatar>
                  <AvatarImage
                    alt="Andrew D."
                    src="/placeholder.svg?height=40&width=40"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Andrew D.</div>
                  <div className="text-sm text-gray-500">admin@gmail.com</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function CloudLightningIcon(props) {
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
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TrainTrackIcon(props) {
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
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
    </svg>
  );
}
