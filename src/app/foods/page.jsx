import FoodCard from '@/components/FoodCard';
import React from 'react';

const FoodsPage = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json()
    const foods = data.data
    return (
        <div>
            <h2 className='text-5xl font-bold my-9 text-center'>Foods : {foods.length}</h2>
           <div className='grid grid-cols-3 gap-5'>
             {
                foods.map(food => <FoodCard key={food.id} food={food} />)
            }
           </div>
        </div>
    );
};

export default FoodsPage;