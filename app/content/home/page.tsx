import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ width: "80%" }}>
      <div className="bg-[#F1F5F9] p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center p-4 bg-grey-100 shadow-md margin-16 max-h-[300px]">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                last product viewed
              </h3>
              <div className="text-gray-600">
                <p className="mb-1">Rolex Submariner</p>
                <p className="mb-1">Luxury Diver&apos;s Watch</p>
              </div>
            </div>
            <div className="text-lg font-semibold">$5999.99</div>
          </div>
          <img
            alt="Rolex Submariner"
            className="mt-4"
            height={60}
            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSZMQ7g-63j-of7PdluFwp84-2kfHrHmohHjBvjsBf8P_M8U88UknjwpZt9oEvkMMawfjILAqNq-ds2Tecc2KAxNXsmsayuPlKoIkrRj84lkBYTfdKQL6p3yMSYzIS6YySYXi6DzBcAWw&usqp=CAchttps://s.turbifycdn.com/aah/movadobaby/rolex-submariner-date-steel-yellow-gold-men-s-watch-126613lb-0002-44.jpg"
            width={60}
          />
        </div>
        <h3 className="text-lg font-semibold mb-4">Order History</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-lg">
            <Link className="flex space-x-4" href="#">
              <img
                alt="Omega Speedmaster"
                height={40}
                src="https://cdn-dpppa.nitrocdn.com/cYpwxKyuMscTskFbAPIBUstvxqJyheAU/assets/images/optimized/rev-b3a1416/loro.ca/wp-content/uploads/2023/04/21030422003001.png"
                width={40}
              />
              <div>
                <div className="font-medium">Omega Speedmaster</div>
                <div className="text-sm text-gray-500">Jan 24, 2022</div>
              </div>
            </Link>
            <div className="text-lg font-semibold">$2999.99</div>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-lg">
            <Link className="flex space-x-4" href="#">
              <img
                alt="Tag Heuer Carrera"
                height={40}
                src="https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw1afd8907/TAG_Heuer_Carrera/CBN2A1A.FC6537/CBN2A1A.FC6537_1000.png?impolicy=resizeTrim&width=884&height=1106"
                width={40}
              />
              <div>
                <div className="font-medium">Tag Heuer Carrera</div>
                <div className="text-sm text-gray-500">Feb 15, 2022</div>
              </div>
            </Link>
            <div className="text-lg font-semibold">$2499.99</div>
          </div>
          <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-lg">
            <Link className="flex space-x-4" href="#">
              <img
                alt="Seiko Presage"
                height={40}
                src="https://m.media-amazon.com/images/I/61N72k5YYDL._AC_SY879_.jpg"
                width={40}
              />
              <div>
                <div className="font-medium">Seiko Presage</div>
                <div className="text-sm text-gray-500">Feb 15, 2022</div>
              </div>
            </Link>
            <div className="text-lg font-semibold">$599.99</div>
          </div>
        </div>
      </div>
    </div>
  );
}
