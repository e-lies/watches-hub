import React from "react";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  name: string;
  creationDate: string;
  price: number;
  image: string;
};

export const Product: React.FC<ProductProps> = ({
  name,
  creationDate,
  price,
  image,
}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md rounded-lg">
      <Link className="flex space-x-4" href="#">
        <img
          alt={name}
          width="40"
          height="40"
          src={image}
          style={{
            aspectRatio: "40/40",
            objectFit: "cover",
          }}
        />
        <div>
          <div className="font-medium"> {name} </div>
          <div className="text-sm text-gray-500"> {creationDate} </div>
        </div>
      </Link>
      <div className="text-lg font-semibold">{`${price} ${process.env.CURRENCY}`}</div>
    </div>
  );
};
