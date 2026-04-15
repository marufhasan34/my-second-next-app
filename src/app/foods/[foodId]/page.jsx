import Image from "next/image";
import React from "react";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const food = data.data;
  console.log(food);
  return (
    <div className="container my-9 flex gap-4 mx-auto">
      <div>
        <Image
          src={food.image_link}
          alt={food.dish_name}
          width={300}
          height={300}
        ></Image>
      </div>
      <p className="">{food.dish_name}</p>
    </div>
  );
};

export default FoodDetailPage;
