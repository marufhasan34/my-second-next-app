import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { id, dish_name, category, image_link, price, origin_and_popularity } =
    food;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={image_link}
          alt={dish_name}
          width={300}
          height={300}
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>Price : ${price}</p>
        <p>{origin_and_popularity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>

          <Link href={`/foods/${id}`}>
            {" "}
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
