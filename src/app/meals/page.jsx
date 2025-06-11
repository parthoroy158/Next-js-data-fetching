"use client"
import React, { useEffect, useState } from 'react';

const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json();
            setMeals(data?.meals || [])
            return data.meals
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [search])
    return (
        <div>
            <div className='text-center mt-10'>
                <p className='font-bold'>Search Dish Name </p>
                <input className='border' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='grid grid-cols-4 gap-5 m-10'>


                {/* <h1>{JSON.stringify(meals)}</h1> */}

                {
                    meals.map(item => {
                        return (
                            <div className='p-5 border m-5'>
                                <p className='font-bold'>{item?.strMeal}</p>
                                <p>Instructions:{item?.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MealsPage;